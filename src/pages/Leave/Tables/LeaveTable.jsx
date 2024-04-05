/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { FaHouseMedical } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { TbBuildingMonument } from "react-icons/tb";

import { Tab, Tabs } from "@nextui-org/react";
import HistoryTable from "../../../components/Leave/HistoryTable";
import { useEffect, useState } from "react";
import { columns, tableData } from "../../../components/Leave/data";

const LeaveTable = ({ setCurrentView, view, resume }) => {
  const [selectedTableData, setSelectedTableData] = useState([]);
  const [leaveId, setLeaveId] = useState('')
  // const [reccentColumn, setReccentColumn] = useState(columns);

  useEffect(() => {
    setSelectedTableData(tableData.filter((data) => data.status == "pending"));
    setLeaveId('pending')
  }, []);

  const selectTab = (value) => {
  setLeaveId(value)
    if (value == "pending") {
      setSelectedTableData(
        tableData.filter((data) => data.status == "pending")
      );
      // setReccentColumn(columns.filter(column=>column.uid!=='to'))
    } else if (value == "approved") {
      setSelectedTableData(
        tableData.filter((data) => data.status == "approved")
      );
      // setReccentColumn(columns.filter(column=>column.uid!=='to'))
    } else if (value == "declined") {
      setSelectedTableData(
        tableData.filter((data) => data.status == "declined")
      );
      // setReccentColumn(columns.filter(column=>column.uid!=='to'))
    } else if (value == "completed") {
      // setReccentColumn(columns.map(column=>{
      // if(column.name=='APPLICATION DATE'){
      // return {...column,name:'START DATE'}
      // }else{
      // return column
      // }
      // }))
      setSelectedTableData(
        tableData.filter((data) => data.status == "completed")
      );
    }
  };
  const leaveNo = (value) => {
    if (value == "pending") {
      return  tableData.filter((data) => data.status == "pending")
    } else if (value == "approved") {
      return  tableData.filter((data) => data.status == "approved")
    } else if (value == "declined") {
     return  tableData.filter((data) => data.status == "declined")
    } else if (value == "completed") {
  return  tableData.filter((data) => data.status == "completed")
    }
  };

  const leaveHistory = [
    {
      id: "pending",
      label: "Pending leaves",
      icon: MdOutlineReviews,
      b_color: "bg-amber-100",
      t_color: "text-amber-500",
    },
    {
      id: "declined",
      label: "Declined leaves",
      icon: FaHouseMedical,
      b_color: "bg-red-100",
      t_color: "text-red-500",
    },
    {
      id: "approved",
      label: "Approved leaves",
      icon: GiTeamIdea,
      b_color: "bg-purple-100",
      t_color: "text-purple-500",
    },
    {
      id: "completed",
      label: "Completed leaves",
      icon: TbBuildingMonument,
      b_color: "bg-green-100",
      t_color: "text-green-500",
    },
  ];

  // const optionTabs=[
  //    {
  //   id:'pending',
  //   label:'Pending',
  //    content: HistoryTable,
  //   },
  //    {
  //   id:'approved',
  //   label:'Approved',
  //    content: HistoryTable,
  //   },
  //    {
  //   id:'declined',
  //   label:'Declined',
  //    content: HistoryTable,
  //   },
  //    {
  //   id:'completed',
  //   label:'Completed',
  //    content: HistoryTable,
  //   },

  //   ]
  return (
    <div>
      {/* <Tabs 
items={optionTabs} 
color="secondary"
classNames={{
tabList:'bg-slate-200 text-medium',
}} 
onSelectionChange={select}
>
{(item)=>(
<Tab key={item.label} title={item.label} >
{<item.content tableData={selectedTableData}
        setCurrentView={setCurrentView}
       columns = {reccentColumn}
        view={view}
        resume={resume}/>}
</Tab>
)}
</Tabs> */}
<div className="flex flex-col gap-4 md:flex-row my-4">
 <div className="bg-white rounded-t-md py-2 px-4 shadow-md md:w-1/2 border border-[#dfe2e6]">
        <h4 className="text-xl font-medium text-center font-helvetica uppercase tracking-wider">Leave Balance</h4>

          <div className="w-[10rem] h-[10rem] my-4 rounded-full border-5 border-gray-200 mx-auto flex justify-center items-center bg-gray-50">
            <p className="text-xl font-medium">10</p>
          </div>

        </div>
      <div className="grid grid-cols-1 bottom-0 md:grid-cols-2 md:w-1/2 gap-4 my-4">
        {leaveHistory.map((leave) => (
          <div
            key={leave?.id}
            className={`${leave.id==leaveId?'bg-slate-100':'bg-white'} py-4 cursor-pointer shadow-sm -top border border-[#dfe2e6] flex rounded-t-[0.5rem] items-center justify-between px-4 gap-3`}
            style={{
              boxShadow:
                "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
            }}
            onClick={() => selectTab(leave?.id)}
          >
            <div className="flex gap-2 items-center">
              <div
                className={`rounded-full ${leave?.b_color} w-[50px] h-[50px] flex justify-center items-center`}
              >
                <leave.icon
                  size={25}
                  className={`!font-bold ${leave?.t_color}`}
                />
              </div>
              <span className="text-[15px] text-[rgb(39, 44, 51)] font-[400] leading-[19.5px]">
                {leave.label}
              </span>
            </div>
            <span className="text-[14px] leading-[19.5px] text-[rgba(39, 44, 51, 0.5)] font-[400] font-Roboto">
              {leaveNo(leave?.id).length}
            </span>
          </div>
        ))}
      </div>
</div>


      <HistoryTable
        tableData={selectedTableData}
        setCurrentView={setCurrentView}
        columns={columns}
        view={view}
        resume={resume}
      />
    </div>
  );
};

export default LeaveTable;
