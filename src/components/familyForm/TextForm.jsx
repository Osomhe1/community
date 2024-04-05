import { Input, Checkbox, Button, Select, SelectItem } from '@nextui-org/react'
import { animals } from './datas'
import { useState } from 'react'
import { CameraIcon } from 'lucide-react'
import { DatePicker } from 'rsuite'
import { Controller, useForm } from 'react-hook-form'
import NewInputDesign from '../forms/NewFormDesign'

export default function TextForm() {
  const [value, setValue] = useState('')

  const handleSelectionChange = (e) => {
    setValue(e.target.value)
  }
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  })
  const [previewImage, setPreviewImage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const { control, handleSubmit } = useForm({})

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      setFormData({ ...formData, image: file })
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Perform the submission logic here
    // You can send formData to your server or process it as needed

    // Reset the form after submission
    setFormData({
      name: '',
      description: '',
      image: null,
    })
    setPreviewImage(null)
  }
  return (
    <>
      {/* <div className='grid gap-2 w-full py-8 '>
        <h2 className='text-[22px] font-normal text-[#212529] '>Family </h2>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 w-full flex-wrap items-center mb-6 md:mb-0 gap-4'>
            <div className=''>
              <label className='cursor-pointer  text-white py2 px-4 rounded-md'>
                <CameraIcon className='w-8 h-8 text-red-500' />
                <Input
                  type='file'
                  accept='.jpg, .jpeg, .png, .gif, .pdf'
                  size='sm'
                  className='rounded-sm hidden'
                  label='Image'
                  labelPlacement='outside'
                  placeholder='image'
                  id='image'
                  name='image'
                  onChange={handleImageChange} // Add the desired file types
                />
              </label>

              {previewImage && (
                <img
                  src={previewImage}
                  alt='Preview'
                  // style={{ maxWidth: '300px', marginTop: '10px' }}
                />
              )}
            </div>
            <Input
              size='sm'
              type='text'
              name='name'
              className='rounded-sm '
              label='First Name'
              labelPlacement='outside'
              placeholder=' first name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              size='sm'
              type='text'
              name='name'
              className='rounded-sm '
              label='Last Name'
              labelPlacement='outside'
              placeholder=' last name'
              value={formData.name}
              onChange={handleInputChange}
            />

            <Select
              label='Relationship'
              size='sm'
              labelPlacement='outside'
              placeholder='Relationship'
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
              name='address'
              className='rounded-sm '
              label='Address'
              labelPlacement='outside'
              placeholder=' address'
              // value={formData.name}
              onChange={handleInputChange}
            />
            <Checkbox defaultSelected size='md'>
              Use my address
            </Checkbox>
            <Input
              size='sm'
              type='phone'
              name='phone'
              className='rounded-sm '
              label='Phone'
              labelPlacement='outside'
              placeholder=' phone'
              // value={formData.name}
              onChange={handleInputChange}
            />
            <div className=''>
              <label htmlFor='Date'> Date of Birth</label>
              <DatePicker />
            </div>
            <Input
              size='sm'
              type='email'
              name='email'
              className='rounded-sm '
              label='email'
              labelPlacement='outside'
              placeholder=' email'
              // value={formData.name}
              onChange={handleInputChange}
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
      </div> */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='bg-white shadow-md rounded border flex justify-center flex-col gap-4'>
            <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
              <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
                Photo
              </h5>
              <div className=''>
                <label className='cursor-pointer  text-white py2 px-4 rounded-md'>
                  <CameraIcon className='w-8 h-8 text-red-500' />
                  <Input
                    type='file'
                    accept='.jpg, .jpeg, .png, .gif, .pdf'
                    size='sm'
                    className='rounded-sm hidden'
                    label='Image'
                    labelPlacement='outside'
                    placeholder='image'
                    id='image'
                    name='image'
                    onChange={handleImageChange} // Add the desired file types
                  />
                </label>

                {previewImage && (
                  <img
                    src={previewImage}
                    alt='Preview'
                    // style={{ maxWidth: '300px', marginTop: '10px' }}
                  />
                )}
              </div>
            </div>
            <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
              <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
                Relationship
              </h5>
              <Controller
                name='title'
                control={control}
                render={({ field }) => (
                  <Select
                    variant='bordered'
                    placeholder='title'
                    size='sm'
                    selectedKeys={field.value ? [field.value] : []}
                    {...field}
                    tabIndex='0'
                    aria-expanded='false'
                    classNames={{
                      trigger:
                        'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                    }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
                rules={{ required: true }}
              />
            </div>

            <Controller
              name='first_name'
              control={control}
              render={({ field }) => (
                <NewInputDesign
                  type='text'
                  label='First Name'
                  placeholder='first name'
                  {...field}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name='last_name'
              control={control}
              render={({ field }) => (
                <NewInputDesign
                  type='text'
                  label='Last Name'
                  placeholder='last name'
                  {...field}
                  required={true}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name='address'
              control={control}
              render={({ field }) => (
                <NewInputDesign
                  type='text'
                  label='Address'
                  placeholder='Address'
                  {...field}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              name='phone'
              control={control}
              render={({ field }) => (
                <NewInputDesign
                  type='text'
                  label='Phone'
                  variant='bordered'
                  placeholder='phone'
                  {...field}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <NewInputDesign
                  type='text'
                  label='Email'
                  variant='bordered'
                  placeholder='email'
                  {...field}
                />
              )}
            />
            <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
              <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
                Date of Birth
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
      </div>
    </>
  )
}
