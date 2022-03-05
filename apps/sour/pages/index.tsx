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
