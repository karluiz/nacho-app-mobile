import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "./src/theme/hooks/useColorScheme";
import useCachedResources from "./src/lib/hooks/useCachedResources";
import Router from "./src/navigation/Router";
import AuthProvider from "./src/lib/context/auth/auth.provider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Router colorScheme={colorScheme} />
        </AuthProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
