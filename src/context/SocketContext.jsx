/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState,  useEffect } from "react";
import { io } from "socket.io-client";
import useCurrentUser from "../hooks/useCurrentUser";
import { updateChatStatusAction } from "../API/chat";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const SocketContext = createContext();


// http://localhost:4000

// const socket = io("https://clancomsocket.vercel.app/", {
//   autoConnect: false,
// });

// const socket = io("https://lendnode.creditclan.com/communeety/", {
//   autoConnect: false,
// });


const socket = io("https://clansocket.onrender.com/", {
  autoConnect: false,
});

// const socket = io('https://warm-wildwood-81069.herokuapp.com');

const SocketContextProvider = ({ children }) => {
  const [allChat, setAllChat] = useState([]);
  const [typingObj, setTypingObj] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [allChatHistory, setAllChatHistory] = useState([]);
  const [allChatHistoryFilter, setAllChatHistoryFilter] = useState([]);
  const [shouldScroll, setShouldScroll] = useState(false);
  const {userData} = useCurrentUser()
  const [currentPickedChat, setCurrentPickedChat] = useState(null)

  const allChatHistoryRef = useRef()
  const allChatHistoryFilterRef = useRef()
  const currentPickedChatRef = useRef()
  const chatUpdateTimeRef = useRef()
  const { pathname } = useLocation();








  useEffect(() => {
    
    currentPickedChatRef.current = currentPickedChat

  }, [currentPickedChat])








  


  const setChat = (data) => {
    setAllChat([...data]);

    setTimeout(() => {
      updateUnread(data)
    }, 200);
  };

  const setMoreChat = (data) => {
    const incoming = [...data, ...allChat]
            const uniqueIds = new Set();
            const uniqueArray = incoming.filter(obj => {
              if (!uniqueIds.has(obj.CHAT_ID)) {
                uniqueIds.add(obj.CHAT_ID);
                return true;
              }
              return false;
            });

    setAllChat([...uniqueArray]);
    setTimeout(() => {
      updateUnread(uniqueArray)
    }, 200);
  };

  const addChat = (data) => {
    setAllChat([...allChat, data]);
  };

  const clearChat = () => {
    setAllChat([]);
  };

  const setChatHistory = (data) => {
    setAllChatHistory([...data]);
    allChatHistoryRef.current = [...data]
  };

  const setChatHistoryFilter = (data) => {
    setAllChatHistoryFilter([...data]);
    allChatHistoryFilterRef.current = [...data]
  };



  const updateUnread = async (data) => {
    try {    
          let filterUnreadIDs = data
            ?.filter(
              (el) =>
                el?.SENDER_ID === currentPickedChatRef.current?.STAFF_ID && el.STATUS === 0
            )
            ?.map((e) => e.CHAT_ID)
            ?.join(",");
    
          let theChatUser = (
            allChatHistoryFilterRef.current?.length > 0 ? allChatHistoryFilterRef.current : allChatHistoryRef.current
          )?.find((chatUser) => chatUser.STAFF_ID === currentPickedChatRef.current?.STAFF_ID);
    
        // console.log(filterUnreadIDs)
        if(!theChatUser) return

        theChatUser.UNREAD_COUNT = 0

          const latestHistory = (
            allChatHistoryFilterRef.current?.length > 0 ? allChatHistoryFilterRef.current : allChatHistoryRef.current
          )?.map((el) =>
            el?.STAFF_ID === theChatUser.STAFF_ID ? theChatUser : el
          );
    
          if (filterUnreadIDs) {
            const res = await updateChatStatusAction(filterUnreadIDs);
            if (res) {
              if (allChatHistoryFilterRef.current?.length > 0) {
                setAllChatHistory([...latestHistory]);
              } else {
                setAllChatHistoryFilter([...latestHistory]);
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
    
    };


  const reArrangeChatHistory = (chatuser) => {
      if (allChatHistoryFilter.length  === 0) {
        let values = [...allChatHistory];
        const index = values.findIndex(
          (data) => data?.STAFF_ID === chatuser?.STAFF_ID
        );

        // console.log('here', index, chatuser, values)
        if(index === 0) return
        
        // console.log('there', index)
        if (index !== -1) {
          const element = values.splice(index, 1)[0];
          // console.log('here', element)
          values.splice(0, 0, element);
          // console.log(element, values);
          setAllChatHistory([...values]);
        }
        
      }else{


        let valuesFilter = [...allChatHistoryFilter];
          const indexFilter = valuesFilter.findIndex(
            (data) => data?.STAFF_ID === chatuser?.STAFF_ID
          );

          if(indexFilter !== 0 && indexFilter !== -1) {

              const elementFilter = valuesFilter?.splice(indexFilter, 1)[0];
              // console.log(elementFilter, valuesFilter);
              valuesFilter.splice(0, 0, elementFilter);
              setAllChatHistoryFilter([...valuesFilter]);

          }



          let values2 = [...allChatHistory];
          const index2 = values2.findIndex(
            (data) => data?.STAFF_ID === chatuser?.STAFF_ID
          );
  
          if(index2 === 0) return
          
      
          if (index2 !== -1) {
            const element2 = values2.splice(index2, 1)[0];
            values2.splice(0, 0, element2);
            // console.log(element2, values2);
            setAllChatHistory([...values2]);
          }else{
            values2?.splice(0, 0, chatuser);
            // console.log(values2);
            setAllChatHistory([...values2]);
          }
      }



  };





// =====================================socket==================================

  useEffect(() => {

    function onConnect() {

      socket.emit('addUser', userData?.data?.STAFF_ID)

    }

    function onDisconnect() {
      // console.timeLog("disconnected");
    }

    if( (pathname.includes('/message_rooms')) || (pathname==='/engage/posts') ){
          socket.connect()
          socket.on("connect", onConnect);
          socket.on("disconnect", onDisconnect);
    }


   

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [pathname]);





  
  
  




  const updateIncomingInactiveChat = (msg) =>{

    if(chatUpdateTimeRef.current === msg?.messageObj?.CHAT_ID){
        return
    }

    let theChatUser = (
      allChatHistoryFilterRef.current?.length > 0 ? allChatHistoryFilterRef.current : allChatHistoryRef.current
    )?.find((cUser) => cUser.STAFF_ID === msg?.messageObj?.SENDER_ID);

    // console.log(theChatUser)

    theChatUser.UNREAD_COUNT += 1
    // console.log(theChatUser, msg?.messageObj)



    const latestHistory = (
      allChatHistoryFilterRef.current?.length > 0 ? allChatHistoryFilterRef.current : allChatHistoryRef.current
    )?.map((el) =>
      el?.STAFF_ID === theChatUser.STAFF_ID ? theChatUser : el
    );

    if (allChatHistoryFilterRef.current?.length > 0) {
      setAllChatHistory([...latestHistory]);
    } else {
      setAllChatHistoryFilter([...latestHistory]);
    }
    chatUpdateTimeRef.current = msg?.messageObj?.CHAT_ID
    reArrangeChatHistory(theChatUser)
  }


  



  

  const removeTyping = ()=>{
    setTypingObj(null)
  }
  
  
  const sendMessage = (msg)=>{
    // console.log(msg)
    socket.emit('sendMessage', {senderId: msg?.SENDER_ID,  receiverId:  msg?.RECEIVER_ID,     messageObj: msg})

    // socket.emit('sendMessage', {senderId: msg?.SENDER_ID,  receiverId:  msg?.SENDER_ID,     messageObj: msg})
  }
  


  const sendTypingSignal = (typingObj)=>{
    // console.log(typingObj)

    socket.emit('sendTyping', {senderId: typingObj?.SENDER_ID,  receiverId: typingObj?.RECEIVER_ID,})

    // socket.emit('sendTyping', {senderId: typingObj?.SENDER_ID,  receiverId: typingObj?.SENDER_ID,})
    
    // clearTimeout(timeout);
    // var timeout = setTimeout(() => { socket.emit('stopTyping', {senderId: typingObj?.SENDER_ID,  receiverId: typingObj?.RECEIVER_ID,}); }, 1000);

  }
  
  
  useEffect(() => {

    const incomingOnlineUser = (users)=>{
      console.log(users)
      setOnlineUsers([...users])
  
    }
  
    socket.on('getUsers', (incoming) => incomingOnlineUser(incoming));
  
  }, [onlineUsers]);



  useEffect(() => {

    const incomingMessage = (msg)=>{

      if(currentPickedChatRef.current?.STAFF_ID === msg?.messageObj?.SENDER_ID ){
        setAllChat([...allChat, msg.messageObj])
        setShouldScroll(true)
        removeTyping()
        
        setTimeout(() => {
          // console.log(msg, currentPickedChat)
  
          updateUnread([...allChat, msg.messageObj])
        }, 200);
  
      }else{
  
        // console.log(allChatHistoryFilter, allChatHistory, )
        updateIncomingInactiveChat(msg)
      
      }
    }
  
    socket.on('getMessage', (incomingMsg) => incomingMessage(incomingMsg));

  
  }, [allChat, currentPickedChat, onlineUsers,]);







  useEffect(() => {

    const incomingTypingSignal = (data)=>{
      // console.log('typing', data?.senderId)
  
      // console.log(currentPickedChatRef.current?.STAFF_ID, data?.senderId)
  
      if(currentPickedChatRef.current?.STAFF_ID === data?.senderId ){
        setTypingObj(data?.senderId)
  
       setTimeout(() => { removeTyping() }, 5000);
      }
  
    }
  
    socket.on('getTyping', (incomingID) => incomingTypingSignal(incomingID));

  
  }, [currentPickedChat]);



  // function to handle when a user or socket is typing
  // const handleUserTyping = () => {
  //   clearTimeout(timeout);
  //   socket.emit('userTyping', socket.id, 'start');
  //   var timeout = setTimeout(() => { socket.emit('userTyping', socket.id, 'stop'); }, 1000);
  // };

   // scroll to bottom page function when message is sent
    //  const scrollToBottom = () => {
    //   window.scroll({
    //     top: document.body.offsetHeight, left: 0, behavior: 'smooth',
    //   });
    // };

  

// =====================================socket==================================





  return (
    <SocketContext.Provider
      value={{
        setAllChat,
        allChat,
        setChat,
        addChat,
        clearChat,
        shouldScroll,
        setShouldScroll,
        allChatHistory,
        setChatHistory,
        reArrangeChatHistory,
        setMoreChat,
        setChatHistoryFilter,
        allChatHistoryFilter,
        sendMessage,
        sendTypingSignal,
        onlineUsers,
        typingObj,
        setCurrentPickedChat,
        currentPickedChat
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
