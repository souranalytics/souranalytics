import { getYear } from 'date-fns'
import compact from 'lodash/compact'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/logo'
import { Profile } from '../types/profile'

type Links = Array<{
  href: string
  label: string
}>

type Site = 'sour-analytics' | 'pickle' | 'gherkin'

type Props = {
  className?: string
  site?: Site
  title: string
  user?: Profile
}

export const PageLayout: FunctionComponent<Props> = ({
  children,
  className,
  site = 'sour-analytics',
  title,
  user
}) => {
  const headerLinks: Links = [
    ...(site !== 'sour-analytics'
      ? [
          {
            href: '/pricing',
            label: 'Pricing'
          },
          {
            href: '/docs',
            label: 'Docs'
          }
        ]
      : []),
    ...(user
      ? [
          {
            href: `${process.env.NEXT_PUBLIC_URL_SOUR}/account`,
            label: 'Account'
          },
          {
            href: `${process.env.NEXT_PUBLIC_URL_SOUR}/api/auth/sign-out`,
            label: 'Sign out'
          }
        ]
      : [
          {
            href: compact([
              `${process.env.NEXT_PUBLIC_URL_SOUR}/sign-in`,
              site !== 'sour-analytics' &&
                `redirect=${encodeURI(
                  `${
                    site === 'pickle'
                      ? process.env.NEXT_PUBLIC_URL_PICKLE
                      : process.env.NEXT_PUBLIC_URL_GHERKIN
                  }/app`
                )}`
            ]).join('?'),
            label: 'Sign in'
          }
        ])
  ]

  const footerLinks: Array<Links> = [
    [
      {
        href: process.env.NEXT_PUBLIC_URL_SOUR,
        label: 'Sour Analytics'
      },
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

  return (
    <div className="flex flex-col min-h-screen mx-auto bg-white shadow-sm border-neural-200 lg:border-x max-w-7xl">
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
          {headerLinks.map((link, index) => (
            <NavLink href={link.href} key={index}>
              {link.label}
            </NavLink>
          ))}
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

type NavLinkProps = {
  href: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, href }) => (
  <Link href={href}>
    <a className="ml-3 font-medium text-black first:ml-0 hover:text-primary-600">
      {children}
    </a>
  </Link>
)
