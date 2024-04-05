import { useState } from 'react'
// import Card from './Card'
import ContactInformationDrawer from './profileDrawer/ContactInformationDrawer'
import useCurrentUser from '../../hooks/useCurrentUser'
import { useGetProfile } from '../../API/profile'
import { Skeleton, Tooltip } from '@nextui-org/react'
import { Edit2Icon, EyeIcon } from 'lucide-react'
import PreviewContactInfoRequest from './previewDrawer/PreviewContactInfoRequest'

export default function ContactInformation() {
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
      <div className={`bg-white rounded-md p-4  h-full `}>
        <div className='flex justify-between border-b items-center gap-4 pb-3'>
          <h2 className=' text-[0.9rem] font-[500] uppercase text-[#444e4e]'>
            Contact Information
          </h2>

          {!profile?.CONTACT_INFORMATION?.HAS_PENDING_APPROVAL ? (
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
          <ul className=' text-[15px]  mt-2 flex flex-col space-y-3'>
            <li className='grid grid-cols-2'>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                {' '}
                Official Email:
              </span>
              <span className='text-[#888] h-auto hyphens-auto text-end text-[0.9rem] break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize '>
                {profile?.CONTACT_INFORMATION?.EMAIL}
              </span>
            </li>
            <li className='grid grid-cols-2 '>
              <span className='text-[#444e4e]  font-[500] text-[0.9rem] capitalize '>
                {' '}
                Alternative Email:
              </span>
              <span className='text-[#888] h-auto hyphens-auto text-[0.9rem] break-words text-end pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.CONTACT_INFORMATION?.OTHER_EMAIL}
                {`osomhe.bejide@gamil.com`}
              </span>
            </li>
            <li className='grid grid-cols-2 '>
              <span className='text-[#444e4e]  font-[500] text-[0.9rem] capitalize '>
                Primary Phone:
              </span>
              <span className='text-[#888] h-auto break-words text-end text-[0.9rem] pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.CONTACT_INFORMATION?.PHONE}
              </span>
            </li>
            <li className='grid grid-cols-2 '>
              <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
                {' '}
                Alternative Phone:
              </span>
              <span className='text-[#888] h-auto break-words text-end text-[0.9rem] pb-2 border-b-2 w-full max-w-sm  font-profileFontSize '>
                {profile?.CONTACT_INFORMATION?.OTHER_PHONES} {`07051287311`}
              </span>
            </li>
          </ul>
        )}
      </div>

      {isDrawerOpen && (
        <ContactInformationDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      )}
      {previewRequest && (
        <PreviewContactInfoRequest
          isOpen={previewRequest}
          setIsOpen={setPreviewRequest}
        />
      )}
    </>
  )
}
