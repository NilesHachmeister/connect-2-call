const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

// const Conversation = require('./Post');

const userSchema = new Schema({


    // create categories schema
    // have the category fit in posts
    // have post belong to user



    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    // what language the site will populate in
    siteLanguage: {
        type: String,
        required: true,
    },

    // filters out languanges you dont speak
    spokenLanguage: {
        type: String,
        required: true,
    },

    // if false, it is a user
    isCaller: {
        type: Boolean,
        required: true,
    },

    rating: {
        type: Number,
        min: 0,
        default: 0,
    },

});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = bcrypt.genSaltSync(10);
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;