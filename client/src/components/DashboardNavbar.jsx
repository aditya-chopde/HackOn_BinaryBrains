import React from "react";
import { svgs } from "../assets/export";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-row justify-around py-5 bg-[#4b9b6e]">
        <div onClick={()=> navigate("/dashboard")} className="cursor-pointer">
          <h2 className="font-bold text-2xl text-white">VitaGenix</h2>
        </div>
        <div>
            <ul>
                <li className="border border-white border-1 rounded-full p-2 cursor-pointer" onClick={()=> navigate("/")}>
                    <img src={svgs.user} alt="user_svg" className="w-5 invert"/>
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
