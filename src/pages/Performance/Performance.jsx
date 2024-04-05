// import React from 'react'

import BarChart from "../../components/PerformanceComponents/BarChart"
import PieChart from "../../components/PerformanceComponents/PieChart"
import Header from "../../components/PerformanceComponents/Header"
import HistoryTable from "../../components/PerformanceComponents/HistoryTable"
import Separator from "../../components/payroll_components/Separator"
import Drawer from "../../components/Request&FormComponent/Drawer"
import { useState } from "react"
import Attachment from "../../components/Request&FormComponent/Attachement"
import Note from "../../components/Request&FormComponent/Note"
import LineChart from "../../components/PerformanceComponents/LineChart"
import LastThreePerformancesTable from "../../components/PerformanceComponents/LastThreePerformancesTable"

const Performance = () => {
const [isOpen, setIsOpen] = useState(false);
 const [selectedTab, setSelectedTab] = useState(0)
 const tabs =[
    { title: "Form", sub: "Fill form" },
    {
      title: "Attachments",
      sub: "Upload ",
    },
    { title: "Notes", sub: "Add Note" },
  ];
  return (
       <div className="py-8 font-helvetica">
    <Header setIsOpen={setIsOpen}/>
  <div className="mb-6">
  <Separator separator_text={'History'}/>
  </div>
    <div className="my-6 grid gap-4 md:grid-cols-3">
    <PieChart/>
    <BarChart/>
    <LineChart/>
    </div>
    <div className="my-8">
    <h2 className="font-helvetica text-lg my-2">The last three performances</h2>
    <LastThreePerformancesTable/>
    </div>
    <div className="my-8">
    <h2 className="font-helvetica text-lg my-2">All Performances</h2>
<HistoryTable/>
    </div>
<Drawer tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}   isOpen={isOpen} setIsOpen={setIsOpen}  sideBarNeeded={true}>
 {tabs[selectedTab].title.toLowerCase()==('Attachments').toLowerCase()&&<Attachment/>}
      {tabs[selectedTab].title.toLowerCase()==('Notes').toLowerCase()&&<Note/>}
</Drawer>
    </div>
  );
};

export default Performance;
