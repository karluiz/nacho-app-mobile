import React, { useState, useEffect, useMemo, useContext, FC } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useApolloClient } from "@apollo/client";
import AuthContext from "./auth.context";
import { ASYNC_STORAGE_ITEMS } from "../../constants/asyncStorage";

export type TUserToken = string | null;

export interface IRootNavigator {
  userToken: string;
  loading: boolean;
}

const AuthProvider: FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  // const client = useApolloClient();

  const signOut = async () => {
    await AsyncStorage.removeItem(ASYNC_STORAGE_ITEMS.USER_TOKEN);
    await AsyncStorage.removeItem(ASYNC_STORAGE_ITEMS.HAS_ACCEPTED_TCS);
    // client.resetStore();
    setUserToken("");
  };

  // * Set user token from cached data
  useEffect(() => {
    const setInitialUserToken = async () => {
      let newUserToken: TUserToken = null;
      try {
        newUserToken = await AsyncStorage.getItem(
          ASYNC_STORAGE_ITEMS.USER_TOKEN,
        );
      } catch (error) {
        console.error("error: ", error);
      } finally {
        setUserToken(newUserToken || "");
        setLoading(false);
      }
    };

    setInitialUserToken();
  }, []);

  // * Set contexts values
  const authContext = useMemo(
    () => ({
      signIn: async (token?: string) =>
        new Promise<void>((resolve, reject) => {
          const doSignIn = async () => {
            try {
              await AsyncStorage.setItem(
                ASYNC_STORAGE_ITEMS.USER_TOKEN,
                token || "",
              );
              setUserToken(token || "");
              resolve();
            } catch (error) {
              console.error("error: ", error);
              reject();
            }
          };

          doSignIn();
        }),
      signOut,
      userToken,
      authLoading: loading,
    }),
    [userToken, loading],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
