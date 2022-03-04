import 'config/tailwind.css'

import { FunctionComponent } from 'react'

import { AppPropsWithLayout } from 'shared/types/next'

const Gherkin: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps
}) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default Gherkin
