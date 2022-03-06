import { getYear } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/logo'
import { FooterLink } from '../types/components/footer'

type Props = {
  className?: string
  title: string
}

export const PageLayout: FunctionComponent<Props> = ({
  children,
  className,
  title
}) => {
  const footerLinks: Array<Array<FooterLink>> = [
    [
      {
        href: process.env.NEXT_PUBLIC_URL_PICKLE,
        label: 'Pickle'
      },
      {
        href: process.env.NEXT_PUBLIC_URL_GHERKIN,
        label: 'Gherkin'
      }
    ],
    [
      {
        href: '/pricing',
        label: 'Pricing'
      },
      {
        href: '/docs',
        label: 'Docs'
      },
      {
        href: '/help',
        label: 'Help'
      }
    ]
  ]

  return (
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

      <div className={twMerge('flex-1 my-12', className)}>{children}</div>

      <footer className="flex flex-col text-sm text-gray-400 lg:flex-row lg:justify-between">
        <p>
          Copyright &#169; {getYear(new Date())} Sour Analytics. All rights
          reserved.
        </p>

        <aside className="flex mt-4 lg:mt-0">
          {footerLinks.map((links, index) => (
            <nav className="flex flex-col ml-6 first:ml-0" key={index}>
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a className="mt-1 text-gray-300 hover:text-primary-300 first:mt-0">
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>
          ))}
        </aside>
      </footer>
    </div>
  )
}
