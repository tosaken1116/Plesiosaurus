export declare const slideAnimation: import("@vanilla-extract/recipes").RuntimeFn<{
    direction: {
        bottom: {
            animationName: string;
        };
        top: {
            animationName: string;
        };
        left: {
            animationName: string;
        };
        right: {
            animationName: string;
        };
    };
}>;
export declare const hoverSlideAnimation: import("@vanilla-extract/recipes").RuntimeFn<{
    direction: {
        bottom: {
            ':hover': {
                transform: "translateY(-100%)";
            };
        };
        top: {
            ':hover': {
                transform: "translateY(100%)";
            };
        };
        left: {
            ':hover': {
                transform: "translateX(100%)";
            };
        };
        right: {
            ':hover': {
                transform: "translateX(-100%)";
            };
        };
    };
}>;
//# sourceMappingURL=style.css.d.ts.map