/* eslint-disable react/prop-types */

import { Aperture, Building, CreditCard } from "lucide-react";
import { useState } from "react";
import { PiAirTrafficControl, PiTreePalmThin } from "react-icons/pi";
import { AnimatePresence, motion } from 'framer-motion';

const QuickLink2 = ({ clickedTab }) => {
  const  [currentLinksGroup, setCurrentLinksGroup] = useState(0)


  const nextGroup = ()=>{
    if (currentLinksGroup === 1) {
      setCurrentLinksGroup(0)
    }else{
      setCurrentLinksGroup(1)
    }
  }


  return (
    <div className="rounded-lg bg-white py-2 shadow-sm">
      <div className="text-sm flex flex-col relative">
        <div className="flex  px-[1.8rem] items-start">
          <span className="text-gray-700  font-semibold text-lg">
            Quick Links
          </span>
        </div>

        <div className="grid grid-cols-3 gap-x-[1.5rem]  gap-y-1 place-items-center  pt-2 h-full ">

          <div
            className=" rounded-lg p-[0.5rem] flex flex-col justify-center items-center  cursor-pointer  opacity-90 text-gray-600 w-[85px] gap-y-1 "
            onClick={() => clickedTab("service")}
          >
            <div className="rounded-full  bg-[#322742] w-[50px] h-[50px] flex justify-center items-center"> 
            {/* red */}
              <CreditCard size={25} className="!font-bold text-white " />
            </div>

            <div className=" w-[70px] text-center mxauto  truncate  text-xs">
              Training
            </div>
          </div>

          <div
            className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1"
            onClick={() => clickedTab("leave")}
          >
            <div className="rounded-full bg-[#322742]   w-[50px] h-[50px] flex justify-center items-center">
              {/* bg-purple-300 */}
              <PiTreePalmThin
                size={25}
                className="!font-bold text-white "
              />
              {/* text-purple-600 */}
            </div>
            <div className=" w-[70px] text-center truncate  text-xs">Leave</div>
          </div>
          <div
            className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1 "
            onClick={() => clickedTab("payroll")}
          >
            <div className="rounded-full bg-[#322742]  w-[50px] h-[50px] flex justify-center items-center">
            {/* bg-yellow-200  */}
              <CreditCard size={25} className="!font-bold text-white" />
            </div>
            {/* text-yellow-500 */}
            <div className=" w-[70px] text-center truncate  text-xs">
              Salary
            </div>
          </div>
          <div
            className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1"
            onClick={() => clickedTab("forms")}
          >
            <div className="rounded-full bg-[#322742]    w-[50px] h-[50px] flex justify-center items-center">
            {/* bg-green-200 */}
              <Aperture size={25} className="!font-bold text-white " />
            </div>
            {/* text-green-500 */}
            <div className=" w-[70px] text-center truncate  text-xs">
              Request
            </div>
          </div>
          <div
            className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1"
            onClick={() => clickedTab("forms")}
          >
            <div className="rounded-full bg-[#322742]   w-[50px] h-[50px] flex justify-center items-center">
            {/* bg-orange-200 */}
              <Building size={25} className="!font-bold text-white " />
            </div>
            {/* text-orange-500 */}
            <div className=" w-[70px] text-center truncate  text-xs">
              Performance
            </div>
          </div>
          <div className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1">
            <div className="rounded-full  bg-[#322742]  w-[50px] h-[50px] flex justify-center items-center">
            {/* bg-green-300 */}
              <PiAirTrafficControl
                size={25}
                className="!font-bold text-white"
              />
              {/* text-green-900 */}
            </div>

            <div className=" w-[70px] text-center truncate  text-xs">
              Attendence
            </div>
          </div>
        </div>
        {
          currentLinksGroup === 1 && 



          <AnimatePresence>
                <motion.div
                    initial={{x: 100, opacity:0, }}
                    animate={{x: 0, opacity:1, transition: { duration: 0.7}}}
                    exit={{x: 100, opacity:0.5, transition: { duration: 0.7}}}
              
                  >
                    
                      <div className="grid grid-cols-3 gap-x-4   gap-y-1 place-items-center  pt-2 h-full ">

                        <div
                          className=" rounded-lg p-[0.5rem] flex flex-col justify-center items-center  cursor-pointer  opacity-90 text-gray-600 w-[85px] gap-y-1 "
                          onClick={() => clickedTab("service")}
                        >
                          <div className="rounded-full  bg-[#322742] w-[50px] h-[50px] flex justify-center items-center"> 
                          {/* red */}
                            <CreditCard size={25} className="!font-bold text-white " />
                          </div>

                          <div className=" w-[70px] text-center mxauto  truncate  text-xs">
                            Training
                          </div>
                        </div>

                        <div
                          className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1"
                          onClick={() => clickedTab("leave")}
                        >
                          <div className="rounded-full bg-[#322742]   w-[50px] h-[50px] flex justify-center items-center">
                            {/* bg-purple-300 */}
                            <PiTreePalmThin
                              size={25}
                              className="!font-bold text-white "
                            />
                            {/* text-purple-600 */}
                          </div>
                          <div className=" w-[70px] text-center truncate  text-xs">Leave</div>
                        </div>
                        <div
                          className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1 "
                          onClick={() => clickedTab("payroll")}
                        >
                          <div className="rounded-full bg-[#322742]  w-[50px] h-[50px] flex justify-center items-center">
                          {/* bg-yellow-200  */}
                            <CreditCard size={25} className="!font-bold text-white" />
                          </div>
                          {/* text-yellow-500 */}
                          <div className=" w-[70px] text-center truncate  text-xs">
                            Salary
                          </div>
                        </div>
                        <div
                          className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1"
                          onClick={() => clickedTab("forms")}
                        >
                          <div className="rounded-full bg-[#322742]    w-[50px] h-[50px] flex justify-center items-center">
                          {/* bg-green-200 */}
                            <Aperture size={25} className="!font-bold text-white " />
                          </div>
                          {/* text-green-500 */}
                          <div className=" w-[70px] text-center truncate  text-xs">
                            Request
                          </div>
                        </div>
                        <div
                          className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1"
                          onClick={() => clickedTab("forms")}
                        >
                          <div className="rounded-full bg-[#322742]   w-[50px] h-[50px] flex justify-center items-center">
                          {/* bg-orange-200 */}
                            <Building size={25} className="!font-bold text-white " />
                          </div>
                          {/* text-orange-500 */}
                          <div className=" w-[70px] text-center truncate  text-xs">
                            Performance
                          </div>
                        </div>
                        <div className=" rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer opacity-90 text-gray-600 w-[85px] gap-y-1">
                          <div className="rounded-full  bg-[#322742]  w-[50px] h-[50px] flex justify-center items-center">
                          {/* bg-green-300 */}
                            <PiAirTrafficControl
                              size={25}
                              className="!font-bold text-white"
                            />
                            {/* text-green-900 */}
                          </div>

                          <div className=" w-[70px] text-center truncate  text-xs">
                            Attendence
                          </div>
                        </div>
                      </div>
                </motion.div>
          </AnimatePresence>







        }
  
        {
          
            <div className="flex flex-col my-3">
              <div className="flex items-center justify-center">
                <button className="border border-gray-400 px-4 py-2 w-[60%] mx-10 rounded-full text-[0.9rem] hover:shadow active:border-gray-600" onClick={nextGroup}>
                  View  { currentLinksGroup === 0  ?  'More' : 'Less' }
                </button>
              </div>
            </div>
        }

      </div>
    </div>
  );
};

export default QuickLink2;
