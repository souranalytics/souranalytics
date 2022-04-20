import { FunctionComponent, MouseEventHandler, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren<{
  className?: string
  loading?: boolean

  onClick?: MouseEventHandler<HTMLButtonElement>
}>

export const Button: FunctionComponent<Props> = ({
  children,
  className,
  loading,
  onClick
}) => (
  <button
    className={twMerge(
      'bg-primary-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors hover:bg-primary-500 active:bg-primary-700 flex items-center justify-center',
      className
    )}
    onClick={onClick}>
    {children}

    {loading && (
      <div
        className="w-4 h-4 ml-2 border-2 border-white rounded-full animate-spin"
        style={{
          borderTopColor: 'transparent'
        }}
      />
    )}
  </button>
)
