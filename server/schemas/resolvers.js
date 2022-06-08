const { User, Post } = require('../models');
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

        users: async () => {
            return User.find().sort({ createdAt: -1 });
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

        deletePost: async (parent, { postId }, context) => {
            // if (context.user) {

            return User.findOneAndRemove(
                { _id: postId }
            );
            
            // }
            // throw new AuthenticationError('You need to be logged in!');
        },



        markAsCompleted: async (parent, { postId }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate(
                    { _id: postId },
                    {
                        $set: {
                            completed: true,
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
