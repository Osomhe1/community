import { useState } from 'react'
import Card from './Card'
import EduInformationDrawer from './profileDrawer/EduInformationDrawer'
import WorkTable from '../workTable/WorkTable'

export default function Education() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleEditClick = () => {
    setIsDrawerOpen(true)
  }
  return (
    <>
      {/* <Card title='Education' hasEditIcon={true} onEditClick={handleEditClick}>
        <div className='divide-y-2'>
          <ul className='font-apple-system text-[15px] py-2  flex flex-col space-y-3'>
            <li className='grid grid-cols-2'>
              <span className='text-[#333333] font-semibold'>
                {' '}
                University Type:
              </span>
              <span className='text-[#888888] max-w-sm  font-profileFontSize '>
                Federal Universerty
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#333333] font-semibold'>Course:</span>
              <span className='text-[#888888] max-w-sm  font-profileFontSize '>
                Computer Science | BSC
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#333333] font-semibold'> Duration:</span>
              <span className='text-[#888888] max-w-sm  font-profileFontSize '>
                Jan 2019 - Dec 2022{' '}
              </span>
            </li>
          </ul>
          <ul className='font-apple-system text-[15px] py-2  flex flex-col space-y-3'>
            <li className='grid grid-cols-2'>
              <span className='text-[#333333] font-semibold'>
                {' '}
                University Type:
              </span>
              <span className='text-[#888888] max-w-sm  font-profileFontSize '>
                Federal Poly
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#333333] font-semibold'>Course:</span>
              <span className='text-[#888888] max-w-sm  font-profileFontSize '>
                Computer Science | BSC
              </span>
            </li>
            <li className='grid grid-cols-2'>
              <span className='text-[#333333] font-semibold'> Duration:</span>
              <span className='text-[#888888] max-w-sm  font-profileFontSize '>
                Jan 2017 - Dec 2019{' '}
              </span>
            </li>
          </ul>
        </div>
      </Card> */}
      <WorkTable />
      {isDrawerOpen && (
        <EduInformationDrawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      )}
    </>
  )
}
