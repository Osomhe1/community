/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Drawer from "../../components/Request&FormComponent/Drawer";
import Header from "../../components/ExitComponents/Header";
import HistoryTable from "../../components/ExitComponents/HistoryTable";
import Separator from "../../components/payroll_components/Separator";
import Note from "../../components/Request&FormComponent/Note";
import Attachments from "../../components/Request&FormComponent/Attachments";
import ExitTextForm from "../../components/Request&FormComponent/ExitForms/ExitTextForm";
import ExitDetails from "../../components/ExitComponents/ExitDetails";
import ApprovalForm from "../../components/Request&FormComponent/ApprovalForm";

const Exit = () => {
     const [exitInformation, setExitInformation] = useState({
  date:'',
  reason:'',
  approvals:[],
  attachments:[],
  note:'',
  status:'pending'
  })
  const [isOpen, setIsOpen] = useState(false);
  const [whatTodo, setWhatTodo] = useState('');
  const [sideBarNeeded, setSideBarNeeded] = useState(true);
  const [currentViewedExitDetails, setCurrentViewedExitDetails] = useState({})
     const [selectedTab, setSelectedTab] = useState(0)


  const [tabs, setTabs] = useState([
    { title: "Form", sub: "Fill form" },
    {
      title: "Attachments",
      sub: "Upload ",
    },
    { title: "Notes", sub: "Add Note" },
    {
        title: "Approval",
        sub: "Add Note",
      },
  ]);

  useEffect(() => { 
 setSelectedTab(0)
}, [isOpen])

  // show the drawer for the apply form
  const apply = () => {
    setTabs([
      { title: "Form", sub: "Fill form" },
      {
        title: "Attachments",
        sub: "Upload ",
      },
      { title: "Notes", sub: "Add Note" },
      {
        title: "Approval",
        sub: "Add Note",
      },
    ]);
    setWhatTodo('apply');
    setSideBarNeeded(true);
    setIsOpen(true);
  };
  // show the drawer for the view form
  const view = () => {
    setSideBarNeeded(false);
    setWhatTodo('view');
    setIsOpen(true);
  };

  const submitForm =()=>{
  if(exitInformation.type==''||exitInformation.date==''){
  alert("Every input in the form must be filled");
}else{
console.log(exitInformation);
}
  }

  return (
    <div className="py-8 font-helvetica">
      <Header addNew={apply} />
     <div className="mb-6">
  <Separator separator_text={'History'}/>
  </div>

      <HistoryTable view={view} setCurrentViewedExitDetails={setCurrentViewedExitDetails} setExitInformation={setExitInformation} addNew={apply} />
      <Drawer
      handleSubmit={submitForm}
        sideBarNeeded={sideBarNeeded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
       
       {whatTodo=='apply' &&  <div>
       {tabs[selectedTab].title.toLowerCase()==('form').toLowerCase()&&<ExitTextForm exitInformation={exitInformation} setExitInformation={setExitInformation} />}
      {tabs[selectedTab].title.toLowerCase()==('Attachments').toLowerCase()&&<Attachments setInformation={setExitInformation} setSelectedTab={setSelectedTab} />}
      {tabs[selectedTab].title.toLowerCase()==('Notes').toLowerCase()&&<Note setInformation={setExitInformation} setSelectedTab={setSelectedTab} />}
        {tabs[selectedTab].title.toLowerCase()==('Approval').toLowerCase()&&<ApprovalForm setInformation={setExitInformation} setSelectedTab={setSelectedTab} />}
       </div> }

       {whatTodo=='view' &&  <ExitDetails currentViewedExitDetails={currentViewedExitDetails} /> }
      </Drawer>
    </div>
  );
};

export default Exit;
