import { getYear } from 'date-fns'
import compact from 'lodash/compact'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/logo'
import { FooterLink } from '../types/components/footer'

export type PageSite = 'sour' | 'pickle' | 'gherkin'

type Props = {
  className?: string
  site?: PageSite
  title: string
}

export const PageLayout: FunctionComponent<Props> = ({
  children,
  className,
  site = 'sour',
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
      }
    ],
    [
      {
        href: `${process.env.NEXT_PUBLIC_URL_SOUR}/account`,
        label: 'Account'
      },
      {
        href: `${process.env.NEXT_PUBLIC_URL_SOUR}/help`,
        label: 'Help'
      }
    ]
  ]

  const signInLink = compact([
    `${process.env.NEXT_PUBLIC_URL_SOUR}/sign-in`,
    site !== 'sour' &&
      `redirect=${encodeURI(
        `${
          site === 'pickle'
            ? process.env.NEXT_PUBLIC_URL_PICKLE
            : process.env.NEXT_PUBLIC_URL_GHERKIN
        }/app`
      )}`
  ]).join('?')

  return (
    <div className="flex flex-col min-h-screen mx-auto bg-white shadow-sm max-w-7xl">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="flex items-center justify-between p-6">
        <Link href="/">
          <a>
            <Logo size={32} />
          </a>
        </Link>

        <nav className="flex">
          <Link href="/pricing">
            <a className="font-medium text-black hover:text-primary-600">
              Pricing
            </a>
          </Link>

          <Link href="/docs">
            <a className="ml-3 font-medium text-black hover:text-primary-600">
              Docs
            </a>
          </Link>

          <Link href={signInLink}>
            <a className="ml-3 font-medium text-black hover:text-primary-600">
              Sign in
            </a>
          </Link>
        </nav>
      </header>

      <div
        className={twMerge(
          'flex-1 border-y border-neutral-200 p-6',
          className
        )}>
        {children}
      </div>

      <footer className="flex flex-col p-6 text-sm text-neutral-500 lg:flex-row lg:justify-between">
        <p>
          Copyright &#169; {getYear(new Date())} Sour Analytics. All rights
          reserved.
        </p>

        <aside className="flex mt-4 lg:mt-0">
          {footerLinks.map((links, index) => (
            <nav className="flex flex-col ml-6 first:ml-0" key={index}>
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a className="mt-1 text-neutral-600 hover:text-primary-600 first:mt-0">
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
