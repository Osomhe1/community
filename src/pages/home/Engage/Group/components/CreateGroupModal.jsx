/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Button, Drawer, Input, Space } from "antd";
import { Avatar, Checkbox } from "@nextui-org/react";
import useGroupAction from "../../../../../hooks/useGroupAction";



const optionsAdd = [
  "Member addition",   "Send invite"
]
const options = [
  "Create group", "Send invite"
]

const CreateGroupModal = ({ children }) => {
  const {type, clearModal} = useGroupAction()
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const [currentOption, setCurrentOption] = useState(type === 'add' ? "Member addition" : "Create group");



  useEffect(() => {
    
    type === 'add' ? setCurrentOption("Member addition") : setCurrentOption("Create group")
  
    return () => {
      setCurrentOption(null)
    }
  }, [type])
  
  


  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    clearModal()
    setCurrentOption(null)
  };


const selectOption = (opt)=>{
        setCurrentOption(opt)
}



  return (
    <div className="">
      <Space>
        {/* <Button type="primary" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button> */}
        <div onClick={showLargeDrawer}>{children}</div>
      </Space>
      <Drawer
        title={``}
        placement="right"
        size={size}
        style={{background: '#f7f7f7'}}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //   </Space>
        // }
      >
        <div className="flex flex-col gap-5  px-4 ">
          <div className="flex flex-col font-Roboto">
            <div className="text-2xl font-bold">{type === 'add' ? 'Add group member' : 'Create group' } </div>
            <div className="text-gray-400 font-medium">
              You can add as many as 10 members to this group
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px]  gap-7 h-full">

            <div className={`flex flex-col border shadow-xl bg-white rounded-md ${type && 'py-5'}  `}>
              {
                type !== 'add' ?
                <div className="flex flex-col p-4 border-b-2 border-gray-300">
                        <div className="flex flex-col sm:flex-row gap-2  sm:gap-6 justify-between ">
                            <div className=" text-base font-medium w-32">Group name</div>
                            <div className="flex-1"><Input size="large"></Input></div>
                        </div>
                </div> : null
              }
                <div className="flex flex-col p-4 py-6 border-b border-gray-300">
                        <div className="flex flex-col sm:flex-row gap-2  sm:gap-6  justify-between ">
                            <div className=" text-base font-medium w-32">Add members</div>
                            <div className="flex-1 flex flex-col gap-7">
                                <Input size="large"></Input>
                                <div className="flex flex-wrap gap-4">
                                    <Avatar size="lg"/>   <Avatar size="lg"/>  <Avatar size="lg"/> 
                                    <Avatar size="lg"/>   <Avatar size="lg"/>  <Avatar size="lg"/>   <Avatar size="lg"/>  <Avatar size="lg"/> 
                                </div>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col p-4  gap-4">
                        <label className="flex gap-6">
                            <Checkbox/>
                            <div className="text-sm">
                                Notify members via Prompt when sent
                            </div>
                        </label>
                        <label className="flex gap-6">
                            <Checkbox/>
                            <div className="text-sm">
                                Notify by sms
                            </div>
                        </label>
                </div>
            </div>

            <div className="h-[100px] sm:h-[300px]">
              <div className=" h-full border-l-1 border-gray-400  ">


                <div className="flex flex-col py-5 md:py-10 text-sm gap-3 ml-2 ">
                  {(type === "add" ? optionsAdd : options)?.map((pk) => (
                    <div
                      key={pk}
                      className={`${
                        currentOption === pk && "font-bold"
                      } relative cursor-pointer`}
                      onClick={() => selectOption(pk)}
                    >
                        <span className=" ml-3">
                                {pk}
                        </span>
                     
                      <span
                        className={`w-[0.7rem] h-[0.7rem] rounded-full  ${
                            currentOption === pk
                            ? "bg-green-700/80"
                            : "bg-gray-300"
                        }  border-1 border-gray-400 absolute -left-[0.9rem] top-1 duration-200 transition-all`}
                      ></span>
                      {/* )} */}
                    </div>
                    ))}       
                </div>
              </div>
            </div>

          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CreateGroupModal;
