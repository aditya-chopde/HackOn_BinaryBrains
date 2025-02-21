const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateTreatmentPlan(patientData){
    const prompt = `
    You are an AI medical expert. Based on the patient's genetic data, medical history, and lifestyle, create a structured treatment plan.

    - Name: ${patientData.name}
    - Age: ${patientData.age}
    - Medical History: ${patientData.medicalHistory.join(", ")}
    - Genetic Data: ${patientData.geneticData}
    - Lifestyle: ${JSON.stringify(patientData.lifestyle)}
    - Symptoms: ${patientData.symptoms.join(", ")}

    Provide:
    1. Medication recommendations
    2. Lifestyle modifications
    3. Follow-up tests
    4. Risk factors
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateTreatmentPlan;