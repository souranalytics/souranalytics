import { FunctionComponent, MouseEventHandler, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren<{
  className?: string

  onClick?: MouseEventHandler<HTMLButtonElement>
}>

export const Button: FunctionComponent<Props> = ({
  children,
  className,
  onClick
}) => (
  <button
    className={twMerge(
      'bg-primary-600 text-white font-semibold p-3 rounded-md leading-none transition-colors hover:bg-primary-500 active:bg-primary-700',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)