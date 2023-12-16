export declare const squeezeAnimation: import("@vanilla-extract/recipes").RuntimeFn<{
    axis: {
        x: {
            animationName: string;
        };
        y: {
            animationName: string;
        };
    };
}>;
export declare const hoverSqueezeAnimation: import("@vanilla-extract/recipes").RuntimeFn<{
    axis: {
        x: {
            ':hover': {
                transform: "scaleY(0.7) scaleX(1.3)";
            };
        };
        y: {
            ':hover': {
                transform: "scaleX(0.7) scaleY(1.3)";
            };
        };
    };
}>;
//# sourceMappingURL=style.css.d.ts.map