import Card from './Card'

export default function Pension() {
  return (
    <Card title='Pension' hasEditIcon={false}>
      <ul className=' mt-2 w-full px12 text-[0.9rem] flex flex-col space-y-3'>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            {' '}
            Pension Company:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  breakwords pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            Access Bank
          </span>
        </li>
        <li className='grid grid-cols-2'>
          <span className='text-[#444e4e] font-[500] text-[0.9rem] capitalize '>
            {' '}
            Pension Number:
          </span>
          <span className='text-[#888] h-auto hyphens-auto text-end  break-words pb-2 border-b-2 w-full max-w-sm font-profileFontSize'>
            129HHTR445532RRR89
          </span>
        </li>
      </ul>
    </Card>
  )
}
