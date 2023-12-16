import { j as n } from "../../node_modules/react/jsx-runtime.js";
/* empty css                                                       */
import { forwardRef as p } from "react";
import { clsx as f } from "../../node_modules/clsx/dist/clsx.js";
import { layout as j } from "../../global.css.js";
import { button as v } from "./index.css.js";
import { resolveAnimation as a } from "../../libs/animation/genAnimation.js";
const B = p(
  ({
    className: t,
    state: o,
    radius: r,
    outline: e,
    typography: i,
    delay: s = "0s",
    duration: m = "0.3s",
    easing: l,
    ref: c,
    children: x,
    ...C
  }) => {
    const { style: y, className: N } = a({
      hover: {
        key: "bgColorFade",
        option: {
          delay: s,
          afterColor: o,
          duration: m,
          easing: l
        }
      }
    }), { style: b, className: u } = a({
      hover: {
        key: "textColor",
        option: {
          delay: s,
          afterColor: o,
          duration: m,
          easing: l
        }
      }
    });
    return /* @__PURE__ */ n.jsx(
      "button",
      {
        className: f(
          v({
            state: o,
            radius: r,
            outline: e,
            typography: i
          }),
          u,
          N,
          t
        ),
        ref: c,
        ...C,
        style: { ...y, ...b },
        children: x
      }
    );
  }
);
p(
  ({ className: t, children: o, ...r }, e) => /* @__PURE__ */ n.jsx("span", { className: f(j.center, t), ref: e, ...r, children: o })
);
export {
  B as Button
};
