import { useCallback, useEffect, useState } from 'react'

import { fetchProfile } from '../auth/auth'
import { Profile } from '../types/profile'

type Returns = {
  error?: string
  loading: boolean
  user?: Profile

  refetch: () => void
}

export const useProfile = (): Returns => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [user, setUser] = useState<Profile>()

  const refetch = useCallback(async () => {
    try {
      setLoading(true)

      const user = await fetchProfile()

      setUser(user)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return {
    error,
    loading,
    refetch,
    user
  }
}
