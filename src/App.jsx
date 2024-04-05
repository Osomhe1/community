/* eslint-disable no-unused-vars */
import { Outlet, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import AllApps from './pages/AllApps'
import Authentication from './pages/Authentication'

import Home from './pages/home/Home'
import Forms from './pages/forms'
import PayrollDashboard from './pages/payroll/PayrollDashboard/PayrollDashboard'
import StaffInformation from './pages/payroll/StaffInformation/StaffInformation'
import Setting from './pages/payroll/Setting/Setting'
import Payroll from './pages/payroll/Payroll/Payroll'
import Productivity from './pages/payroll/Productivity/Productivity'
import Report from './pages/payroll/Report/Report'
import ActiveStaff from './pages/payroll/Report/ActiveStaff/ActiveStaff'
import ReportPayroll from './pages/payroll/Report/ReportPayroll/ReportPayroll'
import ExitStaff from './pages/payroll/Report/ExitStaff/ExitStaff'
import Workflow from './pages/payroll/Workflow/Workflow'
import StaffRecord from './pages/payroll/StaffInformation/StaffRecord/StaffRecord'
import SuspendStaff from './pages/payroll/StaffInformation/SuspendStaff/SuspendStaff'
import StaffGroup from './pages/payroll/StaffInformation/StaffGroup/StaffGroup'
import SuspensionList from './pages/payroll/StaffInformation/SuspensionList/SuspensionList'

import Profile from './pages/Profile'
import TableContainer from './pages/tables'
import Bank from './pages/payroll/Setting/Bank/Bank'
import Pension from './pages/payroll/Setting/Pension/Pension'
import Leave from './pages/Leave/Leave'
import Attribute from './pages/payroll/Setting/Attribute/Attribute'
import StaffRank from './pages/payroll/Setting/StaffRank/StaffRank'
import NotFound from './components/general/NotFound'
import Arrears from './pages/payroll/Payroll/Arrears/Arrears'
import Loans from './pages/payroll/Payroll/Loans/Loans'
import Contribution from './pages/payroll/Payroll/Contribution/Contribution'
import OtherArrears from './pages/payroll/Payroll/OtherArrears/OtherArrears'
import Promotion from './pages/payroll/Payroll/Promotion/Promotion'
import PayRun from './pages/payroll/Payroll/PayRun/PayRun'
import Login from './pages/login/Login'
import ChangePfa from './pages/payroll/Setting/ChangePfa/ChangePfa'
import ChangeBank from './pages/payroll/Setting/ChangeBank/ChangeBank'
import Recalculate from './pages/payroll/Payroll/Recalculate/Recalculate'
import Approval from './pages/Approval/Approval'
import Training from './pages/Training/Training'
import Payslip from './pages/Payslip/Payslip'
import Family from './pages/Family/Family'
import Performance from './pages/Performance/Performance'
import NextOfKin from './pages/NextOfKIn/NextOfKin'
import Languages from './pages/Languages/Languages'
import Medical from './pages/Medical/Medical'
import PendingTraining from './pages/Training/PendingTraining/PendingTraining'
import { useEffect } from 'react'
import useCurrentUser from './hooks/useCurrentUser'
import TrainingFee from './pages/Training/TrainingFee/TrainingFee'
import ApprovedTraining from './pages/Training/ApprovedTraining/ApprovedTraining'
import TrainingStatus from './pages/Training/TrainingStatus/TrainingStatus'
import Attendance from './pages/Attendance/Attendance'
import Audit from './pages/Audit/Audit'
import Onboard_Await_Audit from './pages/Audit/Onboard_Await_Audit/Onboard_Await_Audit'
import OnboardApproved from './pages/Audit/OnboardApproved/OnboardApproved'
import PendingAudit from './pages/Audit/PendingAudit/PendingAudit'
import ApprovedAudit from './pages/Audit/ApprovedAudit/ApprovedAudit'
import RejectedAudit from './pages/Audit/RejectedAudit/RejectedAudit'

import RequestRoom from './pages/RequestRoom'
import OnboardStaff from './pages/HR/StaffManagement/OnboardStaff'
import LeaveRequest from './pages/HR/Leave Management/LeaveRequest/LeaveRequest'
import AwaitingApproval from './pages/HR/StaffManagement/AwaitingApproval'
import HRApproval from './pages/HR/StaffManagement/Approval'
import Template from './pages/HR/Performance/Templates'
import PerformanceReports from './pages/HR/Performance/Reports'

import AuditStaffComplaint from './pages/HR/StaffManagement/AuditStaffComplaint'
import Reports from './pages/HR/StaffManagement/Reports'
import StaffDetails from './pages/HR/StaffManagement/StaffDetails'
import StaffExit from './pages/HR/StaffManagement/Staff Exit'

// import Record from './pages/HR/Performance/Record'
import Settings from './pages/HR/Performance/Settings'
import AwaitApproval from './pages/HR/Leave Management/AwaitApproval/AwaitApproval'
import LeaveReturnRequests from './pages/HR/Leave Management/LeaveReturnRequests'
import LeaveReturnApproval from './pages/HR/Leave Management/LeaveReturnApprovals'
import ApprovedLeave from './pages/HR/Leave Management/ApprovedLeave'
import ApprovedReturnLeave from './pages/HR/Leave Management/ApprovedReturnLeave'
import LeaveReport from './pages/HR/Leave Management/LeaveReports'
import More from './pages/HR/Performance/More'
import RequestAndForms from './pages/RequestAndForms'
import Institution from './pages/HR/Settings/Institution'
import Courses from './pages/HR/Settings/Courses'
import Departments from './pages/HR/Settings/Departments'
import Designations from './pages/HR/Settings/Designations'
import Directorates from './pages/HR/Settings/Directorates'
import Units from './pages/HR/Settings/Units'
import Degrees from './pages/HR/Settings/Degrees'
import Holidays from './pages/HR/Settings/Holidays'
import Pensions from './pages/HR/Settings/Pensions'
import Create from './pages/HR/Variations/Create'
import PendingVariation from './pages/HR/Variations/PendingVariation'
import AuditPendingVariation from './pages/HR/Variations/AuditPendingVariation'
import AuditApprovedVariation from './pages/HR/Variations/AuditApprovedVariation'
import AuditRejectedVariation from './pages/HR/Variations/AuditRejectedVariation'
import Pupilage from './pages/HR/Variations/Pupilage'
import HrTraining from './pages/HR/Training'
import Industrail from './pages/HR/Industrail'
import HRPromotions from './pages/HR/Promotions'
import HRForms from './pages/HR/HRForms'
import HRReports from './pages/HR/Reports'
import Deployment from './pages/HR/Deployment'
import It from './pages/IT'
import Events from './pages/Events'
import Attachments from './pages/SelfService/Attachments'
import Documents from './pages/SelfService/Documents'
import Timeline from './pages/SelfService/Timeline'
import TrainingDashboard from './pages/SelfService/Training/TrainingDashboard/TrainingDashboard'
import Aper from './pages/SelfService/Aper'
import LeaveHandover from './pages/SelfService/LeaveHandover'
import MessageRoom from './pages/home/Engage/MessageRoom'
import Memo from './pages/home/Engage/memo'
import WorkflowMemos from './pages/workflow/Memos/WorkflowMemos'
import Announcement from './pages/HR/Announcement'
import NewsPage from './pages/News'
import OurCourses from './pages/Courses'
import Ai from './pages/AI'
import Shopping from './pages/Shopping'
import Services from './pages/Services'
import HrPerformance from './pages/HR/Performance'
import PerformanceSetup from './pages/HR/Performance/Setup'
import PerformanceReview from './pages/HR/Performance/Review'
import {Approval as HrApproval} from './pages/HR/Approval/Approval'
import HrExit from './pages/HR/Exit/Exit'
import PerformanceTeamMapping from './pages/HR/Performance/TeamMapping'
import PerformanceTakeAction from './pages/HR/Performance/TakeAction'
import MemoDashboard from './pages/home/Engage/memo/MemoDashboard'
import AdminSettings from './pages/Integrate/Settings'
// import MyCourses from './components/CoursesComponent/MyCourses'
import GroupChatRoom from './pages/home/Engage/GroupChat'

import BirthdayRoom from './pages/home/Engage/BirthdayRoom/BirthdayRoom'
import Expenses from './pages/Expenses/Expenses'
import Exit from './pages/Exit/Exit'
import Discipline from './pages/Discipline/Descipline'
import Group from './pages/home/Engage/Group'
import Orders from './pages/Shopping/Orders'
import Tickets from './pages/home/Engage/tickets/Tickets'
import Request from './pages/SelfService/Request'
import ConnectAccount from './pages/Integrate/ConnectAccount'

const App = () => {
  const { userData } = useCurrentUser()
  const navigate = useNavigate()


  useEffect(() => {
    // Function to handle keyboard events
    function handleKeyDown(event) {
      const key = event.key;
      const delta = 100; // You can adjust the scroll speed as needed
      
      if (key === 'ArrowUp') {
        window.scrollBy(0, -delta); // Scroll up
      } else if (key === 'ArrowDown') {
        window.scrollBy(0, delta); // Scroll down
      }
    }

    // Add event listener to the window
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);




  useEffect(() => {
    if (!userData) {
      navigate('/login')
    }
  }, [userData, navigate])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<RootLayout />}>
        <Route path='' element={<Navigate to='/engage/posts' />} />
        <Route path='/engage/posts' element={<Home />} />
        <Route path='/engage/message_rooms' element={<MessageRoom />} />
        <Route path='/engage/memos' element={<MemoDashboard />} />
        <Route path='/engage/engage_ai' element={<Ai />} />
        <Route path='/engage/group' element={<Group />} />
        {/* <Route path='/engage/group' element={<GroupChatRoom />} /> */}
        {/* <Route path='/engage/events' element={<BirthdayRoom />} /> */}
        <Route path='/engage/tickets' element={<Tickets />} />
        <Route path='/engage/news' element={<NewsPage />} />

      {/* Market place */}
      <Route path='/marketplace' element={<Outlet/>}>
        {/* <Route path='mycourses' element={<MyCourses />} /> */}
        <Route path='services' element={<Services />} />
        <Route path='shopping' element={<Shopping />} />
        <Route path='orders' element={<Orders />} />
      </Route>

        {/* news */}



        {/* learning and Dev */}
        <Route path='/learning/courses' element={<OurCourses />} />

        {/* self service */}
        {/* <Route path='/self/requests' element={<RequestAndForms />} /> */}
        <Route path='/self/requests' element={<Request />} />
        <Route path='/self/performance' element={<Performance />} />
        <Route path='/self/profile' element={<Profile />} />
        <Route path='/self/leave' element={<Leave />} />
        <Route path='/self/approvals' element={<Approval />} />
        <Route path='/self/attendance' element={<Attendance />} />
        <Route path='/self/expenses' element={<Expenses />} />
        <Route path='/self/exit' element={<Exit />} />

        <Route path='self/training' element={<Outlet />}>
          <Route path='' element={<TrainingDashboard />} />
          <Route path='self/pending_training' element={<PendingTraining />} />
          <Route path='self/training_fees' element={<TrainingFee />} />
          <Route path='self/approved_training' element={<ApprovedTraining />} />
          <Route path='self/training_status' element={<TrainingStatus />} />
        </Route>
        {/* self service */}

        {/* self service */}

        {/* hrms */}
        <Route path='/hr/onboard' element={<OnboardStaff />} />
        <Route path='/hr/report' element={<Reports />} />
        <Route path='/hr/exit' element={<StaffExit />} />
        <Route path='/hr/training' element={<HrTraining />} />
        <Route path='/hr/promotions' element={<HRPromotions />} />
        <Route path='/hr/transfer' element={<Deployment />} />
        <Route path='/hr/leave' element={<LeaveRequest />} />
        <Route path='/hr/variation' element={<Create />} />
        <Route path='/hr/staff_data' element={<StaffDetails />} />
        <Route path='/hr/performance' element={<HrPerformance />} />
        <Route path='/hr/attendance' element={<Attendance />} />
        <Route path='/hr/announcement' element={<Announcement />} />
        <Route path='/hr/discipline' element={<Discipline />} />

        <Route path='/hr/industial' element={<Industrail />} />
        <Route path='/hr/hrforms' element={<HRForms />} />
        <Route path='/hr/approvals' element={<HrApproval />} />
        <Route path='/hr/exits' element={<HrExit />} />
        {/* hrms */}

        {/* payroll */}

        <Route path='/payroll' element={<Outlet />}>
          <Route path='home' element={<PayrollDashboard />} />
          <Route path='payrun' element={<PayRun />} />
          <Route path='information' element={<Outlet />}>
            <Route path='' element={<StaffInformation />} />
            <Route path='details' element={<StaffRecord />} />
            <Route path='suspend' element={<SuspendStaff />} />
            <Route path='groups' element={<StaffGroup />} />
            <Route path='suspend_list' element={<SuspensionList />} />
          </Route>
          <Route path='settings' element={<Outlet />}>
            <Route path='' element={<Setting />} />
            <Route path='banks' element={<Bank />} />
            <Route path='pfas' element={<Pension />} />
            <Route path='attributes' element={<Attribute />} />
            <Route path='staff_rank' element={<StaffRank />} />
            <Route path='pfa_change' element={<ChangePfa />} />
            <Route path='bank_change' element={<ChangeBank />} />
          </Route>

          <Route path='payroll' element={<Outlet />}>
            <Route path='' element={<Payroll />} />
            <Route path='contribution' element={<Contribution />} />
            <Route path='loans' element={<Loans />} />
            <Route path='arrears' element={<Arrears />} />
            <Route path='other_arrears' element={<OtherArrears />} />
            <Route path='promotions' element={<Promotion />} />
            {/* <Route path='payrun' element={<PayRun />} />  */}
            <Route path='calculation' element={<Recalculate />} />
          </Route>
          <Route path='productivity' element={<Productivity />} />
          <Route path='reports' element={<Outlet />}>
            <Route path='' element={<Report />} />
            <Route path='staff' element={<ActiveStaff />} />
            <Route path='exited_staff' element={<ExitStaff />} />
            <Route path='payroll' element={<ReportPayroll />} />
            <Route path='external' element={<ActiveStaff />} />
          </Route>
          <Route path='workflow' element={<Workflow />} />
        </Route>
        {/* payroll */}

        {/* audit */}

        <Route path='/audit' element={<Outlet />}>
          <Route path='' element={<Audit />} />
          <Route path='onboarding' element={<Onboard_Await_Audit />} />
          <Route path='onboard_approved' element={<OnboardApproved />} />
          <Route path='audit_pending' element={<PendingAudit />} />
          <Route path='audit_rejected' element={<RejectedAudit />} />
          <Route path='audit_approved' element={<ApprovedAudit />} />
        </Route>
        {/* audit */}

        {/* workflow */}

        <Route path='/workflow/template' element={<Workflow />} />
        <Route path='/workflow/memos' element={<WorkflowMemos />} />

        {/* workflow */}

        {/* integrate */}
        <Route path='/integrate/settings' element={<AdminSettings />} />
        <Route path='/integrate/connect_accounts' element={<ConnectAccount />} />
        {/* integrate */}

        {/* event */}

        {/* event */}

        <Route path='/Applications/events' element={<Events />} />

        <Route path='/request_and_forms' element={<RequestAndForms />} />
        <Route path='/it' element={<It />} />
        <Route path='/events' element={<Events />} />
        <Route path='/employee/employee' element={<AllApps />} />
        <Route path='/employee/table' element={<TableContainer />} />
        <Route path='/employee/forms' element={<Forms />} />
        <Route path='/employee/attendance' element={<Attendance />} />

        <Route path='/payroll' element={<Outlet />}>
          <Route path='home' element={<PayrollDashboard />} />
          <Route path='staff-information' element={<Outlet />}>
            <Route path='' element={<StaffInformation />} />
            <Route path='details' element={<StaffRecord />} />
            <Route path='suspend' element={<SuspendStaff />} />
            <Route path='groups' element={<StaffGroup />} />
            <Route path='suspend_list' element={<SuspensionList />} />
          </Route>
          <Route path='settings' element={<Outlet />}>
            <Route path='' element={<Setting />} />
            <Route path='banks' element={<Bank />} />
            <Route path='pfas' element={<Pension />} />
            <Route path='attributes' element={<Attribute />} />
            <Route path='staff_rank' element={<StaffRank />} />
            <Route path='pfa_change' element={<ChangePfa />} />
            <Route path='bank_change' element={<ChangeBank />} />
          </Route>
          <Route path='payroll' element={<Outlet />}>
            <Route path='' element={<Payroll />} />
            <Route path='contribution' element={<Contribution />} />
            <Route path='loans' element={<Loans />} />
            <Route path='arrears' element={<Arrears />} />
            <Route path='other_arrears' element={<OtherArrears />} />
            <Route path='promotions' element={<Promotion />} />
            <Route path='pay_run' element={<PayRun />} />
            <Route path='calculation' element={<Recalculate />} />
          </Route>
          <Route path='productivity' element={<Productivity />} />
          <Route path='reports' element={<Outlet />}>
            <Route path='' element={<Report />} />
            <Route path='staff' element={<ActiveStaff />} />
            <Route path='exited_staff' element={<ExitStaff />} />
            <Route path='payroll' element={<ReportPayroll />} />
            <Route path='external' element={<ActiveStaff />} />
          </Route>
          <Route path='workflow' element={<Workflow />} />
        </Route>

        <Route path='/Enterprise/employee' element={<AllApps />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/Enterprise/forms' element={<Forms />} />

        <Route path='/training' element={<Outlet />}>
          <Route path='' element={<Training />} />
          <Route path='pending_training' element={<PendingTraining />} />
          <Route path='training_fees' element={<TrainingFee />} />
          <Route path='approved_training' element={<ApprovedTraining />} />
          <Route path='training_status' element={<TrainingStatus />} />
        </Route>

        <Route path='/audit' element={<Outlet />}>
          <Route path='' element={<Audit />} />
          <Route
            path='onboard_awaiting_audit'
            element={<Onboard_Await_Audit />}
          />
          <Route path='onboard_approved' element={<OnboardApproved />} />
          <Route path='audit_pending' element={<PendingAudit />} />
          <Route path='audit_rejected' element={<RejectedAudit />} />
          <Route path='audit_approved' element={<ApprovedAudit />} />
        </Route>

        {/* self service */}
        <Route path='/payslip' element={<Payslip />} />
        <Route path='/medical' element={<Medical />} />
        <Route path='/languages' element={<Languages />} />
        <Route path='/family' element={<Family />} />
        <Route path='/next_of_kin' element={<NextOfKin />} />
        <Route path='/attachment' element={<Attachments />} />
        <Route path='/attachments' element={<Attachments />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/aper' element={<Aper />} />
        <Route path='/handover' element={<LeaveHandover />} />

        {/* self service */}
        <Route path='/self/requests' element={<RequestAndForms />} />
        <Route path='/self/performance' element={<Performance />} />
        <Route path='/self/profile' element={<Profile />} />
        <Route path='/self/leave' element={<Leave />} />
        <Route path='/self/approvals' element={<Approval />} />
        {/* self service */}

        {/* self service */}

        {/* hrms */}
        <Route path='/hr/onboard' element={<OnboardStaff />} />
        <Route path='/hr/report' element={<Reports />} />
        <Route path='/hr/exit' element={<StaffExit />} />
        <Route path='/hr/training' element={<HrTraining />} />
        <Route path='/hr/promotions' element={<HRPromotions />} />
        <Route path='/hr/transfer' element={<Deployment />} />
        <Route path='/hr/leave' element={<LeaveRequest />} />
        <Route path='/hr/variation' element={<Create />} />
        <Route path='/hr/staff_data' element={<StaffDetails />} />
        <Route path='/hr/performance' element={<HrPerformance />} />

        <Route path='/hr/industial' element={<Industrail />} />
        <Route path='/hr/hrforms' element={<HRForms />} />
        {/* hrms */}

        {/* hr operation */}

        {/* staff */}
        <Route path='/hr/staff/onboard' element={<OnboardStaff />} />
        <Route
          path='/hr/staff/awaiting_approval'
          element={<AwaitingApproval />}
        />
        <Route
          path='/hr/staff/audit_complaints'
          element={<AuditStaffComplaint />}
        />
        <Route path='/hr/staff/reports' element={<Reports />} />
        <Route path='/hr/staff/staff_details' element={<StaffDetails />} />
        <Route path='/hr/staff/staff_exit' element={<StaffExit />} />
        <Route path='/hr/staff/approved_onboarding' element={<HRApproval />} />
        {/* staff */}

        {/* leave */}
        <Route path='/hr/leave/leave_request' element={<LeaveRequest />} />
        <Route path='/hr/leave/awaiting_approval' element={<AwaitApproval />} />
        <Route
          path='/hr/leave/leave_return_request'
          element={<LeaveReturnRequests />}
        />
        <Route
          path='/hr/leave/return_approvals'
          element={<LeaveReturnApproval />}
        />
        <Route path='/hr/leave/approved_leave' element={<ApprovedLeave />} />
        <Route
          path='/hr/leave/approved_return'
          element={<ApprovedReturnLeave />}
        />
        <Route path='/hr/leave/leave_reports' element={<LeaveReport />} />
        {/* leave */}

        {/* performance */}

        <Route path='/hr/performance/setup' element={<PerformanceSetup />} />
        <Route path='/hr/performance/review' element={<PerformanceReview />} />
        <Route
          path='/hr/performance/take_action'
          element={<PerformanceTakeAction />}
        />
        <Route
          path='/hr/performance/team_mapping'
          element={<PerformanceTeamMapping />}
        />

        <Route path='/hr/performance/kpi_records' element={<Performance />} />
        <Route path='/hr/performance/kpi_templates' element={<Template />} />
        <Route path='/hr/performance/kpi_settings' element={<Settings />} />
        <Route
          path='/hr/performance/reports'
          element={<PerformanceReports />}
        />
        <Route path='/hr/performance/more' element={<More />} />

        {/* performance */}

        {/* settings */}
        <Route path='/hr/settings/institution' element={<Institution />} />
        <Route path='/hr/settings/courses' element={<Courses />} />
        <Route path='/hr/settings/departments' element={<Departments />} />
        <Route path='/hr/settings/designations' element={<Designations />} />
        <Route path='/hr/settings/directorates' element={<Directorates />} />
        <Route path='/hr/settings/units' element={<Units />} />
        <Route path='/hr/settings/degrees' element={<Degrees />} />
        <Route path='/hr/settings/holidays' element={<Holidays />} />
        <Route path='/hr/settings/pensions' element={<Pensions />} />
        {/* settings */}

        {/* Variations */}
        <Route path='/hr/variations/create' element={<Create />} />
        <Route
          path='/hr/variations/pending_variations'
          element={<PendingVariation />}
        />
        <Route
          path='/hr/variations/audit_pending_variations'
          element={<AuditPendingVariation />}
        />
        <Route
          path='/hr/variations/audit_approved_variations'
          element={<AuditApprovedVariation />}
        />
        <Route
          path='/hr/variations/audit_rejected_variations'
          element={<AuditRejectedVariation />}
        />
        <Route path='/hr/variations/pupilage' element={<Pupilage />} />

        {/* Variations */}

        <Route path='/hr/training' element={<HrTraining />} />
        <Route path='/hr/industial' element={<Industrail />} />
        <Route path='/hr/promotions' element={<HRPromotions />} />
        <Route path='/hr/hrforms' element={<HRForms />} />
        <Route path='/hr/reports' element={<HRReports />} />
        <Route path='/hr/deployment' element={<Deployment />} />

        {/* hr operation */}

        <Route path='request-room' element={<RequestRoom />} />
        <Route path='*' element={<div>page coming soon</div>} />
      </Route>
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  )
}
export default App
