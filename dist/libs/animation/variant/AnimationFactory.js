import { genAnimation as n } from "./BackGroundColorFade/gen.js";
import { genAnimation as o } from "./Shake/gen.js";
import { genAnimation as i } from "./Slide/gen.js";
import { genAnimation as m } from "./Squeeze/gen.js";
import { genAnimation as t } from "./TextColor/gen.js";
const s = {
  slide: i,
  bgColorFade: n,
  textColor: t,
  squeeze: m,
  shake: o
};
export {
  s as AnimationFactory
};
