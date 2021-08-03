/* eslint-disable no-nested-ternary */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../../lib/context/auth/auth.provider";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { Text, View } from "../../theme";
import layout from "../../lib/constants/layout";

const RootStack = createStackNavigator();

const LoadingScreen = () => (
  <View
    style={{
      height: layout.window.height,
      width: layout.window.width,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>Loading...</Text>
  </View>
);

const RootNavigator = () => {
  const { userToken, authLoading } = useAuth();

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      {authLoading ? (
        <RootStack.Screen name="Loading" component={LoadingScreen} />
      ) : userToken ? (
        <RootStack.Screen name="AppNavigator" component={AppNavigator} />
      ) : (
        <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;