/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import Camera from "./Camera/Camera";

const AttendanceChart = () => {
const [takePicture, setTakePicture] = useState(false);
const [file, setFile] = useState("");


  const getCapture =(captured)=>{
  console.log(captured);
  setFile(captured)
  setTakePicture(false)
  }

    const close = () => {
  setTakePicture(false)
  };

    useEffect(() => {
    if ("geolocation" in navigator) {
      // Geolocation is supported
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success callback
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          // Error callback
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      // Geolocation is not supported
      console.error("Geolocation is not supported in this browser");
    }
  }, []);

  return (
    <Fragment>
    <Camera  onSubmit={getCapture} showWebcam={takePicture} onClose={close} />
      <div className="my-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded py-2 px-4 shadow-md">
          <div className="flex items-center gap-4 mb-4 text-sm">
            <h1>Timesheet</h1>
            <h1 className="text-gray-500">11 Mar 2019</h1>
          </div>
          <div className=" my-2 font-medium py-3 px-2 rounded border bg-gray-50">
            <p className="m-0 p-0">Punched in at</p>
            <p className="text-gray-500 m-0 p-0">Wed, 11th Mar 2019 10:00 AM</p>
          </div>

          <div className="w-[10rem] h-[10rem] my-4 rounded-full border-5 border-gray-200 mx-auto flex justify-center items-center bg-gray-50">
            <p>3.45hrs</p>
          </div>
          <div className="flex justify-center">
            <Button className="px-6 py-2 bg-btnColor hover:bg-[#44bec2] rounded-full text-white font-medium"
            //  onClick={() => setTakePicture(true)}
            >
              Punch Out
            </Button>
          </div>

          <div className="flex justify-between my-4">
            <div className=" my-2 font-medium py-1 px-6 rounded border bg-gray-50 text-center">
              <p className="m-0 p-0">Break</p>
              <p className=" m-0 p-0">1.21hrs</p>
            </div>
            <div className=" my-2 font-medium py-1 px-6 rounded border bg-gray-50 text-center">
              <p className="m-0 p-0">Overtime</p>
              <p className=" m-0 p-0">3hrs</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded py-2 px-4 shadow-md">
        <h1>Statistics</h1>
          <div className=" my-4 font-medium py-3 px-2 rounded border">
            <div className="flex items-center justify-between mb-2">
              <p className="font-normal">Today</p>
              <p className="">3.45/8 hrs</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-orange-500 h-1 rounded-full w-[45%]"></div>
            </div>
          </div>
          <div className=" my-4 font-medium py-3 px-2 rounded border">
            <div className="flex items-center justify-between mb-2">
              <p className="font-normal">This Week</p>
              <p className="">28/40 hrs</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-orange-400 h-1 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className=" my-4 font-medium py-3 px-2 rounded border">
            <div className="flex items-center justify-between mb-2">
              <p className="font-normal">This Month</p>
              <p className="">90/160 hrs</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full w-[50%]"></div>
            </div>
          </div>
          <div className=" my-4 font-medium py-3 px-2 rounded border">
            <div className="flex items-center justify-between mb-2">
              <p className="font-normal">Remaining</p>
              <p className="">90/160 hrs</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-red-500 h-1 rounded-full w-[90%]"></div>
            </div>
          </div>
        
          <div className=" my-4 font-medium py-3 px-2 rounded border">
            <div className="flex items-center justify-between mb-2">
              <p className="font-normal">Overtime</p>
              <p className="">4</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-blue-400 h-1 rounded-full w-[30%]"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded py-2 px-4 shadow-md">
          <h1>Today's Activity</h1>

          <ol className="relative ms-4 my-4 text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10 ms-8">
              <span className="absolute w-[10px] h-[10px] border-2 border-btnColor bg-white rounded-full -start-[5.8px]"></span>
              <h3 className="font-medium leading-tight">Punch in at</h3>
              <div className="flex gap-1 items-center text-gray-400 text-xs font-normal">
                <FiClock />
                <p className="">10:00 AM</p>
              </div>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute w-[10px] h-[10px] border-2 border-btnColor bg-white rounded-full -start-[5.8px]"></span>
              <h3 className="font-medium leading-tight">Punch out at</h3>
              <div className="flex gap-1 items-center text-gray-400 text-xs font-normal">
                <FiClock />
                <p className="">11:00 AM</p>
              </div>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute w-[10px] h-[10px] border-2 border-btnColor bg-white rounded-full -start-[5.8px]"></span>
              <h3 className="font-medium leading-tight">Punch in at</h3>
              <div className="flex gap-1 items-center text-gray-400 text-xs font-normal">
                <FiClock />
                <p className="">11:15 AM</p>
              </div>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute w-[10px] h-[10px] border-2 border-btnColor bg-white rounded-full -start-[5.8px]"></span>
              <h3 className="font-medium leading-tight">Punch out at</h3>
              <div className="flex gap-1 items-center text-gray-400 text-xs font-normal">
                <FiClock />
                <p className="">1:30 PM</p>
              </div>
            </li>
            <li className="mb-10 ms-8">
              <span className="absolute w-[10px] h-[10px] border-2 border-btnColor bg-white rounded-full -start-[5.8px]"></span>
              <h3 className="font-medium leading-tight">Punch in at</h3>
              <div className="flex gap-1 items-center text-gray-400 text-xs font-normal">
                <FiClock />
                <p className="">2:15 PM</p>
              </div>
            </li>
            <li className="ms-8">
              <span className="absolute w-[10px] h-[10px] border-2 border-btnColor bg-white rounded-full -start-[5.8px]"></span>
              <h3 className="font-medium leading-tight">Punch out at</h3>
              <div className="flex gap-1 items-center text-gray-400 text-xs font-normal">
                <FiClock />
                <p className="">4:30 PM</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default AttendanceChart;
