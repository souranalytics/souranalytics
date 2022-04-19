import { GetServerSideProps } from 'next'
import { useTranslations } from 'next-intl'

import { Button } from 'shared/components/common/button'
import { SourAnalyticsLogo } from 'shared/components/logo/sour-analytics'
import { PageLayout } from 'shared/layouts/page'
import { Nullable } from 'shared/types'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { getUser } from '../lib/auth'

type Props = {
  user: Nullable<Profile>
}

const Home: NextPageWithLayout<Props> = () => {
  const t = useTranslations()

  return (
    <>
      <SourAnalyticsLogo className="w-24 h-24" />

      <h1 className="mt-6 text-4xl font-bold">{t('sour_analytics')}</h1>

      <Button className="mt-6">{t('get_started')}</Button>
    </>
  )
}

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-center justify-center"
    user={page.props.user}>
    {page}
  </PageLayout>
)

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req
}) => {
  const user = await getUser(req)

  return {
    props: {
      user
    }
  }
}

export default Home
