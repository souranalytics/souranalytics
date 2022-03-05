import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const Button: FunctionComponent<Props> = ({ children, className }) => (
  <button
    className={twMerge(
      'bg-primary-400 text-black font-semibold p-3 rounded-md leading-none transition-colors hover:bg-primary-300 focus:ring focus:ring-primary-400 focus:ring-opacity-50',
      className
    )}>
    {children}
  </button>
)
