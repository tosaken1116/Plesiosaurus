import { hoverSqueezeAnimation as e, squeezeAnimation as n } from "./style.css.js";
const o = (a = {
  axis: "x",
  duration: "0.3s",
  delay: "0s"
}, i = !1) => ({
  className: i ? e({ axis: a.axis }) : n({ axis: a.axis }),
  style: {
    "--animation-duration": a.duration,
    "--animation-delay": a.delay
  }
});
export {
  o as genAnimation
};
