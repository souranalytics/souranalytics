import { CloseIcon, MenuIcon } from '@iconicicons/react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FunctionComponent, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { GherkinLogo } from '../../components/logo/gherkin'
import { PickleLogo } from '../../components/logo/pickle'
import { SourAnalyticsLogo } from '../../components/logo/sour-analytics'
import { useUrlChange } from '../../hooks/utils/url-change'
import { Nullable } from '../../types'
import { Profile } from '../../types/profile'
import { Links, Site } from './index'
import { NavLink } from './link'

type Props = {
  site: Site
  user?: Nullable<Profile>
}

export const Header: FunctionComponent<Props> = ({ site, user }) => {
  const t = useTranslations()

  const [visible, setVisible] = useState(false)

  useUrlChange(() => setVisible(false))

  const links: Links = [
    ...(site !== 'sour_analytics'
      ? [
          {
            href: '/pricing',
            label: t('pricing')
          },
          {
            href: '/docs',
            label: t('docs')
          }
        ]
      : []),
    ...(user
      ? [
          {
            base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
            href: '/workspaces',
            label: t('workspaces')
          },
          {
            base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
            href: '/account',
            label: t('account')
          },
          {
            base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
            href: '/api/auth/sign-out',
            label: t('sign_out')
          }
        ]
      : [
          {
            base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
            href: '/sign-in',
            label: t('sign_in')
          }
        ])
  ]

  const Logo =
    site === 'pickle'
      ? PickleLogo
      : site === 'gherkin'
      ? GherkinLogo
      : SourAnalyticsLogo

  return (
    <div className="border-b border-neutral-100">
      <header className="container flex justify-between mx-auto">
        <Link href="/">
          <a className="flex items-center p-3">
            <Logo className="w-6 h-6" />

            <span className="ml-3 text-lg font-semibold text-black">
              {t(site)}
            </span>
          </a>
        </Link>

        <button
          className={twMerge(
            'p-4 lg:hidden',
            visible && 'fixed top-0 right-0 z-20'
          )}
          onClick={() => setVisible(!visible)}>
          {visible ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          className={twMerge(
            'fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-2xl lg:text-base bg-white bg-opacity-95 transition-opacity z-10 lg:static lg:flex-row lg:opacity-100 lg:pointer-events-auto',
            !visible && 'opacity-0 pointer-events-none'
          )}>
          <Link href="/">
            <a className="p-3 lg:hidden">
              <Logo className="w-16 h-16" />
            </a>
          </Link>

          {links.map(({ base, href, label }, index) => (
            <NavLink
              base={base}
              className="flex items-center p-4 font-medium leading-none hover:text-primary-600 text-neutral-600"
              classNameActive="bg-primary-600 lg:p-2 m-2 rounded-lg lg:rounded-md text-white hover:text-white hover:bg-primary-800"
              href={href}
              key={index}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  )
}
