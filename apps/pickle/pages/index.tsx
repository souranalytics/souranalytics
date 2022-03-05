import { Button } from 'shared/components/button'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'

const Home: NextPageWithLayout = () => (
  <>
    <h1 className="text-4xl font-bold">Pickle</h1>

    <Button className="mt-6">Get started</Button>
  </>
)

Home.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-start justify-center"
    title="Pickle">
    {page}
  </PageLayout>
)

export default Home
