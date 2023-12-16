import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { ReactNode } from 'react';
export type BadgeProps = {
    children: ReactNode;
    badgeComponent: ReactNode;
    className?: string;
};
/**
 * @name Badge component
 * Badgeを表示するコンポーネント
 * @param {ReactNOde} children - main component to display
 * @param {ReactNode} badgeComponent - Badge component to display
 * @returns {JSX.Element}
 * @example <Badge a={1} />
 */
export declare const Badge: ({ children, badgeComponent, className, }: BadgeProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map