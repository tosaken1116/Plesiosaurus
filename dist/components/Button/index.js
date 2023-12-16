import { j as n } from "../../node_modules/react/jsx-runtime.js";
import "../../node_modules/modern-normalize/modern-normalize.css.js";
import { forwardRef as p } from "react";
import { clsx as c } from "../../node_modules/clsx/dist/clsx.js";
import { layout as j } from "../../global.css.js";
import { button as v } from "./index.css.js";
import { resolveAnimation as a } from "../../libs/animation/genAnimation.js";
const A = p(
  ({
    className: t,
    state: o,
    radius: r,
    outline: s,
    typography: f,
    delay: e = "0s",
    duration: m = "0.3s",
    easing: l,
    ref: i,
    children: x,
    ...C
  }) => {
    const { style: y, className: u } = a({
      hover: {
        key: "bgColorFade",
        option: {
          delay: e,
          afterColor: o,
          duration: m,
          easing: l
        }
      }
    }), { style: N, className: b } = a({
      hover: {
        key: "textColor",
        option: {
          delay: e,
          afterColor: o,
          duration: m,
          easing: l
        }
      }
    });
    return /* @__PURE__ */ n.jsx(
      "button",
      {
        className: c(
          v({
            state: o,
            radius: r,
            outline: s,
            typography: f
          }),
          b,
          u,
          t
        ),
        ref: i,
        ...C,
        style: { ...y, ...N },
        children: x
      }
    );
  }
), E = p(
  ({ className: t, children: o, ...r }, s) => /* @__PURE__ */ n.jsx("span", { className: c(j.center, t), ref: s, ...r, children: o })
);
export {
  A as Button,
  E as ButtonIcon
};
