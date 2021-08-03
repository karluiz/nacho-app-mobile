import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IScreen } from "../Router";
import { Home } from "../../screens/App";
import { APP_STACK_SCREENS_NAMES } from "../../lib/constants/screen";

type IScreens = Array<IScreen>;
export const APP_STACK_SCREENS: IScreens = [
  {
    name: APP_STACK_SCREENS_NAMES.Home,
    component: Home,
  },
];

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <Navigator headerMode="none">
    {APP_STACK_SCREENS.map(({ name, component, headerShown }) => {
      const options = { headerShown: headerShown || false };
      return <Screen key={name} {...{ name, component, options }} />;
    })}
  </Navigator>
);

export default AppNavigator;
