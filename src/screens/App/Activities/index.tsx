import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import useColorScheme from "../../../theme/hooks/useColorScheme";
import Home from "./Home";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Search from "./Search";

const BottomTabNavigator = createBottomTabNavigator();

export default function Activities() {
  const colorScheme = useColorScheme();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
