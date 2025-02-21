const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        requied: true,
    },
    age: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        requied: true,
    },
    gender: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;