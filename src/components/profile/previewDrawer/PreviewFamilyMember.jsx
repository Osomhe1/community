/* eslint-disable react/prop-types */
import { Avatar } from '@nextui-org/react'
import ExpandedDrawer from '../../modals/ExpandedDrawer'
// import useCurrentUser from '../../../hooks/useCurrentUser'
// import { useGetProfile } from '../../../API/profile'

export default function PreviewFamilyMember({
  isOpen,
  setIsOpen,
  memberDetails,
}) {
  // const { userData } = useCurrentUser()
  // const { data: profile, isLoading } = useGetProfile({ user: userData.data })
  return (
    <>
      <ExpandedDrawer isOpen={isOpen} onClose={setIsOpen}>
        <div className='bg-[#f5f7fa] min-h-screen  p-10'>
          <h4 className='header_h3 text-2xl text-center'>
            {' '}
            Family Member Details
          </h4>

          {memberDetails ? (
            <div className='bg-white max-w-[35rem] mx-auto mt-16 text-[0.9rem] shadow-md py-4 rounded border'>
              <div className='flex flex-col text-center items-center gap-2'>
                <Avatar
                  src={memberDetails.avatar}
                  alt='User Image'
                  className='h-24 w-24 rounded-full'
                />
                <div>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Name:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.name}
                    </span>
                  </p>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Relationship:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.relationship}
                    </span>
                  </p>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Phone:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.contact?.phone}
                    </span>
                  </p>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Email:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.contact?.email}
                    </span>
                  </p>
                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Address:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.contact?.address}
                    </span>
                  </p>

                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Emergency Contact:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.emergencyContact ? 'Yes' : 'No'}
                    </span>
                  </p>

                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Health Information:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.healthInfo ? 'Yes' : 'No'}
                    </span>
                  </p>

                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Legal Documentation:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.legalDocs}
                    </span>
                  </p>

                  <p>
                    <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                      Financial Dependents:
                    </span>{' '}
                    <span className='text-[#888888] text-end font-profileFontSize'>
                      {memberDetails?.financialDependents ? 'Yes' : 'No'}
                    </span>
                  </p>
                </div>
                {/* Display other member details as needed */}
              </div>
            </div>
          ) : (
            <p>No member details available</p>
          )}
        </div>
      </ExpandedDrawer>
    </>
  )
}
