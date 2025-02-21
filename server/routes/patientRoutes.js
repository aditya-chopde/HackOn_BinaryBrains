const express = require("express");
const { generateReportHandler } = require("../controllers/patientControllers");
const router = express();

router.post("/generate-plan", generateReportHandler);

module.exports = router;