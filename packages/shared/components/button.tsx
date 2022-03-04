import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const Button: FunctionComponent<Props> = ({ children, className }) => (
  <button
    className={twMerge(
      'p-3 leading-none text-white transition-colors border-gray-300 rounded-md shadow-sm hover:bg-primary-500 active:bg-primary-700 bg-primary-600 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50',
      className
    )}>
    {children}
  </button>
)
