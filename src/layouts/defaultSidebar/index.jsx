/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useContext, useEffect } from "react";
import { useRef } from "react";
// import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
// import { defaultMenu } from "./routes";

import {  useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
// import { PiArrowsLeftRightBold } from "react-icons/pi";

// import SubMenuSidebar from "../submenuSidebar";
// import UserDropDownSidebar from "../components/UserDropDownSidebar";
// import { Search } from "lucide-react";

// import { useNavigate } from "react-router-dom";
import { defaultMenuHome, defaultMenuHomeAll } from "../sidebar/routes";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { Tooltip } from "@nextui-org/react";


const DefaultSidebar = () => {
//   const navigate = useNavigate();
  const {
    sidebarOpen,
    setSidebarOpen,
    isTablet,
    minimizeSidebarHome, sidebarMinimizedHome,
    // currentHomeSidemenu,
    setCurrentHomeSidemenu,
    // setShowminimizedsubMenu,
    setSidebarMinimizedHome
  } = useContext(dashboardContext);

  const sidebarRef = useRef();
  const { pathname } = useLocation();

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

  const foldSidebar = () => {
    minimizeSidebarHome();
  };

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

  const showSubMenu = (menu) => {
    if(menu === "Dashboard")return

    setSidebarMinimizedHome(false)
    setCurrentHomeSidemenu(menu)
  };

  return (
    <div className="relative bg-sidebarBg shadow-sidebar">
      <div
        onClick={() => overlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-[90] bg-chatoverlay cursor-pointer   ${
          sidebarOpen ? "block" : "hidden"
        } `}
      ></div>

      {/* <SubMenuSidebar /> */}

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTablet ? -350 : 0 }}
        animate={
            sidebarMinimizedHome && sidebarOpen
            ? "minimize"
            : !sidebarMinimizedHome && sidebarOpen
            ? "open"
            : "closed"
        }
        className="shadow-sidebar group  lg:z-[49] z-[91] max-w-[16rem]  w-[16rem] 
             fixed top-0 left-0
           h-screen  dark:!text-gray-100 bg-sidebarBg"
      >


        <div className="flex flex-col  h-full ">
          <ul className="whitespace-pre text-[0.9rem] flex flex-col overflow-x-hidden font-medium  scrollbar-thin scrollbar-thumb-transparent  group-hover:scrollbar-thumb-scrollbarColor scrollbar-track-transparent menuScrollBar  h-full  px-0  pb-20">
            {/* logo */}
            <div
              className={`flex flex-col bg-sidebarBg  ${
                sidebarMinimizedHome && " h-28" 
              }`}
            >
              <div
                className={`w-100 h-4  flex justify-end my-2   p-3 px-4 font-medium hover:cursor-pointer ${
                    sidebarMinimizedHome && "justify-center"
                }`}
                onClick={foldSidebar}
              >
                <PiArrowsLeftRightBold size={25} className="text-menuItemColor" />
              </div>

              <div
                className={`w-full   flex-col gap-4 justify-center p-1 px-3 items-center mt-24`}
              >
                {/* <div
                  className={`mr-8 py-2  pt-4 cursor-pointer  ${
                    sidebarMinimized ? "hidden" : "block"
                  }`}
                  onClick={routeToHome}
                >
                  <img
                    src="/assets/images/community_logo_light.png"
                    alt="comuneety-logo"
                  />
                </div> */}

              

                {/* <div className={`m-0 pl-2 px-1 my-2 ${sidebarMinimized && 'hidden'}`}>
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
                </div>  INPUT FIELD*/}
              </div>
            </div>
            {/* logo */}

            { 
            sidebarMinimizedHome ? (
                <>
                    {
                        defaultMenuHome?.map((route, i) => (
                        <Fragment key={i} >
                            <div className="p-0">
                            {/* {!sidebarMinimized && route?.title && (
                                <small className={`mx-[1.2rem] text-menuItemTitle font-bold text-sm inline-block tracking-widest px-2 mb-2 font-Lato ${i === 0 ? 'pt-3' : 'pt-7'}`}>
                                {route.title?.toLocaleUpperCase()}
                                </small>
                            )} TITLE*/}
            
                            {
                            //   route.withSubMenu ? (
                            //     <>
                            //       <div className=" w-full p-0">
                            //         {route?.submenu?.map((menu, i) => (
                            //           <div key={i} className="flex flex-col gap-1">
                            //             <SubMenu data={menu} routeMerge={route?.routeMerge} />
                            //           </div>
                            //         ))}
                            //       </div>
                            //     </>
                            //   ) : (
                                <>
                                <Tooltip
                                showArrow={true}
                                placement='right'
                                content={route?.name}
                                color="default"
                                >
                                        <li
                                            
                                            className={`relative  hover:text-white hover:cursor-pointer  link3 flex-col border-b-[1.6px] border-sidebarSubMenuBg/50   ${route.name === 'Dashboard' && '!text-white'}`}
                                            onClick={()=> route?.name === 'More' ? foldSidebar() :  showSubMenu(route?.name)} 
                                        >
                                            <route.icon size={30}  className={`min-w-max`} />
                        
                        
                                            <p className="flex-1 capitalize text-md w-full text-center truncate">{route?.name}</p>
                        
                                                {/* <IoIosArrowDown
                                                className={`${ subMenuOpen ? "rotate-30" :"-rotate-90"} duration-200 `}
                                                /> */}
                                            
                                            
                                        </li>
                                </Tooltip>
                                </>
                            //   )
                            }
                            </div>
                        </Fragment>
                        ))
                    }
                </>
            ) : (
                <>
                {
                    defaultMenuHomeAll?.map((route, i) => (
                    <Fragment key={i} >
                        <div className="relative  grid grid-cols-2 gap-2 mx-3 border-b-[1.6px] border-sidebarSubMenuBg/50">
                        {

                            route?.map(section => (
                                <>
                                <Tooltip
                                showArrow={true}
                                placement='bottom'
                                content={section?.name}
                                color="default"
                                >
                                        <li                    
                                            className={`relative  hover:text-white hover:cursor-pointer  link4 flex-col ${section?.name === 'Dashboard' && '!text-white'}`}
                                            onClick={()=>showSubMenu(section?.name)}
                                        >
                                            <section.icon size={30}  className={`min-w-max`} />
                        
                                            <p className="flex-1 capitalize text-md w-full text-center truncate">{section?.name}</p>                        
                                        </li>
                                </Tooltip>
                                </>

                            ))
                        
                        
                        }
                        </div>
                    </Fragment>
                    ))
                }
                
                </>
            )
            
            
        }
            
          </ul>
        </div>
      </motion.div>



    </div>
  );
};

export default DefaultSidebar;