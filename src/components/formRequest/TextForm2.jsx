/* eslint-disable react/prop-types */
import { Controller, useForm } from 'react-hook-form'
import NewInputDesign from '../forms/NewFormDesign'
import useCurrentUser from '../../hooks/useCurrentUser'
import {
  useGetCountry,
  useGetGender,
  useGetLga,
  useGetMaritalStatus,
  useGetProfile,
  useGetState,
  useGetTitle,
} from '../../API/profile'
import useFormStore from './store'
import { Select, SelectItem } from '@nextui-org/react'
import { MdErrorOutline } from 'react-icons/md'
import { useEffect } from 'react'

export default function TextForm2({ onNext }) {
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
      first_name: profile?.BIODATA?.FIRST_NAME,
      last_name: profile?.BIODATA?.LAST_NAME,
      title: profile?.BIODATA?.TITLE,
      other_names: profile?.BIODATA?.OTHER_NAMES,
      maiden_name: profile?.BIODATA?.MAIDEN_NAME,
      decoration: profile?.BIODATA?.DIRECTORATE,
      marital_status: profile?.BIODATA?.MARITAL_STATUS,
      state_of_origin: profile?.BIODATA?.STATE_OF_ORIGIN,
      lga: profile?.BIODATA?.LGA,
      nationality: profile?.BIODATA?.NATIONALITY,
      gender: profile?.BIODATA?.GENDER,
    },
  })
  const { data: countries, isLoading: isCountryLoading } = useGetCountry()
  const { data: states, isLoading: isStateLoading } = useGetState(
    watch().nationality
  )
  const { data: titles, isLoading: isTitleLoading } = useGetTitle()
  const { data: genders, isLoading: isGenderLoading } = useGetGender()
  const { data: maritalStatus, isLoading: isMaritalStatusLoading } =
    useGetMaritalStatus()
  const { data: lgas, isLoading: isLgaLoading } = useGetLga(
    watch().state_of_origin
  )

  const { updateData } = useFormStore()

  useEffect(() => {
    setValue('state_of_origin', '')
    setValue('lga', '')
  }, [watch().nationality, setValue])

  useEffect(() => {
    setValue('lga', '')
  }, [watch().state_of_origin, setValue])

  const onSubmit = async (data) => {
    updateData({ textForm: data })
    onNext()
  }

  console.log(titles)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-white shadow-md rounded border flex justify-center flex-col gap-4'>
          <div className='py-3 border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
            <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
              Title
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
                  errorMessage={errors?.title?.message}
                  {...field}
                  endContent={
                    errors.title && (
                      <MdErrorOutline className='w-6 h-6 text-red-500' />
                    )
                  }
                  isInvalid={!!errors?.title}
                  isDisabled={isTitleLoading}
                  tabIndex='0'
                  aria-expanded='false'
                  classNames={{
                    trigger:
                      'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                  }}
                >
                  {titles?.map((title) => (
                    <SelectItem key={title?.ID} value={title?.ID}>
                      {title?.NAME}
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
                status={!!errors?.first_name}
                type='text'
                label='First Name'
                placeholder='first name'
                {...field}
                errorMessage={errors?.first_name?.message}
                isInvalid={!!errors?.first_name}
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
                errorMessage={errors?.last_name?.message}
                isInvalid={!!errors?.last_name}
                required={true}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            name='other_names'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                type='text'
                label='Other Name'
                placeholder='other name'
                {...field}
                status={!!errors?.first_name}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            name='maiden_name'
            control={control}
            render={({ field }) => (
              <NewInputDesign
                type='text'
                label='Maiden Name'
                variant='bordered'
                placeholder='Maiden name'
                {...field}
              />
            )}
          />
          <div className=' grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 border-b py-3 items-center px-5'>
            <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
              Gender
            </h5>
            <Controller
              name='gender'
              control={control}
              render={({ field }) => (
                <Select
                  isInvalid={!!errors.gender}
                  variant='bordered'
                  placeholder='Gender'
                  classNames={{
                    trigger:
                      'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                  }}
                  selectedKeys={field.value ? [field.value] : []}
                  {...field}
                  errorMessage={errors?.gender?.message}
                  endContent={
                    errors?.gender && (
                      <MdErrorOutline className='w-6 h-6 text-red-500' />
                    )
                  }
                  isLoading={isGenderLoading}
                >
                  {genders?.map((cou) => (
                    <SelectItem key={cou?.NAME} value={cou?.NAME}>
                      {cou?.NAME}
                    </SelectItem>
                  ))}
                </Select>
              )}
              rules={{ required: true }}
            />
          </div>
          <div className='border-b py-3 grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
            <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
              Marital Status
            </h5>
            <Controller
              name='marital_status'
              control={control}
              render={({ field }) => (
                <Select
                  isInvalid={!!errors.marital_status}
                  variant='bordered'
                  placeholder='Marital Status'
                  selectedKeys={field.value ? [field.value] : []}
                  {...field}
                  errorMessage={errors?.marital_status?.message}
                  classNames={{
                    trigger:
                      'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                  }}
                  endContent={
                    errors?.marital_status && (
                      <MdErrorOutline className='w-6 h-6 text-red-500' />
                    )
                  }
                  isLoading={isMaritalStatusLoading}
                >
                  {maritalStatus?.map((cou) => (
                    <SelectItem key={cou.MARITAL_NAME} value={cou.MARITAL_NAME}>
                      {cou.MARITAL_NAME}
                    </SelectItem>
                  ))}
                </Select>
              )}
              rules={{ required: true }}
            />
          </div>
          <div className='border-b py-3 grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
            <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
              Nationality
            </h5>
            <Controller
              name='nationality'
              control={control}
              render={({ field }) => (
                <Select
                  isInvalid={!!errors.nationality}
                  variant='bordered'
                  placeholder='Nationality'
                  selectedKeys={field.value ? [field.value] : []}
                  {...field}
                  errorMessage={errors?.nationality?.message}
                  classNames={{
                    trigger:
                      'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                  }}
                  endContent={
                    errors?.nationality && (
                      <MdErrorOutline className='w-6 h-6 text-red-500' />
                    )
                  }
                  isLoading={isCountryLoading}
                >
                  {countries?.map((cou) => (
                    <SelectItem key={cou.COUNTRY_ID} value={cou.COUNTRY_ID}>
                      {cou.COUNTRY_NAME}
                    </SelectItem>
                  ))}
                </Select>
              )}
              rules={{ required: true }}
            />
          </div>
          <div className='border-b py-3 grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
            <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
              State of origin
            </h5>
            <Controller
              name='state_of_origin'
              control={control}
              render={({ field }) => (
                <Select
                  isInvalid={!!errors.nationality}
                  variant='bordered'
                  placeholder='state of origin'
                  selectedKeys={field.value ? [field.value] : []}
                  {...field}
                  errorMessage={errors?.state_of_origin?.message}
                  classNames={{
                    trigger:
                      'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                  }}
                  endContent={
                    errors?.state_of_origin && (
                      <MdErrorOutline className='w-6 h-6 text-red-500' />
                    )
                  }
                  isLoading={isStateLoading}
                >
                  {states?.map((cou) => (
                    <SelectItem key={cou.STATE_ID} value={cou.STATE_ID}>
                      {cou.STATE_NAME}
                    </SelectItem>
                  ))}
                </Select>
              )}
              rules={{ required: true }}
            />
          </div>
          {watch().nationality === '100' && (
            <div className='border-b grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center px-5'>
              <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
                LGA
              </h5>
              <Controller
                name='lga'
                control={control}
                render={({ field }) => (
                  <Select
                    isInvalid={!!errors.lga}
                    variant='bordered'
                    placeholder='LGA'
                    selectedKeys={field.value ? [field.value] : []}
                    {...field}
                    errorMessage={errors?.lga?.message}
                    classNames={{
                      trigger:
                        'text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20',
                    }}
                    endContent={
                      errors?.lga && (
                        <MdErrorOutline className='w-6 h-6 text-red-500' />
                      )
                    }
                    isLoading={isLgaLoading}
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
          )}

          {/* <div className='flex px-6 justify-end'>
            <Button
              type='submit'
              color='primary'
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
