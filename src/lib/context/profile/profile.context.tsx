import { createContext } from "react";
import { IUser } from "../../../types/User.types";

export interface IProfileContext {
  user: IUser | null;
  setUser: (user?: IUser) => Promise<void>;
  cleanUser: () => void;
}

const ProfileContextMethods = {
  user: null,
  setUser: async () => undefined,
  cleanUser: () => undefined,
};

export const ProfileContext = createContext<IProfileContext>(
  ProfileContextMethods,
);
