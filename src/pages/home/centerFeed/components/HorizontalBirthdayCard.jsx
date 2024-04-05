/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, useDisclosure } from "@nextui-org/react"
import { Cake } from "lucide-react"
import UserCard from "./UserCard"
import WishInputDrawer from "./WishInputDrawer";
import { useStateManager } from "react-select";
import { useContext, useEffect, useRef, useState } from "react";
import UserCard2 from "./UserCard2";
import { PiConfettiFill } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";
import BirthdayRoom from "../../Engage/BirthdayRoom/BirthdayRoom";
import { SocketContext } from "../../../../context/SocketContext";
import ChatDrawer from "../../rightMenu/components/ChatDrawer";
import useCurrentUser from "../../../../hooks/useCurrentUser";


// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const HorizontalBirthdayCard = ({data}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [curUser, setCurUser] = useState(null)
    const [isAtRightMost, setIsAtRightMost] = useState(false);
    const [isAtLeftMost, setIsAtLeftMost] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const { setCurrentPickedChat } = useContext(SocketContext)
    const [selectedChat, setSelectedChat] = useState(null)
    const [showLargeChatContainer, setShowLargeChatContainer] = useState(false)
    const {userData} = useCurrentUser()


    const containerRef = useRef(null);

// console.log(isAtLeftMost, isAtRightMost )


    useEffect(() => {
        const handleScroll = () => {
          if (containerRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
            const isLeftMost = scrollLeft === 0;
            const isRightMost = scrollWidth - scrollLeft === clientWidth;
            setIsAtLeftMost(isLeftMost);
            setIsAtRightMost(isRightMost);
          }
        };
    
        if (containerRef.current) {
          containerRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (containerRef.current) {
            containerRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);
    
    

    const scrollPrev = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 350; // Adjust the scroll amount as needed
      }
    };
  
    const scrollNext = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 350; // Adjust the scroll amount as needed
      }
    };


    const seaAll = ()=>{
      setIsDrawerOpen(true)
    }

    const selectAChat = (user) => {
      setShowLargeChatContainer(true)
      setSelectedChat(user)
    }

    const setCurrent = (data) => {
      if(data?.STAFF_ID !== userData?.data?.STAFF_ID){
        selectAChat(data)
        setCurrentPickedChat(data)
      }
    }






 







  return (
    <div className=" bg-white rounded-xl py-7   w-full shadow-sm" >
        <div className=" flex items-center px-7 justify-between shadow-sm  py-1  pb-4 border-b">
            <div className="flex gap-x-2 items-center justify-between w-full" >
                <div className="flex gap-x-2 items-center">
                    <PiConfettiFill size={25} color="red"/>
                    <span className="text-lg font-bold">Birthday post</span>
                </div>
                <div className=" flex gap-2">
                  <Button
                    variant="light"
                    size="sm"
                    className="  px-2 !rounded-full"
                    onClick={seaAll}
                  >
                    {" "}
                    <span className="font-medium text-base px-2 text-gray-600 " >See all</span>
                  </Button>
                     {/* <Button size="sm" onClick={scrollPrev} className="w-4 h-7" variant="flat"> <GiPreviousButton color="gray" /> </Button>
                     <Button size="sm" onClick={scrollNext} className="w-4 h-7" variant="flat"> <GiNextButton color="gray"/> </Button> */}
                </div>
            </div>
            <div>   
              
            </div>
        </div>

   

        <div className="py-7 bg-white flex justify-end relative w-full swiper-container ">

            {/* {
                data?.birthday?.length > 2 &&
                <div className="absolute z-[2]  top-[10rem]  left-2  px-4">
                        <div className=" flex gap-2 w-full justify-between items-center h-full">
                            {
                               !isAtLeftMost &&  
                                <Button size="sm"  onClick={scrollPrev} className="w-4 h-7 rounded-full" variant="flat"> <IoArrowBackCircleSharp color="black" size={20} /> </Button>
                            }
                            
                        </div>
                </div>
            }
            {
                data?.birthday?.length > 2 &&
                <div className="absolute z-[2]   top-[10rem] right-0  px-4 ">
                        <div className=" flex gap-2 w-full justify-between items-center h-full">
                            {
                                !isAtRightMost &&
                                <Button
                                    classNames={{
                                        base: 'bg-red-500'
                                    }}
                                 radius="full" size="sm" onClick={scrollNext} className="w-4 h-7 px-0 rounded-full" variant="flat"> <IoArrowForwardCircleSharp color="black"   size={20}/> </Button>
                            }
                        </div>
                </div>
            } */}


{/* // openDrawer={onOpen}
                      
                      // <UserCard user={brt} key={brt?.STAFF_ID} setCurUser={setCurUser} openDrawer={onOpen}/> */}

            {/* <div className="flex mx-auto   w-full gap-x-6 py-2 overflow-x-auto scrollbar-none relative bg-transparent " ref={containerRef} style={{ scrollBehavior: 'smooth' }}>


                {
                    data?.birthday?.map(brt => (
                      <UserCard2 user={brt} key={brt?.STAFF_ID} setCurUser={setCurrent} 
                      />
                    ))
                }

            </div> */}

            <Swiper
              slidesPerView={'auto'}
              // centeredSlides={true}
              // spaceBetween={40}
              // breakpoints={{
              //   690: {
              //     slidesPerView: 2,
              //     spaceBetween: 70,
              //   },
              //   768: {
              //     slidesPerView: 1,
              //     spaceBetween: 50,
              //   },
              //   1065: {
              //     slidesPerView: 1,
              //     spaceBetween: 50,
              //   },
              //   1090: {
              //     slidesPerView: 2,
              //     spaceBetween: 50,
              //   },
              //   1247: {
              //     slidesPerView: 1,
              //     spaceBetween: 50,
              //   },
              //   1310: {
              //     slidesPerView: 1,
              //     spaceBetween: 50,
              //   },
              //   1380: {
              //     slidesPerView: 1,
              //     spaceBetween: 50,
              //   },
              //   // 1490: {
              //   //   slidesPerView: 1,
              //   //   spaceBetween: 40,
              //   // },
              //   1500: {
              //     slidesPerView: 1,
              //     spaceBetween: 50,
              //   },
              //   1550: {
              //     slidesPerView: 2,
              //     spaceBetween: 90,
              //   },
              // }}
           
              // pagination={{
              //   type: 'fraction',
              // }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              scrollbar={{ draggable: true }}
            
            >
              {
                    data?.birthday?.map(brt => (
                      <SwiperSlide  key={brt?.STAFF_ID} className="py-2">
                        <UserCard2 user={brt}  setCurUser={setCurrent}/>
                      </SwiperSlide>
                      
                    ))
                }
              {/* <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
        </div>

        {/* <WishInputDrawer curUser={curUser} isOpen={isOpen} onOpenChange={onOpenChange} /> */}

        {isDrawerOpen && (
        <BirthdayRoom isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      )}

      {
        <ChatDrawer
          isOpen={showLargeChatContainer}
          onClose={() => setShowLargeChatContainer(false)}
          user={selectedChat}
          setUser={() => setSelectedChat(null)}
        />
      }

    </div>
  )
}

export default HorizontalBirthdayCard
