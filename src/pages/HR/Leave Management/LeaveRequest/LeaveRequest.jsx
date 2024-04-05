/* eslint-disable no-unused-vars */

import PageHeader from "../../../../components/payroll_components/PageHeader";
import Separator from "../../../../components/payroll_components/Separator";
import LeaveRequestTable from "./LeaveRequestTable";
export default function LeaveRequest() {
  const data = [
    {
      _id: 1,
      staff: "TOR PAUL AONDOASEER",
      date: "2023-12-01",
      type: "Annual",
      duration: "30",
      startDate: '2023-12-11',
      endDate: '2023-12-11',
      leaveReturnDate: '2023-02-09',
      status: 'Pending',
      
    },
    {
      _id: 2,
      staff: "TOR PAUL AONDOASEER",
      date: "2023-12-01",
      type: "Annual",
      duration: "30",
      startDate: '2023-12-11',
      endDate: '2023-12-11',
      leaveReturnDate: '2023-02-09',
      status: 'Pending',
      
    },
    {
      _id: 3,
      staff: "TOR PAUL AONDOASEER",
      date: "2023-12-01",
      type: "Annual",
      duration: "30",
      startDate: '2023-12-11',
      endDate: '2023-12-11',
      leaveReturnDate: '2023-02-09',
      status: 'Pending',
      
    },
    {
      _id: 4,
      staff: "TOR PAUL AONDOASEER",
      date: "2023-12-01",
      type: "Annual",
      duration: "30",
      startDate: '2023-12-11',
      endDate: '2023-12-11',
      leaveReturnDate: '2023-02-09',
      status: 'Pending',
      
    },
    {
      _id: 5,
      staff: "TOR PAUL AONDOASEER",
      date: "2023-12-01",
      type: "Annual",
      duration: "30",
      startDate: '2023-12-11',
      endDate: '2023-12-11',
      leaveReturnDate: '2023-02-09',
      status: 'Pending',
      
    },
    
  ];
  return (
    <>
      <section className="max-w-[90rem] !overflow-hidden">
      <PageHeader header_text={'Leave Requests'} btnAvailable = {false}/>
        
         {/* leave request list table */}
         <section>
         {/* <Separator separator_text={'Leave Request List'}/> */}

          <LeaveRequestTable rows={data} />
        </section>
      </section>
    </>
  );
}
