const { Conversation, Message } = require('../models');

const resolvers = {
    Query: {
        messages: async () => {
            return Message.find().sort({ createdAt: -1 });
        },

        message: async (parent, { messageId }) => {
            return Message.findOne({ _id: messageId });
        },
    },

    Mutation: {
        addMessage: async (parent, { messageText, messageUser }) => {
            return Message.create({ messageText, messageUser });
        },
    }
};

module.exports = resolvers;
