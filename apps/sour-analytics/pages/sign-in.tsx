import { useTranslations } from 'next-intl'

import { Button } from 'shared/components/common/button'
import { AuthLayout } from 'shared/layouts/auth'
import { NextPageWithLayout } from 'shared/types/next'

const SignIn: NextPageWithLayout = () => {
  const t = useTranslations()

  return (
    <>
      <h1 className="text-2xl font-bold">{t('sign_in')}</h1>

      <Button
        className="w-full mt-6 bg-black hover:bg-black hover:bg-opacity-80"
        onClick={() => {
          window.location.href = '/api/auth/github'
        }}>
        {t('github')}
      </Button>
    </>
  )
}

SignIn.getLayout = (page) => <AuthLayout title="sign_in">{page}</AuthLayout>

export default SignIn
