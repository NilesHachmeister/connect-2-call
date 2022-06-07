const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const { Schema } = mongoose;

const postSchema = new Schema({



  taskTitle: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  callLanguage: {
    type: String,
    required: true,
  },


  description: {
    type: String,
    required: true,
  },

  callCategory: {
    type: String,
  },

  payment: {

    type: String,
    required: true,

  },


  callTime: {

    type: String,
    required: true,

  },

  phoneNumberToCall: {
    type: String,
    required: true,
  },

  postUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  caller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },


  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],


});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
