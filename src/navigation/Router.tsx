import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import RootNavigator from "./navigators/RootNavigator";
import { TAllNavProps } from "./types/NavPropsTypes";

export interface IScreen {
  name: string;
  component: React.FunctionComponent<Screen & TAllNavProps>;
  headerShown?: boolean;
}

export interface IRouter {
  colorScheme: ColorSchemeName;
}

const Router = (props: IRouter) => {
  const { colorScheme } = props;

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Router;
