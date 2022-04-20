import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from 'shared/components/common/button'
import { Form } from 'shared/components/common/form'
import { Input } from 'shared/components/common/input'
import { Message } from 'shared/components/common/message'
import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { useCreateWorkspace } from '../../hooks/workspaces/create'
import { authPage } from '../../lib/auth'

type Props = {
  user: Profile
}

const NewWorkspace: NextPageWithLayout<Props> = () => {
  const router = useRouter()
  const t = useTranslations()

  const { createWorkspace, error, loading } = useCreateWorkspace()

  const [name, setName] = useState('')

  return (
    <>
      <h1 className="text-4xl font-bold">{t('new_workspace')}</h1>

      {error && (
        <Message className="mt-6" type="error">
          {t(error.message)}
        </Message>
      )}

      <Form
        className="mt-6 lg:w-80"
        onSubmit={async () => {
          const workspace = await createWorkspace({
            name
          })

          if (workspace) {
            router.push('/workspaces')
          }
        }}>
        <Input
          hint={t('hint__workspace_name')}
          label={t('label__workspace_name')}
          onChange={setName}
          placeholder={t('name')}
          required
          type="text"
          value={name}
        />

        <Button className="mt-6" loading={loading}>
          {t('submit')}
        </Button>
      </Form>
    </>
  )
}

NewWorkspace.getLayout = (page) => (
  <PageLayout title="workspaces" user={page.props.user}>
    {page}
  </PageLayout>
)

export const getServerSideProps = authPage()

export default NewWorkspace
