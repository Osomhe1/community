/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useGetProfile } from '../../API/profile'
import useCurrentUser from '../../hooks/useCurrentUser'
import { Skeleton, Tooltip } from '@nextui-org/react'
import { Edit2Icon, EyeIcon } from 'lucide-react'

export default function BioDataDetail({role}){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [previewRequest, setPreviewRequest] = useState(false)

    const handleEditClick = (e) => {
        e.preventDefault()
        // setIsDrawerOpen(true)
      }
      const handlePreview = () => {
        // setPreviewRequest(true)
      }
    
      const { userData } = useCurrentUser()
      const { data: profile, isLoading } = useGetProfile({ user: userData.data })



    return(
        <>
        <div
          className={`bg-white rounded-md p-4  h-full`}
          // className={`${
          //   profile?.BIODATA?.HAS_PENDING_APPROVAL ? 'bg-[#f0f7ff]' : 'bg-white'
          // }  rounded-md p-4  h-full`}
        >
            
          <div className='flex justify-between items-center gap-4 mb-'>
            <h2 className=' text-[1.5rem] my-auto font-[600] font-helvetica text-[#444e4e] capitalize'>
              Personal Informations
            </h2>
            {!profile?.BIODATA?.HAS_PENDING_APPROVAL ? (
              <div className='flex justify-end '>
                <Tooltip color='default' content='Preview Request' delay={300}>
                  <button
                    className='bg-blue-100 text-yellow-800 p-2 rounded-full'
                    onClick={handlePreview}
                  >
                    <EyeIcon className='text-blue-400' />
                  </button>
                </Tooltip>
              </div>
            ) : (
              <div className='flex justify-end '>
                <Tooltip color='default' content='Edit' delay={300}>
                  <button
                    className='bg-blue-100 p-2 rounded-full'
                    onClick={handleEditClick}
                  >
                    <Edit2Icon className='w-4 h-4 text-blue-400' />
                  </button>
                </Tooltip>
              </div>
            )}
           
          </div>
          <div className='fle justify-betwee border-b items-center gap-4 mb-3 grid grid-cols-3 border-b pb-1 my-3'>
            <h2 className=' text-[1rem] my-auto font-[600] font-helvetica text-[#444e4e] capitalize'>
              {/* Personal Informations */}
            </h2>
            <h2 className=' text-[1rem] my-auto font-[600] font-helvetica text-[#444e4e] capitalize'>
              Previous
            </h2>
            <h2 className=' text-[1rem] my-auto font-[600] font-helvetica text-[#444e4e] capitalize'>
              New Detail
            </h2>
  
           
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
            <ul className=' mt-2 text-[15px] flex flex-col space-y-3'>
              <li className=' grid grid-cols-3 border-b pb-1 my-3 border-b pb-1'>
                <span className='text-[#444e4e] font-helvetica font-[500] text-[0.9rem] capitalize '>
                  {' '}
                  Last Name:
                </span>
                <span className='text-[#888888]  text-en w-full  max-w-sm fontbold font-profileFontSize '>
                  {profile?.BIODATA?.LAST_NAME}
                </span>
                <span className='text-[#888888]  text-en w-full  max-w-sm fontbold font-profileFontSize '>
                  Africa_code
                </span>
              </li>
              <li className='grid grid-cols-3 border-b pb-1 my-3'>
                <span className='text-[#444e4e] font-helvetica font-[500] text-[0.9rem] capitalize '>
                  {' '}
                  First Name:
                </span>
                <span className='text-[#888888]  text-en w-full max-w-sm   font-profileFontSize '>
                   {profile?.BIODATA?.FIRST_NAME}
                </span>
                <span className='text-[#888888]  text-en w-full max-w-sm   font-profileFontSize '>
                   Manager
                </span>
              </li>
              <li className='grid grid-cols-3 border-b pb-1 my-3'>
                <span className='text-[#444e4e] font-helvetica font-[500] text-[0.9rem] capitalize '>
                  Other Names:
                </span>
                <span className='text-[#888888] text-en w-full max-w-sm  font-profileFontSize '>
                  {profile?.BIODATA?.OTHER_NAMES}
                </span>
                <span className='text-[#888888] text-en w-full max-w-sm  font-profileFontSize '>
                  Joe
                </span>
              </li>
              <li className='grid grid-cols-3 border-b pb-1 my-3'>
                <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                  Title:
                </span>
                <span className='text-[#888888] font-helvetica text-en w-full max-w-sm  font-profileFontSize '>
                  {'Mrs'}
                </span>
                <span className='text-[#888888] text-en w-full max-w-sm  font-profileFontSize'>
                 
                </span>
              </li>
              <li className='grid grid-cols-3 border-b pb-1 my-3'>
                <span className='text-[#444e4e] font-helvetica font-[500] text-[0.9rem] capitalize '>
                  {' '}
                  Marital Status:
                </span>
                <span className='text-[#888888]  text-en w-full max-w-sm  font-profileFontSize '>
                   {'Single'}
                </span>
                <span className='text-[#888888] font-Exotic text-en w-full max-w-sm  font-profileFontSize'>
                   {'Married'}
                </span>
              </li>
              
              
              <li className='grid grid-cols-3 border-b pb-1 my-3'>
                <span className='text-[#444e4e font-helvetica] font-[500] text-[0.9rem] capitalize '>
                  Languages:
                </span>
                <span className='text-[#888888]  text-en w-full max-w-sm  font-profileFontSize '>
                  {'English, Afemai, Yoruba'}
                </span>
                <span className='text-[#888888] text-en w-full max-w-sm  font-profileFontSize'>
                  {'English, Afemai, Yoruba, French'}
                </span>
              </li>
            </ul>
          )}
        {
        role !== 'request' &&
        <div className="flex justify-between mt-3">
            <button className="header_btnStyle bg-red-500 rounded text-white font-semibold  mx-2 my-1 md:my-0 px-[13px] py-[7px] uppercase">Reject</button>

            <button className="header_btnStyle bg-[#00bcc2] rounded text-white font-semibold  mx-2 my-1 md:my-0 px-[13px] py-[7px] uppercase">Approve</button>
        </div>
      }
        </div>
  
      </>
    )
}