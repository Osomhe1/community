import { useState } from 'react'
import NextOfKinDrawer from './profileDrawer/NextOfKinDrawer'
import { Card } from '@nextui-org/card'
import { Edit2Icon, EyeIcon } from 'lucide-react'
import { useGetProfile } from '../../API/profile'
import useCurrentUser from '../../hooks/useCurrentUser'
import { Avatar, Skeleton, Tooltip } from '@nextui-org/react'
import PreviewNextOfKinInfoRequest from './previewDrawer/PreviewNextOfKinInfoRequest'
// import profileImage from '.../../../../assets/images/osomhe-AI.png'

export default function NextOfKin() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleEditClick = () => {
    setIsDrawerOpen(true)
  }
  const [previewRequest, setPreviewRequest] = useState(false)
  const handlePreview = () => {
    setPreviewRequest(true)
  }

  const { userData } = useCurrentUser()

  const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  return (
    <>
      <Card className=' md:max-h[24rem] h-full shadow-none max-w[20rem] p-4 rounded-md '>
        <div className='flex justify-between items-center gap-4 border-b'>
          <h2 className=' text-[1rem]  font-[500] text-[#444e4e] uppercase'>
            Next Of Kin
          </h2>
          {profile?.NEXT_OF_KIN?.HAS_PENDING_APPROVAL ? (
            <div className='flex justify-end '>
              <Tooltip color='default' content='Preview Request' delay={300}>
                <button
                  className='bg-gray-100 text-yellow-800 p-2 rounded-full'
                  onClick={handlePreview}
                >
                  <EyeIcon />
                </button>
              </Tooltip>
            </div>
          ) : (
            <div className='flex justify-end '>
              <Tooltip color='default' content='Edit' delay={300}>
                <button
                  className='bg-gray-100 p-2 rounded-full'
                  onClick={handleEditClick}
                >
                  <Edit2Icon className='w-4 h-4' />
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
            </div>
          </div>
        ) : (
          <Card className=' mdmax-h-[24rem] shadow-none max-w[20rem] p-4 rounded-md'>
            <div className='flex flex-col text-[500] items-center gap-4 '>
              <div className='profile-img-wrap py-4 md:py-0'>
                <Avatar
                  // src={profileImage}
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGShZ8973iQhNCphgqoxXkjDH03ABQhW6fn_UztnmIA&s`}
                  alt='User Image'
                  className='h-24 w-24 rounded-full'
                  // className='h-36 w-36 rounded-full'
                />
              </div>

              <div className='py-4'>
                <div className='mb-4'>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Name:
                    </span>{' '}
                    {/* <span className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px]'> */}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {`John Beji`}
                    </span>
                  </p>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Relationship:
                    </span>{' '}
                    {/* <span className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px]'> */}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {'Brother'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
          // <div className='flex flex-col text-[500] h-full items-center gap-4 my-4'>
          //   <div className='profile-img-wrap py-4 md:py-0'>
          //     <Avatar
          //       src={
          //         profile?.NEXT_OF_KIN?.FILE_NAME
          //           ? profile?.NEXT_OF_KIN.FILE_NAME
          //           : profileImage
          //       }
          //       alt='User Image'
          //       className='h-28 w-28 rounded-full'
          //       // className='h-36 w-36 rounded-full'
          //     />
          //   </div>

          //   <div className=' px-6 mb-4 '>
          //     <p className=''>
          //       <span className='font-[500]'>Name:</span>
          //       <span className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px]'>
          //         {' '}
          //         {`John Beji`}
          //       </span>{' '}
          //     </p>
          //     <p>
          //       <span className='font-[500]'>Relationship:</span>{' '}
          //       <span className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px]'>
          //         {'Brother'}
          //       </span>
          //     </p>
          //     <h3 className='text-[20px] text-[#333333] font-semibold '>
          //       {profile?.NEXT_OF_KIN?.LAST_NAME} {''}
          //       {profile?.NEXT_OF_KIN?.FIRST_NAME} {`John Beji`}
          //     </h3>
          //     <h6 className='text-muted font-bold text-[12px]'>
          //       {profile?.NEXT_OF_KIN?.DIRECTORATE} {`Software Developer`}
          //     </h6>
          //     <small className='text-muted font-bold text-[12px]'>
          //       {profile?.NEXT_OF_KIN?.DEPARTMENT} {'Brother'}
          //     </small>
          //     <div className='staff-id text-black font-semibold text-[14px] mt-2'>
          //       Employee ID : FT-{profile?.NEXT_OF_KIN?.STAFF_NUMBER}{' '}
          //       {`NCAA355`}
          //     </div>
          //   </div>
          // </div>
        )}
      </Card>
      {isDrawerOpen && (
        <NextOfKinDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      )}
      {previewRequest && (
        <PreviewNextOfKinInfoRequest
          isOpen={previewRequest}
          setIsOpen={setPreviewRequest}
        />
      )}
    </>
  )
}
