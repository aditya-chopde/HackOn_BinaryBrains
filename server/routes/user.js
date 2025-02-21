const express = require("express");
const { handleUserLogin, handleUserSignup } = require("../controllers/userControllers");
const router = express();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;