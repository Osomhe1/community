// import 'react-datepicker/dist/react-datepicker.css'
import { Input, Button, Select, SelectItem, Checkbox } from '@nextui-org/react'
import { CertificationType } from './datas'
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
    <>
      {/* <div className='grid gap-2 w-full py-8 '>
        <h2 className='text-[22px] font-normal text-[#212529] '>
          Certification
        </h2>
        <form action=''>
          <Input
            size='sm'
            type='text'
            className='rounded-sm my-3'
            label='Certification Name'
            labelPlacement='outside'
            placeholder='Certification Name'
          />
          <div className='grid grid-cols-2 items-center w-full flex-wrap  mb-6 md:mb-0 gap-4'>
            <Select
              label='Certification Type'
              size='sm'
              labelPlacement='outside'
              placeholder='Certification Type'
              selectedKeys={[value]}
              className='max-w-xs rounded-sm'
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              size='sm'
              type='text'
              className='rounded-sm '
              label='Certification Authority'
              labelPlacement='outside'
              placeholder=' Certification Authority'
            />
            <Input
              size='sm'
              type='text'
              className='rounded-sm '
              label='License Number'
              labelPlacement='outside'
              placeholder=' License Number'
            />
            <Input
              size='sm'
              type='text'
              className='rounded-sm '
              label='URL Number'
              labelPlacement='outside'
              placeholder=' url'
            />

            <div className=''>
              <label>Start Date</label>
              <DatePicker
                className=' w-full border-gray-300 h-8 rounded-md  focus:outline-none'
                format='MM/dd/yyyy'
              />
            </div>
            <div className=''>
              <label>End Date</label>

              <DatePicker
                className=' w-full border-gray-300 h-8 rounded-md  focus:outline-none'
                format='MM/dd/yyyy'
              />
            </div>
          </div>
          <Checkbox className='my-2' defaultSelected size='md'>
            This certificate does not expire
          </Checkbox>
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
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-white shadow-md rounded border flex justify-center flex-col gap-4'>
          {/* <h2 className='text-[22px] font-normal text-[#212529] '>Education</h2> */}
          <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
            <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
              Certification Type
            </h5>
            <Controller
              name='Institution Name'
              control={control}
              render={({ field }) => (
                <Select
                  variant='bordered'
                  placeholder='Certification Type'
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
                  {CertificationType?.map((certi) => (
                    <SelectItem key={certi.value} value={certi.value}>
                      {certi.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
              rules={{ required: true }}
            />
          </div>

          <div className='grid grid-cols-2 items-center w-full flex-wrap  mb-6 md:mb-0 gap-4'></div>

          <Controller
            name='first_name'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                type='text'
                label='Certification Name'
                placeholder='Certification Name '
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
                label='Certification Authority'
                placeholder='Certification Authority '
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
                label='License Number'
                placeholder='License Number '
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
                label='URL Number'
                placeholder='URL Number '
                {...field}
              />
            )}
            rules={{ required: true }}
          />

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
    </>
  )
}
