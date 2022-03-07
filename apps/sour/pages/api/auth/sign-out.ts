import { NextApiHandler } from 'next'

import { cookie } from '../../../lib/cookie'

const handler: NextApiHandler = async (req, res) => {
  cookie.destroy(res)

  res.redirect(process.env.NEXT_PUBLIC_URL_SOUR)
}

export default handler
