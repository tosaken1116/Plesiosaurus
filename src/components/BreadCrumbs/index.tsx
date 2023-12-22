import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { Fragment } from 'react'
import type { ReactNode } from 'react'

import clsx from 'clsx'

import { containerStyle, linkStyle } from './index.css'

export type BreadCrumbsProps = {
  renderContent?: <T extends DefaultRendererProps>(props: T) => JSX.Element
  currentHref: string
  className?: string
  divider?: ReactNode
  crumbs: CrumbType[]
}

export type CrumbType = {
  label: string
  href: string
}

export type DefaultRendererProps = {
  crumb: CrumbType
  currentHref: string
}

const defaultRenderer = ({ crumb, currentHref }: DefaultRendererProps): JSX.Element => (
  <a
    key={crumb.href}
    className={linkStyle({ isCurrent: currentHref === crumb.href })}
    href={crumb.href}
  >
    {crumb.label}
  </a>
)

/**
 * @name BreadCrumbs component
 * @description BreadCrumbsを表示するコンポーネント
 * @param {CrumbType[]} crumbs - crumbs data array (label, href)
 * @param {string} currentHref - current page href
 * @param {string} className - optional className
 * @param {ReactNode} divider - optional divider
 * @returns {JSX.Element}
 * @example
 * <BreadCrumbs
 *  crumbs={[
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ]}
    currentHref='/'
  />
 */
export const BreadCrumbs = ({
  renderContent,
  crumbs,
  currentHref,
  className,
  divider = '/',
}: BreadCrumbsProps): JSX.Element => {
  const renderer = renderContent ?? defaultRenderer
  return (
    <div className={clsx(containerStyle, className)}>
      {crumbs.map((crumb, index) => (
        <Fragment key={crumb.href}>
          {renderer({ crumb, currentHref })}
          {index + 1 !== crumbs.length && <p>{divider}</p>}
        </Fragment>
      ))}
    </div>
  )
}
