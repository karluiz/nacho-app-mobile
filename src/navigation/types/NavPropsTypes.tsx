import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

// * Screens Props Types
type StackParamsList = {
  screen: Record<string, unknown>;
};

// * Regular Screen props
export type TRegularScreenNavProps = StackScreenProps<
  StackParamsList,
  "screen"
>;

export type TDrawerScreenNavProps = DrawerScreenProps<
  StackParamsList,
  "screen"
>;

// * Login props
export type TLoginNavProps = StackScreenProps<StackParamsList, "screen">;

// * Home props
export type THomeNavProps = StackScreenProps<StackParamsList, "screen">;

// * Export all types as one type
export type TAllNavProps = TRegularScreenNavProps &
  TDrawerScreenNavProps &
  TLoginNavProps &
  THomeNavProps;

export type Nav = {
  navigate: (value: string) => void;
};
