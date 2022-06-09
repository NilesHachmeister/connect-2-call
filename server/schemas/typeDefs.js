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
      payment: String
      callTime: String
      phoneNumberToCall: String
      postUser: String
      caller: User
      completed: Boolean
    comments: [Comment]
    }
  
    type Comment {
      _id: ID
      commentText: String
      commentAuthor: String
      createdAt: String
    }


  type Auth {
    token: ID
    user: User
  }


  type Query {
    post(postId: ID!): Post
    posts: [Post]!
    user(userId: ID!): User
    users:[User]!
  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!, siteLanguage: String!, spokenLanguage: String!, isCaller: Boolean!, category: String): Auth

    addPost(taskTitle: String!, callLanguage: String!, description: String!, callCategory: String, payment: String, callTime: String!, phoneNumberToCall: String!, postUser: String! ): Post

    login(email: String!, password: String!): Auth


    addComment(postId: ID!, commentText: String!): Post

    deletePost(postId: ID!): Post

    markAsCompleted(postId: ID!): Post
  }
`;

module.exports = typeDefs;
