import { extendTheme } from "native-base";

interface IColors {
  [colorGroup: string]: {
    [weight: number]: string;
  };
}

// * 900 - darkest
// * 500 - base color
// * 50 - lightest
// * Get all the colors: https://smart-swatch.netlify.app/
const colors: IColors = {
  primary: {
    50: "#eee7ff",
    100: "#cab9fc",
    200: "#a78cf4",
    300: "#845eee",
    400: "#6130e8",
    500: "#7547f1",
    600: "#3811a2",
    700: "#270c75",
    800: "#170748",
    900: "#09011d",
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export interface IColorScheme {
  colorScheme: string;
}
export interface IColorMode {
  colorMode: string;
}
const components = {
  Box: {
    baseStyle: {},
    defaultProps: {},
  },

  Button: {
    baseStyle: ({ colorMode }: IColorMode) => ({
      _text: {
        color: colorMode === "dark" ? "white" : "red",
      },
    }),
    defaultProps: {
      colorScheme: "primary",
    },
  },

  Link: {
    baseStyle: {
      _text: { fontSize: "xs", fontWeight: "700" },
    },
  },

  Heading: {
    baseStyle: ({ colorMode }: IColorMode) => ({
      color: colorMode === "dark" ? "primary.100" : "primary.500",
    }),
  },
};

const theme = extendTheme({ colors, config, components });

export default theme;
