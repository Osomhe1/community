/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import PropType from "prop-types";
import { IoClose } from "react-icons/io5";
import "./formDrawer.css";

export default function FormDrawer({ tabs, onClose, children, showButton, title, subtitle }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <Fragment>
        <div className="flex flex-col font-Roboto mb-3">
            <div className="text-2xl font-bold">{tabs[selectedTab]?.header_text}</div>
            <div className="text-gray-400 font-medium">
              {tabs[selectedTab]?.sub_text}
            </div>
          </div>
      <div className="grid grid-cols-1 h-ful md:grid-cols-4 gap-4">


        <div className="my- w-full p-5 overflow-y-auto col-span-3 shadow-xl bg-white rounded-[0.25rem] mb-[1rem] form_drawer_body_container order-2 md:order-1 ">
          {tabs[selectedTab]?.component ?? children}
        </div>

        <div className="flex flex-col border-l-1 border-gray-400 py-10 text-sm gap-3 px-4 ms-8 md:ms-2 my-5 md:my-0 md:h-full order-1 md:order-2">
          {tabs?.map((tab, index) => (
            <div
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`${
                selectedTab === index ? "font-[500]" : "font-[400]"
              } relative cursor-pointer font-[13px] leading-[19.5px] text-[rgba(39, 44, 51, 0.7)]`}
            >
              {tab?.title}
              <span
                className={`w-[0.7rem] h-[0.7rem] rounded-full  ${
                  selectedTab === index ? "bg-[#00bcc2]" : "bg-gray-300"
                }  border-1 border-white absolute -left-[22px] top-1 duration-200 transition-all`}
              ></span>
            </div>
          ))}
          {/* {
            showButton && (
            <button className="header_btnStyle bg-[#00bcc2] rounded text-white font-semibold py-[8px] leading-[19.5px] mx-2 my-1 md:my-0 px-[16px] uppercase" onClick={handleSubmit}>
              Submit
            </button>
            )
          } */}
        </div>
      </div>


















      {/* <div className="flex flex-col gap-5  px-4 ">
          <div className="flex flex-col font-Roboto">
            <div className="text-2xl font-bold">{tabs[selectedTab]?.header_text}</div>
            <div className="text-gray-400 font-medium">
              {tabs[selectedTab]?.sub_text}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px]  gap-7 h-full">

            <div className="flex flex-col border shadow-xl bg-white rounded-md  py-5">
                
            {tabs[selectedTab]?.component ?? children}
            </div>

            <div className="h-[100px] sm:h-[300px]">
              <div className=" h-full border-l-1 border-gray-400  ">


                <div className="flex flex-col py-5 md:py-10 text-sm gap-3 ml-2 ">
                  {tabs?.map((pk, index) => (
                    <div
                      key={pk}
                      className={`${
                        selectedTab === index && "font-bold"
                      } relative cursor-pointer`}
                      onClick={() => setSelectedTab(index)}
                    >
                        <span className=" ml-3">
                                {pk?.title}
                        </span>
                     
                      <span
                        className={`w-[0.7rem] h-[0.7rem] rounded-full  ${
                            selectedTab === index
                            ? "bg-green-700/80"
                            : "bg-gray-300"
                        }  border-1 border-gray-400 absolute -left-[0.9rem] top-1 duration-200 transition-all`}
                      ></span>
                    </div>
                    ))}       
                </div>
              </div>
            </div>

          </div>
        </div> */}
    </Fragment>
  );
}

FormDrawer.propTypes = {
  tabs: PropType.array,
  children: PropType.element,
  page: PropType.string,
};
