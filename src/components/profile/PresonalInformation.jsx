import { useState } from 'react'
import PersonalInformationDrawer from './profileDrawer/ProfileInformationDrawer'
import { useGetProfile } from '../../API/profile'
import useCurrentUser from '../../hooks/useCurrentUser'
import { Edit2Icon, EyeIcon } from 'lucide-react'
import { Skeleton, Tooltip } from '@nextui-org/react'
import PreviewPersonalInfoRequest from './previewDrawer/PreviewPersonalInfoRequest'

export default function PresonalInformation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [previewRequest, setPreviewRequest] = useState(false)
  const handleEditClick = () => {
    setIsDrawerOpen(true)
  }
  const handlePreview = () => {
    setPreviewRequest(true)
  }

  const { userData } = useCurrentUser()
  const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  return (
    <>
      <div
        className={`bg-white rounded-md p-4  h-full`}
        // className={`${
        //   profile?.BIODATA?.HAS_PENDING_APPROVAL ? 'bg-[#f0f7ff]' : 'bg-white'
        // }  rounded-md p-4  h-full`}
      >
        <div className='flex justify-between border-b items-center gap-4 pb-3'>
          <h2 className=' text-[0.9rem]  font-[500] uppercase text-[#444e4e]'>
            Personal Information
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
          <ul className=' mt-2 text-[0.9rem] flex flex-col space-y-3'>
            <li className=' grid grid-cols-2  '>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                {' '}
                Last Name:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full  max-w-sm fontbold font-profileFontSize '>
                {profile?.BIODATA?.LAST_NAME}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                {' '}
                First Name:
              </span>
              <span className='text-[#888888] text-[0.9rem] text-end pb-2 border-b-2 w-full max-w-sm   font-profileFontSize '>
                {profile?.BIODATA?.FIRST_NAME}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                Other Names:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.BIODATA?.OTHER_NAMES}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                Title:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.BIODATA?.TITLE} {'Mrs'}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                {' '}
                Marital Status:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.BIODATA?.MARITAL_STATUS} {'Married'}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                Date of Birth:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {/* {profile?.BIODATA?.} */} {'12/05/1986'}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                Nationality:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.BIODATA?.NATIONALITY} {'Nigerian'}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                State of Origin:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.BIODATA?.STATE_OF_ORIGIN} {'Edo'}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                LGA:
              </span>
              <span className='text-[#888888] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.BIODATA?.LGA} {'Estako Central'}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                Languages:
              </span>
              <span className='text-[#888888] text-[0.9rem] text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {/* {profile?.BIODATA?.} */} {'English, Afemai, Yoruba'}
              </span>
            </li>
          </ul>
        )}
      </div>

      {isDrawerOpen && (
        <PersonalInformationDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      )}
      {previewRequest && (
        <PreviewPersonalInfoRequest
          isOpen={previewRequest}
          setIsOpen={setPreviewRequest}
        />
      )}
    </>
  )
}
