/* eslint-disable react/prop-types */
import { Select, SelectItem } from '@nextui-org/react'
import { Controller, useForm } from 'react-hook-form'
import useCurrentUser from '../../hooks/useCurrentUser'
import { useGetProfile } from '../../API/profile'
import { useEffect } from 'react'
import { useGetLga, useGetState } from '../../API/profile'
import useFormStore from '../formRequest/store'
import NewInputDesign from '../forms/NewFormDesign'
import { MdErrorOutline } from 'react-icons/md'

export default function TextForm({ onNext }) {
  const { userData } = useCurrentUser()
  const { data: profile } = useGetProfile({ user: userData.data })

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      home_address: profile?.RESIDENTIAL_INFORMATION?.FIRST_NAME,
      home_state: profile?.RESIDENTIAL_INFORMATION?.STATE_OF_ORIGIN,
      home_lga: profile?.RESIDENTIAL_INFORMATION?.LGA,
    },
  })
  const { data: states, isLoading: isStateLoading } = useGetState()
  const { data: lgas, isLoading: isLgaLoading } = useGetLga(
    watch().state_of_origin
  )

  const { updateData } = useFormStore()

  useEffect(() => {
    setValue('lga', '')
  }, [watch().state_of_origin, setValue])

  const onSubmit = async (data) => {
    updateData({ textForm: data })
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-white shadow-md rounded border py-6 flex justify-center flex-col gap-4'>
        <Controller
          name='home_address'
          control={control}
          render={({ field }) => (
            <NewInputDesign
              status={!!errors?.home_address}
              type='text'
              label='Address'
              placeholder='Address'
              {...field}
              errorMessage={errors?.home_address?.message}
              isInvalid={!!errors?.home_address}
            />
          )}
          rules={{ required: true }}
        />
        <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
          <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
            State of origin
          </h5>
          <Controller
            name='home_state'
            control={control}
            render={({ field }) => (
              <Select
                variant='bordered'
                placeholder='state of origin'
                size='sm'
                selectedKeys={field.value ? [field.value] : []}
                errorMessage={errors?.home_state?.message}
                {...field}
                endContent={
                  errors.home_state && (
                    <MdErrorOutline className='w-6 h-6 text-red-500' />
                  )
                }
                isInvalid={!!errors?.home_state}
                isLoading={isStateLoading}
                tabIndex='0'
                aria-expanded='false'
                classNames={{
                  trigger:
                    'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                }}
              >
                {states?.map((state) => (
                  <SelectItem key={state.STATE_ID} value={state.STATE_ID}>
                    {state.STATE_NAME}
                  </SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />
        </div>
        <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
          <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
            LGA
          </h5>
          <Controller
            name='home_lga'
            control={control}
            render={({ field }) => (
              <Select
                variant='bordered'
                placeholder='LGA'
                size='sm'
                selectedKeys={field.value ? [field.value] : []}
                errorMessage={errors?.home_lga?.message}
                {...field}
                endContent={
                  errors.home_lga && (
                    <MdErrorOutline className='w-6 h-6 text-red-500' />
                  )
                }
                isInvalid={!!errors?.home_lga}
                isLoading={isLgaLoading}
                tabIndex='0'
                aria-expanded='false'
                classNames={{
                  trigger:
                    'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                }}
              >
                {lgas?.map((cou) => (
                  <SelectItem key={cou.LGA_ID} value={cou.LGA_ID}>
                    {cou.LGA_NAME}
                  </SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />
        </div>

        {/* <div className='grid grid-cols-2 w-full flex-wrap  mb-6 md:mb-0 mt-4 gap-4'>
          <Controller
            name='home_state'
            control={control}
            render={({ field }) => (
              <Select
                labelPlacement='outside'
                label='State of origin'
                isInvalid={!!errors.nationality}
                variant='bordered'
                placeholder='state of origin'
                selectedKeys={field.value ? [field.value] : []}
                {...field}
                isLoading={isStateLoading}
              >
                {states?.map((state) => (
                  <SelectItem key={state.STATE_ID} value={state.STATE_ID}>
                    {state.STATE_NAME}
                  </SelectItem>
                ))}
              </Select>
            )}
          />

          <Controller
            name='home_lga'
            control={control}
            render={({ field }) => (
              <Select
                labelPlacement='outside'
                label='LGA'
                isInvalid={!!errors.nationality}
                variant='bordered'
                placeholder='LGA'
                selectedKeys={field.value ? [field.value] : []}
                {...field}
                isLoading={isLgaLoading}
              >
                {lgas?.map((cou) => (
                  <SelectItem key={cou.LGA_ID} value={cou.LGA_ID}>
                    {cou.LGA_NAME}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div> */}
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
      <div className='flex justify-end py-3'>
        <button
          type='submit'
          className='bg-btnColor px-6 py-2 header_h3 outline-none  text-white rounded hover:bg-btnColor/70'
        >
          save
        </button>
      </div>
    </form>
  )
}
