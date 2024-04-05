/* eslint-disable no-unused-vars */
import { useState } from "react";
import PageHeader from "../../../../components/payroll_components/PageHeader";
import FormDrawer from "../../../../components/payroll_components/FormDrawer";
import ExpandedDrawerWithButton from "../../../../components/modals/ExpandedDrawerWithButton";
import { app_routes } from "../../../../utils/app_routes";
import Drawer from "./Drawer";
import TemplateEditor from "./TemplateEditor";
import FormBuilder from "./FormBuilder";
import SettingForm from "./SettingForm";


export default function PerformanceSetup() {
    const [open, setOpen] = useState({status: false, role: null})
  const handleOpenDrawer = (role) => {
    setOpen({status: true, role: role});
  };
  const handleCloseDrawer = () => {
    setOpen({status: false});
  };



  return (
    <>
      <main>
        <section>
          <PageHeader
            header_text={"Setup"}
            breadCrumb_data={[
              { path: app_routes.hrOperation.performance.index, name: "Hr" },
              { path: app_routes.hrOperation.performance.index, name: "Performance" },
              { path: app_routes.hrOperation.performance.setup, name: "Setup" },
            ]}
            buttonProp={[{ button_text: "New Template", fn: handleOpenDrawer }]}
            btnAvailable={true}
          />

        {/* <TemplateEditor /> */}
        </section>
      </main>



      <ExpandedDrawerWithButton
        isOpen={open.status}
        onClose={handleCloseDrawer}
        maxWidth={'w-[70rem]'}
      >
        <FormDrawer 
        tabs = {[
          { title: "Create", component: <FormBuilder role={"create"}/> },
          { title: "Setting", component: <SettingForm /> },
        ]}
        >
          {/* <div className="my-10 mx-10">
            <FormBuilder role={"create"}/>
          </div> */}
          <FormBuilder role={"create"}/>
        </FormDrawer>
      </ExpandedDrawerWithButton>

      
    </>
  );
}
