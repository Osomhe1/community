import { useState, useMemo } from "react";
import PageHeader from "../../../../components/payroll_components/PageHeader";
import Separator from "../../../../components/payroll_components/Separator";
import TopCards from "./TopCards";
import ExpandedDrawerWithButton from "../../../../components/modals/ExpandedDrawerWithButton";
import FormDrawer from "../../../../components/payroll_components/FormDrawer";

import PendingTrainingTable from "../PendingTraining/PendingTrainingTable";
import NewTrainingForm from "./NewTrainingForm";
import { trainingData } from "./trainingData.js"



export default function TrainingDashboard() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("")


    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }





    const rowData = useMemo(()=>{
      if(selected==='pending_training'){
        return trainingData?.filter(item=>(item?.category)==='Pending')
      }
      else if(selected === "cancelled_training"){
        return trainingData?.filter(item=>(item?.category)==='Cancelled')

      }
      else if(selected === "completed_training"){
        return trainingData?.filter(item=>(item?.category)==='Completed')
      }else{
        return trainingData?.filter(item=>(item?.category)==='Pending')
      }
    }, [selected])
  return (
    <>
      <main>
        <PageHeader
          header_text={"Training"}
          breadCrumb_data={[{ name: "Self Service" }, { name: "Training" }]}
          buttonProp={[{ button_text: "New Training", fn: handleOpen }]}
        />
        <div className="mt-5">
          <hr />
        </div>
        <>
          <Separator separator_text={"OVERVIEW"} />
          <TopCards setSelected={setSelected}/>
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
          <Tab key="pending_training" title="Pending Training">
            <PendingTrainingTable rows={trainingData?.filter(item=>(item?.category)==='Pending')}/>
          </Tab>
          <Tab key="cencelled_training" title="Cancelled Taining">
            <PendingTrainingTable rows={trainingData?.filter(item=>(item?.category)==='Cancelled')}/>
          </Tab>
          <Tab key="completed_training" title="Completed Training">
            <PendingTrainingTable rows={trainingData?.filter(item=>(item?.category)==='Completed')}/>
          </Tab>
          
          </Tabs> */}

          <PendingTrainingTable rows={rowData}/>


      </main>





      <ExpandedDrawerWithButton isOpen={open} onClose={handleClose}>
        <FormDrawer tabs={[{title: "New Training", }]}>
          <NewTrainingForm />
        </FormDrawer>
      </ExpandedDrawerWithButton>
    </>
  );
}
