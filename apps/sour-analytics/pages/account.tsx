import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { PageLayout } from 'shared/layouts/page'
import { NextPageWithLayout } from 'shared/types/next'
import { Profile } from 'shared/types/profile'

import { getUser } from '../lib/auth'

type Props = {
  user: Profile
}

const Account: NextPageWithLayout<Props> = ({ user }) => (
  <>
    <Image
      alt={user.name}
      className="rounded-full bg-primary-200"
      height={128}
      src={user.avatar}
      unoptimized
      width={128}
    />

    <h1 className="mt-4 text-4xl font-bold">{user.name}</h1>
    <p className="mt-2 font-medium text-neutral-600">{user.email}</p>
  </>
)

Account.getLayout = (page) => (
  <PageLayout
    className="flex flex-col items-center justify-center"
    title="Account: Sour Analytics"
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

export default Account
