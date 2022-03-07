import { User } from '@prisma/sour'
import { NextApiHandler } from 'next'

import { cookie } from '../../../lib/cookie'
import { jwt } from '../../../lib/jwt'
import { prisma } from '../../../lib/prisma'

type Data = {
  user: User
}

const handler: NextApiHandler<Data> = async (req, res) => {
  const token = cookie.get(req)

  const { email } = jwt.verify(token)

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  res.json({
    user
  })
}

export default handler
