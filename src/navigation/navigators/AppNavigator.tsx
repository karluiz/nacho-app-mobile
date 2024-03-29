import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IScreen } from "../Router";
import { APP_STACK_SCREENS_NAMES } from "../../lib/constants/screens";
import { Activities, Lists, Profile } from "../../screens/App";
import LogginOut from "../../screens/App/LogginOut";

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

function AppNavigator() {
  return (
    <Navigator
      initialRouteName={APP_STACK_SCREENS_NAMES.Activities}
      useLegacyImplementation
    >
      {APP_STACK_SCREENS.map(({ name, component, headerShown }) => {
        const options = { headerShown: headerShown || true };
        return <Screen key={name} {...{ name, component, options }} />;
      })}
    </Navigator>
  );
}

export default AppNavigator;
