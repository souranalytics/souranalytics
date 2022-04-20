import { GetServerSideProps } from 'next'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from 'shared/components/common/button'
import { AuthLayout } from 'shared/layouts/auth'
import { NextPageWithLayout } from 'shared/types/next'

import { getUser } from '../lib/auth'

const SignIn: NextPageWithLayout = () => {
  const t = useTranslations()

  const [loading, setLoading] = useState(false)

  return (
    <>
      <h1 className="text-2xl font-bold">{t('sign_in')}</h1>

      <Button
        className="w-full mt-6 bg-black hover:bg-black hover:bg-opacity-80"
        loading={loading}
        onClick={() => {
          if (loading) {
            return
          }

          setLoading(true)

          window.location.href = '/api/auth/github'
        }}>
        {t('github')}
      </Button>
    </>
  )
}

SignIn.getLayout = (page) => <AuthLayout title="sign_in">{page}</AuthLayout>

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const user = await getUser(req)

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default SignIn
