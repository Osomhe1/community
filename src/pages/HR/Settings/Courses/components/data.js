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
      name: 'Physics',
    },
    {
      id: 2,
      name: 'Chemistry',
    },
    {
      id: 3,
      name: 'University of Ilorin',
    },
    {
      id: 4,
      name: 'University of Abuja',
    },
    {
      id: 5,
      name: 'Business Administration',
    },
    {
      id: 6,
      name: 'EE',
    },
    {
      id: 7,
      name: 'Agric',
    },
    {
      id: 8,
      name: 'EEEEE',
    },
    {
      id: 9,
      name: 'E',
    },
    {
      id: 10,
      name: 'RRRRR',
    },
    {
      id: 11,
      name: 'YYYY',
    },
    {
      id: 12,
      name: 'VVVV',
    },
   
   
   
   
  ]
  
  export { columns, data, statusOptions }
  