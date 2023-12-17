import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { ComponentPropsWithoutRef } from 'react';
import type { AnimationArgs } from '../../libs/animation';
export type RadioButtonGroupProps = {
    options: string[];
    defaultValue: string;
    zoomIn?: boolean;
} & ComponentPropsWithoutRef<'input'> & AnimationArgs;
/**
 * @name RadioButtonGroupProps component
 * RadioButtonGroupを表示するコンポーネント
 * @param {string[]} props.options - props options
 * @param {string} props.defaultValue - props defaultValue
 * @param {string} props.className - props className
 * @param {boolean} props.zoomIn - props zoomIn
 * @returns {JSX.Element}
 * @example <RadioButtonGroup a={1} />
 */
export declare const RadioButtonGroup: ({ options, defaultValue, className, zoomIn, animationProps, ...props }: RadioButtonGroupProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map