import { NextApiHandler } from 'next'

import { cookie } from '../../../../lib/cookie'
import { github } from '../../../../lib/github'
import { jwt } from '../../../../lib/jwt'
import { prisma } from '../../../../lib/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const accessToken = await github.fetchAccessToken(String(req.query.code))

    const email = await github.fetchEmail(accessToken)

    const { avatar, id, name } = await github.fetchProfile(accessToken)

    const user = await prisma.user.upsert({
      create: {
        avatar,
        email,
        githubId: String(id),
        name
      },
      update: {},
      where: {
        email
      }
    })

    const token = jwt.sign(user)

    cookie.set(res, token)
  } catch {
    //
  }

  res.redirect('/')
}

export default handler
