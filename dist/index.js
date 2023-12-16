import "./index.css";
import Gt, { Children as Vt, forwardRef as J, useState as pe } from "react";
import { CheckSquare2 as It } from "lucide-react";
var pt = { exports: {} }, tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function he() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Gt, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), Y = Symbol.iterator, ct = "@@iterator";
    function X(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = Y && t[Y] || t[ct];
      return typeof a == "function" ? a : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(t) {
      {
        for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
          s[o - 1] = arguments[o];
        j("error", t, s);
      }
    }
    function j(t, a, s) {
      {
        var o = D.ReactDebugCurrentFrame, y = o.getStackAddendum();
        y !== "" && (a += "%s", s = s.concat([y]));
        var d = s.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, d);
      }
    }
    var ft = !1, ht = !1, k = !1, _ = !1, W = !1, L;
    L = Symbol.for("react.module.reference");
    function rt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === z || W || t === f || t === g || t === m || _ || t === A || ft || ht || k || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === C || t.$$typeof === x || t.$$typeof === b || t.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === L || t.getModuleId !== void 0));
    }
    function H(t, a, s) {
      var o = t.displayName;
      if (o)
        return o;
      var y = a.displayName || a.name || "";
      return y !== "" ? s + "(" + y + ")" : s;
    }
    function U(t) {
      return t.displayName || "Context";
    }
    function O(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case z:
          return "Profiler";
        case f:
          return "StrictMode";
        case g:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case b:
            var a = t;
            return U(a) + ".Consumer";
          case x:
            var s = t;
            return U(s._context) + ".Provider";
          case l:
            return H(t, t.render, "ForwardRef");
          case C:
            var o = t.displayName || null;
            return o !== null ? o : O(t.type) || "Memo";
          case R: {
            var y = t, d = y._payload, c = y._init;
            try {
              return O(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, Z, B, q, at, N, F, M;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Xt() {
      {
        if ($ === 0) {
          Z = console.log, B = console.info, q = console.warn, at = console.error, N = console.group, F = console.groupCollapsed, M = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: it,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        $++;
      }
    }
    function Ht() {
      {
        if ($--, $ === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, t, {
              value: Z
            }),
            info: P({}, t, {
              value: B
            }),
            warn: P({}, t, {
              value: q
            }),
            error: P({}, t, {
              value: at
            }),
            group: P({}, t, {
              value: N
            }),
            groupCollapsed: P({}, t, {
              value: F
            }),
            groupEnd: P({}, t, {
              value: M
            })
          });
        }
        $ < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = D.ReactCurrentDispatcher, dt;
    function nt(t, a, s) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (y) {
            var o = y.stack.trim().match(/\n( *(at )?)/);
            dt = o && o[1] || "";
          }
        return `
` + dt + t;
      }
    }
    var _t = !1, st;
    {
      var Zt = typeof WeakMap == "function" ? WeakMap : Map;
      st = new Zt();
    }
    function bt(t, a) {
      if (!t || _t)
        return "";
      {
        var s = st.get(t);
        if (s !== void 0)
          return s;
      }
      var o;
      _t = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = yt.current, yt.current = null, Xt();
      try {
        if (a) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (V) {
              o = V;
            }
            Reflect.construct(t, [], c);
          } else {
            try {
              c.call();
            } catch (V) {
              o = V;
            }
            t.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            o = V;
          }
          t();
        }
      } catch (V) {
        if (V && o && typeof V.stack == "string") {
          for (var u = V.stack.split(`
`), w = o.stack.split(`
`), v = u.length - 1, p = w.length - 1; v >= 1 && p >= 0 && u[v] !== w[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (u[v] !== w[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || u[v] !== w[p]) {
                    var S = `
` + u[v].replace(" at new ", " at ");
                    return t.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", t.displayName)), typeof t == "function" && st.set(t, S), S;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        _t = !1, yt.current = d, Ht(), Error.prepareStackTrace = y;
      }
      var G = t ? t.displayName || t.name : "", Ft = G ? nt(G) : "";
      return typeof t == "function" && st.set(t, Ft), Ft;
    }
    function Qt(t, a, s) {
      return bt(t, !1);
    }
    function te(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function ot(t, a, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return bt(t, te(t));
      if (typeof t == "string")
        return nt(t);
      switch (t) {
        case g:
          return nt("Suspense");
        case m:
          return nt("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Qt(t.render);
          case C:
            return ot(t.type, a, s);
          case R: {
            var o = t, y = o._payload, d = o._init;
            try {
              return ot(d(y), a, s);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, Ct = {}, Et = D.ReactDebugCurrentFrame;
    function ut(t) {
      if (t) {
        var a = t._owner, s = ot(t.type, t._source, a ? a.type : null);
        Et.setExtraStackFrame(s);
      } else
        Et.setExtraStackFrame(null);
    }
    function ee(t, a, s, o, y) {
      {
        var d = Function.call.bind(lt);
        for (var c in t)
          if (d(t, c)) {
            var u = void 0;
            try {
              if (typeof t[c] != "function") {
                var w = Error((o || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              u = t[c](a, c, o, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              u = v;
            }
            u && !(u instanceof Error) && (ut(y), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", s, c, typeof u), ut(null)), u instanceof Error && !(u.message in Ct) && (Ct[u.message] = !0, ut(y), E("Failed %s type: %s", s, u.message), ut(null));
          }
      }
    }
    var re = Array.isArray;
    function mt(t) {
      return re(t);
    }
    function ae(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, s = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function ie(t) {
      try {
        return Ot(t), !1;
      } catch {
        return !0;
      }
    }
    function Ot(t) {
      return "" + t;
    }
    function wt(t) {
      if (ie(t))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ae(t)), Ot(t);
    }
    var Q = D.ReactCurrentOwner, ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Rt, kt;
    kt = {};
    function se(t) {
      if (lt.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function oe(t) {
      if (lt.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function le(t, a) {
      if (typeof t.ref == "string" && Q.current && a && Q.current.stateNode !== a) {
        var s = O(Q.current.type);
        kt[s] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(Q.current.type), t.ref), kt[s] = !0);
      }
    }
    function ue(t, a) {
      {
        var s = function() {
          jt || (jt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ce(t, a) {
      {
        var s = function() {
          Rt || (Rt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var fe = function(t, a, s, o, y, d, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: s,
        props: c,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ye(t, a, s, o, y) {
      {
        var d, c = {}, u = null, w = null;
        s !== void 0 && (wt(s), u = "" + s), oe(a) && (wt(a.key), u = "" + a.key), se(a) && (w = a.ref, le(a, y));
        for (d in a)
          lt.call(a, d) && !ne.hasOwnProperty(d) && (c[d] = a[d]);
        if (t && t.defaultProps) {
          var v = t.defaultProps;
          for (d in v)
            c[d] === void 0 && (c[d] = v[d]);
        }
        if (u || w) {
          var p = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          u && ue(c, p), w && ce(c, p);
        }
        return fe(t, u, w, y, o, Q.current, c);
      }
    }
    var vt = D.ReactCurrentOwner, St = D.ReactDebugCurrentFrame;
    function K(t) {
      if (t) {
        var a = t._owner, s = ot(t.type, t._source, a ? a.type : null);
        St.setExtraStackFrame(s);
      } else
        St.setExtraStackFrame(null);
    }
    var zt;
    zt = !1;
    function xt(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Pt() {
      {
        if (vt.current) {
          var t = O(vt.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function de(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), s = t.lineNumber;
          return `

Check your code at ` + a + ":" + s + ".";
        }
        return "";
      }
    }
    var Tt = {};
    function _e(t) {
      {
        var a = Pt();
        if (!a) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (a = `

Check the top-level render call using <` + s + ">.");
        }
        return a;
      }
    }
    function Nt(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = _e(a);
        if (Tt[s])
          return;
        Tt[s] = !0;
        var o = "";
        t && t._owner && t._owner !== vt.current && (o = " It was passed a child from " + O(t._owner.type) + "."), K(t), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, o), K(null);
      }
    }
    function At(t, a) {
      {
        if (typeof t != "object")
          return;
        if (mt(t))
          for (var s = 0; s < t.length; s++) {
            var o = t[s];
            xt(o) && Nt(o, a);
          }
        else if (xt(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var y = X(t);
          if (typeof y == "function" && y !== t.entries)
            for (var d = y.call(t), c; !(c = d.next()).done; )
              xt(c.value) && Nt(c.value, a);
        }
      }
    }
    function me(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var s;
        if (typeof a == "function")
          s = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === C))
          s = a.propTypes;
        else
          return;
        if (s) {
          var o = O(a);
          ee(s, t.props, "prop", o, t);
        } else if (a.PropTypes !== void 0 && !zt) {
          zt = !0;
          var y = O(a);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ke(t) {
      {
        for (var a = Object.keys(t.props), s = 0; s < a.length; s++) {
          var o = a[s];
          if (o !== "children" && o !== "key") {
            K(t), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), K(null);
            break;
          }
        }
        t.ref !== null && (K(t), E("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    function Dt(t, a, s, o, y, d) {
      {
        var c = rt(t);
        if (!c) {
          var u = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = de(y);
          w ? u += w : u += Pt();
          var v;
          t === null ? v = "null" : mt(t) ? v = "array" : t !== void 0 && t.$$typeof === r ? (v = "<" + (O(t.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : v = typeof t, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, u);
        }
        var p = ye(t, a, s, y, d);
        if (p == null)
          return p;
        if (c) {
          var S = a.children;
          if (S !== void 0)
            if (o)
              if (mt(S)) {
                for (var G = 0; G < S.length; G++)
                  At(S[G], t);
                Object.freeze && Object.freeze(S);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              At(S, t);
        }
        return t === i ? ke(p) : me(p), p;
      }
    }
    function ve(t, a, s) {
      return Dt(t, a, s, !0);
    }
    function ze(t, a, s) {
      return Dt(t, a, s, !1);
    }
    var xe = ze, ge = ve;
    tt.Fragment = i, tt.jsx = xe, tt.jsxs = ge;
  }()), tt;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function be() {
  if (qt)
    return et;
  qt = 1;
  var e = Gt, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(b, l, g) {
    var m, C = {}, R = null, A = null;
    g !== void 0 && (R = "" + g), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (A = l.ref);
    for (m in l)
      i.call(l, m) && !z.hasOwnProperty(m) && (C[m] = l[m]);
    if (b && b.defaultProps)
      for (m in l = b.defaultProps, l)
        C[m] === void 0 && (C[m] = l[m]);
    return { $$typeof: r, type: b, key: R, ref: A, props: C, _owner: f.current };
  }
  return et.Fragment = n, et.jsx = x, et.jsxs = x, et;
}
process.env.NODE_ENV === "production" ? pt.exports = be() : pt.exports = he();
var h = pt.exports;
function Jt(e) {
  var r, n, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (n = Jt(e[r])) && (i && (i += " "), i += n);
    else
      for (r in e)
        e[r] && (i && (i += " "), i += r);
  return i;
}
function I() {
  for (var e, r, n = 0, i = ""; n < arguments.length; )
    (e = arguments[n++]) && (r = Jt(e)) && (i && (i += " "), i += r);
  return i;
}
var Ce = "myalyf0", Ee = "myalyf1";
const yr = ({
  children: e,
  badgeComponent: r,
  className: n
}) => /* @__PURE__ */ h.jsxs("span", { className: Ee, children: [
  /* @__PURE__ */ h.jsx("span", { className: I(Ce, n), children: r }),
  e
] });
function Oe(e, r) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function we(e) {
  var r = Oe(e, "string");
  return typeof r == "symbol" ? r : String(r);
}
function je(e, r, n) {
  return r = we(r), r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n, e;
}
function Yt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(f) {
      return Object.getOwnPropertyDescriptor(e, f).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function gt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yt(Object(n), !0).forEach(function(i) {
      je(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
var Re = (e) => function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
    n[i] = arguments[i];
  var f = Object.assign({}, ...n.map((l) => l.styles)), z = Object.keys(f), x = z.filter((l) => "mappings" in f[l]), b = (l) => {
    var g = [], m = {}, C = gt({}, l), R = !1;
    for (var A of x) {
      var Y = l[A];
      if (Y != null) {
        var ct = f[A];
        R = !0;
        for (var X of ct.mappings)
          m[X] = Y, C[X] == null && delete C[X];
      }
    }
    var D = R ? gt(gt({}, m), C) : l, E = function() {
      var k = D[j], _ = f[j];
      try {
        if (_.mappings)
          return "continue";
        if (typeof k == "string" || typeof k == "number") {
          if (process.env.NODE_ENV !== "production" && !_.values[k].defaultClass)
            throw new Error();
          g.push(_.values[k].defaultClass);
        } else if (Array.isArray(k))
          for (var W = 0; W < k.length; W++) {
            var L = k[W];
            if (L != null) {
              var rt = _.responsiveArray[W];
              if (process.env.NODE_ENV !== "production" && !_.values[L].conditions[rt])
                throw new Error();
              g.push(_.values[L].conditions[rt]);
            }
          }
        else
          for (var H in k) {
            var U = k[H];
            if (U != null) {
              if (process.env.NODE_ENV !== "production" && !_.values[U].conditions[H])
                throw new Error();
              g.push(_.values[U].conditions[H]);
            }
          }
      } catch (at) {
        if (process.env.NODE_ENV !== "production") {
          class N extends Error {
            constructor(M) {
              super(M), this.name = "SprinklesError";
            }
          }
          var O = (F) => typeof F == "string" ? '"'.concat(F, '"') : F, P = (F, M, it) => {
            throw new N('"'.concat(F, '" has no value ').concat(O(M), ". Possible values are ").concat(Object.keys(it).map(O).join(", ")));
          };
          if (!_)
            throw new N('"'.concat(j, '" is not a valid sprinkle'));
          if ((typeof k == "string" || typeof k == "number") && (k in _.values || P(j, k, _.values), !_.values[k].defaultClass))
            throw new N('"'.concat(j, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(_.values[k].conditions).map(O).join(", ")));
          if (typeof k == "object") {
            if (!("conditions" in _.values[Object.keys(_.values)[0]]))
              throw new N('"'.concat(j, '" is not a conditional property'));
            if (Array.isArray(k)) {
              if (!("responsiveArray" in _))
                throw new N('"'.concat(j, '" does not support responsive arrays'));
              var $ = _.responsiveArray.length;
              if ($ < k.length)
                throw new N('"'.concat(j, '" only supports up to ').concat($, " breakpoints. You passed ").concat(k.length));
              for (var Z of k)
                _.values[Z] || P(j, Z, _.values);
            } else
              for (var B in k) {
                var q = k[B];
                if (q != null && (_.values[q] || P(j, q, _.values), !_.values[q].conditions[B]))
                  throw new N('"'.concat(j, '" has no condition named ').concat(O(B), ". Possible values are ").concat(Object.keys(_.values[q].conditions).map(O).join(", ")));
              }
          }
        }
        throw at;
      }
    };
    for (var j in D)
      var ft = E();
    return e(g.join(" "));
  };
  return Object.assign(b, {
    properties: new Set(z)
  });
}, Se = (e) => e, Pe = function() {
  return Re(Se)(...arguments);
}, Te = Pe({ conditions: { defaultCondition: "lg", conditionNames: ["xs", "sm", "md", "lg", "xl", "xxl"], responsiveArray: void 0 }, styles: { padding: { mappings: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"] }, paddingX: { mappings: ["paddingLeft", "paddingRight"] }, paddingY: { mappings: ["paddingTop", "paddingBottom"] }, placeItems: { mappings: ["justifyContent", "alignItems"] }, display: { values: { none: { conditions: { xs: "_17kzyit1", sm: "_17kzyit2", md: "_17kzyit3", lg: "_17kzyit4", xl: "_17kzyit5", xxl: "_17kzyit6" }, defaultClass: "_17kzyit4" }, flex: { conditions: { xs: "_17kzyit7", sm: "_17kzyit8", md: "_17kzyit9", lg: "_17kzyita", xl: "_17kzyitb", xxl: "_17kzyitc" }, defaultClass: "_17kzyita" }, block: { conditions: { xs: "_17kzyitd", sm: "_17kzyite", md: "_17kzyitf", lg: "_17kzyitg", xl: "_17kzyith", xxl: "_17kzyiti" }, defaultClass: "_17kzyitg" }, inline: { conditions: { xs: "_17kzyitj", sm: "_17kzyitk", md: "_17kzyitl", lg: "_17kzyitm", xl: "_17kzyitn", xxl: "_17kzyito" }, defaultClass: "_17kzyitm" } } }, flexDirection: { values: { row: { conditions: { xs: "_17kzyitp", sm: "_17kzyitq", md: "_17kzyitr", lg: "_17kzyits", xl: "_17kzyitt", xxl: "_17kzyitu" }, defaultClass: "_17kzyits" }, column: { conditions: { xs: "_17kzyitv", sm: "_17kzyitw", md: "_17kzyitx", lg: "_17kzyity", xl: "_17kzyitz", xxl: "_17kzyit10" }, defaultClass: "_17kzyity" } } }, justifyContent: { values: { stretch: { conditions: { xs: "_17kzyit11", sm: "_17kzyit12", md: "_17kzyit13", lg: "_17kzyit14", xl: "_17kzyit15", xxl: "_17kzyit16" }, defaultClass: "_17kzyit14" }, "flex-start": { conditions: { xs: "_17kzyit17", sm: "_17kzyit18", md: "_17kzyit19", lg: "_17kzyit1a", xl: "_17kzyit1b", xxl: "_17kzyit1c" }, defaultClass: "_17kzyit1a" }, center: { conditions: { xs: "_17kzyit1d", sm: "_17kzyit1e", md: "_17kzyit1f", lg: "_17kzyit1g", xl: "_17kzyit1h", xxl: "_17kzyit1i" }, defaultClass: "_17kzyit1g" }, "flex-end": { conditions: { xs: "_17kzyit1j", sm: "_17kzyit1k", md: "_17kzyit1l", lg: "_17kzyit1m", xl: "_17kzyit1n", xxl: "_17kzyit1o" }, defaultClass: "_17kzyit1m" }, "space-around": { conditions: { xs: "_17kzyit1p", sm: "_17kzyit1q", md: "_17kzyit1r", lg: "_17kzyit1s", xl: "_17kzyit1t", xxl: "_17kzyit1u" }, defaultClass: "_17kzyit1s" }, "space-between": { conditions: { xs: "_17kzyit1v", sm: "_17kzyit1w", md: "_17kzyit1x", lg: "_17kzyit1y", xl: "_17kzyit1z", xxl: "_17kzyit20" }, defaultClass: "_17kzyit1y" } } }, alignItems: { values: { stretch: { conditions: { xs: "_17kzyit21", sm: "_17kzyit22", md: "_17kzyit23", lg: "_17kzyit24", xl: "_17kzyit25", xxl: "_17kzyit26" }, defaultClass: "_17kzyit24" }, "flex-start": { conditions: { xs: "_17kzyit27", sm: "_17kzyit28", md: "_17kzyit29", lg: "_17kzyit2a", xl: "_17kzyit2b", xxl: "_17kzyit2c" }, defaultClass: "_17kzyit2a" }, center: { conditions: { xs: "_17kzyit2d", sm: "_17kzyit2e", md: "_17kzyit2f", lg: "_17kzyit2g", xl: "_17kzyit2h", xxl: "_17kzyit2i" }, defaultClass: "_17kzyit2g" }, "flex-end": { conditions: { xs: "_17kzyit2j", sm: "_17kzyit2k", md: "_17kzyit2l", lg: "_17kzyit2m", xl: "_17kzyit2n", xxl: "_17kzyit2o" }, defaultClass: "_17kzyit2m" } } }, paddingTop: { values: { 0: { conditions: { xs: "_17kzyit2p", sm: "_17kzyit2q", md: "_17kzyit2r", lg: "_17kzyit2s", xl: "_17kzyit2t", xxl: "_17kzyit2u" }, defaultClass: "_17kzyit2s" }, 1: { conditions: { xs: "_17kzyit2v", sm: "_17kzyit2w", md: "_17kzyit2x", lg: "_17kzyit2y", xl: "_17kzyit2z", xxl: "_17kzyit30" }, defaultClass: "_17kzyit2y" }, 2: { conditions: { xs: "_17kzyit31", sm: "_17kzyit32", md: "_17kzyit33", lg: "_17kzyit34", xl: "_17kzyit35", xxl: "_17kzyit36" }, defaultClass: "_17kzyit34" }, 3: { conditions: { xs: "_17kzyit37", sm: "_17kzyit38", md: "_17kzyit39", lg: "_17kzyit3a", xl: "_17kzyit3b", xxl: "_17kzyit3c" }, defaultClass: "_17kzyit3a" }, 4: { conditions: { xs: "_17kzyit3d", sm: "_17kzyit3e", md: "_17kzyit3f", lg: "_17kzyit3g", xl: "_17kzyit3h", xxl: "_17kzyit3i" }, defaultClass: "_17kzyit3g" }, 5: { conditions: { xs: "_17kzyit3j", sm: "_17kzyit3k", md: "_17kzyit3l", lg: "_17kzyit3m", xl: "_17kzyit3n", xxl: "_17kzyit3o" }, defaultClass: "_17kzyit3m" } } }, paddingBottom: { values: { 0: { conditions: { xs: "_17kzyit3p", sm: "_17kzyit3q", md: "_17kzyit3r", lg: "_17kzyit3s", xl: "_17kzyit3t", xxl: "_17kzyit3u" }, defaultClass: "_17kzyit3s" }, 1: { conditions: { xs: "_17kzyit3v", sm: "_17kzyit3w", md: "_17kzyit3x", lg: "_17kzyit3y", xl: "_17kzyit3z", xxl: "_17kzyit40" }, defaultClass: "_17kzyit3y" }, 2: { conditions: { xs: "_17kzyit41", sm: "_17kzyit42", md: "_17kzyit43", lg: "_17kzyit44", xl: "_17kzyit45", xxl: "_17kzyit46" }, defaultClass: "_17kzyit44" }, 3: { conditions: { xs: "_17kzyit47", sm: "_17kzyit48", md: "_17kzyit49", lg: "_17kzyit4a", xl: "_17kzyit4b", xxl: "_17kzyit4c" }, defaultClass: "_17kzyit4a" }, 4: { conditions: { xs: "_17kzyit4d", sm: "_17kzyit4e", md: "_17kzyit4f", lg: "_17kzyit4g", xl: "_17kzyit4h", xxl: "_17kzyit4i" }, defaultClass: "_17kzyit4g" }, 5: { conditions: { xs: "_17kzyit4j", sm: "_17kzyit4k", md: "_17kzyit4l", lg: "_17kzyit4m", xl: "_17kzyit4n", xxl: "_17kzyit4o" }, defaultClass: "_17kzyit4m" } } }, paddingLeft: { values: { 0: { conditions: { xs: "_17kzyit4p", sm: "_17kzyit4q", md: "_17kzyit4r", lg: "_17kzyit4s", xl: "_17kzyit4t", xxl: "_17kzyit4u" }, defaultClass: "_17kzyit4s" }, 1: { conditions: { xs: "_17kzyit4v", sm: "_17kzyit4w", md: "_17kzyit4x", lg: "_17kzyit4y", xl: "_17kzyit4z", xxl: "_17kzyit50" }, defaultClass: "_17kzyit4y" }, 2: { conditions: { xs: "_17kzyit51", sm: "_17kzyit52", md: "_17kzyit53", lg: "_17kzyit54", xl: "_17kzyit55", xxl: "_17kzyit56" }, defaultClass: "_17kzyit54" }, 3: { conditions: { xs: "_17kzyit57", sm: "_17kzyit58", md: "_17kzyit59", lg: "_17kzyit5a", xl: "_17kzyit5b", xxl: "_17kzyit5c" }, defaultClass: "_17kzyit5a" }, 4: { conditions: { xs: "_17kzyit5d", sm: "_17kzyit5e", md: "_17kzyit5f", lg: "_17kzyit5g", xl: "_17kzyit5h", xxl: "_17kzyit5i" }, defaultClass: "_17kzyit5g" }, 5: { conditions: { xs: "_17kzyit5j", sm: "_17kzyit5k", md: "_17kzyit5l", lg: "_17kzyit5m", xl: "_17kzyit5n", xxl: "_17kzyit5o" }, defaultClass: "_17kzyit5m" } } }, paddingRight: { values: { 0: { conditions: { xs: "_17kzyit5p", sm: "_17kzyit5q", md: "_17kzyit5r", lg: "_17kzyit5s", xl: "_17kzyit5t", xxl: "_17kzyit5u" }, defaultClass: "_17kzyit5s" }, 1: { conditions: { xs: "_17kzyit5v", sm: "_17kzyit5w", md: "_17kzyit5x", lg: "_17kzyit5y", xl: "_17kzyit5z", xxl: "_17kzyit60" }, defaultClass: "_17kzyit5y" }, 2: { conditions: { xs: "_17kzyit61", sm: "_17kzyit62", md: "_17kzyit63", lg: "_17kzyit64", xl: "_17kzyit65", xxl: "_17kzyit66" }, defaultClass: "_17kzyit64" }, 3: { conditions: { xs: "_17kzyit67", sm: "_17kzyit68", md: "_17kzyit69", lg: "_17kzyit6a", xl: "_17kzyit6b", xxl: "_17kzyit6c" }, defaultClass: "_17kzyit6a" }, 4: { conditions: { xs: "_17kzyit6d", sm: "_17kzyit6e", md: "_17kzyit6f", lg: "_17kzyit6g", xl: "_17kzyit6h", xxl: "_17kzyit6i" }, defaultClass: "_17kzyit6g" }, 5: { conditions: { xs: "_17kzyit6j", sm: "_17kzyit6k", md: "_17kzyit6l", lg: "_17kzyit6m", xl: "_17kzyit6n", xxl: "_17kzyit6o" }, defaultClass: "_17kzyit6m" } } }, gap: { values: { 0: { conditions: { xs: "_17kzyit6p", sm: "_17kzyit6q", md: "_17kzyit6r", lg: "_17kzyit6s", xl: "_17kzyit6t", xxl: "_17kzyit6u" }, defaultClass: "_17kzyit6s" }, 1: { conditions: { xs: "_17kzyit6v", sm: "_17kzyit6w", md: "_17kzyit6x", lg: "_17kzyit6y", xl: "_17kzyit6z", xxl: "_17kzyit70" }, defaultClass: "_17kzyit6y" }, 2: { conditions: { xs: "_17kzyit71", sm: "_17kzyit72", md: "_17kzyit73", lg: "_17kzyit74", xl: "_17kzyit75", xxl: "_17kzyit76" }, defaultClass: "_17kzyit74" }, 3: { conditions: { xs: "_17kzyit77", sm: "_17kzyit78", md: "_17kzyit79", lg: "_17kzyit7a", xl: "_17kzyit7b", xxl: "_17kzyit7c" }, defaultClass: "_17kzyit7a" }, 4: { conditions: { xs: "_17kzyit7d", sm: "_17kzyit7e", md: "_17kzyit7f", lg: "_17kzyit7g", xl: "_17kzyit7h", xxl: "_17kzyit7i" }, defaultClass: "_17kzyit7g" }, 5: { conditions: { xs: "_17kzyit7j", sm: "_17kzyit7k", md: "_17kzyit7l", lg: "_17kzyit7m", xl: "_17kzyit7n", xxl: "_17kzyit7o" }, defaultClass: "_17kzyit7m" } } } } });
function Ne(e, r) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Ae(e) {
  var r = Ne(e, "string");
  return typeof r == "symbol" ? r : String(r);
}
function De(e, r, n) {
  return r = Ae(r), r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n, e;
}
function Wt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(f) {
      return Object.getOwnPropertyDescriptor(e, f).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Lt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Wt(Object(n), !0).forEach(function(i) {
      De(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Ut(e, r) {
  var n = {};
  for (var i in e)
    n[i] = r(e[i], i);
  return n;
}
var Fe = (e, r, n) => {
  for (var i of Object.keys(e)) {
    var f;
    if (e[i] !== ((f = r[i]) !== null && f !== void 0 ? f : n[i]))
      return !1;
  }
  return !0;
}, T = (e) => {
  var r = (n) => {
    var i = e.defaultClassName, f = Lt(Lt({}, e.defaultVariants), n);
    for (var z in f) {
      var x, b = (x = f[z]) !== null && x !== void 0 ? x : e.defaultVariants[z];
      if (b != null) {
        var l = b;
        typeof l == "boolean" && (l = l === !0 ? "true" : "false");
        var g = (
          // @ts-expect-error
          e.variantClassNames[z][l]
        );
        g && (i += " " + g);
      }
    }
    for (var [m, C] of e.compoundVariants)
      Fe(m, f, e.defaultVariants) && (i += " " + C);
    return i;
  };
  return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
    get base() {
      return e.defaultClassName.split(" ")[0];
    },
    get variants() {
      return Ut(e.variantClassNames, (n) => Ut(n, (i) => i.split(" ")[0]));
    }
  }, r;
}, Ve = T({ defaultClassName: "_11dl3cx0", variantClassNames: { flexDirection: { row: "_11dl3cx1", column: "_11dl3cx2" } }, defaultVariants: {}, compoundVariants: [] });
function Ie(e, r) {
  return Vt.map(e, (n, i) => /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    n,
    i < Vt.count(e) - 1 && r(i.toString())
  ] }));
}
const dr = J(
  ({
    component: e = "div",
    direction: r,
    divider: n,
    spacing: i,
    justifyContent: f,
    alignItems: z,
    className: x,
    ref: b,
    children: l,
    ...g
  }) => {
    const m = e;
    return /* @__PURE__ */ h.jsx(
      m,
      {
        className: I(
          Te({
            display: "flex",
            flexDirection: r,
            justifyContent: f,
            alignItems: z
          }),
          Ve({ flexDirection: r }),
          x
        ),
        "data-testId": "stack",
        ref: b,
        ...g,
        style: { "--spacing": i },
        children: n ? Ie(l, (C) => /* @__PURE__ */ h.jsx($e, { children: n }, C)) : l
      }
    );
  }
), $e = ({ children: e }) => /* @__PURE__ */ h.jsx(h.Fragment, { children: e });
var qe = T({ defaultClassName: "_1mmexrq1", variantClassNames: { orientation: { horizontal: "_1mmexrq2", vertical: "_1mmexrq3" } }, defaultVariants: {}, compoundVariants: [] });
const _r = J(
  ({ className: e, orientation: r = "horizontal", ref: n, ...i }) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: n,
      className: I(qe({ orientation: r }), e),
      ...i,
      "data-testId": "divider"
    }
  )
);
var Ye = { center: "xqwo1r63" }, We = T({ defaultClassName: "_6coxft0", variantClassNames: { afterColor: { primary: "_6coxft1", secondary: "_6coxft2", error: "_6coxft3" }, easing: { ease: "_6coxft4", easeIn: "_6coxft5", easeOut: "_6coxft6", easeInOut: "_6coxft7", linear: "_6coxft8" } }, defaultVariants: {}, compoundVariants: [] });
const Le = (e = {
  afterColor: "primary",
  easing: "ease",
  duration: "0.3s",
  delay: "0s"
}) => ({
  className: We({
    afterColor: e.afterColor,
    easing: e.easing
  }),
  style: { "--transition-duration": e.duration, "--transition-delay": e.delay }
});
var Ue = T({ defaultClassName: "_1cx21do1", variantClassNames: {}, defaultVariants: {}, compoundVariants: [] }), Be = T({ defaultClassName: "_1cx21do2", variantClassNames: {}, defaultVariants: {}, compoundVariants: [] });
const Me = (e = {
  duration: "1s",
  delay: "0s"
}, r = !1) => ({
  className: r ? Ue() : Be(),
  style: {
    "--animation-duration": e.duration,
    "--animation-delay": e.delay
  }
});
var Ke = T({ defaultClassName: "_1xga8pg9", variantClassNames: { direction: { bottom: "_1xga8pga", top: "_1xga8pgb", left: "_1xga8pgc", right: "_1xga8pgd" } }, defaultVariants: {}, compoundVariants: [] }), Ge = T({ defaultClassName: "_1xga8pg4", variantClassNames: { direction: { bottom: "_1xga8pg5", top: "_1xga8pg6", left: "_1xga8pg7", right: "_1xga8pg8" } }, defaultVariants: {}, compoundVariants: [] });
const Je = (e = {
  direction: "bottom",
  duration: "0.3s",
  delay: "0s"
}, r = !1) => ({
  className: I(
    r ? Ke({ direction: e.direction }) : Ge({ direction: e.direction })
  ),
  style: {
    "--animation-duration": e.duration,
    "--animation-delay": e.delay
  }
});
var Xe = T({ defaultClassName: "_1vsfbz45", variantClassNames: { axis: { x: "_1vsfbz46", y: "_1vsfbz47" } }, defaultVariants: {}, compoundVariants: [] }), He = T({ defaultClassName: "_1vsfbz42", variantClassNames: { axis: { x: "_1vsfbz43", y: "_1vsfbz44" } }, defaultVariants: {}, compoundVariants: [] });
const Ze = (e = {
  axis: "x",
  duration: "0.3s",
  delay: "0s"
}, r = !1) => ({
  className: r ? Xe({ axis: e.axis }) : He({ axis: e.axis }),
  style: {
    "--animation-duration": e.duration,
    "--animation-delay": e.delay
  }
});
var Qe = T({ defaultClassName: "_1x4r3vl0", variantClassNames: { afterColor: { primary: "_1x4r3vl1", secondary: "_1x4r3vl2", error: "_1x4r3vl3" }, easing: { ease: "_1x4r3vl4", easeIn: "_1x4r3vl5", easeOut: "_1x4r3vl6", easeInOut: "_1x4r3vl7", linear: "_1x4r3vl8" } }, defaultVariants: {}, compoundVariants: [] });
const tr = (e = {
  afterColor: "primary",
  duration: "0.3s",
  delay: "1s",
  easing: "ease"
}, r) => r ? {
  className: I(
    Qe({ afterColor: e.afterColor, easing: e.easing })
  ),
  style: {
    "--transition-duration": e.duration,
    "--transition-delay": e.delay
  }
} : { className: "", style: {} }, er = {
  slide: Je,
  bgColorFade: Le,
  textColor: tr,
  squeeze: Ze,
  shake: Me
}, Bt = (e, r = !1) => {
  if (!e)
    return { className: "", style: {} };
  const { key: n, option: i } = e, f = er[n];
  if (f)
    return f(i, r);
  throw new Error("Invalid animation type");
}, Mt = (e) => {
  const { in: r, hover: n } = e;
  return !r && !n ? { className: "", style: {} } : r ? Bt(r) : Bt(n, !0);
};
var rr = T({ defaultClassName: "_1gcp0hf1", variantClassNames: { state: { primary: "_1gcp0hf2", secondary: "_1gcp0hf3", error: "_1gcp0hf4" }, outline: { primary: "_1gcp0hf5", secondary: "_1gcp0hf6", error: "_1gcp0hf7", none: "_1gcp0hf8" }, radius: { lg: "_1gcp0hf9", md: "_1gcp0hfa", none: "_1gcp0hfb" }, typography: { "body-medium": "_1gcp0hfc" }, animations: { scaleUp: "_1gcp0hfd", scaleDown: "_1gcp0hfe", "primary--border": "_1gcp0hff", "secondary--border": "_1gcp0hfg", "error--border": "_1gcp0hfh" }, transform: { ease: "_1gcp0hfi", easeIn: "_1gcp0hfj", easeOut: "_1gcp0hfk", easeInOut: "_1gcp0hfl", liner: "_1gcp0hfm" }, border: { ease: "_1gcp0hfn", easeIn: "_1gcp0hfo", easeOut: "_1gcp0hfp", easeInOut: "_1gcp0hfq", liner: "_1gcp0hfr" } }, defaultVariants: { state: "primary", outline: "primary", radius: "lg", typography: "body-medium" }, compoundVariants: [] });
const mr = J(
  ({
    className: e,
    state: r,
    radius: n,
    outline: i,
    typography: f,
    delay: z = "0s",
    duration: x = "0.3s",
    easing: b,
    ref: l,
    children: g,
    ...m
  }) => {
    const { style: C, className: R } = Mt({
      hover: {
        key: "bgColorFade",
        option: {
          delay: z,
          afterColor: r,
          duration: x,
          easing: b
        }
      }
    }), { style: A, className: Y } = Mt({
      hover: {
        key: "textColor",
        option: {
          delay: z,
          afterColor: r,
          duration: x,
          easing: b
        }
      }
    });
    return /* @__PURE__ */ h.jsx(
      "button",
      {
        className: I(
          rr({
            state: r,
            radius: n,
            outline: i,
            typography: f
          }),
          Y,
          R,
          e
        ),
        ref: l,
        ...m,
        style: { ...C, ...A },
        children: g
      }
    );
  }
), kr = J(
  ({ className: e, children: r, ...n }, i) => /* @__PURE__ */ h.jsx("span", { className: I(Ye.center, e), ref: i, ...n, children: r })
);
var ar = { h1: "_18mo9cr0", h2: "_18mo9cr1", h3: "_18mo9cr2", h4: "_18mo9cr3", h5: "_18mo9cr4", h6: "_18mo9cr5", p: "_18mo9cr6", strong: "_18mo9cr7", "body-large": "_18mo9cr8", "body-medium": "_18mo9cr9", "body-small": "_18mo9cra", backquote: "_18mo9crb" };
const vr = J(
  ({ component: e, variant: r, children: n, className: i, ...f }, z) => {
    const x = e;
    return /* @__PURE__ */ h.jsx(x, { className: I(ar[r], i), ref: z, ...f, children: n });
  }
);
var ir = "_1ktymxk0", nr = "_1ktymxk3", Kt = "_1ktymxk2", sr = "_1ktymxk1", or = "_1ktymxk4";
const lr = () => {
}, zr = J(
  ({ className: e, id: r, customCheckbox: n, ...i }, f) => {
    const z = (n == null ? void 0 : n.checked) ?? /* @__PURE__ */ h.jsx(It, { fill: i.color || "aquamarine", color: "gray" }), x = (n == null ? void 0 : n.unchecked) ?? /* @__PURE__ */ h.jsx(It, { color: "gray" }), b = i.onChange ?? lr, [l, g] = pe(i.checked || !1);
    return /* @__PURE__ */ h.jsxs("label", { className: nr, children: [
      /* @__PURE__ */ h.jsxs("span", { className: ir, children: [
        l ? /* @__PURE__ */ h.jsxs("span", { className: Kt, children: [
          " ",
          z
        ] }) : /* @__PURE__ */ h.jsxs("span", { className: Kt, children: [
          " ",
          x
        ] }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: f,
            type: "checkbox",
            id: r,
            onChange: (m) => {
              g(!l), b(m);
            },
            className: I(sr, e),
            ...i
          }
        )
      ] }),
      /* @__PURE__ */ h.jsx("p", { className: or, children: i.label })
    ] });
  }
);
export {
  yr as Badge,
  mr as Button,
  kr as ButtonIcon,
  zr as Checkbox,
  _r as Divider,
  dr as Stack,
  vr as Typography
};
