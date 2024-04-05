/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import Avatar from '../../../../../components/Avatar';
import { format } from "date-fns";
import { PiUsersLight } from "react-icons/pi";
import { MdCancel, MdFilterList, MdMenu } from "react-icons/md";
import { Avatar } from "@nextui-org/react";
import clsx from "clsx";
import { useContext, useState } from "react";
import { SocketContext } from "../../../../../context/SocketContext";
import { TbMessage2 } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { Plus, Search, UserPlus } from "lucide-react";
import CreateGroupModal from "./CreateGroupModal";
import useGroupAction from "../../../../../hooks/useGroupAction";
// import UserOne from "../../../../../assets/images/avatar2.jpg";
// import { useMemo, useState } from "react";

const Header = ({
  showDrawer,
  selectedUserData,
  openMessage,
  temporaryGroup,
}) => {
  const { onlineUsers } = useContext(SocketContext);

  const redirectToWhatsapp = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.open("whatsapp://", "_blank");
    } else {
      window.open("https://web.whatsapp.com/", "_blank");
    }
  };

  const [showSearchInp, setShowSearchInp] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);
  const {openModal} = useGroupAction()

  const closeInp = () => {};

  return (
    <>
      <div
        className="
        bg-white 
        flex
        sm:px-4 
        py-6 
        px-6 
        lg:px-8 
        justify-between 
        items-center 
        border-b
        border-gray-200
        rounded-lg
        mt-5 shadow-messagecard
        gap-10
      "
      >
        <div className="flex gap-4 items-center mr-1">
          {/* <div
          onClick={setshowchatContainer}
            className="
              md:hidden 
              block 
              text-sky-500 
              hover:text-sky-600 
              transition 
              cursor-pointer
            "
          >
            <HiChevronLeft size={32} />
          </div> */}
          {/* <div
              className="lg:hidden cursor-pointer border rounded-full"
              onClick={() => toggleSideBar()}
            >
              <MdMenu size={25} className='p-1' />
            </div> */}

          {/* <Avatar image={UserOne} bigger={true} isActive={true} fromChat={true}/> */}

          <div className="relative">
            {selectedUserData?.FILE_NAME?.includes("http") ? (
              <Avatar size="lg" src={selectedUserData?.FILE_NAME} />
            ) : (
              <Avatar
                size="lg"
                name={selectedUserData?.text  || "ICT"}

                // title={user?.LAST_NAME + " " + user?.FIRST_NAME}
              />
            )}

            {onlineUsers?.find(
              (el) => el?.userId === selectedUserData?.STAFF_ID
            ) && (
              <div>
                <span
                  className={clsx(
                    "absolute block rounded-full ring-white  ring-1 h-[0.4rem] w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] bg-chatactive right-[0.2rem] bottom-[0.1rem] "

                    // fromChat &&  bigger ? ' ring-1 h-[0.4rem] w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] bg-chatactive right-[0.22rem] bottom-[0.45rem]' :

                    // fromChat && big ? ' ring-1 h-[0.4rem] w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] bg-chatactive right-[0.075rem] bottom-[0.4rem]' :
                  )}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="text-[0.92rem] text-medium font-medium">
              {/* {selectedUserData?.LAST_NAME + " " + selectedUserData?.FIRST_NAME} */}
              {selectedUserData?.name || "ICT Department"}
            </div>
            <div className="text-[0.59rem] text-slate-500 flex gap-x-3 flex-wrap">
              {/* {selectedUserData?.DEPARTMENT} */}
              <div className="flex gap-x-1 items-center">
                <div className="w-1 h-1 rounded-full bg-slate-500  "></div>
                {/* <span>{selectedUserData?.DIRECTORATE}</span> */}
                <span className="text-[0.82rem]"> {(selectedUserData?.totalMember + 2 ) || 52}  {"people"}</span>
              </div>
            </div>
            <div className="text-xs font-light text-neutral-500">
              {/* {selectedUserData?.LAST_SEEN && (
                <>
                  {!onlineUsers?.find(
                    (el) => el?.userId === selectedUserData?.STAFF_ID
                  ) && (
                    <>
                      Last seen{" "}
                      {format(new Date(selectedUserData?.LAST_SEEN), "paa")}
                    </>
                  )}
                </>
              )} */}
              {/* Last seen today at {format(new Date(selectedUserData?.LAST_SEEN), 'paa')} */}
            </div>
          </div>

            {/* <div className="flex flex-col">
            <div className='font-medium tracking-wide text-gray-800'>Michelle Smith</div>
            <div className="text-sm font-light text-neutral-500">
              Last seen today at {format(new Date("1 Jan 2013"), 'paa')}
            </div>
          </div> */}
        </div>

        <div className="flex gap-4 items-center">
          <div
            className={`flex gap-x-2 items-center h-8 border lg:w-[15rem] w-[10rem] border-sidebarInpColor/10    rounded-full px-4 relative `}
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
                  <Search
                    className=" text-gray-700 text-center  absolute top-[0.5rem] left-4"
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
              // onChange={handleUserFilter}
              // onChange={(e) => handleChange(e)}
              type="text"
              // value={searchValue}
              placeholder="Search..."
            />
          </div>

          <CreateGroupModal>
            <UserPlus
                size={25} 
                onClick={()=>openModal('add')}
                className=" 
                  cursor-pointer
                  bg-white text-gray-500 hover:text-gray-500 outline-none  
                  transition  rounded-full p-1   mt-2
                "

            
            />
            {/* <Plus
            /> */}
          </CreateGroupModal>

          {/* <TbMessage2
            onClick={openMessage}
            size={32}
            className=" 
              cursor-pointer
              rounded-md bg-white text-gray-500 hover:text-gray-500 outline-none hover:border-btnColor hover:border-2
              transition 
            "
          />
          <FaWhatsapp
            onClick={redirectToWhatsapp}
            size={32}
            className=" 
              cursor-pointer
              rounded-md text-green-400  hover:text-gray-500 outline-none hover:border-btnColor hover:border-2
              transition 
            "
          /> */}

          <div className="center-profile2 cursor-pointer" onClick={showDrawer}>
            <PiUsersLight
              size={32}
              className=" 
                cursor-pointer
                rounded-md bg-white text-gray-400 hover:text-gray-500 outline-none hover:border-btnColor hover:border-2
                transition md:hidden
              "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
