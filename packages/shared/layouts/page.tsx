import Head from 'next/head'
import { FunctionComponent } from 'react'

type Props = {
  title: string
}

export const PageLayout: FunctionComponent<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <div className="flex flex-col min-h-screen p-6">{children}</div>
  </>
)
