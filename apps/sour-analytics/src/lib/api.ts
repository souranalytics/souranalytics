import { NextApiRequest, NextApiResponse } from 'next'
import { Options } from 'next-connect'
import { ZodObject, ZodRawShape, ZodTypeAny } from 'zod'

import { ApiRequest } from '../types/api'
import { getUser } from './auth'
import { Exception } from './exception'

export const options: Options<NextApiRequest, NextApiResponse> = {
  onError(error: Exception, req, res) {
    res.status(error.code ?? 500).json({
      error: error.message
    })
  }
}

export const auth = async (
  req: ApiRequest,
  res: NextApiResponse,
  next: (error?: Exception) => void
) => {
  const user = await getUser(req)

  if (!user) {
    return next(new Exception(401, 'error__need_auth'))
  }

  req.user = user

  next()
}

export const validateData = <T>(
  schema: ZodObject<ZodRawShape, 'strip', ZodTypeAny, T>,
  data: unknown
): T => {
  const result = schema.safeParse(data)

  if (!result.success) {
    throw new Exception(400, 'error__input_validation')
  }

  return result.data
}
