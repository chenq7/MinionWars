const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    coins: {
        type: Number, 
        default: 1000,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});




const User = mongoose.model('User', UserSchema);
module.exports = User;
