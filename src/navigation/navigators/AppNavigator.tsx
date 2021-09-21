import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IScreen } from "../Router";
import { APP_STACK_SCREENS_NAMES } from "../../lib/constants/screen";
import { Activities, Lists, Profile } from "../../screens/Main";
import LogginOut from "../../screens/Main/LogginOut";

type IScreens = Array<IScreen>;
export const APP_STACK_SCREENS: IScreens = [
  {
    name: APP_STACK_SCREENS_NAMES.LogginOut,
    component: LogginOut,
  },
  {
    name: APP_STACK_SCREENS_NAMES.Activities,
    component: Activities,
  },
  {
    name: APP_STACK_SCREENS_NAMES.Lists,
    component: Lists,
  },
  {
    name: APP_STACK_SCREENS_NAMES.Profile,
    component: Profile,
  },
];

const { Navigator, Screen } = createDrawerNavigator();

const AppNavigator = () => (
  <Navigator initialRouteName={APP_STACK_SCREENS_NAMES.Profile}>
    {APP_STACK_SCREENS.map(({ name, component, headerShown }) => {
      const options = { headerShown: headerShown || true };
      return <Screen key={name} {...{ name, component, options }} />;
    })}
  </Navigator>
);

export default AppNavigator;
