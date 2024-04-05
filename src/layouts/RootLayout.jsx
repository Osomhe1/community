/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { dashboardContext } from "../context/Dashboard";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import DefaultSidebar from "./defaultSidebar";

function RootLayout() {
  const { sidebarOpen, sidebarMinimized, isTablet, currentHomeSidemenu, sidebarMinimizedHome } =
    useContext(dashboardContext);
  const { pathname } = useLocation();

  return (
    <div className="dark:text-gray-100 dark:bg-slate-700 bg-lighten duration-200 ease-in-out z-1 overflow-visible">
      {/* {
                (pathname.includes('/message_rooms')) || (!pathname==='/engage/memos')  ? null:
                <Navbar/>
              } */}
      {!pathname === "/engage/memos" ? null : <Navbar />}

      <div className="flex w-full ">
        {
          currentHomeSidemenu === null ? (
            <DefaultSidebar/>
          ) : (
            <Sidebar /> 
          )
        }
        <div
          className={`w-full min-h-[93vh] ${
            sidebarMinimizedHome
              ? "lg:ml-[7.5rem]"
              : sidebarOpen
              ? "lg:ml-64"
              : !sidebarMinimizedHome && !sidebarOpen && "lg:ml-0"
          }`}
        >
          {
            //  ${  (!sidebarMinimized &&!sidebarOpen) &&'lg:mx-auto' }
            pathname.includes("/home") ? (
              <main
                className={`py-4 flex-1  mx-auto w-full overflow-clip
                          ${
                            sidebarOpen && !isTablet
                              ? " w-[98%] lg:w-[73%] subsemi:w-[90%]   xx:w-[84%]  "
                              : " max-w-[90%] sm:w-[72%] md:w-[75%] lg:w-[70%] "
                          }
                        
                        `}
              >
                <Outlet />
              </main>
            ) 
            // : pathname.includes("/message_rooms") ? (
            //   <main
            //     className={`py-0 flex-1 max-w-[100%] overflow-clip mx-auto ${
            //       !sidebarMinimized && !sidebarOpen && "lg:ml-0"
            //     }`}
            //   >
            //     <Outlet />
            //   </main>
            // ) 
              :  
                pathname==="/engage/memos" ? (
                <main className={`py-0 flex-1 max-w-[87%] overflow-clip mx-auto ${  (!sidebarMinimized &&!sidebarOpen) &&'lg:ml-[16rem]'}`}>
                    <Outlet/>
                </main>
              ):
               
                pathname==="/engage/group" ? (
                <main className={`py-0 flex-1 max-w-[93.5%] overflow-clip mx-auto ${  (!sidebarMinimizedHome &&!sidebarOpen) &&'lg:ml-[16rem]'}`}>
                    <Outlet/>
                </main>
              ):

              pathname==="/integrate/settings" ? (
                <main className={`py-0 flex-1 max-w-[100%] overflow-clip mx-auto ${  (!sidebarMinimized &&!sidebarOpen) &&'lg:ml-[16rem]'}`}>
                    <Outlet/>
                </main>
              )
              :
              <main
                className={`py-4 flex-1 px-4 max-w-[87%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && "lg:ml-0"
                }`}
              >
                <Outlet />
              </main>
            
          }
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
