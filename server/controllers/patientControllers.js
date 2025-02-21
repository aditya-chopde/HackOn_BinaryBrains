const Patient = require("../models/patientModel");
const generateTreatmentPlan = require("../controllers/generateTreatmentPlan")

async function generateReportHandler(req, res) {
    const patientData = req.body;
    const treatmentPlan = await generateTreatmentPlan(patientData);

    const patient = new Patient({ ...patientData, treatmentPlan });
    await patient.save();

    return res.json({ treatmentPlan });
}

module.exports = {
    generateReportHandler,
} 