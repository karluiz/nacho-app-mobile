import React from "react";
import { Center, IBoxProps, useColorMode } from "native-base";
import LottieView from "lottie-react-native";

import darkLoadingAnim from "../../assets/json/site-loader-dark.json";
import lightLoadingAnim from "../../assets/json/site-loader-light.json";

interface ILoadingScreen extends IBoxProps {
  text?: string;
  iconH?: number;
  iconW?: number;
  isFullScreen?: boolean;
}

export const LoadingScreen = (props: ILoadingScreen) => {
  const { iconH = 110, iconW = 110, isFullScreen = true, ...boxProps } = props;

  const { colorMode } = useColorMode();

  const bgStyle = isFullScreen
    ? {
      _light: {
        backgroundColor: "gray.100",
      },
      _dark: {
        backgroundColor: "gray.900",
      },
    }
    : {};

  return (
    <Center flex={1} {...bgStyle} {...boxProps}>
      <LottieView
        style={{
          width: iconW,
          height: iconH,
        }}
        source={colorMode === "dark" ? darkLoadingAnim : lightLoadingAnim}
        loop
        autoPlay
      />
    </Center>
  );
};
