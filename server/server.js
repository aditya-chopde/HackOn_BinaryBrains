const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 3000;
require('dotenv').config()

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//Getting all routes

//Connecting DB
const connectDB = require("./connect");
connectDB("mongodb://localhost:27017/vitaGenix").then(() => {
    console.log("DB Connected...")
})

app.get("/", async (req, res)=>{
    return res.json({success: true, message: "Api Working"})
})

app.listen(port, () => {
    console.log("Server Started at PORT " + port)
})
