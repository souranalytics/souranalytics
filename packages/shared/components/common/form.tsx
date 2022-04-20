import { FormEventHandler, FunctionComponent, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string

  onSubmit?: FormEventHandler<HTMLFormElement>
}>

export const Form: FunctionComponent<Props> = ({
  children,
  className,
  onSubmit
}) => (
  <form
    className={className}
    onSubmit={(event) => {
      event.preventDefault()

      onSubmit?.(event)
    }}>
    {children}
  </form>
)
