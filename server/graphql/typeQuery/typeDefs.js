const { gql } = require("apollo-server");

module.exports = gql`
  type Video {
    title: String
    description: String
  }
  type User {
    _id: ID
    username: String
    email: String
    videos: [Video]
  }

  type Query {
    getUsers: [User]
    getUserById(userId: ID): User
  }
  input Input {
    username: String
    email: String
  }
  input UpdateUserInput {
    username: String
    email: String

  }

  type Mutation {
    createUser(body: Input): User
    updateUser(userId: ID!, updateInput: UpdateUserInput!): User
  }
`;
