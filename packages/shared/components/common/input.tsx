import { FunctionComponent } from 'react'

type Props = {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoFocus?: boolean
  className?: string
  hint?: string
  label?: string
  placeholder?: string
  required?: boolean
  type?: 'email' | 'password' | 'text'
  value?: string

  onChange?: (value: string) => void
}

export const Input: FunctionComponent<Props> = ({
  className,
  hint,
  label,
  onChange,
  ...props
}) => (
  <label className={className}>
    {label && (
      <div className="mb-2 text-sm font-medium text-neutral-600">{label}</div>
    )}

    <input
      {...props}
      className="w-full p-3 rounded-lg bg-neutral-200 focus:bg-white"
      onChange={(event) => onChange?.(event.target.value)}
    />

    {hint && <div className="mt-2 text-xs text-neutral-600">{hint}</div>}
  </label>
)
