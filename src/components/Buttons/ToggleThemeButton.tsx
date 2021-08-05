import * as React from "react";
import { Icon, IconButton, useColorMode } from "native-base";
import { Feather } from "@expo/vector-icons";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onPress={toggleColorMode}
      icon={(
        <Icon
          as={
            colorMode === "dark" ? (
              <Feather name="sun" size={24} color="black" />
            ) : (
              <Feather name="moon" size={24} color="black" />
            )
          }
          color="muted.700"
          size="sm"
        />
      )}
    />
  );
};

export default ToggleThemeButton;
