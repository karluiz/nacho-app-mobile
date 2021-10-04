import { gql } from "@apollo/client";

const USER = gql`
  query Query {
    user {
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
  USER,
};
