import * as React from "react";
import { Text } from "../theme";
import { TTextProps } from "../theme/components/Text";

const MonoText = (props: TTextProps) => {
  const { style } = props;
  return (
    <Text {...props} style={[style, { fontFamily: "space-mono" }]} />
  );
};

export default MonoText;
