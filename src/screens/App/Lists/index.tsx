import { Box, Text } from "native-base";
import * as React from "react";
import { Button } from "react-native";
import { TDrawerScreenNavProps } from "../../../navigation/types/NavPropsTypes";

const Lists = (props: TDrawerScreenNavProps) => {
  const { navigation } = props;

  return (
    <Box>
      <Text>Lists</Text>
      <Box />
      <Button title="Open" onPress={() => navigation.openDrawer()} />
    </Box>
  );
};

export default Lists;
