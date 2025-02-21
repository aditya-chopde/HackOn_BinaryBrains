const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    geneticData: String,
    medications: String,
    allergies: String,
    medicalHistory: String,
    lifestyle: String,
    symptoms: String,
    concerns: String,
    treatmentPlan: String,
}, { timestamps: true })

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;