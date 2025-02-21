const Patient = require("../models/");

async function generateReportHandler(req, res) {
    const patientData = req.body;
    const treatmentPlan = await generateTreatmentPlan(patientData);

    const patient = new Patient({ ...patientData, treatmentPlan });
    await patient.save();

    res.json({ treatmentPlan });
}

module.exports = {
    generateReportHandler,
} 