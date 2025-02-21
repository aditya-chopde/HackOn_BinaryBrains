const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    geneticData: String,
    medicalHistory: [String],
    lifestyle: Object,
    symptoms: [String],
    treatmentPlan: String
}, {timestamps: true})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;