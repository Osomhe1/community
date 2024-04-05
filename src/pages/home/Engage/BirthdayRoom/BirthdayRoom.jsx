/* eslint-disable react/prop-types */
// import { Tab, Tabs } from '@nextui-org/tabs'
import PageHeader from '../../../../components/payroll_components/PageHeader'
import AvatarPage from './components/AvatarPage'
import { useState } from 'react'
import BirthdayTabs from './BirthdayTabs'
import ExpandedDrawer from '../../../../components/modals/ExpandedDrawer'
import PromotionsPage from './components/PromotionsPage'
import RecruitmentsPage from './components/RecruitmentsPage'
import RoleChangesPage from './components/RoleChangesPage'
import CelebrationsPage from './components/CelebrationsPage'

export default function BirthdayRoom({ isOpen, setIsOpen }) {
  const [stepper, setstepper] = useState(1)

  // let tabs = [
  //   {
  //     id: 'brithday',
  //     label: 'Birthday',
  //     content: <AvatarPage />,
  //   },
  //   {
  //     id: 'marriage',
  //     label: 'Marraige',
  //     content: '',
  //   },
  //   {
  //     id: 'ann',
  //     label: 'Videos',
  //     content: '',
  //   },
  //   {
  //     id: 'videos',
  //     label: 'Videos',
  //     content: '',
  //   },
  // ]
  return (
    <ExpandedDrawer isOpen={isOpen} onClose={setIsOpen}>
      <div className='bg-[#f5f7fa] min-h-screen py-6'>
        <div className='w-[80%]  mx-auto'>
          <PageHeader
            header_text={'Events'}
            breadCrumb_data={[{ name: 'Upcoming events' }]}
            buttonProp={false}
          />

          {/* <div className='flex w-full flex-col'>
        <Tabs aria-label='Dynamic tabs' items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div> */}
          <div className='bg-white rounded-lg border mt-8 pb-6'>
            <BirthdayTabs step={setstepper} />

            {stepper === 1 && (
              <div className='space-y-5 px-8'>
                <AvatarPage />
              </div>
            )}
            {stepper === 2 && (
              <div className='space-y-5 px-8'>
                <PromotionsPage />
              </div>
            )}
            {stepper === 3 && (
              <div className='space-y-5 px-8'>
                <RecruitmentsPage />
              </div>
            )}
            {stepper === 4 && (
              <div className='space-y-5 px-8'>
                <RoleChangesPage />
              </div>
            )}
            {stepper === 5 && (
              <div className='space-y-5 px-8'>
                <CelebrationsPage />
              </div>
            )}
          </div>
        </div>
      </div>
    </ExpandedDrawer>
  )
}
