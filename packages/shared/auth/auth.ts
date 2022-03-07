import axios, { AxiosRequestHeaders } from 'axios'

import { NextPageRequest } from '../types/next'
import { Profile } from '../types/profile'

export const fetchProfile = async (
  req?: NextPageRequest
): Promise<Profile | null> => {
  const headers: AxiosRequestHeaders = {}

  if (req?.cookies.token) {
    headers.authorization = req.cookies.token
  }

  const {
    data: { user }
  } = await axios.get('/api/auth/profile', {
    baseURL: process.env.NEXT_PUBLIC_URL_SOUR,
    headers,
    withCredentials: true
  })

  return user
}
