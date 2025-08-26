"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [27], {
        9205: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return l
                }
            });
            var n = i(2265);
            let r = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                s = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return e.filter((t, e, i) => !!t && i.indexOf(t) === e).join(" ")
                };
            var o = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let a = (0, n.forwardRef)((t, e) => {
                    let {
                        color: i = "currentColor",
                        size: r = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: l,
                        className: u = "",
                        children: h,
                        iconNode: c,
                        ...d
                    } = t;
                    return (0, n.createElement)("svg", {
                        ref: e,
                        ...o,
                        width: r,
                        height: r,
                        stroke: i,
                        strokeWidth: l ? 24 * Number(a) / Number(r) : a,
                        className: s("lucide", u),
                        ...d
                    }, [...c.map(t => {
                        let [e, i] = t;
                        return (0, n.createElement)(e, i)
                    }), ...Array.isArray(h) ? h : [h]])
                }),
                l = (t, e) => {
                    let i = (0, n.forwardRef)((i, o) => {
                        let {
                            className: l,
                            ...u
                        } = i;
                        return (0, n.createElement)(a, {
                            ref: o,
                            iconNode: e,
                            className: s("lucide-".concat(r(t)), l),
                            ...u
                        })
                    });
                    return i.displayName = "".concat(t), i
                }
        },
        2489: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, i(9205).Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        3145: function(t, e, i) {
            i.d(e, {
                default: function() {
                    return r.a
                }
            });
            var n = i(8461),
                r = i.n(n)
        },
        9376: function(t, e, i) {
            var n = i(5475);
            i.o(n, "usePathname") && i.d(e, {
                usePathname: function() {
                    return n.usePathname
                }
            }), i.o(n, "useRouter") && i.d(e, {
                useRouter: function() {
                    return n.useRouter
                }
            })
        },
        5449: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "addLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i(8521);
            let n = function(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                return t
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6958: function(t, e, i) {
            function n(t, e, i, n) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i(8521), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5878: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let n = i(7043),
                r = i(3099),
                s = i(7437),
                o = r._(i(2265)),
                a = n._(i(4887)),
                l = n._(i(8293)),
                u = i(5346),
                h = i(128),
                c = i(2589);
            i(1765);
            let d = i(5523),
                f = n._(i(5084)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function m(t, e, i, n, r, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && r(!0), null == i ? void 0 : i.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                r = !1;
                            i.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => r,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    r = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function g(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let v = (0, o.forwardRef)((t, e) => {
                let {
                    src: i,
                    srcSet: n,
                    sizes: r,
                    height: a,
                    width: l,
                    decoding: u,
                    className: h,
                    style: c,
                    fetchPriority: d,
                    placeholder: f,
                    loading: p,
                    unoptimized: v,
                    fill: y,
                    onLoadRef: x,
                    onLoadingCompleteRef: P,
                    setBlurComplete: b,
                    setShowAltText: w,
                    sizesInput: S,
                    onLoad: T,
                    onError: A,
                    ...C
                } = t;
                return (0, s.jsx)("img", { ...C,
                    ...g(d),
                    loading: p,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": y ? "fill" : "1",
                    className: h,
                    style: c,
                    sizes: r,
                    srcSet: n,
                    src: i,
                    ref: (0, o.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && m(t, f, x, P, b, v, S))
                    }, [i, f, x, P, b, A, v, S, e]),
                    onLoad: t => {
                        m(t.currentTarget, f, x, P, b, v, S)
                    },
                    onError: t => {
                        w(!0), "empty" !== f && b(!0), A && A(t)
                    }
                })
            });

            function y(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: i
                } = t, n = {
                    as: "image",
                    imageSrcSet: i.srcSet,
                    imageSizes: i.sizes,
                    crossOrigin: i.crossOrigin,
                    referrerPolicy: i.referrerPolicy,
                    ...g(i.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(i.src, n), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: i.srcSet ? void 0 : i.src,
                        ...n
                    }, "__nimg-" + i.src + i.srcSet + i.sizes)
                })
            }
            let x = (0, o.forwardRef)((t, e) => {
                let i = (0, o.useContext)(d.RouterContext),
                    n = (0, o.useContext)(c.ImageConfigContext),
                    r = (0, o.useMemo)(() => {
                        let t = p || n || h.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            i = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: i
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    m = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    m.current = a
                }, [a]);
                let g = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [x, P] = (0, o.useState)(!1), [b, w] = (0, o.useState)(!1), {
                    props: S,
                    meta: T
                } = (0, u.getImgProps)(t, {
                    defaultLoader: f.default,
                    imgConf: r,
                    blurComplete: x,
                    showAltText: b
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(v, { ...S,
                        unoptimized: T.unoptimized,
                        placeholder: T.placeholder,
                        fill: T.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: g,
                        setBlurComplete: P,
                        setShowAltText: w,
                        sizesInput: t.sizes,
                        ref: e
                    }), T.priority ? (0, s.jsx)(y, {
                        isAppRouter: !i,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        2972: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return P
                }
            });
            let n = i(7043),
                r = i(7437),
                s = n._(i(2265)),
                o = i(5246),
                a = i(3552),
                l = i(7497),
                u = i(3987),
                h = i(5449),
                c = i(5523),
                d = i(1956),
                f = i(6081),
                p = i(6958),
                m = i(1634),
                g = i(4673),
                v = new Set;

            function y(t, e, i, n, r, s) {
                if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
                    if (!n.bypassPrefetchedCheck) {
                        let r = e + "%" + i + "%" + (void 0 !== n.locale ? n.locale : "locale" in t ? t.locale : void 0);
                        if (v.has(r)) return;
                        v.add(r)
                    }(async () => s ? t.prefetch(e, r) : t.prefetch(e, i, n))().catch(t => {})
                }
            }

            function x(t) {
                return "string" == typeof t ? t : (0, l.formatUrl)(t)
            }
            let P = s.default.forwardRef(function(t, e) {
                let i, n;
                let {
                    href: l,
                    as: v,
                    children: P,
                    prefetch: b = null,
                    passHref: w,
                    replace: S,
                    shallow: T,
                    scroll: A,
                    locale: C,
                    onClick: M,
                    onMouseEnter: E,
                    onTouchStart: R,
                    legacyBehavior: j = !1,
                    ...k
                } = t;
                i = P, j && ("string" == typeof i || "number" == typeof i) && (i = (0, r.jsx)("a", {
                    children: i
                }));
                let V = s.default.useContext(c.RouterContext),
                    D = s.default.useContext(d.AppRouterContext),
                    O = null != V ? V : D,
                    L = !V,
                    _ = !1 !== b,
                    F = null === b ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
                    {
                        href: I,
                        as: B
                    } = s.default.useMemo(() => {
                        if (!V) {
                            let t = x(l);
                            return {
                                href: t,
                                as: v ? x(v) : t
                            }
                        }
                        let [t, e] = (0, o.resolveHref)(V, l, !0);
                        return {
                            href: t,
                            as: v ? (0, o.resolveHref)(V, v) : e || t
                        }
                    }, [V, l, v]),
                    W = s.default.useRef(I),
                    N = s.default.useRef(B);
                j && (n = s.default.Children.only(i));
                let U = j ? n && "object" == typeof n && n.ref : e,
                    [$, z, X] = (0, f.useIntersection)({
                        rootMargin: "200px"
                    }),
                    K = s.default.useCallback(t => {
                        (N.current !== B || W.current !== I) && (X(), N.current = B, W.current = I), $(t), U && ("function" == typeof U ? U(t) : "object" == typeof U && (U.current = t))
                    }, [B, U, I, X, $]);
                s.default.useEffect(() => {
                    O && z && _ && y(O, I, B, {
                        locale: C
                    }, {
                        kind: F
                    }, L)
                }, [B, I, z, C, _, null == V ? void 0 : V.locale, O, L, F]);
                let Y = {
                    ref: K,
                    onClick(t) {
                        j || "function" != typeof M || M(t), j && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), O && !t.defaultPrevented && function(t, e, i, n, r, o, l, u, h) {
                            let {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && (function(t) {
                                    let e = t.currentTarget.getAttribute("target");
                                    return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                }(t) || !h && !(0, a.isLocalURL)(i))) return;
                            t.preventDefault();
                            let d = () => {
                                let t = null == l || l;
                                "beforePopState" in e ? e[r ? "replace" : "push"](i, n, {
                                    shallow: o,
                                    locale: u,
                                    scroll: t
                                }) : e[r ? "replace" : "push"](n || i, {
                                    scroll: t
                                })
                            };
                            h ? s.default.startTransition(d) : d()
                        }(t, O, I, B, S, T, A, C, L)
                    },
                    onMouseEnter(t) {
                        j || "function" != typeof E || E(t), j && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), O && (_ || !L) && y(O, I, B, {
                            locale: C,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: F
                        }, L)
                    },
                    onTouchStart: function(t) {
                        j || "function" != typeof R || R(t), j && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), O && (_ || !L) && y(O, I, B, {
                            locale: C,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: F
                        }, L)
                    }
                };
                if ((0, u.isAbsoluteUrl)(B)) Y.href = B;
                else if (!j || w || "a" === n.type && !("href" in n.props)) {
                    let t = void 0 !== C ? C : null == V ? void 0 : V.locale,
                        e = (null == V ? void 0 : V.isLocaleDomain) && (0, p.getDomainLocale)(B, t, null == V ? void 0 : V.locales, null == V ? void 0 : V.domainLocales);
                    Y.href = e || (0, m.addBasePath)((0, h.addLocale)(B, t, null == V ? void 0 : V.defaultLocale))
                }
                return j ? s.default.cloneElement(n, Y) : (0, r.jsx)("a", { ...k,
                    ...Y,
                    children: i
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3515: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    cancelIdleCallback: function() {
                        return n
                    },
                    requestIdleCallback: function() {
                        return i
                    }
                });
            let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    let e = Date.now();
                    return self.setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5246: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            let n = i(8637),
                r = i(7497),
                s = i(7053),
                o = i(3987),
                a = i(8521),
                l = i(3552),
                u = i(6279),
                h = i(7205);

            function c(t, e, i) {
                let c;
                let d = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
                    f = d.match(/^[a-zA-Z]{1,}:\/\//),
                    p = f ? d.slice(f[0].length) : d;
                if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + d + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let e = (0, o.normalizeRepeatedSlashes)(p);
                    d = (f ? f[0] : "") + e
                }
                if (!(0, l.isLocalURL)(d)) return i ? [d] : d;
                try {
                    c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n")
                } catch (t) {
                    c = new URL("/", "http://n")
                }
                try {
                    let t = new URL(d, c);
                    t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
                    let e = "";
                    if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
                        let i = (0, n.searchParamsToUrlQuery)(t.searchParams),
                            {
                                result: o,
                                params: a
                            } = (0, h.interpolateAs)(t.pathname, t.pathname, i);
                        o && (e = (0, r.formatWithValidation)({
                            pathname: o,
                            hash: t.hash,
                            query: (0, s.omit)(i, a)
                        }))
                    }
                    let o = t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
                    return i ? [o, e || o] : o
                } catch (t) {
                    return i ? [d] : d
                }
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6081: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let n = i(2265),
                r = i(3515),
                s = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function l(t) {
                let {
                    rootRef: e,
                    rootMargin: i,
                    disabled: l
                } = t, u = l || !s, [h, c] = (0, n.useState)(!1), d = (0, n.useRef)(null), f = (0, n.useCallback)(t => {
                    d.current = t
                }, []);
                return (0, n.useEffect)(() => {
                    if (s) {
                        if (u || h) return;
                        let t = d.current;
                        if (t && t.tagName) return function(t, e, i) {
                            let {
                                id: n,
                                observer: r,
                                elements: s
                            } = function(t) {
                                let e;
                                let i = {
                                        root: t.root || null,
                                        margin: t.rootMargin || ""
                                    },
                                    n = a.find(t => t.root === i.root && t.margin === i.margin);
                                if (n && (e = o.get(n))) return e;
                                let r = new Map;
                                return e = {
                                    id: i,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = r.get(t.target),
                                                i = t.isIntersecting || t.intersectionRatio > 0;
                                            e && i && e(i)
                                        })
                                    }, t),
                                    elements: r
                                }, a.push(i), o.set(i, e), e
                            }(i);
                            return s.set(t, e), r.observe(t),
                                function() {
                                    if (s.delete(t), r.unobserve(t), 0 === s.size) {
                                        r.disconnect(), o.delete(n);
                                        let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                        t > -1 && a.splice(t, 1)
                                    }
                                }
                        }(t, t => t && c(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: i
                        })
                    } else if (!h) {
                        let t = (0, r.requestIdleCallback)(() => c(!0));
                        return () => (0, r.cancelIdleCallback)(t)
                    }
                }, [u, i, e, h, d.current]), [f, h, (0, n.useCallback)(() => {
                    c(!1)
                }, [])]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1436: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(7043)._(i(2265)).default.createContext({})
        },
        9019: function(t, e) {
            function i(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: i = !1,
                    hasQuery: n = !1
                } = void 0 === t ? {} : t;
                return e || i && n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        42: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let i = /[|\\{}()[\]^$+*?.-]/,
                n = /[|\\{}()[\]^$+*?.-]/g;

            function r(t) {
                return i.test(t) ? t.replace(n, "\\$&") : t
            }
        },
        5346: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), i(1765);
            let n = i(6496),
                r = i(128);

            function s(t) {
                return void 0 !== t.default
            }

            function o(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var i;
                let a, l, u, {
                        src: h,
                        sizes: c,
                        unoptimized: d = !1,
                        priority: f = !1,
                        loading: p,
                        className: m,
                        quality: g,
                        width: v,
                        height: y,
                        fill: x = !1,
                        style: P,
                        overrideSrc: b,
                        onLoad: w,
                        onLoadingComplete: S,
                        placeholder: T = "empty",
                        blurDataURL: A,
                        fetchPriority: C,
                        decoding: M = "async",
                        layout: E,
                        objectFit: R,
                        objectPosition: j,
                        lazyBoundary: k,
                        lazyRoot: V,
                        ...D
                    } = t,
                    {
                        imgConf: O,
                        showAltText: L,
                        blurComplete: _,
                        defaultLoader: F
                    } = e,
                    I = O || r.imageConfigDefault;
                if ("allSizes" in I) a = I;
                else {
                    let t = [...I.deviceSizes, ...I.imageSizes].sort((t, e) => t - e),
                        e = I.deviceSizes.sort((t, e) => t - e);
                    a = { ...I,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === F) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let B = D.loader || F;
                delete D.loader, delete D.srcSet;
                let W = "__next_img_default" in B;
                if (W) {
                    if ("custom" === a.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = B;
                    B = e => {
                        let {
                            config: i,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (E) {
                    "fill" === E && (x = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[E];
                    t && (P = { ...P,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[E];
                    e && !c && (c = e)
                }
                let N = "",
                    U = o(v),
                    $ = o(y);
                if ("object" == typeof(i = h) && (s(i) || void 0 !== i.src)) {
                    let t = s(h) ? h.default : h;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, A = A || t.blurDataURL, N = t.src, !x) {
                        if (U || $) {
                            if (U && !$) {
                                let e = U / t.width;
                                $ = Math.round(t.height * e)
                            } else if (!U && $) {
                                let e = $ / t.height;
                                U = Math.round(t.width * e)
                            }
                        } else U = t.width, $ = t.height
                    }
                }
                let z = !f && ("lazy" === p || void 0 === p);
                (!(h = "string" == typeof h ? h : N) || h.startsWith("data:") || h.startsWith("blob:")) && (d = !0, z = !1), a.unoptimized && (d = !0), W && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0), f && (C = "high");
                let X = o(g),
                    K = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: R,
                        objectPosition: j
                    } : {}, L ? {} : {
                        color: "transparent"
                    }, P),
                    Y = _ || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: U,
                        heightInt: $,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: A || "",
                        objectFit: K.objectFit
                    }) + '")' : 'url("' + T + '")',
                    G = Y ? {
                        backgroundSize: K.objectFit || "cover",
                        backgroundPosition: K.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: Y
                    } : {},
                    Z = function(t) {
                        let {
                            config: e,
                            src: i,
                            unoptimized: n,
                            width: r,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (n) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, i) {
                            let {
                                deviceSizes: n,
                                allSizes: r
                            } = t;
                            if (i) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: r.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))],
                                kind: "x"
                            }
                        }(e, r, o), h = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, n) => a({
                                config: e,
                                src: i,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: i,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: a,
                        src: h,
                        unoptimized: d,
                        width: U,
                        quality: X,
                        sizes: c,
                        loader: B
                    });
                return {
                    props: { ...D,
                        loading: z ? "lazy" : p,
                        fetchPriority: C,
                        width: U,
                        height: $,
                        decoding: M,
                        className: m,
                        style: { ...K,
                            ...G
                        },
                        sizes: Z.sizes,
                        srcSet: Z.srcSet,
                        src: b || Z.src
                    },
                    meta: {
                        unoptimized: d,
                        priority: f,
                        placeholder: T,
                        fill: x
                    }
                }
            }
        },
        8293: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return m
                    },
                    defaultHead: function() {
                        return c
                    }
                });
            let n = i(7043),
                r = i(3099),
                s = i(7437),
                o = r._(i(2265)),
                a = n._(i(7421)),
                l = i(1436),
                u = i(8701),
                h = i(9019);

            function c(t) {
                void 0 === t && (t = !1);
                let e = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function d(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            i(1765);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(t, e) {
                let {
                    inAmpMode: i
                } = e;
                return t.reduce(d, []).reverse().concat(c(i).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        i = new Set,
                        n = {};
                    return r => {
                        let s = !0,
                            o = !1;
                        if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
                            o = !0;
                            let e = r.key.slice(r.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (r.type) {
                            case "title":
                            case "base":
                                e.has(r.type) ? s = !1 : e.add(r.type);
                                break;
                            case "meta":
                                for (let t = 0, e = f.length; t < e; t++) {
                                    let e = f[t];
                                    if (r.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) i.has(e) ? s = !1 : i.add(e);
                                        else {
                                            let t = r.props[e],
                                                i = n[e] || new Set;
                                            ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), n[e] = i)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = { ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
                    }
                    return o.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let m = function(t) {
                let {
                    children: e
                } = t, i = (0, o.useContext)(l.AmpStateContext), n = (0, o.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(a.default, {
                    reduceComponentsToState: p,
                    headManager: n,
                    inAmpMode: (0, h.isInAmpMode)(i),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6496: function(t, e) {
            function i(t) {
                let {
                    widthInt: e,
                    heightInt: i,
                    blurWidth: n,
                    blurHeight: r,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = n ? 40 * n : e, l = r ? 40 * r : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        2589: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(7043)._(i(2265)),
                r = i(128),
                s = n.default.createContext(r.imageConfigDefault)
        },
        128: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return i
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    localPatterns: void 0,
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        8461: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = i(7043),
                r = i(5346),
                s = i(5878),
                o = n._(i(5084));

            function a(t) {
                let {
                    props: e
                } = (0, r.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        5084: function(t, e) {
            function i(t) {
                let {
                    config: e,
                    src: i,
                    width: n,
                    quality: r
                } = t;
                return e.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (r || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i.__next_img_default = !0;
            let n = i
        },
        5523: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(7043)._(i(2265)).default.createContext(null)
        },
        7497: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    formatUrl: function() {
                        return s
                    },
                    formatWithValidation: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return o
                    }
                });
            let n = i(3099)._(i(8637)),
                r = /https?|ftp|gopher|file/;

            function s(t) {
                let {
                    auth: e,
                    hostname: i
                } = t, s = t.protocol || "", o = t.pathname || "", a = t.hash || "", l = t.query || "", u = !1;
                e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i), t.port && (u += ":" + t.port)), l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
                let h = t.search || l && "?" + l || "";
                return s && !s.endsWith(":") && (s += ":"), t.slashes || (!s || r.test(s)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), h && "?" !== h[0] && (h = "?" + h), "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
            }
            let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(t) {
                return s(t)
            }
        },
        6279: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    getSortedRoutes: function() {
                        return n.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return r.isDynamicRoute
                    }
                });
            let n = i(4777),
                r = i(8104)
        },
        7205: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(4199),
                r = i(9964);

            function s(t, e, i) {
                let s = "",
                    o = (0, r.getRouteRegex)(t),
                    a = o.groups,
                    l = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || i;
                s = t;
                let u = Object.keys(a);
                return u.every(t => {
                    let e = l[t] || "",
                        {
                            repeat: i,
                            optional: n
                        } = a[t],
                        r = "[" + (i ? "..." : "") + t + "]";
                    return n && (r = (e ? "" : "/") + "[" + r + "]"), i && !Array.isArray(e) && (e = [e]), (n || t in l) && (s = s.replace(r, i ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
                }) || (s = ""), {
                    params: u,
                    result: s
                }
            }
        },
        8104: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(1182),
                r = /\/\[[^/]+?\](?=\/|$)/;

            function s(t) {
                return (0, n.isInterceptionRouteAppPath)(t) && (t = (0, n.extractInterceptionRouteInformation)(t).interceptedRoute), r.test(t)
            }
        },
        3552: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(3987),
                r = i(1283);

            function s(t) {
                if (!(0, n.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, n.getLocationOrigin)(),
                        i = new URL(t, e);
                    return i.origin === e && (0, r.hasBasePath)(i.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        7053: function(t, e) {
            function i(t, e) {
                let i = {};
                return Object.keys(t).forEach(n => {
                    e.includes(n) || (i[n] = t[n])
                }), i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "omit", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        8637: function(t, e) {
            function i(t) {
                let e = {};
                return t.forEach((t, i) => {
                    void 0 === e[i] ? e[i] = t : Array.isArray(e[i]) ? e[i].push(t) : e[i] = [e[i], t]
                }), e
            }

            function n(t) {
                return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
            }

            function r(t) {
                let e = new URLSearchParams;
                return Object.entries(t).forEach(t => {
                    let [i, r] = t;
                    Array.isArray(r) ? r.forEach(t => e.append(i, n(t))) : e.set(i, n(r))
                }), e
            }

            function s(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                return i.forEach(e => {
                    Array.from(e.keys()).forEach(e => t.delete(e)), e.forEach((e, i) => t.append(i, e))
                }), t
            }
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    assign: function() {
                        return s
                    },
                    searchParamsToUrlQuery: function() {
                        return i
                    },
                    urlQueryToSearchParams: function() {
                        return r
                    }
                })
        },
        4199: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = i(3987);

            function r(t) {
                let {
                    re: e,
                    groups: i
                } = t;
                return t => {
                    let r = e.exec(t);
                    if (!r) return !1;
                    let s = t => {
                            try {
                                return decodeURIComponent(t)
                            } catch (t) {
                                throw new n.DecodeError("failed to decode param")
                            }
                        },
                        o = {};
                    return Object.keys(i).forEach(t => {
                        let e = i[t],
                            n = r[e.pos];
                        void 0 !== n && (o[t] = ~n.indexOf("/") ? n.split("/").map(t => s(t)) : e.repeat ? [s(n)] : s(n))
                    }), o
                }
            }
        },
        9964: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    getNamedMiddlewareRegex: function() {
                        return d
                    },
                    getNamedRouteRegex: function() {
                        return c
                    },
                    getRouteRegex: function() {
                        return l
                    },
                    parseParameter: function() {
                        return o
                    }
                });
            let n = i(1182),
                r = i(42),
                s = i(6674);

            function o(t) {
                let e = t.startsWith("[") && t.endsWith("]");
                e && (t = t.slice(1, -1));
                let i = t.startsWith("...");
                return i && (t = t.slice(3)), {
                    key: t,
                    repeat: i,
                    optional: e
                }
            }

            function a(t) {
                let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    i = {},
                    a = 1;
                return {
                    parameterizedRoute: e.map(t => {
                        let e = n.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (e && s) {
                            let {
                                key: t,
                                optional: n,
                                repeat: l
                            } = o(s[1]);
                            return i[t] = {
                                pos: a++,
                                repeat: l,
                                optional: n
                            }, "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                        }
                        if (!s) return "/" + (0, r.escapeStringRegexp)(t); {
                            let {
                                key: t,
                                repeat: e,
                                optional: n
                            } = o(s[1]);
                            return i[t] = {
                                pos: a++,
                                repeat: e,
                                optional: n
                            }, e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: i
                }
            }

            function l(t) {
                let {
                    parameterizedRoute: e,
                    groups: i
                } = a(t);
                return {
                    re: RegExp("^" + e + "(?:/)?$"),
                    groups: i
                }
            }

            function u(t) {
                let {
                    interceptionMarker: e,
                    getSafeRouteKey: i,
                    segment: n,
                    routeKeys: s,
                    keyPrefix: a
                } = t, {
                    key: l,
                    optional: u,
                    repeat: h
                } = o(n), c = l.replace(/\W/g, "");
                a && (c = "" + a + c);
                let d = !1;
                (0 === c.length || c.length > 30) && (d = !0), isNaN(parseInt(c.slice(0, 1))) || (d = !0), d && (c = i()), a ? s[c] = "" + a + l : s[c] = l;
                let f = e ? (0, r.escapeStringRegexp)(e) : "";
                return h ? u ? "(?:/" + f + "(?<" + c + ">.+?))?" : "/" + f + "(?<" + c + ">.+?)" : "/" + f + "(?<" + c + ">[^/]+?)"
            }

            function h(t, e) {
                let i;
                let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    a = (i = 0, () => {
                        let t = "",
                            e = ++i;
                        for (; e > 0;) t += String.fromCharCode(97 + (e - 1) % 26), e = Math.floor((e - 1) / 26);
                        return t
                    }),
                    l = {};
                return {
                    namedParameterizedRoute: o.map(t => {
                        let i = n.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (i && s) {
                            let [i] = t.split(s[0]);
                            return u({
                                getSafeRouteKey: a,
                                interceptionMarker: i,
                                segment: s[1],
                                routeKeys: l,
                                keyPrefix: e ? "nxtI" : void 0
                            })
                        }
                        return s ? u({
                            getSafeRouteKey: a,
                            segment: s[1],
                            routeKeys: l,
                            keyPrefix: e ? "nxtP" : void 0
                        }) : "/" + (0, r.escapeStringRegexp)(t)
                    }).join(""),
                    routeKeys: l
                }
            }

            function c(t, e) {
                let i = h(t, e);
                return { ...l(t),
                    namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: i.routeKeys
                }
            }

            function d(t, e) {
                let {
                    parameterizedRoute: i
                } = a(t), {
                    catchAll: n = !0
                } = e;
                if ("/" === i) return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: r
                } = h(t, !1);
                return {
                    namedRegex: "^" + r + (n ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        4777: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class i {
                insert(t) {
                    this._insert(t.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(t) {
                    void 0 === t && (t = "/");
                    let e = [...this.children.keys()].sort();
                    null !== this.slugName && e.splice(e.indexOf("[]"), 1), null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1), null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                    let i = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce((t, e) => [...t, ...e], []);
                    if (null !== this.slugName && i.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")), !this.placeholder) {
                        let e = "/" === t ? "/" : t.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                        i.unshift(e)
                    }
                    return null !== this.restSlugName && i.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && i.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")), i
                }
                _insert(t, e, n) {
                    if (0 === t.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (n) throw Error("Catch-all must be the last part of the URL.");
                    let r = t[0];
                    if (r.startsWith("[") && r.endsWith("]")) {
                        let i = r.slice(1, -1),
                            o = !1;
                        if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), o = !0), i.startsWith("...") && (i = i.substring(3), n = !0), i.startsWith("[") || i.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + i + "').");
                        if (i.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + i + "').");

                        function s(t, i) {
                            if (null !== t && t !== i) throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + i + "').");
                            e.forEach(t => {
                                if (t === i) throw Error('You cannot have the same slug name "' + i + '" repeat within a single dynamic path');
                                if (t.replace(/\W/g, "") === r.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + t + '" and "' + i + '" differ only by non-word symbols within a single dynamic path')
                            }), e.push(i)
                        }
                        if (n) {
                            if (o) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                                s(this.optionalRestSlugName, i), this.optionalRestSlugName = i, r = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                                s(this.restSlugName, i), this.restSlugName = i, r = "[...]"
                            }
                        } else {
                            if (o) throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                            s(this.slugName, i), this.slugName = i, r = "[]"
                        }
                    }
                    this.children.has(r) || this.children.set(r, new i), this.children.get(r)._insert(t.slice(1), e, n)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function n(t) {
                let e = new i;
                return t.forEach(t => e.insert(t)), e.smoosh()
            }
        },
        7421: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = i(2265),
                r = "undefined" == typeof window,
                s = r ? () => {} : n.useLayoutEffect,
                o = r ? () => {} : n.useEffect;

            function a(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: i
                } = t;

                function a() {
                    if (e && e.mountedInstances) {
                        let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(i(r, t))
                    }
                }
                if (r) {
                    var l;
                    null == e || null == (l = e.mountedInstances) || l.add(t.children), a()
                }
                return s(() => {
                    var i;
                    return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
                        var i;
                        null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                    }
                }), s(() => (e && (e._pendingUpdate = a), () => {
                    e && (e._pendingUpdate = a)
                })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        3987: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    DecodeError: function() {
                        return p
                    },
                    MiddlewareNotFoundError: function() {
                        return y
                    },
                    MissingStaticPage: function() {
                        return v
                    },
                    NormalizeError: function() {
                        return m
                    },
                    PageNotFoundError: function() {
                        return g
                    },
                    SP: function() {
                        return d
                    },
                    ST: function() {
                        return f
                    },
                    WEB_VITALS: function() {
                        return i
                    },
                    execOnce: function() {
                        return n
                    },
                    getDisplayName: function() {
                        return l
                    },
                    getLocationOrigin: function() {
                        return o
                    },
                    getURL: function() {
                        return a
                    },
                    isAbsoluteUrl: function() {
                        return s
                    },
                    isResSent: function() {
                        return u
                    },
                    loadGetInitialProps: function() {
                        return c
                    },
                    normalizeRepeatedSlashes: function() {
                        return h
                    },
                    stringifyError: function() {
                        return x
                    }
                });
            let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(t) {
                let e, i = !1;
                return function() {
                    for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                    return i || (i = !0, e = t(...r)), e
                }
            }
            let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                s = t => r.test(t);

            function o() {
                let {
                    protocol: t,
                    hostname: e,
                    port: i
                } = window.location;
                return t + "//" + e + (i ? ":" + i : "")
            }

            function a() {
                let {
                    href: t
                } = window.location, e = o();
                return t.substring(e.length)
            }

            function l(t) {
                return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
            }

            function u(t) {
                return t.finished || t.headersSent
            }

            function h(t) {
                let e = t.split("?");
                return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
            }
            async function c(t, e) {
                let i = e.res || e.ctx && e.ctx.res;
                if (!t.getInitialProps) return e.ctx && e.Component ? {
                    pageProps: await c(e.Component, e.ctx)
                } : {};
                let n = await t.getInitialProps(e);
                if (i && u(i)) return n;
                if (!n) throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
                return n
            }
            let d = "undefined" != typeof performance,
                f = d && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
            class p extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(t) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
                }
            }
            class v extends Error {
                constructor(t, e) {
                    super(), this.message = "Failed to load static file for page: " + t + " " + e
                }
            }
            class y extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function x(t) {
                return JSON.stringify({
                    message: t.message,
                    stack: t.stack
                })
            }
        },
        9083: function(t, e, i) {
            i.d(e, {
                t: function() {
                    return n
                }
            });
            let n = new Set(["opacity", "clipPath", "filter", "transform"])
        },
        3066: function(t, e, i) {
            i.d(e, {
                v: function() {
                    return t_
                }
            });
            var n = i(6717),
                r = i(8834);
            let s = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                o = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                a = {
                    type: "keyframes",
                    duration: .8
                },
                l = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                u = (t, {
                    keyframes: e
                }) => e.length > 2 ? a : r.G.has(t) ? t.startsWith("scale") ? o(e[1]) : s : l;
            var h = i(2259),
                c = i(4118);
            let d = {
                    current: !1
                },
                f = t => null !== t;

            function p(t, {
                repeat: e,
                repeatType: i = "loop"
            }, n) {
                let r = t.filter(f),
                    s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return s && void 0 !== n ? n : r[s]
            }
            var m = i(5414),
                g = i(4439);
            let v = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function y(t, e, i, n) {
                if (t === e && i === n) return g.Z;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = v(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : v(r(t), e, n)
            }
            var x = i(7457),
                P = i(3627);
            let b = y(.33, 1.53, .69, .99),
                w = (0, P.M)(b),
                S = (0, x.o)(w),
                T = t => (t *= 2) < 1 ? .5 * w(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
            var A = i(6378),
                C = i(4238);

            function M(t) {
                return "function" == typeof t
            }
            var E = i(504),
                R = i(9545),
                j = i(3223),
                k = i(3206);
            let V = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (k.P.test(t) || "0" === t) && !t.startsWith("url("));
            class D {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = E.X.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: r,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (0, R.m)(), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = E.X.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: n,
                        velocity: r,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, n) {
                            let r = t[0];
                            if (null === r) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                o = V(r, e),
                                a = V(s, e);
                            return (0, j.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || ("spring" === i || M(i)) && n)
                        }(t, i, n, r)) {
                        if (d.current || !s) {
                            null == a || a(p(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(t, e);
                    !1 !== u && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }
            var O = i(4438);

            function L(t, e, i) {
                let n = Math.max(e - 5, 0);
                return (0, O.R)(i - t(n), e - n)
            }
            var _ = i(9111);

            function F(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let I = ["duration", "bounce"],
                B = ["stiffness", "damping", "mass"];

            function W(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function N({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...r
            }) {
                let s;
                let o = t[0],
                    a = t[t.length - 1],
                    l = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: c,
                        duration: d,
                        velocity: f,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!W(t, B) && W(t, I)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: r = 1
                            }) {
                                let s, o;
                                (0, j.K)(t <= (0, n.w)(10), "Spring duration must be 10 seconds or less");
                                let a = 1 - e;
                                a = (0, _.u)(.05, 1, a), t = (0, _.u)(.01, 10, (0, n.X)(t)), a < 1 ? (s = e => {
                                    let n = e * a,
                                        r = n * t;
                                    return .001 - (n - i) / F(e, a) * Math.exp(-r)
                                }, o = e => {
                                    let n = e * a * t,
                                        r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                        o = F(Math.pow(e, 2), a);
                                    return (n * i + i - r) * Math.exp(-n) * (-s(e) + .001 > 0 ? -1 : 1) / o
                                }) : (s = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), o = e => t * t * (i - e) * Math.exp(-e * t));
                                let l = function(t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                    return n
                                }(s, o, 5 / t);
                                if (t = (0, n.w)(t), isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(l, 2) * r;
                                    return {
                                        stiffness: e,
                                        damping: 2 * a * Math.sqrt(r * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...i,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({ ...r,
                        velocity: -(0, n.X)(r.velocity || 0)
                    }),
                    m = f || 0,
                    g = h / (2 * Math.sqrt(u * c)),
                    v = a - o,
                    y = (0, n.X)(Math.sqrt(u / c)),
                    x = 5 > Math.abs(v);
                if (i || (i = x ? .01 : 2), e || (e = x ? .005 : .5), g < 1) {
                    let t = F(y, g);
                    s = e => a - Math.exp(-g * y * e) * ((m + g * y * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
                } else if (1 === g) s = t => a - Math.exp(-y * t) * (v + (m + y * v) * t);
                else {
                    let t = y * Math.sqrt(g * g - 1);
                    s = e => {
                        let i = Math.exp(-g * y * e),
                            n = Math.min(t * e, 300);
                        return a - i * ((m + g * y * v) * Math.sinh(n) + t * v * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: p && d || null,
                    next: t => {
                        let r = s(t);
                        if (p) l.done = t >= d;
                        else {
                            let o = 0;
                            g < 1 && (o = 0 === t ? (0, n.w)(m) : L(s, t, r));
                            let u = Math.abs(o) <= i,
                                h = Math.abs(a - r) <= e;
                            l.done = u && h
                        }
                        return l.value = l.done ? a : r, l
                    }
                }
            }

            function U({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let f = t[0],
                    p = {
                        done: !1,
                        value: f
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = f + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - f);
                let P = t => -v * Math.exp(-t / n),
                    b = t => x + P(t),
                    w = t => {
                        let e = P(t),
                            i = b(t);
                        p.done = Math.abs(e) <= u, p.value = p.done ? x : i
                    },
                    S = t => {
                        m(p.value) && (c = t, d = N({
                            keyframes: [p.value, g(p.value)],
                            velocity: L(b, t, p.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, w(t), S(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || w(t), p)
                    }
                }
            }
            let $ = y(.42, 0, 1, 1),
                z = y(0, 0, .58, 1),
                X = y(.42, 0, .58, 1),
                K = t => Array.isArray(t) && "number" != typeof t[0],
                Y = t => Array.isArray(t) && "number" == typeof t[0],
                G = {
                    linear: g.Z,
                    easeIn: $,
                    easeInOut: X,
                    easeOut: z,
                    circIn: A.Z7,
                    circInOut: A.X7,
                    circOut: A.Bn,
                    backIn: w,
                    backInOut: S,
                    backOut: b,
                    anticipate: T
                },
                Z = t => {
                    if (Y(t)) {
                        (0, j.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return y(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, j.k)(void 0 !== G[t], `Invalid easing type '${t}'`), G[t]) : t
                };
            var H = i(332),
                q = i(6376),
                Q = i(6781);

            function J(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var tt = i(7325),
                te = i(8859),
                ti = i(2943);

            function tn(t, e) {
                return i => i > 0 ? e : t
            }
            let tr = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                ts = [tt.$, te.m, ti.J],
                to = t => ts.find(e => e.test(t));

            function ta(t) {
                let e = to(t);
                if ((0, j.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === ti.J && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - n;
                        r = J(a, n, t + 1 / 3), s = J(a, n, t), o = J(a, n, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let tl = (t, e) => {
                let i = ta(t),
                    n = ta(e);
                if (!i || !n) return tn(t, e);
                let r = { ...i
                };
                return t => (r.red = tr(i.red, n.red, t), r.green = tr(i.green, n.green, t), r.blue = tr(i.blue, n.blue, t), r.alpha = (0, Q.t)(i.alpha, n.alpha, t), te.m.transform(r))
            };
            var tu = i(3964),
                th = i(7249);
            let tc = new Set(["none", "hidden"]);

            function td(t, e) {
                return i => (0, Q.t)(t, e, i)
            }

            function tf(t) {
                return "number" == typeof t ? td : "string" == typeof t ? (0, th.t)(t) ? tn : tu.$.test(t) ? tl : tg : Array.isArray(t) ? tp : "object" == typeof t ? tu.$.test(t) ? tl : tm : tn
            }

            function tp(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => tf(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function tm(t, e) {
                let i = { ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = tf(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let tg = (t, e) => {
                let i = k.P.createTransformer(e),
                    n = (0, k.V)(t),
                    r = (0, k.V)(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? tc.has(t) && !r.values.length || tc.has(e) && !n.values.length ? tc.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : (0, H.z)(tp(function(t, e) {
                    var i;
                    let n = [],
                        r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][r[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l, r[o]++
                    }
                    return n
                }(n, r), r.values), i) : ((0, j.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), tn(t, e))
            };

            function tv(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, Q.t)(t, e, i) : tf(t)(t, e)
            }

            function ty({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = K(n) ? n.map(Z) : Z(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: n,
                        mixer: r
                    } = {}) {
                        let s = t.length;
                        if ((0, j.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && t[0] === t[1]) return () => e[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, i) {
                                let n = [],
                                    r = i || tv,
                                    s = t.length - 1;
                                for (let i = 0; i < s; i++) {
                                    let s = r(t[i], t[i + 1]);
                                    if (e) {
                                        let t = Array.isArray(e) ? e[i] || g.Z : e;
                                        s = (0, H.z)(t, s)
                                    }
                                    n.push(s)
                                }
                                return n
                            }(e, n, r),
                            a = o.length,
                            l = e => {
                                let i = 0;
                                if (a > 1)
                                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                                let n = (0, q.Y)(t[i], t[i + 1], e);
                                return o[i](n)
                            };
                        return i ? e => l((0, _.u)(t[0], t[s - 1], e)) : l
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = (0, q.Y)(0, e, n);
                                t.push((0, Q.t)(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || X).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }
            let tx = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => m.Wi.update(e, !0),
                        stop: () => (0, m.Pn)(e),
                        now: () => m.frameData.isProcessing ? m.frameData.timestamp : E.X.now()
                    }
                },
                tP = {
                    decay: U,
                    inertia: U,
                    tween: ty,
                    keyframes: ty,
                    spring: N
                },
                tb = t => t / 100;
            class tw extends D {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options, s = (null == n ? void 0 : n.KeyframeResolver) || R.e;
                    this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: n = "keyframes",
                        repeat: r = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = M(n) ? n : tP[n] || ty;
                    l !== ty && "number" != typeof t[0] && (e = (0, H.z)(tb, tv(t[0], t[1])), t = [0, 100]);
                    let u = l({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === u.calculatedDuration && (u.calculatedDuration = function(t) {
                        let e = 0,
                            i = t.next(e);
                        for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                        return e >= 2e4 ? 1 / 0 : e
                    }(u));
                    let {
                        calculatedDuration: h
                    } = u, c = h + s;
                    return {
                        generator: u,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: c,
                        totalDuration: c * (r + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: r,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: h
                    } = i;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: c,
                        repeat: d,
                        repeatType: f,
                        repeatDelay: m,
                        onUpdate: g
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? v < 0 : v > u;
                    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let x = this.currentTime,
                        P = r;
                    if (d) {
                        let t = Math.min(this.currentTime, u) / h,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === f ? (i = 1 - i, m && (i -= m / h)) : "mirror" === f && (P = s)), x = (0, _.u)(0, 1, i) * h
                    }
                    let b = y ? {
                        done: !1,
                        value: a[0]
                    } : P.next(x);
                    o && (b.value = o(b.value));
                    let {
                        done: w
                    } = b;
                    y || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let S = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                    return S && void 0 !== n && (b.value = p(a, this.options, n)), g && g(b.value), S && this.finish(), b
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? (0, n.X)(t.calculatedDuration) : 0
                }
                get time() {
                    return (0, n.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, n.w)(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, n.X)(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = tx,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            var tS = i(9083);
            let tT = (t, e) => {
                let i = "",
                    n = Math.max(Math.round(e / 10), 2);
                for (let e = 0; e < n; e++) i += t((0, q.Y)(0, n - 1, e)) + ", ";
                return `linear(${i.substring(0,i.length-2)})`
            };

            function tA(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let tC = {
                    linearEasing: void 0
                },
                tM = function(t, e) {
                    let i = tA(t);
                    return () => {
                        var t;
                        return null !== (t = tC[e]) && void 0 !== t ? t : i()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                tE = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                tR = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: tE([0, .65, .55, 1]),
                    circOut: tE([.55, 0, 1, .45]),
                    backIn: tE([.31, .01, .66, -.59]),
                    backOut: tE([.33, 1.53, .69, .99])
                };

            function tj(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let tk = tA(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                tV = {
                    anticipate: T,
                    backInOut: S,
                    circInOut: A.X7
                };
            class tD extends D {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options;
                    this.resolver = new C.s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i, n;
                    let {
                        duration: r = 300,
                        times: s,
                        ease: o,
                        type: a,
                        motionValue: l,
                        name: u,
                        startTime: h
                    } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if ("string" == typeof o && tM() && o in tV && (o = tV[o]), M((n = this.options).type) || "spring" === n.type || ! function t(e) {
                            return !!("function" == typeof e && tM() || !e || "string" == typeof e && (e in tR || tM()) || Y(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let i = new tw({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                r = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) r.push((n = i.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: r,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), r = h.duration, s = h.times, o = h.ease, a = "keyframes"
                    }
                    let c = function(t, e, i, {
                        delay: n = 0,
                        duration: r = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a,
                        times: l
                    } = {}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let h = function t(e, i) {
                            if (e) return "function" == typeof e && tM() ? tT(e, i) : Y(e) ? tE(e) : Array.isArray(e) ? e.map(e => t(e, i) || tR.easeOut) : tR[e]
                        }(a, r);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(l.owner.current, u, t, { ...this.options,
                        duration: r,
                        times: s,
                        ease: o
                    });
                    return c.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? (tj(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        l.set(p(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: c,
                        duration: r,
                        times: s,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return (0, n.X)(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return (0, n.X)(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = (0, n.w)(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return g.Z;
                        let {
                            animation: i
                        } = e;
                        tj(i, t)
                    } else this.pendingTimeline = t;
                    return g.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: r,
                        type: s,
                        ease: o,
                        times: a
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: l,
                            element: u,
                            ...h
                        } = this.options, c = new tw({ ...h,
                            keyframes: i,
                            duration: r,
                            type: s,
                            ease: o,
                            times: a,
                            isGenerator: !0
                        }), d = (0, n.w)(this.time);
                        t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
                    }
                    let {
                        onStop: l
                    } = this.options;
                    l && l(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: n,
                        repeatType: r,
                        damping: s,
                        type: o
                    } = t;
                    return tk() && i && tS.t.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
                }
            }
            let tO = tA(() => void 0 !== window.ScrollTimeline);
            class tL {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t, e) {
                    let i = this.animations.map(i => tO() && i.attachTimeline ? i.attachTimeline(t) : e(i));
                    return () => {
                        i.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let t_ = (t, e, i, r = {}, s, o) => a => {
                let l = (0, h.e)(r, t) || {},
                    f = l.delay || r.delay || 0,
                    {
                        elapsed: g = 0
                    } = r;
                g -= (0, n.w)(f);
                let v = {
                    keyframes: Array.isArray(i) ? i : [null, i],
                    ease: "easeOut",
                    velocity: e.getVelocity(),
                    ...l,
                    delay: -g,
                    onUpdate: t => {
                        e.set(t), l.onUpdate && l.onUpdate(t)
                    },
                    onComplete: () => {
                        a(), l.onComplete && l.onComplete()
                    },
                    name: t,
                    motionValue: e,
                    element: o ? void 0 : s
                };
                ! function({
                    when: t,
                    delay: e,
                    delayChildren: i,
                    staggerChildren: n,
                    staggerDirection: r,
                    repeat: s,
                    repeatType: o,
                    repeatDelay: a,
                    from: l,
                    elapsed: u,
                    ...h
                }) {
                    return !!Object.keys(h).length
                }(l) && (v = { ...v,
                    ...u(t, v)
                }), v.duration && (v.duration = (0, n.w)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, n.w)(v.repeatDelay)), void 0 !== v.from && (v.keyframes[0] = v.from);
                let y = !1;
                if (!1 !== v.type && (0 !== v.duration || v.repeatDelay) || (v.duration = 0, 0 !== v.delay || (y = !0)), (d.current || c.c.skipAnimations) && (y = !0, v.duration = 0, v.delay = 0), y && !o && void 0 !== e.get()) {
                    let t = p(v.keyframes, l);
                    if (void 0 !== t) return m.Wi.update(() => {
                        v.onUpdate(t), v.onComplete()
                    }), new tL([])
                }
                return !o && tD.supports(v) ? new tD(v) : new tw(v)
            }
        },
        5647: function(t, e, i) {
            i.d(e, {
                d: function() {
                    return p
                }
            });
            var n = i(8775),
                r = i(8834),
                s = i(3066),
                o = i(8771),
                a = i(2259),
                l = i(4005),
                u = i(1327),
                h = i(5414);

            function c(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: c
            } = {}) {
                var d;
                let {
                    transition: f = t.getDefaultTransition(),
                    transitionEnd: p,
                    ...m
                } = e;
                n && (f = n);
                let g = [],
                    v = c && t.animationState && t.animationState.getState()[c];
                for (let e in m) {
                    let n = t.getValue(e, null !== (d = t.latestValues[e]) && void 0 !== d ? d : null),
                        o = m[e];
                    if (void 0 === o || v && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(v, e)) continue;
                    let c = {
                            delay: i,
                            ...(0, a.e)(f || {}, e)
                        },
                        p = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = (0, l.s)(t);
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, h.Wi);
                            null !== t && (c.startTime = t, p = !0)
                        }
                    }(0, u.K)(t, e), n.start((0, s.v)(e, n, o, t.shouldReduceMotion && r.G.has(e) ? {
                        type: !1
                    } : c, t, p));
                    let y = n.animation;
                    y && g.push(y)
                }
                return p && Promise.all(g).then(() => {
                    h.Wi.update(() => {
                        p && (0, o.C)(t, p)
                    })
                }), g
            }

            function d(t, e, i = {}) {
                var r;
                let s = (0, n.x)(t, e, "exit" === i.type ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0),
                    {
                        transition: o = t.getDefaultTransition() || {}
                    } = s || {};
                i.transitionOverride && (o = i.transitionOverride);
                let a = s ? () => Promise.all(c(t, s, i)) : () => Promise.resolve(),
                    l = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: s,
                            staggerDirection: a
                        } = o;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(f).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(d(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, s, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = o;
                if (!u) return Promise.all([a(), l(i.delay)]); {
                    let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
                    return t().then(() => e())
                }
            }

            function f(t, e) {
                return t.sortNodePosition(e)
            }

            function p(t, e, i = {}) {
                let r;
                if (t.notify("AnimationStart", e), Array.isArray(e)) r = Promise.all(e.map(e => d(t, e, i)));
                else if ("string" == typeof e) r = d(t, e, i);
                else {
                    let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
                    r = Promise.all(c(t, s, i))
                }
                return r.then(() => {
                    t.notify("AnimationComplete", e)
                })
            }
        },
        1750: function(t, e, i) {
            i.d(e, {
                M: function() {
                    return n
                }
            });
            let n = "data-" + (0, i(7444).D)("framerAppearId")
        },
        4005: function(t, e, i) {
            i.d(e, {
                s: function() {
                    return r
                }
            });
            var n = i(1750);

            function r(t) {
                return t.props[n.M]
            }
        },
        2259: function(t, e, i) {
            i.d(e, {
                e: function() {
                    return n
                }
            });

            function n(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
        },
        4944: function(t, e, i) {
            i.d(e, {
                C: function() {
                    return n
                }
            });
            let n = t => Array.isArray(t)
        },
        8881: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)({})
        },
        5750: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        4252: function(t, e, i) {
            i.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)(null)
        },
        6378: function(t, e, i) {
            i.d(e, {
                Bn: function() {
                    return o
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return s
                }
            });
            var n = i(7457),
                r = i(3627);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, r.M)(s),
                a = (0, n.o)(s)
        },
        7457: function(t, e, i) {
            i.d(e, {
                o: function() {
                    return n
                }
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        3627: function(t, e, i) {
            i.d(e, {
                M: function() {
                    return n
                }
            });
            let n = t => e => 1 - t(1 - e)
        },
        5005: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return s
                }
            });
            var n = i(4118);
            let r = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function s(t, e) {
                let i = !1,
                    s = !0,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    a = () => i = !0,
                    l = r.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            i = new Set,
                            n = !1,
                            r = !1,
                            s = new WeakSet,
                            o = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            s.has(e) && (l.schedule(e), t()), e(o)
                        }
                        let l = {
                            schedule: (t, r = !1, o = !1) => {
                                let a = o && n ? e : i;
                                return r && s.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (o = t, n) {
                                    r = !0;
                                    return
                                }
                                n = !0, [e, i] = [i, e], i.clear(), e.forEach(a), n = !1, r && (r = !1, l.process(t))
                            }
                        };
                        return l
                    }(a), t), {}),
                    {
                        read: u,
                        resolveKeyframes: h,
                        update: c,
                        preRender: d,
                        render: f,
                        postRender: p
                    } = l,
                    m = () => {
                        let r = n.c.useManualTiming ? o.timestamp : performance.now();
                        i = !1, o.delta = s ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1), o.timestamp = r, o.isProcessing = !0, u.process(o), h.process(o), c.process(o), d.process(o), f.process(o), p.process(o), o.isProcessing = !1, i && e && (s = !1, t(m))
                    },
                    g = () => {
                        i = !0, s = !0, o.isProcessing || t(m)
                    };
                return {
                    schedule: r.reduce((t, e) => {
                        let n = l[e];
                        return t[e] = (t, e = !1, r = !1) => (i || g(), n.schedule(t, e, r)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < r.length; e++) l[r[e]].cancel(t)
                    },
                    state: o,
                    steps: l
                }
            }
        },
        5414: function(t, e, i) {
            i.d(e, {
                Pn: function() {
                    return s
                },
                Wi: function() {
                    return r
                },
                frameData: function() {
                    return o
                },
                yL: function() {
                    return a
                }
            });
            var n = i(4439);
            let {
                schedule: r,
                cancel: s,
                state: o,
                steps: a
            } = (0, i(5005).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        504: function(t, e, i) {
            let n;
            i.d(e, {
                X: function() {
                    return a
                }
            });
            var r = i(4118),
                s = i(5414);

            function o() {
                n = void 0
            }
            let a = {
                now: () => (void 0 === n && a.set(s.frameData.isProcessing || r.c.useManualTiming ? s.frameData.timestamp : performance.now()), n),
                set: t => {
                    n = t, queueMicrotask(o)
                }
            }
        },
        5283: function(t, e, i) {
            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            i.d(e, {
                E: function() {
                    return ne
                }
            });
            var r, s, o, a = i(4944);

            function l(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function u(t) {
                return "string" == typeof t || Array.isArray(t)
            }
            var h = i(8775);
            let c = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                d = ["initial", ...c];
            var f = i(5647);
            let p = d.length,
                m = [...c].reverse(),
                g = c.length;

            function v(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function y() {
                return {
                    animate: v(!0),
                    whileInView: v(),
                    whileHover: v(),
                    whileTap: v(),
                    whileDrag: v(),
                    whileFocus: v(),
                    exit: v()
                }
            }
            class x {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class P extends x {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (0, f.d)(t, e, i))),
                            i = y(),
                            r = !0,
                            s = e => (i, n) => {
                                var r;
                                let s = (0, h.x)(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    i = { ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function o(o) {
                            let {
                                props: h
                            } = t, c = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < p; t++) {
                                    let n = d[t],
                                        r = e.props[n];
                                    (u(r) || !1 === r) && (i[n] = r)
                                }
                                return i
                            }(t.parent) || {}, f = [], v = new Set, y = {}, x = 1 / 0;
                            for (let e = 0; e < g; e++) {
                                var P;
                                let d = m[e],
                                    p = i[d],
                                    g = void 0 !== h[d] ? h[d] : c[d],
                                    b = u(g),
                                    w = d === o ? p.isActive : null;
                                !1 === w && (x = e);
                                let S = g === c[d] && g !== h[d] && b;
                                if (S && r && t.manuallyAnimateOnMount && (S = !1), p.protectedKeys = { ...y
                                    }, !p.isActive && null === w || !g && !p.prevProp || n(g) || "boolean" == typeof g) continue;
                                let T = (P = p.prevProp, "string" == typeof g ? g !== P : !!Array.isArray(g) && !l(g, P)),
                                    A = T || d === o && p.isActive && !S && b || e > x && b,
                                    C = !1,
                                    M = Array.isArray(g) ? g : [g],
                                    E = M.reduce(s(d), {});
                                !1 === w && (E = {});
                                let {
                                    prevResolvedValues: R = {}
                                } = p, j = { ...R,
                                    ...E
                                }, k = e => {
                                    A = !0, v.has(e) && (C = !0, v.delete(e)), p.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in j) {
                                    let e = E[t],
                                        i = R[t];
                                    if (!y.hasOwnProperty(t))((0, a.C)(e) && (0, a.C)(i) ? l(e, i) : e === i) ? void 0 !== e && v.has(t) ? k(t) : p.protectedKeys[t] = !0 : null != e ? k(t) : v.add(t)
                                }
                                p.prevProp = g, p.prevResolvedValues = E, p.isActive && (y = { ...y,
                                    ...E
                                }), r && t.blockInitialAnimation && (A = !1);
                                let V = !(S && T) || C;
                                A && V && f.push(...M.map(t => ({
                                    animation: t,
                                    options: {
                                        type: d
                                    }
                                })))
                            }
                            if (v.size) {
                                let e = {};
                                v.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        r = t.getValue(i);
                                    r && (r.liveStyle = !0), e[i] = null != n ? n : null
                                }), f.push({
                                    animation: e
                                })
                            }
                            let b = !!f.length;
                            return r && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (b = !1), r = !1, b ? e(f) : Promise.resolve()
                        }
                        return {
                            animateChanges: o,
                            setActive: function(e, n) {
                                var r;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let s = o(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = y(), r = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    n(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let b = 0;
            class w extends x {
                constructor() {
                    super(...arguments), this.id = b++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var S = i(4439),
                T = i(3223);
            let A = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function C(t, e = "page") {
                return {
                    point: {
                        x: t[`${e}X`],
                        y: t[`${e}Y`]
                    }
                }
            }
            let M = t => e => A(e) && t(e, C(e));
            var E = i(6717);

            function R(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }

            function j(t, e, i, n) {
                return R(t, e, M(i), n)
            }
            var k = i(332);
            let V = (t, e) => Math.abs(t - e);
            var D = i(5414);
            class O {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = F(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                r = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(V(t.x, e.x) ** 2 + V(t.y, e.y) ** 2) >= 3);
                            if (!n && !r) return;
                            let {
                                point: s
                            } = i, {
                                timestamp: o
                            } = D.frameData;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = L(e, this.transformPagePoint), D.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = F("pointercancel" === t.type ? this.lastMoveEventInfo : L(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !A(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = L(C(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = D.frameData;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, F(s, this.history)), this.removeListeners = (0, k.z)(j(this.contextWindow, "pointermove", this.handlePointerMove), j(this.contextWindow, "pointerup", this.handlePointerUp), j(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, D.Pn)(this.updatePoint)
                }
            }

            function L(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function _(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function F({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: _(t, I(e)),
                    offset: _(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = I(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > (0, E.w)(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, E.X)(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function I(t) {
                return t[t.length - 1]
            }

            function B(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let W = B("dragHorizontal"),
                N = B("dragVertical");

            function U(t) {
                let e = !1;
                if ("y" === t) e = N();
                else if ("x" === t) e = W();
                else {
                    let t = W(),
                        i = N();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function $() {
                let t = U(!0);
                return !t || (t(), !1)
            }

            function z(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            var X = i(6376),
                K = i(6781);

            function Y(t) {
                return t.max - t.min
            }

            function G(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, K.t)(e.min, e.max, t.origin), t.scale = Y(i) / Y(e), t.translate = (0, K.t)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function Z(t, e, i, n) {
                G(t.x, e.x, i.x, n ? n.originX : void 0), G(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function H(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + Y(e)
            }

            function q(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + Y(e)
            }

            function Q(t, e, i) {
                q(t.x, e.x, i.x), q(t.y, e.y, i.y)
            }
            var J = i(9111);

            function tt(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function te(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function ti(t, e, i) {
                return {
                    min: tn(t, e),
                    max: tn(t, i)
                }
            }

            function tn(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let tr = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                ts = () => ({
                    x: tr(),
                    y: tr()
                }),
                to = () => ({
                    min: 0,
                    max: 0
                }),
                ta = () => ({
                    x: to(),
                    y: to()
                });

            function tl(t) {
                return [t("x"), t("y")]
            }

            function tu({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function th(t) {
                return void 0 === t || 1 === t
            }

            function tc({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !th(t) || !th(e) || !th(i)
            }

            function td(t) {
                return tc(t) || tf(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function tf(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function tp(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function tm(t, e = 0, i = 1, n, r) {
                t.min = tp(t.min, e, i, n, r), t.max = tp(t.max, e, i, n, r)
            }

            function tg(t, {
                x: e,
                y: i
            }) {
                tm(t.x, e.translate, e.scale, e.originPoint), tm(t.y, i.translate, i.scale, i.originPoint)
            }

            function tv(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function ty(t, e, i, n, r = .5) {
                let s = (0, K.t)(t.min, t.max, r);
                tm(t, e, i, s, n)
            }

            function tx(t, e) {
                ty(t.x, e.x, e.scaleX, e.scale, e.originX), ty(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function tP(t, e) {
                return tu(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var tb = i(7492),
                tw = i(3066);
            let tS = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;
            var tT = i(1327);
            let tA = new WeakMap;
            class tC {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ta(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new O(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(C(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = U(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tl(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tb.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = Y(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && D.Wi.postRender(() => r(t, e)), (0, tT.K)(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => tl(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: tS(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && D.Wi.postRender(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !tM(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, K.t)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, K.t)(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && z(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: tt(t.x, i, r),
                            y: tt(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: ti(t, "left", "right"),
                            y: ti(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && tl(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !z(e)) return !1;
                    let n = e.current;
                    (0, T.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = tP(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (tv(n.x, r.offset.x), tv(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: te((t = r.layout.layoutBox).x, s.x),
                            y: te(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = tu(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(tl(o => {
                        if (!tM(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return (0, tT.K)(this.visualElement, t), i.start((0, tw.v)(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    tl(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    tl(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    tl(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!tM(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - (0, K.t)(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!z(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    tl(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = Y(t),
                                    r = Y(e);
                                return r > n ? i = (0, X.Y)(e.min, e.max - n, t.min) : n > r && (i = (0, X.Y)(t.min, t.max - r, e.min)), (0, J.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), tl(e => {
                        if (!tM(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set((0, K.t)(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    tA.set(this.visualElement, this);
                    let t = j(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            z(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), D.Wi.read(e);
                    let r = R(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (tl(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function tM(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class tE extends x {
                constructor(t) {
                    super(t), this.removeGroupControls = S.Z, this.removeListeners = S.Z, this.controls = new tC(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || S.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let tR = t => (e, i) => {
                t && D.Wi.postRender(() => t(e, i))
            };
            class tj extends x {
                constructor() {
                    super(...arguments), this.removePointerDownListener = S.Z
                }
                onPointerDown(t) {
                    this.session = new O(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: tS(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: tR(t),
                        onStart: tR(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && D.Wi.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = j(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var tk = i(7437),
                tV = i(2265),
                tD = i(4252),
                tO = i(8881);
            let tL = (0, tV.createContext)({}),
                t_ = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function tF(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let tI = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!tb.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = tF(t, e.target.x),
                        n = tF(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            var tB = i(3206);
            let tW = {},
                {
                    schedule: tN,
                    cancel: tU
                } = (0, i(5005).Z)(queueMicrotask, !1);
            class t$ extends tV.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(tW, tX), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), t_.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || D.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), tN.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function tz(t) {
                let [e, i] = function() {
                    let t = (0, tV.useContext)(tD.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, r = (0, tV.useId)();
                    (0, tV.useEffect)(() => n(r), []);
                    let s = (0, tV.useCallback)(() => i && i(r), [r, i]);
                    return !e && i ? [!1, s] : [!0]
                }(), n = (0, tV.useContext)(tO.p);
                return (0, tk.jsx)(t$, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, tV.useContext)(tL),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let tX = {
                borderRadius: { ...tI,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: tI,
                borderTopRightRadius: tI,
                borderBottomLeftRadius: tI,
                borderBottomRightRadius: tI,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let n = tB.P.parse(t);
                        if (n.length > 5) return t;
                        let r = tB.P.createTransformer(t),
                            s = "number" != typeof n[0] ? 1 : 0,
                            o = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        n[0 + s] /= o, n[1 + s] /= a;
                        let l = (0, K.t)(o, a, .5);
                        return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                    }
                }
            };
            var tK = i(4081),
                tY = i(6378);
            let tG = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tZ = tG.length,
                tH = t => "string" == typeof t ? parseFloat(t) : t,
                tq = t => "number" == typeof t || tb.px.test(t);

            function tQ(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tJ = t1(0, .5, tY.Bn),
                t0 = t1(.5, .95, S.Z);

            function t1(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i((0, X.Y)(t, e, n))
            }

            function t5(t, e) {
                t.min = e.min, t.max = e.max
            }

            function t2(t, e) {
                t5(t.x, e.x), t5(t.y, e.y)
            }

            function t4(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function t3(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function t9(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (tb.aQ.test(e) && (e = parseFloat(e), e = (0, K.t)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = (0, K.t)(s.min, s.max, n);
                    t === s && (a -= e), t.min = t3(t.min, e, i, a, r), t.max = t3(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let t7 = ["x", "scaleX", "originX"],
                t6 = ["y", "scaleY", "originY"];

            function t8(t, e, i, n) {
                t9(t.x, e, t7, i ? i.x : void 0, n ? n.x : void 0), t9(t.y, e, t6, i ? i.y : void 0, n ? n.y : void 0)
            }
            var et = i(2259);

            function ee(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function ei(t) {
                return ee(t.x) && ee(t.y)
            }

            function en(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function er(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function es(t, e) {
                return er(t.x, e.x) && er(t.y, e.y)
            }

            function eo(t) {
                return Y(t.x) / Y(t.y)
            }

            function ea(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            var el = i(9013);
            class eu {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, el.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, el.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let eh = (t, e) => t.depth - e.depth;
            class ec {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, el.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, el.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(eh), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var ed = i(4581),
                ef = i(3999);

            function ep(t) {
                let e = (0, ef.i)(t) ? t.get() : t;
                return (0, ed.p)(e) ? e.toValue() : e
            }
            var em = i(504),
                eg = i(3078),
                ev = i(4005);
            let ey = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                ex = "undefined" != typeof window && void 0 !== window.MotionDebug,
                eP = ["", "X", "Y", "Z"],
                eb = {
                    visibility: "hidden"
                },
                ew = 0;

            function eS(t, e, i, n) {
                let {
                    latestValues: r
                } = e;
                r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function eT({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = ew++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, ex && (ey.totalNodes = ey.resolvedTargetDeltas = ey.recalculatedProjection = 0), this.nodes.forEach(eM), this.nodes.forEach(eO), this.nodes.forEach(eL), this.nodes.forEach(eE), ex && window.MotionDebug.record(ey)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ec)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tK.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = em.X.now(),
                                        n = ({
                                            timestamp: e
                                        }) => {
                                            let r = e - i;
                                            r >= 250 && ((0, D.Pn)(n), t(r - 250))
                                        };
                                    return D.Wi.read(n, !0), () => (0, D.Pn)(n)
                                }(n, 0), t_.hasAnimatedSinceResize && (t_.hasAnimatedSinceResize = !1, this.nodes.forEach(eD))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || eN,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !es(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, et.e)(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || eD(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, D.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(e_), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let n = (0, ev.s)(i);
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", D.Wi, !(t || i))
                                }
                                let {
                                    parent: r
                                } = e;
                                r && !r.hasCheckedOptimisedAppear && t(r)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ej);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(ek), this.isUpdating = !1, this.nodes.forEach(eV), this.nodes.forEach(eA), this.nodes.forEach(eC), this.clearAllSnapshots();
                        let t = em.X.now();
                        D.frameData.delta = (0, J.u)(0, 1e3 / 60, t - D.frameData.timestamp), D.frameData.timestamp = t, D.frameData.isProcessing = !0, D.yL.update.process(D.frameData), D.yL.preRender.process(D.frameData), D.yL.render.process(D.frameData), D.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, tN.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(eR), this.sharedNodes.forEach(eF)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, D.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        D.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = ta(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !ei(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || td(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), ez((e = n).x), ez(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return ta();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(eK))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (tv(i.x, t.offset.x), tv(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = ta();
                        if (t2(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            n !== this.root && r && s.layoutScroll && (r.wasRoot && t2(i, t), tv(i.x, r.offset.x), tv(i.y, r.offset.y))
                        }
                        return i
                    }
                    applyTransform(t, e = !1) {
                        let i = ta();
                        t2(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && tx(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), td(n.latestValues) && tx(i, n.latestValues)
                        }
                        return td(this.latestValues) && tx(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = ta();
                        t2(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !td(i.latestValues)) continue;
                            tc(i.latestValues) && i.updateSnapshot();
                            let n = ta();
                            t2(n, i.measurePageBox()), t8(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return td(this.latestValues) && t8(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== D.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = D.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ta(), this.relativeTargetOrigin = ta(), Q(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), t2(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = ta(), this.targetWithTransforms = ta()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, H(i.x, n.x, r.x), H(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : t2(this.target, this.layout.layoutBox), tg(this.target, this.targetDelta)) : t2(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ta(), this.relativeTargetOrigin = ta(), Q(this.relativeTargetOrigin, this.target, t.target), t2(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                ex && ey.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || tc(this.parent.latestValues) || tf(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === D.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        t2(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = r.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && tx(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, tg(t, s)), n && td(r.latestValues) && tx(t, r.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = ta());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (t4(this.prevProjectionDelta.x, this.projectionDelta.x), t4(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Z(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && ea(this.projectionDelta.x, this.prevProjectionDelta.x) && ea(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), ex && ey.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = ts(), this.projectionDelta = ts(), this.projectionDeltaWithTransform = ts()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = ts();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = ta(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(eW));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (eI(o.x, t.x, n), eI(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, f, p;
                                Q(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f = this.relativeTarget, p = this.relativeTargetOrigin, eB(f.x, p.x, a.x, n), eB(f.y, p.y, a.y, n), i && (u = this.relativeTarget, d = i, en(u.x, d.x) && en(u.y, d.y)) && (this.isProjectionDirty = !1), i || (i = ta()), t2(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = (0, K.t)(0, void 0 !== i.opacity ? i.opacity : 1, tJ(n)), t.opacityExit = (0, K.t)(void 0 !== e.opacity ? e.opacity : 1, 0, t0(n))) : s && (t.opacity = (0, K.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < tZ; r++) {
                                    let s = `border${tG[r]}Radius`,
                                        o = tQ(e, s),
                                        a = tQ(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || tq(o) === tq(a) ? (t[s] = Math.max((0, K.t)(tH(o), tH(a), n), 0), (tb.aQ.test(a) || tb.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, K.t)(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, D.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = D.Wi.update(() => {
                            t_.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = (0, ef.i)(0) ? 0 : (0, eg.BX)(0);
                                return n.start((0, tw.v)("", n, 1e3, i)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && eX(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || ta();
                                let e = Y(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = Y(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            t2(e, i), tx(e, r), Z(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new eu), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let n = {};
                        i.z && eS("z", t, n, this.animationValues);
                        for (let e = 0; e < eP.length; e++) eS(`rotate${eP[e]}`, t, n, this.animationValues), eS(`skew${eP[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return eb;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = ep(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = ep(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !td(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, i) {
                            let n = "",
                                r = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = (null == i ? void 0 : i.z) || 0;
                            if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: r,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, tW) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = tW[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? ep(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ej), this.root.sharedNodes.clear()
                    }
                }
            }

            function eA(t) {
                t.updateLayout()
            }

            function eC(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? tl(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = Y(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : eX(r, i.layoutBox, e) && tl(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = Y(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = ts();
                    Z(o, e, i.layoutBox);
                    let a = ts();
                    s ? Z(a, t.applyTransform(n, !0), i.measuredBox) : Z(a, e, i.layoutBox);
                    let l = !ei(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = ta();
                                Q(o, i.layoutBox, r.layoutBox);
                                let a = ta();
                                Q(a, e, s.layoutBox), es(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function eM(t) {
                ex && ey.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function eE(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function eR(t) {
                t.clearSnapshot()
            }

            function ej(t) {
                t.clearMeasurements()
            }

            function ek(t) {
                t.isLayoutDirty = !1
            }

            function eV(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function eD(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function eO(t) {
                t.resolveTargetDelta()
            }

            function eL(t) {
                t.calcProjection()
            }

            function e_(t) {
                t.resetSkewAndRotation()
            }

            function eF(t) {
                t.removeLeadSnapshot()
            }

            function eI(t, e, i) {
                t.translate = (0, K.t)(e.translate, 0, i), t.scale = (0, K.t)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function eB(t, e, i, n) {
                t.min = (0, K.t)(e.min, i.min, n), t.max = (0, K.t)(e.max, i.max, n)
            }

            function eW(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let eN = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                eU = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                e$ = eU("applewebkit/") && !eU("chrome/") ? Math.round : S.Z;

            function ez(t) {
                t.min = e$(t.min), t.max = e$(t.max)
            }

            function eX(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(eo(e) - eo(i)))
            }

            function eK(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let eY = eT({
                    attachResizeListener: (t, e) => R(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                eG = {
                    current: void 0
                },
                eZ = eT({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!eG.current) {
                            let t = new eY({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), eG.current = t
                        }
                        return eG.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function eH(t, e) {
                let i = e ? "onHoverStart" : "onHoverEnd";
                return j(t.current, e ? "pointerenter" : "pointerleave", (n, r) => {
                    if ("touch" === n.pointerType || $()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e);
                    let o = s[i];
                    o && D.Wi.postRender(() => o(n, r))
                }, {
                    passive: !t.getProps()[i]
                })
            }
            class eq extends x {
                mount() {
                    this.unmount = (0, k.z)(eH(this.node, !0), eH(this.node, !1))
                }
                unmount() {}
            }
            class eQ extends x {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, k.z)(R(this.node.current, "focus", () => this.onFocus()), R(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let eJ = (t, e) => !!e && (t === e || eJ(t, e.parentElement));

            function e0(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, C(i))
            }
            class e1 extends x {
                constructor() {
                    super(...arguments), this.removeStartListeners = S.Z, this.removeEndListeners = S.Z, this.removeAccessibleListeners = S.Z, this.startPointerPress = (t, e) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        let i = this.node.getProps(),
                            n = j(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: i,
                                    onTapCancel: n,
                                    globalTapTarget: r
                                } = this.node.getProps(), s = r || eJ(this.node.current, t.target) ? i : n;
                                s && D.Wi.update(() => s(t, e))
                            }, {
                                passive: !(i.onTap || i.onPointerUp)
                            }),
                            r = j(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                        this.removeEndListeners = (0, k.z)(n, r), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = R(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = R(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && e0("up", (t, e) => {
                                        let {
                                            onTap: i
                                        } = this.node.getProps();
                                        i && D.Wi.postRender(() => i(t, e))
                                    })
                                }), e0("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = R(this.node.current, "blur", () => {
                                this.isPressing && e0("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = (0, k.z)(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: i,
                        whileTap: n
                    } = this.node.getProps();
                    n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && D.Wi.postRender(() => i(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !$()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: i
                    } = this.node.getProps();
                    i && D.Wi.postRender(() => i(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = j(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        i = R(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = (0, k.z)(e, i)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let e5 = new WeakMap,
                e2 = new WeakMap,
                e4 = t => {
                    let e = e5.get(t.target);
                    e && e(t)
                },
                e3 = t => {
                    t.forEach(e4)
                },
                e9 = {
                    some: 0,
                    all: 1
                };
            class e7 extends x {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : e9[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            e2.has(i) || e2.set(i, {});
                            let n = e2.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(e3, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return e5.set(t, i), n.observe(t), () => {
                            e5.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var e6 = i(5750);
            let e8 = (0, tV.createContext)({});
            var it = i(1534);
            let ie = (0, tV.createContext)({
                strict: !1
            });
            var ii = i(1750);

            function ir(t) {
                return n(t.animate) || d.some(e => u(t[e]))
            }

            function is(t) {
                return !!(ir(t) || t.variants)
            }

            function io(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let ia = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                il = {};
            for (let t in ia) il[t] = {
                isEnabled: e => ia[t].some(t => !!e[t])
            };
            var iu = i(4563);
            let ih = Symbol.for("motionComponentSymbol"),
                ic = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function id(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (ic.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            var ip = i(7444);

            function im(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let ig = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function iv(t, e, i, n) {
                for (let i in im(t, e, void 0, n), e.attrs) t.setAttribute(ig.has(i) ? i : (0, ip.D)(i), e.attrs[i])
            }
            var iy = i(8834);

            function ix(t, {
                layout: e,
                layoutId: i
            }) {
                return iy.G.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!tW[t] || "opacity" === t)
            }

            function iP(t, e, i) {
                var n;
                let {
                    style: r
                } = t, s = {};
                for (let o in r)((0, ef.i)(r[o]) || e.style && (0, ef.i)(e.style[o]) || ix(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
                return i && r && "string" == typeof r.willChange && (i.applyWillChange = !1), s
            }

            function ib(t, e, i) {
                let n = iP(t, e, i);
                for (let i in t)((0, ef.i)(t[i]) || (0, ef.i)(e[i])) && (n[-1 !== iy._.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return n
            }
            var iw = i(1297),
                iS = i(3576),
                iT = i(6957);
            let iA = t => (e, i) => {
                let r = (0, tV.useContext)(e8),
                    s = (0, tV.useContext)(tD.O),
                    o = () => (function({
                        applyWillChange: t = !1,
                        scrapeMotionValuesFromProps: e,
                        createRenderState: i,
                        onMount: r
                    }, s, o, a, l) {
                        let u = {
                            latestValues: function(t, e, i, r, s) {
                                var o;
                                let a = {},
                                    l = r && (null === (o = t.style) || void 0 === o ? void 0 : o.willChange) === void 0,
                                    u = s(t, {});
                                for (let t in u) a[t] = ep(u[t]);
                                let {
                                    initial: h,
                                    animate: c
                                } = t, d = ir(t), f = is(t);
                                e && f && !d && !1 !== t.inherit && (void 0 === h && (h = e.initial), void 0 === c && (c = e.animate));
                                let p = !!i && !1 === i.initial,
                                    m = (p = p || !1 === h) ? c : h;
                                return m && "boolean" != typeof m && !n(m) && iC(t, m, (t, e) => {
                                    for (let e in t) {
                                        let i = t[e];
                                        if (Array.isArray(i)) {
                                            let t = p ? i.length - 1 : 0;
                                            i = i[t]
                                        }
                                        null !== i && (a[e] = i)
                                    }
                                    for (let t in e) a[t] = e[t]
                                }), l && c && !1 !== h && !n(c) && iC(t, c, t => {
                                    for (let e in t)
                                        if ((0, iT.p)(e)) {
                                            a.willChange = "transform";
                                            return
                                        }
                                }), a
                            }(s, o, a, !l && t, e),
                            renderState: i()
                        };
                        return r && (u.mount = t => r(s, t, u)), u
                    })(t, e, r, s, i);
                return i ? o() : (0, iS.h)(o)
            };

            function iC(t, e, i) {
                let n = Array.isArray(e) ? e : [e];
                for (let e = 0; e < n.length; e++) {
                    let r = (0, iw.o)(t, n[e]);
                    if (r) {
                        let {
                            transitionEnd: t,
                            transition: e,
                            ...n
                        } = r;
                        i(n, t)
                    }
                }
            }
            let iM = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                iE = () => ({ ...iM(),
                    attrs: {}
                }),
                iR = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var ij = i(6204);
            let ik = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                iV = iy._.length;
            var iD = i(7249);

            function iO(t, e, i) {
                let {
                    style: n,
                    vars: r,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (iy.G.has(t)) {
                        o = !0;
                        continue
                    }
                    if ((0, iD.f)(t)) {
                        r[t] = i;
                        continue
                    } {
                        let e = iR(i, ij.j[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                        let n = "",
                            r = !0;
                        for (let s = 0; s < iV; s++) {
                            let o = iy._[s],
                                a = t[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                                let t = iR(a, ij.j[o]);
                                if (!l) {
                                    r = !1;
                                    let e = ik[o] || o;
                                    n += `${e}(${t}) `
                                }
                                i && (e[o] = t)
                            }
                        }
                        return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
                    }(e, t.transform, i) : n.transform && (n.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = s;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }

            function iL(t, e, i) {
                return "string" == typeof t ? t : tb.px.transform(e + i * t)
            }
            let i_ = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                iF = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function iI(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c) {
                if (iO(t, u, c), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: f,
                    dimensions: p
                } = t;
                d.transform && (p && (f.transform = d.transform), delete d.transform), p && (void 0 !== r || void 0 !== s || f.transform) && (f.transformOrigin = function(t, e, i) {
                    let n = iL(e, t.x, t.width),
                        r = iL(i, t.y, t.height);
                    return `${n} ${r}`
                }(p, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (d.x = e), void 0 !== i && (d.y = i), void 0 !== n && (d.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? i_ : iF;
                    t[s.offset] = tb.px.transform(-n);
                    let o = tb.px.transform(e),
                        a = tb.px.transform(i);
                    t[s.array] = `${o} ${a}`
                }(d, o, a, l, !1)
            }
            let iB = t => "string" == typeof t && "svg" === t.toLowerCase(),
                iW = {
                    useVisualState: iA({
                        scrapeMotionValuesFromProps: ib,
                        createRenderState: iE,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            D.Wi.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), D.Wi.render(() => {
                                iI(i, n, iB(e.tagName), t.transformTemplate), iv(e, i)
                            })
                        }
                    })
                },
                iN = {
                    useVisualState: iA({
                        applyWillChange: !0,
                        scrapeMotionValuesFromProps: iP,
                        createRenderState: iM
                    })
                };

            function iU(t, e, i) {
                for (let n in e)(0, ef.i)(e[n]) || ix(n, i) || (t[n] = e[n])
            }
            let i$ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function iz(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || i$.has(t)
            }
            let iX = t => !iz(t);
            try {
                (r = require("@emotion/is-prop-valid").default) && (iX = t => t.startsWith("on") ? !iz(t) : r(t))
            } catch (t) {}
            var iK = i(2005);
            let iY = {
                    current: null
                },
                iG = {
                    current: !1
                },
                iZ = new WeakMap;
            var iH = i(9545),
                iq = i(4946),
                iQ = i(3697),
                iJ = i(3964),
                i0 = i(8580),
                i1 = i(5113);
            let i5 = [...i0.$, iJ.$, tB.P],
                i2 = t => i5.find((0, i1.l)(t));
            var i4 = i(5861);
            let i3 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class i9 {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    blockInitialAnimation: r,
                    visualState: s
                }, o = {}) {
                    this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = iH.e, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = em.X.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, D.Wi.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = ir(e), this.isVariantNode = is(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && (0, ef.i)(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, iZ.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), iG.current || function() {
                        if (iG.current = !0, iu.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => iY.current = t.matches;
                                t.addListener(e), e()
                            } else iY.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iY.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in iZ.delete(this.current), this.projection && this.projection.unmount(), (0, D.Pn)(this.notifyUpdate), (0, D.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = iy.G.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && D.Wi.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        r(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in il) {
                        let e = il[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ta()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < i3.length; e++) {
                        let i = i3[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let r = e[n],
                                s = i[n];
                            if ((0, ef.i)(r)) t.addValue(n, r);
                            else if ((0, ef.i)(s)) t.addValue(n, (0, eg.BX)(r, {
                                owner: t
                            }));
                            else if (s !== r) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, (0, eg.BX)(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, eg.BX)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && ((0, iq.P)(n) || (0, iQ.W)(n)) ? n = parseFloat(n) : !i2(n) && tB.P.test(e) && (n = (0, i4.T)(t, e)), this.setBaseTarget(t, (0, ef.i)(n) ? n.get() : n)), (0, ef.i)(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let r = (0, iw.o)(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        r && (i = r[t])
                    }
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || (0, ef.i)(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new tK.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            var i7 = i(4238);
            class i6 extends i9 {
                constructor() {
                    super(...arguments), this.KeyframeResolver = i7.s
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
            }
            class i8 extends i6 {
                constructor() {
                    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = im
                }
                readValueFromInstance(t, e) {
                    if (iy.G.has(e)) {
                        let t = (0, iK.A)(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = ((0, iD.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return tP(t, e)
                }
                build(t, e, i) {
                    iO(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return iP(t, e, i)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, ef.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class nt extends i6 {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ta
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (iy.G.has(e)) {
                        let t = (0, iK.A)(e);
                        return t && t.default || 0
                    }
                    return e = ig.has(e) ? e : (0, ip.D)(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return ib(t, e, i)
                }
                build(t, e, i) {
                    iI(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    iv(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = iB(t.tagName), super.mount(t)
                }
            }
            let ne = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((s = {
                animation: {
                    Feature: P
                },
                exit: {
                    Feature: w
                },
                inView: {
                    Feature: e7
                },
                tap: {
                    Feature: e1
                },
                focus: {
                    Feature: eQ
                },
                hover: {
                    Feature: eq
                },
                pan: {
                    Feature: tj
                },
                drag: {
                    Feature: tE,
                    ProjectionNode: eZ,
                    MeasureLayout: tz
                },
                layout: {
                    ProjectionNode: eZ,
                    MeasureLayout: tz
                }
            }, o = (t, e) => id(t) ? new nt(e) : new i8(e, {
                allowProjection: t !== tV.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    let {
                        preloadedFeatures: e,
                        createVisualElement: i,
                        useRender: n,
                        useVisualState: r,
                        Component: s
                    } = t;
                    e && function(t) {
                        for (let e in t) il[e] = { ...il[e],
                            ...t[e]
                        }
                    }(e);
                    let o = (0, tV.forwardRef)(function(t, e) {
                        var o;
                        let a;
                        let l = { ...(0, tV.useContext)(e6._),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, tV.useContext)(tO.p).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: h
                            } = l,
                            c = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if (ir(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || u(e) ? e : void 0,
                                            animate: u(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, tV.useContext)(e8));
                                return (0, tV.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [io(e), io(i)])
                            }(t),
                            d = r(t, h);
                        if (!h && iu.j) {
                            (0, tV.useContext)(ie).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = il;
                                if (!e && !i) return {};
                                let n = { ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(l);
                            a = t.MeasureLayout, c.visualElement = function(t, e, i, n, r) {
                                var s, o;
                                let {
                                    visualElement: a
                                } = (0, tV.useContext)(e8), l = (0, tV.useContext)(ie), u = (0, tV.useContext)(tD.O), h = (0, tV.useContext)(e6._).reducedMotion, c = (0, tV.useRef)();
                                n = n || l.renderer, !c.current && n && (c.current = n(t, {
                                    visualState: e,
                                    parent: a,
                                    props: i,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: h
                                }));
                                let d = c.current,
                                    f = (0, tV.useContext)(tL);
                                d && !d.projection && r && ("html" === d.type || "svg" === d.type) && function(t, e, i, n) {
                                    let {
                                        layoutId: r,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: r,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && z(a),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: n,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(c.current, i, r, f), (0, tV.useInsertionEffect)(() => {
                                    d && d.update(i, u)
                                });
                                let p = i[ii.M],
                                    m = (0, tV.useRef)(!!p && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, p)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, p)));
                                return (0, it.L)(() => {
                                    d && (window.MotionIsMounted = !0, d.updateFeatures(), tN.render(d.render), m.current && d.animationState && d.animationState.animateChanges())
                                }), (0, tV.useEffect)(() => {
                                    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, p)
                                    }), m.current = !1))
                                }), d
                            }(s, d, l, i, t.ProjectionNode)
                        }
                        return (0, tk.jsxs)(e8.Provider, {
                            value: c,
                            children: [a && c.visualElement ? (0, tk.jsx)(a, {
                                visualElement: c.visualElement,
                                ...l
                            }) : null, n(s, t, (o = c.visualElement, (0, tV.useCallback)(t => {
                                t && d.mount && d.mount(t), o && (t ? o.mount(t) : o.unmount()), e && ("function" == typeof e ? e(t) : z(e) && (e.current = t))
                            }, [o])), d, h, c.visualElement)]
                        })
                    });
                    return o[ih] = s, o
                }({ ...id(t) ? iW : iN,
                    preloadedFeatures: s,
                    useRender: function(t = !1) {
                        return (e, i, n, {
                            latestValues: r
                        }, s) => {
                            let o = (id(e) ? function(t, e, i, n) {
                                    let r = (0, tV.useMemo)(() => {
                                        let i = iE();
                                        return iI(i, e, iB(n), t.transformTemplate), { ...i.attrs,
                                            style: { ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        iU(e, t.style, t), r.style = { ...e,
                                            ...r.style
                                        }
                                    }
                                    return r
                                } : function(t, e) {
                                    let i = {},
                                        n = function(t, e) {
                                            let i = t.style || {},
                                                n = {};
                                            return iU(n, i, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, tV.useMemo)(() => {
                                                    let i = iM();
                                                    return iO(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                                })(i, r, s, e),
                                a = function(t, e, i) {
                                    let n = {};
                                    for (let r in t)("values" !== r || "object" != typeof t.values) && (iX(r) || !0 === i && iz(r) || !e && !iz(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                    return n
                                }(i, "string" == typeof e, t),
                                l = e !== tV.Fragment ? { ...a,
                                    ...o,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = i,
                                h = (0, tV.useMemo)(() => (0, ef.i)(u) ? u.get() : u, [u]);
                            return (0, tV.createElement)(e, { ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: o,
                    Component: t
                })
            }))
        },
        4238: function(t, e, i) {
            i.d(e, {
                s: function() {
                    return p
                }
            });
            var n = i(3697),
                r = i(3223),
                s = i(4946),
                o = i(7249);
            let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var l = i(401),
                u = i(8580),
                h = i(9545),
                c = i(3206),
                d = i(5861);
            let f = new Set(["auto", "none", "0"]);
            class p extends h.e {
                constructor(t, e, i, n, r) {
                    super(t, e, i, n, r, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && (n = n.trim(), (0, o.t)(n))) {
                            let l = function t(e, i, n = 1) {
                                (0, r.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [l, u] = function(t) {
                                    let e = a.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, r] = e;
                                    return [`--${null!=i?i:n}`, r]
                                }(e);
                                if (!l) return;
                                let h = window.getComputedStyle(i).getPropertyValue(l);
                                if (h) {
                                    let t = h.trim();
                                    return (0, s.P)(t) ? parseFloat(t) : t
                                }
                                return (0, o.t)(u) ? t(u, i, n + 1) : u
                            }(n, e.current);
                            void 0 !== l && (t[i] = l), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length) return;
                    let [n, h] = t, c = (0, u.C)(n), d = (0, u.C)(h);
                    if (c !== d) {
                        if ((0, l.mP)(c) && (0, l.mP)(d))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var r;
                        ("number" == typeof(r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || (0, n.W)(r)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, r = 0;
                        for (; r < t.length && !n;) {
                            let e = t[r];
                            "string" == typeof e && !f.has(e) && (0, c.V)(e).values.length && (n = t[r]), r++
                        }
                        if (n && i)
                            for (let r of e) t[r] = (0, d.T)(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = l.lw[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let r = e.getValue(i);
                    r && r.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        o = n[s];
                    n[s] = l.lw[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }
        },
        7444: function(t, e, i) {
            i.d(e, {
                D: function() {
                    return n
                }
            });
            let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        7249: function(t, e, i) {
            i.d(e, {
                f: function() {
                    return r
                },
                t: function() {
                    return o
                }
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                r = n("--"),
                s = n("var(--"),
                o = t => !!s(t) && a.test(t.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        401: function(t, e, i) {
            i.d(e, {
                Ei: function() {
                    return d
                },
                lw: function() {
                    return f
                },
                mP: function() {
                    return a
                },
                z2: function() {
                    return o
                }
            });
            var n = i(8834),
                r = i(4305),
                s = i(7492);
            let o = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                a = t => t === r.Rx || t === s.px,
                l = (t, e) => parseFloat(t.split(", ")[e]),
                u = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/u);
                    if (r) return l(r[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? l(e[1], t) : 0
                    }
                },
                h = new Set(["x", "y", "z"]),
                c = n._.filter(t => !h.has(t));

            function d(t) {
                let e = [];
                return c.forEach(i => {
                    let n = t.getValue(i);
                    void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                }), e
            }
            let f = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: u(4, 13),
                y: u(5, 14)
            };
            f.translateX = f.x, f.translateY = f.y
        },
        5861: function(t, e, i) {
            i.d(e, {
                T: function() {
                    return o
                }
            });
            var n = i(3206),
                r = i(2779),
                s = i(2005);

            function o(t, e) {
                let i = (0, s.A)(t);
                return i !== r.h && (i = n.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
        },
        2005: function(t, e, i) {
            i.d(e, {
                A: function() {
                    return o
                }
            });
            var n = i(3964),
                r = i(2779);
            let s = { ...i(6204).j,
                    color: n.$,
                    backgroundColor: n.$,
                    outlineColor: n.$,
                    fill: n.$,
                    stroke: n.$,
                    borderColor: n.$,
                    borderTopColor: n.$,
                    borderRightColor: n.$,
                    borderBottomColor: n.$,
                    borderLeftColor: n.$,
                    filter: r.h,
                    WebkitFilter: r.h
                },
                o = t => s[t]
        },
        8580: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return o
                },
                C: function() {
                    return a
                }
            });
            var n = i(4305),
                r = i(7492),
                s = i(5113);
            let o = [n.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                a = t => o.find((0, s.l)(t))
        },
        6204: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return l
                }
            });
            var n = i(4305),
                r = i(7492);
            let s = {
                    borderWidth: r.px,
                    borderTopWidth: r.px,
                    borderRightWidth: r.px,
                    borderBottomWidth: r.px,
                    borderLeftWidth: r.px,
                    borderRadius: r.px,
                    radius: r.px,
                    borderTopLeftRadius: r.px,
                    borderTopRightRadius: r.px,
                    borderBottomRightRadius: r.px,
                    borderBottomLeftRadius: r.px,
                    width: r.px,
                    maxWidth: r.px,
                    height: r.px,
                    maxHeight: r.px,
                    top: r.px,
                    right: r.px,
                    bottom: r.px,
                    left: r.px,
                    padding: r.px,
                    paddingTop: r.px,
                    paddingRight: r.px,
                    paddingBottom: r.px,
                    paddingLeft: r.px,
                    margin: r.px,
                    marginTop: r.px,
                    marginRight: r.px,
                    marginBottom: r.px,
                    marginLeft: r.px,
                    backgroundPositionX: r.px,
                    backgroundPositionY: r.px
                },
                o = {
                    rotate: r.RW,
                    rotateX: r.RW,
                    rotateY: r.RW,
                    rotateZ: r.RW,
                    scale: n.bA,
                    scaleX: n.bA,
                    scaleY: n.bA,
                    scaleZ: n.bA,
                    skew: r.RW,
                    skewX: r.RW,
                    skewY: r.RW,
                    distance: r.px,
                    translateX: r.px,
                    translateY: r.px,
                    translateZ: r.px,
                    x: r.px,
                    y: r.px,
                    z: r.px,
                    perspective: r.px,
                    transformPerspective: r.px,
                    opacity: n.Fq,
                    originX: r.$C,
                    originY: r.$C,
                    originZ: r.px
                },
                a = { ...n.Rx,
                    transform: Math.round
                },
                l = { ...s,
                    ...o,
                    zIndex: a,
                    size: r.px,
                    fillOpacity: n.Fq,
                    strokeOpacity: n.Fq,
                    numOctaves: a
                }
        },
        5113: function(t, e, i) {
            i.d(e, {
                l: function() {
                    return n
                }
            });
            let n = t => e => e.test(t)
        },
        8834: function(t, e, i) {
            i.d(e, {
                G: function() {
                    return r
                },
                _: function() {
                    return n
                }
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                r = new Set(n)
        },
        9545: function(t, e, i) {
            i.d(e, {
                e: function() {
                    return c
                },
                m: function() {
                    return h
                }
            });
            var n = i(401),
                r = i(5414);
            let s = new Set,
                o = !1,
                a = !1;

            function l() {
                if (a) {
                    let t = Array.from(s).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = (0, n.Ei)(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                a = !1, o = !1, s.forEach(t => t.complete()), s.clear()
            }

            function u() {
                s.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (a = !0)
                })
            }

            function h() {
                u(), l()
            }
            class c {
                constructor(t, e, i, n, r, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (s.add(this), o || (o = !0, r.Wi.read(u), r.Wi.resolveKeyframes(l))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    for (let r = 0; r < t.length; r++)
                        if (null === t[r]) {
                            if (0 === r) {
                                let r = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== r) t[0] = r;
                                else if (i && e) {
                                    let n = i.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                            } else t[r] = t[r - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), s.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, s.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
        },
        8775: function(t, e, i) {
            i.d(e, {
                x: function() {
                    return r
                }
            });
            var n = i(1297);

            function r(t, e, i) {
                let r = t.getProps();
                return (0, n.o)(r, e, void 0 !== i ? i : r.custom, t)
            }
        },
        1297: function(t, e, i) {
            function n(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function r(t, e, i, r) {
                if ("function" == typeof e) {
                    let [s, o] = n(r);
                    e = e(void 0 !== i ? i : t.custom, s, o)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [s, o] = n(r);
                    e = e(void 0 !== i ? i : t.custom, s, o)
                }
                return e
            }
            i.d(e, {
                o: function() {
                    return r
                }
            })
        },
        8771: function(t, e, i) {
            i.d(e, {
                C: function() {
                    return o
                }
            });
            var n = i(4581),
                r = i(3078),
                s = i(8775);

            function o(t, e) {
                let {
                    transitionEnd: i = {},
                    transition: o = {},
                    ...a
                } = (0, s.x)(t, e) || {};
                for (let e in a = { ...a,
                        ...i
                    }) {
                    let i = (0, n.Y)(a[e]);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i))
                }
            }
        },
        4118: function(t, e, i) {
            i.d(e, {
                c: function() {
                    return n
                }
            });
            let n = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        9013: function(t, e, i) {
            function n(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            i.d(e, {
                cl: function() {
                    return r
                },
                y4: function() {
                    return n
                }
            })
        },
        9111: function(t, e, i) {
            i.d(e, {
                u: function() {
                    return n
                }
            });
            let n = (t, e, i) => i > e ? e : i < t ? t : i
        },
        3223: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(4439);
            let r = n.Z,
                s = n.Z
        },
        4563: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof window
        },
        4946: function(t, e, i) {
            i.d(e, {
                P: function() {
                    return n
                }
            });
            let n = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
        },
        3697: function(t, e, i) {
            i.d(e, {
                W: function() {
                    return n
                }
            });
            let n = t => /^0[^.\s]+$/u.test(t)
        },
        6781: function(t, e, i) {
            i.d(e, {
                t: function() {
                    return n
                }
            });
            let n = (t, e, i) => t + (e - t) * i
        },
        4439: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        332: function(t, e, i) {
            i.d(e, {
                z: function() {
                    return r
                }
            });
            let n = (t, e) => i => e(t(i)),
                r = (...t) => t.reduce(n)
        },
        6376: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            let n = (t, e, i) => {
                let n = e - t;
                return 0 === n ? 1 : (i - t) / n
            }
        },
        4581: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return s
                },
                p: function() {
                    return r
                }
            });
            var n = i(4944);
            let r = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                s = t => (0, n.C)(t) ? t[t.length - 1] || 0 : t
        },
        4081: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(9013);
            class r {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, n.y4)(this.subscriptions, t), () => (0, n.cl)(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        6717: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return r
                },
                w: function() {
                    return n
                }
            });
            let n = t => 1e3 * t,
                r = t => t / 1e3
        },
        3576: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return r
                }
            });
            var n = i(2265);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        1534: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(2265);
            let r = i(4563).j ? n.useLayoutEffect : n.useEffect
        },
        4438: function(t, e, i) {
            i.d(e, {
                R: function() {
                    return n
                }
            });

            function n(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        3078: function(t, e, i) {
            i.d(e, {
                BX: function() {
                    return h
                }
            });
            var n = i(4081),
                r = i(4438),
                s = i(504),
                o = i(5414);
            let a = t => !isNaN(parseFloat(t)),
                l = {
                    current: void 0
                };
            class u {
                constructor(t, e = {}) {
                    this.version = "11.11.8", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = s.X.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = s.X.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new n.L);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), o.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = s.X.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, r.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function h(t, e) {
                return new u(t, e)
            }
        },
        7325: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return r
                }
            });
            var n = i(8859);
            let r = {
                test: (0, i(5516).i)("#"),
                parse: function(t) {
                    let e = "",
                        i = "",
                        n = "",
                        r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(n, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                },
                transform: n.m.transform
            }
        },
        2943: function(t, e, i) {
            i.d(e, {
                J: function() {
                    return a
                }
            });
            var n = i(4305),
                r = i(7492),
                s = i(5472),
                o = i(5516);
            let a = {
                test: (0, o.i)("hsl", "hue"),
                parse: (0, o.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: o = 1
                }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0, s.N)(e)) + ", " + r.aQ.transform((0, s.N)(i)) + ", " + (0, s.N)(n.Fq.transform(o)) + ")"
            }
        },
        3964: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return o
                }
            });
            var n = i(7325),
                r = i(2943),
                s = i(8859);
            let o = {
                test: t => s.m.test(t) || n.$.test(t) || r.J.test(t),
                parse: t => s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : n.$.parse(t),
                transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.m.transform(t) : r.J.transform(t)
            }
        },
        8859: function(t, e, i) {
            i.d(e, {
                m: function() {
                    return u
                }
            });
            var n = i(9111),
                r = i(4305),
                s = i(5472),
                o = i(5516);
            let a = t => (0, n.u)(0, 255, t),
                l = { ...r.Rx,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, o.i)("rgb", "red"),
                    parse: (0, o.d)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0, s.N)(r.Fq.transform(n)) + ")"
                }
        },
        5516: function(t, e, i) {
            i.d(e, {
                i: function() {
                    return s
                },
                d: function() {
                    return o
                }
            });
            var n = i(6941);
            let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                s = (t, e) => i => !!("string" == typeof i && r.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                o = (t, e, i) => r => {
                    if ("string" != typeof r) return r;
                    let [s, o, a, l] = r.match(n.K);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(o),
                        [i]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        2779: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return l
                }
            });
            var n = i(3206),
                r = i(6941);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function o(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(r.K) || [];
                if (!n) return t;
                let o = i.replace(n, ""),
                    a = s.has(e) ? 1 : 0;
                return n !== i && (a *= 100), e + "(" + a + o + ")"
            }
            let a = /\b([a-z-]*)\(.*?\)/gu,
                l = { ...n.P,
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(o).join(" ") : t
                    }
                }
        },
        3206: function(t, e, i) {
            i.d(e, {
                V: function() {
                    return h
                },
                P: function() {
                    return p
                }
            });
            var n = i(3964);
            let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var s = i(6941),
                o = i(5472);
            let a = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function h(t) {
                let e = t.toString(),
                    i = [],
                    r = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [],
                    o = 0,
                    h = e.replace(u, t => (n.$.test(t) ? (r.color.push(o), s.push(l), i.push(n.$.parse(t))) : t.startsWith("var(") ? (r.var.push(o), s.push("var"), i.push(t)) : (r.number.push(o), s.push(a), i.push(parseFloat(t))), ++o, "${}")).split("${}");
                return {
                    values: i,
                    split: h,
                    indexes: r,
                    types: s
                }
            }

            function c(t) {
                return h(t).values
            }

            function d(t) {
                let {
                    split: e,
                    types: i
                } = h(t), r = e.length;
                return t => {
                    let s = "";
                    for (let u = 0; u < r; u++)
                        if (s += e[u], void 0 !== t[u]) {
                            let e = i[u];
                            e === a ? s += (0, o.N)(t[u]) : e === l ? s += n.$.transform(t[u]) : s += t[u]
                        }
                    return s
                }
            }
            let f = t => "number" == typeof t ? 0 : t,
                p = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(s.K)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(r)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: c,
                    createTransformer: d,
                    getAnimatableNone: function(t) {
                        let e = c(t);
                        return d(t)(e.map(f))
                    }
                }
        },
        4305: function(t, e, i) {
            i.d(e, {
                Fq: function() {
                    return s
                },
                Rx: function() {
                    return r
                },
                bA: function() {
                    return o
                }
            });
            var n = i(9111);
            let r = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...r,
                    transform: t => (0, n.u)(0, 1, t)
                },
                o = { ...r,
                    default: 1
                }
        },
        7492: function(t, e, i) {
            i.d(e, {
                $C: function() {
                    return u
                },
                RW: function() {
                    return r
                },
                aQ: function() {
                    return s
                },
                px: function() {
                    return o
                },
                vh: function() {
                    return a
                },
                vw: function() {
                    return l
                }
            });
            let n = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                r = n("deg"),
                s = n("%"),
                o = n("px"),
                a = n("vh"),
                l = n("vw"),
                u = { ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        6941: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return n
                }
            });
            let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        5472: function(t, e, i) {
            i.d(e, {
                N: function() {
                    return n
                }
            });
            let n = t => Math.round(1e5 * t) / 1e5
        },
        1327: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return s
                }
            });
            var n = i(3999),
                r = i(6957);

            function s(t, e) {
                var i;
                if (!t.applyWillChange) return;
                let s = t.getValue("willChange");
                if ((0, n.i)(s) && s.add) return s.add(e);
                !(null === (i = t.props.style) || void 0 === i ? void 0 : i.willChange) && (0, r.p)(e) && t.setStaticValue("willChange", "transform")
            }
        },
        6957: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return o
                }
            });
            var n = i(9083),
                r = i(7444),
                s = i(8834);

            function o(t) {
                return s.G.has(t) ? "transform" : n.t.has(t) ? (0, r.D)(t) : void 0
            }
        },
        3999: function(t, e, i) {
            i.d(e, {
                i: function() {
                    return n
                }
            });
            let n = t => !!(t && t.getVelocity)
        }
    }
]);