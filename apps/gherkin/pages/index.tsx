import { GetServerSideProps } from 'next'

import { fetchProfile } from 'shared/auth/auth'
import { Button } from 'shared/components/common/button'
import { PageLayout } from 'shared/layouts/page'
import { Nullable } from 'shared/types'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

type Props = {
  user: Nullable<Profile>
}

const Home: NextPageWithLayout<Props> = () => (
  <>
    <h1 className="text-4xl font-bold">Gherkin</h1>
    <p className="mt-2 text-2xl font-medium text-neutral-800">
      Plan your analytics approach
    </p>

    <Button className="mt-6">Get started</Button>
  </>
)

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-start justify-center"
    site="gherkin"
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
