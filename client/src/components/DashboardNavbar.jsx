import React from "react";
import { svgs } from "../assets/export";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-row justify-around mt-10">
        <div onClick={()=> navigate("/dashboard")} className="cursor-pointer">
          <h2 className="font-bold text-2xl">VitaGenix</h2>
        </div>
        <div>
            <ul>
                <li className="border border-1 rounded-full p-2 cursor-pointer">
                    <img src={svgs.user} alt="user_svg" className="w-5"/>
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
