/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Card } from '@nextui-org/card'
import { Edit2Icon, EyeIcon, PlusIcon } from 'lucide-react'
import { getProfile, useGetProfile } from '../../API/profile'
import useCurrentUser from '../../hooks/useCurrentUser'
import { Avatar, Button, Tooltip } from '@nextui-org/react'
import PreviewNextOfKinInfoRequest from './previewDrawer/PreviewNextOfKinInfoRequest'
import FamilyInformationDrawer from './profileDrawer/FamilyInformationDrawer'
// import profileImage from '.../../../../assets/images/osomhe-AI.png'
import NextOfKin from './NextOfKin'
import PreviewFamilyMember from './previewDrawer/PreviewFamilyMember'

export default function FamilyCard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleEditClick = () => {
    setIsDrawerOpen(true)
  }
  const [selectedMemberId, setSelectedMemberId] = useState(null)

  const [previewRequest, setPreviewRequest] = useState(false)
  const [previewFamily, setPreviewFamily] = useState(false)
  const handlePreview = () => {
    setPreviewRequest(true)
  }
  const { userData } = useCurrentUser()
  // const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  const members = [
    {
      id: 1,
      name: 'Osomhe John',
      relationship: 'Father',
      avatar: `https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=`,
      contact: {
        phone: '123-456-7890',
        email: 'john@gmail.com',
        address: '123 Main St, Lagos, Nigeria',
      },
      emergencyContact: true,
      healthInfo: true,
      legalDocs: 'Will, Insurance Policy',
      financialDependents: true,
    },
    {
      id: 2,
      name: 'Kemisola John',
      relationship: 'Mother',
      avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD1jUst8DanaXIsdln0NgG6bEGLjqXS8Yl_LR7bi9FA&s`,
      contact: {
        phone: '987-654-3210',
        email: 'jane@gmail.com',
        address: '456 Elm St, Lagos, Nigeria',
      },
      emergencyContact: true,
      healthInfo: true,
      legalDocs: 'Will, Insurance Policy',
      financialDependents: true,
    },
    {
      id: 3,
      name: 'Ayo John',
      relationship: 'Daughter',
      avatar:
        'https://media.istockphoto.com/id/1055496902/photo/african-girl.jpg?s=612x612&w=0&k=20&c=k9nXhhLjiYIKipjB8AI4PUm9zUgCdrQ3KDWTbX99eWc=',
      contact: {
        phone: '987-654-3210',
        email: 'jane@gmail.com',
        address: '456 Elm St, Lagos, Nigeria',
      },
      emergencyContact: true,
      healthInfo: true,
      legalDocs: 'Will, Insurance Policy',
      financialDependents: true,
    },
    // Add more members as needed
  ]
  const [familyInfo, setFamilyInfo] = useState([])
  const handleCardClick = (memberId) => {
    setSelectedMemberId(memberId)
    setPreviewFamily(true) // Update to open the PreviewFamilyMember drawer
  }
  const familyDetails = async () => {
    try {
      const res = await getProfile(userData.data)
      const { FAMILY } = res

      const familyArray = Object.entries(FAMILY).map(([key, value]) => ({
        id: key,
        ...value,
      }))

      setFamilyInfo([
        ...familyArray.filter(
          (f) =>
            f?.id !== 'PACKAGE_ID' &&
            f?.id !== 'HAS_PENDING_APPROVAL' &&
            f?.id !== 'PENDING_REQUEST_ID'
        ),
      ])
      return familyArray
    } catch (error) {
      console.error('Error fetching bio details:', error)
      throw error
    }
  }

  console.log(familyInfo, 'fmilyinfo')

  useEffect(() => {
    familyDetails()
  }, [])
  return (
    <>
      <div className=''>
        <div className='flex flex-col gap-4'>
          <div className='flex  justify-end my-2 gap-3 items-center'>
            <div className='flex bg-btnColor px-4 gap-2 items-center '>
              <button
                className='bg-btnColor  uppercase py-2 header_h3 outline-none  text-white rounded hover:bg-btnColor/70'
                onClick={handleEditClick}
              >
                Add
              </button>
              <PlusIcon className='bg-white rounded-full text-btnColor ' />
            </div>
          </div>
        </div>
        {/* {familyInfo?.length === 0 ? (
          <div className='bg-white w-80 py-6 h-full flex flex-col font-applesystem fontOswald text-[500] items-center gap-4 my-4'>
            <div className='profile-img-wrap py-4 md:py-0'>
              <Avatar
                src=''
                alt='User Image'
                // className='h-28 w-28 rounded-full'
                className='h-36 w-36 rounded-full'
              />
            </div>

            <div className='profile-info-left mb-4 font-semibold '>
              No family member
            </div>
          </div>
        ) : (
          familyInfo?.map((family, index) => (
            <Card
              key={index}
              className=' md:max-h-[24rem] shadow-none max-w-[20rem] p-4 rounded-md'
            >
              <div className='flex justify-between items-center gap-4 border-b pb-3s'>
                <h2 className=' text-[1rem]  font-[600] text-[#444e4e] uppercase'>
                  Family
                </h2>
                {family?.HAS_PENDING_APPROVAL ? (
                  <div className='flex justify-end '>
                    <Tooltip
                      color='default'
                      content='Preview Request'
                      delay={300}
                    >
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

              <div className='flex flex-col font-applesystem fontOswald text-[500] items-center gap-4 my-4'>
                <div className='profile-img-wrap py-4 md:py-0'>
                  <Avatar
                    src={
                      family?.NEXT_OF_KIN?.FILE_NAME
                        ? family?.NEXT_OF_KIN.FILE_NAME
                        : ''
                    }
                    alt='User Image'
                    // className='h-28 w-28 rounded-full'
                    className='h-36 w-36 rounded-full'
                  />
                </div>

                <div className='profile-info-left mb-4 '>
                  <h3 className='text-[24px] text-[#333333] font-semibold '>
                    {family?.NEXT_OF_KIN?.LAST_NAME} {''}
                    {family?.NEXT_OF_KIN?.FIRST_NAME}
                  </h3>
                  <h6 className='text-muted font-bold text-[12px]'>
                    {family?.NEXT_OF_KIN?.DIRECTORATE}
                  </h6>
                  <small className='text-muted font-bold text-[12px]'>
                    {family?.NEXT_OF_KIN?.DEPARTMENT}
                  </small>
                  <div className='staff-id text-black font-semibold text-[14px] mt-2'>
                    Employee ID : FT-{family?.NEXT_OF_KIN?.STAFF_NUMBER}
                  </div>
                </div>
              </div>
            </Card>
          ))
        )} */}

        <div className=' grid md:grid-cols-4 gap-4 mt-4 h-full'>
          <NextOfKin />
          {members.map((member, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(member)}
              className=''
            >
              <Card className=' cursor-pointer shadow-none p-4 rounded-md'>
                <div className='flex justify-between items-center gap-4 border-b pb-3s'>
                  <h2 className=' text-[1rem]  font-[500] uppercase text-[#444e4e]'>
                    Family
                  </h2>
                </div>
                <div className='flex flex-col text-[500] items-center gap-4 my-4'>
                  <div className='py-4 md:py-0'>
                    <Avatar
                      src={member?.avatar}
                      alt='User Image'
                      className='h-24 w-24 rounded-full'
                      // className='h-36 w-36 rounded-full'
                    />
                  </div>

                  <div className=' py-4'>
                    <div className='mb-4'>
                      <p>
                        <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                          Name:
                        </span>{' '}
                        {/* <span className=' uppercase text-[0.825rem] leading[1.5] tracking[2px]'> */}
                        <span className='  text-[#888888] text-end font-profileFontSize'>
                          {member?.name}
                        </span>
                      </p>
                      <p>
                        <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize'>
                          Relationship:
                        </span>{' '}
                        {/* <span className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px]'> */}
                        <span className='text-[#888888] text-end font-profileFontSize'>
                          {member?.relationship}
                        </span>
                      </p>
                    </div>
                    {/* <div className='mb-4'>
                    <p>
                      <span className='font-bold'>Contact Information:</span>
                    </p>
                    <p>Phone: {member?.contact.phone}</p>
                    <p>Email: {member?.contact.email}</p>
                    <p>Address: {member?.contact.address}</p>
                  </div> */}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {previewFamily && (
        <PreviewFamilyMember
          isOpen={previewFamily}
          setIsOpen={setPreviewFamily}
          // memberId={selectedMemberId}
          memberDetails={selectedMemberId}
        />
      )}
      {isDrawerOpen && (
        <FamilyInformationDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
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
