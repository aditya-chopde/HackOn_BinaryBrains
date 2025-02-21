import React, { useEffect, useState } from 'react'
import axios from "axios"
import { svgs } from '../assets/export';
import { useNavigate } from 'react-router-dom';

const SeePlans = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const userId = localStorage.getItem("userId");

    async function getPlans(userId){
        await axios.get(`http://localhost:3000/api/user/plans/${userId}`).then((res)=>{
            const data = res.data.findPlans;
            setData(data)
        })
    }

    useEffect(() => {
        getPlans(userId)
    })
    
  return (
    <div className='w-[825px] mx-auto my-10'>
      <div>
        <button className='bg-[#4b9b6e] text-white px-3 py-2 rounded-sm cursor-pointer transition-all hover:-translate-y-1' onClick={()=> navigate("/generate-plan")}>Generate Plan</button>
      </div>
      <div>
        <h1 className='text-xl font-bold my-3'>Previous Plans</h1>
      </div>
      <div>
        {data.map((item)=>[
            <div key={item._id} className='cursor-pointer my-1 flex flex-row gap-2 group' onClick={()=> navigate(`/plan/${item._id}`)}>
                <img src={svgs.arrow_right} alt="arrow_right" className='w-5 group-hover:-rotate-90 transition-all '/>
                <p className=''>{(item.treatmentPlan).split(" ").slice(0, 12).join(" ") + "..."}</p>
            </div>
        ])}
      </div>
    </div>
  )
}

export default SeePlans
