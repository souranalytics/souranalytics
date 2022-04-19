import { FunctionComponent } from 'react'

type Props = {
  className?: string
}

export const GherkinLogo: FunctionComponent<Props> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path
      d="m36 16h-4c0-5.888 3.804-9 11-9v4c-7 0-7 3.13-7 5z"
      fill="#3ddab4"
    />
    <path
      d="m14.553 9.819c5.579-5.579 16.231-5.319 22.089.539s6.118 16.51.539 22.089-22.965 12.053-28.823 6.195.617-23.244 6.195-28.823z"
      fill="#f5bc00"
    />
    <path
      d="m32 16h4c0-1.226.013-2.988 1.985-4.06-.413-.554-.851-1.09-1.343-1.582-.474-.474-.989-.898-1.52-1.298-2.054 1.512-3.122 3.836-3.122 6.94z"
      fill="#eb7900"
    />
  </svg>
)
