import Link from 'next/link'

import { Button } from 'shared/components/button'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'

const Home: NextPageWithLayout = () => (
  <>
    <h1 className="text-4xl font-bold">
      Sour
      <br />
      <span className="text-primary-300">Analytics</span>
    </h1>

    <Button className="mt-6">Get started</Button>

    <section className="flex flex-col w-full mt-12 lg:flex-row">
      <Link href={process.env.NEXT_PUBLIC_URL_PICKLE}>
        <a className="flex-1 text-white">
          <h2 className="text-2xl font-semibold text-primary-300">Pickle</h2>
          <p className="mt-2">Privacy and developer-first analytics</p>
        </a>
      </Link>

      <Link href={process.env.NEXT_PUBLIC_URL_GHERKIN}>
        <a className="flex-1 mt-6 text-white lg:mt-0 lg:ml-6">
          <h2 className="text-2xl font-semibold text-primary-300">Gherkin</h2>
          <p className="mt-2">Plan your analytics approach</p>
        </a>
      </Link>
    </section>
  </>
)

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-start justify-center"
    title="Sour Analytics">
    {page}
  </PageLayout>
)

export default Home
