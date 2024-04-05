/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import StaffDataTable from "./StaffDataTable";
import { IoMdSearch } from "react-icons/io";
import Separator from "../../../../components/payroll_components/Separator";
import PageHeader from "../../../../components/payroll_components/PageHeader";
import { app_routes } from "../../../../utils/app_routes";
import { useNavigate } from "react-router";
export default function StaffRecord() {
  const navigate = useNavigate({});
  const data = [
    {
      _id: 1,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
    {
      _id: 2,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
    {
      _id: 3,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
    {
      _id: 4,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
    {
      _id: 5,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
    {
      _id: 6,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
    {
      _id: 7,
      dateAdded: "1 Jan 2013",
      expiryDate: "1 Jan 2013"
    },
  ];

  const handleChangePfa=(route)=>{
    navigate(route)
  }
  return (
    <Fragment>
      <section className="header">
      <PageHeader header_text={'Staff Record'} breadCrumb_data={[{path: app_routes.payroll.staffInformation.index, name: 'Staff Information'}, {path: app_routes.payroll.staffInformation.groups, name: 'Staff Record'}]} buttonProp = { [{button_text: 'Change Staff PFA', fn: handleChangePfa, fnParameter: app_routes?.payroll?.setting?.pfa_change}, {button_text: 'Change Staff Bank', fn: handleChangePfa, fnParameter: app_routes?.payroll?.setting?.bank_change}]} btnAvailable={true} />
       
        {/* staff record table */}
        <section>
        <Separator separator_text={'Staff Record'}/>
          
          <StaffDataTable rows={data} />
        </section>
      </section>
    </Fragment>
  );
}
