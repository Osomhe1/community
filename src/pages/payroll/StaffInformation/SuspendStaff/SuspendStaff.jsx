/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import SuspendStaffTable from "./SuspendStaffTable";
import { IoMdSearch } from "react-icons/io";
import PageHeader from "../../../../components/payroll_components/PageHeader";
import { app_routes } from "../../../../utils/app_routes";
import Separator from "../../../../components/payroll_components/Separator";
import ExpandedDrawerWithButton from "../../../../components/modals/ExpandedDrawerWithButton";
import FormDrawer from "../../../../components/payroll_components/FormDrawer";
import AddSuspensionForm from "../../../../components/payroll_components/AddSuspensionForm";
export default function SuspendStaff() {
  const data = [
    {
      _id: 1,
      staff: "John Doe",
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013",
      action: 'Action'
    },
    {
      _id: 2,
      staff: "John Doe",
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013",
      action: 'Action'
    },
    {
      _id: 3,
      staff: "John Doe",
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013",
      action: 'Action'
    },
    {
      _id: 4,
      staff: "John Doe",
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013",
      action: 'Action'
    },
    {
      _id: 5,
      staff: "John Doe",
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013",
      action: 'Action'
    },
    {
      _id: 6,
      staff: "John Doe",
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013",
      action: 'Action'
    },
  ];

  //drawer functions
  const [open, setOpen] = useState({status: false});

  const handleOpenDrawer = () => {
    setOpen({...open, status: true});
  };
  const handleCloseDrawer = () => {
    setOpen({...open, status: false});
  };
  return (
    <Fragment>
      <section className="header">
      <PageHeader header_text={'Suspension'} breadCrumb_data={[{path: app_routes.payroll.staffInformation.index, name: 'Suspend Staff'}, {path: app_routes.payroll.staffInformation.suspend_staff, name: 'Staff'}]} buttonProp = { [{button_text: 'Add Staff Suspension', fn: handleOpenDrawer}]} btnAvailable={true}/>

        {/* suspension table */}
        <section>
        <Separator separator_text={'Staff List'}/>
          

          <SuspendStaffTable rows={data} />
        </section>
      </section>
      <ExpandedDrawerWithButton isOpen={open.status} onClose={handleCloseDrawer} maxWidth={'100%'}>
        <FormDrawer tabs={[{title: 'Add Suspension'}]}>
          <AddSuspensionForm />
        </FormDrawer>
      </ExpandedDrawerWithButton>
    </Fragment>
  );
}
