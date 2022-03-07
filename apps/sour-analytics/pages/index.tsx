import { PieChartIcon, RowsIcon } from '@iconicicons/react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { Button } from 'shared/components/common/button'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { getUser } from '../lib/auth'

type Props = {
  user: Profile
}

const Home: NextPageWithLayout<Props> = () => (
  <>
    <h1 className="text-4xl font-bold">
      Sour
      <br />
      <span className="text-primary-600">Analytics</span>
    </h1>

    <Button className="mt-6">Get started</Button>

    <section className="flex flex-col w-full mt-24 lg:flex-row">
      <Link href={process.env.NEXT_PUBLIC_URL_PICKLE}>
        <a className="flex items-center flex-1 p-3 transition-shadow rounded-md bg-primary-50 hover:ring-2 hover:ring-primary-600">
          <PieChartIcon className="w-12 h-12 text-black" />

          <div className="flex-1 ml-3">
            <h2 className="text-2xl font-semibold text-primary-600">Pickle</h2>
            <p className="text-neutral-600">
              Privacy and developer-first analytics
            </p>
          </div>
        </a>
      </Link>

      <Link href={process.env.NEXT_PUBLIC_URL_GHERKIN}>
        <a className="flex items-center flex-1 p-3 mt-6 transition-shadow rounded-md bg-primary-50 hover:ring-2 hover:ring-primary-600 lg:mt-0 lg:ml-6">
          <RowsIcon className="w-12 h-12 text-black" />

          <div className="flex-1 ml-3">
            <h2 className="text-2xl font-semibold text-primary-600">Gherkin</h2>
            <p className="text-neutral-600">Plan your analytics approach</p>
          </div>
        </a>
      </Link>
    </section>
  </>
)

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-start justify-center"
    title="Sour Analytics"
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
