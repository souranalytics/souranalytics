import { Button } from 'shared/components/button'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'

const Home: NextPageWithLayout = () => (
  <div>
    <h1 className="text-2xl font-bold">Sour Analytics</h1>

    <Button className="mt-6">Hello</Button>
  </div>
)

Home.getLayout = (page) => (
  <PageLayout title="Sour Analytics">{page}</PageLayout>
)

export default Home
