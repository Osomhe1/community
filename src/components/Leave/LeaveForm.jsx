/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { options, reasons } from "./data";
import PropTypes from 'prop-types'
import { Button, } from '@nextui-org/react'
import { DatePicker } from "antd";
import Input from "../forms/FormElements/Input";
import Select from "react-tailwindcss-select";
import Label from '../forms/FormElements/Label'

const LeaveForm = ({leaveInformation, setLeaveInformation,setSelectedTab,isOpen, setIsOpen}) => {

  const handleFromDateChange = (date) => {
  console.log(date);
   setLeaveInformation((prev) => {
                return { ...prev, from: date };
              });
  };
  const handleToDateChange = (date) => {
  const startDate = new Date(leaveInformation.from);
const endDate = new Date(date);

// Calculate the difference in milliseconds
const timeDifference = endDate - startDate;

// Convert the difference to days
const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Number of days between the two dates: ${daysDifference}`);
 setLeaveInformation((prev) => {
                return { ...prev, to: date,no_of_days:daysDifference };
              });
  };

//Submitting LeaveForm
 const handleSubmit = (e) => {
    e.preventDefault();
    if (leaveInformation.type == ""||leaveInformation.from == ""||leaveInformation.to == ""||leaveInformation.no_of_days == ""||leaveInformation.reason == "") {
      alert("Every input in this field must be filled");
    } 
    else{
      console.log(leaveInformation);
      setLeaveInformation({
  type:'',
  from:'',
  to:'',
  no_of_days:'',
  reason:'',
  approvals:[],
  hand_overs:[],
  attachments:[],
  note:'',
  status:'pending'
  })
    }
  };


  return (
    <Fragment>
        {/* <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
          <div className="py-4">
            <div className="my-4">
                     <Select
            label='Leave Type'
            id="leaveType"
            labelPlacement='outside'
            placeholder='Select type'
            className='w-full rounded-sm'
            radius="sm"
            value={[leaveInformation.type]}
           classNames={{
            trigger: "border-1 bg-transparent hover:bg-transparent focus-within:outline-blue-500 outline-offset-0 outline-1 ",
            }}
                 onChange={(e) => {
              setLeaveInformation((prev) => {
                return { ...prev, type: e.target.value };
              });
                 }}
          >
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
            </div>
            <div className="grid md:grid-cols-2 col-span-3 gap-4 my-4">
              <div>
                <label className=" text-sm" htmlFor="from">
                  From
                </label>
                    <DatePicker
                onChange={(e) => handleFromDateChange(e.$d)}
             className=" w-full border outline-none focus:border-transparent h-10 rounded-md focus:outline-none"
            />
              </div>

              <div>
                <label className=" text-sm" htmlFor="to">
                  To
                </label>
                 <DatePicker
                onChange={(e) => handleToDateChange(e.$d)}
              className=" w-full border outline-none focus:border-transparent h-10 rounded-md focus:outline-none"
            />
              </div>
            </div>
            <div className="grid md:grid-cols-2 col-span-3 gap-4 my-4">
              <div>
                 <Input
            type='number'
             labelPlacement="outside"
             label='Duration'
            disabled
            radius="sm"
                        classNames={{
                  inputWrapper: "outline-1 border-[1px] shadow-none rounded-[0.375rem] bg-white hover:bg-white focus-within:outline-blue-500 outline-offset-0 focus-within:!bg-white",
                  
                  label: "z-1",
                }}
                  value={leaveInformation.no_of_days}
            className=' w-full ring-0 rounded-md'
          />
              </div>
              <div>
                     <Input
           type="number"
                  name=""
                  id="dd"
                  disabled
                   label='Days deducted'
             labelPlacement="outside"
             radius="sm"
                         classNames={{
                  inputWrapper: "outline-1 border-[1px] shadow-none rounded-[0.375rem] bg-white hover:bg-white focus-within:outline-blue-500 outline-offset-0 focus-within:!bg-white",
                  
                  label: "z-1",
                }}
                  value={leaveInformation.no_of_days}
            className=' bgwhite w-full ring-0 rounded-md'
          />
              </div>
            </div>
            <div className="my-10">
                 <Select
            label='Leave Reason'
            id="leaveReason"
            labelPlacement='outside'
            placeholder='Select reason'
            className='w-full'
            radius="sm"
            value={[leaveInformation.reason]}
         classNames={{
            trigger: "border-1 bg-transparent hover:bg-transparent focus-within:outline-blue-500 outline-offset-0 outline-1 ",
            }}
      onChange={(e) => {
              setLeaveInformation((prev) => {
                return { ...prev, reason: e.target.value };
              });
                 }}
          >
            {reasons.map((reason) => (
              <SelectItem key={reason.value} value={reason.value}>
                {reason.label}
              </SelectItem>
            ))}
          </Select>
            </div>
          </div>
              <div className="flex justify-end">
       <Button
          type="submit"
          className="rounded-md"
            color="primary"
          >
            Submit
          </Button>
      </div>
        </form> */}
        <div className="bg-white w-full p-4 shadow rounded">
          <div className="py-4">
            <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
            <Label>
            Leave Type
            </Label>
            <div className='w-full md:col-span-2'>
                     <Select
            value={leaveInformation.type}
            options={options}
            isSearchable={true}
                 onChange={(value) => {
              setLeaveInformation((prev) => {
                return { ...prev, type: value };
              });
                 }}
          />
            </div>
            </div>
              <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label>
                  From
                </Label>
                    <DatePicker
                onChange={(e) => handleFromDateChange(e.$d)}
             className="w-full border outline-none focus:border-transparent h-10 rounded-md focus:outline-none md:col-span-2"
            />
              </div>

              <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="to">
                  To
                </Label>
                 <DatePicker
                onChange={(e) => handleToDateChange(e.$d)}
              className=" w-full border outline-none focus:border-transparent h-10 rounded-md focus:outline-none md:col-span-2"
            />
              </div>
              <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                  Duration
                </Label>
                 <Input
            type='number'
            disabled
          
                  value={leaveInformation.no_of_days}
            className='md:col-span-2'
          />
              </div>
             <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="deducted">
                  Days decucted
                </Label>
                     <Input
           type="number"
                  disabled
                  value={leaveInformation.no_of_days}
            className='md:col-span-2'
          />
              </div>
          <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="reason">
                  Leave Reason
                </Label>
                <div  className='md:col-span-2'>
                 <Select
            options={reasons}
            isSearchable={true}
            value={leaveInformation.reason}
      onChange={(value) => {
              setLeaveInformation((prev) => {
                return { ...prev, reason: value };
              });
                 }}
          />
                </div>
            </div>
          </div>
              <div className="flex justify-end">
       <Button
          type="submit"
          size="sm"
          className="rounded-md font-medium shadow font-helvetica uppercase"
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
      </div>
        </div>
    </Fragment>
  );
};

export default LeaveForm;

LeaveForm.propTypes={
setLeaveInformation:PropTypes.func,
leaveInformation:PropTypes.object,
// setSelectedTab:PropTypes.func,
// isOpen:PropTypes.bool, 
// setIsOpen: PropTypes.func
}
