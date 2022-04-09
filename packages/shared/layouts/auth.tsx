import { getYear } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/common/logo'

type Props = PropsWithChildren<{
  className?: string
  title: string
}>

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

    <footer className="p-6 text-sm text-neutral-600">
      <p>&#169; {getYear(new Date())} Sour Analytics</p>
    </footer>
  </div>
)
