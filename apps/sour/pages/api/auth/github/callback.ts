import { NextApiHandler } from 'next'

import { cookie } from '../../../../lib/cookie'
import { github } from '../../../../lib/github'
import { jwt } from '../../../../lib/jwt'
import { prisma } from '../../../../lib/prisma'

const handler: NextApiHandler = async (req, res) => {
  const accessToken = await github.fetchAccessToken(String(req.query.code))

  const profile = await github.fetchProfile(accessToken)
  const email = await github.fetchEmail(accessToken)

  const user = await prisma.user.upsert({
    create: {
      ...profile,
      email
    },
    update: {},
    where: {
      id: profile.id
    }
  })

  const token = jwt.sign(user)

  cookie.set(res, token)

  res.redirect('/app')
}

export default handler
