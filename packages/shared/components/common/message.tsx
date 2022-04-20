import { FunctionComponent, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from './icon'

type Props = PropsWithChildren<{
  className?: string
  type?: 'message' | 'error' | 'success'
}>

export const Message: FunctionComponent<Props> = ({
  children,
  className,
  type = 'message'
}) => (
  <div
    className={twMerge(
      'flex items-center p-3 rounded-lg',
      className,
      type === 'success'
        ? 'bg-emerald-300'
        : type === 'error'
        ? 'bg-rose-300'
        : 'bg-sky-300'
    )}>
    <Icon name={type} />

    <div className="flex-1 ml-3">{children}</div>
  </div>
)
