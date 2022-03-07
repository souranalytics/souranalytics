import { User } from '@prisma/sour-analytics'
import { sign, verify } from 'jsonwebtoken'

import { AuthToken } from '../types/auth'

class Jwt {
  sign({ email, id }: User): string {
    return sign(
      {
        email,
        id
      },
      process.env.TOKEN_SECRET
    )
  }

  verify(token: string): AuthToken {
    return verify(token, process.env.TOKEN_SECRET) as AuthToken
  }
}

export const jwt = new Jwt()
