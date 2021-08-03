import { StackScreenProps } from "@react-navigation/stack";

// * Screens Props Types
type StackParamsList = {
  screen: Record<string, unknown>;
};

// * Login props
export type TLoginNavProps = StackScreenProps<StackParamsList, "screen">;

// * Home props
export type THomeNavProps = StackScreenProps<StackParamsList, "screen">;

// * Export all types as one type
export type TAllNavProps = TLoginNavProps & THomeNavProps;
