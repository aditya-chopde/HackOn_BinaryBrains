const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    geneticData: String,
    medicalHistory: [String],
    lifestyle: Object,
    symptoms: [String],
    treatmentPlan: String
}, { timestamps: true })

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;