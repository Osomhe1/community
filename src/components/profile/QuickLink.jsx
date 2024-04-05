/* eslint-disable react/prop-types */

import { Link } from '@nextui-org/link'
import { Aperture, Building, CreditCard } from 'lucide-react'
import { PiAirTrafficControl, PiTreePalmThin } from 'react-icons/pi'

const QuickLink = ({ clickedTab }) => {
  return (
    <div className='bg-white rounded -z-10 md:w-96 '>
      <div className='py-0 text-sm'>
        <div className='ml-10'>
          <span className='text-black text-center font-semibold text-lg'>
            Quick Links
          </span>
        </div>

        <div className='grid grid-cols-3 bg-white gap-y-4 pt-2'>
          <div
            className='bg-white rounded-lg p-2  flex flex-col justify-center items-center  cursor-pointer  opacity-90 text-gray-600 '
            onClick={() => clickedTab('service')}
          >
            <div className='rounded-full  bg-red-200 w-[60px] h-[60px] flex justify-center items-center'>
              <CreditCard size={30} className='!font-bold text-red-600 ' />
            </div>

            <div
              // href='/training'
              className=' text-center my-2 text-black truncate  text-xs'
            >
              Training
            </div>
          </div>

          <div
            className=' rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer bg-white opacity-90 text-gray-600'
            onClick={() => clickedTab('leave')}
          >
            <div className='rounded-full  bg-purple-300 w-[60px] h-[60px] flex justify-center items-center'>
              <PiTreePalmThin
                size={30}
                className='!font-bold text-purple-600 '
              />
            </div>
            <div className=' text-center my-2 truncate  text-xs'>Leave</div>
          </div>
          <div
            className=' rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer bg-white opacity-90 text-gray-600'
            onClick={() => clickedTab('payroll')}
          >
            <div className='rounded-full  bg-yellow-200 w-[60px] h-[60px] flex justify-center items-center'>
              <CreditCard size={30} className='!font-bold text-yellow-500' />
            </div>
            <div className=' my-2 text-center truncate  text-xs'>Salary</div>
          </div>
          <div
            className=' rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer bg-white opacity-90 text-gray-600'
            // onClick={() => clickedTab('forms')}
          >
            <div className='rounded-full  bg-green-200 w-[60px] h-[60px] flex justify-center items-center'>
              <Aperture size={30} className='!font-bold text-green-500 ' />
            </div>
            <div className=' my-2 text-center truncate  text-xs'>Request</div>
          </div>
          <div
            className=' rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer bg-white opacity-90 text-gray-600'
            // onClick={() => clickedTab('forms')}
          >
            <div className='rounded-full  bg-orange-200 w-[60px] h-[60px] flex justify-center items-center'>
              <Building size={30} className='!font-bold text-orange-500 ' />
            </div>
            <div className=' my-2 text-center truncate  text-xs'>
              Performance
            </div>
          </div>
          <div className=' rounded-lg p-2 flex flex-col justify-center items-center  cursor-pointer bg-white opacity-90 text-gray-600'>
            <div className='rounded-full  bg-green-300 w-[60px] h-[60px] flex justify-center items-center'>
              <PiAirTrafficControl
                size={30}
                className='!font-bold text-green-900'
              />
            </div>
            <Link
              href='/Employee/attendance'
              className=' my-2 text-center truncate  text-black text-xs'
            >
              Attendence
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickLink
