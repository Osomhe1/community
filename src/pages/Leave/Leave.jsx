/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "../../components/Leave/Header";
import HistoryTable from "../../components/Leave/HistoryTable";
import Drawer from "../../components/Request&FormComponent/Drawer";
import Separator from "../../components/payroll_components/Separator";
import Note from "../../components/Request&FormComponent/Note";
import LeaveReturnTextForm from "../../components/Request&FormComponent/LeaveReturnForms/LeaveReturnTextForm";
import LeaveReturnApprovalForm from "../../components/Request&FormComponent/LeaveReturnForms/LeaveReturnApprovalForm";
import LeaveForm from "../../components/Leave/LeaveForm";
import Attachments from "../../components/Request&FormComponent/Attachments";
import ApprovalForm from "../../components/Request&FormComponent/ApprovalForm";
import HandOverForm from "../../components/Request&FormComponent/HandOverForm";
import DataHistory from "../../components/Leave/LeaveDetails";
import AttachmentDetail from "../../components/Leave/AttachmentDetail";
import NoteDetail from "../../components/Leave/NoteDetail";
import LeaveCards from "../../components/Leave/LeaveCards";
import { Tab, Tabs } from "@nextui-org/react";
import LeaveTable from "./Tables/LeaveTable";
import ReturnTable from "./Tables/ReturnTable";
import LeaveDetails from "../../components/Leave/LeaveDetails";
import LeaveApprovalHistory from "../../components/Leave/LeaveApprovalHistory";

