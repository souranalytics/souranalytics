import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const Spinner: FunctionComponent<Props> = ({ className }) => (
  <div className={twMerge('w-12 h-12 spinner', className)} />
)
