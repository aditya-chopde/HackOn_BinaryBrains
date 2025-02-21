import React, { useEffect, useState } from 'react'
import axios from "axios"
import { svgs } from '../assets/export';
import { useNavigate } from 'react-router-dom';

const SeePlans = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const userId = "67b813f5161c8e89d687acb6";

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
    <div className='w-[825px] mx-auto my-5'>
      <div>
        <h1 className='text-xl font-bold my-3'>Previous Plans</h1>
      </div>
      <div>
        {data.map((item)=>[
            <div key={item._id} className='cursor-pointer my-1 flex flex-row gap-2 group' onClick={()=> navigate(`/plan/${item._id}`)}>
                <img src={svgs.arrow_right} alt="arrow_right" className='w-5 group-hover:-rotate-90 transition-all '/>
                <p className=''>{(item.treatmentPlan).split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
        ])}
      </div>
    </div>
  )
}

export default SeePlans