const Leave = () => {
  const [currentView, setCurrentView] = useState({});
  const [leaveInformation, setLeaveInformation] = useState({
    type: "",
    from: "",
    to: "",
    no_of_days: "",
    reason: "",
    approvals: [],
    hand_overs: [],
    attachments: [],
    note: "",
    status: "pending",
  });
  const [leaveReturnInformation, setLeaveReturnInformation] = useState({
    return_date: "",
    approvals: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [whatTodo, setWhatTodo] = useState("");
  const [sideBarNeeded, setSideBarNeeded] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [submitButtonNeeded, setSubmitButtonNeeded] = useState(true)
  const [drawerHeader, setDrawerHeader] = useState({
  
  })

  const [tabs, setTabs] = useState([
    { title: "Form", sub: "Fill form" },
    {
      title: "Attachments",
      sub: "Upload ",
    },
    { title: "Notes", sub: "Add Note" },
    {
      title: "HandOver",
      sub: "Upload ",
    },
    {
      title: "Approval",
      sub: "Add Note",
    },
  ]);

  useEffect(() => {
    setSelectedTab(0);
  }, [isOpen]);


  useEffect(() => {
  if (whatTodo.toLowerCase()=='apply'.toLowerCase()) {
    if (tabs[selectedTab].title.toLowerCase()=="form".toLowerCase()) {
      setDrawerHeader({title:'Leave Form', description:'Fill your leave form'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Approval".toLowerCase()) {
      setDrawerHeader({title:'Approval', description:'Select your approvals'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Handover".toLowerCase()) {
      setDrawerHeader({title:'Hand Over', description:'Choose whom to hand over to'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Attachments".toLowerCase()) {
      setDrawerHeader({title:'Attachments', description:'Add your attachments'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Notes".toLowerCase()) {
      setDrawerHeader({title:'Notes', description:'Add your notes'});
    }
  }
  if (whatTodo.toLowerCase()=='resume'.toLowerCase()) {
    if (tabs[selectedTab].title.toLowerCase()=="form".toLowerCase()) {
      setDrawerHeader({title:'Return Form', description:'Select your return date'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Approval".toLowerCase()) {
      setDrawerHeader({title:'Approval', description:'Select your approvals'});
    }
  }
  else if (whatTodo.toLowerCase()=='view'.toLowerCase()) {
    if (tabs[selectedTab].title.toLowerCase()=="leave".toLowerCase()) {
      setDrawerHeader({title:'Leave Details', description:'This is the details of your leave'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Approval History".toLowerCase()) {
      setDrawerHeader({title:'Approval History', description:'Her shows your approvals'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Attachments".toLowerCase()) {
      setDrawerHeader({title:'Attachments', description:'The is the list of your attachments'});
    }
    else if (tabs[selectedTab].title.toLowerCase()=="Notes".toLowerCase()) {
      setDrawerHeader({title:'Notes', description:'This are your note history'});
    }
  }
  }, [tabs,selectedTab,whatTodo]);

  const submitForm=()=>{
    if (leaveInformation.type == ""||leaveInformation.from == ""||leaveInformation.to == ""||leaveInformation.no_of_days == ""||leaveInformation.reason == "") {
      alert("Every input in the form must be filled");
    } 
    else{
      console.log(leaveInformation);
      setLeaveInformation({
  type:'',
  from:'',
  to:'',
  no_of_days:'',
  reason:'',
  approvals:[],
  hand_overs:[],
  attachments:[],
  note:'',
  status:'pending'
  })
    }
  }

  // show the drawer for the apply form
  const apply = () => {
    setTabs([
      { title: "Form" },
      {
        title: "Attachments",
      },
      { title: "Notes" },
      {
        title: "HandOver",
      },
      {
        title: "Approval",
      },
    ]);
    setWhatTodo("apply");
    setSideBarNeeded(true);
    setIsOpen(true);
    setSubmitButtonNeeded(true);
  };
  // show the drawer for the resume form
  const resume = () => {
    setTabs([
      { title: "Form", sub: "Fill form" },
      {
        title: "Approval",
        sub: "Add Note",
      },
    ]);
    setWhatTodo("resume");
    setSideBarNeeded(true);
    setIsOpen(true);
    setSubmitButtonNeeded(true);
  };

  // show the drawer for the view form
  const view = () => {
    setWhatTodo("view");
    setSideBarNeeded(true);
    setTabs([
      { title: "Leave" },
      {
        title: "Attachments",
      },
      { title: "Notes" },
      { title: "Approval History" },
    ]);
    setIsOpen(true);
    setSubmitButtonNeeded(false);
  };

  // const optionTabs=[
  //  {
  // id:'leave',
  // label:'Leave',
  //  content: <LeaveTable
  //  setCurrentView={setCurrentView}
  //       view={view}
  //       resume={resume}
  //     />,
  // },
  //  {
  // id:'return',
  // label:'Leave Return',
  //  content: <ReturnTable
  //  setCurrentView={setCurrentView}
  //       view={view}
  //       resume={resume}
  //     />,
  // },
 
  // ]

  return (
    <div className="py-8 font-helvetica">
      <Header apply={apply} />
      {/* <div className="mb-6">
        <Separator separator_text={"Balance"} />
      </div> */}
      {/* <LeaveCards/> */}
      <div className="mb-6">
        <Separator separator_text={"History"} />
      </div>
{/* classNames={{
          tabList:
            'rounded-md bg-tablistcolor gap-0 p-0 bg-opacity-100 shadow-sm',
          tabContent:
            'font-bold bg-opacity-100 tracking-widest group-data-[selected=true]:text-gray-700 text-tablistUnselectedcolor ',
          cursor: 'bg-tabcursorcolor  h-[0.35rem] top-0 w-full',
          tab: 'h-16 border border-[1.2px] border-tablistbordercolor shadow-none bg-opacity-100',
        }} */}
           {/* <Tabs 
items={optionTabs} 
color="secondary"
variant="underlined"
className="w-full"
  classNames={{
            tabList:
              "bg-white gap-6 w-full relative py-4  rounded-none p-0 text-lg border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tabContent: "group-data-[selected=true]:text-[#06b6d4] font-medium text-medium tracking-widest group-data-[selected=true]",
            tab:'h-16'
          }}
>
{(item)=>(
<Tab key={item.label} title={item.label} >
{item.content}
</Tab>
)}
</Tabs> */}

      <LeaveTable
   setCurrentView={setCurrentView}
        view={view}
        resume={resume}
      />
      <Drawer
      handleSubmit={submitForm}
        sideBarNeeded={sideBarNeeded}
        submitButtonNeeded={submitButtonNeeded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        header={drawerHeader}
        tabs={tabs}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {whatTodo == "apply" && (
          <div>
            {tabs[selectedTab].title.toLowerCase() == "form".toLowerCase() && (
              <LeaveForm
                leaveInformation={leaveInformation}
                setLeaveInformation={setLeaveInformation}
              />
            )}
            {tabs[selectedTab].title.toLowerCase() ==
              "Attachments".toLowerCase() && (
              <Attachments
                setInformation={setLeaveInformation}
                setSelectedTab={setSelectedTab}
              />
            )}
            {tabs[selectedTab].title.toLowerCase() == "Notes".toLowerCase() && (
              <Note
                setInformation={setLeaveInformation}
                setSelectedTab={setSelectedTab}
              />
            )}
            {tabs[selectedTab].title.toLowerCase() ==
              "Handover".toLowerCase() && (
              <HandOverForm
                setInformation={setLeaveInformation}
                setSelectedTab={setSelectedTab}
              />
            )}
            {tabs[selectedTab].title.toLowerCase() ==
              "Approval".toLowerCase() && (
              <ApprovalForm
                setInformation={setLeaveInformation}
                setSelectedTab={setSelectedTab}
              />
            )}
          </div>
        )}
        {whatTodo == "resume" && (
          <div>
            {tabs[selectedTab].title.toLowerCase() == "form".toLowerCase() && (
              <LeaveReturnTextForm
                setSelectedTab={setSelectedTab}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                information={leaveReturnInformation}
                setInformation={setLeaveReturnInformation}
              />
            )}
            {tabs[selectedTab].title.toLowerCase() ==
              "Approval".toLowerCase() && (
               <ApprovalForm
                setInformation={setLeaveReturnInformation}
                setSelectedTab={setSelectedTab}
              />
            )}
          </div>
        )}
        {whatTodo == "view" && (
          <div>
            {tabs[selectedTab].title.toLowerCase() == "leave".toLowerCase() && (
              <LeaveDetails currentView={currentView} />
            )}
            {tabs[selectedTab].title.toLowerCase() ==
              "Attachments".toLowerCase() && <AttachmentDetail />}
            {tabs[selectedTab].title.toLowerCase() == "Notes".toLowerCase() && (
              <NoteDetail />
            )}
            {tabs[selectedTab].title.toLowerCase() == "Approval History".toLowerCase() && (
              <LeaveApprovalHistory currentView={currentView}/>
            )}
            
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Leave;
