import { useEffect, useState } from "react";
import Header from "./Header";
import Separator from "../../../components/payroll_components/Separator";
import HistoryTable from "./HistoryTable";
import Drawer from "../../../components/Request&FormComponent/Drawer";
import PromotionDetails from "./PromotionDetails";
import PromotionForm from "./PromotionForm";
// import Attachments from "../../Request&FormComponent/Attachments";
// import Note from "../../Request&FormComponent/Note";
// import ApprovalForm from "../../Request&FormComponent/ApprovalForm";

const HRPromotions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whatTodo, setWhatTodo] = useState('');
  const [sideBarNeeded, setSideBarNeeded] = useState(true);
  const [currentViewLoan,setCurrentViewLoan]=useState({});
     const [selectedTab, setSelectedTab] = useState(0)
       const [newPromotion, setNewPromotion] = useState( {
    first_name: "",
    last_name: "",
    promoted_from: "",
    promoted_to: "",
    promotion_reason:"",
    promotion_date:"",
  },);


  const [tabs, setTabs] = useState([
    { title: "Form", sub: "Fill form" },
    {
      title: "Attachments",
      sub: "Upload ",
    },
    { title: "Notes", sub: "Add Note" },
  ]);

  useEffect(() => { 
 setSelectedTab(0)
}, [isOpen])

  // show the Drawer for the apply form
  const addNew = () => {
    setTabs([
      { title: "Form", sub: "Fill form" },
      {
        title: "Attachments",
        sub: "Upload ",
      },
      { title: "Notes", sub: "Add Note" },
    ]);
    setWhatTodo('add');
    setSideBarNeeded(false);
    setIsOpen(true);
  };


  // show the Drawer for the view form
  const view = () => {
    setSideBarNeeded(false);
    setWhatTodo('view');
    setIsOpen(true);
  };

  return (
    <div className="py-8 font-helvetica">
      <Header addNew={addNew} />
     <div className="mb-6">
  <Separator separator_text={'History'}/>
  </div>

      <HistoryTable setCurrentViewLoan={setCurrentViewLoan} view={view}/>
      <Drawer
        sideBarNeeded={sideBarNeeded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
       {whatTodo=='add'&&<div>
       {tabs[selectedTab].title.toLowerCase()==('form').toLowerCase()&&<PromotionForm newPromotion={newPromotion} setNewPromotion={setNewPromotion} setSelectedTab={setSelectedTab} />}
      {/* {tabs[selectedTab].title.toLowerCase()==('Attachments').toLowerCase()&&<Attachments setInformation={setNewPromotion} setSelectedTab={setSelectedTab}/>}
      {tabs[selectedTab].title.toLowerCase()==('Notes').toLowerCase()&&<Note setInformation={setNewPromotion} setSelectedTab={setSelectedTab}/>}
      {tabs[selectedTab].title.toLowerCase()==('Approval').toLowerCase()&&<ApprovalForm setInformation={setNewPromotion} setSelectedTab={setSelectedTab}  />} */}
      </div>}
     {whatTodo=='view' &&  <PromotionDetails handleSideModal={setIsOpen}  currentViewLoan={currentViewLoan}/> }
      </Drawer>
    </div>
  );
};

export default HRPromotions;
