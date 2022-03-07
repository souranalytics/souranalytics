import { NextApiHandler } from 'next'

import { Profile } from 'shared/types/profile'

import { getUser } from '../../../lib/auth'

type Data = {
  user: Profile
}

const handler: NextApiHandler<Data> = async (req, res) => {
  const user = await getUser(req)

  res.json({
    user
  })
}

export default handler
