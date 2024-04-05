/* eslint-disable react/prop-types */
import { Card, Skeleton } from '@nextui-org/react'
import ExpandedDrawer from '../../modals/ExpandedDrawer'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { useGetProfile } from '../../../API/profile'

export default function PreviewPersonalInfoRequest({ isOpen, setIsOpen }) {
  const { userData } = useCurrentUser()
  const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  return (
    <>
      <ExpandedDrawer isOpen={isOpen} onClose={setIsOpen}>
        <div className='flex hfull gap-2 flex-col md:flex-row overflow-y-scrol'>
          <div className='flex min-h-screen flex-col  w-full md:w-60 bg-chatsidebar    '>
            <h3 className=' text-center text-gray-400 border-gray-400 border-b-2 p-2'>
              Personal Information
            </h3>
          </div>
          {isLoading ? (
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
          ) : (
            <div className=' wfull w-[60%] mx-auto grid p-4  gap-8'>
              <Card className='bg-white w-full fontOswald rounded-md shadow-md p-4  hfull '>
                <ul className='font-Lato text-[15px] flex flex-col space-y-3'>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Last Name:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm font-profileFontSize '>
                      {profile?.BIODATA?.LAST_NAME}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      First Name:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm   font-profileFontSize '>
                      {profile?.BIODATA?.FIRST_NAME}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Other Names:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.OTHER_NAMES}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Title:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.TITLE}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Marital Status:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.MARITAL_STATUS}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Date of Birth:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {/* { profile?.BIODATA?.} */}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Nationality:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.NATIONALITY}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      State of Origin:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.STATE_OF_ORIGIN}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      LGA:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.LGA}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Languages:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {/* { profile?.BIODATA?.} */}
                    </span>
                  </li>
                </ul>
              </Card>
              <Card className='bg-white w-full  fontOswald rounded-md shadow-md p-4  hfull '>
                <ul className='font-Lato fontOswald text-[15px] flex flex-col space-y-3'>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Last Name:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm font-profileFontSize '>
                      {profile?.BIODATA?.LAST_NAME}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      First Name:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm   font-profileFontSize '>
                      {profile?.BIODATA?.FIRST_NAME}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Other Names:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.OTHER_NAMES}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Title:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.TITLE}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      {' '}
                      Marital Status:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.MARITAL_STATUS}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Date of Birth:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {/* { profile?.BIODATA?.} */}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Nationality:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.NATIONALITY}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      State of Origin:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.STATE_OF_ORIGIN}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      LGA:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {profile?.BIODATA?.LGA}
                    </span>
                  </li>
                  <li className='grid grid-cols-2'>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] uppercase '>
                      Languages:
                    </span>
                    <span className='text-[#888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                      {/* { profile?.BIODATA?.} */}
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          )}
        </div>
      </ExpandedDrawer>
    </>
  )
}
