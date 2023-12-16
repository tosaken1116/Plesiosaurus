import { j as i } from "../../jsx-runtime-NmMXPjeo.mjs";
/* empty css                               */
/* empty css                    */
/* empty css                                   */
import { Stack as e } from "./index.js";
import { Divider as t } from "../Divider/index.js";
import "../Button/index.js";
import "../Typography/index.js";
import "../CheckBox/index.js";
import "../Grid/index.js";
const l = {
  component: e,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}, x = {
  args: {
    children: [
      /* @__PURE__ */ i.jsx("div", { children: "This is Stack" }),
      /* @__PURE__ */ i.jsx("div", { children: "This is Stack" }),
      /* @__PURE__ */ i.jsx("div", { children: "This is Stack" })
    ],
    direction: "row",
    spacing: "12px",
    alignItems: { sm: "center", md: "center" },
    justifyContent: { sm: "center", md: "center" },
    divider: /* @__PURE__ */ i.jsx(t, { orientation: "vertical" }),
    style: { width: "100%", height: "30px" }
  }
}, j = {
  args: {
    children: [
      /* @__PURE__ */ i.jsx("div", { children: "This is Stack" }),
      /* @__PURE__ */ i.jsx("div", { children: "This is Stack" }),
      /* @__PURE__ */ i.jsx("div", { children: "This is Stack" })
    ],
    direction: "column",
    spacing: "12px",
    alignItems: { sm: "center", md: "center" },
    justifyContent: { sm: "center", md: "center" },
    divider: /* @__PURE__ */ i.jsx(t, { orientation: "vertical" }),
    style: { width: "100px", height: "100%" }
  }
};
export {
  x as Horizontal,
  j as Vertical,
  l as default
};
