import type { BackGroundColorFadeProps } from './BackGroundColorFade';
import type { ShakeProps } from './Shake';
import type { SlideProps } from './Slide';
import type { SqueezeProps } from './Squeeze';
import type { TextColorProps } from './TextColor';
import type { GeneratedAnimationValue } from '..';
export type AnimationProps = {
    in?: AnimationObject;
    hover?: AnimationObject;
};
export type AnimationObject = SlideProps | BackGroundColorFadeProps | TextColorProps | SqueezeProps | ShakeProps;
export declare const AnimationFactory: Record<AnimationObject['key'], (props: AnimationObject['option'], isHover: boolean) => GeneratedAnimationValue>;
//# sourceMappingURL=AnimationFactory.d.ts.map