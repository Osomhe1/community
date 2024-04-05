import { useState } from 'react'
import ResidentailInformationDrawer from './profileDrawer/ResidentailInformationDrawer'
import useCurrentUser from '../../hooks/useCurrentUser'
import { useGetProfile } from '../../API/profile'
import { Skeleton, Tooltip } from '@nextui-org/react'
import PreviewResindetialInfoRequest from './previewDrawer/PreviewResindetialInfoRequest'
import { Edit2Icon, EyeIcon } from 'lucide-react'

export default function ResedentialAddress() {
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
      <div className={`bg-white rounded-md p-4  h-full `}>
        <div className='flex justify-between border-b items-center gap-4 pb-3'>
          <h2 className=' text-[1rem]  font-[500] text-[#444e4e] uppercase'>
            Residential Address
          </h2>

          {profile?.RESIDENTIAL_INFORMATION?.HAS_PENDING_APPROVAL ? (
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
            </div>
          </div>
        ) : (
          <ul className=' mt-2 text-[0.9rem] flex flex-col space-y-3'>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                {' '}
                Address:
              </span>
              <span className='text-[#888888] h-auto break-words text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.RESIDENTIAL_INFORMATION?.HOME_ADDRESS}{' '}
                {`16a, Dele Adedeji Street, Lekki phase1`}
              </span>
            </li>

            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                State:
              </span>
              <span className='text-[#888888] h-auto break-words text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.RESIDENTIAL_INFORMATION?.HOME_STATE} {`Lagos`}
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                LGA:
              </span>
              <span className='text-[#888888] h-auto break-words text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.RESIDENTIAL_INFORMATION?.HOME_LGA} {`Eti-Osa`}
              </span>
            </li>
          </ul>
        )}
      </div>
      {isDrawerOpen && (
        <ResidentailInformationDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      )}
      {previewRequest && (
        <PreviewResindetialInfoRequest
          isOpen={previewRequest}
          setIsOpen={setPreviewRequest}
        />
      )}
    </>
  )
}
