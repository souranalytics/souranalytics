import { getYear } from 'date-fns'
import compact from 'lodash/compact'
import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

import { Links, Site } from './index'
import { NavLink } from './link'

type Props = {
  site: Site
}

export const Footer: FunctionComponent<Props> = ({ site }) => {
  const t = useTranslations()

  const links: Array<Links> = compact([
    [
      {
        base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
        href: '/',
        label: t('sour_analytics')
      },
      {
        base: process.env.NEXT_PUBLIC_URL_PICKLE,
        href: '/',
        label: t('pickle')
      },
      {
        base: process.env.NEXT_PUBLIC_URL_GHERKIN,
        href: '/',
        label: t('gherkin')
      }
    ],
    site !== 'sour_analytics' && [
      {
        href: '/pricing',
        label: t('pricing')
      },
      {
        href: '/docs',
        label: t('docs')
      }
    ],
    [
      {
        base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
        href: '/account',
        label: t('account')
      },
      {
        base: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
        href: '/help',
        label: t('help')
      }
    ]
  ])

  return (
    <div className="border-t border-neutral-100 bg-neutral-50">
      <footer className="container flex flex-col justify-between p-6 mx-auto text-sm text-neutral-500 lg:flex-row lg:justify-between">
        <p>
          {t('copyright', {
            year: getYear(new Date())
          })}
        </p>

        <aside className="flex mt-4 lg:mt-0">
          {links.map((links, index) => (
            <nav className="flex flex-col ml-6 first:ml-0" key={index}>
              {links.map(({ base, href, label }, index) => (
                <NavLink
                  base={base}
                  className="mt-1 text-neutral-600 hover:text-black first:mt-0"
                  href={href}
                  key={index}>
                  {label}
                </NavLink>
              ))}
            </nav>
          ))}
        </aside>
      </footer>
    </div>
  )
}
