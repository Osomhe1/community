/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { Plus } from "lucide-react";
import { MdCancel, MdFilterList } from "react-icons/md";
// import Avatar from "../../../../../components/Avatar";

import allUser from "./data";

import useCurrentUser from "../../../../../hooks/useCurrentUser";
import { Avatar } from "@nextui-org/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { SocketContext } from "../../../../../context/SocketContext";
import clsx from "clsx";
import { Plus } from "lucide-react";
import CreateGroupModal from "./CreateGroupModal";

const Sidebar = ({
  showSearchInp,
  // selectConversation,

  allChatHistory,
  allChatHistoryFilter,
  searchTerm,
  handleChange,
  selectAChat,
  closeInp,
  setIsCreatingGroup,
  openDefaultChatScreen
}) => {
  const { setCurrentPickedChat, onlineUsers } = useContext(SocketContext);
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const { userData } = useCurrentUser();

  const setCurrent = (data) => {
    selectAChat(data);
    // setCurrentPickedChat(data);
  };

  //  const mockOnlineUsers = useMemo(
  //     () =>   [
  //       { userId: 1,    socketId: 'NIxcyJz10sdjhsdsnKezfVa5AAAF' },
  //       { userId: 1689, socketId: 'NIxcyJz10K3487dezfVa5AAAF' },
  //       { userId: 1727, socketId: 'NIxcyJz10KasajaezfVa5AAAF' },
  //       { userId: 1779, socketId: 'NIxcyJz17sdsd0KezfVa5AAAF' },
  //       { userId: 2406, socketId: 'NIxcyJz1sdjsd80KezfVa5AAAF' },
  //       { userId: 2416, socketId: 'NIxcyJz1siudsd90KezfVa5AAAF' },
  //     ]
  //   ,

  //   [])

  //  const usersAvailable = useMemo(
  //     () =>   [
  //       {LAST_SEEN: null, 'IS_ONLINE': null, 'STAFF_ID': 1689, 'LAST_NAME': 'JOEL', 'FIRST_NAME': 'JOY'},
  //       {LAST_SEEN: null, IS_ONLINE: null, STAFF_ID: 2446, LAST_NAME: 'JOHNSON', FIRST_NAME: 'OLUTOYIN'}
  //     ],

  //   [])

  // useEffect(() => {

  //   const testOnline = ()=>{
  //    const test = mockOnlineUsers?.find(el => el.userId === usersAvailable[0].STAFF_ID )
  //    console.log(test)

  //   }

  //   testOnline()

  // }, [allChatHistory, mockOnlineUsers, usersAvailable])

  const handleUserFilter = (e) => {

      const value = e.target.value;
      let updatedData = [];
      setSearchValue(value);
      console.log(searchValue)

      if (value.length) {
        updatedData = allUser?.filter((item) => {
          const startsWith =
            item?.name?.toLowerCase().startsWith(value.toLowerCase())

          const includes =
            item?.name?.toLowerCase().includes(value.toLowerCase())

          if (startsWith) {
            return startsWith;
          } else if (!startsWith && includes) {
            return includes;
          } else return null;
        });
        setFilteredData(updatedData);
        setSearchValue(value);
      }
    };

  return (
    <div className={`h-full w-[20rem]  bg-[#e6e7e9] border-l-1 mx-1  shadow `}>
      <div className="py-[0.7rem] w-full text-gray-400    flex items-center  bg-white justify-center">
        {/* {!showSearchInp && <h3 className=" text-center">Chat Message</h3>} */}
        <div className={`m-0 px-2    w-full flex gap-3 items-center justify-center`}>
          <div
            className={`flex gap-x-2 items-center h-10 border border-sidebarInpColor/10    rounded-md px-4 relative    ${
              showSearchInp ? "" : ""
            }`}
          >
            <div className="mr-auto h-full  items-center  cursor-pointer">
              <button className="pl-3  outline-none rounded flex items-center justify-center">
                {" "}
                {searchTerm ? (
                  <MdCancel
                    onClick={closeInp}
                    className=" text-sidebarInptextColor text-center  absolute top-[0.75rem] left-4"
                    size={14}
                  />
                ) : (
                  <MdFilterList
                    className=" text-gray-700 text-center  absolute top-[0.75rem] left-4"
                    size={14}
                  />
                )}
              </button>
            </div>
            <input
              name=""
              id=""
              className={` outline-none border-none bg-transparent  px-2 w-full 
              placeholder:text-[0.80rem]  transition-all duration-700 placeholder:text-sidebarInptextColor  text-gray-500 ${
                showSearchInp ? "chatInpShow" : "chatInpShow"
              } `}
              onChange={()=>{}}
              // onChange={handleUserFilter}
              // onChange={(e) => handleChange(e)}
              type="text"
              value={searchValue}
              placeholder="Filter groups"
            />
          </div>


          <CreateGroupModal>
            <Plus
              size={32}
              className=" 
                cursor-pointer
                bg-white text-gray-500 hover:text-gray-500 outline-none hover:border-btnColor hover:border-2
                transition border rounded-full p-1 border-gray-400  mt-2
              "
            />
          </CreateGroupModal>
        </div>
      </div>

      <div className="py-0 text-gray-400">
        <div className="flex flex-col ">
          {/* <div className="w-full flex justify-between items-center px-5 py-1  cursor-pointer hover:shadow" onClick={setIsCreatingGroup}>
            <div>
              <span className="text-gray-400 font-semibold text-sm tracking-widest font-Exotic">
                CREATE GROUP
              </span>
            </div>
            <div className="border rounded-full p-[0.2px] cursor-pointer">
              <Plus strokeWidth={2.5} className=" text-chatsidebar-add" />
            </div>
          </div> */}
          {/* max-h-[550px] */}



          <div className=" md:max-h-[80vh]  max-h-[96vh]  overflow-y-auto  px-0 pb-10 space-y-[0.35rem] py-[0.1rem]">
            {
             (searchValue?.length > 0 ? filteredData : allUser)?.map((user, i) => (
                <div
                  key={user?.id}
                  className={`flex justify-between items-start cursor-pointer  hover:bg-slate-50 py-3 px-5  border-slate-300 bg-white rounded  `}
                  // ${ i % 2 === 0  ? "bg-yellow-50" : i % 3 === 1 ? "bg-green-50" : "bg-white"  }
                  onClick={() => setCurrent(user)}
                  // onClick={() => openDefaultChatScreen(user)}
                >
                  <div className="flex gap-x-4 flex-col gap-y-4">
                    {/* <Avatar isActive={user?.active}  fromChat={true} /> */}

                    {/* <div className="relative">
                      
                        <Avatar
                          isBordered
                          size="sm"
                          color="default"
                          name={'A'}
                          className=" cursor-pointer"
                        />
                    
                    </div> */}

                    {/* <span className=" truncate w-[8.5rem] text-gray-700 font-medium text-[0.85rem]">{user?.name}</span> */}

                    <div className="flex flex-col gap-y-[0.15rem] w-[10rem]">
                      <span className=" truncate w-[10rem] text-medium font-medium text-gray-600/90">
                        {user?.name}
                      </span>
                      <span className=" truncate w-[16rem] text-[0.9rem] text-gray-500/70 ">
                       {user?.desc}</span>
                    </div>

                   

                    <div className="flex gap-2 items-center">
                      {
                        user?.members?.map((mm,i)=> (
                          <Avatar key={i} size="sm" src={mm}/>

                        ))
                      }
                        {/* <Avatar size="sm" src="/assets/images/profiles/avatar-19.jpg"/> */}
                       
                        <span className="text-gray-600/40">+ {user?.totalMember} others</span>
                    </div>
                  </div>

                  {/* {user?.UNREAD_COUNT > 0 && (
                    <div className="min-w-5 min-h-5 bg-chatsidebar-more flex justify-center items-center text-white rounded-full text-xs font-bold">
                      {user?.UNREAD_COUNT}
                    </div>
                  )} */}
                </div>
              ))}
          </div>

          {/* integrated */}
            {/* <Avatar isActive={user?.active}  fromChat={true} /> */}
          {/* <div className=" max-h-[78vh]  overflow-y-auto  px-0 pb-10">
            {(allChatHistoryFilter?.length > 0
              ? allChatHistoryFilter
              : allChatHistory
            )
              ?.filter((el) => el?.STAFF_ID !== userData?.data?.STAFF_ID)
              ?.map((user) => (
                <div
                  key={user?.STAFF_ID}
                  className="flex justify-between items-start cursor-pointer rounded-md hover:bg-slate-50 p-3 px-5 border-y-[0.5px] border-slate-200"
                  onClick={() => setCurrent(user)}
                >
                  <div className="flex gap-x-4">

                    <div className="relative">
                      {user?.FILE_NAME?.includes("http") ? (
                        <Avatar size="md" src={user?.FILE_NAME} />
                      ) : (
                        <Avatar
                          isBordered
                          size="sm"
                          color="default"
                          name={user?.FIRST_NAME?.trim()[0]}
                          className=" cursor-pointer"
                        />
                      )}

                      {onlineUsers?.find(
                        (el) => el?.userId === user?.STAFF_ID
                      ) && (
                        <div>
                          <span
                            className={clsx(
                              "absolute block rounded-full ring-white  ring-1 h-[0.4rem] w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] bg-chatactive right-[0rem] -bottom-[0.1rem] "

                             
                            )}
                          />
                        </div>
                      )}
                    </div>

                   
                    <div className="flex flex-col gap-y-1 w-[8rem]">
                      <span className=" truncate w-[8rem] text-xs font-medium text-gray-600/90">
                        {user?.LAST_NAME + " " + user?.FIRST_NAME}
                      </span>
                      <span className=" truncate w-[8rem] text-[0.55rem] ">
                        {user?.DEPARTMENT}
                      </span>
                    </div>
                  </div>

                  {user?.UNREAD_COUNT > 0 && (
                    <div className="min-w-5 min-h-5 bg-chatsidebar-more flex justify-center items-center text-white rounded-full text-xs font-bold">
                      {user?.UNREAD_COUNT}
                    </div>
                  )}
                </div>
              ))}
          </div> */}
          {/* integrated */}










        </div>
      </div>
    </div>
  );
};

export default Sidebar;
