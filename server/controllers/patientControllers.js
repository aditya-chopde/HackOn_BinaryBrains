const Patient = require("../models/patientModel");
const User = require("../models/user")
const generateTreatmentPlan = require("../controllers/generateTreatmentPlan")

async function generateReportHandler(req, res) {
    const {useId} = req.body;
    const userData = await User.findById({_id: useId});
    const patientData = req.body;
    const treatmentPlan = await generateTreatmentPlan(userData, patientData);

    const patient = new Patient({ ...patientData, treatmentPlan });
    await patient.save();

    return res.json({ treatmentPlan });
}

module.exports = {
    generateReportHandler,
} 