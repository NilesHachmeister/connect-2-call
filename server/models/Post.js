const mongoose = require('mongoose');

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
    required: true,
  },

  payment: {

    type: String,
    required: true,

  },


  callTime: {

    type: String,
    required: true,

  },

  comments: {

    type: String,
    required: true,

  },

  phoneNumberToCall: {

    type: String,
    required: true,

  },

  postUser: {

    type: String,
    required: true,

  },

  caller: {
    type: String,
    // user
  },

  rating: {

    type: String,
    required: true,

  },



});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
