import * as React from "react";
import { Button, StyleSheet } from "react-native";
import EditScreenInfo from "../../../../components/EditScreenInfo";
import { useAuth } from "../../../../lib/context/auth/auth.provider";
import { View, Text } from "../../../../theme";

export default function TabOneScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Oneee</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Sign out" onPress={() => signOut()} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
