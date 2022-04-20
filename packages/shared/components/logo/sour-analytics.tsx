import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const SourAnalyticsLogo: FunctionComponent<Props> = ({ className }) => (
  <svg className={twMerge('w-12 h-12', className)} viewBox="0 0 48 48">
    <circle cx="24" cy="25.3" fill="#f5bc00" r="18.3" />
    <path
      d="m36.4 8c-3.5-2-7.5-2.5-11.4-1.7l1-5.3h-4l1.2 6 1 3.2c1.3 3.2 3.5 5.8 6.5 7.6 4 2.3 8.8 2.6 13.2 1.2-.9-4.6-3.5-8.6-7.5-11z"
      fill="#3ddab4"
    />
    <path
      d="m41.4 19.6c-2.4-7.3-9.3-12.6-17.4-12.6-.3 0-.5 0-.8 0 1 4.5 3.5 8.5 7.5 10.8 3.3 1.9 7 2.4 10.7 1.8z"
      fill="#00b569"
    />
  </svg>
)
