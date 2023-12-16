import { j as m } from "../../jsx-runtime-NmMXPjeo.mjs";
/* empty css                               */
import { forwardRef as e } from "react";
import { c as a } from "../../clsx-7d8NmkQq.mjs";
import { layout as x } from "../../layout.css.js";
import { resolveAnimation as j } from "../../libs/animation/genAnimation.js";
import { button as y } from "./index.css.js";
const A = e(
  ({
    className: o,
    state: t,
    radius: s,
    outline: r,
    typography: n,
    ref: p,
    children: c,
    animationProps: i,
    ...l
  }) => {
    const { style: f, className: u } = j(
      i ?? {}
    );
    return /* @__PURE__ */ m.jsx(
      "button",
      {
        className: a(
          y({
            state: t,
            radius: s,
            outline: r,
            typography: n
          }),
          u,
          o
        ),
        ref: p,
        ...l,
        style: { ...f },
        children: c
      }
    );
  }
), C = e(
  ({ className: o, children: t, ...s }, r) => /* @__PURE__ */ m.jsx("span", { className: a(x.center, o), ref: r, ...s, children: t })
);
export {
  A as Button,
  C as ButtonIcon
};
