import { ServerResponse } from 'http'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { CookieSerializeOptions } from 'next/dist/server/web/types'
import nookies from 'nookies'

class Cookie {
  private options: CookieSerializeOptions = {
    domain: process.env.COOKIE_DOMAIN,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  }

  get(req: NextApiRequest | NextPageContext['req']): string | null {
    const { token } = nookies.get(
      {
        req
      },
      this.options
    )

    if (token) {
      return token.slice(7)
    }

    return null
  }

  set(res: NextApiResponse, token: string): void {
    nookies.set(
      {
        res
      },
      'token',
      `Bearer ${token}`,
      this.options
    )
  }

  destroy(res: ServerResponse): void {
    nookies.destroy(
      {
        res
      },
      'token',
      this.options
    )
  }
}

export const cookie = new Cookie()
