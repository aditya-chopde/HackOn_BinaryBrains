import React, { useRef, useState } from 'react';

const TreatmentPlan = ({ plan }) => {
  const ref = useRef();
  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
      .replace(/\n/g, "<br/>"); // Preserve line breaks
  };  

  return (
    <div ref={ref} className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">🌟 Personalized Treatment Plan</h2>
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatText(plan) }}
      ></div>
    </div>
  );
};

const GeneratePlan = () => {
  const [formData, setFormData] = useState({  
    medicalHistory: '',
    medications: '',
    allergies: '',
    geneticData: '',
    lifestyle: '',
    symptoms: '',
    concerns: '',
    user: "67b813f5161c8e89d687acb6",
  });

  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:3000/api/patient/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.treatmentPlan);  // Assuming `treatmentPlan` is a string
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    { name: 'medicalHistory', label: 'Medical History', placeholder: 'Enter your complete medical history...' },
    { name: 'medications', label: 'Medications', placeholder: 'List all current medications...' },
    { name: 'allergies', label: 'Allergies', placeholder: 'List any known allergies...' },
    { name: 'geneticData', label: 'Genetic Data', placeholder: 'Enter relevant genetic information...' },
    { name: 'lifestyle', label: 'Lifestyle', placeholder: 'Describe your lifestyle habits...' },
    { name: 'symptoms', label: 'Symptoms', placeholder: 'Describe current symptoms...' },
    { name: 'concerns', label: 'Concerns', placeholder: 'Share any health concerns...' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg mt-15">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🏥 Create Personalized Treatment Plan
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="mt-1 block w-full rounded-md border-[#6bbf84] shadow-sm 
                         focus:border-[#6bbf84] focus:ring-[#6bbf84]
                         transition duration-300 h-13 p-3"  
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-6 py-3 border border-transparent rounded-md 
                      shadow-sm text-white font-medium bg-[#4b9b6e] hover:bg-[#6bbf84]
                      focus:outline-none focus:ring-2 focus:ring-[#6bbf84] cursor-pointer
                      transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Generating Plan...' : 'Generate Personalized Plan'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          ❌ Error: {error}
        </div>
      )}

      {response && <TreatmentPlan plan={response} />}
    </div>
  );
};

export default GeneratePlan;
