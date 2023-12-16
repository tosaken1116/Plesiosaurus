var s0 = Object.defineProperty;
var l0 = (e, t, r) => t in e ? s0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Me = (e, t, r) => (l0(e, typeof t != "symbol" ? t + "" : t, r), r);
import { j as u0 } from "./jsx-runtime-NmMXPjeo.mjs";
import * as j_ from "react";
import F_ from "react";
import Tn from "react-dom";
import { Stack as c0 } from "./components/Stack/index.js";
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function d0(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var n = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var Kp = { exports: {} }, et = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dv;
function f0() {
  return Dv || (Dv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F_, t = Tn, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(w) {
      {
        for (var V = arguments.length, z = new Array(V > 1 ? V - 1 : 0), Y = 1; Y < V; Y++)
          z[Y - 1] = arguments[Y];
        o("warn", w, z);
      }
    }
    function n(w) {
      {
        for (var V = arguments.length, z = new Array(V > 1 ? V - 1 : 0), Y = 1; Y < V; Y++)
          z[Y - 1] = arguments[Y];
        o("error", w, z);
      }
    }
    function o(w, V, z) {
      {
        var Y = r.ReactDebugCurrentFrame, me = Y.getStackAddendum();
        me !== "" && (V += "%s", z = z.concat([me]));
        var Ae = z.map(function(Qe) {
          return String(Qe);
        });
        Ae.unshift("Warning: " + V), Function.prototype.apply.call(console[w], console, Ae);
      }
    }
    function i(w) {
      return w._reactInternals;
    }
    var s = 0, l = 1, u = 3, c = 5, d = 6, f = (
      /*                      */
      0
    ), p = (
      /*                    */
      2
    ), v = (
      /*                    */
      4096
    );
    r.ReactCurrentOwner;
    function b(w) {
      var V = w, z = w;
      if (w.alternate)
        for (; V.return; )
          V = V.return;
      else {
        var Y = V;
        do
          V = Y, (V.flags & (p | v)) !== f && (z = V.return), Y = V.return;
        while (Y);
      }
      return V.tag === u ? z : null;
    }
    function y(w) {
      if (b(w) !== w)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function h(w) {
      var V = w.alternate;
      if (!V) {
        var z = b(w);
        if (z === null)
          throw new Error("Unable to find node on an unmounted component.");
        return z !== w ? null : w;
      }
      for (var Y = w, me = V; ; ) {
        var Ae = Y.return;
        if (Ae === null)
          break;
        var Qe = Ae.alternate;
        if (Qe === null) {
          var bt = Ae.return;
          if (bt !== null) {
            Y = me = bt;
            continue;
          }
          break;
        }
        if (Ae.child === Qe.child) {
          for (var gt = Ae.child; gt; ) {
            if (gt === Y)
              return y(Ae), w;
            if (gt === me)
              return y(Ae), V;
            gt = gt.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (Y.return !== me.return)
          Y = Ae, me = Qe;
        else {
          for (var vt = !1, ot = Ae.child; ot; ) {
            if (ot === Y) {
              vt = !0, Y = Ae, me = Qe;
              break;
            }
            if (ot === me) {
              vt = !0, me = Ae, Y = Qe;
              break;
            }
            ot = ot.sibling;
          }
          if (!vt) {
            for (ot = Qe.child; ot; ) {
              if (ot === Y) {
                vt = !0, Y = Qe, me = Ae;
                break;
              }
              if (ot === me) {
                vt = !0, me = Qe, Y = Ae;
                break;
              }
              ot = ot.sibling;
            }
            if (!vt)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (Y.alternate !== me)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (Y.tag !== u)
        throw new Error("Unable to find node on an unmounted component.");
      return Y.stateNode.current === Y ? w : V;
    }
    var $ = Object.assign;
    function A(w) {
      var V, z = w.keyCode;
      return "charCode" in w ? (V = w.charCode, V === 0 && z === 13 && (V = 13)) : V = z, V === 10 && (V = 13), V >= 32 || V === 13 ? V : 0;
    }
    function S() {
      return !0;
    }
    function T() {
      return !1;
    }
    function E(w) {
      function V(z, Y, me, Ae, Qe) {
        this._reactName = z, this._targetInst = me, this.type = Y, this.nativeEvent = Ae, this.target = Qe, this.currentTarget = null;
        for (var bt in w)
          if (w.hasOwnProperty(bt)) {
            var gt = w[bt];
            gt ? this[bt] = gt(Ae) : this[bt] = Ae[bt];
          }
        var vt = Ae.defaultPrevented != null ? Ae.defaultPrevented : Ae.returnValue === !1;
        return vt ? this.isDefaultPrevented = S : this.isDefaultPrevented = T, this.isPropagationStopped = T, this;
      }
      return $(V.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var z = this.nativeEvent;
          z && (z.preventDefault ? z.preventDefault() : typeof z.returnValue != "unknown" && (z.returnValue = !1), this.isDefaultPrevented = S);
        },
        stopPropagation: function() {
          var z = this.nativeEvent;
          z && (z.stopPropagation ? z.stopPropagation() : typeof z.cancelBubble != "unknown" && (z.cancelBubble = !0), this.isPropagationStopped = S);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: S
      }), V;
    }
    var M = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(w) {
        return w.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, L = E(M), ie = $({}, M, {
      view: 0,
      detail: 0
    });
    E(ie);
    var J, fe, de;
    function G(w) {
      w !== de && (de && w.type === "mousemove" ? (J = w.screenX - de.screenX, fe = w.screenY - de.screenY) : (J = 0, fe = 0), de = w);
    }
    var ae = $({}, ie, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: F,
      button: 0,
      buttons: 0,
      relatedTarget: function(w) {
        return w.relatedTarget === void 0 ? w.fromElement === w.srcElement ? w.toElement : w.fromElement : w.relatedTarget;
      },
      movementX: function(w) {
        return "movementX" in w ? w.movementX : (G(w), J);
      },
      movementY: function(w) {
        return "movementY" in w ? w.movementY : fe;
      }
    });
    E(ae);
    var xe = $({}, ae, {
      dataTransfer: 0
    });
    E(xe);
    var ve = $({}, ie, {
      relatedTarget: 0
    });
    E(ve);
    var $e = $({}, M, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    E($e);
    var Te = $({}, M, {
      clipboardData: function(w) {
        return "clipboardData" in w ? w.clipboardData : window.clipboardData;
      }
    });
    E(Te);
    var g = $({}, M, {
      data: 0
    });
    E(g);
    var q = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, R = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function x(w) {
      if (w.key) {
        var V = q[w.key] || w.key;
        if (V !== "Unidentified")
          return V;
      }
      if (w.type === "keypress") {
        var z = A(w);
        return z === 13 ? "Enter" : String.fromCharCode(z);
      }
      return w.type === "keydown" || w.type === "keyup" ? R[w.keyCode] || "Unidentified" : "";
    }
    var j = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function H(w) {
      var V = this, z = V.nativeEvent;
      if (z.getModifierState)
        return z.getModifierState(w);
      var Y = j[w];
      return Y ? !!z[Y] : !1;
    }
    function F(w) {
      return H;
    }
    var k = $({}, ie, {
      key: x,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: F,
      // Legacy Interface
      charCode: function(w) {
        return w.type === "keypress" ? A(w) : 0;
      },
      keyCode: function(w) {
        return w.type === "keydown" || w.type === "keyup" ? w.keyCode : 0;
      },
      which: function(w) {
        return w.type === "keypress" ? A(w) : w.type === "keydown" || w.type === "keyup" ? w.keyCode : 0;
      }
    });
    E(k);
    var Q = $({}, ae, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    E(Q);
    var oe = $({}, ie, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: F
    });
    E(oe);
    var he = $({}, M, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    E(he);
    var we = $({}, ae, {
      deltaX: function(w) {
        return "deltaX" in w ? w.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in w ? -w.wheelDeltaX : 0
        );
      },
      deltaY: function(w) {
        return "deltaY" in w ? w.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in w ? -w.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in w ? -w.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    });
    E(we);
    var K = 1;
    function se(w, V, z, Y, me, Ae, Qe, bt, gt) {
      var vt = Array.prototype.slice.call(arguments, 3);
      try {
        V.apply(z, vt);
      } catch (ot) {
        this.onError(ot);
      }
    }
    var be = se;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var B = document.createElement("react");
      be = function(V, z, Y, me, Ae, Qe, bt, gt, vt) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var ot = document.createEvent("Event"), mf = !1, Mv = !0, o0 = window.event, qv = Object.getOwnPropertyDescriptor(window, "event");
        function Iv() {
          B.removeEventListener(hf, Nv, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = o0);
        }
        var i0 = Array.prototype.slice.call(arguments, 3);
        function Nv() {
          mf = !0, Iv(), z.apply(Y, i0), Mv = !1;
        }
        var nr, kv = !1, jv = !1;
        function Fv(io) {
          if (nr = io.error, kv = !0, nr === null && io.colno === 0 && io.lineno === 0 && (jv = !0), io.defaultPrevented && nr != null && typeof nr == "object")
            try {
              nr._suppressLogging = !0;
            } catch {
            }
        }
        var hf = "react-" + (V || "invokeguardedcallback");
        if (window.addEventListener("error", Fv), B.addEventListener(hf, Nv, !1), ot.initEvent(hf, !1, !1), B.dispatchEvent(ot), qv && Object.defineProperty(window, "event", qv), mf && Mv && (kv ? jv && (nr = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nr = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nr)), window.removeEventListener("error", Fv), !mf)
          return Iv(), se.apply(this, arguments);
      };
    }
    var Oe = be, le = !1, Ie = null, mt = !1, Ft = null, O = {
      onError: function(w) {
        le = !0, Ie = w;
      }
    };
    function I(w, V, z, Y, me, Ae, Qe, bt, gt) {
      le = !1, Ie = null, Oe.apply(O, arguments);
    }
    function W(w, V, z, Y, me, Ae, Qe, bt, gt) {
      if (I.apply(this, arguments), le) {
        var vt = P();
        mt || (mt = !0, Ft = vt);
      }
    }
    function X() {
      if (mt) {
        var w = Ft;
        throw mt = !1, Ft = null, w;
      }
    }
    function P() {
      if (le) {
        var w = Ie;
        return le = !1, Ie = null, w;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var pe = Array.isArray;
    function Be(w) {
      return pe(w);
    }
    var Le = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ze = Le.Events, ue = Ze[0], m = Ze[1], D = Ze[2], N = Ze[3], re = Ze[4], ce = e.unstable_act;
    function Ee(w) {
    }
    var ge = !1;
    function _e(w, V) {
      if (!w)
        return [];
      var z = h(w);
      if (!z)
        return [];
      for (var Y = z, me = []; ; ) {
        if (Y.tag === c || Y.tag === d || Y.tag === l || Y.tag === s) {
          var Ae = Y.stateNode;
          V(Ae) && me.push(Ae);
        }
        if (Y.child) {
          Y.child.return = Y, Y = Y.child;
          continue;
        }
        if (Y === z)
          return me;
        for (; !Y.sibling; ) {
          if (!Y.return || Y.return === z)
            return me;
          Y = Y.return;
        }
        Y.sibling.return = Y.return, Y = Y.sibling;
      }
    }
    function _(w, V) {
      if (w && !i(w)) {
        var z, Y = String(w);
        throw Be(w) ? z = "an array" : w && w.nodeType === K && w.tagName ? z = "a DOM node" : Y === "[object Object]" ? z = "object with keys {" + Object.keys(w).join(", ") + "}" : z = Y, new Error(V + "(...): the first argument must be a React class instance. " + ("Instead received: " + z + "."));
      }
    }
    function C(w) {
      var V = document.createElement("div");
      return t.render(w, V);
    }
    function U(w) {
      return e.isValidElement(w);
    }
    function te(w, V) {
      return e.isValidElement(w) && w.type === V;
    }
    function ne(w) {
      return !!(w && w.nodeType === K && w.tagName);
    }
    function ye(w) {
      return !!(w && e.isValidElement(w) && w.tagName);
    }
    function Pe(w) {
      return ne(w) ? !1 : w != null && typeof w.render == "function" && typeof w.setState == "function";
    }
    function qe(w, V) {
      if (!Pe(w))
        return !1;
      var z = i(w), Y = z.type;
      return Y === V;
    }
    function Je(w, V) {
      if (_(w, "findAllInRenderedTree"), !w)
        return [];
      var z = i(w);
      return _e(z, V);
    }
    function Ke(w, V) {
      return _(w, "scryRenderedDOMComponentsWithClass"), Je(w, function(z) {
        if (ne(z)) {
          var Y = z.className;
          typeof Y != "string" && (Y = z.getAttribute("class") || "");
          var me = Y.split(/\s+/);
          if (!Be(V)) {
            if (V === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            V = V.split(/\s+/);
          }
          return V.every(function(Ae) {
            return me.indexOf(Ae) !== -1;
          });
        }
        return !1;
      });
    }
    function ht(w, V) {
      _(w, "findRenderedDOMComponentWithClass");
      var z = Ke(w, V);
      if (z.length !== 1)
        throw new Error("Did not find exactly one match (found: " + z.length + ") for class:" + V);
      return z[0];
    }
    function Dt(w, V) {
      return _(w, "scryRenderedDOMComponentsWithTag"), Je(w, function(z) {
        return ne(z) && z.tagName.toUpperCase() === V.toUpperCase();
      });
    }
    function sa(w, V) {
      _(w, "findRenderedDOMComponentWithTag");
      var z = Dt(w, V);
      if (z.length !== 1)
        throw new Error("Did not find exactly one match (found: " + z.length + ") for tag:" + V);
      return z[0];
    }
    function tr(w, V) {
      return _(w, "scryRenderedComponentsWithType"), Je(w, function(z) {
        return qe(z, V);
      });
    }
    function rr(w, V) {
      _(w, "findRenderedComponentWithType");
      var z = tr(w, V);
      if (z.length !== 1)
        throw new Error("Did not find exactly one match (found: " + z.length + ") for componentType:" + V);
      return z[0];
    }
    function zr(w, V) {
      return ge || (ge = !0, a(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), V = V || w.mockTagName || "div", w.prototype.render.mockImplementation(function() {
        return e.createElement(V, null, this.props.children);
      }), this;
    }
    function df(w, V) {
      return {
        touches: [{
          pageX: w,
          pageY: V
        }]
      };
    }
    function la(w, V, z) {
      var Y = w.type || "unknown-event";
      w.currentTarget = m(z), W(Y, V, void 0, w), w.currentTarget = null;
    }
    function ff(w) {
      var V = w._dispatchListeners, z = w._dispatchInstances;
      if (Be(V))
        for (var Y = 0; Y < V.length && !w.isPropagationStopped(); Y++)
          la(w, V[Y], z[Y]);
      else
        V && la(w, V, z);
      w._dispatchListeners = null, w._dispatchInstances = null;
    }
    var oo = function(w) {
      w && (ff(w), w.isPersistent() || w.constructor.release(w));
    };
    function pf(w) {
      return w === "button" || w === "input" || w === "select" || w === "textarea";
    }
    function ua(w) {
      do
        w = w.return;
      while (w && w.tag !== c);
      return w || null;
    }
    function Ov(w, V, z) {
      for (var Y = []; w; )
        Y.push(w), w = ua(w);
      var me;
      for (me = Y.length; me-- > 0; )
        V(Y[me], "captured", z);
      for (me = 0; me < Y.length; me++)
        V(Y[me], "bubbled", z);
    }
    function YP(w, V, z) {
      switch (w) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(z.disabled && pf(V));
        default:
          return !1;
      }
    }
    function Tv(w, V) {
      var z = w.stateNode;
      if (!z)
        return null;
      var Y = D(z);
      if (!Y)
        return null;
      var me = Y[V];
      if (YP(V, w.type, Y))
        return null;
      if (me && typeof me != "function")
        throw new Error("Expected `" + V + "` listener to be a function, instead got a value of `" + typeof me + "` type.");
      return me;
    }
    function XP(w, V, z) {
      var Y = V._reactName;
      return z === "captured" && (Y += "Capture"), Tv(w, Y);
    }
    function JP(w, V, z) {
      if (w && z && z._reactName) {
        var Y = z._reactName, me = Tv(w, Y);
        me && (z._dispatchListeners == null && (z._dispatchListeners = []), z._dispatchInstances == null && (z._dispatchInstances = []), z._dispatchListeners.push(me), z._dispatchInstances.push(w));
      }
    }
    function QP(w, V, z) {
      w || n("Dispatching inst must not be null");
      var Y = XP(w, z, V);
      Y && (z._dispatchListeners == null && (z._dispatchListeners = []), z._dispatchInstances == null && (z._dispatchInstances = []), z._dispatchListeners.push(Y), z._dispatchInstances.push(w));
    }
    function ZP(w) {
      w && w._reactName && JP(w._targetInst, null, w);
    }
    function e0(w) {
      w && w._reactName && Ov(w._targetInst, QP, w);
    }
    var Av = {}, t0 = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function r0(w) {
      return function(V, z) {
        if (e.isValidElement(V))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (Pe(V))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var Y = "on" + w[0].toUpperCase() + w.slice(1), me = new Ee();
        me.target = V, me.type = w.toLowerCase();
        var Ae = ue(V), Qe = new L(Y, me.type, Ae, me, V);
        Qe.persist(), $(Qe, z), t0.has(w) ? ZP(Qe) : e0(Qe), t.unstable_batchedUpdates(function() {
          N(V), oo(Qe), X();
        }), re();
      };
    }
    var n0 = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function a0() {
      n0.forEach(function(w) {
        Av[w] = r0(w);
      });
    }
    a0(), et.Simulate = Av, et.act = ce, et.findAllInRenderedTree = Je, et.findRenderedComponentWithType = rr, et.findRenderedDOMComponentWithClass = ht, et.findRenderedDOMComponentWithTag = sa, et.isCompositeComponent = Pe, et.isCompositeComponentWithType = qe, et.isDOMComponent = ne, et.isDOMComponentElement = ye, et.isElement = U, et.isElementOfType = te, et.mockComponent = zr, et.nativeTouchData = df, et.renderIntoDocument = C, et.scryRenderedComponentsWithType = tr, et.scryRenderedDOMComponentsWithClass = Ke, et.scryRenderedDOMComponentsWithTag = Dt, et.traverseTwoPhase = Ov;
  }()), et;
}
var tt = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv;
function p0() {
  if (Bv)
    return tt;
  Bv = 1;
  var e = F_, t = Tn;
  function r(m) {
    var D = m, N = m;
    if (m.alternate)
      for (; D.return; )
        D = D.return;
    else {
      m = D;
      do
        D = m, D.flags & 4098 && (N = D.return), m = D.return;
      while (m);
    }
    return D.tag === 3 ? N : null;
  }
  function a(m) {
    if (r(m) !== m)
      throw Error("Unable to find node on an unmounted component.");
  }
  function n(m) {
    var D = m.alternate;
    if (!D) {
      if (D = r(m), D === null)
        throw Error("Unable to find node on an unmounted component.");
      return D !== m ? null : m;
    }
    for (var N = m, re = D; ; ) {
      var ce = N.return;
      if (ce === null)
        break;
      var Ee = ce.alternate;
      if (Ee === null) {
        if (re = ce.return, re !== null) {
          N = re;
          continue;
        }
        break;
      }
      if (ce.child === Ee.child) {
        for (Ee = ce.child; Ee; ) {
          if (Ee === N)
            return a(ce), m;
          if (Ee === re)
            return a(ce), D;
          Ee = Ee.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (N.return !== re.return)
        N = ce, re = Ee;
      else {
        for (var ge = !1, _e = ce.child; _e; ) {
          if (_e === N) {
            ge = !0, N = ce, re = Ee;
            break;
          }
          if (_e === re) {
            ge = !0, re = ce, N = Ee;
            break;
          }
          _e = _e.sibling;
        }
        if (!ge) {
          for (_e = Ee.child; _e; ) {
            if (_e === N) {
              ge = !0, N = Ee, re = ce;
              break;
            }
            if (_e === re) {
              ge = !0, re = Ee, N = ce;
              break;
            }
            _e = _e.sibling;
          }
          if (!ge)
            throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (N.alternate !== re)
        throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (N.tag !== 3)
      throw Error("Unable to find node on an unmounted component.");
    return N.stateNode.current === N ? m : D;
  }
  var o = Object.assign;
  function i(m) {
    var D = m.keyCode;
    return "charCode" in m ? (m = m.charCode, m === 0 && D === 13 && (m = 13)) : m = D, m === 10 && (m = 13), 32 <= m || m === 13 ? m : 0;
  }
  function s() {
    return !0;
  }
  function l() {
    return !1;
  }
  function u(m) {
    function D(N, re, ce, Ee, ge) {
      this._reactName = N, this._targetInst = ce, this.type = re, this.nativeEvent = Ee, this.target = ge, this.currentTarget = null;
      for (var _e in m)
        m.hasOwnProperty(_e) && (N = m[_e], this[_e] = N ? N(Ee) : Ee[_e]);
      return this.isDefaultPrevented = (Ee.defaultPrevented != null ? Ee.defaultPrevented : Ee.returnValue === !1) ? s : l, this.isPropagationStopped = l, this;
    }
    return o(D.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var N = this.nativeEvent;
      N && (N.preventDefault ? N.preventDefault() : typeof N.returnValue != "unknown" && (N.returnValue = !1), this.isDefaultPrevented = s);
    }, stopPropagation: function() {
      var N = this.nativeEvent;
      N && (N.stopPropagation ? N.stopPropagation() : typeof N.cancelBubble != "unknown" && (N.cancelBubble = !0), this.isPropagationStopped = s);
    }, persist: function() {
    }, isPersistent: s }), D;
  }
  var c = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(m) {
    return m.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, d = u(c), f = o({}, c, { view: 0, detail: 0 });
  u(f);
  var p, v, b, y = o({}, f, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: J, button: 0, buttons: 0, relatedTarget: function(m) {
    return m.relatedTarget === void 0 ? m.fromElement === m.srcElement ? m.toElement : m.fromElement : m.relatedTarget;
  }, movementX: function(m) {
    return "movementX" in m ? m.movementX : (m !== b && (b && m.type === "mousemove" ? (p = m.screenX - b.screenX, v = m.screenY - b.screenY) : v = p = 0, b = m), p);
  }, movementY: function(m) {
    return "movementY" in m ? m.movementY : v;
  } });
  u(y);
  var h = o({}, y, { dataTransfer: 0 });
  u(h);
  var $ = o({}, f, { relatedTarget: 0 });
  u($);
  var A = o({}, c, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  u(A);
  var S = o({}, c, { clipboardData: function(m) {
    return "clipboardData" in m ? m.clipboardData : window.clipboardData;
  } });
  u(S);
  var T = o({}, c, { data: 0 });
  u(T);
  var E = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, M = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, L = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ie(m) {
    var D = this.nativeEvent;
    return D.getModifierState ? D.getModifierState(m) : (m = L[m]) ? !!D[m] : !1;
  }
  function J() {
    return ie;
  }
  var fe = o({}, f, { key: function(m) {
    if (m.key) {
      var D = E[m.key] || m.key;
      if (D !== "Unidentified")
        return D;
    }
    return m.type === "keypress" ? (m = i(m), m === 13 ? "Enter" : String.fromCharCode(m)) : m.type === "keydown" || m.type === "keyup" ? M[m.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: J, charCode: function(m) {
    return m.type === "keypress" ? i(m) : 0;
  }, keyCode: function(m) {
    return m.type === "keydown" || m.type === "keyup" ? m.keyCode : 0;
  }, which: function(m) {
    return m.type === "keypress" ? i(m) : m.type === "keydown" || m.type === "keyup" ? m.keyCode : 0;
  } });
  u(fe);
  var de = o({}, y, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  u(de);
  var G = o({}, f, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: J });
  u(G);
  var ae = o({}, c, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  u(ae);
  var xe = o({}, y, { deltaX: function(m) {
    return "deltaX" in m ? m.deltaX : "wheelDeltaX" in m ? -m.wheelDeltaX : 0;
  }, deltaY: function(m) {
    return "deltaY" in m ? m.deltaY : "wheelDeltaY" in m ? -m.wheelDeltaY : "wheelDelta" in m ? -m.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  u(xe);
  function ve(m, D, N, re, ce, Ee, ge, _e, _) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      D.apply(N, C);
    } catch (U) {
      this.onError(U);
    }
  }
  var $e = !1, Te = null, g = !1, q = null, R = { onError: function(m) {
    $e = !0, Te = m;
  } };
  function x(m, D, N, re, ce, Ee, ge, _e, _) {
    $e = !1, Te = null, ve.apply(R, arguments);
  }
  function j(m, D, N, re, ce, Ee, ge, _e, _) {
    if (x.apply(this, arguments), $e) {
      if ($e) {
        var C = Te;
        $e = !1, Te = null;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      g || (g = !0, q = C);
    }
  }
  var H = Array.isArray, F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, k = F[0], Q = F[1], oe = F[2], he = F[3], we = F[4], K = e.unstable_act;
  function se() {
  }
  function be(m, D) {
    if (!m)
      return [];
    if (m = n(m), !m)
      return [];
    for (var N = m, re = []; ; ) {
      if (N.tag === 5 || N.tag === 6 || N.tag === 1 || N.tag === 0) {
        var ce = N.stateNode;
        D(ce) && re.push(ce);
      }
      if (N.child)
        N.child.return = N, N = N.child;
      else {
        if (N === m)
          return re;
        for (; !N.sibling; ) {
          if (!N.return || N.return === m)
            return re;
          N = N.return;
        }
        N.sibling.return = N.return, N = N.sibling;
      }
    }
  }
  function B(m, D) {
    if (m && !m._reactInternals) {
      var N = String(m);
      throw m = H(m) ? "an array" : m && m.nodeType === 1 && m.tagName ? "a DOM node" : N === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : N, Error(D + "(...): the first argument must be a React class instance. Instead received: " + (m + "."));
    }
  }
  function Oe(m) {
    return !(!m || m.nodeType !== 1 || !m.tagName);
  }
  function le(m) {
    return Oe(m) ? !1 : m != null && typeof m.render == "function" && typeof m.setState == "function";
  }
  function Ie(m, D) {
    return le(m) ? m._reactInternals.type === D : !1;
  }
  function mt(m, D) {
    return B(m, "findAllInRenderedTree"), m ? be(m._reactInternals, D) : [];
  }
  function Ft(m, D) {
    return B(m, "scryRenderedDOMComponentsWithClass"), mt(m, function(N) {
      if (Oe(N)) {
        var re = N.className;
        typeof re != "string" && (re = N.getAttribute("class") || "");
        var ce = re.split(/\s+/);
        if (!H(D)) {
          if (D === void 0)
            throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          D = D.split(/\s+/);
        }
        return D.every(function(Ee) {
          return ce.indexOf(Ee) !== -1;
        });
      }
      return !1;
    });
  }
  function O(m, D) {
    return B(m, "scryRenderedDOMComponentsWithTag"), mt(m, function(N) {
      return Oe(N) && N.tagName.toUpperCase() === D.toUpperCase();
    });
  }
  function I(m, D) {
    return B(m, "scryRenderedComponentsWithType"), mt(m, function(N) {
      return Ie(N, D);
    });
  }
  function W(m, D, N) {
    var re = m.type || "unknown-event";
    m.currentTarget = Q(N), j(re, D, void 0, m), m.currentTarget = null;
  }
  function X(m, D, N) {
    for (var re = []; m; ) {
      re.push(m);
      do
        m = m.return;
      while (m && m.tag !== 5);
      m = m || null;
    }
    for (m = re.length; 0 < m--; )
      D(re[m], "captured", N);
    for (m = 0; m < re.length; m++)
      D(re[m], "bubbled", N);
  }
  function P(m, D) {
    var N = m.stateNode;
    if (!N)
      return null;
    var re = oe(N);
    if (!re)
      return null;
    N = re[D];
    e:
      switch (D) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (re = !re.disabled) || (m = m.type, re = !(m === "button" || m === "input" || m === "select" || m === "textarea")), m = !re;
          break e;
        default:
          m = !1;
      }
    if (m)
      return null;
    if (N && typeof N != "function")
      throw Error("Expected `" + D + "` listener to be a function, instead got a value of `" + typeof N + "` type.");
    return N;
  }
  function pe(m, D, N) {
    m && N && N._reactName && (D = P(m, N._reactName)) && (N._dispatchListeners == null && (N._dispatchListeners = []), N._dispatchInstances == null && (N._dispatchInstances = []), N._dispatchListeners.push(D), N._dispatchInstances.push(m));
  }
  function Be(m, D, N) {
    var re = N._reactName;
    D === "captured" && (re += "Capture"), (D = P(m, re)) && (N._dispatchListeners == null && (N._dispatchListeners = []), N._dispatchInstances == null && (N._dispatchInstances = []), N._dispatchListeners.push(D), N._dispatchInstances.push(m));
  }
  var Le = {}, Ze = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function ue(m) {
    return function(D, N) {
      if (e.isValidElement(D))
        throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (le(D))
        throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var re = "on" + m[0].toUpperCase() + m.slice(1), ce = new se();
      ce.target = D, ce.type = m.toLowerCase();
      var Ee = k(D), ge = new d(re, ce.type, Ee, ce, D);
      ge.persist(), o(ge, N), Ze.has(m) ? ge && ge._reactName && pe(ge._targetInst, null, ge) : ge && ge._reactName && X(ge._targetInst, Be, ge), t.unstable_batchedUpdates(function() {
        if (he(D), ge) {
          var _e = ge._dispatchListeners, _ = ge._dispatchInstances;
          if (H(_e))
            for (var C = 0; C < _e.length && !ge.isPropagationStopped(); C++)
              W(ge, _e[C], _[C]);
          else
            _e && W(ge, _e, _);
          ge._dispatchListeners = null, ge._dispatchInstances = null, ge.isPersistent() || ge.constructor.release(ge);
        }
        if (g)
          throw _e = q, g = !1, q = null, _e;
      }), we();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(m) {
    Le[m] = ue(m);
  }), tt.Simulate = Le, tt.act = K, tt.findAllInRenderedTree = mt, tt.findRenderedComponentWithType = function(m, D) {
    if (B(m, "findRenderedComponentWithType"), m = I(m, D), m.length !== 1)
      throw Error("Did not find exactly one match (found: " + m.length + ") for componentType:" + D);
    return m[0];
  }, tt.findRenderedDOMComponentWithClass = function(m, D) {
    if (B(m, "findRenderedDOMComponentWithClass"), m = Ft(m, D), m.length !== 1)
      throw Error("Did not find exactly one match (found: " + m.length + ") for class:" + D);
    return m[0];
  }, tt.findRenderedDOMComponentWithTag = function(m, D) {
    if (B(m, "findRenderedDOMComponentWithTag"), m = O(m, D), m.length !== 1)
      throw Error("Did not find exactly one match (found: " + m.length + ") for tag:" + D);
    return m[0];
  }, tt.isCompositeComponent = le, tt.isCompositeComponentWithType = Ie, tt.isDOMComponent = Oe, tt.isDOMComponentElement = function(m) {
    return !!(m && e.isValidElement(m) && m.tagName);
  }, tt.isElement = function(m) {
    return e.isValidElement(m);
  }, tt.isElementOfType = function(m, D) {
    return e.isValidElement(m) && m.type === D;
  }, tt.mockComponent = function(m, D) {
    return D = D || m.mockTagName || "div", m.prototype.render.mockImplementation(function() {
      return e.createElement(D, null, this.props.children);
    }), this;
  }, tt.nativeTouchData = function(m, D) {
    return { touches: [{ pageX: m, pageY: D }] };
  }, tt.renderIntoDocument = function(m) {
    var D = document.createElement("div");
    return t.render(m, D);
  }, tt.scryRenderedComponentsWithType = I, tt.scryRenderedDOMComponentsWithClass = Ft, tt.scryRenderedDOMComponentsWithTag = O, tt.traverseTwoPhase = X, tt;
}
process.env.NODE_ENV === "production" ? Kp.exports = p0() : Kp.exports = f0();
var m0 = Kp.exports, Yp, Xp, ca = Tn;
if (process.env.NODE_ENV === "production")
  Xp = ca.createRoot, Yp = ca.hydrateRoot;
else {
  var so = ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Xp = function(e, t) {
    so.usingClientEntryPoint = !0;
    try {
      return ca.createRoot(e, t);
    } finally {
      so.usingClientEntryPoint = !1;
    }
  }, Yp = function(e, t, r) {
    so.usingClientEntryPoint = !0;
    try {
      return ca.hydrateRoot(e, t, r);
    } finally {
      so.usingClientEntryPoint = !1;
    }
  };
}
var kr = {}, wh = { exports: {} };
wh.exports;
(function(e) {
  const r = (o = 0) => (i) => `\x1B[${38 + o};5;${i}m`, a = (o = 0) => (i, s, l) => `\x1B[${38 + o};2;${i};${s};${l}m`;
  function n() {
    const o = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [s, l] of Object.entries(i)) {
      for (const [u, c] of Object.entries(l))
        i[u] = {
          open: `\x1B[${c[0]}m`,
          close: `\x1B[${c[1]}m`
        }, l[u] = i[u], o.set(c[0], c[1]);
      Object.defineProperty(i, s, {
        value: l,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: o,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = a(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = a(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (s, l, u) => s === l && l === u ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(l / 255 * 5) + Math.round(u / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (s) => {
          const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
          if (!l)
            return [0, 0, 0];
          let { colorString: u } = l.groups;
          u.length === 3 && (u = u.split("").map((d) => d + d).join(""));
          const c = Number.parseInt(u, 16);
          return [
            c >> 16 & 255,
            c >> 8 & 255,
            c & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: n
  });
})(wh);
var D_ = wh.exports, Xt = {};
Object.defineProperty(Xt, "__esModule", {
  value: !0
});
Xt.printIteratorEntries = v0;
Xt.printIteratorValues = y0;
Xt.printListItems = b0;
Xt.printObjectProperties = g0;
const h0 = (e, t) => {
  const r = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((a) => {
    Object.getOwnPropertyDescriptor(e, a).enumerable && r.push(a);
  }), r;
};
function v0(e, t, r, a, n, o, i = ": ") {
  let s = "", l = e.next();
  if (!l.done) {
    s += t.spacingOuter;
    const u = r + t.indent;
    for (; !l.done; ) {
      const c = o(
        l.value[0],
        t,
        u,
        a,
        n
      ), d = o(
        l.value[1],
        t,
        u,
        a,
        n
      );
      s += u + c + i + d, l = e.next(), l.done ? t.min || (s += ",") : s += "," + t.spacingInner;
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function y0(e, t, r, a, n, o) {
  let i = "", s = e.next();
  if (!s.done) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (; !s.done; )
      i += l + o(s.value, t, l, a, n), s = e.next(), s.done ? t.min || (i += ",") : i += "," + t.spacingInner;
    i += t.spacingOuter + r;
  }
  return i;
}
function b0(e, t, r, a, n, o) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const s = r + t.indent;
    for (let l = 0; l < e.length; l++)
      i += s, l in e && (i += o(e[l], t, s, a, n)), l < e.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    i += t.spacingOuter + r;
  }
  return i;
}
function g0(e, t, r, a, n, o) {
  let i = "";
  const s = h0(e, t.compareKeys);
  if (s.length) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (let u = 0; u < s.length; u++) {
      const c = s[u], d = o(c, t, l, a, n), f = o(e[c], t, l, a, n);
      i += l + d + ": " + f, u < s.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.test = vr.serialize = vr.default = void 0;
var Lv = Xt, Lo = function() {
  return typeof globalThis < "u" ? globalThis : typeof Lo < "u" ? Lo : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), vf = Lo["jest-symbol-do-not-touch"] || Lo.Symbol;
const w0 = typeof vf == "function" && vf.for ? vf.for("jest.asymmetricMatcher") : 1267621, lo = " ", B_ = (e, t, r, a, n, o) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++a > t.maxDepth ? "[" + i + "]" : i + lo + "[" + (0, Lv.printListItems)(
    e.sample,
    t,
    r,
    a,
    n,
    o
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++a > t.maxDepth ? "[" + i + "]" : i + lo + "{" + (0, Lv.printObjectProperties)(
    e.sample,
    t,
    r,
    a,
    n,
    o
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + lo + o(e.sample, t, r, a, n) : e.toAsymmetricMatcher();
};
vr.serialize = B_;
const L_ = (e) => e && e.$$typeof === w0;
vr.test = L_;
const _0 = {
  serialize: B_,
  test: L_
};
var $0 = _0;
vr.default = $0;
var yr = {}, E0 = ({ onlyFirst: e = !1 } = {}) => {
  const t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
};
Object.defineProperty(yr, "__esModule", {
  value: !0
});
yr.test = yr.serialize = yr.default = void 0;
var U_ = H_(E0), Ge = H_(D_);
function H_(e) {
  return e && e.__esModule ? e : { default: e };
}
const C0 = (e) => e.replace((0, U_.default)(), (t) => {
  switch (t) {
    case Ge.default.red.close:
    case Ge.default.green.close:
    case Ge.default.cyan.close:
    case Ge.default.gray.close:
    case Ge.default.white.close:
    case Ge.default.yellow.close:
    case Ge.default.bgRed.close:
    case Ge.default.bgGreen.close:
    case Ge.default.bgYellow.close:
    case Ge.default.inverse.close:
    case Ge.default.dim.close:
    case Ge.default.bold.close:
    case Ge.default.reset.open:
    case Ge.default.reset.close:
      return "</>";
    case Ge.default.red.open:
      return "<red>";
    case Ge.default.green.open:
      return "<green>";
    case Ge.default.cyan.open:
      return "<cyan>";
    case Ge.default.gray.open:
      return "<gray>";
    case Ge.default.white.open:
      return "<white>";
    case Ge.default.yellow.open:
      return "<yellow>";
    case Ge.default.bgRed.open:
      return "<bgRed>";
    case Ge.default.bgGreen.open:
      return "<bgGreen>";
    case Ge.default.bgYellow.open:
      return "<bgYellow>";
    case Ge.default.inverse.open:
      return "<inverse>";
    case Ge.default.dim.open:
      return "<dim>";
    case Ge.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
}), V_ = (e) => typeof e == "string" && !!e.match((0, U_.default)());
yr.test = V_;
const z_ = (e, t, r, a, n, o) => o(C0(e), t, r, a, n);
yr.serialize = z_;
const R0 = {
  serialize: z_,
  test: V_
};
var P0 = R0;
yr.default = P0;
var br = {};
Object.defineProperty(br, "__esModule", {
  value: !0
});
br.test = br.serialize = br.default = void 0;
var Uv = Xt;
const x0 = " ", W_ = ["DOMStringMap", "NamedNodeMap"], S0 = /^(HTML\w*Collection|NodeList)$/, O0 = (e) => W_.indexOf(e) !== -1 || S0.test(e), G_ = (e) => e && e.constructor && !!e.constructor.name && O0(e.constructor.name);
br.test = G_;
const T0 = (e) => e.constructor.name === "NamedNodeMap", K_ = (e, t, r, a, n, o) => {
  const i = e.constructor.name;
  return ++a > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + x0) + (W_.indexOf(i) !== -1 ? "{" + (0, Uv.printObjectProperties)(
    T0(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    r,
    a,
    n,
    o
  ) + "}" : "[" + (0, Uv.printListItems)(
    Array.from(e),
    t,
    r,
    a,
    n,
    o
  ) + "]");
};
br.serialize = K_;
const A0 = {
  serialize: K_,
  test: G_
};
var M0 = A0;
br.default = M0;
var gr = {}, st = {}, _h = {};
Object.defineProperty(_h, "__esModule", {
  value: !0
});
_h.default = q0;
function q0(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(st, "__esModule", {
  value: !0
});
st.printText = st.printProps = st.printElementAsLeaf = st.printElement = st.printComment = st.printChildren = void 0;
var Y_ = I0(_h);
function I0(e) {
  return e && e.__esModule ? e : { default: e };
}
const N0 = (e, t, r, a, n, o, i) => {
  const s = a + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, n, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + a), d = "{" + d + "}"), r.spacingInner + a + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
st.printProps = N0;
const k0 = (e, t, r, a, n, o) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? X_(i, t) : o(i, t, r, a, n))
).join("");
st.printChildren = k0;
const X_ = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, Y_.default)(e) + r.close;
};
st.printText = X_;
const j0 = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, Y_.default)(e) + "-->" + r.close;
};
st.printComment = j0;
const F0 = (e, t, r, a, n) => {
  const o = a.colors.tag;
  return o.open + "<" + e + (t && o.close + t + a.spacingOuter + n + o.open) + (r ? ">" + o.close + r + a.spacingOuter + n + o.open + "</" + e : (t && !a.min ? "" : " ") + "/") + ">" + o.close;
};
st.printElement = F0;
const D0 = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
st.printElementAsLeaf = D0;
Object.defineProperty(gr, "__esModule", {
  value: !0
});
gr.test = gr.serialize = gr.default = void 0;
var mn = st;
const B0 = 1, J_ = 3, Q_ = 8, Z_ = 11, L0 = /^((HTML|SVG)\w*)?Element$/, U0 = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, H0 = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: a } = e, n = typeof a == "string" && a.includes("-") || U0(e);
  return r === B0 && (L0.test(t) || n) || r === J_ && t === "Text" || r === Q_ && t === "Comment" || r === Z_ && t === "DocumentFragment";
}, e$ = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && H0(e);
};
gr.test = e$;
function V0(e) {
  return e.nodeType === J_;
}
function z0(e) {
  return e.nodeType === Q_;
}
function yf(e) {
  return e.nodeType === Z_;
}
const t$ = (e, t, r, a, n, o) => {
  if (V0(e))
    return (0, mn.printText)(e.data, t);
  if (z0(e))
    return (0, mn.printComment)(e.data, t);
  const i = yf(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++a > t.maxDepth ? (0, mn.printElementAsLeaf)(i, t) : (0, mn.printElement)(
    i,
    (0, mn.printProps)(
      yf(e) ? [] : Array.from(e.attributes).map((s) => s.name).sort(),
      yf(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      r + t.indent,
      a,
      n,
      o
    ),
    (0, mn.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      r + t.indent,
      a,
      n,
      o
    ),
    t,
    r
  );
};
gr.serialize = t$;
const W0 = {
  serialize: t$,
  test: e$
};
var G0 = W0;
gr.default = G0;
var wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.test = wr.serialize = wr.default = void 0;
var qa = Xt;
const K0 = "@@__IMMUTABLE_ITERABLE__@@", Y0 = "@@__IMMUTABLE_LIST__@@", X0 = "@@__IMMUTABLE_KEYED__@@", J0 = "@@__IMMUTABLE_MAP__@@", Hv = "@@__IMMUTABLE_ORDERED__@@", Q0 = "@@__IMMUTABLE_RECORD__@@", Z0 = "@@__IMMUTABLE_SEQ__@@", ex = "@@__IMMUTABLE_SET__@@", tx = "@@__IMMUTABLE_STACK__@@", Nn = (e) => "Immutable." + e, vi = (e) => "[" + e + "]", Ia = " ", Vv = "…", rx = (e, t, r, a, n, o, i) => ++a > t.maxDepth ? vi(Nn(i)) : Nn(i) + Ia + "{" + (0, qa.printIteratorEntries)(
  e.entries(),
  t,
  r,
  a,
  n,
  o
) + "}";
function nx(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return {
          done: !1,
          value: [r, e.get(r)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const ax = (e, t, r, a, n, o) => {
  const i = Nn(e._name || "Record");
  return ++a > t.maxDepth ? vi(i) : i + Ia + "{" + (0, qa.printIteratorEntries)(
    nx(e),
    t,
    r,
    a,
    n,
    o
  ) + "}";
}, ox = (e, t, r, a, n, o) => {
  const i = Nn("Seq");
  return ++a > t.maxDepth ? vi(i) : e[X0] ? i + Ia + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, qa.printIteratorEntries)(
    e.entries(),
    t,
    r,
    a,
    n,
    o
  ) : Vv) + "}" : i + Ia + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, qa.printIteratorValues)(
    e.values(),
    t,
    r,
    a,
    n,
    o
  ) : Vv) + "]";
}, bf = (e, t, r, a, n, o, i) => ++a > t.maxDepth ? vi(Nn(i)) : Nn(i) + Ia + "[" + (0, qa.printIteratorValues)(
  e.values(),
  t,
  r,
  a,
  n,
  o
) + "]", r$ = (e, t, r, a, n, o) => e[J0] ? rx(
  e,
  t,
  r,
  a,
  n,
  o,
  e[Hv] ? "OrderedMap" : "Map"
) : e[Y0] ? bf(
  e,
  t,
  r,
  a,
  n,
  o,
  "List"
) : e[ex] ? bf(
  e,
  t,
  r,
  a,
  n,
  o,
  e[Hv] ? "OrderedSet" : "Set"
) : e[tx] ? bf(
  e,
  t,
  r,
  a,
  n,
  o,
  "Stack"
) : e[Z0] ? ox(e, t, r, a, n, o) : ax(e, t, r, a, n, o);
wr.serialize = r$;
const n$ = (e) => e && (e[K0] === !0 || e[Q0] === !0);
wr.test = n$;
const ix = {
  serialize: r$,
  test: n$
};
var sx = ix;
wr.default = sx;
var _r = {}, Jp = { exports: {} }, Ue = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zv;
function lx() {
  return zv || (zv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, a = 60108, n = 60114, o = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, p = 60122, v = 60117, b = 60129, y = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var h = Symbol.for;
      e = h("react.element"), t = h("react.portal"), r = h("react.fragment"), a = h("react.strict_mode"), n = h("react.profiler"), o = h("react.provider"), i = h("react.context"), s = h("react.forward_ref"), l = h("react.suspense"), u = h("react.suspense_list"), c = h("react.memo"), d = h("react.lazy"), f = h("react.block"), p = h("react.server.block"), v = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), b = h("react.debug_trace_mode"), h("react.offscreen"), y = h("react.legacy_hidden");
    }
    var $ = !1;
    function A(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === n || K === b || K === a || K === l || K === u || K === y || $ || typeof K == "object" && K !== null && (K.$$typeof === d || K.$$typeof === c || K.$$typeof === o || K.$$typeof === i || K.$$typeof === s || K.$$typeof === v || K.$$typeof === f || K[0] === p));
    }
    function S(K) {
      if (typeof K == "object" && K !== null) {
        var se = K.$$typeof;
        switch (se) {
          case e:
            var be = K.type;
            switch (be) {
              case r:
              case n:
              case a:
              case l:
              case u:
                return be;
              default:
                var B = be && be.$$typeof;
                switch (B) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case o:
                    return B;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var T = i, E = o, M = e, L = s, ie = r, J = d, fe = c, de = t, G = n, ae = a, xe = l, ve = !1, $e = !1;
    function Te(K) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function g(K) {
      return $e || ($e = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(K) {
      return S(K) === i;
    }
    function R(K) {
      return S(K) === o;
    }
    function x(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function j(K) {
      return S(K) === s;
    }
    function H(K) {
      return S(K) === r;
    }
    function F(K) {
      return S(K) === d;
    }
    function k(K) {
      return S(K) === c;
    }
    function Q(K) {
      return S(K) === t;
    }
    function oe(K) {
      return S(K) === n;
    }
    function he(K) {
      return S(K) === a;
    }
    function we(K) {
      return S(K) === l;
    }
    Ue.ContextConsumer = T, Ue.ContextProvider = E, Ue.Element = M, Ue.ForwardRef = L, Ue.Fragment = ie, Ue.Lazy = J, Ue.Memo = fe, Ue.Portal = de, Ue.Profiler = G, Ue.StrictMode = ae, Ue.Suspense = xe, Ue.isAsyncMode = Te, Ue.isConcurrentMode = g, Ue.isContextConsumer = q, Ue.isContextProvider = R, Ue.isElement = x, Ue.isForwardRef = j, Ue.isFragment = H, Ue.isLazy = F, Ue.isMemo = k, Ue.isPortal = Q, Ue.isProfiler = oe, Ue.isStrictMode = he, Ue.isSuspense = we, Ue.isValidElementType = A, Ue.typeOf = S;
  }()), Ue;
}
var He = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wv;
function ux() {
  if (Wv)
    return He;
  Wv = 1;
  var e = 60103, t = 60106, r = 60107, a = 60108, n = 60114, o = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, p = 60122, v = 60117, b = 60129, y = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    e = h("react.element"), t = h("react.portal"), r = h("react.fragment"), a = h("react.strict_mode"), n = h("react.profiler"), o = h("react.provider"), i = h("react.context"), s = h("react.forward_ref"), l = h("react.suspense"), u = h("react.suspense_list"), c = h("react.memo"), d = h("react.lazy"), f = h("react.block"), p = h("react.server.block"), v = h("react.fundamental"), b = h("react.debug_trace_mode"), y = h("react.legacy_hidden");
  }
  function $(G) {
    if (typeof G == "object" && G !== null) {
      var ae = G.$$typeof;
      switch (ae) {
        case e:
          switch (G = G.type, G) {
            case r:
            case n:
            case a:
            case l:
            case u:
              return G;
            default:
              switch (G = G && G.$$typeof, G) {
                case i:
                case s:
                case d:
                case c:
                case o:
                  return G;
                default:
                  return ae;
              }
          }
        case t:
          return ae;
      }
    }
  }
  var A = o, S = e, T = s, E = r, M = d, L = c, ie = t, J = n, fe = a, de = l;
  return He.ContextConsumer = i, He.ContextProvider = A, He.Element = S, He.ForwardRef = T, He.Fragment = E, He.Lazy = M, He.Memo = L, He.Portal = ie, He.Profiler = J, He.StrictMode = fe, He.Suspense = de, He.isAsyncMode = function() {
    return !1;
  }, He.isConcurrentMode = function() {
    return !1;
  }, He.isContextConsumer = function(G) {
    return $(G) === i;
  }, He.isContextProvider = function(G) {
    return $(G) === o;
  }, He.isElement = function(G) {
    return typeof G == "object" && G !== null && G.$$typeof === e;
  }, He.isForwardRef = function(G) {
    return $(G) === s;
  }, He.isFragment = function(G) {
    return $(G) === r;
  }, He.isLazy = function(G) {
    return $(G) === d;
  }, He.isMemo = function(G) {
    return $(G) === c;
  }, He.isPortal = function(G) {
    return $(G) === t;
  }, He.isProfiler = function(G) {
    return $(G) === n;
  }, He.isStrictMode = function(G) {
    return $(G) === a;
  }, He.isSuspense = function(G) {
    return $(G) === l;
  }, He.isValidElementType = function(G) {
    return typeof G == "string" || typeof G == "function" || G === r || G === n || G === b || G === a || G === l || G === u || G === y || typeof G == "object" && G !== null && (G.$$typeof === d || G.$$typeof === c || G.$$typeof === o || G.$$typeof === i || G.$$typeof === s || G.$$typeof === v || G.$$typeof === f || G[0] === p);
  }, He.typeOf = $, He;
}
process.env.NODE_ENV === "production" ? Jp.exports = ux() : Jp.exports = lx();
var cx = Jp.exports;
Object.defineProperty(_r, "__esModule", {
  value: !0
});
_r.test = _r.serialize = _r.default = void 0;
var Wr = dx(cx), uo = st;
function a$(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (a$ = function(a) {
    return a ? r : t;
  })(e);
}
function dx(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = a$(t);
  if (r && r.has(e))
    return r.get(e);
  var a = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o];
    }
  return a.default = e, r && r.set(e, a), a;
}
const o$ = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  o$(r, t);
}) : e != null && e !== !1 && t.push(e), t), Gv = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Wr.isFragment(e))
    return "React.Fragment";
  if (Wr.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Wr.isContextProvider(e))
      return "Context.Provider";
    if (Wr.isContextConsumer(e))
      return "Context.Consumer";
    if (Wr.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
    }
    if (Wr.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? "Memo(" + r + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, fx = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, i$ = (e, t, r, a, n, o) => ++a > t.maxDepth ? (0, uo.printElementAsLeaf)(Gv(e), t) : (0, uo.printElement)(
  Gv(e),
  (0, uo.printProps)(
    fx(e),
    e.props,
    t,
    r + t.indent,
    a,
    n,
    o
  ),
  (0, uo.printChildren)(
    o$(e.props.children),
    t,
    r + t.indent,
    a,
    n,
    o
  ),
  t,
  r
);
_r.serialize = i$;
const s$ = (e) => e != null && Wr.isElement(e);
_r.test = s$;
const px = {
  serialize: i$,
  test: s$
};
var mx = px;
_r.default = mx;
var $r = {};
Object.defineProperty($r, "__esModule", {
  value: !0
});
$r.test = $r.serialize = $r.default = void 0;
var co = st, Uo = function() {
  return typeof globalThis < "u" ? globalThis : typeof Uo < "u" ? Uo : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), gf = Uo["jest-symbol-do-not-touch"] || Uo.Symbol;
const hx = typeof gf == "function" && gf.for ? gf.for("react.test.json") : 245830487, vx = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, l$ = (e, t, r, a, n, o) => ++a > t.maxDepth ? (0, co.printElementAsLeaf)(e.type, t) : (0, co.printElement)(
  e.type,
  e.props ? (0, co.printProps)(
    vx(e),
    e.props,
    t,
    r + t.indent,
    a,
    n,
    o
  ) : "",
  e.children ? (0, co.printChildren)(
    e.children,
    t,
    r + t.indent,
    a,
    n,
    o
  ) : "",
  t,
  r
);
$r.serialize = l$;
const u$ = (e) => e && e.$$typeof === hx;
$r.test = u$;
const yx = {
  serialize: l$,
  test: u$
};
var bx = yx;
$r.default = bx;
Object.defineProperty(kr, "__esModule", {
  value: !0
});
kr.default = kr.DEFAULT_OPTIONS = void 0;
var gx = kr.format = _$, c$ = kr.plugins = void 0, wx = Ur(D_), da = Xt, _x = Ur(
  vr
), $x = Ur(yr), Ex = Ur(br), Cx = Ur(gr), Rx = Ur(wr), Px = Ur(_r), xx = Ur(
  $r
);
function Ur(e) {
  return e && e.__esModule ? e : { default: e };
}
const d$ = Object.prototype.toString, Sx = Date.prototype.toISOString, Ox = Error.prototype.toString, Kv = RegExp.prototype.toString, wf = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", Tx = (e) => typeof window < "u" && e === window, Ax = /^Symbol\((.*)\)(.*)$/, Mx = /\n/gi;
let f$ = class extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
};
function qx(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Ix(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Nx(e) {
  return `${e}n`;
}
function Yv(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Xv(e) {
  return String(e).replace(Ax, "Symbol($1)");
}
function Jv(e) {
  return "[" + Ox.call(e) + "]";
}
function p$(e, t, r, a) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const n = typeof e;
  if (n === "number")
    return Ix(e);
  if (n === "bigint")
    return Nx(e);
  if (n === "string")
    return a ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (n === "function")
    return Yv(e, t);
  if (n === "symbol")
    return Xv(e);
  const o = d$.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? Yv(e, t) : o === "[object Symbol]" ? Xv(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : Sx.call(e) : o === "[object Error]" ? Jv(e) : o === "[object RegExp]" ? r ? Kv.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Kv.call(e) : e instanceof Error ? Jv(e) : null;
}
function m$(e, t, r, a, n, o) {
  if (n.indexOf(e) !== -1)
    return "[Circular]";
  n = n.slice(), n.push(e);
  const i = ++a > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !o)
    return ir(e.toJSON(), t, r, a, n, !0);
  const l = d$.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, da.printListItems)(
    e,
    t,
    r,
    a,
    n,
    ir
  ) + "]" : qx(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, da.printListItems)(
    e,
    t,
    r,
    a,
    n,
    ir
  ) + "]" : l === "[object Map]" ? i ? "[Map]" : "Map {" + (0, da.printIteratorEntries)(
    e.entries(),
    t,
    r,
    a,
    n,
    ir,
    " => "
  ) + "}" : l === "[object Set]" ? i ? "[Set]" : "Set {" + (0, da.printIteratorValues)(
    e.values(),
    t,
    r,
    a,
    n,
    ir
  ) + "}" : i || Tx(e) ? "[" + wf(e) + "]" : (s || !t.printBasicPrototype && wf(e) === "Object" ? "" : wf(e) + " ") + "{" + (0, da.printObjectProperties)(
    e,
    t,
    r,
    a,
    n,
    ir
  ) + "}";
}
function kx(e) {
  return e.serialize != null;
}
function h$(e, t, r, a, n, o) {
  let i;
  try {
    i = kx(e) ? e.serialize(t, r, a, n, o, ir) : e.print(
      t,
      (s) => ir(s, r, a, n, o),
      (s) => {
        const l = a + r.indent;
        return l + s.replace(Mx, `
` + l);
      },
      {
        edgeSpacing: r.spacingOuter,
        min: r.min,
        spacing: r.spacingInner
      },
      r.colors
    );
  } catch (s) {
    throw new f$(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function v$(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (a) {
      throw new f$(a.message, a.stack);
    }
  return null;
}
function ir(e, t, r, a, n, o) {
  const i = v$(t.plugins, e);
  if (i !== null)
    return h$(i, e, t, r, a, n);
  const s = p$(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : m$(
    e,
    t,
    r,
    a,
    n,
    o
  );
}
const $h = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, y$ = Object.keys($h), Tt = {
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: $h
};
kr.DEFAULT_OPTIONS = Tt;
function jx(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Tt.hasOwnProperty(t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const Fx = (e) => y$.reduce((t, r) => {
  const a = e.theme && e.theme[r] !== void 0 ? e.theme[r] : $h[r], n = a && wx.default[a];
  if (n && typeof n.close == "string" && typeof n.open == "string")
    t[r] = n;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), Dx = () => y$.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), b$ = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : Tt.printFunctionName, g$ = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : Tt.escapeRegex, w$ = (e) => e && e.escapeString !== void 0 ? e.escapeString : Tt.escapeString, Qv = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : Tt.callToJSON,
    colors: e && e.highlight ? Fx(e) : Dx(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : Tt.compareKeys,
    escapeRegex: g$(e),
    escapeString: w$(e),
    indent: e && e.min ? "" : Bx(
      e && e.indent !== void 0 ? e.indent : Tt.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : Tt.maxDepth,
    min: e && e.min !== void 0 ? e.min : Tt.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : Tt.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: b$(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function Bx(e) {
  return new Array(e + 1).join(" ");
}
function _$(e, t) {
  if (t && (jx(t), t.plugins)) {
    const a = v$(t.plugins, e);
    if (a !== null)
      return h$(a, e, Qv(t), "", 0, []);
  }
  const r = p$(
    e,
    b$(t),
    g$(t),
    w$(t)
  );
  return r !== null ? r : m$(e, Qv(t), "", 0, []);
}
const Lx = {
  AsymmetricMatcher: _x.default,
  ConvertAnsi: $x.default,
  DOMCollection: Ex.default,
  DOMElement: Cx.default,
  Immutable: Rx.default,
  ReactElement: Px.default,
  ReactTestComponent: xx.default
};
c$ = kr.plugins = Lx;
var Ux = _$;
kr.default = Ux;
var Hx = Object.prototype.toString;
function Zv(e) {
  return typeof e == "function" || Hx.call(e) === "[object Function]";
}
function Vx(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var zx = Math.pow(2, 53) - 1;
function Wx(e) {
  var t = Vx(e);
  return Math.min(Math.max(t, 0), zx);
}
function At(e, t) {
  var r = Array, a = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !Zv(t))
    throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var n = Wx(a.length), o = Zv(r) ? Object(new r(n)) : new Array(n), i = 0, s; i < n; )
    s = a[i], t ? o[i] = t(s, i) : o[i] = s, i += 1;
  return o.length = n, o;
}
function Na(e) {
  "@babel/helpers - typeof";
  return Na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Na(e);
}
function Gx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ey(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, $$(a.key), a);
  }
}
function Kx(e, t, r) {
  return t && ey(e.prototype, t), r && ey(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Yx(e, t, r) {
  return t = $$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $$(e) {
  var t = Xx(e, "string");
  return Na(t) === "symbol" ? t : String(t);
}
function Xx(e, t) {
  if (Na(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (Na(a) !== "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jx = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Gx(this, e), Yx(this, "items", void 0), this.items = t;
  }
  return Kx(e, [{
    key: "add",
    value: function(r) {
      return this.has(r) === !1 && this.items.push(r), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(r) {
      var a = this.items.length;
      return this.items = this.items.filter(function(n) {
        return n !== r;
      }), a !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var a = this;
      this.items.forEach(function(n) {
        r(n, n, a);
      });
    }
  }, {
    key: "has",
    value: function(r) {
      return this.items.indexOf(r) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
}();
const Qx = typeof Set > "u" ? Set : Jx;
function ct(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Zx = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, eS = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function tS(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(r) {
    var a;
    return e.hasAttribute(r) && !((a = eS[t]) !== null && a !== void 0 && a.has(r));
  });
}
function E$(e, t) {
  return tS(e, t);
}
function rS(e) {
  var t = aS(e);
  if (t === null || t === "presentation") {
    var r = nS(e);
    if (t !== "presentation" || E$(e, r || ""))
      return r;
  }
  return t;
}
function nS(e) {
  var t = Zx[ct(e)];
  if (t !== void 0)
    return t;
  switch (ct(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !E$(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e, a = r.type;
      switch (a) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return a;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function aS(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function Xe(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function C$(e) {
  return Xe(e) && ct(e) === "caption";
}
function xo(e) {
  return Xe(e) && ct(e) === "input";
}
function oS(e) {
  return Xe(e) && ct(e) === "optgroup";
}
function iS(e) {
  return Xe(e) && ct(e) === "select";
}
function sS(e) {
  return Xe(e) && ct(e) === "table";
}
function lS(e) {
  return Xe(e) && ct(e) === "textarea";
}
function uS(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function cS(e) {
  return Xe(e) && ct(e) === "fieldset";
}
function dS(e) {
  return Xe(e) && ct(e) === "legend";
}
function fS(e) {
  return Xe(e) && ct(e) === "slot";
}
function pS(e) {
  return Xe(e) && e.ownerSVGElement !== void 0;
}
function mS(e) {
  return Xe(e) && ct(e) === "svg";
}
function hS(e) {
  return pS(e) && ct(e) === "title";
}
function Ho(e, t) {
  if (Xe(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(n) {
      return a.getElementById(n);
    }).filter(
      function(n) {
        return n !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function Gt(e, t) {
  return Xe(e) ? t.indexOf(rS(e)) !== -1 : !1;
}
function vS(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function yS(e, t) {
  if (!Xe(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function bS(e) {
  return Gt(e, ["button", "combobox", "listbox", "textbox"]) || R$(e, "range");
}
function R$(e, t) {
  if (!Xe(e))
    return !1;
  switch (t) {
    case "range":
      return Gt(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function ty(e, t) {
  var r = At(e.querySelectorAll(t));
  return Ho(e, "aria-owns").forEach(function(a) {
    r.push.apply(r, At(a.querySelectorAll(t)));
  }), r;
}
function gS(e) {
  return iS(e) ? e.selectedOptions || ty(e, "[selected]") : ty(e, '[aria-selected="true"]');
}
function wS(e) {
  return Gt(e, ["none", "presentation"]);
}
function _S(e) {
  return C$(e);
}
function $S(e) {
  return Gt(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function ES(e) {
  return !1;
}
function CS(e) {
  return xo(e) || lS(e) ? e.value : e.textContent || "";
}
function ry(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function P$(e) {
  var t = ct(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function x$(e) {
  if (P$(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && Xe(r)) {
      var a = x$(r);
      a !== null && (t = a);
    }
  }), t;
}
function RS(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : x$(e);
}
function PS(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return At(t);
  if (!P$(e))
    return null;
  var r = e.ownerDocument;
  return At(r.querySelectorAll("label")).filter(function(a) {
    return RS(a) === e;
  });
}
function xS(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? At(e.childNodes) : t;
}
function S$(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Qx(), a = uS(e), n = t.compute, o = n === void 0 ? "name" : n, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? a.getComputedStyle.bind(a) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function f(h, $) {
    var A = "";
    if (Xe(h) && s) {
      var S = u(h, "::before"), T = ry(S);
      A = "".concat(T, " ").concat(A);
    }
    var E = fS(h) ? xS(h) : At(h.childNodes).concat(Ho(h, "aria-owns"));
    if (E.forEach(function(ie) {
      var J = y(ie, {
        isEmbeddedInLabel: $.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), fe = Xe(ie) ? u(ie).getPropertyValue("display") : "inline", de = fe !== "inline" ? " " : "";
      A += "".concat(de).concat(J).concat(de);
    }), Xe(h) && s) {
      var M = u(h, "::after"), L = ry(M);
      A = "".concat(A, " ").concat(L);
    }
    return A.trim();
  }
  function p(h, $) {
    var A = h.getAttributeNode($);
    return A !== null && !r.has(A) && A.value.trim() !== "" ? (r.add(A), A.value) : null;
  }
  function v(h) {
    return Xe(h) ? p(h, "title") : null;
  }
  function b(h) {
    if (!Xe(h))
      return null;
    if (cS(h)) {
      r.add(h);
      for (var $ = At(h.childNodes), A = 0; A < $.length; A += 1) {
        var S = $[A];
        if (dS(S))
          return y(S, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (sS(h)) {
      r.add(h);
      for (var T = At(h.childNodes), E = 0; E < T.length; E += 1) {
        var M = T[E];
        if (C$(M))
          return y(M, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (mS(h)) {
      r.add(h);
      for (var L = At(h.childNodes), ie = 0; ie < L.length; ie += 1) {
        var J = L[ie];
        if (hS(J))
          return J.textContent;
      }
      return null;
    } else if (ct(h) === "img" || ct(h) === "area") {
      var fe = p(h, "alt");
      if (fe !== null)
        return fe;
    } else if (oS(h)) {
      var de = p(h, "label");
      if (de !== null)
        return de;
    }
    if (xo(h) && (h.type === "button" || h.type === "submit" || h.type === "reset")) {
      var G = p(h, "value");
      if (G !== null)
        return G;
      if (h.type === "submit")
        return "Submit";
      if (h.type === "reset")
        return "Reset";
    }
    var ae = PS(h);
    if (ae !== null && ae.length !== 0)
      return r.add(h), At(ae).map(function(Te) {
        return y(Te, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Te) {
        return Te.length > 0;
      }).join(" ");
    if (xo(h) && h.type === "image") {
      var xe = p(h, "alt");
      if (xe !== null)
        return xe;
      var ve = p(h, "title");
      return ve !== null ? ve : "Submit Query";
    }
    if (Gt(h, ["button"])) {
      var $e = f(h, {
        isEmbeddedInLabel: !1,
        isReferenced: !1
      });
      if ($e !== "")
        return $e;
    }
    return null;
  }
  function y(h, $) {
    if (r.has(h))
      return "";
    if (!d && yS(h, u) && !$.isReferenced)
      return r.add(h), "";
    var A = Xe(h) ? h.getAttributeNode("aria-labelledby") : null, S = A !== null && !r.has(A) ? Ho(h, "aria-labelledby") : [];
    if (o === "name" && !$.isReferenced && S.length > 0)
      return r.add(A), S.map(function(fe) {
        return y(fe, {
          isEmbeddedInLabel: $.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var T = $.recursion && bS(h) && o === "name";
    if (!T) {
      var E = (Xe(h) && h.getAttribute("aria-label") || "").trim();
      if (E !== "" && o === "name")
        return r.add(h), E;
      if (!wS(h)) {
        var M = b(h);
        if (M !== null)
          return r.add(h), M;
      }
    }
    if (Gt(h, ["menu"]))
      return r.add(h), "";
    if (T || $.isEmbeddedInLabel || $.isReferenced) {
      if (Gt(h, ["combobox", "listbox"])) {
        r.add(h);
        var L = gS(h);
        return L.length === 0 ? xo(h) ? h.value : "" : At(L).map(function(fe) {
          return y(fe, {
            isEmbeddedInLabel: $.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (R$(h, "range"))
        return r.add(h), h.hasAttribute("aria-valuetext") ? h.getAttribute("aria-valuetext") : h.hasAttribute("aria-valuenow") ? h.getAttribute("aria-valuenow") : h.getAttribute("value") || "";
      if (Gt(h, ["textbox"]))
        return r.add(h), CS(h);
    }
    if ($S(h) || Xe(h) && $.isReferenced || _S(h) || ES()) {
      var ie = f(h, {
        isEmbeddedInLabel: $.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (ie !== "")
        return r.add(h), ie;
    }
    if (h.nodeType === h.TEXT_NODE)
      return r.add(h), h.textContent || "";
    if ($.recursion)
      return r.add(h), f(h, {
        isEmbeddedInLabel: $.isEmbeddedInLabel,
        isReferenced: !1
      });
    var J = v(h);
    return J !== null ? (r.add(h), J) : (r.add(h), "");
  }
  return vS(y(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: o === "description",
    recursion: !1
  }));
}
function ka(e) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(e);
}
function ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ay(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(a) {
      SS(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function SS(e, t, r) {
  return t = OS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OS(e) {
  var t = TS(e, "string");
  return ka(t) === "symbol" ? t : String(t);
}
function TS(e, t) {
  if (ka(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (ka(a) !== "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ho(e, "aria-describedby").map(function(n) {
    return S$(n, ay(ay({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var a = e.getAttribute("title");
    r = a === null ? "" : a;
  }
  return r;
}
function AS(e) {
  return Gt(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function yi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return AS(e) ? "" : S$(e, t);
}
var Mt = {}, bi = {}, nn = {}, gi = {};
Object.defineProperty(gi, "__esModule", {
  value: !0
});
gi.default = void 0;
function MS() {
  var e = this, t = 0, r = {
    "@@iterator": function() {
      return r;
    },
    next: function() {
      if (t < e.length) {
        var n = e[t];
        return t = t + 1, {
          done: !1,
          value: n
        };
      } else
        return {
          done: !0
        };
    }
  };
  return r;
}
var qS = MS;
gi.default = qS;
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.default = kS;
var IS = NS(gi);
function NS(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qp(e) {
  "@babel/helpers - typeof";
  return Qp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qp(e);
}
function kS(e, t) {
  return typeof Symbol == "function" && Qp(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: IS.default.bind(t)
  }), e;
}
Object.defineProperty(bi, "__esModule", {
  value: !0
});
bi.default = void 0;
var jS = FS(nn);
function FS(e) {
  return e && e.__esModule ? e : { default: e };
}
function _f(e, t) {
  return LS(e) || BS(e, t) || O$(e, t) || DS();
}
function DS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function LS(e) {
  if (Array.isArray(e))
    return e;
}
function US(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = O$(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function O$(e, t) {
  if (e) {
    if (typeof e == "string")
      return oy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return oy(e, t);
  }
}
function oy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var hn = [["aria-activedescendant", {
  type: "id"
}], ["aria-atomic", {
  type: "boolean"
}], ["aria-autocomplete", {
  type: "token",
  values: ["inline", "list", "both", "none"]
}], ["aria-busy", {
  type: "boolean"
}], ["aria-checked", {
  type: "tristate"
}], ["aria-colcount", {
  type: "integer"
}], ["aria-colindex", {
  type: "integer"
}], ["aria-colspan", {
  type: "integer"
}], ["aria-controls", {
  type: "idlist"
}], ["aria-current", {
  type: "token",
  values: ["page", "step", "location", "date", "time", !0, !1]
}], ["aria-describedby", {
  type: "idlist"
}], ["aria-details", {
  type: "id"
}], ["aria-disabled", {
  type: "boolean"
}], ["aria-dropeffect", {
  type: "tokenlist",
  values: ["copy", "execute", "link", "move", "none", "popup"]
}], ["aria-errormessage", {
  type: "id"
}], ["aria-expanded", {
  type: "boolean",
  allowundefined: !0
}], ["aria-flowto", {
  type: "idlist"
}], ["aria-grabbed", {
  type: "boolean",
  allowundefined: !0
}], ["aria-haspopup", {
  type: "token",
  values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
}], ["aria-hidden", {
  type: "boolean",
  allowundefined: !0
}], ["aria-invalid", {
  type: "token",
  values: ["grammar", !1, "spelling", !0]
}], ["aria-keyshortcuts", {
  type: "string"
}], ["aria-label", {
  type: "string"
}], ["aria-labelledby", {
  type: "idlist"
}], ["aria-level", {
  type: "integer"
}], ["aria-live", {
  type: "token",
  values: ["assertive", "off", "polite"]
}], ["aria-modal", {
  type: "boolean"
}], ["aria-multiline", {
  type: "boolean"
}], ["aria-multiselectable", {
  type: "boolean"
}], ["aria-orientation", {
  type: "token",
  values: ["vertical", "undefined", "horizontal"]
}], ["aria-owns", {
  type: "idlist"
}], ["aria-placeholder", {
  type: "string"
}], ["aria-posinset", {
  type: "integer"
}], ["aria-pressed", {
  type: "tristate"
}], ["aria-readonly", {
  type: "boolean"
}], ["aria-relevant", {
  type: "tokenlist",
  values: ["additions", "all", "removals", "text"]
}], ["aria-required", {
  type: "boolean"
}], ["aria-roledescription", {
  type: "string"
}], ["aria-rowcount", {
  type: "integer"
}], ["aria-rowindex", {
  type: "integer"
}], ["aria-rowspan", {
  type: "integer"
}], ["aria-selected", {
  type: "boolean",
  allowundefined: !0
}], ["aria-setsize", {
  type: "integer"
}], ["aria-sort", {
  type: "token",
  values: ["ascending", "descending", "none", "other"]
}], ["aria-valuemax", {
  type: "number"
}], ["aria-valuemin", {
  type: "number"
}], ["aria-valuenow", {
  type: "number"
}], ["aria-valuetext", {
  type: "string"
}]], Zp = {
  entries: function() {
    return hn;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = US(hn), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = _f(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, hn);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = hn.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Zp.get(t);
  },
  keys: function() {
    return hn.map(function(t) {
      var r = _f(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return hn.map(function(t) {
      var r = _f(t, 2), a = r[1];
      return a;
    });
  }
}, HS = (0, jS.default)(Zp, Zp.entries());
bi.default = HS;
var wi = {};
Object.defineProperty(wi, "__esModule", {
  value: !0
});
wi.default = void 0;
var VS = zS(nn);
function zS(e) {
  return e && e.__esModule ? e : { default: e };
}
function $f(e, t) {
  return KS(e) || GS(e, t) || T$(e, t) || WS();
}
function WS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function KS(e) {
  if (Array.isArray(e))
    return e;
}
function YS(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = T$(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function T$(e, t) {
  if (e) {
    if (typeof e == "string")
      return iy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iy(e, t);
  }
}
function iy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var vn = [["a", {
  reserved: !1
}], ["abbr", {
  reserved: !1
}], ["acronym", {
  reserved: !1
}], ["address", {
  reserved: !1
}], ["applet", {
  reserved: !1
}], ["area", {
  reserved: !1
}], ["article", {
  reserved: !1
}], ["aside", {
  reserved: !1
}], ["audio", {
  reserved: !1
}], ["b", {
  reserved: !1
}], ["base", {
  reserved: !0
}], ["bdi", {
  reserved: !1
}], ["bdo", {
  reserved: !1
}], ["big", {
  reserved: !1
}], ["blink", {
  reserved: !1
}], ["blockquote", {
  reserved: !1
}], ["body", {
  reserved: !1
}], ["br", {
  reserved: !1
}], ["button", {
  reserved: !1
}], ["canvas", {
  reserved: !1
}], ["caption", {
  reserved: !1
}], ["center", {
  reserved: !1
}], ["cite", {
  reserved: !1
}], ["code", {
  reserved: !1
}], ["col", {
  reserved: !0
}], ["colgroup", {
  reserved: !0
}], ["content", {
  reserved: !1
}], ["data", {
  reserved: !1
}], ["datalist", {
  reserved: !1
}], ["dd", {
  reserved: !1
}], ["del", {
  reserved: !1
}], ["details", {
  reserved: !1
}], ["dfn", {
  reserved: !1
}], ["dialog", {
  reserved: !1
}], ["dir", {
  reserved: !1
}], ["div", {
  reserved: !1
}], ["dl", {
  reserved: !1
}], ["dt", {
  reserved: !1
}], ["em", {
  reserved: !1
}], ["embed", {
  reserved: !1
}], ["fieldset", {
  reserved: !1
}], ["figcaption", {
  reserved: !1
}], ["figure", {
  reserved: !1
}], ["font", {
  reserved: !1
}], ["footer", {
  reserved: !1
}], ["form", {
  reserved: !1
}], ["frame", {
  reserved: !1
}], ["frameset", {
  reserved: !1
}], ["h1", {
  reserved: !1
}], ["h2", {
  reserved: !1
}], ["h3", {
  reserved: !1
}], ["h4", {
  reserved: !1
}], ["h5", {
  reserved: !1
}], ["h6", {
  reserved: !1
}], ["head", {
  reserved: !0
}], ["header", {
  reserved: !1
}], ["hgroup", {
  reserved: !1
}], ["hr", {
  reserved: !1
}], ["html", {
  reserved: !0
}], ["i", {
  reserved: !1
}], ["iframe", {
  reserved: !1
}], ["img", {
  reserved: !1
}], ["input", {
  reserved: !1
}], ["ins", {
  reserved: !1
}], ["kbd", {
  reserved: !1
}], ["keygen", {
  reserved: !1
}], ["label", {
  reserved: !1
}], ["legend", {
  reserved: !1
}], ["li", {
  reserved: !1
}], ["link", {
  reserved: !0
}], ["main", {
  reserved: !1
}], ["map", {
  reserved: !1
}], ["mark", {
  reserved: !1
}], ["marquee", {
  reserved: !1
}], ["menu", {
  reserved: !1
}], ["menuitem", {
  reserved: !1
}], ["meta", {
  reserved: !0
}], ["meter", {
  reserved: !1
}], ["nav", {
  reserved: !1
}], ["noembed", {
  reserved: !0
}], ["noscript", {
  reserved: !0
}], ["object", {
  reserved: !1
}], ["ol", {
  reserved: !1
}], ["optgroup", {
  reserved: !1
}], ["option", {
  reserved: !1
}], ["output", {
  reserved: !1
}], ["p", {
  reserved: !1
}], ["param", {
  reserved: !0
}], ["picture", {
  reserved: !0
}], ["pre", {
  reserved: !1
}], ["progress", {
  reserved: !1
}], ["q", {
  reserved: !1
}], ["rp", {
  reserved: !1
}], ["rt", {
  reserved: !1
}], ["rtc", {
  reserved: !1
}], ["ruby", {
  reserved: !1
}], ["s", {
  reserved: !1
}], ["samp", {
  reserved: !1
}], ["script", {
  reserved: !0
}], ["section", {
  reserved: !1
}], ["select", {
  reserved: !1
}], ["small", {
  reserved: !1
}], ["source", {
  reserved: !0
}], ["spacer", {
  reserved: !1
}], ["span", {
  reserved: !1
}], ["strike", {
  reserved: !1
}], ["strong", {
  reserved: !1
}], ["style", {
  reserved: !0
}], ["sub", {
  reserved: !1
}], ["summary", {
  reserved: !1
}], ["sup", {
  reserved: !1
}], ["table", {
  reserved: !1
}], ["tbody", {
  reserved: !1
}], ["td", {
  reserved: !1
}], ["textarea", {
  reserved: !1
}], ["tfoot", {
  reserved: !1
}], ["th", {
  reserved: !1
}], ["thead", {
  reserved: !1
}], ["time", {
  reserved: !1
}], ["title", {
  reserved: !0
}], ["tr", {
  reserved: !1
}], ["track", {
  reserved: !0
}], ["tt", {
  reserved: !1
}], ["u", {
  reserved: !1
}], ["ul", {
  reserved: !1
}], ["var", {
  reserved: !1
}], ["video", {
  reserved: !1
}], ["wbr", {
  reserved: !1
}], ["xmp", {
  reserved: !1
}]], em = {
  entries: function() {
    return vn;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = YS(vn), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = $f(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, vn);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = vn.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!em.get(t);
  },
  keys: function() {
    return vn.map(function(t) {
      var r = $f(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return vn.map(function(t) {
      var r = $f(t, 2), a = r[1];
      return a;
    });
  }
}, XS = (0, VS.default)(em, em.entries());
wi.default = XS;
var Gn = {}, _i = {}, $i = {};
Object.defineProperty($i, "__esModule", {
  value: !0
});
$i.default = void 0;
var JS = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, QS = JS;
$i.default = QS;
var Ei = {};
Object.defineProperty(Ei, "__esModule", {
  value: !0
});
Ei.default = void 0;
var ZS = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, eO = ZS;
Ei.default = eO;
var Ci = {};
Object.defineProperty(Ci, "__esModule", {
  value: !0
});
Ci.default = void 0;
var tO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "input"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, rO = tO;
Ci.default = rO;
var Ri = {};
Object.defineProperty(Ri, "__esModule", {
  value: !0
});
Ri.default = void 0;
var nO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, aO = nO;
Ri.default = aO;
var Pi = {};
Object.defineProperty(Pi, "__esModule", {
  value: !0
});
Pi.default = void 0;
var oO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, iO = oO;
Pi.default = iO;
var xi = {};
Object.defineProperty(xi, "__esModule", {
  value: !0
});
xi.default = void 0;
var sO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    "aria-atomic": null,
    "aria-busy": null,
    "aria-controls": null,
    "aria-current": null,
    "aria-describedby": null,
    "aria-details": null,
    "aria-dropeffect": null,
    "aria-flowto": null,
    "aria-grabbed": null,
    "aria-hidden": null,
    "aria-keyshortcuts": null,
    "aria-label": null,
    "aria-labelledby": null,
    "aria-live": null,
    "aria-owns": null,
    "aria-relevant": null,
    "aria-roledescription": null
  },
  relatedConcepts: [{
    concept: {
      name: "rel"
    },
    module: "HTML"
  }, {
    concept: {
      name: "role"
    },
    module: "XHTML"
  }, {
    concept: {
      name: "type"
    },
    module: "Dublin Core"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, lO = sO;
xi.default = lO;
var Si = {};
Object.defineProperty(Si, "__esModule", {
  value: !0
});
Si.default = void 0;
var uO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "frontmatter"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "SMIL"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, cO = uO;
Si.default = cO;
var Oi = {};
Object.defineProperty(Oi, "__esModule", {
  value: !0
});
Oi.default = void 0;
var dO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, fO = dO;
Oi.default = fO;
var Ti = {};
Object.defineProperty(Ti, "__esModule", {
  value: !0
});
Ti.default = void 0;
var pO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
}, mO = pO;
Ti.default = mO;
var Ai = {};
Object.defineProperty(Ai, "__esModule", {
  value: !0
});
Ai.default = void 0;
var hO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, vO = hO;
Ai.default = vO;
var Mi = {};
Object.defineProperty(Mi, "__esModule", {
  value: !0
});
Mi.default = void 0;
var yO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, bO = yO;
Mi.default = bO;
var qi = {};
Object.defineProperty(qi, "__esModule", {
  value: !0
});
qi.default = void 0;
var gO = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-modal": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, wO = gO;
qi.default = wO;
Object.defineProperty(_i, "__esModule", {
  value: !0
});
_i.default = void 0;
var _O = Ct($i), $O = Ct(Ei), EO = Ct(Ci), CO = Ct(Ri), RO = Ct(Pi), PO = Ct(xi), xO = Ct(Si), SO = Ct(Oi), OO = Ct(Ti), TO = Ct(Ai), AO = Ct(Mi), MO = Ct(qi);
function Ct(e) {
  return e && e.__esModule ? e : { default: e };
}
var qO = [["command", _O.default], ["composite", $O.default], ["input", EO.default], ["landmark", CO.default], ["range", RO.default], ["roletype", PO.default], ["section", xO.default], ["sectionhead", SO.default], ["select", OO.default], ["structure", TO.default], ["widget", AO.default], ["window", MO.default]], IO = qO;
_i.default = IO;
var Ii = {}, Ni = {};
Object.defineProperty(Ni, "__esModule", {
  value: !0
});
Ni.default = void 0;
var NO = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "assertive"
  },
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kO = NO;
Ni.default = kO;
var ki = {};
Object.defineProperty(ki, "__esModule", {
  value: !0
});
ki.default = void 0;
var jO = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
}, FO = jO;
ki.default = FO;
var ji = {};
Object.defineProperty(ji, "__esModule", {
  value: !0
});
ji.default = void 0;
var DO = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, BO = DO;
ji.default = BO;
var Fi = {};
Object.defineProperty(Fi, "__esModule", {
  value: !0
});
Fi.default = void 0;
var LO = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "article"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, UO = LO;
Fi.default = UO;
var Di = {};
Object.defineProperty(Di, "__esModule", {
  value: !0
});
Di.default = void 0;
var HO = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "header"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, VO = HO;
Di.default = VO;
var Bi = {};
Object.defineProperty(Bi, "__esModule", {
  value: !0
});
Bi.default = void 0;
var zO = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, WO = zO;
Bi.default = WO;
var Li = {};
Object.defineProperty(Li, "__esModule", {
  value: !0
});
Li.default = void 0;
var GO = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-pressed": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-pressed"
      }, {
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "false"
      }],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "true"
      }],
      constraints: ["direct descendant of details element with the open attribute defined"],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "button"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "image"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "reset"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "submit"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "button"
    },
    module: "HTML"
  }, {
    concept: {
      name: "trigger"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, KO = GO;
Li.default = KO;
var Ui = {};
Object.defineProperty(Ui, "__esModule", {
  value: !0
});
Ui.default = void 0;
var YO = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: ["figure", "grid", "table"],
  requiredContextRole: ["figure", "grid", "table"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, XO = YO;
Ui.default = XO;
var Hi = {};
Object.defineProperty(Hi, "__esModule", {
  value: !0
});
Hi.default = void 0;
var JO = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-colspan": null,
    "aria-rowindex": null,
    "aria-rowspan": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["descendant of table"],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, QO = JO;
Hi.default = QO;
var Vi = {};
Object.defineProperty(Vi, "__esModule", {
  value: !0
});
Vi.default = void 0;
var ZO = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, eT = ZO;
Vi.default = eT;
var zi = {};
Object.defineProperty(zi, "__esModule", {
  value: !0
});
zi.default = void 0;
var tT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rT = tT;
zi.default = rT;
var Wi = {};
Object.defineProperty(Wi, "__esModule", {
  value: !0
});
Wi.default = void 0;
var nT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    attributes: [{
      name: "scope",
      value: "col"
    }],
    concept: {
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, aT = nT;
Wi.default = aT;
var Gi = {};
Object.defineProperty(Gi, "__esModule", {
  value: !0
});
Gi.default = void 0;
var oT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-expanded": "false",
    "aria-haspopup": "listbox"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        constraints: ["undefined"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        name: "size",
        value: 1
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-expanded": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, iT = oT;
Gi.default = iT;
var Ki = {};
Object.defineProperty(Ki, "__esModule", {
  value: !0
});
Ki.default = void 0;
var sT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "aside"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, lT = sT;
Ki.default = lT;
var Yi = {};
Object.defineProperty(Yi, "__esModule", {
  value: !0
});
Yi.default = void 0;
var uT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "footer"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, cT = uT;
Yi.default = cT;
var Xi = {};
Object.defineProperty(Xi, "__esModule", {
  value: !0
});
Xi.default = void 0;
var dT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, fT = dT;
Xi.default = fT;
var Ji = {};
Object.defineProperty(Ji, "__esModule", {
  value: !0
});
Ji.default = void 0;
var pT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, mT = pT;
Ji.default = mT;
var Qi = {};
Object.defineProperty(Qi, "__esModule", {
  value: !0
});
Qi.default = void 0;
var hT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dialog"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "window"]]
}, vT = hT;
Qi.default = vT;
var Zi = {};
Object.defineProperty(Zi, "__esModule", {
  value: !0
});
Zi.default = void 0;
var yT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    module: "DAISY Guide"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, bT = yT;
Zi.default = bT;
var es = {};
Object.defineProperty(es, "__esModule", {
  value: !0
});
es.default = void 0;
var gT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }, {
    concept: {
      name: "body"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, wT = gT;
es.default = wT;
var ts = {};
Object.defineProperty(ts, "__esModule", {
  value: !0
});
ts.default = void 0;
var _T = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, $T = _T;
ts.default = $T;
var rs = {};
Object.defineProperty(rs, "__esModule", {
  value: !0
});
rs.default = void 0;
var ET = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["article"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, CT = ET;
rs.default = CT;
var ns = {};
Object.defineProperty(ns, "__esModule", {
  value: !0
});
ns.default = void 0;
var RT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "figure"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, PT = RT;
ns.default = PT;
var as = {};
Object.defineProperty(as, "__esModule", {
  value: !0
});
as.default = void 0;
var xT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "name"
      }],
      name: "form"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ST = xT;
as.default = ST;
var os = {};
Object.defineProperty(os, "__esModule", {
  value: !0
});
os.default = void 0;
var OT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "span"
    },
    module: "HTML"
  }, {
    concept: {
      name: "div"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, TT = OT;
os.default = TT;
var is = {};
Object.defineProperty(is, "__esModule", {
  value: !0
});
is.default = void 0;
var AT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-multiselectable": null,
    "aria-readonly": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "grid"
      }],
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
}, MT = AT;
is.default = MT;
var ss = {};
Object.defineProperty(ss, "__esModule", {
  value: !0
});
ss.default = void 0;
var qT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-selected": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "gridcell"
      }],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
}, IT = qT;
ss.default = IT;
var ls = {};
Object.defineProperty(ls, "__esModule", {
  value: !0
});
ls.default = void 0;
var NT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "details"
    },
    module: "HTML"
  }, {
    concept: {
      name: "fieldset"
    },
    module: "HTML"
  }, {
    concept: {
      name: "optgroup"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kT = NT;
ls.default = kT;
var us = {};
Object.defineProperty(us, "__esModule", {
  value: !0
});
us.default = void 0;
var jT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-level": "2"
  },
  relatedConcepts: [{
    concept: {
      name: "h1"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h2"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h3"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h4"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h5"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h6"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-level": "2"
  },
  superClass: [["roletype", "structure", "sectionhead"]]
}, FT = jT;
us.default = FT;
var cs = {};
Object.defineProperty(cs, "__esModule", {
  value: !0
});
cs.default = void 0;
var DT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      name: "imggroup"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, BT = DT;
cs.default = BT;
var ds = {};
Object.defineProperty(ds, "__esModule", {
  value: !0
});
ds.default = void 0;
var LT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, UT = LT;
ds.default = UT;
var fs = {};
Object.defineProperty(fs, "__esModule", {
  value: !0
});
fs.default = void 0;
var HT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "a"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "area"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "link"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, VT = HT;
fs.default = VT;
var ps = {};
Object.defineProperty(ps, "__esModule", {
  value: !0
});
ps.default = void 0;
var zT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menu"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ol"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ul"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["listitem"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, WT = zT;
ps.default = WT;
var ms = {};
Object.defineProperty(ms, "__esModule", {
  value: !0
});
ms.default = void 0;
var GT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }, {
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "datalist"
    },
    module: "HTML"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["option", "group"], ["option"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, KT = GT;
ms.default = KT;
var hs = {};
Object.defineProperty(hs, "__esModule", {
  value: !0
});
hs.default = void 0;
var YT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of ol, ul or menu"],
      name: "li"
    },
    module: "HTML"
  }, {
    concept: {
      name: "item"
    },
    module: "XForms"
  }],
  requireContextRole: ["directory", "list"],
  requiredContextRole: ["directory", "list"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, XT = YT;
hs.default = XT;
var vs = {};
Object.defineProperty(vs, "__esModule", {
  value: !0
});
vs.default = void 0;
var JT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-live": "polite"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, QT = JT;
vs.default = QT;
var ys = {};
Object.defineProperty(ys, "__esModule", {
  value: !0
});
ys.default = void 0;
var ZT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "main"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, eA = ZT;
ys.default = eA;
var bs = {};
Object.defineProperty(bs, "__esModule", {
  value: !0
});
bs.default = void 0;
var tA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rA = tA;
bs.default = rA;
var gs = {};
Object.defineProperty(gs, "__esModule", {
  value: !0
});
gs.default = void 0;
var nA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "math"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, aA = nA;
gs.default = aA;
var ws = {};
Object.defineProperty(ws, "__esModule", {
  value: !0
});
ws.default = void 0;
var oA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      name: "MENU"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }, {
    concept: {
      name: "sidebar"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, iA = oA;
ws.default = iA;
var _s = {};
Object.defineProperty(_s, "__esModule", {
  value: !0
});
_s.default = void 0;
var sA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "toolbar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
}, lA = sA;
_s.default = lA;
var $s = {};
Object.defineProperty($s, "__esModule", {
  value: !0
});
$s.default = void 0;
var uA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "MENU_ITEM"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, cA = uA;
$s.default = cA;
var Es = {};
Object.defineProperty(Es, "__esModule", {
  value: !0
});
Es.default = void 0;
var dA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
}, fA = dA;
Es.default = fA;
var Cs = {};
Object.defineProperty(Cs, "__esModule", {
  value: !0
});
Cs.default = void 0;
var pA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
}, mA = pA;
Cs.default = mA;
var Rs = {};
Object.defineProperty(Rs, "__esModule", {
  value: !0
});
Rs.default = void 0;
var hA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null,
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"]]
}, vA = hA;
Rs.default = vA;
var Ps = {};
Object.defineProperty(Ps, "__esModule", {
  value: !0
});
Ps.default = void 0;
var yA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "nav"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, bA = yA;
Ps.default = bA;
var xs = {};
Object.defineProperty(xs, "__esModule", {
  value: !0
});
xs.default = void 0;
var gA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, wA = gA;
xs.default = wA;
var Ss = {};
Object.defineProperty(Ss, "__esModule", {
  value: !0
});
Ss.default = void 0;
var _A = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, $A = _A;
Ss.default = $A;
var Os = {};
Object.defineProperty(Os, "__esModule", {
  value: !0
});
Os.default = void 0;
var EA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [{
    concept: {
      name: "item"
    },
    module: "XForms"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "option"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, CA = EA;
Os.default = CA;
var Ts = {};
Object.defineProperty(Ts, "__esModule", {
  value: !0
});
Ts.default = void 0;
var RA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, PA = RA;
Ts.default = PA;
var As = {};
Object.defineProperty(As, "__esModule", {
  value: !0
});
As.default = void 0;
var xA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, SA = xA;
As.default = SA;
var Ms = {};
Object.defineProperty(Ms, "__esModule", {
  value: !0
});
Ms.default = void 0;
var OA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "progress"
    },
    module: "HTML"
  }, {
    concept: {
      name: "status"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, TA = OA;
Ms.default = TA;
var qs = {};
Object.defineProperty(qs, "__esModule", {
  value: !0
});
qs.default = void 0;
var AA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "radio"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, MA = AA;
qs.default = MA;
var Is = {};
Object.defineProperty(Is, "__esModule", {
  value: !0
});
Is.default = void 0;
var qA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      name: "list"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["radio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, IA = qA;
Is.default = IA;
var Ns = {};
Object.defineProperty(Ns, "__esModule", {
  value: !0
});
Ns.default = void 0;
var NA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      name: "Device Independence Glossart perceivable unit"
    }
  }, {
    concept: {
      name: "frame"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, kA = NA;
Ns.default = kA;
var ks = {};
Object.defineProperty(ks, "__esModule", {
  value: !0
});
ks.default = void 0;
var jA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-expanded": null,
    "aria-level": null,
    "aria-posinset": null,
    "aria-rowindex": null,
    "aria-selected": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "tr"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
}, FA = jA;
ks.default = FA;
var js = {};
Object.defineProperty(js, "__esModule", {
  value: !0
});
js.default = void 0;
var DA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "tbody"
    },
    module: "HTML"
  }, {
    concept: {
      name: "tfoot"
    },
    module: "HTML"
  }, {
    concept: {
      name: "thead"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "table", "treegrid"],
  requiredContextRole: ["grid", "table", "treegrid"],
  requiredOwnedElements: [["row"]],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, BA = DA;
js.default = BA;
var Fs = {};
Object.defineProperty(Fs, "__esModule", {
  value: !0
});
Fs.default = void 0;
var LA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "scope",
        value: "row"
      }],
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "rowgroup"
      }],
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row", "rowgroup"],
  requiredContextRole: ["row", "rowgroup"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, UA = LA;
Fs.default = UA;
var Ds = {};
Object.defineProperty(Ds, "__esModule", {
  value: !0
});
Ds.default = void 0;
var HA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-valuetext": null,
    "aria-orientation": "vertical",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, VA = HA;
Ds.default = VA;
var Bs = {};
Object.defineProperty(Bs, "__esModule", {
  value: !0
});
Bs.default = void 0;
var zA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, WA = zA;
Bs.default = WA;
var Ls = {};
Object.defineProperty(Ls, "__esModule", {
  value: !0
});
Ls.default = void 0;
var GA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input", "textbox"]]
}, KA = GA;
Ls.default = KA;
var Us = {};
Object.defineProperty(Us, "__esModule", {
  value: !0
});
Us.default = void 0;
var YA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": null,
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "hr"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, XA = YA;
Us.default = XA;
var Hs = {};
Object.defineProperty(Hs, "__esModule", {
  value: !0
});
Hs.default = void 0;
var JA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-valuetext": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "range"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, QA = JA;
Hs.default = QA;
var Vs = {};
Object.defineProperty(Vs, "__esModule", {
  value: !0
});
Vs.default = void 0;
var ZA = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-valuetext": null,
    "aria-valuenow": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "number"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, eM = ZA;
Vs.default = eM;
var zs = {};
Object.defineProperty(zs, "__esModule", {
  value: !0
});
zs.default = void 0;
var tM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "polite"
  },
  relatedConcepts: [{
    concept: {
      name: "output"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rM = tM;
zs.default = rM;
var Ws = {};
Object.defineProperty(Ws, "__esModule", {
  value: !0
});
Ws.default = void 0;
var nM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, aM = nM;
Ws.default = aM;
var Gs = {};
Object.defineProperty(Gs, "__esModule", {
  value: !0
});
Gs.default = void 0;
var oM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, iM = oM;
Gs.default = iM;
var Ks = {};
Object.defineProperty(Ks, "__esModule", {
  value: !0
});
Ks.default = void 0;
var sM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, lM = sM;
Ks.default = lM;
var Ys = {};
Object.defineProperty(Ys, "__esModule", {
  value: !0
});
Ys.default = void 0;
var uM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "button"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"]]
}, cM = uM;
Ys.default = cM;
var Xs = {};
Object.defineProperty(Xs, "__esModule", {
  value: !0
});
Xs.default = void 0;
var dM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [],
  requireContextRole: ["tablist"],
  requiredContextRole: ["tablist"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
}, fM = dM;
Xs.default = fM;
var Js = {};
Object.defineProperty(Js, "__esModule", {
  value: !0
});
Js.default = void 0;
var pM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-colcount": null,
    "aria-rowcount": null
  },
  relatedConcepts: [{
    concept: {
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, mM = pM;
Js.default = mM;
var Qs = {};
Object.defineProperty(Qs, "__esModule", {
  value: !0
});
Qs.default = void 0;
var hM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-multiselectable": null,
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    module: "DAISY",
    concept: {
      name: "guide"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["tab"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"]]
}, vM = hM;
Qs.default = vM;
var Zs = {};
Object.defineProperty(Zs, "__esModule", {
  value: !0
});
Zs.default = void 0;
var yM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, bM = yM;
Zs.default = bM;
var el = {};
Object.defineProperty(el, "__esModule", {
  value: !0
});
el.default = void 0;
var gM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dfn"
    },
    module: "HTML"
  }, {
    concept: {
      name: "dt"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, wM = gM;
el.default = wM;
var tl = {};
Object.defineProperty(tl, "__esModule", {
  value: !0
});
tl.default = void 0;
var _M = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-multiline": null,
    "aria-placeholder": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "type"
      }, {
        constraints: ["undefined"],
        name: "list"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "input"
    },
    module: "XForms"
  }, {
    concept: {
      name: "textarea"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input"]]
}, $M = _M;
tl.default = $M;
var rl = {};
Object.defineProperty(rl, "__esModule", {
  value: !0
});
rl.default = void 0;
var EM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, CM = EM;
rl.default = CM;
var nl = {};
Object.defineProperty(nl, "__esModule", {
  value: !0
});
nl.default = void 0;
var RM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "status"]]
}, PM = RM;
nl.default = PM;
var al = {};
Object.defineProperty(al, "__esModule", {
  value: !0
});
al.default = void 0;
var xM = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "menubar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, SM = xM;
al.default = SM;
var ol = {};
Object.defineProperty(ol, "__esModule", {
  value: !0
});
ol.default = void 0;
var OM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, TM = OM;
ol.default = TM;
var il = {};
Object.defineProperty(il, "__esModule", {
  value: !0
});
il.default = void 0;
var AM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, MM = AM;
il.default = MM;
var sl = {};
Object.defineProperty(sl, "__esModule", {
  value: !0
});
sl.default = void 0;
var qM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
}, IM = qM;
sl.default = IM;
var ll = {};
Object.defineProperty(ll, "__esModule", {
  value: !0
});
ll.default = void 0;
var NM = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [],
  requireContextRole: ["group", "tree"],
  requiredContextRole: ["group", "tree"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": null
  },
  superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
}, kM = NM;
ll.default = kM;
Object.defineProperty(Ii, "__esModule", {
  value: !0
});
Ii.default = void 0;
var jM = ee(Ni), FM = ee(ki), DM = ee(ji), BM = ee(Fi), LM = ee(Di), UM = ee(Bi), HM = ee(Li), VM = ee(Ui), zM = ee(Hi), WM = ee(Vi), GM = ee(zi), KM = ee(Wi), YM = ee(Gi), XM = ee(Ki), JM = ee(Yi), QM = ee(Xi), ZM = ee(Ji), eq = ee(Qi), tq = ee(Zi), rq = ee(es), nq = ee(ts), aq = ee(rs), oq = ee(ns), iq = ee(as), sq = ee(os), lq = ee(is), uq = ee(ss), cq = ee(ls), dq = ee(us), fq = ee(cs), pq = ee(ds), mq = ee(fs), hq = ee(ps), vq = ee(ms), yq = ee(hs), bq = ee(vs), gq = ee(ys), wq = ee(bs), _q = ee(gs), $q = ee(ws), Eq = ee(_s), Cq = ee($s), Rq = ee(Es), Pq = ee(Cs), xq = ee(Rs), Sq = ee(Ps), Oq = ee(xs), Tq = ee(Ss), Aq = ee(Os), Mq = ee(Ts), qq = ee(As), Iq = ee(Ms), Nq = ee(qs), kq = ee(Is), jq = ee(Ns), Fq = ee(ks), Dq = ee(js), Bq = ee(Fs), Lq = ee(Ds), Uq = ee(Bs), Hq = ee(Ls), Vq = ee(Us), zq = ee(Hs), Wq = ee(Vs), Gq = ee(zs), Kq = ee(Ws), Yq = ee(Gs), Xq = ee(Ks), Jq = ee(Ys), Qq = ee(Xs), Zq = ee(Js), eI = ee(Qs), tI = ee(Zs), rI = ee(el), nI = ee(tl), aI = ee(rl), oI = ee(nl), iI = ee(al), sI = ee(ol), lI = ee(il), uI = ee(sl), cI = ee(ll);
function ee(e) {
  return e && e.__esModule ? e : { default: e };
}
var dI = [["alert", jM.default], ["alertdialog", FM.default], ["application", DM.default], ["article", BM.default], ["banner", LM.default], ["blockquote", UM.default], ["button", HM.default], ["caption", VM.default], ["cell", zM.default], ["checkbox", WM.default], ["code", GM.default], ["columnheader", KM.default], ["combobox", YM.default], ["complementary", XM.default], ["contentinfo", JM.default], ["definition", QM.default], ["deletion", ZM.default], ["dialog", eq.default], ["directory", tq.default], ["document", rq.default], ["emphasis", nq.default], ["feed", aq.default], ["figure", oq.default], ["form", iq.default], ["generic", sq.default], ["grid", lq.default], ["gridcell", uq.default], ["group", cq.default], ["heading", dq.default], ["img", fq.default], ["insertion", pq.default], ["link", mq.default], ["list", hq.default], ["listbox", vq.default], ["listitem", yq.default], ["log", bq.default], ["main", gq.default], ["marquee", wq.default], ["math", _q.default], ["menu", $q.default], ["menubar", Eq.default], ["menuitem", Cq.default], ["menuitemcheckbox", Rq.default], ["menuitemradio", Pq.default], ["meter", xq.default], ["navigation", Sq.default], ["none", Oq.default], ["note", Tq.default], ["option", Aq.default], ["paragraph", Mq.default], ["presentation", qq.default], ["progressbar", Iq.default], ["radio", Nq.default], ["radiogroup", kq.default], ["region", jq.default], ["row", Fq.default], ["rowgroup", Dq.default], ["rowheader", Bq.default], ["scrollbar", Lq.default], ["search", Uq.default], ["searchbox", Hq.default], ["separator", Vq.default], ["slider", zq.default], ["spinbutton", Wq.default], ["status", Gq.default], ["strong", Kq.default], ["subscript", Yq.default], ["superscript", Xq.default], ["switch", Jq.default], ["tab", Qq.default], ["table", Zq.default], ["tablist", eI.default], ["tabpanel", tI.default], ["term", rI.default], ["textbox", nI.default], ["time", aI.default], ["timer", oI.default], ["toolbar", iI.default], ["tooltip", sI.default], ["tree", lI.default], ["treegrid", uI.default], ["treeitem", cI.default]], fI = dI;
Ii.default = fI;
var ul = {}, cl = {};
Object.defineProperty(cl, "__esModule", {
  value: !0
});
cl.default = void 0;
var pI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "abstract [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, mI = pI;
cl.default = mI;
var dl = {};
Object.defineProperty(dl, "__esModule", {
  value: !0
});
dl.default = void 0;
var hI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "acknowledgments [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, vI = hI;
dl.default = vI;
var fl = {};
Object.defineProperty(fl, "__esModule", {
  value: !0
});
fl.default = void 0;
var yI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, bI = yI;
fl.default = bI;
var pl = {};
Object.defineProperty(pl, "__esModule", {
  value: !0
});
pl.default = void 0;
var gI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "appendix [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, wI = gI;
pl.default = wI;
var ml = {};
Object.defineProperty(ml, "__esModule", {
  value: !0
});
ml.default = void 0;
var _I = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "content"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "referrer [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, $I = _I;
ml.default = $I;
var hl = {};
Object.defineProperty(hl, "__esModule", {
  value: !0
});
hl.default = void 0;
var EI = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "EPUB biblioentry [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-bibliography"],
  requiredContextRole: ["doc-bibliography"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, CI = EI;
hl.default = CI;
var vl = {};
Object.defineProperty(vl, "__esModule", {
  value: !0
});
vl.default = void 0;
var RI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "bibliography [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-biblioentry"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, PI = RI;
vl.default = PI;
var yl = {};
Object.defineProperty(yl, "__esModule", {
  value: !0
});
yl.default = void 0;
var xI = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "biblioref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, SI = xI;
yl.default = SI;
var bl = {};
Object.defineProperty(bl, "__esModule", {
  value: !0
});
bl.default = void 0;
var OI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "chapter [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, TI = OI;
bl.default = TI;
var gl = {};
Object.defineProperty(gl, "__esModule", {
  value: !0
});
gl.default = void 0;
var AI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "colophon [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, MI = AI;
gl.default = MI;
var wl = {};
Object.defineProperty(wl, "__esModule", {
  value: !0
});
wl.default = void 0;
var qI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "conclusion [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, II = qI;
wl.default = II;
var _l = {};
Object.defineProperty(_l, "__esModule", {
  value: !0
});
_l.default = void 0;
var NI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "cover [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, kI = NI;
_l.default = kI;
var $l = {};
Object.defineProperty($l, "__esModule", {
  value: !0
});
$l.default = void 0;
var jI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, FI = jI;
$l.default = FI;
var El = {};
Object.defineProperty(El, "__esModule", {
  value: !0
});
El.default = void 0;
var DI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, BI = DI;
El.default = BI;
var Cl = {};
Object.defineProperty(Cl, "__esModule", {
  value: !0
});
Cl.default = void 0;
var LI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "dedication [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, UI = LI;
Cl.default = UI;
var Rl = {};
Object.defineProperty(Rl, "__esModule", {
  value: !0
});
Rl.default = void 0;
var HI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-endnotes"],
  requiredContextRole: ["doc-endnotes"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, VI = HI;
Rl.default = VI;
var Pl = {};
Object.defineProperty(Pl, "__esModule", {
  value: !0
});
Pl.default = void 0;
var zI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, WI = zI;
Pl.default = WI;
var xl = {};
Object.defineProperty(xl, "__esModule", {
  value: !0
});
xl.default = void 0;
var GI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epigraph [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, KI = GI;
xl.default = KI;
var Sl = {};
Object.defineProperty(Sl, "__esModule", {
  value: !0
});
Sl.default = void 0;
var YI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epilogue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, XI = YI;
Sl.default = XI;
var Ol = {};
Object.defineProperty(Ol, "__esModule", {
  value: !0
});
Ol.default = void 0;
var JI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, QI = JI;
Ol.default = QI;
var Tl = {};
Object.defineProperty(Tl, "__esModule", {
  value: !0
});
Tl.default = void 0;
var ZI = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, eN = ZI;
Tl.default = eN;
var Al = {};
Object.defineProperty(Al, "__esModule", {
  value: !0
});
Al.default = void 0;
var tN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rN = tN;
Al.default = rN;
var Ml = {};
Object.defineProperty(Ml, "__esModule", {
  value: !0
});
Ml.default = void 0;
var nN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "foreword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, aN = nN;
Ml.default = aN;
var ql = {};
Object.defineProperty(ql, "__esModule", {
  value: !0
});
ql.default = void 0;
var oN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossary [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["definition"], ["term"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, iN = oN;
ql.default = iN;
var Il = {};
Object.defineProperty(Il, "__esModule", {
  value: !0
});
Il.default = void 0;
var sN = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, lN = sN;
Il.default = lN;
var Nl = {};
Object.defineProperty(Nl, "__esModule", {
  value: !0
});
Nl.default = void 0;
var uN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "index [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, cN = uN;
Nl.default = cN;
var kl = {};
Object.defineProperty(kl, "__esModule", {
  value: !0
});
kl.default = void 0;
var dN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "introduction [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, fN = dN;
kl.default = fN;
var jl = {};
Object.defineProperty(jl, "__esModule", {
  value: !0
});
jl.default = void 0;
var pN = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "noteref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, mN = pN;
jl.default = mN;
var Fl = {};
Object.defineProperty(Fl, "__esModule", {
  value: !0
});
Fl.default = void 0;
var hN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "notice [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, vN = hN;
Fl.default = vN;
var Dl = {};
Object.defineProperty(Dl, "__esModule", {
  value: !0
});
Dl.default = void 0;
var yN = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "pagebreak [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "separator"]]
}, bN = yN;
Dl.default = bN;
var Bl = {};
Object.defineProperty(Bl, "__esModule", {
  value: !0
});
Bl.default = void 0;
var gN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "page-list [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, wN = gN;
Bl.default = wN;
var Ll = {};
Object.defineProperty(Ll, "__esModule", {
  value: !0
});
Ll.default = void 0;
var _N = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "part [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, $N = _N;
Ll.default = $N;
var Ul = {};
Object.defineProperty(Ul, "__esModule", {
  value: !0
});
Ul.default = void 0;
var EN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "preface [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, CN = EN;
Ul.default = CN;
var Hl = {};
Object.defineProperty(Hl, "__esModule", {
  value: !0
});
Hl.default = void 0;
var RN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "prologue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, PN = RN;
Hl.default = PN;
var Vl = {};
Object.defineProperty(Vl, "__esModule", {
  value: !0
});
Vl.default = void 0;
var xN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "pullquote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["none"]]
}, SN = xN;
Vl.default = SN;
var zl = {};
Object.defineProperty(zl, "__esModule", {
  value: !0
});
zl.default = void 0;
var ON = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "qna [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, TN = ON;
zl.default = TN;
var Wl = {};
Object.defineProperty(Wl, "__esModule", {
  value: !0
});
Wl.default = void 0;
var AN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "subtitle [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"]]
}, MN = AN;
Wl.default = MN;
var Gl = {};
Object.defineProperty(Gl, "__esModule", {
  value: !0
});
Gl.default = void 0;
var qN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "help [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, IN = qN;
Gl.default = IN;
var Kl = {};
Object.defineProperty(Kl, "__esModule", {
  value: !0
});
Kl.default = void 0;
var NN = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "toc [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, kN = NN;
Kl.default = kN;
Object.defineProperty(ul, "__esModule", {
  value: !0
});
ul.default = void 0;
var jN = Ce(cl), FN = Ce(dl), DN = Ce(fl), BN = Ce(pl), LN = Ce(ml), UN = Ce(hl), HN = Ce(vl), VN = Ce(yl), zN = Ce(bl), WN = Ce(gl), GN = Ce(wl), KN = Ce(_l), YN = Ce($l), XN = Ce(El), JN = Ce(Cl), QN = Ce(Rl), ZN = Ce(Pl), e2 = Ce(xl), t2 = Ce(Sl), r2 = Ce(Ol), n2 = Ce(Tl), a2 = Ce(Al), o2 = Ce(Ml), i2 = Ce(ql), s2 = Ce(Il), l2 = Ce(Nl), u2 = Ce(kl), c2 = Ce(jl), d2 = Ce(Fl), f2 = Ce(Dl), p2 = Ce(Bl), m2 = Ce(Ll), h2 = Ce(Ul), v2 = Ce(Hl), y2 = Ce(Vl), b2 = Ce(zl), g2 = Ce(Wl), w2 = Ce(Gl), _2 = Ce(Kl);
function Ce(e) {
  return e && e.__esModule ? e : { default: e };
}
var $2 = [["doc-abstract", jN.default], ["doc-acknowledgments", FN.default], ["doc-afterword", DN.default], ["doc-appendix", BN.default], ["doc-backlink", LN.default], ["doc-biblioentry", UN.default], ["doc-bibliography", HN.default], ["doc-biblioref", VN.default], ["doc-chapter", zN.default], ["doc-colophon", WN.default], ["doc-conclusion", GN.default], ["doc-cover", KN.default], ["doc-credit", YN.default], ["doc-credits", XN.default], ["doc-dedication", JN.default], ["doc-endnote", QN.default], ["doc-endnotes", ZN.default], ["doc-epigraph", e2.default], ["doc-epilogue", t2.default], ["doc-errata", r2.default], ["doc-example", n2.default], ["doc-footnote", a2.default], ["doc-foreword", o2.default], ["doc-glossary", i2.default], ["doc-glossref", s2.default], ["doc-index", l2.default], ["doc-introduction", u2.default], ["doc-noteref", c2.default], ["doc-notice", d2.default], ["doc-pagebreak", f2.default], ["doc-pagelist", p2.default], ["doc-part", m2.default], ["doc-preface", h2.default], ["doc-prologue", v2.default], ["doc-pullquote", y2.default], ["doc-qna", b2.default], ["doc-subtitle", g2.default], ["doc-tip", w2.default], ["doc-toc", _2.default]], E2 = $2;
ul.default = E2;
var Yl = {}, Xl = {};
Object.defineProperty(Xl, "__esModule", {
  value: !0
});
Xl.default = void 0;
var C2 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-object"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "article"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, R2 = C2;
Xl.default = R2;
var Jl = {};
Object.defineProperty(Jl, "__esModule", {
  value: !0
});
Jl.default = void 0;
var P2 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-document"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "group"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "GRAPHICS",
    concept: {
      name: "graphics-symbol"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, x2 = P2;
Jl.default = x2;
var Ql = {};
Object.defineProperty(Ql, "__esModule", {
  value: !0
});
Ql.default = void 0;
var S2 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, O2 = S2;
Ql.default = O2;
Object.defineProperty(Yl, "__esModule", {
  value: !0
});
Yl.default = void 0;
var T2 = Ch(Xl), A2 = Ch(Jl), M2 = Ch(Ql);
function Ch(e) {
  return e && e.__esModule ? e : { default: e };
}
var q2 = [["graphics-document", T2.default], ["graphics-object", A2.default], ["graphics-symbol", M2.default]], I2 = q2;
Yl.default = I2;
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var N2 = Ya(_i), k2 = Ya(Ii), j2 = Ya(ul), F2 = Ya(Yl), D2 = Ya(nn);
function Ya(e) {
  return e && e.__esModule ? e : { default: e };
}
function B2(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tm(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = A$(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Ea(e, t) {
  return H2(e) || U2(e, t) || A$(e, t) || L2();
}
function L2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A$(e, t) {
  if (e) {
    if (typeof e == "string")
      return sy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sy(e, t);
  }
}
function sy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function U2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function H2(e) {
  if (Array.isArray(e))
    return e;
}
var sr = [].concat(N2.default, k2.default, j2.default, F2.default);
sr.forEach(function(e) {
  var t = Ea(e, 2), r = t[1], a = tm(r.superClass), n;
  try {
    for (a.s(); !(n = a.n()).done; ) {
      var o = n.value, i = tm(o), s;
      try {
        var l = function() {
          var c = s.value, d = sr.find(function(y) {
            var h = Ea(y, 1), $ = h[0];
            return $ === c;
          });
          if (d)
            for (var f = d[1], p = 0, v = Object.keys(f.props); p < v.length; p++) {
              var b = v[p];
              Object.prototype.hasOwnProperty.call(r.props, b) || Object.assign(r.props, B2({}, b, f.props[b]));
            }
        };
        for (i.s(); !(s = i.n()).done; )
          l();
      } catch (u) {
        i.e(u);
      } finally {
        i.f();
      }
    }
  } catch (u) {
    a.e(u);
  } finally {
    a.f();
  }
});
var rm = {
  entries: function() {
    return sr;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = tm(sr), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = Ea(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, sr);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = sr.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!rm.get(t);
  },
  keys: function() {
    return sr.map(function(t) {
      var r = Ea(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return sr.map(function(t) {
      var r = Ea(t, 2), a = r[1];
      return a;
    });
  }
}, V2 = (0, D2.default)(rm, rm.entries());
Gn.default = V2;
var Zl = {}, ly = Object.prototype.toString, M$ = function(t) {
  var r = ly.call(t), a = r === "[object Arguments]";
  return a || (a = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && ly.call(t.callee) === "[object Function]"), a;
}, Ef, uy;
function z2() {
  if (uy)
    return Ef;
  uy = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, a = M$, n = Object.prototype.propertyIsEnumerable, o = !n.call({ toString: null }, "toString"), i = n.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var p = f.constructor;
      return p && p.prototype === f;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, c = function() {
      if (typeof window > "u")
        return !1;
      for (var f in window)
        try {
          if (!u["$" + f] && t.call(window, f) && window[f] !== null && typeof window[f] == "object")
            try {
              l(window[f]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(f) {
      if (typeof window > "u" || !c)
        return l(f);
      try {
        return l(f);
      } catch {
        return !1;
      }
    };
    e = function(p) {
      var v = p !== null && typeof p == "object", b = r.call(p) === "[object Function]", y = a(p), h = v && r.call(p) === "[object String]", $ = [];
      if (!v && !b && !y)
        throw new TypeError("Object.keys called on a non-object");
      var A = i && b;
      if (h && p.length > 0 && !t.call(p, 0))
        for (var S = 0; S < p.length; ++S)
          $.push(String(S));
      if (y && p.length > 0)
        for (var T = 0; T < p.length; ++T)
          $.push(String(T));
      else
        for (var E in p)
          !(A && E === "prototype") && t.call(p, E) && $.push(String(E));
      if (o)
        for (var M = d(p), L = 0; L < s.length; ++L)
          !(M && s[L] === "constructor") && t.call(p, s[L]) && $.push(s[L]);
      return $;
    };
  }
  return Ef = e, Ef;
}
var W2 = Array.prototype.slice, G2 = M$, cy = Object.keys, So = cy ? function(t) {
  return cy(t);
} : z2(), dy = Object.keys;
So.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(a) {
      return G2(a) ? dy(W2.call(a)) : dy(a);
    });
  } else
    Object.keys = So;
  return Object.keys || So;
};
var Rh = So, eu = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), a = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
    return !1;
  var n = 42;
  t[r] = n;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(t);
  if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(t, r);
    if (i.value !== n || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, fy = typeof Symbol < "u" && Symbol, K2 = eu, Ph = function() {
  return typeof fy != "function" || typeof Symbol != "function" || typeof fy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : K2();
}, py = {
  foo: {}
}, Y2 = Object, X2 = function() {
  return { __proto__: py }.foo === py.foo && !({ __proto__: null } instanceof Y2);
}, J2 = "Function.prototype.bind called on incompatible ", Q2 = Object.prototype.toString, Z2 = Math.max, ek = "[object Function]", my = function(t, r) {
  for (var a = [], n = 0; n < t.length; n += 1)
    a[n] = t[n];
  for (var o = 0; o < r.length; o += 1)
    a[o + t.length] = r[o];
  return a;
}, tk = function(t, r) {
  for (var a = [], n = r || 0, o = 0; n < t.length; n += 1, o += 1)
    a[o] = t[n];
  return a;
}, rk = function(e, t) {
  for (var r = "", a = 0; a < e.length; a += 1)
    r += e[a], a + 1 < e.length && (r += t);
  return r;
}, nk = function(t) {
  var r = this;
  if (typeof r != "function" || Q2.apply(r) !== ek)
    throw new TypeError(J2 + r);
  for (var a = tk(arguments, 1), n, o = function() {
    if (this instanceof n) {
      var c = r.apply(
        this,
        my(a, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return r.apply(
      t,
      my(a, arguments)
    );
  }, i = Z2(0, r.length - a.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (n = Function("binder", "return function (" + rk(s, ",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, n.prototype = new u(), u.prototype = null;
  }
  return n;
}, ak = nk, xh = Function.prototype.bind || ak, ok = Function.prototype.call, ik = Object.prototype.hasOwnProperty, sk = xh, q$ = sk.call(ok, ik), Se, kn = SyntaxError, I$ = Function, An = TypeError, Cf = function(e) {
  try {
    return I$('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Jr = Object.getOwnPropertyDescriptor;
if (Jr)
  try {
    Jr({}, "");
  } catch {
    Jr = null;
  }
var Rf = function() {
  throw new An();
}, lk = Jr ? function() {
  try {
    return arguments.callee, Rf;
  } catch {
    try {
      return Jr(arguments, "callee").get;
    } catch {
      return Rf;
    }
  }
}() : Rf, yn = Ph(), uk = X2(), at = Object.getPrototypeOf || (uk ? function(e) {
  return e.__proto__;
} : null), Cn = {}, ck = typeof Uint8Array > "u" || !at ? Se : at(Uint8Array), Qr = {
  "%AggregateError%": typeof AggregateError > "u" ? Se : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Se : ArrayBuffer,
  "%ArrayIteratorPrototype%": yn && at ? at([][Symbol.iterator]()) : Se,
  "%AsyncFromSyncIteratorPrototype%": Se,
  "%AsyncFunction%": Cn,
  "%AsyncGenerator%": Cn,
  "%AsyncGeneratorFunction%": Cn,
  "%AsyncIteratorPrototype%": Cn,
  "%Atomics%": typeof Atomics > "u" ? Se : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Se : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Se : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Se : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Se : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Se : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Se : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Se : FinalizationRegistry,
  "%Function%": I$,
  "%GeneratorFunction%": Cn,
  "%Int8Array%": typeof Int8Array > "u" ? Se : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Se : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Se : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": yn && at ? at(at([][Symbol.iterator]())) : Se,
  "%JSON%": typeof JSON == "object" ? JSON : Se,
  "%Map%": typeof Map > "u" ? Se : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !yn || !at ? Se : at((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Se : Promise,
  "%Proxy%": typeof Proxy > "u" ? Se : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Se : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Se : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !yn || !at ? Se : at((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Se : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": yn && at ? at(""[Symbol.iterator]()) : Se,
  "%Symbol%": yn ? Symbol : Se,
  "%SyntaxError%": kn,
  "%ThrowTypeError%": lk,
  "%TypedArray%": ck,
  "%TypeError%": An,
  "%Uint8Array%": typeof Uint8Array > "u" ? Se : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Se : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Se : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Se : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Se : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Se : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Se : WeakSet
};
if (at)
  try {
    null.error;
  } catch (e) {
    var dk = at(at(e));
    Qr["%Error.prototype%"] = dk;
  }
var fk = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Cf("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Cf("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Cf("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var a = e("%AsyncGeneratorFunction%");
    a && (r = a.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var n = e("%AsyncGenerator%");
    n && at && (r = at(n.prototype));
  }
  return Qr[t] = r, r;
}, hy = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Xa = xh, Vo = q$, pk = Xa.call(Function.call, Array.prototype.concat), mk = Xa.call(Function.apply, Array.prototype.splice), vy = Xa.call(Function.call, String.prototype.replace), zo = Xa.call(Function.call, String.prototype.slice), hk = Xa.call(Function.call, RegExp.prototype.exec), vk = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, yk = /\\(\\)?/g, bk = function(t) {
  var r = zo(t, 0, 1), a = zo(t, -1);
  if (r === "%" && a !== "%")
    throw new kn("invalid intrinsic syntax, expected closing `%`");
  if (a === "%" && r !== "%")
    throw new kn("invalid intrinsic syntax, expected opening `%`");
  var n = [];
  return vy(t, vk, function(o, i, s, l) {
    n[n.length] = s ? vy(l, yk, "$1") : i || o;
  }), n;
}, gk = function(t, r) {
  var a = t, n;
  if (Vo(hy, a) && (n = hy[a], a = "%" + n[0] + "%"), Vo(Qr, a)) {
    var o = Qr[a];
    if (o === Cn && (o = fk(a)), typeof o > "u" && !r)
      throw new An("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: n,
      name: a,
      value: o
    };
  }
  throw new kn("intrinsic " + t + " does not exist!");
}, Rt = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new An("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new An('"allowMissing" argument must be a boolean');
  if (hk(/^%?[^%]*%?$/, t) === null)
    throw new kn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var a = bk(t), n = a.length > 0 ? a[0] : "", o = gk("%" + n + "%", r), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (n = u[0], mk(a, pk([0, 1], u)));
  for (var c = 1, d = !0; c < a.length; c += 1) {
    var f = a[c], p = zo(f, 0, 1), v = zo(f, -1);
    if ((p === '"' || p === "'" || p === "`" || v === '"' || v === "'" || v === "`") && p !== v)
      throw new kn("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (l = !0), n += "." + f, i = "%" + n + "%", Vo(Qr, i))
      s = Qr[i];
    else if (s != null) {
      if (!(f in s)) {
        if (!r)
          throw new An("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Jr && c + 1 >= a.length) {
        var b = Jr(s, f);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[f];
      } else
        d = Vo(s, f), s = s[f];
      d && !l && (Qr[i] = s);
    }
  }
  return s;
}, wk = Rt, nm = wk("%Object.defineProperty%", !0), am = function() {
  if (nm)
    try {
      return nm({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
am.hasArrayLengthDefineBug = function() {
  if (!am())
    return null;
  try {
    return nm([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var tu = am, _k = Rt, Oo = _k("%Object.getOwnPropertyDescriptor%", !0);
if (Oo)
  try {
    Oo([], "length");
  } catch {
    Oo = null;
  }
var Sh = Oo, $k = tu(), Oh = Rt, Ca = $k && Oh("%Object.defineProperty%", !0);
if (Ca)
  try {
    Ca({}, "a", { value: 1 });
  } catch {
    Ca = !1;
  }
var Ek = Oh("%SyntaxError%"), bn = Oh("%TypeError%"), yy = Sh, Th = function(t, r, a) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new bn("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new bn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new bn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new bn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new bn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new bn("`loose`, if provided, must be a boolean");
  var n = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!yy && yy(t, r);
  if (Ca)
    Ca(t, r, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: n === null && l ? l.enumerable : !n,
      value: a,
      writable: o === null && l ? l.writable : !o
    });
  else if (s || !n && !o && !i)
    t[r] = a;
  else
    throw new Ek("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ck = Rh, Rk = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Pk = Object.prototype.toString, xk = Array.prototype.concat, by = Th, Sk = function(e) {
  return typeof e == "function" && Pk.call(e) === "[object Function]";
}, N$ = tu(), Ok = function(e, t, r, a) {
  if (t in e) {
    if (a === !0) {
      if (e[t] === r)
        return;
    } else if (!Sk(a) || !a())
      return;
  }
  N$ ? by(e, t, r, !0) : by(e, t, r);
}, k$ = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, a = Ck(t);
  Rk && (a = xk.call(a, Object.getOwnPropertySymbols(t)));
  for (var n = 0; n < a.length; n += 1)
    Ok(e, a[n], t[a[n]], r[a[n]]);
};
k$.supportsDescriptors = !!N$;
var an = k$, j$ = { exports: {} }, F$ = Rt, gy = Th, Tk = tu(), wy = Sh, _y = F$("%TypeError%"), Ak = F$("%Math.floor%"), Mk = function(t, r) {
  if (typeof t != "function")
    throw new _y("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Ak(r) !== r)
    throw new _y("`length` must be a positive 32-bit integer");
  var a = arguments.length > 2 && !!arguments[2], n = !0, o = !0;
  if ("length" in t && wy) {
    var i = wy(t, "length");
    i && !i.configurable && (n = !1), i && !i.writable && (o = !1);
  }
  return (n || o || !a) && (Tk ? gy(t, "length", r, !0, !0) : gy(t, "length", r)), t;
};
(function(e) {
  var t = xh, r = Rt, a = Mk, n = r("%TypeError%"), o = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || t.call(i, o), l = r("%Object.defineProperty%", !0), u = r("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(f) {
    if (typeof f != "function")
      throw new n("a function is required");
    var p = s(t, i, arguments);
    return a(
      p,
      1 + u(0, f.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return s(t, o, arguments);
  };
  l ? l(e.exports, "apply", { value: c }) : e.exports.apply = c;
})(j$);
var Kn = j$.exports, D$ = Rt, B$ = Kn, qk = B$(D$("String.prototype.indexOf")), Pt = function(t, r) {
  var a = D$(t, !!r);
  return typeof a == "function" && qk(t, ".prototype.") > -1 ? B$(a) : a;
}, Ik = Rh, L$ = eu(), U$ = Pt, $y = Object, Nk = U$("Array.prototype.push"), Ey = U$("Object.prototype.propertyIsEnumerable"), kk = L$ ? Object.getOwnPropertySymbols : null, H$ = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var a = $y(t);
  if (arguments.length === 1)
    return a;
  for (var n = 1; n < arguments.length; ++n) {
    var o = $y(arguments[n]), i = Ik(o), s = L$ && (Object.getOwnPropertySymbols || kk);
    if (s)
      for (var l = s(o), u = 0; u < l.length; ++u) {
        var c = l[u];
        Ey(o, c) && Nk(i, c);
      }
    for (var d = 0; d < i.length; ++d) {
      var f = i[d];
      if (Ey(o, f)) {
        var p = o[f];
        a[f] = p;
      }
    }
  }
  return a;
}, Pf = H$, jk = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, a = 0; a < t.length; ++a)
    r[t[a]] = t[a];
  var n = Object.assign({}, r), o = "";
  for (var i in n)
    o += i;
  return e !== o;
}, Fk = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, V$ = function() {
  return !Object.assign || jk() || Fk() ? Pf : Object.assign;
}, Dk = an, Bk = V$, Lk = function() {
  var t = Bk();
  return Dk(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, Uk = an, Hk = Kn, Vk = H$, z$ = V$, zk = Lk, Wk = Hk.apply(z$()), W$ = function(t, r) {
  return Wk(Object, arguments);
};
Uk(W$, {
  getPolyfill: z$,
  implementation: Vk,
  shim: zk
});
var Gk = W$, ja = function() {
  return typeof (function() {
  }).name == "string";
}, Ra = Object.getOwnPropertyDescriptor;
if (Ra)
  try {
    Ra([], "length");
  } catch {
    Ra = null;
  }
ja.functionsHaveConfigurableNames = function() {
  if (!ja() || !Ra)
    return !1;
  var t = Ra(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var Kk = Function.prototype.bind;
ja.boundFunctionsHaveNames = function() {
  return ja() && typeof Kk == "function" && (function() {
  }).bind().name !== "";
};
var Yk = ja, Cy = Th, Xk = tu(), Jk = Yk.functionsHaveConfigurableNames(), Qk = TypeError, Zk = function(t, r) {
  if (typeof t != "function")
    throw new Qk("`fn` is not a function");
  var a = arguments.length > 2 && !!arguments[2];
  return (!a || Jk) && (Xk ? Cy(t, "name", r, !0, !0) : Cy(t, "name", r)), t;
}, ej = Zk, tj = Object, rj = TypeError, G$ = ej(function() {
  if (this != null && this !== tj(this))
    throw new rj("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), nj = G$, aj = an.supportsDescriptors, oj = Object.getOwnPropertyDescriptor, K$ = function() {
  if (aj && /a/mig.flags === "gim") {
    var t = oj(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var r = "", a = {};
      if (Object.defineProperty(a, "hasIndices", {
        get: function() {
          r += "d";
        }
      }), Object.defineProperty(a, "sticky", {
        get: function() {
          r += "y";
        }
      }), r === "dy")
        return t.get;
    }
  }
  return nj;
}, ij = an.supportsDescriptors, sj = K$, lj = Object.getOwnPropertyDescriptor, uj = Object.defineProperty, cj = TypeError, Ry = Object.getPrototypeOf, dj = /a/, fj = function() {
  if (!ij || !Ry)
    throw new cj("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = sj(), r = Ry(dj), a = lj(r, "flags");
  return (!a || a.get !== t) && uj(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, pj = an, mj = Kn, hj = G$, Y$ = K$, vj = fj, X$ = mj(Y$());
pj(X$, {
  getPolyfill: Y$,
  implementation: hj,
  shim: vj
});
var yj = X$, To = { exports: {} }, bj = eu, on = function() {
  return bj() && !!Symbol.toStringTag;
}, gj = on(), wj = Pt, om = wj("Object.prototype.toString"), ru = function(t) {
  return gj && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : om(t) === "[object Arguments]";
}, J$ = function(t) {
  return ru(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && om(t) !== "[object Array]" && om(t.callee) === "[object Function]";
}, _j = function() {
  return ru(arguments);
}();
ru.isLegacyArguments = J$;
var Q$ = _j ? ru : J$;
const $j = {}, Ej = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $j
}, Symbol.toStringTag, { value: "Module" })), Z$ = /* @__PURE__ */ d0(Ej);
var Ah = typeof Map == "function" && Map.prototype, xf = Object.getOwnPropertyDescriptor && Ah ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Wo = Ah && xf && typeof xf.get == "function" ? xf.get : null, Py = Ah && Map.prototype.forEach, Mh = typeof Set == "function" && Set.prototype, Sf = Object.getOwnPropertyDescriptor && Mh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Go = Mh && Sf && typeof Sf.get == "function" ? Sf.get : null, xy = Mh && Set.prototype.forEach, Cj = typeof WeakMap == "function" && WeakMap.prototype, Pa = Cj ? WeakMap.prototype.has : null, Rj = typeof WeakSet == "function" && WeakSet.prototype, xa = Rj ? WeakSet.prototype.has : null, Pj = typeof WeakRef == "function" && WeakRef.prototype, Sy = Pj ? WeakRef.prototype.deref : null, xj = Boolean.prototype.valueOf, Sj = Object.prototype.toString, Oj = Function.prototype.toString, Tj = String.prototype.match, qh = String.prototype.slice, hr = String.prototype.replace, Aj = String.prototype.toUpperCase, Oy = String.prototype.toLowerCase, eE = RegExp.prototype.test, Ty = Array.prototype.concat, Lt = Array.prototype.join, Mj = Array.prototype.slice, Ay = Math.floor, im = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Of = Object.getOwnPropertySymbols, sm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, jn = typeof Symbol == "function" && typeof Symbol.iterator == "object", dt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === jn || !0) ? Symbol.toStringTag : null, tE = Object.prototype.propertyIsEnumerable, My = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function qy(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || eE.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var a = e < 0 ? -Ay(-e) : Ay(e);
    if (a !== e) {
      var n = String(a), o = qh.call(t, n.length + 1);
      return hr.call(n, r, "$&_") + "." + hr.call(hr.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return hr.call(t, r, "$&_");
}
var lm = Z$, Iy = lm.custom, Ny = nE(Iy) ? Iy : null, qj = function e(t, r, a, n) {
  var o = r || {};
  if (lr(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (lr(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = lr(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (lr(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (lr(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = o.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return oE(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? qy(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? qy(t, u) : u;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof a > "u" && (a = 0), a >= c && c > 0 && typeof t == "object")
    return um(t) ? "[Array]" : "[Object]";
  var d = Jj(o, a);
  if (typeof n > "u")
    n = [];
  else if (aE(n, t) >= 0)
    return "[Circular]";
  function f(G, ae, xe) {
    if (ae && (n = Mj.call(n), n.push(ae)), xe) {
      var ve = {
        depth: o.depth
      };
      return lr(o, "quoteStyle") && (ve.quoteStyle = o.quoteStyle), e(G, ve, a + 1, n);
    }
    return e(G, o, a + 1, n);
  }
  if (typeof t == "function" && !ky(t)) {
    var p = Uj(t), v = fo(t, f);
    return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (v.length > 0 ? " { " + Lt.call(v, ", ") + " }" : "");
  }
  if (nE(t)) {
    var b = jn ? hr.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : sm.call(t);
    return typeof t == "object" && !jn ? fa(b) : b;
  }
  if (Kj(t)) {
    for (var y = "<" + Oy.call(String(t.nodeName)), h = t.attributes || [], $ = 0; $ < h.length; $++)
      y += " " + h[$].name + "=" + rE(Ij(h[$].value), "double", o);
    return y += ">", t.childNodes && t.childNodes.length && (y += "..."), y += "</" + Oy.call(String(t.nodeName)) + ">", y;
  }
  if (um(t)) {
    if (t.length === 0)
      return "[]";
    var A = fo(t, f);
    return d && !Xj(A) ? "[" + cm(A, d) + "]" : "[ " + Lt.call(A, ", ") + " ]";
  }
  if (kj(t)) {
    var S = fo(t, f);
    return !("cause" in Error.prototype) && "cause" in t && !tE.call(t, "cause") ? "{ [" + String(t) + "] " + Lt.call(Ty.call("[cause]: " + f(t.cause), S), ", ") + " }" : S.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Lt.call(S, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Ny && typeof t[Ny] == "function" && lm)
      return lm(t, { depth: c - a });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Hj(t)) {
    var T = [];
    return Py && Py.call(t, function(G, ae) {
      T.push(f(ae, t, !0) + " => " + f(G, t));
    }), jy("Map", Wo.call(t), T, d);
  }
  if (Wj(t)) {
    var E = [];
    return xy && xy.call(t, function(G) {
      E.push(f(G, t));
    }), jy("Set", Go.call(t), E, d);
  }
  if (Vj(t))
    return Tf("WeakMap");
  if (Gj(t))
    return Tf("WeakSet");
  if (zj(t))
    return Tf("WeakRef");
  if (Fj(t))
    return fa(f(Number(t)));
  if (Bj(t))
    return fa(f(im.call(t)));
  if (Dj(t))
    return fa(xj.call(t));
  if (jj(t))
    return fa(f(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === yt)
    return "{ [object globalThis] }";
  if (!Nj(t) && !ky(t)) {
    var M = fo(t, f), L = My ? My(t) === Object.prototype : t instanceof Object || t.constructor === Object, ie = t instanceof Object ? "" : "null prototype", J = !L && dt && Object(t) === t && dt in t ? qh.call(Hr(t), 8, -1) : ie ? "Object" : "", fe = L || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", de = fe + (J || ie ? "[" + Lt.call(Ty.call([], J || [], ie || []), ": ") + "] " : "");
    return M.length === 0 ? de + "{}" : d ? de + "{" + cm(M, d) + "}" : de + "{ " + Lt.call(M, ", ") + " }";
  }
  return String(t);
};
function rE(e, t, r) {
  var a = (r.quoteStyle || t) === "double" ? '"' : "'";
  return a + e + a;
}
function Ij(e) {
  return hr.call(String(e), /"/g, "&quot;");
}
function um(e) {
  return Hr(e) === "[object Array]" && (!dt || !(typeof e == "object" && dt in e));
}
function Nj(e) {
  return Hr(e) === "[object Date]" && (!dt || !(typeof e == "object" && dt in e));
}
function ky(e) {
  return Hr(e) === "[object RegExp]" && (!dt || !(typeof e == "object" && dt in e));
}
function kj(e) {
  return Hr(e) === "[object Error]" && (!dt || !(typeof e == "object" && dt in e));
}
function jj(e) {
  return Hr(e) === "[object String]" && (!dt || !(typeof e == "object" && dt in e));
}
function Fj(e) {
  return Hr(e) === "[object Number]" && (!dt || !(typeof e == "object" && dt in e));
}
function Dj(e) {
  return Hr(e) === "[object Boolean]" && (!dt || !(typeof e == "object" && dt in e));
}
function nE(e) {
  if (jn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !sm)
    return !1;
  try {
    return sm.call(e), !0;
  } catch {
  }
  return !1;
}
function Bj(e) {
  if (!e || typeof e != "object" || !im)
    return !1;
  try {
    return im.call(e), !0;
  } catch {
  }
  return !1;
}
var Lj = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function lr(e, t) {
  return Lj.call(e, t);
}
function Hr(e) {
  return Sj.call(e);
}
function Uj(e) {
  if (e.name)
    return e.name;
  var t = Tj.call(Oj.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function aE(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, a = e.length; r < a; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Hj(e) {
  if (!Wo || !e || typeof e != "object")
    return !1;
  try {
    Wo.call(e);
    try {
      Go.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Vj(e) {
  if (!Pa || !e || typeof e != "object")
    return !1;
  try {
    Pa.call(e, Pa);
    try {
      xa.call(e, xa);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function zj(e) {
  if (!Sy || !e || typeof e != "object")
    return !1;
  try {
    return Sy.call(e), !0;
  } catch {
  }
  return !1;
}
function Wj(e) {
  if (!Go || !e || typeof e != "object")
    return !1;
  try {
    Go.call(e);
    try {
      Wo.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Gj(e) {
  if (!xa || !e || typeof e != "object")
    return !1;
  try {
    xa.call(e, xa);
    try {
      Pa.call(e, Pa);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Kj(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function oE(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, a = "... " + r + " more character" + (r > 1 ? "s" : "");
    return oE(qh.call(e, 0, t.maxStringLength), t) + a;
  }
  var n = hr.call(hr.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Yj);
  return rE(n, "single", t);
}
function Yj(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Aj.call(t.toString(16));
}
function fa(e) {
  return "Object(" + e + ")";
}
function Tf(e) {
  return e + " { ? }";
}
function jy(e, t, r, a) {
  var n = a ? cm(r, a) : Lt.call(r, ", ");
  return e + " (" + t + ") {" + n + "}";
}
function Xj(e) {
  for (var t = 0; t < e.length; t++)
    if (aE(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Jj(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Lt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Lt.call(Array(t + 1), r)
  };
}
function cm(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Lt.call(e, "," + r) + `
` + t.prev;
}
function fo(e, t) {
  var r = um(e), a = [];
  if (r) {
    a.length = e.length;
    for (var n = 0; n < e.length; n++)
      a[n] = lr(e, n) ? t(e[n], e) : "";
  }
  var o = typeof Of == "function" ? Of(e) : [], i;
  if (jn) {
    i = {};
    for (var s = 0; s < o.length; s++)
      i["$" + o[s]] = o[s];
  }
  for (var l in e)
    lr(e, l) && (r && String(Number(l)) === l && l < e.length || jn && i["$" + l] instanceof Symbol || (eE.call(/[^\w$]/, l) ? a.push(t(l, e) + ": " + t(e[l], e)) : a.push(l + ": " + t(e[l], e))));
  if (typeof Of == "function")
    for (var u = 0; u < o.length; u++)
      tE.call(e, o[u]) && a.push("[" + t(o[u]) + "]: " + t(e[o[u]], e));
  return a;
}
var Ih = Rt, Yn = Pt, Qj = qj, Zj = Ih("%TypeError%"), po = Ih("%WeakMap%", !0), mo = Ih("%Map%", !0), eF = Yn("WeakMap.prototype.get", !0), tF = Yn("WeakMap.prototype.set", !0), rF = Yn("WeakMap.prototype.has", !0), nF = Yn("Map.prototype.get", !0), aF = Yn("Map.prototype.set", !0), oF = Yn("Map.prototype.has", !0), Nh = function(e, t) {
  for (var r = e, a; (a = r.next) !== null; r = a)
    if (a.key === t)
      return r.next = a.next, a.next = e.next, e.next = a, a;
}, iF = function(e, t) {
  var r = Nh(e, t);
  return r && r.value;
}, sF = function(e, t, r) {
  var a = Nh(e, t);
  a ? a.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, lF = function(e, t) {
  return !!Nh(e, t);
}, iE = function() {
  var t, r, a, n = {
    assert: function(o) {
      if (!n.has(o))
        throw new Zj("Side channel does not contain " + Qj(o));
    },
    get: function(o) {
      if (po && o && (typeof o == "object" || typeof o == "function")) {
        if (t)
          return eF(t, o);
      } else if (mo) {
        if (r)
          return nF(r, o);
      } else if (a)
        return iF(a, o);
    },
    has: function(o) {
      if (po && o && (typeof o == "object" || typeof o == "function")) {
        if (t)
          return rF(t, o);
      } else if (mo) {
        if (r)
          return oF(r, o);
      } else if (a)
        return lF(a, o);
      return !1;
    },
    set: function(o, i) {
      po && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new po()), tF(t, o, i)) : mo ? (r || (r = new mo()), aF(r, o, i)) : (a || (a = { key: {}, next: null }), sF(a, o, i));
    }
  };
  return n;
}, uF = Rt, cF = q$, pa = iE(), zt = uF("%TypeError%"), kh = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new zt("`O` is not an object");
    if (typeof t != "string")
      throw new zt("`slot` must be a string");
    if (pa.assert(e), !kh.has(e, t))
      throw new zt("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new zt("`O` is not an object");
    if (typeof t != "string")
      throw new zt("`slot` must be a string");
    var r = pa.get(e);
    return r && r["$" + t];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new zt("`O` is not an object");
    if (typeof t != "string")
      throw new zt("`slot` must be a string");
    var r = pa.get(e);
    return !!r && cF(r, "$" + t);
  },
  set: function(e, t, r) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new zt("`O` is not an object");
    if (typeof t != "string")
      throw new zt("`slot` must be a string");
    var a = pa.get(e);
    a || (a = {}, pa.set(e, a)), a["$" + t] = r;
  }
};
Object.freeze && Object.freeze(kh);
var dF = kh, ma = dF, fF = SyntaxError, Fy = typeof StopIteration == "object" ? StopIteration : null, pF = function(t) {
  if (!Fy)
    throw new fF("this environment lacks StopIteration");
  ma.set(t, "[[Done]]", !1);
  var r = {
    next: function() {
      var n = ma.get(this, "[[Iterator]]"), o = ma.get(n, "[[Done]]");
      try {
        return {
          done: o,
          value: o ? void 0 : n.next()
        };
      } catch (i) {
        if (ma.set(n, "[[Done]]", !0), i !== Fy)
          throw i;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return ma.set(r, "[[Iterator]]", t), r;
}, mF = {}.toString, sE = Array.isArray || function(e) {
  return mF.call(e) == "[object Array]";
}, hF = String.prototype.valueOf, vF = function(t) {
  try {
    return hF.call(t), !0;
  } catch {
    return !1;
  }
}, yF = Object.prototype.toString, bF = "[object String]", gF = on(), lE = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : gF ? vF(t) : yF.call(t) === bF;
}, jh = typeof Map == "function" && Map.prototype ? Map : null, wF = typeof Set == "function" && Set.prototype ? Set : null, Ko;
jh || (Ko = function(t) {
  return !1;
});
var uE = jh ? Map.prototype.has : null, Dy = wF ? Set.prototype.has : null;
!Ko && !uE && (Ko = function(t) {
  return !1;
});
var cE = Ko || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (uE.call(t), Dy)
      try {
        Dy.call(t);
      } catch {
        return !0;
      }
    return t instanceof jh;
  } catch {
  }
  return !1;
}, _F = typeof Map == "function" && Map.prototype ? Map : null, Fh = typeof Set == "function" && Set.prototype ? Set : null, Yo;
Fh || (Yo = function(t) {
  return !1;
});
var By = _F ? Map.prototype.has : null, dE = Fh ? Set.prototype.has : null;
!Yo && !dE && (Yo = function(t) {
  return !1;
});
var fE = Yo || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (dE.call(t), By)
      try {
        By.call(t);
      } catch {
        return !0;
      }
    return t instanceof Fh;
  } catch {
  }
  return !1;
}, Ly = Q$, Uy = pF;
if (Ph() || eu()) {
  var Af = Symbol.iterator;
  To.exports = function(t) {
    if (t != null && typeof t[Af] < "u")
      return t[Af]();
    if (Ly(t))
      return Array.prototype[Af].call(t);
  };
} else {
  var $F = sE, EF = lE, Hy = Rt, CF = Hy("%Map%", !0), RF = Hy("%Set%", !0), St = Pt, Vy = St("Array.prototype.push"), zy = St("String.prototype.charCodeAt"), PF = St("String.prototype.slice"), xF = function(t, r) {
    var a = t.length;
    if (r + 1 >= a)
      return r + 1;
    var n = zy(t, r);
    if (n < 55296 || n > 56319)
      return r + 1;
    var o = zy(t, r + 1);
    return o < 56320 || o > 57343 ? r + 1 : r + 2;
  }, Mf = function(t) {
    var r = 0;
    return {
      next: function() {
        var n = r >= t.length, o;
        return n || (o = t[r], r += 1), {
          done: n,
          value: o
        };
      }
    };
  }, Wy = function(t, r) {
    if ($F(t) || Ly(t))
      return Mf(t);
    if (EF(t)) {
      var a = 0;
      return {
        next: function() {
          var o = xF(t, a), i = PF(t, a, o);
          return a = o, {
            done: o > t.length,
            value: i
          };
        }
      };
    }
    if (r && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!CF && !RF)
    To.exports = function(t) {
      if (t != null)
        return Wy(t, !0);
    };
  else {
    var SF = cE, OF = fE, Gy = St("Map.prototype.forEach", !0), Ky = St("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var Yy = St("Map.prototype.iterator", !0), Xy = St("Set.prototype.iterator", !0);
    var Jy = St("Map.prototype.@@iterator", !0) || St("Map.prototype._es6-shim iterator_", !0), Qy = St("Set.prototype.@@iterator", !0) || St("Set.prototype._es6-shim iterator_", !0), TF = function(t) {
      if (SF(t)) {
        if (Yy)
          return Uy(Yy(t));
        if (Jy)
          return Jy(t);
        if (Gy) {
          var r = [];
          return Gy(t, function(n, o) {
            Vy(r, [o, n]);
          }), Mf(r);
        }
      }
      if (OF(t)) {
        if (Xy)
          return Uy(Xy(t));
        if (Qy)
          return Qy(t);
        if (Ky) {
          var a = [];
          return Ky(t, function(n) {
            Vy(a, n);
          }), Mf(a);
        }
      }
    };
    To.exports = function(t) {
      return TF(t) || Wy(t);
    };
  }
}
var AF = To.exports, Zy = function(e) {
  return e !== e;
}, pE = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || Zy(t) && Zy(r));
}, MF = pE, mE = function() {
  return typeof Object.is == "function" ? Object.is : MF;
}, qF = mE, IF = an, NF = function() {
  var t = qF();
  return IF(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, kF = an, jF = Kn, FF = pE, hE = mE, DF = NF, vE = jF(hE(), Object);
kF(vE, {
  getPolyfill: hE,
  implementation: FF,
  shim: DF
});
var BF = vE, yE = Function.prototype.toString, xn = typeof Reflect == "object" && Reflect !== null && Reflect.apply, dm, Ao;
if (typeof xn == "function" && typeof Object.defineProperty == "function")
  try {
    dm = Object.defineProperty({}, "length", {
      get: function() {
        throw Ao;
      }
    }), Ao = {}, xn(function() {
      throw 42;
    }, null, dm);
  } catch (e) {
    e !== Ao && (xn = null);
  }
else
  xn = null;
var LF = /^\s*class\b/, fm = function(t) {
  try {
    var r = yE.call(t);
    return LF.test(r);
  } catch {
    return !1;
  }
}, qf = function(t) {
  try {
    return fm(t) ? !1 : (yE.call(t), !0);
  } catch {
    return !1;
  }
}, Mo = Object.prototype.toString, UF = "[object Object]", HF = "[object Function]", VF = "[object GeneratorFunction]", zF = "[object HTMLAllCollection]", WF = "[object HTML document.all class]", GF = "[object HTMLCollection]", KF = typeof Symbol == "function" && !!Symbol.toStringTag, YF = !(0 in [,]), pm = function() {
  return !1;
};
if (typeof document == "object") {
  var XF = document.all;
  Mo.call(XF) === Mo.call(document.all) && (pm = function(t) {
    if ((YF || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Mo.call(t);
        return (r === zF || r === WF || r === GF || r === UF) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var JF = xn ? function(t) {
  if (pm(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    xn(t, null, dm);
  } catch (r) {
    if (r !== Ao)
      return !1;
  }
  return !fm(t) && qf(t);
} : function(t) {
  if (pm(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (KF)
    return qf(t);
  if (fm(t))
    return !1;
  var r = Mo.call(t);
  return r !== HF && r !== VF && !/^\[object HTML/.test(r) ? !1 : qf(t);
}, QF = JF, ZF = Object.prototype.toString, bE = Object.prototype.hasOwnProperty, eD = function(t, r, a) {
  for (var n = 0, o = t.length; n < o; n++)
    bE.call(t, n) && (a == null ? r(t[n], n, t) : r.call(a, t[n], n, t));
}, tD = function(t, r, a) {
  for (var n = 0, o = t.length; n < o; n++)
    a == null ? r(t.charAt(n), n, t) : r.call(a, t.charAt(n), n, t);
}, rD = function(t, r, a) {
  for (var n in t)
    bE.call(t, n) && (a == null ? r(t[n], n, t) : r.call(a, t[n], n, t));
}, nD = function(t, r, a) {
  if (!QF(r))
    throw new TypeError("iterator must be a function");
  var n;
  arguments.length >= 3 && (n = a), ZF.call(t) === "[object Array]" ? eD(t, r, n) : typeof t == "string" ? tD(t, r, n) : rD(t, r, n);
}, aD = nD, If = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], oD = typeof globalThis > "u" ? yt : globalThis, iD = function() {
  for (var t = [], r = 0; r < If.length; r++)
    typeof oD[If[r]] == "function" && (t[t.length] = If[r]);
  return t;
}, Xo = aD, sD = iD, eb = Kn, Dh = Pt, qo = Sh, lD = Dh("Object.prototype.toString"), gE = on(), tb = typeof globalThis > "u" ? yt : globalThis, mm = sD(), Bh = Dh("String.prototype.slice"), Nf = Object.getPrototypeOf, uD = Dh("Array.prototype.indexOf", !0) || function(t, r) {
  for (var a = 0; a < t.length; a += 1)
    if (t[a] === r)
      return a;
  return -1;
}, Jo = { __proto__: null };
gE && qo && Nf ? Xo(mm, function(e) {
  var t = new tb[e]();
  if (Symbol.toStringTag in t) {
    var r = Nf(t), a = qo(r, Symbol.toStringTag);
    if (!a) {
      var n = Nf(r);
      a = qo(n, Symbol.toStringTag);
    }
    Jo["$" + e] = eb(a.get);
  }
}) : Xo(mm, function(e) {
  var t = new tb[e](), r = t.slice || t.set;
  r && (Jo["$" + e] = eb(r));
});
var cD = function(t) {
  var r = !1;
  return Xo(Jo, function(a, n) {
    if (!r)
      try {
        "$" + a(t) === n && (r = Bh(n, 1));
      } catch {
      }
  }), r;
}, dD = function(t) {
  var r = !1;
  return Xo(Jo, function(a, n) {
    if (!r)
      try {
        a(t), r = Bh(n, 1);
      } catch {
      }
  }), r;
}, wE = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!gE) {
    var r = Bh(lD(t), 8, -1);
    return uD(mm, r) > -1 ? r : r !== "Object" ? !1 : dD(t);
  }
  return qo ? cD(t) : null;
}, fD = wE, pD = function(t) {
  return !!fD(t);
}, mD = Kn, hD = Pt, _E = Rt, vD = pD, rb = _E("ArrayBuffer", !0), nb = _E("Float32Array", !0), Io = hD("ArrayBuffer.prototype.byteLength", !0), ab = rb && !Io && new rb().slice, ob = ab && mD(ab), $E = Io || ob ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Io ? Io(t) : ob(t, 0), !0;
  } catch {
    return !1;
  }
} : nb ? function(t) {
  try {
    return new nb(t).buffer === t && !vD(t);
  } catch (r) {
    return typeof t == "object" && r.name === "RangeError";
  }
} : function(t) {
  return !1;
}, yD = Date.prototype.getDay, bD = function(t) {
  try {
    return yD.call(t), !0;
  } catch {
    return !1;
  }
}, gD = Object.prototype.toString, wD = "[object Date]", _D = on(), $D = function(t) {
  return typeof t != "object" || t === null ? !1 : _D ? bD(t) : gD.call(t) === wD;
}, hm = Pt, EE = on(), CE, RE, vm, ym;
if (EE) {
  CE = hm("Object.prototype.hasOwnProperty"), RE = hm("RegExp.prototype.exec"), vm = {};
  var kf = function() {
    throw vm;
  };
  ym = {
    toString: kf,
    valueOf: kf
  }, typeof Symbol.toPrimitive == "symbol" && (ym[Symbol.toPrimitive] = kf);
}
var ED = hm("Object.prototype.toString"), CD = Object.getOwnPropertyDescriptor, RD = "[object RegExp]", PD = EE ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = CD(t, "lastIndex"), a = r && CE(r, "value");
  if (!a)
    return !1;
  try {
    RE(t, ym);
  } catch (n) {
    return n === vm;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : ED(t) === RD;
}, xD = Pt, ib = xD("SharedArrayBuffer.prototype.byteLength", !0), SD = ib ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return ib(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, OD = Number.prototype.toString, TD = function(t) {
  try {
    return OD.call(t), !0;
  } catch {
    return !1;
  }
}, AD = Object.prototype.toString, MD = "[object Number]", qD = on(), ID = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : qD ? TD(t) : AD.call(t) === MD;
}, PE = Pt, ND = PE("Boolean.prototype.toString"), kD = PE("Object.prototype.toString"), jD = function(t) {
  try {
    return ND(t), !0;
  } catch {
    return !1;
  }
}, FD = "[object Boolean]", DD = on(), BD = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : DD && Symbol.toStringTag in t ? jD(t) : kD(t) === FD;
}, bm = { exports: {} }, LD = Object.prototype.toString, UD = Ph();
if (UD) {
  var HD = Symbol.prototype.toString, VD = /^Symbol\(.*\)$/, zD = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : VD.test(HD.call(t));
  };
  bm.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (LD.call(t) !== "[object Symbol]")
      return !1;
    try {
      return zD(t);
    } catch {
      return !1;
    }
  };
} else
  bm.exports = function(t) {
    return !1;
  };
var WD = bm.exports, gm = { exports: {} }, sb = typeof BigInt < "u" && BigInt, GD = function() {
  return typeof sb == "function" && typeof BigInt == "function" && typeof sb(42) == "bigint" && typeof BigInt(42) == "bigint";
}, KD = GD();
if (KD) {
  var YD = BigInt.prototype.valueOf, XD = function(t) {
    try {
      return YD.call(t), !0;
    } catch {
    }
    return !1;
  };
  gm.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : XD(t);
  };
} else
  gm.exports = function(t) {
    return !1;
  };
var JD = gm.exports, QD = lE, ZD = ID, eB = BD, tB = WD, rB = JD, nB = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (QD(t))
    return "String";
  if (ZD(t))
    return "Number";
  if (eB(t))
    return "Boolean";
  if (tB(t))
    return "Symbol";
  if (rB(t))
    return "BigInt";
}, Qo = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, lb = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Zo;
Qo || (Zo = function(t) {
  return !1;
});
var wm = Qo ? Qo.prototype.has : null, jf = lb ? lb.prototype.has : null;
!Zo && !wm && (Zo = function(t) {
  return !1;
});
var aB = Zo || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (wm.call(t, wm), jf)
      try {
        jf.call(t, jf);
      } catch {
        return !0;
      }
    return t instanceof Qo;
  } catch {
  }
  return !1;
}, _m = { exports: {} }, oB = Rt, xE = Pt, iB = oB("%WeakSet%", !0), Ff = xE("WeakSet.prototype.has", !0);
if (Ff) {
  var Df = xE("WeakMap.prototype.has", !0);
  _m.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Ff(t, Ff), Df)
        try {
          Df(t, Df);
        } catch {
          return !0;
        }
      return t instanceof iB;
    } catch {
    }
    return !1;
  };
} else
  _m.exports = function(t) {
    return !1;
  };
var sB = _m.exports, lB = cE, uB = fE, cB = aB, dB = sB, fB = function(t) {
  if (t && typeof t == "object") {
    if (lB(t))
      return "Map";
    if (uB(t))
      return "Set";
    if (cB(t))
      return "WeakMap";
    if (dB(t))
      return "WeakSet";
  }
  return !1;
}, pB = Pt, ub = pB("ArrayBuffer.prototype.byteLength", !0), mB = $E, hB = function(t) {
  return mB(t) ? ub ? ub(t) : t.byteLength : NaN;
}, SE = Gk, Ht = Pt, cb = yj, vB = Rt, Fn = AF, yB = iE, db = BF, fb = Q$, pb = sE, mb = $E, hb = $D, vb = PD, yb = SD, bb = Rh, gb = nB, wb = fB, _b = wE, $b = hB, Eb = Ht("SharedArrayBuffer.prototype.byteLength", !0), Cb = Ht("Date.prototype.getTime"), Bf = Object.getPrototypeOf, Rb = Ht("Object.prototype.toString"), ei = vB("%Set%", !0), $m = Ht("Map.prototype.has", !0), ti = Ht("Map.prototype.get", !0), Pb = Ht("Map.prototype.size", !0), ri = Ht("Set.prototype.add", !0), OE = Ht("Set.prototype.delete", !0), ni = Ht("Set.prototype.has", !0), No = Ht("Set.prototype.size", !0);
function xb(e, t, r, a) {
  for (var n = Fn(e), o; (o = n.next()) && !o.done; )
    if (Nt(t, o.value, r, a))
      return OE(e, o.value), !0;
  return !1;
}
function TE(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function bB(e, t, r, a, n, o) {
  var i = TE(r);
  if (i != null)
    return i;
  var s = ti(t, i), l = SE({}, n, { strict: !1 });
  return typeof s > "u" && !$m(t, i) || !Nt(a, s, l, o) ? !1 : !$m(e, i) && Nt(a, s, l, o);
}
function gB(e, t, r) {
  var a = TE(r);
  return a ?? (ni(t, a) && !ni(e, a));
}
function Sb(e, t, r, a, n, o) {
  for (var i = Fn(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    Nt(r, l, n, o) && Nt(a, ti(t, l), n, o))
      return OE(e, l), !0;
  return !1;
}
function Nt(e, t, r, a) {
  var n = r || {};
  if (n.strict ? db(e, t) : e === t)
    return !0;
  var o = gb(e), i = gb(t);
  if (o !== i)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return n.strict ? db(e, t) : e == t;
  var s = a.has(e), l = a.has(t), u;
  if (s && l) {
    if (a.get(e) === a.get(t))
      return !0;
  } else
    u = {};
  return s || a.set(e, u), l || a.set(t, u), $B(e, t, n, a);
}
function Ob(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function wB(e, t, r, a) {
  if (No(e) !== No(t))
    return !1;
  for (var n = Fn(e), o = Fn(t), i, s, l; (i = n.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new ei()), ri(l, i.value);
    else if (!ni(t, i.value)) {
      if (r.strict || !gB(e, t, i.value))
        return !1;
      l || (l = new ei()), ri(l, i.value);
    }
  if (l) {
    for (; (s = o.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!xb(l, s.value, r.strict, a))
          return !1;
      } else if (!r.strict && !ni(e, s.value) && !xb(l, s.value, r.strict, a))
        return !1;
    return No(l) === 0;
  }
  return !0;
}
function _B(e, t, r, a) {
  if (Pb(e) !== Pb(t))
    return !1;
  for (var n = Fn(e), o = Fn(t), i, s, l, u, c, d; (i = n.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new ei()), ri(l, u);
    else if (d = ti(t, u), typeof d > "u" && !$m(t, u) || !Nt(c, d, r, a)) {
      if (r.strict || !bB(e, t, u, c, r, a))
        return !1;
      l || (l = new ei()), ri(l, u);
    }
  if (l) {
    for (; (s = o.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!Sb(l, e, u, d, r, a))
          return !1;
      } else if (!r.strict && (!e.has(u) || !Nt(ti(e, u), d, r, a)) && !Sb(l, e, u, d, SE({}, r, { strict: !1 }), a))
        return !1;
    return No(l) === 0;
  }
  return !0;
}
function $B(e, t, r, a) {
  var n, o;
  if (typeof e != typeof t || e == null || t == null || Rb(e) !== Rb(t) || fb(e) !== fb(t))
    return !1;
  var i = pb(e), s = pb(t);
  if (i !== s)
    return !1;
  var l = e instanceof Error, u = t instanceof Error;
  if (l !== u || (l || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var c = vb(e), d = vb(t);
  if (c !== d || (c || d) && (e.source !== t.source || cb(e) !== cb(t)))
    return !1;
  var f = hb(e), p = hb(t);
  if (f !== p || (f || p) && Cb(e) !== Cb(t) || r.strict && Bf && Bf(e) !== Bf(t))
    return !1;
  var v = _b(e), b = _b(t);
  if (v !== b)
    return !1;
  if (v || b) {
    if (e.length !== t.length)
      return !1;
    for (n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  var y = Ob(e), h = Ob(t);
  if (y !== h)
    return !1;
  if (y || h) {
    if (e.length !== t.length)
      return !1;
    for (n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  var $ = mb(e), A = mb(t);
  if ($ !== A)
    return !1;
  if ($ || A)
    return $b(e) !== $b(t) ? !1 : typeof Uint8Array == "function" && Nt(new Uint8Array(e), new Uint8Array(t), r, a);
  var S = yb(e), T = yb(t);
  if (S !== T)
    return !1;
  if (S || T)
    return Eb(e) !== Eb(t) ? !1 : typeof Uint8Array == "function" && Nt(new Uint8Array(e), new Uint8Array(t), r, a);
  if (typeof e != typeof t)
    return !1;
  var E = bb(e), M = bb(t);
  if (E.length !== M.length)
    return !1;
  for (E.sort(), M.sort(), n = E.length - 1; n >= 0; n--)
    if (E[n] != M[n])
      return !1;
  for (n = E.length - 1; n >= 0; n--)
    if (o = E[n], !Nt(e[o], t[o], r, a))
      return !1;
  var L = wb(e), ie = wb(t);
  return L !== ie ? !1 : L === "Set" || ie === "Set" ? wB(e, t, r, a) : L === "Map" ? _B(e, t, r, a) : !0;
}
var EB = function(t, r, a) {
  return Nt(t, r, a, yB());
};
Object.defineProperty(Zl, "__esModule", {
  value: !0
});
Zl.default = void 0;
var CB = Lh(EB), RB = Lh(nn), AE = Lh(Gn);
function Lh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Lf(e, t) {
  return SB(e) || xB(e, t) || ME(e, t) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function SB(e) {
  if (Array.isArray(e))
    return e;
}
function OB(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = ME(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function ME(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tb(e, t);
  }
}
function Tb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var ur = [], Ab = AE.default.keys();
for (var Uf = 0; Uf < Ab.length; Uf++) {
  var Hf = Ab[Uf], Vf = AE.default.get(Hf);
  if (Vf)
    for (var Mb = [].concat(Vf.baseConcepts, Vf.relatedConcepts), zf = 0; zf < Mb.length; zf++) {
      var qb = Mb[zf];
      if (qb.module === "HTML") {
        var Wf = qb.concept;
        Wf && function() {
          var e = JSON.stringify(Wf), t = ur.find(function(o) {
            return JSON.stringify(o[0]) === e;
          }), r = void 0;
          t ? r = t[1] : r = [];
          for (var a = !0, n = 0; n < r.length; n++)
            if (r[n] === Hf) {
              a = !1;
              break;
            }
          a && r.push(Hf), ur.push([Wf, r]);
        }();
      }
    }
}
var Em = {
  entries: function() {
    return ur;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = OB(ur), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = Lf(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, ur);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = ur.find(function(a) {
      return (0, CB.default)(t, a[0]);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Em.get(t);
  },
  keys: function() {
    return ur.map(function(t) {
      var r = Lf(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return ur.map(function(t) {
      var r = Lf(t, 2), a = r[1];
      return a;
    });
  }
}, TB = (0, RB.default)(Em, Em.entries());
Zl.default = TB;
var nu = {};
Object.defineProperty(nu, "__esModule", {
  value: !0
});
nu.default = void 0;
var AB = IE(nn), qE = IE(Gn);
function IE(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gf(e, t) {
  return IB(e) || qB(e, t) || NE(e, t) || MB();
}
function MB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function IB(e) {
  if (Array.isArray(e))
    return e;
}
function NB(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = NE(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function NE(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ib(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ib(e, t);
  }
}
function Ib(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var cr = [], kE = qE.default.keys(), kB = function(t) {
  var r = kE[t], a = qE.default.get(r);
  if (a)
    for (var n = [].concat(a.baseConcepts, a.relatedConcepts), o = 0; o < n.length; o++) {
      var i = n[o];
      if (i.module === "HTML") {
        var s = i.concept;
        if (s) {
          var l = cr.find(function(c) {
            return c[0] === r;
          }), u = void 0;
          l ? u = l[1] : u = [], u.push(s), cr.push([r, u]);
        }
      }
    }
};
for (var Kf = 0; Kf < kE.length; Kf++)
  kB(Kf);
var Cm = {
  entries: function() {
    return cr;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = NB(cr), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = Gf(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, cr);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = cr.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Cm.get(t);
  },
  keys: function() {
    return cr.map(function(t) {
      var r = Gf(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return cr.map(function(t) {
      var r = Gf(t, 2), a = r[1];
      return a;
    });
  }
}, jB = (0, AB.default)(Cm, Cm.entries());
nu.default = jB;
Object.defineProperty(Mt, "__esModule", {
  value: !0
});
var Ot = Mt.roles = FE = Mt.roleElements = jE = Mt.elementRoles = Mt.dom = Mt.aria = void 0, FB = Ja(bi), DB = Ja(wi), BB = Ja(Gn), LB = Ja(Zl), UB = Ja(nu);
function Ja(e) {
  return e && e.__esModule ? e : { default: e };
}
var HB = FB.default;
Mt.aria = HB;
var VB = DB.default;
Mt.dom = VB;
var zB = BB.default;
Ot = Mt.roles = zB;
var WB = LB.default, jE = Mt.elementRoles = WB, GB = UB.default, FE = Mt.roleElements = GB, Uh = { exports: {} };
Uh.exports;
(function(e) {
  var t = function() {
    var r = String.fromCharCode, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
    function i(l, u) {
      if (!o[l]) {
        o[l] = {};
        for (var c = 0; c < l.length; c++)
          o[l][l.charAt(c)] = c;
      }
      return o[l][u];
    }
    var s = {
      compressToBase64: function(l) {
        if (l == null)
          return "";
        var u = s._compress(l, 6, function(c) {
          return a.charAt(c);
        });
        switch (u.length % 4) {
          default:
          case 0:
            return u;
          case 1:
            return u + "===";
          case 2:
            return u + "==";
          case 3:
            return u + "=";
        }
      },
      decompressFromBase64: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32, function(u) {
          return i(a, l.charAt(u));
        });
      },
      compressToUTF16: function(l) {
        return l == null ? "" : s._compress(l, 15, function(u) {
          return r(u + 32);
        }) + " ";
      },
      decompressFromUTF16: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 16384, function(u) {
          return l.charCodeAt(u) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(l) {
        for (var u = s.compress(l), c = new Uint8Array(u.length * 2), d = 0, f = u.length; d < f; d++) {
          var p = u.charCodeAt(d);
          c[d * 2] = p >>> 8, c[d * 2 + 1] = p % 256;
        }
        return c;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return s.decompress(l);
        for (var u = new Array(l.length / 2), c = 0, d = u.length; c < d; c++)
          u[c] = l[c * 2] * 256 + l[c * 2 + 1];
        var f = [];
        return u.forEach(function(p) {
          f.push(r(p));
        }), s.decompress(f.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return n.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(n, l.charAt(u));
        }));
      },
      compress: function(l) {
        return s._compress(l, 16, function(u) {
          return r(u);
        });
      },
      _compress: function(l, u, c) {
        if (l == null)
          return "";
        var d, f, p = {}, v = {}, b = "", y = "", h = "", $ = 2, A = 3, S = 2, T = [], E = 0, M = 0, L;
        for (L = 0; L < l.length; L += 1)
          if (b = l.charAt(L), Object.prototype.hasOwnProperty.call(p, b) || (p[b] = A++, v[b] = !0), y = h + b, Object.prototype.hasOwnProperty.call(p, y))
            h = y;
          else {
            if (Object.prototype.hasOwnProperty.call(v, h)) {
              if (h.charCodeAt(0) < 256) {
                for (d = 0; d < S; d++)
                  E = E << 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++;
                for (f = h.charCodeAt(0), d = 0; d < 8; d++)
                  E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
              } else {
                for (f = 1, d = 0; d < S; d++)
                  E = E << 1 | f, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = 0;
                for (f = h.charCodeAt(0), d = 0; d < 16; d++)
                  E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
              }
              $--, $ == 0 && ($ = Math.pow(2, S), S++), delete v[h];
            } else
              for (f = p[h], d = 0; d < S; d++)
                E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
            $--, $ == 0 && ($ = Math.pow(2, S), S++), p[y] = A++, h = String(b);
          }
        if (h !== "") {
          if (Object.prototype.hasOwnProperty.call(v, h)) {
            if (h.charCodeAt(0) < 256) {
              for (d = 0; d < S; d++)
                E = E << 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++;
              for (f = h.charCodeAt(0), d = 0; d < 8; d++)
                E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
            } else {
              for (f = 1, d = 0; d < S; d++)
                E = E << 1 | f, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = 0;
              for (f = h.charCodeAt(0), d = 0; d < 16; d++)
                E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
            }
            $--, $ == 0 && ($ = Math.pow(2, S), S++), delete v[h];
          } else
            for (f = p[h], d = 0; d < S; d++)
              E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
          $--, $ == 0 && ($ = Math.pow(2, S), S++);
        }
        for (f = 2, d = 0; d < S; d++)
          E = E << 1 | f & 1, M == u - 1 ? (M = 0, T.push(c(E)), E = 0) : M++, f = f >> 1;
        for (; ; )
          if (E = E << 1, M == u - 1) {
            T.push(c(E));
            break;
          } else
            M++;
        return T.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, c) {
        var d = [], f = 4, p = 4, v = 3, b = "", y = [], h, $, A, S, T, E, M, L = { val: c(0), position: u, index: 1 };
        for (h = 0; h < 3; h += 1)
          d[h] = h;
        for (A = 0, T = Math.pow(2, 2), E = 1; E != T; )
          S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = u, L.val = c(L.index++)), A |= (S > 0 ? 1 : 0) * E, E <<= 1;
        switch (A) {
          case 0:
            for (A = 0, T = Math.pow(2, 8), E = 1; E != T; )
              S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = u, L.val = c(L.index++)), A |= (S > 0 ? 1 : 0) * E, E <<= 1;
            M = r(A);
            break;
          case 1:
            for (A = 0, T = Math.pow(2, 16), E = 1; E != T; )
              S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = u, L.val = c(L.index++)), A |= (S > 0 ? 1 : 0) * E, E <<= 1;
            M = r(A);
            break;
          case 2:
            return "";
        }
        for (d[3] = M, $ = M, y.push(M); ; ) {
          if (L.index > l)
            return "";
          for (A = 0, T = Math.pow(2, v), E = 1; E != T; )
            S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = u, L.val = c(L.index++)), A |= (S > 0 ? 1 : 0) * E, E <<= 1;
          switch (M = A) {
            case 0:
              for (A = 0, T = Math.pow(2, 8), E = 1; E != T; )
                S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = u, L.val = c(L.index++)), A |= (S > 0 ? 1 : 0) * E, E <<= 1;
              d[p++] = r(A), M = p - 1, f--;
              break;
            case 1:
              for (A = 0, T = Math.pow(2, 16), E = 1; E != T; )
                S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = u, L.val = c(L.index++)), A |= (S > 0 ? 1 : 0) * E, E <<= 1;
              d[p++] = r(A), M = p - 1, f--;
              break;
            case 2:
              return y.join("");
          }
          if (f == 0 && (f = Math.pow(2, v), v++), d[M])
            b = d[M];
          else if (M === p)
            b = $ + $.charAt(0);
          else
            return null;
          y.push(b), d[p++] = $ + b.charAt(0), f--, $ = b, f == 0 && (f = Math.pow(2, v), v++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(Uh);
var KB = Uh.exports;
const YB = /* @__PURE__ */ Lr(KB);
function DE(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const XB = (e, t, r, a, n, o, i) => {
  const s = a + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, n, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + a), d = "{" + d + "}"), r.spacingInner + a + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, JB = 3, QB = (e, t, r, a, n, o) => e.map((i) => {
  const s = typeof i == "string" ? BE(i, t) : o(i, t, r, a, n);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== JB ? "" : t.spacingOuter + r + s;
}).join(""), BE = (e, t) => {
  const r = t.colors.content;
  return r.open + DE(e) + r.close;
}, ZB = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + DE(e) + "-->" + r.close;
}, e3 = (e, t, r, a, n) => {
  const o = a.colors.tag;
  return o.open + "<" + e + (t && o.close + t + a.spacingOuter + n + o.open) + (r ? ">" + o.close + r + a.spacingOuter + n + o.open + "</" + e : (t && !a.min ? "" : " ") + "/") + ">" + o.close;
}, t3 = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, r3 = 1, LE = 3, UE = 8, HE = 11, n3 = /^((HTML|SVG)\w*)?Element$/, a3 = (e) => {
  const t = e.constructor.name, {
    nodeType: r,
    tagName: a
  } = e, n = typeof a == "string" && a.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return r === r3 && (n3.test(t) || n) || r === LE && t === "Text" || r === UE && t === "Comment" || r === HE && t === "DocumentFragment";
};
function o3(e) {
  return e.nodeType === LE;
}
function i3(e) {
  return e.nodeType === UE;
}
function Yf(e) {
  return e.nodeType === HE;
}
function s3(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && a3(t);
    },
    serialize: (t, r, a, n, o, i) => {
      if (o3(t))
        return BE(t.data, r);
      if (i3(t))
        return ZB(t.data, r);
      const s = Yf(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++n > r.maxDepth ? t3(s, r) : e3(s, XB(Yf(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), Yf(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), r, a + r.indent, n, o, i), QB(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, a + r.indent, n, o, i), r, a);
    }
  };
}
let VE = null, Hh = null, Vh = null;
try {
  const e = module && module.require;
  Hh = e.call(module, "fs").readFileSync, Vh = e.call(module, "@babel/code-frame").codeFrameColumns, VE = e.call(module, "chalk");
} catch {
}
function l3(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), a = e.slice(t, r), n = a.split(":"), [o, i, s] = [n[0], parseInt(n[1], 10), parseInt(n[2], 10)];
  let l = "";
  try {
    l = Hh(o, "utf-8");
  } catch {
    return "";
  }
  const u = Vh(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return VE.dim(a) + `
` + u + `
`;
}
function u3() {
  if (!Hh || !Vh)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return l3(t);
}
const zE = 3;
function Xf() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function zh() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function WE(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Jt(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const c3 = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: d3
} = c$, f3 = 1, p3 = 8;
function m3(e) {
  return e.nodeType !== p3 && (e.nodeType !== f3 || !e.matches(We().defaultIgnore));
}
function Dn(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = zh().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let a = typeof e;
  if (a === "object" ? a = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + a);
  const {
    filterNode: n = m3,
    ...o
  } = r, i = gx(e, {
    plugins: [s3(n), d3],
    printFunctionName: !1,
    highlight: c3(),
    ...o
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Nb = function() {
  const e = u3();
  console.log(e ? Dn(...arguments) + `

` + e : Dn(...arguments));
};
let Zr = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, t) {
    const r = Dn(t), a = new Error([e, "Ignored nodes: comments, " + Zr.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return a.name = "TestingLibraryElementError", a;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function h3(e) {
  try {
    return Zr._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    Zr._disableExpensiveErrorDiagnostics = !1;
  }
}
function v3(e) {
  typeof e == "function" && (e = e(Zr)), Zr = {
    ...Zr,
    ...e
  };
}
function We() {
  return Zr;
}
const y3 = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function GE(e) {
  return y3.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === zE ? e.textContent : Array.from(e.childNodes).map((t) => GE(t)).join("");
}
function Rm(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = GE(e) : t = e.value || e.textContent, t;
}
function KE(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!b3(e))
    return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((a) => a.control === e);
}
function b3(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function YE(e, t, r) {
  let {
    selector: a = "*"
  } = r === void 0 ? {} : r;
  const n = t.getAttribute("aria-labelledby"), o = n ? n.split(" ") : [];
  return o.length ? o.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: Rm(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(KE(t)).map((i) => {
    const s = Rm(i), l = "button, input, meter, output, progress, select, textarea", u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(a))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function XE(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function Xn(e, t, r, a) {
  if (typeof e != "string")
    return !1;
  XE(r);
  const n = a(e);
  return typeof r == "string" || typeof r == "number" ? n.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(n, t) : QE(r, n);
}
function Kt(e, t, r, a) {
  if (typeof e != "string")
    return !1;
  XE(r);
  const n = a(e);
  return r instanceof Function ? r(n, t) : r instanceof RegExp ? QE(r, n) : n === String(r);
}
function JE(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (a) => {
    let n = a;
    return n = t ? n.trim() : n, n = r ? n.replace(/\s+/g, " ") : n, n;
  };
}
function sn(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: a
  } = e;
  if (!a)
    return JE({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return a;
}
function QE(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function au(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === zE && !!t.textContent).map((t) => t.textContent).join("");
}
const g3 = w3(jE);
function ZE(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function Wh(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = ZE
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let n = e;
  for (; n; ) {
    if (r(n))
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function Gh(e) {
  for (const {
    match: t,
    roles: r
  } of g3)
    if (t(e))
      return [...r];
  return [];
}
function w3(e) {
  function t(i) {
    let {
      name: s,
      attributes: l
    } = i;
    return "" + s + l.map((u) => {
      let {
        name: c,
        value: d,
        constraints: f = []
      } = u;
      return f.indexOf("undefined") !== -1 ? ":not([" + c + "])" : d ? "[" + c + '="' + d + '"]' : "[" + c + "]";
    }).join("");
  }
  function r(i) {
    let {
      attributes: s = []
    } = i;
    return s.length;
  }
  function a(i, s) {
    let {
      specificity: l
    } = i, {
      specificity: u
    } = s;
    return u - l;
  }
  function n(i) {
    let {
      attributes: s = []
    } = i;
    const l = s.findIndex((c) => c.value && c.name === "type" && c.value === "text");
    l >= 0 && (s = [...s.slice(0, l), ...s.slice(l + 1)]);
    const u = t({
      ...i,
      attributes: s
    });
    return (c) => l >= 0 && c.type !== "text" ? !1 : c.matches(u);
  }
  let o = [];
  for (const [i, s] of e.entries())
    o = [...o, {
      match: n(i),
      roles: Array.from(s),
      specificity: r(i)
    }];
  return o.sort(a);
}
function _3(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function a(n) {
    return [n, ...Array.from(n.children).reduce((o, i) => [...o, ...a(i)], [])];
  }
  return a(e).filter((n) => r === !1 ? Wh(n) === !1 : !0).reduce((n, o) => {
    let i = [];
    return o.hasAttribute("role") ? i = o.getAttribute("role").split(" ").slice(0, 1) : i = Gh(o), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], o]
    } : {
      ...s,
      [l]: [o]
    }, n);
  }, {});
}
function $3(e, t) {
  let {
    hidden: r,
    includeDescription: a
  } = t;
  const n = _3(e, {
    hidden: r
  });
  return Object.entries(n).filter((o) => {
    let [i] = o;
    return i !== "generic";
  }).map((o) => {
    let [i, s] = o;
    const l = "-".repeat(50), u = s.map((c) => {
      const d = 'Name "' + yi(c, {
        computedStyleSupportsPseudoElements: We().computedStyleSupportsPseudoElements
      }) + `":
`, f = Dn(c.cloneNode(!1));
      if (a) {
        const p = 'Description "' + Eh(c, {
          computedStyleSupportsPseudoElements: We().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + d + p + f;
      }
      return "" + d + f;
    }).join(`

`);
    return i + `:

` + u + `

` + l;
  }).join(`
`);
}
function E3(e) {
  return e.tagName === "OPTION" ? e.selected : Qa(e, "aria-selected");
}
function C3(e) {
  return e.getAttribute("aria-busy") === "true";
}
function R3(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Qa(e, "aria-checked");
}
function P3(e) {
  return Qa(e, "aria-pressed");
}
function x3(e) {
  var t, r;
  return (t = (r = Qa(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function S3(e) {
  return Qa(e, "aria-expanded");
}
function Qa(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function O3(e) {
  const t = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || t[e.tagName];
}
function T3(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function A3(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function M3(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function q3(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const kb = JE();
function I3(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function jb(e) {
  return new RegExp(I3(e.toLowerCase()), "i");
}
function ar(e, t, r, a) {
  let {
    variant: n,
    name: o
  } = a, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? r : jb(r)];
  o && (s.name = jb(o)), e === "Role" && Wh(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(s).length > 0 && l.push(s);
  const u = n + "By" + e;
  return {
    queryName: e,
    queryMethod: u,
    queryArgs: l,
    variant: n,
    warning: i,
    toString() {
      i && console.warn(i);
      let [c, d] = l;
      return c = typeof c == "string" ? "'" + c + "'" : c, d = d ? ", { " + Object.entries(d).map((f) => {
        let [p, v] = f;
        return p + ": " + v;
      }).join(", ") + " }" : "", u + "(" + c + d + ")";
    }
  };
}
function or(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function Pm(e, t, r) {
  var a, n;
  if (t === void 0 && (t = "get"), e.matches(We().defaultIgnore))
    return;
  const o = (a = e.getAttribute("role")) != null ? a : (n = Gh(e)) == null ? void 0 : n[0];
  if (o !== "generic" && or("Role", r, o))
    return ar("Role", e, o, {
      variant: t,
      name: yi(e, {
        computedStyleSupportsPseudoElements: We().computedStyleSupportsPseudoElements
      })
    });
  const i = YE(document, e).map((f) => f.content).join(" ");
  if (or("LabelText", r, i))
    return ar("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (or("PlaceholderText", r, s))
    return ar("PlaceholderText", e, s, {
      variant: t
    });
  const l = kb(au(e));
  if (or("Text", r, l))
    return ar("Text", e, l, {
      variant: t
    });
  if (or("DisplayValue", r, e.value))
    return ar("DisplayValue", e, kb(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (or("AltText", r, u))
    return ar("AltText", e, u, {
      variant: t
    });
  const c = e.getAttribute("title");
  if (or("Title", r, c))
    return ar("Title", e, c, {
      variant: t
    });
  const d = e.getAttribute(We().testIdAttribute);
  if (or("TestId", r, d))
    return ar("TestId", e, d, {
      variant: t
    });
}
function ho(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function N3(e, t) {
  let {
    container: r = zh(),
    timeout: a = We().asyncUtilTimeout,
    showOriginalStackTrace: n = We().showOriginalStackTrace,
    stackTraceError: o,
    interval: i = 50,
    onTimeout: s = (u) => (Object.defineProperty(u, "message", {
      value: We().getElementError(u.message, r).message
    }), u),
    mutationObserverOptions: l = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (u, c) => {
    let d, f, p, v = !1, b = "idle";
    const y = setTimeout(T, a), h = Xf();
    if (h) {
      const {
        unstable_advanceTimersWrapper: E
      } = We();
      for (S(); !v; ) {
        if (!Xf()) {
          const M = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          n || ho(M, o), c(M);
          return;
        }
        if (await E(async () => {
          jest.advanceTimersByTime(i);
        }), S(), v)
          break;
      }
    } else {
      try {
        Jt(r);
      } catch (M) {
        c(M);
        return;
      }
      f = setInterval(A, i);
      const {
        MutationObserver: E
      } = WE(r);
      p = new E(A), p.observe(r, l), S();
    }
    function $(E, M) {
      v = !0, clearTimeout(y), h || (clearInterval(f), p.disconnect()), E ? c(E) : u(M);
    }
    function A() {
      if (Xf()) {
        const E = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return n || ho(E, o), c(E);
      } else
        return S();
    }
    function S() {
      if (b !== "pending")
        try {
          const E = h3(e);
          typeof (E == null ? void 0 : E.then) == "function" ? (b = "pending", E.then((M) => {
            b = "resolved", $(null, M);
          }, (M) => {
            b = "rejected", d = M;
          })) : $(null, E);
        } catch (E) {
          d = E;
        }
    }
    function T() {
      let E;
      d ? (E = d, !n && E.name === "TestingLibraryElementError" && ho(E, o)) : (E = new Error("Timed out in waitFor."), n || ho(E, o)), $(s(E), null);
    }
  });
}
function k3(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return We().asyncWrapper(() => N3(e, {
    stackTraceError: r,
    ...t
  }));
}
function eC(e, t) {
  return We().getElementError(e, t);
}
function j3(e, t) {
  return eC(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function ou(e, t, r, a) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  } = a === void 0 ? {} : a;
  const l = n ? Kt : Xn, u = sn({
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((c) => l(c.getAttribute(e), c, r, u));
}
function ai(e, t) {
  return function(r) {
    for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      n[o - 1] = arguments[o];
    const i = e(r, ...n);
    if (i.length > 1) {
      const s = i.map((l) => eC(null, l).message).join(`

`);
      throw j3(t(r, ...n) + `

Here are the matching elements:

` + s, r);
    }
    return i[0] || null;
  };
}
function tC(e, t) {
  return We().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function F3(e, t) {
  return function(r) {
    for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      n[o - 1] = arguments[o];
    const i = e(r, ...n);
    if (!i.length)
      throw We().getElementError(t(r, ...n), r);
    return i;
  };
}
function oi(e) {
  return (t, r, a, n) => k3(() => e(t, r, a), {
    container: t,
    ...n
  });
}
const Mn = (e, t, r) => function(a) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    o[i - 1] = arguments[i];
  const s = e(a, ...o), [{
    suggest: l = We().throwSuggestions
  } = {}] = o.slice(-1);
  if (s && l) {
    const u = Pm(s, r);
    if (u && !t.endsWith(u.queryName))
      throw tC(u.toString(), a);
  }
  return s;
}, Et = (e, t, r) => function(a) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    o[i - 1] = arguments[i];
  const s = e(a, ...o), [{
    suggest: l = We().throwSuggestions
  } = {}] = o.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((c) => {
      var d;
      return (d = Pm(c, r)) == null ? void 0 : d.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        Pm(s[0], r).queryName
      )
    )
      throw tC(u[0], a);
  }
  return s;
};
function ln(e, t, r) {
  const a = Mn(ai(e, t), e.name, "query"), n = F3(e, r), o = ai(n, t), i = Mn(o, e.name, "get"), s = Et(n, e.name.replace("query", "get"), "getAll"), l = oi(Et(n, e.name, "findAll")), u = oi(Mn(o, e.name, "find"));
  return [a, s, i, l, u];
}
function D3(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Rm(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const B3 = function(e, t, r) {
  let {
    exact: a = !0,
    trim: n,
    collapseWhitespace: o,
    normalizer: i
  } = r === void 0 ? {} : r;
  const s = a ? Kt : Xn, l = sn({
    collapseWhitespace: o,
    trim: n,
    normalizer: i
  });
  return D3(e).filter((c) => {
    let {
      node: d,
      textToMatch: f
    } = c;
    return s(f, d, t, l);
  }).map((c) => {
    let {
      node: d
    } = c;
    return d;
  });
}, Fa = function(e, t, r) {
  let {
    selector: a = "*",
    exact: n = !0,
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  } = r === void 0 ? {} : r;
  Jt(e);
  const l = n ? Kt : Xn, u = sn({
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => KE(d).length || d.hasAttribute("aria-labelledby")).reduce((d, f) => {
    const p = YE(e, f, {
      selector: a
    });
    p.filter((b) => !!b.formControl).forEach((b) => {
      l(b.content, b.formControl, t, u) && b.formControl && d.push(b.formControl);
    });
    const v = p.filter((b) => !!b.content).map((b) => b.content);
    return l(v.join(" "), f, t, u) && d.push(f), v.length > 1 && v.forEach((b, y) => {
      l(b, f, t, u) && d.push(f);
      const h = [...v];
      h.splice(y, 1), h.length > 1 && l(h.join(" "), f, t, u) && d.push(f);
    }), d;
  }, []).concat(ou("aria-label", e, t, {
    exact: n,
    normalizer: u
  }));
  return Array.from(new Set(c)).filter((d) => d.matches(a));
}, tn = function(e, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    a[n - 2] = arguments[n];
  const o = Fa(e, t, ...a);
  if (!o.length) {
    const i = B3(e, t, ...a);
    if (i.length) {
      const s = i.map((l) => L3(e, l)).filter((l) => !!l);
      throw s.length ? We().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : We().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw We().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return o;
};
function L3(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const a = e.querySelector('[id="' + r + '"]');
  return a ? a.tagName.toLowerCase() : null;
}
const rC = (e, t) => "Found multiple elements with the text of: " + t, U3 = Mn(ai(Fa, rC), Fa.name, "query"), nC = ai(tn, rC), H3 = oi(Et(tn, tn.name, "findAll")), V3 = oi(Mn(nC, tn.name, "find")), z3 = Et(tn, tn.name, "getAll"), W3 = Mn(nC, tn.name, "get"), G3 = Et(Fa, Fa.name, "queryAll"), xm = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Jt(t[0]), ou("placeholder", ...t);
}, K3 = (e, t) => "Found multiple elements with the placeholder text of: " + t, Y3 = (e, t) => "Unable to find an element with the placeholder text of: " + t, X3 = Et(xm, xm.name, "queryAll"), [J3, Q3, Z3, eL, tL] = ln(xm, K3, Y3), Sm = function(e, t, r) {
  let {
    selector: a = "*",
    exact: n = !0,
    collapseWhitespace: o,
    trim: i,
    ignore: s = We().defaultIgnore,
    normalizer: l
  } = r === void 0 ? {} : r;
  Jt(e);
  const u = n ? Kt : Xn, c = sn({
    collapseWhitespace: o,
    trim: i,
    normalizer: l
  });
  let d = [];
  return typeof e.matches == "function" && e.matches(a) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(a))].filter((f) => !s || !f.matches(s)).filter((f) => u(au(f), f, t, c));
}, rL = (e, t) => "Found multiple elements with the text: " + t, nL = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: a,
    trim: n,
    normalizer: o,
    selector: i
  } = r, l = sn({
    collapseWhitespace: a,
    trim: n,
    normalizer: o
  })(t.toString()), u = l !== t.toString(), c = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (c ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, aL = Et(Sm, Sm.name, "queryAll"), [oL, iL, sL, lL, uL] = ln(Sm, rL, nL), Om = function(e, t, r) {
  let {
    exact: a = !0,
    collapseWhitespace: n,
    trim: o,
    normalizer: i
  } = r === void 0 ? {} : r;
  Jt(e);
  const s = a ? Kt : Xn, l = sn({
    collapseWhitespace: n,
    trim: o,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((d) => d.selected).some((d) => s(au(d), d, t, l)) : s(u.value, u, t, l));
}, cL = (e, t) => "Found multiple elements with the display value: " + t + ".", dL = (e, t) => "Unable to find an element with the display value: " + t + ".", fL = Et(Om, Om.name, "queryAll"), [pL, mL, hL, vL, yL] = ln(Om, cL, dL), bL = /^(img|input|area|.+-.+)$/i, Tm = function(e, t, r) {
  return r === void 0 && (r = {}), Jt(e), ou("alt", e, t, r).filter((a) => bL.test(a.tagName));
}, gL = (e, t) => "Found multiple elements with the alt text: " + t, wL = (e, t) => "Unable to find an element with the alt text: " + t, _L = Et(Tm, Tm.name, "queryAll"), [$L, EL, CL, RL, PL] = ln(Tm, gL, wL), xL = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Am = function(e, t, r) {
  let {
    exact: a = !0,
    collapseWhitespace: n,
    trim: o,
    normalizer: i
  } = r === void 0 ? {} : r;
  Jt(e);
  const s = a ? Kt : Xn, l = sn({
    collapseWhitespace: n,
    trim: o,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || xL(u) && s(au(u), u, t, l));
}, SL = (e, t) => "Found multiple elements with the title: " + t + ".", OL = (e, t) => "Unable to find an element with the title: " + t + ".", TL = Et(Am, Am.name, "queryAll"), [AL, ML, qL, IL, NL] = ln(Am, SL, OL), Mm = function(e, t, r) {
  let {
    hidden: a = We().defaultHidden,
    name: n,
    description: o,
    queryFallbacks: i = !1,
    selected: s,
    busy: l,
    checked: u,
    pressed: c,
    current: d,
    level: f,
    expanded: p,
    value: {
      now: v,
      min: b,
      max: y,
      text: h
    } = {}
  } = r === void 0 ? {} : r;
  if (Jt(e), s !== void 0) {
    var $;
    if ((($ = Ot.get(t)) == null ? void 0 : $.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var A;
    if (((A = Ot.get(t)) == null ? void 0 : A.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var S;
    if (((S = Ot.get(t)) == null ? void 0 : S.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var T;
    if (((T = Ot.get(t)) == null ? void 0 : T.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var E;
    if (((E = Ot.get(t)) == null ? void 0 : E.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (f !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (v !== void 0) {
    var M;
    if (((M = Ot.get(t)) == null ? void 0 : M.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (y !== void 0) {
    var L;
    if (((L = Ot.get(t)) == null ? void 0 : L.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (b !== void 0) {
    var ie;
    if (((ie = Ot.get(t)) == null ? void 0 : ie.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (h !== void 0) {
    var J;
    if (((J = Ot.get(t)) == null ? void 0 : J.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var fe;
    if (((fe = Ot.get(t)) == null ? void 0 : fe.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const de = /* @__PURE__ */ new WeakMap();
  function G(ae) {
    return de.has(ae) || de.set(ae, ZE(ae)), de.get(ae);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    kL(t)
  )).filter((ae) => {
    if (ae.hasAttribute("role")) {
      const $e = ae.getAttribute("role");
      if (i)
        return $e.split(" ").filter(Boolean).some((g) => g === t);
      const [Te] = $e.split(" ");
      return Te === t;
    }
    return Gh(ae).some(($e) => $e === t);
  }).filter((ae) => {
    if (s !== void 0)
      return s === E3(ae);
    if (l !== void 0)
      return l === C3(ae);
    if (u !== void 0)
      return u === R3(ae);
    if (c !== void 0)
      return c === P3(ae);
    if (d !== void 0)
      return d === x3(ae);
    if (p !== void 0)
      return p === S3(ae);
    if (f !== void 0)
      return f === O3(ae);
    if (v !== void 0 || y !== void 0 || b !== void 0 || h !== void 0) {
      let ve = !0;
      if (v !== void 0 && ve && (ve = v === T3(ae)), y !== void 0 && ve && (ve = y === A3(ae)), b !== void 0 && ve && (ve = b === M3(ae)), h !== void 0) {
        var xe;
        ve && (ve = Kt((xe = q3(ae)) != null ? xe : null, ae, h, ($e) => $e));
      }
      return ve;
    }
    return !0;
  }).filter((ae) => n === void 0 ? !0 : Kt(yi(ae, {
    computedStyleSupportsPseudoElements: We().computedStyleSupportsPseudoElements
  }), ae, n, (xe) => xe)).filter((ae) => o === void 0 ? !0 : Kt(Eh(ae, {
    computedStyleSupportsPseudoElements: We().computedStyleSupportsPseudoElements
  }), ae, o, (xe) => xe)).filter((ae) => a === !1 ? Wh(ae, {
    isSubtreeInaccessible: G
  }) === !1 : !0);
};
function kL(e) {
  var t;
  const r = '*[role~="' + e + '"]', a = (t = FE.get(e)) != null ? t : /* @__PURE__ */ new Set(), n = new Set(Array.from(a).map((o) => {
    let {
      name: i
    } = o;
    return i;
  }));
  return [r].concat(Array.from(n)).join(",");
}
const aC = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, jL = function(e, t, r) {
  let {
    name: a
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + aC(a);
}, FL = function(e, t, r) {
  let {
    hidden: a = We().defaultHidden,
    name: n,
    description: o
  } = r === void 0 ? {} : r;
  if (We()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + aC(n);
  let i = "";
  Array.from(e.children).forEach((c) => {
    i += $3(c, {
      hidden: a,
      includeDescription: o !== void 0
    });
  });
  let s;
  i.length === 0 ? a === !1 ? s = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : s = "There are no available roles." : s = (`
Here are the ` + (a === !1 ? "accessible" : "available") + ` roles:

  ` + i.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let l = "";
  n === void 0 ? l = "" : typeof n == "string" ? l = ' and name "' + n + '"' : l = " and name `" + n + "`";
  let u = "";
  return o === void 0 ? u = "" : typeof o == "string" ? u = ' and description "' + o + '"' : u = " and description `" + o + "`", (`
Unable to find an ` + (a === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + l + u + `

` + s).trim();
}, DL = Et(Mm, Mm.name, "queryAll"), [BL, LL, UL, HL, VL] = ln(Mm, jL, FL), Kh = () => We().testIdAttribute, qm = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Jt(t[0]), ou(Kh(), ...t);
}, zL = (e, t) => "Found multiple elements by: [" + Kh() + '="' + t + '"]', WL = (e, t) => "Unable to find an element by: [" + Kh() + '="' + t + '"]', GL = Et(qm, qm.name, "queryAll"), [KL, YL, XL, JL, QL] = ln(qm, zL, WL);
var Im = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: G3,
  queryByLabelText: U3,
  getAllByLabelText: z3,
  getByLabelText: W3,
  findAllByLabelText: H3,
  findByLabelText: V3,
  queryByPlaceholderText: J3,
  queryAllByPlaceholderText: X3,
  getByPlaceholderText: Z3,
  getAllByPlaceholderText: Q3,
  findAllByPlaceholderText: eL,
  findByPlaceholderText: tL,
  queryByText: oL,
  queryAllByText: aL,
  getByText: sL,
  getAllByText: iL,
  findAllByText: lL,
  findByText: uL,
  queryByDisplayValue: pL,
  queryAllByDisplayValue: fL,
  getByDisplayValue: hL,
  getAllByDisplayValue: mL,
  findAllByDisplayValue: vL,
  findByDisplayValue: yL,
  queryByAltText: $L,
  queryAllByAltText: _L,
  getByAltText: CL,
  getAllByAltText: EL,
  findAllByAltText: RL,
  findByAltText: PL,
  queryByTitle: AL,
  queryAllByTitle: TL,
  getByTitle: qL,
  getAllByTitle: ML,
  findAllByTitle: IL,
  findByTitle: NL,
  queryByRole: BL,
  queryAllByRole: DL,
  getAllByRole: LL,
  getByRole: UL,
  findAllByRole: HL,
  findByRole: VL,
  queryByTestId: KL,
  queryAllByTestId: GL,
  getByTestId: XL,
  getAllByTestId: YL,
  findAllByTestId: JL,
  findByTestId: QL
});
function oC(e, t, r) {
  return t === void 0 && (t = Im), r === void 0 && (r = {}), Object.keys(t).reduce((a, n) => {
    const o = t[n];
    return a[n] = o.bind(null, e), a;
  }, r);
}
const Fb = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  }
}, Db = {
  doubleClick: "dblClick"
};
function Da(e, t) {
  return We().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Jf(e, t, r, a) {
  let {
    EventType: n = "Event",
    defaultInit: o = {}
  } = a === void 0 ? {} : a;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const i = {
    ...o,
    ...r
  }, {
    target: {
      value: s,
      files: l,
      ...u
    } = {}
  } = i;
  s !== void 0 && ZL(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = WE(t), d = c[n] || c.Event;
  let f;
  if (typeof d == "function")
    f = new d(e, i);
  else {
    f = c.document.createEvent(n);
    const {
      bubbles: v,
      cancelable: b,
      detail: y,
      ...h
    } = i;
    f.initEvent(e, v, b, y), Object.keys(h).forEach(($) => {
      f[$] = h[$];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((v) => {
    const b = i[v];
    typeof b == "object" && (typeof c.DataTransfer == "function" ? Object.defineProperty(f, v, {
      value: Object.getOwnPropertyNames(b).reduce((y, h) => (Object.defineProperty(y, h, {
        value: b[h]
      }), y), new c.DataTransfer())
    }) : Object.defineProperty(f, v, {
      value: b
    }));
  }), f;
}
Object.keys(Fb).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Fb[e], a = e.toLowerCase();
  Jf[e] = (n, o) => Jf(a, n, o, {
    EventType: t,
    defaultInit: r
  }), Da[e] = (n, o) => Da(n, Jf[e](n, o));
});
function ZL(e, t) {
  const {
    set: r
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, a = Object.getPrototypeOf(e), {
    set: n
  } = Object.getOwnPropertyDescriptor(a, "value") || {};
  if (n && r !== n)
    n.call(e, t);
  else if (r)
    r.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Db).forEach((e) => {
  const t = Db[e];
  Da[e] = function() {
    return Da[t](...arguments);
  };
});
function e5(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function t5(e) {
  return YB.compressToEncodedURIComponent(e5(e));
}
function r5(e) {
  return "https://testing-playground.com/#markup=" + t5(e);
}
const n5 = (e, t, r) => Array.isArray(e) ? e.forEach((a) => Nb(a, t, r)) : Nb(e, t, r), a5 = function(e) {
  if (e === void 0 && (e = zh().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = r5(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Bb = {
  debug: n5,
  logTestingPlaygroundURL: a5
}, o5 = typeof document < "u" && document.body ? oC(document.body, Im, Bb) : Object.keys(Im).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Bb), i5 = m0.act;
function iC() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
function Wt(e) {
  iC().IS_REACT_ACT_ENVIRONMENT = e;
}
function ii() {
  return iC().IS_REACT_ACT_ENVIRONMENT;
}
function s5(e) {
  return (t) => {
    const r = ii();
    Wt(!0);
    try {
      let a = !1;
      const n = e(() => {
        const o = t();
        return o !== null && typeof o == "object" && typeof o.then == "function" && (a = !0), o;
      });
      if (a) {
        const o = n;
        return {
          then: (i, s) => {
            o.then((l) => {
              Wt(r), i(l);
            }, (l) => {
              Wt(r), s(l);
            });
          }
        };
      } else
        return Wt(r), n;
    } catch (a) {
      throw Wt(r), a;
    }
  };
}
const Bn = s5(i5);
Object.keys(Da).forEach((e) => {
});
function l5() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
v3({
  unstable_advanceTimersWrapper: (e) => Bn(e),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (e) => {
    const t = ii();
    Wt(!1);
    try {
      const r = await e();
      return await new Promise((a) => {
        setTimeout(() => {
          a();
        }, 0), l5() && jest.advanceTimersByTime(0);
      }), r;
    } finally {
      Wt(t);
    }
  },
  eventWrapper: (e) => {
    let t;
    return Bn(() => {
      t = e();
    }), t;
  }
});
const Nm = /* @__PURE__ */ new Set(), si = [];
function u5(e, t) {
  let {
    hydrate: r,
    ui: a,
    wrapper: n
  } = t, o;
  return r ? Bn(() => {
    o = Yp(e, n ? /* @__PURE__ */ j_.createElement(n, null, a) : a);
  }) : o = Xp(e), {
    hydrate() {
      if (!r)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(i) {
      o.render(i);
    },
    unmount() {
      o.unmount();
    }
  };
}
function c5(e) {
  return {
    hydrate(t) {
      Tn.hydrate(t, e);
    },
    render(t) {
      Tn.render(t, e);
    },
    unmount() {
      Tn.unmountComponentAtNode(e);
    }
  };
}
function sC(e, t) {
  let {
    baseElement: r,
    container: a,
    hydrate: n,
    queries: o,
    root: i,
    wrapper: s
  } = t;
  const l = (u) => s ? /* @__PURE__ */ j_.createElement(s, null, u) : u;
  return Bn(() => {
    n ? i.hydrate(l(e), a) : i.render(l(e), a);
  }), {
    container: a,
    baseElement: r,
    debug: function(u, c, d) {
      return u === void 0 && (u = r), Array.isArray(u) ? (
        // eslint-disable-next-line no-console
        u.forEach((f) => console.log(Dn(f, c, d)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(Dn(u, c, d))
      );
    },
    unmount: () => {
      Bn(() => {
        i.unmount();
      });
    },
    rerender: (u) => {
      sC(l(u), {
        container: a,
        baseElement: r,
        root: i
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(a.innerHTML);
      {
        const u = document.createElement("template");
        return u.innerHTML = a.innerHTML, u.content;
      }
    },
    ...oC(r, o)
  };
}
function d5(e, t) {
  let {
    container: r,
    baseElement: a = r,
    legacyRoot: n = !1,
    queries: o,
    hydrate: i = !1,
    wrapper: s
  } = t === void 0 ? {} : t;
  a || (a = document.body), r || (r = a.appendChild(document.createElement("div")));
  let l;
  return Nm.has(r) ? si.forEach((u) => {
    u.container === r && (l = u.root);
  }) : (l = (n ? c5 : u5)(r, {
    hydrate: i,
    ui: e,
    wrapper: s
  }), si.push({
    container: r,
    root: l
  }), Nm.add(r)), sC(e, {
    container: r,
    baseElement: a,
    queries: o,
    hydrate: i,
    wrapper: s,
    root: l
  });
}
function Lb() {
  si.forEach((e) => {
    let {
      root: t,
      container: r
    } = e;
    Bn(() => {
      t.unmount();
    }), r.parentNode === document.body && document.body.removeChild(r);
  }), si.length = 0, Nm.clear();
}
var k_;
if ((typeof process > "u" || !((k_ = process.env) != null && k_.RTL_SKIP_AUTO_CLEANUP)) && (typeof afterEach == "function" ? afterEach(() => {
  Lb();
}) : typeof teardown == "function" && teardown(() => {
  Lb();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let e = ii();
  beforeAll(() => {
    e = ii(), Wt(!0);
  }), afterAll(() => {
    Wt(e);
  });
}
var f5 = (e) => {
  const t = e.match(/^[ \t]*(?=\S)/gm);
  return t ? t.reduce((r, a) => Math.min(r, a.length), 1 / 0) : 0;
};
const p5 = f5;
var m5 = (e) => {
  const t = p5(e);
  if (t === 0)
    return e;
  const r = new RegExp(`^[ \\t]{${t}}`, "gm");
  return e.replace(r, "");
}, h5 = (e, t = 1, r) => {
  if (r = {
    indent: " ",
    includeEmptyLines: !1,
    ...r
  }, typeof e != "string")
    throw new TypeError(
      `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
    );
  if (typeof t != "number")
    throw new TypeError(
      `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
    );
  if (typeof r.indent != "string")
    throw new TypeError(
      `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``
    );
  if (t === 0)
    return e;
  const a = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
  return e.replace(a, r.indent.repeat(t));
};
const v5 = m5, y5 = h5;
var b5 = (e, t = 0, r) => y5(v5(e), t, r);
const Ub = /* @__PURE__ */ Lr(b5);
function g5() {
  this.__data__ = [], this.size = 0;
}
var w5 = g5;
function _5(e, t) {
  return e === t || e !== e && t !== t;
}
var lC = _5, $5 = lC;
function E5(e, t) {
  for (var r = e.length; r--; )
    if ($5(e[r][0], t))
      return r;
  return -1;
}
var iu = E5, C5 = iu, R5 = Array.prototype, P5 = R5.splice;
function x5(e) {
  var t = this.__data__, r = C5(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : P5.call(t, r, 1), --this.size, !0;
}
var S5 = x5, O5 = iu;
function T5(e) {
  var t = this.__data__, r = O5(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var A5 = T5, M5 = iu;
function q5(e) {
  return M5(this.__data__, e) > -1;
}
var I5 = q5, N5 = iu;
function k5(e, t) {
  var r = this.__data__, a = N5(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var j5 = k5, F5 = w5, D5 = S5, B5 = A5, L5 = I5, U5 = j5;
function Jn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Jn.prototype.clear = F5;
Jn.prototype.delete = D5;
Jn.prototype.get = B5;
Jn.prototype.has = L5;
Jn.prototype.set = U5;
var su = Jn, H5 = su;
function V5() {
  this.__data__ = new H5(), this.size = 0;
}
var z5 = V5;
function W5(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var G5 = W5;
function K5(e) {
  return this.__data__.get(e);
}
var Y5 = K5;
function X5(e) {
  return this.__data__.has(e);
}
var J5 = X5, Q5 = typeof yt == "object" && yt && yt.Object === Object && yt, uC = Q5, Z5 = uC, eU = typeof self == "object" && self && self.Object === Object && self, tU = Z5 || eU || Function("return this")(), Qt = tU, rU = Qt, nU = rU.Symbol, Yh = nU, Hb = Yh, cC = Object.prototype, aU = cC.hasOwnProperty, oU = cC.toString, ha = Hb ? Hb.toStringTag : void 0;
function iU(e) {
  var t = aU.call(e, ha), r = e[ha];
  try {
    e[ha] = void 0;
    var a = !0;
  } catch {
  }
  var n = oU.call(e);
  return a && (t ? e[ha] = r : delete e[ha]), n;
}
var sU = iU, lU = Object.prototype, uU = lU.toString;
function cU(e) {
  return uU.call(e);
}
var dU = cU, Vb = Yh, fU = sU, pU = dU, mU = "[object Null]", hU = "[object Undefined]", zb = Vb ? Vb.toStringTag : void 0;
function vU(e) {
  return e == null ? e === void 0 ? hU : mU : zb && zb in Object(e) ? fU(e) : pU(e);
}
var lu = vU;
function yU(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var dC = yU, bU = lu, gU = dC, wU = "[object AsyncFunction]", _U = "[object Function]", $U = "[object GeneratorFunction]", EU = "[object Proxy]";
function CU(e) {
  if (!gU(e))
    return !1;
  var t = bU(e);
  return t == _U || t == $U || t == wU || t == EU;
}
var fC = CU, RU = Qt, PU = RU["__core-js_shared__"], xU = PU, Qf = xU, Wb = function() {
  var e = /[^.]+$/.exec(Qf && Qf.keys && Qf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function SU(e) {
  return !!Wb && Wb in e;
}
var OU = SU, TU = Function.prototype, AU = TU.toString;
function MU(e) {
  if (e != null) {
    try {
      return AU.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pC = MU, qU = fC, IU = OU, NU = dC, kU = pC, jU = /[\\^$.*+?()[\]{}|]/g, FU = /^\[object .+?Constructor\]$/, DU = Function.prototype, BU = Object.prototype, LU = DU.toString, UU = BU.hasOwnProperty, HU = RegExp(
  "^" + LU.call(UU).replace(jU, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function VU(e) {
  if (!NU(e) || IU(e))
    return !1;
  var t = qU(e) ? HU : FU;
  return t.test(kU(e));
}
var zU = VU;
function WU(e, t) {
  return e == null ? void 0 : e[t];
}
var GU = WU, KU = zU, YU = GU;
function XU(e, t) {
  var r = YU(e, t);
  return KU(r) ? r : void 0;
}
var Qn = XU, JU = Qn, QU = Qt, ZU = JU(QU, "Map"), Xh = ZU, e4 = Qn, t4 = e4(Object, "create"), uu = t4, Gb = uu;
function r4() {
  this.__data__ = Gb ? Gb(null) : {}, this.size = 0;
}
var n4 = r4;
function a4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var o4 = a4, i4 = uu, s4 = "__lodash_hash_undefined__", l4 = Object.prototype, u4 = l4.hasOwnProperty;
function c4(e) {
  var t = this.__data__;
  if (i4) {
    var r = t[e];
    return r === s4 ? void 0 : r;
  }
  return u4.call(t, e) ? t[e] : void 0;
}
var d4 = c4, f4 = uu, p4 = Object.prototype, m4 = p4.hasOwnProperty;
function h4(e) {
  var t = this.__data__;
  return f4 ? t[e] !== void 0 : m4.call(t, e);
}
var v4 = h4, y4 = uu, b4 = "__lodash_hash_undefined__";
function g4(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = y4 && t === void 0 ? b4 : t, this;
}
var w4 = g4, _4 = n4, $4 = o4, E4 = d4, C4 = v4, R4 = w4;
function Zn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Zn.prototype.clear = _4;
Zn.prototype.delete = $4;
Zn.prototype.get = E4;
Zn.prototype.has = C4;
Zn.prototype.set = R4;
var P4 = Zn, Kb = P4, x4 = su, S4 = Xh;
function O4() {
  this.size = 0, this.__data__ = {
    hash: new Kb(),
    map: new (S4 || x4)(),
    string: new Kb()
  };
}
var T4 = O4;
function A4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var M4 = A4, q4 = M4;
function I4(e, t) {
  var r = e.__data__;
  return q4(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var cu = I4, N4 = cu;
function k4(e) {
  var t = N4(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var j4 = k4, F4 = cu;
function D4(e) {
  return F4(this, e).get(e);
}
var B4 = D4, L4 = cu;
function U4(e) {
  return L4(this, e).has(e);
}
var H4 = U4, V4 = cu;
function z4(e, t) {
  var r = V4(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var W4 = z4, G4 = T4, K4 = j4, Y4 = B4, X4 = H4, J4 = W4;
function ea(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ea.prototype.clear = G4;
ea.prototype.delete = K4;
ea.prototype.get = Y4;
ea.prototype.has = X4;
ea.prototype.set = J4;
var mC = ea, Q4 = su, Z4 = Xh, eH = mC, tH = 200;
function rH(e, t) {
  var r = this.__data__;
  if (r instanceof Q4) {
    var a = r.__data__;
    if (!Z4 || a.length < tH - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new eH(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var nH = rH, aH = su, oH = z5, iH = G5, sH = Y5, lH = J5, uH = nH;
function ta(e) {
  var t = this.__data__ = new aH(e);
  this.size = t.size;
}
ta.prototype.clear = oH;
ta.prototype.delete = iH;
ta.prototype.get = sH;
ta.prototype.has = lH;
ta.prototype.set = uH;
var cH = ta, dH = "__lodash_hash_undefined__";
function fH(e) {
  return this.__data__.set(e, dH), this;
}
var pH = fH;
function mH(e) {
  return this.__data__.has(e);
}
var hH = mH, vH = mC, yH = pH, bH = hH;
function li(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new vH(); ++t < r; )
    this.add(e[t]);
}
li.prototype.add = li.prototype.push = yH;
li.prototype.has = bH;
var hC = li;
function gH(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var wH = gH;
function _H(e, t) {
  return e.has(t);
}
var vC = _H, $H = hC, EH = wH, CH = vC, RH = 1, PH = 2;
function xH(e, t, r, a, n, o) {
  var i = r & RH, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, f = !0, p = r & PH ? new $H() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < s; ) {
    var v = e[d], b = t[d];
    if (a)
      var y = i ? a(b, v, d, t, e, o) : a(v, b, d, e, t, o);
    if (y !== void 0) {
      if (y)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!EH(t, function(h, $) {
        if (!CH(p, $) && (v === h || n(v, h, r, a, o)))
          return p.push($);
      })) {
        f = !1;
        break;
      }
    } else if (!(v === b || n(v, b, r, a, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), f;
}
var yC = xH, SH = Qt, OH = SH.Uint8Array, TH = OH;
function AH(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, n) {
    r[++t] = [n, a];
  }), r;
}
var MH = AH;
function qH(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var Jh = qH, Yb = Yh, Xb = TH, IH = lC, NH = yC, kH = MH, jH = Jh, FH = 1, DH = 2, BH = "[object Boolean]", LH = "[object Date]", UH = "[object Error]", HH = "[object Map]", VH = "[object Number]", zH = "[object RegExp]", WH = "[object Set]", GH = "[object String]", KH = "[object Symbol]", YH = "[object ArrayBuffer]", XH = "[object DataView]", Jb = Yb ? Yb.prototype : void 0, Zf = Jb ? Jb.valueOf : void 0;
function JH(e, t, r, a, n, o, i) {
  switch (r) {
    case XH:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case YH:
      return !(e.byteLength != t.byteLength || !o(new Xb(e), new Xb(t)));
    case BH:
    case LH:
    case VH:
      return IH(+e, +t);
    case UH:
      return e.name == t.name && e.message == t.message;
    case zH:
    case GH:
      return e == t + "";
    case HH:
      var s = kH;
    case WH:
      var l = a & FH;
      if (s || (s = jH), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      a |= DH, i.set(e, t);
      var c = NH(s(e), s(t), a, n, o, i);
      return i.delete(e), c;
    case KH:
      if (Zf)
        return Zf.call(e) == Zf.call(t);
  }
  return !1;
}
var QH = JH;
function ZH(e, t) {
  for (var r = -1, a = t.length, n = e.length; ++r < a; )
    e[n + r] = t[r];
  return e;
}
var e6 = ZH, t6 = Array.isArray, Qh = t6, r6 = e6, n6 = Qh;
function a6(e, t, r) {
  var a = t(e);
  return n6(e) ? a : r6(a, r(e));
}
var o6 = a6;
function i6(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, n = 0, o = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (o[n++] = i);
  }
  return o;
}
var s6 = i6;
function l6() {
  return [];
}
var u6 = l6, c6 = s6, d6 = u6, f6 = Object.prototype, p6 = f6.propertyIsEnumerable, Qb = Object.getOwnPropertySymbols, m6 = Qb ? function(e) {
  return e == null ? [] : (e = Object(e), c6(Qb(e), function(t) {
    return p6.call(e, t);
  }));
} : d6, h6 = m6;
function v6(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var y6 = v6;
function b6(e) {
  return e != null && typeof e == "object";
}
var du = b6, g6 = lu, w6 = du, _6 = "[object Arguments]";
function $6(e) {
  return w6(e) && g6(e) == _6;
}
var E6 = $6, Zb = E6, C6 = du, bC = Object.prototype, R6 = bC.hasOwnProperty, P6 = bC.propertyIsEnumerable, x6 = Zb(/* @__PURE__ */ function() {
  return arguments;
}()) ? Zb : function(e) {
  return C6(e) && R6.call(e, "callee") && !P6.call(e, "callee");
}, S6 = x6, ui = { exports: {} };
function O6() {
  return !1;
}
var T6 = O6;
ui.exports;
(function(e, t) {
  var r = Qt, a = T6, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, i = o && o.exports === n, s = i ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || a;
  e.exports = u;
})(ui, ui.exports);
var gC = ui.exports, A6 = 9007199254740991, M6 = /^(?:0|[1-9]\d*)$/;
function q6(e, t) {
  var r = typeof e;
  return t = t ?? A6, !!t && (r == "number" || r != "symbol" && M6.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var I6 = q6, N6 = 9007199254740991;
function k6(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= N6;
}
var wC = k6, j6 = lu, F6 = wC, D6 = du, B6 = "[object Arguments]", L6 = "[object Array]", U6 = "[object Boolean]", H6 = "[object Date]", V6 = "[object Error]", z6 = "[object Function]", W6 = "[object Map]", G6 = "[object Number]", K6 = "[object Object]", Y6 = "[object RegExp]", X6 = "[object Set]", J6 = "[object String]", Q6 = "[object WeakMap]", Z6 = "[object ArrayBuffer]", e9 = "[object DataView]", t9 = "[object Float32Array]", r9 = "[object Float64Array]", n9 = "[object Int8Array]", a9 = "[object Int16Array]", o9 = "[object Int32Array]", i9 = "[object Uint8Array]", s9 = "[object Uint8ClampedArray]", l9 = "[object Uint16Array]", u9 = "[object Uint32Array]", Ye = {};
Ye[t9] = Ye[r9] = Ye[n9] = Ye[a9] = Ye[o9] = Ye[i9] = Ye[s9] = Ye[l9] = Ye[u9] = !0;
Ye[B6] = Ye[L6] = Ye[Z6] = Ye[U6] = Ye[e9] = Ye[H6] = Ye[V6] = Ye[z6] = Ye[W6] = Ye[G6] = Ye[K6] = Ye[Y6] = Ye[X6] = Ye[J6] = Ye[Q6] = !1;
function c9(e) {
  return D6(e) && F6(e.length) && !!Ye[j6(e)];
}
var d9 = c9;
function f9(e) {
  return function(t) {
    return e(t);
  };
}
var p9 = f9, ci = { exports: {} };
ci.exports;
(function(e, t) {
  var r = uC, a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, o = n && n.exports === a, i = o && r.process, s = function() {
    try {
      var l = n && n.require && n.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(ci, ci.exports);
var m9 = ci.exports, h9 = d9, v9 = p9, eg = m9, tg = eg && eg.isTypedArray, y9 = tg ? v9(tg) : h9, _C = y9, b9 = y6, g9 = S6, w9 = Qh, _9 = gC, $9 = I6, E9 = _C, C9 = Object.prototype, R9 = C9.hasOwnProperty;
function P9(e, t) {
  var r = w9(e), a = !r && g9(e), n = !r && !a && _9(e), o = !r && !a && !n && E9(e), i = r || a || n || o, s = i ? b9(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || R9.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    $9(u, l))) && s.push(u);
  return s;
}
var x9 = P9, S9 = Object.prototype;
function O9(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || S9;
  return e === r;
}
var T9 = O9;
function A9(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var M9 = A9, q9 = M9, I9 = q9(Object.keys, Object), N9 = I9, k9 = T9, j9 = N9, F9 = Object.prototype, D9 = F9.hasOwnProperty;
function B9(e) {
  if (!k9(e))
    return j9(e);
  var t = [];
  for (var r in Object(e))
    D9.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var L9 = B9, U9 = fC, H9 = wC;
function V9(e) {
  return e != null && H9(e.length) && !U9(e);
}
var z9 = V9, W9 = x9, G9 = L9, K9 = z9;
function Y9(e) {
  return K9(e) ? W9(e) : G9(e);
}
var X9 = Y9, J9 = o6, Q9 = h6, Z9 = X9;
function eV(e) {
  return J9(e, Z9, Q9);
}
var tV = eV, rg = tV, rV = 1, nV = Object.prototype, aV = nV.hasOwnProperty;
function oV(e, t, r, a, n, o) {
  var i = r & rV, s = rg(e), l = s.length, u = rg(t), c = u.length;
  if (l != c && !i)
    return !1;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(i ? f in t : aV.call(t, f)))
      return !1;
  }
  var p = o.get(e), v = o.get(t);
  if (p && v)
    return p == t && v == e;
  var b = !0;
  o.set(e, t), o.set(t, e);
  for (var y = i; ++d < l; ) {
    f = s[d];
    var h = e[f], $ = t[f];
    if (a)
      var A = i ? a($, h, f, t, e, o) : a(h, $, f, e, t, o);
    if (!(A === void 0 ? h === $ || n(h, $, r, a, o) : A)) {
      b = !1;
      break;
    }
    y || (y = f == "constructor");
  }
  if (b && !y) {
    var S = e.constructor, T = t.constructor;
    S != T && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof T == "function" && T instanceof T) && (b = !1);
  }
  return o.delete(e), o.delete(t), b;
}
var iV = oV, sV = Qn, lV = Qt, uV = sV(lV, "DataView"), cV = uV, dV = Qn, fV = Qt, pV = dV(fV, "Promise"), mV = pV, hV = Qn, vV = Qt, yV = hV(vV, "Set"), $C = yV, bV = Qn, gV = Qt, wV = bV(gV, "WeakMap"), _V = wV, km = cV, jm = Xh, Fm = mV, Dm = $C, Bm = _V, EC = lu, ra = pC, ng = "[object Map]", $V = "[object Object]", ag = "[object Promise]", og = "[object Set]", ig = "[object WeakMap]", sg = "[object DataView]", EV = ra(km), CV = ra(jm), RV = ra(Fm), PV = ra(Dm), xV = ra(Bm), Gr = EC;
(km && Gr(new km(new ArrayBuffer(1))) != sg || jm && Gr(new jm()) != ng || Fm && Gr(Fm.resolve()) != ag || Dm && Gr(new Dm()) != og || Bm && Gr(new Bm()) != ig) && (Gr = function(e) {
  var t = EC(e), r = t == $V ? e.constructor : void 0, a = r ? ra(r) : "";
  if (a)
    switch (a) {
      case EV:
        return sg;
      case CV:
        return ng;
      case RV:
        return ag;
      case PV:
        return og;
      case xV:
        return ig;
    }
  return t;
});
var SV = Gr, ep = cH, OV = yC, TV = QH, AV = iV, lg = SV, ug = Qh, cg = gC, MV = _C, qV = 1, dg = "[object Arguments]", fg = "[object Array]", vo = "[object Object]", IV = Object.prototype, pg = IV.hasOwnProperty;
function NV(e, t, r, a, n, o) {
  var i = ug(e), s = ug(t), l = i ? fg : lg(e), u = s ? fg : lg(t);
  l = l == dg ? vo : l, u = u == dg ? vo : u;
  var c = l == vo, d = u == vo, f = l == u;
  if (f && cg(e)) {
    if (!cg(t))
      return !1;
    i = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new ep()), i || MV(e) ? OV(e, t, r, a, n, o) : TV(e, t, l, r, a, n, o);
  if (!(r & qV)) {
    var p = c && pg.call(e, "__wrapped__"), v = d && pg.call(t, "__wrapped__");
    if (p || v) {
      var b = p ? e.value() : e, y = v ? t.value() : t;
      return o || (o = new ep()), n(b, y, r, a, o);
    }
  }
  return f ? (o || (o = new ep()), AV(e, t, r, a, n, o)) : !1;
}
var kV = NV, jV = kV, mg = du;
function CC(e, t, r, a, n) {
  return e === t ? !0 : e == null || t == null || !mg(e) && !mg(t) ? e !== e && t !== t : jV(e, t, r, a, CC, n);
}
var RC = CC, FV = RC;
function DV(e, t) {
  return FV(e, t);
}
var BV = DV;
const LV = /* @__PURE__ */ Lr(BV);
function PC(e) {
  Object.defineProperty(e, "__esModule", { value: !0, configurable: !0 });
}
function Zh(e, t, r, a) {
  Object.defineProperty(e, t, { get: r, set: a, enumerable: !0, configurable: !0 });
}
var xC = {};
PC(xC);
Zh(xC, "default", () => SC);
class SC extends Error {
  constructor(t, r, a, n, o) {
    super(t + ":" + a + ":" + n + ": " + r), this.reason = r, this.filename = t, this.line = a, this.column = n, this.source = o;
  }
}
var OC = {};
PC(OC);
Zh(OC, "default", () => TC);
class TC {
  constructor(t, r, a) {
    this.start = t, this.end = r, this.source = a;
  }
}
var UV = {};
Zh(UV, "CssTypes", () => nt);
var nt;
(function(e) {
  e.stylesheet = "stylesheet", e.rule = "rule", e.declaration = "declaration", e.comment = "comment", e.container = "container", e.charset = "charset", e.document = "document", e.customMedia = "custom-media", e.fontFace = "font-face", e.host = "host", e.import = "import", e.keyframes = "keyframes", e.keyframe = "keyframe", e.layer = "layer", e.media = "media", e.namespace = "namespace", e.page = "page", e.supports = "supports";
})(nt || (nt = {}));
const tp = /\/\*[^]*?(?:\*\/|$)/g, HV = (e, t) => {
  t = t || {};
  let r = 1, a = 1;
  function n(R) {
    const x = R.match(/\n/g);
    x && (r += x.length);
    const j = R.lastIndexOf(`
`);
    a = ~j ? R.length - j : a + R.length;
  }
  function o() {
    const R = {
      line: r,
      column: a
    };
    return function(x) {
      return x.position = new TC(R, {
        line: r,
        column: a
      }, (t == null ? void 0 : t.source) || ""), p(), x;
    };
  }
  const i = [];
  function s(R) {
    const x = new SC((t == null ? void 0 : t.source) || "", R, r, a, e);
    if (t != null && t.silent)
      i.push(x);
    else
      throw x;
  }
  function l() {
    const R = d();
    return {
      type: nt.stylesheet,
      stylesheet: {
        source: t == null ? void 0 : t.source,
        rules: R,
        parsingErrors: i
      }
    };
  }
  function u() {
    return f(/^{\s*/);
  }
  function c() {
    return f(/^}/);
  }
  function d() {
    let R;
    const x = [];
    for (p(), v(x); e.length && e.charAt(0) !== "}" && (R = g() || q()); )
      R && (x.push(R), v(x));
    return x;
  }
  function f(R) {
    const x = R.exec(e);
    if (!x)
      return;
    const j = x[0];
    return n(j), e = e.slice(j.length), x;
  }
  function p() {
    f(/^\s*/);
  }
  function v(R) {
    let x;
    for (R = R || []; x = b(); )
      x && R.push(x);
    return R;
  }
  function b() {
    const R = o();
    if (e.charAt(0) !== "/" || e.charAt(1) !== "*")
      return;
    const x = f(/^\/\*[^]*?\*\//);
    return x ? R({
      type: nt.comment,
      comment: x[0].slice(2, -2)
    }) : s("End of comment missing");
  }
  function y(R, x, j) {
    let H = x + 1, F = !1, k = R.indexOf(")", H);
    for (; !F && k !== -1; ) {
      const Q = R.indexOf("(", H);
      Q !== -1 && Q < k ? (H = y(R, Q + 1) + 1, k = R.indexOf(")", H)) : F = !0;
    }
    return F && k !== -1 ? k : -1;
  }
  function h() {
    const R = f(/^([^{]+)/);
    if (!R)
      return;
    let x = wt(R[0]).replace(tp, "");
    if (x.indexOf(",") === -1)
      return [
        x
      ];
    let j = 0, H = x.indexOf("(", j);
    for (; H !== -1; ) {
      const F = y(x, H);
      if (F === -1)
        break;
      j = F + 1, x = x.substring(0, H) + x.substring(H, F).replace(/,/g, "‌") + x.substring(F), H = x.indexOf("(", j);
    }
    return x = x.replace(/("|')(?:\\\1|.)*?\1/g, (F) => F.replace(/,/g, "‌")), x.split(",").map((F) => wt(F.replace(/\u200C/g, ",")));
  }
  function $() {
    const R = o(), x = f(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!x)
      return;
    const j = wt(x[0]);
    if (!f(/^:\s*/))
      return s("property missing ':'");
    const H = f(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/), F = R({
      type: nt.declaration,
      property: j.replace(tp, ""),
      value: H ? wt(H[0]).replace(tp, "") : ""
    });
    return f(/^[;\s]*/), F;
  }
  function A() {
    const R = [];
    if (!u())
      return s("missing '{'");
    v(R);
    let x;
    for (; x = $(); )
      x && (R.push(x), v(R));
    return c() ? R : s("missing '}'");
  }
  function S() {
    let R;
    const x = [], j = o();
    for (; R = f(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
      x.push(R[1]), f(/^,\s*/);
    if (x.length)
      return j({
        type: nt.keyframe,
        values: x,
        declarations: A() || []
      });
  }
  function T() {
    const R = o(), x = f(/^@([-\w]+)?keyframes\s*/);
    if (!x)
      return;
    const j = x[1], H = f(/^([-\w]+)\s*/);
    if (!H)
      return s("@keyframes missing name");
    const F = H[1];
    if (!u())
      return s("@keyframes missing '{'");
    let k, Q = v();
    for (; k = S(); )
      Q.push(k), Q = Q.concat(v());
    return c() ? R({
      type: nt.keyframes,
      name: F,
      vendor: j,
      keyframes: Q
    }) : s("@keyframes missing '}'");
  }
  function E() {
    const R = o(), x = f(/^@supports *([^{]+)/);
    if (!x)
      return;
    const j = wt(x[1]);
    if (!u())
      return s("@supports missing '{'");
    const H = v().concat(d());
    return c() ? R({
      type: nt.supports,
      supports: j,
      rules: H
    }) : s("@supports missing '}'");
  }
  function M() {
    const R = o();
    if (!f(/^@host\s*/))
      return;
    if (!u())
      return s("@host missing '{'");
    const j = v().concat(d());
    return c() ? R({
      type: nt.host,
      rules: j
    }) : s("@host missing '}'");
  }
  function L() {
    const R = o(), x = f(/^@container *([^{]+)/);
    if (!x)
      return;
    const j = wt(x[1]);
    if (!u())
      return s("@container missing '{'");
    const H = v().concat(d());
    return c() ? R({
      type: nt.container,
      container: j,
      rules: H
    }) : s("@container missing '}'");
  }
  function ie() {
    const R = o(), x = f(/^@layer *([^{;@]+)/);
    if (!x)
      return;
    const j = wt(x[1]);
    if (!u())
      return f(/^[;\s]*/), R({
        type: nt.layer,
        layer: j
      });
    const H = v().concat(d());
    return c() ? R({
      type: nt.layer,
      layer: j,
      rules: H
    }) : s("@layer missing '}'");
  }
  function J() {
    const R = o(), x = f(/^@media *([^{]+)/);
    if (!x)
      return;
    const j = wt(x[1]);
    if (!u())
      return s("@media missing '{'");
    const H = v().concat(d());
    return c() ? R({
      type: nt.media,
      media: j,
      rules: H
    }) : s("@media missing '}'");
  }
  function fe() {
    const R = o(), x = f(/^@custom-media\s+(--\S+)\s*([^{;\s][^{;]*);/);
    if (x)
      return R({
        type: nt.customMedia,
        name: wt(x[1]),
        media: wt(x[2])
      });
  }
  function de() {
    const R = o();
    if (!f(/^@page */))
      return;
    const j = h() || [];
    if (!u())
      return s("@page missing '{'");
    let H = v(), F;
    for (; F = $(); )
      H.push(F), H = H.concat(v());
    return c() ? R({
      type: nt.page,
      selectors: j,
      declarations: H
    }) : s("@page missing '}'");
  }
  function G() {
    const R = o(), x = f(/^@([-\w]+)?document *([^{]+)/);
    if (!x)
      return;
    const j = wt(x[1]), H = wt(x[2]);
    if (!u())
      return s("@document missing '{'");
    const F = v().concat(d());
    return c() ? R({
      type: nt.document,
      document: H,
      vendor: j,
      rules: F
    }) : s("@document missing '}'");
  }
  function ae() {
    const R = o();
    if (!f(/^@font-face\s*/))
      return;
    if (!u())
      return s("@font-face missing '{'");
    let j = v(), H;
    for (; H = $(); )
      j.push(H), j = j.concat(v());
    return c() ? R({
      type: nt.fontFace,
      declarations: j
    }) : s("@font-face missing '}'");
  }
  const xe = Te("import"), ve = Te("charset"), $e = Te("namespace");
  function Te(R) {
    const x = new RegExp("^@" + R + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
    return function() {
      const j = o(), H = f(x);
      if (!H)
        return;
      const F = {
        type: R
      };
      return F[R] = H[1].trim(), j(F);
    };
  }
  function g() {
    if (e[0] === "@")
      return T() || J() || fe() || E() || xe() || ve() || $e() || G() || de() || M() || ae() || L() || ie();
  }
  function q() {
    const R = o(), x = h();
    return x ? (v(), R({
      type: nt.rule,
      selectors: x,
      declarations: A() || []
    })) : s("selector missing");
  }
  return Lm(l());
};
function wt(e) {
  return e ? e.trim() : "";
}
function Lm(e, t) {
  const r = e && typeof e.type == "string", a = r ? e : t;
  for (const n in e) {
    const o = e[n];
    Array.isArray(o) ? o.forEach((i) => {
      Lm(i, a);
    }) : o && typeof o == "object" && Lm(o, a);
  }
  return r && Object.defineProperty(e, "parent", {
    configurable: !0,
    writable: !0,
    enumerable: !1,
    value: t || null
  }), e;
}
var VV = HV;
const zV = VV;
var ev = { exports: {} }, rp, hg;
function WV() {
  return hg || (hg = 1, rp = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }), rp;
}
var np, vg;
function AC() {
  if (vg)
    return np;
  vg = 1;
  const e = WV(), t = {};
  for (const n of Object.keys(e))
    t[e[n]] = n;
  const r = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  np = r;
  for (const n of Object.keys(r)) {
    if (!("channels" in r[n]))
      throw new Error("missing channels property: " + n);
    if (!("labels" in r[n]))
      throw new Error("missing channel labels property: " + n);
    if (r[n].labels.length !== r[n].channels)
      throw new Error("channel and label counts mismatch: " + n);
    const { channels: o, labels: i } = r[n];
    delete r[n].channels, delete r[n].labels, Object.defineProperty(r[n], "channels", { value: o }), Object.defineProperty(r[n], "labels", { value: i });
  }
  r.rgb.hsl = function(n) {
    const o = n[0] / 255, i = n[1] / 255, s = n[2] / 255, l = Math.min(o, i, s), u = Math.max(o, i, s), c = u - l;
    let d, f;
    u === l ? d = 0 : o === u ? d = (i - s) / c : i === u ? d = 2 + (s - o) / c : s === u && (d = 4 + (o - i) / c), d = Math.min(d * 60, 360), d < 0 && (d += 360);
    const p = (l + u) / 2;
    return u === l ? f = 0 : p <= 0.5 ? f = c / (u + l) : f = c / (2 - u - l), [d, f * 100, p * 100];
  }, r.rgb.hsv = function(n) {
    let o, i, s, l, u;
    const c = n[0] / 255, d = n[1] / 255, f = n[2] / 255, p = Math.max(c, d, f), v = p - Math.min(c, d, f), b = function(y) {
      return (p - y) / 6 / v + 1 / 2;
    };
    return v === 0 ? (l = 0, u = 0) : (u = v / p, o = b(c), i = b(d), s = b(f), c === p ? l = s - i : d === p ? l = 1 / 3 + o - s : f === p && (l = 2 / 3 + i - o), l < 0 ? l += 1 : l > 1 && (l -= 1)), [
      l * 360,
      u * 100,
      p * 100
    ];
  }, r.rgb.hwb = function(n) {
    const o = n[0], i = n[1];
    let s = n[2];
    const l = r.rgb.hsl(n)[0], u = 1 / 255 * Math.min(o, Math.min(i, s));
    return s = 1 - 1 / 255 * Math.max(o, Math.max(i, s)), [l, u * 100, s * 100];
  }, r.rgb.cmyk = function(n) {
    const o = n[0] / 255, i = n[1] / 255, s = n[2] / 255, l = Math.min(1 - o, 1 - i, 1 - s), u = (1 - o - l) / (1 - l) || 0, c = (1 - i - l) / (1 - l) || 0, d = (1 - s - l) / (1 - l) || 0;
    return [u * 100, c * 100, d * 100, l * 100];
  };
  function a(n, o) {
    return (n[0] - o[0]) ** 2 + (n[1] - o[1]) ** 2 + (n[2] - o[2]) ** 2;
  }
  return r.rgb.keyword = function(n) {
    const o = t[n];
    if (o)
      return o;
    let i = 1 / 0, s;
    for (const l of Object.keys(e)) {
      const u = e[l], c = a(n, u);
      c < i && (i = c, s = l);
    }
    return s;
  }, r.keyword.rgb = function(n) {
    return e[n];
  }, r.rgb.xyz = function(n) {
    let o = n[0] / 255, i = n[1] / 255, s = n[2] / 255;
    o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92, i = i > 0.04045 ? ((i + 0.055) / 1.055) ** 2.4 : i / 12.92, s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92;
    const l = o * 0.4124 + i * 0.3576 + s * 0.1805, u = o * 0.2126 + i * 0.7152 + s * 0.0722, c = o * 0.0193 + i * 0.1192 + s * 0.9505;
    return [l * 100, u * 100, c * 100];
  }, r.rgb.lab = function(n) {
    const o = r.rgb.xyz(n);
    let i = o[0], s = o[1], l = o[2];
    i /= 95.047, s /= 100, l /= 108.883, i = i > 8856e-6 ? i ** (1 / 3) : 7.787 * i + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116, l = l > 8856e-6 ? l ** (1 / 3) : 7.787 * l + 16 / 116;
    const u = 116 * s - 16, c = 500 * (i - s), d = 200 * (s - l);
    return [u, c, d];
  }, r.hsl.rgb = function(n) {
    const o = n[0] / 360, i = n[1] / 100, s = n[2] / 100;
    let l, u, c;
    if (i === 0)
      return c = s * 255, [c, c, c];
    s < 0.5 ? l = s * (1 + i) : l = s + i - s * i;
    const d = 2 * s - l, f = [0, 0, 0];
    for (let p = 0; p < 3; p++)
      u = o + 1 / 3 * -(p - 1), u < 0 && u++, u > 1 && u--, 6 * u < 1 ? c = d + (l - d) * 6 * u : 2 * u < 1 ? c = l : 3 * u < 2 ? c = d + (l - d) * (2 / 3 - u) * 6 : c = d, f[p] = c * 255;
    return f;
  }, r.hsl.hsv = function(n) {
    const o = n[0];
    let i = n[1] / 100, s = n[2] / 100, l = i;
    const u = Math.max(s, 0.01);
    s *= 2, i *= s <= 1 ? s : 2 - s, l *= u <= 1 ? u : 2 - u;
    const c = (s + i) / 2, d = s === 0 ? 2 * l / (u + l) : 2 * i / (s + i);
    return [o, d * 100, c * 100];
  }, r.hsv.rgb = function(n) {
    const o = n[0] / 60, i = n[1] / 100;
    let s = n[2] / 100;
    const l = Math.floor(o) % 6, u = o - Math.floor(o), c = 255 * s * (1 - i), d = 255 * s * (1 - i * u), f = 255 * s * (1 - i * (1 - u));
    switch (s *= 255, l) {
      case 0:
        return [s, f, c];
      case 1:
        return [d, s, c];
      case 2:
        return [c, s, f];
      case 3:
        return [c, d, s];
      case 4:
        return [f, c, s];
      case 5:
        return [s, c, d];
    }
  }, r.hsv.hsl = function(n) {
    const o = n[0], i = n[1] / 100, s = n[2] / 100, l = Math.max(s, 0.01);
    let u, c;
    c = (2 - i) * s;
    const d = (2 - i) * l;
    return u = i * l, u /= d <= 1 ? d : 2 - d, u = u || 0, c /= 2, [o, u * 100, c * 100];
  }, r.hwb.rgb = function(n) {
    const o = n[0] / 360;
    let i = n[1] / 100, s = n[2] / 100;
    const l = i + s;
    let u;
    l > 1 && (i /= l, s /= l);
    const c = Math.floor(6 * o), d = 1 - s;
    u = 6 * o - c, c & 1 && (u = 1 - u);
    const f = i + u * (d - i);
    let p, v, b;
    switch (c) {
      default:
      case 6:
      case 0:
        p = d, v = f, b = i;
        break;
      case 1:
        p = f, v = d, b = i;
        break;
      case 2:
        p = i, v = d, b = f;
        break;
      case 3:
        p = i, v = f, b = d;
        break;
      case 4:
        p = f, v = i, b = d;
        break;
      case 5:
        p = d, v = i, b = f;
        break;
    }
    return [p * 255, v * 255, b * 255];
  }, r.cmyk.rgb = function(n) {
    const o = n[0] / 100, i = n[1] / 100, s = n[2] / 100, l = n[3] / 100, u = 1 - Math.min(1, o * (1 - l) + l), c = 1 - Math.min(1, i * (1 - l) + l), d = 1 - Math.min(1, s * (1 - l) + l);
    return [u * 255, c * 255, d * 255];
  }, r.xyz.rgb = function(n) {
    const o = n[0] / 100, i = n[1] / 100, s = n[2] / 100;
    let l, u, c;
    return l = o * 3.2406 + i * -1.5372 + s * -0.4986, u = o * -0.9689 + i * 1.8758 + s * 0.0415, c = o * 0.0557 + i * -0.204 + s * 1.057, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92, c = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92, l = Math.min(Math.max(0, l), 1), u = Math.min(Math.max(0, u), 1), c = Math.min(Math.max(0, c), 1), [l * 255, u * 255, c * 255];
  }, r.xyz.lab = function(n) {
    let o = n[0], i = n[1], s = n[2];
    o /= 95.047, i /= 100, s /= 108.883, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, i = i > 8856e-6 ? i ** (1 / 3) : 7.787 * i + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
    const l = 116 * i - 16, u = 500 * (o - i), c = 200 * (i - s);
    return [l, u, c];
  }, r.lab.xyz = function(n) {
    const o = n[0], i = n[1], s = n[2];
    let l, u, c;
    u = (o + 16) / 116, l = i / 500 + u, c = u - s / 200;
    const d = u ** 3, f = l ** 3, p = c ** 3;
    return u = d > 8856e-6 ? d : (u - 16 / 116) / 7.787, l = f > 8856e-6 ? f : (l - 16 / 116) / 7.787, c = p > 8856e-6 ? p : (c - 16 / 116) / 7.787, l *= 95.047, u *= 100, c *= 108.883, [l, u, c];
  }, r.lab.lch = function(n) {
    const o = n[0], i = n[1], s = n[2];
    let l;
    l = Math.atan2(s, i) * 360 / 2 / Math.PI, l < 0 && (l += 360);
    const c = Math.sqrt(i * i + s * s);
    return [o, c, l];
  }, r.lch.lab = function(n) {
    const o = n[0], i = n[1], l = n[2] / 360 * 2 * Math.PI, u = i * Math.cos(l), c = i * Math.sin(l);
    return [o, u, c];
  }, r.rgb.ansi16 = function(n, o = null) {
    const [i, s, l] = n;
    let u = o === null ? r.rgb.hsv(n)[2] : o;
    if (u = Math.round(u / 50), u === 0)
      return 30;
    let c = 30 + (Math.round(l / 255) << 2 | Math.round(s / 255) << 1 | Math.round(i / 255));
    return u === 2 && (c += 60), c;
  }, r.hsv.ansi16 = function(n) {
    return r.rgb.ansi16(r.hsv.rgb(n), n[2]);
  }, r.rgb.ansi256 = function(n) {
    const o = n[0], i = n[1], s = n[2];
    return o === i && i === s ? o < 8 ? 16 : o > 248 ? 231 : Math.round((o - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(o / 255 * 5) + 6 * Math.round(i / 255 * 5) + Math.round(s / 255 * 5);
  }, r.ansi16.rgb = function(n) {
    let o = n % 10;
    if (o === 0 || o === 7)
      return n > 50 && (o += 3.5), o = o / 10.5 * 255, [o, o, o];
    const i = (~~(n > 50) + 1) * 0.5, s = (o & 1) * i * 255, l = (o >> 1 & 1) * i * 255, u = (o >> 2 & 1) * i * 255;
    return [s, l, u];
  }, r.ansi256.rgb = function(n) {
    if (n >= 232) {
      const u = (n - 232) * 10 + 8;
      return [u, u, u];
    }
    n -= 16;
    let o;
    const i = Math.floor(n / 36) / 5 * 255, s = Math.floor((o = n % 36) / 6) / 5 * 255, l = o % 6 / 5 * 255;
    return [i, s, l];
  }, r.rgb.hex = function(n) {
    const i = (((Math.round(n[0]) & 255) << 16) + ((Math.round(n[1]) & 255) << 8) + (Math.round(n[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(i.length) + i;
  }, r.hex.rgb = function(n) {
    const o = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!o)
      return [0, 0, 0];
    let i = o[0];
    o[0].length === 3 && (i = i.split("").map((d) => d + d).join(""));
    const s = parseInt(i, 16), l = s >> 16 & 255, u = s >> 8 & 255, c = s & 255;
    return [l, u, c];
  }, r.rgb.hcg = function(n) {
    const o = n[0] / 255, i = n[1] / 255, s = n[2] / 255, l = Math.max(Math.max(o, i), s), u = Math.min(Math.min(o, i), s), c = l - u;
    let d, f;
    return c < 1 ? d = u / (1 - c) : d = 0, c <= 0 ? f = 0 : l === o ? f = (i - s) / c % 6 : l === i ? f = 2 + (s - o) / c : f = 4 + (o - i) / c, f /= 6, f %= 1, [f * 360, c * 100, d * 100];
  }, r.hsl.hcg = function(n) {
    const o = n[1] / 100, i = n[2] / 100, s = i < 0.5 ? 2 * o * i : 2 * o * (1 - i);
    let l = 0;
    return s < 1 && (l = (i - 0.5 * s) / (1 - s)), [n[0], s * 100, l * 100];
  }, r.hsv.hcg = function(n) {
    const o = n[1] / 100, i = n[2] / 100, s = o * i;
    let l = 0;
    return s < 1 && (l = (i - s) / (1 - s)), [n[0], s * 100, l * 100];
  }, r.hcg.rgb = function(n) {
    const o = n[0] / 360, i = n[1] / 100, s = n[2] / 100;
    if (i === 0)
      return [s * 255, s * 255, s * 255];
    const l = [0, 0, 0], u = o % 1 * 6, c = u % 1, d = 1 - c;
    let f = 0;
    switch (Math.floor(u)) {
      case 0:
        l[0] = 1, l[1] = c, l[2] = 0;
        break;
      case 1:
        l[0] = d, l[1] = 1, l[2] = 0;
        break;
      case 2:
        l[0] = 0, l[1] = 1, l[2] = c;
        break;
      case 3:
        l[0] = 0, l[1] = d, l[2] = 1;
        break;
      case 4:
        l[0] = c, l[1] = 0, l[2] = 1;
        break;
      default:
        l[0] = 1, l[1] = 0, l[2] = d;
    }
    return f = (1 - i) * s, [
      (i * l[0] + f) * 255,
      (i * l[1] + f) * 255,
      (i * l[2] + f) * 255
    ];
  }, r.hcg.hsv = function(n) {
    const o = n[1] / 100, i = n[2] / 100, s = o + i * (1 - o);
    let l = 0;
    return s > 0 && (l = o / s), [n[0], l * 100, s * 100];
  }, r.hcg.hsl = function(n) {
    const o = n[1] / 100, s = n[2] / 100 * (1 - o) + 0.5 * o;
    let l = 0;
    return s > 0 && s < 0.5 ? l = o / (2 * s) : s >= 0.5 && s < 1 && (l = o / (2 * (1 - s))), [n[0], l * 100, s * 100];
  }, r.hcg.hwb = function(n) {
    const o = n[1] / 100, i = n[2] / 100, s = o + i * (1 - o);
    return [n[0], (s - o) * 100, (1 - s) * 100];
  }, r.hwb.hcg = function(n) {
    const o = n[1] / 100, s = 1 - n[2] / 100, l = s - o;
    let u = 0;
    return l < 1 && (u = (s - l) / (1 - l)), [n[0], l * 100, u * 100];
  }, r.apple.rgb = function(n) {
    return [n[0] / 65535 * 255, n[1] / 65535 * 255, n[2] / 65535 * 255];
  }, r.rgb.apple = function(n) {
    return [n[0] / 255 * 65535, n[1] / 255 * 65535, n[2] / 255 * 65535];
  }, r.gray.rgb = function(n) {
    return [n[0] / 100 * 255, n[0] / 100 * 255, n[0] / 100 * 255];
  }, r.gray.hsl = function(n) {
    return [0, 0, n[0]];
  }, r.gray.hsv = r.gray.hsl, r.gray.hwb = function(n) {
    return [0, 100, n[0]];
  }, r.gray.cmyk = function(n) {
    return [0, 0, 0, n[0]];
  }, r.gray.lab = function(n) {
    return [n[0], 0, 0];
  }, r.gray.hex = function(n) {
    const o = Math.round(n[0] / 100 * 255) & 255, s = ((o << 16) + (o << 8) + o).toString(16).toUpperCase();
    return "000000".substring(s.length) + s;
  }, r.rgb.gray = function(n) {
    return [(n[0] + n[1] + n[2]) / 3 / 255 * 100];
  }, np;
}
var ap, yg;
function GV() {
  if (yg)
    return ap;
  yg = 1;
  const e = AC();
  function t() {
    const o = {}, i = Object.keys(e);
    for (let s = i.length, l = 0; l < s; l++)
      o[i[l]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    return o;
  }
  function r(o) {
    const i = t(), s = [o];
    for (i[o].distance = 0; s.length; ) {
      const l = s.pop(), u = Object.keys(e[l]);
      for (let c = u.length, d = 0; d < c; d++) {
        const f = u[d], p = i[f];
        p.distance === -1 && (p.distance = i[l].distance + 1, p.parent = l, s.unshift(f));
      }
    }
    return i;
  }
  function a(o, i) {
    return function(s) {
      return i(o(s));
    };
  }
  function n(o, i) {
    const s = [i[o].parent, o];
    let l = e[i[o].parent][o], u = i[o].parent;
    for (; i[u].parent; )
      s.unshift(i[u].parent), l = a(e[i[u].parent][u], l), u = i[u].parent;
    return l.conversion = s, l;
  }
  return ap = function(o) {
    const i = r(o), s = {}, l = Object.keys(i);
    for (let u = l.length, c = 0; c < u; c++) {
      const d = l[c];
      i[d].parent !== null && (s[d] = n(d, i));
    }
    return s;
  }, ap;
}
var op, bg;
function KV() {
  if (bg)
    return op;
  bg = 1;
  const e = AC(), t = GV(), r = {}, a = Object.keys(e);
  function n(i) {
    const s = function(...l) {
      const u = l[0];
      return u == null ? u : (u.length > 1 && (l = u), i(l));
    };
    return "conversion" in i && (s.conversion = i.conversion), s;
  }
  function o(i) {
    const s = function(...l) {
      const u = l[0];
      if (u == null)
        return u;
      u.length > 1 && (l = u);
      const c = i(l);
      if (typeof c == "object")
        for (let d = c.length, f = 0; f < d; f++)
          c[f] = Math.round(c[f]);
      return c;
    };
    return "conversion" in i && (s.conversion = i.conversion), s;
  }
  return a.forEach((i) => {
    r[i] = {}, Object.defineProperty(r[i], "channels", { value: e[i].channels }), Object.defineProperty(r[i], "labels", { value: e[i].labels });
    const s = t(i);
    Object.keys(s).forEach((u) => {
      const c = s[u];
      r[i][u] = o(c), r[i][u].raw = n(c);
    });
  }), op = r, op;
}
ev.exports;
(function(e) {
  const t = (c, d) => (...f) => `\x1B[${c(...f) + d}m`, r = (c, d) => (...f) => {
    const p = c(...f);
    return `\x1B[${38 + d};5;${p}m`;
  }, a = (c, d) => (...f) => {
    const p = c(...f);
    return `\x1B[${38 + d};2;${p[0]};${p[1]};${p[2]}m`;
  }, n = (c) => c, o = (c, d, f) => [c, d, f], i = (c, d, f) => {
    Object.defineProperty(c, d, {
      get: () => {
        const p = f();
        return Object.defineProperty(c, d, {
          value: p,
          enumerable: !0,
          configurable: !0
        }), p;
      },
      enumerable: !0,
      configurable: !0
    });
  };
  let s;
  const l = (c, d, f, p) => {
    s === void 0 && (s = KV());
    const v = p ? 10 : 0, b = {};
    for (const [y, h] of Object.entries(s)) {
      const $ = y === "ansi16" ? "ansi" : y;
      y === d ? b[$] = c(f, v) : typeof h == "object" && (b[$] = c(h[d], v));
    }
    return b;
  };
  function u() {
    const c = /* @__PURE__ */ new Map(), d = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    d.color.gray = d.color.blackBright, d.bgColor.bgGray = d.bgColor.bgBlackBright, d.color.grey = d.color.blackBright, d.bgColor.bgGrey = d.bgColor.bgBlackBright;
    for (const [f, p] of Object.entries(d)) {
      for (const [v, b] of Object.entries(p))
        d[v] = {
          open: `\x1B[${b[0]}m`,
          close: `\x1B[${b[1]}m`
        }, p[v] = d[v], c.set(b[0], b[1]);
      Object.defineProperty(d, f, {
        value: p,
        enumerable: !1
      });
    }
    return Object.defineProperty(d, "codes", {
      value: c,
      enumerable: !1
    }), d.color.close = "\x1B[39m", d.bgColor.close = "\x1B[49m", i(d.color, "ansi", () => l(t, "ansi16", n, !1)), i(d.color, "ansi256", () => l(r, "ansi256", n, !1)), i(d.color, "ansi16m", () => l(a, "rgb", o, !1)), i(d.bgColor, "ansi", () => l(t, "ansi16", n, !0)), i(d.bgColor, "ansi256", () => l(r, "ansi256", n, !0)), i(d.bgColor, "ansi16m", () => l(a, "rgb", o, !0)), d;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: u
  });
})(ev);
var YV = ev.exports, XV = {
  stdout: !1,
  stderr: !1
};
const JV = (e, t, r) => {
  let a = e.indexOf(t);
  if (a === -1)
    return e;
  const n = t.length;
  let o = 0, i = "";
  do
    i += e.substr(o, a - o) + t + r, o = a + n, a = e.indexOf(t, o);
  while (a !== -1);
  return i += e.substr(o), i;
}, QV = (e, t, r, a) => {
  let n = 0, o = "";
  do {
    const i = e[a - 1] === "\r";
    o += e.substr(n, (i ? a - 1 : a) - n) + t + (i ? `\r
` : `
`) + r, n = a + 1, a = e.indexOf(`
`, n);
  } while (a !== -1);
  return o += e.substr(n), o;
};
var ZV = {
  stringReplaceAll: JV,
  stringEncaseCRLFWithFirstIndex: QV
}, ip, gg;
function ez() {
  if (gg)
    return ip;
  gg = 1;
  const e = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, t = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, r = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, a = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi, n = /* @__PURE__ */ new Map([
    ["n", `
`],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", "\x1B"],
    ["a", "\x07"]
  ]);
  function o(u) {
    const c = u[0] === "u", d = u[1] === "{";
    return c && !d && u.length === 5 || u[0] === "x" && u.length === 3 ? String.fromCharCode(parseInt(u.slice(1), 16)) : c && d ? String.fromCodePoint(parseInt(u.slice(2, -1), 16)) : n.get(u) || u;
  }
  function i(u, c) {
    const d = [], f = c.trim().split(/\s*,\s*/g);
    let p;
    for (const v of f) {
      const b = Number(v);
      if (!Number.isNaN(b))
        d.push(b);
      else if (p = v.match(r))
        d.push(p[2].replace(a, (y, h, $) => h ? o(h) : $));
      else
        throw new Error(`Invalid Chalk template style argument: ${v} (in style '${u}')`);
    }
    return d;
  }
  function s(u) {
    t.lastIndex = 0;
    const c = [];
    let d;
    for (; (d = t.exec(u)) !== null; ) {
      const f = d[1];
      if (d[2]) {
        const p = i(f, d[2]);
        c.push([f].concat(p));
      } else
        c.push([f]);
    }
    return c;
  }
  function l(u, c) {
    const d = {};
    for (const p of c)
      for (const v of p.styles)
        d[v[0]] = p.inverse ? null : v.slice(1);
    let f = u;
    for (const [p, v] of Object.entries(d))
      if (Array.isArray(v)) {
        if (!(p in f))
          throw new Error(`Unknown Chalk style: ${p}`);
        f = v.length > 0 ? f[p](...v) : f[p];
      }
    return f;
  }
  return ip = (u, c) => {
    const d = [], f = [];
    let p = [];
    if (c.replace(e, (v, b, y, h, $, A) => {
      if (b)
        p.push(o(b));
      else if (h) {
        const S = p.join("");
        p = [], f.push(d.length === 0 ? S : l(u, d)(S)), d.push({ inverse: y, styles: s(h) });
      } else if ($) {
        if (d.length === 0)
          throw new Error("Found extraneous } in Chalk template literal");
        f.push(l(u, d)(p.join(""))), p = [], d.pop();
      } else
        p.push(A);
    }), f.push(p.join("")), d.length > 0) {
      const v = `Chalk template literal is missing ${d.length} closing bracket${d.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(v);
    }
    return f.join("");
  }, ip;
}
const Ba = YV, { stdout: Um, stderr: Hm } = XV, {
  stringReplaceAll: tz,
  stringEncaseCRLFWithFirstIndex: rz
} = ZV, MC = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], na = /* @__PURE__ */ Object.create(null), nz = (e, t = {}) => {
  if (t.level > 3 || t.level < 0)
    throw new Error("The `level` option should be an integer from 0 to 3");
  const r = Um ? Um.level : 0;
  e.level = t.level === void 0 ? r : t.level;
};
class az {
  constructor(t) {
    return qC(t);
  }
}
const qC = (e) => {
  const t = {};
  return nz(t, e), t.template = (...r) => sz(t.template, ...r), Object.setPrototypeOf(t, fu.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = () => {
    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
  }, t.template.Instance = az, t.template;
};
function fu(e) {
  return qC(e);
}
for (const [e, t] of Object.entries(Ba))
  na[e] = {
    get() {
      const r = pu(this, tv(t.open, t.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, e, { value: r }), r;
    }
  };
na.visible = {
  get() {
    const e = pu(this, this._styler, !0);
    return Object.defineProperty(this, "visible", { value: e }), e;
  }
};
const IC = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const e of IC)
  na[e] = {
    get() {
      const { level: t } = this;
      return function(...r) {
        const a = tv(Ba.color[MC[t]][e](...r), Ba.color.close, this._styler);
        return pu(this, a, this._isEmpty);
      };
    }
  };
for (const e of IC) {
  const t = "bg" + e[0].toUpperCase() + e.slice(1);
  na[t] = {
    get() {
      const { level: r } = this;
      return function(...a) {
        const n = tv(Ba.bgColor[MC[r]][e](...a), Ba.bgColor.close, this._styler);
        return pu(this, n, this._isEmpty);
      };
    }
  };
}
const oz = Object.defineProperties(() => {
}, {
  ...na,
  level: {
    enumerable: !0,
    get() {
      return this._generator.level;
    },
    set(e) {
      this._generator.level = e;
    }
  }
}), tv = (e, t, r) => {
  let a, n;
  return r === void 0 ? (a = e, n = t) : (a = r.openAll + e, n = t + r.closeAll), {
    open: e,
    close: t,
    openAll: a,
    closeAll: n,
    parent: r
  };
}, pu = (e, t, r) => {
  const a = (...n) => iz(a, n.length === 1 ? "" + n[0] : n.join(" "));
  return a.__proto__ = oz, a._generator = e, a._styler = t, a._isEmpty = r, a;
}, iz = (e, t) => {
  if (e.level <= 0 || !t)
    return e._isEmpty ? "" : t;
  let r = e._styler;
  if (r === void 0)
    return t;
  const { openAll: a, closeAll: n } = r;
  if (t.indexOf("\x1B") !== -1)
    for (; r !== void 0; )
      t = tz(t, r.close, r.open), r = r.parent;
  const o = t.indexOf(`
`);
  return o !== -1 && (t = rz(t, n, a, o)), a + t + n;
};
let sp;
const sz = (e, ...t) => {
  const [r] = t;
  if (!Array.isArray(r))
    return t.join(" ");
  const a = t.slice(1), n = [r.raw[0]];
  for (let o = 1; o < r.length; o++)
    n.push(
      String(a[o - 1]).replace(/[{}\\]/g, "\\$&"),
      String(r.raw[o])
    );
  return sp === void 0 && (sp = ez()), sp(e, n.join(""));
};
Object.defineProperties(fu.prototype, na);
const Za = fu();
Za.supportsColor = Um;
Za.stderr = fu({ level: Hm ? Hm.level : 0 });
Za.stderr.supportsColor = Hm;
Za.Level = {
  None: 0,
  Basic: 1,
  Ansi256: 2,
  TrueColor: 3,
  0: "None",
  1: "Basic",
  2: "Ansi256",
  3: "TrueColor"
};
var lz = Za;
const uz = /* @__PURE__ */ Lr(lz);
var cz = RC;
function dz(e, t, r) {
  r = typeof r == "function" ? r : void 0;
  var a = r ? r(e, t) : void 0;
  return a === void 0 ? cz(e, t, void 0, r) : !!a;
}
var fz = dz;
const NC = /* @__PURE__ */ Lr(fz);
function pz(e, t, r, a) {
  for (var n = e.length, o = r + (a ? 1 : -1); a ? o-- : ++o < n; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var mz = pz;
function hz(e) {
  return e !== e;
}
var vz = hz;
function yz(e, t, r) {
  for (var a = r - 1, n = e.length; ++a < n; )
    if (e[a] === t)
      return a;
  return -1;
}
var bz = yz, gz = mz, wz = vz, _z = bz;
function $z(e, t, r) {
  return t === t ? _z(e, t, r) : gz(e, wz, r);
}
var Ez = $z, Cz = Ez;
function Rz(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Cz(e, t, 0) > -1;
}
var Pz = Rz;
function xz(e, t, r) {
  for (var a = -1, n = e == null ? 0 : e.length; ++a < n; )
    if (r(t, e[a]))
      return !0;
  return !1;
}
var Sz = xz;
function Oz() {
}
var Tz = Oz, lp = $C, Az = Tz, Mz = Jh, qz = 1 / 0, Iz = lp && 1 / Mz(new lp([, -0]))[1] == qz ? function(e) {
  return new lp(e);
} : Az, Nz = Iz, kz = hC, jz = Pz, Fz = Sz, Dz = vC, Bz = Nz, Lz = Jh, Uz = 200;
function Hz(e, t, r) {
  var a = -1, n = jz, o = e.length, i = !0, s = [], l = s;
  if (r)
    i = !1, n = Fz;
  else if (o >= Uz) {
    var u = t ? null : Bz(e);
    if (u)
      return Lz(u);
    i = !1, n = Dz, l = new kz();
  } else
    l = t ? [] : s;
  e:
    for (; ++a < o; ) {
      var c = e[a], d = t ? t(c) : c;
      if (c = r || c !== 0 ? c : 0, i && d === d) {
        for (var f = l.length; f--; )
          if (l[f] === d)
            continue e;
        t && l.push(d), s.push(c);
      } else
        n(l, d, r) || (l !== s && l.push(d), s.push(c));
    }
  return s;
}
var Vz = Hz, zz = Vz;
function Wz(e) {
  return e && e.length ? zz(e) : [];
}
var Gz = Wz;
const Kz = /* @__PURE__ */ Lr(Gz);
var kC = { exports: {} };
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
(function(e, t) {
  (function(r, a) {
    e.exports = a(r);
  })(yt, function(r) {
    if (r.CSS && r.CSS.escape)
      return r.CSS.escape;
    var a = function(n) {
      if (arguments.length == 0)
        throw new TypeError("`CSS.escape` requires an argument.");
      for (var o = String(n), i = o.length, s = -1, l, u = "", c = o.charCodeAt(0); ++s < i; ) {
        if (l = o.charCodeAt(s), l == 0) {
          u += "�";
          continue;
        }
        if (
          // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
          // U+007F, […]
          l >= 1 && l <= 31 || l == 127 || // If the character is the first character and is in the range [0-9]
          // (U+0030 to U+0039), […]
          s == 0 && l >= 48 && l <= 57 || // If the character is the second character and is in the range [0-9]
          // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
          s == 1 && l >= 48 && l <= 57 && c == 45
        ) {
          u += "\\" + l.toString(16) + " ";
          continue;
        }
        if (
          // If the character is the first character and is a `-` (U+002D), and
          // there is no second character, […]
          s == 0 && i == 1 && l == 45
        ) {
          u += "\\" + o.charAt(s);
          continue;
        }
        if (l >= 128 || l == 45 || l == 95 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122) {
          u += o.charAt(s);
          continue;
        }
        u += "\\" + o.charAt(s);
      }
      return u;
    };
    return r.CSS || (r.CSS = {}), r.CSS.escape = a, a;
  });
})(kC);
var Yz = kC.exports;
const Xz = /* @__PURE__ */ Lr(Yz);
var qt = {}, mu = {}, un = {}, hu = {};
Object.defineProperty(hu, "__esModule", {
  value: !0
});
hu.default = void 0;
function Jz() {
  var e = this, t = 0, r = {
    "@@iterator": function() {
      return r;
    },
    next: function() {
      if (t < e.length) {
        var n = e[t];
        return t = t + 1, {
          done: !1,
          value: n
        };
      } else
        return {
          done: !0
        };
    }
  };
  return r;
}
var Qz = Jz;
hu.default = Qz;
Object.defineProperty(un, "__esModule", {
  value: !0
});
un.default = tW;
var Zz = eW(hu);
function eW(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vm(e) {
  "@babel/helpers - typeof";
  return Vm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vm(e);
}
function tW(e, t) {
  return typeof Symbol == "function" && Vm(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: Zz.default.bind(t)
  }), e;
}
Object.defineProperty(mu, "__esModule", {
  value: !0
});
mu.default = void 0;
var rW = nW(un);
function nW(e) {
  return e && e.__esModule ? e : { default: e };
}
function up(e, t) {
  return iW(e) || oW(e, t) || jC(e, t) || aW();
}
function aW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function iW(e) {
  if (Array.isArray(e))
    return e;
}
function sW(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = jC(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function jC(e, t) {
  if (e) {
    if (typeof e == "string")
      return wg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wg(e, t);
  }
}
function wg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var gn = [["aria-activedescendant", {
  type: "id"
}], ["aria-atomic", {
  type: "boolean"
}], ["aria-autocomplete", {
  type: "token",
  values: ["inline", "list", "both", "none"]
}], ["aria-braillelabel", {
  type: "string"
}], ["aria-brailleroledescription", {
  type: "string"
}], ["aria-busy", {
  type: "boolean"
}], ["aria-checked", {
  type: "tristate"
}], ["aria-colcount", {
  type: "integer"
}], ["aria-colindex", {
  type: "integer"
}], ["aria-colspan", {
  type: "integer"
}], ["aria-controls", {
  type: "idlist"
}], ["aria-current", {
  type: "token",
  values: ["page", "step", "location", "date", "time", !0, !1]
}], ["aria-describedby", {
  type: "idlist"
}], ["aria-description", {
  type: "string"
}], ["aria-details", {
  type: "id"
}], ["aria-disabled", {
  type: "boolean"
}], ["aria-dropeffect", {
  type: "tokenlist",
  values: ["copy", "execute", "link", "move", "none", "popup"]
}], ["aria-errormessage", {
  type: "id"
}], ["aria-expanded", {
  type: "boolean",
  allowundefined: !0
}], ["aria-flowto", {
  type: "idlist"
}], ["aria-grabbed", {
  type: "boolean",
  allowundefined: !0
}], ["aria-haspopup", {
  type: "token",
  values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
}], ["aria-hidden", {
  type: "boolean",
  allowundefined: !0
}], ["aria-invalid", {
  type: "token",
  values: ["grammar", !1, "spelling", !0]
}], ["aria-keyshortcuts", {
  type: "string"
}], ["aria-label", {
  type: "string"
}], ["aria-labelledby", {
  type: "idlist"
}], ["aria-level", {
  type: "integer"
}], ["aria-live", {
  type: "token",
  values: ["assertive", "off", "polite"]
}], ["aria-modal", {
  type: "boolean"
}], ["aria-multiline", {
  type: "boolean"
}], ["aria-multiselectable", {
  type: "boolean"
}], ["aria-orientation", {
  type: "token",
  values: ["vertical", "undefined", "horizontal"]
}], ["aria-owns", {
  type: "idlist"
}], ["aria-placeholder", {
  type: "string"
}], ["aria-posinset", {
  type: "integer"
}], ["aria-pressed", {
  type: "tristate"
}], ["aria-readonly", {
  type: "boolean"
}], ["aria-relevant", {
  type: "tokenlist",
  values: ["additions", "all", "removals", "text"]
}], ["aria-required", {
  type: "boolean"
}], ["aria-roledescription", {
  type: "string"
}], ["aria-rowcount", {
  type: "integer"
}], ["aria-rowindex", {
  type: "integer"
}], ["aria-rowspan", {
  type: "integer"
}], ["aria-selected", {
  type: "boolean",
  allowundefined: !0
}], ["aria-setsize", {
  type: "integer"
}], ["aria-sort", {
  type: "token",
  values: ["ascending", "descending", "none", "other"]
}], ["aria-valuemax", {
  type: "number"
}], ["aria-valuemin", {
  type: "number"
}], ["aria-valuenow", {
  type: "number"
}], ["aria-valuetext", {
  type: "string"
}]], zm = {
  entries: function() {
    return gn;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = sW(gn), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = up(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, gn);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = gn.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!zm.get(t);
  },
  keys: function() {
    return gn.map(function(t) {
      var r = up(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return gn.map(function(t) {
      var r = up(t, 2), a = r[1];
      return a;
    });
  }
}, lW = (0, rW.default)(zm, zm.entries());
mu.default = lW;
var vu = {};
Object.defineProperty(vu, "__esModule", {
  value: !0
});
vu.default = void 0;
var uW = cW(un);
function cW(e) {
  return e && e.__esModule ? e : { default: e };
}
function cp(e, t) {
  return pW(e) || fW(e, t) || FC(e, t) || dW();
}
function dW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function pW(e) {
  if (Array.isArray(e))
    return e;
}
function mW(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = FC(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function FC(e, t) {
  if (e) {
    if (typeof e == "string")
      return _g(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _g(e, t);
  }
}
function _g(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var wn = [["a", {
  reserved: !1
}], ["abbr", {
  reserved: !1
}], ["acronym", {
  reserved: !1
}], ["address", {
  reserved: !1
}], ["applet", {
  reserved: !1
}], ["area", {
  reserved: !1
}], ["article", {
  reserved: !1
}], ["aside", {
  reserved: !1
}], ["audio", {
  reserved: !1
}], ["b", {
  reserved: !1
}], ["base", {
  reserved: !0
}], ["bdi", {
  reserved: !1
}], ["bdo", {
  reserved: !1
}], ["big", {
  reserved: !1
}], ["blink", {
  reserved: !1
}], ["blockquote", {
  reserved: !1
}], ["body", {
  reserved: !1
}], ["br", {
  reserved: !1
}], ["button", {
  reserved: !1
}], ["canvas", {
  reserved: !1
}], ["caption", {
  reserved: !1
}], ["center", {
  reserved: !1
}], ["cite", {
  reserved: !1
}], ["code", {
  reserved: !1
}], ["col", {
  reserved: !0
}], ["colgroup", {
  reserved: !0
}], ["content", {
  reserved: !1
}], ["data", {
  reserved: !1
}], ["datalist", {
  reserved: !1
}], ["dd", {
  reserved: !1
}], ["del", {
  reserved: !1
}], ["details", {
  reserved: !1
}], ["dfn", {
  reserved: !1
}], ["dialog", {
  reserved: !1
}], ["dir", {
  reserved: !1
}], ["div", {
  reserved: !1
}], ["dl", {
  reserved: !1
}], ["dt", {
  reserved: !1
}], ["em", {
  reserved: !1
}], ["embed", {
  reserved: !1
}], ["fieldset", {
  reserved: !1
}], ["figcaption", {
  reserved: !1
}], ["figure", {
  reserved: !1
}], ["font", {
  reserved: !1
}], ["footer", {
  reserved: !1
}], ["form", {
  reserved: !1
}], ["frame", {
  reserved: !1
}], ["frameset", {
  reserved: !1
}], ["h1", {
  reserved: !1
}], ["h2", {
  reserved: !1
}], ["h3", {
  reserved: !1
}], ["h4", {
  reserved: !1
}], ["h5", {
  reserved: !1
}], ["h6", {
  reserved: !1
}], ["head", {
  reserved: !0
}], ["header", {
  reserved: !1
}], ["hgroup", {
  reserved: !1
}], ["hr", {
  reserved: !1
}], ["html", {
  reserved: !0
}], ["i", {
  reserved: !1
}], ["iframe", {
  reserved: !1
}], ["img", {
  reserved: !1
}], ["input", {
  reserved: !1
}], ["ins", {
  reserved: !1
}], ["kbd", {
  reserved: !1
}], ["keygen", {
  reserved: !1
}], ["label", {
  reserved: !1
}], ["legend", {
  reserved: !1
}], ["li", {
  reserved: !1
}], ["link", {
  reserved: !0
}], ["main", {
  reserved: !1
}], ["map", {
  reserved: !1
}], ["mark", {
  reserved: !1
}], ["marquee", {
  reserved: !1
}], ["menu", {
  reserved: !1
}], ["menuitem", {
  reserved: !1
}], ["meta", {
  reserved: !0
}], ["meter", {
  reserved: !1
}], ["nav", {
  reserved: !1
}], ["noembed", {
  reserved: !0
}], ["noscript", {
  reserved: !0
}], ["object", {
  reserved: !1
}], ["ol", {
  reserved: !1
}], ["optgroup", {
  reserved: !1
}], ["option", {
  reserved: !1
}], ["output", {
  reserved: !1
}], ["p", {
  reserved: !1
}], ["param", {
  reserved: !0
}], ["picture", {
  reserved: !0
}], ["pre", {
  reserved: !1
}], ["progress", {
  reserved: !1
}], ["q", {
  reserved: !1
}], ["rp", {
  reserved: !1
}], ["rt", {
  reserved: !1
}], ["rtc", {
  reserved: !1
}], ["ruby", {
  reserved: !1
}], ["s", {
  reserved: !1
}], ["samp", {
  reserved: !1
}], ["script", {
  reserved: !0
}], ["section", {
  reserved: !1
}], ["select", {
  reserved: !1
}], ["small", {
  reserved: !1
}], ["source", {
  reserved: !0
}], ["spacer", {
  reserved: !1
}], ["span", {
  reserved: !1
}], ["strike", {
  reserved: !1
}], ["strong", {
  reserved: !1
}], ["style", {
  reserved: !0
}], ["sub", {
  reserved: !1
}], ["summary", {
  reserved: !1
}], ["sup", {
  reserved: !1
}], ["table", {
  reserved: !1
}], ["tbody", {
  reserved: !1
}], ["td", {
  reserved: !1
}], ["textarea", {
  reserved: !1
}], ["tfoot", {
  reserved: !1
}], ["th", {
  reserved: !1
}], ["thead", {
  reserved: !1
}], ["time", {
  reserved: !1
}], ["title", {
  reserved: !0
}], ["tr", {
  reserved: !1
}], ["track", {
  reserved: !0
}], ["tt", {
  reserved: !1
}], ["u", {
  reserved: !1
}], ["ul", {
  reserved: !1
}], ["var", {
  reserved: !1
}], ["video", {
  reserved: !1
}], ["wbr", {
  reserved: !1
}], ["xmp", {
  reserved: !1
}]], Wm = {
  entries: function() {
    return wn;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = mW(wn), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = cp(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, wn);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = wn.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Wm.get(t);
  },
  keys: function() {
    return wn.map(function(t) {
      var r = cp(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return wn.map(function(t) {
      var r = cp(t, 2), a = r[1];
      return a;
    });
  }
}, hW = (0, uW.default)(Wm, Wm.entries());
vu.default = hW;
var aa = {}, yu = {}, bu = {};
Object.defineProperty(bu, "__esModule", {
  value: !0
});
bu.default = void 0;
var vW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, yW = vW;
bu.default = yW;
var gu = {};
Object.defineProperty(gu, "__esModule", {
  value: !0
});
gu.default = void 0;
var bW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, gW = bW;
gu.default = gW;
var wu = {};
Object.defineProperty(wu, "__esModule", {
  value: !0
});
wu.default = void 0;
var wW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "input"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, _W = wW;
wu.default = _W;
var _u = {};
Object.defineProperty(_u, "__esModule", {
  value: !0
});
_u.default = void 0;
var $W = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, EW = $W;
_u.default = EW;
var $u = {};
Object.defineProperty($u, "__esModule", {
  value: !0
});
$u.default = void 0;
var CW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, RW = CW;
$u.default = RW;
var Eu = {};
Object.defineProperty(Eu, "__esModule", {
  value: !0
});
Eu.default = void 0;
var PW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    "aria-atomic": null,
    "aria-busy": null,
    "aria-controls": null,
    "aria-current": null,
    "aria-describedby": null,
    "aria-details": null,
    "aria-dropeffect": null,
    "aria-flowto": null,
    "aria-grabbed": null,
    "aria-hidden": null,
    "aria-keyshortcuts": null,
    "aria-label": null,
    "aria-labelledby": null,
    "aria-live": null,
    "aria-owns": null,
    "aria-relevant": null,
    "aria-roledescription": null
  },
  relatedConcepts: [{
    concept: {
      name: "role"
    },
    module: "XHTML"
  }, {
    concept: {
      name: "type"
    },
    module: "Dublin Core"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, xW = PW;
Eu.default = xW;
var Cu = {};
Object.defineProperty(Cu, "__esModule", {
  value: !0
});
Cu.default = void 0;
var SW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "frontmatter"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "SMIL"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, OW = SW;
Cu.default = OW;
var Ru = {};
Object.defineProperty(Ru, "__esModule", {
  value: !0
});
Ru.default = void 0;
var TW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, AW = TW;
Ru.default = AW;
var Pu = {};
Object.defineProperty(Pu, "__esModule", {
  value: !0
});
Pu.default = void 0;
var MW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
}, qW = MW;
Pu.default = qW;
var xu = {};
Object.defineProperty(xu, "__esModule", {
  value: !0
});
xu.default = void 0;
var IW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, NW = IW;
xu.default = NW;
var Su = {};
Object.defineProperty(Su, "__esModule", {
  value: !0
});
Su.default = void 0;
var kW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, jW = kW;
Su.default = jW;
var Ou = {};
Object.defineProperty(Ou, "__esModule", {
  value: !0
});
Ou.default = void 0;
var FW = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-modal": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, DW = FW;
Ou.default = DW;
Object.defineProperty(yu, "__esModule", {
  value: !0
});
yu.default = void 0;
var BW = xt(bu), LW = xt(gu), UW = xt(wu), HW = xt(_u), VW = xt($u), zW = xt(Eu), WW = xt(Cu), GW = xt(Ru), KW = xt(Pu), YW = xt(xu), XW = xt(Su), JW = xt(Ou);
function xt(e) {
  return e && e.__esModule ? e : { default: e };
}
var QW = [["command", BW.default], ["composite", LW.default], ["input", UW.default], ["landmark", HW.default], ["range", VW.default], ["roletype", zW.default], ["section", WW.default], ["sectionhead", GW.default], ["select", KW.default], ["structure", YW.default], ["widget", XW.default], ["window", JW.default]], ZW = QW;
yu.default = ZW;
var Tu = {}, Au = {};
Object.defineProperty(Au, "__esModule", {
  value: !0
});
Au.default = void 0;
var e8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "assertive"
  },
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, t8 = e8;
Au.default = t8;
var Mu = {};
Object.defineProperty(Mu, "__esModule", {
  value: !0
});
Mu.default = void 0;
var r8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
}, n8 = r8;
Mu.default = n8;
var qu = {};
Object.defineProperty(qu, "__esModule", {
  value: !0
});
qu.default = void 0;
var a8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, o8 = a8;
qu.default = o8;
var Iu = {};
Object.defineProperty(Iu, "__esModule", {
  value: !0
});
Iu.default = void 0;
var i8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "article"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, s8 = i8;
Iu.default = s8;
var Nu = {};
Object.defineProperty(Nu, "__esModule", {
  value: !0
});
Nu.default = void 0;
var l8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["scoped to the body element"],
      name: "header"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, u8 = l8;
Nu.default = u8;
var ku = {};
Object.defineProperty(ku, "__esModule", {
  value: !0
});
ku.default = void 0;
var c8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "blockquote"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, d8 = c8;
ku.default = d8;
var ju = {};
Object.defineProperty(ju, "__esModule", {
  value: !0
});
ju.default = void 0;
var f8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-pressed": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "button"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "image"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "reset"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "submit"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "button"
    },
    module: "HTML"
  }, {
    concept: {
      name: "trigger"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, p8 = f8;
ju.default = p8;
var Fu = {};
Object.defineProperty(Fu, "__esModule", {
  value: !0
});
Fu.default = void 0;
var m8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "caption"
    },
    module: "HTML"
  }],
  requireContextRole: ["figure", "grid", "table"],
  requiredContextRole: ["figure", "grid", "table"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, h8 = m8;
Fu.default = h8;
var Du = {};
Object.defineProperty(Du, "__esModule", {
  value: !0
});
Du.default = void 0;
var v8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-colspan": null,
    "aria-rowindex": null,
    "aria-rowspan": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["ancestor table element has table role"],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, y8 = v8;
Du.default = y8;
var Bu = {};
Object.defineProperty(Bu, "__esModule", {
  value: !0
});
Bu.default = void 0;
var b8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, g8 = b8;
Bu.default = g8;
var Lu = {};
Object.defineProperty(Lu, "__esModule", {
  value: !0
});
Lu.default = void 0;
var w8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "code"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, _8 = w8;
Lu.default = _8;
var Uu = {};
Object.defineProperty(Uu, "__esModule", {
  value: !0
});
Uu.default = void 0;
var $8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    concept: {
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "col"
      }],
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "colgroup"
      }],
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, E8 = $8;
Uu.default = E8;
var Hu = {};
Object.defineProperty(Hu, "__esModule", {
  value: !0
});
Hu.default = void 0;
var C8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-expanded": "false",
    "aria-haspopup": "listbox"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        constraints: ["undefined"],
        name: "size"
      }],
      constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-expanded": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, R8 = C8;
Hu.default = R8;
var Vu = {};
Object.defineProperty(Vu, "__esModule", {
  value: !0
});
Vu.default = void 0;
var P8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "aside"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
      name: "aside"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
      name: "aside"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, x8 = P8;
Vu.default = x8;
var zu = {};
Object.defineProperty(zu, "__esModule", {
  value: !0
});
zu.default = void 0;
var S8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["scoped to the body element"],
      name: "footer"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, O8 = S8;
zu.default = O8;
var Wu = {};
Object.defineProperty(Wu, "__esModule", {
  value: !0
});
Wu.default = void 0;
var T8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, A8 = T8;
Wu.default = A8;
var Gu = {};
Object.defineProperty(Gu, "__esModule", {
  value: !0
});
Gu.default = void 0;
var M8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "del"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, q8 = M8;
Gu.default = q8;
var Ku = {};
Object.defineProperty(Ku, "__esModule", {
  value: !0
});
Ku.default = void 0;
var I8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dialog"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "window"]]
}, N8 = I8;
Ku.default = N8;
var Yu = {};
Object.defineProperty(Yu, "__esModule", {
  value: !0
});
Yu.default = void 0;
var k8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    module: "DAISY Guide"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, j8 = k8;
Yu.default = j8;
var Xu = {};
Object.defineProperty(Xu, "__esModule", {
  value: !0
});
Xu.default = void 0;
var F8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }, {
    concept: {
      name: "html"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, D8 = F8;
Xu.default = D8;
var Ju = {};
Object.defineProperty(Ju, "__esModule", {
  value: !0
});
Ju.default = void 0;
var B8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "em"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, L8 = B8;
Ju.default = L8;
var Qu = {};
Object.defineProperty(Qu, "__esModule", {
  value: !0
});
Qu.default = void 0;
var U8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["article"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, H8 = U8;
Qu.default = H8;
var Zu = {};
Object.defineProperty(Zu, "__esModule", {
  value: !0
});
Zu.default = void 0;
var V8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "figure"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, z8 = V8;
Zu.default = z8;
var ec = {};
Object.defineProperty(ec, "__esModule", {
  value: !0
});
ec.default = void 0;
var W8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "name"
      }],
      name: "form"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, G8 = W8;
ec.default = G8;
var tc = {};
Object.defineProperty(tc, "__esModule", {
  value: !0
});
tc.default = void 0;
var K8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "a"
    },
    module: "HTML"
  }, {
    concept: {
      name: "area"
    },
    module: "HTML"
  }, {
    concept: {
      name: "aside"
    },
    module: "HTML"
  }, {
    concept: {
      name: "b"
    },
    module: "HTML"
  }, {
    concept: {
      name: "bdo"
    },
    module: "HTML"
  }, {
    concept: {
      name: "body"
    },
    module: "HTML"
  }, {
    concept: {
      name: "data"
    },
    module: "HTML"
  }, {
    concept: {
      name: "div"
    },
    module: "HTML"
  }, {
    concept: {
      constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
      name: "footer"
    },
    module: "HTML"
  }, {
    concept: {
      constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
      name: "header"
    },
    module: "HTML"
  }, {
    concept: {
      name: "hgroup"
    },
    module: "HTML"
  }, {
    concept: {
      name: "i"
    },
    module: "HTML"
  }, {
    concept: {
      name: "pre"
    },
    module: "HTML"
  }, {
    concept: {
      name: "q"
    },
    module: "HTML"
  }, {
    concept: {
      name: "samp"
    },
    module: "HTML"
  }, {
    concept: {
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      name: "small"
    },
    module: "HTML"
  }, {
    concept: {
      name: "span"
    },
    module: "HTML"
  }, {
    concept: {
      name: "u"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Y8 = K8;
tc.default = Y8;
var rc = {};
Object.defineProperty(rc, "__esModule", {
  value: !0
});
rc.default = void 0;
var X8 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-multiselectable": null,
    "aria-readonly": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
}, J8 = X8;
rc.default = J8;
var nc = {};
Object.defineProperty(nc, "__esModule", {
  value: !0
});
nc.default = void 0;
var Q8 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-selected": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
}, Z8 = Q8;
nc.default = Z8;
var ac = {};
Object.defineProperty(ac, "__esModule", {
  value: !0
});
ac.default = void 0;
var eG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "details"
    },
    module: "HTML"
  }, {
    concept: {
      name: "fieldset"
    },
    module: "HTML"
  }, {
    concept: {
      name: "optgroup"
    },
    module: "HTML"
  }, {
    concept: {
      name: "address"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, tG = eG;
ac.default = tG;
var oc = {};
Object.defineProperty(oc, "__esModule", {
  value: !0
});
oc.default = void 0;
var rG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-level": "2"
  },
  relatedConcepts: [{
    concept: {
      name: "h1"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h2"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h3"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h4"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h5"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h6"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-level": "2"
  },
  superClass: [["roletype", "structure", "sectionhead"]]
}, nG = rG;
oc.default = nG;
var ic = {};
Object.defineProperty(ic, "__esModule", {
  value: !0
});
ic.default = void 0;
var aG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      name: "imggroup"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, oG = aG;
ic.default = oG;
var sc = {};
Object.defineProperty(sc, "__esModule", {
  value: !0
});
sc.default = void 0;
var iG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "ins"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, sG = iG;
sc.default = sG;
var lc = {};
Object.defineProperty(lc, "__esModule", {
  value: !0
});
lc.default = void 0;
var lG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "href"
      }],
      name: "a"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "href"
      }],
      name: "area"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, uG = lG;
lc.default = uG;
var uc = {};
Object.defineProperty(uc, "__esModule", {
  value: !0
});
uc.default = void 0;
var cG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menu"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ol"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ul"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["listitem"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, dG = cG;
uc.default = dG;
var cc = {};
Object.defineProperty(cc, "__esModule", {
  value: !0
});
cc.default = void 0;
var fG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }],
      constraints: ["the size attribute value is greater than 1"],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "datalist"
    },
    module: "HTML"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["option", "group"], ["option"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, pG = fG;
cc.default = pG;
var dc = {};
Object.defineProperty(dc, "__esModule", {
  value: !0
});
dc.default = void 0;
var mG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
      name: "li"
    },
    module: "HTML"
  }, {
    concept: {
      name: "item"
    },
    module: "XForms"
  }],
  requireContextRole: ["directory", "list"],
  requiredContextRole: ["directory", "list"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, hG = mG;
dc.default = hG;
var fc = {};
Object.defineProperty(fc, "__esModule", {
  value: !0
});
fc.default = void 0;
var vG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-live": "polite"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, yG = vG;
fc.default = yG;
var pc = {};
Object.defineProperty(pc, "__esModule", {
  value: !0
});
pc.default = void 0;
var bG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "main"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, gG = bG;
pc.default = gG;
var mc = {};
Object.defineProperty(mc, "__esModule", {
  value: !0
});
mc.default = void 0;
var wG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: [],
  props: {
    "aria-braillelabel": null,
    "aria-brailleroledescription": null,
    "aria-description": null
  },
  relatedConcepts: [{
    concept: {
      name: "mark"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, _G = wG;
mc.default = _G;
var hc = {};
Object.defineProperty(hc, "__esModule", {
  value: !0
});
hc.default = void 0;
var $G = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, EG = $G;
hc.default = EG;
var vc = {};
Object.defineProperty(vc, "__esModule", {
  value: !0
});
vc.default = void 0;
var CG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "math"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, RG = CG;
vc.default = RG;
var yc = {};
Object.defineProperty(yc, "__esModule", {
  value: !0
});
yc.default = void 0;
var PG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      name: "MENU"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }, {
    concept: {
      name: "sidebar"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, xG = PG;
yc.default = xG;
var bc = {};
Object.defineProperty(bc, "__esModule", {
  value: !0
});
bc.default = void 0;
var SG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "toolbar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
}, OG = SG;
bc.default = OG;
var gc = {};
Object.defineProperty(gc, "__esModule", {
  value: !0
});
gc.default = void 0;
var TG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "MENU_ITEM"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, AG = TG;
gc.default = AG;
var wc = {};
Object.defineProperty(wc, "__esModule", {
  value: !0
});
wc.default = void 0;
var MG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
}, qG = MG;
wc.default = qG;
var _c = {};
Object.defineProperty(_c, "__esModule", {
  value: !0
});
_c.default = void 0;
var IG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
}, NG = IG;
_c.default = NG;
var $c = {};
Object.defineProperty($c, "__esModule", {
  value: !0
});
$c.default = void 0;
var kG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null,
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [{
    concept: {
      name: "meter"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"]]
}, jG = kG;
$c.default = jG;
var Ec = {};
Object.defineProperty(Ec, "__esModule", {
  value: !0
});
Ec.default = void 0;
var FG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "nav"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, DG = FG;
Ec.default = DG;
var Cc = {};
Object.defineProperty(Cc, "__esModule", {
  value: !0
});
Cc.default = void 0;
var BG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, LG = BG;
Cc.default = LG;
var Rc = {};
Object.defineProperty(Rc, "__esModule", {
  value: !0
});
Rc.default = void 0;
var UG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, HG = UG;
Rc.default = HG;
var Pc = {};
Object.defineProperty(Pc, "__esModule", {
  value: !0
});
Pc.default = void 0;
var VG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [{
    concept: {
      name: "item"
    },
    module: "XForms"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "option"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, zG = VG;
Pc.default = zG;
var xc = {};
Object.defineProperty(xc, "__esModule", {
  value: !0
});
xc.default = void 0;
var WG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "p"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, GG = WG;
xc.default = GG;
var Sc = {};
Object.defineProperty(Sc, "__esModule", {
  value: !0
});
Sc.default = void 0;
var KG = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "alt",
        value: ""
      }],
      name: "img"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, YG = KG;
Sc.default = YG;
var Oc = {};
Object.defineProperty(Oc, "__esModule", {
  value: !0
});
Oc.default = void 0;
var XG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "progress"
    },
    module: "HTML"
  }, {
    concept: {
      name: "status"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, JG = XG;
Oc.default = JG;
var Tc = {};
Object.defineProperty(Tc, "__esModule", {
  value: !0
});
Tc.default = void 0;
var QG = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "radio"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, ZG = QG;
Tc.default = ZG;
var Ac = {};
Object.defineProperty(Ac, "__esModule", {
  value: !0
});
Ac.default = void 0;
var e7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      name: "list"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["radio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, t7 = e7;
Ac.default = t7;
var Mc = {};
Object.defineProperty(Mc, "__esModule", {
  value: !0
});
Mc.default = void 0;
var r7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      name: "Device Independence Glossart perceivable unit"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, n7 = r7;
Mc.default = n7;
var qc = {};
Object.defineProperty(qc, "__esModule", {
  value: !0
});
qc.default = void 0;
var a7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-expanded": null,
    "aria-level": null,
    "aria-posinset": null,
    "aria-rowindex": null,
    "aria-selected": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "tr"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
}, o7 = a7;
qc.default = o7;
var Ic = {};
Object.defineProperty(Ic, "__esModule", {
  value: !0
});
Ic.default = void 0;
var i7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "tbody"
    },
    module: "HTML"
  }, {
    concept: {
      name: "tfoot"
    },
    module: "HTML"
  }, {
    concept: {
      name: "thead"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "table", "treegrid"],
  requiredContextRole: ["grid", "table", "treegrid"],
  requiredOwnedElements: [["row"]],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, s7 = i7;
Ic.default = s7;
var Nc = {};
Object.defineProperty(Nc, "__esModule", {
  value: !0
});
Nc.default = void 0;
var l7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "scope",
        value: "row"
      }],
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "rowgroup"
      }],
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row", "rowgroup"],
  requiredContextRole: ["row", "rowgroup"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, u7 = l7;
Nc.default = u7;
var kc = {};
Object.defineProperty(kc, "__esModule", {
  value: !0
});
kc.default = void 0;
var c7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-valuetext": null,
    "aria-orientation": "vertical",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, d7 = c7;
kc.default = d7;
var jc = {};
Object.defineProperty(jc, "__esModule", {
  value: !0
});
jc.default = void 0;
var f7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, p7 = f7;
jc.default = p7;
var Fc = {};
Object.defineProperty(Fc, "__esModule", {
  value: !0
});
Fc.default = void 0;
var m7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      constraints: ["the list attribute is not set"],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input", "textbox"]]
}, h7 = m7;
Fc.default = h7;
var Dc = {};
Object.defineProperty(Dc, "__esModule", {
  value: !0
});
Dc.default = void 0;
var v7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": null,
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "hr"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, y7 = v7;
Dc.default = y7;
var Bc = {};
Object.defineProperty(Bc, "__esModule", {
  value: !0
});
Bc.default = void 0;
var b7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-valuetext": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "range"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, g7 = b7;
Bc.default = g7;
var Lc = {};
Object.defineProperty(Lc, "__esModule", {
  value: !0
});
Lc.default = void 0;
var w7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-valuetext": null,
    "aria-valuenow": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "number"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, _7 = w7;
Lc.default = _7;
var Uc = {};
Object.defineProperty(Uc, "__esModule", {
  value: !0
});
Uc.default = void 0;
var $7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "polite"
  },
  relatedConcepts: [{
    concept: {
      name: "output"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, E7 = $7;
Uc.default = E7;
var Hc = {};
Object.defineProperty(Hc, "__esModule", {
  value: !0
});
Hc.default = void 0;
var C7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "strong"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, R7 = C7;
Hc.default = R7;
var Vc = {};
Object.defineProperty(Vc, "__esModule", {
  value: !0
});
Vc.default = void 0;
var P7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "sub"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, x7 = P7;
Vc.default = x7;
var zc = {};
Object.defineProperty(zc, "__esModule", {
  value: !0
});
zc.default = void 0;
var S7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "sup"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, O7 = S7;
zc.default = O7;
var Wc = {};
Object.defineProperty(Wc, "__esModule", {
  value: !0
});
Wc.default = void 0;
var T7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "button"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"]]
}, A7 = T7;
Wc.default = A7;
var Gc = {};
Object.defineProperty(Gc, "__esModule", {
  value: !0
});
Gc.default = void 0;
var M7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [],
  requireContextRole: ["tablist"],
  requiredContextRole: ["tablist"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
}, q7 = M7;
Gc.default = q7;
var Kc = {};
Object.defineProperty(Kc, "__esModule", {
  value: !0
});
Kc.default = void 0;
var I7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-colcount": null,
    "aria-rowcount": null
  },
  relatedConcepts: [{
    concept: {
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, N7 = I7;
Kc.default = N7;
var Yc = {};
Object.defineProperty(Yc, "__esModule", {
  value: !0
});
Yc.default = void 0;
var k7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-multiselectable": null,
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    module: "DAISY",
    concept: {
      name: "guide"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["tab"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"]]
}, j7 = k7;
Yc.default = j7;
var Xc = {};
Object.defineProperty(Xc, "__esModule", {
  value: !0
});
Xc.default = void 0;
var F7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, D7 = F7;
Xc.default = D7;
var Jc = {};
Object.defineProperty(Jc, "__esModule", {
  value: !0
});
Jc.default = void 0;
var B7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dfn"
    },
    module: "HTML"
  }, {
    concept: {
      name: "dt"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, L7 = B7;
Jc.default = L7;
var Qc = {};
Object.defineProperty(Qc, "__esModule", {
  value: !0
});
Qc.default = void 0;
var U7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-multiline": null,
    "aria-placeholder": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "type"
      }, {
        constraints: ["undefined"],
        name: "list"
      }],
      constraints: ["the list attribute is not set"],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      constraints: ["the list attribute is not set"],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      constraints: ["the list attribute is not set"],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      constraints: ["the list attribute is not set"],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      constraints: ["the list attribute is not set"],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "input"
    },
    module: "XForms"
  }, {
    concept: {
      name: "textarea"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input"]]
}, H7 = U7;
Qc.default = H7;
var Zc = {};
Object.defineProperty(Zc, "__esModule", {
  value: !0
});
Zc.default = void 0;
var V7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "time"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, z7 = V7;
Zc.default = z7;
var ed = {};
Object.defineProperty(ed, "__esModule", {
  value: !0
});
ed.default = void 0;
var W7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "status"]]
}, G7 = W7;
ed.default = G7;
var td = {};
Object.defineProperty(td, "__esModule", {
  value: !0
});
td.default = void 0;
var K7 = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "menubar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, Y7 = K7;
td.default = Y7;
var rd = {};
Object.defineProperty(rd, "__esModule", {
  value: !0
});
rd.default = void 0;
var X7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, J7 = X7;
rd.default = J7;
var nd = {};
Object.defineProperty(nd, "__esModule", {
  value: !0
});
nd.default = void 0;
var Q7 = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, Z7 = Q7;
nd.default = Z7;
var ad = {};
Object.defineProperty(ad, "__esModule", {
  value: !0
});
ad.default = void 0;
var eK = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
}, tK = eK;
ad.default = tK;
var od = {};
Object.defineProperty(od, "__esModule", {
  value: !0
});
od.default = void 0;
var rK = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [],
  requireContextRole: ["group", "tree"],
  requiredContextRole: ["group", "tree"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": null
  },
  superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
}, nK = rK;
od.default = nK;
Object.defineProperty(Tu, "__esModule", {
  value: !0
});
Tu.default = void 0;
var aK = Z(Au), oK = Z(Mu), iK = Z(qu), sK = Z(Iu), lK = Z(Nu), uK = Z(ku), cK = Z(ju), dK = Z(Fu), fK = Z(Du), pK = Z(Bu), mK = Z(Lu), hK = Z(Uu), vK = Z(Hu), yK = Z(Vu), bK = Z(zu), gK = Z(Wu), wK = Z(Gu), _K = Z(Ku), $K = Z(Yu), EK = Z(Xu), CK = Z(Ju), RK = Z(Qu), PK = Z(Zu), xK = Z(ec), SK = Z(tc), OK = Z(rc), TK = Z(nc), AK = Z(ac), MK = Z(oc), qK = Z(ic), IK = Z(sc), NK = Z(lc), kK = Z(uc), jK = Z(cc), FK = Z(dc), DK = Z(fc), BK = Z(pc), LK = Z(mc), UK = Z(hc), HK = Z(vc), VK = Z(yc), zK = Z(bc), WK = Z(gc), GK = Z(wc), KK = Z(_c), YK = Z($c), XK = Z(Ec), JK = Z(Cc), QK = Z(Rc), ZK = Z(Pc), eY = Z(xc), tY = Z(Sc), rY = Z(Oc), nY = Z(Tc), aY = Z(Ac), oY = Z(Mc), iY = Z(qc), sY = Z(Ic), lY = Z(Nc), uY = Z(kc), cY = Z(jc), dY = Z(Fc), fY = Z(Dc), pY = Z(Bc), mY = Z(Lc), hY = Z(Uc), vY = Z(Hc), yY = Z(Vc), bY = Z(zc), gY = Z(Wc), wY = Z(Gc), _Y = Z(Kc), $Y = Z(Yc), EY = Z(Xc), CY = Z(Jc), RY = Z(Qc), PY = Z(Zc), xY = Z(ed), SY = Z(td), OY = Z(rd), TY = Z(nd), AY = Z(ad), MY = Z(od);
function Z(e) {
  return e && e.__esModule ? e : { default: e };
}
var qY = [["alert", aK.default], ["alertdialog", oK.default], ["application", iK.default], ["article", sK.default], ["banner", lK.default], ["blockquote", uK.default], ["button", cK.default], ["caption", dK.default], ["cell", fK.default], ["checkbox", pK.default], ["code", mK.default], ["columnheader", hK.default], ["combobox", vK.default], ["complementary", yK.default], ["contentinfo", bK.default], ["definition", gK.default], ["deletion", wK.default], ["dialog", _K.default], ["directory", $K.default], ["document", EK.default], ["emphasis", CK.default], ["feed", RK.default], ["figure", PK.default], ["form", xK.default], ["generic", SK.default], ["grid", OK.default], ["gridcell", TK.default], ["group", AK.default], ["heading", MK.default], ["img", qK.default], ["insertion", IK.default], ["link", NK.default], ["list", kK.default], ["listbox", jK.default], ["listitem", FK.default], ["log", DK.default], ["main", BK.default], ["mark", LK.default], ["marquee", UK.default], ["math", HK.default], ["menu", VK.default], ["menubar", zK.default], ["menuitem", WK.default], ["menuitemcheckbox", GK.default], ["menuitemradio", KK.default], ["meter", YK.default], ["navigation", XK.default], ["none", JK.default], ["note", QK.default], ["option", ZK.default], ["paragraph", eY.default], ["presentation", tY.default], ["progressbar", rY.default], ["radio", nY.default], ["radiogroup", aY.default], ["region", oY.default], ["row", iY.default], ["rowgroup", sY.default], ["rowheader", lY.default], ["scrollbar", uY.default], ["search", cY.default], ["searchbox", dY.default], ["separator", fY.default], ["slider", pY.default], ["spinbutton", mY.default], ["status", hY.default], ["strong", vY.default], ["subscript", yY.default], ["superscript", bY.default], ["switch", gY.default], ["tab", wY.default], ["table", _Y.default], ["tablist", $Y.default], ["tabpanel", EY.default], ["term", CY.default], ["textbox", RY.default], ["time", PY.default], ["timer", xY.default], ["toolbar", SY.default], ["tooltip", OY.default], ["tree", TY.default], ["treegrid", AY.default], ["treeitem", MY.default]], IY = qY;
Tu.default = IY;
var id = {}, sd = {};
Object.defineProperty(sd, "__esModule", {
  value: !0
});
sd.default = void 0;
var NY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "abstract [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kY = NY;
sd.default = kY;
var ld = {};
Object.defineProperty(ld, "__esModule", {
  value: !0
});
ld.default = void 0;
var jY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "acknowledgments [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, FY = jY;
ld.default = FY;
var ud = {};
Object.defineProperty(ud, "__esModule", {
  value: !0
});
ud.default = void 0;
var DY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, BY = DY;
ud.default = BY;
var cd = {};
Object.defineProperty(cd, "__esModule", {
  value: !0
});
cd.default = void 0;
var LY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "appendix [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, UY = LY;
cd.default = UY;
var dd = {};
Object.defineProperty(dd, "__esModule", {
  value: !0
});
dd.default = void 0;
var HY = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "referrer [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, VY = HY;
dd.default = VY;
var fd = {};
Object.defineProperty(fd, "__esModule", {
  value: !0
});
fd.default = void 0;
var zY = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "EPUB biblioentry [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-bibliography"],
  requiredContextRole: ["doc-bibliography"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, WY = zY;
fd.default = WY;
var pd = {};
Object.defineProperty(pd, "__esModule", {
  value: !0
});
pd.default = void 0;
var GY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "bibliography [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-biblioentry"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, KY = GY;
pd.default = KY;
var md = {};
Object.defineProperty(md, "__esModule", {
  value: !0
});
md.default = void 0;
var YY = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "biblioref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, XY = YY;
md.default = XY;
var hd = {};
Object.defineProperty(hd, "__esModule", {
  value: !0
});
hd.default = void 0;
var JY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "chapter [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, QY = JY;
hd.default = QY;
var vd = {};
Object.defineProperty(vd, "__esModule", {
  value: !0
});
vd.default = void 0;
var ZY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "colophon [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, eX = ZY;
vd.default = eX;
var yd = {};
Object.defineProperty(yd, "__esModule", {
  value: !0
});
yd.default = void 0;
var tX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "conclusion [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, rX = tX;
yd.default = rX;
var bd = {};
Object.defineProperty(bd, "__esModule", {
  value: !0
});
bd.default = void 0;
var nX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "cover [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, aX = nX;
bd.default = aX;
var gd = {};
Object.defineProperty(gd, "__esModule", {
  value: !0
});
gd.default = void 0;
var oX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, iX = oX;
gd.default = iX;
var wd = {};
Object.defineProperty(wd, "__esModule", {
  value: !0
});
wd.default = void 0;
var sX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, lX = sX;
wd.default = lX;
var _d = {};
Object.defineProperty(_d, "__esModule", {
  value: !0
});
_d.default = void 0;
var uX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "dedication [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, cX = uX;
_d.default = cX;
var $d = {};
Object.defineProperty($d, "__esModule", {
  value: !0
});
$d.default = void 0;
var dX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-endnotes"],
  requiredContextRole: ["doc-endnotes"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, fX = dX;
$d.default = fX;
var Ed = {};
Object.defineProperty(Ed, "__esModule", {
  value: !0
});
Ed.default = void 0;
var pX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, mX = pX;
Ed.default = mX;
var Cd = {};
Object.defineProperty(Cd, "__esModule", {
  value: !0
});
Cd.default = void 0;
var hX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epigraph [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, vX = hX;
Cd.default = vX;
var Rd = {};
Object.defineProperty(Rd, "__esModule", {
  value: !0
});
Rd.default = void 0;
var yX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epilogue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, bX = yX;
Rd.default = bX;
var Pd = {};
Object.defineProperty(Pd, "__esModule", {
  value: !0
});
Pd.default = void 0;
var gX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, wX = gX;
Pd.default = wX;
var xd = {};
Object.defineProperty(xd, "__esModule", {
  value: !0
});
xd.default = void 0;
var _X = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, $X = _X;
xd.default = $X;
var Sd = {};
Object.defineProperty(Sd, "__esModule", {
  value: !0
});
Sd.default = void 0;
var EX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, CX = EX;
Sd.default = CX;
var Od = {};
Object.defineProperty(Od, "__esModule", {
  value: !0
});
Od.default = void 0;
var RX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "foreword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, PX = RX;
Od.default = PX;
var Td = {};
Object.defineProperty(Td, "__esModule", {
  value: !0
});
Td.default = void 0;
var xX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossary [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["definition"], ["term"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, SX = xX;
Td.default = SX;
var Ad = {};
Object.defineProperty(Ad, "__esModule", {
  value: !0
});
Ad.default = void 0;
var OX = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, TX = OX;
Ad.default = TX;
var Md = {};
Object.defineProperty(Md, "__esModule", {
  value: !0
});
Md.default = void 0;
var AX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "index [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, MX = AX;
Md.default = MX;
var qd = {};
Object.defineProperty(qd, "__esModule", {
  value: !0
});
qd.default = void 0;
var qX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "introduction [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, IX = qX;
qd.default = IX;
var Id = {};
Object.defineProperty(Id, "__esModule", {
  value: !0
});
Id.default = void 0;
var NX = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "noteref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, kX = NX;
Id.default = kX;
var Nd = {};
Object.defineProperty(Nd, "__esModule", {
  value: !0
});
Nd.default = void 0;
var jX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "notice [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, FX = jX;
Nd.default = FX;
var kd = {};
Object.defineProperty(kd, "__esModule", {
  value: !0
});
kd.default = void 0;
var DX = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "pagebreak [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "separator"]]
}, BX = DX;
kd.default = BX;
var jd = {};
Object.defineProperty(jd, "__esModule", {
  value: !0
});
jd.default = void 0;
var LX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "page-list [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, UX = LX;
jd.default = UX;
var Fd = {};
Object.defineProperty(Fd, "__esModule", {
  value: !0
});
Fd.default = void 0;
var HX = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "part [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, VX = HX;
Fd.default = VX;
var Dd = {};
Object.defineProperty(Dd, "__esModule", {
  value: !0
});
Dd.default = void 0;
var zX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "preface [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, WX = zX;
Dd.default = WX;
var Bd = {};
Object.defineProperty(Bd, "__esModule", {
  value: !0
});
Bd.default = void 0;
var GX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "prologue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, KX = GX;
Bd.default = KX;
var Ld = {};
Object.defineProperty(Ld, "__esModule", {
  value: !0
});
Ld.default = void 0;
var YX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "pullquote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["none"]]
}, XX = YX;
Ld.default = XX;
var Ud = {};
Object.defineProperty(Ud, "__esModule", {
  value: !0
});
Ud.default = void 0;
var JX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "qna [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, QX = JX;
Ud.default = QX;
var Hd = {};
Object.defineProperty(Hd, "__esModule", {
  value: !0
});
Hd.default = void 0;
var ZX = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "subtitle [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"]]
}, eJ = ZX;
Hd.default = eJ;
var Vd = {};
Object.defineProperty(Vd, "__esModule", {
  value: !0
});
Vd.default = void 0;
var tJ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "help [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, rJ = tJ;
Vd.default = rJ;
var zd = {};
Object.defineProperty(zd, "__esModule", {
  value: !0
});
zd.default = void 0;
var nJ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "toc [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, aJ = nJ;
zd.default = aJ;
Object.defineProperty(id, "__esModule", {
  value: !0
});
id.default = void 0;
var oJ = Re(sd), iJ = Re(ld), sJ = Re(ud), lJ = Re(cd), uJ = Re(dd), cJ = Re(fd), dJ = Re(pd), fJ = Re(md), pJ = Re(hd), mJ = Re(vd), hJ = Re(yd), vJ = Re(bd), yJ = Re(gd), bJ = Re(wd), gJ = Re(_d), wJ = Re($d), _J = Re(Ed), $J = Re(Cd), EJ = Re(Rd), CJ = Re(Pd), RJ = Re(xd), PJ = Re(Sd), xJ = Re(Od), SJ = Re(Td), OJ = Re(Ad), TJ = Re(Md), AJ = Re(qd), MJ = Re(Id), qJ = Re(Nd), IJ = Re(kd), NJ = Re(jd), kJ = Re(Fd), jJ = Re(Dd), FJ = Re(Bd), DJ = Re(Ld), BJ = Re(Ud), LJ = Re(Hd), UJ = Re(Vd), HJ = Re(zd);
function Re(e) {
  return e && e.__esModule ? e : { default: e };
}
var VJ = [["doc-abstract", oJ.default], ["doc-acknowledgments", iJ.default], ["doc-afterword", sJ.default], ["doc-appendix", lJ.default], ["doc-backlink", uJ.default], ["doc-biblioentry", cJ.default], ["doc-bibliography", dJ.default], ["doc-biblioref", fJ.default], ["doc-chapter", pJ.default], ["doc-colophon", mJ.default], ["doc-conclusion", hJ.default], ["doc-cover", vJ.default], ["doc-credit", yJ.default], ["doc-credits", bJ.default], ["doc-dedication", gJ.default], ["doc-endnote", wJ.default], ["doc-endnotes", _J.default], ["doc-epigraph", $J.default], ["doc-epilogue", EJ.default], ["doc-errata", CJ.default], ["doc-example", RJ.default], ["doc-footnote", PJ.default], ["doc-foreword", xJ.default], ["doc-glossary", SJ.default], ["doc-glossref", OJ.default], ["doc-index", TJ.default], ["doc-introduction", AJ.default], ["doc-noteref", MJ.default], ["doc-notice", qJ.default], ["doc-pagebreak", IJ.default], ["doc-pagelist", NJ.default], ["doc-part", kJ.default], ["doc-preface", jJ.default], ["doc-prologue", FJ.default], ["doc-pullquote", DJ.default], ["doc-qna", BJ.default], ["doc-subtitle", LJ.default], ["doc-tip", UJ.default], ["doc-toc", HJ.default]], zJ = VJ;
id.default = zJ;
var Wd = {}, Gd = {};
Object.defineProperty(Gd, "__esModule", {
  value: !0
});
Gd.default = void 0;
var WJ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-object"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "article"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, GJ = WJ;
Gd.default = GJ;
var Kd = {};
Object.defineProperty(Kd, "__esModule", {
  value: !0
});
Kd.default = void 0;
var KJ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-document"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "group"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "GRAPHICS",
    concept: {
      name: "graphics-symbol"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, YJ = KJ;
Kd.default = YJ;
var Yd = {};
Object.defineProperty(Yd, "__esModule", {
  value: !0
});
Yd.default = void 0;
var XJ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, JJ = XJ;
Yd.default = JJ;
Object.defineProperty(Wd, "__esModule", {
  value: !0
});
Wd.default = void 0;
var QJ = rv(Gd), ZJ = rv(Kd), eQ = rv(Yd);
function rv(e) {
  return e && e.__esModule ? e : { default: e };
}
var tQ = [["graphics-document", QJ.default], ["graphics-object", ZJ.default], ["graphics-symbol", eQ.default]], rQ = tQ;
Wd.default = rQ;
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
var nQ = eo(yu), aQ = eo(Tu), oQ = eo(id), iQ = eo(Wd), sQ = eo(un);
function eo(e) {
  return e && e.__esModule ? e : { default: e };
}
function lQ(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gm(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = DC(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Sa(e, t) {
  return dQ(e) || cQ(e, t) || DC(e, t) || uQ();
}
function uQ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DC(e, t) {
  if (e) {
    if (typeof e == "string")
      return $g(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $g(e, t);
  }
}
function $g(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function cQ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function dQ(e) {
  if (Array.isArray(e))
    return e;
}
var dr = [].concat(nQ.default, aQ.default, oQ.default, iQ.default);
dr.forEach(function(e) {
  var t = Sa(e, 2), r = t[1], a = Gm(r.superClass), n;
  try {
    for (a.s(); !(n = a.n()).done; ) {
      var o = n.value, i = Gm(o), s;
      try {
        var l = function() {
          var c = s.value, d = dr.find(function(y) {
            var h = Sa(y, 1), $ = h[0];
            return $ === c;
          });
          if (d)
            for (var f = d[1], p = 0, v = Object.keys(f.props); p < v.length; p++) {
              var b = v[p];
              Object.prototype.hasOwnProperty.call(r.props, b) || Object.assign(r.props, lQ({}, b, f.props[b]));
            }
        };
        for (i.s(); !(s = i.n()).done; )
          l();
      } catch (u) {
        i.e(u);
      } finally {
        i.f();
      }
    }
  } catch (u) {
    a.e(u);
  } finally {
    a.f();
  }
});
var Km = {
  entries: function() {
    return dr;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = Gm(dr), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = Sa(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, dr);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = dr.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Km.get(t);
  },
  keys: function() {
    return dr.map(function(t) {
      var r = Sa(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return dr.map(function(t) {
      var r = Sa(t, 2), a = r[1];
      return a;
    });
  }
}, fQ = (0, sQ.default)(Km, Km.entries());
aa.default = fQ;
var Xd = {}, BC = {}, Eg = Object.prototype.hasOwnProperty;
function Ym(e, t) {
  var r, a;
  if (e === t)
    return !0;
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date)
      return e.getTime() === t.getTime();
    if (r === RegExp)
      return e.toString() === t.toString();
    if (r === Array) {
      if ((a = e.length) === t.length)
        for (; a-- && Ym(e[a], t[a]); )
          ;
      return a === -1;
    }
    if (!r || typeof e == "object") {
      a = 0;
      for (r in e)
        if (Eg.call(e, r) && ++a && !Eg.call(t, r) || !(r in t) || !Ym(e[r], t[r]))
          return !1;
      return Object.keys(t).length === a;
    }
  }
  return e !== e && t !== t;
}
BC.dequal = Ym;
Object.defineProperty(Xd, "__esModule", {
  value: !0
});
Xd.default = void 0;
var LC = BC, pQ = HC(un), UC = HC(aa);
function HC(e) {
  return e && e.__esModule ? e : { default: e };
}
function dp(e, t) {
  return vQ(e) || hQ(e, t) || VC(e, t) || mQ();
}
function mQ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hQ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function vQ(e) {
  if (Array.isArray(e))
    return e;
}
function yQ(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = VC(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function VC(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Cg(e, t);
  }
}
function Cg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var fr = [], Rg = UC.default.keys();
for (var fp = 0; fp < Rg.length; fp++) {
  var pp = Rg[fp], mp = UC.default.get(pp);
  if (mp)
    for (var Pg = [].concat(mp.baseConcepts, mp.relatedConcepts), hp = 0; hp < Pg.length; hp++) {
      var xg = Pg[hp];
      xg.module === "HTML" && function() {
        var e = xg.concept;
        if (e) {
          var t = fr.find(function(o) {
            return (0, LC.dequal)(o, e);
          }), r;
          t ? r = t[1] : r = [];
          for (var a = !0, n = 0; n < r.length; n++)
            if (r[n] === pp) {
              a = !1;
              break;
            }
          a && r.push(pp), fr.push([e, r]);
        }
      }();
    }
}
var Xm = {
  entries: function() {
    return fr;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = yQ(fr), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = dp(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, fr);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = fr.find(function(a) {
      return t.name === a[0].name && (0, LC.dequal)(t.attributes, a[0].attributes);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Xm.get(t);
  },
  keys: function() {
    return fr.map(function(t) {
      var r = dp(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return fr.map(function(t) {
      var r = dp(t, 2), a = r[1];
      return a;
    });
  }
}, bQ = (0, pQ.default)(Xm, Xm.entries());
Xd.default = bQ;
var Jd = {};
Object.defineProperty(Jd, "__esModule", {
  value: !0
});
Jd.default = void 0;
var gQ = WC(un), zC = WC(aa);
function WC(e) {
  return e && e.__esModule ? e : { default: e };
}
function vp(e, t) {
  return $Q(e) || _Q(e, t) || GC(e, t) || wQ();
}
function wQ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _Q(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return a;
  }
}
function $Q(e) {
  if (Array.isArray(e))
    return e;
}
function EQ(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = GC(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function GC(e, t) {
  if (e) {
    if (typeof e == "string")
      return Sg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sg(e, t);
  }
}
function Sg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
var Kr = [], Og = zC.default.keys();
for (var yp = 0; yp < Og.length; yp++) {
  var Tg = Og[yp], bp = zC.default.get(Tg), gp = [];
  if (bp) {
    for (var Ag = [].concat(bp.baseConcepts, bp.relatedConcepts), wp = 0; wp < Ag.length; wp++) {
      var Mg = Ag[wp];
      if (Mg.module === "HTML") {
        var qg = Mg.concept;
        qg != null && gp.push(qg);
      }
    }
    gp.length > 0 && Kr.push([Tg, gp]);
  }
}
var Jm = {
  entries: function() {
    return Kr;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = EQ(Kr), n;
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var o = vp(n.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, Kr);
      }
    } catch (l) {
      a.e(l);
    } finally {
      a.f();
    }
  },
  get: function(t) {
    var r = Kr.find(function(a) {
      return a[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Jm.get(t);
  },
  keys: function() {
    return Kr.map(function(t) {
      var r = vp(t, 1), a = r[0];
      return a;
    });
  },
  values: function() {
    return Kr.map(function(t) {
      var r = vp(t, 2), a = r[1];
      return a;
    });
  }
}, CQ = (0, gQ.default)(Jm, Jm.entries());
Jd.default = CQ;
Object.defineProperty(qt, "__esModule", {
  value: !0
});
var nv = qt.roles = qt.roleElements = qt.elementRoles = qt.dom = qt.aria = void 0, RQ = to(mu), PQ = to(vu), xQ = to(aa), SQ = to(Xd), OQ = to(Jd);
function to(e) {
  return e && e.__esModule ? e : { default: e };
}
var TQ = RQ.default;
qt.aria = TQ;
var AQ = PQ.default;
qt.dom = AQ;
var MQ = xQ.default;
nv = qt.roles = MQ;
var qQ = SQ.default;
qt.elementRoles = qQ;
var IQ = OQ.default;
qt.roleElements = IQ;
class KC extends Error {
  constructor(t, r, a, n) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, a);
    let o = "";
    try {
      o = n.utils.printWithType(
        "Received",
        r,
        n.utils.printReceived
      );
    } catch {
    }
    this.message = [
      n.utils.matcherHint(
        `${n.isNot ? ".not" : ""}.${a.name}`,
        "received",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      `${n.utils.RECEIVED_COLOR(
        "received"
      )} value must ${t}.`,
      o
    ].join(`
`);
  }
}
class Ig extends KC {
  constructor(...t) {
    super("be an HTMLElement or an SVGElement", ...t);
  }
}
class Ng extends KC {
  constructor(...t) {
    super("be a Node", ...t);
  }
}
function YC(e, t, ...r) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView)
    throw new t(e, ...r);
}
function NQ(e, ...t) {
  YC(e, Ng, ...t);
  const r = e.ownerDocument.defaultView;
  if (!(e instanceof r.Node))
    throw new Ng(e, ...t);
}
function Ve(e, ...t) {
  YC(e, Ig, ...t);
  const r = e.ownerDocument.defaultView;
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement))
    throw new Ig(e, ...t);
}
class kQ extends Error {
  constructor(t, r, a) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, r), this.message = [
      t.message,
      "",
      // eslint-disable-next-line new-cap
      a.utils.RECEIVED_COLOR("Failing css:"),
      // eslint-disable-next-line new-cap
      a.utils.RECEIVED_COLOR(`${t.css}`)
    ].join(`
`);
  }
}
function jQ(e, ...t) {
  const r = zV(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (r.parsingErrors && r.parsingErrors.length > 0) {
    const { reason: n, line: o } = r.parsingErrors[0];
    throw new kQ(
      {
        css: e,
        message: `Syntax error parsing expected css: ${n} on line: ${o}`
      },
      ...t
    );
  }
  return r.rules[0].declarations.filter((n) => n.type === "declaration").reduce(
    (n, { property: o, value: i }) => Object.assign(n, { [o]: i }),
    {}
  );
}
function kg(e, t) {
  return typeof t == "string" ? t : e.utils.stringify(t);
}
function pt(e, t, r, a, n, o) {
  return [
    `${t}
`,
    // eslint-disable-next-line new-cap
    `${r}:
${e.utils.EXPECTED_COLOR(
      Ub(kg(e, a), 2)
    )}`,
    // eslint-disable-next-line new-cap
    `${n}:
${e.utils.RECEIVED_COLOR(
      Ub(kg(e, o), 2)
    )}`
  ].join(`
`);
}
function FQ(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function Qd(e, t) {
  console.warn(
    `Warning: ${e} has been deprecated and will be removed in future updates.`,
    t
  );
}
function Zd(e) {
  return e.replace(/\s+/g, " ").trim();
}
function Er(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function DQ({ multiple: e, options: t }) {
  const r = [...t].filter((a) => a.selected);
  if (e)
    return [...r].map((a) => a.value);
  if (r.length !== 0)
    return r[0].value;
}
function BQ(e) {
  switch (e.type) {
    case "number":
      return e.value === "" ? null : Number(e.value);
    case "checkbox":
      return e.checked;
    default:
      return e.value;
  }
}
function XC(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case "input":
        return BQ(e);
      case "select":
        return DQ(e);
      default:
        return e.value;
    }
}
function JC(e, t) {
  if (Array.isArray(e) && Array.isArray(t))
    return LV(new Set(e), new Set(t));
}
function LQ(e, { wordConnector: t = ", ", lastWordConnector: r = " and " } = {}) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(
    e.length > 1 ? r : ""
  );
}
function Qm(e, t) {
  return Qd(
    "toBeInTheDOM",
    "Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container."
  ), e && Ve(e, Qm, this), t && Ve(t, Qm, this), {
    pass: t ? t.contains(e) : !!e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDOM`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(
        e && e.cloneNode(!1)
      )}`
    ].join(`
`)
  };
}
function QC(e) {
  (e !== null || !this.isNot) && Ve(e, QC, this);
  const t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }), r = () => `expected document not to contain element, found ${this.utils.stringify(
    e.cloneNode(!0)
  )} instead`, a = () => "element could not be found in the document";
  return {
    pass: t,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDocument`,
        "element",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(this.isNot ? r() : a())
    ].join(`
`)
  };
}
function ZC(e) {
  return Qd(
    "toBeEmpty",
    "Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM."
  ), Ve(e, ZC, this), {
    pass: e.innerHTML === "",
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmpty`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function eR(e) {
  return Ve(e, eR, this), {
    pass: UQ(e),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmptyDOMElement`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function UQ(e) {
  return [...e.childNodes].filter((r) => r.nodeType !== 8).length === 0;
}
function Zm(e, t) {
  return Ve(e, Zm, this), t !== null && Ve(t, Zm, this), {
    pass: e.contains(t),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainElement`,
        "element",
        "element"
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(`${this.utils.stringify(
        e.cloneNode(!1)
      )} ${this.isNot ? "contains:" : "does not contain:"} ${this.utils.stringify(t && t.cloneNode(!1))}
        `)
    ].join(`
`)
  };
}
function HQ(e, t) {
  const r = e.ownerDocument.createElement("div");
  return r.innerHTML = t, r.innerHTML;
}
function tR(e, t) {
  if (Ve(e, tR, this), typeof t != "string")
    throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(HQ(e, t)),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainHTML`,
        "element",
        ""
      ),
      "Expected:",
      // eslint-disable-next-line new-cap
      `  ${this.utils.EXPECTED_COLOR(t)}`,
      "Received:",
      `  ${this.utils.printReceived(e.cloneNode(!0))}`
    ].join(`
`)
  };
}
function rR(e, t, r = { normalizeWhitespace: !0 }) {
  NQ(e, rR, this);
  const a = r.normalizeWhitespace ? Zd(e.textContent) : e.textContent.replace(/\u00a0/g, " "), n = a !== "" && t === "";
  return {
    pass: !n && FQ(a, t),
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveTextContent`,
          "element",
          ""
        ),
        n ? "Checking with empty string will always match, use .toBeEmptyDOMElement() instead" : `Expected element ${o} have text content`,
        t,
        "Received",
        a
      );
    }
  };
}
function eh(e, t) {
  Ve(e, eh, this);
  const r = Eh(e), a = arguments.length === 1;
  let n = !1;
  return a ? n = r !== "" : n = t instanceof RegExp ? t.test(r) : this.equals(
    r,
    t
  ), {
    pass: n,
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${eh.name}`,
          "element",
          ""
        ),
        `Expected element ${o} have accessible description`,
        t,
        "Received",
        r
      );
    }
  };
}
const va = "aria-invalid", VQ = ["false"];
function nR(e, t) {
  var u;
  Ve(e, nR, this);
  const r = this.isNot ? "not to" : "to", a = this.isNot ? ".not.toHaveAccessibleErrorMessage" : ".toHaveAccessibleErrorMessage", n = e.getAttribute("aria-errormessage");
  if (!!n && /\s+/.test(n))
    return {
      pass: !1,
      message: () => pt(
        this,
        this.utils.matcherHint(a, "element"),
        "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
        "",
        "Received",
        `aria-errormessage="${n}"`
      )
    };
  const i = e.getAttribute(va);
  if (!e.hasAttribute(va) || VQ.includes(i))
    return {
      pass: !1,
      message: () => pt(
        this,
        this.utils.matcherHint(a, "element"),
        "Expected element to be marked as invalid with attribute",
        `${va}="${String(!0)}"`,
        "Received",
        e.hasAttribute("aria-invalid") ? `${va}="${e.getAttribute(va)}` : null
      )
    };
  const l = Zd(
    ((u = e.ownerDocument.getElementById(n)) == null ? void 0 : u.textContent) ?? ""
  );
  return {
    pass: t === void 0 ? !!l : t instanceof RegExp ? t.test(l) : this.equals(l, t),
    message: () => pt(
      this,
      this.utils.matcherHint(a, "element"),
      `Expected element ${r} have accessible error message`,
      t ?? "",
      "Received",
      l
    )
  };
}
function th(e, t) {
  Ve(e, th, this);
  const r = yi(e), a = arguments.length === 1;
  let n = !1;
  return a ? n = r !== "" : n = t instanceof RegExp ? t.test(r) : this.equals(r, t), {
    pass: n,
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${th.name}`,
          "element",
          ""
        ),
        `Expected element ${o} have accessible name`,
        t,
        "Received",
        r
      );
    }
  };
}
function jg(e, t, r) {
  return r === void 0 ? t : `${t}=${e(r)}`;
}
function zQ(e, t, r) {
  return r === void 0 ? `element.hasAttribute(${e(t)})` : `element.getAttribute(${e(t)}) === ${e(r)}`;
}
function aR(e, t, r) {
  Ve(e, aR, this);
  const a = r !== void 0, n = e.hasAttribute(t), o = e.getAttribute(t);
  return {
    pass: a ? n && this.equals(o, r) : n,
    message: () => {
      const i = this.isNot ? "not to" : "to", s = n ? jg(this.utils.stringify, t, o) : null, l = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveAttribute`,
        "element",
        this.utils.printExpected(t),
        {
          secondArgument: a ? this.utils.printExpected(r) : void 0,
          comment: zQ(
            this.utils.stringify,
            t,
            r
          )
        }
      );
      return pt(
        this,
        l,
        `Expected the element ${i} have attribute`,
        jg(this.utils.stringify, t, r),
        "Received",
        s
      );
    }
  };
}
function WQ(e) {
  const t = e.pop();
  let r, a;
  return typeof t == "object" ? (r = e, a = t) : (r = e.concat(t), a = { exact: !1 }), { expectedClassNames: r, options: a };
}
function Fg(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function Dg(e, t) {
  return e.every((r) => t.includes(r));
}
function oR(e, ...t) {
  Ve(e, oR, this);
  const { expectedClassNames: r, options: a } = WQ(t), n = Fg(e.getAttribute("class")), o = r.reduce(
    (i, s) => i.concat(Fg(s)),
    []
  );
  return a.exact ? {
    pass: Dg(o, n) && o.length === n.length,
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(o.join(" "))
        ),
        `Expected the element ${i} have EXACTLY defined classes`,
        o.join(" "),
        "Received",
        n.join(" ")
      );
    }
  } : o.length > 0 ? {
    pass: Dg(o, n),
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(o.join(" "))
        ),
        `Expected the element ${i} have class`,
        o.join(" "),
        "Received",
        n.join(" ")
      );
    }
  } : {
    pass: this.isNot ? n.length > 0 : !1,
    message: () => this.isNot ? pt(
      this,
      this.utils.matcherHint(".not.toHaveClass", "element", ""),
      "Expected the element to have classes",
      "(none)",
      "Received",
      n.join(" ")
    ) : [
      this.utils.matcherHint(".toHaveClass", "element"),
      "At least one expected class must be provided."
    ].join(`
`)
  };
}
function GQ(e, t) {
  const r = {}, a = e.createElement("div");
  return Object.keys(t).forEach((n) => {
    a.style[n] = t[n], r[n] = a.style[n];
  }), r;
}
function KQ(e, t) {
  return !!Object.keys(e).length && Object.entries(e).every(([r, a]) => {
    const n = r.startsWith("--"), o = [r];
    return n || o.push(r.toLowerCase()), o.some(
      (i) => t[i] === a || t.getPropertyValue(i) === a
    );
  });
}
function Bg(e) {
  return Object.keys(e).sort().map((t) => `${t}: ${e[t]};`).join(`
`);
}
function YQ(e, t, r) {
  const a = Array.from(r).filter((o) => t[o] !== void 0).reduce(
    (o, i) => Object.assign(o, { [i]: r.getPropertyValue(i) }),
    {}
  );
  return e(Bg(t), Bg(a)).replace(`${uz.red("+ Received")}
`, "");
}
function rh(e, t) {
  Ve(e, rh, this);
  const r = typeof t == "object" ? t : jQ(t, rh, this), { getComputedStyle: a } = e.ownerDocument.defaultView, n = GQ(e.ownerDocument, r), o = a(e);
  return {
    pass: KQ(n, o),
    message: () => {
      const i = `${this.isNot ? ".not" : ""}.toHaveStyle`;
      return [
        this.utils.matcherHint(i, "element", ""),
        YQ(this.utils.diff, n, o)
      ].join(`

`);
    }
  };
}
function iR(e) {
  return Ve(e, iR, this), {
    pass: e.ownerDocument.activeElement === e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveFocus`,
        "element",
        ""
      ),
      "",
      ...this.isNot ? [
        "Received element is focused:",
        `  ${this.utils.printReceived(e)}`
      ] : [
        "Expected element with focus:",
        `  ${this.utils.printExpected(e)}`,
        "Received element with focus:",
        `  ${this.utils.printReceived(
          e.ownerDocument.activeElement
        )}`
      ]
    ].join(`
`)
  };
}
function XQ(e) {
  const t = Kz(e.map((r) => r.type));
  if (t.length !== 1)
    throw new Error(
      "Multiple form elements with the same name must be of the same type"
    );
  switch (t[0]) {
    case "radio": {
      const r = e.find((a) => a.checked);
      return r ? r.value : void 0;
    }
    case "checkbox":
      return e.filter((r) => r.checked).map((r) => r.value);
    default:
      return e.map((r) => r.value);
  }
}
function JQ(e, t) {
  const r = [...e.querySelectorAll(`[name="${Xz(t)}"]`)];
  if (r.length !== 0)
    switch (r.length) {
      case 1:
        return XC(r[0]);
      default:
        return XQ(r);
    }
}
function QQ(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function ZQ(e) {
  return Array.from(e.elements).map((r) => r.name).reduce(
    (r, a) => ({
      ...r,
      [QQ(a)]: JQ(e, a)
    }),
    {}
  );
}
function sR(e, t) {
  if (Ve(e, sR, this), !e.elements)
    throw new Error("toHaveFormValues must be called on a form or a fieldset");
  const r = ZQ(e);
  return {
    pass: Object.entries(t).every(
      ([a, n]) => NC(r[a], n, JC)
    ),
    message: () => {
      const a = this.isNot ? "not to" : "to", n = `${this.isNot ? ".not" : ""}.toHaveFormValues`, o = Object.keys(r).filter((i) => t.hasOwnProperty(i)).reduce((i, s) => ({ ...i, [s]: r[s] }), {});
      return [
        this.utils.matcherHint(n, "element", ""),
        `Expected the element ${a} have form values`,
        this.utils.diff(t, o)
      ].join(`

`);
    }
  };
}
function eZ(e) {
  const { getComputedStyle: t } = e.ownerDocument.defaultView, { display: r, visibility: a, opacity: n } = t(e);
  return r !== "none" && a !== "hidden" && a !== "collapse" && n !== "0" && n !== 0;
}
function tZ(e, t) {
  let r;
  return t ? r = e.nodeName === "DETAILS" && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0 : r = e.nodeName === "DETAILS" ? e.hasAttribute("open") : !0, !e.hasAttribute("hidden") && r;
}
function lR(e, t) {
  return eZ(e) && tZ(e, t) && (!e.parentElement || lR(e.parentElement, e));
}
function uR(e) {
  Ve(e, uR, this);
  const t = e.ownerDocument === e.getRootNode({ composed: !0 }), r = t && lR(e);
  return {
    pass: r,
    message: () => {
      const a = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeVisible`,
          "element",
          ""
        ),
        "",
        `Received element ${a} visible${t ? "" : " (element is not in the document)"}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const rZ = [
  "fieldset",
  "input",
  "select",
  "optgroup",
  "option",
  "button",
  "textarea"
];
function nZ(e, t) {
  return Er(e) === "legend" && Er(t) === "fieldset" && e.isSameNode(
    Array.from(t.children).find((r) => Er(r) === "legend")
  );
}
function aZ(e, t) {
  return dR(t) && !nZ(e, t);
}
function oZ(e) {
  return e.includes("-");
}
function cR(e) {
  const t = Er(e);
  return rZ.includes(t) || oZ(t);
}
function dR(e) {
  return cR(e) && e.hasAttribute("disabled");
}
function fR(e) {
  const t = e.parentElement;
  return !!t && (aZ(e, t) || fR(t));
}
function pR(e) {
  return cR(e) && (dR(e) || fR(e));
}
function mR(e) {
  Ve(e, mR, this);
  const t = pR(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeDisabled`,
          "element",
          ""
        ),
        "",
        `Received element ${r} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function hR(e) {
  Ve(e, hR, this);
  const t = !pR(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeEnabled`,
          "element",
          ""
        ),
        "",
        `Received element ${r} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const iZ = ["select", "textarea"], sZ = ["input", "select", "textarea"], lZ = [
  "color",
  "hidden",
  "range",
  "submit",
  "image",
  "reset"
], uZ = [
  "combobox",
  "gridcell",
  "radiogroup",
  "spinbutton",
  "tree"
];
function cZ(e) {
  return iZ.includes(Er(e)) && e.hasAttribute("required");
}
function dZ(e) {
  return Er(e) === "input" && e.hasAttribute("required") && (e.hasAttribute("type") && !lZ.includes(e.getAttribute("type")) || !e.hasAttribute("type"));
}
function fZ(e) {
  return e.hasAttribute("aria-required") && e.getAttribute("aria-required") === "true" && (sZ.includes(Er(e)) || e.hasAttribute("role") && uZ.includes(e.getAttribute("role")));
}
function vR(e) {
  Ve(e, vR, this);
  const t = cZ(e) || dZ(e) || fZ(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeRequired`,
          "element",
          ""
        ),
        "",
        `Received element ${r} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const pZ = ["form", "input", "select", "textarea"];
function mZ(e) {
  return e.hasAttribute("aria-invalid") && e.getAttribute("aria-invalid") !== "false";
}
function hZ(e) {
  return pZ.includes(Er(e));
}
function yR(e) {
  const t = mZ(e);
  return hZ(e) ? t || !e.checkValidity() : t;
}
function bR(e) {
  Ve(e, bR, this);
  const t = yR(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeInvalid`,
          "element",
          ""
        ),
        "",
        `Received element ${r} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function gR(e) {
  Ve(e, gR, this);
  const t = !yR(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeValid`,
          "element",
          ""
        ),
        "",
        `Received element ${r} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function wR(e, t) {
  if (Ve(e, wR, this), e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type))
    throw new Error(
      "input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead"
    );
  const r = XC(e), a = t !== void 0;
  let n = t, o = r;
  return t == r && t !== r && (n = `${t} (${typeof t})`, o = `${r} (${typeof r})`), {
    pass: a ? NC(r, t, JC) : !!r,
    message: () => {
      const i = this.isNot ? "not to" : "to", s = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveValue`,
        "element",
        t
      );
      return pt(
        this,
        s,
        `Expected the element ${i} have value`,
        a ? n : "(any)",
        "Received",
        o
      );
    }
  };
}
function _R(e, t) {
  Ve(e, _R, this);
  const r = e.tagName.toLowerCase();
  if (!["select", "input", "textarea"].includes(r))
    throw new Error(
      ".toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead."
    );
  if (r === "input" && ["radio", "checkbox"].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`
    );
  const a = vZ(r, e), n = yZ(t), o = n.filter(
    (l) => a.some(
      (u) => l instanceof RegExp ? l.test(u) : this.equals(u, String(l))
    )
  ).length, i = o === a.length, s = o === n.length;
  return {
    pass: i && s,
    message: () => pt(
      this,
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveDisplayValue`,
        "element",
        ""
      ),
      `Expected element ${this.isNot ? "not " : ""}to have display value`,
      t,
      "Received",
      a
    )
  };
}
function vZ(e, t) {
  return e === "select" ? Array.from(t).filter((r) => r.selected).map((r) => r.textContent) : [t.value];
}
function yZ(e) {
  return e instanceof Array ? e : [e];
}
function $R(e) {
  Ve(e, $R, this);
  const t = () => e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type), r = () => ER(e.getAttribute("role")) && ["true", "false"].includes(e.getAttribute("aria-checked"));
  if (!t() && !r())
    return {
      pass: !1,
      message: () => `only inputs with type="checkbox" or type="radio" or elements with ${bZ()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`
    };
  const a = () => t() ? e.checked : e.getAttribute("aria-checked") === "true";
  return {
    pass: a(),
    message: () => {
      const n = a() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${n} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function bZ() {
  return LQ(
    gZ().map((e) => `role="${e}"`),
    { lastWordConnector: " or " }
  );
}
function gZ() {
  return nv.keys().filter(ER);
}
function ER(e) {
  var t;
  return ((t = nv.get(e)) == null ? void 0 : t.props["aria-checked"]) !== void 0;
}
function CR(e) {
  Ve(e, CR, this);
  const t = () => e.tagName.toLowerCase() === "input" && e.type === "checkbox", r = () => e.getAttribute("role") === "checkbox";
  if (!t() && !r())
    return {
      pass: !1,
      message: () => 'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead'
    };
  const a = () => {
    const n = e.getAttribute("aria-checked") === "mixed";
    return t() && e.indeterminate || n;
  };
  return {
    pass: a(),
    message: () => {
      const n = a() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBePartiallyChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${n} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function RR(e, t) {
  Qd(
    "toHaveDescription",
    "Please use toHaveAccessibleDescription."
  ), Ve(e, RR, this);
  const r = t !== void 0, n = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
  let o = "";
  if (n.length > 0) {
    const i = e.ownerDocument, s = n.map((l) => i.getElementById(l)).filter(Boolean);
    o = Zd(s.map((l) => l.textContent).join(" "));
  }
  return {
    pass: r ? t instanceof RegExp ? t.test(o) : this.equals(o, t) : !!o,
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveDescription`,
          "element",
          ""
        ),
        `Expected the element ${i} have description`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(o)
      );
    }
  };
}
function PR(e, t) {
  if (Qd("toHaveErrorMessage", "Please use toHaveAccessibleErrorMessage."), Ve(e, PR, this), !e.hasAttribute("aria-invalid") || e.getAttribute("aria-invalid") === "false") {
    const i = this.isNot ? ".not" : "";
    return {
      pass: !1,
      message: () => pt(
        this,
        this.utils.matcherHint(`${i}.toHaveErrorMessage`, "element", ""),
        "Expected the element to have invalid state indicated by",
        'aria-invalid="true"',
        "Received",
        e.hasAttribute("aria-invalid") ? `aria-invalid="${e.getAttribute("aria-invalid")}"` : this.utils.printReceived("")
      )
    };
  }
  const r = t !== void 0, n = (e.getAttribute("aria-errormessage") || "").split(/\s+/).filter(Boolean);
  let o = "";
  if (n.length > 0) {
    const i = e.ownerDocument, s = n.map((l) => i.getElementById(l)).filter(Boolean);
    o = Zd(
      s.map((l) => l.textContent).join(" ")
    );
  }
  return {
    pass: r ? t instanceof RegExp ? t.test(o) : this.equals(o, t) : !!o,
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return pt(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveErrorMessage`,
          "element",
          ""
        ),
        `Expected the element ${i} have error message`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(o)
      );
    }
  };
}
var wZ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toBeChecked: $R,
  toBeDisabled: mR,
  toBeEmpty: ZC,
  toBeEmptyDOMElement: eR,
  toBeEnabled: hR,
  toBeInTheDOM: Qm,
  toBeInTheDocument: QC,
  toBeInvalid: bR,
  toBePartiallyChecked: CR,
  toBeRequired: vR,
  toBeValid: gR,
  toBeVisible: uR,
  toContainElement: Zm,
  toContainHTML: tR,
  toHaveAccessibleDescription: eh,
  toHaveAccessibleErrorMessage: nR,
  toHaveAccessibleName: th,
  toHaveAttribute: aR,
  toHaveClass: oR,
  toHaveDescription: RR,
  toHaveDisplayValue: _R,
  toHaveErrorMessage: PR,
  toHaveFocus: iR,
  toHaveFormValues: sR,
  toHaveStyle: rh,
  toHaveTextContent: rR,
  toHaveValue: wR
});
expect.extend(wZ);
function Bt(e, t, r) {
  const a = typeof e;
  if (!r.includes(a))
    throw new TypeError(`${t} value must be ${r.join(" or ")}, received "${a}"`);
}
function xR(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function _Z(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function nh(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function $Z(e, t) {
  const r = typeof t == "function" ? t : (a) => t.add(a);
  Object.getOwnPropertyNames(e).forEach(r), Object.getOwnPropertySymbols(e).forEach(r);
}
function SR(e) {
  const t = /* @__PURE__ */ new Set();
  return _Z(e) ? [] : ($Z(e, t), Array.from(t));
}
const OR = { forceWritable: !1 };
function Lg(e, t = OR) {
  return ah(e, /* @__PURE__ */ new WeakMap(), t);
}
function ah(e, t, r = OR) {
  let a, n;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    for (n = Array(a = e.length), t.set(e, n); a--; )
      n[a] = ah(e[a], t, r);
    return n;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    n = Object.create(Object.getPrototypeOf(e)), t.set(e, n);
    const o = SR(e);
    for (const i of o) {
      const s = Object.getOwnPropertyDescriptor(e, i);
      if (!s)
        continue;
      const l = ah(e[i], t, r);
      "get" in s ? Object.defineProperty(n, i, {
        ...s,
        get() {
          return l;
        }
      }) : Object.defineProperty(n, i, {
        ...s,
        writable: r.forceWritable ? !0 : s.writable,
        value: l
      });
    }
    return n;
  }
  return e;
}
function EZ() {
}
function CZ(e, t, r = void 0) {
  const a = t.replace(/\[(\d+)\]/g, ".$1").split(".");
  let n = e;
  for (const o of a)
    if (n = Object(n)[o], n === void 0)
      return r;
  return n;
}
function Ug() {
  let e = null, t = null;
  const r = new Promise((a, n) => {
    e = a, t = n;
  });
  return r.resolve = e, r.reject = t, r;
}
var jr = {}, av = { exports: {} };
av.exports;
(function(e) {
  const r = (o = 0) => (i) => `\x1B[${38 + o};5;${i}m`, a = (o = 0) => (i, s, l) => `\x1B[${38 + o};2;${i};${s};${l}m`;
  function n() {
    const o = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [s, l] of Object.entries(i)) {
      for (const [u, c] of Object.entries(l))
        i[u] = {
          open: `\x1B[${c[0]}m`,
          close: `\x1B[${c[1]}m`
        }, l[u] = i[u], o.set(c[0], c[1]);
      Object.defineProperty(i, s, {
        value: l,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: o,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = a(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = a(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (s, l, u) => s === l && l === u ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(l / 255 * 5) + Math.round(u / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (s) => {
          const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
          if (!l)
            return [0, 0, 0];
          let { colorString: u } = l.groups;
          u.length === 3 && (u = u.split("").map((d) => d + d).join(""));
          const c = Number.parseInt(u, 16);
          return [
            c >> 16 & 255,
            c >> 8 & 255,
            c & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: n
  });
})(av);
var RZ = av.exports, Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
Zt.printIteratorEntries = xZ;
Zt.printIteratorValues = SZ;
Zt.printListItems = OZ;
Zt.printObjectProperties = TZ;
const PZ = (e, t) => {
  const r = Object.keys(e), a = t !== null ? r.sort(t) : r;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && a.push(n);
  }), a;
};
function xZ(e, t, r, a, n, o, i = ": ") {
  let s = "", l = 0, u = e.next();
  if (!u.done) {
    s += t.spacingOuter;
    const c = r + t.indent;
    for (; !u.done; ) {
      if (s += c, l++ === t.maxWidth) {
        s += "…";
        break;
      }
      const d = o(
        u.value[0],
        t,
        c,
        a,
        n
      ), f = o(
        u.value[1],
        t,
        c,
        a,
        n
      );
      s += d + i + f, u = e.next(), u.done ? t.min || (s += ",") : s += `,${t.spacingInner}`;
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function SZ(e, t, r, a, n, o) {
  let i = "", s = 0, l = e.next();
  if (!l.done) {
    i += t.spacingOuter;
    const u = r + t.indent;
    for (; !l.done; ) {
      if (i += u, s++ === t.maxWidth) {
        i += "…";
        break;
      }
      i += o(l.value, t, u, a, n), l = e.next(), l.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function OZ(e, t, r, a, n, o) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const s = r + t.indent;
    for (let l = 0; l < e.length; l++) {
      if (i += s, l === t.maxWidth) {
        i += "…";
        break;
      }
      l in e && (i += o(e[l], t, s, a, n)), l < e.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function TZ(e, t, r, a, n, o) {
  let i = "";
  const s = PZ(e, t.compareKeys);
  if (s.length) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (let u = 0; u < s.length; u++) {
      const c = s[u], d = o(c, t, l, a, n), f = o(e[c], t, l, a, n);
      i += `${l + d}: ${f}`, u < s.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var Cr = {};
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
Cr.test = Cr.serialize = Cr.default = void 0;
var Hg = Zt, _p = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const AZ = typeof _p == "function" && _p.for ? _p.for("jest.asymmetricMatcher") : 1267621, yo = " ", TR = (e, t, r, a, n, o) => {
  const i = e.toString();
  if (i === "ArrayContaining" || i === "ArrayNotContaining")
    return ++a > t.maxDepth ? `[${i}]` : `${i + yo}[${(0, Hg.printListItems)(
      e.sample,
      t,
      r,
      a,
      n,
      o
    )}]`;
  if (i === "ObjectContaining" || i === "ObjectNotContaining")
    return ++a > t.maxDepth ? `[${i}]` : `${i + yo}{${(0, Hg.printObjectProperties)(
      e.sample,
      t,
      r,
      a,
      n,
      o
    )}}`;
  if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
    return i + yo + o(e.sample, t, r, a, n);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return e.toAsymmetricMatcher();
};
Cr.serialize = TR;
const AR = (e) => e && e.$$typeof === AZ;
Cr.test = AR;
const MZ = {
  serialize: TR,
  test: AR
};
var qZ = MZ;
Cr.default = qZ;
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
Rr.test = Rr.serialize = Rr.default = void 0;
var Vg = Zt;
const IZ = " ", MR = ["DOMStringMap", "NamedNodeMap"], NZ = /^(HTML\w*Collection|NodeList)$/, kZ = (e) => MR.indexOf(e) !== -1 || NZ.test(e), qR = (e) => e && e.constructor && !!e.constructor.name && kZ(e.constructor.name);
Rr.test = qR;
const jZ = (e) => e.constructor.name === "NamedNodeMap", IR = (e, t, r, a, n, o) => {
  const i = e.constructor.name;
  return ++a > t.maxDepth ? `[${i}]` : (t.min ? "" : i + IZ) + (MR.indexOf(i) !== -1 ? `{${(0, Vg.printObjectProperties)(
    jZ(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : {
      ...e
    },
    t,
    r,
    a,
    n,
    o
  )}}` : `[${(0, Vg.printListItems)(
    Array.from(e),
    t,
    r,
    a,
    n,
    o
  )}]`);
};
Rr.serialize = IR;
const FZ = {
  serialize: IR,
  test: qR
};
var DZ = FZ;
Rr.default = DZ;
var Pr = {}, lt = {}, ov = {};
Object.defineProperty(ov, "__esModule", {
  value: !0
});
ov.default = BZ;
function BZ(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(lt, "__esModule", {
  value: !0
});
lt.printText = lt.printProps = lt.printElementAsLeaf = lt.printElement = lt.printComment = lt.printChildren = void 0;
var NR = LZ(ov);
function LZ(e) {
  return e && e.__esModule ? e : { default: e };
}
const UZ = (e, t, r, a, n, o, i) => {
  const s = a + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, n, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + a), d = `{${d}}`), `${r.spacingInner + a + l.prop.open + u + l.prop.close}=${l.value.open}${d}${l.value.close}`;
  }).join("");
};
lt.printProps = UZ;
const HZ = (e, t, r, a, n, o) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? kR(i, t) : o(i, t, r, a, n))
).join("");
lt.printChildren = HZ;
const kR = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, NR.default)(e) + r.close;
};
lt.printText = kR;
const VZ = (e, t) => {
  const r = t.colors.comment;
  return `${r.open}<!--${(0, NR.default)(e)}-->${r.close}`;
};
lt.printComment = VZ;
const zZ = (e, t, r, a, n) => {
  const o = a.colors.tag;
  return `${o.open}<${e}${t && o.close + t + a.spacingOuter + n + o.open}${r ? `>${o.close}${r}${a.spacingOuter}${n}${o.open}</${e}` : `${t && !a.min ? "" : " "}/`}>${o.close}`;
};
lt.printElement = zZ;
const WZ = (e, t) => {
  const r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
};
lt.printElementAsLeaf = WZ;
Object.defineProperty(Pr, "__esModule", {
  value: !0
});
Pr.test = Pr.serialize = Pr.default = void 0;
var _n = lt;
const GZ = 1, jR = 3, FR = 8, DR = 11, KZ = /^((HTML|SVG)\w*)?Element$/, YZ = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, XZ = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: a } = e, n = typeof a == "string" && a.includes("-") || YZ(e);
  return r === GZ && (KZ.test(t) || n) || r === jR && t === "Text" || r === FR && t === "Comment" || r === DR && t === "DocumentFragment";
}, BR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && XZ(e);
};
Pr.test = BR;
function JZ(e) {
  return e.nodeType === jR;
}
function QZ(e) {
  return e.nodeType === FR;
}
function $p(e) {
  return e.nodeType === DR;
}
const LR = (e, t, r, a, n, o) => {
  if (JZ(e))
    return (0, _n.printText)(e.data, t);
  if (QZ(e))
    return (0, _n.printComment)(e.data, t);
  const i = $p(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++a > t.maxDepth ? (0, _n.printElementAsLeaf)(i, t) : (0, _n.printElement)(
    i,
    (0, _n.printProps)(
      $p(e) ? [] : Array.from(e.attributes, (s) => s.name).sort(),
      $p(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      r + t.indent,
      a,
      n,
      o
    ),
    (0, _n.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      r + t.indent,
      a,
      n,
      o
    ),
    t,
    r
  );
};
Pr.serialize = LR;
const ZZ = {
  serialize: LR,
  test: BR
};
var eee = ZZ;
Pr.default = eee;
var xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.test = xr.serialize = xr.default = void 0;
var La = Zt;
const tee = "@@__IMMUTABLE_ITERABLE__@@", ree = "@@__IMMUTABLE_LIST__@@", nee = "@@__IMMUTABLE_KEYED__@@", aee = "@@__IMMUTABLE_MAP__@@", zg = "@@__IMMUTABLE_ORDERED__@@", oee = "@@__IMMUTABLE_RECORD__@@", iee = "@@__IMMUTABLE_SEQ__@@", see = "@@__IMMUTABLE_SET__@@", lee = "@@__IMMUTABLE_STACK__@@", Ln = (e) => `Immutable.${e}`, ef = (e) => `[${e}]`, Ua = " ", Wg = "…", uee = (e, t, r, a, n, o, i) => ++a > t.maxDepth ? ef(Ln(i)) : `${Ln(i) + Ua}{${(0, La.printIteratorEntries)(
  e.entries(),
  t,
  r,
  a,
  n,
  o
)}}`;
function cee(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return {
          done: !1,
          value: [r, e.get(r)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const dee = (e, t, r, a, n, o) => {
  const i = Ln(e._name || "Record");
  return ++a > t.maxDepth ? ef(i) : `${i + Ua}{${(0, La.printIteratorEntries)(
    cee(e),
    t,
    r,
    a,
    n,
    o
  )}}`;
}, fee = (e, t, r, a, n, o) => {
  const i = Ln("Seq");
  return ++a > t.maxDepth ? ef(i) : e[nee] ? `${i + Ua}{${// from Immutable collection of entries or from ECMAScript object
  e._iter || e._object ? (0, La.printIteratorEntries)(
    e.entries(),
    t,
    r,
    a,
    n,
    o
  ) : Wg}}` : `${i + Ua}[${e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, La.printIteratorValues)(
    e.values(),
    t,
    r,
    a,
    n,
    o
  ) : Wg}]`;
}, Ep = (e, t, r, a, n, o, i) => ++a > t.maxDepth ? ef(Ln(i)) : `${Ln(i) + Ua}[${(0, La.printIteratorValues)(
  e.values(),
  t,
  r,
  a,
  n,
  o
)}]`, UR = (e, t, r, a, n, o) => e[aee] ? uee(
  e,
  t,
  r,
  a,
  n,
  o,
  e[zg] ? "OrderedMap" : "Map"
) : e[ree] ? Ep(
  e,
  t,
  r,
  a,
  n,
  o,
  "List"
) : e[see] ? Ep(
  e,
  t,
  r,
  a,
  n,
  o,
  e[zg] ? "OrderedSet" : "Set"
) : e[lee] ? Ep(
  e,
  t,
  r,
  a,
  n,
  o,
  "Stack"
) : e[iee] ? fee(e, t, r, a, n, o) : dee(e, t, r, a, n, o);
xr.serialize = UR;
const HR = (e) => e && (e[tee] === !0 || e[oee] === !0);
xr.test = HR;
const pee = {
  serialize: UR,
  test: HR
};
var mee = pee;
xr.default = mee;
var Sr = {}, oh = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function hee() {
  return Gg || (Gg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, b = !1, y = !1, h = !1, $ = !1, A;
    A = Symbol.for("react.module.reference");
    function S(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === n || $ || B === a || B === u || B === c || h || B === p || v || b || y || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === d || B.$$typeof === o || B.$$typeof === i || B.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === A || B.getModuleId !== void 0));
    }
    function T(B) {
      if (typeof B == "object" && B !== null) {
        var Oe = B.$$typeof;
        switch (Oe) {
          case e:
            var le = B.type;
            switch (le) {
              case r:
              case n:
              case a:
              case u:
              case c:
                return le;
              default:
                var Ie = le && le.$$typeof;
                switch (Ie) {
                  case s:
                  case i:
                  case l:
                  case f:
                  case d:
                  case o:
                    return Ie;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var E = i, M = o, L = e, ie = l, J = r, fe = f, de = d, G = t, ae = n, xe = a, ve = u, $e = c, Te = !1, g = !1;
    function q(B) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(B) {
      return g || (g = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(B) {
      return T(B) === i;
    }
    function j(B) {
      return T(B) === o;
    }
    function H(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function F(B) {
      return T(B) === l;
    }
    function k(B) {
      return T(B) === r;
    }
    function Q(B) {
      return T(B) === f;
    }
    function oe(B) {
      return T(B) === d;
    }
    function he(B) {
      return T(B) === t;
    }
    function we(B) {
      return T(B) === n;
    }
    function K(B) {
      return T(B) === a;
    }
    function se(B) {
      return T(B) === u;
    }
    function be(B) {
      return T(B) === c;
    }
    Ne.ContextConsumer = E, Ne.ContextProvider = M, Ne.Element = L, Ne.ForwardRef = ie, Ne.Fragment = J, Ne.Lazy = fe, Ne.Memo = de, Ne.Portal = G, Ne.Profiler = ae, Ne.StrictMode = xe, Ne.Suspense = ve, Ne.SuspenseList = $e, Ne.isAsyncMode = q, Ne.isConcurrentMode = R, Ne.isContextConsumer = x, Ne.isContextProvider = j, Ne.isElement = H, Ne.isForwardRef = F, Ne.isFragment = k, Ne.isLazy = Q, Ne.isMemo = oe, Ne.isPortal = he, Ne.isProfiler = we, Ne.isStrictMode = K, Ne.isSuspense = se, Ne.isSuspenseList = be, Ne.isValidElementType = S, Ne.typeOf = T;
  }()), Ne;
}
var ke = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg;
function vee() {
  if (Kg)
    return ke;
  Kg = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var h = y.$$typeof;
      switch (h) {
        case e:
          switch (y = y.type, y) {
            case r:
            case n:
            case a:
            case u:
            case c:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case i:
                case l:
                case f:
                case d:
                case o:
                  return y;
                default:
                  return h;
              }
          }
        case t:
          return h;
      }
    }
  }
  return ke.ContextConsumer = i, ke.ContextProvider = o, ke.Element = e, ke.ForwardRef = l, ke.Fragment = r, ke.Lazy = f, ke.Memo = d, ke.Portal = t, ke.Profiler = n, ke.StrictMode = a, ke.Suspense = u, ke.SuspenseList = c, ke.isAsyncMode = function() {
    return !1;
  }, ke.isConcurrentMode = function() {
    return !1;
  }, ke.isContextConsumer = function(y) {
    return b(y) === i;
  }, ke.isContextProvider = function(y) {
    return b(y) === o;
  }, ke.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, ke.isForwardRef = function(y) {
    return b(y) === l;
  }, ke.isFragment = function(y) {
    return b(y) === r;
  }, ke.isLazy = function(y) {
    return b(y) === f;
  }, ke.isMemo = function(y) {
    return b(y) === d;
  }, ke.isPortal = function(y) {
    return b(y) === t;
  }, ke.isProfiler = function(y) {
    return b(y) === n;
  }, ke.isStrictMode = function(y) {
    return b(y) === a;
  }, ke.isSuspense = function(y) {
    return b(y) === u;
  }, ke.isSuspenseList = function(y) {
    return b(y) === c;
  }, ke.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === n || y === a || y === u || y === c || y === p || typeof y == "object" && y !== null && (y.$$typeof === f || y.$$typeof === d || y.$$typeof === o || y.$$typeof === i || y.$$typeof === l || y.$$typeof === v || y.getModuleId !== void 0);
  }, ke.typeOf = b, ke;
}
process.env.NODE_ENV === "production" ? oh.exports = vee() : oh.exports = hee();
var yee = oh.exports;
Object.defineProperty(Sr, "__esModule", {
  value: !0
});
Sr.test = Sr.serialize = Sr.default = void 0;
var Yr = bee(yee), bo = lt;
function VR(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (VR = function(a) {
    return a ? r : t;
  })(e);
}
function bee(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = VR(t);
  if (r && r.has(e))
    return r.get(e);
  var a = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o];
    }
  return a.default = e, r && r.set(e, a), a;
}
const zR = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  zR(r, t);
}) : e != null && e !== !1 && t.push(e), t), Yg = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Yr.isFragment(e))
    return "React.Fragment";
  if (Yr.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Yr.isContextProvider(e))
      return "Context.Provider";
    if (Yr.isContextConsumer(e))
      return "Context.Consumer";
    if (Yr.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? `ForwardRef(${r})` : "ForwardRef";
    }
    if (Yr.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? `Memo(${r})` : "Memo";
    }
  }
  return "UNDEFINED";
}, gee = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, WR = (e, t, r, a, n, o) => ++a > t.maxDepth ? (0, bo.printElementAsLeaf)(Yg(e), t) : (0, bo.printElement)(
  Yg(e),
  (0, bo.printProps)(
    gee(e),
    e.props,
    t,
    r + t.indent,
    a,
    n,
    o
  ),
  (0, bo.printChildren)(
    zR(e.props.children),
    t,
    r + t.indent,
    a,
    n,
    o
  ),
  t,
  r
);
Sr.serialize = WR;
const GR = (e) => e != null && Yr.isElement(e);
Sr.test = GR;
const wee = {
  serialize: WR,
  test: GR
};
var _ee = wee;
Sr.default = _ee;
var Or = {};
Object.defineProperty(Or, "__esModule", {
  value: !0
});
Or.test = Or.serialize = Or.default = void 0;
var go = lt, Cp = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const $ee = typeof Cp == "function" && Cp.for ? Cp.for("react.test.json") : 245830487, Eee = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, KR = (e, t, r, a, n, o) => ++a > t.maxDepth ? (0, go.printElementAsLeaf)(e.type, t) : (0, go.printElement)(
  e.type,
  e.props ? (0, go.printProps)(
    Eee(e),
    e.props,
    t,
    r + t.indent,
    a,
    n,
    o
  ) : "",
  e.children ? (0, go.printChildren)(
    e.children,
    t,
    r + t.indent,
    a,
    n,
    o
  ) : "",
  t,
  r
);
Or.serialize = KR;
const YR = (e) => e && e.$$typeof === $ee;
Or.test = YR;
const Cee = {
  serialize: KR,
  test: YR
};
var Ree = Cee;
Or.default = Ree;
Object.defineProperty(jr, "__esModule", {
  value: !0
});
jr.default = jr.DEFAULT_OPTIONS = void 0;
var Ut = jr.format = i1, iv = jr.plugins = void 0, Pee = cn(RZ), ya = Zt, xee = cn(
  Cr
), See = cn(Rr), Oee = cn(Pr), Tee = cn(xr), Aee = cn(Sr), Mee = cn(
  Or
);
function cn(e) {
  return e && e.__esModule ? e : { default: e };
}
const XR = Object.prototype.toString, qee = Date.prototype.toISOString, Iee = Error.prototype.toString, Xg = RegExp.prototype.toString, Rp = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", Nee = (e) => typeof window < "u" && e === window, kee = /^Symbol\((.*)\)(.*)$/, jee = /\n/gi;
let JR = class extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
};
function Fee(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Dee(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Bee(e) {
  return `${e}n`;
}
function Jg(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function Qg(e) {
  return String(e).replace(kee, "Symbol($1)");
}
function Zg(e) {
  return `[${Iee.call(e)}]`;
}
function QR(e, t, r, a) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const n = typeof e;
  if (n === "number")
    return Dee(e);
  if (n === "bigint")
    return Bee(e);
  if (n === "string")
    return a ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (n === "function")
    return Jg(e, t);
  if (n === "symbol")
    return Qg(e);
  const o = XR.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? Jg(e, t) : o === "[object Symbol]" ? Qg(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : qee.call(e) : o === "[object Error]" ? Zg(e) : o === "[object RegExp]" ? r ? Xg.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Xg.call(e) : e instanceof Error ? Zg(e) : null;
}
function ZR(e, t, r, a, n, o) {
  if (n.indexOf(e) !== -1)
    return "[Circular]";
  n = n.slice(), n.push(e);
  const i = ++a > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !o)
    return pr(e.toJSON(), t, r, a, n, !0);
  const l = XR.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : `${s ? "" : "Arguments "}[${(0, ya.printListItems)(
    e,
    t,
    r,
    a,
    n,
    pr
  )}]` : Fee(l) ? i ? `[${e.constructor.name}]` : `${s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, ya.printListItems)(
    e,
    t,
    r,
    a,
    n,
    pr
  )}]` : l === "[object Map]" ? i ? "[Map]" : `Map {${(0, ya.printIteratorEntries)(
    e.entries(),
    t,
    r,
    a,
    n,
    pr,
    " => "
  )}}` : l === "[object Set]" ? i ? "[Set]" : `Set {${(0, ya.printIteratorValues)(
    e.values(),
    t,
    r,
    a,
    n,
    pr
  )}}` : i || Nee(e) ? `[${Rp(e)}]` : `${s || !t.printBasicPrototype && Rp(e) === "Object" ? "" : `${Rp(e)} `}{${(0, ya.printObjectProperties)(
    e,
    t,
    r,
    a,
    n,
    pr
  )}}`;
}
function Lee(e) {
  return e.serialize != null;
}
function e1(e, t, r, a, n, o) {
  let i;
  try {
    i = Lee(e) ? e.serialize(t, r, a, n, o, pr) : e.print(
      t,
      (s) => pr(s, r, a, n, o),
      (s) => {
        const l = a + r.indent;
        return l + s.replace(jee, `
${l}`);
      },
      {
        edgeSpacing: r.spacingOuter,
        min: r.min,
        spacing: r.spacingInner
      },
      r.colors
    );
  } catch (s) {
    throw new JR(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function t1(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (a) {
      throw new JR(a.message, a.stack);
    }
  return null;
}
function pr(e, t, r, a, n, o) {
  const i = t1(t.plugins, e);
  if (i !== null)
    return e1(i, e, t, r, a, n);
  const s = QR(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : ZR(
    e,
    t,
    r,
    a,
    n,
    o
  );
}
const sv = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, r1 = Object.keys(sv), Uee = (e) => e, _t = Uee({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: sv
});
jr.DEFAULT_OPTIONS = _t;
function Hee(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Object.prototype.hasOwnProperty.call(_t, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const Vee = (e) => r1.reduce((t, r) => {
  const a = e.theme && e.theme[r] !== void 0 ? e.theme[r] : sv[r], n = a && Pee.default[a];
  if (n && typeof n.close == "string" && typeof n.open == "string")
    t[r] = n;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), zee = () => r1.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), n1 = (e) => (e == null ? void 0 : e.printFunctionName) ?? _t.printFunctionName, a1 = (e) => (e == null ? void 0 : e.escapeRegex) ?? _t.escapeRegex, o1 = (e) => (e == null ? void 0 : e.escapeString) ?? _t.escapeString, ew = (e) => ({
  callToJSON: (e == null ? void 0 : e.callToJSON) ?? _t.callToJSON,
  colors: e != null && e.highlight ? Vee(e) : zee(),
  compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : _t.compareKeys,
  escapeRegex: a1(e),
  escapeString: o1(e),
  indent: e != null && e.min ? "" : Wee((e == null ? void 0 : e.indent) ?? _t.indent),
  maxDepth: (e == null ? void 0 : e.maxDepth) ?? _t.maxDepth,
  maxWidth: (e == null ? void 0 : e.maxWidth) ?? _t.maxWidth,
  min: (e == null ? void 0 : e.min) ?? _t.min,
  plugins: (e == null ? void 0 : e.plugins) ?? _t.plugins,
  printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
  printFunctionName: n1(e),
  spacingInner: e != null && e.min ? " " : `
`,
  spacingOuter: e != null && e.min ? "" : `
`
});
function Wee(e) {
  return new Array(e + 1).join(" ");
}
function i1(e, t) {
  if (t && (Hee(t), t.plugins)) {
    const a = t1(t.plugins, e);
    if (a !== null)
      return e1(a, e, ew(t), "", 0, []);
  }
  const r = QR(
    e,
    n1(t),
    a1(t),
    o1(t)
  );
  return r !== null ? r : ZR(e, ew(t), "", 0, []);
}
const Gee = {
  AsymmetricMatcher: xee.default,
  DOMCollection: See.default,
  DOMElement: Oee.default,
  Immutable: Tee.default,
  ReactElement: Aee.default,
  ReactTestComponent: Mee.default
};
iv = jr.plugins = Gee;
var Kee = i1;
jr.default = Kee;
var ih = { exports: {} };
(function(e, t) {
  (function(r, a) {
    a(t);
  })(yt, function(r) {
    function a(_) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(C) {
        return typeof C;
      } : a = function(C) {
        return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
      }, a(_);
    }
    function n(_, C) {
      return o(_) || i(_, C) || s(_, C) || u();
    }
    function o(_) {
      if (Array.isArray(_))
        return _;
    }
    function i(_, C) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(_)))) {
        var U = [], te = !0, ne = !1, ye = void 0;
        try {
          for (var Pe = _[Symbol.iterator](), qe; !(te = (qe = Pe.next()).done) && (U.push(qe.value), !(C && U.length === C)); te = !0)
            ;
        } catch (Je) {
          ne = !0, ye = Je;
        } finally {
          try {
            !te && Pe.return != null && Pe.return();
          } finally {
            if (ne)
              throw ye;
          }
        }
        return U;
      }
    }
    function s(_, C) {
      if (_) {
        if (typeof _ == "string")
          return l(_, C);
        var U = Object.prototype.toString.call(_).slice(8, -1);
        if (U === "Object" && _.constructor && (U = _.constructor.name), U === "Map" || U === "Set")
          return Array.from(_);
        if (U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))
          return l(_, C);
      }
    }
    function l(_, C) {
      (C == null || C > _.length) && (C = _.length);
      for (var U = 0, te = new Array(C); U < C; U++)
        te[U] = _[U];
      return te;
    }
    function u() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var c = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    }, d = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    }, f = "…";
    function p(_, C) {
      var U = c[d[C]] || c[C];
      return U ? "\x1B[".concat(U[0], "m").concat(String(_), "\x1B[").concat(U[1], "m") : String(_);
    }
    function v() {
      var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, C = _.showHidden, U = C === void 0 ? !1 : C, te = _.depth, ne = te === void 0 ? 2 : te, ye = _.colors, Pe = ye === void 0 ? !1 : ye, qe = _.customInspect, Je = qe === void 0 ? !0 : qe, Ke = _.showProxy, ht = Ke === void 0 ? !1 : Ke, Dt = _.maxArrayLength, sa = Dt === void 0 ? 1 / 0 : Dt, tr = _.breakLength, rr = tr === void 0 ? 1 / 0 : tr, zr = _.seen, df = zr === void 0 ? [] : zr, la = _.truncate, ff = la === void 0 ? 1 / 0 : la, oo = _.stylize, pf = oo === void 0 ? String : oo, ua = {
        showHidden: !!U,
        depth: Number(ne),
        colors: !!Pe,
        customInspect: !!Je,
        showProxy: !!ht,
        maxArrayLength: Number(sa),
        breakLength: Number(rr),
        truncate: Number(ff),
        seen: df,
        stylize: pf
      };
      return ua.colors && (ua.stylize = p), ua;
    }
    function b(_, C) {
      var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f;
      _ = String(_);
      var te = U.length, ne = _.length;
      return te > C && ne > te ? U : ne > C && ne > te ? "".concat(_.slice(0, C - te)).concat(U) : _;
    }
    function y(_, C, U) {
      var te = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
      U = U || C.inspect;
      var ne = _.length;
      if (ne === 0)
        return "";
      for (var ye = C.truncate, Pe = "", qe = "", Je = "", Ke = 0; Ke < ne; Ke += 1) {
        var ht = Ke + 1 === _.length, Dt = Ke + 2 === _.length;
        Je = "".concat(f, "(").concat(_.length - Ke, ")");
        var sa = _[Ke];
        C.truncate = ye - Pe.length - (ht ? 0 : te.length);
        var tr = qe || U(sa, C) + (ht ? "" : te), rr = Pe.length + tr.length, zr = rr + Je.length;
        if (ht && rr > ye && Pe.length + Je.length <= ye || !ht && !Dt && zr > ye || (qe = ht ? "" : U(_[Ke + 1], C) + (Dt ? "" : te), !ht && Dt && zr > ye && rr + qe.length > ye))
          break;
        if (Pe += tr, !ht && !Dt && rr + qe.length >= ye) {
          Je = "".concat(f, "(").concat(_.length - Ke - 1, ")");
          break;
        }
        Je = "";
      }
      return "".concat(Pe).concat(Je);
    }
    function h(_) {
      return _.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? _ : JSON.stringify(_).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    }
    function $(_, C) {
      var U = n(_, 2), te = U[0], ne = U[1];
      return C.truncate -= 2, typeof te == "string" ? te = h(te) : typeof te != "number" && (te = "[".concat(C.inspect(te, C), "]")), C.truncate -= te.length, ne = C.inspect(ne, C), "".concat(te, ": ").concat(ne);
    }
    function A(_, C) {
      var U = Object.keys(_).slice(_.length);
      if (!_.length && !U.length)
        return "[]";
      C.truncate -= 4;
      var te = y(_, C);
      C.truncate -= te.length;
      var ne = "";
      return U.length && (ne = y(U.map(function(ye) {
        return [ye, _[ye]];
      }), C, $)), "[ ".concat(te).concat(ne ? ", ".concat(ne) : "", " ]");
    }
    var S = Function.prototype.toString, T = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, E = 512;
    function M(_) {
      if (typeof _ != "function")
        return null;
      var C = "";
      if (typeof Function.prototype.name > "u" && typeof _.name > "u") {
        var U = S.call(_);
        if (U.indexOf("(") > E)
          return C;
        var te = U.match(T);
        te && (C = te[1]);
      } else
        C = _.name;
      return C;
    }
    var L = M, ie = function(C) {
      return typeof Buffer == "function" && C instanceof Buffer ? "Buffer" : C[Symbol.toStringTag] ? C[Symbol.toStringTag] : L(C.constructor);
    };
    function J(_, C) {
      var U = ie(_);
      C.truncate -= U.length + 4;
      var te = Object.keys(_).slice(_.length);
      if (!_.length && !te.length)
        return "".concat(U, "[]");
      for (var ne = "", ye = 0; ye < _.length; ye++) {
        var Pe = "".concat(C.stylize(b(_[ye], C.truncate), "number")).concat(ye === _.length - 1 ? "" : ", ");
        if (C.truncate -= Pe.length, _[ye] !== _.length && C.truncate <= 3) {
          ne += "".concat(f, "(").concat(_.length - _[ye] + 1, ")");
          break;
        }
        ne += Pe;
      }
      var qe = "";
      return te.length && (qe = y(te.map(function(Je) {
        return [Je, _[Je]];
      }), C, $)), "".concat(U, "[ ").concat(ne).concat(qe ? ", ".concat(qe) : "", " ]");
    }
    function fe(_, C) {
      var U = _.toJSON();
      if (U === null)
        return "Invalid Date";
      var te = U.split("T"), ne = te[0];
      return C.stylize("".concat(ne, "T").concat(b(te[1], C.truncate - ne.length - 1)), "date");
    }
    function de(_, C) {
      var U = L(_);
      return U ? C.stylize("[Function ".concat(b(U, C.truncate - 11), "]"), "special") : C.stylize("[Function]", "special");
    }
    function G(_, C) {
      var U = n(_, 2), te = U[0], ne = U[1];
      return C.truncate -= 4, te = C.inspect(te, C), C.truncate -= te.length, ne = C.inspect(ne, C), "".concat(te, " => ").concat(ne);
    }
    function ae(_) {
      var C = [];
      return _.forEach(function(U, te) {
        C.push([te, U]);
      }), C;
    }
    function xe(_, C) {
      var U = _.size - 1;
      return U <= 0 ? "Map{}" : (C.truncate -= 7, "Map{ ".concat(y(ae(_), C, G), " }"));
    }
    var ve = Number.isNaN || function(_) {
      return _ !== _;
    };
    function $e(_, C) {
      return ve(_) ? C.stylize("NaN", "number") : _ === 1 / 0 ? C.stylize("Infinity", "number") : _ === -1 / 0 ? C.stylize("-Infinity", "number") : _ === 0 ? C.stylize(1 / _ === 1 / 0 ? "+0" : "-0", "number") : C.stylize(b(_, C.truncate), "number");
    }
    function Te(_, C) {
      var U = b(_.toString(), C.truncate - 1);
      return U !== f && (U += "n"), C.stylize(U, "bigint");
    }
    function g(_, C) {
      var U = _.toString().split("/")[2], te = C.truncate - (2 + U.length), ne = _.source;
      return C.stylize("/".concat(b(ne, te), "/").concat(U), "regexp");
    }
    function q(_) {
      var C = [];
      return _.forEach(function(U) {
        C.push(U);
      }), C;
    }
    function R(_, C) {
      return _.size === 0 ? "Set{}" : (C.truncate -= 7, "Set{ ".concat(y(q(_), C), " }"));
    }
    var x = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), j = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    }, H = 16, F = 4;
    function k(_) {
      return j[_] || "\\u".concat("0000".concat(_.charCodeAt(0).toString(H)).slice(-F));
    }
    function Q(_, C) {
      return x.test(_) && (_ = _.replace(x, k)), C.stylize("'".concat(b(_, C.truncate - 2), "'"), "string");
    }
    function oe(_) {
      return "description" in Symbol.prototype ? _.description ? "Symbol(".concat(_.description, ")") : "Symbol()" : _.toString();
    }
    var he = function() {
      return "Promise{…}";
    };
    try {
      var we = process.binding("util"), K = we.getPromiseDetails, se = we.kPending, be = we.kRejected;
      Array.isArray(K(Promise.resolve())) && (he = function(C, U) {
        var te = K(C), ne = n(te, 2), ye = ne[0], Pe = ne[1];
        return ye === se ? "Promise{<pending>}" : "Promise".concat(ye === be ? "!" : "", "{").concat(U.inspect(Pe, U), "}");
      });
    } catch {
    }
    var B = he;
    function Oe(_, C) {
      var U = Object.getOwnPropertyNames(_), te = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_) : [];
      if (U.length === 0 && te.length === 0)
        return "{}";
      if (C.truncate -= 4, C.seen = C.seen || [], C.seen.indexOf(_) >= 0)
        return "[Circular]";
      C.seen.push(_);
      var ne = y(U.map(function(qe) {
        return [qe, _[qe]];
      }), C, $), ye = y(te.map(function(qe) {
        return [qe, _[qe]];
      }), C, $);
      C.seen.pop();
      var Pe = "";
      return ne && ye && (Pe = ", "), "{ ".concat(ne).concat(Pe).concat(ye, " }");
    }
    var le = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
    function Ie(_, C) {
      var U = "";
      return le && le in _ && (U = _[le]), U = U || L(_.constructor), (!U || U === "_class") && (U = "<Anonymous Class>"), C.truncate -= U.length, "".concat(U).concat(Oe(_, C));
    }
    function mt(_, C) {
      return _.length === 0 ? "Arguments[]" : (C.truncate -= 13, "Arguments[ ".concat(y(_, C), " ]"));
    }
    var Ft = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
    function O(_, C) {
      var U = Object.getOwnPropertyNames(_).filter(function(Pe) {
        return Ft.indexOf(Pe) === -1;
      }), te = _.name;
      C.truncate -= te.length;
      var ne = "";
      typeof _.message == "string" ? ne = b(_.message, C.truncate) : U.unshift("message"), ne = ne ? ": ".concat(ne) : "", C.truncate -= ne.length + 5;
      var ye = y(U.map(function(Pe) {
        return [Pe, _[Pe]];
      }), C, $);
      return "".concat(te).concat(ne).concat(ye ? " { ".concat(ye, " }") : "");
    }
    function I(_, C) {
      var U = n(_, 2), te = U[0], ne = U[1];
      return C.truncate -= 3, ne ? "".concat(C.stylize(te, "yellow"), "=").concat(C.stylize('"'.concat(ne, '"'), "string")) : "".concat(C.stylize(te, "yellow"));
    }
    function W(_, C) {
      return y(_, C, X, `
`);
    }
    function X(_, C) {
      var U = _.getAttributeNames(), te = _.tagName.toLowerCase(), ne = C.stylize("<".concat(te), "special"), ye = C.stylize(">", "special"), Pe = C.stylize("</".concat(te, ">"), "special");
      C.truncate -= te.length * 2 + 5;
      var qe = "";
      U.length > 0 && (qe += " ", qe += y(U.map(function(ht) {
        return [ht, _.getAttribute(ht)];
      }), C, I, " ")), C.truncate -= qe.length;
      var Je = C.truncate, Ke = W(_.children, C);
      return Ke && Ke.length > Je && (Ke = "".concat(f, "(").concat(_.children.length, ")")), "".concat(ne).concat(qe).concat(ye).concat(Ke).concat(Pe);
    }
    var P = typeof Symbol == "function" && typeof Symbol.for == "function", pe = P ? Symbol.for("chai/inspect") : "@@chai/inspect", Be = !1;
    try {
      var Le = Z$;
      Be = Le.inspect ? Le.inspect.custom : !1;
    } catch {
      Be = !1;
    }
    function Ze() {
      this.key = "chai/loupe__" + Math.random() + Date.now();
    }
    Ze.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function(C) {
        return C[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function(C) {
        return this.key in C;
      },
      // eslint-disable-next-line object-shorthand
      set: function(C, U) {
        Object.isExtensible(C) && Object.defineProperty(C, this.key, {
          // eslint-disable-next-line object-shorthand
          value: U,
          configurable: !0
        });
      }
    };
    var ue = new (typeof WeakMap == "function" ? WeakMap : Ze)(), m = {}, D = {
      undefined: function(C, U) {
        return U.stylize("undefined", "undefined");
      },
      null: function(C, U) {
        return U.stylize(null, "null");
      },
      boolean: function(C, U) {
        return U.stylize(C, "boolean");
      },
      Boolean: function(C, U) {
        return U.stylize(C, "boolean");
      },
      number: $e,
      Number: $e,
      bigint: Te,
      BigInt: Te,
      string: Q,
      String: Q,
      function: de,
      Function: de,
      symbol: oe,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: oe,
      Array: A,
      Date: fe,
      Map: xe,
      Set: R,
      RegExp: g,
      Promise: B,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: function(C, U) {
        return U.stylize("WeakSet{…}", "special");
      },
      WeakMap: function(C, U) {
        return U.stylize("WeakMap{…}", "special");
      },
      Arguments: mt,
      Int8Array: J,
      Uint8Array: J,
      Uint8ClampedArray: J,
      Int16Array: J,
      Uint16Array: J,
      Int32Array: J,
      Uint32Array: J,
      Float32Array: J,
      Float64Array: J,
      Generator: function() {
        return "";
      },
      DataView: function() {
        return "";
      },
      ArrayBuffer: function() {
        return "";
      },
      Error: O,
      HTMLCollection: W,
      NodeList: W
    }, N = function(C, U, te) {
      return pe in C && typeof C[pe] == "function" ? C[pe](U) : Be && Be in C && typeof C[Be] == "function" ? C[Be](U.depth, U) : "inspect" in C && typeof C.inspect == "function" ? C.inspect(U.depth, U) : "constructor" in C && ue.has(C.constructor) ? ue.get(C.constructor)(C, U) : m[te] ? m[te](C, U) : "";
    }, re = Object.prototype.toString;
    function ce(_, C) {
      C = v(C), C.inspect = ce;
      var U = C, te = U.customInspect, ne = _ === null ? "null" : a(_);
      if (ne === "object" && (ne = re.call(_).slice(8, -1)), D[ne])
        return D[ne](_, C);
      if (te && _) {
        var ye = N(_, C, ne);
        if (ye)
          return typeof ye == "string" ? ye : ce(ye, C);
      }
      var Pe = _ ? Object.getPrototypeOf(_) : !1;
      return Pe === Object.prototype || Pe === null ? Oe(_, C) : _ && typeof HTMLElement == "function" && _ instanceof HTMLElement ? X(_, C) : "constructor" in _ ? _.constructor !== Object ? Ie(_, C) : Oe(_, C) : _ === Object(_) ? Oe(_, C) : C.stylize(String(_), ne);
    }
    function Ee(_, C) {
      return ue.has(_) ? !1 : (ue.set(_, C), !0);
    }
    function ge(_, C) {
      return _ in m ? !1 : (m[_] = C, !0);
    }
    var _e = pe;
    r.custom = _e, r.default = ce, r.inspect = ce, r.registerConstructor = Ee, r.registerStringTag = ge, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(ih, ih.exports);
var s1 = ih.exports;
const {
  AsymmetricMatcher: Yee,
  DOMCollection: Xee,
  DOMElement: Jee,
  Immutable: Qee,
  ReactElement: Zee,
  ReactTestComponent: ete
} = iv, tw = [
  ete,
  Zee,
  Jee,
  Xee,
  Qee,
  Yee
];
function Yt(e, t = 10, { maxLength: r, ...a } = {}) {
  const n = r ?? 1e4;
  let o;
  try {
    o = Ut(e, {
      maxDepth: t,
      escapeString: !1,
      // min: true,
      plugins: tw,
      ...a
    });
  } catch {
    o = Ut(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      // min: true,
      plugins: tw,
      ...a
    });
  }
  return o.length >= n && t > 1 ? Yt(e, Math.floor(t / 2)) : o;
}
const tte = /%[sdjifoOcj%]/g;
function l1(...e) {
  if (typeof e[0] != "string") {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Rn(e[i], { depth: 0, colors: !1, compact: 3 }));
    return o.join(" ");
  }
  const t = e.length;
  let r = 1;
  const a = e[0];
  let n = String(a).replace(tte, (o) => {
    if (o === "%%")
      return "%";
    if (r >= t)
      return o;
    switch (o) {
      case "%s": {
        const i = e[r++];
        return typeof i == "bigint" ? `${i.toString()}n` : typeof i == "number" && i === 0 && 1 / i < 0 ? "-0" : typeof i == "object" && i !== null ? Rn(i, { depth: 0, colors: !1, compact: 3 }) : String(i);
      }
      case "%d": {
        const i = e[r++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number(i).toString();
      }
      case "%i": {
        const i = e[r++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number.parseInt(String(i)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e[r++])).toString();
      case "%o":
        return Rn(e[r++], { showHidden: !0, showProxy: !0 });
      case "%O":
        return Rn(e[r++]);
      case "%c":
        return r++, "";
      case "%j":
        try {
          return JSON.stringify(e[r++]);
        } catch (i) {
          const s = i.message;
          if (
            // chromium
            s.includes("circular structure") || s.includes("cyclic structures") || s.includes("cyclic object")
          )
            return "[Circular]";
          throw i;
        }
      default:
        return o;
    }
  });
  for (let o = e[r]; r < t; o = e[++r])
    o === null || typeof o != "object" ? n += ` ${o}` : n += ` ${Rn(o)}`;
  return n;
}
function Rn(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), s1.inspect(e, t);
}
function rte(e, t = {}) {
  const r = t.truncate ?? 40, a = Rn(e, t), n = Object.prototype.toString.call(e);
  if (r && a.length >= r)
    if (n === "[object Function]") {
      const o = e;
      return !o.name || o.name === "" ? "[Function]" : `[Function: ${o.name}]`;
    } else {
      if (n === "[object Array]")
        return `[ Array(${e.length}) ]`;
      if (n === "[object Object]") {
        const o = Object.keys(e);
        return `{ Object (${o.length > 2 ? `${o.splice(0, 2).join(", ")}, ...` : o.join(", ")}) }`;
      } else
        return a;
    }
  return a;
}
const rw = Symbol("vitest:SAFE_TIMERS"), nte = Symbol("vitest:SAFE_COLORS"), ate = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
}, ote = Object.entries(ate);
function lv(e) {
  return String(e);
}
lv.open = "";
lv.close = "";
const ite = /* @__PURE__ */ ote.reduce((e, [t]) => (e[t] = lv, e), { isColorSupported: !1 });
function uv() {
  return globalThis[nte] || ite;
}
function tf() {
  const {
    setTimeout: e,
    setInterval: t,
    clearInterval: r,
    clearTimeout: a,
    setImmediate: n,
    clearImmediate: o
  } = globalThis[rw] || globalThis, {
    nextTick: i
  } = globalThis[rw] || globalThis.process || { nextTick: (s) => s() };
  return {
    nextTick: i,
    setTimeout: e,
    setInterval: t,
    clearInterval: r,
    clearTimeout: a,
    setImmediate: n,
    clearImmediate: o
  };
}
function ste(e) {
  const { message: t = "error", stackTraceLimit: r = 1 } = e || {}, a = Error.stackTraceLimit, n = Error.prepareStackTrace;
  Error.stackTraceLimit = r, Error.prepareStackTrace = (s) => s.stack;
  const i = new Error(t).stack || "";
  return Error.prepareStackTrace = n, Error.stackTraceLimit = a, i;
}
var u1 = {};
Object.defineProperty(u1, "__esModule", {
  value: !0
});
var nw = u1.default = dte;
const Oa = "diff-sequences", it = 0, Ha = (e, t, r, a, n) => {
  let o = 0;
  for (; e < t && r < a && n(e, r); )
    e += 1, r += 1, o += 1;
  return o;
}, Va = (e, t, r, a, n) => {
  let o = 0;
  for (; e <= t && r <= a && n(t, a); )
    t -= 1, a -= 1, o += 1;
  return o;
}, Pp = (e, t, r, a, n, o, i) => {
  let s = 0, l = -e, u = o[s], c = u;
  o[s] += Ha(
    u + 1,
    t,
    a + u - l + 1,
    r,
    n
  );
  const d = e < i ? e : i;
  for (s += 1, l += 2; s <= d; s += 1, l += 2) {
    if (s !== e && c < o[s])
      u = o[s];
    else if (u = c + 1, t <= u)
      return s - 1;
    c = o[s], o[s] = u + Ha(u + 1, t, a + u - l + 1, r, n);
  }
  return i;
}, aw = (e, t, r, a, n, o, i) => {
  let s = 0, l = e, u = o[s], c = u;
  o[s] -= Va(
    t,
    u - 1,
    r,
    a + u - l - 1,
    n
  );
  const d = e < i ? e : i;
  for (s += 1, l -= 2; s <= d; s += 1, l -= 2) {
    if (s !== e && o[s] < c)
      u = o[s];
    else if (u = c - 1, u < t)
      return s - 1;
    c = o[s], o[s] = u - Va(
      t,
      u - 1,
      r,
      a + u - l - 1,
      n
    );
  }
  return i;
}, lte = (e, t, r, a, n, o, i, s, l, u, c) => {
  const d = a - t, f = r - t, v = n - a - f, b = -v - (e - 1), y = -v + (e - 1);
  let h = it;
  const $ = e < s ? e : s;
  for (let A = 0, S = -e; A <= $; A += 1, S += 2) {
    const T = A === 0 || A !== e && h < i[A], E = T ? i[A] : h, M = T ? E : E + 1, L = d + M - S, ie = Ha(
      M + 1,
      r,
      L + 1,
      n,
      o
    ), J = M + ie;
    if (h = i[A], i[A] = J, b <= S && S <= y) {
      const fe = (e - 1 - (S + v)) / 2;
      if (fe <= u && l[fe] - 1 <= J) {
        const de = d + E - (T ? S + 1 : S - 1), G = Va(
          t,
          E,
          a,
          de,
          o
        ), ae = E - G, xe = de - G, ve = ae + 1, $e = xe + 1;
        c.nChangePreceding = e - 1, e - 1 === ve + $e - t - a ? (c.aEndPreceding = t, c.bEndPreceding = a) : (c.aEndPreceding = ve, c.bEndPreceding = $e), c.nCommonPreceding = G, G !== 0 && (c.aCommonPreceding = ve, c.bCommonPreceding = $e), c.nCommonFollowing = ie, ie !== 0 && (c.aCommonFollowing = M + 1, c.bCommonFollowing = L + 1);
        const Te = J + 1, g = L + ie + 1;
        return c.nChangeFollowing = e - 1, e - 1 === r + n - Te - g ? (c.aStartFollowing = r, c.bStartFollowing = n) : (c.aStartFollowing = Te, c.bStartFollowing = g), !0;
      }
    }
  }
  return !1;
}, ute = (e, t, r, a, n, o, i, s, l, u, c) => {
  const d = n - r, f = r - t, v = n - a - f, b = v - e, y = v + e;
  let h = it;
  const $ = e < u ? e : u;
  for (let A = 0, S = e; A <= $; A += 1, S -= 2) {
    const T = A === 0 || A !== e && l[A] < h, E = T ? l[A] : h, M = T ? E : E - 1, L = d + M - S, ie = Va(
      t,
      M - 1,
      a,
      L - 1,
      o
    ), J = M - ie;
    if (h = l[A], l[A] = J, b <= S && S <= y) {
      const fe = (e + (S - v)) / 2;
      if (fe <= s && J - 1 <= i[fe]) {
        const de = L - ie;
        if (c.nChangePreceding = e, e === J + de - t - a ? (c.aEndPreceding = t, c.bEndPreceding = a) : (c.aEndPreceding = J, c.bEndPreceding = de), c.nCommonPreceding = ie, ie !== 0 && (c.aCommonPreceding = J, c.bCommonPreceding = de), c.nChangeFollowing = e - 1, e === 1)
          c.nCommonFollowing = 0, c.aStartFollowing = r, c.bStartFollowing = n;
        else {
          const G = d + E - (T ? S - 1 : S + 1), ae = Ha(
            E,
            r,
            G,
            n,
            o
          );
          c.nCommonFollowing = ae, ae !== 0 && (c.aCommonFollowing = E, c.bCommonFollowing = G);
          const xe = E + ae, ve = G + ae;
          e - 1 === r + n - xe - ve ? (c.aStartFollowing = r, c.bStartFollowing = n) : (c.aStartFollowing = xe, c.bStartFollowing = ve);
        }
        return !0;
      }
    }
  }
  return !1;
}, cte = (e, t, r, a, n, o, i, s, l) => {
  const u = a - t, c = n - r, d = r - t, f = n - a, p = f - d;
  let v = d, b = d;
  if (i[0] = t - 1, s[0] = r, p % 2 === 0) {
    const y = (e || p) / 2, h = (d + f) / 2;
    for (let $ = 1; $ <= h; $ += 1)
      if (v = Pp($, r, n, u, o, i, v), $ < y)
        b = aw($, t, a, c, o, s, b);
      else if (
        // If a reverse path overlaps a forward path in the same diagonal,
        // return a division of the index intervals at the middle change.
        ute(
          $,
          t,
          r,
          a,
          n,
          o,
          i,
          v,
          s,
          b,
          l
        )
      )
        return;
  } else {
    const y = ((e || p) + 1) / 2, h = (d + f + 1) / 2;
    let $ = 1;
    for (v = Pp($, r, n, u, o, i, v), $ += 1; $ <= h; $ += 1)
      if (b = aw(
        $ - 1,
        t,
        a,
        c,
        o,
        s,
        b
      ), $ < y)
        v = Pp($, r, n, u, o, i, v);
      else if (
        // If a forward path overlaps a reverse path in the same diagonal,
        // return a division of the index intervals at the middle change.
        lte(
          $,
          t,
          r,
          a,
          n,
          o,
          i,
          v,
          s,
          b,
          l
        )
      )
        return;
  }
  throw new Error(
    `${Oa}: no overlap aStart=${t} aEnd=${r} bStart=${a} bEnd=${n}`
  );
}, sh = (e, t, r, a, n, o, i, s, l, u) => {
  if (n - a < r - t) {
    if (o = !o, o && i.length === 1) {
      const { foundSubsequence: J, isCommon: fe } = i[0];
      i[1] = {
        foundSubsequence: (de, G, ae) => {
          J(de, ae, G);
        },
        isCommon: (de, G) => fe(G, de)
      };
    }
    const L = t, ie = r;
    t = a, r = n, a = L, n = ie;
  }
  const { foundSubsequence: c, isCommon: d } = i[o ? 1 : 0];
  cte(
    e,
    t,
    r,
    a,
    n,
    d,
    s,
    l,
    u
  );
  const {
    nChangePreceding: f,
    aEndPreceding: p,
    bEndPreceding: v,
    nCommonPreceding: b,
    aCommonPreceding: y,
    bCommonPreceding: h,
    nCommonFollowing: $,
    aCommonFollowing: A,
    bCommonFollowing: S,
    nChangeFollowing: T,
    aStartFollowing: E,
    bStartFollowing: M
  } = u;
  t < p && a < v && sh(
    f,
    t,
    p,
    a,
    v,
    o,
    i,
    s,
    l,
    u
  ), b !== 0 && c(b, y, h), $ !== 0 && c($, A, S), E < r && M < n && sh(
    T,
    E,
    r,
    M,
    n,
    o,
    i,
    s,
    l,
    u
  );
}, ow = (e, t) => {
  if (typeof t != "number")
    throw new TypeError(`${Oa}: ${e} typeof ${typeof t} is not a number`);
  if (!Number.isSafeInteger(t))
    throw new RangeError(`${Oa}: ${e} value ${t} is not a safe integer`);
  if (t < 0)
    throw new RangeError(`${Oa}: ${e} value ${t} is a negative integer`);
}, iw = (e, t) => {
  const r = typeof t;
  if (r !== "function")
    throw new TypeError(`${Oa}: ${e} typeof ${r} is not a function`);
};
function dte(e, t, r, a) {
  ow("aLength", e), ow("bLength", t), iw("isCommon", r), iw("foundSubsequence", a);
  const n = Ha(0, e, 0, t, r);
  if (n !== 0 && a(n, 0, 0), e !== n || t !== n) {
    const o = n, i = n, s = Va(
      o,
      e - 1,
      i,
      t - 1,
      r
    ), l = e - s, u = t - s, c = n + s;
    e !== c && t !== c && sh(
      0,
      o,
      l,
      i,
      u,
      !1,
      [
        {
          foundSubsequence: a,
          isCommon: r
        }
      ],
      [it],
      [it],
      {
        aCommonFollowing: it,
        aCommonPreceding: it,
        aEndPreceding: it,
        aStartFollowing: it,
        bCommonFollowing: it,
        bCommonPreceding: it,
        bEndPreceding: it,
        bStartFollowing: it,
        nChangeFollowing: it,
        nChangePreceding: it,
        nCommonFollowing: it,
        nCommonPreceding: it
      }
    ), s !== 0 && a(s, l, u);
  }
}
function sw(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  if (Array.isArray(e))
    return "array";
  if (typeof e == "boolean")
    return "boolean";
  if (typeof e == "function")
    return "function";
  if (typeof e == "number")
    return "number";
  if (typeof e == "string")
    return "string";
  if (typeof e == "bigint")
    return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp)
        return "regexp";
      if (e.constructor === Map)
        return "map";
      if (e.constructor === Set)
        return "set";
      if (e.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
const Un = -1, Hn = 1, ko = 0;
class ba {
  constructor(t, r) {
    Me(this, 0);
    Me(this, 1);
    this[0] = t, this[1] = r;
  }
}
const c1 = "Compared values have no visual difference.", fte = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function pte(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function cv(e, t, r, a, n, o) {
  return e.length !== 0 ? r(
    `${a} ${pte(e, n)}`
  ) : a !== " " ? r(a) : t && o.length !== 0 ? r(`${a} ${o}`) : "";
}
function d1(e, t, {
  aColor: r,
  aIndicator: a,
  changeLineTrailingSpaceColor: n,
  emptyFirstOrLastLinePlaceholder: o
}) {
  return cv(
    e,
    t,
    r,
    a,
    n,
    o
  );
}
function f1(e, t, {
  bColor: r,
  bIndicator: a,
  changeLineTrailingSpaceColor: n,
  emptyFirstOrLastLinePlaceholder: o
}) {
  return cv(
    e,
    t,
    r,
    a,
    n,
    o
  );
}
function p1(e, t, {
  commonColor: r,
  commonIndicator: a,
  commonLineTrailingSpaceColor: n,
  emptyFirstOrLastLinePlaceholder: o
}) {
  return cv(
    e,
    t,
    r,
    a,
    n,
    o
  );
}
function lw(e, t, r, a, { patchColor: n }) {
  return n(
    `@@ -${e + 1},${t - e} +${r + 1},${a - r} @@`
  );
}
function mte(e, t) {
  const r = e.length, a = t.contextLines, n = a + a;
  let o = r, i = !1, s = 0, l = 0;
  for (; l !== r; ) {
    const S = l;
    for (; l !== r && e[l][0] === ko; )
      l += 1;
    if (S !== l)
      if (S === 0)
        l > a && (o -= l - a, i = !0);
      else if (l === r) {
        const T = l - S;
        T > a && (o -= T - a, i = !0);
      } else {
        const T = l - S;
        T > n && (o -= T - n, s += 1);
      }
    for (; l !== r && e[l][0] !== ko; )
      l += 1;
  }
  const u = s !== 0 || i;
  s !== 0 ? o += s + 1 : i && (o += 1);
  const c = o - 1, d = [];
  let f = 0;
  u && d.push("");
  let p = 0, v = 0, b = 0, y = 0;
  const h = (S) => {
    const T = d.length;
    d.push(p1(S, T === 0 || T === c, t)), b += 1, y += 1;
  }, $ = (S) => {
    const T = d.length;
    d.push(d1(S, T === 0 || T === c, t)), b += 1;
  }, A = (S) => {
    const T = d.length;
    d.push(f1(S, T === 0 || T === c, t)), y += 1;
  };
  for (l = 0; l !== r; ) {
    let S = l;
    for (; l !== r && e[l][0] === ko; )
      l += 1;
    if (S !== l)
      if (S === 0) {
        l > a && (S = l - a, p = S, v = S, b = p, y = v);
        for (let T = S; T !== l; T += 1)
          h(e[T][1]);
      } else if (l === r) {
        const T = l - S > a ? S + a : l;
        for (let E = S; E !== T; E += 1)
          h(e[E][1]);
      } else {
        const T = l - S;
        if (T > n) {
          const E = S + a;
          for (let L = S; L !== E; L += 1)
            h(e[L][1]);
          d[f] = lw(
            p,
            b,
            v,
            y,
            t
          ), f = d.length, d.push("");
          const M = T - n;
          p = b + M, v = y + M, b = p, y = v;
          for (let L = l - a; L !== l; L += 1)
            h(e[L][1]);
        } else
          for (let E = S; E !== l; E += 1)
            h(e[E][1]);
      }
    for (; l !== r && e[l][0] === Un; )
      $(e[l][1]), l += 1;
    for (; l !== r && e[l][0] === Hn; )
      A(e[l][1]), l += 1;
  }
  return u && (d[f] = lw(p, b, v, y, t)), d.join(`
`);
}
function hte(e, t) {
  return e.map((r, a, n) => {
    const o = r[1], i = a === 0 || a === n.length - 1;
    switch (r[0]) {
      case Un:
        return d1(o, i, t);
      case Hn:
        return f1(o, i, t);
      default:
        return p1(o, i, t);
    }
  }).join(`
`);
}
const uw = (e) => e, m1 = 5;
function vte() {
  const e = uv();
  return {
    aAnnotation: "Expected",
    aColor: e.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: e.red,
    bIndicator: "+",
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: uw,
    commonColor: e.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: uw,
    compareKeys: void 0,
    contextLines: m1,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow
  };
}
function yte(e) {
  return e && typeof e == "function" ? e : void 0;
}
function bte(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : m1;
}
function ro(e = {}) {
  return {
    ...vte(),
    ...e,
    compareKeys: yte(e.compareKeys),
    contextLines: bte(e.contextLines)
  };
}
function Sn(e) {
  return e.length === 1 && e[0].length === 0;
}
function gte(e) {
  let t = 0, r = 0;
  return e.forEach((a) => {
    switch (a[0]) {
      case Un:
        t += 1;
        break;
      case Hn:
        r += 1;
        break;
    }
  }), { a: t, b: r };
}
function wte({
  aAnnotation: e,
  aColor: t,
  aIndicator: r,
  bAnnotation: a,
  bColor: n,
  bIndicator: o,
  includeChangeCounts: i,
  omitAnnotationLines: s
}, l) {
  if (s)
    return "";
  let u = "", c = "";
  if (i) {
    const p = String(l.a), v = String(l.b), b = a.length - e.length, y = " ".repeat(Math.max(0, b)), h = " ".repeat(Math.max(0, -b)), $ = v.length - p.length, A = " ".repeat(Math.max(0, $)), S = " ".repeat(Math.max(0, -$));
    u = `${y}  ${r} ${A}${p}`, c = `${h}  ${o} ${S}${v}`;
  }
  const d = `${r} ${e}${u}`, f = `${o} ${a}${c}`;
  return `${t(d)}
${n(f)}

`;
}
function h1(e, t) {
  return wte(t, gte(e)) + (t.expand ? hte(e, t) : mte(e, t));
}
function dv(e, t, r) {
  return h1(
    v1(
      Sn(e) ? [] : e,
      Sn(t) ? [] : t
    ),
    ro(r)
  );
}
function _te(e, t, r, a, n) {
  if (Sn(e) && Sn(r) && (e = [], r = []), Sn(t) && Sn(a) && (t = [], a = []), e.length !== r.length || t.length !== a.length)
    return dv(e, t, n);
  const o = v1(r, a);
  let i = 0, s = 0;
  return o.forEach((l) => {
    switch (l[0]) {
      case Un:
        l[1] = e[i], i += 1;
        break;
      case Hn:
        l[1] = t[s], s += 1;
        break;
      default:
        l[1] = t[s], i += 1, s += 1;
    }
  }), h1(o, ro(n));
}
function v1(e, t) {
  const r = e.length, a = t.length, n = (c, d) => e[c] === t[d], o = [];
  let i = 0, s = 0;
  const l = (c, d, f) => {
    for (; i !== d; i += 1)
      o.push(new ba(Un, e[i]));
    for (; s !== f; s += 1)
      o.push(new ba(Hn, t[s]));
    for (; c !== 0; c -= 1, i += 1, s += 1)
      o.push(new ba(ko, t[s]));
  };
  for ((nw.default || nw)(r, a, n, l); i !== r; i += 1)
    o.push(new ba(Un, e[i]));
  for (; s !== a; s += 1)
    o.push(new ba(Hn, t[s]));
  return o;
}
function lh(e, t) {
  const { commonColor: r } = ro(t);
  return r(e);
}
const {
  AsymmetricMatcher: $te,
  DOMCollection: Ete,
  DOMElement: Cte,
  Immutable: Rte,
  ReactElement: Pte,
  ReactTestComponent: xte
} = iv, y1 = [
  xte,
  Pte,
  Cte,
  Ete,
  Rte,
  $te
], uh = {
  plugins: y1
}, b1 = {
  callToJSON: !1,
  maxDepth: 10,
  plugins: y1
};
function za(e, t, r) {
  if (Object.is(e, t))
    return "";
  const a = sw(e);
  let n = a, o = !1;
  if (a === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function")
      return null;
    n = e.getExpectedType(), o = n === "string";
  }
  if (n !== sw(t)) {
    const { aAnnotation: i, aColor: s, aIndicator: l, bAnnotation: u, bColor: c, bIndicator: d } = ro(r), f = ch(b1, r), p = Ut(e, f), v = Ut(t, f), b = `${s(`${l} ${i}:`)} 
${p}`, y = `${c(`${d} ${u}:`)} 
${v}`;
    return `${b}

${y}`;
  }
  if (o)
    return null;
  switch (a) {
    case "string":
      return dv(e.split(`
`), t.split(`
`), r);
    case "boolean":
    case "number":
      return Ste(e, t, r);
    case "map":
      return xp(cw(e), cw(t), r);
    case "set":
      return xp(dw(e), dw(t), r);
    default:
      return xp(e, t, r);
  }
}
function Ste(e, t, r) {
  const a = Ut(e, uh), n = Ut(t, uh);
  return a === n ? "" : dv(a.split(`
`), n.split(`
`), r);
}
function cw(e) {
  return new Map(Array.from(e.entries()).sort());
}
function dw(e) {
  return new Set(Array.from(e.values()).sort());
}
function xp(e, t, r) {
  let a, n = !1;
  try {
    const i = ch(uh, r);
    a = fw(e, t, i, r);
  } catch {
    n = !0;
  }
  const o = lh(c1, r);
  if (a === void 0 || a === o) {
    const i = ch(b1, r);
    a = fw(e, t, i, r), a !== o && !n && (a = `${lh(
      fte,
      r
    )}

${a}`);
  }
  return a;
}
function ch(e, t) {
  const { compareKeys: r } = ro(t);
  return {
    ...e,
    compareKeys: r
  };
}
function fw(e, t, r, a) {
  const n = { ...r, indent: 0 }, o = Ut(e, n), i = Ut(t, n);
  if (o === i)
    return lh(c1, a);
  {
    const s = Ut(e, r), l = Ut(t, r);
    return _te(
      s.split(`
`),
      l.split(`
`),
      o.split(`
`),
      i.split(`
`),
      a
    );
  }
}
const Ote = "@@__IMMUTABLE_RECORD__@@", Tte = "@@__IMMUTABLE_ITERABLE__@@";
function Ate(e) {
  return e && (e[Tte] || e[Ote]);
}
const Mte = Object.getPrototypeOf({});
function pw(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function Ta(e, t = /* @__PURE__ */ new WeakMap()) {
  if (!e || typeof e == "string")
    return e;
  if (typeof e == "function")
    return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol")
    return e.toString();
  if (typeof e != "object")
    return e;
  if (Ate(e))
    return Ta(e.toJSON(), t);
  if (e instanceof Promise || e.constructor && e.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e instanceof Element)
    return e.tagName;
  if (typeof e.asymmetricMatch == "function")
    return `${e.toString()} ${l1(e.sample)}`;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    const r = new Array(e.length);
    return t.set(e, r), e.forEach((a, n) => {
      try {
        r[n] = Ta(a, t);
      } catch (o) {
        r[n] = pw(o);
      }
    }), r;
  } else {
    const r = /* @__PURE__ */ Object.create(null);
    t.set(e, r);
    let a = e;
    for (; a && a !== Mte; )
      Object.getOwnPropertyNames(a).forEach((n) => {
        if (!(n in r))
          try {
            r[n] = Ta(e[n], t);
          } catch (o) {
            delete r[n], r[n] = pw(o);
          }
      }), a = Object.getPrototypeOf(a);
    return r;
  }
}
function mw(e) {
  return e.replace(/__vite_ssr_import_\d+__\./g, "");
}
function qte(e, t) {
  if (!e || typeof e != "object")
    return { message: e };
  if (e.stack && (e.stackStr = String(e.stack)), e.name && (e.nameStr = String(e.name)), e.showDiff || e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0) {
    const r = Lg(e.actual, { forceWritable: !0 }), a = Lg(e.expected, { forceWritable: !0 }), { replacedActual: n, replacedExpected: o } = g1(r, a);
    e.diff = za(o, n, { ...t, ...e.diffOptions });
  }
  typeof e.expected != "string" && (e.expected = Yt(e.expected, 10)), typeof e.actual != "string" && (e.actual = Yt(e.actual, 10));
  try {
    typeof e.message == "string" && (e.message = mw(e.message)), typeof e.cause == "object" && typeof e.cause.message == "string" && (e.cause.message = mw(e.cause.message));
  } catch {
  }
  try {
    return Ta(e);
  } catch (r) {
    return Ta(new Error(`Failed to fully serialize error: ${r == null ? void 0 : r.message}
Inner error message: ${e == null ? void 0 : e.message}`));
  }
}
function hw(e) {
  return nh(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function vw(e, t) {
  const r = nh(e), a = nh(t);
  return r === a && r === "Object";
}
function g1(e, t, r = /* @__PURE__ */ new WeakSet(), a = /* @__PURE__ */ new WeakSet()) {
  return vw(e, t) ? r.has(e) || a.has(t) ? { replacedActual: e, replacedExpected: t } : (r.add(e), a.add(t), SR(t).forEach((n) => {
    const o = t[n], i = e[n];
    if (hw(o))
      o.asymmetricMatch(i) && (e[n] = o);
    else if (hw(i))
      i.asymmetricMatch(o) && (t[n] = i);
    else if (vw(i, o)) {
      const s = g1(
        i,
        o,
        r,
        a
      );
      e[n] = s.replacedActual, t[n] = s.replacedExpected;
    }
  }), {
    replacedActual: e,
    replacedExpected: t
  }) : { replacedActual: e, replacedExpected: t };
}
function w1(e, t) {
  function r(n) {
    const o = function(...i) {
      return t.apply(n, i);
    };
    Object.assign(o, t), o.withContext = () => o.bind(n), o.setContext = (i, s) => {
      n[i] = s;
    }, o.mergeContext = (i) => {
      Object.assign(n, i);
    };
    for (const i of e)
      Object.defineProperty(o, i, {
        get() {
          return r({ ...n, [i]: !0 });
        }
      });
    return o;
  }
  const a = r({});
  return a.fn = t, a;
}
function _1(e) {
  const t = [e.name];
  let r = e;
  for (; r != null && r.suite || r != null && r.file; )
    r = r.suite || r.file, r != null && r.name && t.unshift(r.name);
  return t;
}
function Ite(e = "") {
  return !e || !e.includes("\\") ? e : e.replace(/\\/g, "/");
}
const Nte = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function kte() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const jte = function(...e) {
  e = e.map((a) => Ite(a));
  let t = "", r = !1;
  for (let a = e.length - 1; a >= -1 && !r; a--) {
    const n = a >= 0 ? e[a] : kte();
    !n || n.length === 0 || (t = `${n}/${t}`, r = yw(n));
  }
  return t = Fte(t, !r), r && !yw(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Fte(e, t) {
  let r = "", a = 0, n = -1, o = 0, i = null;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length)
      i = e[s];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(n === s - 1 || o === 1))
        if (o === 2) {
          if (r.length < 2 || a !== 2 || r[r.length - 1] !== "." || r[r.length - 2] !== ".") {
            if (r.length > 2) {
              const l = r.lastIndexOf("/");
              l === -1 ? (r = "", a = 0) : (r = r.slice(0, l), a = r.length - 1 - r.lastIndexOf("/")), n = s, o = 0;
              continue;
            } else if (r.length > 0) {
              r = "", a = 0, n = s, o = 0;
              continue;
            }
          }
          t && (r += r.length > 0 ? "/.." : "..", a = 2);
        } else
          r.length > 0 ? r += `/${e.slice(n + 1, s)}` : r = e.slice(n + 1, s), a = s - n - 1;
      n = s, o = 0;
    } else
      i === "." && o !== -1 ? ++o : o = -1;
  }
  return r;
}
const yw = function(e) {
  return Nte.test(e);
}, Dte = /* @__PURE__ */ new WeakMap(), $1 = /* @__PURE__ */ new WeakMap(), E1 = /* @__PURE__ */ new WeakMap();
function Bte(e, t) {
  Dte.set(e, t);
}
function Lte(e, t) {
  $1.set(e, t);
}
function Ute(e) {
  return $1.get(e);
}
function Hte(e, t) {
  E1.set(e, t);
}
function Vte(e) {
  return E1.get(e);
}
class zte extends Error {
  constructor(r, a) {
    super(r);
    Me(this, "code", "VITEST_PENDING");
    Me(this, "taskId");
    this.message = r, this.taskId = a.id;
  }
}
const Aa = {
  tasks: [],
  currentSuite: null
};
function Wte(e) {
  var t;
  (t = Aa.currentSuite) == null || t.tasks.push(e);
}
async function Gte(e, t) {
  const r = Aa.currentSuite;
  Aa.currentSuite = e, await t(), Aa.currentSuite = r;
}
function Kte(e, t, r = !1) {
  if (t <= 0 || t === Number.POSITIVE_INFINITY)
    return e;
  const { setTimeout: a, clearTimeout: n } = tf();
  return (...o) => Promise.race([e(...o), new Promise((i, s) => {
    var l;
    const u = a(() => {
      n(u), s(new Error(Xte(r, t)));
    }, t);
    (l = u.unref) == null || l.call(u);
  })]);
}
function Yte(e, t) {
  var r;
  const a = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  return a.task = e, a.skip = () => {
    throw e.pending = !0, new zte("test is skipped; abort execution", e);
  }, a.onTestFailed = (n) => {
    e.onFailed || (e.onFailed = []), e.onFailed.push(n);
  }, ((r = t.extendTaskContext) == null ? void 0 : r.call(t, a)) || a;
}
function Xte(e, t) {
  return `${e ? "Hook" : "Test"} timed out in ${t}ms.
If this is a long-running ${e ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${e ? "hookTimeout" : "testTimeout"}".`;
}
function Jte(e, t = {}) {
  const r = Object.entries(e).map(([a, n], o) => ({
    prop: a,
    value: n,
    index: o,
    isFn: typeof n == "function"
  }));
  return Array.isArray(t.fixtures) ? t.fixtures = t.fixtures.concat(r) : t.fixtures = r, r.forEach((a) => {
    if (a.isFn) {
      const n = R1(a.value);
      n.length && (a.deps = t.fixtures.filter(({ prop: o }) => o !== a.prop && n.includes(o)));
    }
  }), t;
}
const Sp = /* @__PURE__ */ new Map();
let bw = new Array();
function Qte(e, t) {
  return (r) => {
    const a = r || t;
    if (!a)
      return e({});
    const n = Ute(a);
    if (!(n != null && n.length))
      return e(a);
    const o = R1(e);
    if (!o.length)
      return e(a);
    Sp.get(a) || Sp.set(a, /* @__PURE__ */ new Map());
    const i = Sp.get(a), s = n.filter(({ prop: c }) => o.includes(c)), l = C1(s);
    if (!l.length)
      return e(a);
    async function u() {
      for (const c of l) {
        if (i.has(c))
          continue;
        let d;
        if (c.isFn) {
          const f = Ug(), p = c.value(a, async (v) => {
            f.resolve(v);
            const b = Ug();
            bw.push(async () => {
              b.resolve(), await p;
            }), await b;
          }).catch(f.reject);
          d = await f;
        } else
          d = c.value;
        a[c.prop] = d, i.set(c, d), bw.unshift(() => {
          i.delete(c);
        });
      }
    }
    return u().then(() => e(a));
  };
}
function C1(e, t = /* @__PURE__ */ new Set(), r = []) {
  return e.forEach((a) => {
    if (!r.includes(a)) {
      if (!a.isFn || !a.deps) {
        r.push(a);
        return;
      }
      if (t.has(a))
        throw new Error(`Circular fixture dependency detected: ${a.prop} <- ${[...t].reverse().map((n) => n.prop).join(" <- ")}`);
      t.add(a), C1(a.deps, t, r), r.push(a), t.clear();
    }
  }), r;
}
function R1(e) {
  const t = e.toString().match(/[^(]*\(([^)]*)/);
  if (!t)
    return [];
  const r = gw(t[1]);
  if (!r.length)
    return [];
  const a = r[0];
  if (!(a.startsWith("{") && a.endsWith("}")))
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${a}".`);
  const n = a.slice(1, -1).replace(/\s/g, ""), o = gw(n).map((s) => s.replace(/\:.*|\=.*/g, "")), i = o.at(-1);
  if (i && i.startsWith("..."))
    throw new Error(`Rest parameters are not supported in fixtures, received "${i}".`);
  return o;
}
function gw(e) {
  const t = [], r = [];
  let a = 0;
  for (let o = 0; o < e.length; o++)
    if (e[o] === "{" || e[o] === "[")
      r.push(e[o] === "{" ? "}" : "]");
    else if (e[o] === r[r.length - 1])
      r.pop();
    else if (!r.length && e[o] === ",") {
      const i = e.substring(a, o).trim();
      i && t.push(i), a = o + 1;
    }
  const n = e.substring(a).trim();
  return n && t.push(n), t;
}
let Zte;
function ere() {
  return Zte;
}
const $a = ire(), tre = pv(
  function(e, t, r) {
    fv().test.fn.call(this, Vn(e), t, r);
  }
), rre = $a;
let wo, nre;
function fv() {
  return Aa.currentSuite || nre;
}
function are() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function ore(e, t = () => {
}, r, a, n, o, i, s) {
  const l = [], u = [];
  let c;
  b();
  const d = function($ = "", A = {}) {
    const S = {
      id: "",
      name: $,
      suite: void 0,
      each: A.each,
      fails: A.fails,
      context: void 0,
      type: "custom",
      retry: A.retry ?? wo.config.retry,
      repeats: A.repeats,
      mode: A.only ? "only" : A.skip ? "skip" : A.todo ? "todo" : "run",
      meta: A.meta ?? /* @__PURE__ */ Object.create(null)
    }, T = A.handler;
    (A.concurrent || !A.sequential && wo.config.sequence.concurrent) && (S.concurrent = !0), o && (S.shuffle = !0);
    const E = Yte(S, wo);
    return Object.defineProperty(S, "context", {
      value: E,
      enumerable: !1
    }), Lte(E, A.fixtures), T && Bte(S, Kte(
      Qte(T, E),
      (A == null ? void 0 : A.timeout) ?? wo.config.testTimeout
    )), l.push(S), S;
  }, f = pv(function($, A = EZ, S = {}) {
    typeof S == "number" && (S = { timeout: S }), typeof s == "object" && (S = Object.assign({}, s, S)), S.concurrent = this.concurrent || !this.sequential && (S == null ? void 0 : S.concurrent), S.sequential = this.sequential || !this.concurrent && (S == null ? void 0 : S.sequential);
    const T = d(
      Vn($),
      { ...this, ...S, handler: A }
    );
    T.type = "test";
  }), p = {
    type: "collector",
    name: e,
    mode: r,
    options: s,
    test: f,
    tasks: l,
    collect: h,
    task: d,
    clear: y,
    on: v
  };
  function v($, ...A) {
    Vte(c)[$].push(...A);
  }
  function b() {
    typeof s == "number" && (s = { timeout: s }), c = {
      id: "",
      type: "suite",
      name: e,
      mode: r,
      each: i,
      shuffle: o,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      projectName: ""
    }, Hte(c, are());
  }
  function y() {
    l.length = 0, u.length = 0, b();
  }
  async function h($) {
    u.length = 0, t && await Gte(p, () => t(f));
    const A = [];
    for (const S of [...u, ...l])
      A.push(S.type === "collector" ? await S.collect($) : S);
    return c.file = $, c.tasks = A, A.forEach((S) => {
      S.suite = c, $ && (S.file = $);
    }), c;
  }
  return Wte(p), p;
}
function ire() {
  function e(t, r, a = {}) {
    const n = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run", o = fv();
    return typeof a == "number" && (a = { timeout: a }), o != null && o.options && (a = { ...o.options, ...a }), a.concurrent = this.concurrent || !this.sequential && (a == null ? void 0 : a.concurrent), a.sequential = this.sequential || !this.concurrent && (a == null ? void 0 : a.sequential), ore(Vn(t), r, n, this.concurrent, this.sequential, this.shuffle, this.each, a);
  }
  return e.each = function(t, ...r) {
    const a = this.withContext();
    return this.setContext("each", !0), Array.isArray(t) && r.length && (t = P1(t, r)), (n, o, i) => {
      const s = Vn(n), l = t.every(Array.isArray);
      t.forEach((u, c) => {
        const d = Array.isArray(u) ? u : [u];
        l ? a(di(s, d, c), () => o(...d), i) : a(di(s, d, c), () => o(u), i);
      }), this.setContext("each", void 0);
    };
  }, e.skipIf = (t) => t ? $a.skip : $a, e.runIf = (t) => t ? $a : $a.skip, w1(
    ["concurrent", "sequential", "shuffle", "skip", "only", "todo"],
    e
  );
}
function sre(e, t) {
  const r = e;
  r.each = function(n, ...o) {
    const i = this.withContext();
    return this.setContext("each", !0), Array.isArray(n) && o.length && (n = P1(n, o)), (s, l, u) => {
      const c = Vn(s), d = n.every(Array.isArray);
      n.forEach((f, p) => {
        const v = Array.isArray(f) ? f : [f];
        d ? i(di(c, v, p), () => l(...v), u) : i(di(c, v, p), () => l(f), u);
      }), this.setContext("each", void 0);
    };
  }, r.skipIf = function(n) {
    return n ? this.skip : this;
  }, r.runIf = function(n) {
    return n ? this : this.skip;
  }, r.extend = function(n) {
    const o = Jte(n, t);
    return pv(function(i, s, l) {
      fv().test.fn.call(this, Vn(i), s, l);
    }, o);
  };
  const a = w1(
    ["concurrent", "sequential", "skip", "only", "todo", "fails"],
    r
  );
  return t && a.mergeContext(t), a;
}
function pv(e, t) {
  return sre(e, t);
}
function Vn(e) {
  return typeof e == "string" ? e : e instanceof Function ? e.name || "<anonymous>" : String(e);
}
function di(e, t, r) {
  e.includes("%#") && (e = e.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${r}`).replace(/__vitest_escaped_%__/g, "%%"));
  const a = e.split("%").length - 1;
  let n = l1(e, ...t.slice(0, a));
  return xR(t[0]) && (n = n.replace(
    /\$([$\w_.]+)/g,
    // https://github.com/chaijs/chai/pull/1490
    (o, i) => {
      var s, l;
      return rte(CZ(t[0], i), { truncate: (l = (s = void 0) == null ? void 0 : s.chaiConfig) == null ? void 0 : l.truncateThreshold });
    }
  )), n;
}
function P1(e, t) {
  const r = e.join("").trim().replace(/ /g, "").split(`
`).map((n) => n.split("|"))[0], a = [];
  for (let n = 0; n < Math.floor(t.length / r.length); n++) {
    const o = {};
    for (let i = 0; i < r.length; i++)
      o[r[i]] = t[n * r.length + i];
    a.push(o);
  }
  return a;
}
function mv() {
  const e = globalThis.__vitest_worker__;
  if (!e) {
    const t = `Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`;
    throw new Error(t);
  }
  return e;
}
function lre() {
  const e = mv();
  return e == null ? void 0 : e.environment.name;
}
var Op = {};
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function x1() {
  var e = [].slice.call(arguments);
  function t(r, a) {
    Object.keys(a).forEach(function(n) {
      ~e.indexOf(n) || (r[n] = a[n]);
    });
  }
  return function() {
    for (var a = [].slice.call(arguments), n = 0, o = {}; n < a.length; n++)
      t(o, a[n]);
    return o;
  };
}
/*!
 * Primary Exports
 */
var S1 = rn;
function rn(e, t, r) {
  var a = x1("name", "message", "stack", "constructor", "toJSON"), n = a(t || {});
  this.message = e || "Unspecified AssertionError", this.showDiff = !1;
  for (var o in n)
    this[o] = n[o];
  if (r = r || rn, Error.captureStackTrace)
    Error.captureStackTrace(this, r);
  else
    try {
      throw new Error();
    } catch (i) {
      this.stack = i.stack;
    }
}
/*!
 * Inherit from Error.prototype
 */
rn.prototype = Object.create(Error.prototype);
/*!
 * Statically set name
 */
rn.prototype.name = "AssertionError";
/*!
 * Ensure correct constructor
 */
rn.prototype.constructor = rn;
rn.prototype.toJSON = function(e) {
  var t = x1("constructor", "toJSON", "stack"), r = t({ name: this.name }, this);
  return e !== !1 && this.stack && (r.stack = this.stack), r;
};
var je = {};
function O1(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
function T1(e) {
  var t = e.replace(/([^\\])\[/g, "$1.["), r = t.match(/(\\\.|[^.]+?)+/g);
  return r.map(function(n) {
    if (n === "constructor" || n === "__proto__" || n === "prototype")
      return {};
    var o = /^\[(\d+)\]$/, i = o.exec(n), s = null;
    return i ? s = { i: parseFloat(i[1]) } : s = { p: n.replace(/\\([.[\]])/g, "$1") }, s;
  });
}
function ww(e, t, r) {
  var a = e, n = null;
  r = typeof r > "u" ? t.length : r;
  for (var o = 0; o < r; o++) {
    var i = t[o];
    a && (typeof i.p > "u" ? a = a[i.i] : a = a[i.p], o === r - 1 && (n = a));
  }
  return n;
}
function ure(e, t, r) {
  for (var a = e, n = r.length, o = null, i = 0; i < n; i++) {
    var s = null, l = null;
    if (o = r[i], i === n - 1)
      s = typeof o.p > "u" ? o.i : o.p, a[s] = t;
    else if (typeof o.p < "u" && a[o.p])
      a = a[o.p];
    else if (typeof o.i < "u" && a[o.i])
      a = a[o.i];
    else {
      var u = r[i + 1];
      s = typeof o.p > "u" ? o.i : o.p, l = typeof u.p > "u" ? [] : {}, a[s] = l, a = a[s];
    }
  }
}
function A1(e, t) {
  var r = T1(t), a = r[r.length - 1], n = {
    parent: r.length > 1 ? ww(e, r, r.length - 1) : e,
    name: a.p || a.i,
    value: ww(e, r)
  };
  return n.exists = O1(n.parent, n.name), n;
}
function cre(e, t) {
  var r = A1(e, t);
  return r.value;
}
function dre(e, t, r) {
  var a = T1(t);
  return ure(e, r, a), e;
}
var fre = {
  hasProperty: O1,
  getPathInfo: A1,
  getPathValue: cre,
  setPathValue: dre
};
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var jt = function(t, r, a) {
  var n = t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[r] = a;
  else
    return n[r];
};
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var pre = jt, mre = function(t, r) {
  var a = pre(t, "negate"), n = r[0];
  return a ? !n : n;
}, M1 = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(yt, function() {
    var r = typeof Promise == "function", a = typeof self == "object" ? self : yt, n = typeof Symbol < "u", o = typeof Map < "u", i = typeof Set < "u", s = typeof WeakMap < "u", l = typeof WeakSet < "u", u = typeof DataView < "u", c = n && typeof Symbol.iterator < "u", d = n && typeof Symbol.toStringTag < "u", f = i && typeof Set.prototype.entries == "function", p = o && typeof Map.prototype.entries == "function", v = f && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), b = p && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), y = c && typeof Array.prototype[Symbol.iterator] == "function", h = y && Object.getPrototypeOf([][Symbol.iterator]()), $ = c && typeof String.prototype[Symbol.iterator] == "function", A = $ && Object.getPrototypeOf(""[Symbol.iterator]()), S = 8, T = -1;
    function E(M) {
      var L = typeof M;
      if (L !== "object")
        return L;
      if (M === null)
        return "null";
      if (M === a)
        return "global";
      if (Array.isArray(M) && (d === !1 || !(Symbol.toStringTag in M)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && M === window.location)
          return "Location";
        if (typeof window.document == "object" && M === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && M === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && M === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && M instanceof window.HTMLElement) {
          if (M.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (M.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (M.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var ie = d && M[Symbol.toStringTag];
      if (typeof ie == "string")
        return ie;
      var J = Object.getPrototypeOf(M);
      return J === RegExp.prototype ? "RegExp" : J === Date.prototype ? "Date" : r && J === Promise.prototype ? "Promise" : i && J === Set.prototype ? "Set" : o && J === Map.prototype ? "Map" : l && J === WeakSet.prototype ? "WeakSet" : s && J === WeakMap.prototype ? "WeakMap" : u && J === DataView.prototype ? "DataView" : o && J === b ? "Map Iterator" : i && J === v ? "Set Iterator" : y && J === h ? "Array Iterator" : $ && J === A ? "String Iterator" : J === null ? "Object" : Object.prototype.toString.call(M).slice(S, T);
    }
    return E;
  });
})(M1);
var rf = M1.exports;
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var hre = S1, Tp = jt, vre = rf, yre = function(t, r) {
  var a = Tp(t, "message"), n = Tp(t, "ssfi");
  a = a ? a + ": " : "", t = Tp(t, "object"), r = r.map(function(s) {
    return s.toLowerCase();
  }), r.sort();
  var o = r.map(function(s, l) {
    var u = ~["a", "e", "i", "o", "u"].indexOf(s.charAt(0)) ? "an" : "a", c = r.length > 1 && l === r.length - 1 ? "or " : "";
    return c + u + " " + s;
  }).join(", "), i = vre(t).toLowerCase();
  if (!r.some(function(s) {
    return i === s;
  }))
    throw new hre(
      a + "object tested must be " + o + ", but " + i + " given",
      void 0,
      n
    );
};
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var q1 = function(t, r) {
  return r.length > 4 ? r[4] : t._obj;
}, bre = Function.prototype.toString, gre = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, wre = 512;
function _re(e) {
  if (typeof e != "function")
    return null;
  var t = "";
  if (typeof Function.prototype.name > "u" && typeof e.name > "u") {
    var r = bre.call(e);
    if (r.indexOf("(") > wre)
      return t;
    var a = r.match(gre);
    a && (t = a[1]);
  } else
    t = e.name;
  return t;
}
var I1 = _re, oa = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
}, $re = s1, _w = oa, hv = Ere;
function Ere(e, t, r, a) {
  var n = {
    colors: a,
    depth: typeof r > "u" ? 2 : r,
    showHidden: t,
    truncate: _w.truncateThreshold ? _w.truncateThreshold : 1 / 0
  };
  return $re.inspect(e, n);
}
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Cre = hv, $w = oa, N1 = function(t) {
  var r = Cre(t), a = Object.prototype.toString.call(t);
  if ($w.truncateThreshold && r.length >= $w.truncateThreshold) {
    if (a === "[object Function]")
      return !t.name || t.name === "" ? "[Function]" : "[Function: " + t.name + "]";
    if (a === "[object Array]")
      return "[ Array(" + t.length + ") ]";
    if (a === "[object Object]") {
      var n = Object.keys(t), o = n.length > 2 ? n.splice(0, 2).join(", ") + ", ..." : n.join(", ");
      return "{ Object (" + o + ") }";
    } else
      return r;
  } else
    return r;
};
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Ap = jt, Rre = q1, Mp = N1, Pre = function(t, r) {
  var a = Ap(t, "negate"), n = Ap(t, "object"), o = r[3], i = Rre(t, r), s = a ? r[2] : r[1], l = Ap(t, "message");
  return typeof s == "function" && (s = s()), s = s || "", s = s.replace(/#\{this\}/g, function() {
    return Mp(n);
  }).replace(/#\{act\}/g, function() {
    return Mp(i);
  }).replace(/#\{exp\}/g, function() {
    return Mp(o);
  }), l ? l + ": " + s : s;
};
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var dn = function(t, r, a) {
  var n = t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null));
  r.__flags || (r.__flags = /* @__PURE__ */ Object.create(null)), a = arguments.length === 3 ? a : !0;
  for (var o in n)
    (a || o !== "object" && o !== "ssfi" && o !== "lockSsfi" && o != "message") && (r.__flags[o] = n[o]);
}, vv = { exports: {} };
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ew = rf;
function k1() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
k1.prototype = {
  get: function(t) {
    return t[this._key];
  },
  set: function(t, r) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: r,
      configurable: !0
    });
  }
};
var yv = typeof WeakMap == "function" ? WeakMap : k1;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function Cw(e, t, r) {
  if (!r || zn(e) || zn(t))
    return null;
  var a = r.get(e);
  if (a) {
    var n = a.get(t);
    if (typeof n == "boolean")
      return n;
  }
  return null;
}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function _o(e, t, r, a) {
  if (!(!r || zn(e) || zn(t))) {
    var n = r.get(e);
    n ? n.set(t, a) : (n = new yv(), n.set(t, a), r.set(e, n));
  }
}
/*!
 * Primary Export
 */
vv.exports = nf;
vv.exports.MemoizeMap = yv;
function nf(e, t, r) {
  if (r && r.comparator)
    return Rw(e, t, r);
  var a = j1(e, t);
  return a !== null ? a : Rw(e, t, r);
}
function j1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : zn(e) || zn(t) ? !1 : null;
}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function Rw(e, t, r) {
  r = r || {}, r.memoize = r.memoize === !1 ? !1 : r.memoize || new yv();
  var a = r && r.comparator, n = Cw(e, t, r.memoize);
  if (n !== null)
    return n;
  var o = Cw(t, e, r.memoize);
  if (o !== null)
    return o;
  if (a) {
    var i = a(e, t);
    if (i === !1 || i === !0)
      return _o(e, t, r.memoize, i), i;
    var s = j1(e, t);
    if (s !== null)
      return s;
  }
  var l = Ew(e);
  if (l !== Ew(t))
    return _o(e, t, r.memoize, !1), !1;
  _o(e, t, r.memoize, !0);
  var u = xre(e, t, l, r);
  return _o(e, t, r.memoize, u), u;
}
function xre(e, t, r, a) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return nf(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return F1(e, t, ["name", "message", "code"], a);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return en(e, t, a);
    case "RegExp":
      return Sre(e, t);
    case "Generator":
      return Ore(e, t, a);
    case "DataView":
      return en(new Uint8Array(e.buffer), new Uint8Array(t.buffer), a);
    case "ArrayBuffer":
      return en(new Uint8Array(e), new Uint8Array(t), a);
    case "Set":
      return Pw(e, t, a);
    case "Map":
      return Pw(e, t, a);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return Are(e, t, a);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function Sre(e, t) {
  return e.toString() === t.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Pw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  if (e.size === 0)
    return !0;
  var a = [], n = [];
  return e.forEach(function(i, s) {
    a.push([i, s]);
  }), t.forEach(function(i, s) {
    n.push([i, s]);
  }), en(a.sort(), n.sort(), r);
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function en(e, t, r) {
  var a = e.length;
  if (a !== t.length)
    return !1;
  if (a === 0)
    return !0;
  for (var n = -1; ++n < a; )
    if (nf(e[n], t[n], r) === !1)
      return !1;
  return !0;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Ore(e, t, r) {
  return en(dh(e), dh(t), r);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function Tre(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function xw(e) {
  if (Tre(e))
    try {
      return dh(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function dh(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    t = e.next(), r.push(t.value);
  return r;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function Sw(e) {
  var t = [];
  for (var r in e)
    t.push(r);
  return t;
}
function Ow(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), a = 0; a < r.length; a += 1) {
    var n = r[a];
    Object.getOwnPropertyDescriptor(e, n).enumerable && t.push(n);
  }
  return t;
}
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function F1(e, t, r, a) {
  var n = r.length;
  if (n === 0)
    return !0;
  for (var o = 0; o < n; o += 1)
    if (nf(e[r[o]], t[r[o]], a) === !1)
      return !1;
  return !0;
}
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Are(e, t, r) {
  var a = Sw(e), n = Sw(t), o = Ow(e), i = Ow(t);
  if (a = a.concat(o), n = n.concat(i), a.length && a.length === n.length)
    return en(Tw(a).sort(), Tw(n).sort()) === !1 ? !1 : F1(e, t, a, r);
  var s = xw(e), l = xw(t);
  return s.length && s.length === l.length ? (s.sort(), l.sort(), en(s, l, r)) : a.length === 0 && s.length === 0 && n.length === 0 && l.length === 0;
}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function zn(e) {
  return e === null || typeof e != "object";
}
function Tw(e) {
  return e.map(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  });
}
var Mre = vv.exports, qre = oa;
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var af = function() {
  return qre.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
};
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var qp, Aw;
function Ire() {
  if (Aw)
    return qp;
  Aw = 1;
  var e = fn(), t = jt, r = af, a = dn;
  return qp = function(o, i, s) {
    s = s === void 0 ? function() {
    } : s, Object.defineProperty(
      o,
      i,
      {
        get: function l() {
          !r() && !t(this, "lockSsfi") && t(this, "ssfi", l);
          var u = s.call(this);
          if (u !== void 0)
            return u;
          var c = new e.Assertion();
          return a(this, c), c;
        },
        configurable: !0
      }
    );
  }, qp;
}
var Nre = Object.getOwnPropertyDescriptor(function() {
}, "length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var of = function(t, r, a) {
  return Nre.configurable && Object.defineProperty(t, "length", {
    get: function() {
      throw Error(a ? "Invalid Chai property: " + r + '.length. Due to a compatibility issue, "length" cannot directly follow "' + r + '". Use "' + r + '.lengthOf" instead.' : "Invalid Chai property: " + r + '.length. See docs for proper usage of "' + r + '".');
    }
  }), t;
};
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var kre = function(t) {
  var r = Object.getOwnPropertyNames(t);
  function a(o) {
    r.indexOf(o) === -1 && r.push(o);
  }
  for (var n = Object.getPrototypeOf(t); n !== null; )
    Object.getOwnPropertyNames(n).forEach(a), n = Object.getPrototypeOf(n);
  return r;
}, jre = oa, Mw = jt, Fre = kre, Dre = af;
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var qw = ["__flags", "__methods", "_obj", "assert"], sf = function(t, r) {
  return Dre() ? new Proxy(t, {
    get: function a(n, o) {
      if (typeof o == "string" && jre.proxyExcludedKeys.indexOf(o) === -1 && !Reflect.has(n, o)) {
        if (r)
          throw Error("Invalid Chai property: " + r + "." + o + '. See docs for proper usage of "' + r + '".');
        var i = null, s = 4;
        throw Fre(n).forEach(function(l) {
          if (!Object.prototype.hasOwnProperty(l) && qw.indexOf(l) === -1) {
            var u = Bre(
              o,
              l,
              s
            );
            u < s && (i = l, s = u);
          }
        }), Error(i !== null ? "Invalid Chai property: " + o + '. Did you mean "' + i + '"?' : "Invalid Chai property: " + o);
      }
      return qw.indexOf(o) === -1 && !Mw(n, "lockSsfi") && Mw(n, "ssfi", a), Reflect.get(n, o);
    }
  }) : t;
};
function Bre(e, t, r) {
  if (Math.abs(e.length - t.length) >= r)
    return r;
  for (var a = [], n = 0; n <= e.length; n++)
    a[n] = Array(t.length + 1).fill(0), a[n][0] = n;
  for (var o = 0; o < t.length; o++)
    a[0][o] = o;
  for (var n = 1; n <= e.length; n++)
    for (var i = e.charCodeAt(n - 1), o = 1; o <= t.length; o++) {
      if (Math.abs(n - o) >= r) {
        a[n][o] = r;
        continue;
      }
      a[n][o] = Math.min(
        a[n - 1][o] + 1,
        a[n][o - 1] + 1,
        a[n - 1][o - 1] + (i === t.charCodeAt(o - 1) ? 0 : 1)
      );
    }
  return a[e.length][t.length];
}
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ip, Iw;
function Lre() {
  if (Iw)
    return Ip;
  Iw = 1;
  var e = of, t = fn(), r = jt, a = sf, n = dn;
  return Ip = function(i, s, l) {
    var u = function() {
      r(this, "lockSsfi") || r(this, "ssfi", u);
      var c = l.apply(this, arguments);
      if (c !== void 0)
        return c;
      var d = new t.Assertion();
      return n(this, d), d;
    };
    e(u, s, !1), i[s] = a(u, s);
  }, Ip;
}
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Np, Nw;
function Ure() {
  if (Nw)
    return Np;
  Nw = 1;
  var e = fn(), t = jt, r = af, a = dn;
  return Np = function(o, i, s) {
    var l = Object.getOwnPropertyDescriptor(o, i), u = function() {
    };
    l && typeof l.get == "function" && (u = l.get), Object.defineProperty(
      o,
      i,
      {
        get: function c() {
          !r() && !t(this, "lockSsfi") && t(this, "ssfi", c);
          var d = t(this, "lockSsfi");
          t(this, "lockSsfi", !0);
          var f = s(u).call(this);
          if (t(this, "lockSsfi", d), f !== void 0)
            return f;
          var p = new e.Assertion();
          return a(this, p), p;
        },
        configurable: !0
      }
    );
  }, Np;
}
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var kp, kw;
function Hre() {
  if (kw)
    return kp;
  kw = 1;
  var e = of, t = fn(), r = jt, a = sf, n = dn;
  return kp = function(i, s, l) {
    var u = i[s], c = function() {
      throw new Error(s + " is not a function");
    };
    u && typeof u == "function" && (c = u);
    var d = function() {
      r(this, "lockSsfi") || r(this, "ssfi", d);
      var f = r(this, "lockSsfi");
      r(this, "lockSsfi", !0);
      var p = l(c).apply(this, arguments);
      if (r(this, "lockSsfi", f), p !== void 0)
        return p;
      var v = new t.Assertion();
      return n(this, v), v;
    };
    e(d, s, !1), i[s] = a(d, s);
  }, kp;
}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var jp, jw;
function Vre() {
  if (jw)
    return jp;
  jw = 1;
  /*!
   * Module dependencies
   */
  var e = of, t = fn(), r = jt, a = sf, n = dn;
  /*!
   * Module variables
   */
  var o = typeof Object.setPrototypeOf == "function", i = function() {
  }, s = Object.getOwnPropertyNames(i).filter(function(c) {
    var d = Object.getOwnPropertyDescriptor(i, c);
    return typeof d != "object" ? !0 : !d.configurable;
  }), l = Function.prototype.call, u = Function.prototype.apply;
  return jp = function(d, f, p, v) {
    typeof v != "function" && (v = function() {
    });
    var b = {
      method: p,
      chainingBehavior: v
    };
    d.__methods || (d.__methods = {}), d.__methods[f] = b, Object.defineProperty(
      d,
      f,
      {
        get: function() {
          b.chainingBehavior.call(this);
          var h = function() {
            r(this, "lockSsfi") || r(this, "ssfi", h);
            var S = b.method.apply(this, arguments);
            if (S !== void 0)
              return S;
            var T = new t.Assertion();
            return n(this, T), T;
          };
          if (e(h, f, !0), o) {
            var $ = Object.create(this);
            $.call = l, $.apply = u, Object.setPrototypeOf(h, $);
          } else {
            var A = Object.getOwnPropertyNames(d);
            A.forEach(function(S) {
              if (s.indexOf(S) === -1) {
                var T = Object.getOwnPropertyDescriptor(d, S);
                Object.defineProperty(h, S, T);
              }
            });
          }
          return n(this, h), a(h);
        },
        configurable: !0
      }
    );
  }, jp;
}
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Fp, Fw;
function zre() {
  if (Fw)
    return Fp;
  Fw = 1;
  var e = fn(), t = dn;
  return Fp = function(a, n, o, i) {
    var s = a.__methods[n], l = s.chainingBehavior;
    s.chainingBehavior = function() {
      var d = i(l).call(this);
      if (d !== void 0)
        return d;
      var f = new e.Assertion();
      return t(this, f), f;
    };
    var u = s.method;
    s.method = function() {
      var d = o(u).apply(this, arguments);
      if (d !== void 0)
        return d;
      var f = new e.Assertion();
      return t(this, f), f;
    };
  }, Fp;
}
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Dw = hv, Wre = function(t, r) {
  return Dw(t) < Dw(r) ? -1 : 1;
};
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var D1 = function(t) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(t).filter(function(r) {
    return Object.getOwnPropertyDescriptor(t, r).enumerable;
  });
};
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Gre = D1, Kre = function(t) {
  return Object.keys(t).concat(Gre(t));
}, Dp = I1;
function Yre(e, t) {
  return t instanceof Error && e === t;
}
function Xre(e, t) {
  return t instanceof Error ? e.constructor === t.constructor || e instanceof t.constructor : t.prototype instanceof Error || t === Error ? e.constructor === t || e instanceof t : !1;
}
function Jre(e, t) {
  var r = typeof e == "string" ? e : e.message;
  return t instanceof RegExp ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
function Qre(e) {
  var t = e;
  if (e instanceof Error)
    t = Dp(e.constructor);
  else if (typeof e == "function" && (t = Dp(e), t === "")) {
    var r = Dp(new e());
    t = r || t;
  }
  return t;
}
function Zre(e) {
  var t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
var ene = {
  compatibleInstance: Yre,
  compatibleConstructor: Xre,
  compatibleMessage: Jre,
  getMessage: Zre,
  getConstructorName: Qre
};
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function tne(e) {
  return e !== e;
}
var rne = Number.isNaN || tne, nne = rf, Bw = jt;
function ane(e) {
  var t = nne(e), r = ["Array", "Object", "function"];
  return r.indexOf(t) !== -1;
}
var one = function(t, r) {
  var a = Bw(t, "operator"), n = Bw(t, "negate"), o = r[3], i = n ? r[2] : r[1];
  if (a)
    return a;
  if (typeof i == "function" && (i = i()), i = i || "", !!i && !/\shave\s/.test(i)) {
    var s = ane(o);
    return /\snot\s/.test(i) ? s ? "notDeepStrictEqual" : "notStrictEqual" : s ? "deepStrictEqual" : "strictEqual";
  }
};
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Lw;
function ine() {
  if (Lw)
    return je;
  Lw = 1;
  /*!
   * Dependencies that are used for multiple exports are required here only once
   */
  var e = fre;
  /*!
   * test utility
   */
  je.test = mre;
  /*!
   * type utility
   */
  je.type = rf;
  /*!
   * expectTypes utility
   */
  je.expectTypes = yre;
  /*!
   * message utility
   */
  je.getMessage = Pre;
  /*!
   * actual utility
   */
  je.getActual = q1;
  /*!
   * Inspect util
   */
  je.inspect = hv;
  /*!
   * Object Display util
   */
  je.objDisplay = N1;
  /*!
   * Flag utility
   */
  je.flag = jt;
  /*!
   * Flag transferring utility
   */
  je.transferFlags = dn;
  /*!
   * Deep equal utility
   */
  je.eql = Mre;
  /*!
   * Deep path info
   */
  je.getPathInfo = e.getPathInfo;
  /*!
   * Check if a property exists
   */
  je.hasProperty = e.hasProperty;
  /*!
   * Function name
   */
  je.getName = I1;
  /*!
   * add Property
   */
  je.addProperty = Ire();
  /*!
   * add Method
   */
  je.addMethod = Lre();
  /*!
   * overwrite Property
   */
  je.overwriteProperty = Ure();
  /*!
   * overwrite Method
   */
  je.overwriteMethod = Hre();
  /*!
   * Add a chainable method
   */
  je.addChainableMethod = Vre();
  /*!
   * Overwrite chainable method
   */
  je.overwriteChainableMethod = zre();
  /*!
   * Compare by inspect method
   */
  je.compareByInspect = Wre;
  /*!
   * Get own enumerable property symbols method
   */
  je.getOwnEnumerablePropertySymbols = D1;
  /*!
   * Get own enumerable properties method
   */
  je.getOwnEnumerableProperties = Kre;
  /*!
   * Checks error against a given set of criteria
   */
  je.checkError = ene;
  /*!
   * Proxify util
   */
  je.proxify = sf;
  /*!
   * addLengthGuard util
   */
  je.addLengthGuard = of;
  /*!
   * isProxyEnabled helper
   */
  je.isProxyEnabled = af;
  /*!
   * isNaN method
   */
  je.isNaN = rne;
  /*!
   * getOperator method
   */
  return je.getOperator = one, je;
}
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var $n = oa, sne = function(e, t) {
  /*!
   * Module dependencies.
   */
  var r = e.AssertionError, a = t.flag;
  /*!
   * Module export.
   */
  e.Assertion = n;
  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
  function n(o, i, s, l) {
    return a(this, "ssfi", s || n), a(this, "lockSsfi", l), a(this, "object", o), a(this, "message", i), t.proxify(this);
  }
  Object.defineProperty(n, "includeStack", {
    get: function() {
      return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), $n.includeStack;
    },
    set: function(o) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), $n.includeStack = o;
    }
  }), Object.defineProperty(n, "showDiff", {
    get: function() {
      return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), $n.showDiff;
    },
    set: function(o) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), $n.showDiff = o;
    }
  }), n.addProperty = function(o, i) {
    t.addProperty(this.prototype, o, i);
  }, n.addMethod = function(o, i) {
    t.addMethod(this.prototype, o, i);
  }, n.addChainableMethod = function(o, i, s) {
    t.addChainableMethod(this.prototype, o, i, s);
  }, n.overwriteProperty = function(o, i) {
    t.overwriteProperty(this.prototype, o, i);
  }, n.overwriteMethod = function(o, i) {
    t.overwriteMethod(this.prototype, o, i);
  }, n.overwriteChainableMethod = function(o, i, s) {
    t.overwriteChainableMethod(this.prototype, o, i, s);
  }, n.prototype.assert = function(o, i, s, l, u, c) {
    var d = t.test(this, arguments);
    if (c !== !1 && (c = !0), l === void 0 && u === void 0 && (c = !1), $n.showDiff !== !0 && (c = !1), !d) {
      i = t.getMessage(this, arguments);
      var f = t.getActual(this, arguments), p = {
        actual: f,
        expected: l,
        showDiff: c
      }, v = t.getOperator(this, arguments);
      throw v && (p.operator = v), new r(
        i,
        p,
        $n.includeStack ? this.assert : a(this, "ssfi")
      );
    }
  };
  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
  Object.defineProperty(
    n.prototype,
    "_obj",
    {
      get: function() {
        return a(this, "object");
      },
      set: function(o) {
        a(this, "object", o);
      }
    }
  );
};
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var lne = function(e, t) {
  var r = e.Assertion, a = e.AssertionError, n = t.flag;
  [
    "to",
    "be",
    "been",
    "is",
    "and",
    "has",
    "have",
    "with",
    "that",
    "which",
    "at",
    "of",
    "same",
    "but",
    "does",
    "still",
    "also"
  ].forEach(function(g) {
    r.addProperty(g);
  }), r.addProperty("not", function() {
    n(this, "negate", !0);
  }), r.addProperty("deep", function() {
    n(this, "deep", !0);
  }), r.addProperty("nested", function() {
    n(this, "nested", !0);
  }), r.addProperty("own", function() {
    n(this, "own", !0);
  }), r.addProperty("ordered", function() {
    n(this, "ordered", !0);
  }), r.addProperty("any", function() {
    n(this, "any", !0), n(this, "all", !1);
  }), r.addProperty("all", function() {
    n(this, "all", !0), n(this, "any", !1);
  });
  function o(g, q) {
    q && n(this, "message", q), g = g.toLowerCase();
    var R = n(this, "object"), x = ~["a", "e", "i", "o", "u"].indexOf(g.charAt(0)) ? "an " : "a ";
    this.assert(
      g === t.type(R).toLowerCase(),
      "expected #{this} to be " + x + g,
      "expected #{this} not to be " + x + g
    );
  }
  r.addChainableMethod("an", o), r.addChainableMethod("a", o);
  function i(g, q) {
    return t.isNaN(g) && t.isNaN(q) || g === q;
  }
  function s() {
    n(this, "contains", !0);
  }
  function l(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = t.type(R).toLowerCase(), j = n(this, "message"), H = n(this, "negate"), F = n(this, "ssfi"), k = n(this, "deep"), Q = k ? "deep " : "";
    j = j ? j + ": " : "";
    var oe = !1;
    switch (x) {
      case "string":
        oe = R.indexOf(g) !== -1;
        break;
      case "weakset":
        if (k)
          throw new a(
            j + "unable to use .deep.include with WeakSet",
            void 0,
            F
          );
        oe = R.has(g);
        break;
      case "map":
        var he = k ? t.eql : i;
        R.forEach(function(be) {
          oe = oe || he(be, g);
        });
        break;
      case "set":
        k ? R.forEach(function(be) {
          oe = oe || t.eql(be, g);
        }) : oe = R.has(g);
        break;
      case "array":
        k ? oe = R.some(function(be) {
          return t.eql(be, g);
        }) : oe = R.indexOf(g) !== -1;
        break;
      default:
        if (g !== Object(g))
          throw new a(
            j + "the given combination of arguments (" + x + " and " + t.type(g).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + t.type(g).toLowerCase(),
            void 0,
            F
          );
        var we = Object.keys(g), K = null, se = 0;
        if (we.forEach(function(be) {
          var B = new r(R);
          if (t.transferFlags(this, B, !0), n(B, "lockSsfi", !0), !H || we.length === 1) {
            B.property(be, g[be]);
            return;
          }
          try {
            B.property(be, g[be]);
          } catch (Oe) {
            if (!t.checkError.compatibleConstructor(Oe, a))
              throw Oe;
            K === null && (K = Oe), se++;
          }
        }, this), H && we.length > 1 && se === we.length)
          throw K;
        return;
    }
    this.assert(
      oe,
      "expected #{this} to " + Q + "include " + t.inspect(g),
      "expected #{this} to not " + Q + "include " + t.inspect(g)
    );
  }
  r.addChainableMethod("include", l, s), r.addChainableMethod("contain", l, s), r.addChainableMethod("contains", l, s), r.addChainableMethod("includes", l, s), r.addProperty("ok", function() {
    this.assert(
      n(this, "object"),
      "expected #{this} to be truthy",
      "expected #{this} to be falsy"
    );
  }), r.addProperty("true", function() {
    this.assert(
      n(this, "object") === !0,
      "expected #{this} to be true",
      "expected #{this} to be false",
      !n(this, "negate")
    );
  }), r.addProperty("false", function() {
    this.assert(
      n(this, "object") === !1,
      "expected #{this} to be false",
      "expected #{this} to be true",
      !!n(this, "negate")
    );
  }), r.addProperty("null", function() {
    this.assert(
      n(this, "object") === null,
      "expected #{this} to be null",
      "expected #{this} not to be null"
    );
  }), r.addProperty("undefined", function() {
    this.assert(
      n(this, "object") === void 0,
      "expected #{this} to be undefined",
      "expected #{this} not to be undefined"
    );
  }), r.addProperty("NaN", function() {
    this.assert(
      t.isNaN(n(this, "object")),
      "expected #{this} to be NaN",
      "expected #{this} not to be NaN"
    );
  });
  function u() {
    var g = n(this, "object");
    this.assert(
      g != null,
      "expected #{this} to exist",
      "expected #{this} to not exist"
    );
  }
  r.addProperty("exist", u), r.addProperty("exists", u), r.addProperty("empty", function() {
    var g = n(this, "object"), q = n(this, "ssfi"), R = n(this, "message"), x;
    switch (R = R ? R + ": " : "", t.type(g).toLowerCase()) {
      case "array":
      case "string":
        x = g.length;
        break;
      case "map":
      case "set":
        x = g.size;
        break;
      case "weakmap":
      case "weakset":
        throw new a(
          R + ".empty was passed a weak collection",
          void 0,
          q
        );
      case "function":
        var j = R + ".empty was passed a function " + t.getName(g);
        throw new a(j.trim(), void 0, q);
      default:
        if (g !== Object(g))
          throw new a(
            R + ".empty was passed non-string primitive " + t.inspect(g),
            void 0,
            q
          );
        x = Object.keys(g).length;
    }
    this.assert(
      x === 0,
      "expected #{this} to be empty",
      "expected #{this} not to be empty"
    );
  });
  function c() {
    var g = n(this, "object"), q = t.type(g);
    this.assert(
      q === "Arguments",
      "expected #{this} to be arguments but got " + q,
      "expected #{this} to not be arguments"
    );
  }
  r.addProperty("arguments", c), r.addProperty("Arguments", c);
  function d(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object");
    if (n(this, "deep")) {
      var x = n(this, "lockSsfi");
      n(this, "lockSsfi", !0), this.eql(g), n(this, "lockSsfi", x);
    } else
      this.assert(
        g === R,
        "expected #{this} to equal #{exp}",
        "expected #{this} to not equal #{exp}",
        g,
        this._obj,
        !0
      );
  }
  r.addMethod("equal", d), r.addMethod("equals", d), r.addMethod("eq", d);
  function f(g, q) {
    q && n(this, "message", q), this.assert(
      t.eql(g, n(this, "object")),
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      g,
      this._obj,
      !0
    );
  }
  r.addMethod("eql", f), r.addMethod("eqls", f);
  function p(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "doLength"), j = n(this, "message"), H = j ? j + ": " : "", F = n(this, "ssfi"), k = t.type(R).toLowerCase(), Q = t.type(g).toLowerCase(), oe, he = !0;
    if (x && k !== "map" && k !== "set" && new r(R, j, F, !0).to.have.property("length"), !x && k === "date" && Q !== "date")
      oe = H + "the argument to above must be a date";
    else if (Q !== "number" && (x || k === "number"))
      oe = H + "the argument to above must be a number";
    else if (!x && k !== "date" && k !== "number") {
      var we = k === "string" ? "'" + R + "'" : R;
      oe = H + "expected " + we + " to be a number or a date";
    } else
      he = !1;
    if (he)
      throw new a(oe, void 0, F);
    if (x) {
      var K = "length", se;
      k === "map" || k === "set" ? (K = "size", se = R.size) : se = R.length, this.assert(
        se > g,
        "expected #{this} to have a " + K + " above #{exp} but got #{act}",
        "expected #{this} to not have a " + K + " above #{exp}",
        g,
        se
      );
    } else
      this.assert(
        R > g,
        "expected #{this} to be above #{exp}",
        "expected #{this} to be at most #{exp}",
        g
      );
  }
  r.addMethod("above", p), r.addMethod("gt", p), r.addMethod("greaterThan", p);
  function v(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "doLength"), j = n(this, "message"), H = j ? j + ": " : "", F = n(this, "ssfi"), k = t.type(R).toLowerCase(), Q = t.type(g).toLowerCase(), oe, he = !0;
    if (x && k !== "map" && k !== "set" && new r(R, j, F, !0).to.have.property("length"), !x && k === "date" && Q !== "date")
      oe = H + "the argument to least must be a date";
    else if (Q !== "number" && (x || k === "number"))
      oe = H + "the argument to least must be a number";
    else if (!x && k !== "date" && k !== "number") {
      var we = k === "string" ? "'" + R + "'" : R;
      oe = H + "expected " + we + " to be a number or a date";
    } else
      he = !1;
    if (he)
      throw new a(oe, void 0, F);
    if (x) {
      var K = "length", se;
      k === "map" || k === "set" ? (K = "size", se = R.size) : se = R.length, this.assert(
        se >= g,
        "expected #{this} to have a " + K + " at least #{exp} but got #{act}",
        "expected #{this} to have a " + K + " below #{exp}",
        g,
        se
      );
    } else
      this.assert(
        R >= g,
        "expected #{this} to be at least #{exp}",
        "expected #{this} to be below #{exp}",
        g
      );
  }
  r.addMethod("least", v), r.addMethod("gte", v), r.addMethod("greaterThanOrEqual", v);
  function b(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "doLength"), j = n(this, "message"), H = j ? j + ": " : "", F = n(this, "ssfi"), k = t.type(R).toLowerCase(), Q = t.type(g).toLowerCase(), oe, he = !0;
    if (x && k !== "map" && k !== "set" && new r(R, j, F, !0).to.have.property("length"), !x && k === "date" && Q !== "date")
      oe = H + "the argument to below must be a date";
    else if (Q !== "number" && (x || k === "number"))
      oe = H + "the argument to below must be a number";
    else if (!x && k !== "date" && k !== "number") {
      var we = k === "string" ? "'" + R + "'" : R;
      oe = H + "expected " + we + " to be a number or a date";
    } else
      he = !1;
    if (he)
      throw new a(oe, void 0, F);
    if (x) {
      var K = "length", se;
      k === "map" || k === "set" ? (K = "size", se = R.size) : se = R.length, this.assert(
        se < g,
        "expected #{this} to have a " + K + " below #{exp} but got #{act}",
        "expected #{this} to not have a " + K + " below #{exp}",
        g,
        se
      );
    } else
      this.assert(
        R < g,
        "expected #{this} to be below #{exp}",
        "expected #{this} to be at least #{exp}",
        g
      );
  }
  r.addMethod("below", b), r.addMethod("lt", b), r.addMethod("lessThan", b);
  function y(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "doLength"), j = n(this, "message"), H = j ? j + ": " : "", F = n(this, "ssfi"), k = t.type(R).toLowerCase(), Q = t.type(g).toLowerCase(), oe, he = !0;
    if (x && k !== "map" && k !== "set" && new r(R, j, F, !0).to.have.property("length"), !x && k === "date" && Q !== "date")
      oe = H + "the argument to most must be a date";
    else if (Q !== "number" && (x || k === "number"))
      oe = H + "the argument to most must be a number";
    else if (!x && k !== "date" && k !== "number") {
      var we = k === "string" ? "'" + R + "'" : R;
      oe = H + "expected " + we + " to be a number or a date";
    } else
      he = !1;
    if (he)
      throw new a(oe, void 0, F);
    if (x) {
      var K = "length", se;
      k === "map" || k === "set" ? (K = "size", se = R.size) : se = R.length, this.assert(
        se <= g,
        "expected #{this} to have a " + K + " at most #{exp} but got #{act}",
        "expected #{this} to have a " + K + " above #{exp}",
        g,
        se
      );
    } else
      this.assert(
        R <= g,
        "expected #{this} to be at most #{exp}",
        "expected #{this} to be above #{exp}",
        g
      );
  }
  r.addMethod("most", y), r.addMethod("lte", y), r.addMethod("lessThanOrEqual", y), r.addMethod("within", function(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "object"), j = n(this, "doLength"), H = n(this, "message"), F = H ? H + ": " : "", k = n(this, "ssfi"), Q = t.type(x).toLowerCase(), oe = t.type(g).toLowerCase(), he = t.type(q).toLowerCase(), we, K = !0, se = oe === "date" && he === "date" ? g.toISOString() + ".." + q.toISOString() : g + ".." + q;
    if (j && Q !== "map" && Q !== "set" && new r(x, H, k, !0).to.have.property("length"), !j && Q === "date" && (oe !== "date" || he !== "date"))
      we = F + "the arguments to within must be dates";
    else if ((oe !== "number" || he !== "number") && (j || Q === "number"))
      we = F + "the arguments to within must be numbers";
    else if (!j && Q !== "date" && Q !== "number") {
      var be = Q === "string" ? "'" + x + "'" : x;
      we = F + "expected " + be + " to be a number or a date";
    } else
      K = !1;
    if (K)
      throw new a(we, void 0, k);
    if (j) {
      var B = "length", Oe;
      Q === "map" || Q === "set" ? (B = "size", Oe = x.size) : Oe = x.length, this.assert(
        Oe >= g && Oe <= q,
        "expected #{this} to have a " + B + " within " + se,
        "expected #{this} to not have a " + B + " within " + se
      );
    } else
      this.assert(
        x >= g && x <= q,
        "expected #{this} to be within " + se,
        "expected #{this} to not be within " + se
      );
  });
  function h(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "ssfi"), j = n(this, "message");
    try {
      var H = R instanceof g;
    } catch (k) {
      throw k instanceof TypeError ? (j = j ? j + ": " : "", new a(
        j + "The instanceof assertion needs a constructor but " + t.type(g) + " was given.",
        void 0,
        x
      )) : k;
    }
    var F = t.getName(g);
    F === null && (F = "an unnamed constructor"), this.assert(
      H,
      "expected #{this} to be an instance of " + F,
      "expected #{this} to not be an instance of " + F
    );
  }
  r.addMethod("instanceof", h), r.addMethod("instanceOf", h);
  function $(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "nested"), j = n(this, "own"), H = n(this, "message"), F = n(this, "object"), k = n(this, "ssfi"), Q = typeof g;
    if (H = H ? H + ": " : "", x) {
      if (Q !== "string")
        throw new a(
          H + "the argument to property must be a string when using nested syntax",
          void 0,
          k
        );
    } else if (Q !== "string" && Q !== "number" && Q !== "symbol")
      throw new a(
        H + "the argument to property must be a string, number, or symbol",
        void 0,
        k
      );
    if (x && j)
      throw new a(
        H + 'The "nested" and "own" flags cannot be combined.',
        void 0,
        k
      );
    if (F == null)
      throw new a(
        H + "Target cannot be null or undefined.",
        void 0,
        k
      );
    var oe = n(this, "deep"), he = n(this, "negate"), we = x ? t.getPathInfo(F, g) : null, K = x ? we.value : F[g], se = "";
    oe && (se += "deep "), j && (se += "own "), x && (se += "nested "), se += "property ";
    var be;
    j ? be = Object.prototype.hasOwnProperty.call(F, g) : x ? be = we.exists : be = t.hasProperty(F, g), (!he || arguments.length === 1) && this.assert(
      be,
      "expected #{this} to have " + se + t.inspect(g),
      "expected #{this} to not have " + se + t.inspect(g)
    ), arguments.length > 1 && this.assert(
      be && (oe ? t.eql(q, K) : q === K),
      "expected #{this} to have " + se + t.inspect(g) + " of #{exp}, but got #{act}",
      "expected #{this} to not have " + se + t.inspect(g) + " of #{act}",
      q,
      K
    ), n(this, "object", K);
  }
  r.addMethod("property", $);
  function A(g, q, R) {
    n(this, "own", !0), $.apply(this, arguments);
  }
  r.addMethod("ownProperty", A), r.addMethod("haveOwnProperty", A);
  function S(g, q, R) {
    typeof q == "string" && (R = q, q = null), R && n(this, "message", R);
    var x = n(this, "object"), j = Object.getOwnPropertyDescriptor(Object(x), g);
    j && q ? this.assert(
      t.eql(q, j),
      "expected the own property descriptor for " + t.inspect(g) + " on #{this} to match " + t.inspect(q) + ", got " + t.inspect(j),
      "expected the own property descriptor for " + t.inspect(g) + " on #{this} to not match " + t.inspect(q),
      q,
      j,
      !0
    ) : this.assert(
      j,
      "expected #{this} to have an own property descriptor for " + t.inspect(g),
      "expected #{this} to not have an own property descriptor for " + t.inspect(g)
    ), n(this, "object", j);
  }
  r.addMethod("ownPropertyDescriptor", S), r.addMethod("haveOwnPropertyDescriptor", S);
  function T() {
    n(this, "doLength", !0);
  }
  function E(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = t.type(R).toLowerCase(), j = n(this, "message"), H = n(this, "ssfi"), F = "length", k;
    switch (x) {
      case "map":
      case "set":
        F = "size", k = R.size;
        break;
      default:
        new r(R, j, H, !0).to.have.property("length"), k = R.length;
    }
    this.assert(
      k == g,
      "expected #{this} to have a " + F + " of #{exp} but got #{act}",
      "expected #{this} to not have a " + F + " of #{act}",
      g,
      k
    );
  }
  r.addChainableMethod("length", E, T), r.addChainableMethod("lengthOf", E, T);
  function M(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object");
    this.assert(
      g.exec(R),
      "expected #{this} to match " + g,
      "expected #{this} not to match " + g
    );
  }
  r.addMethod("match", M), r.addMethod("matches", M), r.addMethod("string", function(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "message"), j = n(this, "ssfi");
    new r(R, x, j, !0).is.a("string"), this.assert(
      ~R.indexOf(g),
      "expected #{this} to contain " + t.inspect(g),
      "expected #{this} to not contain " + t.inspect(g)
    );
  });
  function L(g) {
    var q = n(this, "object"), R = t.type(q), x = t.type(g), j = n(this, "ssfi"), H = n(this, "deep"), F, k = "", Q, oe = !0, he = n(this, "message");
    he = he ? he + ": " : "";
    var we = he + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
    if (R === "Map" || R === "Set")
      k = H ? "deeply " : "", Q = [], q.forEach(function(le, Ie) {
        Q.push(Ie);
      }), x !== "Array" && (g = Array.prototype.slice.call(arguments));
    else {
      switch (Q = t.getOwnEnumerableProperties(q), x) {
        case "Array":
          if (arguments.length > 1)
            throw new a(we, void 0, j);
          break;
        case "Object":
          if (arguments.length > 1)
            throw new a(we, void 0, j);
          g = Object.keys(g);
          break;
        default:
          g = Array.prototype.slice.call(arguments);
      }
      g = g.map(function(le) {
        return typeof le == "symbol" ? le : String(le);
      });
    }
    if (!g.length)
      throw new a(he + "keys required", void 0, j);
    var K = g.length, se = n(this, "any"), be = n(this, "all"), B = g;
    if (!se && !be && (be = !0), se && (oe = B.some(function(le) {
      return Q.some(function(Ie) {
        return H ? t.eql(le, Ie) : le === Ie;
      });
    })), be && (oe = B.every(function(le) {
      return Q.some(function(Ie) {
        return H ? t.eql(le, Ie) : le === Ie;
      });
    }), n(this, "contains") || (oe = oe && g.length == Q.length)), K > 1) {
      g = g.map(function(le) {
        return t.inspect(le);
      });
      var Oe = g.pop();
      be && (F = g.join(", ") + ", and " + Oe), se && (F = g.join(", ") + ", or " + Oe);
    } else
      F = t.inspect(g[0]);
    F = (K > 1 ? "keys " : "key ") + F, F = (n(this, "contains") ? "contain " : "have ") + F, this.assert(
      oe,
      "expected #{this} to " + k + F,
      "expected #{this} to not " + k + F,
      B.slice(0).sort(t.compareByInspect),
      Q.sort(t.compareByInspect),
      !0
    );
  }
  r.addMethod("keys", L), r.addMethod("key", L);
  function ie(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "object"), j = n(this, "ssfi"), H = n(this, "message"), F = n(this, "negate") || !1;
    new r(x, H, j, !0).is.a("function"), (g instanceof RegExp || typeof g == "string") && (q = g, g = null);
    var k;
    try {
      x();
    } catch (le) {
      k = le;
    }
    var Q = g === void 0 && q === void 0, oe = !!(g && q), he = !1, we = !1;
    if (Q || !Q && !F) {
      var K = "an error";
      g instanceof Error ? K = "#{exp}" : g && (K = t.checkError.getConstructorName(g)), this.assert(
        k,
        "expected #{this} to throw " + K,
        "expected #{this} to not throw an error but #{act} was thrown",
        g && g.toString(),
        k instanceof Error ? k.toString() : typeof k == "string" ? k : k && t.checkError.getConstructorName(k)
      );
    }
    if (g && k) {
      if (g instanceof Error) {
        var se = t.checkError.compatibleInstance(k, g);
        se === F && (oe && F ? he = !0 : this.assert(
          F,
          "expected #{this} to throw #{exp} but #{act} was thrown",
          "expected #{this} to not throw #{exp}" + (k && !F ? " but #{act} was thrown" : ""),
          g.toString(),
          k.toString()
        ));
      }
      var be = t.checkError.compatibleConstructor(k, g);
      be === F && (oe && F ? he = !0 : this.assert(
        F,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (k ? " but #{act} was thrown" : ""),
        g instanceof Error ? g.toString() : g && t.checkError.getConstructorName(g),
        k instanceof Error ? k.toString() : k && t.checkError.getConstructorName(k)
      ));
    }
    if (k && q !== void 0 && q !== null) {
      var B = "including";
      q instanceof RegExp && (B = "matching");
      var Oe = t.checkError.compatibleMessage(k, q);
      Oe === F && (oe && F ? we = !0 : this.assert(
        F,
        "expected #{this} to throw error " + B + " #{exp} but got #{act}",
        "expected #{this} to throw error not " + B + " #{exp}",
        q,
        t.checkError.getMessage(k)
      ));
    }
    he && we && this.assert(
      F,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (k ? " but #{act} was thrown" : ""),
      g instanceof Error ? g.toString() : g && t.checkError.getConstructorName(g),
      k instanceof Error ? k.toString() : k && t.checkError.getConstructorName(k)
    ), n(this, "object", k);
  }
  r.addMethod("throw", ie), r.addMethod("throws", ie), r.addMethod("Throw", ie);
  function J(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "itself"), j = typeof R == "function" && !x ? R.prototype[g] : R[g];
    this.assert(
      typeof j == "function",
      "expected #{this} to respond to " + t.inspect(g),
      "expected #{this} to not respond to " + t.inspect(g)
    );
  }
  r.addMethod("respondTo", J), r.addMethod("respondsTo", J), r.addProperty("itself", function() {
    n(this, "itself", !0);
  });
  function fe(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = g(R);
    this.assert(
      x,
      "expected #{this} to satisfy " + t.objDisplay(g),
      "expected #{this} to not satisfy" + t.objDisplay(g),
      !n(this, "negate"),
      x
    );
  }
  r.addMethod("satisfy", fe), r.addMethod("satisfies", fe);
  function de(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "object"), j = n(this, "message"), H = n(this, "ssfi");
    if (new r(x, j, H, !0).is.a("number"), typeof g != "number" || typeof q != "number") {
      j = j ? j + ": " : "";
      var F = q === void 0 ? ", and a delta is required" : "";
      throw new a(
        j + "the arguments to closeTo or approximately must be numbers" + F,
        void 0,
        H
      );
    }
    this.assert(
      Math.abs(x - g) <= q,
      "expected #{this} to be close to " + g + " +/- " + q,
      "expected #{this} not to be close to " + g + " +/- " + q
    );
  }
  r.addMethod("closeTo", de), r.addMethod("approximately", de);
  function G(g, q, R, x, j) {
    if (!x) {
      if (g.length !== q.length)
        return !1;
      q = q.slice();
    }
    return g.every(function(H, F) {
      if (j)
        return R ? R(H, q[F]) : H === q[F];
      if (!R) {
        var k = q.indexOf(H);
        return k === -1 ? !1 : (x || q.splice(k, 1), !0);
      }
      return q.some(function(Q, oe) {
        return R(H, Q) ? (x || q.splice(oe, 1), !0) : !1;
      });
    });
  }
  r.addMethod("members", function(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "message"), j = n(this, "ssfi");
    new r(R, x, j, !0).to.be.an("array"), new r(g, x, j, !0).to.be.an("array");
    var H = n(this, "contains"), F = n(this, "ordered"), k, Q, oe;
    H ? (k = F ? "an ordered superset" : "a superset", Q = "expected #{this} to be " + k + " of #{exp}", oe = "expected #{this} to not be " + k + " of #{exp}") : (k = F ? "ordered members" : "members", Q = "expected #{this} to have the same " + k + " as #{exp}", oe = "expected #{this} to not have the same " + k + " as #{exp}");
    var he = n(this, "deep") ? t.eql : void 0;
    this.assert(
      G(g, R, he, H, F),
      Q,
      oe,
      g,
      R,
      !0
    );
  });
  function ae(g, q) {
    q && n(this, "message", q);
    var R = n(this, "object"), x = n(this, "message"), j = n(this, "ssfi"), H = n(this, "contains"), F = n(this, "deep");
    new r(g, x, j, !0).to.be.an("array"), H ? this.assert(
      g.some(function(k) {
        return R.indexOf(k) > -1;
      }),
      "expected #{this} to contain one of #{exp}",
      "expected #{this} to not contain one of #{exp}",
      g,
      R
    ) : F ? this.assert(
      g.some(function(k) {
        return t.eql(R, k);
      }),
      "expected #{this} to deeply equal one of #{exp}",
      "expected #{this} to deeply equal one of #{exp}",
      g,
      R
    ) : this.assert(
      g.indexOf(R) > -1,
      "expected #{this} to be one of #{exp}",
      "expected #{this} to not be one of #{exp}",
      g,
      R
    );
  }
  r.addMethod("oneOf", ae);
  function xe(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "object"), j = n(this, "message"), H = n(this, "ssfi");
    new r(x, j, H, !0).is.a("function");
    var F;
    q ? (new r(g, j, H, !0).to.have.property(q), F = g[q]) : (new r(g, j, H, !0).is.a("function"), F = g()), x();
    var k = q == null ? g() : g[q], Q = q == null ? F : "." + q;
    n(this, "deltaMsgObj", Q), n(this, "initialDeltaValue", F), n(this, "finalDeltaValue", k), n(this, "deltaBehavior", "change"), n(this, "realDelta", k !== F), this.assert(
      F !== k,
      "expected " + Q + " to change",
      "expected " + Q + " to not change"
    );
  }
  r.addMethod("change", xe), r.addMethod("changes", xe);
  function ve(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "object"), j = n(this, "message"), H = n(this, "ssfi");
    new r(x, j, H, !0).is.a("function");
    var F;
    q ? (new r(g, j, H, !0).to.have.property(q), F = g[q]) : (new r(g, j, H, !0).is.a("function"), F = g()), new r(F, j, H, !0).is.a("number"), x();
    var k = q == null ? g() : g[q], Q = q == null ? F : "." + q;
    n(this, "deltaMsgObj", Q), n(this, "initialDeltaValue", F), n(this, "finalDeltaValue", k), n(this, "deltaBehavior", "increase"), n(this, "realDelta", k - F), this.assert(
      k - F > 0,
      "expected " + Q + " to increase",
      "expected " + Q + " to not increase"
    );
  }
  r.addMethod("increase", ve), r.addMethod("increases", ve);
  function $e(g, q, R) {
    R && n(this, "message", R);
    var x = n(this, "object"), j = n(this, "message"), H = n(this, "ssfi");
    new r(x, j, H, !0).is.a("function");
    var F;
    q ? (new r(g, j, H, !0).to.have.property(q), F = g[q]) : (new r(g, j, H, !0).is.a("function"), F = g()), new r(F, j, H, !0).is.a("number"), x();
    var k = q == null ? g() : g[q], Q = q == null ? F : "." + q;
    n(this, "deltaMsgObj", Q), n(this, "initialDeltaValue", F), n(this, "finalDeltaValue", k), n(this, "deltaBehavior", "decrease"), n(this, "realDelta", F - k), this.assert(
      k - F < 0,
      "expected " + Q + " to decrease",
      "expected " + Q + " to not decrease"
    );
  }
  r.addMethod("decrease", $e), r.addMethod("decreases", $e);
  function Te(g, q) {
    q && n(this, "message", q);
    var R = n(this, "deltaMsgObj"), x = n(this, "initialDeltaValue"), j = n(this, "finalDeltaValue"), H = n(this, "deltaBehavior"), F = n(this, "realDelta"), k;
    H === "change" ? k = Math.abs(j - x) === Math.abs(g) : k = F === Math.abs(g), this.assert(
      k,
      "expected " + R + " to " + H + " by " + g,
      "expected " + R + " to not " + H + " by " + g
    );
  }
  r.addMethod("by", Te), r.addProperty("extensible", function() {
    var g = n(this, "object"), q = g === Object(g) && Object.isExtensible(g);
    this.assert(
      q,
      "expected #{this} to be extensible",
      "expected #{this} to not be extensible"
    );
  }), r.addProperty("sealed", function() {
    var g = n(this, "object"), q = g === Object(g) ? Object.isSealed(g) : !0;
    this.assert(
      q,
      "expected #{this} to be sealed",
      "expected #{this} to not be sealed"
    );
  }), r.addProperty("frozen", function() {
    var g = n(this, "object"), q = g === Object(g) ? Object.isFrozen(g) : !0;
    this.assert(
      q,
      "expected #{this} to be frozen",
      "expected #{this} to not be frozen"
    );
  }), r.addProperty("finite", function(g) {
    var q = n(this, "object");
    this.assert(
      typeof q == "number" && isFinite(q),
      "expected #{this} to be a finite number",
      "expected #{this} to not be a finite number"
    );
  });
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var une = function(e, t) {
  e.expect = function(r, a) {
    return new e.Assertion(r, a);
  }, e.expect.fail = function(r, a, n, o) {
    throw arguments.length < 2 && (n = r, r = void 0), n = n || "expect.fail()", new e.AssertionError(n, {
      actual: r,
      expected: a,
      operator: o
    }, e.expect.fail);
  };
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var cne = function(e, t) {
  var r = e.Assertion;
  function a() {
    function n() {
      return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new r(this.valueOf(), null, n) : new r(this, null, n);
    }
    function o(s) {
      Object.defineProperty(this, "should", {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      });
    }
    Object.defineProperty(Object.prototype, "should", {
      set: o,
      get: n,
      configurable: !0
    });
    var i = {};
    return i.fail = function(s, l, u, c) {
      throw arguments.length < 2 && (u = s, s = void 0), u = u || "should.fail()", new e.AssertionError(u, {
        actual: s,
        expected: l,
        operator: c
      }, i.fail);
    }, i.equal = function(s, l, u) {
      new r(s, u).to.equal(l);
    }, i.Throw = function(s, l, u, c) {
      new r(s, c).to.Throw(l, u);
    }, i.exist = function(s, l) {
      new r(s, l).to.exist;
    }, i.not = {}, i.not.equal = function(s, l, u) {
      new r(s, u).to.not.equal(l);
    }, i.not.Throw = function(s, l, u, c) {
      new r(s, c).to.not.Throw(l, u);
    }, i.not.exist = function(s, l) {
      new r(s, l).to.not.exist;
    }, i.throw = i.Throw, i.not.throw = i.not.Throw, i;
  }
  e.should = a, e.Should = a;
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var dne = function(e, t) {
  /*!
   * Chai dependencies.
   */
  var r = e.Assertion, a = t.flag;
  /*!
   * Module export.
   */
  var n = e.assert = function(o, i) {
    var s = new r(null, null, e.assert, !0);
    s.assert(
      o,
      i,
      "[ negation message unavailable ]"
    );
  };
  n.fail = function(o, i, s, l) {
    throw arguments.length < 2 && (s = o, o = void 0), s = s || "assert.fail()", new e.AssertionError(s, {
      actual: o,
      expected: i,
      operator: l
    }, n.fail);
  }, n.isOk = function(o, i) {
    new r(o, i, n.isOk, !0).is.ok;
  }, n.isNotOk = function(o, i) {
    new r(o, i, n.isNotOk, !0).is.not.ok;
  }, n.equal = function(o, i, s) {
    var l = new r(o, s, n.equal, !0);
    l.assert(
      i == a(l, "object"),
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{act}",
      i,
      o,
      !0
    );
  }, n.notEqual = function(o, i, s) {
    var l = new r(o, s, n.notEqual, !0);
    l.assert(
      i != a(l, "object"),
      "expected #{this} to not equal #{exp}",
      "expected #{this} to equal #{act}",
      i,
      o,
      !0
    );
  }, n.strictEqual = function(o, i, s) {
    new r(o, s, n.strictEqual, !0).to.equal(i);
  }, n.notStrictEqual = function(o, i, s) {
    new r(o, s, n.notStrictEqual, !0).to.not.equal(i);
  }, n.deepEqual = n.deepStrictEqual = function(o, i, s) {
    new r(o, s, n.deepEqual, !0).to.eql(i);
  }, n.notDeepEqual = function(o, i, s) {
    new r(o, s, n.notDeepEqual, !0).to.not.eql(i);
  }, n.isAbove = function(o, i, s) {
    new r(o, s, n.isAbove, !0).to.be.above(i);
  }, n.isAtLeast = function(o, i, s) {
    new r(o, s, n.isAtLeast, !0).to.be.least(i);
  }, n.isBelow = function(o, i, s) {
    new r(o, s, n.isBelow, !0).to.be.below(i);
  }, n.isAtMost = function(o, i, s) {
    new r(o, s, n.isAtMost, !0).to.be.most(i);
  }, n.isTrue = function(o, i) {
    new r(o, i, n.isTrue, !0).is.true;
  }, n.isNotTrue = function(o, i) {
    new r(o, i, n.isNotTrue, !0).to.not.equal(!0);
  }, n.isFalse = function(o, i) {
    new r(o, i, n.isFalse, !0).is.false;
  }, n.isNotFalse = function(o, i) {
    new r(o, i, n.isNotFalse, !0).to.not.equal(!1);
  }, n.isNull = function(o, i) {
    new r(o, i, n.isNull, !0).to.equal(null);
  }, n.isNotNull = function(o, i) {
    new r(o, i, n.isNotNull, !0).to.not.equal(null);
  }, n.isNaN = function(o, i) {
    new r(o, i, n.isNaN, !0).to.be.NaN;
  }, n.isNotNaN = function(o, i) {
    new r(o, i, n.isNotNaN, !0).not.to.be.NaN;
  }, n.exists = function(o, i) {
    new r(o, i, n.exists, !0).to.exist;
  }, n.notExists = function(o, i) {
    new r(o, i, n.notExists, !0).to.not.exist;
  }, n.isUndefined = function(o, i) {
    new r(o, i, n.isUndefined, !0).to.equal(void 0);
  }, n.isDefined = function(o, i) {
    new r(o, i, n.isDefined, !0).to.not.equal(void 0);
  }, n.isFunction = function(o, i) {
    new r(o, i, n.isFunction, !0).to.be.a("function");
  }, n.isNotFunction = function(o, i) {
    new r(o, i, n.isNotFunction, !0).to.not.be.a("function");
  }, n.isObject = function(o, i) {
    new r(o, i, n.isObject, !0).to.be.a("object");
  }, n.isNotObject = function(o, i) {
    new r(o, i, n.isNotObject, !0).to.not.be.a("object");
  }, n.isArray = function(o, i) {
    new r(o, i, n.isArray, !0).to.be.an("array");
  }, n.isNotArray = function(o, i) {
    new r(o, i, n.isNotArray, !0).to.not.be.an("array");
  }, n.isString = function(o, i) {
    new r(o, i, n.isString, !0).to.be.a("string");
  }, n.isNotString = function(o, i) {
    new r(o, i, n.isNotString, !0).to.not.be.a("string");
  }, n.isNumber = function(o, i) {
    new r(o, i, n.isNumber, !0).to.be.a("number");
  }, n.isNotNumber = function(o, i) {
    new r(o, i, n.isNotNumber, !0).to.not.be.a("number");
  }, n.isFinite = function(o, i) {
    new r(o, i, n.isFinite, !0).to.be.finite;
  }, n.isBoolean = function(o, i) {
    new r(o, i, n.isBoolean, !0).to.be.a("boolean");
  }, n.isNotBoolean = function(o, i) {
    new r(o, i, n.isNotBoolean, !0).to.not.be.a("boolean");
  }, n.typeOf = function(o, i, s) {
    new r(o, s, n.typeOf, !0).to.be.a(i);
  }, n.notTypeOf = function(o, i, s) {
    new r(o, s, n.notTypeOf, !0).to.not.be.a(i);
  }, n.instanceOf = function(o, i, s) {
    new r(o, s, n.instanceOf, !0).to.be.instanceOf(i);
  }, n.notInstanceOf = function(o, i, s) {
    new r(o, s, n.notInstanceOf, !0).to.not.be.instanceOf(i);
  }, n.include = function(o, i, s) {
    new r(o, s, n.include, !0).include(i);
  }, n.notInclude = function(o, i, s) {
    new r(o, s, n.notInclude, !0).not.include(i);
  }, n.deepInclude = function(o, i, s) {
    new r(o, s, n.deepInclude, !0).deep.include(i);
  }, n.notDeepInclude = function(o, i, s) {
    new r(o, s, n.notDeepInclude, !0).not.deep.include(i);
  }, n.nestedInclude = function(o, i, s) {
    new r(o, s, n.nestedInclude, !0).nested.include(i);
  }, n.notNestedInclude = function(o, i, s) {
    new r(o, s, n.notNestedInclude, !0).not.nested.include(i);
  }, n.deepNestedInclude = function(o, i, s) {
    new r(o, s, n.deepNestedInclude, !0).deep.nested.include(i);
  }, n.notDeepNestedInclude = function(o, i, s) {
    new r(o, s, n.notDeepNestedInclude, !0).not.deep.nested.include(i);
  }, n.ownInclude = function(o, i, s) {
    new r(o, s, n.ownInclude, !0).own.include(i);
  }, n.notOwnInclude = function(o, i, s) {
    new r(o, s, n.notOwnInclude, !0).not.own.include(i);
  }, n.deepOwnInclude = function(o, i, s) {
    new r(o, s, n.deepOwnInclude, !0).deep.own.include(i);
  }, n.notDeepOwnInclude = function(o, i, s) {
    new r(o, s, n.notDeepOwnInclude, !0).not.deep.own.include(i);
  }, n.match = function(o, i, s) {
    new r(o, s, n.match, !0).to.match(i);
  }, n.notMatch = function(o, i, s) {
    new r(o, s, n.notMatch, !0).to.not.match(i);
  }, n.property = function(o, i, s) {
    new r(o, s, n.property, !0).to.have.property(i);
  }, n.notProperty = function(o, i, s) {
    new r(o, s, n.notProperty, !0).to.not.have.property(i);
  }, n.propertyVal = function(o, i, s, l) {
    new r(o, l, n.propertyVal, !0).to.have.property(i, s);
  }, n.notPropertyVal = function(o, i, s, l) {
    new r(o, l, n.notPropertyVal, !0).to.not.have.property(i, s);
  }, n.deepPropertyVal = function(o, i, s, l) {
    new r(o, l, n.deepPropertyVal, !0).to.have.deep.property(i, s);
  }, n.notDeepPropertyVal = function(o, i, s, l) {
    new r(o, l, n.notDeepPropertyVal, !0).to.not.have.deep.property(i, s);
  }, n.ownProperty = function(o, i, s) {
    new r(o, s, n.ownProperty, !0).to.have.own.property(i);
  }, n.notOwnProperty = function(o, i, s) {
    new r(o, s, n.notOwnProperty, !0).to.not.have.own.property(i);
  }, n.ownPropertyVal = function(o, i, s, l) {
    new r(o, l, n.ownPropertyVal, !0).to.have.own.property(i, s);
  }, n.notOwnPropertyVal = function(o, i, s, l) {
    new r(o, l, n.notOwnPropertyVal, !0).to.not.have.own.property(i, s);
  }, n.deepOwnPropertyVal = function(o, i, s, l) {
    new r(o, l, n.deepOwnPropertyVal, !0).to.have.deep.own.property(i, s);
  }, n.notDeepOwnPropertyVal = function(o, i, s, l) {
    new r(o, l, n.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(i, s);
  }, n.nestedProperty = function(o, i, s) {
    new r(o, s, n.nestedProperty, !0).to.have.nested.property(i);
  }, n.notNestedProperty = function(o, i, s) {
    new r(o, s, n.notNestedProperty, !0).to.not.have.nested.property(i);
  }, n.nestedPropertyVal = function(o, i, s, l) {
    new r(o, l, n.nestedPropertyVal, !0).to.have.nested.property(i, s);
  }, n.notNestedPropertyVal = function(o, i, s, l) {
    new r(o, l, n.notNestedPropertyVal, !0).to.not.have.nested.property(i, s);
  }, n.deepNestedPropertyVal = function(o, i, s, l) {
    new r(o, l, n.deepNestedPropertyVal, !0).to.have.deep.nested.property(i, s);
  }, n.notDeepNestedPropertyVal = function(o, i, s, l) {
    new r(o, l, n.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(i, s);
  }, n.lengthOf = function(o, i, s) {
    new r(o, s, n.lengthOf, !0).to.have.lengthOf(i);
  }, n.hasAnyKeys = function(o, i, s) {
    new r(o, s, n.hasAnyKeys, !0).to.have.any.keys(i);
  }, n.hasAllKeys = function(o, i, s) {
    new r(o, s, n.hasAllKeys, !0).to.have.all.keys(i);
  }, n.containsAllKeys = function(o, i, s) {
    new r(o, s, n.containsAllKeys, !0).to.contain.all.keys(i);
  }, n.doesNotHaveAnyKeys = function(o, i, s) {
    new r(o, s, n.doesNotHaveAnyKeys, !0).to.not.have.any.keys(i);
  }, n.doesNotHaveAllKeys = function(o, i, s) {
    new r(o, s, n.doesNotHaveAllKeys, !0).to.not.have.all.keys(i);
  }, n.hasAnyDeepKeys = function(o, i, s) {
    new r(o, s, n.hasAnyDeepKeys, !0).to.have.any.deep.keys(i);
  }, n.hasAllDeepKeys = function(o, i, s) {
    new r(o, s, n.hasAllDeepKeys, !0).to.have.all.deep.keys(i);
  }, n.containsAllDeepKeys = function(o, i, s) {
    new r(o, s, n.containsAllDeepKeys, !0).to.contain.all.deep.keys(i);
  }, n.doesNotHaveAnyDeepKeys = function(o, i, s) {
    new r(o, s, n.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(i);
  }, n.doesNotHaveAllDeepKeys = function(o, i, s) {
    new r(o, s, n.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(i);
  }, n.throws = function(o, i, s, l) {
    (typeof i == "string" || i instanceof RegExp) && (s = i, i = null);
    var u = new r(o, l, n.throws, !0).to.throw(i, s);
    return a(u, "object");
  }, n.doesNotThrow = function(o, i, s, l) {
    (typeof i == "string" || i instanceof RegExp) && (s = i, i = null), new r(o, l, n.doesNotThrow, !0).to.not.throw(i, s);
  }, n.operator = function(o, i, s, l) {
    var u;
    switch (i) {
      case "==":
        u = o == s;
        break;
      case "===":
        u = o === s;
        break;
      case ">":
        u = o > s;
        break;
      case ">=":
        u = o >= s;
        break;
      case "<":
        u = o < s;
        break;
      case "<=":
        u = o <= s;
        break;
      case "!=":
        u = o != s;
        break;
      case "!==":
        u = o !== s;
        break;
      default:
        throw l = l && l + ": ", new e.AssertionError(
          l + 'Invalid operator "' + i + '"',
          void 0,
          n.operator
        );
    }
    var c = new r(u, l, n.operator, !0);
    c.assert(
      a(c, "object") === !0,
      "expected " + t.inspect(o) + " to be " + i + " " + t.inspect(s),
      "expected " + t.inspect(o) + " to not be " + i + " " + t.inspect(s)
    );
  }, n.closeTo = function(o, i, s, l) {
    new r(o, l, n.closeTo, !0).to.be.closeTo(i, s);
  }, n.approximately = function(o, i, s, l) {
    new r(o, l, n.approximately, !0).to.be.approximately(i, s);
  }, n.sameMembers = function(o, i, s) {
    new r(o, s, n.sameMembers, !0).to.have.same.members(i);
  }, n.notSameMembers = function(o, i, s) {
    new r(o, s, n.notSameMembers, !0).to.not.have.same.members(i);
  }, n.sameDeepMembers = function(o, i, s) {
    new r(o, s, n.sameDeepMembers, !0).to.have.same.deep.members(i);
  }, n.notSameDeepMembers = function(o, i, s) {
    new r(o, s, n.notSameDeepMembers, !0).to.not.have.same.deep.members(i);
  }, n.sameOrderedMembers = function(o, i, s) {
    new r(o, s, n.sameOrderedMembers, !0).to.have.same.ordered.members(i);
  }, n.notSameOrderedMembers = function(o, i, s) {
    new r(o, s, n.notSameOrderedMembers, !0).to.not.have.same.ordered.members(i);
  }, n.sameDeepOrderedMembers = function(o, i, s) {
    new r(o, s, n.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(i);
  }, n.notSameDeepOrderedMembers = function(o, i, s) {
    new r(o, s, n.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(i);
  }, n.includeMembers = function(o, i, s) {
    new r(o, s, n.includeMembers, !0).to.include.members(i);
  }, n.notIncludeMembers = function(o, i, s) {
    new r(o, s, n.notIncludeMembers, !0).to.not.include.members(i);
  }, n.includeDeepMembers = function(o, i, s) {
    new r(o, s, n.includeDeepMembers, !0).to.include.deep.members(i);
  }, n.notIncludeDeepMembers = function(o, i, s) {
    new r(o, s, n.notIncludeDeepMembers, !0).to.not.include.deep.members(i);
  }, n.includeOrderedMembers = function(o, i, s) {
    new r(o, s, n.includeOrderedMembers, !0).to.include.ordered.members(i);
  }, n.notIncludeOrderedMembers = function(o, i, s) {
    new r(o, s, n.notIncludeOrderedMembers, !0).to.not.include.ordered.members(i);
  }, n.includeDeepOrderedMembers = function(o, i, s) {
    new r(o, s, n.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(i);
  }, n.notIncludeDeepOrderedMembers = function(o, i, s) {
    new r(o, s, n.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(i);
  }, n.oneOf = function(o, i, s) {
    new r(o, s, n.oneOf, !0).to.be.oneOf(i);
  }, n.changes = function(o, i, s, l) {
    arguments.length === 3 && typeof i == "function" && (l = s, s = null), new r(o, l, n.changes, !0).to.change(i, s);
  }, n.changesBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    new r(o, u, n.changesBy, !0).to.change(i, s).by(l);
  }, n.doesNotChange = function(o, i, s, l) {
    return arguments.length === 3 && typeof i == "function" && (l = s, s = null), new r(o, l, n.doesNotChange, !0).to.not.change(i, s);
  }, n.changesButNotBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    new r(o, u, n.changesButNotBy, !0).to.change(i, s).but.not.by(l);
  }, n.increases = function(o, i, s, l) {
    return arguments.length === 3 && typeof i == "function" && (l = s, s = null), new r(o, l, n.increases, !0).to.increase(i, s);
  }, n.increasesBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    new r(o, u, n.increasesBy, !0).to.increase(i, s).by(l);
  }, n.doesNotIncrease = function(o, i, s, l) {
    return arguments.length === 3 && typeof i == "function" && (l = s, s = null), new r(o, l, n.doesNotIncrease, !0).to.not.increase(i, s);
  }, n.increasesButNotBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    new r(o, u, n.increasesButNotBy, !0).to.increase(i, s).but.not.by(l);
  }, n.decreases = function(o, i, s, l) {
    return arguments.length === 3 && typeof i == "function" && (l = s, s = null), new r(o, l, n.decreases, !0).to.decrease(i, s);
  }, n.decreasesBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    new r(o, u, n.decreasesBy, !0).to.decrease(i, s).by(l);
  }, n.doesNotDecrease = function(o, i, s, l) {
    return arguments.length === 3 && typeof i == "function" && (l = s, s = null), new r(o, l, n.doesNotDecrease, !0).to.not.decrease(i, s);
  }, n.doesNotDecreaseBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    return new r(o, u, n.doesNotDecreaseBy, !0).to.not.decrease(i, s).by(l);
  }, n.decreasesButNotBy = function(o, i, s, l, u) {
    if (arguments.length === 4 && typeof i == "function") {
      var c = l;
      l = s, u = c;
    } else
      arguments.length === 3 && (l = s, s = null);
    new r(o, u, n.decreasesButNotBy, !0).to.decrease(i, s).but.not.by(l);
  };
  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
  n.ifError = function(o) {
    if (o)
      throw o;
  }, n.isExtensible = function(o, i) {
    new r(o, i, n.isExtensible, !0).to.be.extensible;
  }, n.isNotExtensible = function(o, i) {
    new r(o, i, n.isNotExtensible, !0).to.not.be.extensible;
  }, n.isSealed = function(o, i) {
    new r(o, i, n.isSealed, !0).to.be.sealed;
  }, n.isNotSealed = function(o, i) {
    new r(o, i, n.isNotSealed, !0).to.not.be.sealed;
  }, n.isFrozen = function(o, i) {
    new r(o, i, n.isFrozen, !0).to.be.frozen;
  }, n.isNotFrozen = function(o, i) {
    new r(o, i, n.isNotFrozen, !0).to.not.be.frozen;
  }, n.isEmpty = function(o, i) {
    new r(o, i, n.isEmpty, !0).to.be.empty;
  }, n.isNotEmpty = function(o, i) {
    new r(o, i, n.isNotEmpty, !0).to.not.be.empty;
  };
  /*!
   * Aliases.
   */
  (function o(i, s) {
    return n[s] = n[i], o;
  })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Uw;
function fn() {
  return Uw || (Uw = 1, function(e) {
    var t = [];
    /*!
     * Chai version
     */
    e.version = "4.3.8";
    /*!
     * Assertion Error
     */
    e.AssertionError = S1;
    /*!
     * Utils for plugins (not exported)
     */
    var r = ine();
    e.use = function(u) {
      return ~t.indexOf(u) || (u(e, r), t.push(u)), e;
    };
    /*!
     * Utility Functions
     */
    e.util = r;
    /*!
     * Configuration
     */
    var a = oa;
    e.config = a;
    /*!
     * Primary `Assertion` prototype
     */
    var n = sne;
    e.use(n);
    /*!
     * Core Assertions
     */
    var o = lne;
    e.use(o);
    /*!
     * Expect interface
     */
    var i = une;
    e.use(i);
    /*!
     * Should interface
     */
    var s = cne;
    e.use(s);
    /*!
     * Assert interface
     */
    var l = dne;
    e.use(l);
  }(Op)), Op;
}
var fne = fn();
const Vt = /* @__PURE__ */ Lr(fne), Bp = Vt.expect;
Vt.version;
Vt.Assertion;
Vt.AssertionError;
const fi = Vt.util;
Vt.config;
const no = Vt.use;
Vt.should;
const pne = Vt.assert;
Vt.core;
var Wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mne(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jo(e, t) {
  if (!e)
    throw new Error(t);
}
function On(e, t) {
  return typeof t === e;
}
function hne(e) {
  return e instanceof Promise;
}
function fh(e, t, r) {
  Object.defineProperty(e, t, r);
}
function qn(e, t, r) {
  Object.defineProperty(e, t, { value: r });
}
var Ma = Symbol.for("tinyspy:spy"), vne = /* @__PURE__ */ new Set(), yne = (e) => {
  e.called = !1, e.callCount = 0, e.calls = [], e.results = [], e.next = [];
}, bne = (e) => (fh(e, Ma, { value: { reset: () => yne(e[Ma]) } }), e[Ma]), ph = (e) => e[Ma] || bne(e);
function gne(e) {
  jo(On("function", e) || On("undefined", e), "cannot spy on a non-function value");
  let t = function(...a) {
    let n = ph(t);
    n.called = !0, n.callCount++, n.calls.push(a);
    let o = n.next.shift();
    if (o) {
      n.results.push(o);
      let [u, c] = o;
      if (u === "ok")
        return c;
      throw c;
    }
    let i, s = "ok";
    if (n.impl)
      try {
        new.target ? i = Reflect.construct(n.impl, a, new.target) : i = n.impl.apply(this, a), s = "ok";
      } catch (u) {
        throw i = u, s = "error", n.results.push([s, u]), u;
      }
    let l = [s, i];
    if (hne(i)) {
      let u = i.then((c) => l[1] = c).catch((c) => {
        throw l[0] = "error", l[1] = c, c;
      });
      Object.assign(u, i), i = u;
    }
    return n.results.push(l), i;
  };
  qn(t, "_isMockFunction", !0), qn(t, "length", e ? e.length : 0), qn(t, "name", e && e.name || "spy");
  let r = ph(t);
  return r.reset(), r.impl = e, t;
}
var Hw = (e, t) => Object.getOwnPropertyDescriptor(e, t);
function B1(e, t, r) {
  jo(!On("undefined", e), "spyOn could not find an object to spy upon"), jo(On("object", e) || On("function", e), "cannot spyOn on a primitive value");
  let a = () => {
    if (!On("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [n, o] = a(), i = Hw(e, n), s = Object.getPrototypeOf(e), l = s && Hw(s, n), u = i || l;
  jo(u || n in e, `${String(n)} does not exist`);
  let c = !1;
  o === "value" && u && !u.value && u.get && (o = "get", c = !0, r = u.get());
  let d;
  u ? d = u[o] : o !== "value" ? d = () => e[n] : d = e[n], r || (r = d);
  let f = gne(r), p = (y) => {
    let { value: h, ...$ } = u || {
      configurable: !0,
      writable: !0
    };
    o !== "value" && delete $.writable, $[o] = y, fh(e, n, $);
  }, v = () => u ? fh(e, n, u) : p(d), b = f[Ma];
  return qn(b, "restore", v), qn(b, "getOriginal", () => c ? d() : d), qn(b, "willCall", (y) => (b.impl = y, f)), p(c ? () => f : f), vne.add(f), f;
}
const Fo = /* @__PURE__ */ new Set();
function L1(e) {
  return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction;
}
function wne(e, t, r) {
  const n = r ? { [{
    get: "getter",
    set: "setter"
  }[r]]: t } : t, o = B1(e, n);
  return U1(o);
}
let _ne = 0;
function U1(e) {
  const t = e;
  let r, a = [], n = [];
  const o = ph(e), i = {
    get calls() {
      return o.calls;
    },
    get instances() {
      return a;
    },
    get invocationCallOrder() {
      return n;
    },
    get results() {
      return o.results.map(([f, p]) => ({ type: f === "error" ? "throw" : "return", value: p }));
    },
    get lastCall() {
      return o.calls[o.calls.length - 1];
    }
  };
  let s = [], l = !1;
  function u(...f) {
    return a.push(this), n.push(++_ne), (l ? r : s.shift() || r || o.getOriginal() || (() => {
    })).apply(this, f);
  }
  let c = t.name;
  t.getMockName = () => c || "vi.fn()", t.mockName = (f) => (c = f, t), t.mockClear = () => (o.reset(), a = [], n = [], t), t.mockReset = () => (t.mockClear(), r = () => {
  }, s = [], t), t.mockRestore = () => (t.mockReset(), o.restore(), r = void 0, t), t.getMockImplementation = () => r, t.mockImplementation = (f) => (r = f, o.willCall(u), t), t.mockImplementationOnce = (f) => (s.push(f), t);
  function d(f, p) {
    const v = r;
    r = f, o.willCall(u), l = !0;
    const b = () => {
      r = v, l = !1;
    }, y = p();
    return y instanceof Promise ? y.then(() => (b(), t)) : (b(), t);
  }
  return t.withImplementation = d, t.mockReturnThis = () => t.mockImplementation(function() {
    return this;
  }), t.mockReturnValue = (f) => t.mockImplementation(() => f), t.mockReturnValueOnce = (f) => t.mockImplementationOnce(() => f), t.mockResolvedValue = (f) => t.mockImplementation(() => Promise.resolve(f)), t.mockResolvedValueOnce = (f) => t.mockImplementationOnce(() => Promise.resolve(f)), t.mockRejectedValue = (f) => t.mockImplementation(() => Promise.reject(f)), t.mockRejectedValueOnce = (f) => t.mockImplementationOnce(() => Promise.reject(f)), Object.defineProperty(t, "mock", {
    get: () => i
  }), o.willCall(u), Fo.add(t), t;
}
function $ne(e) {
  const t = U1(B1({ spy: e || (() => {
  }) }, "spy"));
  return e && t.mockImplementation(e), t;
}
const pi = Symbol.for("matchers-object"), bv = Symbol.for("$$jest-matchers-object"), ao = Symbol.for("expect-global"), gv = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, pi)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, pi, {
    get: () => e
  }), Object.defineProperty(globalThis, bv, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[ao]),
      matchers: t
    })
  }), Object.defineProperty(globalThis, gv, {
    get: () => r
  });
}
function In(e) {
  return globalThis[pi].get(e);
}
function Lp(e, t) {
  const r = globalThis[pi], a = r.get(t) || {};
  Object.assign(a, e), r.set(t, a);
}
function H1() {
  const e = () => uv(), t = e().green, r = e().red, a = e().inverse, n = e().bold, o = e().dim;
  function i(d, f = "received", p = "expected", v = {}) {
    const {
      comment: b = "",
      isDirectExpectCall: y = !1,
      // seems redundant with received === ''
      isNot: h = !1,
      promise: $ = "",
      secondArgument: A = "",
      expectedColor: S = t,
      receivedColor: T = r,
      secondArgumentColor: E = t
    } = v;
    let M = "", L = "expect";
    return !y && f !== "" && (M += o(`${L}(`) + T(f), L = ")"), $ !== "" && (M += o(`${L}.`) + $, L = ""), h && (M += `${o(`${L}.`)}not`, L = ""), d.includes(".") ? L += d : (M += o(`${L}.`) + d, L = ""), p === "" ? L += "()" : (M += o(`${L}(`) + S(p), A && (M += o(", ") + E(A)), L = ")"), b !== "" && (L += ` // ${b}`), L !== "" && (M += o(L)), M;
  }
  const s = "·", l = (d) => d.replace(/\s+$/gm, (f) => s.repeat(f.length));
  return {
    EXPECTED_COLOR: t,
    RECEIVED_COLOR: r,
    INVERTED_COLOR: a,
    BOLD_WEIGHT: n,
    DIM_COLOR: o,
    matcherHint: i,
    printReceived: (d) => r(l(Yt(d))),
    printExpected: (d) => t(l(Yt(d)))
  };
}
function ze(e, t, r, a) {
  return r = r || [], V1(e, t, [], [], r, a ? z1 : Cne);
}
function Vw(e) {
  return !!e && typeof e == "object" && "asymmetricMatch" in e && kt("Function", e.asymmetricMatch);
}
function Ene(e, t) {
  const r = Vw(e), a = Vw(t);
  if (!(r && a)) {
    if (r)
      return e.asymmetricMatch(t);
    if (a)
      return t.asymmetricMatch(e);
  }
}
function V1(e, t, r, a, n, o) {
  let i = !0;
  const s = Ene(e, t);
  if (s !== void 0)
    return s;
  for (let p = 0; p < n.length; p++) {
    const v = n[p](e, t);
    if (v !== void 0)
      return v;
  }
  if (e instanceof Error && t instanceof Error)
    return e.message === t.message;
  if (typeof URL == "function" && e instanceof URL && t instanceof URL)
    return e.href === t.href;
  if (Object.is(e, t))
    return !0;
  if (e === null || t === null)
    return e === t;
  const l = Object.prototype.toString.call(e);
  if (l !== Object.prototype.toString.call(t))
    return !1;
  switch (l) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof e != typeof t ? !1 : typeof e != "object" && typeof t != "object" ? Object.is(e, t) : Object.is(e.valueOf(), t.valueOf());
    case "[object Date]": {
      const p = +e, v = +t;
      return p === v || Number.isNaN(p) && Number.isNaN(v);
    }
    case "[object RegExp]":
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != "object" || typeof t != "object")
    return !1;
  if (Ww(e) && Ww(t))
    return e.isEqualNode(t);
  let u = r.length;
  for (; u--; ) {
    if (r[u] === e)
      return a[u] === t;
    if (a[u] === t)
      return !1;
  }
  if (r.push(e), a.push(t), l === "[object Array]" && e.length !== t.length)
    return !1;
  const c = zw(e, o);
  let d, f = c.length;
  if (zw(t, o).length !== f)
    return !1;
  for (; f--; )
    if (d = c[f], i = o(t, d) && V1(e[d], t[d], r, a, n, o), !i)
      return !1;
  return r.pop(), a.pop(), i;
}
function zw(e, t) {
  const r = [];
  for (const a in e)
    t(e, a) && r.push(a);
  return r.concat(
    Object.getOwnPropertySymbols(e).filter(
      (a) => Object.getOwnPropertyDescriptor(e, a).enumerable
    )
  );
}
function Cne(e, t) {
  return z1(e, t) && e[t] !== void 0;
}
function z1(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kt(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function Ww(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number" && "nodeName" in e && typeof e.nodeName == "string" && "isEqualNode" in e && typeof e.isEqualNode == "function";
}
const Rne = "@@__IMMUTABLE_KEYED__@@", Pne = "@@__IMMUTABLE_SET__@@", W1 = "@@__IMMUTABLE_ORDERED__@@";
function xne(e) {
  return !!(e && e[Rne] && !e[W1]);
}
function Sne(e) {
  return !!(e && e[Pne] && !e[W1]);
}
const G1 = Symbol.iterator;
function Gw(e) {
  return !!(e != null && e[G1]);
}
function ft(e, t, r = [], a = []) {
  if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !Gw(e) || !Gw(t))
    return;
  if (e.constructor !== t.constructor)
    return !1;
  let n = r.length;
  for (; n--; )
    if (r[n] === e)
      return a[n] === t;
  r.push(e), a.push(t);
  const o = (s, l) => ft(s, l, [...r], [...a]);
  if (e.size !== void 0) {
    if (e.size !== t.size)
      return !1;
    if (kt("Set", e) || Sne(e)) {
      let s = !0;
      for (const l of e)
        if (!t.has(l)) {
          let u = !1;
          for (const c of t)
            ze(l, c, [o]) === !0 && (u = !0);
          if (u === !1) {
            s = !1;
            break;
          }
        }
      return r.pop(), a.pop(), s;
    } else if (kt("Map", e) || xne(e)) {
      let s = !0;
      for (const l of e)
        if (!t.has(l[0]) || !ze(l[1], t.get(l[0]), [o])) {
          let u = !1;
          for (const c of t) {
            const d = ze(l[0], c[0], [
              o
            ]);
            let f = !1;
            d === !0 && (f = ze(l[1], c[1], [
              o
            ])), f === !0 && (u = !0);
          }
          if (u === !1) {
            s = !1;
            break;
          }
        }
      return r.pop(), a.pop(), s;
    }
  }
  const i = t[G1]();
  for (const s of e) {
    const l = i.next();
    if (l.done || !ze(s, l.value, [o]))
      return !1;
  }
  return i.next().done ? (r.pop(), a.pop(), !0) : !1;
}
function K1(e, t) {
  return !e || typeof e != "object" || e === Object.prototype ? !1 : Object.prototype.hasOwnProperty.call(e, t) || K1(Object.getPrototypeOf(e), t);
}
function Kw(e) {
  return xR(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function lf(e, t) {
  const r = (a = /* @__PURE__ */ new WeakMap()) => (n, o) => {
    if (Kw(o))
      return Object.keys(o).every((i) => {
        if (Kw(o[i])) {
          if (a.has(o[i]))
            return ze(n[i], o[i], [ft]);
          a.set(o[i], !0);
        }
        const s = n != null && K1(n, i) && ze(n[i], o[i], [
          ft,
          r(a)
        ]);
        return a.delete(o[i]), s;
      });
  };
  return r()(e, t);
}
function mh(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor))
    return !1;
}
function Yw(e, t) {
  let r = e, a = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer))
      return;
    try {
      r = new DataView(e), a = new DataView(t);
    } catch {
      return;
    }
  }
  if (r.byteLength !== a.byteLength)
    return !1;
  for (let n = 0; n < r.byteLength; n++)
    if (r.getUint8(n) !== a.getUint8(n))
      return !1;
  return !0;
}
function Xw(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t))
    return;
  const r = Object.keys(e), a = Object.keys(t);
  return ze(e, t, [ft, mh], !0) && ze(r, a);
}
function One(e, t = "#{this}", r = "#{exp}") {
  const a = `expected ${t} to be ${r} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(e) ? `${a}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
` : a;
}
function Tne(e, t) {
  return `${t} ${e}${t === 1 ? "" : "s"}`;
}
let Vr = class {
  constructor(t, r = !1) {
    // should have "jest" to be compatible with its ecosystem
    Me(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
    this.sample = t, this.inverse = r;
  }
  getMatcherContext(t) {
    return {
      ...In(t || globalThis[ao]),
      equals: ze,
      isNot: this.inverse,
      customTesters: [],
      utils: {
        ...H1(),
        diff: za,
        stringify: Yt,
        iterableEquality: ft,
        subsetEquality: lf
      }
    };
  }
};
class Jw extends Vr {
  constructor(t, r = !1) {
    if (!kt("String", t))
      throw new Error("Expected is not a string");
    super(t, r);
  }
  asymmetricMatch(t) {
    const r = kt("String", t) && t.includes(this.sample);
    return this.inverse ? !r : r;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class Ane extends Vr {
  asymmetricMatch(t) {
    return t != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class Qw extends Vr {
  constructor(t, r = !1) {
    super(t, r);
  }
  getPrototype(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.constructor.prototype === t ? null : t.constructor.prototype;
  }
  hasProperty(t, r) {
    return t ? Object.prototype.hasOwnProperty.call(t, r) ? !0 : this.hasProperty(this.getPrototype(t), r) : !1;
  }
  asymmetricMatch(t) {
    if (typeof this.sample != "object")
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    let r = !0;
    for (const a in this.sample)
      if (!this.hasProperty(t, a) || !ze(this.sample[a], t[a])) {
        r = !1;
        break;
      }
    return this.inverse ? !r : r;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class Zw extends Vr {
  constructor(t, r = !1) {
    super(t, r);
  }
  asymmetricMatch(t) {
    if (!Array.isArray(this.sample))
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    const r = this.sample.length === 0 || Array.isArray(t) && this.sample.every(
      (a) => t.some((n) => ze(a, n))
    );
    return this.inverse ? !r : r;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class Mne extends Vr {
  constructor(t) {
    if (typeof t > "u")
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    super(t);
  }
  fnNameFor(t) {
    if (t.name)
      return t.name;
    const a = Function.prototype.toString.call(t).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return a ? a[1] : "<anonymous>";
  }
  asymmetricMatch(t) {
    return this.sample === String ? typeof t == "string" || t instanceof String : this.sample === Number ? typeof t == "number" || t instanceof Number : this.sample === Function ? typeof t == "function" || t instanceof Function : this.sample === Boolean ? typeof t == "boolean" || t instanceof Boolean : this.sample === BigInt ? typeof t == "bigint" || t instanceof BigInt : this.sample === Symbol ? typeof t == "symbol" || t instanceof Symbol : this.sample === Object ? typeof t == "object" : t instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class e_ extends Vr {
  constructor(t, r = !1) {
    if (!kt("String", t) && !kt("RegExp", t))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(t), r);
  }
  asymmetricMatch(t) {
    const r = kt("String", t) && this.sample.test(t);
    return this.inverse ? !r : r;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
class t_ extends Vr {
  constructor(r, a = 2, n = !1) {
    if (!kt("Number", r))
      throw new Error("Expected is not a Number");
    if (!kt("Number", a))
      throw new Error("Precision is not a Number");
    super(r);
    Me(this, "precision");
    this.inverse = n, this.precision = a;
  }
  asymmetricMatch(r) {
    if (!kt("Number", r))
      return !1;
    let a = !1;
    return r === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? a = !0 : a = Math.abs(this.sample - r) < 10 ** -this.precision / 2, this.inverse ? !a : a;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${Tne("digit", this.precision)})`
    ].join(" ");
  }
}
const qne = (e, t) => {
  t.addMethod(
    e.expect,
    "anything",
    () => new Ane()
  ), t.addMethod(
    e.expect,
    "any",
    (r) => new Mne(r)
  ), t.addMethod(
    e.expect,
    "stringContaining",
    (r) => new Jw(r)
  ), t.addMethod(
    e.expect,
    "objectContaining",
    (r) => new Qw(r)
  ), t.addMethod(
    e.expect,
    "arrayContaining",
    (r) => new Zw(r)
  ), t.addMethod(
    e.expect,
    "stringMatching",
    (r) => new e_(r)
  ), t.addMethod(
    e.expect,
    "closeTo",
    (r, a) => new t_(r, a)
  ), e.expect.not = {
    stringContaining: (r) => new Jw(r, !0),
    objectContaining: (r) => new Qw(r, !0),
    arrayContaining: (r) => new Zw(r, !0),
    stringMatching: (r) => new e_(r, !0),
    closeTo: (r, a) => new t_(r, a, !0)
  };
};
function r_(e, t) {
  return e && t instanceof Promise && (t = t.finally(() => {
    const r = e.promises.indexOf(t);
    r !== -1 && e.promises.splice(r, 1);
  }), e.promises || (e.promises = []), e.promises.push(t)), t;
}
function Y1(e, t) {
  return function(...r) {
    var a;
    const n = e.flag(this, "vitest-test");
    if (!(n != null && n.context._local ? n.context.expect.getState() : In(globalThis[ao])).soft)
      return t.apply(this, r);
    if (!n)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      return t.apply(this, r);
    } catch (i) {
      n.result || (n.result = { state: "fail" }), n.result.state = "fail", (a = n.result).errors || (a.errors = []), n.result.errors.push(qte(i));
    }
  };
}
const Ine = (e, t) => {
  const { AssertionError: r } = e, a = () => uv();
  function n(c, d) {
    const f = (p) => {
      const v = Y1(t, d);
      t.addMethod(e.Assertion.prototype, p, v), t.addMethod(globalThis[bv].matchers, p, v);
    };
    Array.isArray(c) ? c.forEach((p) => f(p)) : f(c);
  }
  ["throw", "throws", "Throw"].forEach((c) => {
    t.overwriteMethod(e.Assertion.prototype, c, (d) => function(...f) {
      const p = t.flag(this, "promise"), v = t.flag(this, "object"), b = t.flag(this, "negate");
      if (p === "rejects")
        t.flag(this, "object", () => {
          throw v;
        });
      else if (p === "resolves" && typeof v != "function") {
        if (b)
          return;
        {
          const y = t.flag(this, "message") || "expected promise to throw an error, but it didn't", h = {
            showDiff: !1
          };
          throw new r(y, h, t.flag(this, "ssfi"));
        }
      }
      d.apply(this, f);
    });
  }), n("withTest", function(c) {
    return t.flag(this, "vitest-test", c), this;
  }), n("toEqual", function(c) {
    const d = t.flag(this, "object"), f = ze(
      d,
      c,
      [ft]
    );
    return this.assert(
      f,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      c,
      d
    );
  }), n("toStrictEqual", function(c) {
    const d = t.flag(this, "object"), f = ze(
      d,
      c,
      [
        ft,
        mh,
        Xw,
        Yw
      ],
      !0
    );
    return this.assert(
      f,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      c,
      d
    );
  }), n("toBe", function(c) {
    const d = this._obj, f = Object.is(d, c);
    let p = "";
    return f || (ze(
      d,
      c,
      [
        ft,
        mh,
        Xw,
        Yw
      ],
      !0
    ) ? p = "toStrictEqual" : ze(
      d,
      c,
      [ft]
    ) && (p = "toEqual")), this.assert(
      f,
      One(p),
      "expected #{this} not to be #{exp} // Object.is equality",
      c,
      d
    );
  }), n("toMatchObject", function(c) {
    const d = this._obj;
    return this.assert(
      ze(d, c, [ft, lf]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      c,
      d
    );
  }), n("toMatch", function(c) {
    return typeof c == "string" ? this.include(c) : this.match(c);
  }), n("toContain", function(c) {
    const d = this._obj;
    if (typeof Node < "u" && d instanceof Node) {
      if (!(c instanceof Node))
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof c}`);
      return this.assert(
        d.contains(c),
        "expected #{this} to contain element #{exp}",
        "expected #{this} not to contain element #{exp}",
        c,
        d
      );
    }
    if (typeof DOMTokenList < "u" && d instanceof DOMTokenList) {
      Bt(c, "class name", ["string"]);
      const p = t.flag(this, "negate") ? d.value.replace(c, "").trim() : `${d.value} ${c}`;
      return this.assert(
        d.contains(c),
        `expected "${d.value}" to contain "${c}"`,
        `expected "${d.value}" not to contain "${c}"`,
        p,
        d.value
      );
    }
    return d != null && typeof d != "string" && t.flag(this, "object", Array.from(d)), this.contain(c);
  }), n("toContainEqual", function(c) {
    const d = t.flag(this, "object"), f = Array.from(d).findIndex((p) => ze(p, c));
    this.assert(
      f !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      c
    );
  }), n("toBeTruthy", function() {
    const c = t.flag(this, "object");
    this.assert(
      !!c,
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      c,
      !1
    );
  }), n("toBeFalsy", function() {
    const c = t.flag(this, "object");
    this.assert(
      !c,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      c,
      !1
    );
  }), n("toBeGreaterThan", function(c) {
    const d = this._obj;
    return Bt(d, "actual", ["number", "bigint"]), Bt(c, "expected", ["number", "bigint"]), this.assert(
      d > c,
      `expected ${d} to be greater than ${c}`,
      `expected ${d} to be not greater than ${c}`,
      d,
      c,
      !1
    );
  }), n("toBeGreaterThanOrEqual", function(c) {
    const d = this._obj;
    return Bt(d, "actual", ["number", "bigint"]), Bt(c, "expected", ["number", "bigint"]), this.assert(
      d >= c,
      `expected ${d} to be greater than or equal to ${c}`,
      `expected ${d} to be not greater than or equal to ${c}`,
      d,
      c,
      !1
    );
  }), n("toBeLessThan", function(c) {
    const d = this._obj;
    return Bt(d, "actual", ["number", "bigint"]), Bt(c, "expected", ["number", "bigint"]), this.assert(
      d < c,
      `expected ${d} to be less than ${c}`,
      `expected ${d} to be not less than ${c}`,
      d,
      c,
      !1
    );
  }), n("toBeLessThanOrEqual", function(c) {
    const d = this._obj;
    return Bt(d, "actual", ["number", "bigint"]), Bt(c, "expected", ["number", "bigint"]), this.assert(
      d <= c,
      `expected ${d} to be less than or equal to ${c}`,
      `expected ${d} to be not less than or equal to ${c}`,
      d,
      c,
      !1
    );
  }), n("toBeNaN", function() {
    return this.be.NaN;
  }), n("toBeUndefined", function() {
    return this.be.undefined;
  }), n("toBeNull", function() {
    return this.be.null;
  }), n("toBeDefined", function() {
    const c = t.flag(this, "negate");
    return t.flag(this, "negate", !1), c ? this.be.undefined : this.not.be.undefined;
  }), n("toBeTypeOf", function(c) {
    const d = typeof this._obj, f = c === d;
    return this.assert(
      f,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      c,
      d
    );
  }), n("toBeInstanceOf", function(c) {
    return this.instanceOf(c);
  }), n("toHaveLength", function(c) {
    return this.have.length(c);
  }), n("toHaveProperty", function(...c) {
    Array.isArray(c[0]) && (c[0] = c[0].map((A) => String(A).replace(/([.[\]])/g, "\\$1")).join("."));
    const d = this._obj, [f, p] = c, v = () => Object.prototype.hasOwnProperty.call(d, f) ? { value: d[f], exists: !0 } : t.getPathInfo(d, f), { value: b, exists: y } = v(), h = y && (c.length === 1 || ze(p, b)), $ = c.length === 1 ? "" : ` with value ${t.objDisplay(p)}`;
    return this.assert(
      h,
      `expected #{this} to have property "${f}"${$}`,
      `expected #{this} to not have property "${f}"${$}`,
      d
    );
  }), n("toBeCloseTo", function(c, d = 2) {
    const f = this._obj;
    let p = !1, v = 0, b = 0;
    return c === Number.POSITIVE_INFINITY && f === Number.POSITIVE_INFINITY || c === Number.NEGATIVE_INFINITY && f === Number.NEGATIVE_INFINITY ? p = !0 : (v = 10 ** -d / 2, b = Math.abs(f - c), p = b < v), this.assert(
      p,
      `expected #{this} to be close to #{exp}, received difference is ${b}, but expected ${v}`,
      `expected #{this} to not be close to #{exp}, received difference is ${b}, but expected ${v}`,
      c,
      f,
      !1
    );
  });
  const o = (c) => {
    if (!L1(c._obj))
      throw new TypeError(`${t.inspect(c._obj)} is not a spy or a call to a spy!`);
  }, i = (c) => (o(c), c._obj), s = (c) => {
    const d = c % 10, f = c % 100;
    return d === 1 && f !== 11 ? `${c}st` : d === 2 && f !== 12 ? `${c}nd` : d === 3 && f !== 13 ? `${c}rd` : `${c}th`;
  }, l = (c, d, f) => (c.mock.calls && (d += a().gray(`

Received: 

${c.mock.calls.map((p, v) => {
    let b = a().bold(`  ${s(v + 1)} ${c.getMockName()} call:

`);
    return f ? b += za(f, p, { omitAnnotationLines: !0 }) : b += Yt(p).split(`
`).map((y) => `    ${y}`).join(`
`), b += `
`, b;
  }).join(`
`)}`)), d += a().gray(`

Number of calls: ${a().bold(c.mock.calls.length)}
`), d), u = (c, d, f) => (d += a().gray(`

Received: 

${c.mock.results.map((p, v) => {
    let b = a().bold(`  ${s(v + 1)} ${c.getMockName()} call return:

`);
    return f ? b += za(f, p.value, { omitAnnotationLines: !0 }) : b += Yt(p).split(`
`).map((y) => `    ${y}`).join(`
`), b += `
`, b;
  }).join(`
`)}`), d += a().gray(`

Number of calls: ${a().bold(c.mock.calls.length)}
`), d);
  n(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(c) {
    const d = i(this), f = d.getMockName(), p = d.mock.calls.length;
    return this.assert(
      p === c,
      `expected "${f}" to be called #{exp} times, but got ${p} times`,
      `expected "${f}" to not be called #{exp} times`,
      c,
      p,
      !1
    );
  }), n("toHaveBeenCalledOnce", function() {
    const c = i(this), d = c.getMockName(), f = c.mock.calls.length;
    return this.assert(
      f === 1,
      `expected "${d}" to be called once, but got ${f} times`,
      `expected "${d}" to not be called once`,
      1,
      f,
      !1
    );
  }), n(["toHaveBeenCalled", "toBeCalled"], function() {
    const c = i(this), d = c.getMockName(), f = c.mock.calls.length, p = f > 0, v = t.flag(this, "negate");
    let b = t.getMessage(
      this,
      [
        p,
        `expected "${d}" to be called at least once`,
        `expected "${d}" to not be called at all, but actually been called ${f} times`,
        !0,
        p
      ]
    );
    if (p && v && (b = l(c, b)), p && v || !p && !v)
      throw new r(b);
  }), n(["toHaveBeenCalledWith", "toBeCalledWith"], function(...c) {
    const d = i(this), f = d.getMockName(), p = d.mock.calls.some((y) => ze(y, c, [ft])), v = t.flag(this, "negate"), b = t.getMessage(
      this,
      [
        p,
        `expected "${f}" to be called with arguments: #{exp}`,
        `expected "${f}" to not be called with arguments: #{exp}`,
        c
      ]
    );
    if (p && v || !p && !v)
      throw new r(l(d, b, c));
  }), n(["toHaveBeenNthCalledWith", "nthCalledWith"], function(c, ...d) {
    const f = i(this), p = f.getMockName(), v = f.mock.calls[c - 1];
    this.assert(
      ze(v, d, [ft]),
      `expected ${s(c)} "${p}" call to have been called with #{exp}`,
      `expected ${s(c)} "${p}" call to not have been called with #{exp}`,
      d,
      v
    );
  }), n(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...c) {
    const d = i(this), f = d.getMockName(), p = d.mock.calls[d.mock.calls.length - 1];
    this.assert(
      ze(p, c, [ft]),
      `expected last "${f}" call to have been called with #{exp}`,
      `expected last "${f}" call to not have been called with #{exp}`,
      c,
      p
    );
  }), n(["toThrow", "toThrowError"], function(c) {
    if (typeof c == "string" || typeof c > "u" || c instanceof RegExp)
      return this.throws(c);
    const d = this._obj, f = t.flag(this, "promise"), p = t.flag(this, "negate");
    let v = null;
    if (f === "rejects")
      v = d;
    else if (f === "resolves" && typeof d != "function") {
      if (p)
        return;
      {
        const b = t.flag(this, "message") || "expected promise to throw an error, but it didn't", y = {
          showDiff: !1
        };
        throw new r(b, y, t.flag(this, "ssfi"));
      }
    } else {
      let b = !1;
      try {
        d();
      } catch (y) {
        b = !0, v = y;
      }
      if (!b && !p) {
        const y = t.flag(this, "message") || "expected function to throw an error, but it didn't", h = {
          showDiff: !1
        };
        throw new r(y, h, t.flag(this, "ssfi"));
      }
    }
    if (typeof c == "function") {
      const b = c.name || c.prototype.constructor.name;
      return this.assert(
        v && v instanceof c,
        `expected error to be instance of ${b}`,
        `expected error not to be instance of ${b}`,
        c,
        v,
        !1
      );
    }
    if (c instanceof Error)
      return this.assert(
        v && c.message === v.message,
        `expected error to have message: ${c.message}`,
        `expected error not to have message: ${c.message}`,
        c.message,
        v && v.message
      );
    if (typeof c == "object" && "asymmetricMatch" in c && typeof c.asymmetricMatch == "function") {
      const b = c;
      return this.assert(
        v && b.asymmetricMatch(v),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        b.toString(),
        v,
        !1
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof c}"`);
  }), n(["toHaveReturned", "toReturn"], function() {
    const c = i(this), d = c.getMockName(), f = c.mock.calls.length > 0 && c.mock.results.some(({ type: p }) => p !== "throw");
    this.assert(
      f,
      `expected "${d}" to be successfully called at least once`,
      `expected "${d}" to not be successfully called`,
      f,
      !f,
      !1
    );
  }), n(["toHaveReturnedTimes", "toReturnTimes"], function(c) {
    const d = i(this), f = d.getMockName(), p = d.mock.results.reduce((v, { type: b }) => b === "throw" ? v : ++v, 0);
    this.assert(
      p === c,
      `expected "${f}" to be successfully called ${c} times`,
      `expected "${f}" to not be successfully called ${c} times`,
      `expected number of returns: ${c}`,
      `received number of returns: ${p}`,
      !1
    );
  }), n(["toHaveReturnedWith", "toReturnWith"], function(c) {
    const d = i(this), f = d.getMockName(), p = d.mock.results.some(({ type: y, value: h }) => y === "return" && ze(c, h)), v = t.flag(this, "negate"), b = t.getMessage(
      this,
      [
        p,
        `expected "${f}" to return with: #{exp} at least once`,
        `expected "${f}" to not return with: #{exp}`,
        c
      ]
    );
    if (p && v || !p && !v)
      throw new r(u(d, b, c));
  }), n(["toHaveLastReturnedWith", "lastReturnedWith"], function(c) {
    const d = i(this), f = d.getMockName(), { value: p } = d.mock.results[d.mock.results.length - 1], v = ze(p, c);
    this.assert(
      v,
      `expected last "${f}" call to return #{exp}`,
      `expected last "${f}" call to not return #{exp}`,
      c,
      p
    );
  }), n(["toHaveNthReturnedWith", "nthReturnedWith"], function(c, d) {
    const f = i(this), p = f.getMockName(), v = t.flag(this, "negate"), { type: b, value: y } = f.mock.results[c - 1], h = `${s(c)} call`;
    !v && b === "throw" && e.assert.fail(`expected ${h} to return #{exp}, but instead it threw an error`);
    const $ = ze(y, d);
    this.assert(
      $,
      `expected ${h} "${p}" call to return #{exp}`,
      `expected ${h} "${p}" call to not return #{exp}`,
      d,
      y
    );
  }), n("toSatisfy", function(c, d) {
    return this.be.satisfy(c, d);
  }), t.addProperty(e.Assertion.prototype, "resolves", function() {
    const d = new Error("resolves");
    t.flag(this, "promise", "resolves"), t.flag(this, "error", d);
    const f = t.flag(this, "vitest-test"), p = t.flag(this, "object");
    if (typeof (p == null ? void 0 : p.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof p}'.`);
    const v = new Proxy(this, {
      get: (b, y, h) => {
        const $ = Reflect.get(b, y, h);
        return typeof $ != "function" ? $ instanceof e.Assertion ? v : $ : async (...A) => {
          const S = p.then(
            (T) => (t.flag(this, "object", T), $.call(this, ...A)),
            (T) => {
              const E = new r(
                `promise rejected "${t.inspect(T)}" instead of resolving`,
                { showDiff: !1 }
              );
              throw E.cause = T, E.stack = d.stack.replace(d.message, E.message), E;
            }
          );
          return r_(f, S);
        };
      }
    });
    return v;
  }), t.addProperty(e.Assertion.prototype, "rejects", function() {
    const d = new Error("rejects");
    t.flag(this, "promise", "rejects"), t.flag(this, "error", d);
    const f = t.flag(this, "vitest-test"), p = t.flag(this, "object"), v = typeof p == "function" ? p() : p;
    if (typeof (v == null ? void 0 : v.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof v}'.`);
    const b = new Proxy(this, {
      get: (y, h, $) => {
        const A = Reflect.get(y, h, $);
        return typeof A != "function" ? A instanceof e.Assertion ? b : A : async (...S) => {
          const T = v.then(
            (E) => {
              const M = new r(
                `promise resolved "${t.inspect(E)}" instead of rejecting`,
                { showDiff: !0, expected: new Error("rejected promise"), actual: E }
              );
              throw M.stack = d.stack.replace(d.message, M.message), M;
            },
            (E) => (t.flag(this, "object", E), A.call(this, ...S))
          );
          return r_(f, T);
        };
      }
    });
    return b;
  });
};
function Nne(e, t) {
  const r = e._obj, a = fi.flag(e, "negate"), n = fi.flag(e, "promise") || "", o = {
    ...H1(),
    diff: za,
    stringify: Yt,
    iterableEquality: ft,
    subsetEquality: lf
  };
  return {
    state: {
      ...In(t),
      // TODO: implement via expect.addEqualityTesters
      customTesters: [],
      isNot: a,
      utils: o,
      promise: n,
      equals: ze,
      // needed for built-in jest-snapshots, but we don't use it
      suppressedErrors: []
    },
    isNot: a,
    obj: r
  };
}
class n_ extends Error {
  constructor(t, r, a) {
    super(t), this.actual = r, this.expected = a;
  }
}
function kne(e, t) {
  return (r, a) => {
    Object.entries(t).forEach(([n, o]) => {
      function i(...c) {
        const { state: d, isNot: f, obj: p } = Nne(this, e), v = o.call(d, p, ...c);
        if (v && typeof v == "object" && v instanceof Promise)
          return v.then(({ pass: A, message: S, actual: T, expected: E }) => {
            if (A && f || !A && !f)
              throw new n_(S(), T, E);
          });
        const { pass: b, message: y, actual: h, expected: $ } = v;
        if (b && f || !b && !f)
          throw new n_(y(), h, $);
      }
      const s = Y1(a, i);
      a.addMethod(globalThis[bv].matchers, n, s), a.addMethod(r.Assertion.prototype, n, s);
      class l extends Vr {
        constructor(d = !1, ...f) {
          super(f, d);
        }
        asymmetricMatch(d) {
          const { pass: f } = o.call(
            this.getMatcherContext(e),
            d,
            ...this.sample
          );
          return this.inverse ? !f : f;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${n}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      const u = (...c) => new l(!1, ...c);
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !0,
        value: u,
        writable: !0
      }), Object.defineProperty(e.not, n, {
        configurable: !0,
        enumerable: !0,
        value: (...c) => new l(!0, ...c),
        writable: !0
      }), Object.defineProperty(globalThis[gv], n, {
        configurable: !0,
        enumerable: !0,
        value: u,
        writable: !0
      });
    });
  };
}
const jne = (e, t) => {
  t.addMethod(e.expect, "extend", (r, a) => {
    e.use(kne(r, a));
  });
};
var Fr = {}, wv = { exports: {} };
wv.exports;
(function(e) {
  const r = (o = 0) => (i) => `\x1B[${38 + o};5;${i}m`, a = (o = 0) => (i, s, l) => `\x1B[${38 + o};2;${i};${s};${l}m`;
  function n() {
    const o = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [s, l] of Object.entries(i)) {
      for (const [u, c] of Object.entries(l))
        i[u] = {
          open: `\x1B[${c[0]}m`,
          close: `\x1B[${c[1]}m`
        }, l[u] = i[u], o.set(c[0], c[1]);
      Object.defineProperty(i, s, {
        value: l,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: o,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = a(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = a(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (s, l, u) => s === l && l === u ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(l / 255 * 5) + Math.round(u / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (s) => {
          const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
          if (!l)
            return [0, 0, 0];
          let { colorString: u } = l.groups;
          u.length === 3 && (u = u.split("").map((d) => d + d).join(""));
          const c = Number.parseInt(u, 16);
          return [
            c >> 16 & 255,
            c >> 8 & 255,
            c & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: n
  });
})(wv);
var Fne = wv.exports, er = {};
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.printIteratorEntries = Bne;
er.printIteratorValues = Lne;
er.printListItems = Une;
er.printObjectProperties = Hne;
const Dne = (e, t) => {
  const r = Object.keys(e), a = t !== null ? r.sort(t) : r;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && a.push(n);
  }), a;
};
function Bne(e, t, r, a, n, o, i = ": ") {
  let s = "", l = 0, u = e.next();
  if (!u.done) {
    s += t.spacingOuter;
    const c = r + t.indent;
    for (; !u.done; ) {
      if (s += c, l++ === t.maxWidth) {
        s += "…";
        break;
      }
      const d = o(
        u.value[0],
        t,
        c,
        a,
        n
      ), f = o(
        u.value[1],
        t,
        c,
        a,
        n
      );
      s += d + i + f, u = e.next(), u.done ? t.min || (s += ",") : s += `,${t.spacingInner}`;
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function Lne(e, t, r, a, n, o) {
  let i = "", s = 0, l = e.next();
  if (!l.done) {
    i += t.spacingOuter;
    const u = r + t.indent;
    for (; !l.done; ) {
      if (i += u, s++ === t.maxWidth) {
        i += "…";
        break;
      }
      i += o(l.value, t, u, a, n), l = e.next(), l.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Une(e, t, r, a, n, o) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const s = r + t.indent;
    for (let l = 0; l < e.length; l++) {
      if (i += s, l === t.maxWidth) {
        i += "…";
        break;
      }
      l in e && (i += o(e[l], t, s, a, n)), l < e.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
function Hne(e, t, r, a, n, o) {
  let i = "";
  const s = Dne(e, t.compareKeys);
  if (s.length) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (let u = 0; u < s.length; u++) {
      const c = s[u], d = o(c, t, l, a, n), f = o(e[c], t, l, a, n);
      i += `${l + d}: ${f}`, u < s.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var Tr = {};
Object.defineProperty(Tr, "__esModule", {
  value: !0
});
Tr.test = Tr.serialize = Tr.default = void 0;
var a_ = er, Up = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const Vne = typeof Up == "function" && Up.for ? Up.for("jest.asymmetricMatcher") : 1267621, $o = " ", X1 = (e, t, r, a, n, o) => {
  const i = e.toString();
  if (i === "ArrayContaining" || i === "ArrayNotContaining")
    return ++a > t.maxDepth ? `[${i}]` : `${i + $o}[${(0, a_.printListItems)(
      e.sample,
      t,
      r,
      a,
      n,
      o
    )}]`;
  if (i === "ObjectContaining" || i === "ObjectNotContaining")
    return ++a > t.maxDepth ? `[${i}]` : `${i + $o}{${(0, a_.printObjectProperties)(
      e.sample,
      t,
      r,
      a,
      n,
      o
    )}}`;
  if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
    return i + $o + o(e.sample, t, r, a, n);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return e.toAsymmetricMatcher();
};
Tr.serialize = X1;
const J1 = (e) => e && e.$$typeof === Vne;
Tr.test = J1;
const zne = {
  serialize: X1,
  test: J1
};
var Wne = zne;
Tr.default = Wne;
var Ar = {};
Object.defineProperty(Ar, "__esModule", {
  value: !0
});
Ar.test = Ar.serialize = Ar.default = void 0;
var o_ = er;
const Gne = " ", Q1 = ["DOMStringMap", "NamedNodeMap"], Kne = /^(HTML\w*Collection|NodeList)$/, Yne = (e) => Q1.indexOf(e) !== -1 || Kne.test(e), Z1 = (e) => e && e.constructor && !!e.constructor.name && Yne(e.constructor.name);
Ar.test = Z1;
const Xne = (e) => e.constructor.name === "NamedNodeMap", eP = (e, t, r, a, n, o) => {
  const i = e.constructor.name;
  return ++a > t.maxDepth ? `[${i}]` : (t.min ? "" : i + Gne) + (Q1.indexOf(i) !== -1 ? `{${(0, o_.printObjectProperties)(
    Xne(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : {
      ...e
    },
    t,
    r,
    a,
    n,
    o
  )}}` : `[${(0, o_.printListItems)(
    Array.from(e),
    t,
    r,
    a,
    n,
    o
  )}]`);
};
Ar.serialize = eP;
const Jne = {
  serialize: eP,
  test: Z1
};
var Qne = Jne;
Ar.default = Qne;
var Mr = {}, ut = {}, _v = {};
Object.defineProperty(_v, "__esModule", {
  value: !0
});
_v.default = Zne;
function Zne(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.printText = ut.printProps = ut.printElementAsLeaf = ut.printElement = ut.printComment = ut.printChildren = void 0;
var tP = eae(_v);
function eae(e) {
  return e && e.__esModule ? e : { default: e };
}
const tae = (e, t, r, a, n, o, i) => {
  const s = a + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, n, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + a), d = `{${d}}`), `${r.spacingInner + a + l.prop.open + u + l.prop.close}=${l.value.open}${d}${l.value.close}`;
  }).join("");
};
ut.printProps = tae;
const rae = (e, t, r, a, n, o) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? rP(i, t) : o(i, t, r, a, n))
).join("");
ut.printChildren = rae;
const rP = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, tP.default)(e) + r.close;
};
ut.printText = rP;
const nae = (e, t) => {
  const r = t.colors.comment;
  return `${r.open}<!--${(0, tP.default)(e)}-->${r.close}`;
};
ut.printComment = nae;
const aae = (e, t, r, a, n) => {
  const o = a.colors.tag;
  return `${o.open}<${e}${t && o.close + t + a.spacingOuter + n + o.open}${r ? `>${o.close}${r}${a.spacingOuter}${n}${o.open}</${e}` : `${t && !a.min ? "" : " "}/`}>${o.close}`;
};
ut.printElement = aae;
const oae = (e, t) => {
  const r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
};
ut.printElementAsLeaf = oae;
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
Mr.test = Mr.serialize = Mr.default = void 0;
var En = ut;
const iae = 1, nP = 3, aP = 8, oP = 11, sae = /^((HTML|SVG)\w*)?Element$/, lae = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, uae = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: a } = e, n = typeof a == "string" && a.includes("-") || lae(e);
  return r === iae && (sae.test(t) || n) || r === nP && t === "Text" || r === aP && t === "Comment" || r === oP && t === "DocumentFragment";
}, iP = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && uae(e);
};
Mr.test = iP;
function cae(e) {
  return e.nodeType === nP;
}
function dae(e) {
  return e.nodeType === aP;
}
function Hp(e) {
  return e.nodeType === oP;
}
const sP = (e, t, r, a, n, o) => {
  if (cae(e))
    return (0, En.printText)(e.data, t);
  if (dae(e))
    return (0, En.printComment)(e.data, t);
  const i = Hp(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++a > t.maxDepth ? (0, En.printElementAsLeaf)(i, t) : (0, En.printElement)(
    i,
    (0, En.printProps)(
      Hp(e) ? [] : Array.from(e.attributes, (s) => s.name).sort(),
      Hp(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      r + t.indent,
      a,
      n,
      o
    ),
    (0, En.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      r + t.indent,
      a,
      n,
      o
    ),
    t,
    r
  );
};
Mr.serialize = sP;
const fae = {
  serialize: sP,
  test: iP
};
var pae = fae;
Mr.default = pae;
var qr = {};
Object.defineProperty(qr, "__esModule", {
  value: !0
});
qr.test = qr.serialize = qr.default = void 0;
var Ga = er;
const mae = "@@__IMMUTABLE_ITERABLE__@@", hae = "@@__IMMUTABLE_LIST__@@", vae = "@@__IMMUTABLE_KEYED__@@", yae = "@@__IMMUTABLE_MAP__@@", i_ = "@@__IMMUTABLE_ORDERED__@@", bae = "@@__IMMUTABLE_RECORD__@@", gae = "@@__IMMUTABLE_SEQ__@@", wae = "@@__IMMUTABLE_SET__@@", _ae = "@@__IMMUTABLE_STACK__@@", Wn = (e) => `Immutable.${e}`, uf = (e) => `[${e}]`, Ka = " ", s_ = "…", $ae = (e, t, r, a, n, o, i) => ++a > t.maxDepth ? uf(Wn(i)) : `${Wn(i) + Ka}{${(0, Ga.printIteratorEntries)(
  e.entries(),
  t,
  r,
  a,
  n,
  o
)}}`;
function Eae(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return {
          done: !1,
          value: [r, e.get(r)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const Cae = (e, t, r, a, n, o) => {
  const i = Wn(e._name || "Record");
  return ++a > t.maxDepth ? uf(i) : `${i + Ka}{${(0, Ga.printIteratorEntries)(
    Eae(e),
    t,
    r,
    a,
    n,
    o
  )}}`;
}, Rae = (e, t, r, a, n, o) => {
  const i = Wn("Seq");
  return ++a > t.maxDepth ? uf(i) : e[vae] ? `${i + Ka}{${// from Immutable collection of entries or from ECMAScript object
  e._iter || e._object ? (0, Ga.printIteratorEntries)(
    e.entries(),
    t,
    r,
    a,
    n,
    o
  ) : s_}}` : `${i + Ka}[${e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, Ga.printIteratorValues)(
    e.values(),
    t,
    r,
    a,
    n,
    o
  ) : s_}]`;
}, Vp = (e, t, r, a, n, o, i) => ++a > t.maxDepth ? uf(Wn(i)) : `${Wn(i) + Ka}[${(0, Ga.printIteratorValues)(
  e.values(),
  t,
  r,
  a,
  n,
  o
)}]`, lP = (e, t, r, a, n, o) => e[yae] ? $ae(
  e,
  t,
  r,
  a,
  n,
  o,
  e[i_] ? "OrderedMap" : "Map"
) : e[hae] ? Vp(
  e,
  t,
  r,
  a,
  n,
  o,
  "List"
) : e[wae] ? Vp(
  e,
  t,
  r,
  a,
  n,
  o,
  e[i_] ? "OrderedSet" : "Set"
) : e[_ae] ? Vp(
  e,
  t,
  r,
  a,
  n,
  o,
  "Stack"
) : e[gae] ? Rae(e, t, r, a, n, o) : Cae(e, t, r, a, n, o);
qr.serialize = lP;
const uP = (e) => e && (e[mae] === !0 || e[bae] === !0);
qr.test = uP;
const Pae = {
  serialize: lP,
  test: uP
};
var xae = Pae;
qr.default = xae;
var Ir = {}, hh = { exports: {} }, Fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l_;
function Sae() {
  return l_ || (l_ = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, b = !1, y = !1, h = !1, $ = !1, A;
    A = Symbol.for("react.module.reference");
    function S(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === n || $ || B === a || B === u || B === c || h || B === p || v || b || y || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === d || B.$$typeof === o || B.$$typeof === i || B.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === A || B.getModuleId !== void 0));
    }
    function T(B) {
      if (typeof B == "object" && B !== null) {
        var Oe = B.$$typeof;
        switch (Oe) {
          case e:
            var le = B.type;
            switch (le) {
              case r:
              case n:
              case a:
              case u:
              case c:
                return le;
              default:
                var Ie = le && le.$$typeof;
                switch (Ie) {
                  case s:
                  case i:
                  case l:
                  case f:
                  case d:
                  case o:
                    return Ie;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var E = i, M = o, L = e, ie = l, J = r, fe = f, de = d, G = t, ae = n, xe = a, ve = u, $e = c, Te = !1, g = !1;
    function q(B) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(B) {
      return g || (g = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(B) {
      return T(B) === i;
    }
    function j(B) {
      return T(B) === o;
    }
    function H(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function F(B) {
      return T(B) === l;
    }
    function k(B) {
      return T(B) === r;
    }
    function Q(B) {
      return T(B) === f;
    }
    function oe(B) {
      return T(B) === d;
    }
    function he(B) {
      return T(B) === t;
    }
    function we(B) {
      return T(B) === n;
    }
    function K(B) {
      return T(B) === a;
    }
    function se(B) {
      return T(B) === u;
    }
    function be(B) {
      return T(B) === c;
    }
    Fe.ContextConsumer = E, Fe.ContextProvider = M, Fe.Element = L, Fe.ForwardRef = ie, Fe.Fragment = J, Fe.Lazy = fe, Fe.Memo = de, Fe.Portal = G, Fe.Profiler = ae, Fe.StrictMode = xe, Fe.Suspense = ve, Fe.SuspenseList = $e, Fe.isAsyncMode = q, Fe.isConcurrentMode = R, Fe.isContextConsumer = x, Fe.isContextProvider = j, Fe.isElement = H, Fe.isForwardRef = F, Fe.isFragment = k, Fe.isLazy = Q, Fe.isMemo = oe, Fe.isPortal = he, Fe.isProfiler = we, Fe.isStrictMode = K, Fe.isSuspense = se, Fe.isSuspenseList = be, Fe.isValidElementType = S, Fe.typeOf = T;
  }()), Fe;
}
var De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u_;
function Oae() {
  if (u_)
    return De;
  u_ = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var h = y.$$typeof;
      switch (h) {
        case e:
          switch (y = y.type, y) {
            case r:
            case n:
            case a:
            case u:
            case c:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case i:
                case l:
                case f:
                case d:
                case o:
                  return y;
                default:
                  return h;
              }
          }
        case t:
          return h;
      }
    }
  }
  return De.ContextConsumer = i, De.ContextProvider = o, De.Element = e, De.ForwardRef = l, De.Fragment = r, De.Lazy = f, De.Memo = d, De.Portal = t, De.Profiler = n, De.StrictMode = a, De.Suspense = u, De.SuspenseList = c, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(y) {
    return b(y) === i;
  }, De.isContextProvider = function(y) {
    return b(y) === o;
  }, De.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, De.isForwardRef = function(y) {
    return b(y) === l;
  }, De.isFragment = function(y) {
    return b(y) === r;
  }, De.isLazy = function(y) {
    return b(y) === f;
  }, De.isMemo = function(y) {
    return b(y) === d;
  }, De.isPortal = function(y) {
    return b(y) === t;
  }, De.isProfiler = function(y) {
    return b(y) === n;
  }, De.isStrictMode = function(y) {
    return b(y) === a;
  }, De.isSuspense = function(y) {
    return b(y) === u;
  }, De.isSuspenseList = function(y) {
    return b(y) === c;
  }, De.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === n || y === a || y === u || y === c || y === p || typeof y == "object" && y !== null && (y.$$typeof === f || y.$$typeof === d || y.$$typeof === o || y.$$typeof === i || y.$$typeof === l || y.$$typeof === v || y.getModuleId !== void 0);
  }, De.typeOf = b, De;
}
process.env.NODE_ENV === "production" ? hh.exports = Oae() : hh.exports = Sae();
var Tae = hh.exports;
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.test = Ir.serialize = Ir.default = void 0;
var Xr = Aae(Tae), Eo = ut;
function cP(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (cP = function(a) {
    return a ? r : t;
  })(e);
}
function Aae(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = cP(t);
  if (r && r.has(e))
    return r.get(e);
  var a = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o];
    }
  return a.default = e, r && r.set(e, a), a;
}
const dP = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  dP(r, t);
}) : e != null && e !== !1 && t.push(e), t), c_ = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Xr.isFragment(e))
    return "React.Fragment";
  if (Xr.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Xr.isContextProvider(e))
      return "Context.Provider";
    if (Xr.isContextConsumer(e))
      return "Context.Consumer";
    if (Xr.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? `ForwardRef(${r})` : "ForwardRef";
    }
    if (Xr.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? `Memo(${r})` : "Memo";
    }
  }
  return "UNDEFINED";
}, Mae = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, fP = (e, t, r, a, n, o) => ++a > t.maxDepth ? (0, Eo.printElementAsLeaf)(c_(e), t) : (0, Eo.printElement)(
  c_(e),
  (0, Eo.printProps)(
    Mae(e),
    e.props,
    t,
    r + t.indent,
    a,
    n,
    o
  ),
  (0, Eo.printChildren)(
    dP(e.props.children),
    t,
    r + t.indent,
    a,
    n,
    o
  ),
  t,
  r
);
Ir.serialize = fP;
const pP = (e) => e != null && Xr.isElement(e);
Ir.test = pP;
const qae = {
  serialize: fP,
  test: pP
};
var Iae = qae;
Ir.default = Iae;
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.test = Nr.serialize = Nr.default = void 0;
var Co = ut, zp = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const Nae = typeof zp == "function" && zp.for ? zp.for("react.test.json") : 245830487, kae = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, mP = (e, t, r, a, n, o) => ++a > t.maxDepth ? (0, Co.printElementAsLeaf)(e.type, t) : (0, Co.printElement)(
  e.type,
  e.props ? (0, Co.printProps)(
    kae(e),
    e.props,
    t,
    r + t.indent,
    a,
    n,
    o
  ) : "",
  e.children ? (0, Co.printChildren)(
    e.children,
    t,
    r + t.indent,
    a,
    n,
    o
  ) : "",
  t,
  r
);
Nr.serialize = mP;
const hP = (e) => e && e.$$typeof === Nae;
Nr.test = hP;
const jae = {
  serialize: mP,
  test: hP
};
var Fae = jae;
Nr.default = Fae;
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
Fr.default = Fr.DEFAULT_OPTIONS = void 0;
var Dae = Fr.format = xP, vP = Fr.plugins = void 0, Bae = pn(Fne), ga = er, Lae = pn(
  Tr
), Uae = pn(Ar), Hae = pn(Mr), Vae = pn(qr), zae = pn(Ir), Wae = pn(
  Nr
);
function pn(e) {
  return e && e.__esModule ? e : { default: e };
}
const yP = Object.prototype.toString, Gae = Date.prototype.toISOString, Kae = Error.prototype.toString, d_ = RegExp.prototype.toString, Wp = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", Yae = (e) => typeof window < "u" && e === window, Xae = /^Symbol\((.*)\)(.*)$/, Jae = /\n/gi;
class bP extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function Qae(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Zae(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function eoe(e) {
  return `${e}n`;
}
function f_(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function p_(e) {
  return String(e).replace(Xae, "Symbol($1)");
}
function m_(e) {
  return `[${Kae.call(e)}]`;
}
function gP(e, t, r, a) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const n = typeof e;
  if (n === "number")
    return Zae(e);
  if (n === "bigint")
    return eoe(e);
  if (n === "string")
    return a ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (n === "function")
    return f_(e, t);
  if (n === "symbol")
    return p_(e);
  const o = yP.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? f_(e, t) : o === "[object Symbol]" ? p_(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : Gae.call(e) : o === "[object Error]" ? m_(e) : o === "[object RegExp]" ? r ? d_.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : d_.call(e) : e instanceof Error ? m_(e) : null;
}
function wP(e, t, r, a, n, o) {
  if (n.indexOf(e) !== -1)
    return "[Circular]";
  n = n.slice(), n.push(e);
  const i = ++a > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !o)
    return mr(e.toJSON(), t, r, a, n, !0);
  const l = yP.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : `${s ? "" : "Arguments "}[${(0, ga.printListItems)(
    e,
    t,
    r,
    a,
    n,
    mr
  )}]` : Qae(l) ? i ? `[${e.constructor.name}]` : `${s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, ga.printListItems)(
    e,
    t,
    r,
    a,
    n,
    mr
  )}]` : l === "[object Map]" ? i ? "[Map]" : `Map {${(0, ga.printIteratorEntries)(
    e.entries(),
    t,
    r,
    a,
    n,
    mr,
    " => "
  )}}` : l === "[object Set]" ? i ? "[Set]" : `Set {${(0, ga.printIteratorValues)(
    e.values(),
    t,
    r,
    a,
    n,
    mr
  )}}` : i || Yae(e) ? `[${Wp(e)}]` : `${s || !t.printBasicPrototype && Wp(e) === "Object" ? "" : `${Wp(e)} `}{${(0, ga.printObjectProperties)(
    e,
    t,
    r,
    a,
    n,
    mr
  )}}`;
}
function toe(e) {
  return e.serialize != null;
}
function _P(e, t, r, a, n, o) {
  let i;
  try {
    i = toe(e) ? e.serialize(t, r, a, n, o, mr) : e.print(
      t,
      (s) => mr(s, r, a, n, o),
      (s) => {
        const l = a + r.indent;
        return l + s.replace(Jae, `
${l}`);
      },
      {
        edgeSpacing: r.spacingOuter,
        min: r.min,
        spacing: r.spacingInner
      },
      r.colors
    );
  } catch (s) {
    throw new bP(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function $P(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (a) {
      throw new bP(a.message, a.stack);
    }
  return null;
}
function mr(e, t, r, a, n, o) {
  const i = $P(t.plugins, e);
  if (i !== null)
    return _P(i, e, t, r, a, n);
  const s = gP(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : wP(
    e,
    t,
    r,
    a,
    n,
    o
  );
}
const $v = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, EP = Object.keys($v), roe = (e) => e, $t = roe({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: $v
});
Fr.DEFAULT_OPTIONS = $t;
function noe(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Object.prototype.hasOwnProperty.call($t, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const aoe = (e) => EP.reduce((t, r) => {
  const a = e.theme && e.theme[r] !== void 0 ? e.theme[r] : $v[r], n = a && Bae.default[a];
  if (n && typeof n.close == "string" && typeof n.open == "string")
    t[r] = n;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), ooe = () => EP.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), CP = (e) => (e == null ? void 0 : e.printFunctionName) ?? $t.printFunctionName, RP = (e) => (e == null ? void 0 : e.escapeRegex) ?? $t.escapeRegex, PP = (e) => (e == null ? void 0 : e.escapeString) ?? $t.escapeString, h_ = (e) => ({
  callToJSON: (e == null ? void 0 : e.callToJSON) ?? $t.callToJSON,
  colors: e != null && e.highlight ? aoe(e) : ooe(),
  compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : $t.compareKeys,
  escapeRegex: RP(e),
  escapeString: PP(e),
  indent: e != null && e.min ? "" : ioe((e == null ? void 0 : e.indent) ?? $t.indent),
  maxDepth: (e == null ? void 0 : e.maxDepth) ?? $t.maxDepth,
  maxWidth: (e == null ? void 0 : e.maxWidth) ?? $t.maxWidth,
  min: (e == null ? void 0 : e.min) ?? $t.min,
  plugins: (e == null ? void 0 : e.plugins) ?? $t.plugins,
  printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
  printFunctionName: CP(e),
  spacingInner: e != null && e.min ? " " : `
`,
  spacingOuter: e != null && e.min ? "" : `
`
});
function ioe(e) {
  return new Array(e + 1).join(" ");
}
function xP(e, t) {
  if (t && (noe(t), t.plugins)) {
    const a = $P(t.plugins, e);
    if (a !== null)
      return _P(a, e, h_(t), "", 0, []);
  }
  const r = gP(
    e,
    CP(t),
    RP(t),
    PP(t)
  );
  return r !== null ? r : wP(e, h_(t), "", 0, []);
}
const soe = {
  AsymmetricMatcher: Lae.default,
  DOMCollection: Uae.default,
  DOMElement: Hae.default,
  Immutable: Vae.default,
  ReactElement: zae.default,
  ReactTestComponent: Wae.default
};
vP = Fr.plugins = soe;
var loe = xP;
Fr.default = loe;
function uoe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var SP = { exports: {} };
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
var v_ = function(e, t) {
  var r, a, n = 1, o = 0, i = 0, s = String.alphabet;
  function l(u, c, d) {
    if (d) {
      for (r = c; d = l(u, r), d < 76 && d > 65; )
        ++r;
      return +u.slice(c - 1, r);
    }
    return d = s && s.indexOf(u.charAt(c)), d > -1 ? d + 76 : (d = u.charCodeAt(c) || 0, d < 45 || d > 127 ? d : d < 46 ? 65 : d < 48 ? d - 1 : d < 58 ? d + 18 : d < 65 ? d - 11 : d < 91 ? d + 11 : d < 97 ? d - 37 : d < 123 ? d + 5 : d - 63);
  }
  if ((e += "") != (t += "")) {
    for (; n; )
      if (a = l(e, o++), n = l(t, i++), a < 76 && n < 76 && a > 66 && n > 66 && (a = l(e, o, o), n = l(t, i, o = r), i = r), a != n)
        return a < n ? -1 : 1;
  }
  return 0;
};
try {
  SP.exports = v_;
} catch {
  String.naturalCompare = v_;
}
var coe = SP.exports, doe = /* @__PURE__ */ uoe(coe);
function OP(e) {
  return e != null;
}
function foe(e) {
  return e === null || typeof e != "function" && typeof e != "object";
}
function Do(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function poe(e) {
  let t = -1, r = null, a = 0, n = 0, o = null;
  for (; t <= e.length; ) {
    o = e[t], t++;
    const i = e[t];
    if ((i === '"' || i === "'" || i === "`") && o !== "\\" && (r === i ? r = null : r || (r = i)), r || (i === "(" && a++, i === ")" && n++), a && n && a === n)
      return t;
  }
  return null;
}
let moe = () => "Promise{…}";
try {
  const { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (moe = (a, n) => {
    const [o, i] = e(a);
    return o === t ? "Promise{<pending>}" : `Promise${o === r ? "!" : ""}{${n.inspect(i, n)}}`;
  });
} catch {
}
let y_ = !1;
try {
  const e = require("util");
  y_ = e.inspect ? e.inspect.custom : !1;
} catch {
  y_ = !1;
}
const Ev = /\r?\n/;
function hoe(e, t, r) {
  const a = e.split(Ev), n = /\r\n/.test(e) ? 2 : 1;
  let o = 0;
  if (t > a.length)
    return e.length;
  for (let i = 0; i < t - 1; i++)
    o += a[i].length + n;
  return o + r;
}
function voe(e, t) {
  if (t > e.length)
    throw new Error(
      `offset is longer than source length! offset ${t} > length ${e.length}`
    );
  const r = e.split(Ev), a = /\r\n/.test(e) ? 2 : 1;
  let n = 0, o = 0;
  for (; o < r.length; o++) {
    const i = r[o].length + a;
    if (n + i >= t)
      break;
    n += i;
  }
  return o + 1;
}
const yoe = (e, t, r, a, n, o) => {
  const i = e.getMockName(), s = i === "vi.fn()" ? "" : ` ${i}`;
  let l = "";
  if (e.mock.calls.length !== 0) {
    const u = r + t.indent;
    l = ` {${t.spacingOuter}${u}"calls": ${o(e.mock.calls, t, u, a, n)}${t.min ? ", " : ","}${t.spacingOuter}${u}"results": ${o(e.mock.results, t, u, a, n)}${t.min ? "" : ","}${t.spacingOuter}${r}}`;
  }
  return `[MockFunction${s}]${l}`;
}, boe = (e) => e && !!e._isMockFunction, goe = { serialize: yoe, test: boe }, {
  DOMCollection: woe,
  DOMElement: _oe,
  Immutable: $oe,
  ReactElement: Eoe,
  ReactTestComponent: Coe,
  AsymmetricMatcher: Roe
} = vP;
let vh = [
  Coe,
  Eoe,
  _oe,
  woe,
  $oe,
  Roe,
  goe
];
function Poe(e) {
  vh = [e].concat(vh);
}
function xoe() {
  return vh;
}
function Soe(e, t) {
  return `${e} ${t}`;
}
function Ooe(e) {
  if (!/ \d+$/.test(e))
    throw new Error("Snapshot keys must end with a number.");
  return e.replace(/ \d+$/, "");
}
function Toe(e, t) {
  const r = t.updateSnapshot, a = /* @__PURE__ */ Object.create(null);
  let n = "", o = !1;
  if (e != null)
    try {
      n = e, new Function("exports", n)(a);
    } catch {
    }
  return (r === "all" || r === "new") && n && (o = !0), { data: a, dirty: o };
}
function Aoe(e) {
  return e.includes(`
`) ? `
${e}
` : e;
}
function b_(e) {
  return e.length > 2 && e.startsWith(`
`) && e.endsWith(`
`) ? e.slice(1, -1) : e;
}
const Moe = !0, qoe = !1;
function Ioe(e, t = 2, r = {}) {
  return Cv(
    Dae(e, {
      escapeRegex: Moe,
      indent: t,
      plugins: xoe(),
      printFunctionName: qoe,
      ...r
    })
  );
}
function Noe(e) {
  return e.replace(/`|\\|\${/g, "\\$&");
}
function g_(e) {
  return `\`${Noe(e)}\``;
}
function Cv(e) {
  return e.replace(/\r\n|\r/g, `
`);
}
async function koe(e, t, r) {
  const a = Object.keys(t).sort(doe).map(
    (s) => `exports[${g_(s)}] = ${g_(Cv(t[s]))};`
  ), n = `${e.getHeader()}

${a.join(`

`)}
`, o = await e.readSnapshotFile(r);
  o != null && o === n || await e.saveSnapshotFile(
    r,
    n
  );
}
function w_(e) {
  function t() {
    var n, o;
    const i = /^( +)}\s+$/m.exec(e || ""), s = (n = i == null ? void 0 : i[1]) == null ? void 0 : n.length;
    if (s)
      return s;
    const l = /^\n( +)"/.exec(e || "");
    return ((o = l == null ? void 0 : l[1]) == null ? void 0 : o.length) || 0;
  }
  const r = t();
  let a = e == null ? void 0 : e.trim();
  return r && (a = a == null ? void 0 : a.replace(new RegExp(`^${" ".repeat(r)}`, "gm"), "").replace(/ +}$/, "}")), a;
}
function yh(e = [], t = []) {
  const r = Array.from(e);
  return t.forEach((a, n) => {
    const o = r[n];
    Array.isArray(e[n]) ? r[n] = yh(e[n], a) : Do(o) ? r[n] = Rv(e[n], a) : r[n] = a;
  }), r;
}
function Rv(e, t) {
  if (Do(e) && Do(t)) {
    const r = { ...e };
    return Object.keys(t).forEach((a) => {
      Do(t[a]) && !t[a].$$typeof ? a in e ? r[a] = Rv(e[a], t[a]) : Object.assign(r, { [a]: t[a] }) : Array.isArray(t[a]) ? r[a] = yh(e[a], t[a]) : Object.assign(r, { [a]: t[a] });
    }), r;
  } else if (Array.isArray(e) && Array.isArray(t))
    return yh(e, t);
  return e;
}
const joe = 44, __ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Foe = new Uint8Array(64), TP = new Uint8Array(128);
for (let e = 0; e < __.length; e++) {
  const t = __.charCodeAt(e);
  Foe[e] = t, TP[t] = e;
}
function Doe(e) {
  const t = new Int32Array(5), r = [];
  let a = 0;
  do {
    const n = Boe(e, a), o = [];
    let i = !0, s = 0;
    t[0] = 0;
    for (let l = a; l < n; l++) {
      let u;
      l = wa(e, l, t, 0);
      const c = t[0];
      c < s && (i = !1), s = c, $_(e, l, n) ? (l = wa(e, l, t, 1), l = wa(e, l, t, 2), l = wa(e, l, t, 3), $_(e, l, n) ? (l = wa(e, l, t, 4), u = [c, t[1], t[2], t[3], t[4]]) : u = [c, t[1], t[2], t[3]]) : u = [c], o.push(u);
    }
    i || Loe(o), r.push(o), a = n + 1;
  } while (a <= e.length);
  return r;
}
function Boe(e, t) {
  const r = e.indexOf(";", t);
  return r === -1 ? e.length : r;
}
function wa(e, t, r, a) {
  let n = 0, o = 0, i = 0;
  do {
    const l = e.charCodeAt(t++);
    i = TP[l], n |= (i & 31) << o, o += 5;
  } while (i & 32);
  const s = n & 1;
  return n >>>= 1, s && (n = -2147483648 | -n), r[a] += n, t;
}
function $_(e, t, r) {
  return t >= r ? !1 : e.charCodeAt(t) !== joe;
}
function Loe(e) {
  e.sort(Uoe);
}
function Uoe(e, t) {
  return e[0] - t[0];
}
const Hoe = /^[\w+.-]+:\/\//, Voe = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, zoe = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var rt;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(rt || (rt = {}));
function Woe(e) {
  return Hoe.test(e);
}
function Goe(e) {
  return e.startsWith("//");
}
function AP(e) {
  return e.startsWith("/");
}
function Koe(e) {
  return e.startsWith("file:");
}
function E_(e) {
  return /^[.?#]/.test(e);
}
function Ro(e) {
  const t = Voe.exec(e);
  return MP(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "");
}
function Yoe(e) {
  const t = zoe.exec(e), r = t[2];
  return MP("file:", "", t[1] || "", "", AP(r) ? r : "/" + r, t[3] || "", t[4] || "");
}
function MP(e, t, r, a, n, o, i) {
  return {
    scheme: e,
    user: t,
    host: r,
    port: a,
    path: n,
    query: o,
    hash: i,
    type: rt.Absolute
  };
}
function C_(e) {
  if (Goe(e)) {
    const r = Ro("http:" + e);
    return r.scheme = "", r.type = rt.SchemeRelative, r;
  }
  if (AP(e)) {
    const r = Ro("http://foo.com" + e);
    return r.scheme = "", r.host = "", r.type = rt.AbsolutePath, r;
  }
  if (Koe(e))
    return Yoe(e);
  if (Woe(e))
    return Ro(e);
  const t = Ro("http://foo.com/" + e);
  return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? rt.Query : e.startsWith("#") ? rt.Hash : rt.RelativePath : rt.Empty, t;
}
function Xoe(e) {
  if (e.endsWith("/.."))
    return e;
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
function Joe(e, t) {
  qP(t, t.type), e.path === "/" ? e.path = t.path : e.path = Xoe(t.path) + e.path;
}
function qP(e, t) {
  const r = t <= rt.RelativePath, a = e.path.split("/");
  let n = 1, o = 0, i = !1;
  for (let l = 1; l < a.length; l++) {
    const u = a[l];
    if (!u) {
      i = !0;
      continue;
    }
    if (i = !1, u !== ".") {
      if (u === "..") {
        o ? (i = !0, o--, n--) : r && (a[n++] = u);
        continue;
      }
      a[n++] = u, o++;
    }
  }
  let s = "";
  for (let l = 1; l < n; l++)
    s += "/" + a[l];
  (!s || i && !s.endsWith("/..")) && (s += "/"), e.path = s;
}
function Qoe(e, t) {
  if (!e && !t)
    return "";
  const r = C_(e);
  let a = r.type;
  if (t && a !== rt.Absolute) {
    const o = C_(t), i = o.type;
    switch (a) {
      case rt.Empty:
        r.hash = o.hash;
      case rt.Hash:
        r.query = o.query;
      case rt.Query:
      case rt.RelativePath:
        Joe(r, o);
      case rt.AbsolutePath:
        r.user = o.user, r.host = o.host, r.port = o.port;
      case rt.SchemeRelative:
        r.scheme = o.scheme;
    }
    i > a && (a = i);
  }
  qP(r, a);
  const n = r.query + r.hash;
  switch (a) {
    case rt.Hash:
    case rt.Query:
      return n;
    case rt.RelativePath: {
      const o = r.path.slice(1);
      return o ? E_(t || e) && !E_(o) ? "./" + o + n : o + n : n || ".";
    }
    case rt.AbsolutePath:
      return r.path + n;
    default:
      return r.scheme + "//" + r.user + r.host + r.port + r.path + n;
  }
}
function R_(e, t) {
  return t && !t.endsWith("/") && (t += "/"), Qoe(e, t);
}
function Zoe(e) {
  if (!e)
    return "";
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
const Dr = 0, eie = 1, tie = 2, rie = 3, nie = 4;
function aie(e, t) {
  const r = P_(e, 0);
  if (r === e.length)
    return e;
  t || (e = e.slice());
  for (let a = r; a < e.length; a = P_(e, a + 1))
    e[a] = iie(e[a], t);
  return e;
}
function P_(e, t) {
  for (let r = t; r < e.length; r++)
    if (!oie(e[r]))
      return r;
  return e.length;
}
function oie(e) {
  for (let t = 1; t < e.length; t++)
    if (e[t][Dr] < e[t - 1][Dr])
      return !1;
  return !0;
}
function iie(e, t) {
  return t || (e = e.slice()), e.sort(sie);
}
function sie(e, t) {
  return e[Dr] - t[Dr];
}
let mi = !1;
function lie(e, t, r, a) {
  for (; r <= a; ) {
    const n = r + (a - r >> 1), o = e[n][Dr] - t;
    if (o === 0)
      return mi = !0, n;
    o < 0 ? r = n + 1 : a = n - 1;
  }
  return mi = !1, r - 1;
}
function uie(e, t, r) {
  for (let a = r + 1; a < e.length && e[a][Dr] === t; r = a++)
    ;
  return r;
}
function cie(e, t, r) {
  for (let a = r - 1; a >= 0 && e[a][Dr] === t; r = a--)
    ;
  return r;
}
function die() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function fie(e, t, r, a) {
  const { lastKey: n, lastNeedle: o, lastIndex: i } = r;
  let s = 0, l = e.length - 1;
  if (a === n) {
    if (t === o)
      return mi = i !== -1 && e[i][Dr] === t, i;
    t >= o ? s = i === -1 ? 0 : i : l = i;
  }
  return r.lastKey = a, r.lastNeedle = t, r.lastIndex = lie(e, t, s, l);
}
const pie = "`line` must be greater than 0 (lines start at line 1)", mie = "`column` must be greater than or equal to 0 (columns start at column 0)", x_ = -1, hie = 1;
let S_, IP;
class vie {
  constructor(t, r) {
    const a = typeof t == "string";
    if (!a && t._decodedMemo)
      return t;
    const n = a ? JSON.parse(t) : t, { version: o, file: i, names: s, sourceRoot: l, sources: u, sourcesContent: c } = n;
    this.version = o, this.file = i, this.names = s || [], this.sourceRoot = l, this.sources = u, this.sourcesContent = c;
    const d = R_(l || "", Zoe(r));
    this.resolvedSources = u.map((p) => R_(p || "", d));
    const { mappings: f } = n;
    typeof f == "string" ? (this._encoded = f, this._decoded = void 0) : (this._encoded = void 0, this._decoded = aie(f, a)), this._decodedMemo = die(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
}
S_ = (e) => e._decoded || (e._decoded = Doe(e._encoded)), IP = (e, { line: t, column: r, bias: a }) => {
  if (t--, t < 0)
    throw new Error(pie);
  if (r < 0)
    throw new Error(mie);
  const n = S_(e);
  if (t >= n.length)
    return Po(null, null, null, null);
  const o = n[t], i = yie(o, e._decodedMemo, t, r, a || hie);
  if (i === -1)
    return Po(null, null, null, null);
  const s = o[i];
  if (s.length === 1)
    return Po(null, null, null, null);
  const { names: l, resolvedSources: u } = e;
  return Po(u[s[eie]], s[tie] + 1, s[rie], s.length === 5 ? l[s[nie]] : null);
};
function Po(e, t, r, a) {
  return { source: e, line: t, column: r, name: a };
}
function yie(e, t, r, a, n) {
  let o = fie(e, a, t, r);
  return mi ? o = (n === x_ ? uie : cie)(e, a, o) : n === x_ && o++, o === -1 || o === e.length ? -1 : o;
}
const NP = /^\s*at .*(\S+:\d+|\(native\))/m, bie = /^(eval@)?(\[native code])?$/, gie = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chai.js",
  /__vitest_browser__/
];
function kP(e) {
  if (!e.includes(":"))
    return [e];
  const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!r)
    return [e];
  let a = r[1];
  return (a.startsWith("http:") || a.startsWith("https:")) && (a = new URL(a).pathname), a.startsWith("/@fs/") && (a = a.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [a, r[2] || void 0, r[3] || void 0];
}
function wie(e) {
  let t = e.trim();
  if (bie.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const r = /((.*".+"[^@]*)?[^@]*)(?:@)/, a = t.match(r), n = a && a[1] ? a[1] : void 0, [o, i, s] = kP(t.replace(r, ""));
  return !o || !i || !s ? null : {
    file: o,
    method: n || "",
    line: Number.parseInt(i),
    column: Number.parseInt(s)
  };
}
function _ie(e) {
  let t = e.trim();
  if (!NP.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const a = r.match(/ (\(.+\)$)/);
  r = a ? r.replace(a[0], "") : r;
  const [n, o, i] = kP(a ? a[1] : r);
  let s = a && r || "", l = n && ["eval", "<anonymous>"].includes(n) ? void 0 : n;
  return !l || !o || !i ? null : (s.startsWith("async ") && (s = s.slice(6)), l.startsWith("file://") && (l = l.slice(7)), l = jte(l), s && (s = s.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: s,
    file: l,
    line: Number.parseInt(o),
    column: Number.parseInt(i)
  });
}
function $ie(e, t = {}) {
  const { ignoreStackEntries: r = gie } = t;
  let a = NP.test(e) ? Cie(e) : Eie(e);
  return r.length && (a = a.filter((n) => !r.some((o) => n.file.match(o)))), a.map((n) => {
    var o;
    const i = (o = t.getSourceMap) == null ? void 0 : o.call(t, n.file);
    if (!i || typeof i != "object" || !i.version)
      return n;
    const s = new vie(i), { line: l, column: u } = IP(s, n);
    return l != null && u != null ? { ...n, line: l, column: u } : n;
  });
}
function Eie(e) {
  return e.split(`
`).map((t) => wie(t)).filter(OP);
}
function Cie(e) {
  return e.split(`
`).map((t) => _ie(t)).filter(OP);
}
function Rie(e, t = {}) {
  if (!e || foe(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const r = e.stack || e.stackStr || "";
  let a = $ie(r, t);
  return t.frameFilter && (a = a.filter((n) => t.frameFilter(e, n) !== !1)), e.stacks = a, a;
}
async function Pie(e, t) {
  const r = (await import("./magic-string.es-ryNiyk8G.mjs")).default, a = new Set(t.map((n) => n.file));
  await Promise.all(Array.from(a).map(async (n) => {
    const o = t.filter((u) => u.file === n), i = await e.readSnapshotFile(n), s = new r(i);
    for (const u of o) {
      const c = hoe(i, u.line, u.column);
      Aie(i, s, c, u.snapshot);
    }
    const l = s.toString();
    l !== i && await e.saveSnapshotFile(n, l);
  }));
}
const xie = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function Sie(e, t, r, a) {
  let n = e.slice(r);
  const o = xie.exec(n);
  if (!o)
    return !1;
  n = n.slice(o.index);
  let i = poe(n);
  if (i === null)
    return !1;
  i += r + o.index;
  const s = r + o.index + o[0].length, l = Oie(e, s), u = `, ${jP(a, e, r)}`;
  return l === i ? t.appendLeft(i, u) : t.overwrite(l, i, u), !0;
}
function Oie(e, t) {
  let r = 1, a = 0;
  for (; r !== a && t < e.length; ) {
    const n = e[t++];
    n === "{" ? r++ : n === "}" && a++;
  }
  return t;
}
function jP(e, t, r) {
  const a = voe(t, r), o = t.split(Ev)[a - 1].match(/^\s*/)[0] || "", i = o.includes("	") ? `${o}	` : `${o}  `, s = e.trim().replace(/\\/g, "\\\\").split(/\n/g), l = s.length <= 1, u = "`";
  return l ? `${u}${s.join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}${u}` : `${u}
${s.map((c) => c ? i + c : "").join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${o}${u}`;
}
const Tie = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function Aie(e, t, r, a) {
  const n = e.slice(r), o = Tie.exec(n), i = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(n);
  if (!o || o.index !== (i == null ? void 0 : i.index))
    return Sie(e, t, r, a);
  const s = o[1], l = r + o.index + o[0].length, u = jP(a, e, r);
  if (s === ")")
    return t.appendRight(l - 1, u), !0;
  const d = new RegExp(`(?:^|[^\\\\])${s}`).exec(e.slice(l));
  if (!d)
    return !1;
  const f = l + d.index + d[0].length;
  return t.overwrite(l - 1, f, u), !0;
}
const Mie = /^([^\S\n]*)\S/m;
function O_(e) {
  const t = e.match(Mie);
  if (!t || !t[1])
    return e;
  const r = t[1], a = e.split(/\n/g);
  if (a.length <= 2 || a[0].trim() !== "" || a[a.length - 1].trim() !== "")
    return e;
  for (let n = 1; n < a.length - 1; n++)
    if (a[n] !== "") {
      if (a[n].indexOf(r) !== 0)
        return e;
      a[n] = a[n].substring(r.length);
    }
  return a[a.length - 1] = "", e = a.join(`
`), e;
}
async function qie(e, t) {
  await Promise.all(t.map(async (r) => {
    r.readonly || await e.saveSnapshotFile(r.file, r.snapshot);
  }));
}
class Pv {
  constructor(t, r, a, n) {
    Me(this, "_counters");
    Me(this, "_dirty");
    Me(this, "_updateSnapshot");
    Me(this, "_snapshotData");
    Me(this, "_initialData");
    Me(this, "_inlineSnapshots");
    Me(this, "_rawSnapshots");
    Me(this, "_uncheckedKeys");
    Me(this, "_snapshotFormat");
    Me(this, "_environment");
    Me(this, "_fileExists");
    Me(this, "added");
    Me(this, "expand");
    Me(this, "matched");
    Me(this, "unmatched");
    Me(this, "updated");
    this.testFilePath = t, this.snapshotPath = r;
    const { data: o, dirty: i } = Toe(
      a,
      n
    );
    this._fileExists = a != null, this._initialData = o, this._snapshotData = o, this._dirty = i, this._inlineSnapshots = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this._counters = /* @__PURE__ */ new Map(), this.expand = n.expand || !1, this.added = 0, this.matched = 0, this.unmatched = 0, this._updateSnapshot = n.updateSnapshot, this.updated = 0, this._snapshotFormat = {
      printBasicPrototype: !1,
      escapeString: !1,
      ...n.snapshotFormat
    }, this._environment = n.snapshotEnvironment;
  }
  static async create(t, r) {
    const a = await r.snapshotEnvironment.resolvePath(t), n = await r.snapshotEnvironment.readSnapshotFile(a);
    return new Pv(t, a, n, r);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(t) {
    this._uncheckedKeys.forEach((r) => {
      Ooe(r) === t && this._uncheckedKeys.delete(r);
    });
  }
  _inferInlineSnapshotStack(t) {
    const r = t.findIndex((n) => n.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (r !== -1)
      return t[r + 3];
    const a = t.findIndex((n) => n.method.includes("__INLINE_SNAPSHOT__"));
    return a !== -1 ? t[a + 2] : null;
  }
  _addSnapshot(t, r, a) {
    if (this._dirty = !0, a.isInline) {
      const n = Rie(a.error || new Error("snapshot"), { ignoreStackEntries: [] }), o = this._inferInlineSnapshotStack(n);
      if (!o)
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(n)}`
        );
      o.column--, this._inlineSnapshots.push({
        snapshot: r,
        ...o
      });
    } else
      a.rawSnapshot ? this._rawSnapshots.push({
        ...a.rawSnapshot,
        snapshot: r
      }) : this._snapshotData[t] = r;
  }
  clear() {
    this._snapshotData = this._initialData, this._counters = /* @__PURE__ */ new Map(), this.added = 0, this.matched = 0, this.unmatched = 0, this.updated = 0, this._dirty = !1;
  }
  async save() {
    const t = Object.keys(this._snapshotData).length, r = this._inlineSnapshots.length, a = this._rawSnapshots.length, n = !t && !r && !a, o = {
      deleted: !1,
      saved: !1
    };
    return (this._dirty || this._uncheckedKeys.size) && !n ? (t && (await koe(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = !0), r && await Pie(this._environment, this._inlineSnapshots), a && await qie(this._environment, this._rawSnapshots), o.saved = !0) : !t && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = !1), o.deleted = !0), o;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = !0, this._uncheckedKeys.forEach((t) => delete this._snapshotData[t]), this._uncheckedKeys.clear());
  }
  match({
    testName: t,
    received: r,
    key: a,
    inlineSnapshot: n,
    isInline: o,
    error: i,
    rawSnapshot: s
  }) {
    this._counters.set(t, (this._counters.get(t) || 0) + 1);
    const l = Number(this._counters.get(t));
    a || (a = Soe(t, l)), o && this._snapshotData[a] !== void 0 || this._uncheckedKeys.delete(a);
    let u = s && typeof r == "string" ? r : Ioe(r, void 0, this._snapshotFormat);
    s || (u = Aoe(u)), s && s.content && s.content.match(/\r\n/) && !u.match(/\r\n/) && (s.content = Cv(s.content));
    const c = o ? n : s ? s.content : this._snapshotData[a], d = w_(c), f = d === w_(u), p = c !== void 0, v = o || this._fileExists || s && s.content != null;
    return f && !o && !s && (this._snapshotData[a] = u), p && this._updateSnapshot === "all" || (!p || !v) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? f ? this.matched++ : (p ? this.updated++ : this.added++, this._addSnapshot(a, u, { error: i, isInline: o, rawSnapshot: s })) : (this._addSnapshot(a, u, { error: i, isInline: o, rawSnapshot: s }), this.added++), {
      actual: "",
      count: l,
      expected: "",
      key: a,
      pass: !0
    }) : f ? (this.matched++, {
      actual: "",
      count: l,
      expected: "",
      key: a,
      pass: !0
    }) : (this.unmatched++, {
      actual: b_(u),
      count: l,
      expected: d !== void 0 ? b_(d) : void 0,
      key: a,
      pass: !1
    });
  }
  async pack() {
    const t = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: !1,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    }, r = this.getUncheckedCount(), a = this.getUncheckedKeys();
    r && this.removeUncheckedKeys();
    const n = await this.save();
    return t.fileDeleted = n.deleted, t.added = this.added, t.matched = this.matched, t.unmatched = this.unmatched, t.updated = this.updated, t.unchecked = n.deleted ? 0 : r, t.uncheckedKeys = Array.from(a), t;
  }
}
function T_(e, t, r, a) {
  const n = new Error(e);
  return Object.defineProperty(n, "actual", {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(n, "expected", {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(n, "diffOptions", { value: { expand: t } }), n;
}
class Iie {
  constructor(t = {}) {
    Me(this, "filepath");
    Me(this, "name");
    Me(this, "snapshotState");
    Me(this, "snapshotStateMap", /* @__PURE__ */ new Map());
    this.options = t;
  }
  async startCurrentRun(t, r, a) {
    var n;
    this.filepath = t, this.name = r, ((n = this.snapshotState) == null ? void 0 : n.testFilePath) !== t && (await this.finishCurrentRun(), this.getSnapshotState(t) || this.snapshotStateMap.set(
      t,
      await Pv.create(
        t,
        a
      )
    ), this.snapshotState = this.getSnapshotState(t));
  }
  getSnapshotState(t) {
    return this.snapshotStateMap.get(t);
  }
  clearTest() {
    this.filepath = void 0, this.name = void 0;
  }
  skipTestSnapshots(t) {
    var r;
    (r = this.snapshotState) == null || r.markSnapshotsAsCheckedForTest(t);
  }
  assert(t) {
    var r, a, n, o;
    const {
      filepath: i = this.filepath,
      name: s = this.name,
      message: l,
      isInline: u = !1,
      properties: c,
      inlineSnapshot: d,
      error: f,
      errorMessage: p,
      rawSnapshot: v
    } = t;
    let { received: b } = t;
    if (!i)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof c == "object") {
      if (typeof b != "object" || !b)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        if (((a = (r = this.options).isEqual) == null ? void 0 : a.call(r, b, c)) ?? !1)
          b = Rv(b, c);
        else
          throw T_("Snapshot properties mismatched", (n = this.snapshotState) == null ? void 0 : n.expand, b, c);
      } catch (E) {
        throw E.message = p || "Snapshot mismatched", E;
      }
    }
    const y = [
      s,
      ...l ? [l] : []
    ].join(" > "), h = this.getSnapshotState(i), { actual: $, expected: A, key: S, pass: T } = h.match({
      testName: y,
      received: b,
      isInline: u,
      error: f,
      inlineSnapshot: d,
      rawSnapshot: v
    });
    if (!T)
      throw T_(`Snapshot \`${S || "unknown"}\` mismatched`, (o = this.snapshotState) == null ? void 0 : o.expand, $ == null ? void 0 : $.trim(), A == null ? void 0 : A.trim());
  }
  async assertRaw(t) {
    if (!t.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath: r = this.filepath,
      rawSnapshot: a
    } = t;
    if (a.content == null) {
      if (!r)
        throw new Error("Snapshot cannot be used outside of test");
      const n = this.getSnapshotState(r);
      t.filepath || (t.filepath = r), a.file = await n.environment.resolveRawPath(r, a.file), a.content = await n.environment.readSnapshotFile(a.file) || void 0;
    }
    return this.assert(t);
  }
  async finishCurrentRun() {
    if (!this.snapshotState)
      return null;
    const t = await this.snapshotState.pack();
    return this.snapshotState = void 0, t;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
function Nie(e, t = " > ") {
  return _1(e).join(t);
}
function kie(e = "") {
  return !e || !e.includes("\\") ? e : e.replace(/\\/g, "/");
}
const jie = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function Fie() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const Die = function(...e) {
  e = e.map((a) => kie(a));
  let t = "", r = !1;
  for (let a = e.length - 1; a >= -1 && !r; a--) {
    const n = a >= 0 ? e[a] : Fie();
    !n || n.length === 0 || (t = `${n}/${t}`, r = A_(n));
  }
  return t = Bie(t, !r), r && !A_(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Bie(e, t) {
  let r = "", a = 0, n = -1, o = 0, i = null;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length)
      i = e[s];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(n === s - 1 || o === 1))
        if (o === 2) {
          if (r.length < 2 || a !== 2 || r[r.length - 1] !== "." || r[r.length - 2] !== ".") {
            if (r.length > 2) {
              const l = r.lastIndexOf("/");
              l === -1 ? (r = "", a = 0) : (r = r.slice(0, l), a = r.length - 1 - r.lastIndexOf("/")), n = s, o = 0;
              continue;
            } else if (r.length > 0) {
              r = "", a = 0, n = s, o = 0;
              continue;
            }
          }
          t && (r += r.length > 0 ? "/.." : "..", a = 2);
        } else
          r.length > 0 ? r += `/${e.slice(n + 1, s)}` : r = e.slice(n + 1, s), a = s - n - 1;
      n = s, o = 0;
    } else
      i === "." && o !== -1 ? ++o : o = -1;
  }
  return r;
}
const A_ = function(e) {
  return jie.test(e);
}, M_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lie = new Uint8Array(64), Uie = new Uint8Array(128);
for (let e = 0; e < M_.length; e++) {
  const t = M_.charCodeAt(e);
  Lie[e] = t, Uie[t] = e;
}
var q_;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(q_ || (q_ = {}));
const FP = /^\s*at .*(\S+:\d+|\(native\))/m, Hie = /^(eval@)?(\[native code])?$/;
function DP(e) {
  if (!e.includes(":"))
    return [e];
  const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!r)
    return [e];
  let a = r[1];
  return (a.startsWith("http:") || a.startsWith("https:")) && (a = new URL(a).pathname), a.startsWith("/@fs/") && (a = a.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [a, r[2] || void 0, r[3] || void 0];
}
function Vie(e) {
  let t = e.trim();
  if (Hie.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const r = /((.*".+"[^@]*)?[^@]*)(?:@)/, a = t.match(r), n = a && a[1] ? a[1] : void 0, [o, i, s] = DP(t.replace(r, ""));
  return !o || !i || !s ? null : {
    file: o,
    method: n || "",
    line: Number.parseInt(i),
    column: Number.parseInt(s)
  };
}
function zie(e) {
  const t = e.trim();
  return FP.test(t) ? Wie(t) : Vie(t);
}
function Wie(e) {
  let t = e.trim();
  if (!FP.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const a = r.match(/ (\(.+\)$)/);
  r = a ? r.replace(a[0], "") : r;
  const [n, o, i] = DP(a ? a[1] : r);
  let s = a && r || "", l = n && ["eval", "<anonymous>"].includes(n) ? void 0 : n;
  return !l || !o || !i ? null : (s.startsWith("async ") && (s = s.slice(6)), l.startsWith("file://") && (l = l.slice(7)), l = Die(l), s && (s = s.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: s,
    file: l,
    line: Number.parseInt(o),
    column: Number.parseInt(i)
  });
}
const It = Date;
let bh = null;
class Br extends It {
  constructor(t, r, a, n, o, i, s) {
    super();
    let l;
    switch (arguments.length) {
      case 0:
        bh !== null ? l = new It(bh.valueOf()) : l = new It();
        break;
      case 1:
        l = new It(t);
        break;
      default:
        a = typeof a > "u" ? 1 : a, n = n || 0, o = o || 0, i = i || 0, s = s || 0, l = new It(t, r, a, n, o, i, s);
        break;
    }
    return Object.setPrototypeOf(l, Br.prototype), l;
  }
}
Br.UTC = It.UTC;
Br.now = function() {
  return new Br().valueOf();
};
Br.parse = function(e) {
  return It.parse(e);
};
Br.toString = function() {
  return It.toString();
};
function Gie(e) {
  const t = new It(e.valueOf());
  if (Number.isNaN(t.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${e}`);
  globalThis.Date = Br, bh = t.valueOf();
}
function Kie() {
  globalThis.Date = It;
}
function Yie(e, t = !1) {
  const r = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...t ? [] : [/^mock:/]
  ];
  e.forEach((a, n) => {
    r.some((o) => o.test(n)) || e.invalidateModule(a);
  });
}
function Xie() {
  const { setTimeout: e } = tf();
  return new Promise((t) => e(t, 0));
}
async function BP() {
  await Xie();
  const e = mv(), t = [];
  let r = 0;
  for (const a of e.moduleCache.values())
    a.promise && !a.evaluated && t.push(a.promise), a.resolving && r++;
  !t.length && !r || (await Promise.allSettled(t), await BP());
}
function Jie(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var LP = { exports: {} };
(function(e, t) {
  (function() {
    (function(r) {
      return typeof Jie == "function" ? e.exports = r : chai.use(r);
    })(function(r, a) {
      var n = r.Assertion, o = n.prototype;
      n.addMethod("containSubset", function(s) {
        var l = a.flag(this, "object"), u = r.config.showDiff;
        o.assert.call(
          this,
          i(s, l),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          s,
          l,
          u
        );
      }), r.assert.containSubset = function(s, l, u) {
        new r.Assertion(s, u).to.be.containSubset(l);
      };
      function i(s, l) {
        if (s === l)
          return !0;
        if (typeof l != typeof s)
          return !1;
        if (typeof s != "object" || s === null)
          return s === l;
        if (s && !l)
          return !1;
        if (Array.isArray(s)) {
          if (typeof l.length != "number")
            return !1;
          var u = Array.prototype.slice.call(l);
          return s.every(function(c) {
            return u.some(function(d) {
              return i(c, d);
            });
          });
        }
        return s instanceof Date ? l instanceof Date ? s.getTime() === l.getTime() : !1 : Object.keys(s).every(function(c) {
          var d = s[c], f = l[c];
          return typeof d == "object" && d !== null && f !== null ? i(d, f) : typeof d == "function" ? d(f) : f === d;
        });
      }
    });
  }).call(Wa);
})(LP);
var Qie = LP.exports, Zie = /* @__PURE__ */ mne(Qie);
const I_ = Symbol.for("matchers-object"), ese = Symbol.for("$$jest-matchers-object"), tse = Symbol.for("expect-global"), rse = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, I_)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, I_, {
    get: () => e
  }), Object.defineProperty(globalThis, ese, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[tse]),
      matchers: t
    })
  }), Object.defineProperty(globalThis, rse, {
    get: () => r
  });
}
function nse(e, t) {
  return e && t instanceof Promise && (t = t.finally(() => {
    const r = e.promises.indexOf(t);
    r !== -1 && e.promises.splice(r, 1);
  }), e.promises || (e.promises = []), e.promises.push(t)), t;
}
let Gp;
function _a() {
  return Gp || (Gp = new Iie({
    isEqual: (e, t) => ze(e, t, [ft, lf])
  })), Gp;
}
function N_(e, t) {
  if (typeof e != "function") {
    if (!t)
      throw new Error(`expected must be a function, received ${typeof e}`);
    return e;
  }
  try {
    e();
  } catch (r) {
    return r;
  }
  throw new Error("snapshot function didn't throw");
}
const ase = (e, t) => {
  const r = (a) => {
    var n;
    return a ? {
      filepath: (n = a.file) == null ? void 0 : n.filepath,
      name: _1(a).slice(1).join(" > ")
    } : {};
  };
  for (const a of ["matchSnapshot", "toMatchSnapshot"])
    t.addMethod(
      e.Assertion.prototype,
      a,
      function(n, o) {
        const i = t.flag(this, "object"), s = t.flag(this, "vitest-test");
        typeof n == "string" && typeof o > "u" && (o = n, n = void 0);
        const l = t.flag(this, "message");
        _a().assert({
          received: i,
          message: o,
          isInline: !1,
          properties: n,
          errorMessage: l,
          ...r(s)
        });
      }
    );
  t.addMethod(
    e.Assertion.prototype,
    "toMatchFileSnapshot",
    function(a, n) {
      const o = t.flag(this, "object"), i = t.flag(this, "vitest-test"), s = t.flag(this, "message"), l = _a().assertRaw({
        received: o,
        message: n,
        isInline: !1,
        rawSnapshot: {
          file: a
        },
        errorMessage: s,
        ...r(i)
      });
      return nse(i, l);
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toMatchInlineSnapshot",
    function(n, o, i) {
      var s;
      const l = t.flag(this, "vitest-test");
      if (l && (l.each || ((s = l.suite) == null ? void 0 : s.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const c = t.flag(this, "object"), d = t.flag(this, "error");
      typeof n == "string" && (i = o, o = n, n = void 0), o && (o = O_(o));
      const f = t.flag(this, "message");
      _a().assert({
        received: c,
        message: i,
        isInline: !0,
        properties: n,
        inlineSnapshot: o,
        error: d,
        errorMessage: f,
        ...r(l)
      });
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(a) {
      const n = t.flag(this, "object"), o = t.flag(this, "vitest-test"), i = t.flag(this, "promise"), s = t.flag(this, "message");
      _a().assert({
        received: N_(n, i),
        message: a,
        errorMessage: s,
        ...r(o)
      });
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function(n, o) {
      var i;
      const s = t.flag(this, "vitest-test");
      if (s && (s.each || ((i = s.suite) == null ? void 0 : i.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const u = t.flag(this, "object"), c = t.flag(this, "error"), d = t.flag(this, "promise"), f = t.flag(this, "message");
      n && (n = O_(n)), _a().assert({
        received: N_(u, d),
        message: o,
        inlineSnapshot: n,
        isInline: !0,
        error: c,
        errorMessage: f,
        ...r(s)
      });
    }
  ), t.addMethod(
    e.expect,
    "addSnapshotSerializer",
    Poe
  );
};
no(jne);
no(Ine);
no(Zie);
no(ase);
no(qne);
function ose(e) {
  var t;
  const r = (i, s) => {
    const { assertionCalls: l } = In(r);
    Lp({ assertionCalls: l + 1, soft: !1 }, r);
    const u = Bp(i, s), c = e || ere();
    return c ? u.withTest(c) : u;
  };
  Object.assign(r, Bp), Object.assign(r, globalThis[gv]), r.getState = () => In(r), r.setState = (i) => Lp(i, r);
  const a = In(globalThis[ao]) || {};
  Lp({
    // this should also add "snapshotState" that is added conditionally
    ...a,
    assertionCalls: 0,
    isExpectingAssertions: !1,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: lre(),
    testPath: e ? (t = e.suite.file) == null ? void 0 : t.filepath : a.testPath,
    currentTestName: e ? Nie(e) : a.currentTestName
  }, r), r.extend = (i) => Bp.extend(r, i), r.soft = (...i) => {
    const s = r(...i);
    return r.setState({
      soft: !0
    }), s;
  }, r.unreachable = (i) => {
    pne.fail(`expected${i ? ` "${i}" ` : " "}not to be reached`);
  };
  function n(i) {
    const s = () => new Error(`expected number of assertions to be ${i}, but got ${r.getState().assertionCalls}`);
    Error.captureStackTrace && Error.captureStackTrace(s(), n), r.setState({
      expectedAssertionsNumber: i,
      expectedAssertionsNumberErrorGen: s
    });
  }
  function o() {
    const i = new Error("expected any number of assertion, but got none");
    Error.captureStackTrace && Error.captureStackTrace(i, o), r.setState({
      isExpectingAssertions: !0,
      isExpectingAssertionsError: i
    });
  }
  return fi.addMethod(r, "assertions", n), fi.addMethod(r, "hasAssertions", o), r;
}
const UP = ose();
Object.defineProperty(globalThis, ao, {
  value: UP,
  writable: !0,
  configurable: !0
});
var Bo;
typeof Wa < "u" ? Bo = Wa : typeof window < "u" ? Bo = window : Bo = self;
var ise = Bo;
let gh;
try {
  ({}).__proto__, gh = !1;
} catch {
  gh = !0;
}
var sse = gh, lse = Function.call, use = sse, HP = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
use && HP.push("__proto__");
var ia = function(t) {
  return Object.getOwnPropertyNames(t).reduce(
    function(r, a) {
      return HP.includes(a) || typeof t[a] != "function" || (r[a] = lse.bind(t[a])), r;
    },
    /* @__PURE__ */ Object.create(null)
  );
}, cse = ia, cf = cse(Array.prototype), dse = cf.every;
function fse(e, t) {
  return e[t.id] === void 0 && (e[t.id] = 0), e[t.id] < t.callCount;
}
function pse(e, t, r, a) {
  var n = !0;
  return r !== a.length - 1 && (n = t.calledBefore(a[r + 1])), fse(e, t) && n ? (e[t.id] += 1, !0) : !1;
}
function mse(e) {
  var t = {}, r = arguments.length > 1 ? arguments : e;
  return dse(r, pse.bind(null, t));
}
var hse = mse, VP = function(t) {
  if (!t)
    return "";
  try {
    return t.displayName || t.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(t).match(/function ([^\s(]+)/) || [])[1];
  } catch {
    return "";
  }
}, vse = VP;
function yse(e) {
  return e.constructor && e.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof e.constructor == "function" && /* istanbul ignore next */
  vse(e.constructor) || null;
}
var bse = yse, zP = {};
(function(e) {
  e.wrap = function(t, r) {
    var a = function() {
      return e.printWarning(r), t.apply(this, arguments);
    };
    return t.prototype && (a.prototype = t.prototype), a;
  }, e.defaultMsg = function(t, r) {
    return `${t}.${r} is deprecated and will be removed from the public API in a future version of ${t}.`;
  }, e.printWarning = function(t) {
    typeof process == "object" && process.emitWarning ? process.emitWarning(t) : console.info ? console.info(t) : console.log(t);
  };
})(zP);
var gse = function(t, r) {
  var a = !0;
  try {
    t.forEach(function() {
      if (!r.apply(this, arguments))
        throw new Error();
    });
  } catch {
    a = !1;
  }
  return a;
}, wse = cf.sort, _se = cf.slice;
function $se(e, t) {
  var r = e.getCall(0), a = t.getCall(0), n = r && r.callId || -1, o = a && a.callId || -1;
  return n < o ? -1 : 1;
}
function Ese(e) {
  return wse(_se(e), $se);
}
var Cse = Ese, Rse = ia, Pse = Rse(Function.prototype), xse = ia, Sse = xse(Map.prototype), Ose = ia, Tse = Ose(Object.prototype), Ase = ia, Mse = Ase(Set.prototype), qse = ia, Ise = qse(String.prototype), Nse = {
  array: cf,
  function: Pse,
  map: Sse,
  object: Tse,
  set: Mse,
  string: Ise
}, WP = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(Wa, function() {
    var r = typeof Promise == "function", a = typeof self == "object" ? self : Wa, n = typeof Symbol < "u", o = typeof Map < "u", i = typeof Set < "u", s = typeof WeakMap < "u", l = typeof WeakSet < "u", u = typeof DataView < "u", c = n && typeof Symbol.iterator < "u", d = n && typeof Symbol.toStringTag < "u", f = i && typeof Set.prototype.entries == "function", p = o && typeof Map.prototype.entries == "function", v = f && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), b = p && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), y = c && typeof Array.prototype[Symbol.iterator] == "function", h = y && Object.getPrototypeOf([][Symbol.iterator]()), $ = c && typeof String.prototype[Symbol.iterator] == "function", A = $ && Object.getPrototypeOf(""[Symbol.iterator]()), S = 8, T = -1;
    function E(M) {
      var L = typeof M;
      if (L !== "object")
        return L;
      if (M === null)
        return "null";
      if (M === a)
        return "global";
      if (Array.isArray(M) && (d === !1 || !(Symbol.toStringTag in M)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && M === window.location)
          return "Location";
        if (typeof window.document == "object" && M === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && M === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && M === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && M instanceof window.HTMLElement) {
          if (M.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (M.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (M.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var ie = d && M[Symbol.toStringTag];
      if (typeof ie == "string")
        return ie;
      var J = Object.getPrototypeOf(M);
      return J === RegExp.prototype ? "RegExp" : J === Date.prototype ? "Date" : r && J === Promise.prototype ? "Promise" : i && J === Set.prototype ? "Set" : o && J === Map.prototype ? "Map" : l && J === WeakSet.prototype ? "WeakSet" : s && J === WeakMap.prototype ? "WeakMap" : u && J === DataView.prototype ? "DataView" : o && J === b ? "Map Iterator" : i && J === v ? "Set Iterator" : y && J === h ? "Array Iterator" : $ && J === A ? "String Iterator" : J === null ? "Object" : Object.prototype.toString.call(M).slice(S, T);
    }
    return E;
  });
})(WP);
var kse = WP.exports, jse = kse, Fse = function(t) {
  return jse(t).toLowerCase();
};
function Dse(e) {
  return e && e.toString ? e.toString() : String(e);
}
var Bse = Dse, Lse = {
  global: ise,
  calledInOrder: hse,
  className: bse,
  deprecated: zP,
  every: gse,
  functionName: VP,
  orderByFirstCall: Cse,
  prototypes: Nse,
  typeOf: Fse,
  valueToString: Bse
};
const GP = Lse.global;
let Pn;
if (typeof __vitest_required__ < "u")
  try {
    Pn = __vitest_required__.timers;
  } catch {
  }
function xv(e) {
  const t = Math.pow(2, 31) - 1, r = 1e12, a = function() {
  }, n = function() {
    return [];
  }, o = e.setTimeout(a, 0), i = typeof o == "object", s = e.process && typeof e.process.hrtime == "function", l = s && typeof e.process.hrtime.bigint == "function", u = e.process && typeof e.process.nextTick == "function", c = e.process && e.__vitest_required__ && e.__vitest_required__.util.promisify, d = e.performance && typeof e.performance.now == "function", f = e.Performance && (typeof e.Performance).match(/^(function|object)$/), p = e.performance && e.performance.constructor && e.performance.constructor.prototype, v = e.hasOwnProperty("queueMicrotask"), b = e.requestAnimationFrame && typeof e.requestAnimationFrame == "function", y = e.cancelAnimationFrame && typeof e.cancelAnimationFrame == "function", h = e.requestIdleCallback && typeof e.requestIdleCallback == "function", $ = e.cancelIdleCallback && typeof e.cancelIdleCallback == "function", A = e.setImmediate && typeof e.setImmediate == "function", S = e.Intl && typeof e.Intl == "object";
  e.clearTimeout(o);
  const T = e.Date, E = e.Intl;
  let M = r;
  function L(O) {
    return Number.isFinite ? Number.isFinite(O) : isFinite(O);
  }
  let ie = !1;
  function J(O, I) {
    O.loopLimit && I === O.loopLimit - 1 && (ie = !0);
  }
  function fe() {
    ie = !1;
  }
  function de(O) {
    if (!O)
      return 0;
    const I = O.split(":"), W = I.length;
    let X = W, P = 0, pe;
    if (W > 3 || !/^(\d\d:){0,2}\d\d?$/.test(O))
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    for (; X--; ) {
      if (pe = parseInt(I[X], 10), pe >= 60)
        throw new Error(`Invalid time ${O}`);
      P += pe * Math.pow(60, W - X - 1);
    }
    return P * 1e3;
  }
  function G(O) {
    const W = O * 1e6 % 1e6, X = W < 0 ? W + 1e6 : W;
    return Math.floor(X);
  }
  function ae(O) {
    if (!O)
      return 0;
    if (typeof O.getTime == "function")
      return O.getTime();
    if (typeof O == "number")
      return O;
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function xe(O, I, W) {
    return W && W.callAt >= O && W.callAt <= I;
  }
  function ve(O, I) {
    const W = new Error(
      `Aborting after running ${O.loopLimit} timers, assuming an infinite loop!`
    );
    if (!I.error)
      return W;
    const X = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let P = new RegExp(
      String(Object.keys(O).join("|"))
    );
    i && (P = new RegExp(
      `\\s+at (Object\\.)?(?:${Object.keys(O).join("|")})\\s+`
    ));
    let pe = -1;
    I.error.stack.split(`
`).some(function(Le, Ze) {
      return Le.match(X) ? (pe = Ze, !0) : Le.match(P) ? (pe = Ze, !1) : pe >= 0;
    });
    const Be = `${W}
${I.type || "Microtask"} - ${I.func.name || "anonymous"}
${I.error.stack.split(`
`).slice(pe + 1).join(`
`)}`;
    try {
      Object.defineProperty(W, "stack", {
        value: Be
      });
    } catch {
    }
    return W;
  }
  function $e(O, I) {
    let W;
    for (W in I)
      I.hasOwnProperty(W) && (O[W] = I[W]);
    return I.now ? O.now = function() {
      return O.clock.now;
    } : delete O.now, I.toSource ? O.toSource = function() {
      return I.toSource();
    } : delete O.toSource, O.toString = function() {
      return I.toString();
    }, O.prototype = I.prototype, O.parse = I.parse, O.UTC = I.UTC, O.prototype.toUTCString = I.prototype.toUTCString, O.isFake = !0, O;
  }
  function Te() {
    function O(I, W, X, P, pe, Be, Le) {
      if (!(this instanceof O))
        return new T(O.clock.now).toString();
      switch (arguments.length) {
        case 0:
          return new T(O.clock.now);
        case 1:
          return new T(I);
        case 2:
          return new T(I, W);
        case 3:
          return new T(I, W, X);
        case 4:
          return new T(I, W, X, P);
        case 5:
          return new T(I, W, X, P, pe);
        case 6:
          return new T(
            I,
            W,
            X,
            P,
            pe,
            Be
          );
        default:
          return new T(
            I,
            W,
            X,
            P,
            pe,
            Be,
            Le
          );
      }
    }
    return $e(O, T);
  }
  function g() {
    const O = { ...E };
    return O.DateTimeFormat = function(...I) {
      const W = new E.DateTimeFormat(...I), X = {};
      return ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
        (P) => {
          X[P] = W[P].bind(W);
        }
      ), ["format", "formatToParts"].forEach((P) => {
        X[P] = function(pe) {
          return W[P](pe || O.clock.now);
        };
      }), X;
    }, O.DateTimeFormat.prototype = Object.create(
      E.DateTimeFormat.prototype
    ), O.DateTimeFormat.supportedLocalesOf = E.DateTimeFormat.supportedLocalesOf, O;
  }
  function q(O, I) {
    O.jobs || (O.jobs = []), O.jobs.push(I);
  }
  function R(O) {
    if (O.jobs) {
      for (let I = 0; I < O.jobs.length; I++) {
        const W = O.jobs[I];
        if (W.func.apply(null, W.args), J(O, I), O.loopLimit && I > O.loopLimit)
          throw ve(O, W);
      }
      fe(), O.jobs = [];
    }
  }
  function x(O, I) {
    if (I.func === void 0)
      throw new Error("Callback must be provided to timer calls");
    if (i && typeof I.func != "function")
      throw new TypeError(
        `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${I.func} of type ${typeof I.func}`
      );
    if (ie && (I.error = new Error()), I.type = I.immediate ? "Immediate" : "Timeout", I.hasOwnProperty("delay") && (typeof I.delay != "number" && (I.delay = parseInt(I.delay, 10)), L(I.delay) || (I.delay = 0), I.delay = I.delay > t ? 1 : I.delay, I.delay = Math.max(0, I.delay)), I.hasOwnProperty("interval") && (I.type = "Interval", I.interval = I.interval > t ? 1 : I.interval), I.hasOwnProperty("animation") && (I.type = "AnimationFrame", I.animation = !0), I.hasOwnProperty("idleCallback") && (I.type = "IdleCallback", I.idleCallback = !0), O.timers || (O.timers = {}), I.id = M++, I.createdAt = O.now, I.callAt = O.now + (parseInt(I.delay) || (O.duringTick ? 1 : 0)), O.timers[I.id] = I, i) {
      const W = {
        refed: !0,
        ref: function() {
          return this.refed = !0, W;
        },
        unref: function() {
          return this.refed = !1, W;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          return I.callAt = O.now + (parseInt(I.delay) || (O.duringTick ? 1 : 0)), O.timers[I.id] = I, W;
        },
        [Symbol.toPrimitive]: function() {
          return I.id;
        }
      };
      return W;
    }
    return I.id;
  }
  function j(O, I) {
    if (O.callAt < I.callAt)
      return -1;
    if (O.callAt > I.callAt)
      return 1;
    if (O.immediate && !I.immediate)
      return -1;
    if (!O.immediate && I.immediate)
      return 1;
    if (O.createdAt < I.createdAt)
      return -1;
    if (O.createdAt > I.createdAt)
      return 1;
    if (O.id < I.id)
      return -1;
    if (O.id > I.id)
      return 1;
  }
  function H(O, I, W) {
    const X = O.timers;
    let P = null, pe, Be;
    for (pe in X)
      X.hasOwnProperty(pe) && (Be = xe(I, W, X[pe]), Be && (!P || j(P, X[pe]) === 1) && (P = X[pe]));
    return P;
  }
  function F(O) {
    const I = O.timers;
    let W = null, X;
    for (X in I)
      I.hasOwnProperty(X) && (!W || j(W, I[X]) === 1) && (W = I[X]);
    return W;
  }
  function k(O) {
    const I = O.timers;
    let W = null, X;
    for (X in I)
      I.hasOwnProperty(X) && (!W || j(W, I[X]) === -1) && (W = I[X]);
    return W;
  }
  function Q(O, I) {
    if (typeof I.interval == "number" ? O.timers[I.id].callAt += I.interval : delete O.timers[I.id], typeof I.func == "function")
      I.func.apply(null, I.args);
    else {
      const W = eval;
      (function() {
        W(I.func);
      })();
    }
  }
  function oe(O) {
    return O === "IdleCallback" || O === "AnimationFrame" ? `cancel${O}` : `clear${O}`;
  }
  function he(O) {
    return O === "IdleCallback" || O === "AnimationFrame" ? `request${O}` : `set${O}`;
  }
  function we() {
    let O = 0;
    return function(I) {
      !O++ && console.warn(I);
    };
  }
  const K = we();
  function se(O, I, W) {
    if (!I)
      return;
    O.timers || (O.timers = {});
    const X = Number(I);
    if (Number.isNaN(X) || X < r) {
      const P = oe(W);
      if (O.shouldClearNativeTimers === !0) {
        const pe = O[`_${P}`];
        return typeof pe == "function" ? pe(I) : void 0;
      }
      K(
        `FakeTimers: ${P} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (O.timers.hasOwnProperty(X)) {
      const P = O.timers[X];
      if (P.type === W || P.type === "Timeout" && W === "Interval" || P.type === "Interval" && W === "Timeout")
        delete O.timers[X];
      else {
        const pe = oe(W), Be = he(P.type);
        throw new Error(
          `Cannot clear timer: timer created with ${Be}() but cleared with ${pe}()`
        );
      }
    }
  }
  function be(O, I) {
    let W, X, P;
    const pe = "_hrtime", Be = "_nextTick";
    for (X = 0, P = O.methods.length; X < P; X++) {
      if (W = O.methods[X], W === "hrtime" && e.process)
        e.process.hrtime = O[pe];
      else if (W === "nextTick" && e.process)
        e.process.nextTick = O[Be];
      else if (W === "performance") {
        const Le = Object.getOwnPropertyDescriptor(
          O,
          `_${W}`
        );
        Le && Le.get && !Le.set ? Object.defineProperty(
          e,
          W,
          Le
        ) : Le.configurable && (e[W] = O[`_${W}`]);
      } else if (e[W] && e[W].hadOwnProperty)
        e[W] = O[`_${W}`];
      else
        try {
          delete e[W];
        } catch {
        }
      if (O.timersModuleMethods !== void 0)
        for (let Le = 0; Le < O.timersModuleMethods.length; Le++) {
          const Ze = O.timersModuleMethods[Le];
          Pn[Ze.methodName] = Ze.original;
        }
    }
    return I.shouldAdvanceTime === !0 && e.clearInterval(O.attachedInterval), O.methods = [], O.timers ? Object.keys(O.timers).map(function(Ze) {
      return O.timers[Ze];
    }) : [];
  }
  function B(O, I, W) {
    if (W[I].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      O,
      I
    ), W[`_${I}`] = O[I], I === "Date") {
      const X = $e(W[I], O[I]);
      O[I] = X;
    } else if (I === "Intl")
      O[I] = W[I];
    else if (I === "performance") {
      const X = Object.getOwnPropertyDescriptor(
        O,
        I
      );
      if (X && X.get && !X.set) {
        Object.defineProperty(
          W,
          `_${I}`,
          X
        );
        const P = Object.getOwnPropertyDescriptor(
          W,
          I
        );
        Object.defineProperty(O, I, P);
      } else
        O[I] = W[I];
    } else
      O[I] = function() {
        return W[I].apply(W, arguments);
      }, Object.defineProperties(
        O[I],
        Object.getOwnPropertyDescriptors(W[I])
      );
    O[I].clock = W;
  }
  function Oe(O, I) {
    O.tick(I);
  }
  const le = {
    setTimeout: e.setTimeout,
    clearTimeout: e.clearTimeout,
    setInterval: e.setInterval,
    clearInterval: e.clearInterval,
    Date: e.Date
  };
  A && (le.setImmediate = e.setImmediate, le.clearImmediate = e.clearImmediate), s && (le.hrtime = e.process.hrtime), u && (le.nextTick = e.process.nextTick), d && (le.performance = e.performance), b && (le.requestAnimationFrame = e.requestAnimationFrame), v && (le.queueMicrotask = !0), y && (le.cancelAnimationFrame = e.cancelAnimationFrame), h && (le.requestIdleCallback = e.requestIdleCallback), $ && (le.cancelIdleCallback = e.cancelIdleCallback), S && (le.Intl = e.Intl);
  const Ie = e.setImmediate || e.setTimeout;
  function mt(O, I) {
    O = Math.floor(ae(O)), I = I || 1e3;
    let W = 0;
    const X = [0, 0];
    if (T === void 0)
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    const P = {
      now: O,
      Date: Te(),
      loopLimit: I
    };
    P.Date.clock = P;
    function pe() {
      return 16 - (P.now - O) % 16;
    }
    function Be(ue) {
      const m = P.now - X[0] - O, D = Math.floor(m / 1e3), N = (m - D * 1e3) * 1e6 + W - X[1];
      if (Array.isArray(ue)) {
        if (ue[1] > 1e9)
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        const re = ue[0];
        let ce = N - ue[1], Ee = D - re;
        return ce < 0 && (ce += 1e9, Ee -= 1), [Ee, ce];
      }
      return [D, N];
    }
    function Le() {
      const ue = Be();
      return ue[0] * 1e3 + ue[1] / 1e6;
    }
    l && (Be.bigint = function() {
      const ue = Be();
      return BigInt(ue[0]) * BigInt(1e9) + BigInt(ue[1]);
    }), S && (P.Intl = g(), P.Intl.clock = P), P.requestIdleCallback = function(m, D) {
      let N = 0;
      P.countTimers() > 0 && (N = 50);
      const re = x(P, {
        func: m,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof D > "u" ? N : Math.min(D, N),
        idleCallback: !0
      });
      return Number(re);
    }, P.cancelIdleCallback = function(m) {
      return se(P, m, "IdleCallback");
    }, P.setTimeout = function(m, D) {
      return x(P, {
        func: m,
        args: Array.prototype.slice.call(arguments, 2),
        delay: D
      });
    }, typeof e.Promise < "u" && c && (P.setTimeout[c.custom] = function(m, D) {
      return new e.Promise(function(re) {
        x(P, {
          func: re,
          args: [D],
          delay: m
        });
      });
    }), P.clearTimeout = function(m) {
      return se(P, m, "Timeout");
    }, P.nextTick = function(m) {
      return q(P, {
        func: m,
        args: Array.prototype.slice.call(arguments, 1),
        error: ie ? new Error() : null
      });
    }, P.queueMicrotask = function(m) {
      return P.nextTick(m);
    }, P.setInterval = function(m, D) {
      return D = parseInt(D, 10), x(P, {
        func: m,
        args: Array.prototype.slice.call(arguments, 2),
        delay: D,
        interval: D
      });
    }, P.clearInterval = function(m) {
      return se(P, m, "Interval");
    }, A && (P.setImmediate = function(m) {
      return x(P, {
        func: m,
        args: Array.prototype.slice.call(arguments, 1),
        immediate: !0
      });
    }, typeof e.Promise < "u" && c && (P.setImmediate[c.custom] = function(m) {
      return new e.Promise(
        function(N) {
          x(P, {
            func: N,
            args: [m],
            immediate: !0
          });
        }
      );
    }), P.clearImmediate = function(m) {
      return se(P, m, "Immediate");
    }), P.countTimers = function() {
      return Object.keys(P.timers || {}).length + (P.jobs || []).length;
    }, P.requestAnimationFrame = function(m) {
      const D = x(P, {
        func: m,
        delay: pe(),
        get args() {
          return [Le()];
        },
        animation: !0
      });
      return Number(D);
    }, P.cancelAnimationFrame = function(m) {
      return se(P, m, "AnimationFrame");
    }, P.runMicrotasks = function() {
      R(P);
    };
    function Ze(ue, m, D, N) {
      const re = typeof ue == "number" ? ue : de(ue), ce = Math.floor(re), Ee = G(re);
      let ge = W + Ee, _e = P.now + ce;
      if (re < 0)
        throw new TypeError("Negative ticks are not supported");
      ge >= 1e6 && (_e += 1, ge -= 1e6), W = ge;
      let _ = P.now, C = P.now, U, te, ne, ye, Pe, qe;
      P.duringTick = !0, ne = P.now, R(P), ne !== P.now && (_ += P.now - ne, _e += P.now - ne);
      function Je() {
        for (U = H(P, _, _e); U && _ <= _e; ) {
          if (P.timers[U.id]) {
            _ = U.callAt, P.now = U.callAt, ne = P.now;
            try {
              R(P), Q(P, U);
            } catch (Ke) {
              te = te || Ke;
            }
            if (m) {
              Ie(ye);
              return;
            }
            Pe();
          }
          qe();
        }
        if (ne = P.now, R(P), ne !== P.now && (_ += P.now - ne, _e += P.now - ne), P.duringTick = !1, U = H(P, _, _e), U)
          try {
            P.tick(_e - P.now);
          } catch (Ke) {
            te = te || Ke;
          }
        else
          P.now = _e, W = ge;
        if (te)
          throw te;
        if (m)
          D(P.now);
        else
          return P.now;
      }
      return ye = m && function() {
        try {
          Pe(), qe(), Je();
        } catch (Ke) {
          N(Ke);
        }
      }, Pe = function() {
        ne !== P.now && (_ += P.now - ne, _e += P.now - ne, C += P.now - ne);
      }, qe = function() {
        U = H(P, C, _e), C = _;
      }, Je();
    }
    return P.tick = function(m) {
      return Ze(m, !1);
    }, typeof e.Promise < "u" && (P.tickAsync = function(m) {
      return new e.Promise(function(D, N) {
        Ie(function() {
          try {
            Ze(m, !0, D, N);
          } catch (re) {
            N(re);
          }
        });
      });
    }), P.next = function() {
      R(P);
      const m = F(P);
      if (!m)
        return P.now;
      P.duringTick = !0;
      try {
        return P.now = m.callAt, Q(P, m), R(P), P.now;
      } finally {
        P.duringTick = !1;
      }
    }, typeof e.Promise < "u" && (P.nextAsync = function() {
      return new e.Promise(function(m, D) {
        Ie(function() {
          try {
            const N = F(P);
            if (!N) {
              m(P.now);
              return;
            }
            let re;
            P.duringTick = !0, P.now = N.callAt;
            try {
              Q(P, N);
            } catch (ce) {
              re = ce;
            }
            P.duringTick = !1, Ie(function() {
              re ? D(re) : m(P.now);
            });
          } catch (N) {
            D(N);
          }
        });
      });
    }), P.runAll = function() {
      let m, D;
      for (R(P), D = 0; D < P.loopLimit; D++) {
        if (!P.timers || (m = Object.keys(P.timers).length, m === 0))
          return fe(), P.now;
        P.next(), J(P, D);
      }
      const N = F(P);
      throw ve(P, N);
    }, P.runToFrame = function() {
      return P.tick(pe());
    }, typeof e.Promise < "u" && (P.runAllAsync = function() {
      return new e.Promise(function(m, D) {
        let N = 0;
        function re() {
          Ie(function() {
            try {
              let ce;
              if (N < P.loopLimit) {
                if (!P.timers) {
                  fe(), m(P.now);
                  return;
                }
                if (ce = Object.keys(
                  P.timers
                ).length, ce === 0) {
                  fe(), m(P.now);
                  return;
                }
                P.next(), N++, re(), J(P, N);
                return;
              }
              const Ee = F(P);
              D(ve(P, Ee));
            } catch (ce) {
              D(ce);
            }
          });
        }
        re();
      });
    }), P.runToLast = function() {
      const m = k(P);
      return m ? P.tick(m.callAt - P.now) : (R(P), P.now);
    }, typeof e.Promise < "u" && (P.runToLastAsync = function() {
      return new e.Promise(function(m, D) {
        Ie(function() {
          try {
            const N = k(P);
            N || m(P.now), m(P.tickAsync(N.callAt - P.now));
          } catch (N) {
            D(N);
          }
        });
      });
    }), P.reset = function() {
      W = 0, P.timers = {}, P.jobs = [], P.now = O;
    }, P.setSystemTime = function(m) {
      const D = ae(m), N = D - P.now;
      let re, ce;
      X[0] = X[0] + N, X[1] = X[1] + W, P.now = D, W = 0;
      for (re in P.timers)
        P.timers.hasOwnProperty(re) && (ce = P.timers[re], ce.createdAt += N, ce.callAt += N);
    }, P.jump = function(m) {
      const D = typeof m == "number" ? m : de(m), N = Math.floor(D);
      for (const re of Object.values(P.timers))
        P.now + N > re.callAt && (re.callAt = P.now + N);
      P.tick(N);
    }, d && (P.performance = /* @__PURE__ */ Object.create(null), P.performance.now = Le), s && (P.hrtime = Be), P;
  }
  function Ft(O) {
    if (arguments.length > 1 || O instanceof Date || Array.isArray(O) || typeof O == "number")
      throw new TypeError(
        `FakeTimers.install called with ${String(
          O
        )} install requires an object parameter`
      );
    if (e.Date.isFake === !0)
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    if (O = typeof O < "u" ? O : {}, O.shouldAdvanceTime = O.shouldAdvanceTime || !1, O.advanceTimeDelta = O.advanceTimeDelta || 20, O.shouldClearNativeTimers = O.shouldClearNativeTimers || !1, O.target)
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    let I, W;
    const X = mt(O.now, O.loopLimit);
    if (X.shouldClearNativeTimers = O.shouldClearNativeTimers, X.uninstall = function() {
      return be(X, O);
    }, X.methods = O.toFake || [], X.methods.length === 0 && (X.methods = Object.keys(le).filter(function(P) {
      return P !== "nextTick" && P !== "queueMicrotask";
    })), O.shouldAdvanceTime === !0) {
      const P = Oe.bind(
        null,
        X,
        O.advanceTimeDelta
      ), pe = e.setInterval(
        P,
        O.advanceTimeDelta
      );
      X.attachedInterval = pe;
    }
    if (X.methods.includes("performance")) {
      const P = (() => {
        if (p)
          return e.performance.constructor.prototype;
        if (f)
          return e.Performance.prototype;
      })();
      if (P)
        Object.getOwnPropertyNames(P).forEach(function(pe) {
          pe !== "now" && (X.performance[pe] = pe.indexOf("getEntries") === 0 ? n : a);
        });
      else if ((O.toFake || []).includes("performance"))
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
    }
    for (e === GP && Pn && (X.timersModuleMethods = []), I = 0, W = X.methods.length; I < W; I++) {
      const P = X.methods[I];
      if (P === "hrtime" ? e.process && typeof e.process.hrtime == "function" && B(e.process, P, X) : P === "nextTick" ? e.process && typeof e.process.nextTick == "function" && B(e.process, P, X) : B(e, P, X), X.timersModuleMethods !== void 0 && Pn[P]) {
        const pe = Pn[P];
        X.timersModuleMethods.push({
          methodName: P,
          original: pe
        }), Pn[P] = e[P];
      }
    }
    return X;
  }
  return {
    timers: le,
    createClock: mt,
    install: Ft,
    withGlobal: xv
  };
}
const Sv = xv(GP);
Sv.timers;
Sv.createClock;
Sv.install;
var Use = xv;
class Hse {
  constructor({
    global: t,
    config: r
  }) {
    Me(this, "_clock");
    Me(this, "_fakingTime");
    Me(this, "_fakingDate");
    Me(this, "_fakeTimers");
    Me(this, "_userConfig");
    Me(this, "_now", It.now);
    this._userConfig = r, this._fakingDate = !1, this._fakingTime = !1, this._fakeTimers = Use(t);
  }
  clearAllTimers() {
    this._fakingTime && this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    this._checkFakeTimers() && this._clock.runAll();
  }
  async runAllTimersAsync() {
    this._checkFakeTimers() && await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    this._checkFakeTimers() && this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    this._checkFakeTimers() && await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(t = 1) {
    if (this._checkFakeTimers())
      for (let r = t; r > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); r--)
        ;
  }
  async advanceTimersToNextTimerAsync(t = 1) {
    if (this._checkFakeTimers())
      for (let r = t; r > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); r--)
        ;
  }
  advanceTimersByTime(t) {
    this._checkFakeTimers() && this._clock.tick(t);
  }
  async advanceTimersByTimeAsync(t) {
    this._checkFakeTimers() && await this._clock.tickAsync(t);
  }
  runAllTicks() {
    this._checkFakeTimers() && this._clock.runMicrotasks();
  }
  useRealTimers() {
    this._fakingDate && (Kie(), this._fakingDate = !1), this._fakingTime && (this._clock.uninstall(), this._fakingTime = !1);
  }
  useFakeTimers() {
    var t, r;
    if (this._fakingDate)
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    if (!this._fakingTime) {
      const a = Object.keys(this._fakeTimers.timers).filter((n) => n !== "nextTick");
      if ((r = (t = this._userConfig) == null ? void 0 : t.toFake) != null && r.includes("nextTick") && globalThis.__vitest_worker__.isChildProcess)
        throw new Error("process.nextTick cannot be mocked inside child_process");
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        toFake: a,
        ...this._userConfig
      }), this._fakingTime = !0;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: t } = this._clock;
      this._clock.reset(), this._clock.setSystemTime(t);
    }
  }
  setSystemTime(t) {
    this._fakingTime ? this._clock.setSystemTime(t) : (Gie(t ?? this.getRealSystemTime()), this._fakingDate = !0);
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    return this._checkFakeTimers() ? this._clock.countTimers() : 0;
  }
  configure(t) {
    this._userConfig = t;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime)
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    return this._fakingTime;
  }
}
function KP(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function Vse(e, t = {}) {
  const { setTimeout: r, setInterval: a, clearTimeout: n, clearInterval: o } = tf(), { interval: i = 50, timeout: s = 1e3 } = typeof t == "number" ? { timeout: t } : t, l = new Error("STACK_TRACE_ERROR");
  return new Promise((u, c) => {
    let d, f = "idle", p, v;
    const b = ($) => {
      p && n(p), v && o(v), u($);
    }, y = () => {
      let $ = d;
      $ || ($ = KP(new Error("Timed out in waitFor!"), l)), c($);
    }, h = () => {
      if (hi.isFakeTimers() && hi.advanceTimersByTime(i), f !== "pending")
        try {
          const $ = e();
          if ($ !== null && typeof $ == "object" && typeof $.then == "function") {
            const A = $;
            f = "pending", A.then(
              (S) => {
                f = "resolved", b(S);
              },
              (S) => {
                f = "rejected", d = S;
              }
            );
          } else
            return b($), !0;
        } catch ($) {
          d = $;
        }
    };
    h() !== !0 && (p = r(y, s), v = a(h, i));
  });
}
function zse(e, t = {}) {
  const { setTimeout: r, setInterval: a, clearTimeout: n, clearInterval: o } = tf(), { interval: i = 50, timeout: s = 1e3 } = typeof t == "number" ? { timeout: t } : t, l = new Error("STACK_TRACE_ERROR");
  return new Promise((u, c) => {
    let d = "idle", f, p;
    const v = (h) => {
      h || (h = KP(new Error("Timed out in waitUntil!"), l)), c(h);
    }, b = (h) => {
      if (h)
        return f && n(f), p && o(p), u(h), !0;
    }, y = () => {
      if (hi.isFakeTimers() && hi.advanceTimersByTime(i), d !== "pending")
        try {
          const h = e();
          if (h !== null && typeof h == "object" && typeof h.then == "function") {
            const $ = h;
            d = "pending", $.then(
              (A) => {
                d = "resolved", b(A);
              },
              (A) => {
                d = "rejected", v(A);
              }
            );
          } else
            return b(h);
        } catch (h) {
          v(h);
        }
    };
    y() !== !0 && (f = r(v, s), p = a(y, i));
  });
}
function Wse() {
  const e = typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, {
    get(u, c) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${String(c)}() is forbidden.`
      );
    }
  });
  let t = null, r = null;
  const a = mv(), n = new Hse({
    global: globalThis,
    config: a.config.fakeTimers
  }), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = () => {
    const c = ste({ stackTraceLimit: 4 }).split(`
`)[4], d = zie(c);
    return (d == null ? void 0 : d.file) || "";
  }, l = {
    useFakeTimers(u) {
      var c, d, f, p;
      if (a.isChildProcess && ((c = u == null ? void 0 : u.toFake) != null && c.includes("nextTick") || (p = (f = (d = a.config) == null ? void 0 : d.fakeTimers) == null ? void 0 : f.toFake) != null && p.includes("nextTick")))
        throw new Error(
          'vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.'
        );
      return u ? n.configure({ ...a.config.fakeTimers, ...u }) : n.configure(a.config.fakeTimers), n.useFakeTimers(), l;
    },
    isFakeTimers() {
      return n.isFakeTimers();
    },
    useRealTimers() {
      return n.useRealTimers(), t = null, l;
    },
    runOnlyPendingTimers() {
      return n.runOnlyPendingTimers(), l;
    },
    async runOnlyPendingTimersAsync() {
      return await n.runOnlyPendingTimersAsync(), l;
    },
    runAllTimers() {
      return n.runAllTimers(), l;
    },
    async runAllTimersAsync() {
      return await n.runAllTimersAsync(), l;
    },
    runAllTicks() {
      return n.runAllTicks(), l;
    },
    advanceTimersByTime(u) {
      return n.advanceTimersByTime(u), l;
    },
    async advanceTimersByTimeAsync(u) {
      return await n.advanceTimersByTimeAsync(u), l;
    },
    advanceTimersToNextTimer() {
      return n.advanceTimersToNextTimer(), l;
    },
    async advanceTimersToNextTimerAsync() {
      return await n.advanceTimersToNextTimerAsync(), l;
    },
    getTimerCount() {
      return n.getTimerCount();
    },
    setSystemTime(u) {
      const c = u instanceof Date ? u : new Date(u);
      return t = c, n.setSystemTime(c), l;
    },
    getMockedSystemTime() {
      return t;
    },
    getRealSystemTime() {
      return n.getRealSystemTime();
    },
    clearAllTimers() {
      return n.clearAllTimers(), l;
    },
    // mocks
    spyOn: wne,
    fn: $ne,
    waitFor: Vse,
    waitUntil: zse,
    hoisted(u) {
      return Bt(u, '"vi.hoisted" factory', ["function"]), u();
    },
    mock(u, c) {
      const d = s();
      e.queueMock(
        u,
        d,
        c ? () => c(() => e.importActual(u, d)) : void 0
      );
    },
    unmock(u) {
      e.queueUnmock(u, s());
    },
    doMock(u, c) {
      const d = s();
      e.queueMock(
        u,
        d,
        c ? () => c(() => e.importActual(u, d)) : void 0
      );
    },
    doUnmock(u) {
      e.queueUnmock(u, s());
    },
    async importActual(u) {
      return e.importActual(u, s());
    },
    async importMock(u) {
      return e.importMock(u, s());
    },
    mocked(u, c = {}) {
      return u;
    },
    isMockFunction(u) {
      return L1(u);
    },
    clearAllMocks() {
      return Fo.forEach((u) => u.mockClear()), l;
    },
    resetAllMocks() {
      return Fo.forEach((u) => u.mockReset()), l;
    },
    restoreAllMocks() {
      return Fo.forEach((u) => u.mockRestore()), l;
    },
    stubGlobal(u, c) {
      return o.has(u) || o.set(u, Object.getOwnPropertyDescriptor(globalThis, u)), Object.defineProperty(globalThis, u, {
        value: c,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }), l;
    },
    stubEnv(u, c) {
      return i.has(u) || i.set(u, process.env[u]), process.env[u] = c, l;
    },
    unstubAllGlobals() {
      return o.forEach((u, c) => {
        u ? Object.defineProperty(globalThis, c, u) : Reflect.deleteProperty(globalThis, c);
      }), o.clear(), l;
    },
    unstubAllEnvs() {
      return i.forEach((u, c) => {
        u === void 0 ? delete process.env[c] : process.env[c] = u;
      }), i.clear(), l;
    },
    resetModules() {
      return Yie(a.moduleCache), l;
    },
    async dynamicImportSettled() {
      return BP();
    },
    setConfig(u) {
      r || (r = { ...a.config }), Object.assign(a.config, u);
    },
    resetConfig() {
      r && Object.assign(a.config, r);
    }
  };
  return l;
}
const Gse = Wse(), hi = Gse;
rre("ui/Stack", () => {
  tre("title is exist", () => {
    d5(/* @__PURE__ */ u0.jsx(c0, {}));
    const e = o5.getByTestId("stack");
    UP(e).toBeInTheDocument();
  });
});
export {
  yt as c
};
