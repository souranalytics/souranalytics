import 'config/tailwind.css'

import { FunctionComponent } from 'react'

import { IntlProvider } from 'shared/providers/intl'
import { AppPropsWithLayout } from 'shared/types/next'

const Pickle: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps,
  router
}) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  const locale = router.locale ?? 'en'

  return (
    <IntlProvider locale={locale} now={new Date()}>
      {getLayout(<Component {...pageProps} />)}
    </IntlProvider>
  )
}

export default Pickle
