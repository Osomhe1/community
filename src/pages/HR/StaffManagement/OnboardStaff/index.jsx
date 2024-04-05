/* eslint-disable no-unused-vars */
// import OnBoradingForm from '../../../../components/staff/OnbordingForm'
// import PageHeader from '../../../../components/payroll_components/PageHeader'

import { useEffect, useState } from "react";
import Header from "../../../../components/OnboardComponents/Header";
import Separator from "../../../../components/payroll_components/Separator";
import ApprovedHistoryTable from "../../../../components/OnboardComponents/ApprovedHistoryTable";
import Drawer from "../../../../components/Request&FormComponent/Drawer";
import OnboardTextForm from "../../../../components/Request&FormComponent/OnboardForms/OnboardTextForm";
import Attachment from "../../../../components/Request&FormComponent/Attachement";
import Note from "../../../../components/Request&FormComponent/Note";
import UserDetails from "../../../../components/ApprovalComponents/UserDetails";
import { Button, Tab, Tabs, useDisclosure } from "@nextui-org/react";
import PendingHistoryTable from "../../../../components/OnboardComponents/PendingHistoryTable";
import RejectedHistoryTable from "../../../../components/OnboardComponents/RejectedHistoryTable";
import ApprovalForm from "../../../../components/Request&FormComponent/ApprovalForm";

const OnboardStaff = () => {
const [isOpen, setIsOpen] = useState(false);
  const [whatTodo, setWhatTodo] = useState('');
  const [sideBarNeeded, setSideBarNeeded] = useState(true);
     const [selectedTab, setSelectedTab] = useState(0)
    const [currentUser,setCurrentUser]=useState({});
     const { onOpen } = useDisclosure();

const [userInformation, setUserInformation] = useState({
title:'',
first_name:'',
last_name:'',
other_names:'',
marital_status:'',
profession:'',
email:'',
phone_number:'',
blood_group:'',
nationality:'',
state_of_origin:'',
lga:'',
residential_state:'',
residential_lga:'',
residential_address:'',
directorate:'',
department:'',
unit:'',
designation:'',
grade_level:'',
step:'',
employment_type:'',
date_of_first_appointment:'',
date_of_first_arrival:'',
current_appointment_date:'',
date_of_birth:'',
office_region:'',
})
  const [tabs, setTabs] = useState([
     { title: "Form" },
      {
        title: "Attachments"
      },
      { title: "Notes", },
       {
        title: "Approval",
      },
  ]);

  const tableTabs=[
  {
  id:'pending',
  label:'Pending',
  content:PendingHistoryTable,
  },
  {
  id:'approved',
  label:'Approved',
  content:ApprovedHistoryTable,
  },
  {
  id:'rejected',
  label:'Rejected',
  content:RejectedHistoryTable,
  },
  ]

  useEffect(() => { 
 setSelectedTab(0)
}, [isOpen])

  // show the drawer for the apply form
  const apply = () => {
    setTabs([
      { title: "Form" },
      {
        title: "Attachments"
      },
      { title: "Notes", },
       {
        title: "Approval",
      },
    ]);
    setWhatTodo('new');
    setSideBarNeeded(true);
    setIsOpen(true);
  };


  // show the drawer for the view form
  const view = () => {
    setSideBarNeeded(false);
    setWhatTodo('view');
    setIsOpen(true);
  };

  const submitForm=()=>{
  if (Object.values(userInformation).some(value=>value=='')) {
  alert('Every input must be filled')
}else{
console.log(userInformation);
}
  }


  return (
    <div>
      {/* <div className='py-6'>
        <PageHeader
          header_text={'HR Opration'}
          breadCrumb_data={[
            {
              name: 'HR',
            },
            {
              name: 'On board Staff',
            },
          ]}
          btnAvailable={false}
        />
      </div>

      <div className=''>
        <OnBoradingForm />
      </div> */}


       <div className="py-8 font-helvetica">
      <Header apply={apply} />
     <div className="mb-6">
  <Separator separator_text={'History'}/>
  </div>

        <div className="flex w-full flex-col pb-10">
        <Tabs
          aria-label="Dynamic tabs"
          items={tableTabs}
          color="primary"
          variant="underlined"
          fullWidth={true}
          // onSelectionChange={handleTabChange}
          classNames={{
            tabList:
              "bg-white gap-6 w-full relative  rounded-none p-0 text-lg border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tabContent: "group-data-[selected=true]:text-[#06b6d4] font-medium text-medium",
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label} className="px-0">
             
      <item.content view={view} setCurrentUser={setCurrentUser} />
            </Tab>
          )}
        </Tabs>
      </div>

      <Drawer
      handleSubmit={submitForm}
        sideBarNeeded={sideBarNeeded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
    
    
{whatTodo=='new'&& <div>
{tabs[selectedTab].title.toLowerCase()==('form').toLowerCase()&&<OnboardTextForm userInformation={userInformation} setUserInformation={setUserInformation}/>}
      {tabs[selectedTab].title.toLowerCase()==('Attachments').toLowerCase()&&<Attachment/>}
      {tabs[selectedTab].title.toLowerCase()==('Notes').toLowerCase()&&<Note/>}
      {tabs[selectedTab].title.toLowerCase() ==
              "Approval".toLowerCase() && (
              <ApprovalForm
                // setInformation={setLeaveInformation}
                setSelectedTab={setSelectedTab}
              />
            )}
</div> }
{whatTodo=='view' &&  <UserDetails handleSideModal={setIsOpen} user={currentUser}/> }
      </Drawer>
    </div>
    </div>
  )
}

export default OnboardStaff
