/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { MessagingSectionMenu, PayrollSectionMenu, PeopleSectionMenu, WorkflowSectionMenu, defaultMenu } from "./routes";

import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
// import { PiArrowsLeftRightBold } from "react-icons/pi";

import SubMenuSidebar from "../submenuSidebar";
// import UserDropDownSidebar from "../components/UserDropDownSidebar";
import { Search } from "lucide-react";
import ChatDrawer from "../../pages/home/rightMenu/components/ChatDrawer";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const {
    sidebarOpen,
    setSidebarOpen,
    isTablet,
    sidebarMinimized,
    currentHomeSidemenu,
    setCurrentHomeSidemenu
    // minimizeSidebar, // removed for now
    // setShowminimizedsubMenu,
  } = useContext(dashboardContext);

  const [sideMenu, setSideMenu] = useState([])
  const [showLargeChatContainer, setShowLargeChatContainer] = useState(false);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  // console.log(pathname)
  // //the condition side menu is here
  // const sideMenu = pathname.includes("payroll") ? payrollMenu : pathname.includes("hr") ? hrMenu : defaultMenu;


useEffect(() => {
  const menus = determineSidebarMenu()
  setSideMenu(menus)


  return ()=>{
    setSideMenu([])
  }
  
}, [currentHomeSidemenu])









  const determineSidebarMenu = ()=>{
    switch (currentHomeSidemenu) {
      case "People":
        return PeopleSectionMenu
      case "Messaging":
        return MessagingSectionMenu;    
      case "Workflow (Memos)":
        return WorkflowSectionMenu;    
      case "Payroll":
        return PayrollSectionMenu;    
      default:
        return defaultMenu;
    }
  }




  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isTablet]);

  const overlayClicked = () => {
    setSidebarOpen(false);
    // setShowminimizedsubMenu(false);
  };

  // const foldSidebar = () => {
  //   minimizeSidebar();
  // };

  useEffect(() => {
    isTablet && setSidebarOpen(false);
  }, [pathname]);

  const Nav_animation = isTablet
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -350,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
        minimize: {
          x: 0,
          width: "7.5rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "0rem",
          transition: {
            damping: 40,
          },
        },
        minimize: {
          width: "7.5rem",
          transition: {
            damping: 40,
          },
        },
      };

  const routeToHome = () => {
    navigate("/engage/posts");
    setCurrentHomeSidemenu(null)
  };


  const openMessageRoom = ()=>{
    setShowLargeChatContainer(true)
    isTablet && setSidebarOpen(false);
  }

  return (
    <div className="relative bg-sidebarBg shadow-sidebar">
      <div
        onClick={() => overlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-[90] bg-chatoverlay cursor-pointer   ${
          sidebarOpen ? "block" : "hidden"
        } `}
      ></div>

      <SubMenuSidebar />

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTablet ? -350 : 0 }}
        animate={
          sidebarMinimized && sidebarOpen
            ? "minimize"
            : !sidebarMinimized && sidebarOpen
            ? "open"
            : "closed"
        }
        className="shadow-sidebar group  lg:z-[49] z-[91] max-w-[16rem]  w-[16rem] 
             fixed top-0 left-0
           h-screen  dark:!text-gray-100 bg-sidebarBg"
      >
        {/* top bar */}
        {/* <div
          className={`flex flex-col bg-sidebarBg  ${
            sidebarMinimized ? " h-28" : "h-56"
          }`}
        >
          <div
            className={`w-100 h-4  flex justify-end my-2   p-3 px-4 font-medium hover:cursor-pointer ${
              sidebarMinimized && "justify-center"
            }`}
            onClick={foldSidebar}
          >
            <PiArrowsLeftRightBold size={25} color="#ccc" />
          </div>
          <div
            className={`w-full h-56  flex-col gap-4 justify-center p-3 items-center`}
          >
            <div
              className={`mr-8 py-2  pt-4 cursor-pointer  ${
                sidebarMinimized ? "hidden" : "block"
              }`}
              onClick={routeToHome}
            >
              <img
                src="/assets/images/community_logo_light.png"
                alt="comuneety-logo"
              />
            </div>

            <div className="flex items-center  w-full">
              <UserDropDownSidebar className="font-medium text-gray-600" />
            </div>

            <div className={`m-0 p-0 my-2 ${sidebarMinimized && 'hidden'}`}>
              <div
                className={`flex items-center h-full bg-sidebarInpColor rounded px-4`}
              >
                <input
                  name="" 
                  id=""
                  className="outline-none border-none bg-transparent  px-2 w-full placeholder:text-xs py-2 placeholder:text-sidebarInptextColor text-gray-500 "
                  type="text"
                  placeholder="Search..."
                />
                <div className="ml-auto flex  h-full  ">
                  <button className="pl-3  py-1 pt-[0.5rem] outline-none rounded">
                    {" "}
                    <Search className=" text-sidebarInptextColor" size={12} />
                  </button>
                </div>
              </div>
            </div>

          </div>
         
        </div> */}

        <div className="flex flex-col  h-full ">
          <ul className="whitespace-pre text-[0.9rem] flex flex-col overflow-x-hidden font-medium  scrollbar-thin scrollbar-thumb-transparent  group-hover:scrollbar-thumb-scrollbarColor scrollbar-track-transparent menuScrollBar  h-full  px-0  pb-20">
            {/* logo */}
            <div
              className={`flex flex-col bg-sidebarBg  ${
                sidebarMinimized && " h-28" 
              }`}
            >
              {/* <div
                className={`w-100 h-4  flex justify-end my-2   p-3 px-4 font-medium hover:cursor-pointer ${
                  sidebarMinimized && "justify-center"
                }`}
                onClick={foldSidebar}
              >
                <PiArrowsLeftRightBold size={25} color="#ccc" />
              </div> */}
              <div
                className={`w-full   flex-col gap-4 justify-center p-1 px-3 items-center`}
              >
                <div
                  className={`mr-8 py-2  pt-4 cursor-pointer  ${
                    sidebarMinimized ? "hidden" : "block"
                  }`}
                  onClick={routeToHome}
                >
                  <img
                    src="/assets/images/community_logo_light.png"
                    alt="comuneety-logo"
                  />
                </div>

                {/* <div className="flex items-center  w-full">
                  <UserDropDownSidebar className="font-medium text-gray-600" />
                </div> */}

                <div className={`m-0 pl-2 px-1 my-2 ${sidebarMinimized && 'hidden'}`}>
                  <div
                    className={`flex items-center h-10 bg-sidebarInpColor rounded px-4 relative`}
                  >
                    <input
                      name="" 
                      id=""
                      className="outline-none border-none bg-transparent  px-2 w-full placeholder:text-xs  placeholder:text-sidebarInptextColor text-gray-500 "
                      type="text"
                      placeholder="Search"
                    />
                    <div className="ml-auto h-full  items-center ">
                      <button className="pl-3  outline-none rounded">
                        {" "}
                        <Search className=" text-sidebarInptextColor text-center  absolute top-[0.9rem] right-4" size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* logo */}

            {sideMenu?.map((route, i) => (
              <Fragment key={i} >
                <div className="p-0">
                  {!sidebarMinimized && route?.title && (
                    <small className={`mx-[1.2rem] text-menuItemTitle font-bold text-sm inline-block tracking-widest px-2 mb-2 font-Lato ${i === 0 ? 'pt-3' : 'pt-7'}`}>
                      {route.title?.toLocaleUpperCase()}
                    </small>
                  )}

                  {route.withSubMenu ? (
                    <>
                      <div className=" w-full p-0">
                        {route?.submenu?.map((menu, i) => (
                          <div key={i} className="flex flex-col gap-1">
                            <SubMenu data={menu} routeMerge={route?.routeMerge} />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>

                      {
                        route?.name?.toLowerCase() === 'chat room'   ? (
                          <li
                          className={ ` ${
                            sidebarMinimized &&
                            "border-b border-gray-800 py-0  hover:text-white "
                          }`}
                        >
                          <div
                            onClick={openMessageRoom}
                            className={`group/navitem ${
                              sidebarMinimized
                                ? "flex flex-col text-center justify-center hover:no-underline   gap-1 cursor-pointer  duration-300 font-medium text-gray-400"
                                : "link"
                            }`}
                          >
                            
                            <route.icon
                              // strokeWidth={pathname.includes(route.route) && 4}
                              size={ sidebarMinimized ? 30 : 20}
                              className={`min-w-max group-hover/navitem:text-menuItemColor ${
                                sidebarMinimized && "mx-auto"
                              }
                            
                              
                              ${ 
                              (pathname.includes(route.route)) ? 'text-white' : 'text-menuItemIcon'}`}
                            />

                            {route.name}
                          </div>
                        </li>
                        ) : 
                        <li
                          className={ ` ${
                            sidebarMinimized &&
                            "border-b border-gray-800 py-0  hover:text-white "
                          }`}
                        >
                          <NavLink
                            to={route.route}
                            className={`group/navitem ${
                              sidebarMinimized
                                ? "flex flex-col text-center justify-center hover:no-underline   gap-1 cursor-pointer  duration-300 font-medium text-gray-400"
                                : "link"
                            }`}
                          >
                            
                            <route.icon
                              // strokeWidth={pathname.includes(route.route) && 4}
                              size={ sidebarMinimized ? 30 : 20}
                              className={`min-w-max group-hover/navitem:text-menuItemColor ${
                                sidebarMinimized && "mx-auto"
                              }
                            
                              
                              ${ 
                              (pathname.includes(route.route)) ? 'text-white' : 'text-menuItemIcon'}`}
                            />

                            {route.name}
                          </NavLink>
                        </li>
                      }


                    </>
                  )}
                </div>
              </Fragment>
            ))}
          </ul>
        </div>
      </motion.div>


      {
      <ChatDrawer fromMessageRoom={true}  isOpen={showLargeChatContainer} onClose={() => setShowLargeChatContainer(false)} />
      }
    </div>
  );
};

export default Sidebar;