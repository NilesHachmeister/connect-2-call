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

  
  payment: {

    type: String,
    required: true,

},


  // time frame?
  // messages


});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
