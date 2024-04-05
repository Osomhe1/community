/* eslint-disable no-unused-vars */
import { useState } from "react";
import ExpandedDrawerWithButton from "../../../../components/modals/ExpandedDrawerWithButton";
import Separator from "../../../../components/payroll_components/Separator";
import PageHeader from "../../../../components/payroll_components/PageHeader";
import { app_routes } from "../../../../utils/app_routes";
import FormDrawer from "../../../../components/payroll_components/FormDrawer";
import LoansTable from "./LoansTable";
import Add_UploadStaffLoanForm from "../../../../components/payroll_components/Add_UploadStaffLoanForm";
const data = [{
  _id: 1,
  staffName: "ACCESS PENSION",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 2,
   staffName: "AIICO PENSIONS MANAGERS LTD",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 3,
 staffName: "ACCESS BANK PLC",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 4,
 staffName: "ACCESS BANK PLC",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 5,
 staffName: "ACCESS BANK PLC",
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 6,
 staffName: "ACCESS BANK PLC",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 7,
 staffName: "FIRST GUARANTEE PENSIONS",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
{
  _id: 8,
    staffName: "FIDELITY PENSIONS",
  
  empNo: "ACC-001",
  loan: "ACC-001",
  monthPayment: "ACC-001",
  principal: "ACC-001",
  totalPaid: "ACC-001",
  balance: "ACC-001",
  durationPaid: "ACC-001",
  durationLeft: "ACC-001",
  startDate: "ACC-001",
  endDate: "ACC-001",
  status: "ACC-001",
},
]
export default function Loans() {
  const [open, setOpen] = useState({status: false, attribute: null, role: null});

  const handleOpenDrawer = (__param) => {
    setOpen({...open, status: true});
  };
  const handleCloseDrawer = () => {
    setOpen({...open, status: false});
  };

  return (
    <>
      <section className="header">
        <section>
          <PageHeader header_text={'Loans'} breadCrumb_data={[{path: app_routes.payroll.setting.index, name: 'Payroll'}, {path: app_routes.payroll.setting.banks, name: 'Loans'}]} buttonProp = { [{button_text: 'Upload/Add Staff Loan', fn: handleOpenDrawer}]} btnAvailable={true}/>
        </section>

        {/* loans table */}
        <section>
          {/* <Separator separator_text={'Attributes List'}/> */}
         
          <LoansTable rows={data} handleOpenDrawer={handleOpenDrawer} />
        </section>
      </section>
      <ExpandedDrawerWithButton isOpen={open.status} onClose={handleCloseDrawer}>
        <FormDrawer >
          <Add_UploadStaffLoanForm  />
        </FormDrawer>
      </ExpandedDrawerWithButton>
    </>
  );
}
