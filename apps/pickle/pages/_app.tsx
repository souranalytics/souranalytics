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

  return (
    <IntlProvider locale={router.locale}>
      {getLayout(<Component {...pageProps} />)}
    </IntlProvider>
  )
}

export default Pickle
