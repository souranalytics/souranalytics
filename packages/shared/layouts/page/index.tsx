import compact from 'lodash/compact'
import Head from 'next/head'
import { useTranslations } from 'next-intl'
import { FunctionComponent, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

import { Profile } from '../../types/profile'
import { Footer } from './footer'
import { Header } from './header'

export type Links = Array<{
  href: string
  label: string
}>

export type Site = 'sour_analytics' | 'pickle' | 'gherkin'

type Props = PropsWithChildren<{
  className?: string
  site?: Site
  title?: string
  user?: Profile
}>

export const PageLayout: FunctionComponent<Props> = ({
  children,
  className,
  site = 'sour_analytics',
  title,
  user
}) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>
          {compact([title, site])
            .map((key) => t(key))
            .join(' × ')}
        </title>
      </Head>

      <Header site={site} user={user} />

      <div className={twMerge('flex-1', className)}>{children}</div>

      <Footer site={site} />
    </div>
  )
}
