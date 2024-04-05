// import { PlusCircleIcon } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import FormRequestDrawer from '../../../components/formRequest/FormRequestDrawer'

// import QuickAction from "./components/QuickAction";
// import QuickLink from "./components/QuickLink";
// import QuickLink from '../../../components/profile/QuickLink'
import ShopMore from './components/ShopMore'
// import EventUI from "./components/EventUI";
import { Avatar, Button, Tooltip } from '@nextui-org/react'
import QuickLink2 from './components/QuickLink2'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getUpcomingBirthdaysAction } from '../../../API/post'
import useCurrentUser from '../../../hooks/useCurrentUser'
import ChatDrawer from '../rightMenu/components/ChatDrawer'
import { SocketContext } from '../../../context/SocketContext'
import BirthdayRoom from '../Engage/BirthdayRoom/BirthdayRoom'

const RightBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { userData } = useCurrentUser()
  const [allUpcoming, setAllUpcoming] = useState([])
  const [showLargeChatContainer, setShowLargeChatContainer] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { setCurrentPickedChat } = useContext(SocketContext)

  const navigate = useNavigate()

  const openQuickLink = (tab) => {
    console.log(tab)

    // switch (tab) {
    //   case "forms":
    //     setIsOpen(true);
    //     break;

    //   default:
    //     break;
    // }
  }

  const moveToCourse = () => {
    navigate('/marketplace/courses')
  }
  const moveToEvent = () => {
    // navigate("/engage/events"); old
    // open modal  // new
    setIsDrawerOpen(true)
  }

  useEffect(() => {
    const upcoming = async () => {
      try {
        const res = await getUpcomingBirthdaysAction(userData?.data)
        if (res) {
          // console.log(res)
          setAllUpcoming(res?.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    upcoming()
  }, [userData])

  const selectAChat = (user) => {
    setShowLargeChatContainer(true)
    setSelectedChat(user)
  }

  const setCurrent = (data) => {
    selectAChat(data)
    setCurrentPickedChat(data)
  }

  const filePrefix = 'http://lamp3.ncaa.gov.ng/pub/'
  return (
    <>
      <div className='space-y-5  mb-6'>
        {/* <QuickAction clickedTab={openQuickLink} /> */}

        {/* <QuickLink clickedTab={openQuickLink} /> */}
        <QuickLink2 clickedTab={openQuickLink} />

        <div className='shadow rounded-lg max-w-[600px]'>
          <div className='relative bg-white rounded-lg w-full'>
            <div className='rounded-lg  w-full flex flex-col gap-y-3'>
              <img
                src='/assets/images/training.jpeg'
                alt='adsimg'
                className='inset-0 rounded-t-lg h-[15rem] w-full object-cover z-2 align-middle'
              />
              <div className='flex flex-col gap-y-2 px-4 pb-5'>
                <span className='text-gray-700 font-extrabold text-lg'>
                  100 Days of Code: The Complete ICT Pro Bootcamp
                </span>

                <span className='text-slate-500 text-sm'>
                  Department of Fintech
                </span>

                <div className='text-gray-600 font-extrabold text-sm mb-3'>
                  Skills you will gain: Project Mangament, Change Management,
                  Strategic Thinking.
                </div>

                <div className='flex gap-x-2 flex-wrap'>
                  <div className='flex items-center gap-x-1'>
                    <div className='w-1 h-1 bg-slate-600 rounded-full '></div>{' '}
                    <span className='text-xs '>Beginner</span>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <div className='w-1 h-1 bg-slate-600 rounded-full text-xs'></div>{' '}
                    <span className='text-xs'>Professional certificate</span>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <div className='w-1 h-1 bg-slate-600 rounded-full text-xs'></div>{' '}
                    <span className='text-xs'>6 months</span>
                  </div>
                </div>

                <div className='flex justify-between items-end mt-2'>
                  <span className='text-gray-800 font-extrabold text-lg tracking-wider'>
                    ₦34,900
                  </span>

                  <div className='flex gap-3'>
                    <Button onClick={moveToCourse} size='sm' color='default'>
                      View More
                    </Button>
                    {/* <button onClick={moveToCourse} className="border bg-white border-gray-400 px-2 py-1  rounded-full text-[0.9rem] hover:shadow active:border-gray-50 active:border-3 flex items-center gap-2 justify-center">
                      <span> View More</span>
                    </button> */}

                    <Button size='sm' color='secondary'>
                      Get Course
                    </Button>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col py-2 bg-green-950/50 rounded-b-lg">
                <div className="flex items-center justify-center">
                  <button
                    onClick={moveToCourse}
                    className="border bg-white border-gray-400 px-10 py-1  mx-10 rounded-full text-[0.9rem] hover:shadow active:border-gray-50 active:border-3 flex items-center gap-2 justify-center"
                  >
                    <span> View More</span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* ads */}
        {/* <div className="relative z-1">
          <div className="rounded h-[26rem] w-full">
            <img
              src="/assets/images/profiles/avatar-17.jpg"
              alt="adsimg"
              className="absolute inset-0 h-full w-full object-cover z-2 align-middle rounded"
            />
            <div className="z-4  absolute text-white top-0 left-0 right-0 p-6 text-sm">
              <div className="flex justify-around mt-8 font-bold items-center">
                <div className="center-profile">
                  <img
                    src="/assets/images/profiles/avatar-08.jpg"
                    className="rounded-full z-1 absolute w-full h-full"
                    alt=""
                  />
                </div>
                <div className="lightbtn rounded-md h-10 px-2  flex items-center justify-center">
                  <span>More Ads Loding...</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="space-y-5 overflow-clip mb-6">
        <div className="z-1 sticky top-24">
          <div className="rounded h-[26rem] w-full">
            <img
              src="/assets/images/profiles/avatar-17.jpg"
              alt="adsimg"
              className="absolute inset-0 h-full w-full object-cover z-2 align-middle rounded"
            />
            <div className="z-4  absolute text-white top-0 left-0 right-0 p-6 text-sm">
              <div className="flex justify-around mt-8 font-bold items-center">
                <div className="center-profile">
                  <img
                    src="/assets/images/profiles/avatar-08.jpg"
                    className="rounded-full z-1 absolute w-full h-full"
                    alt=""
                  />
                </div>
                <div className="lightbtn rounded-md h-10 px-2  flex items-center justify-center">
                  <span>More Ads Loding...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> */}
        <div className='z-1 relative shadow-sm rounded-md'>
          <div className='rounded-md w-full'>
            <ShopMore />
          </div>
        </div>
      </div>

      <div className='space-y-5 sticky top-24'>
        {/* <div className="z-1 relative shadow-sm">
          <div className="rounded w-full">
            <ShopMore />
          </div>
        </div> */}

        <div className='z-1 relative'>
          <div className='rounded-md h-[10rem] w-full shadow-sm bg-white py-3 px-4'>
            <div className='flex flex-col '>
              <div className='flex flex-col pb-4'>
                <span className=' text-[1.15rem] text-gray-600 font-Roboto  font-semibold'>
                  Upcoming Celebrations
                </span>
                <span className=' text-sm font-normal   text-gray-900'>
                  Birthdays, anniversary, etc
                </span>
              </div>

              <div className='flex gap-3'>
                {allUpcoming?.slice(0, 3)?.map((upc) => (
                  // <Avatar key={upc?.STAFF_ID} className="w-[4.4rem] h-[4.4rem]" color="default" />

                  <div key={upc?.STAFF_ID} onClick={() => setCurrent(upc)}>
                    <Tooltip
                      showArrow={true}
                      placement='bottom'
                      content={upc?.LAST_NAME + ' ' + upc?.FIRST_NAME}
                    >
                      {upc?.FILE_NAME ? (
                        // upc?.FILE_NAME?.includes("http") ? (
                        <Avatar
                          className='w-[4.4rem] h-[4.4rem] cursor-pointer'
                          src={filePrefix + upc?.FILE_NAME}
                          title={upc?.LAST_NAME + ' ' + upc?.FIRST_NAME}
                        />
                      ) : (
                        <Avatar
                          className='w-[4.4rem] h-[4.4rem] cursor-pointer text-xl'
                          name={
                            upc?.LAST_NAME?.trim()[0] +
                            '  ' +
                            upc?.FIRST_NAME?.trim()[0]
                          }
                          color='default'
                          isBordered
                          title={upc?.LAST_NAME + ' ' + upc?.FIRST_NAME}
                        />
                      )}
                    </Tooltip>
                  </div>
                ))}

                {/* <Avatar className="w-[4.4rem] h-[4.4rem]" color="default" />
                <Avatar className="w-[4.4rem] h-[4.4rem]" color="default" /> */}

                <Avatar
                  className='w-[4.4rem] h-[4.4rem] cursor-pointer'
                  onClick={moveToEvent}
                  fallback={<Plus size={20} strokeWidth={3} />}
                  classNames={{
                    base: 'bg-white border-2 border-gray-400/90',
                  }}
                />
              </div>
            </div>
          </div>
        </div>


        {/* <div className='z-1 relative'>
          <div className='rounded-md h-[26rem] w-full shadow-sm bg-white py-3 px-3'>
            <div className='flex flex-col bg-white '>
              <div className='flex flex-col pb-4'>
                <span className=' text-[1.15rem] text-gray-600 font-Roboto font-semibold'>
                  Notification
                </span>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='flex flex-col  border-1 px-3 py-1 shadow-sm bg-blue-50 rounded'>
                  <div className='text-lg font-Roboto'>Approval</div>
                  <div className='font-medium font-Lato'>
                    Your certification has been approved
                  </div>
                </div>
                <div className='flex flex-col  border-1 px-3 py-1 shadow-sm bg-yellow-50 rounded'>
                  <div className='text-lg font-Roboto'>Request</div>
                  <div className='font-medium font-Lato'>
                    You have a new pending request
                  </div>
                </div>
                <div className='flex flex-col  border-1 px-3 py-1 shadow-sm bg-green-50 rounded'>
                  <div className='text-lg font-Roboto'>Message</div>
                  <div className=' font-medium font-Lato'>
                    You have a new pending message
                  </div>
                </div>
                <div className='flex flex-col  border-1 px-3 py-1 shadow-sm bg--50 rounded'>
                  <div className='text-lg font-Roboto'>Breaking news</div>
                  <div className=' font-medium font-Lato'>
                    Tinubu increases salary of all civil servants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="z-1 relative">
          <div className="rounded h-[26rem] w-full shadow-sm">
            <EventUI />
          </div>
        </div> */}
      <QuickLink2 clickedTab={openQuickLink} />
      </div>


      <FormRequestDrawer
        title='Drawer Title'
        description='Drawer Description'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {/* Your content for the drawer */}
      </FormRequestDrawer>

      {
        <ChatDrawer
          isOpen={showLargeChatContainer}
          onClose={() => setShowLargeChatContainer(false)}
          user={selectedChat}
          setUser={() => setSelectedChat(null)}
        />
      }

      {isDrawerOpen && (
        <BirthdayRoom isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      )}
    </>
  )
}

export default RightBar
