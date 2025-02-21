const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requied: true,
    },
    age: {
        type: Number,
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
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", userSchema);

module.export = User;