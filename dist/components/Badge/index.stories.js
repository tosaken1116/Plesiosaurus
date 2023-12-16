import { j as e } from "../../jsx-runtime-NmMXPjeo.mjs";
import { Heart as r } from "lucide-react";
import { Badge as a } from "./index.js";
const s = {
  component: a,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}, t = {
  args: {
    children: /* @__PURE__ */ e.jsx("div", { style: { padding: "2rem", backgroundColor: "gray", borderRadius: "8px" }, children: "Badge" }),
    badgeComponent: "1"
  }
}, g = {
  args: {
    children: /* @__PURE__ */ e.jsx("div", { style: { padding: "2rem", backgroundColor: "gray", borderRadius: "8px" }, children: "Badge" }),
    badgeComponent: "1000000"
  }
}, i = {
  args: {
    children: /* @__PURE__ */ e.jsx("div", { style: { padding: "2rem", backgroundColor: "gray", borderRadius: "8px" }, children: "Badge" }),
    badgeComponent: /* @__PURE__ */ e.jsxs("span", { style: { display: "flex", alignItems: "center", padding: "0.5rem 0" }, children: [
      /* @__PURE__ */ e.jsx(r, {}),
      "1000"
    ] })
  }
};
export {
  i as CustomBadge,
  t as Default,
  g as LargeBadge,
  s as default
};
