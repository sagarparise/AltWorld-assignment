import React from "react";

function Sidebar() {
  return (
    <div className=" w-full h-full p-6 border-r border-gray-100">
      <div className=" flex justify-start items-center gap-3 pb-5 border-b ">
        <i class="bx bx-buildings"></i>
        <h1 className=" text-xl font-semibold">Hi, AltWorld</h1>
      </div>
      <ul className="menu mt-2">
        <li>
          <div className=" font-semibold">
          <i className='bx bxs-home' style={{color:"#1ec3b3"}}  ></i>
           Dashboard
          </div>
        </li>   
      </ul>

      <div className=" w-full h-[200px] mt-3 p-4 bg-[#4fd1c5] rounded-xl">
      <i className='bx bx-plus p-2 rounded-lg bg-white text-black cursor-pointer'  ></i>
      <h1 className=" mt-3 font-semibold text-white">New Assignment?</h1>
      <p className=" text-[#ffffffdf] text-[14px] ">Select from the pre-defined questions to have a quick turn around</p>
      <button className="h-[30px] w-full mt-2 text-[12px] font-semibold rounded-lg bg-white text-black hover:bg-slate-200">Create New Assignment</button>
      </div>

    </div>
  );
}

export default Sidebar;
