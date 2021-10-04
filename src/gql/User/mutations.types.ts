import { IUser } from "../../types/User.types";

export interface IRefreshAccessTokenRes {
  refreshAccessToken: {
    accessToken: string;
  };
}
export interface IRefreshAccessTokenInput {
  refreshAccessTokenInput: {
    refreshToken: string;
  };
}

export interface IUpdateProfileRes {
  updateProfile: IUser;
}
export interface IUpdateProfileInput {
  updateProfileInput: {
    name?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    profileImage?: string;
  };
}
