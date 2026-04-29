var Bh = (e) => {
  throw TypeError(e);
};
var nu = (e, t, n) => t.has(e) || Bh("Cannot " + n);
var R = (e, t, n) => (
    nu(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? Bh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  H = (e, t, n, r) => (
    nu(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Le = (e, t, n) => (nu(e, t, "access private method"), n);
var As = (e, t, n, r) => ({
  set _(o) {
    H(e, t, o, n);
  },
  get _() {
    return R(e, t, r);
  },
});
function zS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function my(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gy = { exports: {} },
  gl = {},
  yy = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs = Symbol.for("react.element"),
  BS = Symbol.for("react.portal"),
  $S = Symbol.for("react.fragment"),
  US = Symbol.for("react.strict_mode"),
  WS = Symbol.for("react.profiler"),
  HS = Symbol.for("react.provider"),
  KS = Symbol.for("react.context"),
  GS = Symbol.for("react.forward_ref"),
  YS = Symbol.for("react.suspense"),
  QS = Symbol.for("react.memo"),
  XS = Symbol.for("react.lazy"),
  $h = Symbol.iterator;
function qS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($h && e[$h]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xy = Object.assign,
  wy = {};
function Yo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = wy),
    (this.updater = n || vy));
}
Yo.prototype.isReactComponent = {};
Yo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sy() {}
Sy.prototype = Yo.prototype;
function Ud(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = wy),
    (this.updater = n || vy));
}
var Wd = (Ud.prototype = new Sy());
Wd.constructor = Ud;
xy(Wd, Yo.prototype);
Wd.isPureReactComponent = !0;
var Uh = Array.isArray,
  Ey = Object.prototype.hasOwnProperty,
  Hd = { current: null },
  Cy = { key: !0, ref: !0, __self: !0, __source: !0 };
function by(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ey.call(t, r) && !Cy.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: fs,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Hd.current,
  };
}
function ZS(e, t) {
  return {
    $$typeof: fs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Kd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fs;
}
function JS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wh = /\/+/g;
function ru(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? JS("" + e.key)
    : t.toString(36);
}
function sa(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fs:
          case BS:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ru(s, 0) : r),
      Uh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Wh, "$&/") + "/"),
          sa(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Kd(o) &&
            (o = ZS(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Wh, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Uh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ru(i, a);
      s += sa(i, t, n, l, o);
    }
  else if (((l = qS(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + ru(i, a++)), (s += sa(i, t, n, l, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function Ms(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    sa(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function eE(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  aa = { transition: null },
  tE = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: aa,
    ReactCurrentOwner: Hd,
  };
function Ty() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Ms,
  forEach: function (e, t, n) {
    Ms(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ms(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ms(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Kd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
X.Component = Yo;
X.Fragment = $S;
X.Profiler = WS;
X.PureComponent = Ud;
X.StrictMode = US;
X.Suspense = YS;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tE;
X.act = Ty;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = xy({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Hd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Ey.call(t, l) &&
        !Cy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: fs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: KS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: HS, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = by;
X.createFactory = function (e) {
  var t = by.bind(null, e);
  return ((t.type = e), t);
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: GS, render: e };
};
X.isValidElement = Kd;
X.lazy = function (e) {
  return { $$typeof: XS, _payload: { _status: -1, _result: e }, _init: eE };
};
X.memo = function (e, t) {
  return { $$typeof: QS, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = aa.transition;
  aa.transition = {};
  try {
    e();
  } finally {
    aa.transition = t;
  }
};
X.unstable_act = Ty;
X.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ge.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
X.useId = function () {
  return Ge.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ge.current.useRef(e);
};
X.useState = function (e) {
  return Ge.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ge.current.useTransition();
};
X.version = "18.3.1";
yy.exports = X;
var v = yy.exports;
const L = my(v),
  Gd = zS({ __proto__: null, default: L }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nE = v,
  rE = Symbol.for("react.element"),
  oE = Symbol.for("react.fragment"),
  iE = Object.prototype.hasOwnProperty,
  sE = nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  aE = { key: !0, ref: !0, __self: !0, __source: !0 };
function Py(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) iE.call(t, r) && !aE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: rE,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: sE.current,
  };
}
gl.Fragment = oE;
gl.jsx = Py;
gl.jsxs = Py;
gy.exports = gl;
var S = gy.exports,
  ky = { exports: {} },
  ut = {},
  Ry = { exports: {} },
  Ay = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, A) {
    var j = k.length;
    k.push(A);
    e: for (; 0 < j; ) {
      var U = (j - 1) >>> 1,
        B = k[U];
      if (0 < o(B, A)) ((k[U] = A), (k[j] = B), (j = U));
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var A = k[0],
      j = k.pop();
    if (j !== A) {
      k[0] = j;
      e: for (var U = 0, B = k.length, Q = B >>> 1; U < Q; ) {
        var q = 2 * (U + 1) - 1,
          we = k[q],
          De = q + 1,
          ee = k[De];
        if (0 > o(we, j))
          De < B && 0 > o(ee, we)
            ? ((k[U] = ee), (k[De] = j), (U = De))
            : ((k[U] = we), (k[q] = j), (U = q));
        else if (De < B && 0 > o(ee, j)) ((k[U] = ee), (k[De] = j), (U = De));
        else break e;
      }
    }
    return A;
  }
  function o(k, A) {
    var j = k.sortIndex - A.sortIndex;
    return j !== 0 ? j : k.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    x = !1,
    p = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= k)
        (r(u), (A.sortIndex = A.expirationTime), t(l, A));
      else break;
      A = n(u);
    }
  }
  function E(k) {
    if (((p = !1), y(k), !x))
      if (n(l) !== null) ((x = !0), $(C));
      else {
        var A = n(u);
        A !== null && V(E, A.startTime - k);
      }
  }
  function C(k, A) {
    ((x = !1), p && ((p = !1), m(P), (P = -1)), (h = !0));
    var j = f;
    try {
      for (
        y(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (k && !z()));
      ) {
        var U = d.callback;
        if (typeof U == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var B = U(d.expirationTime <= A);
          ((A = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            y(A));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Q = !0;
      else {
        var q = n(u);
        (q !== null && V(E, q.startTime - A), (Q = !1));
      }
      return Q;
    } finally {
      ((d = null), (f = j), (h = !1));
    }
  }
  var b = !1,
    T = null,
    P = -1,
    M = 5,
    N = -1;
  function z() {
    return !(e.unstable_now() - N < M);
  }
  function I() {
    if (T !== null) {
      var k = e.unstable_now();
      N = k;
      var A = !0;
      try {
        A = T(!0, k);
      } finally {
        A ? K() : ((b = !1), (T = null));
      }
    } else b = !1;
  }
  var K;
  if (typeof g == "function")
    K = function () {
      g(I);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      Y = O.port2;
    ((O.port1.onmessage = I),
      (K = function () {
        Y.postMessage(null);
      }));
  } else
    K = function () {
      w(I, 0);
    };
  function $(k) {
    ((T = k), b || ((b = !0), K()));
  }
  function V(k, A) {
    P = w(function () {
      k(e.unstable_now());
    }, A);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || h || ((x = !0), $(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var j = f;
      f = A;
      try {
        return k();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, A) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var j = f;
      f = k;
      try {
        return A();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (k, A, j) {
      var U = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? U + j : U))
          : (j = U),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = j + B),
        (k = {
          id: c++,
          callback: A,
          priorityLevel: k,
          startTime: j,
          expirationTime: B,
          sortIndex: -1,
        }),
        j > U
          ? ((k.sortIndex = j),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (p ? (m(P), (P = -1)) : (p = !0), V(E, j - U)))
          : ((k.sortIndex = B), t(l, k), x || h || ((x = !0), $(C))),
        k
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (k) {
      var A = f;
      return function () {
        var j = f;
        f = A;
        try {
          return k.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    }));
})(Ay);
Ry.exports = Ay;
var lE = Ry.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uE = v,
  lt = lE;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var My = new Set(),
  Fi = {};
function Br(e, t) {
  (Fo(e, t), Fo(e + "Capture", t));
}
function Fo(e, t) {
  for (Fi[e] = t, e = 0; e < t.length; e++) My.add(t[e]);
}
var hn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ac = Object.prototype.hasOwnProperty,
  cE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hh = {},
  Kh = {};
function dE(e) {
  return ac.call(Kh, e)
    ? !0
    : ac.call(Hh, e)
      ? !1
      : cE.test(e)
        ? (Kh[e] = !0)
        : ((Hh[e] = !0), !1);
}
function fE(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hE(e, t, n, r) {
  if (t === null || typeof t > "u" || fE(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, o, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yd = /[\-:]([a-z])/g;
function Qd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yd, Qd);
    Ne[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yd, Qd);
    Ne[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yd, Qd);
  Ne[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xd(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hE(t, n, o, r) && (n = null),
    r || o === null
      ? dE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ns = Symbol.for("react.element"),
  eo = Symbol.for("react.portal"),
  to = Symbol.for("react.fragment"),
  qd = Symbol.for("react.strict_mode"),
  lc = Symbol.for("react.profiler"),
  Ny = Symbol.for("react.provider"),
  Dy = Symbol.for("react.context"),
  Zd = Symbol.for("react.forward_ref"),
  uc = Symbol.for("react.suspense"),
  cc = Symbol.for("react.suspense_list"),
  Jd = Symbol.for("react.memo"),
  jn = Symbol.for("react.lazy"),
  Ly = Symbol.for("react.offscreen"),
  Gh = Symbol.iterator;
function si(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gh && e[Gh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  ou;
function vi(e) {
  if (ou === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ou = (t && t[1]) || "";
    }
  return (
    `
` +
    ou +
    e
  );
}
var iu = !1;
function su(e, t) {
  if (!e || iu) return "";
  iu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((iu = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? vi(e) : "";
}
function pE(e) {
  switch (e.tag) {
    case 5:
      return vi(e.type);
    case 16:
      return vi("Lazy");
    case 13:
      return vi("Suspense");
    case 19:
      return vi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = su(e.type, !1)), e);
    case 11:
      return ((e = su(e.type.render, !1)), e);
    case 1:
      return ((e = su(e.type, !0)), e);
    default:
      return "";
  }
}
function dc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case to:
      return "Fragment";
    case eo:
      return "Portal";
    case lc:
      return "Profiler";
    case qd:
      return "StrictMode";
    case uc:
      return "Suspense";
    case cc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dy:
        return (e.displayName || "Context") + ".Consumer";
      case Ny:
        return (e._context.displayName || "Context") + ".Provider";
      case Zd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jd:
        return (
          (t = e.displayName || null),
          t !== null ? t : dc(e.type) || "Memo"
        );
      case jn:
        ((t = e._payload), (e = e._init));
        try {
          return dc(e(t));
        } catch {}
    }
  return null;
}
function mE(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return dc(t);
    case 8:
      return t === qd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Oy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gE(e) {
  var t = Oy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ds(e) {
  e._valueTracker || (e._valueTracker = gE(e));
}
function jy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Oy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Aa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fc(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = nr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Iy(e, t) {
  ((t = t.checked), t != null && Xd(e, "checked", t, !1));
}
function hc(e, t) {
  Iy(e, t);
  var n = nr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? pc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && pc(e, t.type, nr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Qh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function pc(e, t, n) {
  (t !== "number" || Aa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xi = Array.isArray;
function vo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + nr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function mc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (xi(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: nr(n) };
}
function Fy(e, t) {
  var n = nr(t.value),
    r = nr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function qh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _y(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _y(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ls,
  Vy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ls = Ls || document.createElement("div"),
          Ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ls.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _i(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ci = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ci).forEach(function (e) {
  yE.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ci[t] = Ci[e]));
  });
});
function zy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ci.hasOwnProperty(e) && Ci[e])
      ? ("" + t).trim()
      : t + "px";
}
function By(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = zy(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var vE = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function yc(e, t) {
  if (t) {
    if (vE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function vc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xc = null;
function ef(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wc = null,
  xo = null,
  wo = null;
function Zh(e) {
  if ((e = ms(e))) {
    if (typeof wc != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), wc(e.stateNode, e.type, t));
  }
}
function $y(e) {
  xo ? (wo ? wo.push(e) : (wo = [e])) : (xo = e);
}
function Uy() {
  if (xo) {
    var e = xo,
      t = wo;
    if (((wo = xo = null), Zh(e), t)) for (e = 0; e < t.length; e++) Zh(t[e]);
  }
}
function Wy(e, t) {
  return e(t);
}
function Hy() {}
var au = !1;
function Ky(e, t, n) {
  if (au) return e(t, n);
  au = !0;
  try {
    return Wy(e, t, n);
  } finally {
    ((au = !1), (xo !== null || wo !== null) && (Hy(), Uy()));
  }
}
function Vi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Sc = !1;
if (hn)
  try {
    var ai = {};
    (Object.defineProperty(ai, "passive", {
      get: function () {
        Sc = !0;
      },
    }),
      window.addEventListener("test", ai, ai),
      window.removeEventListener("test", ai, ai));
  } catch {
    Sc = !1;
  }
function xE(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bi = !1,
  Ma = null,
  Na = !1,
  Ec = null,
  wE = {
    onError: function (e) {
      ((bi = !0), (Ma = e));
    },
  };
function SE(e, t, n, r, o, i, s, a, l) {
  ((bi = !1), (Ma = null), xE.apply(wE, arguments));
}
function EE(e, t, n, r, o, i, s, a, l) {
  if ((SE.apply(this, arguments), bi)) {
    if (bi) {
      var u = Ma;
      ((bi = !1), (Ma = null));
    } else throw Error(D(198));
    Na || ((Na = !0), (Ec = u));
  }
}
function $r(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Jh(e) {
  if ($r(e) !== e) throw Error(D(188));
}
function CE(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $r(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Jh(o), e);
        if (i === r) return (Jh(o), t);
        i = i.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          ((s = !0), (n = o), (r = i));
          break;
        }
        if (a === r) {
          ((s = !0), (r = o), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((s = !0), (n = i), (r = o));
            break;
          }
          if (a === r) {
            ((s = !0), (r = i), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Yy(e) {
  return ((e = CE(e)), e !== null ? Qy(e) : null);
}
function Qy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xy = lt.unstable_scheduleCallback,
  ep = lt.unstable_cancelCallback,
  bE = lt.unstable_shouldYield,
  TE = lt.unstable_requestPaint,
  ve = lt.unstable_now,
  PE = lt.unstable_getCurrentPriorityLevel,
  tf = lt.unstable_ImmediatePriority,
  qy = lt.unstable_UserBlockingPriority,
  Da = lt.unstable_NormalPriority,
  kE = lt.unstable_LowPriority,
  Zy = lt.unstable_IdlePriority,
  yl = null,
  Xt = null;
function RE(e) {
  if (Xt && typeof Xt.onCommitFiberRoot == "function")
    try {
      Xt.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : NE,
  AE = Math.log,
  ME = Math.LN2;
function NE(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((AE(e) / ME) | 0)) | 0);
}
var Os = 64,
  js = 4194304;
function wi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function La(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = wi(a)) : ((i &= s), i !== 0 && (r = wi(i)));
  } else ((s = n & ~o), s !== 0 ? (r = wi(s)) : i !== 0 && (r = wi(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - jt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function DE(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function LE(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - jt(i),
      a = 1 << s,
      l = o[s];
    (l === -1
      ? (!(a & n) || a & r) && (o[s] = DE(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Cc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jy() {
  var e = Os;
  return ((Os <<= 1), !(Os & 4194240) && (Os = 64), e);
}
function lu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hs(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jt(t)),
    (e[t] = n));
}
function OE(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - jt(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function nf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var te = 0;
function ev(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var tv,
  rf,
  nv,
  rv,
  ov,
  bc = !1,
  Is = [],
  Yn = null,
  Qn = null,
  Xn = null,
  zi = new Map(),
  Bi = new Map(),
  Fn = [],
  jE =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function tp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Xn = null;
      break;
    case "pointerover":
    case "pointerout":
      zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bi.delete(t.pointerId);
  }
}
function li(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ms(t)), t !== null && rf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function IE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Yn = li(Yn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Qn = li(Qn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Xn = li(Xn, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (zi.set(i, li(zi.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        Bi.set(i, li(Bi.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function iv(e) {
  var t = wr(e.target);
  if (t !== null) {
    var n = $r(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gy(n)), t !== null)) {
          ((e.blockedOn = t),
            ov(e.priority, function () {
              nv(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function la(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Tc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((xc = r), n.target.dispatchEvent(r), (xc = null));
    } else return ((t = ms(n)), t !== null && rf(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function np(e, t, n) {
  la(e) && n.delete(t);
}
function FE() {
  ((bc = !1),
    Yn !== null && la(Yn) && (Yn = null),
    Qn !== null && la(Qn) && (Qn = null),
    Xn !== null && la(Xn) && (Xn = null),
    zi.forEach(np),
    Bi.forEach(np));
}
function ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bc ||
      ((bc = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, FE)));
}
function $i(e) {
  function t(o) {
    return ui(o, e);
  }
  if (0 < Is.length) {
    ui(Is[0], e);
    for (var n = 1; n < Is.length; n++) {
      var r = Is[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yn !== null && ui(Yn, e),
      Qn !== null && ui(Qn, e),
      Xn !== null && ui(Xn, e),
      zi.forEach(t),
      Bi.forEach(t),
      n = 0;
    n < Fn.length;
    n++
  )
    ((r = Fn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
    (iv(n), n.blockedOn === null && Fn.shift());
}
var So = Sn.ReactCurrentBatchConfig,
  Oa = !0;
function _E(e, t, n, r) {
  var o = te,
    i = So.transition;
  So.transition = null;
  try {
    ((te = 1), of(e, t, n, r));
  } finally {
    ((te = o), (So.transition = i));
  }
}
function VE(e, t, n, r) {
  var o = te,
    i = So.transition;
  So.transition = null;
  try {
    ((te = 4), of(e, t, n, r));
  } finally {
    ((te = o), (So.transition = i));
  }
}
function of(e, t, n, r) {
  if (Oa) {
    var o = Tc(e, t, n, r);
    if (o === null) (vu(e, t, r, ja, n), tp(e, r));
    else if (IE(o, e, t, n, r)) r.stopPropagation();
    else if ((tp(e, r), t & 4 && -1 < jE.indexOf(e))) {
      for (; o !== null; ) {
        var i = ms(o);
        if (
          (i !== null && tv(i),
          (i = Tc(e, t, n, r)),
          i === null && vu(e, t, r, ja, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else vu(e, t, r, null, n);
  }
}
var ja = null;
function Tc(e, t, n, r) {
  if (((ja = null), (e = ef(r)), (e = wr(e)), e !== null))
    if (((t = $r(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ja = e), null);
}
function sv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (PE()) {
        case tf:
          return 1;
        case qy:
          return 4;
        case Da:
        case kE:
          return 16;
        case Zy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wn = null,
  sf = null,
  ua = null;
function av() {
  if (ua) return ua;
  var e,
    t = sf,
    n = t.length,
    r,
    o = "value" in Wn ? Wn.value : Wn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ua = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ca(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fs() {
  return !0;
}
function rp() {
  return !1;
}
function ct(e) {
  function t(n, r, o, i, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Fs
        : rp),
      (this.isPropagationStopped = rp),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fs));
      },
      persist: function () {},
      isPersistent: Fs,
    }),
    t
  );
}
var Qo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  af = ct(Qo),
  ps = me({}, Qo, { view: 0, detail: 0 }),
  zE = ct(ps),
  uu,
  cu,
  ci,
  vl = me({}, ps, {
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
    getModifierState: lf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ci &&
            (ci && e.type === "mousemove"
              ? ((uu = e.screenX - ci.screenX), (cu = e.screenY - ci.screenY))
              : (cu = uu = 0),
            (ci = e)),
          uu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cu;
    },
  }),
  op = ct(vl),
  BE = me({}, vl, { dataTransfer: 0 }),
  $E = ct(BE),
  UE = me({}, ps, { relatedTarget: 0 }),
  du = ct(UE),
  WE = me({}, Qo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  HE = ct(WE),
  KE = me({}, Qo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  GE = ct(KE),
  YE = me({}, Qo, { data: 0 }),
  ip = ct(YE),
  QE = {
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
    MozPrintableKey: "Unidentified",
  },
  XE = {
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
    224: "Meta",
  },
  qE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ZE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qE[e]) ? !!t[e] : !1;
}
function lf() {
  return ZE;
}
var JE = me({}, ps, {
    key: function (e) {
      if (e.key) {
        var t = QE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ca(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? XE[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lf,
    charCode: function (e) {
      return e.type === "keypress" ? ca(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ca(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  eC = ct(JE),
  tC = me({}, vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sp = ct(tC),
  nC = me({}, ps, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lf,
  }),
  rC = ct(nC),
  oC = me({}, Qo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iC = ct(oC),
  sC = me({}, vl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  aC = ct(sC),
  lC = [9, 13, 27, 32],
  uf = hn && "CompositionEvent" in window,
  Ti = null;
hn && "documentMode" in document && (Ti = document.documentMode);
var uC = hn && "TextEvent" in window && !Ti,
  lv = hn && (!uf || (Ti && 8 < Ti && 11 >= Ti)),
  ap = " ",
  lp = !1;
function uv(e, t) {
  switch (e) {
    case "keyup":
      return lC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function cv(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var no = !1;
function cC(e, t) {
  switch (e) {
    case "compositionend":
      return cv(t);
    case "keypress":
      return t.which !== 32 ? null : ((lp = !0), ap);
    case "textInput":
      return ((e = t.data), e === ap && lp ? null : e);
    default:
      return null;
  }
}
function dC(e, t) {
  if (no)
    return e === "compositionend" || (!uf && uv(e, t))
      ? ((e = av()), (ua = sf = Wn = null), (no = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return lv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function up(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fC[e.type] : t === "textarea";
}
function dv(e, t, n, r) {
  ($y(r),
    (t = Ia(t, "onChange")),
    0 < t.length &&
      ((n = new af("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Pi = null,
  Ui = null;
function hC(e) {
  Ev(e, 0);
}
function xl(e) {
  var t = io(e);
  if (jy(t)) return e;
}
function pC(e, t) {
  if (e === "change") return t;
}
var fv = !1;
if (hn) {
  var fu;
  if (hn) {
    var hu = "oninput" in document;
    if (!hu) {
      var cp = document.createElement("div");
      (cp.setAttribute("oninput", "return;"),
        (hu = typeof cp.oninput == "function"));
    }
    fu = hu;
  } else fu = !1;
  fv = fu && (!document.documentMode || 9 < document.documentMode);
}
function dp() {
  Pi && (Pi.detachEvent("onpropertychange", hv), (Ui = Pi = null));
}
function hv(e) {
  if (e.propertyName === "value" && xl(Ui)) {
    var t = [];
    (dv(t, Ui, e, ef(e)), Ky(hC, t));
  }
}
function mC(e, t, n) {
  e === "focusin"
    ? (dp(), (Pi = t), (Ui = n), Pi.attachEvent("onpropertychange", hv))
    : e === "focusout" && dp();
}
function gC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Ui);
}
function yC(e, t) {
  if (e === "click") return xl(t);
}
function vC(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function xC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : xC;
function Wi(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ac.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function fp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hp(e, t) {
  var n = fp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fp(n);
  }
}
function pv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? pv(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function mv() {
  for (var e = window, t = Aa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Aa(e.document);
  }
  return t;
}
function cf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function wC(e) {
  var t = mv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = hp(n, i)));
        var s = hp(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var SC = hn && "documentMode" in document && 11 >= document.documentMode,
  ro = null,
  Pc = null,
  ki = null,
  kc = !1;
function pp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kc ||
    ro == null ||
    ro !== Aa(r) ||
    ((r = ro),
    "selectionStart" in r && cf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ki && Wi(ki, r)) ||
      ((ki = r),
      (r = Ia(Pc, "onSelect")),
      0 < r.length &&
        ((t = new af("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ro))));
}
function _s(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var oo = {
    animationend: _s("Animation", "AnimationEnd"),
    animationiteration: _s("Animation", "AnimationIteration"),
    animationstart: _s("Animation", "AnimationStart"),
    transitionend: _s("Transition", "TransitionEnd"),
  },
  pu = {},
  gv = {};
hn &&
  ((gv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete oo.animationend.animation,
    delete oo.animationiteration.animation,
    delete oo.animationstart.animation),
  "TransitionEvent" in window || delete oo.transitionend.transition);
function wl(e) {
  if (pu[e]) return pu[e];
  if (!oo[e]) return e;
  var t = oo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gv) return (pu[e] = t[n]);
  return e;
}
var yv = wl("animationend"),
  vv = wl("animationiteration"),
  xv = wl("animationstart"),
  wv = wl("transitionend"),
  Sv = new Map(),
  mp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ur(e, t) {
  (Sv.set(e, t), Br(t, [e]));
}
for (var mu = 0; mu < mp.length; mu++) {
  var gu = mp[mu],
    EC = gu.toLowerCase(),
    CC = gu[0].toUpperCase() + gu.slice(1);
  ur(EC, "on" + CC);
}
ur(yv, "onAnimationEnd");
ur(vv, "onAnimationIteration");
ur(xv, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(wv, "onTransitionEnd");
Fo("onMouseEnter", ["mouseout", "mouseover"]);
Fo("onMouseLeave", ["mouseout", "mouseover"]);
Fo("onPointerEnter", ["pointerout", "pointerover"]);
Fo("onPointerLeave", ["pointerout", "pointerover"]);
Br(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Br(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Br(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Br(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Br(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  bC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));
function gp(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), EE(r, t, void 0, e), (e.currentTarget = null));
}
function Ev(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          (gp(o, a, u), (i = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          (gp(o, a, u), (i = l));
        }
    }
  }
  if (Na) throw ((e = Ec), (Na = !1), (Ec = null), e);
}
function se(e, t) {
  var n = t[Dc];
  n === void 0 && (n = t[Dc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cv(t, e, 2, !1), n.add(r));
}
function yu(e, t, n) {
  var r = 0;
  (t && (r |= 4), Cv(n, e, r, t));
}
var Vs = "_reactListening" + Math.random().toString(36).slice(2);
function Hi(e) {
  if (!e[Vs]) {
    ((e[Vs] = !0),
      My.forEach(function (n) {
        n !== "selectionchange" && (bC.has(n) || yu(n, !1, e), yu(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vs] || ((t[Vs] = !0), yu("selectionchange", !1, t));
  }
}
function Cv(e, t, n, r) {
  switch (sv(t)) {
    case 1:
      var o = _E;
      break;
    case 4:
      o = VE;
      break;
    default:
      o = of;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Sc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function vu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = wr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ky(function () {
    var u = i,
      c = ef(n),
      d = [];
    e: {
      var f = Sv.get(e);
      if (f !== void 0) {
        var h = af,
          x = e;
        switch (e) {
          case "keypress":
            if (ca(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = eC;
            break;
          case "focusin":
            ((x = "focus"), (h = du));
            break;
          case "focusout":
            ((x = "blur"), (h = du));
            break;
          case "beforeblur":
          case "afterblur":
            h = du;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = op;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = $E;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = rC;
            break;
          case yv:
          case vv:
          case xv:
            h = HE;
            break;
          case wv:
            h = iC;
            break;
          case "scroll":
            h = zE;
            break;
          case "wheel":
            h = aC;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = GE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = sp;
        }
        var p = (t & 4) !== 0,
          w = !p && e === "scroll",
          m = p ? (f !== null ? f + "Capture" : null) : f;
        p = [];
        for (var g = u, y; g !== null; ) {
          y = g;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              m !== null && ((E = Vi(g, m)), E != null && p.push(Ki(g, E, y)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < p.length &&
          ((f = new h(f, x, null, n, c)), d.push({ event: f, listeners: p }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== xc &&
            (x = n.relatedTarget || n.fromElement) &&
            (wr(x) || x[pn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((x = n.relatedTarget || n.toElement),
              (h = u),
              (x = x ? wr(x) : null),
              x !== null &&
                ((w = $r(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((h = null), (x = u)),
          h !== x)
        ) {
          if (
            ((p = op),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((p = sp),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (w = h == null ? f : io(h)),
            (y = x == null ? f : io(x)),
            (f = new p(E, g + "leave", h, n, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (E = null),
            wr(c) === u &&
              ((p = new p(m, g + "enter", x, n, c)),
              (p.target = y),
              (p.relatedTarget = w),
              (E = p)),
            (w = E),
            h && x)
          )
            t: {
              for (p = h, m = x, g = 0, y = p; y; y = Qr(y)) g++;
              for (y = 0, E = m; E; E = Qr(E)) y++;
              for (; 0 < g - y; ) ((p = Qr(p)), g--);
              for (; 0 < y - g; ) ((m = Qr(m)), y--);
              for (; g--; ) {
                if (p === m || (m !== null && p === m.alternate)) break t;
                ((p = Qr(p)), (m = Qr(m)));
              }
              p = null;
            }
          else p = null;
          (h !== null && yp(d, f, h, p, !1),
            x !== null && w !== null && yp(d, w, x, p, !0));
        }
      }
      e: {
        if (
          ((f = u ? io(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = pC;
        else if (up(f))
          if (fv) C = vC;
          else {
            C = gC;
            var b = mC;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = yC);
        if (C && (C = C(e, u))) {
          dv(d, C, n, c);
          break e;
        }
        (b && b(e, f, u),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            pc(f, "number", f.value));
      }
      switch (((b = u ? io(u) : window), e)) {
        case "focusin":
          (up(b) || b.contentEditable === "true") &&
            ((ro = b), (Pc = u), (ki = null));
          break;
        case "focusout":
          ki = Pc = ro = null;
          break;
        case "mousedown":
          kc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((kc = !1), pp(d, n, c));
          break;
        case "selectionchange":
          if (SC) break;
        case "keydown":
        case "keyup":
          pp(d, n, c);
      }
      var T;
      if (uf)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        no
          ? uv(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (lv &&
          n.locale !== "ko" &&
          (no || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && no && (T = av())
            : ((Wn = c),
              (sf = "value" in Wn ? Wn.value : Wn.textContent),
              (no = !0))),
        (b = Ia(u, P)),
        0 < b.length &&
          ((P = new ip(P, e, null, n, c)),
          d.push({ event: P, listeners: b }),
          T ? (P.data = T) : ((T = cv(n)), T !== null && (P.data = T)))),
        (T = uC ? cC(e, n) : dC(e, n)) &&
          ((u = Ia(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ip("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T))));
    }
    Ev(d, t);
  });
}
function Ki(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ia(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Vi(e, n)),
      i != null && r.unshift(Ki(e, i, o)),
      (i = Vi(e, t)),
      i != null && r.push(Ki(e, i, o))),
      (e = e.return));
  }
  return r;
}
function Qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Vi(n, i)), l != null && s.unshift(Ki(n, l, a)))
        : o || ((l = Vi(n, i)), l != null && s.push(Ki(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var TC = /\r\n?/g,
  PC = /\u0000|\uFFFD/g;
function vp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      TC,
      `
`,
    )
    .replace(PC, "");
}
function zs(e, t, n) {
  if (((t = vp(t)), vp(e) !== t && n)) throw Error(D(425));
}
function Fa() {}
var Rc = null,
  Ac = null;
function Mc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nc = typeof setTimeout == "function" ? setTimeout : void 0,
  kC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xp = typeof Promise == "function" ? Promise : void 0,
  RC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xp < "u"
        ? function (e) {
            return xp.resolve(null).then(e).catch(AC);
          }
        : Nc;
function AC(e) {
  setTimeout(function () {
    throw e;
  });
}
function xu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), $i(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  $i(t);
}
function qn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xo = Math.random().toString(36).slice(2),
  Yt = "__reactFiber$" + Xo,
  Gi = "__reactProps$" + Xo,
  pn = "__reactContainer$" + Xo,
  Dc = "__reactEvents$" + Xo,
  MC = "__reactListeners$" + Xo,
  NC = "__reactHandles$" + Xo;
function wr(e) {
  var t = e[Yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pn] || n[Yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wp(e); e !== null; ) {
          if ((n = e[Yt])) return n;
          e = wp(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ms(e) {
  return (
    (e = e[Yt] || e[pn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function io(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Sl(e) {
  return e[Gi] || null;
}
var Lc = [],
  so = -1;
function cr(e) {
  return { current: e };
}
function ae(e) {
  0 > so || ((e.current = Lc[so]), (Lc[so] = null), so--);
}
function re(e, t) {
  (so++, (Lc[so] = e.current), (e.current = t));
}
var rr = {},
  Ve = cr(rr),
  Je = cr(!1),
  Or = rr;
function _o(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function et(e) {
  return ((e = e.childContextTypes), e != null);
}
function _a() {
  (ae(Je), ae(Ve));
}
function Sp(e, t, n) {
  if (Ve.current !== rr) throw Error(D(168));
  (re(Ve, t), re(Je, n));
}
function bv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(D(108, mE(e) || "Unknown", o));
  return me({}, n, r);
}
function Va(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rr),
    (Or = Ve.current),
    re(Ve, e),
    re(Je, Je.current),
    !0
  );
}
function Ep(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  (n
    ? ((e = bv(e, t, Or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Je),
      ae(Ve),
      re(Ve, e))
    : ae(Je),
    re(Je, n));
}
var an = null,
  El = !1,
  wu = !1;
function Tv(e) {
  an === null ? (an = [e]) : an.push(e);
}
function DC(e) {
  ((El = !0), Tv(e));
}
function dr() {
  if (!wu && an !== null) {
    wu = !0;
    var e = 0,
      t = te;
    try {
      var n = an;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((an = null), (El = !1));
    } catch (o) {
      throw (an !== null && (an = an.slice(e + 1)), Xy(tf, dr), o);
    } finally {
      ((te = t), (wu = !1));
    }
  }
  return null;
}
var ao = [],
  lo = 0,
  za = null,
  Ba = 0,
  ht = [],
  pt = 0,
  jr = null,
  un = 1,
  cn = "";
function yr(e, t) {
  ((ao[lo++] = Ba), (ao[lo++] = za), (za = e), (Ba = t));
}
function Pv(e, t, n) {
  ((ht[pt++] = un), (ht[pt++] = cn), (ht[pt++] = jr), (jr = e));
  var r = un;
  e = cn;
  var o = 32 - jt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - jt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (un = (1 << (32 - jt(t) + o)) | (n << o) | r),
      (cn = i + e));
  } else ((un = (1 << i) | (n << o) | r), (cn = e));
}
function df(e) {
  e.return !== null && (yr(e, 1), Pv(e, 1, 0));
}
function ff(e) {
  for (; e === za; )
    ((za = ao[--lo]), (ao[lo] = null), (Ba = ao[--lo]), (ao[lo] = null));
  for (; e === jr; )
    ((jr = ht[--pt]),
      (ht[pt] = null),
      (cn = ht[--pt]),
      (ht[pt] = null),
      (un = ht[--pt]),
      (ht[pt] = null));
}
var st = null,
  it = null,
  ue = !1,
  Ot = null;
function kv(e, t) {
  var n = mt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Cp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (it = qn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jr !== null ? { id: un, overflow: cn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (st = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jc(e) {
  if (ue) {
    var t = it;
    if (t) {
      var n = t;
      if (!Cp(e, t)) {
        if (Oc(e)) throw Error(D(418));
        t = qn(n.nextSibling);
        var r = st;
        t && Cp(e, t)
          ? kv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (st = e));
      }
    } else {
      if (Oc(e)) throw Error(D(418));
      ((e.flags = (e.flags & -4097) | 2), (ue = !1), (st = e));
    }
  }
}
function bp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function Bs(e) {
  if (e !== st) return !1;
  if (!ue) return (bp(e), (ue = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Mc(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (Oc(e)) throw (Rv(), Error(D(418)));
    for (; t; ) (kv(e, t), (t = qn(t.nextSibling)));
  }
  if ((bp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = qn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = st ? qn(e.stateNode.nextSibling) : null;
  return !0;
}
function Rv() {
  for (var e = it; e; ) e = qn(e.nextSibling);
}
function Vo() {
  ((it = st = null), (ue = !1));
}
function hf(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
var LC = Sn.ReactCurrentBatchConfig;
function di(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function $s(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Tp(e) {
  var t = e._init;
  return t(e._payload);
}
function Av(e) {
  function t(m, g) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [g]), (m.flags |= 16)) : y.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) (t(m, g), (g = g.sibling));
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      (g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling));
    return m;
  }
  function o(m, g) {
    return ((m = tr(m, g)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, g, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((m.flags |= 2), g) : y)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function s(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, g, y, E) {
    return g === null || g.tag !== 6
      ? ((g = ku(y, m.mode, E)), (g.return = m), g)
      : ((g = o(g, y)), (g.return = m), g);
  }
  function l(m, g, y, E) {
    var C = y.type;
    return C === to
      ? c(m, g, y.props.children, E, y.key)
      : g !== null &&
          (g.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === jn &&
              Tp(C) === g.type))
        ? ((E = o(g, y.props)), (E.ref = di(m, g, y)), (E.return = m), E)
        : ((E = ya(y.type, y.key, y.props, null, m.mode, E)),
          (E.ref = di(m, g, y)),
          (E.return = m),
          E);
  }
  function u(m, g, y, E) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = Ru(y, m.mode, E)), (g.return = m), g)
      : ((g = o(g, y.children || [])), (g.return = m), g);
  }
  function c(m, g, y, E, C) {
    return g === null || g.tag !== 7
      ? ((g = Dr(y, m.mode, E, C)), (g.return = m), g)
      : ((g = o(g, y)), (g.return = m), g);
  }
  function d(m, g, y) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return ((g = ku("" + g, m.mode, y)), (g.return = m), g);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ns:
          return (
            (y = ya(g.type, g.key, g.props, null, m.mode, y)),
            (y.ref = di(m, null, g)),
            (y.return = m),
            y
          );
        case eo:
          return ((g = Ru(g, m.mode, y)), (g.return = m), g);
        case jn:
          var E = g._init;
          return d(m, E(g._payload), y);
      }
      if (xi(g) || si(g))
        return ((g = Dr(g, m.mode, y, null)), (g.return = m), g);
      $s(m, g);
    }
    return null;
  }
  function f(m, g, y, E) {
    var C = g !== null ? g.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(m, g, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ns:
          return y.key === C ? l(m, g, y, E) : null;
        case eo:
          return y.key === C ? u(m, g, y, E) : null;
        case jn:
          return ((C = y._init), f(m, g, C(y._payload), E));
      }
      if (xi(y) || si(y)) return C !== null ? null : c(m, g, y, E, null);
      $s(m, y);
    }
    return null;
  }
  function h(m, g, y, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return ((m = m.get(y) || null), a(g, m, "" + E, C));
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ns:
          return (
            (m = m.get(E.key === null ? y : E.key) || null),
            l(g, m, E, C)
          );
        case eo:
          return (
            (m = m.get(E.key === null ? y : E.key) || null),
            u(g, m, E, C)
          );
        case jn:
          var b = E._init;
          return h(m, g, y, b(E._payload), C);
      }
      if (xi(E) || si(E)) return ((m = m.get(y) || null), c(g, m, E, C, null));
      $s(g, E);
    }
    return null;
  }
  function x(m, g, y, E) {
    for (
      var C = null, b = null, T = g, P = (g = 0), M = null;
      T !== null && P < y.length;
      P++
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var N = f(m, T, y[P], E);
      if (N === null) {
        T === null && (T = M);
        break;
      }
      (e && T && N.alternate === null && t(m, T),
        (g = i(N, g, P)),
        b === null ? (C = N) : (b.sibling = N),
        (b = N),
        (T = M));
    }
    if (P === y.length) return (n(m, T), ue && yr(m, P), C);
    if (T === null) {
      for (; P < y.length; P++)
        ((T = d(m, y[P], E)),
          T !== null &&
            ((g = i(T, g, P)),
            b === null ? (C = T) : (b.sibling = T),
            (b = T)));
      return (ue && yr(m, P), C);
    }
    for (T = r(m, T); P < y.length; P++)
      ((M = h(T, m, P, y[P], E)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
          (g = i(M, g, P)),
          b === null ? (C = M) : (b.sibling = M),
          (b = M)));
    return (
      e &&
        T.forEach(function (z) {
          return t(m, z);
        }),
      ue && yr(m, P),
      C
    );
  }
  function p(m, g, y, E) {
    var C = si(y);
    if (typeof C != "function") throw Error(D(150));
    if (((y = C.call(y)), y == null)) throw Error(D(151));
    for (
      var b = (C = null), T = g, P = (g = 0), M = null, N = y.next();
      T !== null && !N.done;
      P++, N = y.next()
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var z = f(m, T, N.value, E);
      if (z === null) {
        T === null && (T = M);
        break;
      }
      (e && T && z.alternate === null && t(m, T),
        (g = i(z, g, P)),
        b === null ? (C = z) : (b.sibling = z),
        (b = z),
        (T = M));
    }
    if (N.done) return (n(m, T), ue && yr(m, P), C);
    if (T === null) {
      for (; !N.done; P++, N = y.next())
        ((N = d(m, N.value, E)),
          N !== null &&
            ((g = i(N, g, P)),
            b === null ? (C = N) : (b.sibling = N),
            (b = N)));
      return (ue && yr(m, P), C);
    }
    for (T = r(m, T); !N.done; P++, N = y.next())
      ((N = h(T, m, P, N.value, E)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? P : N.key),
          (g = i(N, g, P)),
          b === null ? (C = N) : (b.sibling = N),
          (b = N)));
    return (
      e &&
        T.forEach(function (I) {
          return t(m, I);
        }),
      ue && yr(m, P),
      C
    );
  }
  function w(m, g, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === to &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ns:
          e: {
            for (var C = y.key, b = g; b !== null; ) {
              if (b.key === C) {
                if (((C = y.type), C === to)) {
                  if (b.tag === 7) {
                    (n(m, b.sibling),
                      (g = o(b, y.props.children)),
                      (g.return = m),
                      (m = g));
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === jn &&
                    Tp(C) === b.type)
                ) {
                  (n(m, b.sibling),
                    (g = o(b, y.props)),
                    (g.ref = di(m, b, y)),
                    (g.return = m),
                    (m = g));
                  break e;
                }
                n(m, b);
                break;
              } else t(m, b);
              b = b.sibling;
            }
            y.type === to
              ? ((g = Dr(y.props.children, m.mode, E, y.key)),
                (g.return = m),
                (m = g))
              : ((E = ya(y.type, y.key, y.props, null, m.mode, E)),
                (E.ref = di(m, g, y)),
                (E.return = m),
                (m = E));
          }
          return s(m);
        case eo:
          e: {
            for (b = y.key; g !== null; ) {
              if (g.key === b)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  (n(m, g.sibling),
                    (g = o(g, y.children || [])),
                    (g.return = m),
                    (m = g));
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            ((g = Ru(y, m.mode, E)), (g.return = m), (m = g));
          }
          return s(m);
        case jn:
          return ((b = y._init), w(m, g, b(y._payload), E));
      }
      if (xi(y)) return x(m, g, y, E);
      if (si(y)) return p(m, g, y, E);
      $s(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = o(g, y)), (g.return = m), (m = g))
          : (n(m, g), (g = ku(y, m.mode, E)), (g.return = m), (m = g)),
        s(m))
      : n(m, g);
  }
  return w;
}
var zo = Av(!0),
  Mv = Av(!1),
  $a = cr(null),
  Ua = null,
  uo = null,
  pf = null;
function mf() {
  pf = uo = Ua = null;
}
function gf(e) {
  var t = $a.current;
  (ae($a), (e._currentValue = t));
}
function Ic(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Eo(e, t) {
  ((Ua = e),
    (pf = uo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null)));
}
function wt(e) {
  var t = e._currentValue;
  if (pf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), uo === null)) {
      if (Ua === null) throw Error(D(308));
      ((uo = e), (Ua.dependencies = { lanes: 0, firstContext: e }));
    } else uo = uo.next = e;
  return t;
}
var Sr = null;
function yf(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
function Nv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), yf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    mn(e, r)
  );
}
function mn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function vf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dv(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function dn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      mn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), yf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    mn(e, n)
  );
}
function da(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), nf(e, n));
  }
}
function Pp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Wa(e, t, n, r) {
  var o = e.updateQueue;
  In = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (i = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    ((s = 0), (c = u = l = null), (a = i));
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            p = a;
          switch (((f = t), (h = n), p.tag)) {
            case 1:
              if (((x = p.payload), typeof x == "function")) {
                d = x.call(h, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = p.payload),
                (f = typeof x == "function" ? x.call(h, d, f) : x),
                f == null)
              )
                break e;
              d = me({}, d, f);
              break e;
            case 2:
              In = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f));
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((Fr |= s), (e.lanes = s), (e.memoizedState = d));
  }
}
function kp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(D(191, o));
        o.call(r);
      }
    }
}
var gs = {},
  qt = cr(gs),
  Yi = cr(gs),
  Qi = cr(gs);
function Er(e) {
  if (e === gs) throw Error(D(174));
  return e;
}
function xf(e, t) {
  switch ((re(Qi, t), re(Yi, e), re(qt, gs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gc(t, e)));
  }
  (ae(qt), re(qt, t));
}
function Bo() {
  (ae(qt), ae(Yi), ae(Qi));
}
function Lv(e) {
  Er(Qi.current);
  var t = Er(qt.current),
    n = gc(t, e.type);
  t !== n && (re(Yi, e), re(qt, n));
}
function wf(e) {
  Yi.current === e && (ae(qt), ae(Yi));
}
var fe = cr(0);
function Ha(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Su = [];
function Sf() {
  for (var e = 0; e < Su.length; e++)
    Su[e]._workInProgressVersionPrimary = null;
  Su.length = 0;
}
var fa = Sn.ReactCurrentDispatcher,
  Eu = Sn.ReactCurrentBatchConfig,
  Ir = 0,
  pe = null,
  be = null,
  Pe = null,
  Ka = !1,
  Ri = !1,
  Xi = 0,
  OC = 0;
function Oe() {
  throw Error(D(321));
}
function Ef(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Cf(e, t, n, r, o, i) {
  if (
    ((Ir = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fa.current = e === null || e.memoizedState === null ? _C : VC),
    (e = n(r, o)),
    Ri)
  ) {
    i = 0;
    do {
      if (((Ri = !1), (Xi = 0), 25 <= i)) throw Error(D(301));
      ((i += 1),
        (Pe = be = null),
        (t.updateQueue = null),
        (fa.current = zC),
        (e = n(r, o)));
    } while (Ri);
  }
  if (
    ((fa.current = Ga),
    (t = be !== null && be.next !== null),
    (Ir = 0),
    (Pe = be = pe = null),
    (Ka = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function bf() {
  var e = Xi !== 0;
  return ((Xi = 0), e);
}
function Ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Pe === null ? (pe.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe);
}
function St() {
  if (be === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Pe === null ? pe.memoizedState : Pe.next;
  if (t !== null) ((Pe = t), (be = e));
  else {
    if (e === null) throw Error(D(310));
    ((be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Pe === null ? (pe.memoizedState = Pe = e) : (Pe = Pe.next = e));
  }
  return Pe;
}
function qi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cu(e) {
  var t = St(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = be,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = i.next), (i.next = s));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ir & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (pe.lanes |= c),
          (Fr |= c));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (s = r) : (l.next = a),
      _t(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (pe.lanes |= i), (Fr |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bu(e) {
  var t = St(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== o);
    (_t(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Ov() {}
function jv(e, t) {
  var n = pe,
    r = St(),
    o = t(),
    i = !_t(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ze = !0)),
    (r = r.queue),
    Tf(_v.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zi(9, Fv.bind(null, n, r, o, t), void 0, null),
      ke === null)
    )
      throw Error(D(349));
    Ir & 30 || Iv(n, t, o);
  }
  return o;
}
function Iv(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Fv(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Vv(t) && zv(e));
}
function _v(e, t, n) {
  return n(function () {
    Vv(t) && zv(e);
  });
}
function Vv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function zv(e) {
  var t = mn(e, 1);
  t !== null && It(t, e, 1, -1);
}
function Rp(e) {
  var t = Ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = FC.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Zi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bv() {
  return St().memoizedState;
}
function ha(e, t, n, r) {
  var o = Ut();
  ((pe.flags |= e),
    (o.memoizedState = Zi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Cl(e, t, n, r) {
  var o = St();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (be !== null) {
    var s = be.memoizedState;
    if (((i = s.destroy), r !== null && Ef(r, s.deps))) {
      o.memoizedState = Zi(t, n, i, r);
      return;
    }
  }
  ((pe.flags |= e), (o.memoizedState = Zi(1 | t, n, i, r)));
}
function Ap(e, t) {
  return ha(8390656, 8, e, t);
}
function Tf(e, t) {
  return Cl(2048, 8, e, t);
}
function $v(e, t) {
  return Cl(4, 2, e, t);
}
function Uv(e, t) {
  return Cl(4, 4, e, t);
}
function Wv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Cl(4, 4, Wv.bind(null, t, e), n)
  );
}
function Pf() {}
function Kv(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ef(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Gv(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ef(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yv(e, t, n) {
  return Ir & 21
    ? (_t(n, t) || ((n = Jy()), (pe.lanes |= n), (Fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function jC(e, t) {
  var n = te;
  ((te = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Eu.transition;
  Eu.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((te = n), (Eu.transition = r));
  }
}
function Qv() {
  return St().memoizedState;
}
function IC(e, t, n) {
  var r = er(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xv(e))
  )
    qv(t, n);
  else if (((n = Nv(e, t, n, r)), n !== null)) {
    var o = He();
    (It(n, e, r, o), Zv(n, t, r));
  }
}
function FC(e, t, n) {
  var r = er(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xv(e)) qv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), _t(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((o.next = o), yf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Nv(e, t, o, r)),
      n !== null && ((o = He()), It(n, e, r, o), Zv(n, t, r)));
  }
}
function Xv(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function qv(e, t) {
  Ri = Ka = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Zv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), nf(e, n));
  }
}
var Ga = {
    readContext: wt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  _C = {
    readContext: wt,
    useCallback: function (e, t) {
      return ((Ut().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: wt,
    useEffect: Ap,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ha(4194308, 4, Wv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ha(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ha(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ut();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = IC.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ut();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Rp,
    useDebugValue: Pf,
    useDeferredValue: function (e) {
      return (Ut().memoizedState = e);
    },
    useTransition: function () {
      var e = Rp(!1),
        t = e[0];
      return ((e = jC.bind(null, e[1])), (Ut().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = Ut();
      if (ue) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(D(349));
        Ir & 30 || Iv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ap(_v.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zi(9, Fv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ut(),
        t = ke.identifierPrefix;
      if (ue) {
        var n = cn,
          r = un;
        ((n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = OC++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  VC = {
    readContext: wt,
    useCallback: Kv,
    useContext: wt,
    useEffect: Tf,
    useImperativeHandle: Hv,
    useInsertionEffect: $v,
    useLayoutEffect: Uv,
    useMemo: Gv,
    useReducer: Cu,
    useRef: Bv,
    useState: function () {
      return Cu(qi);
    },
    useDebugValue: Pf,
    useDeferredValue: function (e) {
      var t = St();
      return Yv(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Cu(qi)[0],
        t = St().memoizedState;
      return [e, t];
    },
    useMutableSource: Ov,
    useSyncExternalStore: jv,
    useId: Qv,
    unstable_isNewReconciler: !1,
  },
  zC = {
    readContext: wt,
    useCallback: Kv,
    useContext: wt,
    useEffect: Tf,
    useImperativeHandle: Hv,
    useInsertionEffect: $v,
    useLayoutEffect: Uv,
    useMemo: Gv,
    useReducer: bu,
    useRef: Bv,
    useState: function () {
      return bu(qi);
    },
    useDebugValue: Pf,
    useDeferredValue: function (e) {
      var t = St();
      return be === null ? (t.memoizedState = e) : Yv(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = bu(qi)[0],
        t = St().memoizedState;
      return [e, t];
    },
    useMutableSource: Ov,
    useSyncExternalStore: jv,
    useId: Qv,
    unstable_isNewReconciler: !1,
  };
function At(e, t) {
  if (e && e.defaultProps) {
    ((t = me({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var bl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $r(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = er(e),
      i = dn(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Zn(e, i, o)),
      t !== null && (It(t, e, o, r), da(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = er(e),
      i = dn(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Zn(e, i, o)),
      t !== null && (It(t, e, o, r), da(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = er(e),
      o = dn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Zn(e, o, r)),
      t !== null && (It(t, e, r, n), da(t, e, r)));
  },
};
function Mp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Wi(n, r) || !Wi(o, i)
        : !0
  );
}
function Jv(e, t, n) {
  var r = !1,
    o = rr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = wt(i))
      : ((o = et(t) ? Or : Ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? _o(e, o) : rr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Np(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bl.enqueueReplaceState(t, t.state, null));
}
function _c(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), vf(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = wt(i))
    : ((i = et(t) ? Or : Ve.current), (o.context = _o(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Fc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && bl.enqueueReplaceState(o, o.state, null),
      Wa(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function $o(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += pE(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Tu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var BC = typeof WeakMap == "function" ? WeakMap : Map;
function e0(e, t, n) {
  ((n = dn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Qa || ((Qa = !0), (Qc = r)), Vc(e, t));
    }),
    n
  );
}
function t0(e, t, n) {
  ((n = dn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Vc(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Vc(e, t),
          typeof r != "function" &&
            (Jn === null ? (Jn = new Set([this])) : Jn.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Dp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new BC();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = tb.bind(null, e, t, n)), t.then(e, e));
}
function Lp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Op(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dn(-1, 1)), (t.tag = 2), Zn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var $C = Sn.ReactCurrentOwner,
  Ze = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Mv(t, null, n, r) : zo(t, e.child, n, r);
}
function jp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Eo(t, o),
    (r = Cf(e, t, n, r, i, o)),
    (n = bf()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        gn(e, t, o))
      : (ue && n && df(t), (t.flags |= 1), Be(e, t, r, o), t.child)
  );
}
function Ip(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Of(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), n0(e, t, i, r, o))
      : ((e = ya(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wi), n(s, r) && e.ref === t.ref)
    )
      return gn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = tr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function n0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Wi(i, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return ((t.lanes = e.lanes), gn(e, t, o));
  }
  return zc(e, t, n, r, o);
}
function r0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(fo, rt),
        (rt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(fo, rt),
          (rt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        re(fo, rt),
        (rt |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(fo, rt),
      (rt |= r));
  return (Be(e, t, o, n), t.child);
}
function o0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zc(e, t, n, r, o) {
  var i = et(n) ? Or : Ve.current;
  return (
    (i = _o(t, i)),
    Eo(t, o),
    (n = Cf(e, t, n, r, i, o)),
    (r = bf()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        gn(e, t, o))
      : (ue && r && df(t), (t.flags |= 1), Be(e, t, n, o), t.child)
  );
}
function Fp(e, t, n, r, o) {
  if (et(n)) {
    var i = !0;
    Va(t);
  } else i = !1;
  if ((Eo(t, o), t.stateNode === null))
    (pa(e, t), Jv(t, n, r), _c(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wt(u))
      : ((u = et(n) ? Or : Ve.current), (u = _o(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Np(t, s, r, u)),
      (In = !1));
    var f = t.memoizedState;
    ((s.state = f),
      Wa(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Je.current || In
        ? (typeof c == "function" && (Fc(t, n, c, r), (l = t.memoizedState)),
          (a = In || Mp(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Dv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : At(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = wt(l))
        : ((l = et(n) ? Or : Ve.current), (l = _o(t, l))));
    var h = n.getDerivedStateFromProps;
    ((c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Np(t, s, r, l)),
      (In = !1),
      (f = t.memoizedState),
      (s.state = f),
      Wa(t, r, s, o));
    var x = t.memoizedState;
    a !== d || f !== x || Je.current || In
      ? (typeof h == "function" && (Fc(t, n, h, r), (x = t.memoizedState)),
        (u = In || Mp(t, n, u, r, f, x, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bc(e, t, n, r, i, o);
}
function Bc(e, t, n, r, o, i) {
  o0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && Ep(t, n, !1), gn(e, t, i));
  ((r = t.stateNode), ($C.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = zo(t, e.child, null, i)), (t.child = zo(t, null, a, i)))
      : Be(e, t, a, i),
    (t.memoizedState = r.state),
    o && Ep(t, n, !0),
    t.child
  );
}
function i0(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Sp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sp(e, t.context, !1),
    xf(e, t.containerInfo));
}
function _p(e, t, n, r, o) {
  return (Vo(), hf(o), (t.flags |= 256), Be(e, t, n, r), t.child);
}
var $c = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function s0(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    re(fe, o & 1),
    e === null)
  )
    return (
      jc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = kl(s, r, 0, null)),
              (e = Dr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Uc(n)),
              (t.memoizedState = $c),
              e)
            : kf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return UC(e, t, s, r, a, o, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = tr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = tr(a, i)) : ((i = Dr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Uc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $c),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = tr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function kf(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Us(e, t, n, r) {
  return (
    r !== null && hf(r),
    zo(t, e.child, null, n),
    (e = kf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function UC(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Tu(Error(D(422)))), Us(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = kl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Dr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && zo(t, e.child, null, s),
          (t.child.memoizedState = Uc(s)),
          (t.memoizedState = $c),
          i);
  if (!(t.mode & 1)) return Us(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(D(419))),
      (r = Tu(i, r, void 0)),
      Us(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), Ze || a)) {
    if (((r = ke), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), mn(e, o), It(r, e, o, -1)));
    }
    return (Lf(), (r = Tu(Error(D(421)))), Us(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (it = qn(o.nextSibling)),
      (st = t),
      (ue = !0),
      (Ot = null),
      e !== null &&
        ((ht[pt++] = un),
        (ht[pt++] = cn),
        (ht[pt++] = jr),
        (un = e.id),
        (cn = e.overflow),
        (jr = t)),
      (t = kf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ic(e.return, t, n));
}
function Pu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function a0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Be(e, t, r.children, n), (r = fe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vp(e, n, t);
        else if (e.tag === 19) Vp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((re(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ha(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Pu(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ha(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Pu(t, !0, n, null, i);
        break;
      case "together":
        Pu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = tr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function WC(e, t, n) {
  switch (t.tag) {
    case 3:
      (i0(t), Vo());
      break;
    case 5:
      Lv(t);
      break;
    case 1:
      et(t.type) && Va(t);
      break;
    case 4:
      xf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (re($a, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? s0(e, t, n)
            : (re(fe, fe.current & 1),
              (e = gn(e, t, n)),
              e !== null ? e.sibling : null);
      re(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return a0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        re(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), r0(e, t, n));
  }
  return gn(e, t, n);
}
var l0, Wc, u0, c0;
l0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Wc = function () {};
u0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Er(qt.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = fc(e, o)), (r = fc(e, r)), (i = []));
        break;
      case "select":
        ((o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = mc(e, o)), (r = mc(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fa);
    }
    yc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Fi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && se("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
c0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fi(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function HC(e, t, n) {
  var r = t.pendingProps;
  switch ((ff(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (je(t), null);
    case 1:
      return (et(t.type) && _a(), je(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Bo(),
        ae(Je),
        ae(Ve),
        Sf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Bs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (Zc(Ot), (Ot = null)))),
        Wc(e, t),
        je(t),
        null
      );
    case 5:
      wf(t);
      var o = Er(Qi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (u0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return (je(t), null);
        }
        if (((e = Er(qt.current)), Bs(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Yt] = t), (r[Gi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (se("cancel", r), se("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Si.length; o++) se(Si[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (se("error", r), se("load", r));
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              (Yh(r, i), se("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                se("invalid", r));
              break;
            case "textarea":
              (Xh(r, i), se("invalid", r));
          }
          (yc(n, i), (o = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      zs(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      zs(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Fi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              (Ds(r), Qh(r, i, !0));
              break;
            case "textarea":
              (Ds(r), qh(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Fa);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _y(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Yt] = t),
            (e[Gi] = r),
            l0(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = vc(n, r)), n)) {
              case "dialog":
                (se("cancel", e), se("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (se("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Si.length; o++) se(Si[o], e);
                o = r;
                break;
              case "source":
                (se("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (se("error", e), se("load", e), (o = r));
                break;
              case "details":
                (se("toggle", e), (o = r));
                break;
              case "input":
                (Yh(e, r), (o = fc(e, r)), se("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  se("invalid", e));
                break;
              case "textarea":
                (Xh(e, r), (o = mc(e, r)), se("invalid", e));
                break;
              default:
                o = r;
            }
            (yc(n, o), (a = o));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? By(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Vy(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && _i(e, l)
                        : typeof l == "number" && _i(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Fi.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && se("scroll", e)
                          : l != null && Xd(e, i, l, s));
              }
            switch (n) {
              case "input":
                (Ds(e), Qh(e, r, !1));
                break;
              case "textarea":
                (Ds(e), qh(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? vo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      vo(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Fa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (je(t), null);
    case 6:
      if (e && t.stateNode != null) c0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = Er(Qi.current)), Er(qt.current), Bs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Yt] = t),
            (i = r.nodeValue !== n) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                zs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Yt] = t),
            (t.stateNode = r));
      }
      return (je(t), null);
    case 13:
      if (
        (ae(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && it !== null && t.mode & 1 && !(t.flags & 128))
          (Rv(), Vo(), (t.flags |= 98560), (i = !1));
        else if (((i = Bs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(D(317));
            i[Yt] = t;
          } else
            (Vo(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (je(t), (i = !1));
        } else (Ot !== null && (Zc(Ot), (Ot = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Te === 0 && (Te = 3) : Lf())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Bo(),
        Wc(e, t),
        e === null && Hi(t.stateNode.containerInfo),
        je(t),
        null
      );
    case 10:
      return (gf(t.type._context), je(t), null);
    case 17:
      return (et(t.type) && _a(), je(t), null);
    case 19:
      if ((ae(fe), (i = t.memoizedState), i === null)) return (je(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) fi(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ha(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    fi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (re(fe, (fe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > Uo &&
            ((t.flags |= 128), (r = !0), fi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ha(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
            )
              return (je(t), null);
          } else
            2 * ve() - i.renderingStartTime > Uo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          re(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Df(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function KC(e, t) {
  switch ((ff(t), t.tag)) {
    case 1:
      return (
        et(t.type) && _a(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bo(),
        ae(Je),
        ae(Ve),
        Sf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (wf(t), null);
    case 13:
      if (
        (ae(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Vo();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ae(fe), null);
    case 4:
      return (Bo(), null);
    case 10:
      return (gf(t.type._context), null);
    case 22:
    case 23:
      return (Df(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ws = !1,
  Fe = !1,
  GC = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function co(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function Hc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var zp = !1;
function YC(e, t) {
  if (((Rc = Oa), (e = mv()), cf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;
            )
              ((f = d), (d = h));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ac = { focusedElem: e, selectionRange: n }, Oa = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (F = e));
    else
      for (; F !== null; ) {
        t = F;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var p = x.memoizedProps,
                    w = x.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? p : At(t.type, p),
                      w,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (E) {
          ye(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (F = e));
          break;
        }
        F = t.return;
      }
  return ((x = zp), (zp = !1), x);
}
function Ai(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && Hc(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Kc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function d0(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), d0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Yt], delete t[Gi], delete t[Dc], delete t[MC], delete t[NC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function f0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || f0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fa)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gc(e, t, n), e = e.sibling; e !== null; )
      (Gc(e, t, n), (e = e.sibling));
}
function Yc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yc(e, t, n), e = e.sibling; e !== null; )
      (Yc(e, t, n), (e = e.sibling));
}
var Re = null,
  Lt = !1;
function Rn(e, t, n) {
  for (n = n.child; n !== null; ) (h0(e, t, n), (n = n.sibling));
}
function h0(e, t, n) {
  if (Xt && typeof Xt.onCommitFiberUnmount == "function")
    try {
      Xt.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || co(n, t);
    case 6:
      var r = Re,
        o = Lt;
      ((Re = null),
        Rn(e, t, n),
        (Re = r),
        (Lt = o),
        Re !== null &&
          (Lt
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode)));
      break;
    case 18:
      Re !== null &&
        (Lt
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? xu(e.parentNode, n)
              : e.nodeType === 1 && xu(e, n),
            $i(e))
          : xu(Re, n.stateNode));
      break;
    case 4:
      ((r = Re),
        (o = Lt),
        (Re = n.stateNode.containerInfo),
        (Lt = !0),
        Rn(e, t, n),
        (Re = r),
        (Lt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Hc(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      Rn(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (co(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ye(n, t, a);
        }
      Rn(e, t, n);
      break;
    case 21:
      Rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Rn(e, t, n), (Fe = r))
        : Rn(e, t, n);
      break;
    default:
      Rn(e, t, n);
  }
}
function $p(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new GC()),
      t.forEach(function (r) {
        var o = rb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Re = a.stateNode), (Lt = !1));
              break e;
            case 3:
              ((Re = a.stateNode.containerInfo), (Lt = !0));
              break e;
            case 4:
              ((Re = a.stateNode.containerInfo), (Lt = !0));
              break e;
          }
          a = a.return;
        }
        if (Re === null) throw Error(D(160));
        (h0(i, s, o), (Re = null), (Lt = !1));
        var l = o.alternate;
        (l !== null && (l.return = null), (o.return = null));
      } catch (u) {
        ye(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (p0(t, e), (t = t.sibling));
}
function p0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), $t(e), r & 4)) {
        try {
          (Ai(3, e, e.return), Tl(3, e));
        } catch (p) {
          ye(e, e.return, p);
        }
        try {
          Ai(5, e, e.return);
        } catch (p) {
          ye(e, e.return, p);
        }
      }
      break;
    case 1:
      (Tt(t, e), $t(e), r & 512 && n !== null && co(n, n.return));
      break;
    case 5:
      if (
        (Tt(t, e),
        $t(e),
        r & 512 && n !== null && co(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          _i(o, "");
        } catch (p) {
          ye(e, e.return, p);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && Iy(o, i),
              vc(a, s));
            var u = vc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? By(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? Vy(o, d)
                  : c === "children"
                    ? _i(o, d)
                    : Xd(o, c, d, u);
            }
            switch (a) {
              case "input":
                hc(o, i);
                break;
              case "textarea":
                Fy(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? vo(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? vo(o, !!i.multiple, i.defaultValue, !0)
                      : vo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Gi] = i;
          } catch (p) {
            ye(e, e.return, p);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), $t(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (p) {
          ye(e, e.return, p);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $i(t.containerInfo);
        } catch (p) {
          ye(e, e.return, p);
        }
      break;
    case 4:
      (Tt(t, e), $t(e));
      break;
    case 13:
      (Tt(t, e),
        $t(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Mf = ve())),
        r & 4 && $p(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (u = Fe) || c), Tt(t, e), (Fe = u)) : Tt(t, e),
        $t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ai(4, f, f.return);
                  break;
                case 1:
                  co(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (p) {
                      ye(r, n, p);
                    }
                  }
                  break;
                case 5:
                  co(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Wp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (F = h)) : Wp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = zy("display", s))));
              } catch (p) {
                ye(e, e.return, p);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (p) {
                ye(e, e.return, p);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Tt(t, e), $t(e), r & 4 && $p(e));
      break;
    case 21:
      break;
    default:
      (Tt(t, e), $t(e));
  }
}
function $t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (f0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_i(o, ""), (r.flags &= -33));
          var i = Bp(e);
          Yc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Bp(e);
          Gc(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function QC(e, t, n) {
  ((F = e), m0(e));
}
function m0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ws;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Fe;
        a = Ws;
        var u = Fe;
        if (((Ws = s), (Fe = l) && !u))
          for (F = o; F !== null; )
            ((s = F),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Hp(o)
                : l !== null
                  ? ((l.return = s), (F = l))
                  : Hp(o));
        for (; i !== null; ) ((F = i), m0(i), (i = i.sibling));
        ((F = o), (Ws = a), (Fe = u));
      }
      Up(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Up(e);
  }
}
function Up(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : At(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && kp(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                kp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && $i(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        Fe || (t.flags & 512 && Kc(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function Wp(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function Hp(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, o, l);
            }
          }
          var i = t.return;
          try {
            Kc(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Kc(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (F = a));
      break;
    }
    F = t.return;
  }
}
var XC = Math.ceil,
  Ya = Sn.ReactCurrentDispatcher,
  Rf = Sn.ReactCurrentOwner,
  yt = Sn.ReactCurrentBatchConfig,
  Z = 0,
  ke = null,
  Ee = null,
  Me = 0,
  rt = 0,
  fo = cr(0),
  Te = 0,
  Ji = null,
  Fr = 0,
  Pl = 0,
  Af = 0,
  Mi = null,
  qe = null,
  Mf = 0,
  Uo = 1 / 0,
  sn = null,
  Qa = !1,
  Qc = null,
  Jn = null,
  Hs = !1,
  Hn = null,
  Xa = 0,
  Ni = 0,
  Xc = null,
  ma = -1,
  ga = 0;
function He() {
  return Z & 6 ? ve() : ma !== -1 ? ma : (ma = ve());
}
function er(e) {
  return e.mode & 1
    ? Z & 2 && Me !== 0
      ? Me & -Me
      : LC.transition !== null
        ? (ga === 0 && (ga = Jy()), ga)
        : ((e = te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sv(e.type))),
          e)
    : 1;
}
function It(e, t, n, r) {
  if (50 < Ni) throw ((Ni = 0), (Xc = null), Error(D(185)));
  (hs(e, n, r),
    (!(Z & 2) || e !== ke) &&
      (e === ke && (!(Z & 2) && (Pl |= n), Te === 4 && _n(e, Me)),
      tt(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Uo = ve() + 500), El && dr())));
}
function tt(e, t) {
  var n = e.callbackNode;
  LE(e, t);
  var r = La(e, e === ke ? Me : 0);
  if (r === 0)
    (n !== null && ep(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ep(n), t === 1))
      (e.tag === 0 ? DC(Kp.bind(null, e)) : Tv(Kp.bind(null, e)),
        RC(function () {
          !(Z & 6) && dr();
        }),
        (n = null));
    else {
      switch (ev(r)) {
        case 1:
          n = tf;
          break;
        case 4:
          n = qy;
          break;
        case 16:
          n = Da;
          break;
        case 536870912:
          n = Zy;
          break;
        default:
          n = Da;
      }
      n = C0(n, g0.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function g0(e, t) {
  if (((ma = -1), (ga = 0), Z & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (Co() && e.callbackNode !== n) return null;
  var r = La(e, e === ke ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qa(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = v0();
    (ke !== e || Me !== t) && ((sn = null), (Uo = ve() + 500), Nr(e, t));
    do
      try {
        JC();
        break;
      } catch (a) {
        y0(e, a);
      }
    while (!0);
    (mf(),
      (Ya.current = i),
      (Z = o),
      Ee !== null ? (t = 0) : ((ke = null), (Me = 0), (t = Te)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Cc(e)), o !== 0 && ((r = o), (t = qc(e, o)))), t === 1)
    )
      throw ((n = Ji), Nr(e, 0), _n(e, r), tt(e, ve()), n);
    if (t === 6) _n(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !qC(o) &&
          ((t = qa(e, r)),
          t === 2 && ((i = Cc(e)), i !== 0 && ((r = i), (t = qc(e, i)))),
          t === 1))
      )
        throw ((n = Ji), Nr(e, 0), _n(e, r), tt(e, ve()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          vr(e, qe, sn);
          break;
        case 3:
          if (
            (_n(e, r), (r & 130023424) === r && ((t = Mf + 500 - ve()), 10 < t))
          ) {
            if (La(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (He(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Nc(vr.bind(null, e, qe, sn), t);
            break;
          }
          vr(e, qe, sn);
          break;
        case 4:
          if ((_n(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - jt(r);
            ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
          }
          if (
            ((r = o),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * XC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Nc(vr.bind(null, e, qe, sn), r);
            break;
          }
          vr(e, qe, sn);
          break;
        case 5:
          vr(e, qe, sn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return (tt(e, ve()), e.callbackNode === n ? g0.bind(null, e) : null);
}
function qc(e, t) {
  var n = Mi;
  return (
    e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256),
    (e = qa(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Zc(t)),
    e
  );
}
function Zc(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function qC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function _n(e, t) {
  for (
    t &= ~Af,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - jt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Kp(e) {
  if (Z & 6) throw Error(D(327));
  Co();
  var t = La(e, 0);
  if (!(t & 1)) return (tt(e, ve()), null);
  var n = qa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cc(e);
    r !== 0 && ((t = r), (n = qc(e, r)));
  }
  if (n === 1) throw ((n = Ji), Nr(e, 0), _n(e, t), tt(e, ve()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vr(e, qe, sn),
    tt(e, ve()),
    null
  );
}
function Nf(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    ((Z = n), Z === 0 && ((Uo = ve() + 500), El && dr()));
  }
}
function _r(e) {
  Hn !== null && Hn.tag === 0 && !(Z & 6) && Co();
  var t = Z;
  Z |= 1;
  var n = yt.transition,
    r = te;
  try {
    if (((yt.transition = null), (te = 1), e)) return e();
  } finally {
    ((te = r), (yt.transition = n), (Z = t), !(Z & 6) && dr());
  }
}
function Df() {
  ((rt = fo.current), ae(fo));
}
function Nr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kC(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((ff(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && _a());
          break;
        case 3:
          (Bo(), ae(Je), ae(Ve), Sf());
          break;
        case 5:
          wf(r);
          break;
        case 4:
          Bo();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          gf(r.type._context);
          break;
        case 22:
        case 23:
          Df();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (Ee = e = tr(e.current, null)),
    (Me = rt = t),
    (Te = 0),
    (Ji = null),
    (Af = Pl = Fr = 0),
    (qe = Mi = null),
    Sr !== null)
  ) {
    for (t = 0; t < Sr.length; t++)
      if (((n = Sr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = o), (r.next = s));
        }
        n.pending = r;
      }
    Sr = null;
  }
  return e;
}
function y0(e, t) {
  do {
    var n = Ee;
    try {
      if ((mf(), (fa.current = Ga), Ka)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Ka = !1;
      }
      if (
        ((Ir = 0),
        (Pe = be = pe = null),
        (Ri = !1),
        (Xi = 0),
        (Rf.current = null),
        n === null || n.return === null)
      ) {
        ((Te = 1), (Ji = t), (Ee = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Lp(s);
          if (h !== null) {
            ((h.flags &= -257),
              Op(h, s, a, i, t),
              h.mode & 1 && Dp(i, u, t),
              (t = h),
              (l = u));
            var x = t.updateQueue;
            if (x === null) {
              var p = new Set();
              (p.add(l), (t.updateQueue = p));
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Dp(i, u, t), Lf());
              break e;
            }
            l = Error(D(426));
          }
        } else if (ue && a.mode & 1) {
          var w = Lp(s);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Op(w, s, a, i, t),
              hf($o(l, a)));
            break e;
          }
        }
        ((i = l = $o(l, a)),
          Te !== 4 && (Te = 2),
          Mi === null ? (Mi = [i]) : Mi.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = e0(i, l, t);
              Pp(i, m);
              break e;
            case 1:
              a = l;
              var g = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Jn === null || !Jn.has(y))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var E = t0(i, a, t);
                Pp(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      w0(n);
    } catch (C) {
      ((t = C), Ee === n && n !== null && (Ee = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function v0() {
  var e = Ya.current;
  return ((Ya.current = Ga), e === null ? Ga : e);
}
function Lf() {
  ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    ke === null || (!(Fr & 268435455) && !(Pl & 268435455)) || _n(ke, Me));
}
function qa(e, t) {
  var n = Z;
  Z |= 2;
  var r = v0();
  (ke !== e || Me !== t) && ((sn = null), Nr(e, t));
  do
    try {
      ZC();
      break;
    } catch (o) {
      y0(e, o);
    }
  while (!0);
  if ((mf(), (Z = n), (Ya.current = r), Ee !== null)) throw Error(D(261));
  return ((ke = null), (Me = 0), Te);
}
function ZC() {
  for (; Ee !== null; ) x0(Ee);
}
function JC() {
  for (; Ee !== null && !bE(); ) x0(Ee);
}
function x0(e) {
  var t = E0(e.alternate, e, rt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? w0(e) : (Ee = t),
    (Rf.current = null));
}
function w0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = KC(n, t)), n !== null)) {
        ((n.flags &= 32767), (Ee = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Te = 6), (Ee = null));
        return;
      }
    } else if (((n = HC(n, t, rt)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function vr(e, t, n) {
  var r = te,
    o = yt.transition;
  try {
    ((yt.transition = null), (te = 1), eb(e, t, n, r));
  } finally {
    ((yt.transition = o), (te = r));
  }
  return null;
}
function eb(e, t, n, r) {
  do Co();
  while (Hn !== null);
  if (Z & 6) throw Error(D(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (OE(e, i),
    e === ke && ((Ee = ke = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hs ||
      ((Hs = !0),
      C0(Da, function () {
        return (Co(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = yt.transition), (yt.transition = null));
    var s = te;
    te = 1;
    var a = Z;
    ((Z |= 4),
      (Rf.current = null),
      YC(e, n),
      p0(n, e),
      wC(Ac),
      (Oa = !!Rc),
      (Ac = Rc = null),
      (e.current = n),
      QC(n),
      TE(),
      (Z = a),
      (te = s),
      (yt.transition = i));
  } else e.current = n;
  if (
    (Hs && ((Hs = !1), (Hn = e), (Xa = o)),
    (i = e.pendingLanes),
    i === 0 && (Jn = null),
    RE(n.stateNode),
    tt(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Qa) throw ((Qa = !1), (e = Qc), (Qc = null), e);
  return (
    Xa & 1 && e.tag !== 0 && Co(),
    (i = e.pendingLanes),
    i & 1 ? (e === Xc ? Ni++ : ((Ni = 0), (Xc = e))) : (Ni = 0),
    dr(),
    null
  );
}
function Co() {
  if (Hn !== null) {
    var e = ev(Xa),
      t = yt.transition,
      n = te;
    try {
      if (((yt.transition = null), (te = 16 > e ? 16 : e), Hn === null))
        var r = !1;
      else {
        if (((e = Hn), (Hn = null), (Xa = 0), Z & 6)) throw Error(D(331));
        var o = Z;
        for (Z |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child;
          if (F.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (F = d));
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        h = c.return;
                      if ((d0(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (F = f));
                        break;
                      }
                      F = h;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var p = x.child;
                if (p !== null) {
                  x.child = null;
                  do {
                    var w = p.sibling;
                    ((p.sibling = null), (p = w));
                  } while (p !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (F = s));
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ai(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (F = m));
                break e;
              }
              F = i.return;
            }
        }
        var g = e.current;
        for (F = g; F !== null; ) {
          s = F;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) ((y.return = s), (F = y));
          else
            e: for (s = g; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tl(9, a);
                  }
                } catch (C) {
                  ye(a, a.return, C);
                }
              if (a === s) {
                F = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                ((E.return = a.return), (F = E));
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((Z = o), dr(), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        )
          try {
            Xt.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((te = n), (yt.transition = t));
    }
  }
  return !1;
}
function Gp(e, t, n) {
  ((t = $o(n, t)),
    (t = e0(e, t, 1)),
    (e = Zn(e, t, 1)),
    (t = He()),
    e !== null && (hs(e, 1, t), tt(e, t)));
}
function ye(e, t, n) {
  if (e.tag === 3) Gp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Jn === null || !Jn.has(r)))
        ) {
          ((e = $o(n, e)),
            (e = t0(t, e, 1)),
            (t = Zn(t, e, 1)),
            (e = He()),
            t !== null && (hs(t, 1, e), tt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function tb(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Me & n) === n &&
      (Te === 4 || (Te === 3 && (Me & 130023424) === Me && 500 > ve() - Mf)
        ? Nr(e, 0)
        : (Af |= n)),
    tt(e, t));
}
function S0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = js), (js <<= 1), !(js & 130023424) && (js = 4194304))
      : (t = 1));
  var n = He();
  ((e = mn(e, t)), e !== null && (hs(e, t, n), tt(e, n)));
}
function nb(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), S0(e, n));
}
function rb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  (r !== null && r.delete(t), S0(e, n));
}
var E0;
E0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ze = !1), WC(e, t, n));
      Ze = !!(e.flags & 131072);
    }
  else ((Ze = !1), ue && t.flags & 1048576 && Pv(t, Ba, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (pa(e, t), (e = t.pendingProps));
      var o = _o(t, Ve.current);
      (Eo(t, n), (o = Cf(null, t, r, e, o, n)));
      var i = bf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(r) ? ((i = !0), Va(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            vf(t),
            (o.updater = bl),
            (t.stateNode = o),
            (o._reactInternals = t),
            _c(t, r, e, n),
            (t = Bc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ue && i && df(t), Be(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pa(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = ib(r)),
          (e = At(r, e)),
          o)
        ) {
          case 0:
            t = zc(null, t, r, e, n);
            break e;
          case 1:
            t = Fp(null, t, r, e, n);
            break e;
          case 11:
            t = jp(null, t, r, e, n);
            break e;
          case 14:
            t = Ip(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        zc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        Fp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((i0(t), e === null)) throw Error(D(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Dv(e, t),
          Wa(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = $o(Error(D(423)), t)), (t = _p(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = $o(Error(D(424)), t)), (t = _p(e, t, r, n, o)));
            break e;
          } else
            for (
              it = qn(t.stateNode.containerInfo.firstChild),
                st = t,
                ue = !0,
                Ot = null,
                n = Mv(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Vo(), r === o)) {
            t = gn(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lv(t),
        e === null && jc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Mc(r, o) ? (s = null) : i !== null && Mc(r, i) && (t.flags |= 32),
        o0(e, t),
        Be(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && jc(t), null);
    case 13:
      return s0(e, t, n);
    case 4:
      return (
        xf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zo(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        jp(e, t, r, o, n)
      );
    case 7:
      return (Be(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Be(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Be(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          re($a, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (_t(i.value, s)) {
            if (i.children === o.children && !Je.current) {
              t = gn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = dn(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Ic(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(D(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ic(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (Be(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Eo(t, n),
        (o = wt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = At(r, t.pendingProps)),
        (o = At(r.type, o)),
        Ip(e, t, r, o, n)
      );
    case 15:
      return n0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        pa(e, t),
        (t.tag = 1),
        et(r) ? ((e = !0), Va(t)) : (e = !1),
        Eo(t, n),
        Jv(t, r, o),
        _c(t, r, o, n),
        Bc(null, t, r, !0, e, n)
      );
    case 19:
      return a0(e, t, n);
    case 22:
      return r0(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function C0(e, t) {
  return Xy(e, t);
}
function ob(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function mt(e, t, n, r) {
  return new ob(e, t, n, r);
}
function Of(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function ib(e) {
  if (typeof e == "function") return Of(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zd)) return 11;
    if (e === Jd) return 14;
  }
  return 2;
}
function tr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ya(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Of(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case to:
        return Dr(n.children, o, i, t);
      case qd:
        ((s = 8), (o |= 8));
        break;
      case lc:
        return (
          (e = mt(12, n, t, o | 2)),
          (e.elementType = lc),
          (e.lanes = i),
          e
        );
      case uc:
        return ((e = mt(13, n, t, o)), (e.elementType = uc), (e.lanes = i), e);
      case cc:
        return ((e = mt(19, n, t, o)), (e.elementType = cc), (e.lanes = i), e);
      case Ly:
        return kl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ny:
              s = 10;
              break e;
            case Dy:
              s = 9;
              break e;
            case Zd:
              s = 11;
              break e;
            case Jd:
              s = 14;
              break e;
            case jn:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Dr(e, t, n, r) {
  return ((e = mt(7, e, r, t)), (e.lanes = n), e);
}
function kl(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = Ly),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ku(e, t, n) {
  return ((e = mt(6, e, null, t)), (e.lanes = n), e);
}
function Ru(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sb(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lu(0)),
    (this.expirationTimes = lu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function jf(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new sb(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vf(i),
    e
  );
}
function ab(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: eo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function b0(e) {
  if (!e) return rr;
  e = e._reactInternals;
  e: {
    if ($r(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return bv(e, n, t);
  }
  return t;
}
function T0(e, t, n, r, o, i, s, a, l) {
  return (
    (e = jf(n, r, !0, e, o, i, s, a, l)),
    (e.context = b0(null)),
    (n = e.current),
    (r = He()),
    (o = er(n)),
    (i = dn(r, o)),
    (i.callback = t ?? null),
    Zn(n, i, o),
    (e.current.lanes = o),
    hs(e, o, r),
    tt(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var o = t.current,
    i = He(),
    s = er(o);
  return (
    (n = b0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zn(o, t, s)),
    e !== null && (It(e, o, s, i), da(e, o, s)),
    s
  );
}
function Za(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function If(e, t) {
  (Yp(e, t), (e = e.alternate) && Yp(e, t));
}
function lb() {
  return null;
}
var P0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ff(e) {
  this._internalRoot = e;
}
Al.prototype.render = Ff.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Rl(e, t, null, null);
};
Al.prototype.unmount = Ff.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (_r(function () {
      Rl(null, e, null, null);
    }),
      (t[pn] = null));
  }
};
function Al(e) {
  this._internalRoot = e;
}
Al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
    (Fn.splice(n, 0, e), n === 0 && iv(e));
  }
};
function _f(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qp() {}
function ub(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Za(s);
        i.call(u);
      };
    }
    var s = T0(t, r, e, 0, null, !1, !1, "", Qp);
    return (
      (e._reactRootContainer = s),
      (e[pn] = s.current),
      Hi(e.nodeType === 8 ? e.parentNode : e),
      _r(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Za(l);
      a.call(u);
    };
  }
  var l = jf(e, 0, !1, null, null, !1, !1, "", Qp);
  return (
    (e._reactRootContainer = l),
    (e[pn] = l.current),
    Hi(e.nodeType === 8 ? e.parentNode : e),
    _r(function () {
      Rl(t, l, n, r);
    }),
    l
  );
}
function Nl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Za(s);
        a.call(l);
      };
    }
    Rl(t, s, e, o);
  } else s = ub(n, t, e, o, r);
  return Za(s);
}
tv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wi(t.pendingLanes);
        n !== 0 &&
          (nf(t, n | 1), tt(t, ve()), !(Z & 6) && ((Uo = ve() + 500), dr()));
      }
      break;
    case 13:
      (_r(function () {
        var r = mn(e, 1);
        if (r !== null) {
          var o = He();
          It(r, e, 1, o);
        }
      }),
        If(e, 1));
  }
};
rf = function (e) {
  if (e.tag === 13) {
    var t = mn(e, 134217728);
    if (t !== null) {
      var n = He();
      It(t, e, 134217728, n);
    }
    If(e, 134217728);
  }
};
nv = function (e) {
  if (e.tag === 13) {
    var t = er(e),
      n = mn(e, t);
    if (n !== null) {
      var r = He();
      It(n, e, t, r);
    }
    If(e, t);
  }
};
rv = function () {
  return te;
};
ov = function (e, t) {
  var n = te;
  try {
    return ((te = e), t());
  } finally {
    te = n;
  }
};
wc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Sl(r);
            if (!o) throw Error(D(90));
            (jy(r), hc(r, o));
          }
        }
      }
      break;
    case "textarea":
      Fy(e, n);
      break;
    case "select":
      ((t = n.value), t != null && vo(e, !!n.multiple, t, !1));
  }
};
Wy = Nf;
Hy = _r;
var cb = { usingClientEntryPoint: !1, Events: [ms, io, Sl, $y, Uy, Nf] },
  hi = {
    findFiberByHostInstance: wr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  db = {
    bundleType: hi.bundleType,
    version: hi.version,
    rendererPackageName: hi.rendererPackageName,
    rendererConfig: hi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Yy(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: hi.findFiberByHostInstance || lb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ks.isDisabled && Ks.supportsFiber)
    try {
      ((yl = Ks.inject(db)), (Xt = Ks));
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cb;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_f(t)) throw Error(D(200));
  return ab(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!_f(e)) throw Error(D(299));
  var n = !1,
    r = "",
    o = P0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = jf(e, 1, !1, null, null, n, !1, r, o)),
    (e[pn] = t.current),
    Hi(e.nodeType === 8 ? e.parentNode : e),
    new Ff(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return ((e = Yy(t)), (e = e === null ? null : e.stateNode), e);
};
ut.flushSync = function (e) {
  return _r(e);
};
ut.hydrate = function (e, t, n) {
  if (!Ml(t)) throw Error(D(200));
  return Nl(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!_f(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = P0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = T0(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[pn] = t.current),
    Hi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Al(t);
};
ut.render = function (e, t, n) {
  if (!Ml(t)) throw Error(D(200));
  return Nl(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!Ml(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (_r(function () {
        Nl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[pn] = null));
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = Nf;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ml(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Nl(e, t, n, !1, r);
};
ut.version = "18.3.1-next-f1338f8080-20240426";
function k0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k0);
    } catch (e) {
      console.error(e);
    }
}
(k0(), (ky.exports = ut));
var ys = ky.exports;
const R0 = my(ys);
var A0,
  Xp = ys;
((A0 = Xp.createRoot), Xp.hydrateRoot);
const fb = 1,
  hb = 1e6;
let Au = 0;
function pb() {
  return ((Au = (Au + 1) % Number.MAX_SAFE_INTEGER), Au.toString());
}
const Mu = new Map(),
  qp = (e) => {
    if (Mu.has(e)) return;
    const t = setTimeout(() => {
      (Mu.delete(e), Di({ type: "REMOVE_TOAST", toastId: e }));
    }, hb);
    Mu.set(e, t);
  },
  mb = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, fb) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? qp(n)
            : e.toasts.forEach((r) => {
                qp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  va = [];
let xa = { toasts: [] };
function Di(e) {
  ((xa = mb(xa, e)),
    va.forEach((t) => {
      t(xa);
    }));
}
function gb({ ...e }) {
  const t = pb(),
    n = (o) => Di({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Di({ type: "DISMISS_TOAST", toastId: t });
  return (
    Di({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function M0() {
  const [e, t] = v.useState(xa);
  return (
    v.useEffect(
      () => (
        va.push(t),
        () => {
          const n = va.indexOf(t);
          n > -1 && va.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: gb,
      dismiss: (n) => Di({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Zp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function N0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Zp(o, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Zp(e[o], null);
        }
      };
  };
}
function Ke(...e) {
  return v.useCallback(N0(...e), e);
}
function yb(e, t) {
  const n = v.createContext(t),
    r = (i) => {
      const { children: s, ...a } = i,
        l = v.useMemo(() => a, Object.values(a));
      return S.jsx(n.Provider, { value: l, children: s });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = v.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function vs(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = v.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var m;
      const { scope: f, children: h, ...x } = d,
        p = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        w = v.useMemo(() => x, Object.values(x));
      return S.jsx(p.Provider, { value: w, children: h });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var p;
      const h = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a,
        x = v.useContext(h);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, vb(o, ...t)]);
}
function vb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function es(e) {
  const t = wb(e),
    n = v.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = v.Children.toArray(i),
        l = a.find(Eb);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? v.Children.count(u) > 1
                ? v.Children.only(null)
                : v.isValidElement(u)
                  ? u.props.children
                  : null
              : d,
          );
        return S.jsx(t, {
          ...s,
          ref: o,
          children: v.isValidElement(u) ? v.cloneElement(u, void 0, c) : null,
        });
      }
      return S.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var xb = es("Slot");
function wb(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (v.isValidElement(o)) {
      const s = bb(o),
        a = Cb(i, o.props);
      return (
        o.type !== v.Fragment && (a.ref = r ? N0(r, s) : s),
        v.cloneElement(o, a)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var D0 = Symbol("radix.slottable");
function Sb(e) {
  const t = ({ children: n }) => S.jsx(S.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = D0), t);
}
function Eb(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === D0
  );
}
function Cb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function bb(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Tb(e) {
  const t = e + "CollectionProvider",
    [n, r] = vs(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (p) => {
      const { scope: w, children: m } = p,
        g = L.useRef(null),
        y = L.useRef(new Map()).current;
      return S.jsx(o, { scope: w, itemMap: y, collectionRef: g, children: m });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = es(a),
    u = L.forwardRef((p, w) => {
      const { scope: m, children: g } = p,
        y = i(a, m),
        E = Ke(w, y.collectionRef);
      return S.jsx(l, { ref: E, children: g });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = es(c),
    h = L.forwardRef((p, w) => {
      const { scope: m, children: g, ...y } = p,
        E = L.useRef(null),
        C = Ke(w, E),
        b = i(c, m);
      return (
        L.useEffect(
          () => (
            b.itemMap.set(E, { ref: E, ...y }),
            () => void b.itemMap.delete(E)
          ),
        ),
        S.jsx(f, { [d]: "", ref: C, children: g })
      );
    });
  h.displayName = c;
  function x(p) {
    const w = i(e + "CollectionConsumer", p);
    return L.useCallback(() => {
      const g = w.collectionRef.current;
      if (!g) return [];
      const y = Array.from(g.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (b, T) => y.indexOf(b.ref.current) - y.indexOf(T.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, x, r];
}
var Pb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  xe = Pb.reduce((e, t) => {
    const n = es(`Primitive.${t}`),
      r = v.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          S.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function L0(e, t) {
  e && ys.flushSync(() => e.dispatchEvent(t));
}
function Jt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function kb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Jt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Rb = "DismissableLayer",
  Jc = "dismissableLayer.update",
  Ab = "dismissableLayer.pointerDownOutside",
  Mb = "dismissableLayer.focusOutside",
  Jp,
  O0 = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Dl = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = v.useContext(O0),
      [c, d] = v.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = v.useState({}),
      x = Ke(t, (T) => d(T)),
      p = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = p.indexOf(w),
      g = c ? p.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = g >= m,
      C = Db((T) => {
        const P = T.target,
          M = [...u.branches].some((N) => N.contains(P));
        !E ||
          M ||
          (o == null || o(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f),
      b = Lb((T) => {
        const P = T.target;
        [...u.branches].some((N) => N.contains(P)) ||
          (i == null || i(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      kb((T) => {
        g === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Jp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            em(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Jp);
            }
          );
      }, [c, f, n, u]),
      v.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            em());
        },
        [c, u],
      ),
      v.useEffect(() => {
        const T = () => h({});
        return (
          document.addEventListener(Jc, T),
          () => document.removeEventListener(Jc, T)
        );
      }, []),
      S.jsx(xe.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ce(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: ce(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: ce(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
Dl.displayName = Rb;
var Nb = "DismissableLayerBranch",
  j0 = v.forwardRef((e, t) => {
    const n = v.useContext(O0),
      r = v.useRef(null),
      o = Ke(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      S.jsx(xe.div, { ...e, ref: o })
    );
  });
j0.displayName = Nb;
function Db(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Jt(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              I0(Ab, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Lb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Jt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          I0(Mb, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function em() {
  const e = new CustomEvent(Jc);
  document.dispatchEvent(e);
}
function I0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? L0(o, i) : o.dispatchEvent(i));
}
var Ob = Dl,
  jb = j0,
  yn = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  Ib = "Portal",
  Vf = v.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = v.useState(!1);
    yn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? R0.createPortal(S.jsx(xe.div, { ...r, ref: t }), s) : null;
  });
Vf.displayName = Ib;
function Fb(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var qo = (e) => {
  const { present: t, children: n } = e,
    r = _b(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = Ke(r.ref, Vb(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: i })
    : null;
};
qo.displayName = "Presence";
function _b(e) {
  const [t, n] = v.useState(),
    r = v.useRef(null),
    o = v.useRef(e),
    i = v.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = Fb(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = Gs(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    yn(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const f = i.current,
          h = Gs(u);
        (e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, l]),
    yn(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const p = Gs(r.current).includes(h.animationName);
            if (h.target === t && p && (l("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          f = (h) => {
            h.target === t && (i.current = Gs(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: v.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function Gs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Vb(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var zb = Gd[" useInsertionEffect ".trim().toString()] || yn;
function F0({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = Bb({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : o;
  {
    const c = v.useRef(e !== void 0);
    v.useEffect(() => {
      const d = c.current;
      (d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, r]);
  }
  const u = v.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = $b(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else i(c);
    },
    [a, e, i, s],
  );
  return [l, u];
}
function Bb({ defaultProp: e, onChange: t }) {
  const [n, r] = v.useState(e),
    o = v.useRef(n),
    i = v.useRef(t);
  return (
    zb(() => {
      i.current = t;
    }, [t]),
    v.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function $b(e) {
  return typeof e == "function";
}
var Ub = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Wb = "VisuallyHidden",
  Ll = v.forwardRef((e, t) =>
    S.jsx(xe.span, { ...e, ref: t, style: { ...Ub, ...e.style } }),
  );
Ll.displayName = Wb;
var Hb = Ll,
  zf = "ToastProvider",
  [Bf, Kb, Gb] = Tb("Toast"),
  [_0, FO] = vs("Toast", [Gb]),
  [Yb, Ol] = _0(zf),
  V0 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [a, l] = v.useState(null),
      [u, c] = v.useState(0),
      d = v.useRef(!1),
      f = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${zf}\`. Expected non-empty \`string\`.`,
        ),
      S.jsx(Bf.Provider, {
        scope: t,
        children: S.jsx(Yb, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: v.useCallback(() => c((h) => h + 1), []),
          onToastRemove: v.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
V0.displayName = zf;
var z0 = "ToastViewport",
  Qb = ["F8"],
  ed = "toast.viewportPause",
  td = "toast.viewportResume",
  B0 = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Qb,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Ol(z0, n),
      a = Kb(n),
      l = v.useRef(null),
      u = v.useRef(null),
      c = v.useRef(null),
      d = v.useRef(null),
      f = Ke(t, d, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = s.toastCount > 0;
    (v.useEffect(() => {
      const w = (m) => {
        var y;
        r.length !== 0 &&
          r.every((E) => m[E] || m.code === E) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      v.useEffect(() => {
        const w = l.current,
          m = d.current;
        if (x && w && m) {
          const g = () => {
              if (!s.isClosePausedRef.current) {
                const b = new CustomEvent(ed);
                (m.dispatchEvent(b), (s.isClosePausedRef.current = !0));
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const b = new CustomEvent(td);
                (m.dispatchEvent(b), (s.isClosePausedRef.current = !1));
              }
            },
            E = (b) => {
              !w.contains(b.relatedTarget) && y();
            },
            C = () => {
              w.contains(document.activeElement) || y();
            };
          return (
            w.addEventListener("focusin", g),
            w.addEventListener("focusout", E),
            w.addEventListener("pointermove", g),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", g),
            window.addEventListener("focus", y),
            () => {
              (w.removeEventListener("focusin", g),
                w.removeEventListener("focusout", E),
                w.removeEventListener("pointermove", g),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", g),
                window.removeEventListener("focus", y));
            }
          );
        }
      }, [x, s.isClosePausedRef]));
    const p = v.useCallback(
      ({ tabbingDirection: w }) => {
        const g = a().map((y) => {
          const E = y.ref.current,
            C = [E, ...lT(E)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? g.reverse() : g).flat();
      },
      [a],
    );
    return (
      v.useEffect(() => {
        const w = d.current;
        if (w) {
          const m = (g) => {
            var C, b, T;
            const y = g.altKey || g.ctrlKey || g.metaKey;
            if (g.key === "Tab" && !y) {
              const P = document.activeElement,
                M = g.shiftKey;
              if (g.target === w && M) {
                (C = u.current) == null || C.focus();
                return;
              }
              const I = p({ tabbingDirection: M ? "backwards" : "forwards" }),
                K = I.findIndex((O) => O === P);
              Nu(I.slice(K + 1))
                ? g.preventDefault()
                : M
                  ? (b = u.current) == null || b.focus()
                  : (T = c.current) == null || T.focus();
            }
          };
          return (
            w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
          );
        }
      }, [a, p]),
      S.jsxs(jb, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            S.jsx(nd, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = p({ tabbingDirection: "forwards" });
                Nu(w);
              },
            }),
          S.jsx(Bf.Slot, {
            scope: n,
            children: S.jsx(xe.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          x &&
            S.jsx(nd, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = p({ tabbingDirection: "backwards" });
                Nu(w);
              },
            }),
        ],
      })
    );
  });
B0.displayName = z0;
var $0 = "ToastFocusProxy",
  nd = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Ol($0, n);
    return S.jsx(Ll, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
nd.displayName = $0;
var xs = "Toast",
  Xb = "toast.swipeStart",
  qb = "toast.swipeMove",
  Zb = "toast.swipeCancel",
  Jb = "toast.swipeEnd",
  U0 = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [a, l] = F0({ prop: r, defaultProp: o ?? !0, onChange: i, caller: xs });
    return S.jsx(qo, {
      present: n || a,
      children: S.jsx(nT, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Jt(e.onPause),
        onResume: Jt(e.onResume),
        onSwipeStart: ce(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ce(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: ce(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: ce(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
U0.displayName = xs;
var [eT, tT] = _0(xs, { onClose() {} }),
  nT = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...x
      } = e,
      p = Ol(xs, n),
      [w, m] = v.useState(null),
      g = Ke(t, (O) => m(O)),
      y = v.useRef(null),
      E = v.useRef(null),
      C = o || p.duration,
      b = v.useRef(0),
      T = v.useRef(C),
      P = v.useRef(0),
      { onToastAdd: M, onToastRemove: N } = p,
      z = Jt(() => {
        var Y;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((Y = p.viewport) == null || Y.focus()),
          s());
      }),
      I = v.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(P.current),
            (b.current = new Date().getTime()),
            (P.current = window.setTimeout(z, O)));
        },
        [z],
      );
    (v.useEffect(() => {
      const O = p.viewport;
      if (O) {
        const Y = () => {
            (I(T.current), u == null || u());
          },
          $ = () => {
            const V = new Date().getTime() - b.current;
            ((T.current = T.current - V),
              window.clearTimeout(P.current),
              l == null || l());
          };
        return (
          O.addEventListener(ed, $),
          O.addEventListener(td, Y),
          () => {
            (O.removeEventListener(ed, $), O.removeEventListener(td, Y));
          }
        );
      }
    }, [p.viewport, C, l, u, I]),
      v.useEffect(() => {
        i && !p.isClosePausedRef.current && I(C);
      }, [i, C, p.isClosePausedRef, I]),
      v.useEffect(() => (M(), () => N()), [M, N]));
    const K = v.useMemo(() => (w ? X0(w) : null), [w]);
    return p.viewport
      ? S.jsxs(S.Fragment, {
          children: [
            K &&
              S.jsx(rT, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: K,
              }),
            S.jsx(eT, {
              scope: n,
              onClose: z,
              children: ys.createPortal(
                S.jsx(Bf.ItemSlot, {
                  scope: n,
                  children: S.jsx(Ob, {
                    asChild: !0,
                    onEscapeKeyDown: ce(a, () => {
                      (p.isFocusedToastEscapeKeyDownRef.current || z(),
                        (p.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: S.jsx(xe.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": p.swipeDirection,
                      ...x,
                      ref: g,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ce(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((p.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ce(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (y.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: ce(e.onPointerMove, (O) => {
                        if (!y.current) return;
                        const Y = O.clientX - y.current.x,
                          $ = O.clientY - y.current.y,
                          V = !!E.current,
                          k = ["left", "right"].includes(p.swipeDirection),
                          A = ["left", "up"].includes(p.swipeDirection)
                            ? Math.min
                            : Math.max,
                          j = k ? A(0, Y) : 0,
                          U = k ? 0 : A(0, $),
                          B = O.pointerType === "touch" ? 10 : 2,
                          Q = { x: j, y: U },
                          q = { originalEvent: O, delta: Q };
                        V
                          ? ((E.current = Q), Ys(qb, d, q, { discrete: !1 }))
                          : tm(Q, p.swipeDirection, B)
                            ? ((E.current = Q),
                              Ys(Xb, c, q, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(Y) > B || Math.abs($) > B) &&
                              (y.current = null);
                      }),
                      onPointerUp: ce(e.onPointerUp, (O) => {
                        const Y = E.current,
                          $ = O.target;
                        if (
                          ($.hasPointerCapture(O.pointerId) &&
                            $.releasePointerCapture(O.pointerId),
                          (E.current = null),
                          (y.current = null),
                          Y)
                        ) {
                          const V = O.currentTarget,
                            k = { originalEvent: O, delta: Y };
                          (tm(Y, p.swipeDirection, p.swipeThreshold)
                            ? Ys(Jb, h, k, { discrete: !0 })
                            : Ys(Zb, f, k, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                p.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  rT = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ol(xs, t),
      [i, s] = v.useState(!1),
      [a, l] = v.useState(!1);
    return (
      sT(() => s(!0)),
      v.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : S.jsx(Vf, {
            asChild: !0,
            children: S.jsx(Ll, {
              ...r,
              children:
                i && S.jsxs(S.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  oT = "ToastTitle",
  W0 = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return S.jsx(xe.div, { ...r, ref: t });
  });
W0.displayName = oT;
var iT = "ToastDescription",
  H0 = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return S.jsx(xe.div, { ...r, ref: t });
  });
H0.displayName = iT;
var K0 = "ToastAction",
  G0 = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? S.jsx(Q0, {
          altText: n,
          asChild: !0,
          children: S.jsx($f, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${K0}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
G0.displayName = K0;
var Y0 = "ToastClose",
  $f = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = tT(Y0, n);
    return S.jsx(Q0, {
      asChild: !0,
      children: S.jsx(xe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ce(e.onClick, o.onClose),
      }),
    });
  });
$f.displayName = Y0;
var Q0 = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return S.jsx(xe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function X0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        aT(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...X0(r));
      }
    }),
    t
  );
}
function Ys(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? L0(o, i) : o.dispatchEvent(i));
}
var tm = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function sT(e = () => {}) {
  const t = Jt(e);
  yn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function aT(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function lT(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var uT = V0,
  q0 = B0,
  Z0 = U0,
  J0 = W0,
  ex = H0,
  tx = G0,
  nx = $f;
function rx(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = rx(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ox() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = rx(e)) && (r && (r += " "), (r += t));
  return r;
}
const nm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  rm = ox,
  Uf = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return rm(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const f = nm(c) || nm(d);
        return o[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return (f === void 0 || (u[d] = f), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((x) => {
                let [p, w] = x;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...a }[p])
                  : { ...i, ...a }[p] === w;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return rm(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ix = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var dT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fT = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    v.createElement(
      "svg",
      {
        ref: l,
        ...dT,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: ix("lucide", o),
        ...a,
      },
      [
        ...s.map(([u, c]) => v.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ws = (e, t) => {
  const n = v.forwardRef(({ className: r, ...o }, i) =>
    v.createElement(fT, {
      ref: i,
      iconNode: t,
      className: ix(`lucide-${cT(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hT = ws("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pT = ws("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sx = ws("IndianRupee", [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ja = ws("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = ws("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Wf = "-",
  mT = (e) => {
    const t = yT(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Wf);
        return (a[0] === "" && a.length !== 1 && a.shift(), lx(a, t) || gT(s));
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  lx = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? lx(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Wf);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  om = /^\[(.+)\]$/,
  gT = (e) => {
    if (om.test(e)) {
      const t = om.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  yT = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      xT(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        rd(s, r, i, t);
      }),
      r
    );
  },
  rd = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : im(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (vT(o)) {
          rd(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        rd(s, im(t, i), n, r);
      });
    });
  },
  im = (e, t) => {
    let n = e;
    return (
      t.split(Wf).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  vT = (e) => e.isThemeGetter,
  xT = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  wT = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      (n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return (o(i, s), s);
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  ux = "!",
  ST = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let w = 0; w < a.length; w++) {
          let m = a[w];
          if (u === 0) {
            if (m === o && (r || a.slice(w, w + i) === t)) {
              (l.push(a.slice(c, w)), (c = w + i));
              continue;
            }
            if (m === "/") {
              d = w;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(ux),
          x = h ? f.substring(1) : f,
          p = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: x,
          maybePostfixModifierPosition: p,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  ET = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  CT = (e) => ({ cache: wT(e.cacheSize), parseClassName: ST(e), ...mT(e) }),
  bT = /\s+/,
  TT = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(bT);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let x = !!h,
        p = r(x ? f.substring(0, h) : f);
      if (!p) {
        if (!x) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((p = r(f)), !p)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        x = !1;
      }
      const w = ET(c).join(":"),
        m = d ? w + ux : w,
        g = m + p;
      if (i.includes(g)) continue;
      i.push(g);
      const y = o(p, x);
      for (let E = 0; E < y.length; ++E) {
        const C = y[E];
        i.push(m + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function PT() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = cx(t)) && (r && (r += " "), (r += n));
  return r;
}
const cx = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cx(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function kT(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return ((n = CT(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = TT(l, n);
    return (o(l, c), c);
  }
  return function () {
    return i(PT.apply(null, arguments));
  };
}
const ie = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  dx = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  RT = /^\d+\/\d+$/,
  AT = new Set(["px", "full", "screen"]),
  MT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  NT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  DT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  LT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  OT =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  rn = (e) => bo(e) || AT.has(e) || RT.test(e),
  An = (e) => Zo(e, "length", $T),
  bo = (e) => !!e && !Number.isNaN(Number(e)),
  Du = (e) => Zo(e, "number", bo),
  pi = (e) => !!e && Number.isInteger(Number(e)),
  jT = (e) => e.endsWith("%") && bo(e.slice(0, -1)),
  G = (e) => dx.test(e),
  Mn = (e) => MT.test(e),
  IT = new Set(["length", "size", "percentage"]),
  FT = (e) => Zo(e, IT, fx),
  _T = (e) => Zo(e, "position", fx),
  VT = new Set(["image", "url"]),
  zT = (e) => Zo(e, VT, WT),
  BT = (e) => Zo(e, "", UT),
  mi = () => !0,
  Zo = (e, t, n) => {
    const r = dx.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  $T = (e) => NT.test(e) && !DT.test(e),
  fx = () => !1,
  UT = (e) => LT.test(e),
  WT = (e) => OT.test(e),
  HT = () => {
    const e = ie("colors"),
      t = ie("spacing"),
      n = ie("blur"),
      r = ie("brightness"),
      o = ie("borderColor"),
      i = ie("borderRadius"),
      s = ie("borderSpacing"),
      a = ie("borderWidth"),
      l = ie("contrast"),
      u = ie("grayscale"),
      c = ie("hueRotate"),
      d = ie("invert"),
      f = ie("gap"),
      h = ie("gradientColorStops"),
      x = ie("gradientColorStopPositions"),
      p = ie("inset"),
      w = ie("margin"),
      m = ie("opacity"),
      g = ie("padding"),
      y = ie("saturate"),
      E = ie("scale"),
      C = ie("sepia"),
      b = ie("skew"),
      T = ie("space"),
      P = ie("translate"),
      M = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", G, t],
      I = () => [G, t],
      K = () => ["", rn, An],
      O = () => ["auto", bo, G],
      Y = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", G],
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [bo, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [mi],
        spacing: [rn, An],
        blur: ["none", "", Mn, G],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Mn, G],
        borderSpacing: I(),
        borderWidth: K(),
        contrast: U(),
        grayscale: A(),
        hueRotate: U(),
        invert: A(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [jT, An],
        inset: z(),
        margin: z(),
        opacity: U(),
        padding: I(),
        saturate: U(),
        scale: U(),
        sepia: A(),
        skew: U(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [Mn] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Y(), G] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", pi, G] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", pi, G] }],
        "grid-cols": [{ "grid-cols": [mi] }],
        "col-start-end": [{ col: ["auto", { span: ["full", pi, G] }, G] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [mi] }],
        "row-start-end": [{ row: ["auto", { span: [pi, G] }, G] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [g] }],
        px: [{ px: [g] }],
        py: [{ py: [g] }],
        ps: [{ ps: [g] }],
        pe: [{ pe: [g] }],
        pt: [{ pt: [g] }],
        pr: [{ pr: [g] }],
        pb: [{ pb: [g] }],
        pl: [{ pl: [g] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              G,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Mn] },
              Mn,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Mn, An] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Du,
            ],
          },
        ],
        "font-family": [{ font: [mi] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", bo, Du] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              rn,
              G,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", rn, An] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", rn, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Y(), _T] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", FT] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              zT,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [rn, G] }],
        "outline-w": [{ outline: [rn, An] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [rn, An] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Mn, BT] }],
        "shadow-color": [{ shadow: [mi] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Mn, G] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: U() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: U() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [pi, G] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [b] }],
        "skew-y": [{ "skew-y": [b] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [rn, An, Du] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  KT = kT(HT);
function Qe(...e) {
  return KT(ox(e));
}
const GT = uT,
  hx = v.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(q0, {
      ref: n,
      className: Qe(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
hx.displayName = q0.displayName;
const YT = Uf(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  px = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    S.jsx(Z0, { ref: r, className: Qe(YT({ variant: t }), e), ...n }),
  );
px.displayName = Z0.displayName;
const QT = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(tx, {
    ref: n,
    className: Qe(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
QT.displayName = tx.displayName;
const mx = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(nx, {
    ref: n,
    className: Qe(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: S.jsx(ax, { className: "h-4 w-4" }),
  }),
);
mx.displayName = nx.displayName;
const gx = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(J0, { ref: n, className: Qe("text-sm font-semibold", e), ...t }),
);
gx.displayName = J0.displayName;
const yx = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(ex, { ref: n, className: Qe("text-sm opacity-90", e), ...t }),
);
yx.displayName = ex.displayName;
function XT() {
  const { toasts: e } = M0();
  return S.jsxs(GT, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return S.jsxs(
          px,
          {
            ...i,
            children: [
              S.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && S.jsx(gx, { children: n }),
                  r && S.jsx(yx, { children: r }),
                ],
              }),
              o,
              S.jsx(mx, {}),
            ],
          },
          t,
        );
      }),
      S.jsx(hx, {}),
    ],
  });
}
var sm = ["light", "dark"],
  qT = "(prefers-color-scheme: dark)",
  ZT = v.createContext(void 0),
  JT = { setTheme: (e) => {}, themes: [] },
  eP = () => {
    var e;
    return (e = v.useContext(ZT)) != null ? e : JT;
  };
v.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((x) => `'${x}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = o
        ? sm.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (x, p = !1, w = !0) => {
        let m = s ? s[x] : x,
          g = p ? x + "|| ''" : `'${m}'`,
          y = "";
        return (
          o &&
            w &&
            !p &&
            sm.includes(x) &&
            (y += `d.style.colorScheme = '${x}';`),
          n === "class"
            ? p || m
              ? (y += `c.add(${g})`)
              : (y += "null")
            : m && (y += `d[s](n,${g})`),
          y
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${qT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
    return v.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  },
);
var tP = (e) => {
    switch (e) {
      case "success":
        return oP;
      case "info":
        return sP;
      case "warning":
        return iP;
      case "error":
        return aP;
      default:
        return null;
    }
  },
  nP = Array(12).fill(0),
  rP = ({ visible: e, className: t }) =>
    L.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        nP.map((n, r) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  oP = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  iP = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  sP = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  aP = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  lP = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  uP = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  od = 1,
  cP = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : od++,
            i = this.toasts.find((a) => a.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: s, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (l) => {
                if (((i = ["resolve", l]), L.isValidElement(l)))
                  ((o = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (fP(l) && !l.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                (o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || od++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Xe = new cP(),
  dP = (e, t) => {
    let n = (t == null ? void 0 : t.id) || od++;
    return (Xe.addToast({ title: e, ...t, id: n }), n);
  },
  fP = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  hP = dP,
  pP = () => Xe.toasts,
  mP = () => Xe.getActiveToasts();
Object.assign(
  hP,
  {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading,
  },
  { getHistory: pP, getToasts: mP },
);
function gP(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
gP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Qs(e) {
  return e.label !== void 0;
}
var yP = 3,
  vP = "32px",
  xP = "16px",
  am = 4e3,
  wP = 356,
  SP = 14,
  EP = 20,
  CP = 200;
function Pt(...e) {
  return e.filter(Boolean).join(" ");
}
function bP(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var TP = (e) => {
  var t, n, r, o, i, s, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: x,
      interacting: p,
      setHeights: w,
      visibleToasts: m,
      heights: g,
      index: y,
      toasts: E,
      expanded: C,
      removeToast: b,
      defaultRichColors: T,
      closeButton: P,
      style: M,
      cancelButtonStyle: N,
      actionButtonStyle: z,
      className: I = "",
      descriptionClassName: K = "",
      duration: O,
      position: Y,
      gap: $,
      loadingIcon: V,
      expandByDefault: k,
      classNames: A,
      icons: j,
      closeButtonAriaLabel: U = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Q, q] = L.useState(null),
    [we, De] = L.useState(null),
    [ee, Ur] = L.useState(!1),
    [En, hr] = L.useState(!1),
    [Cn, Wr] = L.useState(!1),
    [bn, Ps] = L.useState(!1),
    [Zl, ks] = L.useState(!1),
    [Jl, oi] = L.useState(0),
    [Hr, jh] = L.useState(0),
    ii = L.useRef(h.duration || O || am),
    Ih = L.useRef(null),
    pr = L.useRef(null),
    NS = y === 0,
    DS = y + 1 <= m,
    dt = h.type,
    Kr = h.dismissible !== !1,
    LS = h.className || "",
    OS = h.descriptionClassName || "",
    Rs = L.useMemo(
      () => g.findIndex((W) => W.toastId === h.id) || 0,
      [g, h.id],
    ),
    jS = L.useMemo(() => {
      var W;
      return (W = h.closeButton) != null ? W : P;
    }, [h.closeButton, P]),
    Fh = L.useMemo(() => h.duration || O || am, [h.duration, O]),
    eu = L.useRef(0),
    Gr = L.useRef(0),
    _h = L.useRef(0),
    Yr = L.useRef(null),
    [IS, FS] = Y.split("-"),
    Vh = L.useMemo(
      () => g.reduce((W, ne, le) => (le >= Rs ? W : W + ne.height), 0),
      [g, Rs],
    ),
    zh = uP(),
    _S = h.invert || f,
    tu = dt === "loading";
  ((Gr.current = L.useMemo(() => Rs * $ + Vh, [Rs, Vh])),
    L.useEffect(() => {
      ii.current = Fh;
    }, [Fh]),
    L.useEffect(() => {
      Ur(!0);
    }, []),
    L.useEffect(() => {
      let W = pr.current;
      if (W) {
        let ne = W.getBoundingClientRect().height;
        return (
          jh(ne),
          w((le) => [
            { toastId: h.id, height: ne, position: h.position },
            ...le,
          ]),
          () => w((le) => le.filter((Et) => Et.toastId !== h.id))
        );
      }
    }, [w, h.id]),
    L.useLayoutEffect(() => {
      if (!ee) return;
      let W = pr.current,
        ne = W.style.height;
      W.style.height = "auto";
      let le = W.getBoundingClientRect().height;
      ((W.style.height = ne),
        jh(le),
        w((Et) =>
          Et.find((Ct) => Ct.toastId === h.id)
            ? Et.map((Ct) => (Ct.toastId === h.id ? { ...Ct, height: le } : Ct))
            : [{ toastId: h.id, height: le, position: h.position }, ...Et],
        ));
    }, [ee, h.title, h.description, w, h.id]));
  let Tn = L.useCallback(() => {
    (hr(!0),
      oi(Gr.current),
      w((W) => W.filter((ne) => ne.toastId !== h.id)),
      setTimeout(() => {
        b(h);
      }, CP));
  }, [h, b, w, Gr]);
  (L.useEffect(() => {
    if (
      (h.promise && dt === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let W;
    return (
      C || p || (B && zh)
        ? (() => {
            if (_h.current < eu.current) {
              let ne = new Date().getTime() - eu.current;
              ii.current = ii.current - ne;
            }
            _h.current = new Date().getTime();
          })()
        : ii.current !== 1 / 0 &&
          ((eu.current = new Date().getTime()),
          (W = setTimeout(() => {
            var ne;
            ((ne = h.onAutoClose) == null || ne.call(h, h), Tn());
          }, ii.current))),
      () => clearTimeout(W)
    );
  }, [C, p, h, dt, B, zh, Tn]),
    L.useEffect(() => {
      h.delete && Tn();
    }, [Tn, h.delete]));
  function VS() {
    var W, ne, le;
    return j != null && j.loading
      ? L.createElement(
          "div",
          {
            className: Pt(
              A == null ? void 0 : A.loader,
              (W = h == null ? void 0 : h.classNames) == null
                ? void 0
                : W.loader,
              "sonner-loader",
            ),
            "data-visible": dt === "loading",
          },
          j.loading,
        )
      : V
        ? L.createElement(
            "div",
            {
              className: Pt(
                A == null ? void 0 : A.loader,
                (ne = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : ne.loader,
                "sonner-loader",
              ),
              "data-visible": dt === "loading",
            },
            V,
          )
        : L.createElement(rP, {
            className: Pt(
              A == null ? void 0 : A.loader,
              (le = h == null ? void 0 : h.classNames) == null
                ? void 0
                : le.loader,
            ),
            visible: dt === "loading",
          });
  }
  return L.createElement(
    "li",
    {
      tabIndex: 0,
      ref: pr,
      className: Pt(
        I,
        LS,
        A == null ? void 0 : A.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[dt],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[dt],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : T,
      "data-styled": !(h.jsx || h.unstyled || x),
      "data-mounted": ee,
      "data-promise": !!h.promise,
      "data-swiped": Zl,
      "data-removed": En,
      "data-visible": DS,
      "data-y-position": IS,
      "data-x-position": FS,
      "data-index": y,
      "data-front": NS,
      "data-swiping": Cn,
      "data-dismissible": Kr,
      "data-type": dt,
      "data-invert": _S,
      "data-swipe-out": bn,
      "data-swipe-direction": we,
      "data-expanded": !!(C || (k && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": E.length - y,
        "--offset": `${En ? Jl : Gr.current}px`,
        "--initial-height": k ? "auto" : `${Hr}px`,
        ...M,
        ...h.style,
      },
      onDragEnd: () => {
        (Wr(!1), q(null), (Yr.current = null));
      },
      onPointerDown: (W) => {
        tu ||
          !Kr ||
          ((Ih.current = new Date()),
          oi(Gr.current),
          W.target.setPointerCapture(W.pointerId),
          W.target.tagName !== "BUTTON" &&
            (Wr(!0), (Yr.current = { x: W.clientX, y: W.clientY })));
      },
      onPointerUp: () => {
        var W, ne, le, Et;
        if (bn || !Kr) return;
        Yr.current = null;
        let Ct = Number(
            ((W = pr.current) == null
              ? void 0
              : W.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Pn = Number(
            ((ne = pr.current) == null
              ? void 0
              : ne.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          mr =
            new Date().getTime() -
            ((le = Ih.current) == null ? void 0 : le.getTime()),
          bt = Q === "x" ? Ct : Pn,
          kn = Math.abs(bt) / mr;
        if (Math.abs(bt) >= EP || kn > 0.11) {
          (oi(Gr.current),
            (Et = h.onDismiss) == null || Et.call(h, h),
            De(
              Q === "x" ? (Ct > 0 ? "right" : "left") : Pn > 0 ? "down" : "up",
            ),
            Tn(),
            Ps(!0),
            ks(!1));
          return;
        }
        (Wr(!1), q(null));
      },
      onPointerMove: (W) => {
        var ne, le, Et, Ct;
        if (
          !Yr.current ||
          !Kr ||
          ((ne = window.getSelection()) == null
            ? void 0
            : ne.toString().length) > 0
        )
          return;
        let Pn = W.clientY - Yr.current.y,
          mr = W.clientX - Yr.current.x,
          bt = (le = e.swipeDirections) != null ? le : bP(Y);
        !Q &&
          (Math.abs(mr) > 1 || Math.abs(Pn) > 1) &&
          q(Math.abs(mr) > Math.abs(Pn) ? "x" : "y");
        let kn = { x: 0, y: 0 };
        (Q === "y"
          ? (bt.includes("top") || bt.includes("bottom")) &&
            ((bt.includes("top") && Pn < 0) ||
              (bt.includes("bottom") && Pn > 0)) &&
            (kn.y = Pn)
          : Q === "x" &&
            (bt.includes("left") || bt.includes("right")) &&
            ((bt.includes("left") && mr < 0) ||
              (bt.includes("right") && mr > 0)) &&
            (kn.x = mr),
          (Math.abs(kn.x) > 0 || Math.abs(kn.y) > 0) && ks(!0),
          (Et = pr.current) == null ||
            Et.style.setProperty("--swipe-amount-x", `${kn.x}px`),
          (Ct = pr.current) == null ||
            Ct.style.setProperty("--swipe-amount-y", `${kn.y}px`));
      },
    },
    jS && !h.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": U,
            "data-disabled": tu,
            "data-close-button": !0,
            onClick:
              tu || !Kr
                ? () => {}
                : () => {
                    var W;
                    (Tn(), (W = h.onDismiss) == null || W.call(h, h));
                  },
            className: Pt(
              A == null ? void 0 : A.closeButton,
              (o = h == null ? void 0 : h.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (i = j == null ? void 0 : j.close) != null ? i : lP,
        )
      : null,
    h.jsx || v.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
          ? h.title()
          : h.title
      : L.createElement(
          L.Fragment,
          null,
          dt || h.icon || h.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Pt(
                    A == null ? void 0 : A.icon,
                    (s = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : s.icon,
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || VS()
                  : null,
                h.type !== "loading"
                  ? h.icon || (j == null ? void 0 : j[dt]) || tP(dt)
                  : null,
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: Pt(
                A == null ? void 0 : A.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: Pt(
                  A == null ? void 0 : A.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof h.title == "function" ? h.title() : h.title,
            ),
            h.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Pt(
                      K,
                      OS,
                      A == null ? void 0 : A.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description,
                )
              : null,
          ),
          v.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Qs(h.cancel)
              ? L.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: h.cancelButtonStyle || N,
                    onClick: (W) => {
                      var ne, le;
                      Qs(h.cancel) &&
                        Kr &&
                        ((le = (ne = h.cancel).onClick) == null ||
                          le.call(ne, W),
                        Tn());
                    },
                    className: Pt(
                      A == null ? void 0 : A.cancelButton,
                      (c = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  h.cancel.label,
                )
              : null,
          v.isValidElement(h.action)
            ? h.action
            : h.action && Qs(h.action)
              ? L.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: h.actionButtonStyle || z,
                    onClick: (W) => {
                      var ne, le;
                      Qs(h.action) &&
                        ((le = (ne = h.action).onClick) == null ||
                          le.call(ne, W),
                        !W.defaultPrevented && Tn());
                    },
                    className: Pt(
                      A == null ? void 0 : A.actionButton,
                      (d = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  h.action.label,
                )
              : null,
        ),
  );
};
function lm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function PP(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        a = i ? xP : vP;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${s}-${u}`] = a)
                : (n[`${s}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : l(a);
    }),
    n
  );
}
var kP = v.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: x = yP,
      toastOptions: p,
      dir: w = lm(),
      gap: m = SP,
      loadingIcon: g,
      icons: y,
      containerAriaLabel: E = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [b, T] = L.useState([]),
    P = L.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(b.filter((B) => B.position).map((B) => B.position)),
          ),
        ),
      [b, r],
    ),
    [M, N] = L.useState([]),
    [z, I] = L.useState(!1),
    [K, O] = L.useState(!1),
    [Y, $] = L.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    V = L.useRef(null),
    k = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = L.useRef(null),
    j = L.useRef(!1),
    U = L.useCallback((B) => {
      T((Q) => {
        var q;
        return (
          ((q = Q.find((we) => we.id === B.id)) != null && q.delete) ||
            Xe.dismiss(B.id),
          Q.filter(({ id: we }) => we !== B.id)
        );
      });
    }, []);
  return (
    L.useEffect(
      () =>
        Xe.subscribe((B) => {
          if (B.dismiss) {
            T((Q) => Q.map((q) => (q.id === B.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            R0.flushSync(() => {
              T((Q) => {
                let q = Q.findIndex((we) => we.id === B.id);
                return q !== -1
                  ? [...Q.slice(0, q), { ...Q[q], ...B }, ...Q.slice(q + 1)]
                  : [B, ...Q];
              });
            });
          });
        }),
      [],
    ),
    L.useEffect(() => {
      if (c !== "system") {
        $(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Q }) => {
          $(Q ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: q }) => {
          try {
            $(q ? "dark" : "light");
          } catch (we) {
            console.error(we);
          }
        });
      }
    }, [c]),
    L.useEffect(() => {
      b.length <= 1 && I(!1);
    }, [b]),
    L.useEffect(() => {
      let B = (Q) => {
        var q, we;
        (o.every((De) => Q[De] || Q.code === De) &&
          (I(!0), (q = V.current) == null || q.focus()),
          Q.code === "Escape" &&
            (document.activeElement === V.current ||
              ((we = V.current) != null &&
                we.contains(document.activeElement))) &&
            I(!1));
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [o]),
    L.useEffect(() => {
      if (V.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (j.current = !1));
        };
    }, [V.current]),
    L.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${E} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map((B, Q) => {
        var q;
        let [we, De] = B.split("-");
        return b.length
          ? L.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? lm() : w,
                tabIndex: -1,
                ref: V,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Y,
                "data-y-position": we,
                "data-lifted": z && b.length > 1 && !i,
                "data-x-position": De,
                style: {
                  "--front-toast-height": `${((q = M[0]) == null ? void 0 : q.height) || 0}px`,
                  "--width": `${wP}px`,
                  "--gap": `${m}px`,
                  ...h,
                  ...PP(l, u),
                },
                onBlur: (ee) => {
                  j.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((j.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    j.current ||
                    ((j.current = !0), (A.current = ee.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  K || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              b
                .filter((ee) => (!ee.position && Q === 0) || ee.position === B)
                .map((ee, Ur) => {
                  var En, hr;
                  return L.createElement(TP, {
                    key: ee.id,
                    icons: y,
                    index: Ur,
                    toast: ee,
                    defaultRichColors: d,
                    duration:
                      (En = p == null ? void 0 : p.duration) != null ? En : f,
                    className: p == null ? void 0 : p.className,
                    descriptionClassName:
                      p == null ? void 0 : p.descriptionClassName,
                    invert: n,
                    visibleToasts: x,
                    closeButton:
                      (hr = p == null ? void 0 : p.closeButton) != null
                        ? hr
                        : s,
                    interacting: K,
                    position: B,
                    style: p == null ? void 0 : p.style,
                    unstyled: p == null ? void 0 : p.unstyled,
                    classNames: p == null ? void 0 : p.classNames,
                    cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                    actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                    removeToast: U,
                    toasts: b.filter((Cn) => Cn.position == ee.position),
                    heights: M.filter((Cn) => Cn.position == ee.position),
                    setHeights: N,
                    expandByDefault: i,
                    gap: m,
                    loadingIcon: g,
                    expanded: z,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  });
                }),
            )
          : null;
      }),
    )
  );
});
const RP = ({ ...e }) => {
  const { theme: t = "system" } = eP();
  return S.jsx(kP, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var AP = Gd[" useId ".trim().toString()] || (() => {}),
  MP = 0;
function Lu(e) {
  const [t, n] = v.useState(AP());
  return (
    yn(() => {
      e || n((r) => r ?? String(MP++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const NP = ["top", "right", "bottom", "left"],
  or = Math.min,
  ot = Math.max,
  el = Math.round,
  Xs = Math.floor,
  ir = (e) => ({ x: e, y: e }),
  DP = { left: "right", right: "left", bottom: "top", top: "bottom" },
  LP = { start: "end", end: "start" };
function id(e, t, n) {
  return ot(e, or(t, n));
}
function vn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xn(e) {
  return e.split("-")[0];
}
function Jo(e) {
  return e.split("-")[1];
}
function Hf(e) {
  return e === "x" ? "y" : "x";
}
function Kf(e) {
  return e === "y" ? "height" : "width";
}
function sr(e) {
  return ["top", "bottom"].includes(xn(e)) ? "y" : "x";
}
function Gf(e) {
  return Hf(sr(e));
}
function OP(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jo(e),
    o = Gf(e),
    i = Kf(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (s = tl(s)), [s, tl(s)]);
}
function jP(e) {
  const t = tl(e);
  return [sd(e), t, sd(t)];
}
function sd(e) {
  return e.replace(/start|end/g, (t) => LP[t]);
}
function IP(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function FP(e, t, n, r) {
  const o = Jo(e);
  let i = IP(xn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(sd)))),
    i
  );
}
function tl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => DP[t]);
}
function _P(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function vx(e) {
  return typeof e != "number"
    ? _P(e)
    : { top: e, right: e, bottom: e, left: e };
}
function nl(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function um(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = sr(t),
    s = Gf(t),
    a = Kf(s),
    l = xn(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - o.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Jo(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const VP = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = um(u, r, l),
    f = r,
    h = {},
    x = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: w, fn: m } = a[p],
      {
        x: g,
        y,
        data: E,
        reset: C,
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((c = g ?? c),
      (d = y ?? d),
      (h = { ...h, [w]: { ...h[w], ...E } }),
      C &&
        x <= 50 &&
        (x++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: d } = um(u, f, l))),
        (p = -1)));
  }
  return { x: c, y: d, placement: f, strategy: o, middlewareData: h };
};
async function ts(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = vn(t, e),
    x = vx(h),
    w = a[f ? (d === "floating" ? "reference" : "floating") : d],
    m = nl(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    g =
      d === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = nl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: g,
            offsetParent: y,
            strategy: l,
          })
        : g,
    );
  return {
    top: (m.top - C.top + x.top) / E.y,
    bottom: (C.bottom - m.bottom + x.bottom) / E.y,
    left: (m.left - C.left + x.left) / E.x,
    right: (C.right - m.right + x.right) / E.x,
  };
}
const zP = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = vn(e, t) || {};
      if (u == null) return {};
      const d = vx(c),
        f = { x: n, y: r },
        h = Gf(o),
        x = Kf(h),
        p = await s.getDimensions(u),
        w = h === "y",
        m = w ? "top" : "left",
        g = w ? "bottom" : "right",
        y = w ? "clientHeight" : "clientWidth",
        E = i.reference[x] + i.reference[h] - f[h] - i.floating[x],
        C = f[h] - i.reference[h],
        b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let T = b ? b[y] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(b)))) &&
        (T = a.floating[y] || i.floating[x]);
      const P = E / 2 - C / 2,
        M = T / 2 - p[x] / 2 - 1,
        N = or(d[m], M),
        z = or(d[g], M),
        I = N,
        K = T - p[x] - z,
        O = T / 2 - p[x] / 2 + P,
        Y = id(I, O, K),
        $ =
          !l.arrow &&
          Jo(o) != null &&
          O !== Y &&
          i.reference[x] / 2 - (O < I ? N : z) - p[x] / 2 < 0,
        V = $ ? (O < I ? O - I : O - K) : 0;
      return {
        [h]: f[h] + V,
        data: {
          [h]: Y,
          centerOffset: O - Y - V,
          ...($ && { alignmentOffset: V }),
        },
        reset: $,
      };
    },
  }),
  BP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: p = !0,
              ...w
            } = vn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = xn(o),
            g = sr(a),
            y = xn(a) === a,
            E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = f || (y || !p ? [tl(a)] : jP(a)),
            b = x !== "none";
          !f && b && C.push(...FP(a, p, x, E));
          const T = [a, ...C],
            P = await ts(t, w),
            M = [];
          let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && M.push(P[m]), d)) {
            const O = OP(o, s, E);
            M.push(P[O[0]], P[O[1]]);
          }
          if (
            ((N = [...N, { placement: o, overflows: M }]),
            !M.every((O) => O <= 0))
          ) {
            var z, I;
            const O = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              Y = T[O];
            if (Y)
              return {
                data: { index: O, overflows: N },
                reset: { placement: Y },
              };
            let $ =
              (I = N.filter((V) => V.overflows[0] <= 0).sort(
                (V, k) => V.overflows[1] - k.overflows[1],
              )[0]) == null
                ? void 0
                : I.placement;
            if (!$)
              switch (h) {
                case "bestFit": {
                  var K;
                  const V =
                    (K = N.filter((k) => {
                      if (b) {
                        const A = sr(k.placement);
                        return A === g || A === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((A) => A > 0)
                          .reduce((A, j) => A + j, 0),
                      ])
                      .sort((k, A) => k[1] - A[1])[0]) == null
                      ? void 0
                      : K[0];
                  V && ($ = V);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function cm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function dm(e) {
  return NP.some((t) => e[t] >= 0);
}
const $P = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = vn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await ts(t, { ...o, elementContext: "reference" }),
              s = cm(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: dm(s) },
            };
          }
          case "escaped": {
            const i = await ts(t, { ...o, altBoundary: !0 }),
              s = cm(i, n.floating);
            return { data: { escapedOffsets: s, escaped: dm(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function UP(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = xn(n),
    a = Jo(n),
    l = sr(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = i && l ? -1 : 1,
    d = vn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: x,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof x == "number" && (h = a === "end" ? x * -1 : x),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const WP = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await UP(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  HP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: m, y: g } = w;
                  return { x: m, y: g };
                },
              },
              ...l
            } = vn(e, t),
            u = { x: n, y: r },
            c = await ts(t, l),
            d = sr(xn(o)),
            f = Hf(d);
          let h = u[f],
            x = u[d];
          if (i) {
            const w = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              g = h + c[w],
              y = h - c[m];
            h = id(g, h, y);
          }
          if (s) {
            const w = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              g = x + c[w],
              y = x - c[m];
            x = id(g, x, y);
          }
          const p = a.fn({ ...t, [f]: h, [d]: x });
          return {
            ...p,
            data: { x: p.x - n, y: p.y - r, enabled: { [f]: i, [d]: s } },
          };
        },
      }
    );
  },
  KP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = vn(e, t),
            c = { x: n, y: r },
            d = sr(o),
            f = Hf(d);
          let h = c[f],
            x = c[d];
          const p = vn(a, t),
            w =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (l) {
            const y = f === "y" ? "height" : "width",
              E = i.reference[f] - i.floating[y] + w.mainAxis,
              C = i.reference[f] + i.reference[y] - w.mainAxis;
            h < E ? (h = E) : h > C && (h = C);
          }
          if (u) {
            var m, g;
            const y = f === "y" ? "width" : "height",
              E = ["top", "left"].includes(xn(o)),
              C =
                i.reference[d] -
                i.floating[y] +
                ((E && ((m = s.offset) == null ? void 0 : m[d])) || 0) +
                (E ? 0 : w.crossAxis),
              b =
                i.reference[d] +
                i.reference[y] +
                (E ? 0 : ((g = s.offset) == null ? void 0 : g[d]) || 0) -
                (E ? w.crossAxis : 0);
            x < C ? (x = C) : x > b && (x = b);
          }
          return { [f]: h, [d]: x };
        },
      }
    );
  },
  GP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = vn(e, t),
            c = await ts(t, u),
            d = xn(o),
            f = Jo(o),
            h = sr(o) === "y",
            { width: x, height: p } = i.floating;
          let w, m;
          d === "top" || d === "bottom"
            ? ((w = d),
              (m =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = d), (w = f === "end" ? "top" : "bottom"));
          const g = p - c.top - c.bottom,
            y = x - c.left - c.right,
            E = or(p - c[w], g),
            C = or(x - c[m], y),
            b = !t.middlewareData.shift;
          let T = E,
            P = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = g),
            b && !f)
          ) {
            const N = ot(c.left, 0),
              z = ot(c.right, 0),
              I = ot(c.top, 0),
              K = ot(c.bottom, 0);
            h
              ? (P = x - 2 * (N !== 0 || z !== 0 ? N + z : ot(c.left, c.right)))
              : (T =
                  p - 2 * (I !== 0 || K !== 0 ? I + K : ot(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: T });
          const M = await s.getDimensions(a.floating);
          return x !== M.width || p !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function jl() {
  return typeof window < "u";
}
function ei(e) {
  return xx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function nn(e) {
  var t;
  return (t = (xx(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function xx(e) {
  return jl() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function Vt(e) {
  return jl() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function en(e) {
  return jl() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function fm(e) {
  return !jl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function Ss(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = zt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function YP(e) {
  return ["table", "td", "th"].includes(ei(e));
}
function Il(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Yf(e) {
  const t = Qf(),
    n = Vt(e) ? zt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function QP(e) {
  let t = ar(e);
  for (; en(t) && !Wo(t); ) {
    if (Yf(t)) return t;
    if (Il(t)) return null;
    t = ar(t);
  }
  return null;
}
function Qf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wo(e) {
  return ["html", "body", "#document"].includes(ei(e));
}
function zt(e) {
  return at(e).getComputedStyle(e);
}
function Fl(e) {
  return Vt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ar(e) {
  if (ei(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (fm(e) && e.host) || nn(e);
  return fm(t) ? t.host : t;
}
function wx(e) {
  const t = ar(e);
  return Wo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : en(t) && Ss(t)
      ? t
      : wx(t);
}
function ns(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = wx(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = at(o);
  if (i) {
    const a = ad(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Ss(o) ? o : [],
      a && n ? ns(a) : [],
    );
  }
  return t.concat(o, ns(o, [], n));
}
function ad(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sx(e) {
  const t = zt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = en(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = el(n) !== i || el(r) !== s;
  return (a && ((n = i), (r = s)), { width: n, height: r, $: a });
}
function Xf(e) {
  return Vt(e) ? e : e.contextElement;
}
function To(e) {
  const t = Xf(e);
  if (!en(t)) return ir(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Sx(t);
  let s = (i ? el(n.width) : n.width) / r,
    a = (i ? el(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const XP = ir(0);
function Ex(e) {
  const t = at(e);
  return !Qf() || !t.visualViewport
    ? XP
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function qP(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t);
}
function Vr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    i = Xf(e);
  let s = ir(1);
  t && (r ? Vt(r) && (s = To(r)) : (s = To(e)));
  const a = qP(i, n, r) ? Ex(i) : ir(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    c = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const f = at(i),
      h = r && Vt(r) ? at(r) : r;
    let x = f,
      p = ad(x);
    for (; p && r && h !== x; ) {
      const w = To(p),
        m = p.getBoundingClientRect(),
        g = zt(p),
        y = m.left + (p.clientLeft + parseFloat(g.paddingLeft)) * w.x,
        E = m.top + (p.clientTop + parseFloat(g.paddingTop)) * w.y;
      ((l *= w.x),
        (u *= w.y),
        (c *= w.x),
        (d *= w.y),
        (l += y),
        (u += E),
        (x = at(p)),
        (p = ad(x)));
    }
  }
  return nl({ width: c, height: d, x: l, y: u });
}
function ZP(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = nn(r),
    a = t ? Il(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = ir(1);
  const c = ir(0),
    d = en(r);
  if (
    (d || (!d && !i)) &&
    ((ei(r) !== "body" || Ss(s)) && (l = Fl(r)), en(r))
  ) {
    const f = Vr(r);
    ((u = To(r)), (c.x = f.x + r.clientLeft), (c.y = f.y + r.clientTop));
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y,
  };
}
function JP(e) {
  return Array.from(e.getClientRects());
}
function ld(e, t) {
  const n = Fl(e).scrollLeft;
  return t ? t.left + n : Vr(nn(e)).left + n;
}
function ek(e) {
  const t = nn(e),
    n = Fl(e),
    r = e.ownerDocument.body,
    o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ld(e);
  const a = -n.scrollTop;
  return (
    zt(r).direction === "rtl" && (s += ot(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function tk(e, t) {
  const n = at(e),
    r = nn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    const u = Qf();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function nk(e, t) {
  const n = Vr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = en(e) ? To(e) : ir(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function hm(e, t, n) {
  let r;
  if (t === "viewport") r = tk(e, n);
  else if (t === "document") r = ek(nn(e));
  else if (Vt(t)) r = nk(t, n);
  else {
    const o = Ex(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return nl(r);
}
function Cx(e, t) {
  const n = ar(e);
  return n === t || !Vt(n) || Wo(n)
    ? !1
    : zt(n).position === "fixed" || Cx(n, t);
}
function rk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ns(e, [], !1).filter((a) => Vt(a) && ei(a) !== "body"),
    o = null;
  const i = zt(e).position === "fixed";
  let s = i ? ar(e) : e;
  for (; Vt(s) && !Wo(s); ) {
    const a = zt(s),
      l = Yf(s);
    (!l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ss(s) && !l && Cx(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = a),
      (s = ar(s)));
  }
  return (t.set(e, r), r);
}
function ok(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Il(t)
          ? []
          : rk(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (u, c) => {
        const d = hm(t, c, o);
        return (
          (u.top = ot(d.top, u.top)),
          (u.right = or(d.right, u.right)),
          (u.bottom = or(d.bottom, u.bottom)),
          (u.left = ot(d.left, u.left)),
          u
        );
      },
      hm(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ik(e) {
  const { width: t, height: n } = Sx(e);
  return { width: t, height: n };
}
function sk(e, t, n) {
  const r = en(t),
    o = nn(t),
    i = n === "fixed",
    s = Vr(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = ir(0);
  if (r || (!r && !i))
    if (((ei(t) !== "body" || Ss(o)) && (a = Fl(t)), r)) {
      const h = Vr(t, !0, i, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else o && (l.x = ld(o));
  let u = 0,
    c = 0;
  if (o && !r && !i) {
    const h = o.getBoundingClientRect();
    ((c = h.top + a.scrollTop), (u = h.left + a.scrollLeft - ld(o, h)));
  }
  const d = s.left + a.scrollLeft - l.x - u,
    f = s.top + a.scrollTop - l.y - c;
  return { x: d, y: f, width: s.width, height: s.height };
}
function Ou(e) {
  return zt(e).position === "static";
}
function pm(e, t) {
  if (!en(e) || zt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (nn(e) === n && (n = n.ownerDocument.body), n);
}
function bx(e, t) {
  const n = at(e);
  if (Il(e)) return n;
  if (!en(e)) {
    let o = ar(e);
    for (; o && !Wo(o); ) {
      if (Vt(o) && !Ou(o)) return o;
      o = ar(o);
    }
    return n;
  }
  let r = pm(e, t);
  for (; r && YP(r) && Ou(r); ) r = pm(r, t);
  return r && Wo(r) && Ou(r) && !Yf(r) ? n : r || QP(e) || n;
}
const ak = async function (e) {
  const t = this.getOffsetParent || bx,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: sk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function lk(e) {
  return zt(e).direction === "rtl";
}
const uk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ZP,
  getDocumentElement: nn,
  getClippingRect: ok,
  getOffsetParent: bx,
  getElementRects: ak,
  getClientRects: JP,
  getDimensions: ik,
  getScale: To,
  isElement: Vt,
  isRTL: lk,
};
function ck(e, t) {
  let n = null,
    r;
  const o = nn(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function s(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const { left: u, top: c, width: d, height: f } = e.getBoundingClientRect();
    if ((a || t(), !d || !f)) return;
    const h = Xs(c),
      x = Xs(o.clientWidth - (u + d)),
      p = Xs(o.clientHeight - (c + f)),
      w = Xs(u),
      g = {
        rootMargin: -h + "px " + -x + "px " + -p + "px " + -w + "px",
        threshold: ot(0, or(1, l)) || 1,
      };
    let y = !0;
    function E(C) {
      const b = C[0].intersectionRatio;
      if (b !== l) {
        if (!y) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(E, { ...g, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, g);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function dk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Xf(e),
    c = o || i ? [...(u ? ns(u) : []), ...ns(t)] : [];
  c.forEach((m) => {
    (o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n));
  });
  const d = u && a ? ck(u, n) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((m) => {
      let [g] = m;
      (g &&
        g.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n());
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let x,
    p = l ? Vr(e) : null;
  l && w();
  function w() {
    const m = Vr(e);
    (p &&
      (m.x !== p.x ||
        m.y !== p.y ||
        m.width !== p.width ||
        m.height !== p.height) &&
      n(),
      (p = m),
      (x = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var m;
      (c.forEach((g) => {
        (o && g.removeEventListener("scroll", n),
          i && g.removeEventListener("resize", n));
      }),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        (h = null),
        l && cancelAnimationFrame(x));
    }
  );
}
const fk = WP,
  hk = HP,
  pk = BP,
  mk = GP,
  gk = $P,
  mm = zP,
  yk = KP,
  vk = (e, t, n) => {
    const r = new Map(),
      o = { platform: uk, ...n },
      i = { ...o.platform, _c: r };
    return VP(e, t, { ...o, platform: i });
  };
var wa = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function rl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!rl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !rl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Tx(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gm(e, t) {
  const n = Tx(e);
  return Math.round(t * n) / n;
}
function ju(e) {
  const t = v.useRef(e);
  return (
    wa(() => {
      t.current = e;
    }),
    t
  );
}
function xk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = v.useState(r);
  rl(f, r) || h(r);
  const [x, p] = v.useState(null),
    [w, m] = v.useState(null),
    g = v.useCallback((k) => {
      k !== b.current && ((b.current = k), p(k));
    }, []),
    y = v.useCallback((k) => {
      k !== T.current && ((T.current = k), m(k));
    }, []),
    E = i || x,
    C = s || w,
    b = v.useRef(null),
    T = v.useRef(null),
    P = v.useRef(c),
    M = l != null,
    N = ju(l),
    z = ju(o),
    I = ju(u),
    K = v.useCallback(() => {
      if (!b.current || !T.current) return;
      const k = { placement: t, strategy: n, middleware: f };
      (z.current && (k.platform = z.current),
        vk(b.current, T.current, k).then((A) => {
          const j = { ...A, isPositioned: I.current !== !1 };
          O.current &&
            !rl(P.current, j) &&
            ((P.current = j),
            ys.flushSync(() => {
              d(j);
            }));
        }));
    }, [f, t, n, z, I]);
  wa(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const O = v.useRef(!1);
  (wa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    wa(() => {
      if ((E && (b.current = E), C && (T.current = C), E && C)) {
        if (N.current) return N.current(E, C, K);
        K();
      }
    }, [E, C, K, N, M]));
  const Y = v.useMemo(
      () => ({ reference: b, floating: T, setReference: g, setFloating: y }),
      [g, y],
    ),
    $ = v.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    V = v.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!$.floating) return k;
      const A = gm($.floating, c.x),
        j = gm($.floating, c.y);
      return a
        ? {
            ...k,
            transform: "translate(" + A + "px, " + j + "px)",
            ...(Tx($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: j };
    }, [n, a, $.floating, c.x, c.y]);
  return v.useMemo(
    () => ({ ...c, update: K, refs: Y, elements: $, floatingStyles: V }),
    [c, K, Y, $, V],
  );
}
const wk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? mm({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? mm({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  Sk = (e, t) => ({ ...fk(e), options: [e, t] }),
  Ek = (e, t) => ({ ...hk(e), options: [e, t] }),
  Ck = (e, t) => ({ ...yk(e), options: [e, t] }),
  bk = (e, t) => ({ ...pk(e), options: [e, t] }),
  Tk = (e, t) => ({ ...mk(e), options: [e, t] }),
  Pk = (e, t) => ({ ...gk(e), options: [e, t] }),
  kk = (e, t) => ({ ...wk(e), options: [e, t] });
var Rk = "Arrow",
  Px = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return S.jsx(xe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : S.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Px.displayName = Rk;
var Ak = Px;
function Mk(e) {
  const [t, n] = v.useState(void 0);
  return (
    yn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((s = u.inlineSize), (a = u.blockSize));
          } else ((s = e.offsetWidth), (a = e.offsetHeight));
          n({ width: s, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var kx = "Popper",
  [Rx, Ax] = vs(kx),
  [_O, Mx] = Rx(kx),
  Nx = "PopperAnchor",
  Dx = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Mx(Nx, n),
      s = v.useRef(null),
      a = Ke(t, s);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : S.jsx(xe.div, { ...o, ref: a })
    );
  });
Dx.displayName = Nx;
var qf = "PopperContent",
  [Nk, Dk] = Rx(qf),
  Lx = v.forwardRef((e, t) => {
    var ee, Ur, En, hr, Cn, Wr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: x,
        ...p
      } = e,
      w = Mx(qf, n),
      [m, g] = v.useState(null),
      y = Ke(t, (bn) => g(bn)),
      [E, C] = v.useState(null),
      b = Mk(E),
      T = (b == null ? void 0 : b.width) ?? 0,
      P = (b == null ? void 0 : b.height) ?? 0,
      M = r + (i !== "center" ? "-" + i : ""),
      N =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      I = z.length > 0,
      K = { padding: N, boundary: z.filter(Ok), altBoundary: I },
      {
        refs: O,
        floatingStyles: Y,
        placement: $,
        isPositioned: V,
        middlewareData: k,
      } = xk({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...bn) =>
          dk(...bn, { animationFrame: h === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          Sk({ mainAxis: o + P, alignmentAxis: s }),
          l &&
            Ek({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? Ck() : void 0,
              ...K,
            }),
          l && bk({ ...K }),
          Tk({
            ...K,
            apply: ({
              elements: bn,
              rects: Ps,
              availableWidth: Zl,
              availableHeight: ks,
            }) => {
              const { width: Jl, height: oi } = Ps.reference,
                Hr = bn.floating.style;
              (Hr.setProperty("--radix-popper-available-width", `${Zl}px`),
                Hr.setProperty("--radix-popper-available-height", `${ks}px`),
                Hr.setProperty("--radix-popper-anchor-width", `${Jl}px`),
                Hr.setProperty("--radix-popper-anchor-height", `${oi}px`));
            },
          }),
          E && kk({ element: E, padding: a }),
          jk({ arrowWidth: T, arrowHeight: P }),
          f && Pk({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [A, j] = Ix($),
      U = Jt(x);
    yn(() => {
      V && (U == null || U());
    }, [V, U]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x,
      Q = (Ur = k.arrow) == null ? void 0 : Ur.y,
      q = ((En = k.arrow) == null ? void 0 : En.centerOffset) !== 0,
      [we, De] = v.useState();
    return (
      yn(() => {
        m && De(window.getComputedStyle(m).zIndex);
      }, [m]),
      S.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: V ? Y.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: we,
          "--radix-popper-transform-origin": [
            (hr = k.transformOrigin) == null ? void 0 : hr.x,
            (Cn = k.transformOrigin) == null ? void 0 : Cn.y,
          ].join(" "),
          ...(((Wr = k.hide) == null ? void 0 : Wr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: S.jsx(Nk, {
          scope: n,
          placedSide: A,
          onArrowChange: C,
          arrowX: B,
          arrowY: Q,
          shouldHideArrow: q,
          children: S.jsx(xe.div, {
            "data-side": A,
            "data-align": j,
            ...p,
            ref: y,
            style: { ...p.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Lx.displayName = qf;
var Ox = "PopperArrow",
  Lk = { top: "bottom", right: "left", bottom: "top", left: "right" },
  jx = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Dk(Ox, r),
      s = Lk[i.placedSide];
    return S.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: S.jsx(Ak, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
jx.displayName = Ox;
function Ok(e) {
  return e !== null;
}
var jk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, m, g;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = Ix(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      h = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
    let x = "",
      p = "";
    return (
      u === "bottom"
        ? ((x = s ? d : `${f}px`), (p = `${-l}px`))
        : u === "top"
          ? ((x = s ? d : `${f}px`), (p = `${r.floating.height + l}px`))
          : u === "right"
            ? ((x = `${-l}px`), (p = s ? d : `${h}px`))
            : u === "left" &&
              ((x = `${r.floating.width + l}px`), (p = s ? d : `${h}px`)),
      { data: { x, y: p } }
    );
  },
});
function Ix(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ik = Dx,
  Fk = Lx,
  _k = jx,
  [_l, VO] = vs("Tooltip", [Ax]),
  Zf = Ax(),
  Fx = "TooltipProvider",
  Vk = 700,
  ym = "tooltip.open",
  [zk, _x] = _l(Fx),
  Vx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Vk,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = v.useRef(!0),
      a = v.useRef(!1),
      l = v.useRef(0);
    return (
      v.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      S.jsx(zk, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          (window.clearTimeout(l.current), (s.current = !1));
        }, []),
        onClose: v.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: v.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Vx.displayName = Fx;
var zx = "Tooltip",
  [zO, Vl] = _l(zx),
  ud = "TooltipTrigger",
  Bk = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Vl(ud, n),
      i = _x(ud, n),
      s = Zf(n),
      a = v.useRef(null),
      l = Ke(t, a, o.onTriggerChange),
      u = v.useRef(!1),
      c = v.useRef(!1),
      d = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      S.jsx(Ik, {
        asChild: !0,
        ...s,
        children: S.jsx(xe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: ce(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ce(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: ce(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: ce(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ce(e.onBlur, o.onClose),
          onClick: ce(e.onClick, o.onClose),
        }),
      })
    );
  });
Bk.displayName = ud;
var $k = "TooltipPortal",
  [BO, Uk] = _l($k, { forceMount: void 0 }),
  Ho = "TooltipContent",
  Bx = v.forwardRef((e, t) => {
    const n = Uk(Ho, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Vl(Ho, e.__scopeTooltip);
    return S.jsx(qo, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? S.jsx($x, { side: o, ...i, ref: t })
        : S.jsx(Wk, { side: o, ...i, ref: t }),
    });
  }),
  Wk = v.forwardRef((e, t) => {
    const n = Vl(Ho, e.__scopeTooltip),
      r = _x(Ho, e.__scopeTooltip),
      o = v.useRef(null),
      i = Ke(t, o),
      [s, a] = v.useState(null),
      { trigger: l, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      f = v.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      h = v.useCallback(
        (x, p) => {
          const w = x.currentTarget,
            m = { x: x.clientX, y: x.clientY },
            g = Qk(m, w.getBoundingClientRect()),
            y = Xk(m, g),
            E = qk(p.getBoundingClientRect()),
            C = Jk([...y, ...E]);
          (a(C), d(!0));
        },
        [d],
      );
    return (
      v.useEffect(() => () => f(), [f]),
      v.useEffect(() => {
        if (l && c) {
          const x = (w) => h(w, c),
            p = (w) => h(w, l);
          return (
            l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", p),
            () => {
              (l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", p));
            }
          );
        }
      }, [l, c, h, f]),
      v.useEffect(() => {
        if (s) {
          const x = (p) => {
            const w = p.target,
              m = { x: p.clientX, y: p.clientY },
              g =
                (l == null ? void 0 : l.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              y = !Zk(m, s);
            g ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [l, c, s, u, f]),
      S.jsx($x, { ...e, ref: i })
    );
  }),
  [Hk, Kk] = _l(zx, { isInside: !1 }),
  Gk = Sb("TooltipContent"),
  $x = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = Vl(Ho, n),
      u = Zf(n),
      { onClose: c } = l;
    return (
      v.useEffect(
        () => (
          document.addEventListener(ym, c),
          () => document.removeEventListener(ym, c)
        ),
        [c],
      ),
      v.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      S.jsx(Dl, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: S.jsxs(Fk, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            S.jsx(Gk, { children: r }),
            S.jsx(Hk, {
              scope: n,
              isInside: !0,
              children: S.jsx(Hb, {
                id: l.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Bx.displayName = Ho;
var Ux = "TooltipArrow",
  Yk = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Zf(n);
    return Kk(Ux, n).isInside ? null : S.jsx(_k, { ...o, ...r, ref: t });
  });
Yk.displayName = Ux;
function Qk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Xk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function qk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Zk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i],
      l = t[s],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (o = !o);
  }
  return o;
}
function Jk(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    eR(t)
  );
}
function eR(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var tR = Vx,
  Wx = Bx;
const nR = tR,
  rR = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    S.jsx(Wx, {
      ref: r,
      sideOffset: t,
      className: Qe(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
rR.displayName = Wx.displayName;
var zl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Bl = typeof window > "u" || "Deno" in globalThis;
function Mt() {}
function oR(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function iR(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function sR(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function cd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function aR(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vm(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Jf(s, t.options)) return !1;
    } else if (!os(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function xm(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (rs(t.options.mutationKey) !== rs(i)) return !1;
    } else if (!os(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Jf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || rs)(e);
}
function rs(e) {
  return JSON.stringify(e, (t, n) =>
    dd(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function os(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => os(e[n], t[n]))
        : !1;
}
function Hx(e, t) {
  if (e === t) return e;
  const n = wm(e) && wm(t);
  if (n || (dd(e) && dd(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : i[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = Hx(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return o === s && u === o ? e : a;
  }
  return t;
}
function wm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function dd(e) {
  if (!Sm(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Sm(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Sm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function lR(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function uR(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Hx(e, t)
      : t;
}
function cR(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function dR(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var eh = Symbol();
function Kx(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === eh
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Tr,
  Vn,
  Ao,
  ay,
  fR =
    ((ay = class extends zl {
      constructor() {
        super();
        J(this, Tr);
        J(this, Vn);
        J(this, Ao);
        H(this, Ao, (t) => {
          if (!Bl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Vn) || this.setEventListener(R(this, Ao));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, Vn)) == null || t.call(this), H(this, Vn, void 0));
      }
      setEventListener(t) {
        var n;
        (H(this, Ao, t),
          (n = R(this, Vn)) == null || n.call(this),
          H(
            this,
            Vn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        R(this, Tr) !== t && (H(this, Tr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof R(this, Tr) == "boolean"
          ? R(this, Tr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Tr = new WeakMap()),
    (Vn = new WeakMap()),
    (Ao = new WeakMap()),
    ay),
  Gx = new fR(),
  Mo,
  zn,
  No,
  ly,
  hR =
    ((ly = class extends zl {
      constructor() {
        super();
        J(this, Mo, !0);
        J(this, zn);
        J(this, No);
        H(this, No, (t) => {
          if (!Bl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, zn) || this.setEventListener(R(this, No));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, zn)) == null || t.call(this), H(this, zn, void 0));
      }
      setEventListener(t) {
        var n;
        (H(this, No, t),
          (n = R(this, zn)) == null || n.call(this),
          H(this, zn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        R(this, Mo) !== t &&
          (H(this, Mo, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, Mo);
      }
    }),
    (Mo = new WeakMap()),
    (zn = new WeakMap()),
    (No = new WeakMap()),
    ly),
  ol = new hR();
function pR() {
  let e, t;
  const n = new Promise((o, i) => {
    ((e = o), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function mR(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Yx(e) {
  return (e ?? "online") === "online" ? ol.isOnline() : !0;
}
var Qx = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Iu(e) {
  return e instanceof Qx;
}
function Xx(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = pR(),
    s = (p) => {
      var w;
      r || (f(new Qx(p)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Gx.isFocused() &&
      (e.networkMode === "always" || ol.isOnline()) &&
      e.canRun(),
    c = () => Yx(e.networkMode) && e.canRun(),
    d = (p) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, p),
        o == null || o(),
        i.resolve(p));
    },
    f = (p) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, p),
        o == null || o(),
        i.reject(p));
    },
    h = () =>
      new Promise((p) => {
        var w;
        ((o = (m) => {
          (r || u()) && p(m);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var p;
        ((o = void 0), r || (p = e.onContinue) == null || p.call(e));
      }),
    x = () => {
      if (r) return;
      let p;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        p = w ?? e.fn();
      } catch (m) {
        p = Promise.reject(m);
      }
      Promise.resolve(p)
        .then(d)
        .catch((m) => {
          var b;
          if (r) return;
          const g = e.retry ?? (Bl ? 0 : 3),
            y = e.retryDelay ?? mR,
            E = typeof y == "function" ? y(n, m) : y,
            C =
              g === !0 ||
              (typeof g == "number" && n < g) ||
              (typeof g == "function" && g(n, m));
          if (t || !C) {
            f(m);
            return;
          }
          (n++,
            (b = e.onFail) == null || b.call(e, n, m),
            lR(E)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(m) : x();
              }));
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? x() : h().then(x), i),
  };
}
var gR = (e) => setTimeout(e, 0);
function yR() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = gR;
  const i = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      ((e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || s());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var $e = yR(),
  Pr,
  uy,
  qx =
    ((uy = class {
      constructor() {
        J(this, Pr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          iR(this.gcTime) &&
            H(
              this,
              Pr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Bl ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        R(this, Pr) && (clearTimeout(R(this, Pr)), H(this, Pr, void 0));
      }
    }),
    (Pr = new WeakMap()),
    uy),
  Do,
  kr,
  ft,
  Rr,
  Ie,
  cs,
  Ar,
  Nt,
  on,
  cy,
  vR =
    ((cy = class extends qx {
      constructor(t) {
        super();
        J(this, Nt);
        J(this, Do);
        J(this, kr);
        J(this, ft);
        J(this, Rr);
        J(this, Ie);
        J(this, cs);
        J(this, Ar);
        (H(this, Ar, !1),
          H(this, cs, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, Rr, t.client),
          H(this, ft, R(this, Rr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, Do, wR(this.options)),
          (this.state = t.state ?? R(this, Do)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = R(this, Ie)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...R(this, cs), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          R(this, ft).remove(this);
      }
      setData(t, n) {
        const r = uR(this.state.data, t, this.options);
        return (
          Le(this, Nt, on).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Le(this, Nt, on).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = R(this, Ie)) == null ? void 0 : r.promise;
        return (
          (o = R(this, Ie)) == null || o.cancel(t),
          n ? n.then(Mt).catch(Mt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(R(this, Do)));
      }
      isActive() {
        return this.observers.some((t) => aR(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === eh ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => cd(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !sR(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ie)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ie)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          R(this, ft).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (R(this, Ie) &&
              (R(this, Ar)
                ? R(this, Ie).cancel({ revert: !0 })
                : R(this, Ie).cancelRetry()),
            this.scheduleGc()),
          R(this, ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, Nt, on).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Ie))
            return (R(this, Ie).continueRetry(), R(this, Ie).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (H(this, Ar, !0), r.signal),
            });
          },
          i = () => {
            const f = Kx(this.options, n),
              x = (() => {
                const p = {
                  client: R(this, Rr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(p), p);
              })();
            return (
              H(this, Ar, !1),
              this.options.persister ? this.options.persister(f, x, this) : f(x)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: R(this, Rr),
              state: this.state,
              fetchFn: i,
            };
            return (o(f), f);
          })();
        ((u = this.options.behavior) == null || u.onFetch(a, this),
          H(this, kr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Le(this, Nt, on).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            }));
        const l = (f) => {
          var h, x, p, w;
          ((Iu(f) && f.silent) ||
            Le(this, Nt, on).call(this, { type: "error", error: f }),
            Iu(f) ||
              ((x = (h = R(this, ft).config).onError) == null ||
                x.call(h, f, this),
              (w = (p = R(this, ft).config).onSettled) == null ||
                w.call(p, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          H(
            this,
            Ie,
            Xx({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, x, p, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (m) {
                  l(m);
                  return;
                }
                ((x = (h = R(this, ft).config).onSuccess) == null ||
                  x.call(h, f, this),
                  (w = (p = R(this, ft).config).onSettled) == null ||
                    w.call(p, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, h) => {
                Le(this, Nt, on).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Le(this, Nt, on).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, Nt, on).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          R(this, Ie).start()
        );
      }
    }),
    (Do = new WeakMap()),
    (kr = new WeakMap()),
    (ft = new WeakMap()),
    (Rr = new WeakMap()),
    (Ie = new WeakMap()),
    (cs = new WeakMap()),
    (Ar = new WeakMap()),
    (Nt = new WeakSet()),
    (on = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...xR(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              H(this, kr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return Iu(o) && o.revert && R(this, kr)
              ? { ...R(this, kr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        $e.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, ft).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    cy);
function xR(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yx(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function wR(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ht,
  dy,
  SR =
    ((dy = class extends zl {
      constructor(t = {}) {
        super();
        J(this, Ht);
        ((this.config = t), H(this, Ht, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Jf(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new vR({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        R(this, Ht).has(t.queryHash) ||
          (R(this, Ht).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = R(this, Ht).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && R(this, Ht).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Ht).get(t);
      }
      getAll() {
        return [...R(this, Ht).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => vm(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => vm(t, r)) : n;
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ht = new WeakMap()),
    dy),
  Kt,
  ze,
  Mr,
  Gt,
  Nn,
  fy,
  ER =
    ((fy = class extends qx {
      constructor(t) {
        super();
        J(this, Gt);
        J(this, Kt);
        J(this, ze);
        J(this, Mr);
        ((this.mutationId = t.mutationId),
          H(this, ze, t.mutationCache),
          H(this, Kt, []),
          (this.state = t.state || CR()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, Kt).includes(t) ||
          (R(this, Kt).push(t),
          this.clearGcTimeout(),
          R(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (H(
          this,
          Kt,
          R(this, Kt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          R(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        R(this, Kt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : R(this, ze).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = R(this, Mr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, a, l, u, c, d, f, h, x, p, w, m, g, y, E, C, b, T, P;
        const n = () => {
          Le(this, Gt, Nn).call(this, { type: "continue" });
        };
        H(
          this,
          Mr,
          Xx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, N) => {
              Le(this, Gt, Nn).call(this, {
                type: "failed",
                failureCount: M,
                error: N,
              });
            },
            onPause: () => {
              Le(this, Gt, Nn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, ze).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          o = !R(this, Mr).canStart();
        try {
          if (r) n();
          else {
            (Le(this, Gt, Nn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = R(this, ze).config).onMutate) == null
                ? void 0
                : s.call(i, t, this)));
            const N = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            N !== this.state.context &&
              Le(this, Gt, Nn).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: o,
              });
          }
          const M = await R(this, Mr).start();
          return (
            await ((c = (u = R(this, ze).config).onSuccess) == null
              ? void 0
              : c.call(u, M, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, M, t, this.state.context)),
            await ((x = (h = R(this, ze).config).onSettled) == null
              ? void 0
              : x.call(
                  h,
                  M,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((w = (p = this.options).onSettled) == null
              ? void 0
              : w.call(p, M, null, t, this.state.context)),
            Le(this, Gt, Nn).call(this, { type: "success", data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              await ((g = (m = R(this, ze).config).onError) == null
                ? void 0
                : g.call(m, M, t, this.state.context, this)),
              await ((E = (y = this.options).onError) == null
                ? void 0
                : E.call(y, M, t, this.state.context)),
              await ((b = (C = R(this, ze).config).onSettled) == null
                ? void 0
                : b.call(
                    C,
                    void 0,
                    M,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((P = (T = this.options).onSettled) == null
                ? void 0
                : P.call(T, void 0, M, t, this.state.context)),
              M
            );
          } finally {
            Le(this, Gt, Nn).call(this, { type: "error", error: M });
          }
        } finally {
          R(this, ze).runNext(this);
        }
      }
    }),
    (Kt = new WeakMap()),
    (ze = new WeakMap()),
    (Mr = new WeakMap()),
    (Gt = new WeakSet()),
    (Nn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        $e.batch(() => {
          (R(this, Kt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, ze).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    fy);
function CR() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var ln,
  Dt,
  ds,
  hy,
  bR =
    ((hy = class extends zl {
      constructor(t = {}) {
        super();
        J(this, ln);
        J(this, Dt);
        J(this, ds);
        ((this.config = t),
          H(this, ln, new Set()),
          H(this, Dt, new Map()),
          H(this, ds, 0));
      }
      build(t, n, r) {
        const o = new ER({
          mutationCache: this,
          mutationId: ++As(this, ds)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        R(this, ln).add(t);
        const n = qs(t);
        if (typeof n == "string") {
          const r = R(this, Dt).get(n);
          r ? r.push(t) : R(this, Dt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (R(this, ln).delete(t)) {
          const n = qs(t);
          if (typeof n == "string") {
            const r = R(this, Dt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && R(this, Dt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = qs(t);
        if (typeof n == "string") {
          const r = R(this, Dt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = qs(t);
        if (typeof n == "string") {
          const o =
            (r = R(this, Dt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        $e.batch(() => {
          (R(this, ln).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            R(this, ln).clear(),
            R(this, Dt).clear());
        });
      }
      getAll() {
        return Array.from(R(this, ln));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => xm(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => xm(t, n));
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return $e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Mt))),
        );
      }
    }),
    (ln = new WeakMap()),
    (Dt = new WeakMap()),
    (ds = new WeakMap()),
    hy);
function qs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Em(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, x;
      const r = t.options,
        o =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let p = !1;
        const w = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (p = !0)
                  : t.signal.addEventListener("abort", () => {
                      p = !0;
                    }),
                t.signal
              ),
            });
          },
          m = Kx(t.options, t.fetchOptions),
          g = async (y, E, C) => {
            if (p) return Promise.reject();
            if (E == null && y.pages.length) return Promise.resolve(y);
            const T = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: E,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(z), z);
              })(),
              P = await m(T),
              { maxPages: M } = t.options,
              N = C ? dR : cR;
            return {
              pages: N(y.pages, P, M),
              pageParams: N(y.pageParams, E, M),
            };
          };
        if (o && i.length) {
          const y = o === "backward",
            E = y ? TR : Cm,
            C = { pages: i, pageParams: s },
            b = E(r, C);
          a = await g(C, b, y);
        } else {
          const y = e ?? i.length;
          do {
            const E = l === 0 ? (s[0] ?? r.initialPageParam) : Cm(r, a);
            if (l > 0 && E == null) break;
            ((a = await g(a, E)), l++);
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var p, w;
            return (w = (p = t.options).persister) == null
              ? void 0
              : w.call(
                  p,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Cm(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function TR(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ge,
  Bn,
  $n,
  Lo,
  Oo,
  Un,
  jo,
  Io,
  py,
  PR =
    ((py = class {
      constructor(e = {}) {
        J(this, ge);
        J(this, Bn);
        J(this, $n);
        J(this, Lo);
        J(this, Oo);
        J(this, Un);
        J(this, jo);
        J(this, Io);
        (H(this, ge, e.queryCache || new SR()),
          H(this, Bn, e.mutationCache || new bR()),
          H(this, $n, e.defaultOptions || {}),
          H(this, Lo, new Map()),
          H(this, Oo, new Map()),
          H(this, Un, 0));
      }
      mount() {
        (As(this, Un)._++,
          R(this, Un) === 1 &&
            (H(
              this,
              jo,
              Gx.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onFocus());
              }),
            ),
            H(
              this,
              Io,
              ol.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (As(this, Un)._--,
          R(this, Un) === 0 &&
            ((e = R(this, jo)) == null || e.call(this),
            H(this, jo, void 0),
            (t = R(this, Io)) == null || t.call(this),
            H(this, Io, void 0)));
      }
      isFetching(e) {
        return R(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return R(this, Bn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = R(this, ge).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(cd(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return R(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = R(this, ge).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = oR(t, i);
        if (s !== void 0)
          return R(this, ge)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return $e.batch(() =>
          R(this, ge)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = R(this, ge);
        $e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, ge);
        return $e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = $e.batch(() =>
            R(this, ge)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(Mt).catch(Mt);
      }
      invalidateQueries(e, t = {}) {
        return $e.batch(
          () => (
            R(this, ge)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = $e.batch(() =>
            R(this, ge)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Mt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(Mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ge).build(this, t);
        return n.isStaleByTime(cd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Mt).catch(Mt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Em(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Mt).catch(Mt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Em(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return ol.isOnline()
          ? R(this, Bn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return R(this, ge);
      }
      getMutationCache() {
        return R(this, Bn);
      }
      getDefaultOptions() {
        return R(this, $n);
      }
      setDefaultOptions(e) {
        H(this, $n, e);
      }
      setQueryDefaults(e, t) {
        R(this, Lo).set(rs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, Lo).values()],
          n = {};
        return (
          t.forEach((r) => {
            os(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, Oo).set(rs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, Oo).values()],
          n = {};
        return (
          t.forEach((r) => {
            os(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...R(this, $n).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Jf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === eh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, $n).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (R(this, ge).clear(), R(this, Bn).clear());
      }
    }),
    (ge = new WeakMap()),
    (Bn = new WeakMap()),
    ($n = new WeakMap()),
    (Lo = new WeakMap()),
    (Oo = new WeakMap()),
    (Un = new WeakMap()),
    (jo = new WeakMap()),
    (Io = new WeakMap()),
    py),
  kR = v.createContext(void 0),
  RR = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    S.jsx(kR.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
var Kn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Kn || (Kn = {}));
const bm = "popstate";
function AR(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return fd(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Jx(o);
  }
  return NR(t, n, null, e);
}
function nt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Zx(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function MR() {
  return Math.random().toString(36).substr(2, 8);
}
function Tm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    il(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $l(t) : t,
      { state: n, key: (t && t.key) || r || MR() },
    )
  );
}
function Jx(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function $l(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function NR(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Kn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(il({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Kn.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    ((u = w), l && l({ action: a, location: p.location, delta: m }));
  }
  function f(w, m) {
    a = Kn.Push;
    let g = fd(p.location, w, m);
    u = c() + 1;
    let y = Tm(g, u),
      E = p.createHref(g);
    try {
      s.pushState(y, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(E);
    }
    i && l && l({ action: a, location: p.location, delta: 1 });
  }
  function h(w, m) {
    a = Kn.Replace;
    let g = fd(p.location, w, m);
    u = c();
    let y = Tm(g, u),
      E = p.createHref(g);
    (s.replaceState(y, "", E),
      i && l && l({ action: a, location: p.location, delta: 0 }));
  }
  function x(w) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      g = typeof w == "string" ? w : Jx(w);
    return (
      (g = g.replace(/ $/, "%20")),
      nt(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          g,
      ),
      new URL(g, m)
    );
  }
  let p = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(bm, d),
        (l = w),
        () => {
          (o.removeEventListener(bm, d), (l = null));
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: x,
    encodeLocation(w) {
      let m = x(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return s.go(w);
    },
  };
  return p;
}
var Pm;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Pm || (Pm = {}));
function DR(e, t, n) {
  return (n === void 0 && (n = "/"), LR(e, t, n, !1));
}
function LR(e, t, n, r) {
  let o = typeof t == "string" ? $l(t) : t,
    i = nw(o.pathname || "/", n);
  if (i == null) return null;
  let s = ew(e);
  OR(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = HR(i);
    a = UR(s[l], u, r);
  }
  return a;
}
function ew(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (nt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Po([r, l.relativePath]),
      c = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (nt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      ew(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: BR(u, i.index), routesMeta: c }));
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of tw(i.path)) o(i, s, l);
    }),
    t
  );
}
function tw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = tw(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function OR(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $R(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const jR = /^:[\w-]+$/,
  IR = 3,
  FR = 2,
  _R = 1,
  VR = 10,
  zR = -2,
  km = (e) => e === "*";
function BR(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(km) && (r += zR),
    t && (r += FR),
    n
      .filter((o) => !km(o))
      .reduce((o, i) => o + (jR.test(i) ? IR : i === "" ? _R : VR), r)
  );
}
function $R(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function UR(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = Rm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Rm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: Po([i, d.pathname]),
        pathnameBase: KR(Po([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = Po([i, d.pathnameBase])));
  }
  return s;
}
function Rm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = WR(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let p = a[d] || "";
        s = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[d];
      return (
        h && !x ? (u[f] = void 0) : (u[f] = (x || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function WR(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Zx(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function HR(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Zx(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function nw(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Po = (e) => e.join("/").replace(/\/\/+/g, "/"),
  KR = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function GR(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const rw = ["post", "put", "patch", "delete"];
new Set(rw);
const YR = ["get", ...rw];
new Set(YR);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sl.apply(this, arguments)
  );
}
const QR = v.createContext(null),
  XR = v.createContext(null),
  ow = v.createContext(null),
  Ul = v.createContext(null),
  Wl = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  iw = v.createContext(null);
function th() {
  return v.useContext(Ul) != null;
}
function sw() {
  return (th() || nt(!1), v.useContext(Ul).location);
}
function qR(e, t) {
  return ZR(e, t);
}
function ZR(e, t, n, r) {
  th() || nt(!1);
  let { navigator: o } = v.useContext(ow),
    { matches: i } = v.useContext(Wl),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = sw(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? $l(t) : t;
    (l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || nt(!1),
      (c = w));
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let x = DR(e, { pathname: h }),
    p = rA(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Po([
              l,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Po([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && p
    ? v.createElement(
        Ul.Provider,
        {
          value: {
            location: sl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Kn.Pop,
          },
        },
        p,
      )
    : p;
}
function JR() {
  let e = aA(),
    t = GR(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? v.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const eA = v.createElement(JR, null);
class tA extends v.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? v.createElement(
          Wl.Provider,
          { value: this.props.routeContext },
          v.createElement(iw.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function nA(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = v.useContext(QR);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Wl.Provider, { value: t }, r)
  );
}
function rA(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (c >= 0 || nt(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          x =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || x) {
          ((l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      x = !1,
      p = null,
      w = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (p = d.route.errorElement || eA),
      l &&
        (u < 0 && f === 0
          ? ((x = !0), (w = null))
          : u === f &&
            ((x = !0), (w = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, f + 1)),
      g = () => {
        let y;
        return (
          h
            ? (y = p)
            : x
              ? (y = w)
              : d.route.Component
                ? (y = v.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = c),
          v.createElement(nA, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? v.createElement(tA, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var hd = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(hd || {});
function oA(e) {
  let t = v.useContext(XR);
  return (t || nt(!1), t);
}
function iA(e) {
  let t = v.useContext(Wl);
  return (t || nt(!1), t);
}
function sA(e) {
  let t = iA(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || nt(!1), n.route.id);
}
function aA() {
  var e;
  let t = v.useContext(iw),
    n = oA(hd.UseRouteError),
    r = sA(hd.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function lA(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function pd(e) {
  nt(!1);
}
function uA(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Kn.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  th() && nt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = v.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: sl({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s],
    );
  typeof r == "string" && (r = $l(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: x = "default",
    } = r,
    p = v.useMemo(() => {
      let w = nw(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: h, key: x },
            navigationType: o,
          };
    }, [l, c, d, f, h, x, o]);
  return p == null
    ? null
    : v.createElement(
        ow.Provider,
        { value: u },
        v.createElement(Ul.Provider, { children: n, value: p }),
      );
}
function cA(e) {
  let { children: t, location: n } = e;
  return qR(md(t), n);
}
new Promise(() => {});
function md(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    v.Children.forEach(e, (r, o) => {
      if (!v.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === v.Fragment) {
        n.push.apply(n, md(r.props.children, i));
        return;
      }
      (r.type !== pd && nt(!1), !r.props.index || !r.props.children || nt(!1));
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = md(r.props.children, i)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const dA = "6";
try {
  window.__reactRouterVersion = dA;
} catch {}
const fA = "startTransition",
  Am = Gd[fA];
function hA(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = v.useRef();
  i.current == null && (i.current = AR({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = v.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = v.useCallback(
      (d) => {
        u && Am ? Am(() => l(d)) : l(d);
      },
      [l, u],
    );
  return (
    v.useLayoutEffect(() => s.listen(c), [s, c]),
    v.useEffect(() => lA(r), [r]),
    v.createElement(uA, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Mm;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Mm || (Mm = {}));
var Nm;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Nm || (Nm = {}));
const nh = v.createContext({});
function rh(e) {
  const t = v.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const aw = typeof window < "u",
  lw = aw ? v.useLayoutEffect : v.useEffect,
  Hl = v.createContext(null);
function oh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function al(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const tn = (e, t, n) => (n > t ? t : n < e ? e : n);
let Kl = () => {},
  Ko = () => {};
const wn = {},
  uw = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function cw(e) {
  return typeof e == "object" && e !== null;
}
const dw = (e) => /^0[^.\s]+$/u.test(e);
function fw(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const vt = (e) => e,
  pA = (e, t) => (n) => t(e(n)),
  Es = (...e) => e.reduce(pA),
  is = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class ih {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (oh(this.subscriptions, t), () => al(this.subscriptions, t));
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const xt = (e) => e * 1e3,
  gt = (e) => e / 1e3;
function hw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const pw = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  mA = 1e-7,
  gA = 12;
function yA(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (i = pw(s, r, o) - e), i > 0 ? (n = s) : (t = s));
  while (Math.abs(i) > mA && ++a < gA);
  return s;
}
function Cs(e, t, n, r) {
  if (e === t && n === r) return vt;
  const o = (i) => yA(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : pw(o(i), t, r));
}
const mw = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  gw = (e) => (t) => 1 - e(1 - t),
  yw = Cs(0.33, 1.53, 0.69, 0.99),
  sh = gw(yw),
  vw = mw(sh),
  xw = (e) =>
    (e *= 2) < 1 ? 0.5 * sh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ah = (e) => 1 - Math.sin(Math.acos(e)),
  ww = gw(ah),
  Sw = mw(ah),
  vA = Cs(0.42, 0, 1, 1),
  xA = Cs(0, 0, 0.58, 1),
  Ew = Cs(0.42, 0, 0.58, 1),
  wA = (e) => Array.isArray(e) && typeof e[0] != "number",
  Cw = (e) => Array.isArray(e) && typeof e[0] == "number",
  Dm = {
    linear: vt,
    easeIn: vA,
    easeInOut: Ew,
    easeOut: xA,
    circIn: ah,
    circInOut: Sw,
    circOut: ww,
    backIn: sh,
    backInOut: vw,
    backOut: yw,
    anticipate: xw,
  },
  SA = (e) => typeof e == "string",
  Lm = (e) => {
    if (Cw(e)) {
      Ko(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, o] = e;
      return Cs(t, n, r, o);
    } else if (SA(e))
      return (
        Ko(
          Dm[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        Dm[e]
      );
    return e;
  },
  Zs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Om = { value: null, addProjectionMetrics: null };
function EA(e, t) {
  let n = new Set(),
    r = new Set(),
    o = !1,
    i = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    (s.has(d) && (c.schedule(d), e()), l++, d(a));
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const p = h && o ? n : r;
      return (f && s.add(d), p.has(d) || p.add(d), d);
    },
    cancel: (d) => {
      (r.delete(d), s.delete(d));
    },
    process: (d) => {
      if (((a = d), o)) {
        i = !0;
        return;
      }
      ((o = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && Om.value && Om.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (o = !1),
        i && ((i = !1), c.process(d)));
    },
  };
  return c;
}
const CA = 40;
function bw(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Zs.reduce((y, E) => ((y[E] = EA(i, t ? E : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: x,
    } = s,
    p = () => {
      const y = wn.useManualTiming ? o.timestamp : performance.now();
      ((n = !1),
        wn.useManualTiming ||
          (o.delta = r ? 1e3 / 60 : Math.max(Math.min(y - o.timestamp, CA), 1)),
        (o.timestamp = y),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        h.process(o),
        x.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    w = () => {
      ((n = !0), (r = !0), o.isProcessing || e(p));
    };
  return {
    schedule: Zs.reduce((y, E) => {
      const C = s[E];
      return (
        (y[E] = (b, T = !1, P = !1) => (n || w(), C.schedule(b, T, P))),
        y
      );
    }, {}),
    cancel: (y) => {
      for (let E = 0; E < Zs.length; E++) s[Zs[E]].cancel(y);
    },
    state: o,
    steps: s,
  };
}
const {
  schedule: oe,
  cancel: lr,
  state: Ae,
  steps: Fu,
} = bw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0);
let Sa;
function bA() {
  Sa = void 0;
}
const Ue = {
    now: () => (
      Sa === void 0 &&
        Ue.set(
          Ae.isProcessing || wn.useManualTiming
            ? Ae.timestamp
            : performance.now(),
        ),
      Sa
    ),
    set: (e) => {
      ((Sa = e), queueMicrotask(bA));
    },
  },
  Tw = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Pw = Tw("--"),
  TA = Tw("var(--"),
  lh = (e) => (TA(e) ? PA.test(e.split("/*")[0].trim()) : !1),
  PA =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function jm(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const ti = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ss = { ...ti, transform: (e) => tn(0, 1, e) },
  Js = { ...ti, default: 1 },
  Li = (e) => Math.round(e * 1e5) / 1e5,
  uh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kA(e) {
  return e == null;
}
const RA =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ch = (e, t) => (n) =>
    !!(
      (typeof n == "string" && RA.test(n) && n.startsWith(e)) ||
      (t && !kA(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  kw = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(uh);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  AA = (e) => tn(0, 255, e),
  _u = { ...ti, transform: (e) => Math.round(AA(e)) },
  Cr = {
    test: ch("rgb", "red"),
    parse: kw("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      _u.transform(e) +
      ", " +
      _u.transform(t) +
      ", " +
      _u.transform(n) +
      ", " +
      Li(ss.transform(r)) +
      ")",
  };
function MA(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const gd = { test: ch("#"), parse: MA, transform: Cr.transform },
  bs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Dn = bs("deg"),
  Zt = bs("%"),
  _ = bs("px"),
  NA = bs("vh"),
  DA = bs("vw"),
  Im = {
    ...Zt,
    parse: (e) => Zt.parse(e) / 100,
    transform: (e) => Zt.transform(e * 100),
  },
  ho = {
    test: ch("hsl", "hue"),
    parse: kw("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Zt.transform(Li(t)) +
      ", " +
      Zt.transform(Li(n)) +
      ", " +
      Li(ss.transform(r)) +
      ")",
  },
  Se = {
    test: (e) => Cr.test(e) || gd.test(e) || ho.test(e),
    parse: (e) =>
      Cr.test(e) ? Cr.parse(e) : ho.test(e) ? ho.parse(e) : gd.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Cr.transform(e)
          : ho.transform(e),
    getAnimatableNone: (e) => {
      const t = Se.parse(e);
      return ((t.alpha = 0), Se.transform(t));
    },
  },
  LA =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function OA(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(uh)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(LA)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Rw = "number",
  Aw = "color",
  jA = "var",
  IA = "var(",
  Fm = "${}",
  FA =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function as(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      FA,
      (l) => (
        Se.test(l)
          ? (r.color.push(i), o.push(Aw), n.push(Se.parse(l)))
          : l.startsWith(IA)
            ? (r.var.push(i), o.push(jA), n.push(l))
            : (r.number.push(i), o.push(Rw), n.push(parseFloat(l))),
        ++i,
        Fm
      ),
    )
    .split(Fm);
  return { values: n, split: a, indexes: r, types: o };
}
function Mw(e) {
  return as(e).values;
}
function Nw(e) {
  const { split: t, types: n } = as(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === Rw
          ? (i += Li(o[s]))
          : a === Aw
            ? (i += Se.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const _A = (e) =>
  typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e;
function VA(e) {
  const t = Mw(e);
  return Nw(e)(t.map(_A));
}
const Ft = {
  test: OA,
  parse: Mw,
  createTransformer: Nw,
  getAnimatableNone: VA,
};
function Vu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function zA({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((o = Vu(l, a, e + 1 / 3)), (i = Vu(l, a, e)), (s = Vu(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ll(e, t) {
  return (n) => (n > 0 ? t : e);
}
const he = (e, t, n) => e + (t - e) * n,
  zu = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  BA = [gd, Cr, ho],
  $A = (e) => BA.find((t) => t.test(e));
function _m(e) {
  const t = $A(e);
  if (
    (Kl(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === ho && (n = zA(n)), n);
}
const Vm = (e, t) => {
    const n = _m(e),
      r = _m(t);
    if (!n || !r) return ll(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = zu(n.red, r.red, i)),
      (o.green = zu(n.green, r.green, i)),
      (o.blue = zu(n.blue, r.blue, i)),
      (o.alpha = he(n.alpha, r.alpha, i)),
      Cr.transform(o)
    );
  },
  yd = new Set(["none", "hidden"]);
function UA(e, t) {
  return yd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function WA(e, t) {
  return (n) => he(e, t, n);
}
function dh(e) {
  return typeof e == "number"
    ? WA
    : typeof e == "string"
      ? lh(e)
        ? ll
        : Se.test(e)
          ? Vm
          : GA
      : Array.isArray(e)
        ? Dw
        : typeof e == "object"
          ? Se.test(e)
            ? Vm
            : HA
          : ll;
}
function Dw(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => dh(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function HA(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = dh(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function KA(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o],
      s = e.indexes[i][r[i]],
      a = e.values[s] ?? 0;
    ((n[o] = a), r[i]++);
  }
  return n;
}
const GA = (e, t) => {
  const n = Ft.createTransformer(t),
    r = as(e),
    o = as(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (yd.has(e) && !o.values.length) || (yd.has(t) && !r.values.length)
      ? UA(e, t)
      : Es(Dw(KA(r, o), o.values), n)
    : (Kl(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different",
      ),
      ll(e, t));
};
function Lw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? he(e, t, n)
    : dh(e)(e, t);
}
const YA = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => oe.update(t, n),
      stop: () => lr(t),
      now: () => (Ae.isProcessing ? Ae.timestamp : Ue.now()),
    };
  },
  Ow = (e, t, n = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < o; i++)
      r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  ul = 2e4;
function fh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ul; ) ((t += n), (r = e.next(t)));
  return t >= ul ? 1 / 0 : t;
}
function QA(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    o = Math.min(fh(r), ul);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: gt(o),
  };
}
const XA = 5;
function jw(e, t, n) {
  const r = Math.max(t - XA, 0);
  return hw(n - e(r), t - r);
}
const de = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Bu = 0.001;
function qA({
  duration: e = de.duration,
  bounce: t = de.bounce,
  velocity: n = de.velocity,
  mass: r = de.mass,
}) {
  let o, i;
  Kl(
    e <= xt(de.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let s = 1 - t;
  ((s = tn(de.minDamping, de.maxDamping, s)),
    (e = tn(de.minDuration, de.maxDuration, gt(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = vd(u, s),
            x = Math.exp(-d);
          return Bu - (f / h) * x;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            p = vd(Math.pow(u, 2), s);
          return ((-o(u) + Bu > 0 ? -1 : 1) * ((f - h) * x)) / p;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Bu + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const a = 5 / e,
    l = JA(o, i, a);
  if (((e = xt(e)), isNaN(l)))
    return { stiffness: de.stiffness, damping: de.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ZA = 12;
function JA(e, t, n) {
  let r = n;
  for (let o = 1; o < ZA; o++) r = r - e(r) / t(r);
  return r;
}
function vd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const e2 = ["duration", "bounce"],
  t2 = ["stiffness", "damping", "mass"];
function zm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function n2(e) {
  let t = {
    velocity: de.velocity,
    stiffness: de.stiffness,
    damping: de.damping,
    mass: de.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!zm(e, t2) && zm(e, e2))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        o = r * r,
        i = 2 * tn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: de.mass, stiffness: o, damping: i };
    } else {
      const n = qA({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: de.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function cl(e = de.visualDuration, t = de.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = n2({ ...n, velocity: -gt(n.velocity || 0) }),
    x = f || 0,
    p = u / (2 * Math.sqrt(l * c)),
    w = s - i,
    m = gt(Math.sqrt(l / c)),
    g = Math.abs(w) < 5;
  (r || (r = g ? de.restSpeed.granular : de.restSpeed.default),
    o || (o = g ? de.restDelta.granular : de.restDelta.default));
  let y;
  if (p < 1) {
    const C = vd(m, p);
    y = (b) => {
      const T = Math.exp(-p * m * b);
      return (
        s - T * (((x + p * m * w) / C) * Math.sin(C * b) + w * Math.cos(C * b))
      );
    };
  } else if (p === 1) y = (C) => s - Math.exp(-m * C) * (w + (x + m * w) * C);
  else {
    const C = m * Math.sqrt(p * p - 1);
    y = (b) => {
      const T = Math.exp(-p * m * b),
        P = Math.min(C * b, 300);
      return (
        s - (T * ((x + p * m * w) * Math.sinh(P) + C * w * Math.cosh(P))) / C
      );
    };
  }
  const E = {
    calculatedDuration: (h && d) || null,
    next: (C) => {
      const b = y(C);
      if (h) a.done = C >= d;
      else {
        let T = C === 0 ? x : 0;
        p < 1 && (T = C === 0 ? xt(x) : jw(y, C, b));
        const P = Math.abs(T) <= r,
          M = Math.abs(s - b) <= o;
        a.done = P && M;
      }
      return ((a.value = a.done ? s : b), a);
    },
    toString: () => {
      const C = Math.min(fh(E), ul),
        b = Ow((T) => E.next(C * T).value, C, 30);
      return C + "ms " + b;
    },
    toTransition: () => {},
  };
  return E;
}
cl.applyToOptions = (e) => {
  const t = QA(e, 100, cl);
  return (
    (e.ease = t.ease),
    (e.duration = xt(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function xd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    x = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
          ? a
          : l;
  let p = n * t;
  const w = d + p,
    m = s === void 0 ? w : s(w);
  m !== w && (p = m - d);
  const g = (P) => -p * Math.exp(-P / r),
    y = (P) => m + g(P),
    E = (P) => {
      const M = g(P),
        N = y(P);
      ((f.done = Math.abs(M) <= u), (f.value = f.done ? m : N));
    };
  let C, b;
  const T = (P) => {
    h(f.value) &&
      ((C = P),
      (b = cl({
        keyframes: [f.value, x(f.value)],
        velocity: jw(y, P, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let M = !1;
        return (
          !b && C === void 0 && ((M = !0), E(P), T(P)),
          C !== void 0 && P >= C ? b.next(P - C) : (!M && E(P), f)
        );
      },
    }
  );
}
function r2(e, t, n) {
  const r = [],
    o = n || wn.mix || Lw,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || vt : t;
      a = Es(l, a);
    }
    r.push(a);
  }
  return r;
}
function o2(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (
    (Ko(
      i === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
    i === 1)
  )
    return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = r2(t, r, o),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = is(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(tn(e[0], e[i - 1], c)) : u;
}
function i2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = is(0, t, r);
    e.push(he(n, 1, o));
  }
}
function s2(e) {
  const t = [0];
  return (i2(t, e.length - 1), t);
}
function a2(e, t) {
  return e.map((n) => n * t);
}
function l2(e, t) {
  return e.map(() => t || Ew).splice(0, e.length - 1);
}
function Oi({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = wA(r) ? r.map(Lm) : Lm(r),
    i = { done: !1, value: t[0] },
    s = a2(n && n.length === t.length ? n : s2(t), e),
    a = o2(s, t, { ease: Array.isArray(o) ? o : l2(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const u2 = (e) => e !== null;
function hh(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(u2),
    a = o < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const c2 = { decay: xd, inertia: xd, tween: Oi, keyframes: Oi, spring: cl };
function Iw(e) {
  typeof e.type == "string" && (e.type = c2[e.type]);
}
class ph {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const d2 = (e) => e / 100;
class mh extends ph {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, o;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== Ue.now() && this.tick(Ue.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (o = (r = this.options).onStop) == null || o.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Iw(t);
    const {
      type: n = Oi,
      repeat: r = 0,
      repeatDelay: o = 0,
      repeatType: i,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Oi;
    l !== Oi &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Es(d2, Lw(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (i === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = fh(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + o),
      (this.totalDuration = this.resolvedDuration * (r + 1) - o),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: o,
      mixKeyframes: i,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: x,
      onUpdate: p,
      finalKeyframe: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - o / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      g = this.playbackSpeed >= 0 ? m < 0 : m > o;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = o));
    let y = this.currentTime,
      E = r;
    if (d) {
      const P = Math.min(this.currentTime, o) / a;
      let M = Math.floor(P),
        N = P % 1;
      (!N && P >= 1 && (N = 1),
        N === 1 && M--,
        (M = Math.min(M, d + 1)),
        !!(M % 2) &&
          (f === "reverse"
            ? ((N = 1 - N), h && (N -= h / a))
            : f === "mirror" && (E = s)),
        (y = tn(0, 1, N) * a));
    }
    const C = g ? { done: !1, value: c[0] } : E.next(y);
    i && (C.value = i(C.value));
    let { done: b } = C;
    !g &&
      l !== null &&
      (b =
        this.playbackSpeed >= 0
          ? this.currentTime >= o
          : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && b));
    return (
      T && x !== xd && (C.value = hh(c, this.options, w, this.speed)),
      p && p(C.value),
      T && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return gt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = xt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ue.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = gt(this.currentTime)));
  }
  play() {
    var o, i;
    if (this.isStopped) return;
    const { driver: t = YA, startTime: n } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))),
      (i = (o = this.options).onPlay) == null || i.call(o));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Ue.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function f2(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const br = (e) => (e * 180) / Math.PI,
  wd = (e) => {
    const t = br(Math.atan2(e[1], e[0]));
    return Sd(t);
  },
  h2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: wd,
    rotateZ: wd,
    skewX: (e) => br(Math.atan(e[1])),
    skewY: (e) => br(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Sd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Bm = wd,
  $m = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Um = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  p2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: $m,
    scaleY: Um,
    scale: (e) => ($m(e) + Um(e)) / 2,
    rotateX: (e) => Sd(br(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Sd(br(Math.atan2(-e[2], e[0]))),
    rotateZ: Bm,
    rotate: Bm,
    skewX: (e) => br(Math.atan(e[4])),
    skewY: (e) => br(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Ed(e) {
  return e.includes("scale") ? 1 : 0;
}
function Cd(e, t) {
  if (!e || e === "none") return Ed(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n) ((r = p2), (o = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = h2), (o = a));
  }
  if (!o) return Ed(t);
  const i = r[t],
    s = o[1].split(",").map(g2);
  return typeof i == "function" ? i(s) : s[i];
}
const m2 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Cd(n, t);
};
function g2(e) {
  return parseFloat(e.trim());
}
const ni = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ri = new Set(ni),
  Wm = (e) => e === ti || e === _,
  y2 = new Set(["x", "y", "z"]),
  v2 = ni.filter((e) => !y2.has(e));
function x2(e) {
  const t = [];
  return (
    v2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Gn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Cd(t, "x"),
  y: (e, { transform: t }) => Cd(t, "y"),
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const Lr = new Set();
let bd = !1,
  Td = !1,
  Pd = !1;
function Fw() {
  if (Td) {
    const e = Array.from(Lr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const o = x2(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Td = !1), (bd = !1), Lr.forEach((e) => e.complete(Pd)), Lr.clear());
}
function _w() {
  Lr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Td = !0));
  });
}
function w2() {
  ((Pd = !0), _w(), Fw(), (Pd = !1));
}
class gh {
  constructor(t, n, r, o, i, s = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Lr.add(this),
          bd || ((bd = !0), oe.read(_w), oe.resolveKeyframes(Fw)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    if (t[0] === null) {
      const i = o == null ? void 0 : o.get(),
        s = t[t.length - 1];
      if (i !== void 0) t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = s), o && i === void 0 && o.set(t[0]));
    }
    f2(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Lr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Lr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const S2 = (e) => e.startsWith("--");
function E2(e, t, n) {
  S2(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const C2 = {};
function Vw(e, t) {
  const n = fw(e);
  return () => C2[t] ?? n();
}
const b2 = Vw(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  zw = Vw(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ei = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Hm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ei([0, 0.65, 0.55, 1]),
    circOut: Ei([0.55, 0, 1, 0.45]),
    backIn: Ei([0.31, 0.01, 0.66, -0.59]),
    backOut: Ei([0.33, 1.53, 0.69, 0.99]),
  };
function Bw(e, t) {
  if (e)
    return typeof e == "function"
      ? zw()
        ? Ow(e, t)
        : "ease-out"
      : Cw(e)
        ? Ei(e)
        : Array.isArray(e)
          ? e.map((n) => Bw(n, t) || Hm.easeOut)
          : Hm[e];
}
function T2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Bw(a, o);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return (u && (f.pseudoElement = u), e.animate(c, f));
}
function $w(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function P2({ type: e, ...t }) {
  return $w(e) && zw()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Uw extends ph {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: o,
      pseudoElement: i,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!i),
      (this.allowFlatten = s),
      (this.options = t),
      Ko(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const u = P2(t);
    ((this.animation = T2(n, r, o, u, i)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          const c = hh(o, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : E2(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, o;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((o = (r = this.animation).commitStyles) == null || o.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return gt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = xt(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && b2() ? ((this.animation.timeline = t), vt) : n(this)
    );
  }
}
const Ww = { anticipate: xw, backInOut: vw, circInOut: Sw };
function k2(e) {
  return e in Ww;
}
function R2(e) {
  typeof e.ease == "string" && k2(e.ease) && (e.ease = Ww[e.ease]);
}
const $u = 10;
class A2 extends Uw {
  constructor(t) {
    (R2(t),
      Iw(t),
      super(t),
      t.startTime !== void 0 && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: o,
      element: i,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new mh({ ...s, autoplay: !1 }),
      l = Math.max($u, Ue.now() - this.startTime),
      u = tn(0, $u, l - $u);
    (n.setWithVelocity(
      a.sample(Math.max(0, l - u)).value,
      a.sample(l).value,
      u,
    ),
      a.stop());
  }
}
const Km = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Ft.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function M2(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function N2(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = Km(o, t),
    a = Km(i, t);
  return (
    Kl(
      s === a,
      `You are trying to animate ${t} from "${o}" to "${i}". "${s ? i : o}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !s || !a ? !1 : M2(e) || ((n === "spring" || $w(n)) && r)
  );
}
function kd(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const D2 = new Set(["opacity", "clipPath", "filter", "transform"]),
  L2 = fw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function O2(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: o,
    damping: i,
    type: s,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    L2() &&
    n &&
    D2.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    o !== "mirror" &&
    i !== 0 &&
    s !== "inertia"
  );
}
const j2 = 40;
class I2 extends ph {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var x;
    (super(),
      (this.stop = () => {
        var p, w;
        (this._animation &&
          (this._animation.stop(),
          (p = this.stopTimeline) == null || p.call(this)),
          (w = this.keyframeResolver) == null || w.cancel());
      }),
      (this.createdAt = Ue.now()));
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || gh;
    ((this.keyframeResolver = new h(
      a,
      (p, w, m) => this.onKeyframesResolved(p, w, f, !m),
      l,
      u,
      c,
    )),
      (x = this.keyframeResolver) == null || x.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, o) {
    var w, m;
    this.keyframeResolver = void 0;
    const {
      name: i,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    ((this.resolvedAt = Ue.now()),
      N2(t, i, s, a) ||
        ((wn.instantAnimations || !l) && (c == null || c(hh(t, r, n))),
        (t[0] = t[t.length - 1]),
        kd(r),
        (r.repeat = 0)));
    const f = {
        startTime: o
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > j2
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      h = !u && O2(f),
      x =
        (m = (w = f.motionValue) == null ? void 0 : w.owner) == null
          ? void 0
          : m.current,
      p = h ? new A2({ ...f, element: x }) : new mh(f);
    (p.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(vt),
      this.pendingTimeline &&
        ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = p));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), w2()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function Hw(e, t, n, r = 0, o = 1) {
  const i = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(i, s) : o === 1 ? i * r : a - i * r;
}
const F2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function _2(e) {
  const t = F2.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const V2 = 4;
function Kw(e, t, n = 1) {
  Ko(
    n <= V2,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, o] = _2(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return uw(s) ? parseFloat(s) : s;
  }
  return lh(o) ? Kw(o, t, n + 1) : o;
}
const z2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  B2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $2 = { type: "keyframes", duration: 0.8 },
  U2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  W2 = (e, { keyframes: t }) =>
    t.length > 2
      ? $2
      : ri.has(e)
        ? e.startsWith("scale")
          ? B2(t[1])
          : z2
        : U2,
  H2 = (e) => e !== null;
function K2(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(H2),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
function Gw(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function yh(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? Gw(n, e) : n;
}
function G2({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const vh =
  (e, t, n, r = {}, o, i) =>
  (s) => {
    const a = yh(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - xt(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        (t.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    (G2(a) || Object.assign(c, W2(e, c)),
      c.duration && (c.duration = xt(c.duration)),
      c.repeatDelay && (c.repeatDelay = xt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (kd(c), c.delay === 0 && (d = !0)),
      (wn.instantAnimations ||
        wn.skipAnimations ||
        (o != null && o.shouldSkipAnimations)) &&
        ((d = !0), kd(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !i && t.get() !== void 0)
    ) {
      const f = K2(c.keyframes, a);
      if (f !== void 0) {
        oe.update(() => {
          (c.onUpdate(f), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new mh(c) : new I2(c);
  };
function Gm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function xh(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Gm(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = Gm(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function ko(e, t, n) {
  const r = e.getProps();
  return xh(r, t, n !== void 0 ? n : r.custom, e);
}
const Yw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ni,
  ]),
  Ym = 30,
  Y2 = (e) => !isNaN(parseFloat(e));
class Q2 {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var i;
        const o = Ue.now();
        if (
          (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Ue.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Y2(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ih());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            oe.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ue.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ym
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ym);
    return hw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Go(e, t) {
  return new Q2(e, t);
}
const Rd = (e) => Array.isArray(e);
function X2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Go(n));
}
function q2(e) {
  return Rd(e) ? e[e.length - 1] || 0 : e;
}
function Z2(e, t) {
  const n = ko(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = q2(i[s]);
    X2(e, s, a);
  }
}
const _e = (e) => !!(e && e.getVelocity);
function J2(e) {
  return !!(_e(e) && e.add);
}
function Ad(e, t) {
  const n = e.getValue("willChange");
  if (J2(n)) return n.add(t);
  if (!n && wn.WillChange) {
    const r = new wn.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function wh(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const eM = "framerAppearId",
  Qw = "data-" + wh(eM);
function Xw(e) {
  return e.props[Qw];
}
function tM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function qw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  i = i ? Gw(i, l) : l;
  const u = i == null ? void 0 : i.reduceMotion;
  r && (i = r);
  const c = [],
    d = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null),
      x = a[f];
    if (x === void 0 || (d && tM(d, f))) continue;
    const p = { delay: n, ...yh(i || {}, f) },
      w = h.get();
    if (
      w !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(x) &&
      x === w &&
      !p.velocity
    )
      continue;
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const E = Xw(e);
      if (E) {
        const C = window.MotionHandoffAnimation(E, f, oe);
        C !== null && ((p.startTime = C), (m = !0));
      }
    }
    Ad(e, f);
    const g = u ?? e.shouldReduceMotion;
    h.start(vh(f, h, x, g && Yw.has(f) ? { type: !1 } : p, e, m));
    const y = h.animation;
    y && c.push(y);
  }
  if (s) {
    const f = () =>
      oe.update(() => {
        s && Z2(e, s);
      });
    c.length ? Promise.all(c).then(f) : f();
  }
  return c;
}
function Md(e, t, n = {}) {
  var l;
  const r = ko(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(qw(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = o;
            return nM(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, s] : [s, i];
    return u().then(() => c());
  } else return Promise.all([i(), s(n.delay)]);
}
function nM(e, t, n = 0, r = 0, o = 0, i = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        Md(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Hw(e.variantChildren, l, r, o, i),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function rM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Md(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Md(e, t, n);
  else {
    const o = typeof t == "function" ? ko(e, t, n.custom) : t;
    r = Promise.all(qw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const oM = { test: (e) => e === "auto", parse: (e) => e },
  Zw = (e) => (t) => t.test(e),
  Jw = [ti, _, Zt, Dn, DA, NA, oM],
  Qm = (e) => Jw.find(Zw(e));
function iM(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || dw(e)
      : !0;
}
const sM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function aM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(uh) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = sM.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + o + ")");
}
const lM = /\b([a-z-]*)\(.*?\)/gu,
  Nd = {
    ...Ft,
    getAnimatableNone: (e) => {
      const t = e.match(lM);
      return t ? t.map(aM).join(" ") : e;
    },
  },
  Dd = {
    ...Ft,
    getAnimatableNone: (e) => {
      const t = Ft.parse(e);
      return Ft.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  Xm = { ...ti, transform: Math.round },
  uM = {
    rotate: Dn,
    rotateX: Dn,
    rotateY: Dn,
    rotateZ: Dn,
    scale: Js,
    scaleX: Js,
    scaleY: Js,
    scaleZ: Js,
    skew: Dn,
    skewX: Dn,
    skewY: Dn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: ss,
    originX: Im,
    originY: Im,
    originZ: _,
  },
  Sh = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...uM,
    zIndex: Xm,
    fillOpacity: ss,
    strokeOpacity: ss,
    numOctaves: Xm,
  },
  cM = {
    ...Sh,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: Nd,
    WebkitFilter: Nd,
    mask: Dd,
    WebkitMask: Dd,
  },
  e1 = (e) => cM[e],
  dM = new Set([Nd, Dd]);
function t1(e, t) {
  let n = e1(e);
  return (
    dM.has(n) || (n = Ft),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const fM = new Set(["auto", "none", "0"]);
function hM(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    (typeof i == "string" && !fM.has(i) && as(i).values.length && (o = e[r]),
      r++);
  }
  if (o && n) for (const i of t) e[i] = t1(n, o);
}
class pM extends gh {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), lh(d))) {
        const f = Kw(d, n.current);
        (f !== void 0 && (t[c] = f),
          c === t.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !Yw.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = Qm(o),
      a = Qm(i),
      l = jm(o),
      u = jm(i);
    if (l !== u && Gn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (Wm(s) && Wm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else Gn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) (t[o] === null || iM(t[o])) && r.push(o);
    r.length && hM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Gn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const i = r.length - 1,
      s = r[i];
    ((r[i] = Gn[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const mM = new Set(["opacity", "clipPath", "filter", "transform"]);
function n1(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const o = document.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const r1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Ld(e) {
  return cw(e) && "offsetHeight" in e;
}
const { schedule: Eh, cancel: $O } = bw(queueMicrotask, !1),
  Rt = { x: !1, y: !1 };
function o1() {
  return Rt.x || Rt.y;
}
function gM(e) {
  return e === "x" || e === "y"
    ? Rt[e]
      ? null
      : ((Rt[e] = !0),
        () => {
          Rt[e] = !1;
        })
    : Rt.x || Rt.y
      ? null
      : ((Rt.x = Rt.y = !0),
        () => {
          Rt.x = Rt.y = !1;
        });
}
function i1(e, t) {
  const n = n1(e),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [n, o, () => r.abort()];
}
function yM(e) {
  return !(e.pointerType === "touch" || o1());
}
function vM(e, t, n = {}) {
  const [r, o, i] = i1(e, n);
  return (
    r.forEach((s) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          s.removeEventListener("pointerleave", x);
        },
        d = (w) => {
          (u && (u(w), (u = void 0)), c());
        },
        f = (w) => {
          ((a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(w)));
        },
        h = () => {
          ((a = !0),
            window.addEventListener("pointerup", f, o),
            window.addEventListener("pointercancel", f, o));
        },
        x = (w) => {
          if (w.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(w);
          }
        },
        p = (w) => {
          if (!yM(w)) return;
          l = !1;
          const m = t(s, w);
          typeof m == "function" &&
            ((u = m), s.addEventListener("pointerleave", x, o));
        };
      (s.addEventListener("pointerenter", p, o),
        s.addEventListener("pointerdown", h, o));
    }),
    i
  );
}
const s1 = (e, t) => (t ? (e === t ? !0 : s1(e, t.parentElement)) : !1),
  Ch = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  xM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function wM(e) {
  return xM.has(e.tagName) || e.isContentEditable === !0;
}
const SM = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function EM(e) {
  return SM.has(e.tagName) || e.isContentEditable === !0;
}
const Ea = new WeakSet();
function qm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Uu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const CM = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = qm(() => {
    if (Ea.has(n)) return;
    Uu(n, "down");
    const o = qm(() => {
        Uu(n, "up");
      }),
      i = () => Uu(n, "cancel");
    (n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Zm(e) {
  return Ch(e) && !o1();
}
const Jm = new WeakSet();
function bM(e, t, n = {}) {
  const [r, o, i] = i1(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Zm(a) || Jm.has(a)) return;
      (Ea.add(l), n.stopPropagation && Jm.add(a));
      const u = t(l, a),
        c = (h, x) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            Ea.has(l) && Ea.delete(l),
            Zm(h) && typeof u == "function" && u(h, { success: x }));
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              s1(l, h.target),
          );
        },
        f = (h) => {
          c(h, !1);
        };
      (window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o),
        Ld(a) &&
          (a.addEventListener("focus", (u) => CM(u, o)),
          !wM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    i
  );
}
function bh(e) {
  return cw(e) && "ownerSVGElement" in e;
}
const Ca = new WeakMap();
let Ln;
const a1 = (e, t, n) => (r, o) =>
    o && o[0]
      ? o[0][e + "Size"]
      : bh(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  TM = a1("inline", "width", "offsetWidth"),
  PM = a1("block", "height", "offsetHeight");
function kM({ target: e, borderBoxSize: t }) {
  var n;
  (n = Ca.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return TM(e, t);
        },
        get height() {
          return PM(e, t);
        },
      });
    });
}
function RM(e) {
  e.forEach(kM);
}
function AM() {
  typeof ResizeObserver > "u" || (Ln = new ResizeObserver(RM));
}
function MM(e, t) {
  Ln || AM();
  const n = n1(e);
  return (
    n.forEach((r) => {
      let o = Ca.get(r);
      (o || ((o = new Set()), Ca.set(r, o)),
        o.add(t),
        Ln == null || Ln.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const o = Ca.get(r);
        (o == null || o.delete(t),
          (o != null && o.size) || Ln == null || Ln.unobserve(r));
      });
    }
  );
}
const ba = new Set();
let po;
function NM() {
  ((po = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    ba.forEach((t) => t(e));
  }),
    window.addEventListener("resize", po));
}
function DM(e) {
  return (
    ba.add(e),
    po || NM(),
    () => {
      (ba.delete(e),
        !ba.size &&
          typeof po == "function" &&
          (window.removeEventListener("resize", po), (po = void 0)));
    }
  );
}
function eg(e, t) {
  return typeof e == "function" ? DM(e) : MM(e, t);
}
function LM(e) {
  return bh(e) && e.tagName === "svg";
}
const OM = [...Jw, Se, Ft],
  jM = (e) => OM.find(Zw(e)),
  tg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mo = () => ({ x: tg(), y: tg() }),
  ng = () => ({ min: 0, max: 0 }),
  Ce = () => ({ x: ng(), y: ng() }),
  IM = new WeakMap();
function Gl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ls(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Th = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ph = ["initial", ...Th];
function Yl(e) {
  return Gl(e.animate) || Ph.some((t) => ls(e[t]));
}
function l1(e) {
  return !!(Yl(e) || e.variants);
}
function FM(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (_e(o)) e.addValue(r, o);
    else if (_e(i)) e.addValue(r, Go(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Go(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Od = { current: null },
  u1 = { current: !1 },
  _M = typeof window < "u";
function VM() {
  if (((u1.current = !0), !!_M))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Od.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Od.current = !1;
}
const rg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let dl = {};
function c1(e) {
  dl = e;
}
function zM() {
  return dl;
}
class BM {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      skipAnimations: i,
      blockInitialAnimation: s,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = gh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Ue.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), oe.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.skipAnimationsConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Yl(n)),
      (this.isVariantNode = l1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in f) {
      const x = f[h];
      u[h] !== void 0 && _e(x) && x.set(u[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        ((n = this.values.get(o)) == null || n.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = t),
      IM.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, i) => this.bindToMotionValue(i, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (u1.current || VM(), (this.shouldReduceMotion = Od.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      lr(this.notifyUpdate),
      lr(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && mM.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: s,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        d = new Uw({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: xt(c),
        }),
        f = s(d);
      this.valueSubscriptions.set(t, () => {
        (f(), d.cancel());
      });
      return;
    }
    const r = ri.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (s) => {
      ((this.latestValues[t] = s),
        this.props.onUpdate && oe.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let i;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (i = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (o(), i && i(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in dl) {
      const n = dl[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < rg.length; r++) {
      const o = rg[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    ((this.prevMotionValues = FM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Go(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (uw(r) || dw(r))
          ? (r = parseFloat(r))
          : !jM(r) && Ft.test(n) && (r = t1(t, n)),
        this.setBaseTarget(t, _e(r) ? r.get() : r)),
      _e(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = xh(
        this.props,
        n,
        (i = this.presenceContext) == null ? void 0 : i.custom,
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !_e(o)
      ? o
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new ih()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Eh.render(this.render);
  }
}
class d1 extends BM {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = pM));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    _e(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class fr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function f1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $M({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function UM(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Wu(e) {
  return e === void 0 || e === 1;
}
function jd({ scale: e, scaleX: t, scaleY: n }) {
  return !Wu(e) || !Wu(t) || !Wu(n);
}
function xr(e) {
  return (
    jd(e) ||
    h1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function h1(e) {
  return og(e.x) || og(e.y);
}
function og(e) {
  return e && e !== "0%";
}
function fl(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function ig(e, t, n, r, o) {
  return (o !== void 0 && (e = fl(e, o, r)), fl(e, n, r) + t);
}
function Id(e, t = 0, n = 1, r, o) {
  ((e.min = ig(e.min, t, n, r, o)), (e.max = ig(e.max, t, n, r, o)));
}
function p1(e, { x: t, y: n }) {
  (Id(e.x, t.translate, t.scale, t.originPoint),
    Id(e.y, n.translate, n.scale, n.originPoint));
}
const sg = 0.999999999999,
  ag = 1.0000000000001;
function WM(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    ((i = n[a]), (s = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        yo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), p1(e, s)),
      r && xr(i.latestValues) && yo(e, i.latestValues));
  }
  (t.x < ag && t.x > sg && (t.x = 1), t.y < ag && t.y > sg && (t.y = 1));
}
function go(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function lg(e, t, n, r, o = 0.5) {
  const i = he(e.min, e.max, o);
  Id(e, t, n, i, r);
}
function yo(e, t) {
  (lg(e.x, t.x, t.scaleX, t.scale, t.originX),
    lg(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function m1(e, t) {
  return f1(UM(e.getBoundingClientRect(), t));
}
function HM(e, t, n) {
  const r = m1(e, n),
    { scroll: o } = t;
  return (o && (go(r.x, o.offset.x), go(r.y, o.offset.y)), r);
}
const KM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  GM = ni.length;
function YM(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < GM; i++) {
    const s = ni[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (s.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = s.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = r1(a, Sh[s]);
      if (!l) {
        o = !1;
        const c = KM[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r);
}
function kh(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (ri.has(l)) {
      s = !0;
      continue;
    } else if (Pw(l)) {
      o[l] = u;
      continue;
    } else {
      const c = r1(u, Sh[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = YM(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function g1(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let s;
  for (s in t) i[s] = t[s];
  o == null || o.applyProjectionStyles(i, r);
  for (s in n) i.setProperty(s, n[s]);
}
function ug(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const gi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = ug(e, t.target.x),
        r = ug(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  QM = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Ft.parse(e);
      if (o.length > 5) return r;
      const i = Ft.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((o[0 + s] /= a), (o[1 + s] /= l));
      const u = he(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  },
  Fd = {
    borderRadius: {
      ...gi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: gi,
    borderTopRightRadius: gi,
    borderBottomLeftRadius: gi,
    borderBottomRightRadius: gi,
    boxShadow: QM,
  };
function y1(e, { layout: t, layoutId: n }) {
  return (
    ri.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Fd[e] || e === "opacity"))
  );
}
function Rh(e, t, n) {
  var s;
  const r = e.style,
    o = t == null ? void 0 : t.style,
    i = {};
  if (!r) return i;
  for (const a in r)
    (_e(r[a]) ||
      (o && _e(o[a])) ||
      y1(a, e) ||
      ((s = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function XM(e) {
  return window.getComputedStyle(e);
}
class qM extends d1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = g1));
  }
  readValueFromInstance(t, n) {
    var r;
    if (ri.has(n))
      return (r = this.projection) != null && r.isProjecting ? Ed(n) : m2(t, n);
    {
      const o = XM(t),
        i = (Pw(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return m1(t, n);
  }
  build(t, n, r) {
    kh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Rh(t, n, r);
  }
}
const ZM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  JM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function eN(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? ZM : JM;
  ((e[i.offset] = `${-r}`), (e[i.array] = `${t} ${n}`));
}
const tN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function v1(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: o,
    pathSpacing: i = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((kh(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox));
  for (const h of tN) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && eN(d, o, i, s, !1));
}
const x1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  w1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function nN(e, t, n, r) {
  g1(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(x1.has(o) ? o : wh(o), t.attrs[o]);
}
function S1(e, t, n) {
  const r = Rh(e, t, n);
  for (const o in e)
    if (_e(e[o]) || _e(t[o])) {
      const i =
        ni.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
class rN extends d1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ce));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ri.has(n)) {
      const r = e1(n);
      return (r && r.default) || 0;
    }
    return ((n = x1.has(n) ? n : wh(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return S1(t, n, r);
  }
  build(t, n, r) {
    v1(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    nN(t, n, r, o);
  }
  mount(t) {
    ((this.isSVGTag = w1(t.tagName)), super.mount(t));
  }
}
const oN = Ph.length;
function E1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? E1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < oN; n++) {
    const r = Ph[n],
      o = e.props[r];
    (ls(o) || o === !1) && (t[r] = o);
  }
  return t;
}
function C1(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const iN = [...Th].reverse(),
  sN = Th.length;
function aN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => rM(e, n, r)));
}
function lN(e) {
  let t = aN(e),
    n = cg(),
    r = !0;
  const o = (l) => (u, c) => {
    var f;
    const d = ko(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: h, transitionEnd: x, ...p } = d;
      u = { ...u, ...p, ...x };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = E1(e.parent) || {},
      d = [],
      f = new Set();
    let h = {},
      x = 1 / 0;
    for (let w = 0; w < sN; w++) {
      const m = iN[w],
        g = n[m],
        y = u[m] !== void 0 ? u[m] : c[m],
        E = ls(y),
        C = m === l ? g.isActive : null;
      C === !1 && (x = w);
      let b = y === c[m] && y !== u[m] && E;
      if (
        (b && r && e.manuallyAnimateOnMount && (b = !1),
        (g.protectedKeys = { ...h }),
        (!g.isActive && C === null) ||
          (!y && !g.prevProp) ||
          Gl(y) ||
          typeof y == "boolean")
      )
        continue;
      if (m === "exit" && g.isActive && C !== !0) {
        g.prevResolvedValues && (h = { ...h, ...g.prevResolvedValues });
        continue;
      }
      const T = uN(g.prevProp, y);
      let P = T || (m === l && g.isActive && !b && E) || (w > x && E),
        M = !1;
      const N = Array.isArray(y) ? y : [y];
      let z = N.reduce(o(m), {});
      C === !1 && (z = {});
      const { prevResolvedValues: I = {} } = g,
        K = { ...I, ...z },
        O = (V) => {
          ((P = !0),
            f.has(V) && ((M = !0), f.delete(V)),
            (g.needsAnimating[V] = !0));
          const k = e.getValue(V);
          k && (k.liveStyle = !1);
        };
      for (const V in K) {
        const k = z[V],
          A = I[V];
        if (h.hasOwnProperty(V)) continue;
        let j = !1;
        (Rd(k) && Rd(A) ? (j = !C1(k, A)) : (j = k !== A),
          j
            ? k != null
              ? O(V)
              : f.add(V)
            : k !== void 0 && f.has(V)
              ? O(V)
              : (g.protectedKeys[V] = !0));
      }
      ((g.prevProp = y),
        (g.prevResolvedValues = z),
        g.isActive && (h = { ...h, ...z }),
        r && e.blockInitialAnimation && (P = !1));
      const Y = b && T;
      P &&
        (!Y || M) &&
        d.push(
          ...N.map((V) => {
            const k = { type: m };
            if (
              typeof V == "string" &&
              r &&
              !Y &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: A } = e,
                j = ko(A, V);
              if (A.enteringChildren && j) {
                const { delayChildren: U } = j.transition || {};
                k.delay = Hw(A.enteringChildren, e, U);
              }
            }
            return { animation: V, options: k };
          }),
        );
    }
    if (f.size) {
      const w = {};
      if (typeof u.initial != "boolean") {
        const m = ko(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        m && m.transition && (w.transition = m.transition);
      }
      (f.forEach((m) => {
        const g = e.getBaseTarget(m),
          y = e.getValue(m);
        (y && (y.liveStyle = !0), (w[m] = g ?? null));
      }),
        d.push({ animation: w }));
    }
    let p = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      p ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((f) => {
        var h;
        return (h = f.animationState) == null ? void 0 : h.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = cg();
    },
  };
}
function uN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !C1(t, e) : !1;
}
function gr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function cg() {
  return {
    animate: gr(!0),
    whileInView: gr(),
    whileHover: gr(),
    whileTap: gr(),
    whileDrag: gr(),
    whileFocus: gr(),
    exit: gr(),
  };
}
function dg(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function kt(e, t) {
  (dg(e.x, t.x), dg(e.y, t.y));
}
function fg(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const b1 = 1e-4,
  cN = 1 - b1,
  dN = 1 + b1,
  T1 = 0.01,
  fN = 0 - T1,
  hN = 0 + T1;
function We(e) {
  return e.max - e.min;
}
function pN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function hg(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = he(t.min, t.max, e.origin)),
    (e.scale = We(n) / We(t)),
    (e.translate = he(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= cN && e.scale <= dN) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= fN && e.translate <= hN) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function ji(e, t, n, r) {
  (hg(e.x, t.x, n.x, r ? r.originX : void 0),
    hg(e.y, t.y, n.y, r ? r.originY : void 0));
}
function pg(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + We(t)));
}
function mN(e, t, n) {
  (pg(e.x, t.x, n.x), pg(e.y, t.y, n.y));
}
function mg(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + We(t)));
}
function hl(e, t, n) {
  (mg(e.x, t.x, n.x), mg(e.y, t.y, n.y));
}
function gg(e, t, n, r, o) {
  return (
    (e -= t),
    (e = fl(e, 1 / n, r)),
    o !== void 0 && (e = fl(e, 1 / o, r)),
    e
  );
}
function gN(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Zt.test(t) &&
      ((t = parseFloat(t)), (t = he(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = he(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = gg(e.min, t, n, a, o)),
    (e.max = gg(e.max, t, n, a, o)));
}
function yg(e, t, [n, r, o], i, s) {
  gN(e, t[n], t[r], t[o], t.scale, i, s);
}
const yN = ["x", "scaleX", "originX"],
  vN = ["y", "scaleY", "originY"];
function vg(e, t, n, r) {
  (yg(e.x, t, yN, n ? n.x : void 0, r ? r.x : void 0),
    yg(e.y, t, vN, n ? n.y : void 0, r ? r.y : void 0));
}
function xg(e) {
  return e.translate === 0 && e.scale === 1;
}
function P1(e) {
  return xg(e.x) && xg(e.y);
}
function wg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function xN(e, t) {
  return wg(e.x, t.x) && wg(e.y, t.y);
}
function Sg(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function k1(e, t) {
  return Sg(e.x, t.x) && Sg(e.y, t.y);
}
function Eg(e) {
  return We(e.x) / We(e.y);
}
function Cg(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Wt(e) {
  return [e("x"), e("y")];
}
function wN(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: x,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      x && (r += `skewY(${x}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const R1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  SN = R1.length,
  bg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Tg = (e) => typeof e == "number" || _.test(e);
function EN(e, t, n, r, o, i) {
  o
    ? ((e.opacity = he(0, n.opacity ?? 1, CN(r))),
      (e.opacityExit = he(t.opacity ?? 1, 0, bN(r))))
    : i && (e.opacity = he(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < SN; s++) {
    const a = `border${R1[s]}Radius`;
    let l = Pg(t, a),
      u = Pg(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Tg(l) === Tg(u)
        ? ((e[a] = Math.max(he(bg(l), bg(u), r), 0)),
          (Zt.test(u) || Zt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function Pg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const CN = A1(0, 0.5, ww),
  bN = A1(0.5, 0.95, vt);
function A1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(is(e, t, r)));
}
function TN(e, t, n) {
  const r = _e(e) ? e : Go(e);
  return (r.start(vh("", r, t, n)), r.animation);
}
function us(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const PN = (e, t) => e.depth - t.depth;
class kN {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (oh(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (al(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(PN),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function RN(e, t) {
  const n = Ue.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (lr(r), e(i - t));
    };
  return (oe.setup(r, !0), () => lr(r));
}
function Ta(e) {
  return _e(e) ? e.get() : e;
}
class AN {
  constructor() {
    this.members = [];
  }
  add(t) {
    oh(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const o = r.instance;
      o &&
        o.isConnected === !1 &&
        r.isPresent !== !1 &&
        !r.snapshot &&
        al(this.members, r);
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (al(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o],
        s = i.instance;
      if (i.isPresent !== !1 && (!s || s.isConnected !== !1)) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(), t.scheduleRender());
      const o = r.options.layoutDependency,
        i = t.options.layoutDependency;
      if (!(o !== void 0 && i !== void 0 && o === i)) {
        const l = r.instance;
        (l && l.isConnected === !1 && !r.snapshot) ||
          ((t.resumeFrom = r),
          n && (t.resumeFrom.preserveOpacity = !0),
          r.snapshot &&
            ((t.snapshot = r.snapshot),
            (t.snapshot.latestValues = r.animationValues || r.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      }
      const { crossfade: a } = t.options;
      a === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Pa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Hu = ["", "X", "Y", "Z"],
  MN = 1e3;
let NN = 0;
function Ku(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function M1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Xw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && M1(r);
}
function N1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = NN++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(ON),
            this.nodes.forEach(_N),
            this.nodes.forEach(VN),
            this.nodes.forEach(jN));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new kN());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ih()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      ((this.isSVG = bh(s) && !LM(s)), (this.instance = s));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (oe.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = RN(f, 250)),
              Pa.hasAnimatedSinceResize &&
                ((Pa.hasAnimatedSinceResize = !1), this.nodes.forEach(Ag)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const x =
                  this.options.transition || u.getDefaultTransition() || WN,
                { onLayoutAnimationStart: p, onLayoutAnimationComplete: w } =
                  u.getProps(),
                m = !this.targetLayout || !k1(this.targetLayout, h),
                g = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                g ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...yh(x, "layout"), onPlay: p, onComplete: w };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, g));
              } else
                (d || Ag(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = h;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        lr(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(zN),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          M1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(kg));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Rg);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(FN),
            this.nodes.forEach(DN),
            this.nodes.forEach(LN))
          : this.nodes.forEach(Rg),
        this.clearAllSnapshots());
      const a = Ue.now();
      ((Ae.delta = tn(0, 1e3 / 60, a - Ae.timestamp)),
        (Ae.timestamp = a),
        (Ae.isProcessing = !0),
        Fu.update.process(Ae),
        Fu.preRender.process(Ae),
        Fu.render.process(Ae),
        (Ae.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Eh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(IN), this.sharedNodes.forEach(BN));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !We(this.snapshot.measuredBox.x) &&
          !We(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Ce()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !P1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || xr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        HN(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return Ce();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(KN)
        )
      ) {
        const { scroll: c } = this.root;
        c && (go(a.x, c.offset.x), go(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Ce();
      if ((kt(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && kt(a, s), go(a.x, d.offset.x), go(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Ce();
      kt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          yo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          xr(c.latestValues) && yo(l, c.latestValues));
      }
      return (xr(this.latestValues) && yo(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = Ce();
      kt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !xr(u.latestValues)) continue;
        jd(u.latestValues) && u.updateSnapshot();
        const c = Ce(),
          d = u.measurePageBox();
        (kt(c, d),
          vg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (xr(this.latestValues) && vg(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = Ae.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (f && f.layout
            ? this.createRelativeTarget(
                f,
                this.layout.layoutBox,
                f.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ce()), (this.targetWithTransforms = Ce())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              mN(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : kt(this.target, this.layout.layoutBox),
                p1(this.target, this.targetDelta))
              : kt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          jd(this.parent.latestValues) ||
          h1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(s, a, l) {
      ((this.relativeParent = s),
        (this.linkedParentVersion = s.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ce()),
        (this.relativeTargetOrigin = Ce()),
        hl(this.relativeTargetOrigin, a, l),
        kt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var x;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((x = this.parent) != null && x.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Ae.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      kt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      (WM(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Ce())));
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fg(this.prevProjectionDelta.x, this.projectionDelta.x),
          fg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ji(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Cg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Cg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = mo()),
        (this.projectionDelta = mo()),
        (this.projectionDeltaWithTransform = mo()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = mo();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = Ce(),
        h = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        p = h !== x,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        g = !!(p && !m && this.options.crossfade === !0 && !this.path.some(UN));
      this.animationProgress = 0;
      let y;
      ((this.mixTargetDelta = (E) => {
        const C = E / 1e3;
        (Mg(d.x, s.x, C),
          Mg(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            $N(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && xN(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Ce()),
            kt(y, this.relativeTarget)),
          p &&
            ((this.animationValues = c), EN(c, u, this.latestValues, C, g, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (lr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = oe.update(() => {
          ((Pa.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Go(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = TN(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(MN),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          D1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ce();
          const d = We(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + d));
          const f = We(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + f));
        }
        (kt(a, l),
          yo(a, c),
          ji(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new AN()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ku("z", s, u, this.animationValues);
      for (let c = 0; c < Hu.length; c++)
        (Ku(`rotate${Hu[c]}`, s, u, this.animationValues),
          Ku(`skew${Hu[c]}`, s, u, this.animationValues));
      s.render();
      for (const c in u)
        (s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = Ta(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = Ta(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !xr(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = wN(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (d = l(c, d)), (s.transform = d));
      const { x: f, y: h } = this.projectionDelta;
      ((s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const x in Fd) {
        if (c[x] === void 0) continue;
        const { correct: p, applyTo: w, isCSSVariable: m } = Fd[x],
          g = d === "none" ? c[x] : p(c[x], u);
        if (w) {
          const y = w.length;
          for (let E = 0; E < y; E++) s[w[E]] = g;
        } else
          m ? (this.options.visualElement.renderState.vars[x] = g) : (s[x] = g);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? Ta(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(kg),
        this.root.sharedNodes.clear());
    }
  };
}
function DN(e) {
  e.updateLayout();
}
function LN(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = t.source !== e.layout.source;
    i === "size"
      ? Wt((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = We(f);
          ((f.min = r[d].min), (f.max = f.min + h));
        })
      : D1(i, t.layoutBox, r) &&
        Wt((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = We(r[d]);
          ((f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h)));
        });
    const a = mo();
    ji(a, r, t.layoutBox);
    const l = mo();
    s ? ji(l, e.applyTransform(o, !0), t.measuredBox) : ji(l, r, t.layoutBox);
    const u = !P1(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const x = Ce();
          hl(x, t.layoutBox, f.layoutBox);
          const p = Ce();
          (hl(p, r, h.layoutBox),
            k1(x, p) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = p),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ON(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function jN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function IN(e) {
  e.clearSnapshot();
}
function kg(e) {
  e.clearMeasurements();
}
function Rg(e) {
  e.isLayoutDirty = !1;
}
function FN(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Ag(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function _N(e) {
  e.resolveTargetDelta();
}
function VN(e) {
  e.calcProjection();
}
function zN(e) {
  e.resetSkewAndRotation();
}
function BN(e) {
  e.removeLeadSnapshot();
}
function Mg(e, t, n) {
  ((e.translate = he(t.translate, 0, n)),
    (e.scale = he(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Ng(e, t, n, r) {
  ((e.min = he(t.min, n.min, r)), (e.max = he(t.max, n.max, r)));
}
function $N(e, t, n, r) {
  (Ng(e.x, t.x, n.x, r), Ng(e.y, t.y, n.y, r));
}
function UN(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const WN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Dg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Lg = Dg("applewebkit/") && !Dg("chrome/") ? Math.round : vt;
function Og(e) {
  ((e.min = Lg(e.min)), (e.max = Lg(e.max)));
}
function HN(e) {
  (Og(e.x), Og(e.y));
}
function D1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !pN(Eg(t), Eg(n), 0.2))
  );
}
function KN(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const GN = N1({
    attachResizeListener: (e, t) => us(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Gu = { current: void 0 },
  L1 = N1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Gu.current) {
        const e = new GN({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Gu.current = e));
      }
      return Gu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Ah = v.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function jg(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function YN(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = jg(o, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : jg(e[o], null);
        }
      };
  };
}
function QN(...e) {
  return v.useCallback(YN(...e), e);
}
class XN extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = n.offsetParent,
        o = (Ld(r) && r.offsetWidth) || 0,
        i = (Ld(r) && r.offsetHeight) || 0,
        s = this.props.sizeRef.current;
      ((s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft),
        (s.right = o - s.width - s.left),
        (s.bottom = i - s.height - s.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function qN({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: o,
  pop: i,
}) {
  var f;
  const s = v.useId(),
    a = v.useRef(null),
    l = v.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = v.useContext(Ah),
    c =
      ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref),
    d = QN(a, c);
  return (
    v.useInsertionEffect(() => {
      const {
        width: h,
        height: x,
        top: p,
        left: w,
        right: m,
        bottom: g,
      } = l.current;
      if (t || i === !1 || !a.current || !h || !x) return;
      const y = n === "left" ? `left: ${w}` : `right: ${m}`,
        E = r === "bottom" ? `bottom: ${g}` : `top: ${p}`;
      a.current.dataset.motionPopId = s;
      const C = document.createElement("style");
      u && (C.nonce = u);
      const b = o ?? document.head;
      return (
        b.appendChild(C),
        C.sheet &&
          C.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${x}px !important;
            ${y}px !important;
            ${E}px !important;
          }
        `),
        () => {
          b.contains(C) && b.removeChild(C);
        }
      );
    }, [t]),
    S.jsx(XN, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: i,
      children: i === !1 ? e : v.cloneElement(e, { ref: d }),
    })
  );
}
const ZN = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = rh(JN),
    d = v.useId();
  let f = !0,
    h = v.useMemo(
      () => (
        (f = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: o,
          onExitComplete: (x) => {
            c.set(x, !0);
            for (const p of c.values()) if (!p) return;
            r && r();
          },
          register: (x) => (c.set(x, !1), () => c.delete(x)),
        }
      ),
      [n, c, r],
    );
  return (
    i && f && (h = { ...h }),
    v.useMemo(() => {
      c.forEach((x, p) => c.set(p, !1));
    }, [n]),
    v.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = S.jsx(qN, {
      pop: s === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    S.jsx(Hl.Provider, { value: h, children: e })
  );
};
function JN() {
  return new Map();
}
function O1(e = !0) {
  const t = v.useContext(Hl);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t,
    i = v.useId();
  v.useEffect(() => {
    if (e) return o(i);
  }, [e]);
  const s = v.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const ea = (e) => e.key || "";
function Ig(e) {
  const t = [];
  return (
    v.Children.forEach(e, (n) => {
      v.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Fg = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: i = "sync",
    propagate: s = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, d] = O1(s),
      f = v.useMemo(() => Ig(e), [e]),
      h = s && !c ? [] : f.map(ea),
      x = v.useRef(!0),
      p = v.useRef(f),
      w = rh(() => new Map()),
      m = v.useRef(new Set()),
      [g, y] = v.useState(f),
      [E, C] = v.useState(f);
    lw(() => {
      ((x.current = !1), (p.current = f));
      for (let P = 0; P < E.length; P++) {
        const M = ea(E[P]);
        h.includes(M)
          ? (w.delete(M), m.current.delete(M))
          : w.get(M) !== !0 && w.set(M, !1);
      }
    }, [E, h.length, h.join("-")]);
    const b = [];
    if (f !== g) {
      let P = [...f];
      for (let M = 0; M < E.length; M++) {
        const N = E[M],
          z = ea(N);
        h.includes(z) || (P.splice(M, 0, N), b.push(N));
      }
      return (i === "wait" && b.length && (P = b), C(Ig(P)), y(f), null);
    }
    const { forceRender: T } = v.useContext(nh);
    return S.jsx(S.Fragment, {
      children: E.map((P) => {
        const M = ea(P),
          N = s && !c ? !1 : f === E || h.includes(M),
          z = () => {
            if (m.current.has(M)) return;
            if ((m.current.add(M), w.has(M))) w.set(M, !0);
            else return;
            let I = !0;
            (w.forEach((K) => {
              K || (I = !1);
            }),
              I &&
                (T == null || T(),
                C(p.current),
                s && (d == null || d()),
                r && r()));
          };
        return S.jsx(
          ZN,
          {
            isPresent: N,
            initial: !x.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: o,
            mode: i,
            root: u,
            onExitComplete: N ? void 0 : z,
            anchorX: a,
            anchorY: l,
            children: P,
          },
          M,
        );
      }),
    });
  },
  j1 = v.createContext({ strict: !1 }),
  _g = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Vg = !1;
function eD() {
  if (Vg) return;
  const e = {};
  for (const t in _g) e[t] = { isEnabled: (n) => _g[t].some((r) => !!n[r]) };
  (c1(e), (Vg = !0));
}
function I1() {
  return (eD(), zM());
}
function tD(e) {
  const t = I1();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  c1(t);
}
const nD = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function pl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    nD.has(e)
  );
}
let F1 = (e) => !pl(e);
function rD(e) {
  typeof e == "function" && (F1 = (t) => (t.startsWith("on") ? !pl(t) : e(t)));
}
try {
  rD(require("@emotion/is-prop-valid").default);
} catch {}
function oD(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((F1(o) ||
        (n === !0 && pl(o)) ||
        (!t && !pl(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
const Ql = v.createContext({});
function iD(e, t) {
  if (Yl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ls(n) ? n : void 0,
      animate: ls(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function sD(e) {
  const { initial: t, animate: n } = iD(e, v.useContext(Ql));
  return v.useMemo(() => ({ initial: t, animate: n }), [zg(t), zg(n)]);
}
function zg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Mh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function _1(e, t, n) {
  for (const r in t) !_e(t[r]) && !y1(r, n) && (e[r] = t[r]);
}
function aD({ transformTemplate: e }, t) {
  return v.useMemo(() => {
    const n = Mh();
    return (kh(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function lD(e, t) {
  const n = e.style || {},
    r = {};
  return (_1(r, n, e), Object.assign(r, aD(e, t)), r);
}
function uD(e, t) {
  const n = {},
    r = lD(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const V1 = () => ({ ...Mh(), attrs: {} });
function cD(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = V1();
    return (
      v1(i, t, w1(r), e.transformTemplate, e.style),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (_1(i, e.style, e), (o.style = { ...i, ...o.style }));
  }
  return o;
}
const dD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Nh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(dD.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function fD(e, t, n, { latestValues: r }, o, i = !1, s) {
  const l = ((s ?? Nh(e)) ? cD : uD)(t, r, o, e),
    u = oD(t, typeof e == "string", i),
    c = e !== v.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    f = v.useMemo(() => (_e(d) ? d.get() : d), [d]);
  return v.createElement(e, { ...c, children: f });
}
function hD({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return { latestValues: pD(n, r, o, e), renderState: t() };
}
function pD(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Ta(i[f]);
  let { initial: s, animate: a } = e;
  const l = Yl(e),
    u = l1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Gl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const x = xh(e, f[h]);
      if (x) {
        const { transitionEnd: p, transition: w, ...m } = x;
        for (const g in m) {
          let y = m[g];
          if (Array.isArray(y)) {
            const E = c ? y.length - 1 : 0;
            y = y[E];
          }
          y !== null && (o[g] = y);
        }
        for (const g in p) o[g] = p[g];
      }
    }
  }
  return o;
}
const z1 = (e) => (t, n) => {
    const r = v.useContext(Ql),
      o = v.useContext(Hl),
      i = () => hD(e, t, r, o);
    return n ? i() : rh(i);
  },
  mD = z1({ scrapeMotionValuesFromProps: Rh, createRenderState: Mh }),
  gD = z1({ scrapeMotionValuesFromProps: S1, createRenderState: V1 }),
  yD = Symbol.for("motionComponentSymbol");
function vD(e, t, n) {
  const r = v.useRef(n);
  v.useInsertionEffect(() => {
    r.current = n;
  });
  const o = v.useRef(null);
  return v.useCallback(
    (i) => {
      var a;
      (i && ((a = e.onMount) == null || a.call(e, i)),
        t && (i ? t.mount(i) : t.unmount()));
      const s = r.current;
      if (typeof s == "function")
        if (i) {
          const l = s(i);
          typeof l == "function" && (o.current = l);
        } else o.current ? (o.current(), (o.current = null)) : s(i);
      else s && (s.current = i);
    },
    [t],
  );
}
const B1 = v.createContext({});
function Jr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function xD(e, t, n, r, o, i) {
  var y, E;
  const { visualElement: s } = v.useContext(Ql),
    a = v.useContext(j1),
    l = v.useContext(Hl),
    u = v.useContext(Ah),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = v.useRef(null),
    h = v.useRef(!1);
  ((r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: i,
      })),
      h.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  const x = f.current,
    p = v.useContext(B1);
  x &&
    !x.projection &&
    o &&
    (x.type === "html" || x.type === "svg") &&
    wD(f.current, n, o, p);
  const w = v.useRef(!1);
  v.useInsertionEffect(() => {
    x && w.current && x.update(n, l);
  });
  const m = n[Qw],
    g = v.useRef(
      !!m &&
        !((y = window.MotionHandoffIsComplete) != null && y.call(window, m)) &&
        ((E = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : E.call(window, m)),
    );
  return (
    lw(() => {
      ((h.current = !0),
        x &&
          ((w.current = !0),
          (window.MotionIsMounted = !0),
          x.updateFeatures(),
          x.scheduleRenderMicrotask(),
          g.current && x.animationState && x.animationState.animateChanges()));
    }),
    v.useEffect(() => {
      x &&
        (!g.current && x.animationState && x.animationState.animateChanges(),
        g.current &&
          (queueMicrotask(() => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null ||
              C.call(window, m);
          }),
          (g.current = !1)),
        (x.enteringChildren = void 0));
    }),
    x
  );
}
function wD(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : $1(e.parent),
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Jr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function $1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : $1(e.parent);
}
function Yu(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
  r && tD(r);
  const i = n ? n === "svg" : Nh(e),
    s = i ? gD : mD;
  function a(u, c) {
    let d;
    const f = { ...v.useContext(Ah), ...u, layoutId: SD(u) },
      { isStatic: h } = f,
      x = sD(u),
      p = s(u, h);
    if (!h && aw) {
      ED();
      const w = CD(f);
      ((d = w.MeasureLayout),
        (x.visualElement = xD(e, p, f, o, w.ProjectionNode, i)));
    }
    return S.jsxs(Ql.Provider, {
      value: x,
      children: [
        d && x.visualElement
          ? S.jsx(d, { visualElement: x.visualElement, ...f })
          : null,
        fD(e, u, vD(p, x.visualElement, c), p, h, t, i),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = v.forwardRef(a);
  return ((l[yD] = e), l);
}
function SD({ layoutId: e }) {
  const t = v.useContext(nh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ED(e, t) {
  v.useContext(j1).strict;
}
function CD(e) {
  const t = I1(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const o = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? o.MeasureLayout
        : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function bD(e, t) {
  if (typeof Proxy > "u") return Yu;
  const n = new Map(),
    r = (i, s) => Yu(i, s, e, t),
    o = (i, s) => r(i, s);
  return new Proxy(o, {
    get: (i, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, Yu(s, void 0, e, t)), n.get(s)),
  });
}
const TD = (e, t) =>
  (t.isSVG ?? Nh(e))
    ? new rN(t)
    : new qM(t, { allowProjection: e !== v.Fragment });
class PD extends fr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = lN(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Gl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let kD = 0;
class RD extends fr {
  constructor() {
    (super(...arguments), (this.id = kD++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      o.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const AD = { animation: { Feature: PD }, exit: { Feature: RD } };
function Ts(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const MD = (e) => (t) => Ch(t) && e(t, Ts(t));
function Ii(e, t, n, r) {
  return us(e, t, MD(n), r);
}
const U1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Bg = (e, t) => Math.abs(e - t);
function ND(e, t) {
  const n = Bg(e.x, t.x),
    r = Bg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const $g = new Set(["auto", "scroll"]);
class W1 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: o = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: s = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Xu(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          p = ND(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!x && !p) return;
        const { point: w } = h,
          { timestamp: m } = Ae;
        this.history.push({ ...w, timestamp: m });
        const { onStart: g, onMove: y } = this.handlers;
        (x ||
          (g && g(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, x) => {
        ((this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Qu(x, this.transformPagePoint)),
          oe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, x) => {
        this.end();
        const { onEnd: p, onSessionEnd: w, resumeAnimation: m } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const g = Xu(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Qu(x, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && p && p(h, g), w && w(h, g));
      }),
      !Ch(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = o || window));
    const l = Ts(t),
      u = Qu(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = Ae;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    (f && f(t, Xu(u, this.history)),
      (this.removeListeners = Es(
        Ii(this.contextWindow, "pointermove", this.handlePointerMove),
        Ii(this.contextWindow, "pointerup", this.handlePointerUp),
        Ii(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      (($g.has(r.overflowX) || $g.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      o = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      i = { x: o.x - n.x, y: o.y - n.y };
    (i.x === 0 && i.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += i.x),
          (this.lastMoveEventInfo.point.y += i.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
      this.scrollPositions.set(t, o),
      oe.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      lr(this.updatePoint));
  }
}
function Qu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ug(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xu({ point: e }, t) {
  return {
    point: e,
    delta: Ug(e, H1(t)),
    offset: Ug(e, DD(t)),
    velocity: LD(t, 0.1),
  };
}
function DD(e) {
  return e[0];
}
function H1(e) {
  return e[e.length - 1];
}
function LD(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = H1(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > xt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    o.timestamp - r.timestamp > xt(t) * 2 &&
    (r = e[1]);
  const i = gt(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function OD(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? he(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Wg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function jD(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Wg(e.x, n, o), y: Wg(e.y, t, r) };
}
function Hg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function ID(e, t) {
  return { x: Hg(e.x, t.x), y: Hg(e.y, t.y) };
}
function FD(e, t) {
  let n = 0.5;
  const r = We(e),
    o = We(t);
  return (
    o > r
      ? (n = is(t.min, t.max - r, e.min))
      : r > o && (n = is(e.min, e.max - o, t.min)),
    tn(0, 1, n)
  );
}
function _D(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const _d = 0.35;
function VD(e = _d) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = _d),
    { x: Kg(e, "left", "right"), y: Kg(e, "top", "bottom") }
  );
}
function Kg(e, t, n) {
  return { min: Gg(e, t), max: Gg(e, n) };
}
function Gg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const zD = new WeakMap();
class BD {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ce()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1) return;
    const i = (d) => {
        (n && this.snapToCursor(Ts(d).point), this.stopAnimation());
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: x, onDragStart: p } = this.getProps();
        if (
          h &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = gM(h)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Wt((m) => {
            let g = this.getAxisMotionValue(m).get() || 0;
            if (Zt.test(g)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const E = y.layout.layoutBox[m];
                E && (g = We(E) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[m] = g;
          }),
          p && oe.update(() => p(d, f), !1, !0),
          Ad(this.visualElement, "transform"));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = f));
        const {
          dragPropagation: h,
          dragDirectionLock: x,
          onDirectionLock: p,
          onDrag: w,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: m } = f;
        if (x && this.currentDirection === null) {
          ((this.currentDirection = UD(m)),
            this.currentDirection !== null && p && p(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, m),
          this.updateAxis("y", f.point, m),
          this.visualElement.render(),
          w && oe.update(() => w(d, f), !1, !0));
      },
      l = (d, f) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new W1(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: U1(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      o = n || this.latestPanInfo,
      i = this.isDragging;
    if ((this.cancel(), !i || !o || !r)) return;
    const { velocity: s } = o;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && oe.postRender(() => a(r, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ta(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = OD(s, this.constraints[t], this.elastic[t])),
      i.set(s));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) == null
            ? void 0
            : i.layout,
      o = this.constraints;
    (t && Jr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = jD(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = VD(n)),
      o !== this.constraints &&
        !Jr(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Wt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = _D(r.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Jr(t)) return !1;
    const r = t.current;
    Ko(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = HM(r, o.root, this.visualElement.getTransformPagePoint());
    let s = ID(o.layout.layoutBox, i);
    if (n) {
      const a = n($M(s));
      ((this.hasMutatedConstraints = !!a), a && (s = f1(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Wt((c) => {
        if (!ta(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ad(this.visualElement, t),
      r.start(vh(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Wt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Wt((n) => {
      const { drag: r } = this.getProps();
      if (!ta(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n],
          l = i.get() || 0;
        i.set(t[n] - he(s, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Jr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Wt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = FD({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Wt((s) => {
        if (!ta(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(he(l, u, o[s]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    zD.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ii(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          h = f !== t && EM(f);
        c && d && !h && this.start(u);
      });
    let r;
    const o = () => {
        const { dragConstraints: u } = this.getProps();
        Jr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = $D(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", o);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      oe.read(o));
    const a = us(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Wt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), s(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = _d,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Yg(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function $D(e, t, n) {
  const r = eg(e, Yg(n)),
    o = eg(t, Yg(n));
  return () => {
    (r(), o());
  };
}
function ta(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function UD(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class WD extends fr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = vt),
      (this.removeListeners = vt),
      (this.controls = new BD(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || vt));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const qu = (e) => (t, n) => {
  e && oe.update(() => e(t, n), !1, !0);
};
class HD extends fr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = vt));
  }
  onPointerDown(t) {
    this.session = new W1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: U1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: qu(t),
      onStart: qu(n),
      onMove: qu(r),
      onEnd: (i, s) => {
        (delete this.session, o && oe.postRender(() => o(i, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ii(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Zu = !1;
class KD extends v.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    (i &&
      (n.group && n.group.add(i),
      r && r.register && o && r.register(i),
      Zu && i.root.didUpdate(),
      i.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      i.setOptions({
        ...i.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Pa.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = i),
        t.layoutDependency !== n &&
          s.setOptions({ ...s.options, layoutDependency: n }),
        (Zu = !0),
        o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              oe.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Eh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    ((Zu = !0),
      o &&
        (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function K1(e) {
  const [t, n] = O1(),
    r = v.useContext(nh);
  return S.jsx(KD, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: v.useContext(B1),
    isPresent: t,
    safeToRemove: n,
  });
}
const GD = {
  pan: { Feature: HD },
  drag: { Feature: WD, ProjectionNode: L1, MeasureLayout: K1 },
};
function Qg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    i = r[o];
  i && oe.postRender(() => i(t, Ts(t)));
}
class YD extends fr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = vM(
        t,
        (n, r) => (Qg(this.node, r, "Start"), (o) => Qg(this.node, o, "End")),
      ));
  }
  unmount() {}
}
class QD extends fr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Es(
      us(this.node.current, "focus", () => this.onFocus()),
      us(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Xg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    i = r[o];
  i && oe.postRender(() => i(t, Ts(t)));
}
class XD extends fr {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = bM(
      t,
      (o, i) => (
        Xg(this.node, i, "Start"),
        (s, { success: a }) => Xg(this.node, s, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Vd = new WeakMap(),
  Ju = new WeakMap(),
  qD = (e) => {
    const t = Vd.get(e.target);
    t && t(e);
  },
  ZD = (e) => {
    e.forEach(qD);
  };
function JD({ root: e, ...t }) {
  const n = e || document;
  Ju.has(n) || Ju.set(n, {});
  const r = Ju.get(n),
    o = JSON.stringify(t);
  return (
    r[o] || (r[o] = new IntersectionObserver(ZD, { root: e, ...t })),
    r[o]
  );
}
function eL(e, t, n) {
  const r = JD(t);
  return (
    Vd.set(e, n),
    r.observe(e),
    () => {
      (Vd.delete(e), r.unobserve(e));
    }
  );
}
const tL = { some: 0, all: 1 };
class nL extends fr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : tL[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return eL(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(rL(t, n)) && this.startObserver();
  }
  unmount() {}
}
function rL({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const oL = {
    inView: { Feature: nL },
    tap: { Feature: XD },
    focus: { Feature: QD },
    hover: { Feature: YD },
  },
  iL = { layout: { ProjectionNode: L1, MeasureLayout: K1 } },
  sL = { ...AD, ...oL, ...GD, ...iL },
  fn = bD(sL, TD),
  aL = () =>
    S.jsx(fn.header, {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      className: "fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20",
      children: S.jsxs("nav", {
        className: "flex items-center justify-between max-w-7xl mx-auto",
        children: [
          S.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              S.jsx("div", {
                className:
                  "w-10 h-10 rounded-xl bg-primary flex items-center justify-center",
                children: S.jsx("span", {
                  className: "sr-only",
                  children: "Logo",
                }),
              }),
              S.jsxs("span", {
                className: "text-lg font-medium",
                children: [
                  "Transformers ",
                  S.jsx("span", {
                    className: "text-primary",
                    children: "Marks",
                  }),
                ],
              }),
            ],
          }),
          S.jsxs("ul", {
            className: "hidden md:flex items-center gap-8",
            children: [
              S.jsx("li", {
                children: S.jsx("a", {
                  href: "#about",
                  className: "nav-link text-sm",
                  children: "About",
                }),
              }),
              S.jsx("li", {
                children: S.jsx("a", {
                  href: "#properties",
                  className: "nav-link text-sm",
                  children: "Properties",
                }),
              }),
              S.jsx("li", {
                children: S.jsx("a", {
                  href: "#contact",
                  className: "nav-link text-sm",
                  children: "Contact",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  lL = () =>
    S.jsx("footer", {
      className: "py-6 px-6 md:px-12 lg:px-20 border-t border-border",
      children: S.jsxs("div", {
        className:
          "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",
        children: [
          S.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "© 2025 Transformers Marks. All rights reserved.",
          }),
          S.jsxs("div", {
            className: "flex items-center gap-6",
            children: [
              S.jsx("a", {
                href: "#",
                className:
                  "text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: "Privacy Policy",
              }),
              S.jsx("a", {
                href: "#",
                className:
                  "text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: "Terms of Service",
              }),
            ],
          }),
        ],
      }),
    }),
  uL = ({ currentStep: e, totalSteps: t }) =>
    S.jsx("div", {
      className: "flex items-center justify-center gap-1 mb-8",
      children: Array.from({ length: t }).map((n, r) =>
        S.jsxs(
          "div",
          {
            className: "flex items-center",
            children: [
              S.jsx("div", {
                className: `w-2 h-2 rounded-full transition-all duration-300 ${r <= e ? "bg-primary" : "bg-muted-foreground/40"}`,
              }),
              r < t - 1 &&
                S.jsx("div", {
                  className: `w-8 h-0.5 transition-all duration-300 ${r < e ? "bg-primary" : "bg-muted-foreground/40"}`,
                }),
            ],
          },
          r,
        ),
      ),
    }),
  cL = [
    {
      id: "apartments",
      title: "Apartments",
      description: "Modern living spaces in prime locations",
      icon: hT,
    },
    {
      id: "villas",
      title: "Villas",
      description: "Luxury independent homes with premium amenities",
      icon: pT,
    },
    {
      id: "plots",
      title: "Plots",
      description: "Prime land for your dream construction",
      icon: Ja,
    },
  ],
  dL = ({ selectedType: e, onSelect: t }) =>
    S.jsxs(fn.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4 },
      className: "text-center",
      children: [
        S.jsx("h2", {
          className: "text-3xl md:text-4xl font-heading mb-3",
          children: "What are you looking for?",
        }),
        S.jsx("p", {
          className: "text-muted-foreground mb-10",
          children: "Select your preferred property type",
        }),
        S.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto",
          children: cL.map((n, r) => {
            const o = n.icon;
            return S.jsxs(
              fn.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: r * 0.1 },
                onClick: () => t(n.id),
                className: `selection-card ${e === n.id ? "active" : ""}`,
                children: [
                  S.jsx("div", {
                    className: "icon-circle",
                    children: S.jsx(o, { className: "w-6 h-6 text-primary" }),
                  }),
                  S.jsx("h3", {
                    className: "text-lg font-medium mb-2",
                    children: n.title,
                  }),
                  S.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: n.description,
                  }),
                ],
              },
              n.id,
            );
          }),
        }),
      ],
    }),
  yi = [
    { id: "whitefield", title: "Whitefield", subtitle: "East Bangalore" },
    {
      id: "electronic-city",
      title: "Electronic City",
      subtitle: "South Bangalore",
    },
    { id: "sarjapur-road", title: "Sarjapur Road", subtitle: "Southeast" },
    { id: "hebbal", title: "Hebbal", subtitle: "North Bangalore" },
    { id: "koramangala", title: "Koramangala", subtitle: "Central" },
  ],
  fL = ({ selectedType: e, selectedLocation: t, onSelect: n }) =>
    S.jsxs(fn.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4 },
      className: "text-center",
      children: [
        S.jsx("h2", {
          className: "text-3xl md:text-4xl font-heading mb-3",
          children: "Where in Bangalore?",
        }),
        S.jsx("p", {
          className: "text-muted-foreground mb-8",
          children: "Choose your preferred location",
        }),
        e &&
          S.jsx("div", {
            className: "flex justify-center mb-8",
            children: S.jsx("span", {
              className:
                "px-4 py-2 border border-primary rounded-full text-sm text-primary capitalize",
              children: e,
            }),
          }),
        S.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-4",
          children: yi
            .slice(0, 4)
            .map((r, o) =>
              S.jsxs(
                fn.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.4, delay: o * 0.1 },
                  onClick: () => n(r.id),
                  className: `selection-card ${t === r.id ? "active" : ""}`,
                  children: [
                    S.jsx("div", {
                      className: "icon-circle",
                      children: S.jsx(Ja, {
                        className: "w-5 h-5 text-primary",
                      }),
                    }),
                    S.jsx("h3", {
                      className: "text-base font-medium mb-1",
                      children: r.title,
                    }),
                    S.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: r.subtitle,
                    }),
                  ],
                },
                r.id,
              ),
            ),
        }),
        S.jsx("div", {
          className: "flex justify-center",
          children: S.jsxs(fn.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.4 },
            onClick: () => n(yi[4].id),
            className: `selection-card w-full sm:w-auto sm:min-w-[200px] ${t === yi[4].id ? "active" : ""}`,
            children: [
              S.jsx("div", {
                className: "icon-circle",
                children: S.jsx(Ja, { className: "w-5 h-5 text-primary" }),
              }),
              S.jsx("h3", {
                className: "text-base font-medium mb-1",
                children: yi[4].title,
              }),
              S.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: yi[4].subtitle,
              }),
            ],
          }),
        }),
      ],
    }),
  hL = [
    { id: "50l-1cr", title: "50L - 1Cr", subtitle: "Budget Friendly" },
    { id: "1cr-2cr", title: "1Cr - 2Cr", subtitle: "Mid Range" },
    { id: "2cr-5cr", title: "2Cr - 5Cr", subtitle: "Premium" },
    { id: "5cr+", title: "5Cr+", subtitle: "Ultra Luxury" },
  ],
  pL = ({
    selectedType: e,
    selectedLocation: t,
    selectedBudget: n,
    onSelect: r,
  }) => {
    const o = (i) =>
      i
        ? i
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join(" ")
        : "";
    return S.jsxs(fn.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4 },
      className: "text-center",
      children: [
        S.jsx("h2", {
          className: "text-3xl md:text-4xl font-heading mb-3",
          children: "Your Budget Range",
        }),
        S.jsx("p", {
          className: "text-muted-foreground mb-8",
          children: "Select your investment range",
        }),
        S.jsxs("div", {
          className: "flex flex-wrap justify-center gap-3 mb-8",
          children: [
            e &&
              S.jsx("span", {
                className:
                  "px-4 py-2 border border-primary rounded-full text-sm text-primary capitalize",
                children: e,
              }),
            t &&
              S.jsx("span", {
                className:
                  "px-4 py-2 border border-primary rounded-full text-sm text-primary",
                children: o(t),
              }),
          ],
        }),
        S.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto",
          children: hL.map((i, s) =>
            S.jsxs(
              fn.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: s * 0.1 },
                onClick: () => r(i.id),
                className: `selection-card ${n === i.id ? "active" : ""}`,
                children: [
                  S.jsx("div", {
                    className: "icon-circle",
                    children: S.jsx(sx, { className: "w-5 h-5 text-primary" }),
                  }),
                  S.jsx("h3", {
                    className: "text-base font-medium mb-1",
                    children: i.title,
                  }),
                  S.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: i.subtitle,
                  }),
                ],
              },
              i.id,
            ),
          ),
        }),
      ],
    });
  };
var ec = "focusScope.autoFocusOnMount",
  tc = "focusScope.autoFocusOnUnmount",
  qg = { bubbles: !1, cancelable: !0 },
  mL = "FocusScope",
  G1 = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = v.useState(null),
      u = Jt(o),
      c = Jt(i),
      d = v.useRef(null),
      f = Ke(t, (p) => l(p)),
      h = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (v.useEffect(() => {
      if (r) {
        let p = function (y) {
            if (h.paused || !a) return;
            const E = y.target;
            a.contains(E) ? (d.current = E) : On(d.current, { select: !0 });
          },
          w = function (y) {
            if (h.paused || !a) return;
            const E = y.relatedTarget;
            E !== null && (a.contains(E) || On(d.current, { select: !0 }));
          },
          m = function (y) {
            if (document.activeElement === document.body)
              for (const C of y) C.removedNodes.length > 0 && On(a);
          };
        (document.addEventListener("focusin", p),
          document.addEventListener("focusout", w));
        const g = new MutationObserver(m);
        return (
          a && g.observe(a, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", w),
              g.disconnect());
          }
        );
      }
    }, [r, a, h.paused]),
      v.useEffect(() => {
        if (a) {
          Jg.add(h);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const m = new CustomEvent(ec, qg);
            (a.addEventListener(ec, u),
              a.dispatchEvent(m),
              m.defaultPrevented ||
                (gL(SL(Y1(a)), { select: !0 }),
                document.activeElement === p && On(a)));
          }
          return () => {
            (a.removeEventListener(ec, u),
              setTimeout(() => {
                const m = new CustomEvent(tc, qg);
                (a.addEventListener(tc, c),
                  a.dispatchEvent(m),
                  m.defaultPrevented || On(p ?? document.body, { select: !0 }),
                  a.removeEventListener(tc, c),
                  Jg.remove(h));
              }, 0));
          };
        }
      }, [a, u, c, h]));
    const x = v.useCallback(
      (p) => {
        if ((!n && !r) || h.paused) return;
        const w = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          m = document.activeElement;
        if (w && m) {
          const g = p.currentTarget,
            [y, E] = yL(g);
          y && E
            ? !p.shiftKey && m === E
              ? (p.preventDefault(), n && On(y, { select: !0 }))
              : p.shiftKey &&
                m === y &&
                (p.preventDefault(), n && On(E, { select: !0 }))
            : m === g && p.preventDefault();
        }
      },
      [n, r, h.paused],
    );
    return S.jsx(xe.div, { tabIndex: -1, ...s, ref: f, onKeyDown: x });
  });
G1.displayName = mL;
function gL(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((On(r, { select: t }), document.activeElement !== n)) return;
}
function yL(e) {
  const t = Y1(e),
    n = Zg(t, e),
    r = Zg(t.reverse(), e);
  return [n, r];
}
function Y1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zg(e, t) {
  for (const n of e) if (!vL(n, { upTo: t })) return n;
}
function vL(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function xL(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function On(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && xL(e) && t && e.select());
  }
}
var Jg = wL();
function wL() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = ey(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = ey(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function ey(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function SL(e) {
  return e.filter((t) => t.tagName !== "A");
}
var nc = 0;
function EL() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? ty()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? ty()),
      nc++,
      () => {
        (nc === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          nc--);
      }
    );
  }, []);
}
function ty() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Qt = function () {
  return (
    (Qt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Qt.apply(this, arguments)
  );
};
function Q1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function CL(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ka = "right-scroll-bar-position",
  Ra = "width-before-scroll-bar",
  bL = "with-scroll-bars-hidden",
  TL = "--removed-body-scroll-bar-size";
function rc(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function PL(e, t) {
  var n = v.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var kL = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  ny = new WeakMap();
function RL(e, t) {
  var n = PL(null, function (r) {
    return e.forEach(function (o) {
      return rc(o, r);
    });
  });
  return (
    kL(
      function () {
        var r = ny.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          (o.forEach(function (a) {
            i.has(a) || rc(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || rc(a, s);
            }));
        }
        ny.set(n, e);
      },
      [e],
    ),
    n
  );
}
function AL(e) {
  return e;
}
function ML(e, t) {
  t === void 0 && (t = AL);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          ((n = []), s.forEach(i));
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          ((n = []), a.forEach(i), (s = n));
        }
        var l = function () {
            var c = s;
            ((s = []), c.forEach(i));
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        (u(),
          (n = {
            push: function (c) {
              (s.push(c), u());
            },
            filter: function (c) {
              return ((s = s.filter(c)), n);
            },
          }));
      },
    };
  return o;
}
function NL(e) {
  e === void 0 && (e = {});
  var t = ML(null);
  return ((t.options = Qt({ async: !0, ssr: !1 }, e)), t);
}
var X1 = function (e) {
  var t = e.sideCar,
    n = Q1(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, Qt({}, n));
};
X1.isSideCarExport = !0;
function DL(e, t) {
  return (e.useMedium(t), X1);
}
var q1 = NL(),
  oc = function () {},
  Xl = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: oc,
        onWheelCapture: oc,
        onTouchMoveCapture: oc,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      h = e.noRelative,
      x = e.noIsolation,
      p = e.inert,
      w = e.allowPinchZoom,
      m = e.as,
      g = m === void 0 ? "div" : m,
      y = e.gapMode,
      E = Q1(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = f,
      b = RL([n, t]),
      T = Qt(Qt({}, E), o);
    return v.createElement(
      v.Fragment,
      null,
      c &&
        v.createElement(C, {
          sideCar: q1,
          removeScrollBar: u,
          shards: d,
          noRelative: h,
          noIsolation: x,
          inert: p,
          setCallbacks: i,
          allowPinchZoom: !!w,
          lockRef: n,
          gapMode: y,
        }),
      s
        ? v.cloneElement(v.Children.only(a), Qt(Qt({}, T), { ref: b }))
        : v.createElement(g, Qt({}, T, { className: l, ref: b }), a),
    );
  });
Xl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Xl.classNames = { fullWidth: Ra, zeroRight: ka };
var LL = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function OL() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = LL();
  return (t && e.setAttribute("nonce", t), e);
}
function jL(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function IL(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var FL = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = OL()) && (jL(t, n), IL(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  _L = function () {
    var e = FL();
    return function (t, n) {
      v.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Z1 = function () {
    var e = _L(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  VL = { left: 0, top: 0, right: 0, gap: 0 },
  ic = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  zL = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ic(n), ic(r), ic(o)];
  },
  BL = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return VL;
    var t = zL(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  $L = Z1(),
  Ro = "data-scroll-locked",
  UL = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          bL,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Ro,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ka,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Ra,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ka, " .")
        .concat(
          ka,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ra, " .")
        .concat(
          Ra,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Ro,
          `] {
    `,
        )
        .concat(TL, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  ry = function () {
    var e = parseInt(document.body.getAttribute(Ro) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  WL = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Ro, (ry() + 1).toString()),
        function () {
          var e = ry() - 1;
          e <= 0
            ? document.body.removeAttribute(Ro)
            : document.body.setAttribute(Ro, e.toString());
        }
      );
    }, []);
  },
  HL = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    WL();
    var i = v.useMemo(
      function () {
        return BL(o);
      },
      [o],
    );
    return v.createElement($L, { styles: UL(i, !t, o, n ? "" : "!important") });
  },
  zd = !1;
if (typeof window < "u")
  try {
    var na = Object.defineProperty({}, "passive", {
      get: function () {
        return ((zd = !0), !0);
      },
    });
    (window.addEventListener("test", na, na),
      window.removeEventListener("test", na, na));
  } catch {
    zd = !1;
  }
var Xr = zd ? { passive: !1 } : !1,
  KL = function (e) {
    return e.tagName === "TEXTAREA";
  },
  J1 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !KL(e) && n[t] === "visible")
    );
  },
  GL = function (e) {
    return J1(e, "overflowY");
  },
  YL = function (e) {
    return J1(e, "overflowX");
  },
  oy = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = eS(e, r);
      if (o) {
        var i = tS(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  QL = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  XL = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  eS = function (e, t) {
    return e === "v" ? GL(t) : YL(t);
  },
  tS = function (e, t) {
    return e === "v" ? QL(t) : XL(t);
  },
  qL = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ZL = function (e, t, n, r, o) {
    var i = qL(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      if (!a) break;
      var h = tS(e, a),
        x = h[0],
        p = h[1],
        w = h[2],
        m = p - w - i * x;
      (x || m) && eS(e, a) && ((d += m), (f += x));
      var g = a.parentNode;
      a = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  ra = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  iy = function (e) {
    return [e.deltaX, e.deltaY];
  },
  sy = function (e) {
    return e && "current" in e ? e.current : e;
  },
  JL = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  eO = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  tO = 0,
  qr = [];
function nO(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    o = v.useState(tO++)[0],
    i = v.useState(Z1)[0],
    s = v.useRef(e);
  (v.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var p = CL([e.lockRef.current], (e.shards || []).map(sy), !0).filter(
            Boolean,
          );
          return (
            p.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var a = v.useCallback(function (p, w) {
      if (
        ("touches" in p && p.touches.length === 2) ||
        (p.type === "wheel" && p.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var m = ra(p),
        g = n.current,
        y = "deltaX" in p ? p.deltaX : g[0] - m[0],
        E = "deltaY" in p ? p.deltaY : g[1] - m[1],
        C,
        b = p.target,
        T = Math.abs(y) > Math.abs(E) ? "h" : "v";
      if ("touches" in p && T === "h" && b.type === "range") return !1;
      var P = oy(T, b);
      if (!P) return !0;
      if ((P ? (C = T) : ((C = T === "v" ? "h" : "v"), (P = oy(T, b))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (y || E) && (r.current = C), !C)
      )
        return !0;
      var M = r.current || C;
      return ZL(M, w, p, M === "h" ? y : E, !0);
    }, []),
    l = v.useCallback(function (p) {
      var w = p;
      if (!(!qr.length || qr[qr.length - 1] !== i)) {
        var m = "deltaY" in w ? iy(w) : ra(w),
          g = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              JL(C.delta, m)
            );
          })[0];
        if (g && g.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!g) {
          var y = (s.current.shards || [])
              .map(sy)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            E = y.length > 0 ? a(w, y[0]) : !s.current.noIsolation;
          E && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = v.useCallback(function (p, w, m, g) {
      var y = { name: p, delta: w, target: m, should: g, shadowParent: rO(m) };
      (t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== y;
          });
        }, 1));
    }, []),
    c = v.useCallback(function (p) {
      ((n.current = ra(p)), (r.current = void 0));
    }, []),
    d = v.useCallback(function (p) {
      u(p.type, iy(p), p.target, a(p, e.lockRef.current));
    }, []),
    f = v.useCallback(function (p) {
      u(p.type, ra(p), p.target, a(p, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      qr.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, Xr),
      document.addEventListener("touchmove", l, Xr),
      document.addEventListener("touchstart", c, Xr),
      function () {
        ((qr = qr.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener("wheel", l, Xr),
          document.removeEventListener("touchmove", l, Xr),
          document.removeEventListener("touchstart", c, Xr));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    x = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    x ? v.createElement(i, { styles: eO(o) }) : null,
    h
      ? v.createElement(HL, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function rO(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const oO = DL(q1, nO);
var nS = v.forwardRef(function (e, t) {
  return v.createElement(Xl, Qt({}, e, { ref: t, sideCar: oO }));
});
nS.classNames = Xl.classNames;
var iO = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Zr = new WeakMap(),
  oa = new WeakMap(),
  ia = {},
  sc = 0,
  rS = function (e) {
    return e && (e.host || rS(e.parentNode));
  },
  sO = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = rS(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  aO = function (e, t, n, r) {
    var o = sO(t, Array.isArray(e) ? e : [e]);
    ia[n] || (ia[n] = new WeakMap());
    var i = ia[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) c(f);
          else
            try {
              var h = f.getAttribute(r),
                x = h !== null && h !== "false",
                p = (Zr.get(f) || 0) + 1,
                w = (i.get(f) || 0) + 1;
              (Zr.set(f, p),
                i.set(f, w),
                s.push(f),
                p === 1 && x && oa.set(f, !0),
                w === 1 && f.setAttribute(n, "true"),
                x || f.setAttribute(r, "true"));
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", f, m);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      sc++,
      function () {
        (s.forEach(function (d) {
          var f = Zr.get(d) - 1,
            h = i.get(d) - 1;
          (Zr.set(d, f),
            i.set(d, h),
            f || (oa.has(d) || d.removeAttribute(r), oa.delete(d)),
            h || d.removeAttribute(n));
        }),
          sc--,
          sc ||
            ((Zr = new WeakMap()),
            (Zr = new WeakMap()),
            (oa = new WeakMap()),
            (ia = {})));
      }
    );
  },
  lO = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = iO(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        aO(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  ql = "Dialog",
  [oS, WO] = vs(ql),
  [uO, Bt] = oS(ql),
  iS = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = v.useRef(null),
      l = v.useRef(null),
      [u, c] = F0({ prop: r, defaultProp: o ?? !1, onChange: i, caller: ql });
    return S.jsx(uO, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Lu(),
      titleId: Lu(),
      descriptionId: Lu(),
      open: u,
      onOpenChange: c,
      onOpenToggle: v.useCallback(() => c((d) => !d), [c]),
      modal: s,
      children: n,
    });
  };
iS.displayName = ql;
var sS = "DialogTrigger",
  cO = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Bt(sS, n),
      i = Ke(t, o.triggerRef);
    return S.jsx(xe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Oh(o.open),
      ...r,
      ref: i,
      onClick: ce(e.onClick, o.onOpenToggle),
    });
  });
cO.displayName = sS;
var Dh = "DialogPortal",
  [dO, aS] = oS(Dh, { forceMount: void 0 }),
  lS = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Bt(Dh, t);
    return S.jsx(dO, {
      scope: t,
      forceMount: n,
      children: v.Children.map(r, (s) =>
        S.jsx(qo, {
          present: n || i.open,
          children: S.jsx(Vf, { asChild: !0, container: o, children: s }),
        }),
      ),
    });
  };
lS.displayName = Dh;
var ml = "DialogOverlay",
  uS = v.forwardRef((e, t) => {
    const n = aS(ml, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Bt(ml, e.__scopeDialog);
    return i.modal
      ? S.jsx(qo, {
          present: r || i.open,
          children: S.jsx(hO, { ...o, ref: t }),
        })
      : null;
  });
uS.displayName = ml;
var fO = es("DialogOverlay.RemoveScroll"),
  hO = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Bt(ml, n);
    return S.jsx(nS, {
      as: fO,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: S.jsx(xe.div, {
        "data-state": Oh(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  zr = "DialogContent",
  cS = v.forwardRef((e, t) => {
    const n = aS(zr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Bt(zr, e.__scopeDialog);
    return S.jsx(qo, {
      present: r || i.open,
      children: i.modal
        ? S.jsx(pO, { ...o, ref: t })
        : S.jsx(mO, { ...o, ref: t }),
    });
  });
cS.displayName = zr;
var pO = v.forwardRef((e, t) => {
    const n = Bt(zr, e.__scopeDialog),
      r = v.useRef(null),
      o = Ke(t, n.contentRef, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i) return lO(i);
      }, []),
      S.jsx(dS, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ce(e.onCloseAutoFocus, (i) => {
          var s;
          (i.preventDefault(), (s = n.triggerRef.current) == null || s.focus());
        }),
        onPointerDownOutside: ce(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: ce(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  mO = v.forwardRef((e, t) => {
    const n = Bt(zr, e.__scopeDialog),
      r = v.useRef(!1),
      o = v.useRef(!1);
    return S.jsx(dS, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, a;
        ((s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1));
      },
      onInteractOutside: (i) => {
        var l, u;
        ((l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0)));
        const s = i.target;
        (((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault());
      },
    });
  }),
  dS = v.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      a = Bt(zr, n),
      l = v.useRef(null),
      u = Ke(t, l);
    return (
      EL(),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx(G1, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: S.jsx(Dl, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Oh(a.open),
              ...s,
              ref: u,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(gO, { titleId: a.titleId }),
              S.jsx(vO, { contentRef: l, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Lh = "DialogTitle",
  fS = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Bt(Lh, n);
    return S.jsx(xe.h2, { id: o.titleId, ...r, ref: t });
  });
fS.displayName = Lh;
var hS = "DialogDescription",
  pS = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Bt(hS, n);
    return S.jsx(xe.p, { id: o.descriptionId, ...r, ref: t });
  });
pS.displayName = hS;
var mS = "DialogClose",
  gS = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Bt(mS, n);
    return S.jsx(xe.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: ce(e.onClick, () => o.onOpenChange(!1)),
    });
  });
gS.displayName = mS;
function Oh(e) {
  return e ? "open" : "closed";
}
var yS = "DialogTitleWarning",
  [HO, vS] = yb(yS, { contentName: zr, titleName: Lh, docsSlug: "dialog" }),
  gO = ({ titleId: e }) => {
    const t = vS(yS),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      v.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  yO = "DialogDescriptionWarning",
  vO = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${vS(yO).contentName}}.`;
    return (
      v.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  xO = iS,
  wO = lS,
  xS = uS,
  wS = cS,
  SS = fS,
  ES = pS,
  SO = gS;
const EO = xO,
  CO = wO,
  CS = v.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(xS, {
      ref: n,
      className: Qe(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  );
CS.displayName = xS.displayName;
const bS = v.forwardRef(({ className: e, children: t, ...n }, r) =>
  S.jsxs(CO, {
    children: [
      S.jsx(CS, {}),
      S.jsxs(wS, {
        ref: r,
        className: Qe(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e,
        ),
        ...n,
        children: [
          t,
          S.jsxs(SO, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [
              S.jsx(ax, { className: "h-4 w-4" }),
              S.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
bS.displayName = wS.displayName;
const TS = ({ className: e, ...t }) =>
  S.jsx("div", {
    className: Qe("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
TS.displayName = "DialogHeader";
const PS = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(SS, {
    ref: n,
    className: Qe("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
PS.displayName = SS.displayName;
const kS = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(ES, {
    ref: n,
    className: Qe("text-sm text-muted-foreground", e),
    ...t,
  }),
);
kS.displayName = ES.displayName;
const bO = Uf(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  RS = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? xb : "button";
      return S.jsx(s, {
        className: Qe(bO({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
RS.displayName = "Button";
const Bd = v.forwardRef(({ className: e, type: t, ...n }, r) =>
  S.jsx("input", {
    type: t,
    className: Qe(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Bd.displayName = "Input";
var TO = "Label",
  AS = v.forwardRef((e, t) =>
    S.jsx(xe.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
AS.displayName = TO;
var MS = AS;
const PO = Uf(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  $d = v.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(MS, { ref: n, className: Qe(PO(), e), ...t }),
  );
$d.displayName = MS.displayName;
const kO = ({
    open: e,
    onOpenChange: t,
    selectedType: n,
    selectedLocation: r,
    selectedBudget: o,
  }) => {
    const [i, s] = v.useState(""),
      [a, l] = v.useState(""),
      [u, c] = v.useState(!1),
      { toast: d } = M0(),
      f = async (h) => {
        if ((h.preventDefault(), !i.trim() || !a.trim())) {
          d({
            title: "Please fill all fields",
            description: "Name and phone number are required.",
            variant: "destructive",
          });
          return;
        }
        if (!/^[6-9]\d{9}$/.test(a.trim())) {
          d({
            title: "Invalid phone number",
            description: "Please enter a valid 10-digit Indian mobile number.",
            variant: "destructive",
          });
          return;
        }
        const x = {
          name: i.trim(),
          phone: a.trim(),
          propertyType: n,
          location: r,
          budget: o,
        };
        c(!0);
        try {
          (console.log("Lead payload ready to send:", x),
            d({
              title: "Thank you!",
              description: "Our team will contact you shortly.",
            }),
            s(""),
            l(""),
            t(!1));
        } catch {
          d({
            title: "Something went wrong",
            description: "Please try again later.",
            variant: "destructive",
          });
        } finally {
          c(!1);
        }
      };
    return S.jsx(EO, {
      open: e,
      onOpenChange: t,
      children: S.jsxs(bS, {
        className: "sm:max-w-md bg-card border-primary/20",
        children: [
          S.jsxs(TS, {
            children: [
              S.jsx(PS, {
                className: "text-2xl font-heading text-primary",
                children: "Almost There!",
              }),
              S.jsx(kS, {
                className: "text-muted-foreground",
                children:
                  "Share your details and our team will get back to you with the best options.",
              }),
            ],
          }),
          S.jsxs("form", {
            onSubmit: f,
            className: "space-y-5 mt-2",
            children: [
              S.jsxs("div", {
                className: "space-y-2",
                children: [
                  S.jsx($d, { htmlFor: "name", children: "Full Name" }),
                  S.jsx(Bd, {
                    id: "name",
                    placeholder: "Enter your name",
                    value: i,
                    onChange: (h) => s(h.target.value),
                    maxLength: 100,
                    className: "border-primary/20 focus-visible:ring-primary",
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "space-y-2",
                children: [
                  S.jsx($d, { htmlFor: "phone", children: "Phone Number" }),
                  S.jsx(Bd, {
                    id: "phone",
                    placeholder: "10-digit mobile number",
                    value: a,
                    onChange: (h) =>
                      l(h.target.value.replace(/\D/g, "").slice(0, 10)),
                    className: "border-primary/20 focus-visible:ring-primary",
                  }),
                ],
              }),
              S.jsx(RS, {
                type: "submit",
                disabled: u,
                className:
                  "w-full bg-primary text-primary-foreground hover:bg-primary/90",
                children: u ? "Submitting..." : "Get My Property Matches",
              }),
            ],
          }),
        ],
      }),
    });
  },
  RO = (e) =>
    e
      .split("-")
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join(" "),
  AO = ({ property: e, index: t }) =>
    S.jsxs(fn.div, {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.4, delay: t * 0.05 },
      className:
        "bg-secondary border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group",
      children: [
        S.jsxs("div", {
          className: "relative h-48 overflow-hidden",
          children: [
            S.jsx("img", {
              src: e.image,
              alt: e.name,
              className:
                "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              loading: "lazy",
            }),
            S.jsx("span", {
              className:
                "absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full capitalize",
              children: e.type,
            }),
          ],
        }),
        S.jsxs("div", {
          className: "p-4",
          children: [
            S.jsx("h3", {
              className: "font-heading text-lg font-medium mb-2 line-clamp-1",
              children: e.name,
            }),
            S.jsxs("div", {
              className:
                "flex items-center gap-1.5 text-muted-foreground text-sm mb-2",
              children: [
                S.jsx(Ja, { className: "w-3.5 h-3.5 text-primary" }),
                S.jsx("span", { children: RO(e.location) }),
              ],
            }),
            S.jsxs("div", {
              className:
                "flex items-center gap-1.5 text-primary font-medium text-sm",
              children: [
                S.jsx(sx, { className: "w-3.5 h-3.5" }),
                S.jsx("span", { children: e.priceRange }),
              ],
            }),
          ],
        }),
      ],
    }),
  MO = [
    {
      id: 1,
      name: "Prestige Lakeside Habitat",
      type: "apartments",
      location: "whitefield",
      priceRange: "1.2Cr - 2.5Cr",
      budget: "1cr-2cr",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Brigade El Dorado",
      type: "apartments",
      location: "electronic-city",
      priceRange: "65L - 95L",
      budget: "50l-1cr",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Sobha Dream Acres",
      type: "apartments",
      location: "sarjapur-road",
      priceRange: "80L - 1.4Cr",
      budget: "50l-1cr",
      image:
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Total Environment Windmills",
      type: "villas",
      location: "whitefield",
      priceRange: "3.5Cr - 5Cr",
      budget: "2cr-5cr",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Godrej Splendour",
      type: "apartments",
      location: "electronic-city",
      priceRange: "1Cr - 1.8Cr",
      budget: "1cr-2cr",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Mantri Courtyard",
      type: "villas",
      location: "hebbal",
      priceRange: "2.8Cr - 4.5Cr",
      budget: "2cr-5cr",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      name: "NBR Green Valley",
      type: "plots",
      location: "sarjapur-road",
      priceRange: "55L - 90L",
      budget: "50l-1cr",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Puravankara Zenium",
      type: "apartments",
      location: "koramangala",
      priceRange: "1.5Cr - 2.8Cr",
      budget: "1cr-2cr",
      image:
        "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&h=400&fit=crop",
    },
    {
      id: 9,
      name: "Embassy Springs",
      type: "plots",
      location: "hebbal",
      priceRange: "1.2Cr - 2Cr",
      budget: "1cr-2cr",
      image:
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&h=400&fit=crop",
    },
    {
      id: 10,
      name: "Phoenix Kessaku",
      type: "villas",
      location: "koramangala",
      priceRange: "6Cr - 12Cr",
      budget: "5cr+",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    },
    {
      id: 11,
      name: "Adarsh Palm Retreat",
      type: "villas",
      location: "sarjapur-road",
      priceRange: "3Cr - 5.5Cr",
      budget: "2cr-5cr",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dbd3c236?w=600&h=400&fit=crop",
    },
    {
      id: 12,
      name: "Salarpuria Greenage",
      type: "apartments",
      location: "whitefield",
      priceRange: "1.8Cr - 3.2Cr",
      budget: "1cr-2cr",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    },
  ],
  NO = "/assets/hero-bg-DNGYIAIc.jpg",
  DO = () => {
    const [e, t] = v.useState(0),
      [n, r] = v.useState(null),
      [o, i] = v.useState(null),
      [s, a] = v.useState(null),
      [l, u] = v.useState(!1),
      c = v.useMemo(
        () =>
          MO.filter(
            (x) =>
              !(
                (n && x.type !== n) ||
                (o && x.location !== o) ||
                (s && x.budget !== s)
              ),
          ),
        [n, o, s],
      ),
      d = (x) => {
        (r(x), setTimeout(() => t(1), 300));
      },
      f = (x) => {
        (i(x), setTimeout(() => t(2), 300));
      },
      h = (x) => {
        (a(x), setTimeout(() => u(!0), 400));
      };
    return S.jsxs("div", {
      className: "min-h-screen bg-background flex flex-col relative",
      children: [
        S.jsx("div", {
          className: "fixed inset-0 z-0",
          style: {
            backgroundImage: `url(${NO})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          },
        }),
        S.jsx("div", {
          className:
            "fixed inset-0 z-0 bg-gradient-to-b from-background/70 via-background/50 to-background",
        }),
        S.jsx(aL, {}),
        S.jsxs("main", {
          className:
            "flex-1 flex flex-col items-center justify-center px-6 py-32 relative z-10",
          children: [
            S.jsxs("div", {
              className: "text-center mb-16",
              children: [
                S.jsxs("h1", {
                  className:
                    "text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-4",
                  children: [
                    "Find Your Perfect ",
                    S.jsx("span", {
                      className: "text-primary italic",
                      children: "Home",
                    }),
                  ],
                }),
                S.jsx("p", {
                  className: "text-muted-foreground text-lg max-w-xl mx-auto",
                  children:
                    "Discover exceptional properties in Bangalore's most coveted neighborhoods",
                }),
              ],
            }),
            (n || o || s) &&
              S.jsxs("div", {
                className: "flex flex-wrap justify-center gap-2 mb-6",
                children: [
                  n &&
                    S.jsxs("button", {
                      onClick: () => {
                        (t(0), r(null), i(null), a(null));
                      },
                      className:
                        "flex items-center gap-1.5 px-4 py-2 border border-primary rounded-full text-sm text-primary hover:bg-primary/10 transition-colors capitalize",
                      children: [
                        n,
                        S.jsx("span", {
                          className: "text-xs opacity-60",
                          children: "✕",
                        }),
                      ],
                    }),
                  o &&
                    S.jsxs("button", {
                      onClick: () => {
                        (t(1), i(null), a(null));
                      },
                      className:
                        "flex items-center gap-1.5 px-4 py-2 border border-primary rounded-full text-sm text-primary hover:bg-primary/10 transition-colors",
                      children: [
                        o
                          .split("-")
                          .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                          .join(" "),
                        S.jsx("span", {
                          className: "text-xs opacity-60",
                          children: "✕",
                        }),
                      ],
                    }),
                  s &&
                    S.jsxs("button", {
                      onClick: () => {
                        (t(2), a(null));
                      },
                      className:
                        "flex items-center gap-1.5 px-4 py-2 border border-primary rounded-full text-sm text-primary hover:bg-primary/10 transition-colors",
                      children: [
                        s === "5cr+"
                          ? "5Cr+"
                          : s
                              .split("-")
                              .map((x) => x.toUpperCase())
                              .join(" - "),
                        S.jsx("span", {
                          className: "text-xs opacity-60",
                          children: "✕",
                        }),
                      ],
                    }),
                ],
              }),
            S.jsx(uL, { currentStep: e, totalSteps: 3 }),
            S.jsx("div", {
              className: "w-full max-w-6xl mx-auto",
              children: S.jsxs(Fg, {
                mode: "wait",
                children: [
                  e === 0 &&
                    S.jsx(dL, { selectedType: n, onSelect: d }, "type"),
                  e === 1 &&
                    S.jsx(
                      fL,
                      { selectedType: n, selectedLocation: o, onSelect: f },
                      "location",
                    ),
                  e === 2 &&
                    S.jsx(
                      pL,
                      {
                        selectedType: n,
                        selectedLocation: o,
                        selectedBudget: s,
                        onSelect: h,
                      },
                      "budget",
                    ),
                ],
              }),
            }),
          ],
        }),
        S.jsx(kO, {
          open: l,
          onOpenChange: u,
          selectedType: n,
          selectedLocation: o,
          selectedBudget: s,
        }),
        S.jsx("section", {
          className: "relative z-10 px-6 pb-20",
          children: S.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [
              S.jsx("h2", {
                className: "text-2xl md:text-3xl font-heading text-center mb-2",
                children:
                  n || o || s ? "Matching Properties" : "Featured Properties",
              }),
              S.jsxs("p", {
                className: "text-muted-foreground text-center mb-10 text-sm",
                children: [
                  c.length,
                  " ",
                  c.length === 1 ? "property" : "properties",
                  " found",
                ],
              }),
              S.jsx(Fg, {
                mode: "wait",
                children:
                  c.length > 0
                    ? S.jsx("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
                        children: c.map((x, p) =>
                          S.jsx(AO, { property: x, index: p }, x.id),
                        ),
                      })
                    : S.jsx("p", {
                        className: "text-center text-muted-foreground py-12",
                        children: "No properties match your current filters.",
                      }),
              }),
            ],
          }),
        }),
        S.jsx("div", { className: "relative z-10", children: S.jsx(lL, {}) }),
      ],
    });
  },
  LO = () => {
    const e = sw();
    return (
      v.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      S.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: S.jsxs("div", {
          className: "text-center",
          children: [
            S.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            S.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            S.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  OO = new PR(),
  jO = () =>
    S.jsx(RR, {
      client: OO,
      children: S.jsxs(nR, {
        children: [
          S.jsx(XT, {}),
          S.jsx(RP, {}),
          S.jsx(hA, {
            children: S.jsxs(cA, {
              children: [
                S.jsx(pd, { path: "/", element: S.jsx(DO, {}) }),
                S.jsx(pd, { path: "*", element: S.jsx(LO, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
A0(document.getElementById("root")).render(S.jsx(jO, {}));
