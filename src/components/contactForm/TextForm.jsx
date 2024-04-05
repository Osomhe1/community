/* eslint-disable react/prop-types */
// import { Input, Button } from '@nextui-org/react'
import { Controller, useForm } from 'react-hook-form'
import useCurrentUser from '../../hooks/useCurrentUser'
import { useGetProfile } from '../../API/profile'
import useFormStore from '../formRequest/store'
import NewInputDesign from '../forms/NewFormDesign'

export default function TextForm({ onNext }) {
  const { userData } = useCurrentUser()
  const { data: profile } = useGetProfile({ user: userData.data })
  const {
    // register,
    handleSubmit,
    // reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      // c_name: contactInfo?.FIRST_NAME,
      official_email: profile?.CONTACT_INFORMATION?.EMAIL,
      primary_phone: profile?.CONTACT_INFORMATION?.PHONE,
      other_email: profile?.CONTACT_INFORMATION?.OTHER_EMAIL,
      other_phones: profile?.CONTACT_INFORMATION?.OTHER_PHONES,
    },
  })
  const { updateData } = useFormStore()

  const onSubmit = async (data) => {
    console.log(data, 'data')
    updateData({ textForm: data })
    onNext()
  }
  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-white shadow-md rounded border flex justify-center flex-col gap-4 '>
          <Controller
            name='official_email'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                status={!!errors?.official_email}
                type='email'
                label='Official Email'
                placeholder='Official Email'
                {...field}
                errorMessage={errors?.official_email?.message}
                isInvalid={!!errors?.official_email}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            name='primary_phone'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                status={!!errors?.primary_phone}
                type='text'
                label='Primary Phone'
                placeholder='Primary Phone'
                {...field}
                errorMessage={errors?.primary_phone?.message}
                isInvalid={!!errors?.primary_phone}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            name='other_email'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                status={!!errors?.other_email}
                type='email'
                label='Other Email'
                placeholder='Other Email'
                {...field}
                errorMessage={errors?.other_email?.message}
                isInvalid={!!errors?.other_email}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            name='other_phones'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                status={!!errors?.other_phones}
                type='text'
                label='Other Phones'
                placeholder='Other Phones'
                {...field}
                errorMessage={errors?.other_phones?.message}
                isInvalid={!!errors?.other_phones}
              />
            )}
            rules={{ required: true }}
          />
          <div className='grid grid-cols-2 w-full flex-wrap  mb-6 md:mb-0 gap-4'>
            {/* <Input
            size='sm'
            type='number'
            className='rounded-sm '
            label='Primary Phone'
            labelPlacement='outside'
            placeholder=' Phone'
            name='primary_phone'
            defaultValue={profile?.CONTACT_INFORMATION?.PHONE}
            {...register('primary_phone', { required: true })}
            error={errors?.primary_phone?.message}
          />
          <Input
            size='sm'
            labelPlacement='outside'
            placeholder='email'
            type='email'
            className='rounded-sm'
            label='Official Email'
            name='official_email'
            defaultValue={profile?.CONTACT_INFORMATION?.EMAIL}
            {...register('official_email', {})}
          />
          <Input
            size='sm'
            type='number'
            className='rounded-sm '
            label='Alternative  Phone'
            labelPlacement='outside'
            placeholder=' phone'
            name='other_phones'
            defaultValue={profile?.CONTACT_INFORMATION?.OTHER_PHONES}
            {...register('other_phones', {})}
          />
          <Input
            size='sm'
            labelPlacement='outside'
            placeholder='email'
            type='email'
            className='rounded-sm'
            label='Alternative  Email'
            name='other_email'
            defaultValue={profile?.CONTACT_INFORMATION?.OTHER_EMAIL}
            {...register('other_email', {})}
          /> */}
          </div>
          {/* <div className='flex justify-end'>
          <Button
            type='submit'
            color='secondary'
            className='my-4 text-white rounded'
          >
            Next
          </Button>
        </div> */}
        </div>
        <div className='flex justify-end py-3'>
          <button
            type='submit'
            onClick={onNext}
            className='bg-btnColor px-6 py-2 header_h3 outline-none  text-white rounded hover:bg-btnColor/70'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
