const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'S/N', uid: 's/n', sortable: true },
    { name: 'NAME', uid: 'name', sortable: true },
    { name: 'AGE', uid: 'age', sortable: true },
    { name: 'ROLE', uid: 'role', sortable: true },
    { name: 'TEAM', uid: 'team' },
    { name: 'EMAIL', uid: 'email' },
    { name: 'STATUS', uid: 'status', sortable: true },
    { name: 'COMPANY', uid: 'company' },
    { name: 'START DATE', uid: 'start date' },
    { name: 'END DATE', uid: 'end date' },
    { name: 'EMPLOYMENT TYPE', uid: 'EMPLOYMENT TYPE' },
    { name: 'AUDIT REMARK', uid: 'AUDIT REMARK' },
    { name: 'AUDITED BY', uid: 'AUDITED BY' },
    { name: 'APPROVED BY HR', uid: 'APPROVED BY HR' },
    { name: 'AUDIT STATUS', uid: 'AUDIT STATUS' },
    { name: 'HR STATUS', uid: 'HR STATUS' },
    { name: 'CREATED BY', uid: 'CREATED BY' },
    { name: 'DATE ADDED', uid: 'DATE ADDED' },
    { name: 'EMP. NO', uid: 'EMP. NO' },
    { name: 'ACTIONS', uid: 'actions' },
  ]
  
  const statusOptions = [
    { name: 'Active', uid: 'active' },
    { name: 'Paused', uid: 'paused' },
    { name: 'Vacation', uid: 'vacation' },
  ]
  
  
  const data = [
    {
      id: 1,
      name: 'LEGAL SERVICES	',
    },
    {
      id: 2,
      name: 'COMPANY SECRETARY	',
    },
    {
      id: 3,
      name: 'AVIATION SECURITY (AVSEC)',
    },
    {
      id: 4,
      name: 'NAVIGATIONAL AIDS FLIGHT INSPECTION AND SURVEILLANCE (NAFIS)	',
    },
    {
      id: 5,
      name: 'INTERNAL AUDIT	',
    },
    {
      id: 6,
      name: 'EINFORMATION, COMMUNICATION & TECHNOLOGY (ICT)	E',
    },
    {
      id: 7,
      name: 'PUBLIC RELATIONS	',
    },
    {
      id: 8,
      name: 'SERVICOM',
    },
    {
      id: 9,
      name: 'AIRWORTHINESS STANDARDS & APPROVALS (ASA)	',
    },
    {
      id: 10,
      name: 'Aircraft Certification & Cont. Airworthiness	',
    },
    {
      id: 11,
      name: 'AOC & Surveillance	',
    },
    {
      id: 12,
      name: 'LIBRARY',
    },
   
   
   
   
  ]
  
  export { columns, data, statusOptions }
  