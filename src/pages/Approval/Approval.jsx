/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../../components/ApprovalComponents/Header'
import HistoryTable from '../../components/ApprovalComponents/HistoryTable'
import Separator from '../../components/payroll_components/Separator';
import Drawer from "../../components/Request&FormComponent/Drawer";
import OnboardTextForm from '../../components/Request&FormComponent/OnboardForms/OnboardTextForm';
import UserDetails from '../../components/ApprovalComponents/UserDetails';
import PageHeader from '../../components/payroll_components/PageHeader';
import OverviewCaTopCards from '../SelfService/Request/TopCards';
import { APPROVED_APPROVAL, data, DECLINED_APPROVAL, PENDING_APPROVAL } from "../SelfService/Request/data";
import { Tab, Tabs } from '@nextui-org/tabs';
import ApprovalTable from './ApprovalTable';
import ApprovalCards from '../HR/Approval/components/ApprovalCards';
import ExpandedDrawerWithButton from "../../components/modals/ExpandedDrawerWithButton";
import FormDrawer from "../../components/payroll_components/FormDrawer";
import LeaveDetail from "./LeaveDetail"
import BioDataDetail from "./BioDataDetail"
import ApprovalHistory from "./ApprovalHistory"
import ExpenseDetail from "./ExpenseDetail"
import AcademicDetail from './AcademicDetail';
import AttachmentDetail from './AttachmentDetail';



const Approval = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [actionOpened, setActionOpened] = useState(false);
  const [isOpen, setIsOpen] = useState({status: false, type: ''});

  const [approvalStatus, setApprovalStatus] = useState("")

    const [currentUser,setCurrentUser]=useState({});

    const [selected, setSelected] = useState("")


    const changeApprovalStatus=(status)=>{
      setApprovalStatus(status)
    }

    const openModal=(type)=>{
      console.log(type)
      setIsOpen({...isOpen, status: true, type: type?.toLowerCase()})
    }
    const handleClose=()=>{
      setIsOpen({...isOpen, status: false})
      
    }

// close the modal onclicking the body
const close=()=>{
if (filterOpened) {
  setFilterOpened(false)
}
if (actionOpened) {
  setActionOpened(false)
}
}

  const handleFilterClick = () => {
    setFilterOpened(!filterOpened);
  };
  const handleActionClick = () => {
    setActionOpened(!actionOpened);
  };




  const tabs = isOpen?.type==='leave'?
  [
    {title: "Leave", component: <LeaveDetail />},
    {title: "Attachment", component: <LeaveDetail />},
    {title: "Note", component: <LeaveDetail />},
  ]: isOpen?.type === 'bio data'?
  [
    {title: "Bio Data", component: <BioDataDetail />},
  ]:
  isOpen?.type==='expenses'?
  [
    {title: "Expenses", component: <ExpenseDetail />},
  ]:
  isOpen?.type==='academics'?
  [
    {title: "Academics", component: <AcademicDetail />},
    {title: "Attachment", component: <AttachmentDetail />},
  ]:
  [
    {title: "Leave", component: <LeaveDetail />}
  ]












  return (
    <>
    <div className="py-8 font-helvetica" onClick={close}>
    {/* <Header handleActionClick={handleActionClick} handleFilterClick={handleFilterClick} actionOpened={actionOpened} filterOpened={filterOpened} />
   <div className="mb-6">
  <Separator separator_text={'History'}/>
  </div> */}
   <PageHeader
          header_text={"Approval"}
          breadCrumb_data={[{ name: "Self Service" }, { name: "Approval" }]}
          // buttonProp={[{ button_text: "New Request"}]}
        />
        <div className="mt-5">
          <hr />
        </div>
        <>
          <Separator separator_text={"OVERVIEW"} />
          {/* <OverviewCaTopCards data={data}/> */}
          <ApprovalCards handleSelect={changeApprovalStatus}/>
        </>
        <div className="mt-5">
          <hr />
        </div>

        {/* <Tabs
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
          <Tab key="pending_Request" title="Pending Request">
            <ApprovalTable rows={PENDING_APPROVAL} handleOpenDrawer={openModal}/>
          </Tab>
          <Tab key="cencelled_Request" title="Cancelled Request">
            <ApprovalTable rows={DECLINED_APPROVAL} handleOpenDrawer={openModal}/>
          </Tab>
          <Tab key="completed_Request" title="Completed Request">
            <ApprovalTable rows={APPROVED_APPROVAL} handleOpenDrawer={openModal}/>
          </Tab>
          
          </Tabs> */}

          <ApprovalTable rows={
            approvalStatus==='pending_request'? PENDING_APPROVAL: approvalStatus==="rejected_request"? DECLINED_APPROVAL: 
            APPROVED_APPROVAL
            } handleOpenDrawer={openModal}/>

      {/* <HistoryTable setCurrentUser={setCurrentUser} setIsOpened={setIsOpened} /> */}

      <ExpandedDrawerWithButton  isOpen={isOpen?.status}
  onClose={handleClose}>
    <FormDrawer
    title={"Who you be:"}
    tabs={[
      ...tabs,
      {title: "Approval history", component: <ApprovalHistory />},
    ]}
    >

    </FormDrawer>

      </ExpandedDrawerWithButton>
    </div>


    </>
  )
}

export default Approval