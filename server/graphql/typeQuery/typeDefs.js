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


`;
