import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens/Auth";
import { IScreen } from "../Router";
import { AUTH_STACK_SCREENS_NAMES } from "../../lib/constants/screens";
import Register from "../../screens/Auth/Register";

type IScreens = Array<IScreen>;
export type IAuthScreens = Array<IScreen>;
export const AUTH_STACK_SCREENS: IScreens = [
  {
    name: AUTH_STACK_SCREENS_NAMES.Login,
    component: Login,
  },
  {
    name: AUTH_STACK_SCREENS_NAMES.Register,
    component: Register,
  },
];

const { Navigator, Screen } = createStackNavigator();

function AuthNavigator() {
  return (
    <Navigator>
      {AUTH_STACK_SCREENS.map(({ name, component, headerShown }) => {
        const options = { headerShown: headerShown || false };
        return <Screen key={name} {...{ name, component, options }} />;
      })}
    </Navigator>
  );
}

export default AuthNavigator;
