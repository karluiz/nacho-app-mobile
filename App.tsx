import "react-native-gesture-handler";
import React from "react";
import useColorScheme from "./src/theme/hooks/useColorScheme";
import useCachedResources from "./src/lib/hooks/useCachedResources";
import Router from "./src/navigation/Router";
import AuthProvider from "./src/lib/context/auth/auth.provider";
import { NativeBaseProvider, ColorMode, StatusBar } from "native-base";
import type { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import theme from "./src/theme";
import { ASYNC_STORAGE_ITEMS } from "./src/lib/constants/asyncStorage";
import nativeBaseProviderConfig from "./src/config/nativeBaseProvider";
import { ApolloProvider } from "@apollo/client";
import client from "./src/config/apolloClient";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem(
          ASYNC_STORAGE_ITEMS.APP_COLOR_MODE,
        );
        return val === "dark" ? "dark" : "light";
      } catch (e) {
        return "light";
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem(ASYNC_STORAGE_ITEMS.APP_COLOR_MODE, value);
      } catch (e) {
        console.error(e);
      }
    },
  };

  // const Drawer = createDrawerNavigator();

  if (!isLoadingComplete) return null;

  return (
    <ApolloProvider {...{ client }}>
      <NativeBaseProvider
        {...{ theme, colorModeManager, config: nativeBaseProviderConfig }}
      >
        <StatusBar />
        <AuthProvider>
          <Router colorScheme={colorScheme} />
        </AuthProvider>
        <StatusBar />
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
