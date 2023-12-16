import { j as e } from "../../jsx-runtime-NmMXPjeo.mjs";
/* empty css                               */
/* empty css                    */
import { forwardRef as j, useState as p } from "react";
import { c as y } from "../../clsx-7d8NmkQq.mjs";
import { CheckSquare2 as r } from "lucide-react";
import { containerStyle as S, checkContainerStyle as N, iconStyle as s, labelStyle as g, inputDefaultStyle as x } from "./index.css.js";
const k = () => {
}, v = j(
  ({ className: c, id: t, customCheckbox: a, ...n }, i) => {
    const o = (a == null ? void 0 : a.checked) ?? /* @__PURE__ */ e.jsx(r, { fill: n.color || "aquamarine", color: "gray" }), d = (a == null ? void 0 : a.unchecked) ?? /* @__PURE__ */ e.jsx(r, { color: "gray" }), h = n.onChange ?? k, [l, m] = p(n.checked || !1);
    return /* @__PURE__ */ e.jsxs("label", { className: S, children: [
      /* @__PURE__ */ e.jsxs("span", { className: N, children: [
        l ? /* @__PURE__ */ e.jsxs("span", { className: s, children: [
          " ",
          o
        ] }) : /* @__PURE__ */ e.jsxs("span", { className: s, children: [
          " ",
          d
        ] }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: i,
            type: "checkbox",
            id: t,
            onChange: (f) => {
              m(!l), h(f);
            },
            className: y(x, c),
            ...n
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: g, children: n.label })
    ] });
  }
);
export {
  v as Checkbox
};
