import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "native-base";
import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { APP_STACK_SCREENS_NAMES } from "../../../lib/constants/screens";
import { useAuth } from "../../../lib/context/auth/auth.provider";
import { Nav } from "../../../navigation/types/NavPropsTypes";

export default function Profile() {
  const { signOut } = useAuth();
  const { navigate } = useNavigation<Nav>();

  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Box style={styles.separator} />
      <Button title="Sign out" onPress={() => signOut()} />
      <Button
        title="Activites"
        onPress={() => navigate(APP_STACK_SCREENS_NAMES.Activities)}
      />
    </Box>
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
