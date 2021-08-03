import { createContext } from "react";

interface IAuthMethods {
  signIn: (token?: string) => Promise<void>;
  signOut: () => void;
  userToken: string;
  authLoading: boolean;
}
const authMethods: IAuthMethods = {
  signIn: () => new Promise<void>(() => null),
  signOut: () => null,
  userToken: "",
  authLoading: false,
};
const AuthContext = createContext<IAuthMethods>(authMethods);

export default AuthContext;
