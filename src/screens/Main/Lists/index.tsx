import { Box, Text } from "native-base";
import * as React from "react";
import { Button } from "react-native";

/* eslint-disable-next-line */
export default function Lists({ navigation }: { navigation: any }) {
  return (
    <Box>
      <Text>Lists</Text>
      <Box />
      <Button title="Open" onPress={() => navigation.openDrawer()} />
    </Box>
  );
}
