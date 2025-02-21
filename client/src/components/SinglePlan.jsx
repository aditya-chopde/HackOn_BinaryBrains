import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePlan = () => {
  const ref = useRef();
  
  const formatText = (text = "") => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
      .replace(/\n/g, "<br/>"); // Preserve line breaks
  };

  const [data, setData] = useState(null);
  const { id } = useParams();

  async function getPlan(planId) {
    try {
      const res = await axios.get(`http://localhost:3000/api/user/single-plan/${planId}`);
      setData(res.data.singlePlan[0].treatmentPlan);
      console.log(res.data.singlePlan[0].treatmentPlan);
    } catch (error) {
      console.error("Error fetching plan:", error);
    }
  }

  useEffect(() => {
    getPlan(id);
  }, [id]); // ✅ Run only when id changes

  return (
    <div>
      <div
        ref={ref}
        className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm w-[850px] mx-auto my-12"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          🌟 Personalized Treatment Plan
        </h2>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatText(data || "") }} // ✅ Handle null case safely
        ></div>
      </div>
    </div>
  );
};

export default SinglePlan;
