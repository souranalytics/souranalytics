import compact from 'lodash/compact'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FunctionComponent, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from '../../components/common/icon'
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

  const links: Links = compact([
    ...(site !== 'sour_analytics'
      ? [
          {
            href: '/pricing',
            label: t('pricing')
          },
          {
            href: '/docs',
            label: t('docs')
          },
          user && {
            href: '/dashboard',
            label: t('dashboard')
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
  ])

  const Logo =
    site === 'pickle'
      ? PickleLogo
      : site === 'gherkin'
      ? GherkinLogo
      : SourAnalyticsLogo

  return (
    <div className="border-b border-neutral-200">
      <header className="container flex items-center justify-between mx-auto lg:border-x lg:border-neutral-200">
        <Link href="/">
          <a className="flex items-center p-4">
            <Logo className="w-12 h-12" />

            <span className="ml-3 text-xl font-semibold text-black">
              {t(site)}
            </span>
          </a>
        </Link>

        <button
          className={twMerge(
            'p-7 lg:hidden',
            visible && 'fixed top-0 right-0 z-20'
          )}
          onClick={() => setVisible(!visible)}>
          <Icon name={visible ? 'close' : 'menu'} />
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
              className="flex items-center p-4 mt-4 font-medium leading-none rounded-full lg:p-3 lg:mt-0 lg:mr-3 hover:text-primary-600 text-neutral-600"
              classNameActive="bg-primary-600 text-white hover:text-white hover:bg-primary-500"
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
