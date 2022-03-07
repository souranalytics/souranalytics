import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/logo'

type Props = {
  className?: string
  title: string
}

export const AuthLayout: FunctionComponent<Props> = ({
  children,
  className,
  title
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
    <Head>
      <title>{title}</title>
    </Head>

    <header className="flex items-center justify-between p-6">
      <Link href="/">
        <a>
          <Logo size={32} />
        </a>
      </Link>
    </header>

    <div className={twMerge('p-6', className)}>{children}</div>
  </div>
)
