import type { CSSProperties } from 'react';
import type { AnimationBaseProps } from '../type';
export type OptionProps = {
    afterColor?: 'primary' | 'secondary' | 'error';
    duration?: CSSProperties['animationDuration'];
};
export type BackGroundColorFadeProps = {
    key: 'bgColorFade';
    option: OptionProps & AnimationBaseProps;
};
//# sourceMappingURL=type.d.ts.map