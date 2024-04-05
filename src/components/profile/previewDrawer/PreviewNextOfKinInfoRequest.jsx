/* eslint-disable react/prop-types */
import { Avatar, Card, Skeleton } from '@nextui-org/react'
import ExpandedDrawer from '../../modals/ExpandedDrawer'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { useGetProfile } from '../../../API/profile'

export default function PreviewNextOfKinInfoRequest({ isOpen, setIsOpen }) {
  const { userData } = useCurrentUser()
  const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  return (
    <>
      <ExpandedDrawer isOpen={isOpen} onClose={setIsOpen}>
        <div className='flex hfull gap-2 flex-col md:flex-row overflow-y-scrol'>
          <div className='flex min-h-screen flex-col  w-full md:w-60 bg-chatsidebar    '>
            <h3 className=' text-center text-gray-400 border-gray-400 border-b-2 p-2'>
              NextOfKin Request
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
                <div className='flex flex-col font-applesystem fontOswald text-[500] items-center gap-4 my-4'>
                  <div className='profile-img-wrap py-4 md:py-0'>
                    <Avatar
                      src={
                        profile?.NEXT_OF_KIN?.FILE_NAME
                          ? profile?.NEXT_OF_KIN.FILE_NAME
                          : ''
                      }
                      alt='User Image'
                      // className='h-28 w-28 rounded-full'
                      className='h-36 w-36 rounded-full'
                    />
                  </div>

                  <div className='profile-info-left mb-4 '>
                    <h3 className='text-[24px] text-[#333333] font-semibold '>
                      {profile?.NEXT_OF_KIN?.LAST_NAME} {''}
                      {profile?.NEXT_OF_KIN?.FIRST_NAME}
                    </h3>
                    <h6 className='text-muted font-bold text-[12px]'>
                      {profile?.NEXT_OF_KIN?.DIRECTORATE}
                    </h6>
                    <small className='text-muted font-bold text-[12px]'>
                      {profile?.NEXT_OF_KIN?.DEPARTMENT}
                    </small>
                    <div className='staff-id text-black font-semibold text-[14px] mt-2'>
                      Employee ID : FT-{profile?.NEXT_OF_KIN?.STAFF_NUMBER}
                    </div>
                  </div>
                </div>
              </Card>
              <Card className='bg-white w-full  fontOswald rounded-md shadow-md p-4  hfull '>
                <div className='flex flex-col font-applesystem fontOswald text-[500] items-center gap-4 my-4'>
                  <div className='profile-img-wrap py-4 md:py-0'>
                    <Avatar
                      src={
                        profile?.NEXT_OF_KIN?.FILE_NAME
                          ? profile?.NEXT_OF_KIN.FILE_NAME
                          : ''
                      }
                      alt='User Image'
                      // className='h-28 w-28 rounded-full'
                      className='h-36 w-36 rounded-full'
                    />
                  </div>

                  <div className='profile-info-left mb-4 '>
                    <h3 className='text-[24px] text-[#333333] font-semibold '>
                      {profile?.NEXT_OF_KIN?.LAST_NAME} {''}
                      {profile?.NEXT_OF_KIN?.FIRST_NAME}
                    </h3>
                    <h6 className='text-muted font-bold text-[12px]'>
                      {profile?.NEXT_OF_KIN?.DIRECTORATE}
                    </h6>
                    <small className='text-muted font-bold text-[12px]'>
                      {profile?.NEXT_OF_KIN?.DEPARTMENT}
                    </small>
                    <div className='staff-id text-black font-semibold text-[14px] mt-2'>
                      Employee ID : FT-{profile?.NEXT_OF_KIN?.STAFF_NUMBER}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </ExpandedDrawer>
    </>
  )
}
