import React, { useState, useEffect, useMemo, useContext, FC } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "./auth.context";
import { ASYNC_STORAGE_ITEMS } from "../../constants/asyncStorage";
import { useProfile } from "../profile/profile.provider";
import { useApolloClient } from "@apollo/client";

export type TUserToken = string | null;

export interface IRootNavigator {
  userToken: string;
  loading: boolean;
}

const AuthProvider: FC = ({ children }) => {
  const { setUser, cleanUser } = useProfile();

  const [userToken, setUserToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const client = useApolloClient();

  const signOut = async () => {
    // * Clean async storage
    await AsyncStorage.removeItem(ASYNC_STORAGE_ITEMS.ACCESS_TOKEN);

    // * Clean user from provider
    cleanUser();

    // * Reset Apollo's store
    client.resetStore();

    // * Reset token
    setUserToken("");
  };

  // * Set user token from cached data
  useEffect(() => {
    const setInitialUserToken = async () => {
      let newUserToken: TUserToken = null;
      try {
        newUserToken = await AsyncStorage.getItem(
          ASYNC_STORAGE_ITEMS.ACCESS_TOKEN,
        );
      } catch (error) {
        console.error("error: ", error);
      } finally {
        setUserToken(newUserToken || "");
        setLoading(false);

        // * When there's accesstoken, get user info
        if (newUserToken) {
          setUser();
        }
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
                ASYNC_STORAGE_ITEMS.ACCESS_TOKEN,
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
