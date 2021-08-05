import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_ITEMS } from "../lib/constants/asyncStorage";

const httpLink = new HttpLink({
  uri: "https://nest-generic-backend.ndrz.io/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const userToken = await AsyncStorage.getItem(ASYNC_STORAGE_ITEMS.USER_TOKEN);

  return {
    headers: {
      ...headers,
      Authorization: userToken ? `Bearer ${userToken}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      MyRoute: {
        keyFields: ["id"],
      },
    },
  }),
  link: authLink.concat(httpLink),
});

export default client;
