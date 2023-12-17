import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { HTMLAttributes, ReactNode } from 'react';
import type { AnimationArgs } from '../../libs/animation';
export type CheckboxProps = {
    className?: string;
    customCheckbox?: CustomCheckBox;
    checked?: boolean;
    label?: ReactNode;
    color?: string;
} & HTMLAttributes<HTMLInputElement> & AnimationArgs;
type CustomCheckBox = {
    checked: ReactNode;
    unchecked: ReactNode;
};
/**
 * Checkbox component for interactive checkbox input with customizable styling.
 *
 * @component
 * @example
 * // Example usage of the Checkbox component
 * <Checkbox
 *   className="custom-checkbox"
 *   customCheckbox={{ checked: <CustomCheckedIcon />, unchecked: <CustomUncheckedIcon /> }}
 *   checked={true}
 *   label="Enable Feature"
 *   color="green"
 *   onChange={(e) => handleCheckboxChange(e)}
 * />
 *
 * @typedef {Object} CheckboxProps
 * @property {string} [className] - Additional CSS class name for the checkbox container.
 * @property {CustomCheckBox} [customCheckbox] - Custom icons for the checked and unchecked states.
 * @property {boolean} [checked] - The current checked state of the checkbox.
 * @property {React.ReactNode} [label] - The label to be displayed next to the checkbox.
 * @property {string} [color] - The color of the checkbox (applies to the checked state).
 * @property {HTMLAttributes<HTMLInputElement>} [props] - Any additional HTML attributes to be passed to the checkbox input.
 *
 * @typedef {Object} CustomCheckBox
 * @property {React.ReactNode} checked - Custom content for the checked state.
 * @property {React.ReactNode} unchecked - Custom content for the unchecked state.
 *
 * @param {CheckboxProps} props - The properties of the Checkbox component.
 * @param {React.Ref<HTMLInputElement>} ref - React ref for the checkbox input element.
 * @returns {JSX.Element} - The JSX element representing the Checkbox.
 */
export declare const Checkbox: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    customCheckbox?: CustomCheckBox | undefined;
    checked?: boolean | undefined;
    label?: ReactNode;
    color?: string | undefined;
} & HTMLAttributes<HTMLInputElement> & AnimationArgs & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=index.d.ts.map