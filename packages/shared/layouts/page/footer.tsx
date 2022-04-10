import { getYear } from 'date-fns'
import compact from 'lodash/compact'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

import { Links, Site } from './index'

type Props = {
  site: Site
}

export const Footer: FunctionComponent<Props> = ({ site }) => {
  const t = useTranslations()

  const links: Array<Links> = compact([
    [
      {
        href: process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS,
        label: t('sour_analytics')
      },
      {
        href: process.env.NEXT_PUBLIC_URL_PICKLE,
        label: t('pickle')
      },
      {
        href: process.env.NEXT_PUBLIC_URL_GHERKIN,
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
        href: `${process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS}/account`,
        label: t('account')
      },
      {
        href: `${process.env.NEXT_PUBLIC_URL_SOUR_ANALYTICS}/help`,
        label: t('help')
      }
    ]
  ])

  return (
    <div className="bg-neutral-50">
      <footer className="flex flex-col p-6 text-sm text-neutral-500 lg:flex-row lg:justify-between">
        <p>
          {t('copyright', {
            year: getYear(new Date())
          })}
        </p>

        <aside className="flex mt-4 lg:mt-0">
          {links.map((links, index) => (
            <nav className="flex flex-col ml-6 first:ml-0" key={index}>
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a className="mt-1 text-neutral-600 hover:text-black first:mt-0">
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
