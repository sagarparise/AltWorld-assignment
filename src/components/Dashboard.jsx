import React, { useContext } from "react";
import MockScore from "./MockScore";
import { store } from "../store/store";
function Dashboard() {
  const{mockData} = useContext(store)

  return (
    <div className=" w-full h-full p-3 flex flex-col">
      <h3 className=" font-semibold text-[14px]">
        <span className=" text-gray-300">Pages</span> / Assignment
      </h3>
      <h2 className=" mt-2 font-semibold text-[14px]">Sales BDE</h2>

      <div className=" flex-1 overflow-y-scroll flex py-2 gap-5 flex-col justify-center lg:flex-row ">
        <div className=" h-[500px] w-[380px] rounded-lg border shadow-md p-3">
          <div className=" flex justify-between items-center">
            <h1 className=" text-[18px] font-bold">Sales BDE</h1>
            <div className=" flex items-center gap-4">
              <h1 className=" text-[18px] font-bold text-[#04aa64]">Active</h1>
              <i className="bx bx-edit-alt p-2 rounded-md shadow-md cursor-pointer"></i>
            </div>
          </div>

          <div className=" flex justify-between mt-3">
            <p className=" text-[14px] font-semibold text-gray-400">
              Assignment Link
            </p>
            <a className="link link-primary text-[14px]   font-semibold">
              http://tiny.url/asknakdna/
            </a>
          </div>

          <div className=" flex justify-between mt-1">
            <p className=" text-[14px] font-semibold text-gray-400">
              Assignment Hour
            </p>
            <p className=" text-[14px] font-semibold text-gray-400">3 hours</p>
          </div>
          <div className=" flex justify-between mt-1">
            <p className=" text-[14px] font-semibold text-gray-400">
              Assignment Ends at
            </p>
            <p className=" text-[14px] font-semibold text-gray-400">
              11 March 2024
            </p>
          </div>

          <div className=" mt-4 p-2 flex gap-3 items-center">
            <div className=" w-[120px] text-center flex justify-center items-center gap-1 p-2 text-[11px] font-semibold flex-nowrap rounded-lg shadow-sm">
              <i className="bx bx-package"></i>
              <span className=" uppercase whitespace-nowrap">to review</span>
            </div>

            <div className=" w-[120px] text-center flex justify-center items-center gap-1 p-2 text-[11px] font-semibold flex-nowrap rounded-lg shadow-sm">
              <i className="bx bxs-file-blank"></i>
              <span className=" uppercase whitespace-nowrap">shortlisted</span>
            </div>
          </div>

          <div className="flex justify-between px-4 mt-2">
            <p className=" text-[11px] font-bold uppercase text-gray-400">
              candidate
            </p>
            <p className=" text-[11px] font-bold uppercase text-gray-400">
              score
            </p>
          </div>

          <div className=" mt-2">
            {mockData &&
              mockData.map((user) => <MockUser user={user} key={user.id} />)}
          </div>
        </div>

        <div className=" flex-1 rounded-lg border p-3 lg:h-full shadow-md flex">
          <MockScore />
          <div className=" w-1/2 slider rounded-lg relative">
            <div className="carousel w-full h-full">
             
              <div id="slide1" className="carousel-item relative h-full w-full">
                <div
                  id="item4"
                  className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12"
                >
                  Que.1 : Tell me about yourself?
                </div>
                <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle ">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide2" className="carousel-item relative h-full w-full">
                <div
                  id="item4"
                  className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12"
                >
                  Que.2 : Why do you want to work for our company?
                </div>
                <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle ">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide3" className="carousel-item relative h-full w-full">
                <div
                  id="item4"
                  className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12"
                >
                  Que.3 : What are your greatest weaknesses?
                </div>
                <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle ">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide4" className="carousel-item relative h-full w-full">
                <div
                  id="item4"
                  className="carousel-item w-full text-[17px] px-3 text-white font-semibold flex items-end justify-center  pb-12"
                >
                  Que.4 :  What do you believe makes a successful team?
                </div>
                <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle ">
                    ❯
                  </a>
                </div>
              </div>

              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

const MockUser = ({ user }) => {
  const{setSelectedMock} = useContext(store)

  const handleSelect = ()=>{
    setSelectedMock(user)
  }

  return (
    <>
      <div className=" h-[50px] hover:bg-[#f0f0f0] flex justify-between cursor-pointer items-center px-2 rounded-md pr-[20px]"  onClick={handleSelect}>
        <div className=" flex items-center gap-2">
          <div className="avatar">
            <div className="w-10 mask mask-squircle">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <h4 className=" text-[12px] font-bold">{user.name}</h4>
            <p className=" text-[12px] text-gray-400 font-semibold">
              {user.email}
            </p>
          </div>
        </div>
        <div
          className={`font-bold  ${
            user.score >= 50 ? "text-[#04aa64]" : "text-warning"
          }`}
        >
          {user.score}%
        </div>
      </div>
    </>
  );
};
//<div className="w-full h-full carousel rounded-box">
// <div id="item1" className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12">
// Que.1 : Tell me about yourself?
// </div>
// <div id="item2" className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12">
// Que.2 : Tell me about yourself?
// </div>
// <div id="item3" className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12">
// Que.3 : Tell me about yourself?
// </div>
// <div id="item4" className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12">
// Que.4 : Tell me about yourself?
// </div>
// <div id="item5" className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12">
// Que.5 : Tell me about yourself?
// </div>
// <div id="item6" className="carousel-item w-full text-[17px] text-white font-semibold flex items-end justify-center pb-12">
// Que.6 : Tell me about yourself?
// </div>
// </div>
// <div className="  absolute bottom-2 flex justify-center w-full py-2 gap-2">
// <a href="#item1" className="btn btn-xs">
// 1
// </a>
// <a href="#item2" className="btn btn-xs">
// 2
// </a>
// <a href="#item3" className="btn btn-xs">
// 3
// </a>
// <a href="#item4" className="btn btn-xs">
// 4
// </a>
// </div>
