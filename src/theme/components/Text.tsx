import * as React from "react";
import { Text as DefaultText } from "react-native";
import useThemeColor from "../hooks/useThemeColor";
import { IThemeProps } from "../theme.types";

export type TTextProps = IThemeProps & DefaultText["props"];

const Text = (props: TTextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export default Text;
