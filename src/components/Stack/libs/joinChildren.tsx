import { Children } from 'react'

/**
 * dividerを挟みながらchildrenを結合する関数
 *
 * @example  joinChildren([1,2,3], 0)
 * @returns [1,0,2,0,3]
 */
export function joinChildren(
  children: React.ReactNode | React.ReactNode[],
  renderDivider: (index: string) => React.ReactNode,
): React.ReactNode {
  return Children.map(children, (child, index) => (
    <>
      {child}
      {index < Children.count(children) - 1 && renderDivider(index.toString())}
    </>
  ))
}
