import { FunctionComponent, InputHTMLAttributes } from 'react'

type Props = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'autoFocus'
  | 'className'
  | 'onChange'
  | 'placeholder'
  | 'required'
  | 'type'
  | 'value'
> & {
  hint?: string
  label?: string
}

export const Input: FunctionComponent<Props> = ({
  className,
  hint,
  label,
  ...props
}) => (
  <label className={className}>
    {label && (
      <div className="mb-2 text-sm font-medium text-neutral-600">{label}</div>
    )}

    <input
      {...props}
      className="w-full p-3 rounded-lg bg-neutral-100 outline-primary-600"
    />

    {hint && <div className="mt-2 text-xs text-neutral-600">{hint}</div>}
  </label>
)
