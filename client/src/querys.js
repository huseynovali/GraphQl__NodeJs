import { gql }  from "@apollo/client";

export const GET_Users = gql`
  query GetUser {
    getUsers {
      username
      email,
      videos {
        title
        description
      }
      
    }
  }
`;


