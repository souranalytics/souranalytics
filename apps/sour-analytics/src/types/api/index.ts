import { NextApiRequest } from 'next'

import { Profile } from 'shared/types/profile'

export type ApiRequest = NextApiRequest & {
  user: Profile
}
