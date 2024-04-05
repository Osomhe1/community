/* eslint-disable no-unused-vars */

import { useState } from "react";
import PageHeader from "../../../components/payroll_components/PageHeader";
import Separator from "../../../components/payroll_components/Separator";
import TopCards from "./TopCards";
import ExpandedDrawerWithButton from "../../../components/modals/ExpandedDrawerWithButton";
import FormDrawer from "../../../components/payroll_components/FormDrawer";
import { Tabs, Tab } from "@nextui-org/react"
import RequestTable from "./RequestTable";
import { APPROVED_REQUEST, DECLINED_REQUEST, PENDING_REQUEST, data } from "./data"
import LeaveDetail from "../../Approval/LeaveDetail";
import BioDataDetail from "../../Approval/BioDataDetail";
import ExpenseDetail from "../../Approval/ExpenseDetail";
import AcademicDetail from "../../Approval/AcademicDetail";
import AttachmentDetail from "../../Approval/AttachmentDetail";
import ApprovalHistory from "../../Approval/ApprovalHistory";
import DTA_FORM from "./DTA_form";
import Expense_FORM from "./Expense_Form";
// import NewRequestForm from "./NewRequestForm";
export default function Request() {
    const pendingRequest = [
        {
          _id: 1,
          description: "TO EQUIP STAFF WITH FINANCIAL SKILLS FOR BETTER DECISION MAKING",
          date: "2024-09-02",
          status: "Pending",
          type: 'Leave',
         
        },
        {
          _id: 2,
          creator: "LASISI OLAYINKA",
          directorate: "DIRECTORATE OF FINANCE & ACCOUNTS",
          title: "BUDGETINGPLANNING ANG MANAGEMENT REPORTING",
          desc: "TO EQUIP STAFF WITH FINANCIAL SKILLS FOR BETTER DECISION MAKING",
          type: 'Local',
          staff: '19',
          start: '2024-09-02',
          end: '2024-09-14',
          period: '13',
          venue: 'UYO',
          fee: '₦450,000',
        },
        {
          _id: 3,
          creator: "LASISI OLAYINKA",
          directorate: "DIRECTORATE OF FINANCE & ACCOUNTS",
          title: "BUDGETINGPLANNING ANG MANAGEMENT REPORTING",
          desc: "TO EQUIP STAFF WITH FINANCIAL SKILLS FOR BETTER DECISION MAKING",
          type: 'Local',
          staff: '19',
          start: '2024-09-02',
          end: '2024-09-14',
          period: '13',
          venue: 'UYO',
          fee: '₦450,000',
        },
        {
          _id: 4,
          creator: "LASISI OLAYINKA",
          directorate: "DIRECTORATE OF FINANCE & ACCOUNTS",
          title: "BUDGETINGPLANNING ANG MANAGEMENT REPORTING",
          desc: "TO EQUIP STAFF WITH FINANCIAL SKILLS FOR BETTER DECISION MAKING",
          type: 'Local',
          staff: '19',
          start: '2024-09-02',
          end: '2024-09-14',
          period: '13',
          venue: 'UYO',
          fee: '₦450,000',
        },
        {
          _id: 5,
          creator: "LASISI OLAYINKA",
          directorate: "DIRECTORATE OF FINANCE & ACCOUNTS",
          title: "BUDGETINGPLANNING ANG MANAGEMENT REPORTING",
          desc: "TO EQUIP STAFF WITH FINANCIAL SKILLS FOR BETTER DECISION MAKING",
          type: 'Local',
          staff: '19',
          start: '2024-09-02',
          end: '2024-09-14',
          period: '13',
          venue: 'UYO',
          fee: '₦450,000',
        },
        
      ];

      const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("")

    const [isOpen, setIsOpen] = useState({status: false, type: ''});

    const openModal=(type)=>{
      console.log(type)
      setIsOpen({...isOpen, status: true, type: type?.toLowerCase()})
    }
    const handleClose=()=>{
      setIsOpen({...isOpen, status: false})
      
    }

    const handleOpen=()=>{
        setOpen(true)
    }



    const tabs = isOpen?.type==='create_dta'?
    [
      {title: "DTA Request", component: <DTA_FORM role="request"/>, header_text: "DTA Request Form"},
    ]:
     isOpen?.type==='create_expense'?
    [
      {title: "Create Expense", component: <Expense_FORM role="request" />, header_text: "Create Expense"},
    ]:
    isOpen?.type==='leave'?
  [
    {title: "Leave", component: <LeaveDetail role="request"/>, header_text: "Leave"},
    {title: "Attachment", component: <LeaveDetail role="request"/>},
    {title: "Note", component: <LeaveDetail role="request"/>},
  ]: isOpen?.type === 'bio data'?
  [
    {title: "Bio Data", component: <BioDataDetail role="request"/>},
  ]:
  isOpen?.type==='expenses'?
  [
    {title: "Expenses", component: <ExpenseDetail role="request"/>},
  ]:
  isOpen?.type==='academics'?
  [
    {title: "Academics", component: <AcademicDetail role="request"/>},
    {title: "Attachment", component: <AttachmentDetail role="request"/>},
    {title: "Approval history", component: <ApprovalHistory />}
  ]:
  isOpen?.type==='profile image'?
  [
    {title: "Profile Image", component: <BioDataDetail role="request"/>},
    {title: "Approval history", component: <ApprovalHistory />}
    
  ]:
  [
    {title: "Approval history", component: <ApprovalHistory />}
  ]


  return (
    <>
         <main>
        <PageHeader
          header_text={"Request"}
          breadCrumb_data={[{ name: "Self Service" }, { name: "Request" }]}
          buttonProp={[{ button_text: "DTA Request", fn: openModal, fnParameter: "create_dta"}, { button_text: "Expense", fn: openModal, fnParameter: "create_expense"}]}
        />
        <div className="mt-5">
          <hr />
        </div>
        <>
          <Separator separator_text={"OVERVIEW"} />
          <TopCards data={data}/>
        </>
        <div className="mt-5">
          <hr />
        </div>
        <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            className="mt-4 flex justify-en"
            variant="bordered"
            color="secondary"
            classNames={{
            base: "rounded",
            tabList: "outline-none border-[1px] shadow-none"
            }}
            radius="sm"
          >
          {/* <Tab key="all_Request" title="All Request">
            <RequestTable rows={data}/>
          </Tab> */}
          <Tab key="pending_Request" title="Pending Request">
            <RequestTable rows={PENDING_REQUEST} handleOpenDrawer={openModal}/>
          </Tab>
          <Tab key="cencelled_Request" title="Cancelled Request">
            <RequestTable rows={DECLINED_REQUEST} handleOpenDrawer={openModal}/>
          </Tab>
          <Tab key="completed_Request" title="Completed Request">
            <RequestTable rows={APPROVED_REQUEST} handleOpenDrawer={openModal}/>
          </Tab>
          
          </Tabs>

      </main>




      <ExpandedDrawerWithButton  isOpen={isOpen?.status}
  onClose={handleClose}>
    <FormDrawer
    title={"Who you be:"}
    tabs={[
      ...tabs
    ]}
    >

    </FormDrawer>

      </ExpandedDrawerWithButton>

    </>
  )
}
