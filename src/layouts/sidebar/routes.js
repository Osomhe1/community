/* eslint-disable no-unused-vars */
import { FaArrowUpShortWide, FaCircleNotch, FaMoneyCheck, FaUsersGear } from 'react-icons/fa6'
import { MdAccountBalanceWallet, MdApproval, MdAttachEmail, MdDashboard, MdGroup, MdHomeRepairService, MdMessage, MdOutlineAnalytics, MdOutlineEditAttributes, MdOutlinePayments, MdPayment, MdReport, MdSettingsApplications, MdSms, MdVerifiedUser, MdWorkspacesFilled } from 'react-icons/md'
import { IoDocumentsOutline, IoHomeOutline } from 'react-icons/io5'
import { VscPreview, VscSettings } from 'react-icons/vsc'
import { MdOutlinePayment } from 'react-icons/md'
import { TbHeartRateMonitor, TbMessage2, TbReportAnalytics, TbTemplate, TbTimelineEventText, TbUserSquareRounded } from 'react-icons/tb'
import { app_routes } from '../../utils/app_routes'
import { LiaConnectdevelop } from "react-icons/lia";
// import { User, UserMinusIcon } from "lucide-react";
// import { IoMdCard } from 'react-icons/io'
import { TiSpanner } from 'react-icons/ti'
// import { SiReacthookform } from 'react-icons/si'
// import { HiMiniComputerDesktop } from 'react-icons/hi2'
// import { FaUsersCog } from 'react-icons/fa'
// import { GrAnnounce } from 'react-icons/gr'
import { AiOutlineAudit } from 'react-icons/ai'
// import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsCalendar2Event, BsChatTextFill, BsPeople } from 'react-icons/bs'
import { File, Home, MessageCircle, MessageSquareTextIcon, UsersIcon } from 'lucide-react'
import { GiCommercialAirplane, GiExpense, GiTrade } from 'react-icons/gi'
import { LuNetwork, LuNewspaper, LuWorkflow } from 'react-icons/lu'
import { RiSecurePaymentFill, RiSettingsFill } from 'react-icons/ri'
import { PiFactoryBold, PiUserCircleGearBold } from 'react-icons/pi'
import { GrDocument, GrDocumentNotes, GrDocumentPerformance, GrOrganization } from 'react-icons/gr'
import { FaMarker, FaRobot, FaWpforms } from 'react-icons/fa'
import { GoWorkflow } from "react-icons/go";
import { CiCircleMore } from 'react-icons/ci'
import { FiFileMinus } from "react-icons/fi";



