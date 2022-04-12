import { useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'

export const NotFound: FunctionComponent = () => {
  const t = useTranslations()

  return (
    <>
      <h1 className="text-4xl font-bold">{t('not_found')}</h1>

      <p className="mt-2 text-2xl font-medium text-neutral-600">
        {t('we_cant_find_the_page')}
      </p>
    </>
  )
}
