/* eslint-disable no-nested-ternary */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "native-base";
import { useAuth } from "../../lib/context/auth/auth.provider";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import layout from "../../lib/constants/layout";

const RootStack = createStackNavigator();

function LoadingScreen() {
  return (
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
}

function RootNavigator() {
  const { userToken, authLoading } = useAuth();
  console.log("userToken: ", userToken);

  return (
    <RootStack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
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
}

export default RootNavigator;
