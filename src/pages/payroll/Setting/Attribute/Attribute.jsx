/* eslint-disable no-unused-vars */
import { useState } from "react";
import ExpandedDrawerWithButton from "../../../../components/modals/ExpandedDrawerWithButton";
import Separator from "../../../../components/payroll_components/Separator";
import PageHeader from "../../../../components/payroll_components/PageHeader";
import { app_routes } from "../../../../utils/app_routes";
import FormDrawer from "../../../../components/payroll_components/FormDrawer";
import AttributeTable from "./Attributetable";
import NewAttributeForm from "../../../../components/payroll_components/NewAttributeForm";
const data = [{
  _id: 100,
  name: "ACCESS PENSION",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 200,
   name: "AIICO PENSIONS MANAGERS LTD",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 300,
 name: "ACCESS BANK PLC",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 467,
 name: "ACCESS BANK PLC",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 590,
 name: "ACCESS BANK PLC",
  code: "ACC-001",abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 629,
 name: "ACCESS BANK PLC",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 701,
 name: "FIRST GUARANTEE PENSIONS",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
{
  _id: 8099,
    name: "FIDELITY PENSIONS",
  code: "ACC-001",
  abbrev: "ACC-001",
  regular: "ACC-001",
  contribution: "ACC-001",
  type: "ACC-001",
  calculation: "ACC-001",
  recompute: "ACC-001"
},
]
export default function Attribute() {
  const [open, setOpen] = useState({status: false, attribute: null, role: null});

  const handleOpenDrawer = (__param) => {
    console.log(__param)
    setOpen({...open, status: true, role: __param?.role});
  };
  const handleCloseDrawer = () => {
    setOpen({...open, status: false});
  };

  return (
    <>
      <section className="header">
        <section>
          <PageHeader header_text={'Attributes'} breadCrumb_data={[{path: app_routes.payroll.setting.index, name: 'Setting'}, {path: app_routes.payroll.setting.banks, name: 'Attributes'}]} buttonProp = { [{button_text: 'Add New Attributes', fn: handleOpenDrawer}]} btnAvailable={true}/>
        </section>

        {/* attributes table */}
        <section>
          {/* <Separator separator_text={'Attributes List'}/> */}
         
          <AttributeTable rows={data} handleOpenDrawer={handleOpenDrawer} />
        </section>
      </section>
      <ExpandedDrawerWithButton isOpen={open.status} onClose={handleCloseDrawer}>
        <FormDrawer tabs={[{title: open?.role==='edit'?'Edit Attribute': "Add New Attribute"}]}>
          <NewAttributeForm  />
        </FormDrawer>
      </ExpandedDrawerWithButton>
    </>
  );
}
