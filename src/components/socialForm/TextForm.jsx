/* eslint-disable react/prop-types */
import { Input, Button } from '@nextui-org/react'

import { Controller, useForm } from 'react-hook-form'
import useCurrentUser from '../../hooks/useCurrentUser'
import { useGetProfile, useUpdateProfile } from '../../API/profile'
import toast from 'react-hot-toast'
import NewInputDesign from '../forms/NewFormDesign'

export default function TextForm({ setIsOpen }) {
  const { userData } = useCurrentUser()
  const { data: profile } = useGetProfile({ user: userData.data })
  const { mutateAsync: updateProfile } = useUpdateProfile()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fb_link: profile?.BIODATA?.FACEBOOK_LINK,
      lk_link: profile?.BIODATA?.LINKEDIN_LINK,
      tw_link: profile?.BIODATA?.TWITTER_LINK,
      ig_link: profile?.BIODATA?.INSTAGRAM_LINK,
      gp_link: profile?.BIODATA?.GOOGLE_PLUS_LINK,
    },
  })

  const package_id = profile?.CONTACT_INFORMATION?.PACKAGE_ID
  const staff_id = userData?.data.STAFF_ID
  const company_id = userData?.data.COMPANY_ID

  const onSubmit = async (data) => {
    try {
      const res = await updateProfile({
        ...data,
        package_id,
        staff_id,
        company_id,
      })
      if (res.data.status) {
        toast.success(res.data.message, {
          style: {
            background: 'green',
            color: '#fff',
            border: '2px solid #fff',
          },
          position: 'top-right',
          duration: 30000,
        })
        setIsOpen(false)
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        style: {
          background: 'red',
          color: '#fff',
          border: '2px solid #fff',
        },
        position: 'top-right',
        duration: 30000,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-white shadow-md rounded border flex justify-center flex-col gap-4'>
        {/* <h2 className='text-[22px] font-normal text-[#212529] '>Education</h2> */}

        <Controller
          name='fb_link'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Facebook'
              placeholder='Facebook '
              {...field}
              errorMessage={errors?.fb_link?.message}
              isInvalid={!!errors?.fb_link}
            />
          )}
        />
        <Controller
          name='lk_link'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='LinkedIn'
              placeholder='LinkedIn '
              {...field}
              errorMessage={errors?.lk_link?.message}
              isInvalid={!!errors?.lk_link}
            />
          )}
        />
        <Controller
          name='ig_link'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Instagram'
              placeholder='Instagram '
              {...field}
              errorMessage={errors?.ig_link?.message}
              isInvalid={!!errors?.ig_link}
            />
          )}
        />
        <Controller
          name='tw_link'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Twitter'
              placeholder='Twitter '
              {...field}
              errorMessage={errors?.tw_link?.message}
              isInvalid={!!errors?.tw_link}
            />
          )}
        />
        <Controller
          name='gp_link'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              type='text'
              label='Google+'
              placeholder='Google+ '
              {...field}
              errorMessage={errors?.gp_link?.message}
              isInvalid={!!errors?.gp_link}
            />
          )}
        />
      </div>
      <div className='flex justify-end py-3'>
        <button
          type='submit'
          className='bg-btnColor px-6 py-2 header_h3 outline-none  text-white rounded hover:bg-btnColor/70'
        >
          Submit
        </button>
      </div>
    </form>
  )
}
