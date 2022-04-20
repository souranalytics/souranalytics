import { FormHTMLAttributes, FunctionComponent, PropsWithChildren } from 'react'

type Props = PropsWithChildren<
  Pick<FormHTMLAttributes<HTMLFormElement>, 'className' | 'onSubmit'>
>

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
