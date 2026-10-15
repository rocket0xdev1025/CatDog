var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        (d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            });
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      });
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    var x = (b.prototype = new y());
    (x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0);
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ee(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var te = /\/+/g;
    function ne(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ee(`` + e.key)
        : t.toString(36);
    }
    function k(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  }
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function re(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return (c = e._init), re(c(e._payload), r, i, a, o);
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ne(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(te, `$&/`) + `/`),
              re(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(te, `$&/`) + `/`) +
                    c
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          (a = e[u]), (s = l + ne(a, u)), (c += re(a, r, i, s, o));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          (a = a.value), (s = l + ne(a, u++)), (c += re(a, r, i, s, o));
      else if (s === `object`) {
        if (typeof e.then == `function`) return re(k(e), r, i, a, o);
        throw (
          ((r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          ))
        );
      }
      return c;
    }
    function ie(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        re(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ae(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var A =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      j = {
        map: ie,
        forEach: function (e, t, n) {
          ie(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ie(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ie(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`
            );
          return e;
        },
      };
    (e.Activity = f),
      (e.Children = j),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ae,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, A);
        } catch (e) {
          A(e);
        } finally {
          t !== null && n.types !== null && (t.types = n.types), (w.T = t);
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.8`);
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) (e[r] = u), (e[l] = n), (r = l);
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          r(l), (i.sortIndex = i.expirationTime), t(c, i);
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) (m = !0), S || ((S = !0), O());
        else {
          var t = n(l);
          t !== null && ne(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            (m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0);
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && E());

                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    (d.callback = null), (f = d.priorityLevel);
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      (d.callback = s), b(t), (i = !0);
                      break b;
                    }
                    d === n(c) && r(c), b(t);
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  u !== null && ne(x, u.startTime - t), (i = !1);
                }
              }
              break a;
            } finally {
              (d = null), (f = a), (p = !1);
            }
          }
        } finally {
          i ? O() : (S = !1);
        }
      }
    }
    var O;
    if (typeof y == `function`)
      O = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var ee = new MessageChannel(),
        te = ee.port2;
      (ee.port1.onmessage = D),
        (O = function () {
          te.postMessage(null);
        });
    } else
      O = function () {
        _(D, 0);
      };
    function ne(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ne(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), O()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      });
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    (e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          (s.T = t), (i.p = n), i.d.f();
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o }
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.8`);
  }),
  m = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = p());
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return l(a), e;
            if (s === r) return l(a), t;
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) (n = a), (r = s);
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              (c = !0), (n = a), (r = s);
              break;
            }
            if (u === r) {
              (c = !0), (r = a), (n = s);
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                (c = !0), (n = s), (r = a);
                break;
              }
              if (u === r) {
                (c = !0), (r = s), (n = a);
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      T = Symbol.for(`react.suspense`),
      E = Symbol.for(`react.suspense_list`),
      D = Symbol.for(`react.memo`),
      O = Symbol.for(`react.lazy`),
      ee = Symbol.for(`react.activity`),
      te = Symbol.for(`react.memo_cache_sentinel`),
      ne = Symbol.iterator;
    function k(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ne && e[ne]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var re = Symbol.for(`react.client.reference`);
    function ie(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case T:
          return `Suspense`;
        case E:
          return `SuspenseList`;
        case ee:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case D:
            return (
              (t = e.displayName || null), t === null ? ie(e.type) || `Memo` : t
            );
          case O:
            (t = e._payload), (e = e._init);
            try {
              return ie(e(t));
            } catch {}
        }
      return null;
    }
    var ae = Array.isArray,
      A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      j = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      oe = { pending: !1, data: null, method: null, action: null },
      se = [],
      ce = -1;
    function le(e) {
      return { current: e };
    }
    function M(e) {
      0 > ce || ((e.current = se[ce]), (se[ce] = null), ce--);
    }
    function N(e, t) {
      ce++, (se[ce] = e.current), (e.current = t);
    }
    var ue = le(null),
      P = le(null),
      de = le(null),
      fe = le(null);
    function pe(e, t) {
      switch ((N(de, t), N(P, e), N(ue, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Gd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            (t = Gd(t)), (e = Kd(t, e));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      M(ue), N(ue, e);
    }
    function me() {
      M(ue), M(P), M(de);
    }
    function he(e) {
      e.memoizedState !== null && N(fe, e);
      var t = ue.current,
        n = Kd(t, e.type);
      t !== n && (N(P, e), N(ue, n));
    }
    function ge(e) {
      P.current === e && (M(ue), M(P)),
        fe.current === e && (M(fe), ($f._currentValue = oe));
    }
    var _e, ve;
    function ye(e) {
      if (_e === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (_e = (t && t[1]) || ``),
            (ve =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                ? `@unknown:0:0`
                : ``);
        }
      return (
        `
` +
        _e +
        e +
        ve
      );
    }
    var be = !1;
    function xe(e, t) {
      if (!e || be) return ``;
      be = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);

          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);

          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];

            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        (be = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : ``) ? ye(n) : ``;
    }
    function Se(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ye(e.type);
        case 16:
          return ye(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? ye(`Suspense Fallback`)
            : ye(`Suspense`);
        case 19:
          return ye(`SuspenseList`);
        case 0:
        case 15:
          return xe(e.type, !1);
        case 11:
          return xe(e.type.render, !1);
        case 1:
          return xe(e.type, !0);
        case 31:
          return ye(`Activity`);
        default:
          return ``;
      }
    }
    function Ce(e) {
      try {
        var t = ``,
          n = null;
        do (t += Se(e, n)), (n = e), (e = e.return);
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var we = Object.prototype.hasOwnProperty,
      Te = t.unstable_scheduleCallback,
      Ee = t.unstable_cancelCallback,
      De = t.unstable_shouldYield,
      Oe = t.unstable_requestPaint,
      ke = t.unstable_now,
      Ae = t.unstable_getCurrentPriorityLevel,
      je = t.unstable_ImmediatePriority,
      Me = t.unstable_UserBlockingPriority,
      Ne = t.unstable_NormalPriority,
      Pe = t.unstable_LowPriority,
      Fe = t.unstable_IdlePriority,
      Ie = t.log,
      Le = t.unstable_setDisableYieldValue,
      Re = null,
      ze = null;
    function Be(e) {
      if (
        (typeof Ie == `function` && Le(e),
        ze && typeof ze.setStrictMode == `function`)
      )
        try {
          ze.setStrictMode(Re, e);
        } catch {}
    }
    var Ve = Math.clz32 ? Math.clz32 : We,
      He = Math.log,
      Ue = Math.LN2;
    function We(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((He(e) / Ue) | 0)) | 0;
    }
    var Ge = 256,
      Ke = 262144,
      qe = 4194304;
    function Je(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return 64;
        case 128:
          return 128;
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
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ye(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Je(n)))
                : (i = Je(o))
              : (i = Je(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Je(n)))
                  : (i = Je(o)))
              : (i = Je(r))),
        i === 0
          ? 0
          : t !== 0 &&
            t !== i &&
            (t & a) === 0 &&
            ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
          ? t
          : i
      );
    }
    function Xe(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ze(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Qe() {
      var e = qe;
      return (qe <<= 1), !(qe & 62914560) && (qe = 4194304), e;
    }
    function $e(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function et(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function tt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ve(n),
          d = 1 << u;
        (s[u] = 0), (c[u] = -1);
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      r !== 0 && nt(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t));
    }
    function nt(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - Ve(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930));
    }
    function rt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ve(n),
          i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
      }
    }
    function it(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : at(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function at(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ot(e) {
      return (
        (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function st() {
      var e = j.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function ct(e, t) {
      var n = j.p;
      try {
        return (j.p = e), t();
      } finally {
        j.p = n;
      }
    }
    var lt = Math.random().toString(36).slice(2),
      ut = `__reactFiber$` + lt,
      dt = `__reactProps$` + lt,
      ft = `__reactContainer$` + lt,
      pt = `__reactEvents$` + lt,
      mt = `__reactListeners$` + lt,
      ht = `__reactHandles$` + lt,
      gt = `__reactResources$` + lt,
      _t = `__reactMarker$` + lt;
    function vt(e) {
      delete e[ut], delete e[dt], delete e[pt], delete e[mt], delete e[ht];
    }
    function yt(e) {
      var t = e[ut];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[ft] || n[ut])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = hf(e); e !== null; ) {
              if ((n = e[ut])) return n;
              e = hf(e);
            }
          return t;
        }
        (e = n), (n = e.parentNode);
      }
      return null;
    }
    function bt(e) {
      if ((e = e[ut] || e[ft])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function xt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function St(e) {
      var t = e[gt];
      return (
        (t ||= e[gt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Ct(e) {
      e[_t] = !0;
    }
    var wt = new Set(),
      Tt = {};
    function Et(e, t) {
      Dt(e, t), Dt(e + `Capture`, t);
    }
    function Dt(e, t) {
      for (Tt[e] = t, e = 0; e < t.length; e++) wt.add(t[e]);
    }
    var Ot = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`
      ),
      kt = {},
      At = {};
    function jt(e) {
      return we.call(At, e)
        ? !0
        : we.call(kt, e)
        ? !1
        : Ot.test(e)
        ? (At[e] = !0)
        : ((kt[e] = !0), !1);
    }
    function Mt(e, t, n) {
      if (jt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Nt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Pt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Ft(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function It(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Lt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              (n = `` + e), a.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function Rt(e) {
      if (!e._valueTracker) {
        var t = It(e) ? `checked` : `value`;
        e._valueTracker = Lt(e, t, `` + e[t]);
      }
    }
    function zt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = It(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Bt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Vt = /[\n"\\]/g;
    function Ht(e) {
      return e.replace(Vt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Ut(e, t, n, r, i, a, o, s) {
      (e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
          ? ((t === 0 && e.value === ``) || e.value != t) &&
            (e.value = `` + Ft(t))
          : e.value !== `` + Ft(t) && (e.value = `` + Ft(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Gt(e, o, Ft(n))
          : Gt(e, o, Ft(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Ft(s))
          : e.removeAttribute(`name`);
    }
    function Wt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Rt(e);
          return;
        }
        (n = n == null ? `` : `` + Ft(n)),
          (t = t == null ? n : `` + Ft(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Rt(e);
    }
    function Gt(e, t, n) {
      (t === `number` && Bt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Kt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = `` + Ft(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            (e[i].selected = !0), r && (e[i].defaultSelected = !0);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function qt(e, t, n) {
      if (
        t != null &&
        ((t = `` + Ft(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Ft(n);
    }
    function Jt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ae(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        (n ??= ``), (t = n);
      }
      (n = Ft(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Rt(e);
    }
    function Yt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Xt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `
      )
    );
    function Zt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
          ? (e.cssFloat = ``)
          : (e[t] = ``)
        : r
        ? e.setProperty(t, n)
        : typeof n != `number` || n === 0 || Xt.has(t)
        ? t === `float`
          ? (e.cssFloat = n)
          : (e[t] = (`` + n).trim())
        : (e[t] = n + `px`);
    }
    function Qt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
              ? (e.cssFloat = ``)
              : (e[r] = ``));
        for (var a in t)
          (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Zt(e, a, r);
      } else for (var o in t) t.hasOwnProperty(o) && Zt(e, o, t[o]);
    }
    function $t(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var en = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      tn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function nn(e) {
      return tn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function rn() {}
    var an = null;
    function on(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var sn = null,
      cn = null;
    function ln(e) {
      var t = bt(e);
      if (t && (e = t.stateNode)) {
        var n = e[dt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Ut(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Ht(`` + t) + `"][type="radio"]`
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[dt] || null;
                  if (!a) throw Error(i(90));
                  Ut(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                (r = n[t]), r.form === e.form && zt(r);
            }
            break a;
          case `textarea`:
            qt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
        }
      }
    }
    var un = !1;
    function dn(e, t, n) {
      if (un) return e(t, n);
      un = !0;
      try {
        return e(t);
      } finally {
        if (
          ((un = !1),
          (sn !== null || cn !== null) &&
            (wu(), sn && ((t = sn), (e = cn), (cn = sn = null), ln(t), e)))
        )
          for (t = 0; t < e.length; t++) ln(e[t]);
      }
    }
    function fn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[dt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r);
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var pn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      mn = !1;
    if (pn)
      try {
        var hn = {};
        Object.defineProperty(hn, "passive", {
          get: function () {
            mn = !0;
          },
        }),
          window.addEventListener(`test`, hn, hn),
          window.removeEventListener(`test`, hn, hn);
      } catch {
        mn = !1;
      }
    var gn = null,
      _n = null,
      vn = null;
    function yn() {
      if (vn) return vn;
      var e,
        t = _n,
        n = t.length,
        r,
        i = `value` in gn ? gn.value : gn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (vn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function bn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function xn() {
      return !0;
    }
    function Sn() {
      return !1;
    }
    function Cn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? xn
            : Sn),
          (this.isPropagationStopped = Sn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = xn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = xn));
          },
          persist: function () {},
          isPersistent: xn,
        }),
        t
      );
    }
    var wn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Tn = Cn(wn),
      En = h({}, wn, { view: 0, detail: 0 }),
      Dn = Cn(En),
      On,
      kn,
      An,
      jn = h({}, En, {
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
        getModifierState: Hn,
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
          return `movementX` in e
            ? e.movementX
            : (e !== An &&
                (An && e.type === `mousemove`
                  ? ((On = e.screenX - An.screenX),
                    (kn = e.screenY - An.screenY))
                  : (kn = On = 0),
                (An = e)),
              On);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : kn;
        },
      }),
      Mn = Cn(jn),
      Nn = Cn(h({}, jn, { dataTransfer: 0 })),
      Pn = Cn(h({}, En, { relatedTarget: 0 })),
      Fn = Cn(
        h({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      In = Cn(
        h({}, wn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      Ln = Cn(h({}, wn, { data: 0 })),
      Rn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      zn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Bn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Vn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Bn[e])
        ? !!t[e]
        : !1;
    }
    function Hn() {
      return Vn;
    }
    var Un = Cn(
        h({}, En, {
          key: function (e) {
            if (e.key) {
              var t = Rn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = bn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
              ? zn[e.keyCode] || `Unidentified`
              : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Hn,
          charCode: function (e) {
            return e.type === `keypress` ? bn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? bn(e)
              : e.type === `keydown` || e.type === `keyup`
              ? e.keyCode
              : 0;
          },
        })
      ),
      Wn = Cn(
        h({}, jn, {
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
        })
      ),
      Gn = Cn(
        h({}, En, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Hn,
        })
      ),
      Kn = Cn(h({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      qn = Cn(
        h({}, jn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
              ? -e.wheelDeltaY
              : `wheelDelta` in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      Jn = Cn(h({}, wn, { newState: 0, oldState: 0 })),
      Yn = [9, 13, 27, 32],
      Xn = pn && `CompositionEvent` in window,
      Zn = null;
    pn && `documentMode` in document && (Zn = document.documentMode);
    var Qn = pn && `TextEvent` in window && !Zn,
      $n = pn && (!Xn || (Zn && 8 < Zn && 11 >= Zn)),
      er = ` `,
      tr = !1;
    function nr(e, t) {
      switch (e) {
        case `keyup`:
          return Yn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function rr(e) {
      return (
        (e = e.detail), typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var ir = !1;
    function ar(e, t) {
      switch (e) {
        case `compositionend`:
          return rr(t);
        case `keypress`:
          return t.which === 32 ? ((tr = !0), er) : null;
        case `textInput`:
          return (e = t.data), e === er && tr ? null : e;
        default:
          return null;
      }
    }
    function or(e, t) {
      if (ir)
        return e === `compositionend` || (!Xn && nr(e, t))
          ? ((e = yn()), (vn = _n = gn = null), (ir = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return $n && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var F = {
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
    function sr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!F[e.type] : t === `textarea`;
    }
    function cr(e, t, n, r) {
      sn ? (cn ? cn.push(r) : (cn = [r])) : (sn = r),
        (t = Ad(t, `onChange`)),
        0 < t.length &&
          ((n = new Tn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var lr = null,
      ur = null;
    function dr(e) {
      Cd(e, 0);
    }
    function fr(e) {
      if (zt(xt(e))) return e;
    }
    function pr(e, t) {
      if (e === `change`) return t;
    }
    var mr = !1;
    if (pn) {
      var hr;
      if (pn) {
        var gr = `oninput` in document;
        if (!gr) {
          var _r = document.createElement(`div`);
          _r.setAttribute(`oninput`, `return;`),
            (gr = typeof _r.oninput == `function`);
        }
        hr = gr;
      } else hr = !1;
      mr = hr && (!document.documentMode || 9 < document.documentMode);
    }
    function vr() {
      lr && (lr.detachEvent(`onpropertychange`, yr), (ur = lr = null));
    }
    function yr(e) {
      if (e.propertyName === `value` && fr(ur)) {
        var t = [];
        cr(t, ur, e, on(e)), dn(dr, t);
      }
    }
    function br(e, t, n) {
      e === `focusin`
        ? (vr(), (lr = t), (ur = n), lr.attachEvent(`onpropertychange`, yr))
        : e === `focusout` && vr();
    }
    function xr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return fr(ur);
    }
    function Sr(e, t) {
      if (e === `click`) return fr(t);
    }
    function Cr(e, t) {
      if (e === `input` || e === `change`) return fr(t);
    }
    function wr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Tr = typeof Object.is == `function` ? Object.is : wr;
    function Er(e, t) {
      if (Tr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!we.call(t, i) || !Tr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Dr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Or(e, t) {
      var n = Dr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Dr(n);
      }
    }
    function kr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? kr(e, t.parentNode)
          : `contains` in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function Ar(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Bt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Bt(e.document);
      }
      return t;
    }
    function jr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Mr = pn && `documentMode` in document && 11 >= document.documentMode,
      Nr = null,
      Pr = null,
      Fr = null,
      Ir = !1;
    function Lr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Ir ||
        Nr == null ||
        Nr !== Bt(r) ||
        ((r = Nr),
        `selectionStart` in r && jr(r)
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
        (Fr && Er(Fr, r)) ||
          ((Fr = r),
          (r = Ad(Pr, `onSelect`)),
          0 < r.length &&
            ((t = new Tn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Nr))));
    }
    function Rr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var zr = {
        animationend: Rr(`Animation`, `AnimationEnd`),
        animationiteration: Rr(`Animation`, `AnimationIteration`),
        animationstart: Rr(`Animation`, `AnimationStart`),
        transitionrun: Rr(`Transition`, `TransitionRun`),
        transitionstart: Rr(`Transition`, `TransitionStart`),
        transitioncancel: Rr(`Transition`, `TransitionCancel`),
        transitionend: Rr(`Transition`, `TransitionEnd`),
      },
      Br = {},
      Vr = {};
    pn &&
      ((Vr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete zr.animationend.animation,
        delete zr.animationiteration.animation,
        delete zr.animationstart.animation),
      `TransitionEvent` in window || delete zr.transitionend.transition);
    function Hr(e) {
      if (Br[e]) return Br[e];
      if (!zr[e]) return e;
      var t = zr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Vr) return (Br[e] = t[n]);
      return e;
    }
    var Ur = Hr(`animationend`),
      Wr = Hr(`animationiteration`),
      Gr = Hr(`animationstart`),
      Kr = Hr(`transitionrun`),
      qr = Hr(`transitionstart`),
      Jr = Hr(`transitioncancel`),
      Yr = Hr(`transitionend`),
      Xr = new Map(),
      Zr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        );
    Zr.push(`scrollEnd`);
    function Qr(e, t) {
      Xr.set(e, t), Et(t, [e]);
    }
    var $r =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ei = [],
      ti = 0,
      ni = 0;
    function ri() {
      for (var e = ti, t = (ni = ti = 0); t < e; ) {
        var n = ei[t];
        ei[t++] = null;
        var r = ei[t];
        ei[t++] = null;
        var i = ei[t];
        ei[t++] = null;
        var a = ei[t];
        if (((ei[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i);
        }
        a !== 0 && si(n, i, a);
      }
    }
    function ii(e, t, n, r) {
      (ei[ti++] = e),
        (ei[ti++] = t),
        (ei[ti++] = n),
        (ei[ti++] = r),
        (ni |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r);
    }
    function ai(e, t, n, r) {
      return ii(e, t, n, r), ci(e);
    }
    function oi(e, t) {
      return ii(e, null, null, t), ci(e);
    }
    function si(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        (a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return);
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ve(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ci(e) {
      if (50 < hu) throw ((hu = 0), (gu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var li = {};
    function ui(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
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
        (this.alternate = null);
    }
    function di(e, t, n, r) {
      return new ui(e, t, n, r);
    }
    function fi(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function pi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = di(e.tag, t, e.key, e.mode)),
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
        (n.flags = e.flags & 65011712),
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
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function mi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function hi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) fi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Wf(e, n, ue.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
          ? 27
          : 5;
      else
        a: switch (e) {
          case ee:
            return (
              (e = di(31, n, t, a)), (e.elementType = ee), (e.lanes = o), e
            );
          case y:
            return gi(n.children, a, o, t);
          case b:
            (s = 8), (a |= 24);
            break;
          case x:
            return (
              (e = di(12, n, t, a | 2)), (e.elementType = x), (e.lanes = o), e
            );
          case T:
            return (e = di(13, n, t, a)), (e.elementType = T), (e.lanes = o), e;
          case E:
            return (e = di(19, n, t, a)), (e.elementType = E), (e.lanes = o), e;
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case D:
                  s = 14;
                  break a;
                case O:
                  (s = 16), (r = null);
                  break a;
              }
            (s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null);
        }
      return (
        (t = di(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function gi(e, t, n, r) {
      return (e = di(7, e, r, t)), (e.lanes = n), e;
    }
    function _i(e, t, n) {
      return (e = di(6, e, null, t)), (e.lanes = n), e;
    }
    function vi(e) {
      var t = di(18, null, null, 0);
      return (t.stateNode = e), t;
    }
    function yi(e, t, n) {
      return (
        (t = di(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var bi = new WeakMap();
    function xi(e, t) {
      if (typeof e == `object` && e) {
        var n = bi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Ce(t) }), bi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Ce(t) };
    }
    var Si = [],
      Ci = 0,
      wi = null,
      Ti = 0,
      Ei = [],
      Di = 0,
      Oi = null,
      ki = 1,
      Ai = ``;
    function ji(e, t) {
      (Si[Ci++] = Ti), (Si[Ci++] = wi), (wi = e), (Ti = t);
    }
    function Mi(e, t, n) {
      (Ei[Di++] = ki), (Ei[Di++] = Ai), (Ei[Di++] = Oi), (Oi = e);
      var r = ki;
      e = Ai;
      var i = 32 - Ve(r) - 1;
      (r &= ~(1 << i)), (n += 1);
      var a = 32 - Ve(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ki = (1 << (32 - Ve(t) + i)) | (n << i) | r),
          (Ai = a + e);
      } else (ki = (1 << a) | (n << i) | r), (Ai = e);
    }
    function Ni(e) {
      e.return !== null && (ji(e, 1), Mi(e, 1, 0));
    }
    function Pi(e) {
      for (; e === wi; )
        (wi = Si[--Ci]), (Si[Ci] = null), (Ti = Si[--Ci]), (Si[Ci] = null);
      for (; e === Oi; )
        (Oi = Ei[--Di]),
          (Ei[Di] = null),
          (Ai = Ei[--Di]),
          (Ei[Di] = null),
          (ki = Ei[--Di]),
          (Ei[Di] = null);
    }
    function Fi(e, t) {
      (Ei[Di++] = ki),
        (Ei[Di++] = Ai),
        (Ei[Di++] = Oi),
        (ki = t.id),
        (Ai = t.overflow),
        (Oi = e);
    }
    var Ii = null,
      Li = null,
      I = !1,
      Ri = null,
      L = !1,
      zi = Error(i(519));
    function Bi(e) {
      throw (
        (Ki(
          xi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``
              )
            ),
            e
          )
        ),
        zi)
      );
    }
    function Vi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[ut] = e), (t[dt] = r), n)) {
        case `dialog`:
          J(`cancel`, t), J(`close`, t);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          J(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < xd.length; n++) J(xd[n], t);
          break;
        case `source`:
          J(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          J(`error`, t), J(`load`, t);
          break;
        case `details`:
          J(`toggle`, t);
          break;
        case `input`:
          J(`invalid`, t),
            Wt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            );
          break;
        case `select`:
          J(`invalid`, t);
          break;
        case `textarea`:
          J(`invalid`, t), Jt(t, r.value, r.defaultValue, r.children);
      }
      (n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Id(t.textContent, n)
          ? (r.popover != null && (J(`beforetoggle`, t), J(`toggle`, t)),
            r.onScroll != null && J(`scroll`, t),
            r.onScrollEnd != null && J(`scrollend`, t),
            r.onClick != null && (t.onclick = rn),
            (t = !0))
          : (t = !1),
        t || Bi(e, !0);
    }
    function Hi(e) {
      for (Ii = e.return; Ii; )
        switch (Ii.tag) {
          case 5:
          case 31:
          case 13:
            L = !1;
            return;
          case 27:
          case 3:
            L = !0;
            return;
          default:
            Ii = Ii.return;
        }
    }
    function Ui(e) {
      if (e !== Ii) return !1;
      if (!I) return Hi(e), (I = !0), !1;
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || qd(e.type, e.memoizedProps))),
          (n = !n)),
        n && Li && Bi(e),
        Hi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Li = mf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Li = mf(e);
      } else
        t === 27
          ? ((t = Li),
            tf(e.type) ? ((e = pf), (pf = null), (Li = e)) : (Li = t))
          : (Li = Ii ? ff(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Wi() {
      (Li = Ii = null), (I = !1);
    }
    function Gi() {
      var e = Ri;
      return (
        e !== null &&
          (tu === null ? (tu = e) : tu.push.apply(tu, e), (Ri = null)),
        e
      );
    }
    function Ki(e) {
      Ri === null ? (Ri = [e]) : Ri.push(e);
    }
    var qi = le(null),
      Ji = null,
      Yi = null;
    function Xi(e, t, n) {
      N(qi, t._currentValue), (t._currentValue = n);
    }
    function Zi(e) {
      (e._currentValue = qi.current), M(qi);
    }
    function Qi(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function $i(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Qi(o.return, n, e),
                  r || (s = null);
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          (s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Qi(s, n, e),
            (s = null);
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              (a.return = s.return), (s = a);
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ea(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Tr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === fe.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [$f]) : e.push($f));
        }
        a = a.return;
      }
      e !== null && $i(t, e, n, r), (t.flags |= 262144);
    }
    function ta(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Tr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function na(e) {
      (Ji = e),
        (Yi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null);
    }
    function ra(e) {
      return aa(Ji, e);
    }
    function ia(e, t) {
      return Ji === null && na(e), aa(e, t);
    }
    function aa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Yi === null)) {
        if (e === null) throw Error(i(308));
        (Yi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else Yi = Yi.next = t;
      return n;
    }
    var oa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  });
              };
            },
      sa = t.unstable_scheduleCallback,
      ca = t.unstable_NormalPriority,
      la = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ua() {
      return { controller: new oa(), data: new Map(), refCount: 0 };
    }
    function da(e) {
      e.refCount--,
        e.refCount === 0 &&
          sa(ca, function () {
            e.controller.abort();
          });
    }
    var fa = null,
      pa = 0,
      ma = 0,
      ha = null;
    function ga(e, t) {
      if (fa === null) {
        var n = (fa = []);
        (pa = 0),
          (ma = hd()),
          (ha = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          });
      }
      return pa++, t.then(_a, _a), t;
    }
    function _a() {
      if (--pa === 0 && fa !== null) {
        ha !== null && (ha.status = `fulfilled`);
        var e = fa;
        (fa = null), (ma = 0), (ha = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function va(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            (r.status = `fulfilled`), (r.value = t);
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          }
        ),
        r
      );
    }
    var ya = A.S;
    A.S = function (e, t) {
      (iu = ke()),
        typeof t == `object` && t && typeof t.then == `function` && ga(e, t),
        ya !== null && ya(e, t);
    };
    var ba = le(null);
    function xa() {
      var e = ba.current;
      return e === null ? Hl.pooledCache : e;
    }
    function Sa(e, t) {
      t === null ? N(ba, ba.current) : N(ba, t.pool);
    }
    function Ca() {
      var e = xa();
      return e === null ? null : { parent: la._currentValue, pool: e };
    }
    var wa = Error(i(460)),
      Ta = Error(i(474)),
      Ea = Error(i(542)),
      Da = { then: function () {} };
    function Oa(e) {
      return (e = e.status), e === `fulfilled` || e === `rejected`;
    }
    function ka(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(rn, rn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Na(e), e);
        default:
          if (typeof t.status == `string`) t.then(rn, rn);
          else {
            if (((e = Hl), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            (e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `fulfilled`), (n.value = e);
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `rejected`), (n.reason = e);
                  }
                }
              );
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Na(e), e);
          }
          throw ((ja = t), wa);
      }
    }
    function Aa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((ja = e), wa)
          : e;
      }
    }
    var ja = null;
    function Ma() {
      if (ja === null) throw Error(i(459));
      var e = ja;
      return (ja = null), e;
    }
    function Na(e) {
      if (e === wa || e === Ea) throw Error(i(483));
    }
    var Pa = null,
      Fa = 0;
    function Ia(e) {
      var t = Fa;
      return (Fa += 1), Pa === null && (Pa = []), ka(Pa, e, t);
    }
    function La(e, t) {
      (t = t.props.ref), (e.ref = t === void 0 ? null : t);
    }
    function Ra(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e
            )
          ));
    }
    function za(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling);
        return t;
      }
      function a(e, t) {
        return (e = pi(e, t)), (e.index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return e && t.alternate === null && (t.flags |= 67108866), t;
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = _i(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
            (t.elementType === i ||
              (typeof i == `object` &&
                i &&
                i.$$typeof === O &&
                Aa(i) === t.type))
          ? ((t = a(t, n.props)), La(t, n), (t.return = e), t)
          : ((t = hi(n.type, n.key, n.props, null, e.mode, r)),
            La(t, n),
            (t.return = e),
            t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = gi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return (t = _i(`` + t, e.mode, n)), (t.return = e), t;
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = hi(t.type, t.key, t.props, null, e.mode, n)),
                La(n, t),
                (n.return = e),
                n
              );
            case v:
              return (t = yi(t, e.mode, n)), (t.return = e), t;
            case O:
              return (t = Aa(t)), f(e, t, n);
          }
          if (ae(t) || k(t))
            return (t = gi(t, e.mode, n, null)), (t.return = e), t;
          if (typeof t.then == `function`) return f(e, Ia(t), n);
          if (t.$$typeof === C) return f(e, ia(e, t), n);
          Ra(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case O:
              return (n = Aa(n)), p(e, t, n, r);
          }
          if (ae(n) || k(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ia(n), r);
          if (n.$$typeof === C) return p(e, t, ia(e, n), r);
          Ra(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return (e = e.get(n) || null), c(t, e, `` + r, i);
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i)
              );
            case O:
              return (r = Aa(r)), m(e, t, n, r, i);
          }
          if (ae(r) || k(r)) return (e = e.get(n) || null), d(t, e, r, i, null);
          if (typeof r.then == `function`) return m(e, t, n, Ia(r), i);
          if (r.$$typeof === C) return m(e, t, n, ia(t, r), i);
          Ra(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g);
        }
        if (h === s.length) return n(i, d), I && ji(i, h), l;
        if (d === null) {
          for (; h < s.length; h++)
            (d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d));
          return I && ji(i, h), l;
        }
        for (d = r(d); h < s.length; h++)
          (g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          I && ji(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _);
        }
        if (v.done) return n(a, h), I && ji(a, g), u;
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            (v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v));
          return I && ji(a, g), u;
        }
        for (h = r(h); !v.done; g++, v = c.next())
          (v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          I && ji(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c);
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === O &&
                        Aa(l) === r.type)
                    ) {
                      n(e, r.sibling),
                        (c = a(r, o.props)),
                        La(c, o),
                        (c.return = e),
                        (e = c);
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                o.type === y
                  ? ((c = gi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = hi(o.type, o.key, o.props, null, e.mode, c)),
                    La(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c);
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  t(e, r), (r = r.sibling);
                }
                (c = yi(o, e.mode, c)), (c.return = e), (e = c);
              }
              return s(e);
            case O:
              return (o = Aa(o)), b(e, r, o, c);
          }
          if (ae(o)) return h(e, r, o, c);
          if (k(o)) {
            if (((l = k(o)), typeof l != `function`)) throw Error(i(150));
            return (o = l.call(o)), g(e, r, o, c);
          }
          if (typeof o.then == `function`) return b(e, r, Ia(o), c);
          if (o.$$typeof === C) return b(e, r, ia(e, o), c);
          Ra(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = _i(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Fa = 0;
          var i = b(e, t, n, r);
          return (Pa = null), i;
        } catch (t) {
          if (t === wa || t === Ea) throw t;
          var a = di(29, t, null, e.mode);
          return (a.lanes = r), (a.return = e), a;
        }
      };
    }
    var Ba = za(!0),
      Va = za(!1),
      Ha = !1;
    function Ua(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Wa(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function Ga(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ka(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), U & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ci(e)),
          si(e, null, n),
          t
        );
      }
      return ii(e, r, t, n), ci(e);
    }
    function qa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), rt(e, n);
      }
    }
    function Ja(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n);
        return;
      }
      (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var Ya = !1;
    function Xa() {
      if (Ya) {
        var e = ha;
        if (e !== null) throw e;
      }
    }
    function Za(e, t, n, r) {
      Ya = !1;
      var i = e.updateQueue;
      Ha = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        (c.next = null), o === null ? (a = l) : (o.next = l), (o = c);
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        (o = 0), (u = l = c = null), (s = a);
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (G & f) === f : (r & f) === f) {
            f !== 0 && f === ma && (Ya = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  });
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ha = !0;
              }
            }
            (f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f));
          } else
            (p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f);
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            (p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null);
          }
        } while (1);
        u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Yl |= o),
          (e.lanes = o),
          (e.memoizedState = d);
      }
    }
    function Qa(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function $a(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Qa(n[e], t);
    }
    var eo = le(null),
      to = le(0);
    function no(e, t) {
      (e = ql), N(to, e), N(eo, t), (ql = e | t.baseLanes);
    }
    function ro() {
      N(to, ql), N(eo, eo.current);
    }
    function io() {
      (ql = to.current), M(eo), M(to);
    }
    var ao = le(null),
      oo = null;
    function so(e) {
      var t = e.alternate;
      N(po, po.current & 1),
        N(ao, e),
        oo === null &&
          (t === null || eo.current !== null || t.memoizedState !== null) &&
          (oo = e);
    }
    function co(e) {
      N(po, po.current), N(ao, e), oo === null && (oo = e);
    }
    function lo(e) {
      e.tag === 22
        ? (N(po, po.current), N(ao, e), oo === null && (oo = e))
        : uo(e);
    }
    function uo() {
      N(po, po.current), N(ao, ao.current);
    }
    function fo(e) {
      M(ao), oo === e && (oo = null), M(po);
    }
    var po = le(0);
    function mo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || lf(n) || uf(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var ho = 0,
      R = null,
      z = null,
      go = null,
      _o = !1,
      vo = !1,
      yo = !1,
      bo = 0,
      xo = 0,
      So = null,
      Co = 0;
    function wo() {
      throw Error(i(321));
    }
    function To(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tr(e[n], t[n])) return !1;
      return !0;
    }
    function Eo(e, t, n, r, i, a) {
      return (
        (ho = a),
        (R = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (A.H = e === null || e.memoizedState === null ? Vs : Hs),
        (yo = !1),
        (a = n(r, i)),
        (yo = !1),
        vo && (a = Oo(t, n, r, i)),
        Do(e),
        a
      );
    }
    function Do(e) {
      A.H = Bs;
      var t = z !== null && z.next !== null;
      if (((ho = 0), (go = z = R = null), (_o = !1), (xo = 0), (So = null), t))
        throw Error(i(300));
      e === null ||
        ic ||
        ((e = e.dependencies), e !== null && ta(e) && (ic = !0));
    }
    function Oo(e, t, n, r) {
      R = e;
      var a = 0;
      do {
        if ((vo && (So = null), (xo = 0), (vo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (go = z = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          (o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0);
        }
        (A.H = H), (o = t(n, r));
      } while (vo);
      return o;
    }
    function ko() {
      var e = A.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Io(t) : t),
        (e = e.useState()[0]),
        (z === null ? null : z.memoizedState) !== e && (R.flags |= 1024),
        t
      );
    }
    function Ao() {
      var e = bo !== 0;
      return (bo = 0), e;
    }
    function jo(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }
    function Mo(e) {
      if (_o) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        _o = !1;
      }
      (ho = 0), (go = z = R = null), (vo = !1), (xo = bo = 0), (So = null);
    }
    function No() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return go === null ? (R.memoizedState = go = e) : (go = go.next = e), go;
    }
    function Po() {
      if (z === null) {
        var e = R.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = z.next;
      var t = go === null ? R.memoizedState : go.next;
      if (t !== null) (go = t), (z = e);
      else {
        if (e === null)
          throw R.alternate === null ? Error(i(467)) : Error(i(310));
        (z = e),
          (e = {
            memoizedState: z.memoizedState,
            baseState: z.baseState,
            baseQueue: z.baseQueue,
            queue: z.queue,
            next: null,
          }),
          go === null ? (R.memoizedState = go = e) : (go = go.next = e);
      }
      return go;
    }
    function Fo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Io(e) {
      var t = xo;
      return (
        (xo += 1),
        So === null && (So = []),
        (e = ka(So, e, t)),
        (t = R),
        (go === null ? t.memoizedState : go.next) === null &&
          ((t = t.alternate),
          (A.H = t === null || t.memoizedState === null ? Vs : Hs)),
        e
      );
    }
    function Lo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Io(e);
        if (e.$$typeof === C) return ra(e);
      }
      throw Error(i(438, String(e)));
    }
    function Ro(e) {
      var t = null,
        n = R.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = R.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Fo()), (R.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = te;
      return t.index++, n;
    }
    function B(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function zo(e) {
      return Bo(Po(), z, e);
    }
    function Bo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          (a.next = o.next), (o.next = s);
        }
        (t.baseQueue = a = o), (r.pending = null);
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (ho & f) === f : (G & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ma && (d = !0);
            else if ((ho & p) === p) {
              (u = u.next), p === ma && (d = !0);
              continue;
            } else
              (f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (R.lanes |= p),
                (Yl |= p);
            (f = u.action),
              yo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f));
          } else
            (p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (R.lanes |= f),
              (Yl |= f);
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Tr(o, e.memoizedState) && ((ic = !0), d && ((n = ha), n !== null)))
        )
          throw n;
        (e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o);
      }
      return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function Vo(e) {
      var t = Po(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== a);
        Tr(o, t.memoizedState) || (ic = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function Ho(e, t, n) {
      var r = R,
        a = Po(),
        o = I;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Tr((z || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (ic = !0)),
        (a = a.queue),
        ps(Go.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (go !== null && go.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          cs(9, { destroy: void 0 }, Wo.bind(null, r, a, n, t), null),
          Hl === null)
        )
          throw Error(i(349));
        o || ho & 127 || Uo(r, t, n);
      }
      return n;
    }
    function Uo(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = R.updateQueue),
        t === null
          ? ((t = Fo()), (R.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function Wo(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), Ko(t) && qo(e);
    }
    function Go(e, t, n) {
      return n(function () {
        Ko(t) && qo(e);
      });
    }
    function Ko(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Tr(e, n);
      } catch {
        return !0;
      }
    }
    function qo(e) {
      var t = oi(e, 2);
      t !== null && yu(t, e, 2);
    }
    function Jo(e) {
      var t = No();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), yo)) {
          Be(!0);
          try {
            n();
          } finally {
            Be(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: B,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Yo(e, t, n, r) {
      return (e.baseState = n), Bo(e, z, typeof r == `function` ? r : B);
    }
    function Xo(e, t, n, r, a) {
      if (Rs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        A.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Zo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o));
      }
    }
    function Zo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = A.T,
          o = {};
        A.T = o;
        try {
          var s = n(i, r),
            c = A.S;
          c !== null && c(o, s), Qo(e, t, s);
        } catch (n) {
          es(e, t, n);
        } finally {
          a !== null && o.types !== null && (a.types = o.types), (A.T = a);
        }
      } else
        try {
          (a = n(i, r)), Qo(e, t, a);
        } catch (n) {
          es(e, t, n);
        }
    }
    function Qo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              $o(e, t, n);
            },
            function (n) {
              return es(e, t, n);
            }
          )
        : $o(e, t, n);
    }
    function $o(e, t, n) {
      (t.status = `fulfilled`),
        (t.value = n),
        ts(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Zo(e, n)));
    }
    function es(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do (t.status = `rejected`), (t.reason = n), ts(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }
    function ts(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ns(e, t) {
      return t;
    }
    function rs(e, t) {
      if (I) {
        var n = Hl.formState;
        if (n !== null) {
          a: {
            var r = R;
            if (I) {
              if (Li) {
                b: {
                  for (var i = Li, a = L; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = ff(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  (a = i.data), (i = a === `F!` || a === `F` ? i : null);
                }
                if (i) {
                  (Li = ff(i.nextSibling)), (r = i.data === `F!`);
                  break a;
                }
              }
              Bi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = No()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ns,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, R, r)),
        (r.dispatch = n),
        (r = Jo(!1)),
        (a = Ls.bind(null, R, !1, r.queue)),
        (r = No()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Xo.bind(null, R, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function is(e) {
      return as(Po(), z, e);
    }
    function as(e, t, n) {
      if (
        ((t = Bo(e, t, ns)[0]),
        (e = zo(B)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Io(t);
        } catch (e) {
          throw e === wa ? Ea : e;
        }
      else r = t;
      t = Po();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((R.flags |= 2048),
          cs(9, { destroy: void 0 }, os.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function os(e, t) {
      e.action = t;
    }
    function ss(e) {
      var t = Po(),
        n = z;
      if (n !== null) return as(t, n, e);
      Po(), (t = t.memoizedState), (n = Po());
      var r = n.queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }
    function cs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = R.updateQueue),
        t === null && ((t = Fo()), (R.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ls() {
      return Po().memoizedState;
    }
    function us(e, t, n, r) {
      var i = No();
      (R.flags |= e),
        (i.memoizedState = cs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r
        ));
    }
    function ds(e, t, n, r) {
      var i = Po();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      z !== null && r !== null && To(r, z.memoizedState.deps)
        ? (i.memoizedState = cs(t, a, n, r))
        : ((R.flags |= e), (i.memoizedState = cs(1 | t, a, n, r)));
    }
    function fs(e, t) {
      us(8390656, 8, e, t);
    }
    function ps(e, t) {
      ds(2048, 8, e, t);
    }
    function ms(e) {
      R.flags |= 4;
      var t = R.updateQueue;
      if (t === null) (t = Fo()), (R.updateQueue = t), (t.events = [e]);
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function hs(e) {
      var t = Po().memoizedState;
      return (
        ms({ ref: t, nextImpl: e }),
        function () {
          if (U & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function gs(e, t) {
      return ds(4, 2, e, t);
    }
    function _s(e, t) {
      return ds(4, 4, e, t);
    }
    function vs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ys(e, t, n) {
      (n = n == null ? null : n.concat([e])), ds(4, 4, vs.bind(null, t, e), n);
    }
    function bs() {}
    function xs(e, t) {
      var n = Po();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && To(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ss(e, t) {
      var n = Po();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && To(t, r[1])) return r[0];
      if (((r = e()), yo)) {
        Be(!0);
        try {
          e();
        } finally {
          Be(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }
    function Cs(e, t, n) {
      return n === void 0 || (ho & 1073741824 && !(G & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = vu()), (R.lanes |= e), (Yl |= e), n);
    }
    function ws(e, t, n, r) {
      return Tr(n, t)
        ? n
        : eo.current === null
        ? !(ho & 42) || (ho & 1073741824 && !(G & 261930))
          ? ((ic = !0), (e.memoizedState = n))
          : ((e = vu()), (R.lanes |= e), (Yl |= e), t)
        : ((e = Cs(e, n, r)), Tr(e, t) || (ic = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = j.p;
      j.p = a !== 0 && 8 > a ? a : 8;
      var o = A.T,
        s = {};
      (A.T = s), Ls(e, !1, t, n);
      try {
        var c = i(),
          l = A.S;
        l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, va(c, r), _u(e))
            : Is(e, t, r, _u(e));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, _u());
      } finally {
        (j.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (A.T = o);
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Os(e).queue;
      Ts(
        e,
        a,
        t,
        oe,
        n === null
          ? Es
          : function () {
              return ks(e), n(r);
            }
      );
    }
    function Os(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: oe,
        baseState: oe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: B,
          lastRenderedState: oe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: B,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ks(e) {
      var t = Os(e);
      t.next === null && (t = e.alternate.memoizedState),
        Is(e, t.next.queue, {}, _u());
    }
    function As() {
      return ra($f);
    }
    function js() {
      return Po().memoizedState;
    }
    function Ms() {
      return Po().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = _u();
            e = Ga(n);
            var r = Ka(t, e, n);
            r !== null && (yu(r, t, n), qa(r, t, n)),
              (t = { cache: ua() }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = _u();
      (n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e)
          ? zs(t, n)
          : ((n = ai(e, t, n, r)), n !== null && (yu(n, e, r), V(n, t, r)));
    }
    function Fs(e, t, n) {
      Is(e, t, n, _u());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Tr(s, o)))
              return ii(e, t, i, 0), Hl === null && ri(), !1;
          } catch {}
        if (((n = ai(e, t, i, r)), n !== null))
          return yu(n, e, r), V(n, t, r), !0;
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: hd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(i(479));
      } else (t = ai(e, n, r, 2)), t !== null && yu(t, e, 2);
    }
    function Rs(e) {
      var t = e.alternate;
      return e === R || (t !== null && t === R);
    }
    function zs(e, t) {
      vo = _o = !0;
      var n = e.pending;
      n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function V(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), rt(e, n);
      }
    }
    var Bs = {
      readContext: ra,
      use: Lo,
      useCallback: wo,
      useContext: wo,
      useEffect: wo,
      useImperativeHandle: wo,
      useLayoutEffect: wo,
      useInsertionEffect: wo,
      useMemo: wo,
      useReducer: wo,
      useRef: wo,
      useState: wo,
      useDebugValue: wo,
      useDeferredValue: wo,
      useTransition: wo,
      useSyncExternalStore: wo,
      useId: wo,
      useHostTransitionStatus: wo,
      useFormState: wo,
      useActionState: wo,
      useOptimistic: wo,
      useMemoCache: wo,
      useCacheRefresh: wo,
    };
    Bs.useEffectEvent = wo;
    var Vs = {
        readContext: ra,
        use: Lo,
        useCallback: function (e, t) {
          return (No().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: ra,
        useEffect: fs,
        useImperativeHandle: function (e, t, n) {
          (n = n == null ? null : n.concat([e])),
            us(4194308, 4, vs.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return us(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          us(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = No();
          t = t === void 0 ? null : t;
          var r = e();
          if (yo) {
            Be(!0);
            try {
              e();
            } finally {
              Be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = No();
          if (n !== void 0) {
            var i = n(t);
            if (yo) {
              Be(!0);
              try {
                n(t);
              } finally {
                Be(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, R, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = No();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: function (e) {
          e = Jo(e);
          var t = e.queue,
            n = Fs.bind(null, R, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return Cs(No(), e, t);
        },
        useTransition: function () {
          var e = Jo(!1);
          return (
            (e = Ts.bind(null, R, e.queue, !0, !1)),
            (No().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = R,
            a = No();
          if (I) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), Hl === null)) throw Error(i(349));
            G & 127 || Uo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            fs(Go.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            cs(9, { destroy: void 0 }, Wo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = No(),
            t = Hl.identifierPrefix;
          if (I) {
            var n = Ai,
              r = ki;
            (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = bo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`);
          } else (n = Co++), (t = `_` + t + `r_` + n.toString(32) + `_`);
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: As,
        useFormState: rs,
        useActionState: rs,
        useOptimistic: function (e) {
          var t = No();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ls.bind(null, R, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Ro,
        useCacheRefresh: function () {
          return (No().memoizedState = Ns.bind(null, R));
        },
        useEffectEvent: function (e) {
          var t = No(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (U & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Hs = {
        readContext: ra,
        use: Lo,
        useCallback: xs,
        useContext: ra,
        useEffect: ps,
        useImperativeHandle: ys,
        useInsertionEffect: gs,
        useLayoutEffect: _s,
        useMemo: Ss,
        useReducer: zo,
        useRef: ls,
        useState: function () {
          return zo(B);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return ws(Po(), z.memoizedState, e, t);
        },
        useTransition: function () {
          var e = zo(B)[0],
            t = Po().memoizedState;
          return [typeof e == `boolean` ? e : Io(e), t];
        },
        useSyncExternalStore: Ho,
        useId: js,
        useHostTransitionStatus: As,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e, t) {
          return Yo(Po(), z, e, t);
        },
        useMemoCache: Ro,
        useCacheRefresh: Ms,
      };
    Hs.useEffectEvent = hs;
    var H = {
      readContext: ra,
      use: Lo,
      useCallback: xs,
      useContext: ra,
      useEffect: ps,
      useImperativeHandle: ys,
      useInsertionEffect: gs,
      useLayoutEffect: _s,
      useMemo: Ss,
      useReducer: Vo,
      useRef: ls,
      useState: function () {
        return Vo(B);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = Po();
        return z === null ? Cs(n, e, t) : ws(n, z.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vo(B)[0],
          t = Po().memoizedState;
        return [typeof e == `boolean` ? e : Io(e), t];
      },
      useSyncExternalStore: Ho,
      useId: js,
      useHostTransitionStatus: As,
      useFormState: ss,
      useActionState: ss,
      useOptimistic: function (e, t) {
        var n = Po();
        return z === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Yo(n, z, e, t);
      },
      useMemoCache: Ro,
      useCacheRefresh: Ms,
    };
    H.useEffectEvent = hs;
    function Us(e, t, n, r) {
      (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Ws = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = _u(),
          i = Ga(r);
        (i.payload = t),
          n != null && (i.callback = n),
          (t = Ka(e, i, r)),
          t !== null && (yu(t, e, r), qa(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = _u(),
          i = Ga(r);
        (i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ka(e, i, r)),
          t !== null && (yu(t, e, r), qa(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = _u(),
          r = Ga(n);
        (r.tag = 2),
          t != null && (r.callback = t),
          (t = Ka(e, r, n)),
          t !== null && (yu(t, e, n), qa(t, e, n));
      },
    };
    function Gs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
          ? !Er(n, r) || !Er(i, a)
          : !0
      );
    }
    function Ks(e, t, n, r) {
      (e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
    }
    function qs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Js(e) {
      $r(e);
    }
    function Ys(e) {
      console.error(e);
    }
    function Xs(e) {
      $r(e);
    }
    function Zs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Qs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function $s(e, t, n) {
      return (
        (n = Ga(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Zs(e, t);
        }),
        n
      );
    }
    function ec(e) {
      return (e = Ga(e)), (e.tag = 3), e;
    }
    function tc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        (e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Qs(t, n, r);
          });
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          Qs(t, n, r),
            typeof i != `function` &&
              (su === null ? (su = new Set([this])) : su.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function nc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ea(t, n, a, !0),
          (n = ao.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                oo === null
                  ? ju()
                  : n.alternate === null && Jl === 0 && (Jl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Da
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Yu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Da
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Yu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return Yu(e, r, a), ju(), !1;
      }
      if (I)
        return (
          (t = ao.current),
          t === null
            ? (r !== zi && ((t = Error(i(423), { cause: r })), Ki(xi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = xi(r, n)),
              (a = $s(e.stateNode, r, a)),
              Ja(e, a),
              Jl !== 4 && (Jl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== zi && ((e = Error(i(422), { cause: r })), Ki(xi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = xi(o, n)),
        eu === null ? (eu = [o]) : eu.push(o),
        Jl !== 4 && (Jl = 2),
        t === null)
      )
        return !0;
      (r = xi(r, n)), (n = t);
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = $s(n.stateNode, r, e)),
              Ja(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (su === null || !su.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = ec(a)),
                tc(a, e, n, r),
                Ja(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var rc = Error(i(461)),
      ic = !1;
    function ac(e, t, n, r) {
      t.child = e === null ? Va(t, null, n, r) : Ba(t, e.child, n, r);
    }
    function oc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        na(t),
        (r = Eo(e, t, n, o, a, i)),
        (s = Ao()),
        e !== null && !ic
          ? (jo(e, t, i), Ac(e, t, i))
          : (I && s && Ni(t), (t.flags |= 1), ac(e, t, r, i), t.child)
      );
    }
    function sc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !fi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), cc(e, t, a, r, i))
          : ((e = hi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !jc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Er : n),
          n(o, r) && e.ref === t.ref)
        )
          return Ac(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = pi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function cc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Er(a, r) && e.ref === t.ref)
          if (((ic = !1), (t.pendingProps = r = a), jc(e, i)))
            e.flags & 131072 && (ic = !0);
          else return (t.lanes = e.lanes), Ac(e, t, i);
      }
      return gc(e, t, n, r, i);
    }
    function lc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              (i = i | r.lanes | r.childLanes), (r = r.sibling);
            r = i & ~a;
          } else (r = 0), (t.child = null);
          return dc(e, t, a, n, r);
        }
        if (n & 536870912)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Sa(t, a === null ? null : a.cachePool),
            a === null ? ro() : no(t, a),
            lo(t);
        else
          return (
            (r = t.lanes = 536870912),
            dc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Sa(t, null), ro(), uo(t))
          : (Sa(t, a.cachePool), no(t, a), uo(t), (t.memoizedState = null));
      return ac(e, t, i, n), t.child;
    }
    function uc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function dc(e, t, n, r, i) {
      var a = xa();
      return (
        (a = a === null ? null : { parent: la._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Sa(t, null),
        ro(),
        lo(t),
        e !== null && ea(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function fc(e, t) {
      return (
        (t = Tc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function pc(e, t, n) {
      return (
        Ba(t, e.child, null, n),
        (e = fc(t, t.pendingProps)),
        (e.flags |= 2),
        fo(t),
        (t.memoizedState = null),
        e
      );
    }
    function mc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (I) {
          if (r.mode === `hidden`)
            return (e = fc(t, r)), (t.lanes = 536870912), uc(null, e);
          if (
            (co(t),
            (e = Li)
              ? ((e = cf(e, L)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : { id: ki, overflow: Ai },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = vi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ii = t),
                  (Li = null)))
              : (e = null),
            e === null)
          )
            throw Bi(t);
          return (t.lanes = 536870912), null;
        }
        return fc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((co(t), a))
          if (t.flags & 256) (t.flags &= -257), (t = pc(e, t, n));
          else if (t.memoizedState !== null)
            (t.child = e.child), (t.flags |= 128), (t = null);
          else throw Error(i(558));
        else if (
          (ic || ea(e, t, n, !1), (a = (n & e.childLanes) !== 0), ic || a)
        ) {
          if (
            ((r = Hl),
            r !== null && ((s = it(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), oi(e, s), yu(r, e, s), rc);
          ju(), (t = pc(e, t, n));
        } else
          (e = o.treeContext),
            (Li = ff(s.nextSibling)),
            (Ii = t),
            (I = !0),
            (Ri = null),
            (L = !1),
            e !== null && Fi(t, e),
            (t = fc(t, r)),
            (t.flags |= 4096);
        return t;
      }
      return (
        (e = pi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function hc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function gc(e, t, n, r, i) {
      return (
        na(t),
        (n = Eo(e, t, n, r, void 0, i)),
        (r = Ao()),
        e !== null && !ic
          ? (jo(e, t, i), Ac(e, t, i))
          : (I && r && Ni(t), (t.flags |= 1), ac(e, t, n, i), t.child)
      );
    }
    function _c(e, t, n, r, i, a) {
      return (
        na(t),
        (t.updateQueue = null),
        (n = Oo(t, r, n, i)),
        Do(e),
        (r = Ao()),
        e !== null && !ic
          ? (jo(e, t, a), Ac(e, t, a))
          : (I && r && Ni(t), (t.flags |= 1), ac(e, t, n, a), t.child)
      );
    }
    function vc(e, t, n, r, i) {
      if ((na(t), t.stateNode === null)) {
        var a = li,
          o = n.contextType;
        typeof o == `object` && o && (a = ra(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ws),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ua(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ra(o) : li),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Us(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ws.enqueueReplaceState(a, a.state, null),
            Za(t, r, a, i),
            Xa(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0);
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = qs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        (o = li), typeof u == `object` && u && (o = ra(u));
        var d = n.getDerivedStateFromProps;
        (u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ks(t, a, r, o)),
          (Ha = !1);
        var f = t.memoizedState;
        (a.state = f),
          Za(t, r, a, i),
          Xa(),
          (l = t.memoizedState),
          s || f !== l || Ha
            ? (typeof d == `function` &&
                (Us(t, n, d, r), (l = t.memoizedState)),
              (c = Ha || Gs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1));
      } else {
        (a = t.stateNode),
          Wa(e, t),
          (o = t.memoizedProps),
          (u = qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = li),
          typeof l == `object` && l && (c = ra(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ks(t, a, r, c)),
          (Ha = !1),
          (f = t.memoizedState),
          (a.state = f),
          Za(t, r, a, i),
          Xa();
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ha ||
        (e !== null && e.dependencies !== null && ta(e.dependencies))
          ? (typeof s == `function` && (Us(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ha ||
              Gs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ta(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        hc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ba(t, e.child, null, i)),
                (t.child = Ba(t, null, n, i)))
              : ac(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Ac(e, t, i)),
        e
      );
    }
    function yc(e, t, n, r) {
      return Wi(), (t.flags |= 256), ac(e, t, n, r), t.child;
    }
    var bc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function xc(e) {
      return { baseLanes: e, cachePool: Ca() };
    }
    function Sc(e, t, n) {
      return (e = e === null ? 0 : e.childLanes & ~n), t && (e |= Ql), e;
    }
    function Cc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : !!(po.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (I) {
          if (
            (a ? so(t) : uo(t),
            (e = Li)
              ? ((e = cf(e, L)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : { id: ki, overflow: Ai },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = vi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ii = t),
                  (Li = null)))
              : (e = null),
            e === null)
          )
            throw Bi(t);
          return uf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (uo(t),
              (a = t.mode),
              (c = Tc({ mode: `hidden`, children: c }, a)),
              (r = gi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = xc(n)),
              (r.childLanes = Sc(e, s, n)),
              (t.memoizedState = bc),
              uc(null, r))
            : (so(t), wc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (so(t), (t.flags &= -257), (t = Ec(e, t, n)))
            : t.memoizedState === null
            ? (uo(t),
              (c = r.fallback),
              (a = t.mode),
              (r = Tc({ mode: `visible`, children: r.children }, a)),
              (c = gi(c, a, n, null)),
              (c.flags |= 2),
              (r.return = t),
              (c.return = t),
              (r.sibling = c),
              (t.child = r),
              Ba(t, e.child, null, n),
              (r = t.child),
              (r.memoizedState = xc(n)),
              (r.childLanes = Sc(e, s, n)),
              (t.memoizedState = bc),
              (t = uc(null, r)))
            : (uo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((so(t), uf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          (s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Ki({ value: r, source: null, stack: null }),
            (t = Ec(e, t, n));
        } else if (
          (ic || ea(e, t, n, !1), (s = (n & e.childLanes) !== 0), ic || s)
        ) {
          if (
            ((s = Hl),
            s !== null && ((r = it(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), oi(e, r), yu(s, e, r), rc);
          lf(c) || ju(), (t = Ec(e, t, n));
        } else
          lf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (Li = ff(c.nextSibling)),
              (Ii = t),
              (I = !0),
              (Ri = null),
              (L = !1),
              e !== null && Fi(t, e),
              (t = wc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (uo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = pi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = gi(c, a, n, null)), (c.flags |= 2))
            : (c = pi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          uc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = xc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ca())
                : ((l = la._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = Sc(e, s, n)),
          (t.memoizedState = bc),
          uc(e.child, r))
        : (so(t),
          (n = e.child),
          (e = n.sibling),
          (n = pi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function wc(e, t) {
      return (
        (t = Tc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Tc(e, t) {
      return (e = di(22, e, null, t)), (e.lanes = 0), e;
    }
    function Ec(e, t, n) {
      return (
        Ba(t, e.child, null, n),
        (e = wc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Dc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), Qi(e.return, t, n);
    }
    function Oc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function kc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = po.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        N(po, o),
        ac(e, t, r, n),
        (r = I ? Ti : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
          else if (e.tag === 19) Dc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && mo(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Oc(t, !1, i, n, a, r);
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && mo(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Oc(t, !0, n, null, a, r);
          break;
        case `together`:
          Oc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ac(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Yl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ea(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = pi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (n = n.sibling = pi(e, e.pendingProps)),
            (n.return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function jc(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && ta(e)))
      );
    }
    function Mc(e, t, n) {
      switch (t.tag) {
        case 3:
          pe(t, t.stateNode.containerInfo),
            Xi(t, la, e.memoizedState.cache),
            Wi();
          break;
        case 27:
        case 5:
          he(t);
          break;
        case 4:
          pe(t, t.stateNode.containerInfo);
          break;
        case 10:
          Xi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), co(t), null;
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (so(t), (e = Ac(e, t, n)), e === null ? null : e.sibling)
                : Cc(e, t, n)
              : (so(t), (t.flags |= 128), null);
          so(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (ea(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return kc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            N(po, po.current),
            r)
          )
            break;
          return null;
        case 22:
          return (t.lanes = 0), lc(e, t, n, t.pendingProps);
        case 24:
          Xi(t, la, e.memoizedState.cache);
      }
      return Ac(e, t, n);
    }
    function Nc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) ic = !0;
        else {
          if (!jc(e, n) && !(t.flags & 128)) return (ic = !1), Mc(e, t, n);
          ic = !!(e.flags & 131072);
        }
      else (ic = !1), I && t.flags & 1048576 && Mi(t, Ti, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Aa(t.elementType)), (t.type = e), typeof e == `function`))
              fi(e)
                ? ((r = qs(e, r)), (t.tag = 1), (t = vc(null, t, e, r, n)))
                : ((t.tag = 0), (t = gc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  (t.tag = 11), (t = oc(null, t, e, r, n));
                  break a;
                }
                if (a === D) {
                  (t.tag = 14), (t = sc(null, t, e, r, n));
                  break a;
                }
              }
              throw ((t = ie(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return gc(e, t, t.type, t.pendingProps, n);
        case 1:
          return (r = t.type), (a = qs(r, t.pendingProps)), vc(e, t, r, a, n);
        case 3:
          a: {
            if ((pe(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            (a = o.element), Wa(e, t), Za(t, r, null, n);
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Xi(t, la, r),
              r !== o.cache && $i(t, [la], n, !0),
              Xa(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = yc(e, t, r, n);
                break a;
              } else if (r !== a) {
                (a = xi(Error(i(424)), t)), Ki(a), (t = yc(e, t, r, n));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  Li = ff(e.firstChild),
                    Ii = t,
                    I = !0,
                    Ri = null,
                    L = !0,
                    n = Va(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
              }
            else {
              if ((Wi(), r === a)) {
                t = Ac(e, t, n);
                break a;
              }
              ac(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            hc(e, t),
            e === null
              ? (n = jf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : I ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Wd(de.current).createElement(n)),
                  (r[ut] = t),
                  (r[dt] = e),
                  Rd(r, n, e),
                  Ct(r),
                  (t.stateNode = r))
              : (t.memoizedState = jf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            he(t),
            e === null &&
              I &&
              ((r = t.stateNode = gf(t.type, t.pendingProps, de.current)),
              (Ii = t),
              (L = !0),
              (a = Li),
              tf(t.type) ? ((pf = a), (Li = ff(r.firstChild))) : (Li = a)),
            ac(e, t, t.pendingProps.children, n),
            hc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              I &&
              ((a = r = Li) &&
                ((r = of(r, t.type, t.pendingProps, L)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Ii = t),
                    (Li = ff(r.firstChild)),
                    (L = !1),
                    (a = !0))),
              a || Bi(t)),
            he(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            qd(a, o) ? (r = null) : s !== null && qd(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Eo(e, t, ko, null, null, n)), ($f._currentValue = a)),
            hc(e, t),
            ac(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              I &&
              ((e = n = Li) &&
                ((n = sf(n, t.pendingProps, L)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Ii = t), (Li = null), (e = !0))),
              e || Bi(t)),
            null
          );
        case 13:
          return Cc(e, t, n);
        case 4:
          return (
            pe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ba(t, null, r, n)) : ac(e, t, r, n),
            t.child
          );
        case 11:
          return oc(e, t, t.type, t.pendingProps, n);
        case 7:
          return ac(e, t, t.pendingProps, n), t.child;
        case 8:
          return ac(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return ac(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (
            (r = t.pendingProps),
            Xi(t, t.type, r.value),
            ac(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            na(t),
            (a = ra(a)),
            (r = r(a)),
            (t.flags |= 1),
            ac(e, t, r, n),
            t.child
          );
        case 14:
          return sc(e, t, t.type, t.pendingProps, n);
        case 15:
          return cc(e, t, t.type, t.pendingProps, n);
        case 19:
          return kc(e, t, n);
        case 31:
          return mc(e, t, n);
        case 22:
          return lc(e, t, n, t.pendingProps);
        case 24:
          return (
            na(t),
            (r = ra(la)),
            e === null
              ? ((a = xa()),
                a === null &&
                  ((a = Hl),
                  (o = ua()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ua(t),
                Xi(t, la, a))
              : ((e.lanes & n) !== 0 && (Wa(e, t), Za(t, null, null, n), Xa()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Xi(t, la, r),
                    r !== a.cache && $i(t, [la], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Xi(t, la, r))),
            ac(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Pc(e) {
      e.flags |= 4;
    }
    function Fc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ou()) e.flags |= 8192;
          else throw ((ja = Da), Ta);
      } else e.flags &= -16777217;
    }
    function Ic(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Gf(t)))
        if (Ou()) e.flags |= 8192;
        else throw ((ja = Da), Ta);
    }
    function Lc(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : Qe()), (e.lanes |= t), ($l |= t));
    }
    function Rc(e, t) {
      if (!I)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              n.alternate !== null && (r = n), (n = n.sibling);
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function zc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling);
      else
        for (i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function Bc(e, t, n) {
      var r = t.pendingProps;
      switch ((Pi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return zc(t), null;
        case 1:
          return zc(t), null;
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Zi(la),
            me(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ui(t)
                ? Pc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Gi())),
            zc(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Pc(t),
                o === null ? (zc(t), Fc(t, a, null, r, n)) : (zc(t), Ic(t, o)))
              : o
              ? o === e.memoizedState
                ? (zc(t), (t.flags &= -16777217))
                : (Pc(t), zc(t), Ic(t, o))
              : ((e = e.memoizedProps),
                e !== r && Pc(t),
                zc(t),
                Fc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (ge(t),
            (n = de.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return zc(t), null;
            }
            (e = ue.current),
              Ui(t) ? Vi(t, e) : ((e = gf(a, r, n)), (t.stateNode = e), Pc(t));
          }
          return zc(t), null;
        case 5:
          if ((ge(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return zc(t), null;
            }
            if (((o = ue.current), Ui(t))) Vi(t, o);
            else {
              var s = Wd(de.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a
                      );
                      break;
                    case `script`:
                      (o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild));
                      break;
                    case `select`:
                      (o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size);
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              (o[ut] = t), (o[dt] = r);
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  (s.child.return = s), (s = s.child);
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
              t.stateNode = o;
              a: switch ((Rd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Pc(t);
            }
          }
          return (
            zc(t),
            Fc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = de.current), Ui(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Ii),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              (e[ut] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Id(e.nodeValue, n)
                )),
                e || Bi(t, !0);
            } else
              (e = Wd(e).createTextNode(r)), (e[ut] = t), (t.stateNode = e);
          }
          return zc(t), null;
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ui(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[ut] = t;
              } else
                Wi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              zc(t), (e = !1);
            } else
              (n = Gi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0);
            if (!e) return t.flags & 256 ? (fo(t), t) : (fo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return zc(t), null;
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ui(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[ut] = t;
              } else
                Wi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              zc(t), (a = !1);
            } else
              (a = Gi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0);
            if (!a) return t.flags & 256 ? (fo(t), t) : (fo(t), null);
          }
          return (
            fo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Lc(t, t.updateQueue),
                zc(t),
                null)
          );
        case 4:
          return me(), e === null && Ed(t.stateNode.containerInfo), zc(t), null;
        case 10:
          return Zi(t.type), zc(t), null;
        case 19:
          if ((M(po), (r = t.memoizedState), r === null)) return zc(t), null;
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null))
            if (a) Rc(r, !1);
            else {
              if (Jl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = mo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Rc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Lc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;

                    )
                      mi(n, e), (n = n.sibling);
                    return (
                      N(po, (po.current & 1) | 2),
                      I && ji(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                ke() > au &&
                ((t.flags |= 128), (a = !0), Rc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = mo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Lc(t, e),
                  Rc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !I)
                )
                  return zc(t), null;
              } else
                2 * ke() - r.renderingStartTime > au &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Rc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (zc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = ke()),
              (e.sibling = null),
              (n = po.current),
              N(po, a ? (n & 1) | 2 : n & 1),
              I && ji(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            fo(t),
            io(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (zc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : zc(t),
            (n = t.updateQueue),
            n !== null && Lc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && M(ba),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Zi(la),
            zc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Vc(e, t) {
      switch ((Pi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Zi(la),
            me(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return ge(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((fo(t), t.alternate === null)) throw Error(i(340));
            Wi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (fo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Wi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return M(po), null;
        case 4:
          return me(), null;
        case 10:
          return Zi(t.type), null;
        case 22:
        case 23:
          return (
            fo(t),
            io(),
            e !== null && M(ba),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return Zi(la), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Hc(e, t) {
      switch ((Pi(t), t.tag)) {
        case 3:
          Zi(la), me();
          break;
        case 26:
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          me();
          break;
        case 31:
          t.memoizedState !== null && fo(t);
          break;
        case 13:
          fo(t);
          break;
        case 19:
          M(po);
          break;
        case 10:
          Zi(t.type);
          break;
        case 22:
        case 23:
          fo(t), io(), e !== null && M(ba);
          break;
        case 24:
          Zi(la);
      }
    }
    function Uc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              (r = a()), (o.destroy = r);
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        q(t, t.return, e);
      }
    }
    function Wc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                (o.destroy = void 0), (i = t);
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  q(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        q(t, t.return, e);
      }
    }
    function Gc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          $a(t, n);
        } catch (t) {
          q(e, e.return, t);
        }
      }
    }
    function Kc(e, t, n) {
      (n.props = qs(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (n) {
        q(e, t, n);
      }
    }
    function qc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        q(e, t, n);
      }
    }
    function Jc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            q(e, t, n);
          } finally {
            (e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null);
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            q(e, t, n);
          }
        else n.current = null;
    }
    function Yc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        q(e, e.return, t);
      }
    }
    function Xc(e, t, n) {
      try {
        var r = e.stateNode;
        zd(r, e.type, n, t), (r[dt] = t);
      } catch (t) {
        q(e, e.return, t);
      }
    }
    function Zc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && tf(e.type)) ||
        e.tag === 4
      );
    }
    function Qc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && tf(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                ? n.ownerDocument.body
                : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = rn));
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for ($c(e, t, n), e = e.sibling; e !== null; )
          $c(e, t, n), (e = e.sibling);
    }
    function el(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (el(e, t, n), e = e.sibling; e !== null; )
          el(e, t, n), (e = e.sibling);
    }
    function tl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        Rd(t, r, n), (t[ut] = e), (t[dt] = n);
      } catch (t) {
        q(e, e.return, t);
      }
    }
    var nl = !1,
      rl = !1,
      il = !1,
      al = typeof WeakSet == `function` ? WeakSet : Set,
      ol = null;
    function sl(e, t) {
      if (((e = e.containerInfo), (Hd = cp), (e = Ar(e)), jr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, o.nodeType;
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;

                )
                  (p = f), (f = m);
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  (f = p), (p = f.parentNode);
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Ud = { focusedElem: e, selectionRange: n }, cp = !1, ol = t;
        ol !== null;

      )
        if (((t = ol), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          (e.return = t), (ol = e);
        else
          for (; ol !== null; ) {
            switch (((t = ol), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    (a = e[n]), (a.ref.impl = a.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  (e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode);
                  try {
                    var h = qs(n.type, a);
                    (e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (e) {
                    q(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    af(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        af(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (ol = e);
              break;
            }
            ol = t.return;
          }
    }
    function cl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Cl(e, n), r & 4 && Uc(5, n);
          break;
        case 1:
          if ((Cl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                q(n, n.return, e);
              }
            else {
              var i = qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (e) {
                q(n, n.return, e);
              }
            }
          r & 64 && Gc(n), r & 512 && qc(n, n.return);
          break;
        case 3:
          if ((Cl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              $a(e, t);
            } catch (e) {
              q(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && tl(n);
        case 26:
        case 5:
          Cl(e, n), t === null && r & 4 && Yc(n), r & 512 && qc(n, n.return);
          break;
        case 12:
          Cl(e, n);
          break;
        case 31:
          Cl(e, n), r & 4 && ml(e, n);
          break;
        case 13:
          Cl(e, n),
            r & 4 && hl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Qu.bind(null, n)), df(e, n))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || nl), !r)) {
            (t = (t !== null && t.memoizedState !== null) || rl), (i = nl);
            var a = rl;
            (nl = r),
              (rl = t) && !a ? Tl(e, n, !!(n.subtreeFlags & 8772)) : Cl(e, n),
              (nl = i),
              (rl = a);
          }
          break;
        case 30:
          break;
        default:
          Cl(e, n);
      }
    }
    function ll(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), ll(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && vt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var ul = null,
      dl = !1;
    function fl(e, t, n) {
      for (n = n.child; n !== null; ) pl(e, t, n), (n = n.sibling);
    }
    function pl(e, t, n) {
      if (ze && typeof ze.onCommitFiberUnmount == `function`)
        try {
          ze.onCommitFiberUnmount(Re, n);
        } catch {}
      switch (n.tag) {
        case 26:
          rl || Jc(n, t),
            fl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
          break;
        case 27:
          rl || Jc(n, t);
          var r = ul,
            i = dl;
          tf(n.type) && ((ul = n.stateNode), (dl = !1)),
            fl(e, t, n),
            _f(n.stateNode),
            (ul = r),
            (dl = i);
          break;
        case 5:
          rl || Jc(n, t);
        case 6:
          if (
            ((r = ul),
            (i = dl),
            (ul = null),
            fl(e, t, n),
            (ul = r),
            (dl = i),
            ul !== null)
          )
            if (dl)
              try {
                (ul.nodeType === 9
                  ? ul.body
                  : ul.nodeName === `HTML`
                  ? ul.ownerDocument.body
                  : ul
                ).removeChild(n.stateNode);
              } catch (e) {
                q(n, t, e);
              }
            else
              try {
                ul.removeChild(n.stateNode);
              } catch (e) {
                q(n, t, e);
              }
          break;
        case 18:
          ul !== null &&
            (dl
              ? ((e = ul),
                nf(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e,
                  n.stateNode
                ),
                Np(e))
              : nf(ul, n.stateNode));
          break;
        case 4:
          (r = ul),
            (i = dl),
            (ul = n.stateNode.containerInfo),
            (dl = !0),
            fl(e, t, n),
            (ul = r),
            (dl = i);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Wc(2, n, t), rl || Wc(4, n, t), fl(e, t, n);
          break;
        case 1:
          rl ||
            (Jc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Kc(n, t, r)),
            fl(e, t, n);
          break;
        case 21:
          fl(e, t, n);
          break;
        case 22:
          (rl = (r = rl) || n.memoizedState !== null), fl(e, t, n), (rl = r);
          break;
        default:
          fl(e, t, n);
      }
    }
    function ml(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          q(t, t.return, e);
        }
      }
    }
    function hl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          q(t, t.return, e);
        }
    }
    function gl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new al()), t;
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new al()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function _l(e, t) {
      var n = gl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = $u.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function vl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (tf(c.type)) {
                  (ul = c.stateNode), (dl = !1);
                  break a;
                }
                break;
              case 5:
                (ul = c.stateNode), (dl = !1);
                break a;
              case 3:
              case 4:
                (ul = c.stateNode.containerInfo), (dl = !0);
                break a;
            }
            c = c.return;
          }
          if (ul === null) throw Error(i(160));
          pl(o, s, a),
            (ul = null),
            (dl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null);
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) bl(t, e), (t = t.sibling);
    }
    var yl = null;
    function bl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vl(t, e),
            xl(e),
            r & 4 && (Wc(3, e, e.return), Uc(3, e), Wc(5, e, e.return));
          break;
        case 1:
          vl(t, e),
            xl(e),
            r & 512 && (rl || n === null || Jc(n, n.return)),
            r & 64 &&
              nl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
          break;
        case 26:
          var a = yl;
          if (
            (vl(t, e),
            xl(e),
            r & 512 && (rl || n === null || Jc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    (r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a);
                    b: switch (r) {
                      case `title`:
                        (o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[_t] ||
                            o[ut] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`)
                            )),
                          Rd(o, r, n),
                          (o[ut] = e),
                          Ct(o),
                          (r = o);
                        break a;
                      case `link`:
                        var s = Hf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)),
                          Rd(o, r, n),
                          a.head.appendChild(o);
                        break;
                      case `meta`:
                        if (
                          (s = Hf(`meta`, `content`, a).get(
                            r + (n.content || ``)
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)),
                          Rd(o, r, n),
                          a.head.appendChild(o);
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    (o[ut] = e), Ct(o), (r = o);
                  }
                  e.stateNode = r;
                } else Uf(a, e.type, e.stateNode);
              else e.stateNode = Q(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Xc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Uf(a, e.type, e.stateNode)
                    : Q(a, r, e.memoizedProps));
          }
          break;
        case 27:
          vl(t, e),
            xl(e),
            r & 512 && (rl || n === null || Jc(n, n.return)),
            n !== null && r & 4 && Xc(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (vl(t, e),
            xl(e),
            r & 512 && (rl || n === null || Jc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              Yt(a, ``);
            } catch (t) {
              q(e, e.return, t);
            }
          }
          r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Xc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (il = !0);
          break;
        case 6:
          if ((vl(t, e), xl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            (r = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = r;
            } catch (t) {
              q(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Vf = null),
            (a = yl),
            (yl = X(t.containerInfo)),
            vl(t, e),
            (yl = a),
            xl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              q(e, e.return, t);
            }
          il && ((il = !1), Sl(e));
          break;
        case 4:
          (r = yl),
            (yl = X(e.stateNode.containerInfo)),
            vl(t, e),
            xl(e),
            (yl = r);
          break;
        case 12:
          vl(t, e), xl(e);
          break;
        case 31:
          vl(t, e),
            xl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), _l(e, r)));
          break;
        case 13:
          vl(t, e),
            xl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (ru = ke()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), _l(e, r)));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = nl,
            d = rl;
          if (
            ((nl = u || a),
            (rl = d || l),
            vl(t, e),
            (rl = d),
            (nl = u),
            xl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || nl || rl || wl(e)),
                n = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      (s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`);
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    q(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    q(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? rf(m, !0) : rf(l.stateNode, !1);
                  } catch (e) {
                    q(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), _l(e, n))));
          break;
        case 19:
          vl(t, e),
            xl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), _l(e, r)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          vl(t, e), xl(e);
      }
    }
    function xl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Zc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              el(e, Qc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              n.flags & 32 && (Yt(o, ``), (n.flags &= -33)), el(e, Qc(e), o);
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              $c(e, Qc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          q(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Sl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          Sl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling);
        }
    }
    function Cl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) cl(e, t.alternate, t), (t = t.sibling);
    }
    function wl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Wc(4, t, t.return), wl(t);
            break;
          case 1:
            Jc(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == `function` && Kc(t, t.return, n),
              wl(t);
            break;
          case 27:
            _f(t.stateNode);
          case 26:
          case 5:
            Jc(t, t.return), wl(t);
            break;
          case 22:
            t.memoizedState === null && wl(t);
            break;
          case 30:
            wl(t);
            break;
          default:
            wl(t);
        }
        e = e.sibling;
      }
    }
    function Tl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Tl(i, a, n), Uc(4, a);
            break;
          case 1:
            if (
              (Tl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                q(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Qa(c[i], s);
              } catch (e) {
                q(r, r.return, e);
              }
            }
            n && o & 64 && Gc(a), qc(a, a.return);
            break;
          case 27:
            tl(a);
          case 26:
          case 5:
            Tl(i, a, n), n && r === null && o & 4 && Yc(a), qc(a, a.return);
            break;
          case 12:
            Tl(i, a, n);
            break;
          case 31:
            Tl(i, a, n), n && o & 4 && ml(i, a);
            break;
          case 13:
            Tl(i, a, n), n && o & 4 && hl(i, a);
            break;
          case 22:
            a.memoizedState === null && Tl(i, a, n), qc(a, a.return);
            break;
          case 30:
            break;
          default:
            Tl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function El(e, t) {
      var n = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && da(n));
    }
    function Dl(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && da(e));
    }
    function Ol(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) kl(e, t, n, r), (t = t.sibling);
    }
    function kl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ol(e, t, n, r), i & 2048 && Uc(9, t);
          break;
        case 1:
          Ol(e, t, n, r);
          break;
        case 3:
          Ol(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && da(e)));
          break;
        case 12:
          if (i & 2048) {
            Ol(e, t, n, r), (e = t.stateNode);
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0
                );
            } catch (e) {
              q(t, t.return, e);
            }
          } else Ol(e, t, n, r);
          break;
        case 31:
          Ol(e, t, n, r);
          break;
        case 13:
          Ol(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Ol(e, t, n, r)
                : ((a._visibility |= 2),
                  Al(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
              ? Ol(e, t, n, r)
              : jl(e, t),
            i & 2048 && El(o, t);
          break;
        case 24:
          Ol(e, t, n, r), i & 2048 && Dl(t.alternate, t);
          break;
        default:
          Ol(e, t, n, r);
      }
    }
    function Al(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Al(a, o, s, c, i), Uc(8, o);
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            o.memoizedState === null
              ? ((u._visibility |= 2), Al(a, o, s, c, i))
              : u._visibility & 2
              ? Al(a, o, s, c, i)
              : jl(a, o),
              i && l & 2048 && El(o.alternate, o);
            break;
          case 24:
            Al(a, o, s, c, i), i && l & 2048 && Dl(o.alternate, o);
            break;
          default:
            Al(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function jl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              jl(n, r), i & 2048 && El(r.alternate, r);
              break;
            case 24:
              jl(n, r), i & 2048 && Dl(r.alternate, r);
              break;
            default:
              jl(n, r);
          }
          t = t.sibling;
        }
    }
    var Ml = 8192;
    function Nl(e, t, n) {
      if (e.subtreeFlags & Ml)
        for (e = e.child; e !== null; ) Pl(e, t, n), (e = e.sibling);
    }
    function Pl(e, t, n) {
      switch (e.tag) {
        case 26:
          Nl(e, t, n),
            e.flags & Ml &&
              e.memoizedState !== null &&
              Kf(n, yl, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Nl(e, t, n);
          break;
        case 3:
        case 4:
          var r = yl;
          (yl = X(e.stateNode.containerInfo)), Nl(e, t, n), (yl = r);
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Ml), (Ml = 16777216), Nl(e, t, n), (Ml = r))
              : Nl(e, t, n));
          break;
        default:
          Nl(e, t, n);
      }
    }
    function Fl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (ol = r), zl(r, e);
          }
        Fl(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) Ll(e), (e = e.sibling);
    }
    function Ll(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Il(e), e.flags & 2048 && Wc(9, e, e.return);
          break;
        case 3:
          Il(e);
          break;
        case 12:
          Il(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Rl(e))
            : Il(e);
          break;
        default:
          Il(e);
      }
    }
    function Rl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (ol = r), zl(r, e);
          }
        Fl(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            Wc(8, t, t.return), Rl(t);
            break;
          case 22:
            (n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Rl(t));
            break;
          default:
            Rl(t);
        }
        e = e.sibling;
      }
    }
    function zl(e, t) {
      for (; ol !== null; ) {
        var n = ol;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Wc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            da(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) (r.return = n), (ol = r);
        else
          a: for (n = e; ol !== null; ) {
            r = ol;
            var i = r.sibling,
              a = r.return;
            if ((ll(r), r === n)) {
              ol = null;
              break a;
            }
            if (i !== null) {
              (i.return = a), (ol = i);
              break a;
            }
            ol = a;
          }
      }
    }
    var Bl = {
        getCacheForType: function (e) {
          var t = ra(la),
            n = t.data.get(e);
          return n === void 0 && ((n = e()), t.data.set(e, n)), n;
        },
        cacheSignal: function () {
          return ra(la).controller.signal;
        },
      },
      Vl = typeof WeakMap == `function` ? WeakMap : Map,
      U = 0,
      Hl = null,
      W = null,
      G = 0,
      K = 0,
      Ul = null,
      Wl = !1,
      Gl = !1,
      Kl = !1,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = 0,
      eu = null,
      tu = null,
      nu = !1,
      ru = 0,
      iu = 0,
      au = 1 / 0,
      ou = null,
      su = null,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = 0,
      pu = null,
      mu = null,
      hu = 0,
      gu = null;
    function _u() {
      return U & 2 && G !== 0 ? G & -G : A.T === null ? st() : hd();
    }
    function vu() {
      if (Ql === 0)
        if (!(G & 536870912) || I) {
          var e = Ke;
          (Ke <<= 1), !(Ke & 3932160) && (Ke = 262144), (Ql = e);
        } else Ql = 536870912;
      return (e = ao.current), e !== null && (e.flags |= 32), Ql;
    }
    function yu(e, t, n) {
      ((e === Hl && (K === 2 || K === 9)) || e.cancelPendingCommit !== null) &&
        (Eu(e, 0), Cu(e, G, Ql, !1)),
        et(e, n),
        (!(U & 2) || e !== Hl) &&
          (e === Hl && (!(U & 2) && (Xl |= n), Jl === 4 && Cu(e, G, Ql, !1)),
          sd(e));
    }
    function bu(e, t, n) {
      if (U & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || Xe(e, t),
        a = r ? Pu(e, t) : Mu(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Gl && !r && Cu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !Su(n))) {
          (a = Mu(e, t, !1)), (o = !1);
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            (s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s);
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = eu;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Eu(c, s).flags |= 256), (s = Mu(c, s, !1)), s !== 2)) {
                if (Kl && !l) {
                  (c.errorRecoveryDisabledLanes |= o), (Xl |= o), (a = 4);
                  break a;
                }
                (o = tu),
                  (tu = a),
                  o !== null && (tu === null ? (tu = o) : tu.push.apply(tu, o));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          Eu(e, 0), Cu(e, t, 0, !0);
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Cu(r, t, Ql, !Wl);
              break a;
            case 2:
              tu = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = ru + 300 - ke()), 10 < a)) {
            if ((Cu(r, t, Ql, !Wl), Ye(r, 0, !0) !== 0)) break a;
            (du = t),
              (r.timeoutHandle = Xd(
                xu.bind(
                  null,
                  r,
                  n,
                  tu,
                  ou,
                  nu,
                  t,
                  Ql,
                  Xl,
                  $l,
                  Wl,
                  o,
                  `Throttled`,
                  -0,
                  0
                ),
                a
              ));
            break a;
          }
          xu(r, n, tu, ou, nu, t, Ql, Xl, $l, Wl, o, null, -0, 0);
        }
        break;
      } while (1);
      sd(e);
    }
    function xu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        (d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: rn,
        }),
          Pl(t, a, d);
        var m =
          (a & 62914560) === a
            ? ru - ke()
            : (a & 4194048) === a
            ? iu - ke()
            : 0;
        if (((m = Jf(d, m)), m !== null)) {
          (du = a),
            (e.cancelPendingCommit = m(
              Vu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)
            )),
            Cu(e, a, o, !l);
          return;
        }
      }
      Vu(e, t, a, n, r, i, o, s, c);
    }
    function Su(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Tr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          (n.return = t), (t = n);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function Cu(e, t, n, r) {
      (t &= ~Zl),
        (t &= ~Xl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var i = t; 0 < i; ) {
        var a = 31 - Ve(i),
          o = 1 << a;
        (r[a] = -1), (i &= ~o);
      }
      n !== 0 && nt(e, n, t);
    }
    function wu() {
      return U & 6 ? !0 : (cd(0, !1), !1);
    }
    function Tu() {
      if (W !== null) {
        if (K === 0) var e = W.return;
        else (e = W), (Yi = Ji = null), Mo(e), (Pa = null), (Fa = 0), (e = W);
        for (; e !== null; ) Hc(e.alternate, e), (e = e.return);
        W = null;
      }
    }
    function Eu(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && ((e.timeoutHandle = -1), Zd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (du = 0),
        Tu(),
        (Hl = e),
        (W = n = pi(e.current, null)),
        (G = t),
        (K = 0),
        (Ul = null),
        (Wl = !1),
        (Gl = Xe(e, t)),
        (Kl = !1),
        ($l = Ql = Zl = Xl = Yl = Jl = 0),
        (tu = eu = null),
        (nu = !1),
        t & 8 && (t |= t & 32);
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ve(r),
            a = 1 << i;
          (t |= e[i]), (r &= ~a);
        }
      return (ql = t), ri(), n;
    }
    function Du(e, t) {
      (R = null),
        (A.H = Bs),
        t === wa || t === Ea
          ? ((t = Ma()), (K = 3))
          : t === Ta
          ? ((t = Ma()), (K = 4))
          : (K =
              t === rc
                ? 8
                : typeof t == `object` && t && typeof t.then == `function`
                ? 6
                : 1),
        (Ul = t),
        W === null && ((Jl = 1), Zs(e, xi(t, e.current)));
    }
    function Ou() {
      var e = ao.current;
      return e === null
        ? !0
        : (G & 4194048) === G
        ? oo === null
        : (G & 62914560) === G || G & 536870912
        ? e === oo
        : !1;
    }
    function ku() {
      var e = A.H;
      return (A.H = Bs), e === null ? Bs : e;
    }
    function Au() {
      var e = A.A;
      return (A.A = Bl), e;
    }
    function ju() {
      (Jl = 4),
        Wl || ((G & 4194048) !== G && ao.current !== null) || (Gl = !0),
        (!(Yl & 134217727) && !(Xl & 134217727)) ||
          Hl === null ||
          Cu(Hl, G, Ql, !1);
    }
    function Mu(e, t, n) {
      var r = U;
      U |= 2;
      var i = ku(),
        a = Au();
      (Hl !== e || G !== t) && ((ou = null), Eu(e, t)), (t = !1);
      var o = Jl;
      a: do
        try {
          if (K !== 0 && W !== null) {
            var s = W,
              c = Ul;
            switch (K) {
              case 8:
                Tu(), (o = 6);
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                ao.current === null && (t = !0);
                var l = K;
                if (((K = 0), (Ul = null), Ru(e, s, c, l), n && Gl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                (l = K), (K = 0), (Ul = null), Ru(e, s, c, l);
            }
          }
          Nu(), (o = Jl);
          break;
        } catch (t) {
          Du(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Yi = Ji = null),
        (U = r),
        (A.H = i),
        (A.A = a),
        W === null && ((Hl = null), (G = 0), ri()),
        o
      );
    }
    function Nu() {
      for (; W !== null; ) Iu(W);
    }
    function Pu(e, t) {
      var n = U;
      U |= 2;
      var r = ku(),
        a = Au();
      Hl !== e || G !== t
        ? ((ou = null), (au = ke() + 500), Eu(e, t))
        : (Gl = Xe(e, t));
      a: do
        try {
          if (K !== 0 && W !== null) {
            t = W;
            var o = Ul;
            b: switch (K) {
              case 1:
                (K = 0), (Ul = null), Ru(e, t, o, 1);
                break;
              case 2:
              case 9:
                if (Oa(o)) {
                  (K = 0), (Ul = null), Lu(t);
                  break;
                }
                (t = function () {
                  (K !== 2 && K !== 9) || Hl !== e || (K = 7), sd(e);
                }),
                  o.then(t, t);
                break a;
              case 3:
                K = 7;
                break a;
              case 4:
                K = 5;
                break a;
              case 7:
                Oa(o)
                  ? ((K = 0), (Ul = null), Lu(t))
                  : ((K = 0), (Ul = null), Ru(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (W.tag) {
                  case 26:
                    s = W.memoizedState;
                  case 5:
                  case 27:
                    var c = W;
                    if (s ? Gf(s) : c.stateNode.complete) {
                      (K = 0), (Ul = null);
                      var l = c.sibling;
                      if (l !== null) W = l;
                      else {
                        var u = c.return;
                        u === null ? (W = null) : ((W = u), zu(u));
                      }
                      break b;
                    }
                }
                (K = 0), (Ul = null), Ru(e, t, o, 5);
                break;
              case 6:
                (K = 0), (Ul = null), Ru(e, t, o, 6);
                break;
              case 8:
                Tu(), (Jl = 6);
                break a;
              default:
                throw Error(i(462));
            }
          }
          Fu();
          break;
        } catch (t) {
          Du(e, t);
        }
      while (1);
      return (
        (Yi = Ji = null),
        (A.H = r),
        (A.A = a),
        (U = n),
        W === null ? ((Hl = null), (G = 0), ri(), Jl) : 0
      );
    }
    function Fu() {
      for (; W !== null && !De(); ) Iu(W);
    }
    function Iu(e) {
      var t = Nc(e.alternate, e, ql);
      (e.memoizedProps = e.pendingProps), t === null ? zu(e) : (W = t);
    }
    function Lu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = _c(n, t, t.pendingProps, t.type, void 0, G);
          break;
        case 11:
          t = _c(n, t, t.pendingProps, t.type.render, t.ref, G);
          break;
        case 5:
          Mo(t);
        default:
          Hc(n, t), (t = W = mi(t, ql)), (t = Nc(n, t, ql));
      }
      (e.memoizedProps = e.pendingProps), t === null ? zu(e) : (W = t);
    }
    function Ru(e, t, n, r) {
      (Yi = Ji = null), Mo(t), (Pa = null), (Fa = 0);
      var i = t.return;
      try {
        if (nc(e, i, t, n, G)) {
          (Jl = 1), Zs(e, xi(n, e.current)), (W = null);
          return;
        }
      } catch (t) {
        if (i !== null) throw ((W = i), t);
        (Jl = 1), Zs(e, xi(n, e.current)), (W = null);
        return;
      }
      t.flags & 32768
        ? (I || r === 1
            ? (e = !0)
            : Gl || G & 536870912
            ? (e = !1)
            : ((Wl = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = ao.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
          Bu(t, e))
        : zu(t);
    }
    function zu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Bu(t, Wl);
          return;
        }
        e = t.return;
        var n = Bc(t.alternate, t, ql);
        if (n !== null) {
          W = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          W = t;
          return;
        }
        W = t = e;
      } while (t !== null);
      Jl === 0 && (Jl = 5);
    }
    function Bu(e, t) {
      do {
        var n = Vc(e.alternate, e);
        if (n !== null) {
          (n.flags &= 32767), (W = n);
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          W = e;
          return;
        }
        W = e = n;
      } while (e !== null);
      (Jl = 6), (W = null);
    }
    function Vu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Ku();
      while (cu !== 0);
      if (U & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ni),
          tt(e, n, o, s, c, l),
          e === Hl && ((W = Hl = null), (G = 0)),
          (uu = t),
          (lu = e),
          (du = n),
          (fu = o),
          (pu = a),
          (mu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              ed(Ne, function () {
                return qu(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          (r = A.T), (A.T = null), (a = j.p), (j.p = 2), (s = U), (U |= 4);
          try {
            sl(e, t, n);
          } finally {
            (U = s), (j.p = a), (A.T = r);
          }
        }
        (cu = 1), Hu(), Uu(), Wu();
      }
    }
    function Hu() {
      if (cu === 1) {
        cu = 0;
        var e = lu,
          t = uu,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          (n = A.T), (A.T = null);
          var r = j.p;
          j.p = 2;
          var i = U;
          U |= 4;
          try {
            bl(t, e);
            var a = Ud,
              o = Ar(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              kr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && jr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  (s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Or(s, h),
                      v = Or(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
              }
            }
            (cp = !!Hd), (Ud = Hd = null);
          } finally {
            (U = i), (j.p = r), (A.T = n);
          }
        }
        (e.current = t), (cu = 2);
      }
    }
    function Uu() {
      if (cu === 2) {
        cu = 0;
        var e = lu,
          t = uu,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          (n = A.T), (A.T = null);
          var r = j.p;
          j.p = 2;
          var i = U;
          U |= 4;
          try {
            cl(e, t.alternate, t);
          } finally {
            (U = i), (j.p = r), (A.T = n);
          }
        }
        cu = 3;
      }
    }
    function Wu() {
      if (cu === 4 || cu === 3) {
        (cu = 0), Oe();
        var e = lu,
          t = uu,
          n = du,
          r = mu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (cu = 5)
          : ((cu = 0), (uu = lu = null), Gu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (su = null),
          ot(n),
          (t = t.stateNode),
          ze && typeof ze.onCommitFiberRoot == `function`)
        )
          try {
            ze.onCommitFiberRoot(Re, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          (t = A.T), (i = j.p), (j.p = 2), (A.T = null);
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            (A.T = t), (j.p = i);
          }
        }
        du & 3 && Ku(),
          sd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === gu
              ? hu++
              : ((hu = 0), (gu = e))
            : (hu = 0),
          cd(0, !1);
      }
    }
    function Gu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), da(t)));
    }
    function Ku() {
      return Hu(), Uu(), Wu(), qu();
    }
    function qu() {
      if (cu !== 5) return !1;
      var e = lu,
        t = fu;
      fu = 0;
      var n = ot(du),
        r = A.T,
        a = j.p;
      try {
        (j.p = 32 > n ? 32 : n), (A.T = null), (n = pu), (pu = null);
        var o = lu,
          s = du;
        if (((cu = 0), (uu = lu = null), (du = 0), U & 6)) throw Error(i(331));
        var c = U;
        if (
          ((U |= 4),
          Ll(o.current),
          kl(o, o.current, s, n),
          (U = c),
          cd(0, !1),
          ze && typeof ze.onPostCommitFiberRoot == `function`)
        )
          try {
            ze.onPostCommitFiberRoot(Re, o);
          } catch {}
        return !0;
      } finally {
        (j.p = a), (A.T = r), Gu(e, t);
      }
    }
    function Ju(e, t, n) {
      (t = xi(n, t)),
        (t = $s(e.stateNode, t, 2)),
        (e = Ka(e, t, 2)),
        e !== null && (et(e, 2), sd(e));
    }
    function q(e, t, n) {
      if (e.tag === 3) Ju(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ju(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (su === null || !su.has(r)))
            ) {
              (e = xi(n, e)),
                (n = ec(2)),
                (r = Ka(t, n, 2)),
                r !== null && (tc(n, r, t, e), et(r, 2), sd(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Vl();
        var i = new Set();
        r.set(t, i);
      } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
      i.has(n) ||
        ((Kl = !0), i.add(n), (e = Xu.bind(null, e, t, n)), t.then(e, e));
    }
    function Xu(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        Hl === e &&
          (G & n) === n &&
          (Jl === 4 || (Jl === 3 && (G & 62914560) === G && 300 > ke() - ru)
            ? !(U & 2) && Eu(e, 0)
            : (Zl |= n),
          $l === G && ($l = 0)),
        sd(e);
    }
    function Zu(e, t) {
      t === 0 && (t = Qe()), (e = oi(e, t)), e !== null && (et(e, t), sd(e));
    }
    function Qu(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane), Zu(e, n);
    }
    function $u(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      r !== null && r.delete(t), Zu(e, n);
    }
    function ed(e, t) {
      return Te(e, t);
    }
    var td = null,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0;
    function sd(e) {
      e !== nd &&
        e.next === null &&
        (nd === null ? (td = nd = e) : (nd = nd.next = e)),
        (id = !0),
        rd || ((rd = !0), md());
    }
    function cd(e, t) {
      if (!ad && id) {
        ad = !0;
        do
          for (var n = !1, r = td; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  (a = (1 << (31 - Ve(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0);
                }
                a !== 0 && ((n = !0), pd(r, a));
              } else
                (a = G),
                  (a = Ye(
                    r,
                    r === Hl ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                  )),
                  !(a & 3) || Xe(r, a) || ((n = !0), pd(r, a));
            r = r.next;
          }
        while (n);
        ad = !1;
      }
    }
    function ld() {
      ud();
    }
    function ud() {
      id = rd = !1;
      var e = 0;
      od !== 0 && Yd() && (e = od);
      for (var t = ke(), n = null, r = td; r !== null; ) {
        var i = r.next,
          a = dd(r, t);
        a === 0
          ? ((r.next = null),
            n === null ? (td = i) : (n.next = i),
            i === null && (nd = n))
          : ((n = r), (e !== 0 || a & 3) && (id = !0)),
          (r = i);
      }
      (cu !== 0 && cu !== 5) || cd(e, !1), od !== 0 && (od = 0);
    }
    function dd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;

      ) {
        var o = 31 - Ve(a),
          s = 1 << o,
          c = i[o];
        c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ze(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s);
      }
      if (
        ((t = Hl),
        (n = G),
        (n = Ye(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (K === 2 || K === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ee(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || Xe(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ee(r), ot(n))) {
          case 2:
          case 8:
            n = Me;
            break;
          case 32:
            n = Ne;
            break;
          case 268435456:
            n = Fe;
            break;
          default:
            n = Ne;
        }
        return (
          (r = fd.bind(null, e)),
          (n = Te(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ee(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function fd(e, t) {
      if (cu !== 0 && cu !== 5)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (Ku() && e.callbackNode !== n) return null;
      var r = G;
      return (
        (r = Ye(
          e,
          e === Hl ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        r === 0
          ? null
          : (bu(e, r, t),
            dd(e, ke()),
            e.callbackNode != null && e.callbackNode === n
              ? fd.bind(null, e)
              : null)
      );
    }
    function pd(e, t) {
      if (Ku()) return null;
      bu(e, t, !0);
    }
    function md() {
      $d(function () {
        U & 6 ? Te(je, ld) : ud();
      });
    }
    function hd() {
      if (od === 0) {
        var e = ma;
        e === 0 && ((e = Ge), (Ge <<= 1), !(Ge & 261888) && (Ge = 256)),
          (od = e);
      }
      return od;
    }
    function gd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
        ? e
        : nn(`` + e);
    }
    function _d(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function vd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = gd((i[dt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[dt] || null)
            ? gd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Tn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (od !== 0) {
                    var e = o ? _d(i, o) : new FormData(i);
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? _d(i, o) : new FormData(i)),
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var yd = 0; yd < Zr.length; yd++) {
      var bd = Zr[yd];
      Qr(bd.toLowerCase(), `on` + (bd[0].toUpperCase() + bd.slice(1)));
    }
    Qr(Ur, `onAnimationEnd`),
      Qr(Wr, `onAnimationIteration`),
      Qr(Gr, `onAnimationStart`),
      Qr(`dblclick`, `onDoubleClick`),
      Qr(`focusin`, `onFocus`),
      Qr(`focusout`, `onBlur`),
      Qr(Kr, `onTransitionRun`),
      Qr(qr, `onTransitionStart`),
      Qr(Jr, `onTransitionCancel`),
      Qr(Yr, `onTransitionEnd`),
      Dt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Dt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Dt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Dt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Et(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `
        )
      ),
      Et(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      Et(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Et(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `)
      ),
      Et(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      Et(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      );
    var xd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      Sd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(xd)
      );
    function Cd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                $r(e);
              }
              (i.currentTarget = null), (a = c);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                $r(e);
              }
              (i.currentTarget = null), (a = c);
            }
        }
      }
    }
    function J(e, t) {
      var n = t[pt];
      n === void 0 && (n = t[pt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Dd(t, e, 2, !1), n.add(r));
    }
    function wd(e, t, n) {
      var r = 0;
      t && (r |= 4), Dd(n, e, r, t);
    }
    var Td = `_reactListening` + Math.random().toString(36).slice(2);
    function Ed(e) {
      if (!e[Td]) {
        (e[Td] = !0),
          wt.forEach(function (t) {
            t !== `selectionchange` &&
              (Sd.has(t) || wd(t, !1, e), wd(t, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Td] || ((t[Td] = !0), wd(`selectionchange`, !1, t));
      }
    }
    function Dd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = lp;
          break;
        case 8:
          i = up;
          break;
        default:
          i = dp;
      }
      (n = i.bind(null, t, n, e)),
        (i = void 0),
        !mn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
          ? e.addEventListener(t, n, !1)
          : e.addEventListener(t, n, { passive: i });
    }
    function Od(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = yt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      dn(function () {
        var r = a,
          i = on(n),
          s = [];
        a: {
          var c = Xr.get(e);
          if (c !== void 0) {
            var l = Tn,
              u = e;
            switch (e) {
              case `keypress`:
                if (bn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Un;
                break;
              case `focusin`:
                (u = `focus`), (l = Pn);
                break;
              case `focusout`:
                (u = `blur`), (l = Pn);
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Pn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Mn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Nn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Gn;
                break;
              case Ur:
              case Wr:
              case Gr:
                l = Fn;
                break;
              case Yr:
                l = Kn;
                break;
              case `scroll`:
              case `scrollend`:
                l = Dn;
                break;
              case `wheel`:
                l = qn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = In;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Wn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Jn;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = fn(m, p)), g != null && d.push(kd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== an &&
                (u = n.relatedTarget || n.fromElement) &&
                (yt(u) || u[ft]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                  ? c.defaultView || c.parentWindow
                  : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? yt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Mn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Wn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : xt(l)),
                (h = u == null ? c : xt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                yt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = jd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) (p = d(p)), h--;
                  for (; 0 < g - h; ) (m = d(m)), g--;
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    (p = d(p)), (m = d(m));
                  }
                  d = null;
                }
              else d = null;
              l !== null && Md(s, c, l, d, !1),
                u !== null && f !== null && Md(s, f, u, d, !0);
            }
          }
          a: {
            if (
              ((c = r ? xt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = pr;
            else if (sr(c))
              if (mr) v = Cr;
              else {
                v = xr;
                var y = br;
              }
            else
              (l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && $t(r.elementType) && (v = pr)
                  : (v = Sr);
            if ((v &&= v(e, r))) {
              cr(s, v, n, i);
              break a;
            }
            y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Gt(c, `number`, c.value);
          }
          switch (((y = r ? xt(r) : window), e)) {
            case `focusin`:
              (sr(y) || y.contentEditable === `true`) &&
                ((Nr = y), (Pr = r), (Fr = null));
              break;
            case `focusout`:
              Fr = Pr = Nr = null;
              break;
            case `mousedown`:
              Ir = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              (Ir = !1), Lr(s, n, i);
              break;
            case `selectionchange`:
              if (Mr) break;
            case `keydown`:
            case `keyup`:
              Lr(s, n, i);
          }
          var b;
          if (Xn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            ir
              ? nr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          x &&
            ($n &&
              n.locale !== `ko` &&
              (ir || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ir && (b = yn())
                : ((gn = i),
                  (_n = `value` in gn ? gn.value : gn.textContent),
                  (ir = !0))),
            (y = Ad(r, x)),
            0 < y.length &&
              ((x = new Ln(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = rr(n)), b !== null && (x.data = b)))),
            (b = Qn ? ar(e, n) : or(e, n)) &&
              ((x = Ad(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Ln(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            vd(s, e, r, n, i);
        }
        Cd(s, t);
      });
    }
    function kd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ad(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = fn(e, n)),
            i != null && r.unshift(kd(e, i, a)),
            (i = fn(e, t)),
            i != null && r.push(kd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function jd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Md(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        (s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = fn(n, a)), l != null && o.unshift(kd(n, l, c)))
            : i || ((l = fn(n, a)), l != null && o.push(kd(n, l, c)))),
          (n = n.return);
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Nd = /\r\n?/g,
      Pd = /\u0000|\uFFFD/g;
    function Fd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Nd,
          `
`
        )
        .replace(Pd, ``);
    }
    function Id(e, t) {
      return (t = Fd(t)), Fd(e) === t;
    }
    function Y(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Yt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Yt(e, `` + r);
          break;
        case `className`:
          Nt(e, `class`, r);
          break;
        case `tabIndex`:
          Nt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Nt(e, n, r);
          break;
        case `style`:
          Qt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Nt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = nn(`` + r)), e.setAttribute(n, r);
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && Y(e, t, `name`, a.name, a, null),
                  Y(e, t, `formEncType`, a.formEncType, a, null),
                  Y(e, t, `formMethod`, a.formMethod, a, null),
                  Y(e, t, `formTarget`, a.formTarget, a, null))
                : (Y(e, t, `encType`, a.encType, a, null),
                  Y(e, t, `method`, a.method, a, null),
                  Y(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = nn(`` + r)), e.setAttribute(n, r);
          break;
        case `onClick`:
          r != null && (e.onclick = rn);
          break;
        case `onScroll`:
          r != null && J(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && J(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          (n = nn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
              r != null &&
              typeof r != `function` &&
              typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          J(`beforetoggle`, e), J(`toggle`, e), Mt(e, `popover`, r);
          break;
        case `xlinkActuate`:
          Pt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Pt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Pt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Pt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Pt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Pt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Pt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Pt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Pt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Mt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = en.get(n) || n), Mt(e, n, r));
      }
    }
    function Ld(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Qt(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Yt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Yt(e, `` + r);
          break;
        case `onScroll`:
          r != null && J(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && J(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = rn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Tt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[dt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a);
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                ? e.setAttribute(n, ``)
                : Mt(e, n, r);
            }
      }
    }
    function Rd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          J(`error`, e), J(`load`, e);
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    Y(e, t, o, s, n, null);
                }
            }
          a && Y(e, t, `srcSet`, n.srcSet, n, null),
            r && Y(e, t, `src`, n.src, n, null);
          return;
        case `input`:
          J(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    Y(e, t, r, d, n, null);
                }
            }
          Wt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (J(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  Y(e, t, a, c, n, null);
              }
          (t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Kt(e, !!r, n, !0) : Kt(e, !!r, t, !1);
          return;
        case `textarea`:
          for (s in (J(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  Y(e, t, s, c, n, null);
              }
          Jt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  Y(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          J(`beforetoggle`, e), J(`toggle`, e), J(`cancel`, e), J(`close`, e);
          break;
        case `iframe`:
        case `object`:
          J(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < xd.length; r++) J(xd[r], e);
          break;
        case `image`:
          J(`error`, e), J(`load`, e);
          break;
        case `details`:
          J(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          J(`error`, e), J(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  Y(e, t, u, r, n, null);
              }
          return;
        default:
          if ($t(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Ld(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && Y(e, t, c, r, n, null));
    }
    function zd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || Y(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && Y(e, t, p, m, r, f);
              }
          }
          Ut(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || Y(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && Y(e, t, a, o, r, l);
              }
          (t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Kt(e, !!n, n ? [] : ``, !1) : Kt(e, !!n, t, !0))
              : Kt(e, !!n, p, !1);
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  Y(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && Y(e, t, s, a, r, o);
              }
          qt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  Y(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  Y(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            (p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                Y(e, t, g, null, r, p);
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  Y(e, t, u, p, r, m);
              }
          return;
        default:
          if ($t(t)) {
            for (var _ in n)
              (p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Ld(e, t, _, void 0, r, p);
            for (d in r)
              (p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Ld(e, t, d, p, r, m);
            return;
          }
      }
      for (var v in n)
        (p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            Y(e, t, v, null, r, p);
      for (f in r)
        (p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            Y(e, t, f, p, r, m);
    }
    function Bd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Vd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Bd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Bd(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Hd = null,
      Ud = null;
    function Wd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Gd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Kd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function qd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Jd = null;
    function Yd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== Jd && ((Jd = e), !0)
        : ((Jd = null), !1);
    }
    var Xd = typeof setTimeout == `function` ? setTimeout : void 0,
      Zd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Qd = typeof Promise == `function` ? Promise : void 0,
      $d =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Qd === void 0
          ? Xd
          : function (e) {
              return Qd.resolve(null).then(e).catch(ef);
            };
    function ef(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function tf(e) {
      return e === `head`;
    }
    function nf(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              e.removeChild(i), Np(t);
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _f(e.ownerDocument.documentElement);
          else if (n === `head`) {
            (n = e.ownerDocument.head), _f(n);
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              a[_t] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o);
            }
          } else n === `body` && _f(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function rf(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function af(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            af(n), vt(n);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function of(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[_t])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = ff(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function sf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function cf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function lf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function uf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function df(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          t(), n.removeEventListener(`DOMContentLoaded`, r);
        };
        n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r);
      }
    }
    function ff(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var pf = null;
    function mf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return ff(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function hf(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function gf(e, t, n) {
      switch (((t = Wd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function _f(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      vt(e);
    }
    var vf = new Map(),
      yf = new Set();
    function X(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
        ? e
        : e.ownerDocument;
    }
    var bf = j.d;
    j.d = { f: xf, r: Sf, D: Tf, C: Ef, L: Df, m: Of, X: Af, S: kf, M: Z };
    function xf() {
      var e = bf.f(),
        t = wu();
      return e || t;
    }
    function Sf(e) {
      var t = bt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ks(t) : bf.r(e);
    }
    var Cf = typeof document > `u` ? null : document;
    function wf(e, t, n) {
      var r = Cf;
      if (r && typeof t == `string` && t) {
        var i = Ht(t);
        (i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          yf.has(i) ||
            (yf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Rd(t, `link`, e),
              Ct(t),
              r.head.appendChild(t)));
      }
    }
    function Tf(e) {
      bf.D(e), wf(`dns-prefetch`, e, null);
    }
    function Ef(e, t) {
      bf.C(e, t), wf(`preconnect`, e, t);
    }
    function Df(e, t, n) {
      bf.L(e, t, n);
      var r = Cf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ht(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ht(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Ht(n.imageSizes) + `"]`))
          : (i += `[href="` + Ht(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Mf(e);
            break;
          case `script`:
            a = If(e);
        }
        vf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n
          )),
          vf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Nf(a))) ||
            (t === `script` && r.querySelector(Lf(a))) ||
            ((t = r.createElement(`link`)),
            Rd(t, `link`, e),
            Ct(t),
            r.head.appendChild(t)));
      }
    }
    function Of(e, t) {
      bf.m(e, t);
      var n = Cf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Ht(r) +
            `"][href="` +
            Ht(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = If(e);
        }
        if (
          !vf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          vf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Lf(a))) return;
          }
          (r = n.createElement(`link`)),
            Rd(r, `link`, e),
            Ct(r),
            n.head.appendChild(r);
        }
      }
    }
    function kf(e, t, n) {
      bf.S(e, t, n);
      var r = Cf;
      if (r && e) {
        var i = St(r).hoistableStyles,
          a = Mf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Nf(a)))) s.loading = 5;
          else {
            (e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = vf.get(a)) && zf(e, n);
            var c = (o = r.createElement(`link`));
            Ct(c),
              Rd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                (c.onload = e), (c.onerror = t);
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Rf(o, t, r);
          }
          (o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o);
        }
      }
    }
    function Af(e, t) {
      bf.X(e, t);
      var n = Cf;
      if (n && e) {
        var r = St(n).hoistableScripts,
          i = If(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Lf(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = vf.get(i)) && Bf(e, t),
            (a = n.createElement(`script`)),
            Ct(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Z(e, t) {
      bf.M(e, t);
      var n = Cf;
      if (n && e) {
        var r = St(n).hoistableScripts,
          i = If(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Lf(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = vf.get(i)) && Bf(e, t),
            (a = n.createElement(`script`)),
            Ct(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function jf(e, t, n, r) {
      var a = (a = de.current) ? X(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Mf(n.href)),
              (n = St(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Mf(n.href);
            var o = St(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Nf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                vf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  vf.set(e, n),
                  o || Ff(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = If(n)),
                (n = St(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Mf(e) {
      return `href="` + Ht(e) + `"`;
    }
    function Nf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Pf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Ff(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Rd(t, `link`, n),
          Ct(t),
          e.head.appendChild(t));
    }
    function If(e) {
      return `[src="` + Ht(e) + `"]`;
    }
    function Lf(e) {
      return `script[async]` + e;
    }
    function Q(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ht(n.href) + `"]`);
            if (r) return (t.instance = r), Ct(r), r;
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Ct(r),
              Rd(r, `style`, a),
              Rf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Mf(n.href);
            var o = e.querySelector(Nf(a));
            if (o) return (t.state.loading |= 4), (t.instance = o), Ct(o), o;
            (r = Pf(n)),
              (a = vf.get(a)) && zf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Ct(o);
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                (s.onload = e), (s.onerror = t);
              })),
              Rd(o, `link`, r),
              (t.state.loading |= 4),
              Rf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = If(n.src)),
              (a = e.querySelector(Lf(o)))
                ? ((t.instance = a), Ct(a), a)
                : ((r = n),
                  (a = vf.get(o)) && ((r = h({}, n)), Bf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Ct(a),
                  Rd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Rf(r, n.precedence, e));
      return t.instance;
    }
    function Rf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function zf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title);
    }
    function Bf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity);
    }
    var Vf = null;
    function Hf(e, t, n) {
      if (Vf === null) {
        var r = new Map(),
          i = (Vf = new Map());
        i.set(n, r);
      } else (i = Vf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[_t] ||
            a[ut] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Uf(e, t, n) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null
        );
    }
    function Wf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled), typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Gf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Kf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Mf(r.href),
            a = t.querySelector(Nf(i));
          if (a) {
            (t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Yf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Ct(a);
            return;
          }
          (a = t.ownerDocument || t),
            (r = Pf(r)),
            (i = vf.get(i)) && zf(r, i),
            (a = a.createElement(`link`)),
            Ct(a);
          var o = a;
          (o._p = new Promise(function (e, t) {
            (o.onload = e), (o.onerror = t);
          })),
            Rd(a, `link`, r),
            (n.instance = a);
        }
        e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Yf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n));
      }
    }
    var qf = 0;
    function Jf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Zf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Zf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, 6e4 + t);
              0 < e.imgBytes && qf === 0 && (qf = 62500 * Vd());
              var i = setTimeout(function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend))
                ) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, (e.imgBytes > qf ? 50 : 800) + t);
              return (
                (e.unsuspend = n),
                function () {
                  (e.unsuspend = null), clearTimeout(r), clearTimeout(i);
                }
              );
            }
          : null
      );
    }
    function Yf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Zf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var Xf = null;
    function Zf(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Xf = new Map()),
          t.forEach(Qf, e),
          (Xf = null),
          Yf.call(e));
    }
    function Qf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Xf.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), Xf.set(e, n);
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        (i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Yf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var $f = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: oe,
      _currentValue2: oe,
      _threadCount: 0,
    };
    function ep(e, t, n, r, i, a, o, s, c) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = $e(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = $e(0)),
        (this.hiddenUpdates = $e(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map());
    }
    function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ep(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = di(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ua()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ua(a),
        e
      );
    }
    function np(e) {
      return e ? ((e = li), e) : li;
    }
    function rp(e, t, n, r, i, a) {
      (i = np(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ga(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ka(e, r, t)),
        n !== null && (yu(n, e, t), qa(n, e, t));
    }
    function ip(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ap(e, t) {
      ip(e, t), (e = e.alternate) && ip(e, t);
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = oi(e, 67108864);
        t !== null && yu(t, e, 67108864), ap(e, 67108864);
      }
    }
    function sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = _u();
        t = at(t);
        var n = oi(e, t);
        n !== null && yu(n, e, t), ap(e, t);
      }
    }
    var cp = !0;
    function lp(e, t, n, r) {
      var i = A.T;
      A.T = null;
      var a = j.p;
      try {
        (j.p = 2), dp(e, t, n, r);
      } finally {
        (j.p = a), (A.T = i);
      }
    }
    function up(e, t, n, r) {
      var i = A.T;
      A.T = null;
      var a = j.p;
      try {
        (j.p = 8), dp(e, t, n, r);
      } finally {
        (j.p = a), (A.T = i);
      }
    }
    function dp(e, t, n, r) {
      if (cp) {
        var i = fp(r);
        if (i === null) Od(e, t, r, pp, n), Cp(e, r);
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = bt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Je(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ve(o));
                        (s.entanglements[1] |= c), (o &= ~c);
                      }
                      sd(a), !(U & 6) && ((au = ke() + 500), cd(0, !1));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (s = oi(a, 2)), s !== null && yu(s, a, 2), wu(), ap(a, 2);
              }
            if (((a = fp(r)), a === null && Od(e, t, r, pp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Od(e, t, r, null, n);
      }
    }
    function fp(e) {
      return (e = on(e)), $(e);
    }
    var pp = null;
    function $(e) {
      if (((pp = null), (e = yt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (pp = e), null;
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ae()) {
            case je:
              return 2;
            case Me:
              return 8;
            case Ne:
            case Pe:
              return 32;
            case Fe:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = bt(t)), t !== null && op(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return (gp = wp(gp, e, t, n, r, i)), !0;
        case `dragenter`:
          return (_p = wp(_p, e, t, n, r, i)), !0;
        case `mouseover`:
          return (vp = wp(vp, e, t, n, r, i)), !0;
        case `pointerover`:
          var a = i.pointerId;
          return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = yt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              (e.blockedOn = t),
                ct(e.priority, function () {
                  sp(n);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              (e.blockedOn = t),
                ct(e.priority, function () {
                  sp(n);
                });
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (an = r), n.target.dispatchEvent(r), (an = null);
        } else return (t = bt(n)), t !== null && op(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      (hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op);
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if ($(r || n) === null) continue;
              break;
            }
            var a = bt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t);
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        Ep(n), n.blockedOn === null && xp.shift();
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[dt] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[dt] || null))) s = o.formAction;
              else if ($(i) !== null) continue;
            } else s = o.action;
            typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n);
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        i !== null && (i(), (i = null)), r || setTimeout(n, 20);
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            (r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    (Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        rp(n, _u(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            rp(e.current, 2, null, e, null, null), wu(), (t[ft] = null);
          }
        });
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = st();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        xp.splice(n, 0, e), n === 0 && Ep(e);
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.8`) throw Error(i(527, Lp, `19.2.8`));
    j.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: A,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          (Re = zp.inject(Rp)), (ze = zp);
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(i(299));
      var r = !1,
        o = ``,
        s = Js,
        c = Ys,
        l = Xs,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = tp(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Pp)),
        (t.context = np(null)),
        (n = t.current),
        (r = _u()),
        (r = at(r)),
        (o = Ga(r)),
        (o.callback = null),
        Ka(n, o, r),
        (n = r),
        (t.current.lanes = n),
        et(t, n),
        sd(t),
        (e[ft] = t.current),
        Ed(e),
        new Ip(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = h());
  }),
  _ = `__TSS_CONTEXT`,
  v = Symbol.for(`TSS_SERVER_FUNCTION`),
  y = `application/x-tss-framed`;
`${y}`;
var b = () => window.__TSS_START_OPTIONS__;
function x(e) {
  return e?.isNotFound === !0;
}
function S(e) {
  e.statusCode = e.statusCode || e.code || 307;
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function C(e) {
  return e instanceof Response && !!e.options;
}
function w(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return S(e);
}
function T(e) {
  return e
    .replaceAll(`\0`, `/`)
    .replaceAll(`�`, `/`)
    .replace(/~([~0r])/g, (e, t) => (t === `0` ? `\0` : t === `r` ? `�` : t));
}
function E(e) {
  return e[e.length - 1];
}
function D(e, t) {
  return typeof e == `function` ? e(t) : e;
}
var O = Object.prototype.hasOwnProperty;
function ee(e) {
  for (let t in e) if (O.call(e, t)) return !0;
  return !1;
}
var te = () => Object.create(null),
  ne = (e, t) => k(e, t, !0);
function k(e, t, n, r = 0) {
  if (e === t) return e;
  if (r++ > 500) return t;
  let i = Array.isArray(e) && Array.isArray(t);
  if (!i && !(re(e) && re(t))) return t;
  let a = Object.keys(e),
    o = a.length,
    s = Object.keys(t),
    c = s.length;
  if (
    i
      ? o !== e.length ||
        c !== t.length ||
        (o && E(a) !== `${o - 1}`) ||
        (c && E(s) !== `${c - 1}`)
      : o !== Object.getOwnPropertyNames(e).length ||
        c !== Object.getOwnPropertyNames(t).length ||
        Object.getOwnPropertySymbols(t).length
  )
    return t;
  let l = 0,
    u,
    d,
    f;
  if (i) {
    for (
      ;
      l < c &&
      ((f = l),
      (d = e[f]),
      (u = t[f]),
      (u = d === u ? d : typeof d == `object` ? k(d, u, n, r) : u),
      u === d);
      l++
    );
    if (l === c && o === c) return e;
  } else {
    let i = o === c,
      p = !0;
    for (; l < c; l++) {
      (f = s[l]), (d = e[f]);
      let o = t[f];
      (u = d === o ? d : typeof d == `object` ? k(d, o, n, r) : o),
        (i &&= u === d && (a[l] === f || O.call(e, f))),
        (p &&= Object.is(u, o)),
        (a[l] = u);
    }
    if (i) return Object.getOwnPropertySymbols(e).length ? t : e;
    if (p) return t;
  }
  let p = i ? s.fill(0) : n ? te() : {};
  for (let o = 0; o < c; o++)
    (f = i ? o : s[o]),
      i
        ? ((d = e[f]),
          o > l &&
            ((u = t[f]),
            (u = d === u ? d : typeof d == `object` ? k(d, u, n, r) : u)),
          (p[f] = o < l ? d : u))
        : (p[f] = a[o]);
  return p;
}
function re(e) {
  return !e || typeof e != `object`
    ? !1
    : (Object.getPrototypeOf(e)?.constructor ?? Object) === Object;
}
function ie(e, t, n, r) {
  if (e === t) return !0;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let i = 0, a = e.length; i < a; i++) {
      let a = e[i],
        o = t[i];
      if (a !== o && !ie(a, o, n, r)) return !1;
    }
    return !0;
  }
  if (re(e) && re(t)) {
    if (n) {
      for (let i in t)
        if ((r || t[i] !== void 0) && !ie(e[i], t[i], n, r)) return !1;
      return !0;
    }
    let i = 0;
    if (r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    for (let a in t)
      if ((r || t[a] !== void 0) && (i-- === 0 || !ie(e[a], t[a], n, r)))
        return !1;
    return i === 0;
  }
  return !1;
}
var ae = /[\x00-\x1f\x7f"<>`{}]/g;
function A(e) {
  return e.replace(
    ae,
    (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`)
  );
}
function j(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return A(t);
}
var oe = [`http:`, `https:`, `mailto:`, `tel:`];
function se(e) {
  if (e[0] !== `/` && e.includes(`:`))
    return /^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i
      .exec(e)?.[1]
      ?.replace(/[\t\n\r]/g, ``)
      .toLowerCase();
}
var ce = /^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;
function le(e, t) {
  if (!e) return !1;
  if (ce.test(e)) return !0;
  let n = se(e);
  return n ? !t.has(n) : !1;
}
var M = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  N = /[&><\u2028\u2029]/g;
function ue(e) {
  return e.replace(N, (e) => M[e]);
}
function P(e) {
  if (!e) return e;
  let t = e;
  if (/[%\\\x00-\x1f\x7f]/.test(e)) {
    let n = /%25|%5C/gi,
      r = 0,
      i;
    for (t = ``; (i = n.exec(e)) !== null; )
      (t += j(e.slice(r, i.index)) + i[0]), (r = n.lastIndex);
    t += j(r ? e.slice(r) : e);
  }
  return t;
}
function de(e) {
  return /[\s\u0080-\uFFFF]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e;
}
function fe(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function pe(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function me(e) {
  return e === `/` ? e : e.replace(/^\/+/, ``);
}
function he(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/+$/, ``) : e;
}
function ge(e) {
  return he(me(e));
}
function _e(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function ve(e, t, n = `never`, r) {
  if ((t.includes(`//`) && (t = pe(t)), t.startsWith(`/`)))
    return t.length === 1 || n === `preserve`
      ? t
      : n === `always`
      ? t.endsWith(`/`)
        ? t
        : `${t}/`
      : t.endsWith(`/`)
      ? t.slice(0, -1)
      : t;
  let i = t === `.`,
    a;
  if (r) {
    a = i ? e : e + `\0` + t;
    let n = r.get(a);
    if (n) return n;
  }
  let o;
  if (i) o = e.split(`/`);
  else {
    for (
      e.includes(`//`) && (e = pe(e)), o = e.split(`/`);
      o.length > 1 && E(o) === ``;

    )
      o.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && o.push(r)
          : (o = [r])
        : r === `..`
        ? o.length > 1
          ? o.pop()
          : (o = [``])
        : r === `.` || o.push(r);
    }
  }
  o.length > 1 &&
    (E(o) === `` ? n === `never` && o.pop() : n === `always` && o.push(``));
  let s = o.join(`/`),
    c = (i ? pe(s) : s) || `/`;
  return a && r && r.set(a, c), c;
}
function ye(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g, `\\$&`), `g`);
  return (e) => e.replace(n, (e) => t.get(e) ?? e);
}
function be(e) {
  return e == null || e === ``;
}
function xe(e, t, n) {
  if (typeof t != `string`) return `` + (t ?? void 0);
  let r = e === `_splat`;
  if (r && (!t || /^[a-zA-Z0-9\-._~!/]*$/.test(t))) return t;
  let i = encodeURIComponent(t);
  return r && (i = i.replaceAll(`%2F`, `/`)), n ? n(i) : i;
}
function Se(e, t, n, r, i) {
  let a = e.endsWith(`/`) ? `/` : ``,
    o = ``;
  for (let e of t) {
    if (typeof e == `string`) {
      o += e;
      continue;
    }
    let [t, s, c, l] = e,
      u = t === 2,
      d = u && l !== void 0 ? l + a : l,
      f = n[s];
    if (t !== 3 || f != null) {
      if ((i && ((i[s] = f), u && (i[`*`] = f)), u && be(f))) {
        if (c === `/` && !d) continue;
        f = ``;
      }
      o += c + xe(s, f, r) + (d || ``);
    }
  }
  return o + a || `/`;
}
function Ce(e) {
  let t = new Map(),
    n,
    r;
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (n.visited = !0), n.value;
    },
    set(i, a) {
      let o = t.get(i);
      if (o) {
        o.value = a;
        return;
      }
      if (t.size >= e) {
        let e = n?.next().value;
        for (; !e || e.visited; )
          e ? (e.visited = !1) : (n = t.values()), (e = n.next().value);
        e === r && (n = void 0), t.delete(e.key);
      }
      let s = { key: i, value: a, visited: !1 };
      (r = s), t.set(i, s);
    },
    clear() {
      t.clear(), (n = void 0), (r = void 0);
    },
  };
}
function we() {
  throw Error(`Invariant failed`);
}
var Te = 4,
  Ee = 5;
function De(e) {
  let t = e.names;
  if (t) return t;
  let n = [];
  for (let t of e) typeof t != `string` && n.push(t[1]);
  return (e.names = n);
}
function Oe(e, t, n) {
  let r = e.substring(t, n);
  if (r.charCodeAt(0) === 36)
    return r.length === 1
      ? [2, `_splat`, ``, void 0]
      : [1, r.substring(1), ``, ``];
  let i = r.indexOf(`{`);
  if (i >= 0) {
    let a = r.indexOf(`}`, i),
      o = r.charCodeAt(i + 1) === 45,
      s = i + (o ? 3 : 2);
    if (a >= 0 && r.charCodeAt(s - 1) === 36 && (!o || s < a)) {
      let c = r.substring(s, a);
      return [
        o ? 3 : c ? 1 : 2,
        c || `_splat`,
        r.substring(0, i),
        e.substring(t + a + 1, c ? n : e.length),
      ];
    }
  }
  return r;
}
function ke(e, t, n, r, i, a) {
  let o = n,
    s = t.fullPath ?? t.from,
    c = t.options,
    l = s.length,
    u = s.endsWith(`/`) ? l - 1 : l,
    d = c?.caseSensitive ?? e,
    f = c?.params?.parse ?? c?.parseParams,
    p,
    m = a ? n - 1 : 0;
  if (!r || s.includes(`$`)) {
    p = a?.slice() ?? [];
    let e = E(p);
    e &&
      typeof e != `string` &&
      e[0] === 2 &&
      ((p[p.length - 1] = [
        e[0],
        e[1],
        e[2],
        e[3] === void 0
          ? void 0
          : e[3] + s.substring(n - (s[n - 2] === `/` ? 2 : 1), u),
      ]),
      (m = l));
  }
  for (; o < l; ) {
    let e = o,
      t = s.indexOf(`/`, e),
      n = t === -1 ? l : t,
      a = Oe(s, e, n);
    o = n + 1;
    let c;
    if (typeof a == `string`) {
      if (!r) continue;
      let e = a,
        t;
      d
        ? (t = r.static ??= new Map())
        : ((e = a.toLowerCase()), (t = r.staticInsensitive ??= new Map()));
      let n = t.get(e);
      if (n) c = n;
      else {
        let n = je(r);
        (c = n), t.set(e, n);
      }
    } else {
      let t = a[0],
        h = a[2],
        g = a[3] ?? ``;
      if (
        (t === 2 && ((n = l), (o = n + 1)),
        p &&
          m < n &&
          (m < e - 1 && p.push(s.substring(m, e - 1)),
          (a[2] = `/` + h),
          t === 2 && a[3] !== void 0 && u < l && (a[3] = g.slice(0, -1)),
          p.push(a),
          (m = n)),
        !r)
      )
        continue;
      let _ = d && !!(h || g);
      d || ((h = h.toLowerCase()), (g = g.toLowerCase()));
      let v =
          t === 1
            ? (r.dynamic ??= [])
            : t === 3
            ? (r.optional ??= [])
            : (r.wildcard ??= []),
        y =
          t !== 2 &&
          !f &&
          v.find(
            (e) =>
              !e.parse &&
              e.caseSensitive === _ &&
              e.prefix === h &&
              e.suffix === g
          );
      if (y) c = y;
      else {
        let e = je(r, t, _, h, g);
        (c = e), v.push(e), v.length === 2 && i?.push(v);
      }
    }
    r = c;
  }
  p && m < u && p.push(s.substring(m, u));
  let h = p?.slice();
  if (!r) return h;
  if (
    f &&
    t.children &&
    !t.isRoot &&
    t.id &&
    t.id.charCodeAt(t.id.lastIndexOf(`/`) + 1) === 95
  ) {
    let e = je(r, Ee);
    (r.pathless ??= []).push(e), (r = e);
  }
  let g = (t.path || !t.children) && !t.isRoot;
  if (g && u < l) {
    let e = je(r, Te);
    (r.index = e), (r = e);
  }
  return (
    (r.parse = f ?? null),
    (r.priority = c?.params?.priority ?? 0),
    r.route || ((r.data = h), g && (r.route = t)),
    [r, o, h]
  );
}
function Ae(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority))
    return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
    ? 1
    : e.suffix && !t.suffix
    ? -1
    : !e.suffix && t.suffix
    ? 1
    : e.caseSensitive && !t.caseSensitive
    ? -1
    : !e.caseSensitive && t.caseSensitive
    ? 1
    : 0;
}
function je(e, t = 0, n, r, i) {
  return {
    kind: t,
    depth: e ? e.depth + 1 : 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    data: void 0,
    parent: e,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Me(e, t) {
  let n = je(),
    r = [];
  function i(e, t, n, a) {
    let [o, s, c] = ke(!1, e, t, n, r, a);
    if (e.children) for (let t of e.children) i(t, s, o, c);
  }
  for (let t of e) i(t, 1, n);
  for (let e of r) e.sort(Ae);
  (t.masksTree = n), (t.flatCache = Ce(1e3));
}
function Ne(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n !== void 0) return n;
  let r = Le(e, t.masksTree);
  return t.flatCache.set(e, r), r;
}
function Pe(e, t, n, r, i) {
  (e ||= `/`), (r ||= `/`);
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o || ((o = je()), ke(t, { from: e }, 1, o), i.singleCache.set(a, o)),
    Le(r, o, n)
  );
}
function Fe(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = Le(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return a && (a.branch = ze(a.route)), t.matchCache.set(r, a), a;
}
function Ie(e, t = !1) {
  let n = je(),
    r = [],
    i = {},
    a = {},
    o = 0;
  function s(e, n, c, l) {
    if ((e.init(o), e.id in i && we(), (i[e.id] = e), o !== 0 && e.path)) {
      let t = he(e.fullPath);
      (!a[t] || e.fullPath.endsWith(`/`)) && (a[t] = e);
    }
    o++;
    let [u, d, f] = ke(t, e, n, c, r, l);
    if (((e._interpolation = f), e.children))
      for (let t of e.children) s(t, d, u, f);
  }
  s(e, 1, n);
  for (let e of r) e.sort(Ae);
  return {
    processedTree: {
      segmentTree: n,
      singleCache: Ce(1e3),
      matchCache: Ce(1e3),
      flatCache: null,
      masksTree: null,
    },
    routesById: i,
    routesByPath: a,
  };
}
function Le(e, t, n = !1) {
  let r = e.split(`/`),
    i = Ve(e, r, t, n);
  if (!i) return null;
  let [a] = Re(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function Re(e, t, n) {
  let r = Be(n.node),
    i = n.node.data && De(n.node.data),
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.param ?? 0;
  for (; s < r.length; o++, s++, c++) {
    let u = r[s];
    if (u.kind === Te) break;
    if (u.kind === Ee) {
      o--, c--;
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1 || u.kind === 3)) {
      let e = i[l++];
      if (u.kind === 3 && n.skipped & (1 << s)) {
        o--, (c = f - 1);
        continue;
      }
      let t =
        u.suffix || u.prefix
          ? d.substring(u.prefix.length, d.length - u.suffix.length)
          : d;
      (t || u.kind === 1) && (a[e] = decodeURIComponent(t));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(f + t.prefix.length, e.length - t.suffix.length),
        r = decodeURIComponent(n);
      (a[`*`] = r), (a._splat = r);
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, param: l }]
  );
}
function ze(e) {
  let t = [e];
  for (; e.parentRoute; ) (e = e.parentRoute), t.push(e);
  return t.reverse(), t;
}
function Be(e) {
  let t = Array(e.depth + 1);
  do (t[e.depth] = e), (e = e.parent);
  while (e);
  return t;
}
function Ve(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !E(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [
      { node: n, index: 1, skipped: 0, statics: 0, dynamics: 0, optionals: 0 },
    ],
    c = null,
    l = null;
  for (; s.length; ) {
    let n = s.pop(),
      {
        node: i,
        index: u,
        skipped: d,
        statics: f,
        dynamics: p,
        optionals: m,
      } = n,
      { extract: h, rawParams: g } = n;
    if (i.kind === 2 && i.route && !Ge(l, n)) continue;
    if (i.parse) {
      if (!We(e, t, n)) continue;
      (g = n.rawParams), (h = n.extract);
    }
    r && i.route && i.kind !== Te && Ge(c, n) && (c = n);
    let _ = u === o;
    if (
      _ &&
      (i.route && (!a || i.kind === Te || i.kind === 2) && Ge(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let v = _ ? void 0 : t[u],
      y;
    if (_ && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        },
        r = !0;
      if ((i.index.parse && (We(e, t, n) || (r = !1)), r)) {
        if (!p && !m && !d && Ue(f, o)) return n;
        Ge(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (
          !(
            r &&
            (_ ||
              !(n.caseSensitive ? v : (y ??= v.toLowerCase())).startsWith(r))
          )
        ) {
          if (a) {
            if (_) continue;
            let e = t.slice(u).join(`/`),
              i = e.slice(-a.length);
            if (
              (n.caseSensitive ? i : i.toLowerCase()) !== a ||
              e.length - a.length < r.length
            )
              continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m,
            extract: h,
            rawParams: g,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << (i.depth + 1));
      for (let t = i.optional.length - 1; t >= 0; t--) {
        let n = i.optional[t];
        s.push({
          node: n,
          index: u,
          skipped: e,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
      if (!_)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let t = i.optional[e],
            { prefix: n, suffix: r } = t;
          if (n || r) {
            let e = t.caseSensitive ? v : (y ??= v.toLowerCase());
            if (
              (n && !e.startsWith(n)) ||
              (r && e.indexOf(r, e.length - r.length) < n.length)
            )
              continue;
          }
          s.push({
            node: t,
            index: u + 1,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m + He(o, u),
            extract: h,
            rawParams: g,
          });
        }
    }
    if (!_ && i.dynamic && v)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? v : (y ??= v.toLowerCase());
          if (
            (n && !e.startsWith(n)) ||
            (r && e.indexOf(r, e.length - r.length) < n.length)
          )
            continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          statics: f,
          dynamics: p + He(o, u),
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
    if (!_ && i.staticInsensitive) {
      let e = i.staticInsensitive.get((y ??= v.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + He(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (!_ && i.static) {
      let e = i.static.get(v);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + He(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (i.pathless)
      for (let e = i.pathless.length - 1; e >= 0; e--) {
        let t = i.pathless[e];
        s.push({
          node: t,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return (
      (c.rawParams ??= Object.create(null)),
      (c.rawParams[`**`] = decodeURIComponent(r)),
      c
    );
  }
  return null;
}
function He(e, t) {
  return 2 ** (e - t - 1);
}
function Ue(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function We(e, t, n) {
  let r, i;
  try {
    [r, i] = Re(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Ge(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === Te) > (e.node.kind === Te) ||
                ((t.node.kind === Te) == (e.node.kind === Te) &&
                  t.node.depth > e.node.depth)))))))
  );
}
function Ke() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var qe = `tsr-scroll-restoration-v1_3`,
  Je = Ke();
function Ye() {
  try {
    return JSON.parse(Je?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
var Xe = Ye(),
  Ze = `data-scroll-restoration-id`,
  Qe = (e) => e.state.__TSR_key || e.href;
function $e(e) {
  let t = e.getAttribute(Ze);
  if (t) return `[${Ze}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode); ) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling); ) e++;
    let a = `${r.localName}:nth-child(${e})`;
    (n = n ? `${a} > ${n}` : a), (r = i);
  }
  return n;
}
var et = !1,
  tt = `window`;
function nt(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function rt(e) {
  let t = new Set();
  for (let n of e) {
    if (n === tt) continue;
    let e = nt(n);
    e && t.add(e);
  }
  return t;
}
function it(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.e = !0);
  let i = e.options.getScrollRestorationKey || Qe,
    a = new Set(),
    o = (e) => {
      let t = (Xe[e] ||= {});
      for (let e of a)
        e === document
          ? (t[tt] = { scrollX, scrollY })
          : e.isConnected &&
            (t[$e(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  n &&
    !r.s &&
    ((r.s = !0),
    (et = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        et || a.add(e.target);
      },
      !0
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      e.fromLocation && o(i(e.fromLocation)), a.clear();
    }),
    addEventListener(`pagehide`, () => {
      (history.scrollRestoration = `auto`),
        o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get()));
      try {
        Je?.setItem(qe, JSON.stringify(Xe));
      } catch {}
    }),
    addEventListener(`pageshow`, (e) => {
      e.persisted && (history.scrollRestoration = `manual`);
    })),
    !r.r &&
      ((r.r = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.n,
          c = r.h,
          l;
        if (
          (a.clear(),
          (r.n = !0),
          (r.h = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.e && d && d !== u) {
          let e = Xe[d];
          if (e) {
            let t = Xe[u];
            for (let n in e) {
              if (n === tt) {
                if (s) continue;
              } else {
                let e = nt(n);
                if (!e || (s && o && ((l ??= rt(o)), l.has(e)))) continue;
              }
              (t ||= Xe[u] = {}), (t[n] ??= e[n]);
            }
          }
        }
        et = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= rt(o));
            let t = e && i && c,
              s = r.e ? Xe[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === tt) {
                  if (t) continue;
                  scrollTo({ top: i, left: r, behavior: n }), (a = !0);
                } else {
                  let t = nt(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          et = !1;
        }
      }));
}
function at(e, t = String) {
  let n;
  for (let r in e) {
    let i = e[r];
    i !== void 0 && (n ||= new URLSearchParams()).set(r, t(i));
  }
  return n ? n.toString() : ``;
}
function ot(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
      ? !0
      : e * 0 == 0 && +e + `` === e
      ? +e
      : e
    : ``;
}
function st(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null
      ? (n[e] = ot(r))
      : Array.isArray(t)
      ? t.push(ot(r))
      : (n[e] = [t, ot(r)]);
  }
  return n;
}
var ct = /^(?:\s|["[{\d-]|fa|nu|tr)/,
  lt = dt(JSON.parse),
  ut = ft(JSON.stringify, JSON.parse);
function dt(e) {
  let t = e === JSON.parse;
  return (n) => {
    n[0] === `?` && (n = n.substring(1));
    let r = st(n);
    for (let n in r) {
      let i = r[n];
      if (typeof i == `string`) {
        if (t && !ct.test(i)) continue;
        try {
          r[n] = e(i);
        } catch {}
      }
    }
    return r;
  };
}
function ft(e, t) {
  let n = t === JSON.parse;
  function r(r) {
    if (r && typeof r == `object`)
      try {
        return e(r);
      } catch {}
    else if (t && typeof r == `string`) {
      if (n && !ct.test(r)) return r;
      try {
        return t(r), e(r);
      } catch {}
    }
    return r;
  }
  return (e) => {
    let t = at(e, r);
    return t ? `?${t}` : ``;
  };
}
var pt = `__root__`;
function mt(e, t, n) {
  let r = ge(e),
    i = `/${r}`,
    a = t ? i : i.toLowerCase(),
    o = `${a}/`,
    s = {
      input: ({ url: e }) => {
        let n = t ? e.pathname : e.pathname.toLowerCase();
        return (
          n === a
            ? (e.pathname = `/`)
            : n.startsWith(o) && (e.pathname = e.pathname.slice(i.length)),
          e
        );
      },
      output: ({ url: e }) => ((e.pathname = pe(`/${r}${e.pathname}`)), e),
    };
  return n
    ? {
        input: ({ url: e }) => ht(n, s.input({ url: e })),
        output: ({ url: e }) => s.output({ url: gt(n, e) }),
      }
    : s;
}
function ht(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function gt(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function _t(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i } = t,
    a = new Map(),
    o = n(`idle`),
    s = n(e),
    c = n(void 0),
    l = n([]),
    u = r(() => l.get().map((e) => a.get(e).get())),
    d = r(() => ({
      status: o.get(),
      isLoading: o.get() === `pending`,
      matches: u.get(),
      location: s.get(),
      resolvedLocation: c.get(),
    }));
  function f(e) {
    let t = a.get(e);
    return t || ((t = n(void 0)), a.set(e, t)), t;
  }
  let p = {
    status: o,
    location: s,
    resolvedLocation: c,
    ids: l,
    matches: u,
    byRoute: a,
    __store: d,
    getMatchStore: f,
    setMatches: m,
  };
  function m(e) {
    let t = l.get(),
      n = e.map((e) => e.routeId);
    i(() => {
      fe(t, n) || l.set(n);
      for (let e of t) n.includes(e) || a.get(e).set(() => void 0);
      for (let t of e) {
        let e = f(t.routeId);
        e.get() !== t && e.set(t);
      }
    });
  }
  return p;
}
var vt = `__TSR_index`,
  yt = `popstate`,
  bt = `beforeunload`,
  xt = /^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/;
function St(e) {
  let t = xt.exec(e);
  return t ? `/` + e.slice(t[0].length) : e;
}
function Ct(e) {
  return (
    /[\x00-\x1f\x7f]/.test(e) &&
      (e = e.replace(/[\x00-\x1f\x7f]/g, (e) =>
        `	
\r`.includes(e)
          ? ``
          : encodeURIComponent(e)
      )),
    St(e)
  );
}
function wt(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      (t = e.getLocation()), n.forEach((e) => e({ location: t, action: r }));
    },
    i = (n) => {
      e.notifyOnIndexChange ?? !0 ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = Dt(i.path, i.state);
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[vt];
      (i = Tt(s + 1, i)),
        a({
          task: () => {
            e.pushState(n, i), r({ type: `PUSH` });
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        });
    },
    replace: (n, i, o) => {
      let s = t.state[vt];
      (i = Tt(s, i)),
        a({
          task: () => {
            e.replaceState(n, i), r({ type: `REPLACE` });
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        });
    },
    go: (t, n) => {
      a({
        task: () => {
          e.go(t, n?.ignoreBlocker ?? !1), i({ type: `GO`, index: t });
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` });
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` });
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[vt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
    _getBlockers: () => e.getBlockers?.() ?? [],
  };
}
function Tt(e, t) {
  let n = Ot();
  return { ...t, key: n, __TSR_key: n, [vt]: e };
}
function Et(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = (t) => Ct(e?.createHref ? e.createHref(t) : t),
    c =
      e?.parseLocation ??
      (() =>
        Dt(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state
        ));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = Ot();
    t.history.replaceState({ [vt]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _ = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g[2] ? t.history.pushState : t.history.replaceState)(g[1], ``, g[0]),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (u = void 0));
    },
    v = (t, n, r) => {
      let i = e?.createHref ? s(n) : void 0,
        a = !!g;
      a || (u = l),
        (l = Dt(n, r)),
        (g = [i ?? l.href, r, g?.[2] || t]),
        a || queueMicrotask(() => _());
    },
    y = (e) => {
      (l = c()), S.notify({ type: e });
    },
    b = async () => {
      if (((m = !1), f)) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[vt] - l.state[vt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let r = a();
        if (typeof document < `u` && r.length) {
          for (let i of r)
            if (
              await i.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              (f = !0), t.history.go(-n), S.notify(u);
              return;
            }
        }
      }
      (l = c()), S.notify(u);
    },
    x = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return e.preventDefault(), (e.returnValue = ``);
    },
    S = wt({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => v(!0, e, t),
      replaceState: (e, t) => v(!1, e, t),
      back: (e) => (e && ((p = !0), (m = !0)), t.history.back()),
      forward: (e) => {
        e && ((p = !0), (m = !0)), t.history.forward();
      },
      go: (e, n) => {
        (d = !0), n && ((p = !0), (m = !0)), t.history.go(e);
      },
      createHref: (e) => s(e),
      flush: _,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(bt, x, { capture: !0 }),
          t.removeEventListener(yt, b);
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    (S._ignoreNextBeforeUnload = (e) => {
      m = !1;
      try {
        (e = new URL(e, t.document.baseURI).href),
          (m =
            /^https?:/.test(e) &&
            (!e.includes(`#`) ||
              e.split(`#`)[0] !== t.location.href.split(`#`)[0]));
      } catch {}
    }),
    t.addEventListener(bt, x, { capture: !0 }),
    t.addEventListener(yt, b),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return S._ignoreSubscribers || y(`PUSH`), r;
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return S._ignoreSubscribers || y(`REPLACE`), n;
    }),
    S
  );
}
function Dt(e, t) {
  let n = Ct(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`);
  if (!t) {
    let e = Ot();
    t = { [vt]: 0, key: e, __TSR_key: e };
  }
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t,
  };
}
function Ot() {
  return (Math.random() + 1).toString(36).substring(7);
}
function kt(e, t) {
  return (
    (e.protocol !== `http:` && e.protocol !== `https:`) ||
    e.origin !== t ||
    !!e.username ||
    !!e.password
  );
}
function At(e) {
  return e.pathname + e.search + e.hash;
}
function jt(e) {
  return (
    e.options.loader ||
    e.options.beforeLoad ||
    e.lazyFn ||
    e.options.component?.preload ||
    e.options.pendingComponent?.preload
  );
}
function Mt(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function Nt(e, t) {
  return {
    fromLocation: t,
    toLocation: e,
    pathChanged: t?.pathname !== e.pathname,
    hrefChanged: t?.href !== e.href,
    hashChanged: t?.hash !== e.hash,
  };
}
function Pt({
  key: e,
  __TSR_key: t,
  __TSR_index: n,
  __hashScrollIntoViewOptions: r,
  ...i
}) {
  return i;
}
function Ft(e) {
  return (
    e.findIndex(
      (e) => e.status === `error` || e.status === `notFound` || e._notFound
    ) + 1
  );
}
function It(e, t, n, r, i, a) {
  r && (t = t.slice(0, r)), i && (n = n.slice(0, i));
  for (let r of t) {
    if (a && e._tx !== a) return;
    n.some((e) => e.routeId === r.routeId) ||
      e.routesById[r.routeId].options.onLeave?.(r);
  }
  for (let r of n) {
    if (a && e._tx !== a) return;
    e.routesById[r.routeId].options[
      t.some((e) => e.routeId === r.routeId) ? `onStay` : `onEnter`
    ]?.(r);
  }
}
var Lt = class {
  constructor(e, t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this._scroll = { n: !0 }),
      (this.subscribers = new Set()),
      (this._cache = new Map()),
      (this._committed = []),
      (this.startTransition = async (e) => (e(), !1)),
      (this.update = (e) => {
        let t = this.options;
        (this.options = { ...t, ...e }),
          (this.isServer =
            this.options.isServer ?? !1 ?? typeof document > `u`),
          (this.staticLocations = new WeakMap()),
          (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            (this.history = this.options.history ? this.options.history : Et()),
          (this.origin = this.options.origin),
          (this.origin ||=
            window?.origin && window.origin !== `null`
              ? window.origin
              : `http://localhost`);
        let n = this.options.basepath ?? `/`,
          r = this.options.rewrite,
          i =
            this.basepath !== n ||
            t?.rewrite !== r ||
            t?.caseSensitive !== this.options.caseSensitive;
        if (
          (i &&
            ((this.basepath = n),
            (this.rewrite =
              n !== `/` && ge(n) ? mt(n, this.options.caseSensitive, r) : r)),
          this.history && this.updateLatestLocation(),
          this.options.routeTree !== this.routeTree)
        ) {
          this.routeTree = this.options.routeTree;
          let e;
          (e = this.buildRouteTree()), this.setRoutes(e);
        }
        if (this.stores) i && this.stores.location.set(this.latestLocation);
        else if (this.latestLocation) {
          let e = this.getStoreConfig(this);
          (this.batch = e.batch),
            (this.stores = _t(this.latestLocation, e)),
            it(this);
        }
      }),
      (this.updateLatestLocation = () => {
        this.latestLocation = this.parseLocation(
          this.history.location,
          this.latestLocation
        );
      }),
      (this.buildRouteTree = () => {
        let e = Ie(this.routeTree, this.options.caseSensitive);
        return (
          this.options.routeMasks &&
            Me(this.options.routeMasks, e.processedTree),
          { ...e, resolvePathCache: Ce(1e3) }
        );
      }),
      (this.subscribe = (e, t) => {
        let n = { eventType: e, fn: t };
        return (
          this.subscribers.add(n),
          () => {
            this.subscribers.delete(n);
          }
        );
      }),
      (this.emit = (e) => {
        for (let t of this.subscribers)
          if (t.eventType === e.type)
            try {
              t.fn(e);
            } catch (e) {
              console.error(e);
            }
      }),
      (this.parseLocation = (e, t) => {
        let n = ({ pathname: e, search: n, hash: r, href: i }, a) => {
            if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
              let i = this.options.parseSearch(n),
                o = this.options.stringifySearch(i);
              return {
                href: e + o + r,
                publicHref: e + o + r,
                pathname: P(e),
                external: !1,
                searchStr: o,
                search: ne(t?.search, i),
                hash: P(r.slice(1)),
                state: k(t?.state, a),
              };
            }
            let o = ht(this.rewrite, new URL(i, this.origin)),
              s = this.options.parseSearch(o.search),
              c = this.options.stringifySearch(s);
            return (
              (o.search = c),
              {
                href: o.href.replace(o.origin, ``),
                publicHref: i,
                pathname: P(St(o.pathname)),
                external: !!this.rewrite && kt(o, this.origin),
                searchStr: c,
                search: ne(t?.search, s),
                hash: P(o.hash.slice(1)),
                state: k(t?.state, a),
              }
            );
          },
          r = n(e, e.state),
          { __tempLocation: i, __tempKey: a } = r.state;
        if (i && (!a || a === this.tempLocationKey)) {
          let e = n(i, {
            ...i.state,
            __tempLocation: void 0,
            key: r.state.key,
            __TSR_key: r.state.__TSR_key,
          });
          return (e.maskedLocation = r), e;
        }
        return r;
      }),
      (this.matchRoutes = (e, t, n) =>
        typeof e == `string`
          ? this.matchRoutesInternal({ pathname: e, search: t }, n)
          : this.matchRoutesInternal(e, t)),
      (this.getMatchedRoutes = (e) => {
        let t = Object.create(null),
          n = Fe(he(e), this.processedTree, !0);
        return (
          n && Object.assign(t, n.rawParams),
          [n?.branch || [this.routesById.__root__], t, n?.route]
        );
      }),
      (this.buildLocation = (e) => {
        {
          let t = this.staticLocations.get(e);
          if (t) return t;
        }
        let t = !1,
          n = (n = {}) => {
            if (n.href) {
              let e = Dt(n.href, {});
              n = {
                ...n,
                to: ht(this.rewrite, new URL(e.pathname, this.origin)).pathname,
                search: this.options.parseSearch(e.search),
                hash: e.hash.slice(1),
              };
            }
            let r =
                n._fromLocation || this._pendingLocation || this.latestLocation,
              i,
              a = () => ((t = !0), r),
              o = () => ((t = !0), (i ??= this.matchRoutesLightweight(r))),
              s = n.to ? `${n.to}` : `.`,
              c = ve(
                s[0] === `/`
                  ? ``
                  : n.unsafeRelative === `path`
                  ? a().pathname
                  : n.from ?? o()[1],
                s,
                this.options.trailingSlash,
                this.resolvePathCache
              ),
              l = this.routesByPath[he(c)],
              u = c.includes(`$`),
              d;
            if (l) d = l._branch ??= ze(l);
            else if (u) d = [];
            else {
              let [e, t, n] = this.getMatchedRoutes(c);
              (d = e),
                this.options.notFoundRoute &&
                  (!n || (n.path !== `/` && t[`**`])) &&
                  (d = [...d, this.options.notFoundRoute]);
            }
            let f = u
                ? l?._interpolation ?? ke(!1, { fullPath: c }, 0)
                : void 0,
              p;
            for (let e of d) {
              let t = e.options.params?.stringify ?? e.options.stringifyParams;
              if (t) {
                let e = o()[3];
                if (((p ??= Ht(n.params, e)), !ee(p))) break;
                p === e && (p = Object.assign(te(), p));
                try {
                  Object.assign(p, t(p));
                } catch {}
              }
            }
            p ??= Ht(n.params, Ut(n.params, f) ? o()[3] : Wt);
            let m = e.leaveParams
                ? c
                : St(P(f ? Se(c, f, p, this.pathParamsDecoder) : c)),
              h = Gt(d, e._includeValidateSearch),
              g = () => {
                let t = o()[2];
                if (e._includeValidateSearch && this.options.search?.strict) {
                  let e = {};
                  d.forEach((n) => {
                    if (n.options.validateSearch)
                      try {
                        Object.assign(
                          e,
                          Vt(n.options.validateSearch, { ...e, ...t })
                        );
                      } catch {}
                  }),
                    (t = e);
                }
                return t;
              },
              _ = h.length
                ? Kt(h, g(), n)
                : n.search === !0
                ? g()
                : typeof n.search == `function`
                ? n.search(g())
                : n.search || Wt,
              v = this.options.stringifySearch(_),
              y =
                n.hash === !0
                  ? a().hash
                  : typeof n.hash == `function`
                  ? n.hash(a().hash)
                  : n.hash || void 0,
              b = y ? `#${y}` : ``,
              x = n.state
                ? n.state === !0
                  ? a().state
                  : typeof n.state == `function`
                  ? n.state(a().state)
                  : n.state
                : Wt,
              S = `${m}${v}${b}`,
              C,
              w,
              T = !1;
            if (this.rewrite) {
              let e = new URL(S, this.origin),
                t = e.origin,
                n = gt(this.rewrite, e);
              (C = At(e)),
                kt(n, t) ? ((w = n.href), (T = !0)) : (w = St(At(n)));
            } else (C = de(S)), (w = C);
            return {
              publicHref: w,
              href: C,
              pathname: m,
              search: _,
              searchStr: v,
              state: x,
              hash: y ?? ``,
              external: T,
              unmaskOnReload: n.unmaskOnReload,
            };
          },
          r = n(e);
        if (e.mask) r.maskedLocation = n({ from: e.from, ...e.mask });
        else if (this.options.routeMasks) {
          let t = Ne(r.pathname, this.processedTree);
          if (t) {
            let i = Object.assign(te(), t.rawParams),
              { from: a, params: o, ...s } = t.route,
              c = Ht(o, i);
            r.maskedLocation = n({ from: e.from, ...s, params: c });
          }
        }
        return (
          !t &&
            e._fromLocation &&
            !r.maskedLocation &&
            this.staticLocations.set(e, r),
          r
        );
      }),
      (this.commitLocation = async ({
        viewTransition: e,
        ignoreBlocker: t,
        ...n
      }) => {
        let r = n.maskedLocation ?? n;
        if (r.external)
          return Rt(this, r.publicHref, {
            replace: n.replace,
            ignoreBlocker: t,
          });
        let i,
          a =
            he(this.latestLocation.href) === he(n.href) &&
            ie(Pt(n.state), Pt(this.latestLocation.state)),
          o = this._commitPromise,
          s,
          c = new Promise((e) => {
            s = e;
          });
        if (
          ((c.resolve = () => {
            s(), o?.resolve();
          }),
          (this._commitPromise = c),
          a)
        )
          this.load();
        else {
          let { maskedLocation: r, hashScrollIntoView: a, ...o } = n;
          r &&
            ((o = {
              ...r,
              state: {
                ...r.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...o,
                  search: o.searchStr,
                  state: {
                    ...o.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    __TSR_key: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (o.state.__tempKey = this.tempLocationKey)),
            (o.state = {
              ...o.state,
              __hashScrollIntoViewOptions:
                a ?? this.options.defaultHashScrollIntoView ?? !0,
            }),
            (this.shouldViewTransition = e),
            (i = n.replace ? `REPLACE` : `PUSH`),
            this.history[i === `REPLACE` ? `replace` : `push`](
              o.publicHref,
              o.state,
              { ignoreBlocker: t }
            ),
            this.history.subscribers.size || this.load({ action: { type: i } });
        }
        return (this._scroll.n = n.resetScroll ?? !0), this._commitPromise;
      }),
      (this.buildAndCommitLocation = ({
        replace: e,
        resetScroll: t,
        hashScrollIntoView: n,
        viewTransition: r,
        ignoreBlocker: i,
        ...a
      } = {}) => {
        let o = this.buildLocation({ ...a, _includeValidateSearch: !0 });
        this._pendingLocation = o;
        let s = this.commitLocation({
          ...o,
          viewTransition: r,
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          ignoreBlocker: i,
        });
        return (
          queueMicrotask(() => {
            this._pendingLocation === o && (this._pendingLocation = void 0);
          }),
          s
        );
      }),
      (this.navigate = async ({
        to: e,
        reloadDocument: t,
        href: n,
        publicHref: r,
        ...i
      }) => {
        let a = n ? se(n) : void 0;
        if (a || t) {
          if (e !== void 0 || !n) {
            let t = this.buildLocation({ to: e, ...i }),
              a = t.maskedLocation ?? t;
            (n ??= a.publicHref), (r ??= a.publicHref);
          }
          let t = !a && r ? r : n;
          return Rt(this, t, i);
        }
        return this.buildAndCommitLocation({
          ...i,
          href: n,
          to: e,
          _isNavigate: !0,
        });
      }),
      (this.load = async (e) => {
        this.updateLatestLocation(),
          e?.action &&
            (this._scroll.h =
              e.action.type === `PUSH` || e.action.type === `REPLACE`),
          await Bn(this, e);
      }),
      (this.startViewTransition = (e) => {
        let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          ((this.shouldViewTransition = void 0),
          t && typeof document.startViewTransition == `function`)
        ) {
          let n;
          if (
            typeof t == `object` &&
            window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)
          ) {
            let r = this.latestLocation,
              i = this.stores.resolvedLocation.get(),
              a = typeof t.types == `function` ? t.types(Nt(r, i)) : t.types;
            if (a === !1) return e();
            n = { update: e, types: a };
          } else n = e;
          return document.startViewTransition(n).updateCallbackDone;
        }
        return e();
      }),
      (this.invalidate = (e) => {
        let t = this._committed,
          n = e?.filter,
          r = this._preloads,
          i = new Set(),
          a = (e) => {
            (!n || n(e)) && i.add(e.id);
          };
        t.forEach(a),
          this._cache.forEach(a),
          r?.forEach((e) => e.forEach(a)),
          this._tx?.[3].forEach(a);
        let o = [];
        for (let [e, t] of r ?? [])
          t.some((e) => i.has(e.id)) && (r.delete(e), o.push(e));
        let s = (t) => {
          if (i.has(t.id)) {
            let n = this.routesById[t.routeId],
              r = {
                ...t,
                invalid: !0,
                ...((e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`) &&
                jt(n)
                  ? { status: `pending`, error: void 0 }
                  : void 0),
              };
            return (t._flight = void 0), r;
          }
          return t;
        };
        this._committed = t.map(s);
        for (let [t, n] of this._cache)
          i.has(t) &&
            ((n.invalid = !0), e?.forcePending && (n.status = `pending`));
        for (let e of i) {
          let t = this._flights?.get(e);
          this._flights?.delete(e), t && !t[2] && o.push(t[1]);
        }
        for (let e of o) e.abort();
        return (this.shouldViewTransition = !1), this.load({ sync: e?.sync });
      }),
      (this.resolveRedirect = (e) => {
        let t = e.options,
          n = e.headers.get(`Location`) || t.href;
        if (!n) {
          let e = this.buildLocation(t);
          n = (e.maskedLocation ?? e).publicHref || `/`;
        }
        let r;
        if (ce.test(n) || ((r = se(n)) && !this.protocolAllowlist.has(r)))
          throw Error(`Redirect blocked: unsafe protocol`);
        if (r === `http:` || r === `https:`) {
          let e = new URL(n);
          e.pathname.startsWith(`//`)
            ? (n = e.href)
            : kt(e, this.origin) || ((n = At(e)), (r = void 0));
        }
        return (
          r && (t.reloadDocument = !0),
          (t.href = n),
          e.headers.set(`Location`, n),
          e
        );
      }),
      (this.clearCache = (e) => {
        let t = this._cache,
          n = this._preloads,
          r = e?.filter,
          i = [],
          a = [];
        for (let [e, n] of t) (!r || r(n)) && (a.push(e), i.push(n));
        let o = [];
        for (let [e, t] of n ?? [])
          (!r || t.some(r)) && (o.push(e), i.push(...t));
        for (let e of a) t.delete(e);
        for (let e of o) n.delete(e);
        for (let e of i) {
          let t = e._flight;
          (e._flight = void 0),
            t &&
              !--t[2] &&
              (this._flights?.get(e.id) === t && this._flights.delete(e.id),
              o.push(t[1]));
        }
        for (let e of o) e.abort();
      }),
      (this.loadRouteChunk = Zt),
      (this.preloadRoute = (e) => Vn(this, e)),
      (this.matchRoute = (e, t) => {
        let n = {
            ...e,
            to: e.to
              ? ve(
                  e.from || ``,
                  e.to,
                  this.options.trailingSlash,
                  this.resolvePathCache
                )
              : void 0,
            params: e.params || {},
            leaveParams: !0,
          },
          r = this.buildLocation(n),
          i = this.stores.status.get() === `pending`;
        if (t?.pending && !i) return !1;
        let a =
            t?.pending ?? !i
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
          o = Pe(
            r.pathname,
            t?.caseSensitive ?? !1,
            t?.fuzzy ?? !1,
            a.pathname,
            this.processedTree
          );
        return !o || (e.params && !ie(o.rawParams, e.params, !0))
          ? !1
          : t?.includeSearch ?? !0
          ? ie(a.search, r.search, !0)
            ? o.rawParams
            : !1
          : o.rawParams;
      }),
      (this.getStoreConfig = t),
      e.pathParamsAllowedCharacters?.length &&
        (this.pathParamsDecoder = ye(e.pathParamsAllowedCharacters)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...e,
        caseSensitive: e.caseSensitive ?? !1,
        notFoundMode: e.notFoundMode ?? `fuzzy`,
        stringifySearch: e.stringifySearch ?? ut,
        parseSearch: e.parseSearch ?? lt,
        protocolAllowlist: e.protocolAllowlist ?? oe,
      }),
      (self.__TSR_ROUTER__ = this);
  }
  isShell() {
    return !!this.options.isShell;
  }
  get state() {
    return this.stores.__store.get();
  }
  setRoutes(e) {
    Object.assign(this, e),
      (this.lightweightCache = new WeakMap()),
      (this.staticLocations = new WeakMap());
    let t = this.options.notFoundRoute;
    t &&
      (t.init(99999999999),
      this.routesById[t.id] !== t && (t._interpolation = ke(!1, t, 0)),
      (this.routesById[t.id] = t));
  }
  matchRoutesInternal(e, t) {
    let [n, r, i] = this.getMatchedRoutes(e.pathname),
      a = n,
      o = !1;
    (i ? i.path !== `/` && r[`**`] : he(e.pathname)) &&
      (this.options.notFoundRoute
        ? (a = [...a, this.options.notFoundRoute])
        : (o = !0));
    let s = o ? qt(this.options.notFoundMode, a) : void 0,
      c = Array(a.length),
      l = this._committed,
      u = (e, t) => {
        let n = l[t];
        return n?.routeId === e.id
          ? n
          : e === this.options.notFoundRoute
          ? l.find((t) => t.routeId === e.id)
          : void 0;
      },
      d;
    for (let n = 0; n < a.length; n++) {
      let i = a[n],
        o = c[n - 1],
        l,
        f,
        p;
      {
        let n = o?.search ?? e.search,
          r = o?._strictSearch ?? void 0;
        try {
          let e = Vt(i.options.validateSearch, { ...n }) ?? void 0;
          (l = { ...n, ...e }), (f = { ...r, ...e });
        } catch (e) {
          let r = e;
          if (
            (e instanceof zt || (r = new zt(e.message, { cause: e })),
            t?.throwOnError)
          )
            throw r;
          (l = n), (f = {}), (p = r);
        }
      }
      let m = ``,
        h = ``;
      try {
        (m = i.options.loaderDeps?.({ search: l }) ?? ``),
          (h = (m && JSON.stringify(m)) || ``);
      } catch (e) {
        if (t?.throwOnError) throw e;
        p ??= e;
      }
      let g = te(),
        _ = i._interpolation
          ? Se(i.fullPath, i._interpolation, r, this.pathParamsDecoder, g)
          : i.fullPath,
        v = i.id + _ + h,
        y = u(i, n),
        b = this._cache.get(v) ?? (y?.id === v ? y : void 0);
      d = b?._strictParams ?? Object.assign(g, d);
      let S;
      if (!b)
        try {
          Jt(i, d);
        } catch (e) {
          if (
            ((S = x(e) || C(e) ? e : new Bt(e.message, { cause: e })),
            t?.throwOnError)
          )
            throw S;
        }
      let w = y ? `stay` : `enter`,
        T;
      if (b)
        T = {
          ...b,
          cause: w,
          search: ne(y ? y.search : b.search, l),
          _strictSearch: f,
          searchError: p,
        };
      else {
        let e = jt(i) ? `pending` : `success`;
        T = {
          id: v,
          ssr: i.options.ssr,
          index: n,
          routeId: i.id,
          params: y?.params ?? d,
          _strictParams: d,
          pathname: _,
          updatedAt: Date.now(),
          search: y ? ne(y.search, l) : l,
          _strictSearch: f,
          searchError: p,
          status: e,
          isFetching: !1,
          error: void 0,
          paramsError: S,
          context: {},
          abortController: t?._controller ?? new AbortController(),
          cause: w,
          loaderDeps: y ? k(y.loaderDeps, m) : m,
          invalid: !1,
          preload: !1,
          staticData: i.options.staticData || {},
          fullPath: i.fullPath,
        };
      }
      let E = s === i.id;
      T._notFound && !E && (T.error = void 0), (T._notFound = E), (c[n] = T);
    }
    for (let e = 0; e < c.length; e++) {
      let n = c[e];
      (n.params = n.cause === `stay` ? ne(n.params, d) : d),
        t?._controller && (n.context = {});
    }
    return c;
  }
  matchRoutesLightweight(e) {
    let t = E(this.stores.ids.get()),
      n = t ? this.stores.byRoute.get(t).get() : void 0,
      r = n?.id,
      i = this.lightweightCache.get(e);
    if (i && i[0] === r) return i[1];
    let [a, o] = this.getMatchedRoutes(e.pathname),
      s = E(a),
      c = { ...e.search };
    for (let e of a)
      try {
        Object.assign(c, Vt(e.options.validateSearch, c));
      } catch {}
    let l = n && n.routeId === s.id && n.pathname === e.pathname,
      u;
    if (l) u = n.params;
    else {
      let e = o;
      for (let t of a)
        try {
          Jt(t, e);
        } catch {}
      u = e;
    }
    let d = [a, s.fullPath, c, u];
    return this.lightweightCache.set(e, [r, d]), d;
  }
};
async function Rt(e, t, { replace: n, ignoreBlocker: r }) {
  if (!le(t, e.protocolAllowlist)) {
    if (!r) {
      let t = e.history._getBlockers();
      for (let r of t)
        if (
          r?.blockerFn &&
          (await r.blockerFn({
            currentLocation: e.history.location,
            nextLocation: e.history.location,
            action: n ? `REPLACE` : `PUSH`,
          }))
        )
          return;
    }
    e.history._ignoreNextBeforeUnload?.(t),
      n ? window.location.replace(t) : (window.location.href = t);
  }
}
var zt = class extends Error {},
  Bt = class extends Error {};
function Vt(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new zt(`Async validation not supported`);
    if (n.issues)
      throw new zt(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function Ht(e, t) {
  if (e === void 0 || e === !0) return t;
  let n = Object.create(null);
  return e === !1 || e === null
    ? n
    : typeof e == `function`
    ? (Object.assign(n, t), Object.assign(n, e(n)))
    : Object.assign(n, t, e);
}
function Ut(e, t) {
  return typeof e == `function`
    ? !0
    : !t || e === !1 || e === null
    ? !1
    : e === void 0 ||
      e === !0 ||
      t.some((t) => typeof t != `string` && !O.call(e, t[1]));
}
var Wt = Object.freeze({});
function Gt(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r].options;
    `search` in i
      ? i.search?.middlewares && n.push(...i.search.middlewares)
      : (i.preSearchFilters || i.postSearchFilters) &&
        n.push(({ search: e, next: t }) => {
          let n = t(
            i.preSearchFilters
              ? i.preSearchFilters.reduce((e, t) => t(e), e)
              : e
          );
          return i.postSearchFilters
            ? i.postSearchFilters.reduce((e, t) => t(e), n)
            : n;
        });
    let a = i.validateSearch;
    t &&
      a &&
      n.push(({ search: e, next: t, meta: n }) => {
        let r = t(e);
        try {
          let e = Vt(a, r);
          if (n && e)
            for (let t in e) t in r || (n.defaulted ||= new Map()).set(t, e[t]);
          return { ...r, ...e };
        } catch {}
        return r;
      });
  }
  return n;
}
function Kt(e, t, n) {
  let r = (t, i, a) => {
    if (t >= e.length) {
      if (!n.search) return {};
      if (n.search === !0) return i;
      let e = D(n.search, i);
      return a && (a.explicit = e), e;
    }
    return e[t]({
      search: i,
      next: (e, n) => {
        if (n) {
          let n = a || {};
          return { search: r(t + 1, e, n), meta: n };
        }
        return r(t + 1, e, a);
      },
      meta: a,
    });
  };
  return r(0, t);
}
function qt(e, t) {
  if (e !== `root`) {
    let e;
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.options.notFoundComponent) return r.id;
      e ||= r.children && r.id;
    }
    if (e) return e;
  }
  return pt;
}
function Jt(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  n && Object.assign(t, n(t));
}
function Yt(e, t) {
  return e.options[t]?.preload?.();
}
function Xt(e, t) {
  let n = Yt(e, `component`),
    r = Yt(e, `pendingComponent`);
  return (
    t && (r ? (r = r.then(t)) : t()),
    n && r ? Promise.all([n, r]).then(() => {}) : n ?? r
  );
}
function Zt(e, t, n) {
  let r = () => (t === !1 ? void 0 : t ? Yt(e, t) : Xt(e, n)),
    i = e._lazy;
  if (i) return i === !0 ? r() : i.then(r);
  if (!e.lazyFn) return r();
  let a = e.lazyFn().then(
    (t) => {
      {
        let { id: n, ...r } = t.options;
        Object.assign(e.options, r), (e._lazy = !0);
      }
    },
    (t) => {
      throw ((e._lazy = void 0), t);
    }
  );
  return (e._lazy = a), a.then(r);
}
function Qt(e) {
  let t = e.findIndex((e) => e.status !== `success` || e._notFound) + 1;
  return t && t < e.length ? e.slice(0, t) : e;
}
function $t(e) {
  let t = e.length;
  for (let n = 0; n < t; n++) {
    let r = e[n];
    if (r._assetEnd !== void 0) {
      t = Math.min(t, Math.max(n + 1, r._assetEnd));
      continue;
    }
    if (r.status !== `success` || r._notFound) {
      t = n + 1;
      break;
    }
  }
  return t < e.length ? e.slice(0, t) : e;
}
var en = 0,
  tn = 1,
  nn = 2,
  rn = 3,
  an = [4];
function on(e) {
  return typeof e[0] == `number`;
}
function sn(e, t) {
  return t.aborted
    ? Promise.race([Promise.reject(t), e])
    : new Promise((n, r) => {
        let i = () => r(t);
        t.addEventListener(`abort`, i, { once: !0 }),
          Promise.resolve(e)
            .then(n, r)
            .then(() => t.removeEventListener(`abort`, i));
      });
}
function cn(e, t) {
  return e.routesById[t.routeId];
}
function ln(e, t, n) {
  return C(e)
    ? [rn, e]
    : x(e)
    ? ((e.routeId ||= n), [nn, e])
    : t
    ? (typeof e?.then == `function` &&
        (e = Error(`A Promise was thrown`, { cause: e })),
      [tn, e])
    : [en, e];
}
function un(e, t) {
  let n = ln(t, !0, e.id);
  if (n[0] !== tn) return n;
  try {
    e.options.onError?.(n[1]);
  } catch (t) {
    n = ln(t, !0, e.id);
  }
  return n;
}
function dn(e, t, n, r, i) {
  return i[0].signal.aborted ? an : Dn(e, t, n, un(n, r), i);
}
async function fn(e, t, n, r, i, a) {
  let [o, s] = t,
    c = n[0].signal,
    l = !!n[3];
  for (let i = n[6] ?? 0; i < r; i++) {
    let r = s[i],
      u = cn(e, r);
    r.abortController = n[0];
    let d = s[i - 1]?.context ?? e.options.context ?? {},
      f = {
        params: r.params,
        location: o,
        navigate: (t) => e.navigate({ ...t, _fromLocation: o }),
        buildLocation: e.buildLocation,
        cause: l ? `preload` : r.cause,
        abortController: n[0],
        preload: l,
        matches: s,
        routeId: u.id,
      };
    try {
      let e = (r._ctx ||= u.options.context
        ? u.options.context({ ...f, deps: r.loaderDeps, context: d }) || {}
        : void 0);
      r.context = { ...d, ...e };
    } catch (a) {
      return mn(e, r), [i, dn(e, t, u, a, n)];
    }
    if (c.aborted) return [i, an];
    let p = r.paramsError ?? r.searchError;
    if (p !== void 0) return mn(e, r), [i, dn(e, t, u, p, n)];
    let m = u.options.beforeLoad;
    if (!m) continue;
    let h = r.status;
    i >= a && ((r.status = `pending`), n[7]?.());
    try {
      _n(e, r, `beforeLoad`, n[0]);
      let a = m({
          ...f,
          search: r.search,
          context: r.context,
          ...e.options.additionalContext,
        }),
        o = await (typeof a?.then == `function` ? sn(a, c) : a);
      if (c.aborted) return [i, an];
      let s = Dn(e, t, u, ln(o, !1, u.id), n);
      if (s[0] !== en) return mn(e, r), [i, s];
      r.context = { ...r.context, ...o };
    } catch (a) {
      return mn(e, r), [i, dn(e, t, u, a, n)];
    } finally {
      (r.status = h), _n(e, r, !1, n[0]);
    }
  }
  i();
}
function pn(e, t, n) {
  if (!(!n || --n[2])) {
    if (e._flights?.get(t.id) === n) {
      let n = e._tx;
      if (
        n &&
        !n[0].signal.aborted &&
        !n[3].includes(t) &&
        n[3].some((e) => e.id === t.id) &&
        n[3].some((e) => e.isFetching === `beforeLoad`)
      )
        return;
      e._flights.delete(t.id);
    }
    return n[1];
  }
}
function mn(e, t) {
  let n = t._flight;
  (t._flight = void 0), pn(e, t, n)?.abort();
}
function hn(e, t, n, r) {
  let i = [];
  for (let a of t)
    if (!n?.includes(a)) {
      let t = a._flight;
      if (
        ((a._flight = void 0),
        r &&
          t?.[2] === 1 &&
          e._flights?.get(a.id) === t &&
          n?.some((e) => e.id === a.id))
      )
        t[2] = 0;
      else {
        let n = pn(e, a, t);
        n && i.push(n);
      }
    }
  for (let e of i) e.abort();
}
function gn(e) {
  for (let t of e) {
    let e = t._flight;
    e && e[2]++;
  }
}
function _n(e, t, n, r) {
  if (((t.isFetching = n), r && e._tx?.[0] !== r)) return;
  let i = e.stores.byRoute.get(t.routeId),
    a = i?.get();
  a?.id === t.id && i.set({ ...a, isFetching: n });
}
function vn(e, t, n, r, i, a, o) {
  let s = t[0];
  return {
    params: n.params,
    location: s,
    navigate: (t) => e.navigate({ ...t, _fromLocation: s }),
    cause: o ? `preload` : n.cause,
    abortController: i,
    preload: o,
    deps: n.loaderDeps,
    parentMatchPromise: a,
    context: n.context,
    route: r,
    ...e.options.additionalContext,
  };
}
async function yn(e, t, n, r, i, a, o) {
  let s = o[0],
    c = s.signal;
  if (c.aborted) return an;
  if (!i) return [en, void 0];
  let l = n._flight;
  _n(e, n, `loader`, s);
  try {
    if (!l) {
      let s = new AbortController();
      (l = [
        Promise.resolve()
          .then(() => i(vn(e, t, n, r, s, a, !!o[3])))
          .then(
            (e) => ln(e, !1, r.id),
            (e) => ln(e, !0, r.id)
          )
          .then(
            (t) => (
              t[0] !== en &&
                e._flights?.get(n.id) === l &&
                (e._flights.delete(n.id), l[2] || s.abort()),
              t[0] === tn && l[2] ? un(r, t[1]) : t
            )
          ),
        s,
        1,
      ]),
        (e._flights ??= new Map()).set(n.id, l);
    }
    return (
      (n._flight = l),
      (n.abortController = l[1]),
      Dn(e, t, r, await sn(l[0], c), o)
    );
  } catch (t) {
    if (t !== c || !c.aborted) throw t;
    return mn(e, n), an;
  } finally {
    _n(e, n, !1, s);
  }
}
function bn(e, t, n) {
  t[0] !== rn &&
    ((e.status = `success`),
    (e.error = void 0),
    t[0] === en
      ? ((e.loaderData = t[1]),
        (e.invalid = !1),
        (e.updatedAt = Date.now()),
        (e.preload = n))
      : (e.invalid = !0));
}
function xn(e, t, n) {
  let r = e._cache.get(t.id);
  if (
    r !== n ||
    e._committed.some((e) => e.id === t.id && e._flight === t._flight)
  )
    return;
  let i = { ...t, _notFound: void 0, context: {} };
  i._flight && i._flight[2]++, e._cache.set(t.id, i), r && mn(e, r);
}
function Sn(e, t) {
  return t[0] === tn || t[0] === nn
    ? {
        ...e,
        status: t[0] === tn ? `error` : `notFound`,
        error: t[1],
        _flight: void 0,
      }
    : e;
}
function Cn(e, t, n, r, i, a, o) {
  let s = t[1][n],
    c = cn(e, s),
    l = !!a[3],
    u = e._cache.get(s.id),
    d,
    f = !1,
    p;
  try {
    if (
      (s.status === `success` &&
        ((d = c.options.shouldReload),
        typeof d == `function` && (d = d(vn(e, t, s, c, a[0], i, l))),
        a[0].signal.aborted && (p = an)),
      !p)
    )
      if (s.status !== `success`) f = !0;
      else {
        let t =
          l || s.preload
            ? c.options.preloadStaleTime ??
              e.options.defaultPreloadStaleTime ??
              3e4
            : c.options.staleTime ?? e.options.defaultStaleTime ?? 0;
        f = !!(
          s.invalid ||
          d ||
          (d === void 0 &&
            Date.now() - s.updatedAt >= t &&
            (a[5] ||
              s.cause === `enter` ||
              a[2].some((e) => e.routeId === s.routeId && e.id !== s.id)))
        );
      }
  } catch (n) {
    (s.invalid = !0), mn(e, s), (p = dn(e, t, c, n, a));
  }
  let m = c.options.loader,
    h = typeof m == `function`,
    g = h ? m : m?.handler,
    _ = !l || c.options.preload !== !1,
    v = _ && m ? e._flights?.get(s.id) : void 0;
  v === s._flight || p
    ? (v = void 0)
    : v && !f && !l && d === void 0
    ? (f = !0)
    : f || (v = void 0);
  let y = !!(
      m &&
      f &&
      s.status === `success` &&
      !l &&
      !a[4] &&
      ((h ? void 0 : m.staleReloadMode) ?? e.options.defaultStaleReloadMode) !==
        `blocking`
    ),
    b = f && _,
    x = b && !y && (s.status !== `success` || !!m),
    S = n >= o ? a[7] : void 0,
    C = c.lazyFn && c._lazy !== !0 ? S : void 0;
  if (
    (b && !m && ((s.invalid = !1), (s.updatedAt = Date.now())), v && v[2]++, x)
  ) {
    let t = s._flight;
    (s._flight = v),
      pn(e, s, t)?.abort(),
      n >= o && (s.status = `pending`),
      S?.();
  }
  b || (s.isFetching = !1);
  let w =
      !p && x
        ? yn(e, t, s, c, g, i, a).then(
            (t) => (
              bn(s, t, l),
              t[0] === en &&
                (m && !a[0].signal.aborted && xn(e, s, u),
                n >= o && (s.status = `pending`)),
              t
            )
          )
        : Promise.resolve(p ?? [en, s.loaderData]),
    T = (async () => {
      try {
        let e = Zt(c, void 0, C);
        e && (await sn(e, a[0].signal));
      } catch (r) {
        if (
          !t[1].some(
            (e, t) =>
              t <= n &&
              (e.status === `error` || e.status === `notFound` || e._notFound)
          )
        )
          return [n, dn(e, t, c, r, a)];
      }
      let r = await w;
      x &&
        r[0] === en &&
        s.status === `pending` &&
        !a[0].signal.aborted &&
        ((s.status = `success`), S?.());
    })();
  if ((r.push([n, w, T]), !y)) return w.then((e) => Sn(s, e));
  let E = { ...s, status: `pending`, preload: !1, _flight: v };
  (s.invalid = !1), (s.isFetching = `loader`);
  let D = yn(e, t, E, c, g, i, a).then(
    (e) => ((s.isFetching = !1), bn(E, e, !1), e)
  );
  return (t[2] ??= []).push([n, D, T, E]), D.then((e) => Sn(E, e));
}
async function wn(e, t, n, r, i = 0) {
  let a = n?.[1][1],
    o = a?.routeId
      ? t.findIndex((e) => e.routeId === a.routeId)
      : n?.[0] ?? t.length - 1;
  o < 0 && (o = 0);
  for (let n = o; n >= 0; n--) {
    let i = cn(e, t[n]);
    try {
      let e = Zt(i, !1);
      e && (await sn(e, r));
    } catch (e) {
      if (e === r && r.aborted) throw e;
    }
    if (i.options.notFoundComponent) return n;
  }
  return a?.routeId ? o : i;
}
function Tn(e, t) {
  t[2] &&=
    (hn(
      e,
      t[2].map((e) => e[3])
    ),
    void 0);
}
async function En(e, t, n, r) {
  let i;
  try {
    await Promise.all(
      e.map((e) =>
        e[1].then(async (t) => {
          let a = e[0];
          if (!(r && a >= (await r))) {
            if (t[0] >= rn) throw [a, t];
            !i &&
              t[0] !== en &&
              ((i = [a, t]),
              await Promise.all(
                (n ?? []).map((e) => {
                  if (!(e[0] <= a))
                    return e[1].then((t) => {
                      if (t[0] === rn) throw [e[0], t];
                    });
                })
              ));
          }
        })
      )
    );
  } catch (e) {
    return e;
  }
  return t ?? i;
}
function Dn(e, t, n, r, i, a) {
  for (; r[0] === rn; ) {
    let o = r[1],
      s = o.options;
    try {
      if (
        ((s.href || o.headers.has(`Location`)) &&
          (e.resolveRedirect(o), s.reloadDocument)) ||
        (s.reloadDocument ? i[3] : i[1] >= 20)
      )
        return r;
      let n = e.buildLocation({
          ...s,
          _fromLocation: t[0],
          _includeValidateSearch: !0,
        }),
        a = n.maskedLocation ?? n;
      if (a.external) {
        let t = o.clone();
        return (
          (t.options = { ...s }),
          t.headers.set(`Location`, a.publicHref),
          e.resolveRedirect(t),
          i[3] ? [rn, t] : [rn, t, a]
        );
      }
      return [rn, o, n];
    } catch (e) {
      (r = a ? [tn, e] : un(n, e)), (a = !0);
    }
  }
  return r;
}
async function On(e, t, n, r, i, a) {
  let o = t[1],
    s = await i,
    c = !1,
    l = o.findIndex((e) => e._notFound),
    u = (t) => (t[1][0] === nn ? wn(e, o, t, r.signal) : t[0]),
    d = l < 0 ? o.length : l;
  if ((s?.[1][0] ?? 0) >= rn) d = 0;
  else if (s) {
    d = s[2] ??= await u(s);
    for (let e of n) {
      if (e[0] >= d) break;
      let t = await e[1];
      if (t[0] !== en && t[0] < rn && !(`loaderData` in o[e[0]])) {
        (s = [e[0], t]), (d = s[2] = await u(s));
        break;
      }
    }
  }
  for (let e of n) {
    if (e[0] >= d) break;
    let t = await e[2];
    if (t) {
      s = t;
      break;
    }
  }
  if ((s?.[1][0] ?? 0) >= rn) {
    let n = s[1];
    if (n[0] !== rn || n[1].options.reloadDocument || n[2]) return Tn(e, t), n;
    (c = !0), (s = [0, [tn, Error(`Too many redirects`)]]);
  }
  let f = s ? s[2] ?? (await u(s)) : l;
  if (f >= 0) {
    let i = s?.[1],
      l = i?.[0],
      u = o[f],
      d = i?.[1],
      p = () => {
        i &&
          ((u._notFound = void 0),
          l === tn
            ? (u.status = `error`)
            : ((d.routeId = u.routeId),
              u.routeId === e.routeTree.id
                ? ((u.status = `success`), (u._notFound = !0))
                : (u.status = `notFound`)),
          (u.error = d),
          (u.isFetching = !1));
      };
    p(), i || a?.();
    let m = cn(e, u);
    try {
      await sn(
        i
          ? Promise.resolve().then(() =>
              Zt(m, l === tn ? `errorComponent` : `notFoundComponent`)
            )
          : Promise.all([Zt(m), Zt(m, `notFoundComponent`)]),
        r.signal
      );
    } catch (n) {
      if (n === r.signal && r.signal.aborted) return Tn(e, t), an;
    }
    i
      ? c &&
        (r.abort(),
        await Promise.all([
          ...n.map((e) => e[1]),
          ...n.map((e) => e[2]),
          ...(t[2] ?? []).map((e) => e[1]),
        ]),
        Tn(e, t),
        hn(e, o),
        p())
      : (u.status = `success`);
  }
  return t;
}
async function kn(e, t, n, r = 0, i = t[1].length) {
  let a = t[1];
  for (let t = r; t < i; t++) {
    let r = a[t],
      i = cn(e, r).options;
    if (i.head || i.scripts)
      try {
        let t = {
            ssr: e.options.ssr,
            matches: a,
            match: r,
            params: r.params,
            loaderData: r.loaderData,
          },
          [o, s] = await sn(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
        (r.meta = o?.meta),
          (r.links = o?.links),
          (r.headScripts = o?.scripts),
          (r.styles = o?.styles),
          (r.scripts = s);
      } catch (e) {
        if (e === n && n.aborted) break;
        console.error(e);
      }
    if (r.status !== `success` || r._notFound) break;
  }
  return t;
}
async function An(e, t, n, r) {
  let i = [t, n],
    a = r[0].signal,
    o;
  try {
    let t = e.stores.matches.get(),
      s = n.findIndex((e) => e._notFound);
    if (e.options.notFoundMode !== `root` && s >= 0) {
      let t = await wn(e, n, void 0, a, s);
      (n[s]._notFound = void 0), (n[t]._notFound = !0), (s = t);
    }
    let c = s < 0 ? n.length : s + 1,
      l = 0;
    for (; l < c && l !== s; ) {
      let e = n[l],
        i = r[2][l],
        a = t[l];
      if (
        i?.id !== e.id ||
        i.status !== `success` ||
        e.preload ||
        a?.id !== e.id ||
        a.status !== `success` ||
        (l++, i._notFound || a._notFound)
      )
        break;
    }
    let u = [],
      d = r[6] ?? 0,
      f = d ? Promise.resolve(n[d - 1]) : void 0,
      p = () => {
        for (let t = d; t < c && !a.aborted; t++) f = Cn(e, i, t, u, f, r, l);
      },
      m = await fn(e, i, r, c, p, l);
    if (m) {
      if (((r[4] = !0), (c = m[0]), m[1][0] === nn)) {
        let t = await wn(e, n, m, a);
        (m[2] = t), (c = Math.min(c, t + 1));
      } else m[1][0] >= rn && (c = 0);
      p();
    }
    if (!a.aborted && !r[3]) {
      let t = [];
      for (let [n, r] of e._flights ?? [])
        r[2] || (e._flights.delete(n), t.push(r[1]));
      for (let e of t) e.abort();
    }
    let h = On(e, i, u, r[0], En(u, m, i[2]), r[7]);
    i[2]?.length &&
      (i[3] = En(
        i[2],
        void 0,
        void 0,
        h.then(
          (e) => (on(e) ? 0 : Qt(n).length),
          () => 0
        )
      )),
      (o = await h);
  } catch (t) {
    if ((Tn(e, i), t === a && a.aborted)) return an;
    throw t;
  }
  return on(o) ? o : kn(e, o, a, r[6] === n.length ? r[6] : 0);
}
function jn(e, t) {
  if (e._tx !== t) return;
  let n = t[3],
    r = e.stores.matches.get(),
    i = e._pending;
  for (let a = 0; a < n.length; a++) {
    let o = n[a],
      s = o.status === `success` && !o._notFound,
      c = r[a]?.id === o.id && r[a]?.status === `pending`;
    if (s && !c) continue;
    let l = cn(e, o),
      u =
        s || o.invalid ? 0 : l.options.pendingMs ?? e.options.defaultPendingMs,
      d = l.options.pendingComponent ?? e.options.defaultPendingComponent;
    if (!d || typeof u != `number` || u === 1 / 0) {
      i && ((i[0] = t), (i[2] = 0), (i[4] = !0));
      return;
    }
    let f = l.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0,
      p = !1;
    if (
      (i?.[1] === o.id
        ? ((p = i[0] !== t), (i[0] = t))
        : (clearTimeout(i?.[3]), (e._pending = i = void 0)),
      i ||
        (e._pending = i =
          [t, o.id, c ? Date.now() + f : t[4] + u, void 0, c || void 0, d]),
      i[4] && !p && i[5] === d)
    )
      return;
    if (((i[5] = d), !i[4])) {
      clearTimeout(i[3]);
      let n = i[2] - Date.now();
      if (n > 0) {
        i[3] = setTimeout(() => jn(e, t), n);
        return;
      }
      i[2] = 0;
    }
    let m = n.map((e) => ({ ...e, _flight: void 0 }));
    m[a].status = `pending`;
    let h = (i[4] = e
      .startTransition(() => e.stores.setMatches(m), m)
      .then(
        (t) => (
          t &&
            e._pending === i &&
            i[4] === h &&
            !i[2] &&
            (i[2] = Date.now() + f),
          t
        )
      ));
    return;
  }
}
function Mn(e, t) {
  let n = e._pending;
  (e._tx === t || !e._tx?.[3].some((e) => e.id === n?.[1])) &&
    (clearTimeout(n?.[3]), (e._pending = void 0));
}
async function Nn(e, t) {
  let n = e._pending;
  if (!n) return;
  clearTimeout(n[3]);
  let r = n[2] - Date.now();
  if (!n[4] || r <= 0 || !Qt(t[3]).some((e) => e.id === n[1])) return;
  let i;
  try {
    await sn(
      new Promise((e) => {
        i = setTimeout(e, r);
      }),
      t[0].signal
    );
  } catch {}
  clearTimeout(i);
}
function Pn(e, t) {
  (e._committed = t), e.stores.setMatches(t);
}
function Fn(e, t, n, r) {
  let i = e._committed,
    a = e._lifecycleEnd,
    o = e._cache;
  for (let e of n) (e.preload = !1), r && (e._assetEnd = void 0);
  let s = Qt(n).length,
    c = new Map();
  {
    let t = Date.now(),
      r = new Set();
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      (e < s || t.status === `success`) && r.add(t.id);
    }
    for (let n of [...i, ...o.values()]) {
      if (n.status !== `success` || r.has(n.id)) continue;
      let i = cn(e, n);
      !i.options.loader ||
        t - n.updatedAt >=
          (n.preload
            ? i.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5
            : i.options.gcTime ?? e.options.defaultGcTime ?? 3e5) ||
        c.set(
          n.id,
          o.get(n.id) === n
            ? n
            : { ...n, _flight: void 0, isFetching: !1, context: {} }
        );
    }
  }
  (t[3] = []), (e._cache = c);
  let l = (e._lifecycleEnd = Ft(n));
  Pn(e, n),
    hn(
      e,
      [...o.values(), ...i].filter((e) => e._flight && c.get(e.id) !== e),
      n
    ),
    It(e, i, n, a, l, t);
}
async function In(e, t) {
  let n = e._tx;
  for (; n && n !== t; ) (t = n), await n[5], (n = e._tx);
}
function Ln(e, t, n) {
  let r = n[1].options,
    i = n[2];
  if (!i) return e.navigate({ ...r, replace: !0, ignoreBlocker: !0 });
  if (r.reloadDocument)
    return e.navigate({
      href: (i.maskedLocation ?? i).publicHref,
      reloadDocument: !0,
      replace: !0,
      ignoreBlocker: !0,
    });
  (i._redirects = t[1] + 1), (e._pendingLocation = i);
  let a = e.commitLocation({
    ...i,
    viewTransition: r.viewTransition,
    replace: !0,
    resetScroll: r.resetScroll,
    hashScrollIntoView: r.hashScrollIntoView,
    ignoreBlocker: !0,
  });
  return (
    queueMicrotask(() => {
      e._pendingLocation === i && (e._pendingLocation = void 0);
    }),
    a
  );
}
async function Rn(e, t, n, r, i) {
  let a = n.map((e) => ({ ...e }));
  gn(a);
  for (let t of r) mn(e, a[t[0]]), (a[t[0]] = t[3]);
  let o = [t[2], a],
    s;
  try {
    s = await On(e, o, r, t[0], i);
  } catch (t) {
    throw (hn(e, a), t);
  }
  if (on(s)) {
    hn(e, a),
      s[0] === rn && e._tx === t && e._committed === n && (await Ln(e, t, s));
    return;
  }
  if ((await kn(e, s, t[0].signal), e._tx !== t || e._committed !== n)) {
    hn(e, a);
    return;
  }
  for (let t of a) {
    let n = e._cache.get(t.id);
    n?._flight && n._flight === t._flight && (e._cache.delete(t.id), mn(e, n));
  }
  Pn(e, a), hn(e, n, a);
}
async function zn(e, t, n, r, i, a) {
  let o = await An(e, t[2], t[3], [
    t[0],
    t[1],
    e._committed,
    void 0,
    i,
    n,
    a,
    r,
  ]);
  if (on(o)) {
    let n = o[0] === rn && e._tx === t;
    if (
      ((!n || o[1].options.reloadDocument) && Mn(e, t),
      hn(e, t[3]),
      (t[3] = []),
      !n)
    )
      return;
    if (e._tx !== t) {
      Mn(e, t);
      return;
    }
    await Ln(e, t, o);
    return;
  }
  let s = o[1];
  if ((e._tx === t && (await Nn(e, t)), e._tx !== t)) {
    Mn(e, t), hn(e, s), Tn(e, o);
    return;
  }
  let c = t[2],
    l = Nt(c, e.stores.resolvedLocation.get()),
    u = o[2];
  await e.startViewTransition(async () => {
    if ((e._tx === t && (await Nn(e, t)), e._tx !== t)) {
      Mn(e, t), hn(e, s), Tn(e, o);
      return;
    }
    let n = await e.startTransition(() => {
      Mn(e, t),
        Fn(e, t, s, a),
        e._tx === t &&
          (e.emit({ type: `onLoad`, ...l }),
          e._tx === t && e.emit({ type: `onBeforeRouteMount`, ...l }));
    }, s);
    if (e._tx !== t) {
      Tn(e, o);
      return;
    }
    u?.length && Rn(e, t, s, u, o[3]).catch(console.error),
      e.batch(() => {
        e.stores.resolvedLocation.set(c),
          e.stores.status.set(`idle`),
          e._tx === t && e.emit({ type: `onResolved`, ...l }),
          n && e._tx === t && e.emit({ type: `onRendered`, ...l });
      }),
      e._tx === t && (e._commitPromise?.resolve(), (e._commitPromise = void 0));
  });
}
async function Bn(e, t) {
  let n = e._tx,
    r = e.stores.resolvedLocation.get(),
    i = r ?? e.stores.location.get(),
    a = e.latestLocation,
    o = e._pendingLocation,
    s = o?.href === a.href ? o._redirects ?? 0 : 0,
    c = e._handoff,
    l = c?.[0](),
    u = new AbortController(),
    d = e._preflight;
  if (((e._preflight = u), l || c?.[1](), d?.abort(), !u.signal.aborted)) {
    let t = Nt(a, r);
    e.emit({ type: `onBeforeNavigate`, ...t }),
      u.signal.aborted || e.emit({ type: `onBeforeLoad`, ...t });
  }
  if (u.signal.aborted) {
    await In(e, n);
    return;
  }
  let f = i.href === a.href,
    p = u,
    m = e.matchRoutes(a, { _controller: u });
  gn(m);
  let h = l ? c[1](m) : void 0;
  if ((h ? (p = l) : l?.abort(), u.signal.aborted)) {
    hn(e, m), await In(e, n);
    return;
  }
  e._preflight = void 0;
  let g,
    _ = () => zn(e, y, f, () => jn(e, y), t?.sync, h),
    v = t?.sync ? new Promise((e) => (g = e)) : Promise.resolve().then(_),
    y = [p, s, a, m, Date.now(), v.then(() => In(e, y))];
  if (((e._tx = y), n)) {
    for (let t of e.stores.matches.get()) {
      if (e._tx !== y) break;
      t.isFetching && _n(e, t, !1);
    }
    n[0].abort(), hn(e, n[3], y[3], !0);
  }
  if (e._tx !== y) {
    hn(e, y[3]), (y[3] = []), g?.(), await In(e, y);
    return;
  }
  e.batch(() => {
    e.stores.status.set(`pending`), e.stores.location.set(a);
  }),
    (h ||
      (!e._committed.length &&
        m[0]?.status !== `success` &&
        !m.some((e) => e._notFound))) &&
      jn(e, y),
    g?.(_()),
    await y[5];
}
async function Vn(e, t) {
  let n = e.buildLocation(t);
  for (let t = 0; ; t++) {
    let r = e._committed,
      i = new AbortController(),
      a,
      o,
      s;
    try {
      try {
        (a = e.matchRoutes(n, { _controller: i })),
          gn(a),
          (o = (e._preloads ??= new Map()).set(i, a)),
          (s = await An(e, n, a, [i, t, r, !0]));
      } finally {
        o && ((o = o.delete(i)), hn(e, a)), i.abort();
      }
      if (!on(s)) return s[1];
      if (!o || s.length < 3) return;
      n = s[2];
    } catch (e) {
      x(e) || console.error(e);
      return;
    }
  }
}
async function Hn(e) {
  let t = window.$_TSR,
    n = e.options.serializationAdapters;
  n?.length &&
    ((t.t = new Map(n.map((e) => [e.key, e.fromSerializable]))),
    t.buffer.forEach((e) => e())),
    (t.initialized = !0);
  let r = t.router;
  (e.ssr = { manifest: r.manifest }),
    (e.options.ssr = {
      nonce: document.querySelector(`meta[property="csp-nonce"]`)?.content,
    });
  let i = r.matches,
    a = new AbortController(),
    o = e._preflight;
  (e._preflight = a), o?.abort();
  let s = () => e._preflight === a,
    c,
    l,
    u,
    d;
  try {
    if ((await sn(e.options.hydrate?.(r.dehydratedData), a.signal), !s()))
      return;
    let t = e.history.location;
    (u = t.href),
      (d = t.state),
      e.updateLatestLocation(),
      (c = e.latestLocation),
      e.stores.location.set(c),
      (l = e.matchRoutes(c, { _controller: a }));
  } catch (t) {
    if ((s() && (e._preflight = void 0), a.abort(t), t !== a.signal)) throw t;
  }
  if (!s()) return;
  let f = [],
    p,
    m = 0,
    h = (t) => {
      m = Math.min(m, t + 1);
      let n = f.splice(t);
      for (let t of n)
        cn(e, t).options.loader &&
          (t.status === `success` || (!t.invalid && `loaderData` in t)) &&
          xn(
            e,
            { ...t, status: `success`, error: void 0, preload: !0 },
            e._cache.get(t.id)
          );
      hn(e, n);
    },
    g = i.length > l.length ? l.findIndex((e) => e._notFound) + 1 : i.length,
    _ = !1;
  for (let t = 0; t < g; t++) {
    let n = l[t],
      r = i[t];
    if (typeof r.i != `string` || T(r.i) !== n.id) {
      p ??= t;
      break;
    }
    m = t + 1;
    let a = cn(e, n);
    if (
      ((`l` in r ||
        (r.s === `success` && r.e === void 0 && a.options.loader)) &&
        (n.loaderData = r.l),
      (n.status = r.s),
      (n.ssr = r.ssr),
      (a.options.ssr = n.ssr),
      (n.updatedAt = r.u),
      (n.error = r.e),
      (n._notFound ||= r.g),
      n.status === `error` || n.status === `notFound` || n._notFound)
    ) {
      (_ = !0), f.push(n), (n.ssr === !1 || n.ssr === `data-only`) && (p ??= t);
      break;
    }
    if (n.status === `pending`) {
      p ??= t;
      break;
    }
    f.push(n), n.ssr === `data-only` && (p ??= t);
  }
  !_ && f.length === g && g < l.length && (p = g);
  let v = f.map(async (t) => {
      try {
        let n = cn(e, t);
        return (
          await (t._notFound
            ? Promise.all([Zt(n), Zt(n, `notFoundComponent`)])
            : Zt(
                n,
                t.status === `error`
                  ? `errorComponent`
                  : t.status === `notFound`
                  ? `notFoundComponent`
                  : void 0
              )),
          !0
        );
      } catch {
        return !1;
      }
    }),
    y = 0;
  try {
    for (; y < v.length && (await sn(v[y], a.signal)); ) y++;
  } catch {
    return;
  }
  if (!s()) return;
  y < f.length && h(y);
  let b = Math.max(
    p === f.length ? f.length + 1 : f.length,
    y < v.length ? y : m
  );
  for (let t = 0; t < b; t++) {
    let n = l[t],
      r = cn(e, n),
      o = l[t - 1]?.context ?? e.options.context ?? {},
      u;
    if (r.options.context) {
      try {
        u = n._ctx =
          r.options.context({
            deps: n.loaderDeps,
            params: n.params,
            context: o,
            location: c,
            navigate: (t) => e.navigate({ ...t, _fromLocation: c }),
            buildLocation: e.buildLocation,
            cause: n.cause,
            abortController: a,
            preload: !1,
            matches: l,
            routeId: r.id,
          }) || {};
      } catch {
        if (!s()) return;
        if (n.status !== `error` && n.status !== `notFound` && !n._notFound) {
          (p = Math.min(p ?? t, t)), h(t);
          break;
        }
      }
      if (!s()) return;
    }
    n.context = { ...o, ...u, ...(f[t] && i[t].b) };
  }
  if ((await kn(e, [c, l], a.signal, 0, m), !s())) return;
  let x = p !== void 0 || f.length < g,
    S = _ && f.length === g ? l : f,
    C = x ? l : S,
    w;
  if (x && p !== void 0) {
    let e = C[p];
    (w = e.ssr === `data-only` && m > p + 1 ? m : void 0),
      (C = C.slice()),
      (C[p] = {
        ...e,
        status: `pending`,
        ssr: e.ssr === `data-only` && `data-only`,
        _assetEnd: w,
      });
  }
  let E = () => {
      let t = e.history.location;
      return x &&
        !e._tx &&
        t.href === u &&
        t.state === d &&
        e._committed === S &&
        S.length &&
        !a.signal.aborted
        ? a
        : void 0;
    },
    D = [
      E,
      (t) => {
        if (e._handoff !== D) return;
        e._handoff = void 0;
        let n = S.length;
        if (!t || !E() || S.some((e, n) => e.id !== t[n]?.id)) {
          a.abort();
          return;
        }
        let r = w;
        if (r !== void 0) {
          for (let e = n; e < r; e++)
            if (l[e]?.id !== t[e]?.id) {
              r = e > p + 1 ? e : void 0;
              break;
            }
        }
        let i = S.map((e) => ({ ...e }));
        r !== void 0 && (i[p]._assetEnd = r), hn(e, t.splice(0, n, ...i));
        for (let e = n; e < t.length; e++) {
          let n = t[e],
            r = l[e];
          r?.id === n.id && r._ctx && (n._ctx = r._ctx),
            (n.abortController = a);
        }
        return n;
      },
    ];
  (e._committed = S),
    (e._lifecycleEnd = Ft(S)),
    (e._handoff = D),
    (e._preflight = void 0),
    e.batch(() => {
      e.stores.setMatches(C),
        e.stores.status.set(`idle`),
        x || e.stores.resolvedLocation.set(e.stores.location.get());
    });
}
var Un = Symbol.asyncIterator,
  Wn = Symbol.hasInstance,
  Gn = Symbol.isConcatSpreadable,
  Kn = Symbol.iterator,
  qn = Symbol.match,
  Jn = Symbol.matchAll,
  Yn = Symbol.replace,
  Xn = Symbol.search,
  Zn = Symbol.species,
  Qn = Symbol.split,
  $n = Symbol.toPrimitive,
  er = Symbol.toStringTag,
  tr = Symbol.unscopables,
  nr = {
    [Un]: 0,
    [Wn]: 1,
    [Gn]: 2,
    [Kn]: 3,
    [qn]: 4,
    [Jn]: 5,
    [Yn]: 6,
    [Xn]: 7,
    [Zn]: 8,
    [Qn]: 9,
    [$n]: 10,
    [er]: 11,
    [tr]: 12,
  },
  rr = {
    0: Un,
    1: Wn,
    2: Gn,
    3: Kn,
    4: qn,
    5: Jn,
    6: Yn,
    7: Xn,
    8: Zn,
    9: Qn,
    10: $n,
    11: er,
    12: tr,
  },
  ir = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  ar = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  or = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function F(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  };
}
function sr(e) {
  return F(
    2,
    void 0,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
var cr = sr(2),
  lr = sr(3),
  ur = sr(1),
  dr = sr(0),
  fr = sr(4),
  pr = sr(5),
  mr = sr(6),
  hr = sr(7),
  gr = 64,
  _r = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/;
function vr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function yr(e) {
  if (e.length >= gr && !_r.test(e)) return JSON.stringify(e).slice(1, -1);
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    (r = vr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1));
  return n === 0 ? (t = e) : (t += e.slice(n)), t;
}
function br(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function xr(e) {
  return typeof e == `string` && !e.includes(`\\`)
    ? e
    : e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, br);
}
var { toString: Sr } = Object.prototype,
  Cr = { parsing: 1, serialization: 2, deserialization: 3 };
function wr(e) {
  return `Seroval Error (step: ${Cr[e]})`;
}
var Tr = (e, t) => wr(e),
  Er = class extends Error {
    constructor(e, t) {
      super(Tr(e, t)), (this.cause = t);
    }
  },
  Dr = class extends Er {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  Or = class extends Er {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function kr(e) {
  return `Seroval Error (specific: ${e})`;
}
var Ar = class extends Error {
    constructor(e) {
      super(kr(1)), (this.value = e);
    }
  },
  jr = class extends Error {
    constructor(e) {
      super(kr(2));
    }
  },
  Mr = class extends Error {
    constructor(e) {
      super(kr(3));
    }
  },
  Nr = class extends Error {
    constructor(e) {
      super(kr(4));
    }
  },
  Pr = class extends Error {
    constructor(e) {
      super(kr(5)), (this.value = e);
    }
  },
  Fr = class extends Error {
    constructor(e) {
      super(kr(6));
    }
  },
  Ir = class extends Error {
    constructor(e) {
      super(kr(7));
    }
  },
  Lr = class extends Error {
    constructor(e) {
      super(kr(8));
    }
  },
  Rr = class extends Error {
    constructor(e) {
      super(kr(9));
    }
  },
  zr = `__SEROVAL_REFS__`,
  Br = new Map(),
  Vr = new Map();
function Hr(e) {
  return Br.has(e);
}
function Ur(e) {
  return Vr.has(e);
}
function Wr(e) {
  if (Hr(e)) return Br.get(e);
  throw new Pr(e);
}
function Gr(e) {
  if (Ur(e)) return Vr.get(e);
  throw new Fr(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, zr, {
      value: Vr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
  ? Object.defineProperty(window, zr, {
      value: Vr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof self < `u`
  ? Object.defineProperty(self, zr, {
      value: Vr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof global < `u` &&
    Object.defineProperty(global, zr, {
      value: Vr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    });
function Kr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
    ? 2
    : e instanceof ReferenceError
    ? 3
    : e instanceof SyntaxError
    ? 4
    : e instanceof TypeError
    ? 5
    : e instanceof URIError
    ? 6
    : 0;
}
function qr(e) {
  let t = ar[Kr(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Jr(e, t) {
  let n = qr(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    (o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o])));
  return n;
}
function Yr(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
    ? 2
    : +!Object.isExtensible(e);
}
function Xr(e) {
  switch (e) {
    case 1 / 0:
      return pr;
    case -1 / 0:
      return mr;
  }
  return e === e
    ? Object.is(e, -0)
      ? fr
      : F(
          0,
          void 0,
          e,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0
        )
    : hr;
}
function Zr(e) {
  return F(
    1,
    void 0,
    yr(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function Qr(e) {
  return F(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function $r(e) {
  return F(
    4,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function ei(e, t) {
  let n = t.valueOf();
  return F(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function ti(e, t, n) {
  return F(
    36,
    e,
    n.toString(),
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function ni(e, t) {
  return F(
    6,
    e,
    void 0,
    yr(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function ri(e, t) {
  return F(
    17,
    e,
    nr[t],
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function ii(e, t) {
  return F(
    18,
    e,
    yr(Wr(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function ai(e, t, n) {
  return F(
    25,
    e,
    n,
    yr(t),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function oi(e, t, n) {
  return F(
    9,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    void 0,
    void 0,
    Yr(t),
    void 0
  );
}
function si(e, t) {
  return F(
    21,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0
  );
}
var ci = 1e6;
function li(e, t, n) {
  if (t.length > ci) throw new Ar(t);
  return F(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length
  );
}
function ui(e, t, n) {
  if (t.length > ci) throw new Ar(t);
  return F(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length
  );
}
function di(e, t, n) {
  if (t.byteLength > ci) throw new Ar(t);
  return F(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength
  );
}
function fi(e, t, n) {
  return F(
    13,
    e,
    Kr(t),
    void 0,
    yr(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function pi(e, t, n) {
  return F(
    14,
    e,
    Kr(t),
    void 0,
    yr(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function mi(e, t) {
  return F(
    7,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function hi(e, t) {
  return F(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function gi(e, t) {
  return F(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0
  );
}
function _i(e, t, n) {
  return F(
    31,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t,
    void 0,
    void 0,
    void 0
  );
}
function vi(e, t) {
  return F(
    32,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0
  );
}
function yi(e, t) {
  return F(
    33,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0
  );
}
function bi(e, t) {
  return F(
    34,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0
  );
}
function xi(e, t, n, r) {
  return F(
    35,
    e,
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    r
  );
}
var Si = class {
    constructor(e, t) {
      (this.value = e), (this.replacement = t);
    }
  },
  Ci = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        (e.s = t), (e.f = n);
      })),
      e
    );
  },
  wi = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          let e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  Ti = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        let t = s.shift();
        t && t.s({ done: !1, value: e }), o.push(e);
      },
      throw(e) {
        let t = s.shift();
        t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e);
      },
      return(e) {
        let t = s.shift();
        t && t.s({ done: !0, value: e }),
          c.finalize(),
          (i = o.length),
          o.push(e);
      },
    });
    let l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          let e = r++;
          if (e >= o.length) {
            let e = t();
            return s.push(e), e.p;
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        let e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  Ei = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  },
  Di = class {
    constructor(e, t, n) {
      (this.v = e), (this.t = t), (this.d = n);
    }
  };
function Oi(e) {
  return e instanceof Di;
}
function ki(e, t, n) {
  return new Di(e, t, n);
}
function Ai(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Kn]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      (n = t.length), (r = n), t.push(e);
      break;
    }
  return ki(t, n, r);
}
var ji = wi(Kn);
function Mi(e) {
  return ji(e);
}
var Ni = {},
  Pi = {},
  Fi = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function Ii(e, t) {
  if (t.has(e))
    throw TypeError(
      `Cannot initialize the same private elements twice on an object`
    );
}
function Li(e, t) {
  Ii(e, t), t.add(e);
}
function I(e, t, n) {
  Ii(e, t), t.set(e, n);
}
function Ri(e, t, n) {
  if (typeof e == `function` ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw TypeError(`Private element is not present on this object`);
}
function L(e, t) {
  return e.get(Ri(e, t));
}
function zi(e, t, n) {
  return e.set(Ri(e, t), n), n;
}
var Bi = new WeakMap(),
  Vi = new WeakMap(),
  Hi = new WeakMap(),
  Ui = new WeakMap(),
  Wi = new WeakMap(),
  Gi = new WeakSet(),
  Ki = class {
    constructor() {
      Li(this, Gi),
        I(this, Bi, []),
        I(this, Vi, []),
        I(this, Hi, !0),
        I(this, Ui, !1),
        I(this, Wi, 0);
    }
    on(e) {
      let t = L(Hi, this),
        n = 0;
      if (t) {
        for (; n < L(Wi, this) && L(Vi, this)[n]; n++);
        if (n === L(Wi, this)) {
          var r;
          zi(Wi, this, ((r = L(Wi, this)), r++, r));
        }
        L(Vi, this)[n] = e;
      }
      return (
        Ri(Gi, this, Ji).call(this, e),
        () => {
          if (L(Hi, this) && t) {
            for (
              t = !1, L(Vi, this)[n] = void 0;
              L(Wi, this) > 0 && !L(Vi, this)[L(Wi, this) - 1];

            ) {
              var e;
              zi(Wi, this, ((e = L(Wi, this)), e--, e));
            }
            L(Vi, this).length = L(Wi, this);
          }
        }
      );
    }
    next(e) {
      L(Hi, this) &&
        (L(Bi, this).push(e), Ri(Gi, this, qi).call(this, e, `next`));
    }
    throw(e) {
      L(Hi, this) &&
        (L(Bi, this).push(e),
        Ri(Gi, this, qi).call(this, e, `throw`),
        zi(Hi, this, !1),
        zi(Ui, this, !1),
        (L(Vi, this).length = 0));
    }
    return(e) {
      L(Hi, this) &&
        (L(Bi, this).push(e),
        Ri(Gi, this, qi).call(this, e, `return`),
        zi(Hi, this, !1),
        zi(Ui, this, !0),
        (L(Vi, this).length = 0));
    }
  };
function qi(e, t) {
  for (let r = 0; r < L(Wi, this); r++) {
    var n;
    (n = L(Vi, this)[r]) == null || n[t](e);
  }
}
function Ji(e) {
  for (let t = 0, n = L(Bi, this).length; t < n; t++) {
    let r = L(Bi, this)[t];
    !L(Hi, this) && t === n - 1
      ? e[L(Ui, this) ? `return` : `throw`](r)
      : e.next(r);
  }
}
function Yi(e) {
  return e instanceof Ki;
}
function Xi() {
  return new Ki();
}
function Zi(e, t) {
  let n = Xi(),
    r = e[Un](),
    i = !1,
    a = !1;
  t?.push(() => {
    a ||
      i ||
      ((i = !0),
      Promise.resolve()
        .then(() => r.return?.call(r))
        .catch(() => {}));
  });
  async function o() {
    try {
      for (; !i; ) {
        let e = await r.next();
        if (i) return;
        if (e.done) {
          (a = !0), n.return(e.value);
          break;
        }
        n.next(e.value);
      }
    } catch (e) {
      (a = !0), i || n.throw(e);
    }
  }
  return o().catch(() => {}), n;
}
var Qi = Ti(Un, Ci);
function $i(e) {
  return Qi(e);
}
async function ea(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function ta(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
    compactArrayBufferViews: t.compactArrayBufferViews ?? !1,
  };
}
function na(e, t) {
  e.marked.add(t);
}
function ra(e, t) {
  let n = e.refs.size;
  return e.refs.set(t, n), n;
}
function ia(e, t) {
  let n = e.refs.get(t);
  return n == null
    ? { type: 0, value: ra(e, t) }
    : (na(e, n), { type: 1, value: $r(n) });
}
function aa(e, t) {
  let n = ia(e, t);
  return n.type === 1 ? n : Hr(t) ? { type: 2, value: ii(n.value, t) } : n;
}
function oa(e, t) {
  let n = aa(e, t);
  if (n.type !== 0) return n.value;
  if (t in nr) return ri(n.value, t);
  throw new Ar(t);
}
function sa(e, t) {
  let n = ia(e, Fi[t]);
  return n.type === 1
    ? n.value
    : F(
        26,
        n.value,
        t,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      );
}
function ca(e) {
  let t = ia(e, Ni);
  return t.type === 1
    ? t.value
    : F(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        oa(e, Kn),
        void 0,
        void 0,
        void 0
      );
}
function la(e) {
  let t = ia(e, Pi);
  return t.type === 1
    ? t.value
    : F(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [sa(e, 1), oa(e, Un)],
        void 0,
        void 0,
        void 0,
        void 0
      );
}
function ua(e, t, n, r) {
  return F(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    Yr(t),
    void 0
  );
}
function da(e, t, n, r) {
  return F(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    sa(e, 0),
    void 0,
    void 0,
    void 0
  );
}
function fa(e, t) {
  if (!e.compactArrayBufferViews) return t;
  let n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice().buffer,
    r = t.constructor;
  return new r(n);
}
function pa(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  let t = new Uint8Array(e);
  if (typeof t.toBase64 == `function`) return t.toBase64();
  let n = ``;
  for (let e = 0, r = t.length; e < r; e++) n += String.fromCharCode(t[e]);
  return btoa(n);
}
function ma(e, t, n) {
  return F(
    19,
    t,
    pa(n),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    sa(e, 5),
    void 0,
    void 0,
    void 0
  );
}
function ha(e, t) {
  return { base: ta(e, t), child: void 0 };
}
var ga = class {
  constructor(e, t) {
    (this._p = e), (this.depth = t);
  }
  parse(e) {
    return Ia(this._p, this.depth, e);
  }
};
async function _a(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await Ia(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function va(e, t, n, r) {
  return oi(n, r, await _a(e, t, r));
}
async function ya(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++)
    i.push(yr(r[n][0])), a.push(await Ia(e, t, r[n][1]));
  return (
    Kn in n &&
      (i.push(oa(e.base, Kn)), a.push(hi(ca(e.base), await Ia(e, t, Ai(n))))),
    Un in n &&
      (i.push(oa(e.base, Un)), a.push(gi(la(e.base), await Ia(e, t, Zi(n))))),
    er in n && (i.push(oa(e.base, er)), a.push(Zr(n[er]))),
    Gn in n && (i.push(oa(e.base, Gn)), a.push(n[Gn] ? cr : lr)),
    { k: i, v: a }
  );
}
async function ba(e, t, n, r, i) {
  return ua(n, r, i, await ya(e, t, r));
}
async function xa(e, t, n, r) {
  return si(n, await Ia(e, t, r.valueOf()));
}
async function Sa(e, t, n, r) {
  return (r = fa(e.base, r)), li(n, r, await Ia(e, t, r.buffer));
}
async function Ca(e, t, n, r) {
  return (r = fa(e.base, r)), ui(n, r, await Ia(e, t, r.buffer));
}
async function wa(e, t, n, r) {
  return (r = fa(e.base, r)), di(n, r, await Ia(e, t, r.buffer));
}
async function Ta(e, t, n, r) {
  let i = Jr(r, e.base.features);
  return fi(n, r, i ? await ya(e, t, i) : void 0);
}
async function Ea(e, t, n, r) {
  let i = Jr(r, e.base.features);
  return pi(n, r, i ? await ya(e, t, i) : void 0);
}
async function Da(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries())
    i.push(await Ia(e, t, n)), a.push(await Ia(e, t, o));
  return da(e.base, n, i, a);
}
async function Oa(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await Ia(e, t, n));
  return mi(n, i);
}
async function ka(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return ai(n, o.tag, await o.parse.async(r, new ga(e, t), { id: n }));
    }
}
async function Aa(e, t, n, r) {
  let [i, a] = await ea(r);
  return F(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await Ia(e, t, a),
    void 0,
    void 0,
    void 0
  );
}
function ja(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        na(this.base, t),
          Ia(this, e, n).then(
            (e) => {
              a.push(vi(t, e));
            },
            (e) => {
              i(e), o();
            }
          );
      },
      throw: (n) => {
        na(this.base, t),
          Ia(this, e, n).then(
            (e) => {
              a.push(yi(t, e)), r(a), o();
            },
            (e) => {
              i(e), o();
            }
          );
      },
      return: (n) => {
        na(this.base, t),
          Ia(this, e, n).then(
            (e) => {
              a.push(bi(t, e)), r(a), o();
            },
            (e) => {
              i(e), o();
            }
          );
      },
    });
}
async function Ma(e, t, n, r) {
  return _i(n, sa(e.base, 4), await new Promise(ja.bind(e, t, n, r)));
}
async function Na(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await Ia(e, t, r.v[n]);
  return xi(n, i, r.t, r.d);
}
async function Pa(e, t, n, r) {
  if (Array.isArray(r)) return va(e, t, n, r);
  if (Yi(r)) return Ma(e, t, n, r);
  if (Oi(r)) return Na(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === Si) return Ia(e, t, r.replacement);
  let a = await ka(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return ba(e, t, n, r, !1);
    case void 0:
      return ba(e, t, n, r, !0);
    case Date:
      return ei(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Ta(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return xa(e, t, n, r);
    case ArrayBuffer:
      return ma(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Sa(e, t, n, r);
    case DataView:
      return wa(e, t, n, r);
    case Map:
      return Da(e, t, n, r);
    case Set:
      return Oa(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return Aa(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return ni(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return Ca(e, t, n, r);
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return Ea(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return ti(n, 0, r);
      case Temporal.Duration:
        return ti(n, 1, r);
      case Temporal.PlainDate:
        return ti(n, 2, r);
      case Temporal.PlainDateTime:
        return ti(n, 3, r);
      case Temporal.PlainMonthDay:
        return ti(n, 4, r);
      case Temporal.PlainTime:
        return ti(n, 5, r);
      case Temporal.PlainYearMonth:
        return ti(n, 6, r);
      case Temporal.ZonedDateTime:
        return ti(n, 7, r);
    }
  if (r instanceof Error) return Ta(e, t, n, r);
  if (Kn in r || Un in r) return ba(e, t, n, r, !!i);
  throw new Ar(r);
}
async function Fa(e, t, n) {
  let r = aa(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await ka(e, t, r.value, n);
  if (i) return i;
  throw new Ar(n);
}
async function Ia(e, t, n) {
  if (t >= e.base.depthLimit) throw new Rr(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? cr : lr;
    case `undefined`:
      return ur;
    case `string`:
      return Zr(n);
    case `number`:
      return Xr(n);
    case `bigint`:
      return Qr(n);
    case `object`:
      if (n) {
        let r = aa(e.base, n);
        return r.type === 0 ? await Pa(e, t + 1, r.value, n) : r.value;
      }
      return dr;
    case `symbol`:
      return oa(e.base, n);
    case `function`:
      return Fa(e, t, n);
    default:
      throw new Ar(n);
  }
}
async function La(e, t) {
  try {
    return await Ia(e, 0, t);
  } catch (e) {
    throw e instanceof Dr ? e : new Dr(e);
  }
}
function Ra(e) {
  return e;
}
function za(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && za(e, r.extends));
  }
}
function Ba(e) {
  if (e) {
    let t = new Set();
    return za(t, e), [...t];
  }
}
function Va(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new Ir(e);
  }
}
function Ha(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Ua(e) {
  switch (e) {
    case Un:
    case Gn:
    case er:
    case Kn:
      return !0;
    default:
      return !1;
  }
}
var Wa = 1e6,
  Ga = 512,
  Ka = 1e4,
  qa = 2e4;
function Ja(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Ya = 1e3;
function Xa(e, t) {
  let n = t.maxBase64Length ?? Wa;
  if (!Number.isSafeInteger(n) || n < 0)
    throw RangeError(`maxBase64Length must be a non-negative safe integer`);
  let r = t.refs || new Map();
  return (
    `types` in r || Object.assign(r, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: r,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Ya,
      maxBase64Length: n,
    }
  );
}
function Za(e) {
  return { mode: 2, base: Xa(2, e), child: void 0 };
}
var Qa = class {
  constructor(e, t) {
    (this._p = e), (this.depth = t);
  }
  deserialize(e) {
    return B(this._p, this.depth, e);
  }
};
function $a(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new Lr({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function eo(e) {
  return (
    !!e &&
    (typeof e == `object` || typeof e == `function`) &&
    `then` in e &&
    typeof e.then == `function`
  );
}
function to(e, t, n) {
  return $a(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n;
}
function no(e, t, n) {
  return $a(e.base, t), e.base.refs.set(t, n), n;
}
function ro(e, t, n) {
  return e.mode === 1 ? to(e, t, n) : no(e, t, n);
}
function io(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new Lr(e);
}
function ao(e, t) {
  return ro(e, t.i, Gr(xr(t.s)));
}
function oo(e, t) {
  if (!Array.isArray(t)) throw new Lr(e);
}
function so(e, t, n) {
  let r = n.a;
  oo(n, r);
  let i = r.length,
    a = ro(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) (o = r[n]), o && (a[n] = B(e, t, o));
  return Ja(a, n.o), a;
}
function co(e, t, n) {
  Ha(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function lo(e, t, n, r, i) {
  if (typeof r == `string`) co(n, xr(r), B(e, t, i));
  else {
    let a = B(e, t, r);
    switch (typeof a) {
      case `string`:
        co(n, a, B(e, t, i));
        break;
      case `symbol`:
        Ua(a) && (n[a] = B(e, t, i));
        break;
      default:
        throw new Lr(r);
    }
  }
}
function uo(e, t, n) {
  e.base.refs.types.set(t, n);
}
function fo(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new Lr(t);
}
function po(e, t, n, r) {
  let i = n.k;
  if ((oo(n, i), oo(n, n.v), i.length > 0))
    for (let a = 0, o = n.v, s = i.length; a < s; a++) lo(e, t, r, i[a], o[a]);
  return r;
}
function mo(e, t, n) {
  let r = ro(e, n.i, n.t === 10 ? {} : Object.create(null));
  return po(e, t, n.p, r), Ja(r, n.o), r;
}
function ho(e, t) {
  return ro(e, t.i, new Date(t.s));
}
function R(e, t) {
  if (!(e.base.features & 64)) throw new jr(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new Lr(t);
  }
  return ro(e, t.i, n);
}
function z(e, t) {
  if (e.base.features & 32) {
    let n = xr(t.c);
    if (n.length > qa) throw new Lr(t);
    return ro(e, t.i, new RegExp(n, t.m));
  }
  throw new jr(t);
}
function go(e, t, n) {
  let r = ro(e, n.i, new Set());
  oo(n, n.a);
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(B(e, t, a[i]));
  return r;
}
function _o(e, t, n) {
  let r = ro(e, n.i, new Map());
  oo(n, n.e.k), oo(n, n.e.v);
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(B(e, t, a[i]), B(e, t, o[i]));
  return r;
}
function vo(e, t) {
  if (typeof t.s != `string`) throw new Lr(t);
  if (t.s.length > e.base.maxBase64Length)
    throw RangeError(
      `ArrayBuffer exceeds maxBase64Length (` + e.base.maxBase64Length + `)`
    );
  let n = xr(t.s),
    r;
  if (n.length < Ga || typeof Buffer > `u`) r = Ei(n);
  else {
    let e = atob(n);
    (r = new ArrayBuffer(e.length)), Buffer.from(r).write(e, `latin1`);
  }
  return ro(e, t.i, r);
}
function yo(e, t, n) {
  let r = Va(n.c),
    i = B(e, t, n.f);
  if (!(i instanceof ArrayBuffer)) throw new Lr(n);
  let a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new Lr(n);
  return ro(e, n.i, new r(i, a, n.l));
}
function bo(e, t, n) {
  let r = B(e, t, n.f);
  if (!(r instanceof ArrayBuffer)) throw new Lr(n);
  let i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new Lr(n);
  return ro(e, n.i, new DataView(r, i, n.l));
}
function xo(e, t, n, r) {
  if (n.p) {
    let i = po(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function So(e, t, n) {
  return xo(e, t, n, ro(e, n.i, AggregateError([], xr(n.m))));
}
function Co(e, t, n) {
  let r = io(n, or, n.s);
  return xo(e, t, n, ro(e, n.i, new r(xr(n.m))));
}
function wo(e, t, n) {
  let r = Ci(),
    i = ro(e, n.i, r.p),
    a = B(e, t, n.f);
  if (eo(a)) throw new Lr(n.f);
  return n.s ? r.s(a) : r.f(a), i;
}
function To(e, t, n) {
  return ro(e, n.i, Object(B(e, t, n.f)));
}
function Eo(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = xr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i)
        return ro(e, n.i, o.deserialize(n.s, new Qa(e, t), { id: n.i }));
    }
  }
  throw new Mr(n.c);
}
function Do(e, t) {
  let n = ro(e, t.i, ro(e, t.s, Ci()).p);
  return uo(e, t.s, 22), n;
}
function Oo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    fo(e, n, n.i, 22);
    let i = B(e, t, n.a[1]);
    if (eo(i)) throw new Lr(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new Nr(`Promise`);
}
function ko(e, t, n) {
  B(e, t, n.a[0]);
  let r = B(e, t, n.a[1]);
  if (!Oi(r)) throw new Lr(n.a[1]);
  return Mi(r);
}
function Ao(e, t, n) {
  B(e, t, n.a[0]);
  let r = B(e, t, n.a[1]);
  if (!Yi(r)) throw new Lr(n.a[1]);
  return $i(r);
}
function jo(e, t, n) {
  let r = ro(e, n.i, Xi());
  uo(e, n.i, 31);
  let i = n.a;
  oo(n, i);
  let a = i.length;
  if (a) for (let n = 0; n < a; n++) B(e, t, i[n]);
  return r;
}
function Mo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    fo(e, n, n.i, 31), r.next(B(e, t, n.f));
    return;
  }
  throw new Nr(`Stream`);
}
function No(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    fo(e, n, n.i, 31), r.throw(B(e, t, n.f));
    return;
  }
  throw new Nr(`Stream`);
}
function Po(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    fo(e, n, n.i, 31), r.return(B(e, t, n.f));
    return;
  }
  throw new Nr(`Stream`);
}
function Fo(e, t, n) {
  B(e, t, n.f);
}
function Io(e, t, n) {
  B(e, t, n.a[1]);
}
function Lo(e, t) {
  return Number.isInteger(e) && e >= -1 && e < t;
}
function Ro(e, t, n) {
  oo(n, n.a);
  let r = n.a.length;
  if (!(Lo(n.s, r) && Lo(n.l, r))) throw new Lr(n);
  let i = ro(e, n.i, ki([], n.s, n.l));
  for (let a = 0; a < r; a++) i.v[a] = B(e, t, n.a[a]);
  return i;
}
function B(e, t, n) {
  if (t > e.base.depthLimit) throw new Rr(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return io(n, ir, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return xr(String(n.s));
    case 3:
      if (String(n.s).length > Ka) throw new Lr(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return ao(e, n);
    case 9:
      return so(e, t, n);
    case 10:
    case 11:
      return mo(e, t, n);
    case 5:
      return ho(e, n);
    case 6:
      return z(e, n);
    case 7:
      return go(e, t, n);
    case 8:
      return _o(e, t, n);
    case 19:
      return vo(e, n);
    case 16:
    case 15:
      return yo(e, t, n);
    case 20:
      return bo(e, t, n);
    case 14:
      return So(e, t, n);
    case 13:
      return Co(e, t, n);
    case 12:
      return wo(e, t, n);
    case 17:
      return io(n, rr, n.s);
    case 21:
      return To(e, t, n);
    case 25:
      return Eo(e, t, n);
    case 22:
      return Do(e, n);
    case 23:
    case 24:
      return Oo(e, t, n);
    case 28:
      return ko(e, t, n);
    case 30:
      return Ao(e, t, n);
    case 31:
      return jo(e, t, n);
    case 32:
      return Mo(e, t, n);
    case 33:
      return No(e, t, n);
    case 34:
      return Po(e, t, n);
    case 27:
      return Fo(e, t, n);
    case 29:
      return Io(e, t, n);
    case 35:
      return Ro(e, t, n);
    case 36:
      return R(e, n);
    default:
      throw new jr(n);
  }
}
function zo(e, t) {
  try {
    return B(e, 0, t);
  } catch (e) {
    throw new Or(e);
  }
}
function Bo(e, t) {
  let n = Ba(t.plugins);
  return zo(
    Za({
      maxBase64Length: t.maxBase64Length,
      plugins: n,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e
  );
}
async function Vo(e, t = {}) {
  let n = Ba(t.plugins),
    r = ha(1, {
      compactArrayBufferViews: t.compactArrayBufferViews,
      plugins: n,
      disabledFeatures: t.disabledFeatures,
    });
  return {
    t: await La(r, e),
    f: r.base.features,
    m: Array.from(r.base.marked),
  };
}
function Ho(e) {
  return Ra({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Uo = Ra({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Wo = class {
    constructor(e, t) {
      (this.stream = e), (this.hint = t?.hint ?? `binary`);
    }
  };
function Go(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 32768)
    t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
  return btoa(t.join(``));
}
var Ko = new TextDecoder(`utf-8`, { fatal: !0, ignoreBOM: !0 });
function qo(e) {
  try {
    return `t` + Ko.decode(e);
  } catch {
    return `b` + Go(e);
  }
}
function Jo(e, t, n) {
  n?.throwIfAborted();
  let r = Xi(),
    i = e.getReader(),
    a = !0,
    o = () => {
      (a = !1), n?.removeEventListener(`abort`, c), i.releaseLock();
    },
    s = (e) => (a ? (i.cancel(e).catch(() => {}), o(), !0) : !1),
    c = () => {
      s(n.reason) && r.throw(n.reason);
    };
  return (
    n?.addEventListener(`abort`, c),
    (async () => {
      try {
        for (; a; ) {
          let { done: e, value: n } = await i.read();
          if (!a) return;
          if (e) {
            o(), r.return(void 0);
            return;
          }
          r.next(t(n));
        }
      } catch (e) {
        s(e) && r.throw(e);
      }
    })(),
    [r, s]
  );
}
function Yo(e) {
  return Ra({
    tag: `tss/RawStream`,
    test: (e) => e instanceof Wo,
    parse: {
      async: async (t, n) => {
        let r = await n.parse(t.hint === `text`),
          [i] = Jo(t.stream, t.hint === `text` ? qo : Go, e);
        return { text: r, stream: await n.parse(i) };
      },
    },
    serialize: void 0,
    deserialize: void 0,
  });
}
var Xo = Yo(),
  Zo = {},
  Qo = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  $o = Ra({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === Zo;
    },
    parse: {
      sync() {
        return Zo;
      },
      async async() {
        return await Promise.resolve(Zo);
      },
      stream() {
        return Zo;
      },
    },
    serialize() {
      return Qo.toString();
    },
    deserialize() {
      return Zo;
    },
  });
async function es(e, t) {
  try {
    for (;;) {
      let n = await t.read();
      if (n.done) {
        e.return(n.value), t.releaseLock();
        break;
      }
      e.next(n.value);
    }
  } catch (n) {
    t.releaseLock(), e.throw(n);
  }
}
function ts(e) {
  e.cancel().catch(() => {}), e.releaseLock();
}
function ns(e) {
  let t = Xi(),
    n = e.getReader(),
    r = ts.bind(null, n);
  return es(t, n).catch(r), [t, r];
}
var rs = Ra({
  tag: `seroval/plugins/web/ReadableStream`,
  extends: [$o],
  test(e) {
    return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
  },
  parse: {
    sync(e, t) {
      return { factory: t.parse(Zo), stream: t.parse(Xi()) };
    },
    async async(e, t) {
      return { factory: await t.parse(Zo), stream: await t.parse(ns(e)[0]) };
    },
    stream(e, t) {
      let [n, r] = ns(e);
      return t.addCleanup(r), { factory: t.parse(Zo), stream: t.parse(n) };
    },
  },
  serialize(e, t) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t) {
    let n = t.deserialize(e.stream);
    if (!n || typeof n != `object` || !Yi(n))
      throw Error(`Expected a stream source.`);
    return Qo(n);
  },
});
function is(e) {
  return [Uo, e ? Yo(e) : Xo, rs];
}
[...is()];
function as(e) {
  return Ra({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize: void 0,
    deserialize(t, n) {
      return e(n.deserialize(t.streamId));
    },
  });
}
function os(e) {
  return [...(b()?.serializationAdapters?.map(Ho) ?? []), ...e];
}
function ss(e) {
  return os(is(e));
}
var cs = new TextDecoder(),
  ls = new Uint8Array(),
  us = new ByteLengthQueuingStrategy({ highWaterMark: 0 });
function ds(e) {
  let t = e.getReader(),
    n = new Map(),
    r = 0,
    i,
    a,
    o = () => {
      i?.(), (i = void 0);
    },
    s = (e, t) => {
      let n = e[1];
      (e[1] = !1), n && (t === 1 ? n.close() : n.error(t[0]));
    },
    c = new ReadableStream({
      start(e) {
        a = e;
      },
      pull: o,
      cancel(e) {
        let i = [e === void 0 ? Error(`Framed response cancelled`) : e];
        (r = i), o(), t.cancel(e).catch(() => {});
        for (let e of n.values()) s(e, i);
      },
    });
  function l(e) {
    let t = n.get(e);
    if (t) return t;
    if (n.size >= 1024) throw Error(`Too many raw streams`);
    let i,
      a = [
        new ReadableStream(
          {
            start(e) {
              i = e;
            },
            cancel() {
              a[1] !== !1 && (a[1] = null);
            },
          },
          us
        ),
        i,
      ];
    return n.set(e, a), r !== 0 && s(a, r), a;
  }
  function u(e) {
    if (e === 0 || e >>> 0 !== e) throw RangeError(`Invalid raw stream ID`);
    return l(e)[0];
  }
  return (
    (async () => {
      let e = ls,
        o = 0;
      async function c() {
        for (; o === e.byteLength; ) {
          (e = ls), (o = 0);
          let n = await t.read();
          if (r !== 0 || n.done) return !1;
          e = n.value;
        }
        return !0;
      }
      async function u(t, n) {
        if (t === 0) return ls;
        if (!(await c())) {
          if (n) return;
          throw Error(`Incomplete frame`);
        }
        if (e.byteLength - o >= t) {
          let n = e.subarray(o, o + t);
          return (o += t), o === e.byteLength && ((e = ls), (o = 0)), n;
        }
        let r = new Uint8Array(t),
          i = 0;
        for (; i < t; ) {
          if (!(await c())) throw Error(`Incomplete frame`);
          let n = Math.min(t - i, e.byteLength - o);
          r.set(e.subarray(o, o + n), i), (o += n), (i += n);
        }
        return o === e.byteLength && ((e = ls), (o = 0)), r;
      }
      try {
        for (; r === 0; ) {
          let e = await u(9, !0);
          if (r !== 0) return;
          if (!e) {
            for (let e of n.values())
              if (e[1]) throw Error(`Incomplete raw stream`);
            (r = 1), a.close();
            return;
          }
          let t = e[0],
            o = ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            c = ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0;
          if (
            ((e = ls),
            t > 3 ||
              (t === 0) != (o === 0) ||
              c > 16777216 ||
              (t === 2 && c !== 0))
          )
            throw Error(`Invalid frame`);
          let d = t === 0 ? void 0 : l(o);
          if (d?.[1] === !1) throw Error(`Raw stream already ended`);
          let f = await u(c);
          if (r !== 0) return;
          if (!d) {
            let e = cs.decode(f);
            for (f = ls, a.enqueue(e); r === 0 && a.desiredSize <= 0; )
              await new Promise((e) => {
                i = e;
              });
            continue;
          }
          if (t === 1) {
            let e = d[1];
            if (e) {
              if (-e.desiredSize > 134217728) {
                e.error(Error(`Raw stream ${o} has too many unread bytes`)),
                  (d[1] = null),
                  (f = ls);
                continue;
              }
              let t = f.byteLength * 4 < f.buffer.byteLength ? f.slice() : f;
              (f = ls), e.enqueue(t);
            }
          } else s(d, t === 2 ? 1 : [Error(cs.decode(f))]);
        }
      } catch (e) {
        if (r === 0) {
          let i = [e];
          (r = i), t.cancel(e).catch(() => {}), a.error(e);
          for (let e of n.values()) s(e, i);
        }
      } finally {
        (e = ls), t.releaseLock();
      }
    })(),
    [c, u]
  );
}
var fs = Symbol.for(`TSR_DEFERRED_PROMISE`);
function ps(e, t) {
  let n = e;
  return n[fs]
    ? n
    : ((n[fs] = { status: `pending` }),
      n
        .then((e) => {
          (n[fs].status = `success`), (n[fs].data = e);
        })
        .catch((e) => {
          (n[fs].status = `error`),
            (n[fs].error = {
              data: (t?.serializeError ?? Mt)(e),
              __isServerError: !0,
            });
        }),
      n);
}
var ms = `Error preloading route! ☝️`;
function hs(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function gs(e) {
  return e?.scriptFormat ?? `module`;
}
function _s(e, t, n) {
  let r = vs(t),
    i = hs(n, `script`) ?? r.crossOrigin;
  return {
    ...(gs(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function vs(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function ys(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function bs(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function xs(e, t, n, r) {
  let i = $t(e),
    a = [],
    o = [];
  for (let e of i)
    for (let t of Array.isArray(e.scripts) ? e.scripts : []) {
      if (!t) continue;
      let { children: e, ...i } = t;
      a.push({ tag: `script`, attrs: { ...i, ...r, nonce: n }, children: e });
    }
  if (t)
    for (let e of i)
      for (let r of t.routes[e.routeId]?.scripts ?? [])
        o.push({
          tag: `script`,
          attrs: { ...r.attrs, nonce: n },
          children: r.children,
        });
  return [a, o];
}
function Ss([e, t], n) {
  return n ? [...n.before, ...e, ...t, n.boundary] : [...e, ...t];
}
var Cs = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          (this.originalIndex = e), (this._branch = void 0);
          let t = this.options,
            n = !t?.path && !t?.id;
          (this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = pt) : this.parentRoute || we();
          let r = n ? pt : t?.path;
          r && r !== `/` && (r = me(r));
          let i = t?.id || r,
            a = n
              ? pt
              : pe(
                  (this.parentRoute.id === `__root__`
                    ? ``
                    : this.parentRoute.id) +
                    `/` +
                    (i ?? ``)
                );
          r === `__root__` && (r = `/`);
          let o =
            a === `__root__`
              ? `/`
              : r === void 0
              ? this.parentRoute.fullPath
              : pe(this.parentRoute.fullPath + `/` + r);
          (this._path = r),
            (this._id = a),
            (this._fullPath = o),
            (this._to = he(o));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => S({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  ws = class extends Cs {
    constructor(e) {
      super(e);
    }
  };
function Ts(e) {
  return e;
}
var Es;
function Ds(e, t, n) {
  try {
    return Bo(e, t);
  } catch (e) {
    throw (ks(n), e);
  }
}
async function Os(e) {
  e.length > 0 && (await Promise.allSettled(e), (e.length = 0));
}
function ks(e) {
  for (let t of e) t.catch(() => {});
  e.length = 0;
}
var As = Object.prototype.hasOwnProperty;
function js(e) {
  for (let t in e) if (As.call(e, t)) return !0;
  return !1;
}
async function Ms(e, t, n) {
  Es ||= ss();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData,
    o = new Headers(r.headers);
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a || o.set(`accept`, `${y}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a) throw Error(`FormData is not supported with GET requests`);
    let t = await Ns(r);
    if (t !== void 0) {
      let n = at({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  return (
    r.method === `POST` &&
      ((s = await Fs(r)),
      typeof s == `string` && o.set(`content-type`, `application/json`)),
    Is(() => i(e, { method: r.method, headers: o, signal: r.signal, body: s }))
  );
}
async function Ns(e) {
  let t;
  return (
    e.data !== void 0 && (t = { data: e.data }),
    e.context && js(e.context) && ((t ??= {}).context = e.context),
    t ? Ps(t, e.signal) : void 0
  );
}
async function Ps(e, t) {
  t?.throwIfAborted();
  let n;
  try {
    n = await Vo(e, { plugins: t ? ss(t) : Es });
  } finally {
    t?.throwIfAborted();
  }
  return JSON.stringify(n);
}
async function Fs(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && js(e.context) && (t = await Ps(e.context, e.signal)),
      t !== void 0 && e.data.set(_, t),
      e.data
    );
  }
  return Ns(e);
}
async function Is(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw e;
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || we(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      let r = /;\s*v=(\d+)/.exec(n)?.[1];
      if (r && +r != 1) throw Error(`Unsupported framed protocol version ${r}`);
      if (!t.body) throw Error(`No response body for framed response`);
      let [i, a] = ds(t.body);
      e = await Ls(i, [as(a), ...Es]);
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      (e = Ds(n, { plugins: Es }, r)), await Os(r);
    }
    if ((e || we(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = w(e);
    if (n) throw n;
    if (x(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function Ls(e, t) {
  let n = e.getReader(),
    r = { refs: new Map(), plugins: t },
    i = (e) => {
      n.cancel(e).catch(() => {});
    },
    a,
    o = [];
  try {
    let e = await n.read();
    if (e.done) throw Error(`Stream ended before first object`);
    a = Ds(JSON.parse(e.value), r, o);
  } catch (e) {
    throw (i(e), n.releaseLock(), e);
  }
  return (
    (async () => {
      let e = [];
      try {
        for (;;) {
          let t = await n.read();
          if (t.done) return;
          Ds(JSON.parse(t.value), r, e), ks(e);
        }
      } catch (e) {
        i(e), console.error(`Stream processing error:`, e);
      } finally {
        n.releaseLock();
      }
    })(),
    await Os(o),
    a
  );
}
function Rs(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = b()?.serverFns?.fetch;
      return Ms(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [v]: !0 }
  );
}
var zs = Ts({
    key: `$TSS/serverfn`,
    test: (e) => (typeof e != `function` || !(v in e) ? !1 : !!e[v]),
    toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
    fromSerializable: ({ functionId: e }) => Rs(e),
  }),
  V = c(u(), 1),
  Bs = V.use,
  Vs = V.useLayoutEffect,
  Hs = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    (e.Fragment = n), (e.jsx = r), (e.jsxs = r);
  }),
  H = o((e, t) => {
    t.exports = Hs();
  })();
function Us({ promise: e }) {
  if (Bs) return Bs(e);
  let t = ps(e);
  if (t[fs].status === `pending`) throw t;
  if (t[fs].status === `error`) throw t[fs].error;
  return t[fs].data;
}
function Ws(e) {
  let t = (0, H.jsx)(Gs, { ...e });
  return e.fallback
    ? (0, H.jsx)(V.Suspense, { fallback: e.fallback, children: t })
    : t;
}
function Gs(e) {
  let t = Us(e);
  return e.children(t);
}
var Ks = class extends V.Component {
  constructor(...e) {
    super(...e),
      (this.state = { error: 0 }),
      (this.reset = () => {
        this.setState({ error: 0 });
      });
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: 0 }
      : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: [e] };
  }
  componentDidCatch(e, t) {
    this.props.onCatch?.(e, t);
  }
  render() {
    let e = this.state.error;
    return e
      ? V.createElement(this.props.errorComponent ?? qs, {
          error: e[0],
          reset: this.reset,
        })
      : this.props.children;
  }
};
function qs({ error: e }) {
  let [t, n] = V.useState(!1);
  return (0, H.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, H.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, H.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, H.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, H.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, H.jsx)(`div`, {
            children: (0, H.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e?.message
                ? (0, H.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
var Js = () => !0,
  Ys = () => !1;
function Xs({ children: e, fallback: t = null }) {
  return (0, H.jsx)(V.Fragment, { children: Zs() ? e : t });
}
function Zs(e = !0) {
  return V.useSyncExternalStore(Qs, Js, e ? Ys : Js);
}
function Qs() {
  return () => {};
}
var $s = V.createContext(null);
function ec(e) {
  return V.useContext($s);
}
var tc = V.createContext(void 0),
  nc = V.createContext(void 0);
function rc({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      (i.version = n), (t.depsTail = i);
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        });
    i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o);
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0; )
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          e.nextSub !== void 0 && s(e), (a = !0);
        }
      } else if ((c & 33) == 33) {
        (t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i;
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--; ) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            o && s(i), (n = t.sub);
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0; ) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function ic(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var ac = [],
  oc = 0,
  {
    link: sc,
    unlink: cc,
    propagate: lc,
    checkDirty: uc,
    shallowPropagate: dc,
  } = rc({
    update(e) {
      return e._update();
    },
    notify(e) {
      (ac[pc++] = e), (e.flags &= -3);
    },
    unwatched(e) {
      e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = 17), _c(e));
    },
  }),
  fc = 0,
  pc = 0,
  mc,
  hc = 0;
function gc(e) {
  try {
    ++hc, e();
  } finally {
    --hc || vc();
  }
}
function _c(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0; ) n = cc(n, e);
}
function vc() {
  if (!(hc > 0)) {
    for (; fc < pc; ) {
      let e = ac[fc];
      (ac[fc++] = void 0), e.notify();
    }
    (fc = 0), (pc = 0);
  }
}
function yc(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: +!n,
      get() {
        return mc !== void 0 && sc(i, mc, oc), i._snapshot;
      },
      subscribe(e) {
        let t = ic(e),
          n = { current: !1 },
          r = bc(() => {
            i.get(),
              n.current
                ? ((mc = void 0), t.next?.(i._snapshot))
                : (n.current = !0);
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = mc,
          o = t?.compare ?? Object.is;
        if (n) (mc = i), ++oc, (i.depsTail = void 0);
        else if (e === void 0) return !1;
        n && (i.flags = 5);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          (mc = a), n && (i.flags &= -5), _c(i);
        }
      },
    };
  return (
    n
      ? ((i.flags = 17),
        (i.get = function () {
          let e = i.flags;
          if (e & 16 || (e & 32 && uc(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && dc(e);
            }
          } else e & 32 && (i.flags = e & -33);
          return mc !== void 0 && sc(i, mc, oc), i._snapshot;
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (lc(e), dc(e), vc());
          }
        }),
    i
  );
}
function bc(e) {
  let t = () => {
      let t = mc;
      (mc = n), ++oc, (n.depsTail = void 0), (n.flags = 6);
      try {
        return e();
      } finally {
        (mc = t), (n.flags &= -5), _c(n);
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: 6,
      notify() {
        let e = this.flags;
        e & 16 || (e & 32 && uc(this.deps, this)) ? t() : (this.flags = 2);
      },
      stop() {
        (this.flags = 0), (this.depsTail = void 0), _c(this);
      },
    };
  return t(), n;
}
var xc = o((e) => {
    var t = u();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(
          function () {
            (c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c });
          },
          [e, n, t]
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c });
              })
            );
          },
          [e]
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Sc = o((e, t) => {
    t.exports = xc();
  }),
  Cc = o((e) => {
    var t = u(),
      n = Sc();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
                var t = f.value;
                if (u(t, e)) return (s = t);
              }
              return (s = e);
            }
            if (((t = s), i(o, e))) return t;
            var n = r(e);
            return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n));
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            c === null
              ? void 0
              : function () {
                  return e(c());
                },
          ];
        },
        [t, n, r, u]
      );
      var p = a(e, d[0], d[1]);
      return (
        s(
          function () {
            (f.hasValue = !0), (f.value = p);
          },
          [p]
        ),
        l(p),
        p
      );
    };
  }),
  wc = o((e, t) => {
    t.exports = Cc();
  })();
function Tc(e, t) {
  return e === t;
}
function Ec(e, t = (e) => e, n) {
  let r = n?.compare ?? Tc,
    i = (0, V.useCallback)(
      (t) => {
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e]
    ),
    a = (0, V.useCallback)(() => e.get(), [e]);
  return (0, wc.useSyncExternalStoreWithSelector)(i, a, a, t, r);
}
var Dc = {};
function Oc(e, t) {
  let n = V.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return e?.structuralSharing ?? t.options.defaultStructuralSharing
      ? (n.current = k(n.current, i))
      : i;
  };
}
function kc(e) {
  let t = ec(),
    n = V.useContext(e.from ? nc : tc),
    r = e.from ?? n,
    i = t.stores.getMatchStore(r),
    a = Oc(e, t),
    o = Ec(i, (e) => (e ? a(e) : Dc));
  if (o !== Dc) return o;
  (e.shouldThrow ?? !0) && we();
}
function Ac(e) {
  return kc({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function jc(e) {
  let { select: t, ...n } = e;
  return kc({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function Mc(e) {
  return kc({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function Nc(e) {
  return kc({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Pc(e) {
  let t = ec();
  return V.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t]
  );
}
function Fc(e) {
  return kc({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
function Ic(...e) {
  let t = V.useRef(e),
    n = t.current;
  return (
    e.forEach((e, t) => {
      ie(n[t], e, !1, !0) || (n[t] = e);
    }),
    t.current
  );
}
function Lc(e, t) {
  e.preloadRoute(t).catch((e) => {
    console.warn(e), console.warn(ms);
  });
}
var Rc = { compare: (e, t) => e[0] === t[0] && e[1] === t[1] };
function zc(e, t) {
  let n = typeof e == `string` && se(e);
  if (n) return t.has(n) ? e : null;
}
function Bc(e, t, n, r, i) {
  let a = _e(e.pathname, r),
    o = _e(t.pathname, r);
  return (n?.exact
    ? a !== o
    : !(a.startsWith(o) && (a.length === o.length || a[o.length] === `/`))) ||
    ((n?.includeSearch ?? !0) &&
      !ie(e.search, t.search, !n?.exact, n?.explicitUndefined))
    ? !1
    : !n?.includeHash || (i && e.hash === t.hash);
}
function Vc(e, t, n) {
  let r = ec(),
    i = V.useRef(null),
    a = V.useCallback(
      (e) => {
        if (((i.current = e), typeof t == `function`)) return t(e);
        t && (t.current = e);
      },
      [t]
    ),
    {
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      hashScrollIntoView: u,
      replace: d,
      startTransition: f,
      resetScroll: p,
      viewTransition: m,
      ignoreBlocker: h,
      disabled: g,
      target: _,
      onClick: v,
      onBlur: y,
      onFocus: b,
      onMouseEnter: x,
      onMouseLeave: S,
      onTouchStart: C,
    } = e,
    w = Zs(!!o?.includeHash),
    [T, E, D] = Ic(e.search, e.params, o),
    [O, ee] = V.useMemo(
      () => [e, { ...e }],
      [
        r,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        T,
        E,
        e.state,
        e.mask,
        e.unsafeRelative,
      ]
    ),
    te = V.useMemo(() => {
      let e = zc(s, r.protocolAllowlist);
      if (e !== void 0) {
        let t = [e ?? void 0];
        return () => t;
      }
      let t, n;
      return (e) => {
        O._fromLocation || (ee._fromLocation = e);
        let i = r.buildLocation(ee),
          a = Xc(i, r, g);
        return (
          (!t || t[0] !== a) &&
            ((t = [a, !(g || (a && !se(a))) && void 0]), (n = [a, !0])),
          t[1] !== void 0 && Bc(e, i, D, r.basepath, w) ? n : t
        );
      };
    }, [D, g, w, O, ee, r, s]),
    [ne, k] = Ec(r.stores.location, te, Rc),
    re = k === void 0 && ne,
    ie = g || ne === void 0,
    ae = V.useRef(!1),
    A = e.reloadDocument || re || ie ? !1 : c ?? r.options.defaultPreload,
    j = l ?? r.options.defaultPreloadDelay ?? 0,
    oe = V.useCallback(
      (e) => {
        let t = e?.isIntersecting;
        if (!(t ?? A === `intent`)) {
          t === !1 && Jc(i);
          return;
        }
        if (!j) {
          Lc(r, O);
          return;
        }
        qc.has(i) ||
          qc.set(
            i,
            setTimeout(() => {
              qc.delete(i), Lc(r, O);
            }, j)
          );
      },
      [r, O, i, A, j]
    );
  V.useEffect(() => {
    if (!A) return;
    A === `render` && !ae.current && ((ae.current = !0), Lc(r, O));
    let e = !0,
      t;
    return (
      A === `viewport` &&
        i.current &&
        typeof IntersectionObserver == `function` &&
        ((t = new IntersectionObserver(
          (t) => {
            e && oe(t.pop());
          },
          { rootMargin: `100px` }
        )),
        t.observe(i.current)),
      () => {
        (e = !1), t?.disconnect(), Jc(i);
      }
    );
  }, [r, O, A, oe, i]);
  let ce = Gc(e, n);
  if (((ce.ref = t ? a : i), re)) return (ce.href = re), ce;
  let le = (e) => {
      let t = _ ?? e.currentTarget.getAttribute(`target`);
      !ie &&
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        (!t || t === `_self`) &&
        e.button === 0 &&
        (e.preventDefault(),
        r.navigate({
          ...O,
          replace: d,
          resetScroll: p,
          hashScrollIntoView: u,
          startTransition: f,
          viewTransition: m,
          ignoreBlocker: h,
        }));
    },
    M = () => {
      A === `intent` && Lc(r, O);
    },
    N = () => {
      A === `intent` && Jc(i);
    };
  return (
    (ce.onClick = Yc(v, le)),
    (ce.onBlur = Yc(y, N)),
    (ce.onFocus = Yc(b, oe)),
    (ce.onMouseEnter = Yc(x, oe)),
    (ce.onMouseLeave = Yc(S, N)),
    (ce.onTouchStart = Yc(C, M)),
    Kc(ce, e, k, ne, ie, n)
  );
}
var Hc = {},
  Uc = { className: `active` },
  Wc = new Set([
    `to`,
    `params`,
    `search`,
    `hash`,
    `state`,
    `mask`,
    `from`,
    `unsafeRelative`,
    `_fromLocation`,
    `reloadDocument`,
    `preload`,
    `preloadDelay`,
    `preloadIntentProximity`,
    `hashScrollIntoView`,
    `replace`,
    `startTransition`,
    `resetScroll`,
    `viewTransition`,
    `ignoreBlocker`,
    `activeProps`,
    `inactiveProps`,
    `activeOptions`,
    `_asChild`,
  ]);
function Gc(e, t) {
  let n = {};
  for (let r in e)
    Wc.has(r) ||
      (r === `type` && t !== void 0) ||
      (r === `disabled` && t === `a`) ||
      (n[r] = e[r]);
  return n;
}
function Kc(e, t, n, r, i, a) {
  let {
      activeProps: o,
      inactiveProps: s,
      className: c,
      style: l,
      target: u,
    } = t,
    d = D(n ? o : s, {}) ?? (n ? Uc : Hc);
  Object.assign(e, d),
    (e.href = r),
    a !== `a` && (e.disabled = i),
    (e.target = u);
  let f = d.style;
  (l || f) && (e.style = l && f ? { ...l, ...f } : l || f);
  let p = d.className;
  return (
    (c || p) && (e.className = c ? (p ? `${c} ${p}` : c) : p),
    i && ((e.role = `link`), (e[`aria-disabled`] = !0)),
    n && ((e[`data-status`] = `active`), (e[`aria-current`] = `page`)),
    e
  );
}
var qc = new WeakMap(),
  Jc = (e) => {
    clearTimeout(qc.get(e)), qc.delete(e);
  },
  Yc = (e, t) =>
    e ? (n) => n.defaultPrevented || (e(n), n.defaultPrevented || t(n)) : t;
function Xc(e, t, n) {
  if (n) return;
  let r = e.maskedLocation ?? e,
    i = r.external ? r.publicHref : t.history.createHref(r.publicHref) || `/`;
  if (!((r.external || i !== r.publicHref) && le(i, t.protocolAllowlist)))
    return i;
}
var Zc = V.memo(
  V.forwardRef((e, t) => {
    let n = e._asChild || `a`,
      r = Vc(e, t, n),
      i =
        typeof e.children == `function`
          ? e.children({ isActive: r[`data-status`] === `active` })
          : e.children;
    return V.createElement(n, r, i);
  }),
  Qc
);
function Qc(e, t) {
  let n = 0;
  for (let r in t)
    if ((n++, e[r] !== t[r] && (!Wc.has(r) || !ie(e[r], t[r], !1, !0))))
      return !1;
  for (let t in e) n--;
  return n === 0;
}
var $c = class extends Cs {
  constructor(e) {
    super(e),
      (this.useMatch = (e) => kc({ ...e, from: this.id })),
      (this.useRouteContext = (e) => Fc({ ...e, from: this.id })),
      (this.useSearch = (e) => Nc({ ...e, from: this.id })),
      (this.useParams = (e) => Mc({ ...e, from: this.id })),
      (this.useLoaderDeps = (e) => jc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Ac({ ...e, from: this.id })),
      (this.useNavigate = () => Pc({ from: this.fullPath })),
      (this.Link = V.forwardRef((e, t) =>
        (0, H.jsx)(Zc, { ref: t, from: this.fullPath, ...e })
      ));
  }
};
function el(e) {
  return new $c(e);
}
function tl() {
  return (e) => rl(e);
}
var nl = class extends ws {
  constructor(e) {
    super(e),
      (this.useMatch = (e) => kc({ ...e, from: this.id })),
      (this.useRouteContext = (e) => Fc({ ...e, from: this.id })),
      (this.useSearch = (e) => Nc({ ...e, from: this.id })),
      (this.useParams = (e) => Mc({ ...e, from: this.id })),
      (this.useLoaderDeps = (e) => jc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Ac({ ...e, from: this.id })),
      (this.useNavigate = () => Pc({ from: this.fullPath })),
      (this.Link = V.forwardRef((e, t) =>
        (0, H.jsx)(Zc, { ref: t, from: this.fullPath, ...e })
      ));
  }
};
function rl(e) {
  return new nl(e);
}
function il(e) {
  return (e) => {
    let t = el(e);
    return (t.isRoot = !1), t;
  };
}
function al(e) {
  let t = ec(),
    n = `not-found-${Ec(t.stores.location, (e) => e.pathname)}-${Ec(
      t.stores.status
    )}`;
  return (0, H.jsx)(Ks, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (x(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (x(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function ol() {
  return (0, H.jsx)(`p`, { children: `Not Found` });
}
function sl(e, t, n) {
  return t.options.notFoundComponent
    ? (0, H.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
    ? (0, H.jsx)(e.options.defaultNotFoundComponent, { ...n })
    : (0, H.jsx)(ol, {});
}
function cl(e, t) {
  let n = t?.options.pendingComponent ?? e.options.defaultPendingComponent;
  return n ? (0, H.jsx)(n, {}) : null;
}
var ll = (e, t) => e[0] === t[0] && e[1] === t[1],
  ul = (e, t, n) =>
    !t.isRoot ||
    t.options.shellComponent ||
    t.options.wrapInSuspense ||
    n === !1 ||
    n === `data-only` ||
    !e.ssr,
  dl = V.memo(function ({ routeId: e }) {
    let t = ec();
    return (0, H.jsx)(fl, { router: t, match: Ec(t.stores.getMatchStore(e)) });
  });
function fl({ router: e, match: t }) {
  let n = e.routesById[t.routeId],
    r = cl(e, n),
    i = n.options.errorComponent ?? e.options.defaultErrorComponent,
    a = n.options.onCatch ?? e.options.defaultOnCatch,
    o = n.isRoot
      ? n.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component
      : n.options.notFoundComponent,
    s = t.ssr === !1 || t.ssr === `data-only`,
    c =
      ul(e, n, t.ssr) &&
      (n.options.wrapInSuspense ??
        r ??
        (n.options.errorComponent?.preload || s)),
    l = (0, H.jsx)(pl, { match: t });
  s && (l = (0, H.jsx)(Xs, { fallback: r, children: l })),
    o &&
      (l = (0, H.jsx)(al, {
        fallback: (e) => {
          if (((e.routeId ??= t.routeId), e.routeId !== t.routeId)) throw e;
          return V.createElement(o, e);
        },
        children: l,
      })),
    i &&
      (l = (0, H.jsx)(Ks, {
        getResetKey: () => t,
        errorComponent: i,
        onCatch: (e, n) => {
          if (x(e)) throw ((e.routeId ??= t.routeId), e);
          a?.(e, n);
        },
        children: l,
      })),
    c && (l = (0, H.jsx)(V.Suspense, { fallback: r, children: l }));
  let u = n.isRoot ? n.options.shellComponent : void 0;
  return (0, H.jsx)(tc.Provider, {
    value: t.routeId,
    children: u
      ? (0, H.jsxs)(u, { children: [l, null] })
      : (0, H.jsxs)(H.Fragment, { children: [l, null] }),
  });
}
var pl = V.memo(function ({ match: e }) {
    let t = ec(),
      n = e.routeId,
      r = t.routesById[n],
      i = V.useMemo(() => {
        let i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
          routeId: n,
          loaderDeps: e.loaderDeps,
          params: e._strictParams,
          search: e._strictSearch,
        });
        return i ? JSON.stringify(i) : void 0;
      }, [
        n,
        e.loaderDeps,
        e._strictParams,
        e._strictSearch,
        r.options.remountDeps,
        t.options.defaultRemountDeps,
      ]),
      a = V.useMemo(() => {
        let e = r.options.component ?? t.options.defaultComponent;
        return e ? (0, H.jsx)(e, {}, i) : (0, H.jsx)(ml, {});
      }, [i, r.options.component, t.options.defaultComponent]);
    if (e.status === `pending`) {
      if (t.ssr && !ul(t, r, e.ssr)) return a;
      if (t._tx) throw t._tx[5];
      return cl(t, r);
    }
    if (e.status === `notFound`) return sl(t, r, e.error);
    if (e.status === `error`) throw e.error;
    return a;
  }),
  ml = V.memo(function () {
    let e = ec(),
      t = V.useContext(tc),
      n,
      r,
      i;
    {
      let a = e.stores.getMatchStore(t);
      ([n, r] = Ec(a, (e) => [!!e._notFound, e.error], { compare: ll })),
        (i = Ec(e.stores.ids, (e) => e[e.indexOf(t) + 1]));
    }
    if (n) return sl(e, e.routesById[t], r);
    if (!i) return null;
    let a = (0, H.jsx)(dl, { routeId: i });
    return t === `__root__`
      ? (0, H.jsx)(V.Suspense, { fallback: cl(e), children: a })
      : a;
  });
function hl(e, t) {
  let n = e[1];
  (e.length = 0), n?.(t);
}
function gl({ t: e }) {
  let t = ec(),
    n = (t._rendered ??= []);
  return (
    (t.startTransition = (r, i) =>
      new Promise((a) => {
        hl(n, !1), n.push(i, a), e(t), V.startTransition(r);
      })),
    Vs(() => {
      let e = t.history.subscribe(t.load);
      t.updateLatestLocation();
      let r = t.latestLocation,
        i = t.buildLocation({
          to: r.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      if (he(r.publicHref) !== he(i.publicHref))
        return t.commitLocation({ ...i, replace: !0, ignoreBlocker: !0 }), e;
      let a = t.stores.resolvedLocation.get();
      return (
        a?.href === r.href && a.state.__TSR_key === r.state.__TSR_key
          ? n.push(t.stores.matches.get(), (e) => {
              e && t.emit({ type: `onRendered`, ...Nt(a, a) });
            })
          : t._tx || t.load({ sync: !0 }).catch(console.error),
        e
      );
    }, [t, t.history]),
    null
  );
}
function _l() {
  let e = ec(),
    t = e.routesById[pt],
    n = cl(e, t),
    r = (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(gl, { t: V.useState()[1] }),
        e.ssr
          ? (0, H.jsx)(vl, {})
          : (0, H.jsx)(V.Suspense, {
              fallback: n,
              children: (0, H.jsx)(vl, {}),
            }),
      ],
    });
  return e.options.InnerWrap
    ? (0, H.jsx)(e.options.InnerWrap, { children: r })
    : r;
}
function vl() {
  let e = ec(),
    t = e._rendered,
    n = Ec(e.stores.matches, (e) => t[0] ?? e),
    r = n[0],
    i = r?.routeId;
  Vs(() => {
    t[0] === n && hl(t, !0);
  }, [t, n]);
  let a = i ? (0, H.jsx)(dl, { routeId: i }) : null;
  return e.options.disableGlobalCatchBoundary
    ? a
    : (0, H.jsx)(Ks, { getResetKey: () => r, onCatch: void 0, children: a });
}
var yl = (e) => ({
    createMutableStore: yc,
    createReadonlyStore: yc,
    batch: gc,
  }),
  bl = (e) => new xl(e),
  xl = class extends Lt {
    constructor(e) {
      super(e, yl);
    }
  };
function Sl({ router: e, children: t, ...n }) {
  ee(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    });
  let r = (0, H.jsx)($s.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, H.jsx)(e.options.Wrap, { children: r }) : r;
}
function Cl({ router: e, ...t }) {
  return (0, H.jsx)(Sl, { router: e, ...t, children: (0, H.jsx)(_l, {}) });
}
function wl(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function Tl(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e,
    a = V.useMemo(() => (n === void 0 ? void 0 : { __html: n }), [n]);
  switch (e.tag) {
    case `title`:
      return (0, H.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      });
    case `meta`:
      return (0, H.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, H.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, H.jsx)(`style`, { ...t, dangerouslySetInnerHTML: a, nonce: r })
      );
    case `script`:
      return (0, H.jsx)(El, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function El({ attrs: e, children: t, preventScriptHoist: n }) {
  ec();
  let r = Zs(),
    i = V.useMemo(() => (t === void 0 ? void 0 : { __html: t }), [t]),
    a =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (V.useEffect(() => {
      if (!a) {
        if (e?.src) {
          let t = document.createElement(`a`);
          t.href = e.src;
          let n = t.href;
          for (let e of document.scripts) if (e.src === n) return;
          let r = document.createElement(`script`);
          return wl(r, e), document.head.appendChild(r), () => r.remove();
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.scripts) {
            if (e.hasAttribute(`src`)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return (
            (i.textContent = t),
            wl(i, e),
            document.head.appendChild(i),
            () => i.remove()
          );
        }
      }
    }, [e, t, a]),
    a && typeof t == `string`)
  )
    return (0, H.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: i,
    });
  if (!r) {
    if (e?.src)
      return (0, H.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, H.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: i,
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
function Dl(e, t, n, r) {
  n = $t(n);
  let i = n.map((e) => e.meta).filter((e) => e !== void 0),
    a = [],
    o = {},
    s;
  for (let e = i.length - 1; e >= 0; e--) {
    let n = i[e];
    for (let e = n.length - 1; e >= 0; e--) {
      let r = n[e];
      if (r)
        if (r.title) s ||= { tag: `title`, children: r.title };
        else if (`script:ld+json` in r)
          try {
            let e = JSON.stringify(r[`script:ld+json`]);
            a.push({
              tag: `script`,
              attrs: { type: `application/ld+json` },
              children: ue(e),
            });
          } catch {}
        else {
          let e = r.name ?? r.property;
          if (e) {
            if (o[e]) continue;
            o[e] = !0;
          }
          a.push({ tag: `meta`, attrs: { ...r, nonce: t } });
        }
    }
  }
  s && a.push(s),
    t && a.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: t } }),
    a.reverse();
  let c = n
      .flatMap((e) => e.links ?? [])
      .filter((e) => e !== void 0)
      .map((e) => ({ tag: `link`, attrs: { ...e, nonce: t } })),
    l = e.ssr?.manifest,
    u = [];
  l &&
    (n.forEach((e) => {
      l.routes[e.routeId]?.css?.forEach((e) => {
        let n = bs(e);
        u.push({
          tag: `link`,
          attrs: {
            rel: `stylesheet`,
            ...n,
            crossOrigin: hs(r, `stylesheet`) ?? n.crossOrigin,
            suppressHydrationWarning: !0,
            nonce: t,
          },
        });
      });
    }),
    l.inlineStyle &&
      u.push({
        tag: `style`,
        attrs: { ...l.inlineStyle.attrs, nonce: t },
        children: l.inlineStyle.children,
        inlineCss: !0,
      }));
  let d = [];
  l &&
    n.forEach((e) => {
      l.routes[e.routeId]?.preloads?.forEach((e) => {
        d.push({ tag: `link`, attrs: { ..._s(l, e, r), nonce: t } });
      });
    });
  let f = n
      .flatMap((e) => e.styles ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({
        tag: `style`,
        attrs: { ...n, nonce: t },
        children: e,
      })),
    p = n
      .flatMap((e) => e.headScripts ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({
        tag: `script`,
        attrs: { ...n, nonce: t },
        children: e,
      })),
    m = [];
  return ys(m, a), m.push(...d), ys(m, c), m.push(...u), ys(m, f), ys(m, p), m;
}
var Ol = (e) => {
  let t = ec(),
    n = t.options.ssr?.nonce,
    r = V.useCallback((r) => Dl(t, n, r, e), [e, n, t]);
  return Ec(t.stores.matches, r, { compare: ie });
};
function kl(e) {
  let t = Ol(e.assetCrossOrigin),
    n = ec().options.ssr?.nonce;
  return (0, H.jsx)(H.Fragment, {
    children: t.map((e) =>
      (0, V.createElement)(Tl, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      })
    ),
  });
}
var Al = { suppressHydrationWarning: !0 },
  jl = () => {
    let e = ec(),
      t = e.options.ssr?.nonce,
      n = (n) => {
        let r = xs(n, e.ssr?.manifest, t, Al);
        for (let e of r[1])
          if (typeof e.attrs?.src == `string`) {
            let t = e;
            t.preventScriptHoist = !0;
          }
        return r;
      };
    return Ml(Ec(e.stores.matches, (e) => Ss(n(e)), { compare: ie }));
  };
function Ml(e) {
  return (0, H.jsx)(H.Fragment, {
    children: e.map((e, t) =>
      (0, V.createElement)(Tl, { ...e, key: `tsr-scripts-${e.tag}-${t}` })
    ),
  });
}
var Nl = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => Nl({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => Nl({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => Nl({}, Object.assign(n, { client: e })),
    server: (e) => Nl({}, Object.assign(n, { server: e })),
  };
};
function Pl(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Pl(e, r.extends));
  }
}
var Fl = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        Pl(e, t.serializationAdapters),
          (t.serializationAdapters = Array.from(e));
      }
      return t;
    },
    createMiddleware: Nl,
  }),
  Il = Nl(),
  Ll = void 0,
  Rl = Fl(() => ({ requestMiddleware: [Il, Ll] })),
  zl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Bl = new (class extends zl {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        }));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  Vl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  U = new (class {
    #e = Vl;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Hl(e) {
  setTimeout(e, 0);
}
var W = typeof window > `u` || `Deno` in globalThis;
function G() {}
function K(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ul(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Wl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Gl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Kl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ql(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Yl(o, t.options)) return !1;
    } else if (!Zl(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Jl(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Xl(t.options.mutationKey) !== Xl(a)) return !1;
    } else if (!Zl(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Yl(e, t) {
  return (t?.queryKeyHashFn || Xl)(e);
}
function Xl(e) {
  return JSON.stringify(e, (e, t) =>
    tu(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t
  );
}
function Zl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!Zl(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!Zl(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var Ql = Object.prototype.hasOwnProperty;
function $l(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = eu(e) && eu(t);
  if (!r && !(tu(e) && tu(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      (s[o] = u), (r ? l < i : Ql.call(e, o)) && c++;
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = $l(u, d, n + 1);
    (s[o] = f), f === u && c++;
  }
  return i === o && c === i ? e : s;
}
function eu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function tu(e) {
  if (!nu(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !nu(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function nu(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ru(e) {
  return new Promise((t) => {
    U.setTimeout(t, e);
  });
}
function iu(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
    ? t
    : $l(e, t);
}
function au(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function ou(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var su = Symbol();
function cu(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === su
    ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
function lu(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var uu = (() => {
  let e = () => W;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function du() {
  let e,
    t,
    n = new Promise((n, r) => {
      (e = n), (t = r);
    });
  (n.status = `pending`), n.catch(() => {});
  function r(e) {
    Object.assign(n, e), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (t) => {
      r({ status: `fulfilled`, value: t }), e(t);
    }),
    (n.reject = (e) => {
      r({ status: `rejected`, reason: e }), t(e);
    }),
    n
  );
}
var fu = Hl;
function pu() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = fu,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      (e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          });
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        t--, t || o();
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var mu = pu(),
  hu = new (class extends zl {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function gu(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function _u(e) {
  return (e ?? `online`) !== `online` || hu.isOnline();
}
var vu = class extends Error {
  constructor(e) {
    super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent);
  }
};
function yu(e) {
  let t = !1,
    n = 0,
    r,
    i = du(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new vu(t);
        f(n), e.onCancel?.(n);
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      Bl.isFocused() &&
      (e.networkMode === `always` || hu.isOnline()) &&
      e.canRun(),
    u = () => _u(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        (r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.();
      }).then(() => {
        (r = void 0), a() || e.onContinue?.();
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (uu.isServer() ? 0 : 3),
            o = e.retryDelay ?? gu,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          n++,
            e.onFail?.(n, r),
            ru(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              });
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var bu = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Ul(this.gcTime) &&
        (this.#e = U.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (uu.isServer() ? 1 / 0 : 3e5)
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (U.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function xu(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              lu(
                e,
                () => t.signal,
                () => (n = !0)
              );
            },
            u = cu(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return l(e), e;
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? ou : au;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Cu : Su,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? o[0] ?? r.initialPageParam : Su(r, s);
              if (c > 0 && e == null) break;
              (s = await d(s, e)), c++;
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n
            )
        : l;
    },
  };
}
function Su(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Cu(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var wu = class extends bu {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Du(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Du(this.options);
      e.data !== void 0 &&
        (this.setState(Eu(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = iu(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return this.#a?.cancel(e), t ? t.then(G).catch(G) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    this.destroy(), this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some((e) => Kl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === su || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => Gl(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
      ? !1
      : this.state.isInvalidated
      ? !0
      : !Wl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue();
  }
  onOnline() {
    this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue();
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = cu(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return r(e), e;
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return r(e), e;
      })();
    (this.#e === `infinite`
      ? xu(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = yu({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          e instanceof vu &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort();
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      }));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof vu) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        (this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e)
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...Tu(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...Eu(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return (this.#n = e.manual ? n : void 0), n;
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    (this.state = t(this.state)),
      mu.batch(() => {
        this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e });
      });
  }
};
function Tu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: _u(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Eu(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Du(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Ou = class extends bu {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || ku()),
      this.setOptions(e.options),
      this.scheduleGc();
  }
  setOptions(e) {
    (this.options = e), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    (this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = yu({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    (this.state = t(this.state)),
      mu.batch(() => {
        this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e });
      });
  }
};
function ku() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Au = class extends zl {
  constructor(e = {}) {
    super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Ou({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return this.add(r), r;
  }
  add(e) {
    this.#e.add(e);
    let t = ju(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = ju(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = ju(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = ju(e);
    return typeof t == `string`
      ? this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    mu.batch(() => {
      this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Jl(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Jl(e, t));
  }
  notify(e) {
    mu.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return mu.batch(() => Promise.all(e.map((e) => e.continue().catch(G))));
  }
};
function ju(e) {
  return e.options.scope?.id;
}
var Mu = class extends zl {
    constructor(e = {}) {
      super(), (this.config = e), (this.#e = new Map());
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Yl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new wu({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      mu.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => ql(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => ql(e, t)) : t;
    }
    notify(e) {
      mu.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      mu.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      mu.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Nu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      (this.#e = e.queryCache || new Mu()),
        (this.#t = e.mutationCache || new Au()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0);
    }
    mount() {
      this.#a++,
        this.#a === 1 &&
          ((this.#o = Bl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = hu.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(Gl(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = K(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return mu.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      mu.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return mu.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        )
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = mu.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(G).catch(G);
    }
    invalidateQueries(e, t = {}) {
      return mu.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t
              )
        )
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = mu.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(G)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            })
        );
      return Promise.all(r).then(G);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Gl(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(G).catch(G);
    }
    fetchInfiniteQuery(e) {
      return (e._type = `infinite`), this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(G).catch(G);
    }
    ensureInfiniteQueryData(e) {
      return (e._type = `infinite`), this.ensureQueryData(e);
    }
    resumePausedMutations() {
      return hu.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Xl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Zl(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Xl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Zl(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Yl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === su && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  Pu = V.createContext(void 0),
  Fu = ({ client: e, children: t }) => (
    V.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    (0, H.jsx)(Pu.Provider, { value: e, children: t })
  ),
  Iu = `/assets/styles-CTGjcyo3.css`;
function Lu(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` }
  );
  let n = e instanceof Error ? e.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: zu(e),
    ...(n !== void 0 && { stack: n }),
    filename: window.location.pathname,
  });
}
var Ru = 2e3;
function zu(e) {
  if (e instanceof Response)
    return `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`;
  if (e instanceof Error) return e.message;
  if (typeof e == `string`) return e;
  let { message: t } = e ?? {};
  if (typeof t == `string` && t.length > 0) return t;
  try {
    return JSON.stringify(e)?.slice(0, Ru) ?? String(e);
  } catch {
    return String(e);
  }
}
function Bu() {
  return (0, H.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, H.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, H.jsx)(`h1`, {
          className: `text-7xl font-bold text-foreground`,
          children: `404`,
        }),
        (0, H.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, H.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, H.jsx)(`div`, {
          className: `mt-6`,
          children: (0, H.jsx)(Zc, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function Vu({ error: e, reset: t }) {
  console.error(e);
  let n = ec();
  return (
    (0, V.useEffect)(() => {
      Lu(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, H.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, H.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, H.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, H.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, H.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, H.jsx)(`button`, {
                onClick: () => {
                  n.invalidate(), t();
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, H.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var Hu = tl()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { property: `og:site_name`, content: `CatDog` },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
    ],
    links: [
      { rel: `stylesheet`, href: Iu },
      { rel: `icon`, href: `/favicon.png`, type: `image/png` },
      {
        rel: `apple-touch-icon`,
        href: `/apple-touch-icon.png`,
        type: `image/png`,
      },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      {
        rel: `preconnect`,
        href: `https://fonts.gstatic.com`,
        crossOrigin: `anonymous`,
      },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Lilita+One&display=swap`,
      },
    ],
  }),
  shellComponent: Uu,
  component: Wu,
  notFoundComponent: Bu,
  errorComponent: Vu,
});
function Uu({ children: e }) {
  return (0, H.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, H.jsx)(`head`, { children: (0, H.jsx)(kl, {}) }),
      (0, H.jsxs)(`body`, { children: [e, (0, H.jsx)(jl, {})] }),
    ],
  });
}
function Wu() {
  let { queryClient: e } = Hu.useRouteContext();
  return (0, H.jsx)(Fu, { client: e, children: (0, H.jsx)(ml, {}) });
}
var Gu = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Ku = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  qu = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    ),
  Ju = (e) => {
    let t = qu(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  q = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Yu = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Xu = (0, V.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c
    ) =>
      (0, V.createElement)(
        `svg`,
        {
          ref: c,
          ...q,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Gu(`lucide`, i),
          ...(!a && !Yu(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, V.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      )
  ),
  Zu = (e, t) => {
    let n = (0, V.forwardRef)(({ className: n, ...r }, i) =>
      (0, V.createElement)(Xu, {
        ref: i,
        iconNode: t,
        className: Gu(`lucide-${Ku(Ju(e))}`, `lucide-${e}`, n),
        ...r,
      })
    );
    return (n.displayName = Ju(e)), n;
  },
  Qu = Zu(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  $u = Zu(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  ed = Zu(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  td = Zu(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  nd = Zu(`feather`, [
    [
      `path`,
      {
        d: `M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,
        key: `18jl4k`,
      },
    ],
    [`path`, { d: `M16 8 2 22`, key: `vp34q` }],
    [`path`, { d: `M17.5 15H9`, key: `1oz8nu` }],
  ]),
  rd = Zu(`paw-print`, [
    [`circle`, { cx: `11`, cy: `4`, r: `2`, key: `vol9p0` }],
    [`circle`, { cx: `18`, cy: `8`, r: `2`, key: `17gozi` }],
    [`circle`, { cx: `20`, cy: `16`, r: `2`, key: `1v9bxh` }],
    [
      `path`,
      {
        d: `M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z`,
        key: `1ydw1z`,
      },
    ],
  ]),
  id = Zu(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  ad = Zu(`volume-x`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
    [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
  ]),
  od = Object.defineProperty,
  sd = (e, t) => od(e, `name`, { value: t, configurable: !0 });
function cd(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
sd(cd, `setRef`);
function ld(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = cd(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : cd(e[t], null);
        }
      };
  };
}
sd(ld, `composeRefs`);
function ud(...e) {
  return V.useCallback(ld(...e), e);
}
sd(ud, `useComposedRefs`);
var dd = Object.defineProperty,
  fd = (e, t) => dd(e, `name`, { value: t, configurable: !0 });
function pd(e) {
  let t = V.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    Sd(r) && typeof Td == `function` && (r = Td(r._payload)),
      V.Children.forEach(r, (e) => {
        if (bd(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          Sd(n) && typeof Td == `function` && (n = Td(n._payload)),
            (a = _d(t, n)),
            s.push(a?.props?.children);
        } else s.push(e);
      }),
      a
        ? (a = V.cloneElement(a, void 0, s))
        : !o && V.Children.count(r) === 1 && V.isValidElement(r) && (a = r);
    let c = a ? yd(a) : void 0,
      l = ud(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? wd(e) : J(e));
      return r;
    }
    let u = vd(i, a.props ?? {});
    return a.type !== V.Fragment && (u.ref = n ? l : c), V.cloneElement(a, u);
  });
  return (t.displayName = `${e}.Slot`), t;
}
fd(pd, `createSlot`);
var md = pd(`Slot`),
  hd = Symbol.for(`radix.slottable`);
function gd(e) {
  let t = fd(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = hd), t;
}
fd(gd, `createSlottable`);
var _d = fd((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return V.isValidElement(t)
      ? V.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return V.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function vd(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t;
          })
        : i && (n[r] = i)
      : r === `style`
      ? (n[r] = { ...i, ...a })
      : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
fd(vd, `mergeProps`);
function yd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
fd(yd, `getElementRef`);
function bd(e) {
  return (
    V.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === hd
  );
}
fd(bd, `isSlottable`);
var xd = Symbol.for(`react.lazy`);
function Sd(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === xd &&
    `_payload` in e &&
    Cd(e._payload)
  );
}
fd(Sd, `isLazyComponent`);
function Cd(e) {
  return typeof e == `object` && !!e && `then` in e;
}
fd(Cd, `isPromiseLike`);
var J = fd(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`
  ),
  wd = fd(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`
  ),
  Td = V.use;
function Ed(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Ed(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Dd() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Ed(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Od = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  kd = Dd,
  Ad = (e, t) => (n) => {
    if (t?.variants == null) return kd(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Od(t) || Od(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return r === void 0 || (e[n] = r), e;
        }, {});
    return kd(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className
    );
  },
  jd = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Md = (e, t) => ({ classGroupId: e, validator: t }),
  Nd = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Pd = `-`,
  Fd = [],
  Id = `arbitrary..`,
  Y = (e) => {
    let t = zd(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Rd(e);
        let n = e.split(Pd);
        return Ld(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? jd(i, t) : t) : i || Fd;
        }
        return n[e] || Fd;
      },
    };
  },
  Ld = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Ld(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Pd) : e.slice(t).join(Pd),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Rd = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Id + r : void 0;
        })(),
  zd = (e) => {
    let { theme: t, classGroups: n } = e;
    return Bd(n, t);
  },
  Bd = (e, t) => {
    let n = Nd();
    for (let r in e) {
      let i = e[r];
      Vd(i, n, r, t);
    }
    return n;
  },
  Vd = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Hd(i, t, n, r);
    }
  },
  Hd = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ud(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Wd(e, t, n, r);
      return;
    }
    Gd(e, t, n, r);
  },
  Ud = (e, t, n) => {
    let r = e === `` ? t : Kd(t, e);
    r.classGroupId = n;
  },
  Wd = (e, t, n, r) => {
    if (qd(e)) {
      Vd(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(Md(n, e));
  },
  Gd = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Vd(o, Kd(t, a), n, r);
    }
  },
  Kd = (e, t) => {
    let n = e,
      r = t.split(Pd),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = Nd()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  qd = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Jd = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        (n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Yd = `!`,
  Xd = `:`,
  Zd = [],
  Qd = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  $d = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Xd) {
              t.push(e.slice(i, s)), (i = s + 1);
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
            ? n--
            : o === `(`
            ? r++
            : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Yd)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Yd) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Qd(t, l, c, u);
      };
    if (t) {
      let e = t + Xd,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Qd(Zd, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  ef = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  tf = (e) => ({
    cache: Jd(e.cacheSize),
    parseClassName: $d(e),
    sortModifiers: ef(e),
    postfixLookupClassGroupIds: nf(e),
    ...Y(e),
  }),
  nf = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  rf = /\s+/,
  af = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(rf),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Yd : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  of = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = sf(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  sf = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = sf(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  cf = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = tf(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = af(e, n);
        return i(e, a), a;
      };
    return (a = o), (...e) => a(of(...e));
  },
  lf = [],
  uf = (e) => {
    let t = (t) => t[e] || lf;
    return (t.isThemeGetter = !0), t;
  },
  df = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ff = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  pf = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  mf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  hf =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  gf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  _f = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  vf =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  yf = (e) => pf.test(e),
  X = (e) => !!e && !Number.isNaN(Number(e)),
  bf = (e) => !!e && Number.isInteger(Number(e)),
  xf = (e) => e.endsWith(`%`) && X(e.slice(0, -1)),
  Sf = (e) => mf.test(e),
  Cf = () => !0,
  wf = (e) => hf.test(e) && !gf.test(e),
  Tf = () => !1,
  Ef = (e) => _f.test(e),
  Df = (e) => vf.test(e),
  Of = (e) => !Z(e) && !Q(e),
  kf = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Af = (e) => Gf(e, Yf, Tf),
  Z = (e) => df.test(e),
  jf = (e) => Gf(e, Xf, wf),
  Mf = (e) => Gf(e, Zf, X),
  Nf = (e) => Gf(e, $f, Cf),
  Pf = (e) => Gf(e, Qf, Tf),
  Ff = (e) => Gf(e, qf, Tf),
  If = (e) => Gf(e, Jf, Df),
  Lf = (e) => Gf(e, ep, Ef),
  Q = (e) => ff.test(e),
  Rf = (e) => Kf(e, Xf),
  zf = (e) => Kf(e, Qf),
  Bf = (e) => Kf(e, qf),
  Vf = (e) => Kf(e, Yf),
  Hf = (e) => Kf(e, Jf),
  Uf = (e) => Kf(e, ep, !0),
  Wf = (e) => Kf(e, $f, !0),
  Gf = (e, t, n) => {
    let r = df.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Kf = (e, t, n = !1) => {
    let r = ff.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  qf = (e) => e === `position` || e === `percentage`,
  Jf = (e) => e === `image` || e === `url`,
  Yf = (e) => e === `length` || e === `size` || e === `bg-size`,
  Xf = (e) => e === `length`,
  Zf = (e) => e === `number`,
  Qf = (e) => e === `family-name`,
  $f = (e) => e === `number` || e === `weight`,
  ep = (e) => e === `shadow`,
  tp = cf(() => {
    let e = uf(`color`),
      t = uf(`font`),
      n = uf(`text`),
      r = uf(`font-weight`),
      i = uf(`tracking`),
      a = uf(`leading`),
      o = uf(`breakpoint`),
      s = uf(`container`),
      c = uf(`spacing`),
      l = uf(`radius`),
      u = uf(`shadow`),
      d = uf(`inset-shadow`),
      f = uf(`text-shadow`),
      p = uf(`drop-shadow`),
      m = uf(`blur`),
      h = uf(`perspective`),
      g = uf(`aspect`),
      _ = uf(`ease`),
      v = uf(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), Q, Z],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [Q, Z, c],
      T = () => [yf, `full`, `auto`, ...w()],
      E = () => [bf, `none`, `subgrid`, Q, Z],
      D = () => [`auto`, { span: [`full`, bf, Q, Z] }, bf, Q, Z],
      O = () => [bf, `auto`, Q, Z],
      ee = () => [`auto`, `min`, `max`, `fr`, Q, Z],
      te = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      ne = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      k = () => [`auto`, ...w()],
      re = () => [
        yf,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ie = () => [
        yf,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ae = () => [
        yf,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      A = () => [e, Q, Z],
      j = () => [...b(), Bf, Ff, { position: [Q, Z] }],
      oe = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      se = () => [`auto`, `cover`, `contain`, Vf, Af, { size: [Q, Z] }],
      ce = () => [xf, Rf, jf],
      le = () => [``, `none`, `full`, l, Q, Z],
      M = () => [``, X, Rf, jf],
      N = () => [`solid`, `dashed`, `dotted`, `double`],
      ue = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      P = () => [X, xf, Bf, Ff],
      de = () => [``, `none`, m, Q, Z],
      fe = () => [`none`, X, Q, Z],
      pe = () => [`none`, X, Q, Z],
      me = () => [X, Q, Z],
      he = () => [yf, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Sf],
        breakpoint: [Sf],
        color: [Cf],
        container: [Sf],
        "drop-shadow": [Sf],
        ease: [`in`, `out`, `in-out`],
        font: [Of],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Sf],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [Sf],
        shadow: [Sf],
        spacing: [`px`, X],
        text: [Sf],
        "text-shadow": [Sf],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, yf, Z, Q, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, Q, Z] }],
        "container-named": [kf],
        columns: [{ columns: [X, Z, Q, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [bf, `auto`, Q, Z] }],
        basis: [{ basis: [yf, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [X, yf, `auto`, `initial`, `none`, Z] }],
        grow: [{ grow: [``, X, Q, Z] }],
        shrink: [{ shrink: [``, X, Q, Z] }],
        order: [{ order: [bf, `first`, `last`, `none`, Q, Z] }],
        "grid-cols": [{ "grid-cols": E() }],
        "col-start-end": [{ col: D() }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": E() }],
        "row-start-end": [{ row: D() }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ee() }],
        "auto-rows": [{ "auto-rows": ee() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...te(), `normal`] }],
        "justify-items": [{ "justify-items": [...ne(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...ne()] }],
        "align-content": [{ content: [`normal`, ...te()] }],
        "align-items": [{ items: [...ne(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...ne(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": te() }],
        "place-items": [{ "place-items": [...ne(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...ne()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: k() }],
        mx: [{ mx: k() }],
        my: [{ my: k() }],
        ms: [{ ms: k() }],
        me: [{ me: k() }],
        mbs: [{ mbs: k() }],
        mbe: [{ mbe: k() }],
        mt: [{ mt: k() }],
        mr: [{ mr: k() }],
        mb: [{ mb: k() }],
        ml: [{ ml: k() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: re() }],
        "inline-size": [{ inline: [`auto`, ...ie()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ie()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ie()] }],
        "block-size": [{ block: [`auto`, ...ae()] }],
        "min-block-size": [{ "min-block": [`auto`, ...ae()] }],
        "max-block-size": [{ "max-block": [`none`, ...ae()] }],
        w: [{ w: [s, `screen`, ...re()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...re()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...re()] },
        ],
        h: [{ h: [`screen`, `lh`, ...re()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...re()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...re()] }],
        "font-size": [{ text: [`base`, n, Rf, jf] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Wf, Nf] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              xf,
              Z,
            ],
          },
        ],
        "font-family": [{ font: [zf, Pf, t] }],
        "font-features": [{ "font-features": [Z] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Q, Z] }],
        "line-clamp": [{ "line-clamp": [X, `none`, Q, Mf] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, Q, Z] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Q, Z] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: A() }],
        "text-color": [{ text: A() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...N(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [X, `from-font`, `auto`, Q, jf] },
        ],
        "text-decoration-color": [{ decoration: A() }],
        "underline-offset": [{ "underline-offset": [X, `auto`, Q, Z] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "tab-size": [{ tab: [bf, Q, Z] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Q,
              Z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Q, Z] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: j() }],
        "bg-repeat": [{ bg: oe() }],
        "bg-size": [{ bg: se() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  bf,
                  Q,
                  Z,
                ],
                radial: [``, Q, Z],
                conic: [bf, Q, Z],
              },
              Hf,
              If,
            ],
          },
        ],
        "bg-color": [{ bg: A() }],
        "gradient-from-pos": [{ from: ce() }],
        "gradient-via-pos": [{ via: ce() }],
        "gradient-to-pos": [{ to: ce() }],
        "gradient-from": [{ from: A() }],
        "gradient-via": [{ via: A() }],
        "gradient-to": [{ to: A() }],
        rounded: [{ rounded: le() }],
        "rounded-s": [{ "rounded-s": le() }],
        "rounded-e": [{ "rounded-e": le() }],
        "rounded-t": [{ "rounded-t": le() }],
        "rounded-r": [{ "rounded-r": le() }],
        "rounded-b": [{ "rounded-b": le() }],
        "rounded-l": [{ "rounded-l": le() }],
        "rounded-ss": [{ "rounded-ss": le() }],
        "rounded-se": [{ "rounded-se": le() }],
        "rounded-ee": [{ "rounded-ee": le() }],
        "rounded-es": [{ "rounded-es": le() }],
        "rounded-tl": [{ "rounded-tl": le() }],
        "rounded-tr": [{ "rounded-tr": le() }],
        "rounded-br": [{ "rounded-br": le() }],
        "rounded-bl": [{ "rounded-bl": le() }],
        "border-w": [{ border: M() }],
        "border-w-x": [{ "border-x": M() }],
        "border-w-y": [{ "border-y": M() }],
        "border-w-s": [{ "border-s": M() }],
        "border-w-e": [{ "border-e": M() }],
        "border-w-bs": [{ "border-bs": M() }],
        "border-w-be": [{ "border-be": M() }],
        "border-w-t": [{ "border-t": M() }],
        "border-w-r": [{ "border-r": M() }],
        "border-w-b": [{ "border-b": M() }],
        "border-w-l": [{ "border-l": M() }],
        "divide-x": [{ "divide-x": M() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": M() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...N(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...N(), `hidden`, `none`] }],
        "border-color": [{ border: A() }],
        "border-color-x": [{ "border-x": A() }],
        "border-color-y": [{ "border-y": A() }],
        "border-color-s": [{ "border-s": A() }],
        "border-color-e": [{ "border-e": A() }],
        "border-color-bs": [{ "border-bs": A() }],
        "border-color-be": [{ "border-be": A() }],
        "border-color-t": [{ "border-t": A() }],
        "border-color-r": [{ "border-r": A() }],
        "border-color-b": [{ "border-b": A() }],
        "border-color-l": [{ "border-l": A() }],
        "divide-color": [{ divide: A() }],
        "outline-style": [{ outline: [...N(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [X, Q, Z] }],
        "outline-w": [{ outline: [``, X, Rf, jf] }],
        "outline-color": [{ outline: A() }],
        shadow: [{ shadow: [``, `none`, u, Uf, Lf] }],
        "shadow-color": [{ shadow: A() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Uf, Lf] }],
        "inset-shadow-color": [{ "inset-shadow": A() }],
        "ring-w": [{ ring: M() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: A() }],
        "ring-offset-w": [{ "ring-offset": [X, jf] }],
        "ring-offset-color": [{ "ring-offset": A() }],
        "inset-ring-w": [{ "inset-ring": M() }],
        "inset-ring-color": [{ "inset-ring": A() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Uf, Lf] }],
        "text-shadow-color": [{ "text-shadow": A() }],
        opacity: [{ opacity: [X, Q, Z] }],
        "mix-blend": [
          { "mix-blend": [...ue(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": ue() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [X] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": P() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": P() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": A() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": A() }],
        "mask-image-t-from-pos": [{ "mask-t-from": P() }],
        "mask-image-t-to-pos": [{ "mask-t-to": P() }],
        "mask-image-t-from-color": [{ "mask-t-from": A() }],
        "mask-image-t-to-color": [{ "mask-t-to": A() }],
        "mask-image-r-from-pos": [{ "mask-r-from": P() }],
        "mask-image-r-to-pos": [{ "mask-r-to": P() }],
        "mask-image-r-from-color": [{ "mask-r-from": A() }],
        "mask-image-r-to-color": [{ "mask-r-to": A() }],
        "mask-image-b-from-pos": [{ "mask-b-from": P() }],
        "mask-image-b-to-pos": [{ "mask-b-to": P() }],
        "mask-image-b-from-color": [{ "mask-b-from": A() }],
        "mask-image-b-to-color": [{ "mask-b-to": A() }],
        "mask-image-l-from-pos": [{ "mask-l-from": P() }],
        "mask-image-l-to-pos": [{ "mask-l-to": P() }],
        "mask-image-l-from-color": [{ "mask-l-from": A() }],
        "mask-image-l-to-color": [{ "mask-l-to": A() }],
        "mask-image-x-from-pos": [{ "mask-x-from": P() }],
        "mask-image-x-to-pos": [{ "mask-x-to": P() }],
        "mask-image-x-from-color": [{ "mask-x-from": A() }],
        "mask-image-x-to-color": [{ "mask-x-to": A() }],
        "mask-image-y-from-pos": [{ "mask-y-from": P() }],
        "mask-image-y-to-pos": [{ "mask-y-to": P() }],
        "mask-image-y-from-color": [{ "mask-y-from": A() }],
        "mask-image-y-to-color": [{ "mask-y-to": A() }],
        "mask-image-radial": [{ "mask-radial": [Q, Z] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": P() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": P() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": A() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": A() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [X] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": P() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": P() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": A() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": A() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: j() }],
        "mask-repeat": [{ mask: oe() }],
        "mask-size": [{ mask: se() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Q, Z] }],
        filter: [{ filter: [``, `none`, Q, Z] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [X, Q, Z] }],
        contrast: [{ contrast: [X, Q, Z] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Uf, Lf] }],
        "drop-shadow-color": [{ "drop-shadow": A() }],
        grayscale: [{ grayscale: [``, X, Q, Z] }],
        "hue-rotate": [{ "hue-rotate": [X, Q, Z] }],
        invert: [{ invert: [``, X, Q, Z] }],
        saturate: [{ saturate: [X, Q, Z] }],
        sepia: [{ sepia: [``, X, Q, Z] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Q, Z] }],
        "backdrop-blur": [{ "backdrop-blur": de() }],
        "backdrop-brightness": [{ "backdrop-brightness": [X, Q, Z] }],
        "backdrop-contrast": [{ "backdrop-contrast": [X, Q, Z] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, X, Q, Z] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [X, Q, Z] }],
        "backdrop-invert": [{ "backdrop-invert": [``, X, Q, Z] }],
        "backdrop-opacity": [{ "backdrop-opacity": [X, Q, Z] }],
        "backdrop-saturate": [{ "backdrop-saturate": [X, Q, Z] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, X, Q, Z] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              Q,
              Z,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [X, `initial`, Q, Z] }],
        ease: [{ ease: [`linear`, `initial`, _, Q, Z] }],
        delay: [{ delay: [X, Q, Z] }],
        animate: [{ animate: [`none`, v, Q, Z] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, Q, Z] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: fe() }],
        "rotate-x": [{ "rotate-x": fe() }],
        "rotate-y": [{ "rotate-y": fe() }],
        "rotate-z": [{ "rotate-z": fe() }],
        scale: [{ scale: pe() }],
        "scale-x": [{ "scale-x": pe() }],
        "scale-y": [{ "scale-y": pe() }],
        "scale-z": [{ "scale-z": pe() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: me() }],
        "skew-x": [{ "skew-x": me() }],
        "skew-y": [{ "skew-y": me() }],
        transform: [{ transform: [Q, Z, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: he() }],
        "translate-x": [{ "translate-x": he() }],
        "translate-y": [{ "translate-y": he() }],
        "translate-z": [{ "translate-z": he() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [bf, Q, Z] }],
        accent: [{ accent: A() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: A() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Q,
              Z,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
        "scrollbar-track-color": [{ "scrollbar-track": A() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, Q, Z] },
        ],
        fill: [{ fill: [`none`, ...A()] }],
        "stroke-w": [{ stroke: [X, Rf, jf, Mf] }],
        stroke: [{ stroke: [`none`, ...A()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function np(...e) {
  return tp(Dd(e));
}
var rp = Ad(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          sunshine: `brand-button brand-button-sun`,
          ink: `brand-button brand-button-ink`,
          playful: `brand-button brand-button-outline`,
          nav: `brand-nav-link`,
          personality: `personality-button`,
          default: `bg-primary text-primary-foreground shadow hover:bg-primary/90`,
          destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,
          secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 px-4 py-2`,
          sm: `h-8 rounded-md px-3 text-xs`,
          lg: `h-10 rounded-md px-8`,
          icon: `h-9 w-9`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    }
  ),
  ip = V.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
      (0, H.jsx)(r ? md : `button`, {
        className: np(rp({ variant: t, size: n, className: e })),
        ref: a,
        ...i,
      })
  );
ip.displayName = `Button`;
var ap = {
    garden: {
      asset: {
        version: 1,
        asset_id: `cb4c9999-7fef-4dc0-bf03-109a9e7b3cc6`,
        project_id: `d3102db3-02b5-4665-a84f-8dd4d5297dc4`,
        url: `/__l5e/assets-v1/cb4c9999-7fef-4dc0-bf03-109a9e7b3cc6/higgsfield-pixar-garden-4k.webp`,
        r2_key: `a/v1/d3102db3-02b5-4665-a84f-8dd4d5297dc4/cb4c9999-7fef-4dc0-bf03-109a9e7b3cc6/higgsfield-pixar-garden-4k.webp`,
        original_filename: `higgsfield-pixar-garden-4k.webp`,
        size: 1828624,
        content_type: `image/webp`,
        created_at: `2026-10-14T22:30:48Z`,
      },
      width: 3840,
      height: 1648,
      groundY: 1368,
    },
    park: {
      asset: {
        version: 1,
        asset_id: `31fdee8b-17e3-4ff5-a968-0f79078a6b1d`,
        project_id: `d3102db3-02b5-4665-a84f-8dd4d5297dc4`,
        url: `/__l5e/assets-v1/31fdee8b-17e3-4ff5-a968-0f79078a6b1d/park-porch-4k.webp`,
        r2_key: `a/v1/d3102db3-02b5-4665-a84f-8dd4d5297dc4/31fdee8b-17e3-4ff5-a968-0f79078a6b1d/park-porch-4k.webp`,
        original_filename: `park-porch-4k.webp`,
        size: 2431760,
        content_type: `image/webp`,
        created_at: `2026-10-15T03:02:09Z`,
      },
      width: 3840,
      height: 1648,
      groundY: 1368,
    },
    interior: {
      asset: {
        version: 1,
        asset_id: `b578ef82-ec6b-4486-9fe2-e402de83f3ad`,
        project_id: `d3102db3-02b5-4665-a84f-8dd4d5297dc4`,
        url: `/__l5e/assets-v1/b578ef82-ec6b-4486-9fe2-e402de83f3ad/home-interior-4k.webp`,
        r2_key: `a/v1/d3102db3-02b5-4665-a84f-8dd4d5297dc4/b578ef82-ec6b-4486-9fe2-e402de83f3ad/home-interior-4k.webp`,
        original_filename: `home-interior-4k.webp`,
        size: 1384784,
        content_type: `image/webp`,
        created_at: `2026-10-15T03:02:18Z`,
      },
      width: 3840,
      height: 1648,
      groundY: 1368,
    },
  },
  op = [
    {
      id: `home`,
      title: `One body. Two brains. Neither in charge.`,
      place: `The backyard`,
      chapter: 0,
      lines: [],
    },
    {
      id: `kenny`,
      title: `Meet Kenny. And his better half.`,
      place: `The garden path`,
      chapter: 1,
      lines: [
        { speaker: `Kenny`, text: `Every stick is a networking opportunity.` },
      ],
      discovery: {
        id: `stick`,
        label: `Inspect Kenny’s stick`,
        lines: [
          { speaker: `Cat`, text: `Your professional network is a branch.` },
        ],
      },
    },
    {
      id: `about`,
      title: `About CatDog`,
      place: `The flowering gate`,
      chapter: 2,
      lines: [
        { speaker: `Cat`, text: `I said a short walk. Not a character arc.` },
      ],
    },
    {
      id: `pond`,
      title: `A very exclusive pond.`,
      place: `The park · pond & bridge`,
      lines: [
        {
          speaker: `Kenny`,
          text: `The ducks have rejected my friend request.`,
        },
      ],
      discovery: {
        id: `pond`,
        label: `Look across the pond`,
        lines: [
          { speaker: `Cat`, text: `They have excellent privacy settings.` },
        ],
      },
    },
    {
      id: `picnic`,
      title: `A meeting with an agenda.`,
      place: `The park · picnic blanket`,
      lines: [
        { speaker: `Kenny`, text: `I brought snacks.` },
        { speaker: `Cat`, text: `You brought a stick.` },
      ],
      discovery: {
        id: `picnic`,
        label: `Inspect the picnic basket`,
        lines: [
          {
            speaker: `Cat`,
            text: `A picnic. Finally, a meeting with an agenda.`,
          },
        ],
      },
    },
    {
      id: `porch`,
      title: `Our place. Our questionable decisions.`,
      place: `The cottage · open porch`,
      lines: [
        { speaker: `Cat`, text: `We share a body. The opinions are separate.` },
      ],
    },
    {
      id: `token`,
      title: `Tokenomics`,
      place: `The cottage · front steps`,
      chapter: 3,
      lines: [],
    },
    {
      id: `community`,
      title: `Same weird. Your tribe.`,
      place: `The cottage · all paws welcome`,
      chapter: 4,
      lines: [
        { speaker: `Kenny`, text: `One more lap?` },
        { speaker: `Cat`, text: `Contact my lawyer.` },
      ],
    },
  ],
  sp = [
    {
      id: `entry`,
      title: `Home is where the snacks are.`,
      place: `Inside · entrance & snacks`,
      lines: [
        { speaker: `Kenny`, text: `Home is where the snacks are.` },
        { speaker: `Cat`, text: `And where I judge your life choices.` },
      ],
      discovery: {
        id: `snacks`,
        label: `Inspect the snack jar`,
        lines: [
          { speaker: `Kenny`, text: `This jar understands me.` },
          { speaker: `Cat`, text: `It has a lid. Take the hint.` },
        ],
      },
    },
    {
      id: `sofa`,
      title: `Shared body. Private property.`,
      place: `Inside · the teal sofa`,
      lines: [
        {
          speaker: `Cat`,
          text: `This is my side of the sofa. So is that side.`,
        },
      ],
      discovery: {
        id: `sofa`,
        label: `Inspect the sofa cushions`,
        lines: [
          { speaker: `Kenny`, text: `Is there room for optimism?` },
          { speaker: `Cat`, text: `On the floor.` },
        ],
      },
    },
    {
      id: `tree`,
      title: `The upper management suite.`,
      place: `Inside · cat tree & sunny window`,
      lines: [{ speaker: `Cat`, text: `A corner office. Finally.` }],
      discovery: {
        id: `tree`,
        label: `Inspect the cat tree`,
        lines: [
          { speaker: `Kenny`, text: `How do we get up there?` },
          {
            speaker: `Cat`,
            text: `That is a you problem. Unfortunately, also a me problem.`,
          },
        ],
      },
    },
  ];
function cp(e, t, n) {
  let r = Math.max((e * 2.6) / 3840, n / 1368, (t - n) / 280);
  return {
    width: 3840 * r,
    top: n - 1368 * r,
    travel: Math.max(0, 3840 * r - e),
    scale: r,
  };
}
function lp(e, t) {
  let n = Math.min(1, Math.max(0, e)) * 7;
  if (n <= 1.5)
    return { scene: `garden`, pan: n / 1.5, blend: 0, distance: (n / 1.5) * t };
  let r = [0, 0, 0, 0.3, 0.6, 0.88, 0.94, 1],
    i = Math.floor(n),
    a = r[i] ?? 1,
    o = a + ((r[i + 1] ?? 1) - a) * (n - i),
    s = Math.min(1, (n - 1.5) / 0.5);
  return {
    scene: `park`,
    pan: o,
    blend: s * s * (3 - 2 * s),
    distance: t + o * t,
  };
}
function up(e, t, n) {
  let r = Math.min(1, Math.max(0, e));
  return { scene: `interior`, pan: 1 - r, blend: 1, distance: n - r * t };
}
function dp(e, t) {
  return Math.min(t - 1, Math.max(0, Math.floor(e * (t - 1) + 0.5)));
}
function fp(e, t) {
  return Math.min(t - 1, Math.max(0, e)) / Math.max(1, t - 1);
}
function pp({ scene: e, pan: t, blend: n, geometry: r }) {
  return (0, H.jsx)(`div`, {
    className: `garden-environment`,
    "aria-hidden": `true`,
    children: Object.entries(ap).map(([i, a]) =>
      (0, H.jsx)(
        `img`,
        {
          className: `higgsfield-panorama`,
          src: a.asset.url,
          alt: ``,
          width: a.width,
          height: a.height,
          fetchPriority: i === `garden` ? `high` : `auto`,
          draggable: !1,
          style: {
            width: r.width || void 0,
            top: r.top,
            transform: `translateX(${
              -r.travel * (i === `garden` && e === `park` ? 1 : t)
            }px)`,
            opacity:
              i === e
                ? e === `park`
                  ? n
                  : 1
                : +(i === `garden` && e === `park`),
          },
        },
        i
      )
    ),
  });
}
var $ = {
    version: 4,
    atlas: `catdog-natural-guided-walk.webp`,
    poster: `catdog-natural-guided-poster.webp`,
    posterFrame: 0,
    frameWidth: 960,
    frameHeight: 656,
    columns: 8,
    rows: 6,
    frameCount: 48,
    fps: 24,
    durationSeconds: 2,
    groundY: 631,
    groundRange: [623, 631],
    strideWidthRatio: 0.12938,
    sourceFrameIndices: [
      48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
      66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    ],
    sourceJobId: `3bc9f17b-76d0-4783-8070-672e9743f739`,
    sourceVideo: `https://d8j0ntlcm91z4.cloudfront.net/user_3JNwlPKicFh97dSXhxRSbS5Hein/hf_20261014_201327_3bc9f17b-76d0-4783-8070-672e9743f739.mp4`,
    motionGuideMediaId: `7fd7c0f0-5462-4b0a-be39-01b4bae0ac5a`,
    referencePhoto: `https://d2ol7oe51mr4n9.cloudfront.net/user_3JNwlPKicFh97dSXhxRSbS5Hein/e6447cd5-6872-4418-97e5-73851093fd74.png`,
    referencePhotoSHA256: `163efc9c3210def490cfdc37fc0c7b62b1a67249945f239c85dfafe56b077c54`,
    direction: `Increasing frame order is RIGHTWARD travel: Kenny anatomically forward, opposite-facing female cat backward. Decreasing frame order is LEFTWARD travel: cat forward, Kenny backward. Faces always toward viewer, cat LEFT and Kenny RIGHT. Never mirror or independently reverse either half.`,
    processing: `Whole consecutive Higgsfield Genjutsu rendered frames48..95 at native24fps. Green key/despill and one fixed crop/resize only. No generated-frame body deformation, frame reversal, split body, crossfade, pose invention or optical-flow interpolation.`,
    review: `Reviewed full 6-second clip and every frame of the selected2-second cycle. Four legs, one connected body, no tail or extra limb, both smiling faces toward viewer; low staggered lifts, flexible wrists/elbows and whole-body weight movement. User explicitly selected this version and requested putting it on the website on2026-10-14 at14:21 America/Edmonton.`,
    calibration: {
      method: `Visible near-paw contact-phase slopes relative to tracked torso; approximate front-ground stride calibration, not a claim of exact physical reconstruction. All four paw paths visually reviewed. Optical-flow individual-feature outliers were not treated as ground truth.`,
      contactSlopes: [-2.87677631680927, -2.729495478611366],
      sourceCropWidth: 1040,
    },
    atlasSHA256: `97c66c0747a4615f5a22128dc7f2a163a2aafcab1d7097339322b7f27951495c`,
  },
  mp = { width: 3840, height: 1648, groundY: 1368 };
function hp(e, t, n) {
  let r = Math.max(
    (e * 1.45) / mp.width,
    n / mp.groundY,
    (t - n) / (mp.height - mp.groundY)
  );
  return {
    width: mp.width * r,
    top: n - mp.groundY * r,
    travel: Math.max(0, mp.width * r - e),
    scale: r,
  };
}
function gp(e, t, n = !1) {
  if (n || t <= 0 || !Number.isFinite(e)) return 0;
  let r = t * $.strideWidthRatio;
  return (
    ((Math.floor((e / r) * $.frameCount + 1e-7) % $.frameCount) +
      $.frameCount) %
    $.frameCount
  );
}
function _p(e) {
  let t = ((Math.floor(e) % $.frameCount) + $.frameCount) % $.frameCount;
  return {
    x: (t % $.columns) * $.frameWidth,
    y: Math.floor(t / $.columns) * $.frameHeight,
    width: $.frameWidth,
    height: $.frameHeight,
  };
}
function vp(e, t, n, r) {
  let i = Math.min(1, Math.max(0, e)),
    a = 0;
  for (let e = 0; e < 64; e++) {
    let o = (i * (e + 0.5)) / 64;
    a += (t + ((n * Math.PI) / 2) * Math.cos((o * Math.PI) / 2)) / (1 + r * o);
  }
  return (a * i) / 64;
}
var yp = {
    version: 1,
    asset_id: `8917d344-9524-405e-9720-6fbcc4fbb577`,
    project_id: `d3102db3-02b5-4665-a84f-8dd4d5297dc4`,
    url: `/__l5e/assets-v1/8917d344-9524-405e-9720-6fbcc4fbb577/catdog-natural-guided-poster.webp`,
    r2_key: `a/v1/d3102db3-02b5-4665-a84f-8dd4d5297dc4/8917d344-9524-405e-9720-6fbcc4fbb577/catdog-natural-guided-poster.webp`,
    original_filename: `catdog-natural-guided-poster.webp`,
    size: 87162,
    content_type: `image/webp`,
    created_at: `2026-10-14T20:26:10Z`,
  },
  bp = {
    version: 1,
    asset_id: `40d57c2f-1cdf-4014-8af8-87fdda3dbe7e`,
    project_id: `d3102db3-02b5-4665-a84f-8dd4d5297dc4`,
    url: `/__l5e/assets-v1/40d57c2f-1cdf-4014-8af8-87fdda3dbe7e/catdog-natural-guided-walk.webp`,
    r2_key: `a/v1/d3102db3-02b5-4665-a84f-8dd4d5297dc4/40d57c2f-1cdf-4014-8af8-87fdda3dbe7e/catdog-natural-guided-walk.webp`,
    original_filename: `catdog-natural-guided-walk.webp`,
    size: 3633910,
    content_type: `image/webp`,
    created_at: `2026-10-14T20:26:11Z`,
  };
function xp({ progress: e, reduced: t, signedDistance: n }) {
  let r = (0, V.useRef)(null),
    i = (0, V.useRef)(null),
    a = (0, V.useRef)(null),
    o = (0, V.useRef)({ progress: e, reduced: t, signedDistance: n }),
    s = (0, V.useRef)(null),
    [c, l] = (0, V.useState)(!1),
    [u, d] = (0, V.useState)(0);
  return (
    (o.current = { progress: e, reduced: t, signedDistance: n }),
    (0, V.useEffect)(() => {
      let e = i.current,
        n = r.current,
        c = n?.closest(`.journey-viewport`);
      if (!e || !n || !c || t) {
        l(!1);
        return;
      }
      let u = e.getContext(`2d`);
      if (!u) return;
      let f = !1,
        p = () => {
          if (f || document.hidden || !a.current) return;
          let e = c.getBoundingClientRect(),
            t = n.getBoundingClientRect(),
            r = t.top - e.top + (t.height * $.groundY) / $.frameHeight,
            i = hp(e.width, e.height, r),
            s = o.current.progress,
            p =
              Number.parseFloat(
                getComputedStyle(n).getPropertyValue(`--mascot-zoom`)
              ) || 0,
            m =
              Number.parseFloat(
                getComputedStyle(n).getPropertyValue(`--character-drift`)
              ) || 0,
            h = t.width / (1 + p * s),
            g = gp(
              o.current.signedDistance ?? vp(s, i.travel, m * e.width, p),
              h,
              o.current.reduced
            ),
            _ = _p(g);
          u.clearRect(0, 0, $.frameWidth, $.frameHeight),
            (u.imageSmoothingEnabled = !0),
            (u.imageSmoothingQuality = `high`),
            u.drawImage(
              a.current,
              _.x,
              _.y,
              _.width,
              _.height,
              0,
              0,
              $.frameWidth,
              $.frameHeight
            ),
            d(g),
            l(!0);
        };
      s.current = p;
      let m = new Image();
      (m.onload = () => {
        if (!f) {
          if (
            m.naturalWidth !== $.columns * $.frameWidth ||
            m.naturalHeight !== $.rows * $.frameHeight
          ) {
            l(!1);
            return;
          }
          (a.current = m), p();
        }
      }),
        (m.onerror = () => {
          f || ((a.current = null), l(!1));
        }),
        (m.src = bp.url);
      let h = new ResizeObserver(p);
      return (
        h.observe(n),
        h.observe(c),
        document.addEventListener(`visibilitychange`, p),
        () => {
          (f = !0),
            (s.current = null),
            (a.current = null),
            (m.onload = null),
            (m.onerror = null),
            h.disconnect(),
            document.removeEventListener(`visibilitychange`, p);
        }
      );
    }, [t]),
    (0, V.useEffect)(() => {
      s.current?.();
    }, [e, t, n]),
    (0, H.jsxs)(`div`, {
      ref: r,
      className: `journey-mascot`,
      style: {
        transform: `scale(calc(1 + var(--mascot-zoom) * ${t ? 0 : e}))`,
        transformOrigin: `50% ${($.groundY / $.frameHeight) * 100}%`,
      },
      role: `img`,
      "aria-label": `CatDog: smiling camera-facing female cat left and Kenny right, one connected orange body and four paws; Kenny leads forward and cat steps backward on rightward travel, cat leads forward and Kenny steps backward on leftward travel`,
      "data-frame": c && !t ? u : $.posterFrame,
      "data-rig": c && !t ? `rendered-alpha-sprite` : `camera-facing-poster`,
      children: [
        (0, H.jsx)(`canvas`, {
          ref: i,
          width: $.frameWidth,
          height: $.frameHeight,
          "aria-hidden": `true`,
          hidden: !c || t,
        }),
        (!c || t) &&
          (0, H.jsx)(`img`, {
            src: yp.url,
            alt: ``,
            width: $.frameWidth,
            height: $.frameHeight,
          }),
      ],
    })
  );
}
var Sp = [`Home`, `Meet Kenny`, `About`, `Tokenomics`, `Community`];
function Cp(e, t = !1) {
  let n = Math.min(1, Math.max(0, e)),
    r = Math.min(4, Math.floor(n * 4 + 0.5));
  return {
    progress: n,
    chapter: r,
    distance: t ? r * 600 : n * 2400,
    phase: t ? 0 : n * Math.PI * 48,
    characterX: t ? 0 : Math.sin((n * Math.PI) / 2) * 3,
  };
}
var wp = class {
    context = null;
    enabled = !1;
    episodePlaying = !1;
    output = null;
    last = -1 / 0;
    visited = new Set();
    lastStage = -1;
    async toggle() {
      if (this.enabled) return (this.enabled = !1), !1;
      try {
        return (
          this.context ||
            ((this.context = new AudioContext()),
            (this.output = this.context.createGain()),
            (this.output.gain.value = +!this.episodePlaying),
            this.output.connect(this.context.destination)),
          await this.context.resume(),
          (this.enabled = this.context.state === `running`),
          this.enabled && this.play(`pop`, !0),
          this.enabled
        );
      } catch {
        return !1;
      }
    }
    play(e, t = !1) {
      let n = this.context,
        r = this.output;
      if (
        !n ||
        !r ||
        !this.enabled ||
        this.episodePlaying ||
        n.state !== `running`
      )
        return;
      let i = n.currentTime;
      if (!t && i - this.last < 0.55) return;
      this.last = i;
      let a = n.createOscillator(),
        o = n.createGain(),
        s = e === `meow` ? 650 : e === `woof` ? 150 : e === `boing` ? 220 : 820;
      (a.type = e === `woof` ? `triangle` : `sine`),
        a.frequency.setValueAtTime(s, i),
        a.frequency.exponentialRampToValueAtTime(
          e === `meow` ? 1050 : e === `boing` ? 680 : 65,
          i + 0.12
        ),
        a.frequency.exponentialRampToValueAtTime(
          e === `meow` ? 460 : 80,
          i + 0.24
        ),
        o.gain.setValueAtTime(0, i),
        o.gain.linearRampToValueAtTime(0.12, i + 0.015),
        o.gain.exponentialRampToValueAtTime(0.001, i + 0.28),
        a.connect(o),
        o.connect(r),
        a.start(i),
        a.stop(i + 0.3),
        (a.onended = () => {
          a.disconnect(), o.disconnect();
        });
    }
    stage(e, t) {
      let n = Math.min(4, Math.floor(e * 5));
      n !== this.lastStage &&
        ((this.lastStage = n),
        e < 0.04 && this.visited.clear(),
        !(t || this.visited.has(n)) &&
          (this.visited.add(n),
          n > 0 &&
            this.play([`pop`, `meow`, `woof`, `boing`, `pop`][n] ?? `pop`)));
    }
    setEpisodePlaying(e) {
      (this.episodePlaying = e), this.output && (this.output.gain.value = +!e);
    }
    dispose() {
      this.context?.close(),
        (this.context = null),
        (this.output = null),
        (this.enabled = !1),
        (this.episodePlaying = !1);
    }
  },
  Tp = `/downloads/CatDog-Transparent-Brand-Logo.png`,
  Ep = `0xDf062b333e6ecC732eE814A1fB6f8b2B610A4265`,
  Dp = `https://dexscreener.com/robinhood/0x2708178e89b1f79dd8cc2bd41c8f819dba5cee9387854ffafdcd8e55b8ebccfd`,
  Op = `https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xDf062b333e6ecC732eE814A1fB6f8b2B610A4265`,
  kp = [
    `THE BACKYARD`,
    `TWO PERSONALITIES. ONE BODY.`,
    `OUR LITTLE CORNER OF THE INTERNET`,
    `THE TOKEN`,
    `ALL PAWS WELCOME`,
  ];
function Ap() {
  let e = (0, V.useRef)(null),
    t = (0, V.useRef)(null),
    [n, r] = (0, V.useState)(0),
    [i, a] = (0, V.useState)(!1),
    [o, s] = (0, V.useState)(!1),
    [c, l] = (0, V.useState)(``),
    [u, d] = (0, V.useState)(!1),
    [f, p] = (0, V.useState)(!1),
    [m, h] = (0, V.useState)(!1),
    g = (0, V.useRef)({ progress: 5 / 7, distance: 0 }),
    _ = (0, V.useRef)(!1),
    v = (0, V.useRef)(!1);
  v.current = m;
  let [y, b] = (0, V.useState)({ width: 0, top: 0, travel: 0, scale: 1 }),
    [x, S] = (0, V.useState)([]),
    [C, w] = (0, V.useState)(!1),
    T = m ? sp : op,
    E = dp(n, T.length),
    D = T[E],
    O = m ? 0 : E <= 1 ? E : E <= 5 ? 2 : E - 3,
    ee = { ...Cp(n, i), chapter: O },
    te = m ? up(n, y.travel, g.current.distance) : lp(n, y.travel);
  (0, V.useEffect)(() => {
    let e = () => {
      let e = window.history.state?.catdogJourney;
      !e &&
        v.current &&
        (e = {
          inside: !1,
          progress: g.current.progress,
          checkpoint: g.current,
        }),
        !(!e || typeof e.inside != `boolean` || !Number.isFinite(e.progress)) &&
          (e.checkpoint &&
            Number.isFinite(e.checkpoint.distance) &&
            Number.isFinite(e.checkpoint.progress) &&
            (g.current = e.checkpoint),
          h(e.inside),
          w(!1),
          r(e.progress),
          requestAnimationFrame(() => ne(e.progress)));
    };
    return (
      window.history.state?.catdogJourney?.inside && e(),
      (_.current = !0),
      addEventListener(`popstate`, e),
      () => removeEventListener(`popstate`, e)
    );
  }, []),
    (0, V.useEffect)(() => {
      w(!1);
    }, [E, m]),
    (0, V.useEffect)(() => {
      let t = e.current?.querySelector(`.journey-viewport`),
        n = t?.querySelector(`.journey-mascot`);
      if (!t || !n) return;
      let r = () => {
          let e = t.getBoundingClientRect(),
            r = n.getBoundingClientRect();
          b(
            cp(
              e.width,
              e.height,
              r.top - e.top + (r.height * $.groundY) / $.frameHeight
            )
          );
        },
        i = new ResizeObserver(r);
      return i.observe(t), i.observe(n), r(), () => i.disconnect();
    }, []),
    (0, V.useEffect)(() => {
      let t = document.activeElement;
      t instanceof HTMLElement &&
        t.closest(`.journey-story[inert]`) &&
        e.current
          ?.querySelector(`.chapter-link[aria-current]`)
          ?.focus({ preventScroll: !0 });
    }, [ee.chapter]),
    (0, V.useEffect)(() => {
      let e = new wp();
      t.current = e;
      let n = matchMedia(`(prefers-reduced-motion: reduce)`),
        r = () => a(n.matches);
      return (
        r(),
        n.addEventListener(`change`, r),
        () => {
          e.dispose(), (t.current = null), n.removeEventListener(`change`, r);
        }
      );
    }, []),
    (0, V.useEffect)(() => {
      let t = 0,
        n = () => {
          t = 0;
          let n = e.current;
          if (!n || document.hidden) return;
          let i = n.offsetHeight - innerHeight;
          r(
            i > 0
              ? Math.min(1, Math.max(0, -n.getBoundingClientRect().top / i))
              : 0
          );
        },
        i = () => {
          !t && !document.hidden && (t = requestAnimationFrame(n));
        },
        a = () => {
          document.hidden ? (cancelAnimationFrame(t), (t = 0)) : i();
        };
      return (
        addEventListener(`scroll`, i, { passive: !0 }),
        addEventListener(`resize`, i),
        document.addEventListener(`visibilitychange`, a),
        i(),
        () => {
          cancelAnimationFrame(t),
            removeEventListener(`scroll`, i),
            removeEventListener(`resize`, i),
            document.removeEventListener(`visibilitychange`, a);
        }
      );
    }, []);
  let ne = (t, n = !1) => {
      let a = e.current;
      if (!a) return;
      let o = n && !i;
      window.scrollTo({
        top: a.offsetTop + t * (a.offsetHeight - innerHeight),
        behavior: o ? `smooth` : `instant`,
      }),
        o || r(t);
    },
    k = (t) => {
      t <= 0 &&
        document.activeElement?.getAttribute(`aria-label`) ===
          `Previous stop` &&
        e.current
          ?.querySelector(`.journey-controls button:last-child`)
          ?.focus({ preventScroll: !0 }),
        ne(fp(t, T.length), !0);
    },
    re = (e, t) => {
      e && (g.current = { progress: n, distance: te.distance }), h(e), w(!1);
      let i = e ? 0 : t ?? g.current.progress;
      window.history.pushState(
        {
          ...window.history.state,
          catdogJourney: { inside: e, progress: i, checkpoint: g.current },
        },
        ``
      ),
        r(i),
        requestAnimationFrame(() => ne(i));
    },
    ie = (e) => {
      let t = [0, 1 / 7, 2 / 7, 6 / 7, 1][e] ?? 0;
      m ? re(!1, t) : ne(t, !0);
    },
    ae = async () => {
      let e = await t.current?.toggle();
      s(!!e), l(e === !1 && !o ? `Sound is unavailable in this browser.` : ``);
    };
  return D
    ? (0, H.jsx)(`main`, {
        ref: e,
        className: `journey-track extended-track`,
        "data-inside": m,
        "aria-label": `CatDog’s garden, park and home journey`,
        children: (0, H.jsxs)(`div`, {
          className: `journey-viewport extended-world`,
          "data-home": !m && E === 0,
          "data-location": D.id,
          "data-scene": te.scene,
          "data-pan": te.pan.toFixed(5),
          "data-chapter": ee.chapter,
          "data-progress": ee.progress.toFixed(5),
          "data-distance": te.distance.toFixed(2),
          "data-reduced": i,
          onKeyDown: (e) => {
            e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              (e.target instanceof HTMLElement &&
                e.target.closest(`.journey-story`)) ||
              ((e.key === `ArrowRight` ||
                e.key === `ArrowLeft` ||
                e.key === `Home` ||
                e.key === `End`) &&
                (e.preventDefault(),
                k(
                  e.key === `Home`
                    ? 0
                    : e.key === `End`
                    ? T.length - 1
                    : E + (e.key === `ArrowRight` ? 1 : -1)
                )));
          },
          children: [
            (0, H.jsx)(pp, {
              scene: te.scene,
              pan: te.pan,
              blend: te.blend,
              geometry: y,
            }),
            (0, H.jsxs)(`header`, {
              className: `journey-header`,
              children: [
                (0, H.jsxs)(ip, {
                  variant: `ghost`,
                  className: `journey-home`,
                  "aria-label": `CatDog home`,
                  onClick: () => ie(0),
                  children: [
                    (0, H.jsx)(rd, {}),
                    (0, H.jsx)(`span`, { children: `CatDog` }),
                  ],
                }),
                (0, H.jsx)(`nav`, {
                  className: `journey-nav`,
                  "aria-label": `Journey chapters`,
                  children: Sp.map((e, t) =>
                    (0, H.jsx)(
                      ip,
                      {
                        variant: `ghost`,
                        className: `chapter-link`,
                        "aria-current": ee.chapter === t ? `step` : void 0,
                        onClick: () => ie(t),
                        children: e,
                      },
                      e
                    )
                  ),
                }),
                (0, H.jsxs)(ip, {
                  variant: `playful`,
                  className: `journey-sound`,
                  title: o ? `Turn sound off` : `Turn sound on`,
                  "aria-label": o ? `Turn sound off` : `Turn sound on`,
                  "aria-pressed": o,
                  onClick: () => void ae(),
                  children: [
                    o ? (0, H.jsx)(id, {}) : (0, H.jsx)(ad, {}),
                    (0, H.jsxs)(`span`, {
                      children: [`Sound `, o ? `on` : `off`],
                    }),
                  ],
                }),
              ],
            }),
            (0, H.jsxs)(`div`, {
              className: `journey-brand`,
              children: [
                (0, H.jsx)(`h1`, {
                  children: (0, H.jsx)(`img`, {
                    src: Tp,
                    alt: `CatDog`,
                    width: `2048`,
                    height: `682`,
                  }),
                }),
                !m &&
                  E === 0 &&
                  (0, H.jsxs)(`div`, {
                    className: `chain-signature hero-chain-signature`,
                    children: [
                      (0, H.jsx)(nd, { "aria-hidden": `true` }),
                      (0, H.jsx)(`span`, { children: `On Robinhood Chain` }),
                    ],
                  }),
              ],
            }),
            (0, H.jsx)(`div`, {
              className: `journey-story-zone`,
              children: Sp.map((e, n) =>
                (0, H.jsx)(
                  `div`,
                  {
                    className: `journey-panel-slot`,
                    hidden: m || D.chapter !== n,
                    children: (0, H.jsxs)(`section`, {
                      className: `journey-story story-${n}`,
                      inert: m || D.chapter !== n,
                      "aria-hidden": m || D.chapter !== n,
                      "aria-labelledby": `chapter-title-${n}`,
                      tabIndex: ee.chapter === n ? 0 : -1,
                      children: [
                        (0, H.jsxs)(`span`, {
                          className: `journey-eyebrow`,
                          children: [
                            (0, H.jsx)(`span`, { className: `story-marker` }),
                            kp[n],
                          ],
                        }),
                        n === 0 &&
                          (0, H.jsxs)(H.Fragment, {
                            children: [
                              (0, H.jsxs)(`h2`, {
                                id: `chapter-title-${n}`,
                                children: [
                                  `One body. Two brains.`,
                                  (0, H.jsx)(`br`, {}),
                                  `Neither in charge.`,
                                ],
                              }),
                              (0, H.jsx)(`p`, {
                                className: `home-line`,
                                children: `Half meow. Half woof. Fully unhinged.`,
                              }),
                            ],
                          }),
                        n === 1 &&
                          (0, H.jsxs)(H.Fragment, {
                            children: [
                              (0, H.jsxs)(`h2`, {
                                id: `chapter-title-${n}`,
                                children: [
                                  `Meet Kenny.`,
                                  (0, H.jsx)(`span`, {
                                    children: `And his better half.`,
                                  }),
                                ],
                              }),
                              (0, H.jsxs)(`div`, {
                                className: `personality-lines`,
                                children: [
                                  (0, H.jsxs)(`p`, {
                                    children: [
                                      (0, H.jsx)(`strong`, {
                                        children: `Kenny · he/him`,
                                      }),
                                      `The Shiba. Every ball is a life-changing opportunity.`,
                                    ],
                                  }),
                                  (0, H.jsxs)(`p`, {
                                    children: [
                                      (0, H.jsx)(`strong`, {
                                        children: `Cat · she/her`,
                                      }),
                                      `Dry wit. High standards. She did not approve this walk.`,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        n === 2 &&
                          (0, H.jsxs)(H.Fragment, {
                            children: [
                              (0, H.jsx)(`h2`, {
                                id: `chapter-title-${n}`,
                                children: `About CatDog`,
                              }),
                              (0, H.jsx)(`p`, {
                                className: `approved-about`,
                                children: `One body. Two brains. Neither in charge. 🐱🐶 CatDog brings cat attitude and Shiba chaos together in one gloriously confused meme. Half meow. Half woof. Fully unhinged.`,
                              }),
                            ],
                          }),
                        n === 3 &&
                          (0, H.jsxs)(H.Fragment, {
                            children: [
                              (0, H.jsxs)(`div`, {
                                className: `chain-signature`,
                                children: [
                                  (0, H.jsx)(nd, { "aria-hidden": `true` }),
                                  (0, H.jsx)(`span`, {
                                    children: `On Robinhood Chain`,
                                  }),
                                ],
                              }),
                              (0, H.jsx)(`h2`, {
                                id: `chapter-title-${n}`,
                                children: `Tokenomics`,
                              }),
                              (0, H.jsx)(`dl`, {
                                className: `token-details`,
                                children: (0, H.jsxs)(`div`, {
                                  children: [
                                    (0, H.jsx)(`dt`, { children: `CA` }),
                                    (0, H.jsxs)(`dd`, {
                                      className: `ca-row`,
                                      children: [
                                        (0, H.jsx)(`code`, { children: Ep }),
                                        (0, H.jsxs)(ip, {
                                          variant: `ghost`,
                                          className: `copy-ca`,
                                          "aria-label": `Copy contract address`,
                                          onClick: () => {
                                            navigator.clipboard
                                              ?.writeText(Ep)
                                              .catch(() => {}),
                                              p(!0),
                                              t.current?.play(`pop`);
                                          },
                                          children: [
                                            f
                                              ? (0, H.jsx)(ed, {
                                                  "aria-hidden": `true`,
                                                })
                                              : (0, H.jsx)(td, {
                                                  "aria-hidden": `true`,
                                                }),
                                            (0, H.jsx)(`span`, {
                                              className: `sr-only`,
                                              children: f
                                                ? `Copied`
                                                : `Copy contract address`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, H.jsx)(`div`, {
                                className: `community-links`,
                                children: (0, H.jsx)(ip, {
                                  variant: `ghost`,
                                  asChild: !0,
                                  children: (0, H.jsx)(`a`, {
                                    href: Dp,
                                    target: `_blank`,
                                    rel: `noopener noreferrer`,
                                    children: `View on Dex ↗`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        n === 4 &&
                          (0, H.jsxs)(H.Fragment, {
                            children: [
                              (0, H.jsx)(`h2`, {
                                id: `chapter-title-${n}`,
                                children: `Same weird. Your tribe.`,
                              }),
                              (0, H.jsxs)(`p`, {
                                children: [
                                  `Cat people. Dog people.`,
                                  (0, H.jsx)(`br`, {}),
                                  `Beautifully confused people.`,
                                ],
                              }),
                              (0, H.jsxs)(`div`, {
                                className: `community-links`,
                                children: [
                                  (0, H.jsx)(ip, {
                                    variant: `ghost`,
                                    asChild: !0,
                                    children: (0, H.jsx)(`a`, {
                                      href: `https://x.com/catdog_robinhud`,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      children: `X ↗`,
                                    }),
                                  }),
                                  (0, H.jsx)(ip, {
                                    variant: `ghost`,
                                    asChild: !0,
                                    children: (0, H.jsx)(`a`, {
                                      href: `https://t.me/catdog_onrobinhood`,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      children: `Telegram ↗`,
                                    }),
                                  }),
                                  (0, H.jsx)(ip, {
                                    variant: `ghost`,
                                    asChild: !0,
                                    children: (0, H.jsx)(`a`, {
                                      href: Dp,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      children: `Dex ↗`,
                                    }),
                                  }),
                                  (0, H.jsx)(ip, {
                                    variant: `ghost`,
                                    asChild: !0,
                                    children: (0, H.jsx)(`a`, {
                                      href: Op,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      children: `Uniswap ↗`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, H.jsxs)(ip, {
                                variant: `ghost`,
                                className: `nobody-button`,
                                onClick: () => {
                                  d((e) => !e), t.current?.play(`pop`);
                                },
                                children: [
                                  u ? `Still nobody.` : `Who is in charge?`,
                                  (0, H.jsx)(rd, {}),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  },
                  e
                )
              ),
            }),
            (0, H.jsxs)(
              `div`,
              {
                className: `journey-context`,
                children: [
                  (m || D.chapter === void 0) &&
                    (0, H.jsx)(`h2`, { children: D.title }),
                  (0, H.jsx)(`div`, {
                    className: `journey-dialogue`,
                    children: (C ? D.discovery?.lines ?? D.lines : D.lines).map(
                      (e, t) =>
                        (0, H.jsxs)(
                          `p`,
                          {
                            children: [
                              (0, H.jsx)(`strong`, { children: e.speaker }),
                              ` `,
                              e.text,
                            ],
                          },
                          t
                        )
                    ),
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `journey-actions`,
                    children: [
                      m &&
                        (0, H.jsxs)(ip, {
                          variant: `ghost`,
                          className: `portal-button`,
                          onClick: () => re(!1),
                          children: [`Back outside `, (0, H.jsx)($u, {})],
                        }),
                      D.discovery &&
                        (0, H.jsxs)(ip, {
                          variant: `ghost`,
                          className: `discovery-button`,
                          "aria-expanded": C,
                          onClick: () => {
                            w((e) => !e),
                              x.includes(D.discovery?.id ?? ``) ||
                                S((e) => [...e, D.discovery?.id ?? ``]);
                          },
                          children: [
                            (0, H.jsx)(rd, {}),
                            C ? `Dismiss discovery` : D.discovery.label,
                          ],
                        }),
                      !m &&
                        E === 5 &&
                        (0, H.jsxs)(ip, {
                          variant: `playful`,
                          className: `portal-button`,
                          onClick: () => re(!0),
                          children: [`Go inside `, (0, H.jsx)(Qu, {})],
                        }),
                    ],
                  }),
                ],
              },
              `${m}-${E}`
            ),
            (0, H.jsx)(`div`, {
              className: `journey-character-zone`,
              children: (0, H.jsx)(`div`, {
                className: `journey-character`,
                children: (0, H.jsx)(xp, {
                  progress: 0,
                  signedDistance: te.distance,
                  reduced: i,
                }),
              }),
            }),
            (0, H.jsxs)(`footer`, {
              className: `journey-controls`,
              children: [
                (0, H.jsx)(ip, {
                  variant: `playful`,
                  size: `icon`,
                  "aria-label": `Previous stop`,
                  title: `Previous stop`,
                  disabled: E === 0,
                  onClick: () => k(E - 1),
                  children: (0, H.jsx)(Qu, {}),
                }),
                (0, H.jsxs)(`div`, {
                  className: `journey-progress`,
                  children: [
                    (0, H.jsxs)(`span`, {
                      className: `progress-label`,
                      children: [
                        String(E + 1).padStart(2, `0`),
                        ` / `,
                        String(T.length).padStart(2, `0`),
                        ` · `,
                        D.place,
                      ],
                    }),
                    (0, H.jsxs)(`span`, {
                      className: `journey-scroll-cue`,
                      children: [
                        m ? `← Home` : `Garden → Park → Cottage`,
                        x.length > 0 ? ` · ${x.length}/6 discoveries` : ``,
                      ],
                    }),
                    (0, H.jsx)(`div`, {
                      className: `progress-track`,
                      role: `progressbar`,
                      "aria-label": `Journey progress`,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": Math.round(n * 100),
                      children: (0, H.jsx)(`span`, {
                        style: { transform: `scaleX(${n})` },
                      }),
                    }),
                  ],
                }),
                (0, H.jsx)(ip, {
                  variant: `sunshine`,
                  size: `icon`,
                  "aria-label":
                    E === T.length - 1 ? `Back to home` : `Next stop`,
                  title: E === T.length - 1 ? `Back to home` : `Next stop`,
                  onClick: () => k(E === T.length - 1 ? 0 : E + 1),
                  children: (0, H.jsx)($u, {}),
                }),
              ],
            }),
            (0, H.jsx)(`span`, {
              className: `journey-announcement`,
              role: `status`,
              children: c,
            }),
            (0, H.jsxs)(`span`, {
              className: `sr-only`,
              role: `status`,
              "aria-live": `polite`,
              "aria-atomic": `true`,
              children: [`Stop `, E + 1, ` of `, T.length, `: `, D.place],
            }),
          ],
        }),
      })
    : null;
}
var jp = `CatDog — One body. Two brains. Neither in charge.`,
  Mp = `One body. Two brains. Neither in charge. 🐱🐶 CatDog brings cat attitude and Shiba chaos together in one gloriously confused meme. Half meow. Half woof. Fully unhinged.`,
  Np = il(`/`)({
    component: Pp,
    head: () => ({
      meta: [
        { title: jp },
        { name: `description`, content: Mp },
        { property: `og:title`, content: jp },
        { property: `og:description`, content: Mp },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
  });
function Pp() {
  return (0, H.jsx)(Ap, {});
}
var Fp = {
    IndexRoute: Np.update({ id: `/`, path: `/`, getParentRoute: () => Hu }),
  },
  Ip = Hu._addFileChildren(Fp),
  Lp = () =>
    bl({
      routeTree: Ip,
      context: { queryClient: new Nu() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function Rp() {
  let e = await Lp(),
    t;
  if (Rl) {
    let n = await Rl.getOptions();
    (n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr);
  } else
    (t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t });
  return (
    t.push(zs),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.ids.get().length || (await Hn(e)),
    e
  );
}
var zp = Rp;
function Bp() {
  return zp().finally(() => window.$_TSR?.h());
}
var Vp;
function Hp() {
  return (
    (Vp ||= Bp()),
    (0, H.jsx)(Ws, {
      promise: Vp,
      children: (e) => (0, H.jsx)(Cl, { router: e }),
    })
  );
}
var Up = g();
(0, V.startTransition)(() => {
  (0, Up.hydrateRoot)(
    document,
    (0, H.jsx)(V.StrictMode, { children: (0, H.jsx)(Hp, {}) })
  );
});
