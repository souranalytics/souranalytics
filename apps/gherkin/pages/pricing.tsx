import { Pricing } from '@prisma/gherkin'
import { GetServerSideProps } from 'next'

import { fetchProfile } from 'shared/auth/auth'
import { PricingCard } from 'shared/components/pricing/gherkin'
import { PageLayout } from 'shared/layouts/page'
import { Nullable } from 'shared/types'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { prisma } from '../lib/prisma'

type Props = {
  plans: Array<Pricing>
  user: Nullable<Profile>
}

const Home: NextPageWithLayout<Props> = ({ plans }) => (
  <>
    <h2 className="text-xl font-semibold text-primary-600">Gherkin</h2>
    <h1 className="text-4xl font-bold">Pricing</h1>

    <div className="flex flex-col items-center justify-center w-full mt-12 lg:w-auto lg:flex-row">
      {plans.map((plan) => (
        <PricingCard
          className="mt-6 lg:mt-0 lg:ml-6 lg:first:ml-0 first:mt-0"
          item={plan}
          key={plan.id}
        />
      ))}
    </div>
  </>
)

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-center justify-center"
    site="gherkin"
    title="pricing"
    user={page.props.user}>
    {page}
  </PageLayout>
)

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req
}) => {
  const user = await fetchProfile(req)

  const plans = await prisma.pricing.findMany({
    where: {
      visible: true
    }
  })

  return {
    props: {
      plans,
      user
    }
  }
}

export default Home
