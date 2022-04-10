import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { FunctionComponent, PropsWithChildren } from 'react'

import en from '../locales/en.json'

const locales: Record<string, AbstractIntlMessages> = {
  en
}

type Props = PropsWithChildren<{
  locale: string
}>

export const IntlProvider: FunctionComponent<Props> = ({
  children,
  locale
}) => (
  <NextIntlProvider locale={locale} messages={locales[locale]}>
    {children}
  </NextIntlProvider>
)
