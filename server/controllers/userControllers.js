const User = require("../models/user")
const {setUser} = require("../auth")
const bcrypt = require("bcrypt")

async function handleUserSignup(req, res) {
    try {
        const { name, email, age, weight, height, gender, password } = req.body;
        const exists = await User.findOne({ email });
        if (exists) return res.json({ success: false, message: "User already exists", action: "Got to the login page" })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const createUser = await User.create({
            name, email, age, weight, height, gender,
            password: hash,
        })

        const token = setUser({ email, password })
        return res.send({ success: true, createUser, token })

    } catch (err) {
        return res.send({ success: false, error: err })
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    try {
        const find = await User.findOne({
            email
        })

        if (!find) return res.json({ success: false, msg: "user not found" })

        const matchPass = await bcrypt.compare(password, find.password)

        if (!matchPass) return res.json({ sucess: false, message: "something went wrong" })

        const token = setUser({ email, password })
        return res.json({ success: true, find, token })

    } catch (err) {
        return res.json({ success: false, error: err })
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}