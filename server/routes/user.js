const express = require("express");
const { handleUserLogin, handleUserSignup, getUserTreatmentPlans } = require("../controllers/userControllers");
const router = express();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/plans/:id", getUserTreatmentPlans)

module.exports = router;