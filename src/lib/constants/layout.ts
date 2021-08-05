import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export const HEIGHT = height;
export const WIDTH = width;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
