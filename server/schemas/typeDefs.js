const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Conversation {
    _id: ID
    conversationText: String
    conversationAuthor: String
    createdAt: String
  }

  type Message {
      _id: ID
      createdAt: String
      messageText: String
      messageUser: String
  }



  type Query {
    messages: [Message]!
    message(messageId: ID!): Message
  }

  type Mutation {
    addMessage(messageText: String!, messageUser: String!): Message


  }
`;

module.exports = typeDefs;
