/// <reference types="react" />
/** @format */
import 'modern-normalize/modern-normalize.css';
import { button } from './index.css';
import type { AnimationProps } from '../../libs/animation/variant/AnimationFactory';
import type { RecipeVariants } from '@vanilla-extract/recipes';
type AnimationObjectType = 'border' | 'scaleUp' | 'scaleDown';
export type ButtonProps = RecipeVariants<typeof button> & React.HTMLProps<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    animationProps?: AnimationProps;
};
type ButtonPropsWithoutUnnecessaryAttributes = Omit<ButtonProps, 'animations' | 'transform' | AnimationObjectType>;
/**
 * Button component with customizable styling and animations.
 *
 * @component
 * @example
 * // Example usage of the Button component
 * <Button state="normal" radius="medium" outline={false} typography="bold">
 *   Click me
 * </Button>
 *
 * @param {Object} props - The properties of the Button component.
 * @param {string} props.className - Additional CSS class names for the button.
 * @param {string} props.state - The state of the button (e.g., 'normal', 'hover', 'active').
 * @param {string} props.radius - The border-radius of the button.
 * @param {boolean} props.outline - Whether the button has an outline or not.
 * @param {string} props.typography - The typography style of the button text.
 * @param {string} props.animationObject - The type of animation to apply to the button.
 * @param {string} props.delay - The delay before the animation starts.
 * @param {string} props.duration - The duration of the animation.
 * @param {string} props.easing - The easing function for the animation.
 * @param {React.Ref} props.ref - React ref for the button element.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {Object} props... - Any additional HTML attributes to be passed to the button element.
 *
 * @returns {React.Component} The rendered Button component.
 */
declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonPropsWithoutUnnecessaryAttributes, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
/**
 * Icon component for use within a button.
 *
 * @component
 * @example
 * // Example usage of the ButtonIcon component
 * <ButtonIcon className="icon" onClick={handleIconClick}>
 *   <IconComponent />
 * </ButtonIcon>
 *
 * @param {Object} props - The properties of the ButtonIcon component.
 * @param {string} [props.className] - Additional CSS class names for the icon container.
 * @param {React.ReactNode} props.children - The content of the icon.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props... - Any additional HTML attributes to be passed to the icon container.
 *
 * @returns {React.Component} The rendered ButtonIcon component.
 */
declare const ButtonIcon: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    children: React.ReactNode;
} & import("react").HTMLAttributes<HTMLSpanElement> & import("react").RefAttributes<HTMLSpanElement>>;
export { Button, ButtonIcon };
//# sourceMappingURL=index.d.ts.map