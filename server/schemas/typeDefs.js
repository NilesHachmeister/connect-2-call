const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    siteLanguage: String
    spokenLanguage: String
    isCaller: Boolean
    rating: String
  }

  type Post {
      _id: ID
      taskTitle: String
      createdAt: String
      callLanguage: String
      description: String
      callCategory: String
      payment: Int
      callTime: String
      phoneNumberToCall: String
      postUser: User
      caller: User
      completed: Boolean
    comments: [Comment]
    }
  
    type Comment {
      _id: ID
      commentText: String
      commentAuthor: User
      createdAt: String
    }


  type Auth {
    token: ID
    user: User
  }


  type Query {
    post(postId: ID!): Post
    posts: [Post]!
    user(userId: String!): User
    users:[User]!
  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!, siteLanguage: String, spokenLanguage: String!, isCaller: Boolean!, category: String): Auth

    addPost(taskTitle: String!, callLanguage: String!, description: String!, callCategory: String, payment: Int, callTime: String!, phoneNumberToCall: String!, postUser: String! ): Post

    login(email: String!, password: String!): Auth


    addComment(postId: String!, commentText: String!, commentAuthor: String!): Post

    deletePost(postId: String!): Post

    markAsCompleted(postId: ID!): Post
  }
`;

module.exports = typeDefs;
