import 'config/tailwind.css'

import { FunctionComponent } from 'react'
import { SWRConfig } from 'swr'

import { IntlProvider } from 'shared/providers/intl'
import { AppPropsWithLayout } from 'shared/types/next'

import { fetcher } from '../lib/swr'

const SourAnalytics: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps,
  router
}) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  const locale = router.locale ?? 'en'

  return (
    <SWRConfig
      value={{
        fetcher
      }}>
      <IntlProvider locale={locale} now={new Date()}>
        {getLayout(<Component {...pageProps} />)}
      </IntlProvider>
    </SWRConfig>
  )
}

export default SourAnalytics
