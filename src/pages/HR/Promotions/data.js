

// Leave history
export const tableData = [
  {
    _id: 1,
    promoted_employee: 'Olaitan Okunade',
    department: "Web Development",
    promoted_from: "Web Developer",
    promoted_to: "Sr Web Developer",
    promotion_date: "28 Feb 2019",
  },
  {
    _id: 2,
    promoted_employee: 'Olaitan Okunade',
    department: "Web Development",
    promoted_from: "Web Developer",
    promoted_to: "Sr Web Developer",
    promotion_date: "28 Feb 2019",
  },
  {
    _id: 3,
    promoted_employee: 'Olaitan Okunade',
    department: "Web Development",
    promoted_from: "Web Developer",
    promoted_to: "Sr Web Developer",
    promotion_date: "28 Feb 2019",
  },
  {
    _id: 4,
    promoted_employee: 'Olaitan Okunade',
    department: "Web Development",
    promoted_from: "Web Developer",
    promoted_to: "Sr Web Developer",
    promotion_date: "28 Feb 2019",
  },
  {
    _id: 5,
    promoted_employee: 'Olaitan Okunade',
    department: "Web Development",
    promoted_from: "Web Developer",
    promoted_to: "Sr Web Developer",
    promotion_date: "28 Feb 2019",
  },
];

export const columns = [
  { name: "ID", uid: "_id", sortable: true },
  { name: "S/N", uid: "s_n", sortable: true },
  { name: "PROMOTED EMPLOYEE", uid: "promoted_employee", sortable: true },
  { name: "DEPARTMENT", uid: "department", sortable: true },
  { name: "PROMOTION DESIGNATION FROM", uid: "promoted_from", sortable: true },
  { name: "PROMOTION DESIGNATION TO", uid: "promoted_to", sortable: true },
  { name: "PROMOTION DATE", uid: "promotion_date", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const status = [
  { name: "active", uid: "active" },
  { name: "inactive", uid: "inactive" },
];

export const statusColor = {
  active: "success",
  inactive: "danger",
};

export const tableHeader = [
  "s_n",
  "promoted_employee",
  "department",
  "promoted_from",
  "promoted_to",
  "promotion_date",
  "actions",
];
