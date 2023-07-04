// import React from 'react'
import { BsArrowBarRight } from "react-icons/bs";
import img from "../../../../assets/images/sign.png";
import img2 from "../../../../assets/images/my-works.png";

const Credentials = () => {
  const data = [
    {
      id: 1,
      image: img,
      textBlur: "More About Me",
      text: "Credentials",
    },
    {
      id: 2,
      image: img2,
      textBlur: "ShowCase",
      text: "Projects",
    },
  ];
  return (
    <div className="credentials sm:flex items-center justify-center gap-5">
      {data.map((item) => {
        return (
          <div className="flex flex-col  border border-white/[0.15] text-center bg-[#161616] py-3 px-14  gap-5 sm:mt-0 mt-5 rounded-[20px] sm:w-auto " key={item.id}>
            <div className="image">
              <img src={item.image} alt="sign" />
            </div>

            <div className="flex items-center justify-between">
              <div className="text text-left">
                <h1 className="text-[18px] text-gray-600 font-normal">
                  {item.textBlur}
                </h1>
                <h1 className="text-white font-semibold text-xl text-left">
                  {item.text}
                </h1>
              </div>

              <div className="link">
                <BsArrowBarRight className="text-gray-600 text-3xl font-semibold cursor-pointer hover:text-white transition-all ease-in-out " />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Credentials;



// BsBrowserChrome