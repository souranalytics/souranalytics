import { GetServerSideProps } from 'next'
import { useTranslations } from 'next-intl'

import { fetchProfile } from 'shared/auth/auth'
import { Button } from 'shared/components/common/button'
import { PickleLogo } from 'shared/components/logo/pickle'
import { PageLayout } from 'shared/layouts/page'
import { Nullable } from 'shared/types'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

type Props = {
  user: Nullable<Profile>
}

const Home: NextPageWithLayout<Props> = () => {
  const t = useTranslations()

  return (
    <>
      <PickleLogo className="w-24 h-24" />

      <h1 className="mt-6 text-4xl font-bold">{t('pickle')}</h1>
      <p className="mt-2 text-2xl font-medium text-neutral-800">
        {t('pickle_tagline')}
      </p>

      <Button className="mt-6">{t('get_started')}</Button>
    </>
  )
}

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-center justify-center"
    site="pickle"
    user={page.props.user}>
    {page}
  </PageLayout>
)

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req
}) => {
  const user = await fetchProfile(req)

  return {
    props: {
      user
    }
  }
}

export default Home
