import { IncomingMessage } from 'http'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import { ReactElement } from 'react'

export type NextPageWithLayout<Props = void> = NextPage<Props> & {
  getLayout?: (page: ReactElement<Props>) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<unknown>
}

export type NextPageRequest = IncomingMessage & {
  cookies: NextApiRequestCookies
}
