import { NextApiRequest } from 'next'

import { NextPageRequest } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { cookie } from './cookie'
import { jwt } from './jwt'
import { prisma } from './prisma'

export const getUser = async (
  req: NextApiRequest | NextPageRequest
): Promise<Profile | null> => {
  const token = getToken(req)

  if (!token) {
    return null
  }

  const { email } = jwt.verify(token)

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return null
  }

  return {
    ...user,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString()
  }
}

const getToken = (req: NextApiRequest | NextPageRequest): string | void => {
  const tokenFromCookie = cookie.get(req)

  if (tokenFromCookie) {
    return tokenFromCookie
  }

  if (req.headers.authorization) {
    return req.headers.authorization.slice(7)
  }
}
