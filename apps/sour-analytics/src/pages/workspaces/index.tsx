import Link from 'next/link'
import { useTranslations } from 'next-intl'
import useSwr from 'swr'

import { Icon } from 'shared/components/common/icon'
import { Message } from 'shared/components/common/message'
import { Spinner } from 'shared/components/common/spinner'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { WorkspaceCard } from '../../components/workspaces/card'
import { authPage } from '../../lib/auth'
import { Exception } from '../../lib/exception'
import { WorkspacesResponse } from '../../types/api/workspace'

type Props = {
  user: Profile
}

const Workspaces: NextPageWithLayout<Props> = () => {
  const t = useTranslations()

  const { data, error, isValidating } = useSwr<WorkspacesResponse, Exception>(
    '/api/workspaces'
  )

  return (
    <>
      <div className="flex items-center justify-between lg:justify-start">
        <h1 className="text-4xl font-bold">{t('workspaces')}</h1>

        <Link href="/workspaces/new">
          <a className="p-2 ml-3 -mr-2 text-black lg:mr-0">
            <Icon name="create" />
          </a>
        </Link>
      </div>

      {error && (
        <Message className="mt-6" type="error">
          {t(error.message)}
        </Message>
      )}

      {data?.workspaces ? (
        <section className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {data.workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.id} workspace={workspace} />
          ))}
        </section>
      ) : (
        <Spinner className="mx-auto mt-6" />
      )}

      {data?.workspaces && isValidating && (
        <Spinner className="w-6 h-6 mx-auto mt-6" />
      )}
    </>
  )
}

Workspaces.getLayout = (page) => (
  <PageLayout title="workspaces" user={page.props.user}>
    {page}
  </PageLayout>
)

export const getServerSideProps = authPage()

export default Workspaces
