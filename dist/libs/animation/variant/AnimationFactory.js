import { genAnimation as n } from "./Slide/gen.js";
import { genAnimation as o } from "./BackGroundColorFade/gen.js";
import { genAnimation as i } from "./TextColor/gen.js";
import { genAnimation as t } from "./Squeeze/gen.js";
const g = {
  slide: n,
  bgColorFade: o,
  textColor: i,
  squeeze: t
};
export {
  g as AnimationFactory
};
