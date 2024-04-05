/* eslint-disable react/prop-types */

import { Edit2Icon } from 'lucide-react'

const Card = ({ title, hasEditIcon, onEditClick, children }) => {
  return (
    <div className='bg-white rounded-md p-4  h-full '>
      <div className='flex justify-between items-center gap-4 border-b pb-3'>
        <h2 className=' text-[0.9rem]  font-[500] uppercase text-[#444e4e]'>
          {title}
        </h2>
        {hasEditIcon && (
          <div className='flex justify-end '>
            <button
              className='bg-blue-100 p-2 rounded-full'
              onClick={onEditClick}
            >
              <Edit2Icon className='w-4 h-4 text-blue-400' />
            </button>
          </div>
        )}
      </div>
      {/* Other content of the card */}

      <div className=''>{children}</div>
    </div>
  )
}

export default Card
