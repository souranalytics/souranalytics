import { getYear } from 'date-fns'
import compact from 'lodash/compact'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FunctionComponent, PropsWithChildren } from 'react'

import { SourAnalyticsLogo } from '../components/logo/sour-analytics'

type Props = PropsWithChildren<{
  title: keyof IntlMessages
}>

export const AuthLayout: FunctionComponent<Props> = ({ children, title }) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mx-auto bg-neutral-100">
      <Head>
        <title>
          {compact([title, 'sour_analytics'])
            .map((key) => t(key))
            .join(' × ')}
        </title>{' '}
      </Head>

      <header className="flex items-center justify-between">
        <Link href="/">
          <a>
            <SourAnalyticsLogo className="w-16 h-16" />
          </a>
        </Link>
      </header>

      <div className="flex flex-col items-center w-full p-6 my-6 bg-white rounded-lg shadow-sm lg:w-80">
        {children}
      </div>

      <footer className="text-sm text-neutral-600">
        <p>
          {t('copyright_short', {
            year: getYear(new Date())
          })}
        </p>
      </footer>
    </div>
  )
}
