import { NotFound } from 'shared/components/common/not-found'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'

const Error: NextPageWithLayout = () => <NotFound />

Error.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-start justify-center"
    site="pickle"
    title="not_found">
    {page}
  </PageLayout>
)

export default Error
