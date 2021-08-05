import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IScreen } from "../Router";
import { APP_STACK_SCREENS_NAMES } from "../../lib/constants/screen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Activities, Lists, Profile } from "../../screens/Main";

type IScreens = Array<IScreen>;
export const APP_STACK_SCREENS: IScreens = [
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

// const { Navigator, Screen } = createDrawerNavigator();
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <Navigator>
    {APP_STACK_SCREENS.map(({ name, component, headerShown }) => {
      const options = { headerShown: headerShown || false };
      return <Screen key={name} {...{ name, component, options }} />;
    })}
  </Navigator>
);

export default AppNavigator;
