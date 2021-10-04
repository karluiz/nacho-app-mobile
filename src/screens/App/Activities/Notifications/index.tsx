import { Box, Text } from "native-base";
import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { useAuth } from "../../../../lib/context/auth/auth.provider";

export default function Notifications() {
  const { signOut } = useAuth();

  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Box style={styles.separator} />
      <Button title="Sign out" onPress={() => signOut()} />
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
