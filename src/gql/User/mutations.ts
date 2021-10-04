import { gql } from "@apollo/client";

const REFRESH_ACCESS_TOKEN = gql`
  mutation Mutation($refreshAccessTokenInput: RefreshAccessTokenInput!) {
    refreshAccessToken(refreshAccessTokenInput: $refreshAccessTokenInput) {
      accessToken
    }
  }
`;

const UPDATE_PROFILE = gql`
  mutation UpdateProfileMutation($updateProfileInput: UpdateProfileInput!) {
    updateProfile(updateProfileInput: $updateProfileInput) {
      id
      name
      lastname
      email
      phone
      profileImage
    }
  }
`;

export default {
  UPDATE_PROFILE,
  REFRESH_ACCESS_TOKEN,
};
