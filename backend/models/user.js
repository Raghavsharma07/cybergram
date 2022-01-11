const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 5,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        max: 100,
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    profilePicture: {
        type: String,
        default: '',
    },
});
module.exports = mongoose.model('User', UserSchema);
