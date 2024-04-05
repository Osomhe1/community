import Card from './Card'

export default function Official() {
  return (
    <Card title='Official' hasEditIcon={false}>
      <ul className=' mt-2 text-[0.9rem] flex flex-col space-y-3'>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Directorate:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Directorate of Art
          </span>
        </li>
        <li className='grid grid-cols-2 '>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            {' '}
            Department:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Human Resources
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Unit:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Not Avalibale
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Designation:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            IT
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Grade Level:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            16
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Step:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            12
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Employee Type:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Permanent
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Date of First Appointment:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            12/03/2011
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Current Appointment Date:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Not Avalible
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            Present Posting:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Not Avalible
          </span>
        </li>
      </ul>
    </Card>
  )
}
