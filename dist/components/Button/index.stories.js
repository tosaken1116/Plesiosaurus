import { j as r } from "../../jsx-runtime-NmMXPjeo.mjs";
import { Mail as t } from "lucide-react";
import { Button as e, ButtonIcon as a } from "./index.js";
const c = {
  component: e,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}, i = {
  args: {
    state: "primary",
    children: "Label"
  }
}, l = {
  args: {
    state: "secondary",
    children: "Label"
  }
}, m = {
  args: {
    state: "error",
    children: "Label"
  }
}, d = {
  args: {
    state: "primary",
    children: /* @__PURE__ */ r.jsx(a, { children: /* @__PURE__ */ r.jsx(t, {}) })
  }
}, p = {
  args: {
    state: "primary",
    children: /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Label",
      /* @__PURE__ */ r.jsx(a, { children: /* @__PURE__ */ r.jsx(t, {}) })
    ] })
  }
  // create button with icon story here
};
export {
  m as Error,
  d as Icon,
  i as Primary,
  l as Secondary,
  p as WithIcon,
  c as default
};
