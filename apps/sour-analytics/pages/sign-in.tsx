import { Button } from 'shared/components/common/button'
import { AuthLayout } from 'shared/layouts/auth'
import { NextPageWithLayout } from 'shared/types/next'

const SignIn: NextPageWithLayout = () => (
  <>
    <h1 className="text-2xl font-bold">Sign in</h1>

    <Button
      className="w-full mt-6 bg-black"
      onClick={() => {
        window.location.href = '/api/auth/github'
      }}>
      GitHub
    </Button>
  </>
)

SignIn.getLayout = (page) => (
  <AuthLayout
    className="flex flex-col items-center w-full bg-white rounded-md shadow-sm lg:w-80"
    title="Sign in: Sour Analytics">
    {page}
  </AuthLayout>
)

export default SignIn
