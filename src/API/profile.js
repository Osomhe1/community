// import toast from 'react-hot-toast'
import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const getProfile = async (data) => {
  // console.log(userData)
  console.log('next', data)
  console.log('next id', data?.COMPANY_ID)
  console.log('next staff', data?.STAFF_ID)

  const json = {
    company_id: data?.COMPANY_ID,
    staff_id: data?.STAFF_ID,
  }

  try {
    const res = await API.post(`profile/get_profile`, json)
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export const useGetProfile = ({ user }) => {
  const json = {
    company_id: user?.COMPANY_ID,
    staff_id: user?.STAFF_ID,
  }
  return useQuery({
    queryKey: ['get_profile'],
    queryFn: async () => {
      const res = await API.post(`/profile/get_profile`, json)
      return res?.data
    },
  })
}

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.post(`/profile/update_profile`, data)
    },
  })
}

export const useGetCountry = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['country'],
    queryFn: async () => {
      const res = await API.post(`/package/get_countries`)
      return res?.data?.data
    },
  })

  return { data, isLoading, isError }
}

export const useGetState = (country_id) => {
  //   console.log(country_id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['state', country_id],
    queryFn: async () => {
      const res = await API.get(`/package/get_state/${country_id}`)
      return res?.data?.data
    },
    enabled: !!country_id,
  })
  return { data, isLoading, isError }
}

export const useGetLga = (state_id) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['lga', state_id],
    queryFn: async () => {
      const res = await API.get(`/package/get_lga/${state_id}`)
      return res?.data?.data
    },
    enabled: !!state_id,
  })

  return { data, isLoading, isError }
}

export const useGetTitle = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['title'],
    queryFn: async () => {
      const res = await API.get(`/package/get_title`)
      return res?.data?.data
    },
  })
  return { data, isLoading, isError }
}

export const useGetGender = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['gender'],
    queryFn: async () => {
      const res = await API.get(`/package/get_gender`)
      return res?.data?.data
    },
  })

  return { data, isLoading, isError }
}

export const useGetMaritalStatus = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['marital_status'],
    queryFn: async () => {
      const res = await API.get(`/package/get_marital_status`)
      return res?.data?.data
    },
  })

  return { data, isLoading, isError }
}
