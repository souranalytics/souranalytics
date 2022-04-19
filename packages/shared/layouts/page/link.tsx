import compact from 'lodash/compact'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren<{
  base?: string
  className?: string
  classNameActive?: string
  href: string
}>

export const NavLink: FunctionComponent<Props> = ({
  base,
  children,
  className,
  classNameActive,
  href
}) => {
  const router = useRouter()

  const link = compact([base, href]).join('')

  const url = base ? new URL(link).pathname : link

  const active = router.asPath.includes(url)

  return (
    <Link href={link}>
      <a className={twMerge(className, active && classNameActive)}>
        {children}
      </a>
    </Link>
  )
}
