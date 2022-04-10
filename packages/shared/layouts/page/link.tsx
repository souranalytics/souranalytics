import Link from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  href: string
}>

export const NavLink: FunctionComponent<Props> = ({ children, href }) => (
  <Link href={href}>
    <a className="flex items-center p-3 font-medium hover:text-primary-600 text-neutral-600">
      {children}
    </a>
  </Link>
)
