const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateTreatmentPlan(patientData) {
    const medicalHistory = Array.isArray(patientData.medicalHistory)
        ? patientData.medicalHistory.join(", ")
        : patientData.medicalHistory || "No significant history";

    const symptoms = Array.isArray(patientData.symptoms)
        ? patientData.symptoms.join(", ")
        : patientData.symptoms || "No reported symptoms";

    const lifestyle = typeof patientData.lifestyle === "object" 
        ? JSON.stringify(patientData.lifestyle) 
        : patientData.lifestyle || "No lifestyle data";

    // **🛠 NEW: Adjusted prompt to avoid recitation**
    const prompt = `
    You are an AI medical assistant helping doctors create treatment plans for patients. 

    Given the following patient information:
    - Name: ${patientData.name}
    - Age: ${patientData.age}
    - Known medical history: ${medicalHistory}
    - Genetic factors: ${patientData.geneticData || "No genetic data provided"}
    - Lifestyle factors: ${lifestyle}
    - Current symptoms: ${symptoms}

    Please generate a **personalized treatment plan** based on best practices. 
    Instead of listing exact medications, provide **general recommendations** including:
    1. Suggested treatment approaches (medications, therapy, lifestyle adjustments)
    2. Possible risk factors to watch for
    3. Any recommended medical tests or follow-ups

    The response should be **advisory in nature** and should not contain medical prescriptions.
    `;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating treatment plan:", error);
        return "An error occurred while generating the treatment plan. Please try again later.";
    }
}

module.exports = generateTreatmentPlan;
