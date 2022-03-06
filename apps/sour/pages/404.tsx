import { NotFound } from 'shared/components/not-found'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'

const Error: NextPageWithLayout = () => <NotFound />

Error.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-start justify-center"
    title="Not found">
    {page}
  </PageLayout>
)

export default Error
