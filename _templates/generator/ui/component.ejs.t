---
to: "<%= `src/components/${name}/index.tsx` %>"
---
import 'modern-normalize/modern-normalize.css'
export type <%= name %>Props = {};

/**
 * @name <%= name %> component
 * <%= name %>を表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <<%= name %> a={1} />
 */
export const <%= name %> = ({}:<%= name %>Props) => {
  return <>this is ui of <%= name %> </>;
};
