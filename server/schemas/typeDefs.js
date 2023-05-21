const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    sessions: [Session]!
  }

  type Session {
    _id: ID
    sessionText: String
    sessionAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    sessions(username: String): [Session]
    session(sessionId: ID!): Session
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSession(sessionText: String!): Session
    addComment(sessionId: ID!, commentText: String!): Session
    removeSession(sessionId: ID!): Session
    removeComment(sessionId: ID!, commentId: ID!): Session
  }
`;

module.exports = typeDefs;