export const defaultMenu = [

  // home 2 sub
  {
    title: 'Home',
    name: 'Engage',
    withSubMenu: true,
    submenu: [
      {
        name: 'Engage',
        icon: BsChatTextFill,
        prefix: 'engage',
        menus: [
          { name: 'Posts', route: '/engage/posts'},
          { name: 'Message Room', route: '/engage/message_rooms' },
          { name: 'Group', route: '/engage/group' },
          { name: 'News', route: '/engage/news' },
          { name: 'Memos', route: '/engage/memos' },
          { name: 'Tickets', route: '/engage/tickets' },
          { name: 'Engage Ai', route: '/engage/engage_ai' },
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Marketplace',
    withSubMenu: true,
    submenu: [
      {
        name: 'Marketplace',
        icon: GiTrade,
        prefix: 'marketplace',
        menus: [
          { name: 'Services', route: '/marketplace/services'},
          { name: 'Shopping', route: '/marketplace/shopping' },
          { name: 'Orders', route: '/marketplace/orders' },
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Learning & Developnt',
    withSubMenu: true,
    submenu: [
      {
        name: 'Learning',
        icon: LiaConnectdevelop,
        prefix: 'learning',
        menus: [
          { name: 'Courses', route: '/learning/courses' },
        ],
      },
    ],
  },
// home 2 sub end

// applications sub 2
{
  title: 'applications',
  name: 'Self service',
  withSubMenu: true,
  submenu: [
    {
      name: 'Self service',
      icon: MdHomeRepairService,
      prefix: 'self',
      menus: [
        { name: 'Profile', route: '/self/profile'},
        { name: 'Leave', route: '/self/leave' },
        { name: 'Training', route: '/self/training' },
        { name: 'Approvals', route: '/self/approvals' },
        { name: 'Performance', route: '/self/performance' },
        { name: 'Attendance', route: '/self/attendance' },
        { name: 'Requests', route: '/self/requests' },
      ],
    },
  ],
},
{
  title: '',
  name: 'HRMS',
  withSubMenu: true,
  submenu: [
    {
      name: 'HRMS',
      icon: FaUsersGear,
      prefix: 'hr',
      menus: [
        { name: 'Onboard', route: '/hr/onboard'},
        { name: 'Exit', route: '/hr/exit'},
        { name: 'Staff Data', route: '/hr/staff_data'},
        { name: 'Leave', route: '/hr/leave'},
        { name: 'announcement', route: '/hr/announcement'},
        { name: 'training', route: '/hr/training'},
        { name: 'Performance', route: '/hr/performance'},
        { name: 'Attendance', route: '/hr/attendance'},
        { name: 'Promotions', route: '/hr/promotions'},
        { name: 'Approvals', route: '/hr/approvals'},
        { name: 'Discipline Mgt', route: '/hr/discipline'},
        { name: 'Transfer', route: '/hr/transfer'},
        { name: 'Variation', route: '/hr/variation'},
        { name: 'Report', route: '/hr/report'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Payroll',
  withSubMenu: true,
  submenu: [
    {
      name: 'Payroll',
      icon: FaMoneyCheck,
      prefix: 'payroll',
      menus: [
        { name: 'Information', route: '/payroll/information'},
        { name: 'Setup', route: '/payroll/setup'},
        { name: 'Staff Actions', route: '/payroll/staff_actions'},
        { name: 'Payrun', route: '/payroll/payrun'},
        { name: 'Payments', route: '/payroll/payments'},
        { name: 'Deductions', route: '/payroll/deductions'},
        { name: 'Report', route: '/payroll/report'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Audit',
  withSubMenu: true,
  submenu: [
    {
      name: 'Audit',
      icon: AiOutlineAudit,
      prefix: 'audit',
      menus: [
        { name: 'Onboarding', route: '/audit/onboarding'},
        { name: 'Exits', route: '/audit/exits'},
        { name: 'Salaries', route: '/audit/salaries'},
        { name: 'Trainings', route: '/audit/trainings'},
        { name: 'Expenses', route: '/audit/expenses'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Workflow',
  withSubMenu: true,
  submenu: [
    {
      name: 'Workflow',
      icon: LuWorkflow,
      prefix: 'workflow',
      menus: [
        { name: 'Template', route: '/workflow/template'},
        { name: 'Memos', route: '/workflow/memos'},
        { name: 'Requests', route: '/workflow/requests'},
        { name: 'Report', route: '/workflow/report'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Expenses',
  withSubMenu: true,
  submenu: [
    {
      name: 'Expenses',
      icon: MdOutlinePayments,
      prefix: 'expenses',
      menus: [
        { name: 'Setup', route: '/expenses/setup'},
        { name: 'Approve', route: '/expenses/approve'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Integrate',
  withSubMenu: true,
  submenu: [
    {
      name: 'Integrate',
      icon: RiSettingsFill,
      prefix: 'integrate',
      menus: [
        { name: 'Connect Accounts', route: '/integrate/connect_accounts'},
        { name: 'settings', route: '/integrate/settings'},
      ],
    },
  ],
},

// applications sub 2

]






export const PeopleSectionMenu = [

  // home 2 sub
  {
    title: 'Home',
    name: 'Self service',
    withSubMenu: true,
    submenu: [
      {
        name: 'Self service',
        icon: MdHomeRepairService,
        prefix: 'self',
        menus: [
          { name: 'Profile', route: '/self/profile'},
          { name: 'Leave', route: '/self/leave' },
          { name: 'Training', route: '/self/training' },
          { name: 'Approvals', route: '/self/approvals' },
          { name: 'Performance', route: '/self/performance' },
          { name: 'Attendance', route: '/self/attendance' },
          { name: 'Requests', route: '/self/requests' },
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Courses',
    withSubMenu: true,
    submenu: [
      {
        name: 'Courses',
        icon: LiaConnectdevelop,
        prefix: 'learning',
        menus: [
          { name: 'Courses', route: '/learning/courses' },
        ],
      },
    ],
  },

  {
    title: '',
    name: 'Company: Organogram',
    withSubMenu: true,
    submenu: [
      {
        name: 'Company: Organogram',
        icon: LuNetwork,
        prefix: 'company',
        menus: [
          // { name: 'Services', route: '/company/services'},
        ],
      },
    ],
  },

// home 2 sub end

// applications sub 2

{
  title: 'Application',
  name: 'HRIS',
  withSubMenu: true,
  submenu: [
    {
      name: 'HRIS',
      icon: FaUsersGear,
      prefix: 'hr',
      menus: [
        { name: 'Onboard', route: '/hr/onboard'},
        { name: 'Exit', route: '/hr/exit'},
        { name: 'Staff Data', route: '/hr/staff_data'},
        { name: 'Leave', route: '/hr/leave'},
        { name: 'announcement', route: '/hr/announcement'},
        { name: 'training', route: '/hr/training'},
        { name: 'Performance', route: '/hr/performance'},
        { name: 'Attendance', route: '/hr/attendance'},
        { name: 'Promotions', route: '/hr/promotions'},
        { name: 'Approvals', route: '/hr/approvals'},
        { name: 'Discipline Mgt', route: '/hr/discipline'},
        { name: 'Transfer', route: '/hr/transfer'},
        { name: 'Variation', route: '/hr/variation'},
        { name: 'Report', route: '/hr/report'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Performance',
  withSubMenu: true,
  submenu: [
    {
      name: 'Performance',
      icon: GrDocumentPerformance,
      prefix: 'performance',
      menus: [
        // { name: 'Services', route: '/company/services'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Learning',
  withSubMenu: true,
  submenu: [
    {
      name: 'Learning',
      icon: LiaConnectdevelop,
      prefix: 'learning',
      menus: [
        { name: 'Courses', route: '/learning/courses' },
      ],
    },
  ],
},
{
  title: '',
  name: 'Attendance',
  withSubMenu: true,
  submenu: [
    {
      name: 'Attendance',
      icon: FaMarker,
      prefix: 'attendance',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Organization',
  withSubMenu: true,
  submenu: [
    {
      name: 'Organization',
      icon: GrOrganization,
      prefix: 'organization',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Report',
  withSubMenu: true,
  submenu: [
    {
      name: 'Report',
      icon: MdReport,
      prefix: 'report',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Settings',
  withSubMenu: true,
  submenu: [
    {
      name: 'Settings',
      icon: RiSettingsFill,
      prefix: 'settings',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Users',
  withSubMenu: true,
  submenu: [
    {
      name: 'Users',
      icon: UsersIcon,
      prefix: 'users',
      menus: [
     
      ],
    },
  ],
},

// applications sub 2

]





export const MessagingSectionMenu = [

  // home 2 sub
  // {
  //   title: 'Home',
  //   name: 'Chat Room',
  //   withSubMenu: true,
  //   submenu: [
  //     {
  //       name: 'Chat Room',
  //       icon: MessageSquareTextIcon,
  //       prefix: 'chatroom',
  //       menus: [
         
  //       ],
  //     },
  //   ],
  // },
    {
    title: 'Home',
    name: 'Chat Room',
    route: '/engage/message_rooms',
    icon: TbMessage2,
    withSubMenu: false,
  },
    {
    title: '',
    name: 'Groups',
    route: '/engage/group',
    icon: MdGroup,
    withSubMenu: false,
  },
 
 
  // {
  //   title: '',
  //   name: 'Groups',
  //   withSubMenu: true,
  //   submenu: [
  //     {
  //       name: 'Groups',
  //       icon: MdGroup,
  //       prefix: 'groups',
  //       menus: [

  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: '',
  //   name: 'Groups',
  //   route: '/engage/group',
  //   icon: TbMessage2,
  //   withSubMenu: false,
  // },
  {
    title: '',
    name: 'Emails (soon)',
    withSubMenu: true,
    submenu: [
      {
        name: 'Emails (soon)',
        icon: MdAttachEmail,
        prefix: 'emails',
        menus: [

        ],
      },
    ],
  },
  {
    title: '',
    name: 'SMS (soon)',
    withSubMenu: true,
    submenu: [
      {
        name: 'SMS (soon)',
        icon: MdSms,
        prefix: 'sms',
        menus: [

        ],
      },
    ],
  },
  {
    title: '',
    name: 'Report',
    withSubMenu: true,
    submenu: [
      {
        name: 'Report',
        icon: TbReportAnalytics,
        prefix: 'report',
        menus: [
       
        ],
      },
    ],
  },


// home 2 sub end

// applications sub 2

{
  title: 'Settings',
  name: 'Messages',
  withSubMenu: true,
  submenu: [
    {
      name: 'Messages',
      icon: MessageSquareTextIcon,
      prefix: 'messages',
      menus: [
       
      ],
    },
  ],
},
{
  title: '',
  name: 'Users',
  withSubMenu: true,
  submenu: [
    {
      name: 'Users',
      icon: UsersIcon,
      prefix: 'users',
      menus: [
     
      ],
    },
  ],
},

// applications sub 2

]





export const WorkflowSectionMenu = [

  // home 2 sub
  {
    title: 'Home',
    name: 'Memos',
    withSubMenu: true,
    submenu: [
      {
        name: 'Memos',
        icon: GoWorkflow,
        prefix: 'memo',
        menus: [
         
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Forms',
    withSubMenu: true,
    submenu: [
      {
        name: 'Forms',
        icon: FaWpforms,
        prefix: 'forms',
        menus: [

        ],
      },
    ],
  },
  
  {
    title: '',
    name: 'Incidents',
    withSubMenu: true,
    submenu: [
      {
        name: 'Incidents',
        icon: TbTimelineEventText,
        prefix: 'incidents',
        menus: [
       
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Approve',
    withSubMenu: true,
    submenu: [
      {
        name: 'Approve',
        icon: MdApproval,
        prefix: 'approve',
        menus: [
       
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Report',
    withSubMenu: true,
    submenu: [
      {
        name: 'Report',
        icon: TbReportAnalytics,
        prefix: 'report',
        menus: [
       
        ],
      },
    ],
  },


// home 2 sub end

// applications sub 2

{
  title: 'Setup',
  name: 'Workflows',
  withSubMenu: true,
  submenu: [
    {
      name: 'Workflow',
      icon: LuWorkflow,
      prefix: 'workflow',
      menus: [
        { name: 'Template', route: '/workflow/template'},
        { name: 'Memos', route: '/workflow/memos'},
        { name: 'Requests', route: '/workflow/requests'},
        { name: 'Report', route: '/workflow/report'},
      ],
    },
  ],
},
{
  title: '',
  name: 'Templates',
  withSubMenu: true,
  submenu: [
    {
      name: 'Templates',
      icon: TbTemplate,
      prefix: 'templates',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Settings',
  withSubMenu: true,
  submenu: [
    {
      name: 'Settings',
      icon: RiSettingsFill,
      prefix: 'settings',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Users',
  withSubMenu: true,
  submenu: [
    {
      name: 'Users',
      icon: UsersIcon,
      prefix: 'users',
      menus: [
     
      ],
    },
  ],
},

// applications sub 2

]








export const PayrollSectionMenu = [

  // home 2 sub
  {
    title: 'Application',
    name: 'Payroll',
    withSubMenu: true,
    submenu: [
      {
        name: 'Payroll',
        icon: FaMoneyCheck,
        prefix: 'payroll',
          menus: [
            { name: 'Information', route: '/payroll/information'},
            { name: 'Setup', route: '/payroll/setup'},
            { name: 'Staff Actions', route: '/payroll/staff_actions'},
            { name: 'Payrun', route: '/payroll/payrun'},
            { name: 'Payments', route: '/payroll/payments'},
            { name: 'Deductions', route: '/payroll/deductions'},
            { name: 'Report', route: '/payroll/report'},
          ],
      },
    ],
  },
  {
    title: '',
    name: 'Arrears',
    withSubMenu: true,
    submenu: [
      {
        name: 'Arrears',
        icon: FaArrowUpShortWide,
        prefix: 'arrears',
        menus: [

        ],
      },
    ],
  },
  {
    title: '',
    name: 'Reports',
    withSubMenu: true,
    submenu: [
      {
        name: 'Reports',
        icon: TbReportAnalytics,
        prefix: 'reports',
        menus: [
       
        ],
      },
    ],
  },
  
  {
    title: '',
    name: 'Deductions',
    withSubMenu: true,
    submenu: [
      {
        name: 'Deductions',
        icon: FiFileMinus,
        prefix: 'deductions',
        menus: [
       
        ],
      },
    ],
  },
 


// home 2 sub end

// applications sub 2

{
  title: 'Approval',
  name: 'Staff',
  withSubMenu: true,
  submenu: [
    {
      name: 'Staff',
      icon: TbUserSquareRounded,
      prefix: 'staff',
      menus: [
       
      ],
    },
  ],
},
{
  title: '',
  name: 'Deductions',
  withSubMenu: true,
  submenu: [
    {
      name: 'Deductions',
      icon: FiFileMinus,
      prefix: 'deductions',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Promotions',
  withSubMenu: true,
  submenu: [
    {
      name: 'Promotions',
      icon: MdVerifiedUser,
      prefix: 'promotions',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Salary Review',
  withSubMenu: true,
  submenu: [
    {
      name: 'Salary Review',
      icon: VscPreview,
      prefix: 'salary-review',
      menus: [
     
      ],
    },
  ],
},
// applications sub 2



// setup
{
  title: 'Setup',
  name: 'Staff',
  withSubMenu: true,
  submenu: [
    {
      name: 'Staff',
      icon: TbUserSquareRounded,
      prefix: 'staff',
      menus: [
       
      ],
    },
  ],
},
{
  title: '',
  name: 'Attributes',
  withSubMenu: true,
  submenu: [
    {
      name: 'Attributes',
      icon: MdOutlineEditAttributes,
      prefix: 'attributes',
      menus: [
       
      ],
    },
  ],
},

{
  title: '',
  name: 'Workflows',
  withSubMenu: true,
  submenu: [
    {
      name: 'Workflow',
      icon: LuWorkflow,
      prefix: 'workflow',
      menus: [
        { name: 'Template', route: '/workflow/template'},
        { name: 'Memos', route: '/workflow/memos'},
        { name: 'Requests', route: '/workflow/requests'},
        { name: 'Report', route: '/workflow/report'},
      ],
    },
  ],
},

{
  title: '',
  name: 'Settings',
  withSubMenu: true,
  submenu: [
    {
      name: 'Settings',
      icon: RiSettingsFill,
      prefix: 'settings',
      menus: [
     
      ],
    },
  ],
},
{
  title: '',
  name: 'Users',
  withSubMenu: true,
  submenu: [
    {
      name: 'Users',
      icon: UsersIcon,
      prefix: 'users',
      menus: [
     
      ],
    },
  ],
},
// setup
]




























































// home default menu
export const defaultMenuHome = [
  {
    name: 'Dashboard',
    route: '/',
    icon: MdDashboard,
  },
  {
    name: 'People',
    route: '/people',
    icon: BsPeople,
  },
  {
    name: 'Messaging',
    route: '/messaging',
    icon: TbMessage2,
  },
  {
    name: 'Workflow (Memos)',
    route: '/workflow',
    icon: GoWorkflow,
  },
  {
    name: 'Payroll',
    route: '/payroll',
    icon: RiSecurePaymentFill,
  },
  {
    name: 'More',
    route: '/more',
    icon: CiCircleMore,
  },
]


export const defaultMenuHomeAll = [
  [
      {
        name: 'Dashboard',
        route: '/',
        icon: MdDashboard,
      },
      {
        name: 'People',
        route: '/people',
        icon: BsPeople,
      },

  ],

  [
      {
        name: 'Messaging',
        route: '/messaging',
        icon: TbMessage2,
      },
      {
        name: 'Workflow (Memos)',
        route: '/workflow',
        icon: GoWorkflow,
      },

  ],

  [
      {
        name: 'Payroll',
        route: '/payroll',
        icon: RiSecurePaymentFill,
      },
    
      {
        name: 'Expense',
        route: '/expense',
        icon: MdAccountBalanceWallet,
      },

  ],
  [
    // {
    //   name: 'Payments',
    //   route: '/payments',
    //   icon: MdPayment,
    // },
    {
      name: 'Documents',
      route: '/documents',
      icon: IoDocumentsOutline,
    },
    {
      name: 'Marketplace',
      route: '/marketplace',
      icon: GiTrade,
    }
  ],

  [
    {
      name: 'Ai',
      route: '/ai',
      icon: FaRobot,
    },
  ]

]
// home default menu










export const payrollMenu = [
  {
    title: 'Payroll',
    name: 'Dashboard',
    route: app_routes.payrollDashboard,
    icon: IoHomeOutline,
    withSubMenu: false,
  },
  {
    name: 'Staff Information',
    route: app_routes.payroll.staffInformation.index,
    icon: IoHomeOutline,
    withSubMenu: false,
  },
  {
    name: 'Settings',
    route: app_routes.payroll.setting.index,
    icon: VscSettings,
    withSubMenu: false,
  },
  {
    name: 'Payroll',
    route: app_routes.payroll.payroll.index,
    icon: MdOutlinePayment,
    withSubMenu: false,
  },
  {
    name: '13th Month',
    route: app_routes.payroll.productivity.index,
    icon: TbHeartRateMonitor,
    withSubMenu: false,
  },
  {
    name: 'Reports',
    route: app_routes.payroll.report.index,
    icon: TbHeartRateMonitor,
    withSubMenu: false,
  },
  {
    name: 'Workflow',
    route: app_routes.payroll.workflow,
    icon: TbHeartRateMonitor,
    withSubMenu: false,
  },
]




export const hrMenu = [


  {
    title: 'HR Operation',
    name: 'Staff Information',
    routeMerge: false,
    withSubMenu: true,
    submenu: [
      {
        name: 'Staff Information',
        prefix: 'staff',
        icon: TiSpanner,
        menus: [
          // { name: 'hr', route: '/hr/staff' },
          { name: 'Onboard Staff', route: '/hr/staff/onboard' },
          { name: 'Awaiting Approval', route: '/hr/staff/awaiting_approval' },
          { name: 'Approved Onboarding', route: '/hr/staff/approved_onboarding' },
          { name: 'Audit Staff Complaints', route: '/hr/staff/audit_complaints' },
          { name: 'Reports', route: '/hr/staff/reports' },
          { name: 'Staff Details ', route: '/hr/staff/staff_details' },
          { name: 'Staff Exit ', route: '/hr/staff/staff_exit' },
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Leave Management',
    routeMerge: false,
    withSubMenu: true,
    submenu: [
      {
        name: 'Leave Management',
        prefix: 'leave',
        icon: TiSpanner,
        menus: [
          { name: 'Leave Requests', route: '/hr/leave/leave_request' },
          { name: 'Leave Return Requests', route: '/hr/leave/leave_return_request' },
          { name: 'Awaiting Approval', route: '/hr/leave/awaiting_approval' },
          { name: 'Leave Return Approvals', route: '/hr/leave/return_approvals' },
          { name: 'Approved Leave', route: '/hr/leave/approved_leave' },
          { name: 'Approved Return Leave', route: '/hr/leave/approved_return' },
          { name: 'Leave Reports', route: '/hr/leave/leave_reports' },
        ],
      },
    ],
  },
  {
    title: '',
    name: 'Performance',
    routeMerge: false,
    withSubMenu: true,
    submenu: [
      {
        name: 'Performance',
        prefix: 'performance',
        icon: TiSpanner,
        menus: [
          { name: 'KPI Records', route: '/hr/performance/kpi_records' },
          { name: 'KPI Templates', route: '/hr/performance/kpi_templates' },
          { name: 'KPI Settings', route: '/hr/performance/kpi_settings' },
          { name: 'Reviews', route: '/hr/performance/reviews' },
          { name: 'Reports', route: '/hr/performance/reports' },
          { name: 'More', route: '/hr/performance/more' },
        ],
      },
    ],
  },
 
  {
    title: '',
    name: 'Settings',
    routeMerge: false,
    withSubMenu: true,
    submenu: [
      {
        name: 'Settings',
        prefix: 'settings',
        icon: TiSpanner,
        menus: [
          { name: 'Institution', route: '/hr/settings/institution' },
          { name: 'Courses', route: '/hr/settings/courses' },
          { name: 'Departments', route: '/hr/settings/departments' },
          { name: 'Designations', route: '/hr/settings/designations' },
          { name: 'Directorates', route: '/hr/settings/directorates' },
          { name: 'Units', route: '/hr/settings/units' },
          { name: 'Degrees', route: '/hr/settings/degrees' },
          { name: 'Holidays', route: '/hr/settings/holidays' },
          { name: 'Pensions', route: '/hr/settings/pensions' },
        ],
      },
    ],
  },
  
  {
    title: '',
    name: 'Variations',
    routeMerge: false,
    withSubMenu: true,
    submenu: [
      {
        name: 'Variations',
        prefix: 'variations',
        icon: TiSpanner,
        menus: [
          { name: 'Create', route: '/hr/variations/create' },
          { name: 'Pending Variations', route: '/hr/variations/pending_variations' },
          { name: 'Audit Pending Variations', route: '/hr/variations/audit_pending_variations' },
          { name: 'Audit Approved Variations', route: '/hr/variations/audit_approved_variations' },
          { name: 'Audit Rejected Variations', route: '/hr/variations/audit_rejected_variations' },
          { name: 'Pupilage', route: '/hr/variations/pupilage'},
        ],
      },
    ],
  },
  
  {
    name: 'Training',
    route: '/hr/training',
    icon: TiSpanner,
    withSubMenu: false,
  },
  {
    name: 'Industrial',
    route: '/hr/industial',
    icon: TiSpanner,
    withSubMenu: false,
  },
  {
    name: 'Promotions',
    route: '/hr/promotions',
    icon: TiSpanner,
    withSubMenu: false,
  },
  {
    name: 'HR Forms',
    route: '/hr/hrforms',
    icon: TiSpanner,
    withSubMenu: false,
  },
  {
    name: 'Reports',
    route: '/hr/reports',
    icon: TiSpanner,
    withSubMenu: false,
  },
  {
    name: 'Deployment & Transfer',
    route: '/hr/deployment',
    icon: TiSpanner,
    withSubMenu: false,
  },
  

]