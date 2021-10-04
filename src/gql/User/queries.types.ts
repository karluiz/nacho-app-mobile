import { IUser } from "../../types/User.types";

export interface IGetUserRes {
  user: IUser;
}

export interface IGetUserInProcessRequestsRes {
  id: string;
}
