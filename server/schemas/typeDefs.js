const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    siteLanguage: String
    spokenLanguage: String
    isCaller: Boolean
    category: String
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
      postUser: User
      caller: User
      comments: [Comment]!
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
  }

  type Mutation {
    const { User, Post, Comment } = require('../models');
    const { signToken } = require('../utils/auth');
    const { AuthenticationError } = require('apollo-server-express');
    
    const resolvers = {
        Query: {
            posts: async () => {
                return Post.find().sort({ createdAt: -1 });
            },
    
            post: async (parent, { postId }) => {
                return Post.findOne({ _id: postId });
            },
    
            user: async (parent, { userId }) => {
                return User.findOne({ _id: userId });
            },
        },
    
        Mutation: {
            addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);
                return { token, user };
            },
    
    
            addPost: async (parent, args) => {
                const post = await Post.create(args);
                return { post };
            },
    
    
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });
    
                if (!user) {
                    throw new AuthenticationError('Incorrect credentials');
                }
    
                const correctPw = await user.isCorrectPassword(password);
    
                if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
                }
    
                const token = signToken(user);
    
                return { token, user };
            },
    
    
    
            addComment: async (parent, { postId, commentText }, context) => {
                if (context.user) {
                    return Post.findOneAndUpdate(
                        { _id: postId },
                        {
                            $addToSet: {
                                comments: { postText, commentAuthor: context.user.username },
                            },
                        },
                        {
                            new: true,
                            runValidators: true,
                        }
                    );
                }
                throw new AuthenticationError('You need to be logged in!');
            },
    
    
        }
    };
    
    module.exports = resolvers;
    
    addUser(name: String!, email: String!, password: String!, siteLanguage: String!, spokenLanguage: String!, isCaller: Boolean!, category: String, rating: String ): Auth

    addPost(taskTitle: String!, createdAt: String, callLanguage: String!, description: String!, callCategory: String, payment: String, callTime: String!, phoneNumberToCall: String! ): Post

    login(email: String!, password: String!): Auth


    addComment(postId: ID!, commentText: String!): Post

  }
`;

module.exports = typeDefs;
