import { useContext } from "react";

import { MdMenu } from "react-icons/md";
import { dashboardContext } from "../../context/Dashboard";

import UserDropdown from "../components/UserDropdown";
import DropdownNotification from "../components/DropdownNotification";
// import DropdownCompany from "../components/DropdownCompany";
// import DropdownMessage from "../components/DropdownMessage";
import { Search, Settings } from "lucide-react";
// import { AiOutlineWechat } from "react-icons/ai";
// import { HiGlobeAlt } from "react-icons/hi2";
import { FaGlobeAmericas } from "react-icons/fa";
// import { BsRobot } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { TbMessage2 } from "react-icons/tb";
import { GiTrade } from "react-icons/gi";
import { Tooltip } from "@nextui-org/react";

const Navbar = () => {
  const { toggleSideBar, sidebarOpen, sidebarMinimized, sidebarMinimizedHome } = useContext(dashboardContext);
    const { pathname } = useLocation();
  // minimized sidebar was omitted for now!

  return (
    <div className={`right-0 left-0 p-2 shadow-md  sticky top-0 dark:shadow-md  bg-white  ${pathname.includes('engage/posts') ? 'z-40' : 'z-10'}`}>
      <div className="px-3 py-1 ">
        <div className="flex items-center justify-between">
          
          <div className={`flex items-center justify-between gap-2 ${ 
            (sidebarMinimized && !sidebarOpen) ? 'flex ml-0' :(sidebarMinimized && sidebarOpen) ?  'flex ml-[7.2rem]'  : (sidebarOpen) ? 'flex' : (!sidebarMinimized && !sidebarOpen) && 'flex ml-0' }`}>

            <div
              className="lg:hidden cursor-pointer"
              onClick={() => toggleSideBar()}
            >
              <MdMenu size={25} />
            </div>

            <img
              src="/assets/images/community-logo.png"
              alt="comuneety-logo"
              className={`w-32  ${sidebarMinimizedHome && sidebarOpen && 'hidden' }`}
            />

          <div className="hidden md:block">
            <div className={`flex items-center h-full bg-gray-100 rounded-md  
            ${ (sidebarMinimized) ?  'lg:ml-[1.5rem]'  : (sidebarOpen) ? 'lg:ml-32' : (!sidebarMinimized &&!sidebarOpen) &&'lg:ml-0'}
            
            `}>
              <div className="mr-auto flex  h-full  ">
                <button className="pl-3  py-1 pt-[0.5rem] outline-none rounded">
                  {" "}
                  <Search className=" text-gray-400" size={12} />
                </button>
              </div>
              <input
                name=""
                id=""
                className="outline-none border-none bg-transparent  px-2 w-full placeholder:text-xs py-2 placeholder:text-gray-400 text-gray-500 "
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>

          </div>


         

          <div className="flex items-center justify-between md:gap-8  gap-3 pr-4">
           

            <UserDropdown className="font-medium text-gray-600" />

            
            {/* <BsRobot title="ai" size={25} className="text-gray-500"/> */}
            <Tooltip
                  showArrow={true}
                  placement='bottom'
                  content='Marketplace'
                  color="default"
                  >
                  <GiTrade  size={20} className="text-gray-500 cursor-pointer"/>
            </Tooltip>
            <Tooltip
                  showArrow={true}
                  placement='bottom'
                  content='Global'
                  color="default"
                  >
            <FaGlobeAmericas size={20} className="text-gray-500 cursor-pointer"/>
            </Tooltip>
            <Tooltip
                  showArrow={true}
                  placement='bottom'
                  content='Chatroom'
                  color="default"
                  >
                 <TbMessage2  size={23} className="text-gray-500 cursor-pointer"/>
            </Tooltip>

            {/* <Tooltip
                  showArrow={true}
                  placement='bottom'
                  content='Setting'
                  color="default"
                  > */}
                  <Settings size={21
                  } className="text-gray-500 cursor-pointer"/>
            {/* </Tooltip> */}

            <div>
              <DropdownNotification />
            </div>

            {/* <div>
              <DropdownMessage />
            </div> */}

            {/* <div className="border-l pl-2">
              <DropdownCompany />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
