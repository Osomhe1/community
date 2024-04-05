/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../../components/MedicalComponents/Header'
import Drawer from '../../components/Request&FormComponent/Drawer';
import HistoryTable from '../../components/MedicalComponents/HistoryTable';
import Separator from '../../components/payroll_components/Separator';

const Medical = () => {
  const [isOpen, setIsOpen] = useState(false);
const tabs=[
         { title: "Form", sub: "Fill form",},
  {
    title: "Attachments",
    sub: "Upload ",
  },
  { title: "Notes", sub: "Add Note",},
      ];
  return (
      <div className="py-8 font-helvetica">
    <Header setIsOpen={setIsOpen}/>
 <div className="mb-6">
  <Separator separator_text={'History'}/>
  </div>

      <HistoryTable/>

       <Drawer
          sideBarNeeded={true}
          tabs={tabs}
          targetedId={10}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
    </div>
  )
}

export default Medical