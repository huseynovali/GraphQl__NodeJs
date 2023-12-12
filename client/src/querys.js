import { gql } from "@apollo/client";

export const GET_Users = gql`
  query GetUsers {
    getUsers {
      _id
      username
      email
    }
  }
`;

export const GET_User = gql`
  query GetUser($userId: ID) {
    getUserById(userId: $userId) {
      _id
      username
      email
      videos 
        {
          title
          description
        }
       
   
      
    }
  }
`;
