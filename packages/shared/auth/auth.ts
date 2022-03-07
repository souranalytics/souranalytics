import axios from 'axios'

import { NextPageRequest } from '../types/next'
import { Profile } from '../types/profile'

export const fetchProfile = async (
  req?: NextPageRequest
): Promise<Profile | null> => {
  const {
    data: { user }
  } = await axios.get('/api/auth/profile', {
    baseURL: process.env.NEXT_PUBLIC_URL_SOUR,
    headers: {
      authorization: req?.cookies.token
    },
    withCredentials: true
  })

  return user
}
