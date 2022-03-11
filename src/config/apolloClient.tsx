import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_ITEMS } from "../lib/constants/asyncStorage";
import { gqlUser } from "../gql";

import * as RootNavigation from "../lib/navigation";
import { APP_STACK_SCREENS_NAMES } from "../lib/constants/screens";
import {
  IRefreshAccessTokenInput,
  IRefreshAccessTokenRes,
} from "../gql/User/mutations.types";

// eslint-disable-next-line
let apolloClient: ApolloClient<NormalizedCacheObject>;

const uri = "https://nest-generic-backend.ndrz.io/graphql";

const httpLink = new HttpLink({ uri });

// eslint-disable-next-line
const authLink = setContext(async (_, params) => {
  const { headers } = params;
  const accessToken = await AsyncStorage.getItem(
    ASYNC_STORAGE_ITEMS.ACCESS_TOKEN,
  );

  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const getNewToken = async () => {
  const token = await AsyncStorage.getItem(ASYNC_STORAGE_ITEMS.REFRESH_TOKEN);

  const response = await apolloClient.mutate<
    IRefreshAccessTokenRes,
    IRefreshAccessTokenInput
  >({
    mutation: gqlUser.mutations.REFRESH_ACCESS_TOKEN,
    variables: {
      refreshAccessTokenInput: {
        refreshToken: `${token}`,
      },
    },
  });

  if (response.data?.refreshAccessToken) {
    await AsyncStorage.setItem(
      ASYNC_STORAGE_ITEMS.ACCESS_TOKEN,
      `${response.data.refreshAccessToken.accessToken}`,
    );
  }

  return response.data?.refreshAccessToken.accessToken || "";
};

const onErrorLink = onError((params) => {
  const { graphQLErrors, operation, forward } = params;
  graphQLErrors?.forEach((err) => {
    // * Log error nicely
    let error = "\nGQL ERROR {\n";
    error += `    message: ${err.message}\n`;
    error += `    operation: ${operation.operationName}\n`;
    error += `    query: ${JSON.stringify(err.path)}\n`;
    error += `    variables: ${JSON.stringify(operation.variables)}\n`;
    error += "}\n";
    console.error(error);

    const { status } = err?.extensions?.exception as { status: number };
    if (status) {
      switch (status) {
        case 422:
          // * If invalid refresh token, sign out
          RootNavigation.navigate("AppNavigator", {
            screen: APP_STACK_SCREENS_NAMES.LogginOut,
          });
          break;
        case 401:
          // * If unauthorized, try to refresh token
          return fromPromise(
            getNewToken().catch((e) => {
              console.error("401 error ", e);
            }),
          )
            .filter((value) => !!value)
            .flatMap((accessToken) => {
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  Authorization: `Bearer ${accessToken}`,
                },
              });

              return forward(operation);
            });
        default:
          break;
      }
    }

    return undefined;
  });

  return undefined;
});

const authFlowLink = authLink.concat(onErrorLink);
const link = authFlowLink.concat(httpLink);

apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link,
});

export default apolloClient;
