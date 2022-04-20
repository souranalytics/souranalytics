import { useCallback, useState } from 'react'

import { Exception } from '../../lib/exception'
import { fetcher } from '../../lib/swr'
import { CreateWorkspaceResponse } from '../../types/api/workspace'

type Data = {
  name: string
}

type Returns = {
  error?: Exception
  loading: boolean

  createWorkspace: (data: Data) => Promise<CreateWorkspaceResponse | void>
}

export const useCreateWorkspace = (): Returns => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Exception>()

  const createWorkspace: Returns['createWorkspace'] = useCallback(
    async (data) => {
      try {
        setLoading(true)

        return fetcher<CreateWorkspaceResponse>('/api/workspaces', {
          data,
          method: 'post'
        })
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return {
    createWorkspace,
    error,
    loading
  }
}
