/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { useForm, Controller } from 'react-hook-form'
import { MdErrorOutline } from 'react-icons/md'
import {
  useGetCountry,
  useGetGender,
  useGetLga,
  useGetMaritalStatus,
  useGetProfile,
  useGetState,
  useGetTitle,
} from '../../API/profile'
import useCurrentUser from '../../hooks/useCurrentUser'
import useFormStore from './store'
import { Input } from 'antd'

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-2 w-full py-8  gap-y-8 '>
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <Select
              labelPlacement='outside'
              label='Title'
              variant='bordered'
              placeholder='title'
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

        <div className='grid grid-cols-2 w-full flex-wrap   mb-6 md:mb-0 gap-4 gap-y-8'>
          <div className=''>
            <Controller
              name='first_name'
              control={control}
              render={({ field }) => (
                <Input
                  status={!!errors?.first_name}
                  type='text'
                  label='First Name'
                  labelPlacement='outside'
                  placeholder='first name'
                  {...field}
                  errorMessage={errors?.first_name?.message}
                  isInvalid={!!errors?.first_name}
                  size='large'
                />
              )}
              rules={{ required: true }}
            />
          </div>
          <Controller
            name='last_name'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                className='rounded-sm '
                label='Last Name'
                labelPlacement='outside'
                variant='bordered'
                placeholder='last name'
                {...field}
                errorMessage={errors?.last_name?.message}
                isInvalid={!!errors?.last_name}
                required={true}
              />
            )}
            rules={{ required: true }}
          />

          <div className=''>
            <Controller
              name='other_names'
              control={control}
              render={({ field }) => (
                <Input
                  type='text'
                  className='rounded-sm '
                  label='Other Name'
                  labelPlacement='outside'
                  placeholder='other name'
                  {...field}
                  status={!!errors?.first_name}
                />
              )}
              rules={{ required: true }}
            />
          </div>
          <Controller
            name='maiden_name'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                className='rounded-sm '
                label='Maiden Name'
                variant='bordered'
                labelPlacement='outside'
                placeholder='Maiden name'
                {...field}
              />
            )}
          />

          <Controller
            name='gender'
            control={control}
            render={({ field }) => (
              <Select
                labelPlacement='outside'
                label='Gender'
                isInvalid={!!errors.gender}
                variant='bordered'
                placeholder='Gender'
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

          <Controller
            name='marital_status'
            control={control}
            render={({ field }) => (
              <Select
                labelPlacement='outside'
                label='Marital Status'
                isInvalid={!!errors.marital_status}
                variant='bordered'
                placeholder='Marital Status'
                selectedKeys={field.value ? [field.value] : []}
                {...field}
                errorMessage={errors?.marital_status?.message}
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

          <Controller
            name='nationality'
            control={control}
            render={({ field }) => (
              <Select
                labelPlacement='outside'
                label='Nationality'
                isInvalid={!!errors.nationality}
                variant='bordered'
                placeholder='Nationality'
                selectedKeys={field.value ? [field.value] : []}
                {...field}
                errorMessage={errors?.nationality?.message}
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
          <Controller
            name='state_of_origin'
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
                errorMessage={errors?.state_of_origin?.message}
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
          {watch().nationality === '100' && (
            <Controller
              name='lga'
              control={control}
              render={({ field }) => (
                <Select
                  labelPlacement='outside'
                  label='LGA'
                  isInvalid={!!errors.lga}
                  variant='bordered'
                  placeholder='LGA'
                  selectedKeys={field.value ? [field.value] : []}
                  {...field}
                  errorMessage={errors?.lga?.message}
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
          )}
        </div>
      </div>
      {/* <div className='flex justify-end'>
        <Button
          type='submit'
          color='primary'
          className='my-4 text-white rounded'
        >
          Next
        </Button>
      </div> */}
    </form>
  )
}
