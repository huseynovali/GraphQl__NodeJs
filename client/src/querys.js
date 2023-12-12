import { gql }  from "@apollo/client";

export const GET_Users = gql`
  query GetUser {
    getUsers {
      _id,
      username,
      email,
  
      
    } 
  }
`;

 
