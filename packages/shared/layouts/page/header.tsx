import { CloseIcon, MenuIcon } from '@iconicicons/react'
import compact from 'lodash/compact'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FunctionComponent, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Nullable } from 'shared/types'

import { Logo } from '../../components/common/logo'
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
            href: `${process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS}/workspaces`,
            label: t('workspaces')
          },
          {
            href: `${process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS}/account`,
            label: t('account')
          },
          {
            href: `${process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS}/api/auth/sign-out`,
            label: t('sign_out')
          }
        ]
      : [
          {
            href: compact([
              `${process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS}/sign-in`,
              site !== 'sour_analytics' &&
                `redirect=${encodeURI(
                  `${
                    site === 'pickle'
                      ? process.env.NEXT_PUBLIC_URL_PICKLE
                      : process.env.NEXT_PUBLIC_URL_GHERKIN
                  }/app`
                )}`
            ]).join('?'),
            label: t('sign_in')
          }
        ])
  ]

  return (
    <header className="container flex justify-between mx-auto">
      <Link href="/">
        <a className="flex items-center p-3">
          <Logo size={16} />

          <span className="ml-3 font-medium text-black">{t(site)}</span>
        </a>
      </Link>

      <button
        className={twMerge(
          'p-3 lg:hidden',
          visible && 'fixed top-0 right-0 z-10'
        )}
        onClick={() => setVisible(!visible)}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        className={twMerge(
          'fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-2xl lg:text-base bg-white bg-opacity-95 transition-opacity lg:static lg:flex-row lg:opacity-100 lg:pointer-events-auto',
          !visible && 'opacity-0 pointer-events-none'
        )}>
        <a className="p-3 lg:hidden">
          <Logo size={32} />
        </a>

        {links.map((link, index) => (
          <NavLink href={link.href} key={index}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
