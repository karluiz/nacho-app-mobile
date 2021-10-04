import { IBase } from "./Base.types";

export interface IUser extends IBase {
  active?: boolean;
  name: string;
  lastname?: string;
  email: string;
  password?: string;
  phone?: string;
  profileImage?: string;
}
