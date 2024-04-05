import { useEffect, useState } from "react";
import Header from "./components/Header";
import TrainingDetails from "./components/TrainingDetails";
import HistoryTable from "./components/HistoryTable";
// import TrainingForm from "./components/TrainingForm";
import Separator from "../../../components/payroll_components/Separator";
import Drawer from "../../../components/Request&FormComponent/Drawer";
import Note from "../../../components/Request&FormComponent/Note";
import Attachments from "../../../components/Request&FormComponent/Attachments";
import { Tab, Tabs } from "@nextui-org/react";
import ApprovalCards from "./components/ApprovalCards";
import { tableData } from "./components/data";
// import NewApprovalForm from "./components/NewApprovalForm";
export const Approval = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whatTodo, setWhatTodo] = useState("");
  const [sideBarNeeded, setSideBarNeeded] = useState(true);
  const [currentViewTraining, setCurrentViewTraining] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTable, setSelectedTable] = useState("All Approvals");
  const [selectedTableData, setSelectedTableData] = useState([])
  const [newApproval, setNewApproval] = useState({
      approver: "LASISI OLAYINKA",
      sent_on: '2024-09-02',
      responded_on: '2024-09-14',
      location: 'Abule-egba',
      authentication: "2-Factor Auth",
      status: 'approved',
  });



  const [tabs, setTabs] = useState([
    { title: "Form", sub: "Fill form" },
    // {
    //   title: "Attachments",
    //   sub: "Upload ",
    // },
    // { title: "Notes", sub: "Add Note" },
  ]);

  useEffect(() => {
    setSelectedTab(0);
  }, [isOpen]);


  useEffect(() => {
    if (selectedTable=='All Approvals') {
      setSelectedTableData(tableData)
    }
    else if (selectedTable=='Approval Requests') {
      setSelectedTableData(tableData.filter(data=>data.status=='pending'))
    }
    else if (selectedTable=='Approved Approvals') {
      setSelectedTableData(tableData.filter(data=>data.status=='approved'))
    }
    else if (selectedTable=='Rejected Approvals') {
      setSelectedTableData(tableData.filter(data=>data.status=='rejected'))
    }
  }, [selectedTable]);

const SubmitForm=()=>{
console.log(newApproval);
}

  // show the drawer for the apply form
  const addNew = () => {
    setTabs([
      { title: "Form", sub: "Fill form" },
      // {
      //   title: "Attachments",
      //   sub: "Upload ",
      // },
      // { title: "Notes", sub: "Add Note" },
    ]);
    setWhatTodo("add");
    setSideBarNeeded(true);
    setIsOpen(true);
  };

  // show the drawer for the view form
  const view = () => {
    setSideBarNeeded(false);
    setWhatTodo("view");
    setIsOpen(true);
  };
  // show the drawer for the view form
  // const getSelectedTab = (item) => {
  //  console.log(item);
  // };

  const optionTabs=[
   {
  id:'all_approvals',
  label:'All Approvals',
   content: <HistoryTable
   tableData={selectedTableData}
        setCurrentViewTraining={setCurrentViewTraining}
        view={view}
      />,
  },
  {
  id:'approval_requests',
  label:'Approval Requests',
   content: <HistoryTable
   tableData={selectedTableData}
        setCurrentViewTraining={setCurrentViewTraining}
        view={view}
      />,
  },
  {
  id:'aprroved_approvals',
  label:'Approved Approvals',
   content: <HistoryTable
   tableData={selectedTableData}
        setCurrentViewTraining={setCurrentViewTraining}
        view={view}
      />,
  },
  {
  id:'rejected_approvals',
  label:'Rejected Approvals',
   content: <HistoryTable
   tableData={selectedTableData}
        setCurrentViewTraining={setCurrentViewTraining}
        view={view}
      />,
  },
 
  ]


  return (
    <div className="py-8 font-helvetica">
      <Header addNew={addNew} />
      <div className="mb-6">
        <Separator separator_text={"History"} />
      </div>
      <div className="my-8">
 <ApprovalCards/>
      </div>
      <Tabs 
items={optionTabs} 
color="secondary"
classNames={{
tabList:'bg-slate-200 text-medium',
}} 
onSelectionChange={setSelectedTable}
>
{(item)=>(
<Tab key={item.label} title={item.label} >
{item.content}
</Tab>
)}
</Tabs>
      <Drawer
      handleSubmit={SubmitForm}
        sideBarNeeded={sideBarNeeded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {whatTodo == "add" && (
          <div>
            {/* {tabs[selectedTab].title.toLowerCase() == "form".toLowerCase() && (
              <NewApprovalForm
                newApproval={newApproval}
                setNewApproval={setNewApproval}
                setSelectedTab={setSelectedTab}
              />
            )} */}
            {tabs[selectedTab].title.toLowerCase()==('Attachments').toLowerCase()&&<Attachments setInformation={setNewApproval} setSelectedTab={setSelectedTab}/>}
      {tabs[selectedTab].title.toLowerCase()==('Notes').toLowerCase()&&<Note setInformation={setNewApproval} setSelectedTab={setSelectedTab}/>}
          </div>
        )}
        {whatTodo == "view" && (
          <TrainingDetails
            handleSideModal={setIsOpen}
            currentViewTraining={currentViewTraining}
          />
        )}
      </Drawer>
    </div>
  );
};
