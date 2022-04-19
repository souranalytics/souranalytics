import { NextApiHandler } from 'next'

import { Nullable } from 'shared/types'
import { Profile } from 'shared/types/profile'

import { getUser } from '../../../lib/auth'

type Data = {
  user: Nullable<Profile>
}

const handler: NextApiHandler<Data> = async (req, res) => {
  const user = await getUser(req)

  res.json({
    user
  })
}

export default handler
