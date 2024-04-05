/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { Fragment, useRef, useState } from "react";
import { IoIosClose, IoMdSearch } from "react-icons/io";
import { Avatar, Button,} from "@nextui-org/react";
import Label from "../forms/FormElements/Label";
import Input from "../forms/FormElements/Input";
import Select from "react-tailwindcss-select";

const HandOverForm = ({ setInformation,setSelectedTab }) => {
  const [searchedStaff, setSearchedStaff] = useState([]);
  const [handOvers, setHandOvers] = useState([]);
  const [currentSelected, setCurrentSelected] = useState({});
  const searchRef = useRef();

  const staff = [
  { label: "Adeoye John",value: "Adeoye John", role: "Section Head", abbr: "SH",main:false },
  { label: "Olaitan Okunade",value: "Olaitan Okunade", role: "Team Lead", abbr: "TL",main:false },
  { label: "Stephen Alagbe",value: "Stephen Alagbe", role: "Section Head", abbr: "SH",main:false },
  { label: "Kayode Adeyinka",value: "Kayode Adeyinka", role: "Head of Department", abbr: "HD",main:false },
  { label: "Adeyemi Aderinto",value: "Adeyemi Aderinto", role: "Section Head", abbr: "SH",main:false },
  { label: "Emmanuel Oluwatayese",value: "Emmanuel Oluwatayese", role: "Team Lead", abbr: "TL",main:false },
];

 const handleSelectHandOver = (result) => {
    console.log(result)
// setCurrentSelected(prev=>[...prev,result])
setCurrentSelected(result)
setInformation((information)=>{
  return {...information,hand_over:result}
  })
  };

  // function to search for the staff
  const searchItem = (value) => {
      const filtered = staff.filter((selected) =>
        selected.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedStaff(filtered);
  };

  // function to hide the container after deleting the input value
  const hideContainer = (value) => {
    if (value == "") {
      setSearchedStaff([]);
    }
  };

  // deleting an already selected staff member
  const handleDelete = (id) => {
    const filtered = handOvers.filter((_, i) => i !== id);
    setHandOvers(filtered);
  };

  // adding handover
  const addHandOver = (hand) => {
    searchRef.current.value = "";
    setHandOvers([...handOvers, hand]);
    console.log(hand);
    setSearchedStaff([]);
  };

  // submit handover
  const submitHandOver = () => {
     setInformation((information)=>{
  return {...information,hand_overs: handOvers}
  })
    setHandOvers([]);
  // setSelectedTab(0)
  };

  return (
    <Fragment>
      <div>
        <div className="w-full bg-white p-8 shadow rounded">
          {/* <h1 className="px-4 py-2 font-normal text-[#212529]">Hand Overs</h1> */}
          {/* <div>
            <div className="relative my-4">
              <Input
                type="text"
                ref={searchRef}
                labelPlacement="outside"
                label="Choose staff to handover to"
                className=" w-full ring-0 rounded-md text-md"
                radius="sm"
                        classNames={{
                  inputWrapper: "outline-1 border-[1px] shadow-none rounded-[0.375rem] bg-white hover:bg-white focus-within:outline-blue-500 outline-offset-0 focus-within:!bg-white",
                  
                  label: "z-1",
                }}
                onChange={(e) => searchItem(e.target.value)}
                onKeyUp={(e) => hideContainer(e.target.value)}
              />
              <IoMdSearch className="lucide lucide-search  text-sidebarInptextColor absolute top-3 right-2" />
              <div className="my-4 flex items-center gap-4">
                <input type="checkbox" name="" id="main" />
                <label htmlFor="main">Is Main Handover</label>
              </div>

              {searchedStaff.length > 0 && (
                <ul className="absolute top-10 w-full bg-white px-5 border rounded shadow z-40">
                  {searchedStaff.map((handover, index) => (
                    <li
                      className="flex justify-between my-4 items-center py-2 px-3 cursor-pointer hover:bg-slate-200 rounded"
                      key={index}
                      onClick={() => addHandOver(handover)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          size="md"
                        />
                        <p className="m-0 font-medium">{handover.name}</p>
                      </div>
                      <p className="m-0 text-xs">{handover.abbr}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {handOvers.map((handOver, index) => (
              <div
                className="flex justify-between my-4 items-center py-2 px-3 rounded bg-slate-100"
                key={index}
              >
                <div className="flex items-center gap-5">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div className="">
                    <p className="m-0 font-medium">{handOver.name}</p>
                    <p className="m-0 text-xs">{handOver.role}</p>
                  </div>
                </div>
                <IoIosClose
                  size={20}
                  className="cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
              </div>
            ))}

            <div className="flex justify-end">
              <Button
              color="primary"
                disabled={!handOvers?.length}
                className="rounded-md"
                onClick={submitHandOver}
              >
                Submit
              </Button>
            </div>
          </div> */}
          <div>
            <div className="relative my-4">
               <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
            <Label>
            Hand Over
            </Label>
            <div className='w-full relative md:col-span-2'>
              {/* <Input
                type="text"
                ref={searchRef}
                placeHolder='Search'
                onChange={(e) => searchItem(e.target.value)}
                onKeyUp={(e) => hideContainer(e.target.value)}
              />
              <IoMdSearch className="lucide lucide-search  text-sidebarInptextColor absolute top-3 right-2" /> */}

               <Select
              // isMultiple={true}
            options={staff}
            isSearchable={true}
            value={currentSelected}
                 onChange={(value) => handleSelectHandOver(value)}
          />
            </div>
            </div>
              <div className="my-4 flex items-center gap-4">
                <input type="checkbox" name="" id="main" />
                <label htmlFor="main" className="font-helvetica font-normal">Is Main Handover</label>
              </div>

              {searchedStaff.length > 0 && (
                <ul className="absolute top-10 w-full bg-white px-5 border rounded shadow z-40">
                  {searchedStaff.map((handover, index) => (
                    <li
                      className="flex justify-between my-4 items-center py-2 px-3 cursor-pointer hover:bg-slate-200 rounded"
                      key={index}
                      onClick={() => addHandOver(handover)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          size="md"
                        />
                        <p className="m-0 font-medium">{handover.name}</p>
                      </div>
                      <p className="m-0 text-xs">{handover.abbr}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
{handOvers.length>0 &&
<div>
            {handOvers.map((handOver, index) => (
              <div
                className="flex justify-between my-4 items-center py-2 px-3 rounded bg-slate-100"
                key={index}
              >
                <div className="flex items-center gap-5">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div className="">
                    <p className="m-0 font-medium">{handOver.name}</p>
                    <p className="m-0 text-xs">{handOver.role}</p>
                  </div>
                </div>
                <IoIosClose
                  size={20}
                  className="cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
              </div>
            ))}

            <div className="flex justify-end">
              <Button
              color="primary"
                disabled={!handOvers?.length}
               className="rounded-md font-helvetica shadow"
                onClick={submitHandOver}
              >
                Add HandOvers
              </Button>
            </div>
</div>
}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HandOverForm;

HandOverForm.propTypes = {
  setInformation: PropTypes.func,
  setSelectedTab: PropTypes.func,
};
