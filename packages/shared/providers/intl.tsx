import { NextIntlProvider } from 'next-intl'
import { FunctionComponent, PropsWithChildren } from 'react'

import en from '../locales/en.json'

type Messages = typeof en

const locales: Record<string, Messages> = {
  en
}

type Props = PropsWithChildren<{
  locale: string
  now: Date
}>

export const IntlProvider: FunctionComponent<Props> = ({
  children,
  locale,
  now
}) => (
  <NextIntlProvider
    locale={locale}
    messages={locales[locale]}
    now={now}
    timeZone="Europe/Berlin">
    {children}
  </NextIntlProvider>
)
