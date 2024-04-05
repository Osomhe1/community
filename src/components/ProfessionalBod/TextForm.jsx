// import 'react-datepicker/dist/react-datepicker.css'
import { Input, Button, Textarea } from '@nextui-org/react'

export default function TextForm() {
  return (
    <div className='grid gap-2 w-full py-8 '>
      <h2 className='text-[22px] font-normal text-[#212529] '>
        {' '}
        Professional Body
      </h2>
      <form action=''>
        <div className='grid grid-cols-2 items-center w-full flex-wrap  mb-6 md:mb-0 gap-4'>
          <Input
            size='sm'
            type='text'
            className='rounded-sm my-3'
            label='Name'
            labelPlacement='outside'
            placeholder='Name'
          />
          <Input
            size='sm'
            type='text'
            className='rounded-sm '
            label='Number'
            labelPlacement='outside'
            placeholder=' Number'
          />
          <Input
            size='sm'
            type='text'
            className='rounded-sm '
            label='Date Joined'
            labelPlacement='outside'
            placeholder=' Date Joined'
          />
          <Textarea
            size='sm'
            type='text'
            className='rounded-sm '
            label='Reason for joining'
            labelPlacement='outside'
            placeholder=' Reason for joining'
          />
        </div>

        <div className='  '>
          <Button
            color='success'
            className='my-4  text-white rounded'
            // onClick={handleAddNote}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
