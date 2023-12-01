---
to: "<%= `src/components/${name}/index.tsx` %>"
---
import type { FC } from 'react';

export type <%= name %>Props = {};

/**
 * @name <%= name %> component
 * <%= name %>を表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <<%= name %> a={1} />
 */
export const <%= name %>:FC<<%= name %>Props> = ({}) => {
  return <>this is ui of <%= name %> </>;
};
