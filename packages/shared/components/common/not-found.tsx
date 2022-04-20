import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

import { SourAnalyticsLogo } from '../logo/sour-analytics'

export const NotFound: FunctionComponent = () => {
  const t = useTranslations()

  return (
    <>
      <SourAnalyticsLogo className="w-24 h-24" />

      <h1 className="mt-6 text-4xl font-bold">{t('not_found')}</h1>

      <p className="mt-2 text-2xl font-medium text-neutral-600">
        {t('cant_find_page')}
      </p>
    </>
  )
}
