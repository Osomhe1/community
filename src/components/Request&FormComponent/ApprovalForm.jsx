/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React, { Fragment, useRef, useState } from "react";
import { IoIosClose, IoMdSearch } from "react-icons/io";
import { Avatar, Button } from "@nextui-org/react";
import Label from '../forms/FormElements/Label';
import Input from '../forms/FormElements/Input';
import Select from 'react-tailwindcss-select';

const ApprovalForm = ({ setInformation,setSelectedTab }) => {
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [searchedApprovals, setSearchedApprovals] = useState([]);
  const [currentValue, setcurrentValue] = useState('')
  const [approvals, setApprovals] = useState([]);
  const [currentSelected, setCurrentSelected] = useState({});
  const searchRef = useRef();

  // Approval form
 const aprrovalRoles = [
  { value: "Any", label: "Any" },
  { value: "Section Head", label: "Section Head" },
  { value: "Team Lead", label: "Team Lead" },
  { value: "Head of Department", label: "Head of Department" },
];
 const staff = [
  { profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmURjNWc5I_ZPQ5oeOt9_ORibdIrpdZf-lQ&usqp=CAU', label: "Adeoye John",value: "Adeoye John", role: "Section Head", abbr: "SH",main:false },
  { profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wufnbZqmr8QYd5Q5UjFgDkmizutxojyTWg&usqp=CAU', label: "Olaitan Okunade",value: "Olaitan Okunade", role: "Team Lead", abbr: "TL",main:false },
  { profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUYWK2ER12rKqvZmJGKNgZRGPu_kTwXxHBg&usqp=CAU', label: "Stephen Alagbe",value: "Stephen Alagbe", role: "Section Head", abbr: "SH",main:false },
  { profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVus6O1IqRwbOBSl91PWQ5biucI0mRvP0tit_2hoxeqVYrPZtgzN7X7uvrgeVT1TCJ81o&usqp=CAU', label: "Kayode Adeyinka",value: "Kayode Adeyinka", role: "Head of Department", abbr: "HD",main:false },
  { profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFCQIxLqrUR2InTM_dPyFHaz15V14TieeEQ&usqp=CAU', label: "Adeyemi Aderinto",value: "Adeyemi Aderinto", role: "Section Head", abbr: "SH",main:false },
  { profile_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRg5TP-yP_vIZyoSrfDAsiMULomrx4NOWOhw&usqp=CAU', label: "Emmanuel Oluwatayese",value: "Emmanuel Oluwatayese", role: "Team Lead", abbr: "TL",main:false },
];

  

  // searching the staff with the selected role
  const handleChange = (result) => {
    setcurrentValue(result)
    if (result.value=='Any') {
      setSelectedStaff(staff);  
    }else{
      const filtered = staff.filter(
        (staff_member) => staff_member.role == result.value
      );
      setSelectedStaff(filtered);
    }
  };

  const handleSelectApprovals = (result) => {
    console.log(result)
// setCurrentSelected(prev=>[...prev,result])
setApprovals([...approvals, result]);
setCurrentSelected(result)
setInformation((information)=>{
  return {...information,approvals:[...approvals, result]}
  })
  };

  // function to search for the staff
  const searchItem = (value) => {
  if (selectedStaff.length<1) {
  alert('Select approval role first') 
  }else{
    const filtered = selectedStaff.filter((selected) =>
      selected.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedApprovals(filtered);
  }
  };

  // function to hide the container after deleting the input value
  const hideContainer = (value) => {
    if (value == "") {
      setSearchedApprovals([]);
    }
  };

  // deleting an already selected staff member
  const handleDelete = (id) => {
    const filtered = approvals.filter((_, i) => i !== id);
    setApprovals(filtered);
    setInformation((information)=>{
  return {...information,approvals:filtered}
  })
  };

  // adding approval
  const addApproval = (approval) => {
    setApprovals([...approvals, approval]);
    setSearchedApprovals([]);
    searchRef.current.value = "";
  };

  // submit approval
  const submitApproval = () => {
  setInformation((information)=>{
  return {...information,approvals}
  })
  // setSelectedTab(0)
    console.log(approvals);
    setApprovals([])
  };
  return (
    <Fragment>
      <div className="w-full bg-white p-8 shadow rounded">
        <div>
            {/* <h1 className="px-4 py-2 font-normal text-[#212529]">
           Approval
          </h1> */}
          <form action="">
             <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
            <Label>
                Approval Role
            </Label>
            <div className='w-full md:col-span-2'>
                     <Select
            options={aprrovalRoles}
            isSearchable={true}
            value={currentValue}
                 onChange={(value) => handleChange(value)}
          />
            </div>
            </div>

            {/* <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
              <label className="text-sm font-helvetica" htmlFor="approvalRole">
              </label>
              <div className="col-span-2">
                            <Select
            labelPlacement='outside'
            placeholder='Plase select'
            className='w-full'
              radius="sm"
            classNames={{
            trigger: "border-1 bg-transparent hover:bg-transparent focus-within:outline-blue-500 outline-offset-0 outline-1 ",
            }}
            aria-label='approval role'
                onChange={(e)=>handleChange(e)}
          >
           {aprrovalRoles.map((aprrovalRole) => (
                    <SelectItem key={aprrovalRole.value} value={aprrovalRole.value}>
                      {aprrovalRole.value}
                    </SelectItem>
                  ))}
          </Select>
              </div>
            </div> */}
               <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
            <Label>
            Staff
            </Label>
              <div className="relative col-span-2">
              <Select
              // isMultiple={true}
            options={selectedStaff}
            isSearchable={true}
            value={currentSelected}
                 onChange={(value) => handleSelectApprovals(value)}
          />
              {/* <Input
                ref={searchRef} 
                type="text"
                placeholder='Search'
                onChange={(e) => searchItem(e.target.value)}
                onKeyUp={(e) => hideContainer(e.target.value)}
              />
              <IoMdSearch className="lucide lucide-search  text-sidebarInptextColor absolute top-3 right-2" />
                   {searchedApprovals.length > 0 && (
                  <ul className="absolute top-10 w-full bg-white px-5 border rounded z-10 shadow">
                    {searchedApprovals.map((approval, index) => (
                      <li
                        className="flex justify-between my-4 items-center py-2 px-3 cursor-pointer hover:bg-slate-200 rounded"
                        key={index}
                        onClick={() => addApproval(approval)}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            size="md"
                          />
                          <p className="m-0 font-medium">{approval.name}</p>
                        </div>
                        <p className="m-0 text-xs">{approval.abbr}</p>
                      </li>
                    ))}
                  </ul>
                )} */}
            </div>
            </div>

            {/* <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
              <label className="text-sm font-helvetica" htmlFor="staff">
                Search for Staff
              </label>
              <div className="relative col-span-2">
                   <Input
            type='text'
            ref={searchRef}
             labelPlacement="outside"
             placeholder='Find by name'
            className=' w-full ring-0'
               radius="sm"
                        classNames={{
                  inputWrapper: "outline-1 border-[1px] shadow-none rounded-[0.375rem] bg-white hover:bg-white focus-within:outline-blue-500 outline-offset-0 focus-within:!bg-white",
                  
                  label: "z-1",
                }}
              onChange={(e) => searchItem(e.target.value)}
                  onKeyUp={(e) => hideContainer(e.target.value)}
          />
                <IoMdSearch className="lucide lucide-search  text-sidebarInptextColor absolute top-3 right-2" />

                {searchedApprovals.length > 0 && (
                  <ul className="absolute top-10 w-full bg-white px-5 border rounded z-10 shadow">
                    {searchedApprovals.map((approval, index) => (
                      <li
                        className="flex justify-between my-4 items-center py-2 px-3 cursor-pointer hover:bg-slate-200 rounded"
                        key={index}
                        onClick={() => addApproval(approval)}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            size="md"
                          />
                          <p className="m-0 font-medium">{approval.name}</p>
                        </div>
                        <p className="m-0 text-xs">{approval.abbr}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div> */}
          </form>
        </div>
        {  approvals.length > 0 && 
        <div className="m-8">
          <div className="px-4 border-b border-slate-400 font-helvetica flex items-center gap-2">
           <p className='text-[#00BCC2] text-medium font-helvetica'>Approvals</p> <span className='bg-[#00BCC2] rounded-full h-[14px] w-[14px] text-white text-xs font-medium text-center'>{approvals.length}</span>
          </div>
          <div>
             { approvals.map((approval, index) => (
                <div
                  className="flex justify-between my-4 items-center py-2 px-3 rounded bg-slate-100"
                  key={index}
                >
                  <div className="flex items-center gap-5">
                    <Avatar
                      // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      src={approval.profile_image}
                      size="md"
                    />
                    <div className="">
                      <p className="m-0 font-medium">{approval.label}</p>
                      <p className="m-0 text-xs">{approval.role}</p>
                    </div>
                  </div>
                  <IoIosClose
                    size={20}
                    className="cursor-pointer"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              ))}
          </div>
          {/* <div className="flex justify-end">
            <Button
            color='primary'
              disabled={!approvals?.length}
               className="rounded-md font-helvetica shadow"
              onClick={submitApproval}
            >
              Add approvals
            </Button>
          </div> */}
        </div>
        }
      </div>
    </Fragment>
  );
};

export default ApprovalForm;

ApprovalForm.propTypes={
setInformation:PropTypes.func,
setSelectedTab:PropTypes.func,
}
