/// <reference types="react" />
import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { AnimationArgs } from '../../libs/animation';
export type SkeltonProps = {
    className?: string;
    width: number;
    height: number;
    radius?: 's' | 'm' | 'l';
} & AnimationArgs;
/**
 * @name Skelton component
 * Skeltonを表示するコンポーネント
 * @param {Object} props - The properties of the Skelton component.
 * @param {string} props.className - Additional CSS class names for the div.
 * @param {number} props.width - The width of the div.
 * @param {number} props.height - The height of the div.
 * @param {string} props.radius - The border-radius of the div.
 * @returns {JSX.Element}
 */
export declare const Skelton: ({ className, width, height, radius, animationProps, }: SkeltonProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map