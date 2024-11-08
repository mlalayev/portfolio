(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [664],
  {
    1516: function (e, t) {
      "use strict";
      function n(e, t, n, o) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5569: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return C;
          },
        });
      let o = n(4788),
        r = n(8754),
        l = n(224),
        u = r._(n(7294)),
        a = n(4532),
        f = n(3353),
        c = n(1410),
        i = n(9064),
        s = n(370),
        d = n(9955),
        p = n(4224),
        y = n(508),
        h = n(1516),
        b = n(4266),
        v = new Set();
      function g(e, t, n, o, r) {
        if (r || (0, f.isLocalURL)(t)) {
          if (!o.bypassPrefetchedCheck) {
            let r =
                void 0 !== o.locale
                  ? o.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              l = t + "%" + n + "%" + r;
            if (v.has(l)) return;
            v.add(l);
          }
          Promise.resolve(e.prefetch(t, n, o)).catch((e) => {});
        }
      }
      function _(e) {
        return "string" == typeof e ? e : (0, c.formatUrl)(e);
      }
      let m = u.default.forwardRef(function (e, t) {
          let n, r;
          let {
              href: c,
              as: v,
              children: m,
              prefetch: C,
              passHref: M,
              replace: j,
              shallow: k,
              scroll: P,
              locale: E,
              onClick: O,
              onMouseEnter: x,
              onTouchStart: L,
              legacyBehavior: w = !1,
            } = e,
            R = l._(e, [
              "href",
              "as",
              "children",
              "prefetch",
              "passHref",
              "replace",
              "shallow",
              "scroll",
              "locale",
              "onClick",
              "onMouseEnter",
              "onTouchStart",
              "legacyBehavior",
            ]);
          (n = m),
            w &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = u.default.createElement("a", null, n));
          let I = !1 !== C,
            S = u.default.useContext(d.RouterContext),
            T = u.default.useContext(p.AppRouterContext),
            U = null != S ? S : T,
            A = !S,
            { href: D, as: K } = u.default.useMemo(() => {
              if (!S) {
                let e = _(c);
                return { href: e, as: v ? _(v) : e };
              }
              let [e, t] = (0, a.resolveHref)(S, c, !0);
              return { href: e, as: v ? (0, a.resolveHref)(S, v) : t || e };
            }, [S, c, v]),
            N = u.default.useRef(D),
            H = u.default.useRef(K);
          w && (r = u.default.Children.only(n));
          let B = w ? r && "object" == typeof r && r.ref : t,
            [q, z, F] = (0, y.useIntersection)({ rootMargin: "200px" }),
            G = u.default.useCallback(
              (e) => {
                (H.current !== K || N.current !== D) &&
                  (F(), (H.current = K), (N.current = D)),
                  q(e),
                  B &&
                    ("function" == typeof B
                      ? B(e)
                      : "object" == typeof B && (B.current = e));
              },
              [K, B, D, F, q]
            );
          u.default.useEffect(() => {
            U && z && I && g(U, D, K, { locale: E }, A);
          }, [K, D, z, E, I, null == S ? void 0 : S.locale, U, A]);
          let J = {
            ref: G,
            onClick(e) {
              w || "function" != typeof O || O(e),
                w &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                U &&
                  !e.defaultPrevented &&
                  (function (e, t, n, o, r, l, a, c, i, s) {
                    let { nodeName: d } = e.currentTarget,
                      p = "A" === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          n = t.getAttribute("target");
                        return (
                          (n && "_self" !== n) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!i && !(0, f.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let y = () => {
                      "beforePopState" in t
                        ? t[r ? "replace" : "push"](n, o, {
                            shallow: l,
                            locale: c,
                            scroll: a,
                          })
                        : t[r ? "replace" : "push"](o || n, {
                            forceOptimisticNavigation: !s,
                          });
                    };
                    i ? u.default.startTransition(y) : y();
                  })(e, U, D, K, j, k, P, E, A, I);
            },
            onMouseEnter(e) {
              w || "function" != typeof x || x(e),
                w &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                U &&
                  (I || !A) &&
                  g(
                    U,
                    D,
                    K,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    A
                  );
            },
            onTouchStart(e) {
              w || "function" != typeof L || L(e),
                w &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                U &&
                  (I || !A) &&
                  g(
                    U,
                    D,
                    K,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    A
                  );
            },
          };
          if ((0, i.isAbsoluteUrl)(K)) J.href = K;
          else if (!w || M || ("a" === r.type && !("href" in r.props))) {
            let e = void 0 !== E ? E : null == S ? void 0 : S.locale,
              t =
                (null == S ? void 0 : S.isLocaleDomain) &&
                (0, h.getDomainLocale)(
                  K,
                  e,
                  null == S ? void 0 : S.locales,
                  null == S ? void 0 : S.domainLocales
                );
            J.href =
              t ||
              (0, b.addBasePath)(
                (0, s.addLocale)(K, e, null == S ? void 0 : S.defaultLocale)
              );
          }
          return w
            ? u.default.cloneElement(r, J)
            : u.default.createElement("a", o._({}, R, J), n);
        }),
        C = m;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    508: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let o = n(7294),
        r = n(29),
        l = "function" == typeof IntersectionObserver,
        u = new Map(),
        a = [];
      function f(e) {
        let { rootRef: t, rootMargin: n, disabled: f } = e,
          c = f || !l,
          [i, s] = (0, o.useState)(!1),
          d = (0, o.useRef)(null),
          p = (0, o.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, o.useEffect)(() => {
          if (l) {
            if (c || i) return;
            let e = d.current;
            if (e && e.tagName) {
              let o = (function (e, t, n) {
                let {
                  id: o,
                  observer: r,
                  elements: l,
                } = (function (e) {
                  let t;
                  let n = { root: e.root || null, margin: e.rootMargin || "" },
                    o = a.find(
                      (e) => e.root === n.root && e.margin === n.margin
                    );
                  if (o && (t = u.get(o))) return t;
                  let r = new Map(),
                    l = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = r.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n);
                      });
                    }, e);
                  return (
                    (t = { id: n, observer: l, elements: r }),
                    a.push(n),
                    u.set(n, t),
                    t
                  );
                })(n);
                return (
                  l.set(e, t),
                  r.observe(e),
                  function () {
                    if ((l.delete(e), r.unobserve(e), 0 === l.size)) {
                      r.disconnect(), u.delete(o);
                      let e = a.findIndex(
                        (e) => e.root === o.root && e.margin === o.margin
                      );
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && s(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n,
              });
              return o;
            }
          } else if (!i) {
            let e = (0, r.requestIdleCallback)(() => s(!0));
            return () => (0, r.cancelIdleCallback)(e);
          }
        }, [c, n, t, i, d.current]);
        let y = (0, o.useCallback)(() => {
          s(!1);
        }, []);
        return [p, i, y];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1664: function (e, t, n) {
      e.exports = n(5569);
    },
  },
]);
