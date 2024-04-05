/* eslint-disable no-unused-vars */
import React from "react";
import AttendanceChart from "../../components/AttendanceComponent/AttendanceChart";
import Header from "../../components/AttendanceComponent/Header";
import Separator from "../../components/payroll_components/Separator";
import AttendanceTable from "../../components/AttendanceComponent/AttendanceTable";
import { DatePicker } from "antd";
import { Button, Input } from "@nextui-org/react";

const Attendance = () => {
  const defaultValue = () => {
    const currentDate = new Date();
    // console.log(currentDate.toISOString().split("T")[0]);
    return currentDate.toISOString().split("T")[0];
  };
  return (
    <div className="py-8 font-helvetica">
      <Header />
      <div className="mb-6">
        <Separator separator_text={"History"} />
      </div>
      <AttendanceChart />
      <div className="flex justify-center items-center flex-col md:flex-row gap-4 mt-12 mb-4">
        <DatePicker
        placeholder={defaultValue()}
          onChange={(e) => {}}
          className=" w-full border h-[50px] rounded-md focus:outline-none font-medium"
        />
        <DatePicker
          onChange={(e) => {}}
          className=" w-full border h-[50px] rounded-md focus:outline-none font-medium"
          picker="month"
        />

        <DatePicker
          onChange={(e) => {}}
          className=" w-full border h-[50px] rounded-md focus:outline-none font-medium"
          picker="year"
        />
        <Button size="lg" className="w-full py-2 uppercase bg-[#00BCC2] font-medium text-lg text-white rounded-sm tracking-wider" >Search</Button>
      </div>
      <AttendanceTable />
    </div>
  );
};

export default Attendance;
