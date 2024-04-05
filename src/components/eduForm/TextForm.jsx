// import 'react-datepicker/dist/react-datepicker.css'
import { Select, SelectItem } from '@nextui-org/react'
import { schoolLevel, universityName } from './datas'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import NewInputDesign from '../forms/NewFormDesign'
import { DatePicker } from 'antd'

export default function TextForm() {
  const [value, setValue] = useState('')
  const { control, handleSubmit } = useForm({})

  const handleSelectionChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = () => {
    console.log(value)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-white shadow-md rounded border flex justify-center flex-col gap-4'>
        {/* <h2 className='text-[22px] font-normal text-[#212529] '>Education</h2> */}
        <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
          <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
            Institution Name
          </h5>
          <Controller
            name='Institution Name'
            control={control}
            render={({ field }) => (
              <Select
                variant='bordered'
                placeholder='Institution Name'
                size='sm'
                selectedKeys={field.value ? [field.value] : []}
                {...field}
                className='my-3 rounded-sm'
                onChange={handleSelectionChange}
                tabIndex='0'
                aria-expanded='false'
                classNames={{
                  trigger:
                    'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                }}
              >
                {universityName?.map((uni) => (
                  <SelectItem key={uni.value} value={uni.value}>
                    {uni.label}
                  </SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />
        </div>
        <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
          <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
            School Level
          </h5>
          <Controller
            name='school_level'
            control={control}
            render={({ field }) => (
              <Select
                variant='bordered'
                placeholder='school level'
                size='sm'
                selectedKeys={field.value ? [field.value] : []}
                {...field}
                className='my-3 rounded-sm'
                onChange={handleSelectionChange}
                tabIndex='0'
                aria-expanded='false'
                classNames={{
                  trigger:
                    'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                }}
              >
                {schoolLevel?.map((school) => (
                  <SelectItem key={school?.value} value={school?.value}>
                    {school?.label}
                  </SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />
        </div>

        {/* <Select
          label='Institution Name'
          size='sm'
          labelPlacement='outside'
          placeholder='Institution Name'
          selectedKeys={[value]}
          className='my-3 rounded-sm'
          onChange={handleSelectionChange}
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select> */}
        <div className='grid grid-cols-2 items-center w-full flex-wrap  mb-6 md:mb-0 gap-4'></div>
        {/* <Select
            label='Institution Name'
            size='sm'
            labelPlacement='outside'
            placeholder='Institution Name'
            selectedKeys={[value]}
            className=' rounded-sm'
            onChange={handleSelectionChange}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select> */}

        <Controller
          name='first_name'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Course Name'
              placeholder='Course Name '
              {...field}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name='first_name'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Degree Name'
              placeholder='Degree Name '
              {...field}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          name='first_name'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Degree Class'
              placeholder='Degree Class '
              {...field}
            />
          )}
          rules={{ required: true }}
        />
        {/* <Input
            size='sm'
            type='text'
            className='rounded-sm '
            label='Course Name'
            labelPlacement='outside'
            placeholder='Course Name '
          /> */}
        {/* <Input
            size='sm'
            type='text'
            className='rounded-sm '
            label='Degree Name'
            labelPlacement='outside'
            placeholder='Degree Name '
          /> */}
        {/* <Input
            size='sm'
            // value={newNote}
            // onChange={handleInputChange}
            label='Degree Class'
            labelPlacement='outside'
            placeholder='Degree Class'
            className='  '
            rows={2}
          /> */}
        <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
          <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
            Start Date
          </h5>
          <Controller
            name='Institution Name'
            control={control}
            render={({ field }) => (
              <DatePicker
                className=' w-full border-gray-300 h-8 rounded-md  focus:outline-none'
                format='MM/dd/yyyy'
                {...field}
              />
            )}
            rules={{ required: true }}
          />
        </div>
        <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
          <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
            End Date
          </h5>
          <Controller
            name='Institution Name'
            control={control}
            render={({ field }) => (
              <DatePicker
                className=' w-full border-gray-300 h-8 rounded-md  focus:outline-none'
                format='MM/dd/yyyy'
                {...field}
              />
            )}
            rules={{ required: true }}
          />
        </div>
        {/* <div className=''>
            <label>Start Date</label>
            <DatePicker
              className=' w-full border-gray-300 h-8 rounded-md  focus:outline-none'
              format='MM/dd/yyyy'
            />
          </div> */}
        {/* <div className=''>
            <label></label>

            <DatePicker
              className=' w-full border-gray-300 h-8 rounded-md  focus:outline-none'
              format='MM/dd/yyyy'
            />
          </div> */}
        {/* <div className='  '>
          <Button
            color='success'
            className='my-4  text-white rounded'
            // onClick={handleAddNote}
          >
            Submit
          </Button>
        </div> */}
      </div>
      <div className='flex justify-end py-3'>
        <button
          type='submit'
          className='bg-btnColor px-6 py-2 header_h3 outline-none  text-white rounded hover:bg-btnColor/70'
        >
          Save
        </button>
      </div>
    </form>
  )
}
