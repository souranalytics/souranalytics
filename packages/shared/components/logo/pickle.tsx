import { FunctionComponent } from 'react'

type Props = {
  className?: string
}

export const PickleLogo: FunctionComponent<Props> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path
      d="m42.4 14.1h-4.7l3.3-7.1-7.1 3.3v-4.7l-3.7 5.2-1.3-4.5-4.2 11.3 5.7 5.7 11.3-4.2-4.5-1.3z"
      fill="#3ddab4"
    />
    <path
      d="m9.1 38.9c-4.7-4.7-4.7-12.3 0-17l4.2-4.2c4.7-4.7 12.3-4.7 17 0 4.7 4.7 4.7 12.3 0 17l-4.2 4.2c-4.7 4.6-12.3 4.6-17 0z"
      fill="#f5bc00"
    />
    <path
      d="m33.2 22.3c-.6-1.7-1.5-3.2-2.9-4.6s-2.9-2.3-4.6-2.9l-1 2.8 5.7 5.7z"
      fill="#eb7900"
    />
    <g fill="#fadb00">
      <path d="m17.6 31.8 3.6-.7-2.9-2.8z" />
      <path d="m21.8 36.1 3.6-.8-2.8-2.8z" />
      <path d="m16.2 37.5 3.5-.8-2.8-2.8z" />
    </g>
  </svg>
)
