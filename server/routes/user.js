const express = require("express");
const { handleUserLogin, handleUserSignup, getUserTreatmentPlans, getSingleTreatmentPlan } = require("../controllers/userControllers");
const router = express();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/plans/:id", getUserTreatmentPlans);
router.get("/single-plan/:id", getSingleTreatmentPlan);

module.exports = router;