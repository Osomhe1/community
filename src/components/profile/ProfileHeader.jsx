/* eslint-disable react/jsx-key */
import { Tabs, Tab, Button, Avatar, Skeleton } from '@nextui-org/react'
import PresonalInformation from './PresonalInformation'
import Official from './Official'
import QuickLink from './QuickLink'
import { useState } from 'react'
import FormRequestDrawer from '../formRequest/FormRequestDrawer'
import AcedemicTab from './profileDrawer/tabs/AcedemicTab'
import ProfessionalTabs from './profileDrawer/tabs/ProfessionalTabs'
import FamilyComponent from './FamilyComponent'
import TimeLine from '../self_services/timeline/TimeLine'
import ContactComponent from './ContactComponent'
import {
  Edit3Icon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import SocialInformationDrawer from './profileDrawer/SocialInformationDrawer'
import { GrGooglePlus } from 'react-icons/gr'
import PensionComponent from './PensionComponent'
import Salary from './Salary'
import { useGetProfile } from '../../API/profile'
import useCurrentUser from '../../hooks/useCurrentUser'
import profileImage from '.../../../../assets/images/osomhe-AI.png'
import HospitalTable from '../tables/HospitalTable'

export default function ProfileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleEditSocial = () => {
    setIsDrawerOpen(true)
  }
  const { userData } = useCurrentUser()
  const { data: profile, isLoading } = useGetProfile({ user: userData.data })

  const openQuickLink = (tab) => {
    switch (tab) {
      case 'forms':
        setIsOpen(true)
        break

      default:
        break
    }
  }
  let tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: [
        <PresonalInformation />,

        <ContactComponent />,
        <FamilyComponent />,
      ],
    },

    {
      id: 'timeline',
      label: 'Timeline',
      content: [<TimeLine />],
    },

    {
      id: 'official',
      label: 'Official',
      content: [<Official />, <PensionComponent />],
    },
    {
      id: 'hospital',
      label: 'Hospital',
      content: [<HospitalTable />],
    },
    {
      id: 'salary',
      label: 'Salary',
      content: [<Salary />],
    },

    {
      id: 'acedemic & certification',
      label: 'Acedemic & Certification',
      content: [<AcedemicTab />],
    },
    {
      id: 'work experience & profesion',
      label: 'Work Experience & Profesion',
      content: [<ProfessionalTabs />],
    },
  ]
  return (
    <>
      <div className='card bg-white fontOswald rounded-md shadow-sm p-4 mb-0'>
        <div className='profile-view grid grid-cols-1 md:flex justify-between   gap-4 '>
          {isLoading ? (
            <div className='max-w-[300px] w-full flex items-center gap-3'>
              <div>
                <Skeleton className='flex rounded-full w-12 h-12' />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
                <Skeleton className='h-3 w-4/5 rounded-lg' />
              </div>
            </div>
          ) : (
            <div className='flex flex-col text-center items-center justify-center md:flex md:flex-row md:justify-start md:items-start md:text-start gap-8 my-4'>
              <div className='profile-img py-4 md:py-0'>
                <Avatar
                  src={
                    profile?.PROFILE_PICTURE?.FILE_NAME
                      ? profile?.PROFILE_PICTURE.FILE_NAME
                      : profileImage
                  }
                  // name={profilePic?.FILE_NAME ? 'Junior' : 'User Image'}
                  alt='User Image'
                  className='h-28 w-28 rounded-full'
                />
              </div>

              <div className='profile-info-left mb-4 '>
                <h3 className='text-[1.2rem] text-[#333333] font-semibold '>
                  {profile?.BIODATA?.FIRST_NAME} {''}{' '}
                  {profile?.BIODATA?.LAST_NAME}
                </h3>
                <h6 className='text-muted font-bold text-[12px]'>
                  {profile?.BIODATA?.DIRECTORATE}
                </h6>
                <small className='text-muted font-bold text-[12px]'>
                  {profile?.BIODATA?.DEPARTMENT}
                </small>
                <small className='text-muted font-bold text-[12px]'>
                  {profile?.BIODATA?.RANK}
                </small>
                <small className='text-muted font-bold text-[12px]'>
                  {profile?.BIODATA?.UNIT}
                </small>
                <div className='staff-id text-black font-semibold text-[0.7rem] mt-2'>
                  STAFF NO : {profile?.BIODATA?.STAFF_NUMBER} {`NPF1244`}
                </div>
                <div className='mt-2 flex gap-2 cursor-pointer my-2 font-bold items-center'>
                  <FacebookIcon
                    link={profile?.BIODATA?.FACEBOOK_LINK}
                    className='text-[#316FF6] cursor-pointer'
                  />

                  <TwitterIcon
                    link={profile?.BIODATA?.TWITTER_LINK}
                    className='text-[#1DA1F2] cursor-pointer'
                  />

                  <InstagramIcon
                    link={profile?.BIODATA?.INSTAGRAM_LINK}
                    className='text-[#e4405f] cursor-pointer'
                  />

                  <LinkedinIcon
                    link={profile?.BIODATA?.LINKEDIN_LINK}
                    className='text-[#0a66c2] cursor-pointer '
                  />

                  <GrGooglePlus
                    size={22}
                    link={profile?.BIODATA?.GOOGLE_PLUS_LINK}
                    className='text-[#dd4b39] cursor-pointer '
                  />
                  <Edit3Icon size={22} onClick={handleEditSocial} />
                </div>

                <Button className='mt-2' variant='bordered'>
                  Click me
                </Button>
              </div>
            </div>
          )}
          <div className=''>
            <QuickLink clickedTab={openQuickLink} />
          </div>
        </div>
      </div>

      <div className='grid  gap-4'>
        <Tabs
          variant='underlined'
          className='bg-white fontOswald overflow-auto text-[#888888] font-medium rounded-md border-2'
          aria-label='Dynamic tabs'
          items={tabs}
          classNames={{
            tabList: '  borderb  py-2',
            // cursor: ' bg-[#ff9b44]',
            cursor: ' bg-btnColor',
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label} className=''>
              <div
                className={` grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 gap-12 `}
                // className={
                //   item.id === 'family'
                //     ? 'grid md:grid-cols-[22rem_1fr] items-center'
                //     : ` grid md:grid-cols-2  gap-x-4    gap-y-4 `
                // }
              >
                {Array.isArray(item.content) &&
                  item.content.map((paragraph, index) => (
                    <div
                      key={index}
                      className={
                        index === item.content.length - 1 &&
                        item.content.length % 2 === 1
                          ? 'col-span-2'
                          : item.label === 'Profile'
                          ? 'col-span-2 md:col-span-1'
                          : ''
                      }
                    >
                      {paragraph}
                    </div>
                  ))}
              </div>
            </Tab>
          )}
        </Tabs>
      </div>

      <FormRequestDrawer
        title='Drawer Title'
        description='Drawer Description'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {/* Your content for the drawer */}
      </FormRequestDrawer>

      {isDrawerOpen && (
        <SocialInformationDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      )}
    </>
  )
}
