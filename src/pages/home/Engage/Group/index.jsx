/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { dashboardContext } from "../../../../context/Dashboard";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import allUser from "./components/data";

const Group = () => {
  const { toggleSideBar, sidebarMinimizedHome } = useContext(dashboardContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  let isMediumScreen = useMediaQuery({ query: "(max-width: 1024px)" });


//   const [messageModalOpen, setMessageModalOpen] = useState(false);
//   const [isCompose, setIsCompose] = useState(false);
//   const [message, setMessage] = useState("");
  const [searchValue, setSearchValue] = useState("hello");
  const [filteredData, setFilteredData] = useState([]);
  const { userData } = useCurrentUser();
  const [showLargeChatContainer, setShowLargeChatContainer] = useState(false);
  
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchInp, setShowSearchInp] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [temporaryGroup, setTemporaryGroup] = useState(null);

  const sidebarRef = useRef();

  const sidebarWidth = "23rem";

  const sidebar_animation = isSmallScreen
    ? {
        open: {
          x: 0,
          width: sidebarWidth,
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
          x: "7.5rem",
          width: "7.5rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : isMediumScreen
    ? {
        //medium //
      }
    : {
        open: {
          x: "16rem",
          width: sidebarWidth,
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
          x:"7.5rem",
          width: "7.5rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isSmallScreen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isSmallScreen]);



  // group chat
  const selectAChat = (user) => {
    setShowLargeChatContainer(true);
    setSelectedChat(user);
    selectConversation()
  };

  const toggleInp = () => {
    // if(showSearchInp){
    // setChatHistoryFilter([]);
    setSearchTerm("");

    // }
    // setShowSearchInp(false)
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    // handleSearch(value);
  };

  const selectConversation = () => {
    if (isSmallScreen) {
        setSidebarOpen(false);
    //   setChatSidebarOpen(false);
    }
  };

  const handleUserFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = allUser?.filter((item) => {
        const startsWith = item?.name
          ?.toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item?.name
          ?.toLowerCase()
          .includes(value.toLowerCase());

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
    <>
      <div className="flex h-screen flex-col overflow-y-clip font-Exotic ">
        <div
          onClick={() => setSidebarOpen(false)}
          className={`md:hidden fixed inset-0 max-h-screen z-[50] bg-chatoverlay cursor-pointer ${
            sidebarOpen ? "block" : "hidden"
          } `}
        ></div>

        <div className="px-0 h-screen">
          <div className="relative  h-screen flex-1  flex">
            {/* {`w-full min-h-[93vh] ${ (sidebarMinimized) ?  'lg:ml-[7.5rem]'  : (sidebarOpen) ? 'lg:ml-64' : (!sidebarMinimized &&!sidebarOpen) &&'lg:ml-0'}`} */}

            {/* the drawer sidebar */}

            <motion.div
              ref={sidebarRef}
              variants={sidebar_animation}
              initial={{ x: isSmallScreen ? 350 : 0 }}
              animate={ 
                sidebarMinimizedHome && sidebarOpen
                  ? "minimize"
                  : !sidebarMinimizedHome && sidebarOpen
                ? "open" : "closed"
            
            }
              className={`shadow-sidebar group md:z-[40] z-[60] max-w-[20rem] w-[${sidebarWidth}] 
                    fixed md:top-[4.5rem] top-0  left-0
                h-[100vh]`}
            >
              <Sidebar
                showSearchInp={showSearchInp}
                setShowSearchInp={setShowSearchInp}
                selectConversation={selectConversation}
                // allChatHistory={allChatHistory}
                // allChatHistoryFilter={allChatHistoryFilter}
                searchTerm={searchTerm}
                handleChange={handleChange}
                selectAChat={selectAChat}
                closeInp={toggleInp}
                selectedUserData={selectedChat}
                handleUserFilter={handleUserFilter}
                // setIsCreatingGroup={() => setIsCreatingGroup(true)}
              />
            </motion.div>

            {/* the drawer side end */}

            <div
              className={`flex-1 flex flex-col w-full h-[93%] sticky top-[4rem]   ${
                sidebarOpen ? `md:ml-[20rem]` : !sidebarOpen && "md:ml-0"
              }`}
            >
              <Header
                toggleSideBar={toggleSideBar}
                showDrawer={() => setSidebarOpen(true)}
                selectedUserData={selectedChat}
                isCreatingGroup={isCreatingGroup}
                setIsCreatingGroup={setIsCreatingGroup}
                temporaryGroup={temporaryGroup}
              />
              <Body
                mate={selectedChat}
                isCreatingGroup={isCreatingGroup}
                temporaryGroup={temporaryGroup}
              />
              <Form mate={selectedChat} temporaryGroup={temporaryGroup} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Group;
