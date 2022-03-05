import { getYear } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/logo'

type Props = {
  className?: string
  title: string
}

export const PageLayout: FunctionComponent<Props> = ({
  children,
  className,
  title
}) => (
  <div className="flex flex-col min-h-screen p-6 mx-auto max-w-7xl">
    <Head>
      <title>{title}</title>
    </Head>

    <header className="flex items-center justify-between">
      <Link href="/">
        <a>
          <Logo size={32} />
        </a>
      </Link>

      <nav className="flex">
        <Link href="/pricing">
          <a className="font-medium text-white hover:text-primary-400">
            Pricing
          </a>
        </Link>

        <Link href="/docs">
          <a className="ml-3 font-medium text-white hover:text-primary-400">
            Docs
          </a>
        </Link>

        <Link href="/sign-in">
          <a className="ml-3 font-medium text-white hover:text-primary-400">
            Sign in
          </a>
        </Link>
      </nav>
    </header>

    <div className={twMerge('flex-1 my-6', className)}>{children}</div>

    <footer className="text-xs text-gray-400">
      Copyright &#169; {getYear(new Date())} Sour Analytics. All rights
      reserved.
    </footer>
  </div>
)
