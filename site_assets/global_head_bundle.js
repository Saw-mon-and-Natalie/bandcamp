/* 
    concatenation of
    
    yahoo-dom-event.js, 
    get-min.js, 
    connection-min.js, 
    jquery-1.7.1.min.js, 
    jquery_utils.js, 
    utils_boot.js, 
    capabilities.js, 
    media_view.js, 
    control.js, 
    stats.js, 
    tp_controller.js, 
    trackpipe.js, 
    swfobject.js, 
    flashproxy.js, 
    html5sound.js, 
    sound.js, 
    cookie.js, 
    hidden_params.js 
*/
if (typeof YAHOO == "undefined" || !YAHOO)
    var YAHOO = {};
YAHOO.namespace = function() {
    var b = arguments;
    var g = null;
    var e;
    var c;
    var f;
    for (e = 0; e < b.length; e = e + 1) {
        f = ("" + b[e]).split(".");
        g = YAHOO;
        for (c = f[0] == "YAHOO" ? 1 : 0; c < f.length; c = c + 1) {
            g[f[c]] = g[f[c]] || {};
            g = g[f[c]]
        }
    }
    return g
}
;
YAHOO.log = function(d, a, c) {
    var b = YAHOO.widget.Logger;
    if (b && b.log)
        return b.log(d, a, c);
    else
        return false
}
;
YAHOO.register = function(a, f, e) {
    var k = YAHOO.env.modules;
    var c;
    var j;
    var h;
    var g;
    var d;
    if (!k[a])
        k[a] = {
            versions: [],
            builds: []
        };
    c = k[a];
    j = e.version;
    h = e.build;
    g = YAHOO.env.listeners;
    c.name = a;
    c.version = j;
    c.build = h;
    c.versions.push(j);
    c.builds.push(h);
    c.mainClass = f;
    for (d = 0; d < g.length; d = d + 1)
        g[d](c);
    if (f) {
        f.VERSION = j;
        f.BUILD = h
    } else
        YAHOO.log("mainClass is undefined for module " + a, "warn")
}
;
YAHOO.env = YAHOO.env || {
    modules: [],
    listeners: []
};
YAHOO.env.getVersion = function(a) {
    return YAHOO.env.modules[a] || null
}
;
YAHOO.env.parseUA = function(d) {
    var e = function(i) {
        var j = 0;
        return parseFloat(i.replace(/\./g, function() {
            return j++ == 1 ? "" : "."
        }))
    };
    var h = navigator;
    var g = {
        ie: 0,
        opera: 0,
        gecko: 0,
        webkit: 0,
        chrome: 0,
        mobile: null,
        air: 0,
        ipad: 0,
        iphone: 0,
        ipod: 0,
        ios: null,
        android: 0,
        webos: 0,
        caja: h && h.cajaVersion,
        secure: false,
        os: null
    };
    var c = d || navigator && navigator.userAgent;
    var f = window && window.location;
    var b = f && f.href;
    var a;
    g.secure = b && b.toLowerCase().indexOf("https") === 0;
    if (c) {
        if (/windows|win32/i.test(c))
            g.os = "windows";
        else if (/macintosh/i.test(c))
            g.os = "macintosh";
        else if (/rhino/i.test(c))
            g.os = "rhino";
        if (/KHTML/.test(c))
            g.webkit = 1;
        a = c.match(/AppleWebKit\/([^\s]*)/);
        if (a && a[1]) {
            g.webkit = e(a[1]);
            if (/ Mobile\//.test(c)) {
                g.mobile = "Apple";
                a = c.match(/OS ([^\s]*)/);
                if (a && a[1])
                    a = e(a[1].replace("_", "."));
                g.ios = a;
                g.ipad = g.ipod = g.iphone = 0;
                a = c.match(/iPad|iPod|iPhone/);
                if (a && a[0])
                    g[a[0].toLowerCase()] = g.ios
            } else {
                a = c.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
                if (a)
                    g.mobile = a[0];
                if (/webOS/.test(c)) {
                    g.mobile = "WebOS";
                    a = c.match(/webOS\/([^\s]*);/);
                    if (a && a[1])
                        g.webos = e(a[1])
                }
                if (/ Android/.test(c)) {
                    g.mobile = "Android";
                    a = c.match(/Android ([^\s]*);/);
                    if (a && a[1])
                        g.android = e(a[1])
                }
            }
            a = c.match(/Chrome\/([^\s]*)/);
            if (a && a[1])
                g.chrome = e(a[1]);
            else {
                a = c.match(/AdobeAIR\/([^\s]*)/);
                if (a)
                    g.air = a[0]
            }
        }
        if (!g.webkit) {
            a = c.match(/Opera[\s\/]([^\s]*)/);
            if (a && a[1]) {
                g.opera = e(a[1]);
                a = c.match(/Version\/([^\s]*)/);
                if (a && a[1])
                    g.opera = e(a[1]);
                a = c.match(/Opera Mini[^;]*/);
                if (a)
                    g.mobile = a[0]
            } else {
                a = c.match(/MSIE\s([^;]*)/);
                if (a && a[1])
                    g.ie = e(a[1]);
                else {
                    a = c.match(/Gecko\/([^\s]*)/);
                    if (a) {
                        g.gecko = 1;
                        a = c.match(/rv:([^\s\)]*)/);
                        if (a && a[1])
                            g.gecko = e(a[1])
                    }
                }
            }
        }
    }
    return g
}
;
YAHOO.env.ua = YAHOO.env.parseUA();
(function() {
    YAHOO.namespace("util", "widget", "example");
    if ("undefined" !== typeof YAHOO_config) {
        var b = YAHOO_config.listener;
        var a = YAHOO.env.listeners;
        var d = true;
        var c;
        if (b) {
            for (c = 0; c < a.length; c++)
                if (a[c] == b) {
                    d = false;
                    break
                }
            if (d)
                a.push(b)
        }
    }
}
)();
YAHOO.lang = YAHOO.lang || {};
(function() {
    var f = YAHOO.lang;
    var a = Object.prototype;
    var c = "[object Array]";
    var h = "[object Function]";
    var i = "[object Object]";
    var b = [];
    var g = {
        "\x26": "\x26amp;",
        "\x3c": "\x26lt;",
        "\x3e": "\x26gt;",
        '"': "\x26quot;",
        "'": "\x26#x27;",
        "/": "\x26#x2F;",
        "`": "\x26#x60;"
    };
    var d = ["toString", "valueOf"];
    var e = {
        isArray: function(j) {
            return a.toString.apply(j) === c
        },
        isBoolean: function(j) {
            return typeof j === "boolean"
        },
        isFunction: function(j) {
            return typeof j === "function" || a.toString.apply(j) === h
        },
        isNull: function(j) {
            return j === null
        },
        isNumber: function(j) {
            return typeof j === "number" && isFinite(j)
        },
        isObject: function(j) {
            return j && (typeof j === "object" || f.isFunction(j)) || false
        },
        isString: function(j) {
            return typeof j === "string"
        },
        isUndefined: function(j) {
            return typeof j === "undefined"
        },
        _IEEnumFix: YAHOO.env.ua.ie ? function(l, k) {
            var j;
            var n;
            var m;
            for (j = 0; j < d.length; j = j + 1) {
                n = d[j];
                m = k[n];
                if (f.isFunction(m) && m != a[n])
                    l[n] = m
            }
        }
        : function() {}
        ,
        escapeHTML: function(j) {
            return j.replace(/[&<>"'\/`]/g, function(k) {
                return g[k]
            })
        },
        extend: function(m, n, l) {
            if (!n || !m)
                throw new Error("extend failed, please check that " + "all dependencies are included.");
            var k = function() {};
            var j;
            k.prototype = n.prototype;
            m.prototype = new k;
            m.prototype.constructor = m;
            m.superclass = n.prototype;
            if (n.prototype.constructor == a.constructor)
                n.prototype.constructor = n;
            if (l) {
                for (j in l)
                    if (f.hasOwnProperty(l, j))
                        m.prototype[j] = l[j];
                f._IEEnumFix(m.prototype, l)
            }
        },
        augmentObject: function(n, m) {
            if (!m || !n)
                throw new Error("Absorb failed, verify dependencies.");
            var j = arguments;
            var l;
            var o;
            var k = j[2];
            if (k && k !== true)
                for (l = 2; l < j.length; l = l + 1)
                    n[j[l]] = m[j[l]];
            else {
                for (o in m)
                    if (k || !(o in n))
                        n[o] = m[o];
                f._IEEnumFix(n, m)
            }
            return n
        },
        augmentProto: function(m, l) {
            if (!l || !m)
                throw new Error("Augment failed, verify dependencies.");
            var j = [m.prototype, l.prototype];
            var k;
            for (k = 2; k < arguments.length; k = k + 1)
                j.push(arguments[k]);
            f.augmentObject.apply(this, j);
            return m
        },
        dump: function(j, p) {
            var l;
            var n;
            var r = [];
            var t = "{...}";
            var k = "f(){...}";
            var q = ", ";
            var m = " \x3d\x3e ";
            if (!f.isObject(j))
                return j + "";
            else if (j instanceof Date || "nodeType"in j && "tagName"in j)
                return j;
            else if (f.isFunction(j))
                return k;
            p = f.isNumber(p) ? p : 3;
            if (f.isArray(j)) {
                r.push("[");
                for (l = 0,
                n = j.length; l < n; l = l + 1) {
                    if (f.isObject(j[l]))
                        r.push(p > 0 ? f.dump(j[l], p - 1) : t);
                    else
                        r.push(j[l]);
                    r.push(q)
                }
                if (r.length > 1)
                    r.pop();
                r.push("]")
            } else {
                r.push("{");
                for (l in j)
                    if (f.hasOwnProperty(j, l)) {
                        r.push(l + m);
                        if (f.isObject(j[l]))
                            r.push(p > 0 ? f.dump(j[l], p - 1) : t);
                        else
                            r.push(j[l]);
                        r.push(q)
                    }
                if (r.length > 1)
                    r.pop();
                r.push("}")
            }
            return r.join("")
        },
        substitute: function(x, y, E, l) {
            var D;
            var C;
            var B;
            var G;
            var t;
            var u;
            var F = [];
            var p;
            var z = x.length;
            var A = "dump";
            var r = " ";
            var q = "{";
            var m = "}";
            var n;
            for (var w; ; ) {
                D = x.lastIndexOf(q, z);
                if (D < 0)
                    break;
                C = x.indexOf(m, D);
                if (D + 1 > C)
                    break;
                p = x.substring(D + 1, C);
                G = p;
                u = null;
                B = G.indexOf(r);
                if (B > -1) {
                    u = G.substring(B + 1);
                    G = G.substring(0, B)
                }
                t = y[G];
                if (E)
                    t = E(G, t, u);
                if (f.isObject(t))
                    if (f.isArray(t))
                        t = f.dump(t, parseInt(u, 10));
                    else {
                        u = u || "";
                        n = u.indexOf(A);
                        if (n > -1)
                            u = u.substring(4);
                        w = t.toString();
                        if (w === i || n > -1)
                            t = f.dump(t, parseInt(u, 10));
                        else
                            t = w
                    }
                else if (!f.isString(t) && !f.isNumber(t)) {
                    t = "~-" + F.length + "-~";
                    F[F.length] = p
                }
                x = x.substring(0, D) + t + x.substring(C + 1);
                if (l === false)
                    z = D - 1
            }
            for (D = F.length - 1; D >= 0; D = D - 1)
                x = x.replace(new RegExp("~-" + D + "-~"), "{" + F[D] + "}", "g");
            return x
        },
        trim: function(j) {
            try {
                return j.replace(/^\s+|\s+$/g, "")
            } catch (k) {
                return j
            }
        },
        merge: function() {
            var n = {};
            var k = arguments;
            var j = k.length;
            var m;
            for (m = 0; m < j; m = m + 1)
                f.augmentObject(n, k[m], true);
            return n
        },
        later: function(t, k, u, n, p) {
            t = t || 0;
            k = k || {};
            var l = u;
            var s = n;
            var q;
            var j;
            if (f.isString(u))
                l = k[u];
            if (!l)
                throw new TypeError("method undefined");
            if (!f.isUndefined(n) && !f.isArray(s))
                s = [n];
            q = function() {
                l.apply(k, s || b)
            }
            ;
            j = p ? setInterval(q, t) : setTimeout(q, t);
            return {
                interval: p,
                cancel: function() {
                    if (this.interval)
                        clearInterval(j);
                    else
                        clearTimeout(j)
                }
            }
        },
        isValue: function(j) {
            return f.isObject(j) || f.isString(j) || f.isNumber(j) || f.isBoolean(j)
        }
    };
    f.hasOwnProperty = a.hasOwnProperty ? function(j, k) {
        return j && j.hasOwnProperty && j.hasOwnProperty(k)
    }
    : function(j, k) {
        return !f.isUndefined(j[k]) && j.constructor.prototype[k] !== j[k]
    }
    ;
    e.augmentObject(f, e, true);
    YAHOO.util.Lang = f;
    f.augment = f.augmentProto;
    YAHOO.augment = f.augmentProto;
    YAHOO.extend = f.extend
}
)();
YAHOO.register("yahoo", YAHOO, {
    version: "2.9.0",
    build: "2800"
});
(function() {
    YAHOO.env._id_counter = YAHOO.env._id_counter || 0;
    var e = YAHOO.util;
    var k = YAHOO.lang;
    var L = YAHOO.env.ua;
    var a = YAHOO.lang.trim;
    var B = {};
    var F = {};
    var m = /^t(?:able|d|h)$/i;
    var w = /color$/i;
    var j = window.document;
    var v = j.documentElement;
    var C = "ownerDocument";
    var M = "defaultView";
    var U = "documentElement";
    var S = "compatMode";
    var z = "offsetLeft";
    var o = "offsetTop";
    var T = "offsetParent";
    var x = "parentNode";
    var K = "nodeType";
    var c = "tagName";
    var n = "scrollLeft";
    var H = "scrollTop";
    var p = "getBoundingClientRect";
    var V = "getComputedStyle";
    var y = "currentStyle";
    var l = "CSS1Compat";
    var A = "BackCompat";
    var E = "class";
    var f = "className";
    var i = "";
    var b = " ";
    var R = "(?:^|\\s)";
    var J = "(?\x3d |$)";
    var t = "g";
    var O = "position";
    var D = "fixed";
    var u = "relative";
    var I = "left";
    var N = "top";
    var Q = "medium";
    var P = "borderLeftWidth";
    var q = "borderTopWidth";
    var d = L.opera;
    var h = L.webkit;
    var g = L.gecko;
    var s = L.ie;
    e.Dom = {
        CUSTOM_ATTRIBUTES: !v.hasAttribute ? {
            "for": "htmlFor",
            "class": f
        } : {
            "htmlFor": "for",
            "className": E
        },
        DOT_ATTRIBUTES: {
            checked: true
        },
        get: function(aa) {
            var ac;
            var X;
            var ab;
            var Z;
            var W;
            var G;
            var Y = null;
            if (aa) {
                if (typeof aa == "string" || typeof aa == "number") {
                    ac = aa + "";
                    aa = j.getElementById(aa);
                    G = aa ? aa.attributes : null;
                    if (aa && G && G.id && G.id.value === ac)
                        return aa;
                    else if (aa && j.all) {
                        aa = null;
                        X = j.all[ac];
                        if (X && X.length)
                            for (Z = 0,
                            W = X.length; Z < W; ++Z)
                                if (X[Z].id === ac)
                                    return X[Z]
                    }
                } else if (e.Element && aa instanceof e.Element)
                    aa = aa.get("element");
                else if (!aa.nodeType && "length"in aa) {
                    ab = [];
                    for (Z = 0,
                    W = aa.length; Z < W; ++Z)
                        ab[ab.length] = e.Dom.get(aa[Z]);
                    aa = ab
                }
                Y = aa
            }
            return Y
        },
        getComputedStyle: function(G, W) {
            if (window[V])
                return G[C][M][V](G, null)[W];
            else if (G[y])
                return e.Dom.IE_ComputedStyle.get(G, W)
        },
        getStyle: function(G, W) {
            return e.Dom.batch(G, e.Dom._getStyle, W)
        },
        _getStyle: function() {
            if (window[V])
                return function(G, Y) {
                    Y = Y === "float" ? Y = "cssFloat" : e.Dom._toCamel(Y);
                    var X = G.style[Y];
                    var W;
                    if (!X) {
                        W = G[C][M][V](G, null);
                        if (W)
                            X = W[Y]
                    }
                    return X
                }
                ;
            else if (v[y])
                return function(G, Y) {
                    var X;
                    switch (Y) {
                    case "opacity":
                        X = 100;
                        try {
                            X = G.filters["DXImageTransform.Microsoft.Alpha"].opacity
                        } catch (Z) {
                            try {
                                X = G.filters("alpha").opacity
                            } catch (W) {}
                        }
                        return X / 100;
                    case "float":
                        Y = "styleFloat";
                    default:
                        Y = e.Dom._toCamel(Y);
                        X = G[y] ? G[y][Y] : null;
                        return G.style[Y] || X
                    }
                }
        }(),
        setStyle: function(G, W, X) {
            e.Dom.batch(G, e.Dom._setStyle, {
                prop: W,
                val: X
            })
        },
        _setStyle: function() {
            if (!window.getComputedStyle && j.documentElement.currentStyle)
                return function(W, G) {
                    var X = e.Dom._toCamel(G.prop);
                    var Y = G.val;
                    if (W)
                        switch (X) {
                        case "opacity":
                            if (Y === "" || Y === null || Y === 1)
                                W.style.removeAttribute("filter");
                            else if (k.isString(W.style.filter)) {
                                W.style.filter = "alpha(opacity\x3d" + Y * 100 + ")";
                                if (!W[y] || !W[y].hasLayout)
                                    W.style.zoom = 1
                            }
                            break;
                        case "float":
                            X = "styleFloat";
                        default:
                            W.style[X] = Y
                        }
                    else
                        ;
                }
                ;
            else
                return function(W, G) {
                    var X = e.Dom._toCamel(G.prop);
                    var Y = G.val;
                    if (W) {
                        if (X == "float")
                            X = "cssFloat";
                        W.style[X] = Y
                    } else
                        ;
                }
        }(),
        getXY: function(G) {
            return e.Dom.batch(G, e.Dom._getXY)
        },
        _canPosition: function(G) {
            return e.Dom._getStyle(G, "display") !== "none" && e.Dom._inDoc(G)
        },
        _getXY: function(W) {
            var X;
            var G;
            var Z;
            var ab;
            var Y;
            var aa;
            var ac = Math.round;
            var ad = false;
            if (e.Dom._canPosition(W)) {
                Z = W[p]();
                ab = W[C];
                X = e.Dom.getDocumentScrollLeft(ab);
                G = e.Dom.getDocumentScrollTop(ab);
                ad = [Z[I], Z[N]];
                if (Y || aa) {
                    ad[0] -= aa;
                    ad[1] -= Y
                }
                if (G || X) {
                    ad[0] += X;
                    ad[1] += G
                }
                ad[0] = ac(ad[0]);
                ad[1] = ac(ad[1])
            } else
                ;return ad
        },
        getX: function(G) {
            var W = function(X) {
                return e.Dom.getXY(X)[0]
            };
            return e.Dom.batch(G, W, e.Dom, true)
        },
        getY: function(G) {
            var W = function(X) {
                return e.Dom.getXY(X)[1]
            };
            return e.Dom.batch(G, W, e.Dom, true)
        },
        setXY: function(G, X, W) {
            e.Dom.batch(G, e.Dom._setXY, {
                pos: X,
                noRetry: W
            })
        },
        _setXY: function(G, Z) {
            var aa = e.Dom._getStyle(G, O);
            var Y = e.Dom.setStyle;
            var ad = Z.pos;
            var W = Z.noRetry;
            var ab = [parseInt(e.Dom.getComputedStyle(G, I), 10), parseInt(e.Dom.getComputedStyle(G, N), 10)];
            var ac;
            var X;
            ac = e.Dom._getXY(G);
            if (!ad || ac === false)
                return false;
            if (aa == "static") {
                aa = u;
                Y(G, O, aa)
            }
            if (isNaN(ab[0]))
                ab[0] = aa == u ? 0 : G[z];
            if (isNaN(ab[1]))
                ab[1] = aa == u ? 0 : G[o];
            if (ad[0] !== null)
                Y(G, I, ad[0] - ac[0] + ab[0] + "px");
            if (ad[1] !== null)
                Y(G, N, ad[1] - ac[1] + ab[1] + "px");
            if (!W) {
                X = e.Dom._getXY(G);
                if (ad[0] !== null && X[0] != ad[0] || ad[1] !== null && X[1] != ad[1])
                    e.Dom._setXY(G, {
                        pos: ad,
                        noRetry: true
                    })
            }
        },
        setX: function(W, G) {
            e.Dom.setXY(W, [G, null])
        },
        setY: function(G, W) {
            e.Dom.setXY(G, [null, W])
        },
        getRegion: function(G) {
            var W = function(X) {
                var Y = false;
                if (e.Dom._canPosition(X))
                    Y = e.Region.getRegion(X);
                else
                    ;return Y
            };
            return e.Dom.batch(G, W, e.Dom, true)
        },
        getClientWidth: function() {
            return e.Dom.getViewportWidth()
        },
        getClientHeight: function() {
            return e.Dom.getViewportHeight()
        },
        getElementsByClassName: function(ab, af, ac, ae, X, ad) {
            af = af || "*";
            ac = ac ? e.Dom.get(ac) : null || j;
            if (!ac)
                return [];
            var W = [];
            var G = ac.getElementsByTagName(af);
            var Z = e.Dom.hasClass;
            var Y = 0;
            for (var aa = G.length; Y < aa; ++Y)
                if (Z(G[Y], ab))
                    W[W.length] = G[Y];
            if (ae)
                e.Dom.batch(W, ae, X, ad);
            return W
        },
        hasClass: function(W, G) {
            return e.Dom.batch(W, e.Dom._hasClass, G)
        },
        _hasClass: function(X, W) {
            var G = false;
            var Y;
            if (X && W) {
                Y = e.Dom._getAttribute(X, f) || i;
                if (Y)
                    Y = Y.replace(/\s+/g, b);
                if (W.exec)
                    G = W.test(Y);
                else
                    G = W && (b + Y + b).indexOf(b + W + b) > -1
            } else
                ;return G
        },
        addClass: function(W, G) {
            return e.Dom.batch(W, e.Dom._addClass, G)
        },
        _addClass: function(X, W) {
            var G = false;
            var Y;
            if (X && W) {
                Y = e.Dom._getAttribute(X, f) || i;
                if (!e.Dom._hasClass(X, W)) {
                    e.Dom.setAttribute(X, f, a(Y + b + W));
                    G = true
                }
            } else
                ;return G
        },
        removeClass: function(W, G) {
            return e.Dom.batch(W, e.Dom._removeClass, G)
        },
        _removeClass: function(Y, X) {
            var W = false;
            var aa;
            var Z;
            var G;
            if (Y && X) {
                aa = e.Dom._getAttribute(Y, f) || i;
                e.Dom.setAttribute(Y, f, aa.replace(e.Dom._getClassRegex(X), i));
                Z = e.Dom._getAttribute(Y, f);
                if (aa !== Z) {
                    e.Dom.setAttribute(Y, f, a(Z));
                    W = true;
                    if (e.Dom._getAttribute(Y, f) === "") {
                        G = Y.hasAttribute && Y.hasAttribute(E) ? E : f;
                        Y.removeAttribute(G)
                    }
                }
            } else
                ;return W
        },
        replaceClass: function(X, W, G) {
            return e.Dom.batch(X, e.Dom._replaceClass, {
                from: W,
                to: G
            })
        },
        _replaceClass: function(Y, X) {
            var W;
            var ab;
            var aa;
            var G = false;
            var Z;
            if (Y && X) {
                ab = X.from;
                aa = X.to;
                if (!aa)
                    G = false;
                else if (!ab)
                    G = e.Dom._addClass(Y, X.to);
                else if (ab !== aa) {
                    Z = e.Dom._getAttribute(Y, f) || i;
                    W = (b + Z.replace(e.Dom._getClassRegex(ab), b + aa).replace(/\s+/g, b)).split(e.Dom._getClassRegex(aa));
                    W.splice(1, 0, b + aa);
                    e.Dom.setAttribute(Y, f, a(W.join(i)));
                    G = true
                }
            } else
                ;return G
        },
        generateId: function(G, X) {
            X = X || "yui-gen";
            var W = function(Y) {
                if (Y && Y.id)
                    return Y.id;
                var Z = X + YAHOO.env._id_counter++;
                if (Y) {
                    if (Y[C] && Y[C].getElementById(Z))
                        return e.Dom.generateId(Y, Z + X);
                    Y.id = Z
                }
                return Z
            };
            return e.Dom.batch(G, W, e.Dom, true) || W.apply(e.Dom, arguments)
        },
        isAncestor: function(W, X) {
            W = e.Dom.get(W);
            X = e.Dom.get(X);
            var G = false;
            if (W && X && (W[K] && X[K]))
                if (W.contains && W !== X)
                    G = W.contains(X);
                else {
                    if (W.compareDocumentPosition)
                        G = !!(W.compareDocumentPosition(X) & 16)
                }
            else
                ;return G
        },
        inDocument: function(G, W) {
            return e.Dom._inDoc(e.Dom.get(G), W)
        },
        _inDoc: function(W, X) {
            var G = false;
            if (W && W[c]) {
                X = X || W[C];
                G = e.Dom.isAncestor(X[U], W)
            } else
                ;return G
        },
        getElementsBy: function(W, af, ab, ad, X, ac, ae) {
            af = af || "*";
            ab = ab ? e.Dom.get(ab) : null || j;
            var aa = ae ? null : [];
            var G;
            if (ab) {
                G = ab.getElementsByTagName(af);
                var Y = 0;
                for (var Z = G.length; Y < Z; ++Y)
                    if (W(G[Y]))
                        if (ae) {
                            aa = G[Y];
                            break
                        } else
                            aa[aa.length] = G[Y];
                if (ad)
                    e.Dom.batch(aa, ad, X, ac)
            }
            return aa
        },
        getElementBy: function(X, G, W) {
            return e.Dom.getElementsBy(X, G, W, null, null, null, true)
        },
        batch: function(X, ab, aa, Z) {
            var Y = [];
            var W = Z ? aa : null;
            X = X && (X[c] || X.item) ? X : e.Dom.get(X);
            if (X && ab) {
                if (X[c] || X.length === undefined)
                    return ab.call(W, X, aa);
                for (var G = 0; G < X.length; ++G)
                    Y[Y.length] = ab.call(W || X[G], X[G], aa)
            } else
                return false;
            return Y
        },
        getDocumentHeight: function() {
            var W = j[S] != l || h ? j.body.scrollHeight : v.scrollHeight;
            var G = Math.max(W, e.Dom.getViewportHeight());
            return G
        },
        getDocumentWidth: function() {
            var W = j[S] != l || h ? j.body.scrollWidth : v.scrollWidth;
            var G = Math.max(W, e.Dom.getViewportWidth());
            return G
        },
        getViewportHeight: function() {
            var G = self.innerHeight;
            var W = j[S];
            if ((W || s) && !d)
                G = W == l ? v.clientHeight : j.body.clientHeight;
            return G
        },
        getViewportWidth: function() {
            var G = self.innerWidth;
            var W = j[S];
            if (W || s)
                G = W == l ? v.clientWidth : j.body.clientWidth;
            return G
        },
        getAncestorBy: function(G, W) {
            for (; G = G[x]; )
                if (e.Dom._testElement(G, W))
                    return G;
            return null
        },
        getAncestorByClassName: function(W, G) {
            W = e.Dom.get(W);
            if (!W)
                return null;
            var X = function(Y) {
                return e.Dom.hasClass(Y, G)
            };
            return e.Dom.getAncestorBy(W, X)
        },
        getAncestorByTagName: function(W, G) {
            W = e.Dom.get(W);
            if (!W)
                return null;
            var X = function(Y) {
                return Y[c] && Y[c].toUpperCase() == G.toUpperCase()
            };
            return e.Dom.getAncestorBy(W, X)
        },
        getPreviousSiblingBy: function(G, W) {
            for (; G; ) {
                G = G.previousSibling;
                if (e.Dom._testElement(G, W))
                    return G
            }
            return null
        },
        getPreviousSibling: function(G) {
            G = e.Dom.get(G);
            if (!G)
                return null;
            return e.Dom.getPreviousSiblingBy(G)
        },
        getNextSiblingBy: function(G, W) {
            for (; G; ) {
                G = G.nextSibling;
                if (e.Dom._testElement(G, W))
                    return G
            }
            return null
        },
        getNextSibling: function(G) {
            G = e.Dom.get(G);
            if (!G)
                return null;
            return e.Dom.getNextSiblingBy(G)
        },
        getFirstChildBy: function(G, X) {
            var W = e.Dom._testElement(G.firstChild, X) ? G.firstChild : null;
            return W || e.Dom.getNextSiblingBy(G.firstChild, X)
        },
        getFirstChild: function(G, W) {
            G = e.Dom.get(G);
            if (!G)
                return null;
            return e.Dom.getFirstChildBy(G)
        },
        getLastChildBy: function(G, X) {
            if (!G)
                return null;
            var W = e.Dom._testElement(G.lastChild, X) ? G.lastChild : null;
            return W || e.Dom.getPreviousSiblingBy(G.lastChild, X)
        },
        getLastChild: function(G) {
            G = e.Dom.get(G);
            return e.Dom.getLastChildBy(G)
        },
        getChildrenBy: function(W, Y) {
            var X = e.Dom.getFirstChildBy(W, Y);
            var G = X ? [X] : [];
            e.Dom.getNextSiblingBy(X, function(Z) {
                if (!Y || Y(Z))
                    G[G.length] = Z;
                return false
            });
            return G
        },
        getChildren: function(G) {
            G = e.Dom.get(G);
            if (!G)
                ;return e.Dom.getChildrenBy(G)
        },
        getDocumentScrollLeft: function(G) {
            G = G || j;
            return Math.max(G[U].scrollLeft, G.body.scrollLeft)
        },
        getDocumentScrollTop: function(G) {
            G = G || j;
            return Math.max(G[U].scrollTop, G.body.scrollTop)
        },
        insertBefore: function(W, G) {
            W = e.Dom.get(W);
            G = e.Dom.get(G);
            if (!W || !G || !G[x])
                return null;
            return G[x].insertBefore(W, G)
        },
        insertAfter: function(W, G) {
            W = e.Dom.get(W);
            G = e.Dom.get(G);
            if (!W || !G || !G[x])
                return null;
            if (G.nextSibling)
                return G[x].insertBefore(W, G.nextSibling);
            else
                return G[x].appendChild(W)
        },
        getClientRegion: function() {
            var X = e.Dom.getDocumentScrollTop();
            var W = e.Dom.getDocumentScrollLeft();
            var Y = e.Dom.getViewportWidth() + W;
            var G = e.Dom.getViewportHeight() + X;
            return new e.Region(X,Y,G,W)
        },
        setAttribute: function(W, G, X) {
            e.Dom.batch(W, e.Dom._setAttribute, {
                attr: G,
                val: X
            })
        },
        _setAttribute: function(X, W) {
            var G = e.Dom._toCamel(W.attr);
            var Y = W.val;
            if (X && X.setAttribute)
                if (e.Dom.DOT_ATTRIBUTES[G] && X.tagName && X.tagName != "BUTTON")
                    X[G] = Y;
                else {
                    G = e.Dom.CUSTOM_ATTRIBUTES[G] || G;
                    X.setAttribute(G, Y)
                }
            else
                ;
        },
        getAttribute: function(W, G) {
            return e.Dom.batch(W, e.Dom._getAttribute, G)
        },
        _getAttribute: function(W, G) {
            var X;
            G = e.Dom.CUSTOM_ATTRIBUTES[G] || G;
            if (e.Dom.DOT_ATTRIBUTES[G])
                X = W[G];
            else if (W && "getAttribute"in W)
                if (/^(?:href|src)$/.test(G))
                    X = W.getAttribute(G, 2);
                else
                    X = W.getAttribute(G);
            else
                ;return X
        },
        _toCamel: function(W) {
            function G(Y, Z) {
                return Z.toUpperCase()
            }
            var X = B;
            return X[W] || (X[W] = W.indexOf("-") === -1 ? W : W.replace(/-([a-z])/gi, G))
        },
        _getClassRegex: function(W) {
            var G;
            if (W !== undefined)
                if (W.exec)
                    G = W;
                else {
                    G = F[W];
                    if (!G) {
                        W = W.replace(e.Dom._patterns.CLASS_RE_TOKENS, "\\$1");
                        W = W.replace(/\s+/g, b);
                        G = F[W] = new RegExp(R + W + J,t)
                    }
                }
            return G
        },
        _patterns: {
            ROOT_TAG: /^body|html$/i,
            CLASS_RE_TOKENS: /([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g
        },
        _testElement: function(G, W) {
            return G && G[K] == 1 && (!W || W(G))
        },
        _calcBorders: function(X, Y) {
            var W = parseInt(e.Dom[V](X, q), 10) || 0;
            var G = parseInt(e.Dom[V](X, P), 10) || 0;
            if (g)
                if (m.test(X[c])) {
                    W = 0;
                    G = 0
                }
            Y[0] += G;
            Y[1] += W;
            return Y
        }
    };
    var r = e.Dom[V];
    if (L.opera)
        e.Dom[V] = function(W, G) {
            var X = r(W, G);
            if (w.test(G))
                X = e.Dom.Color.toRGB(X);
            return X
        }
        ;
    if (L.webkit)
        e.Dom[V] = function(W, G) {
            var X = r(W, G);
            if (X === "rgba(0, 0, 0, 0)")
                X = "transparent";
            return X
        }
        ;
    if (L.ie && L.ie >= 8)
        e.Dom.DOT_ATTRIBUTES.type = true
}
)();
YAHOO.util.Region = function(d, e, a, c) {
    this.top = d;
    this.y = d;
    this[1] = d;
    this.right = e;
    this.bottom = a;
    this.left = c;
    this.x = c;
    this[0] = c;
    this.width = this.right - this.left;
    this.height = this.bottom - this.top
}
;
YAHOO.util.Region.prototype.contains = function(a) {
    return a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
}
;
YAHOO.util.Region.prototype.getArea = function() {
    return (this.bottom - this.top) * (this.right - this.left)
}
;
YAHOO.util.Region.prototype.intersect = function(f) {
    var d = Math.max(this.top, f.top);
    var e = Math.min(this.right, f.right);
    var a = Math.min(this.bottom, f.bottom);
    var c = Math.max(this.left, f.left);
    if (a >= d && e >= c)
        return new YAHOO.util.Region(d,e,a,c);
    else
        return null
}
;
YAHOO.util.Region.prototype.union = function(f) {
    var d = Math.min(this.top, f.top);
    var e = Math.max(this.right, f.right);
    var a = Math.max(this.bottom, f.bottom);
    var c = Math.min(this.left, f.left);
    return new YAHOO.util.Region(d,e,a,c)
}
;
YAHOO.util.Region.prototype.toString = function() {
    return "Region {" + "top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + ", left: " + this.left + ", height: " + this.height + ", width: " + this.width + "}"
}
;
YAHOO.util.Region.getRegion = function(e) {
    var g = YAHOO.util.Dom.getXY(e);
    var d = g[1];
    var f = g[0] + e.offsetWidth;
    var a = g[1] + e.offsetHeight;
    var c = g[0];
    return new YAHOO.util.Region(d,f,a,c)
}
;
YAHOO.util.Point = function(a, b) {
    if (YAHOO.lang.isArray(a)) {
        b = a[1];
        a = a[0]
    }
    YAHOO.util.Point.superclass.constructor.call(this, b, a, b, a)
}
;
YAHOO.extend(YAHOO.util.Point, YAHOO.util.Region);
(function() {
    var b = YAHOO.util;
    var a = "clientTop";
    var f = "clientLeft";
    var j = "parentNode";
    var k = "right";
    var w = "hasLayout";
    var i = "px";
    var u = "opacity";
    var l = "auto";
    var d = "borderLeftWidth";
    var g = "borderTopWidth";
    var p = "borderRightWidth";
    var v = "borderBottomWidth";
    var s = "visible";
    var q = "transparent";
    var n = "height";
    var e = "width";
    var h = "style";
    var t = "currentStyle";
    var r = /^width|height$/;
    var o = /^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i;
    var m = {
        get: function(x, z) {
            var y = "";
            var A = x[t][z];
            if (z === u)
                y = b.Dom.getStyle(x, u);
            else if (!A || A.indexOf && A.indexOf(i) > -1)
                y = A;
            else if (b.Dom.IE_COMPUTED[z])
                y = b.Dom.IE_COMPUTED[z](x, z);
            else if (o.test(A))
                y = b.Dom.IE.ComputedStyle.getPixel(x, z);
            else
                y = A;
            return y
        },
        getOffset: function(z, E) {
            var B = z[t][E];
            var x = E.charAt(0).toUpperCase() + E.substr(1);
            var C = "offset" + x;
            var y = "pixel" + x;
            var A = "";
            var D;
            if (B == l) {
                D = z[C];
                if (D === undefined)
                    A = 0;
                A = D;
                if (r.test(E)) {
                    z[h][E] = D;
                    if (z[C] > D)
                        A = D - (z[C] - D);
                    z[h][E] = l
                }
            } else {
                if (!z[h][y] && !z[h][E])
                    z[h][E] = B;
                A = z[h][y]
            }
            return A + i
        },
        getBorderWidth: function(x, z) {
            var y = null;
            if (!x[t][w])
                x[h].zoom = 1;
            switch (z) {
            case g:
                y = x[a];
                break;
            case v:
                y = x.offsetHeight - x.clientHeight - x[a];
                break;
            case d:
                y = x[f];
                break;
            case p:
                y = x.offsetWidth - x.clientWidth - x[f];
                break
            }
            return y + i
        },
        getPixel: function(y, x) {
            var A = null;
            var B = y[t][k];
            var z = y[t][x];
            y[h][k] = z;
            A = y[h].pixelRight;
            y[h][k] = B;
            return A + i
        },
        getMargin: function(y, x) {
            var z;
            if (y[t][x] == l)
                z = 0 + i;
            else
                z = b.Dom.IE.ComputedStyle.getPixel(y, x);
            return z
        },
        getVisibility: function(y, x) {
            for (var z; (z = y[t]) && z[x] == "inherit"; )
                y = y[j];
            return z ? z[x] : s
        },
        getColor: function(y, x) {
            return b.Dom.Color.toRGB(y[t][x]) || q
        },
        getBorderColor: function(y, x) {
            var z = y[t];
            var A = z[x] || z.color;
            return b.Dom.Color.toRGB(b.Dom.Color.toHex(A))
        }
    };
    var c = {};
    c.top = c.right = c.bottom = c.left = c[e] = c[n] = m.getOffset;
    c.color = m.getColor;
    c[g] = c[p] = c[v] = c[d] = m.getBorderWidth;
    c.marginTop = c.marginRight = c.marginBottom = c.marginLeft = m.getMargin;
    c.visibility = m.getVisibility;
    c.borderColor = c.borderTopColor = c.borderRightColor = c.borderBottomColor = c.borderLeftColor = m.getBorderColor;
    b.Dom.IE_COMPUTED = c;
    b.Dom.IE_ComputedStyle = m
}
)();
(function() {
    var c = "toString";
    var a = parseInt;
    var b = RegExp;
    var d = YAHOO.util;
    d.Dom.Color = {
        KEYWORDS: {
            black: "000",
            silver: "c0c0c0",
            gray: "808080",
            white: "fff",
            maroon: "800000",
            red: "f00",
            purple: "800080",
            fuchsia: "f0f",
            green: "008000",
            lime: "0f0",
            olive: "808000",
            yellow: "ff0",
            navy: "000080",
            blue: "00f",
            teal: "008080",
            aqua: "0ff"
        },
        re_RGB: /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
        re_hex: /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
        re_hex3: /([0-9A-F])/gi,
        toRGB: function(e) {
            if (!d.Dom.Color.re_RGB.test(e))
                e = d.Dom.Color.toHex(e);
            if (d.Dom.Color.re_hex.exec(e))
                e = "rgb(" + [a(b.$1, 16), a(b.$2, 16), a(b.$3, 16)].join(", ") + ")";
            return e
        },
        toHex: function(f) {
            f = d.Dom.Color.KEYWORDS[f] || f;
            if (d.Dom.Color.re_RGB.exec(f)) {
                f = [Number(b.$1).toString(16), Number(b.$2).toString(16), Number(b.$3).toString(16)];
                for (var e = 0; e < f.length; e++)
                    if (f[e].length < 2)
                        f[e] = "0" + f[e];
                f = f.join("")
            }
            if (f.length < 6)
                f = f.replace(d.Dom.Color.re_hex3, "$1$1");
            if (f !== "transparent" && f.indexOf("#") < 0)
                f = "#" + f;
            return f.toUpperCase()
        }
    }
}
)();
YAHOO.register("dom", YAHOO.util.Dom, {
    version: "2.9.0",
    build: "2800"
});
YAHOO.util.CustomEvent = function(d, c, b, a, e) {
    this.type = d;
    this.scope = c || window;
    this.silent = b;
    this.fireOnce = e;
    this.fired = false;
    this.firedWith = null;
    this.signature = a || YAHOO.util.CustomEvent.LIST;
    this.subscribers = [];
    if (!this.silent)
        ;var f = "_YUICEOnSubscribe";
    if (d !== f)
        this.subscribeEvent = new YAHOO.util.CustomEvent(f,this,true);
    this.lastError = null
}
;
YAHOO.util.CustomEvent.LIST = 0;
YAHOO.util.CustomEvent.FLAT = 1;
YAHOO.util.CustomEvent.prototype = {
    subscribe: function(b, c, d) {
        if (!b)
            throw new Error("Invalid callback for subscriber to '" + this.type + "'");
        if (this.subscribeEvent)
            this.subscribeEvent.fire(b, c, d);
        var a = new YAHOO.util.Subscriber(b,c,d);
        if (this.fireOnce && this.fired)
            this.notify(a, this.firedWith);
        else
            this.subscribers.push(a)
    },
    unsubscribe: function(d, f) {
        if (!d)
            return this.unsubscribeAll();
        var e = false;
        var b = 0;
        for (var a = this.subscribers.length; b < a; ++b) {
            var c = this.subscribers[b];
            if (c && c.contains(d, f)) {
                this._delete(b);
                e = true
            }
        }
        return e
    },
    fire: function() {
        this.lastError = null;
        var h = [];
        var a = this.subscribers.length;
        var d = [].slice.call(arguments, 0);
        var c = true;
        var f;
        var b = false;
        if (this.fireOnce)
            if (this.fired)
                return true;
            else
                this.firedWith = d;
        this.fired = true;
        if (!a && this.silent)
            return true;
        if (!this.silent)
            ;var e = this.subscribers.slice();
        for (f = 0; f < a; ++f) {
            var g = e[f];
            if (!g || !g.fn)
                b = true;
            else {
                c = this.notify(g, d);
                if (false === c) {
                    if (!this.silent)
                        ;break
                }
            }
        }
        return c !== false
    },
    notify: function(g, c) {
        var b;
        var i = null;
        var f = g.getScope(this.scope);
        var a = YAHOO.util.Event.throwErrors;
        if (!this.silent)
            ;if (this.signature == YAHOO.util.CustomEvent.FLAT) {
            if (c.length > 0)
                i = c[0];
            try {
                b = g.fn.call(f, i, g.obj)
            } catch (h) {
                this.lastError = h;
                if (a)
                    throw h;
            }
        } else
            try {
                b = g.fn.call(f, this.type, c, g.obj)
            } catch (d) {
                this.lastError = d;
                if (a)
                    throw d;
            }
        return b
    },
    unsubscribeAll: function() {
        var a = this.subscribers.length;
        var b;
        for (b = a - 1; b > -1; b--)
            this._delete(b);
        this.subscribers = [];
        return a
    },
    _delete: function(a) {
        var b = this.subscribers[a];
        if (b) {
            delete b.fn;
            delete b.obj
        }
        this.subscribers.splice(a, 1)
    },
    toString: function() {
        return "CustomEvent: " + "'" + this.type + "', " + "context: " + this.scope
    }
};
YAHOO.util.Subscriber = function(a, b, c) {
    this.fn = a;
    this.obj = YAHOO.lang.isUndefined(b) ? null : b;
    this.overrideContext = c
}
;
YAHOO.util.Subscriber.prototype.getScope = function(a) {
    if (this.overrideContext)
        if (this.overrideContext === true)
            return this.obj;
        else
            return this.overrideContext;
    return a
}
;
YAHOO.util.Subscriber.prototype.contains = function(a, b) {
    if (b)
        return this.fn == a && this.obj == b;
    else
        return this.fn == a
}
;
YAHOO.util.Subscriber.prototype.toString = function() {
    return "Subscriber { obj: " + this.obj + ", overrideContext: " + (this.overrideContext || "no") + " }"
}
;
if (!YAHOO.util.Event) {
    YAHOO.util.Event = function() {
        var g = false;
        var h = [];
        var j = [];
        var a = 0;
        var e = [];
        var b = 0;
        var c = {
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63276: 33,
            63277: 34,
            25: 9
        };
        var d = YAHOO.env.ua.ie;
        var f = "focusin";
        var i = "focusout";
        return {
            POLL_RETRYS: 500,
            POLL_INTERVAL: 40,
            EL: 0,
            TYPE: 1,
            FN: 2,
            WFN: 3,
            UNLOAD_OBJ: 3,
            ADJ_SCOPE: 4,
            OBJ: 5,
            OVERRIDE: 6,
            CAPTURE: 7,
            lastError: null,
            isSafari: YAHOO.env.ua.webkit,
            webkit: YAHOO.env.ua.webkit,
            isIE: d,
            _interval: null,
            _dri: null,
            _specialTypes: {
                focusin: d ? "focusin" : "focus",
                focusout: d ? "focusout" : "blur"
            },
            DOMReady: false,
            throwErrors: false,
            startInterval: function() {
                if (!this._interval)
                    this._interval = YAHOO.lang.later(this.POLL_INTERVAL, this, this._tryPreloadAttach, null, true)
            },
            onAvailable: function(q, m, o, p, n) {
                var k = YAHOO.lang.isString(q) ? [q] : q;
                for (var l = 0; l < k.length; l = l + 1)
                    e.push({
                        id: k[l],
                        fn: m,
                        obj: o,
                        overrideContext: p,
                        checkReady: n
                    });
                a = this.POLL_RETRYS;
                this.startInterval()
            },
            onContentReady: function(n, k, l, m) {
                this.onAvailable(n, k, l, m, true)
            },
            onDOMReady: function() {
                this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent, arguments)
            },
            _addListener: function(m, k, v, p, t, y) {
                if (!v || !v.call)
                    return false;
                if (this._isValidCollection(m)) {
                    var w = true;
                    var q = 0;
                    for (var s = m.length; q < s; ++q)
                        w = this.on(m[q], k, v, p, t) && w;
                    return w
                } else if (YAHOO.lang.isString(m)) {
                    var o = this.getEl(m);
                    if (o)
                        m = o;
                    else {
                        this.onAvailable(m, function() {
                            YAHOO.util.Event._addListener(m, k, v, p, t, y)
                        });
                        return true
                    }
                }
                if (!m)
                    return false;
                if ("unload" == k && p !== this) {
                    j[j.length] = [m, k, v, p, t];
                    return true
                }
                var l = m;
                if (t)
                    if (t === true)
                        l = p;
                    else
                        l = t;
                var n = function(z) {
                    return v.call(l, YAHOO.util.Event.getEvent(z, m), p)
                };
                var x = [m, k, v, n, l, p, t, y];
                var r = h.length;
                h[r] = x;
                try {
                    this._simpleAdd(m, k, n, y)
                } catch (u) {
                    this.lastError = u;
                    this.removeListener(m, k, v);
                    return false
                }
                return true
            },
            _getType: function(k) {
                return this._specialTypes[k] || k
            },
            addListener: function(m, p, l, n, o) {
                var k = (p == f || p == i) && !YAHOO.env.ua.ie ? true : false;
                return this._addListener(m, this._getType(p), l, n, o, k)
            },
            addFocusListener: function(l, k, m, n) {
                return this.on(l, f, k, m, n)
            },
            removeFocusListener: function(l, k) {
                return this.removeListener(l, f, k)
            },
            addBlurListener: function(l, k, m, n) {
                return this.on(l, i, k, m, n)
            },
            removeBlurListener: function(l, k) {
                return this.removeListener(l, i, k)
            },
            removeListener: function(l, k, r) {
                var m;
                var p;
                var u;
                k = this._getType(k);
                if (typeof l == "string")
                    l = this.getEl(l);
                else if (this._isValidCollection(l)) {
                    var s = true;
                    for (m = l.length - 1; m > -1; m--)
                        s = this.removeListener(l[m], k, r) && s;
                    return s
                }
                if (!r || !r.call)
                    return this.purgeElement(l, false, k);
                if ("unload" == k) {
                    for (m = j.length - 1; m > -1; m--) {
                        u = j[m];
                        if (u && u[0] == l && u[1] == k && u[2] == r) {
                            j.splice(m, 1);
                            return true
                        }
                    }
                    return false
                }
                var n = null;
                var o = arguments[3];
                if ("undefined" === typeof o)
                    o = this._getCacheIndex(h, l, k, r);
                if (o >= 0)
                    n = h[o];
                if (!l || !n)
                    return false;
                var t = n[this.CAPTURE] === true ? true : false;
                try {
                    this._simpleRemove(l, k, n[this.WFN], t)
                } catch (q) {
                    this.lastError = q;
                    return false
                }
                delete h[o][this.WFN];
                delete h[o][this.FN];
                h.splice(o, 1);
                return true
            },
            getTarget: function(m, l) {
                var k = m.target || m.srcElement;
                return this.resolveTextNode(k)
            },
            resolveTextNode: function(l) {
                try {
                    if (l && 3 == l.nodeType)
                        return l.parentNode
                } catch (k) {
                    return null
                }
                return l
            },
            getPageX: function(l) {
                var k = l.pageX;
                if (!k && 0 !== k) {
                    k = l.clientX || 0;
                    if (this.isIE)
                        k += this._getScrollLeft()
                }
                return k
            },
            getPageY: function(k) {
                var l = k.pageY;
                if (!l && 0 !== l) {
                    l = k.clientY || 0;
                    if (this.isIE)
                        l += this._getScrollTop()
                }
                return l
            },
            getXY: function(k) {
                return [this.getPageX(k), this.getPageY(k)]
            },
            getRelatedTarget: function(l) {
                var k = l.relatedTarget;
                if (!k)
                    if (l.type == "mouseout")
                        k = l.toElement;
                    else if (l.type == "mouseover")
                        k = l.fromElement;
                return this.resolveTextNode(k)
            },
            getTime: function(m) {
                if (!m.time) {
                    var l = (new Date).getTime();
                    try {
                        m.time = l
                    } catch (k) {
                        this.lastError = k;
                        return l
                    }
                }
                return m.time
            },
            stopEvent: function(k) {
                this.stopPropagation(k);
                this.preventDefault(k)
            },
            stopPropagation: function(k) {
                if (k.stopPropagation)
                    k.stopPropagation();
                else
                    k.cancelBubble = true
            },
            preventDefault: function(k) {
                if (k.preventDefault)
                    k.preventDefault();
                else
                    k.returnValue = false
            },
            getEvent: function(m, k) {
                var l = m || window.event;
                if (!l)
                    for (var n = this.getEvent.caller; n; ) {
                        l = n.arguments[0];
                        if (l && Event == l.constructor)
                            break;
                        n = n.caller
                    }
                return l
            },
            getCharCode: function(l) {
                var k = l.keyCode || l.charCode || 0;
                if (YAHOO.env.ua.webkit && k in c)
                    k = c[k];
                return k
            },
            _getCacheIndex: function(n, q, r, p) {
                var o = 0;
                for (var m = n.length; o < m; o = o + 1) {
                    var k = n[o];
                    if (k && k[this.FN] == p && k[this.EL] == q && k[this.TYPE] == r)
                        return o
                }
                return -1
            },
            generateId: function(k) {
                var l = k.id;
                if (!l) {
                    l = "yuievtautoid-" + b;
                    ++b;
                    k.id = l
                }
                return l
            },
            _isValidCollection: function(l) {
                try {
                    return l && typeof l !== "string" && l.length && !l.tagName && !l.alert && typeof l[0] !== "undefined"
                } catch (k) {
                    return false
                }
            },
            elCache: {},
            getEl: function(k) {
                return typeof k === "string" ? document.getElementById(k) : k
            },
            clearCache: function() {},
            DOMReadyEvent: new YAHOO.util.CustomEvent("DOMReady",YAHOO,0,0,1),
            _load: function(l) {
                if (!g) {
                    g = true;
                    var k = YAHOO.util.Event;
                    k._ready();
                    k._tryPreloadAttach()
                }
            },
            _ready: function(l) {
                var k = YAHOO.util.Event;
                if (!k.DOMReady) {
                    k.DOMReady = true;
                    k.DOMReadyEvent.fire();
                    k._simpleRemove(document, "DOMContentLoaded", k._ready)
                }
            },
            _tryPreloadAttach: function() {
                if (e.length === 0) {
                    a = 0;
                    if (this._interval) {
                        this._interval.cancel();
                        this._interval = null
                    }
                    return
                }
                if (this.locked)
                    return;
                if (this.isIE)
                    if (!this.DOMReady) {
                        this.startInterval();
                        return
                    }
                this.locked = true;
                var q = !g;
                if (!q)
                    q = a > 0 && e.length > 0;
                var p = [];
                var r = function(t, u) {
                    var s = t;
                    if (u.overrideContext)
                        if (u.overrideContext === true)
                            s = u.obj;
                        else
                            s = u.overrideContext;
                    u.fn.call(s, u.obj)
                };
                var l;
                var k;
                var o;
                var n;
                var m = [];
                for (l = 0,
                k = e.length; l < k; l = l + 1) {
                    o = e[l];
                    if (o) {
                        n = this.getEl(o.id);
                        if (n)
                            if (o.checkReady) {
                                if (g || n.nextSibling || !q) {
                                    m.push(o);
                                    e[l] = null
                                }
                            } else {
                                r(n, o);
                                e[l] = null
                            }
                        else
                            p.push(o)
                    }
                }
                for (l = 0,
                k = m.length; l < k; l = l + 1) {
                    o = m[l];
                    r(this.getEl(o.id), o)
                }
                a--;
                if (q) {
                    for (l = e.length - 1; l > -1; l--) {
                        o = e[l];
                        if (!o || !o.id)
                            e.splice(l, 1)
                    }
                    this.startInterval()
                } else if (this._interval) {
                    this._interval.cancel();
                    this._interval = null
                }
                this.locked = false
            },
            purgeElement: function(p, q, s) {
                var n = YAHOO.lang.isString(p) ? this.getEl(p) : p;
                var r = this.getListeners(n, s);
                var o;
                var k;
                if (r)
                    for (o = r.length - 1; o > -1; o--) {
                        var m = r[o];
                        this.removeListener(n, m.type, m.fn)
                    }
                if (q && n && n.childNodes)
                    for (o = 0,
                    k = n.childNodes.length; o < k; ++o)
                        this.purgeElement(n.childNodes[o], q, s)
            },
            getListeners: function(n, k) {
                var q = [];
                var m;
                if (!k)
                    m = [h, j];
                else if (k === "unload")
                    m = [j];
                else {
                    k = this._getType(k);
                    m = [h]
                }
                var s = YAHOO.lang.isString(n) ? this.getEl(n) : n;
                for (var p = 0; p < m.length; p = p + 1) {
                    var u = m[p];
                    if (u) {
                        var r = 0;
                        for (var t = u.length; r < t; ++r) {
                            var o = u[r];
                            if (o && o[this.EL] === s && (!k || k === o[this.TYPE]))
                                q.push({
                                    type: o[this.TYPE],
                                    fn: o[this.FN],
                                    obj: o[this.OBJ],
                                    adjust: o[this.OVERRIDE],
                                    scope: o[this.ADJ_SCOPE],
                                    index: r
                                })
                        }
                    }
                }
                return q.length ? q : null
            },
            _unload: function(s) {
                var m = YAHOO.util.Event;
                var p;
                var o;
                var n;
                var r;
                var q;
                var t = j.slice();
                var k;
                for (p = 0,
                r = j.length; p < r; ++p) {
                    n = t[p];
                    if (n) {
                        try {
                            k = window;
                            if (n[m.ADJ_SCOPE])
                                if (n[m.ADJ_SCOPE] === true)
                                    k = n[m.UNLOAD_OBJ];
                                else
                                    k = n[m.ADJ_SCOPE];
                            n[m.FN].call(k, m.getEvent(s, n[m.EL]), n[m.UNLOAD_OBJ])
                        } catch (w) {}
                        t[p] = null
                    }
                }
                n = null;
                k = null;
                j = null;
                if (h) {
                    for (o = h.length - 1; o > -1; o--) {
                        n = h[o];
                        if (n)
                            try {
                                m.removeListener(n[m.EL], n[m.TYPE], n[m.FN], o)
                            } catch (v) {}
                    }
                    n = null
                }
                try {
                    m._simpleRemove(window, "unload", m._unload);
                    m._simpleRemove(window, "load", m._load)
                } catch (u) {}
            },
            _getScrollLeft: function() {
                return this._getScroll()[1]
            },
            _getScrollTop: function() {
                return this._getScroll()[0]
            },
            _getScroll: function() {
                var k = document.documentElement;
                var l = document.body;
                if (k && (k.scrollTop || k.scrollLeft))
                    return [k.scrollTop, k.scrollLeft];
                else if (l)
                    return [l.scrollTop, l.scrollLeft];
                else
                    return [0, 0]
            },
            regCE: function() {},
            _simpleAdd: function() {
                if (window.addEventListener)
                    return function(m, n, l, k) {
                        m.addEventListener(n, l, k)
                    }
                    ;
                else if (window.attachEvent)
                    return function(m, n, l, k) {
                        m.attachEvent("on" + n, l)
                    }
                    ;
                else
                    return function() {}
            }(),
            _simpleRemove: function() {
                if (window.removeEventListener)
                    return function(m, n, l, k) {
                        m.removeEventListener(n, l, k)
                    }
                    ;
                else if (window.detachEvent)
                    return function(l, m, k) {
                        l.detachEvent("on" + m, k)
                    }
                    ;
                else
                    return function() {}
            }()
        }
    }();
    (function() {
        var a = YAHOO.util.Event;
        a.on = a.addListener;
        a.onFocus = a.addFocusListener;
        a.onBlur = a.addBlurListener;
        if (a.isIE)
            if (self !== self.top)
                document.onreadystatechange = function() {
                    if (document.readyState == "complete") {
                        document.onreadystatechange = null;
                        a._ready()
                    }
                }
                ;
            else {
                YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach, YAHOO.util.Event, true);
                var b = document.createElement("p");
                a._dri = setInterval(function() {
                    try {
                        b.doScroll("left");
                        clearInterval(a._dri);
                        a._dri = null;
                        a._ready();
                        b = null
                    } catch (c) {}
                }, a.POLL_INTERVAL)
            }
        else if (a.webkit && a.webkit < 525)
            a._dri = setInterval(function() {
                var c = document.readyState;
                if ("loaded" == c || "complete" == c) {
                    clearInterval(a._dri);
                    a._dri = null;
                    a._ready()
                }
            }, a.POLL_INTERVAL);
        else
            a._simpleAdd(document, "DOMContentLoaded", a._ready);
        a._simpleAdd(window, "load", a._load);
        a._simpleAdd(window, "unload", a._unload);
        a._tryPreloadAttach()
    }
    )()
}
YAHOO.util.EventProvider = function() {}
;
YAHOO.util.EventProvider.prototype = {
    __yui_events: null,
    __yui_subscribers: null,
    subscribe: function(a, c, f, e) {
        this.__yui_events = this.__yui_events || {};
        var d = this.__yui_events[a];
        if (d)
            d.subscribe(c, f, e);
        else {
            this.__yui_subscribers = this.__yui_subscribers || {};
            var b = this.__yui_subscribers;
            if (!b[a])
                b[a] = [];
            b[a].push({
                fn: c,
                obj: f,
                overrideContext: e
            })
        }
    },
    unsubscribe: function(c, e, g) {
        this.__yui_events = this.__yui_events || {};
        var a = this.__yui_events;
        if (c) {
            var f = a[c];
            if (f)
                return f.unsubscribe(e, g)
        } else {
            var b = true;
            for (var d in a)
                if (YAHOO.lang.hasOwnProperty(a, d))
                    b = b && a[d].unsubscribe(e, g);
            return b
        }
        return false
    },
    unsubscribeAll: function(a) {
        return this.unsubscribe(a)
    },
    createEvent: function(b, g) {
        this.__yui_events = this.__yui_events || {};
        var e = g || {};
        var d = this.__yui_events;
        var f;
        if (d[b])
            ;
        else {
            f = new YAHOO.util.CustomEvent(b,e.scope || this,e.silent,YAHOO.util.CustomEvent.FLAT,e.fireOnce);
            d[b] = f;
            if (e.onSubscribeCallback)
                f.subscribeEvent.subscribe(e.onSubscribeCallback);
            this.__yui_subscribers = this.__yui_subscribers || {};
            var a = this.__yui_subscribers[b];
            if (a)
                for (var c = 0; c < a.length; ++c)
                    f.subscribe(a[c].fn, a[c].obj, a[c].overrideContext)
        }
        return d[b]
    },
    fireEvent: function(b) {
        this.__yui_events = this.__yui_events || {};
        var d = this.__yui_events[b];
        if (!d)
            return null;
        var a = [];
        for (var c = 1; c < arguments.length; ++c)
            a.push(arguments[c]);
        return d.fire.apply(d, a)
    },
    hasEvent: function(a) {
        if (this.__yui_events)
            if (this.__yui_events[a])
                return true;
        return false
    }
};
(function() {
    var a = YAHOO.util.Event;
    var c = YAHOO.lang;
    YAHOO.util.KeyListener = function(d, i, e, f) {
        function h(o, n) {
            if (!i.shift)
                i.shift = false;
            if (!i.alt)
                i.alt = false;
            if (!i.ctrl)
                i.ctrl = false;
            if (o.shiftKey == i.shift && o.altKey == i.alt && o.ctrlKey == i.ctrl) {
                var j;
                var m = i.keys;
                var l;
                if (YAHOO.lang.isArray(m))
                    for (var k = 0; k < m.length; k++) {
                        j = m[k];
                        l = a.getCharCode(o);
                        if (j == l) {
                            g.fire(l, o);
                            break
                        }
                    }
                else {
                    l = a.getCharCode(o);
                    if (m == l)
                        g.fire(l, o)
                }
            }
        }
        if (!d)
            ;
        else if (!i)
            ;
        else if (!e)
            ;if (!f)
            f = YAHOO.util.KeyListener.KEYDOWN;
        var g = new YAHOO.util.CustomEvent("keyPressed");
        this.enabledEvent = new YAHOO.util.CustomEvent("enabled");
        this.disabledEvent = new YAHOO.util.CustomEvent("disabled");
        if (c.isString(d))
            d = document.getElementById(d);
        if (c.isFunction(e))
            g.subscribe(e);
        else
            g.subscribe(e.fn, e.scope, e.correctScope);
        this.enable = function() {
            if (!this.enabled) {
                a.on(d, f, h);
                this.enabledEvent.fire(i)
            }
            this.enabled = true
        }
        ;
        this.disable = function() {
            if (this.enabled) {
                a.removeListener(d, f, h);
                this.disabledEvent.fire(i)
            }
            this.enabled = false
        }
        ;
        this.toString = function() {
            return "KeyListener [" + i.keys + "] " + d.tagName + (d.id ? "[" + d.id + "]" : "")
        }
    }
    ;
    var b = YAHOO.util.KeyListener;
    b.KEYDOWN = "keydown";
    b.KEYUP = "keyup";
    b.KEY = {
        ALT: 18,
        BACK_SPACE: 8,
        CAPS_LOCK: 20,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        META: 224,
        NUM_LOCK: 144,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PAUSE: 19,
        PRINTSCREEN: 44,
        RIGHT: 39,
        SCROLL_LOCK: 145,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
}
)();
YAHOO.register("event", YAHOO.util.Event, {
    version: "2.9.0",
    build: "2800"
});
YAHOO.register("yahoo-dom-event", YAHOO, {
    version: "2.9.0",
    build: "2800"
});
YAHOO.util.Get = function() {
    var m = {};
    var k = 0;
    var r = 0;
    var l = false;
    var n = YAHOO.env.ua;
    var s = YAHOO.lang;
    var q;
    var d;
    var e;
    var i = function(x, t, y) {
        var u = y || window;
        var z = u.document;
        var A = z.createElement(x);
        for (var v in t)
            if (t.hasOwnProperty(v))
                A.setAttribute(v, t[v]);
        return A
    };
    var h = function(u, v, t) {
        var w = {
            id: "yui__dyn_" + r++,
            type: "text/css",
            rel: "stylesheet",
            href: u
        };
        if (t)
            s.augmentObject(w, t);
        return i("link", w, v)
    };
    var p = function(u, v, t) {
        var w = {
            id: "yui__dyn_" + r++,
            type: "text/javascript",
            src: u
        };
        if (t)
            s.augmentObject(w, t);
        return i("script", w, v)
    };
    var a = function(t, u) {
        return {
            tId: t.tId,
            win: t.win,
            data: t.data,
            nodes: t.nodes,
            msg: u,
            purge: function() {
                d(this.tId)
            }
        }
    };
    var b = function(t, w) {
        var u = m[w];
        var v = s.isString(t) ? u.win.document.getElementById(t) : t;
        if (!v)
            q(w, "target node not found: " + t);
        return v
    };
    var c = function(w) {
        var u = m[w];
        var v;
        var t;
        u.finished = true;
        if (u.aborted) {
            v = "transaction " + w + " was aborted";
            q(w, v);
            return
        }
        if (u.onSuccess) {
            t = u.scope || u.win;
            u.onSuccess.call(t, a(u))
        }
    };
    var o = function(v) {
        var u = m[v];
        var t;
        if (u.onTimeout) {
            t = u.scope || u;
            u.onTimeout.call(t, a(u))
        }
    };
    var f = function(v, A) {
        var u = m[v];
        var D = u.win;
        var C = D.document;
        var B = C.getElementsByTagName("head")[0];
        var x;
        var y;
        var t;
        var E;
        var z;
        if (u.timer)
            u.timer.cancel();
        if (u.aborted) {
            y = "transaction " + v + " was aborted";
            q(v, y);
            return
        }
        if (A) {
            u.url.shift();
            if (u.varName)
                u.varName.shift()
        } else {
            u.url = s.isString(u.url) ? [u.url] : u.url;
            if (u.varName)
                u.varName = s.isString(u.varName) ? [u.varName] : u.varName
        }
        if (u.url.length === 0) {
            if (u.type === "script" && n.webkit && n.webkit < 420 && !u.finalpass && !u.varName) {
                z = p(null, u.win, u.attributes);
                z.innerHTML = 'YAHOO.util.Get._finalize("' + v + '");';
                u.nodes.push(z);
                B.appendChild(z)
            } else
                c(v);
            return
        }
        t = u.url[0];
        if (!t) {
            u.url.shift();
            return f(v)
        }
        if (u.timeout)
            u.timer = s.later(u.timeout, u, o, v);
        if (u.type === "script")
            x = p(t, D, u.attributes);
        else
            x = h(t, D, u.attributes);
        e(u.type, x, v, t, D, u.url.length);
        u.nodes.push(x);
        if (u.insertBefore) {
            E = b(u.insertBefore, v);
            if (E)
                E.parentNode.insertBefore(x, E)
        } else
            B.appendChild(x);
        if ((n.webkit || n.gecko) && u.type === "css")
            f(v, t)
    };
    var j = function() {
        if (l)
            return;
        l = true;
        var t;
        var u;
        for (t in m)
            if (m.hasOwnProperty(t)) {
                u = m[t];
                if (u.autopurge && u.finished) {
                    d(u.tId);
                    delete m[t]
                }
            }
        l = false
    };
    var g = function(u, t, v) {
        var x = "q" + k++;
        var w;
        v = v || {};
        if (k % YAHOO.util.Get.PURGE_THRESH === 0)
            j();
        m[x] = s.merge(v, {
            tId: x,
            type: u,
            url: t,
            finished: false,
            aborted: false,
            nodes: []
        });
        w = m[x];
        w.win = w.win || window;
        w.scope = w.scope || w.win;
        w.autopurge = "autopurge"in w ? w.autopurge : u === "script" ? true : false;
        w.attributes = w.attributes || {};
        w.attributes.charset = v.charset || w.attributes.charset || "utf-8";
        s.later(0, w, f, x);
        return {
            tId: x
        }
    };
    e = function(H, z, x, u, D, E, G) {
        var F = G || f;
        var B;
        var t;
        var I;
        var v;
        var J;
        var A;
        var C;
        var y;
        if (n.ie)
            z.onreadystatechange = function() {
                B = this.readyState;
                if ("loaded" === B || "complete" === B) {
                    z.onreadystatechange = null;
                    F(x, u)
                }
            }
            ;
        else if (n.webkit) {
            if (H === "script")
                if (n.webkit >= 420)
                    z.addEventListener("load", function() {
                        F(x, u)
                    });
                else {
                    t = m[x];
                    if (t.varName) {
                        v = YAHOO.util.Get.POLL_FREQ;
                        t.maxattempts = YAHOO.util.Get.TIMEOUT / v;
                        t.attempts = 0;
                        t._cache = t.varName[0].split(".");
                        t.timer = s.later(v, t, function(w) {
                            I = this._cache;
                            A = I.length;
                            J = this.win;
                            for (C = 0; C < A; C = C + 1) {
                                J = J[I[C]];
                                if (!J) {
                                    this.attempts++;
                                    if (this.attempts++ > this.maxattempts) {
                                        y = "Over retry limit, giving up";
                                        t.timer.cancel();
                                        q(x, y)
                                    } else
                                        ;return
                                }
                            }
                            t.timer.cancel();
                            F(x, u)
                        }, null, true)
                    } else
                        s.later(YAHOO.util.Get.POLL_FREQ, null, F, [x, u])
                }
        } else
            z.onload = function() {
                F(x, u)
            }
    }
    ;
    q = function(w, v) {
        var u = m[w];
        var t;
        if (u.onFailure) {
            t = u.scope || u.win;
            u.onFailure.call(t, a(u, v))
        }
    }
    ;
    d = function(z) {
        if (m[z]) {
            var t = m[z];
            var u = t.nodes;
            var x = u.length;
            var C = t.win.document;
            var A = C.getElementsByTagName("head")[0];
            var v;
            var y;
            var w;
            var B;
            if (t.insertBefore) {
                v = b(t.insertBefore, z);
                if (v)
                    A = v.parentNode
            }
            for (y = 0; y < x; y = y + 1) {
                w = u[y];
                if (w.clearAttributes)
                    w.clearAttributes();
                else
                    for (B in w)
                        if (w.hasOwnProperty(B))
                            delete w[B];
                A.removeChild(w)
            }
            t.nodes = []
        }
    }
    ;
    return {
        POLL_FREQ: 10,
        PURGE_THRESH: 20,
        TIMEOUT: 2E3,
        _finalize: function(t) {
            s.later(0, null, c, t)
        },
        abort: function(u) {
            var v = s.isString(u) ? u : u.tId;
            var t = m[v];
            if (t)
                t.aborted = true
        },
        script: function(t, u) {
            return g("script", t, u)
        },
        css: function(t, u) {
            return g("css", t, u)
        }
    }
}();
YAHOO.register("get", YAHOO.util.Get, {
    version: "2.9.0",
    build: "2800"
});
YAHOO.util.Connect = {
    _msxml_progid: ["Microsoft.XMLHTTP", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP"],
    _http_headers: {},
    _has_http_headers: false,
    _use_default_post_header: true,
    _default_post_header: "application/x-www-form-urlencoded; charset\x3dUTF-8",
    _default_form_header: "application/x-www-form-urlencoded",
    _use_default_xhr_header: true,
    _default_xhr_header: "XMLHttpRequest",
    _has_default_headers: true,
    _isFormSubmit: false,
    _default_headers: {},
    _poll: {},
    _timeOut: {},
    _polling_interval: 50,
    _transaction_id: 0,
    startEvent: new YAHOO.util.CustomEvent("start"),
    completeEvent: new YAHOO.util.CustomEvent("complete"),
    successEvent: new YAHOO.util.CustomEvent("success"),
    failureEvent: new YAHOO.util.CustomEvent("failure"),
    abortEvent: new YAHOO.util.CustomEvent("abort"),
    _customEvents: {
        onStart: ["startEvent", "start"],
        onComplete: ["completeEvent", "complete"],
        onSuccess: ["successEvent", "success"],
        onFailure: ["failureEvent", "failure"],
        onUpload: ["uploadEvent", "upload"],
        onAbort: ["abortEvent", "abort"]
    },
    setProgId: function(a) {
        this._msxml_progid.unshift(a)
    },
    setDefaultPostHeader: function(a) {
        if (typeof a == "string") {
            this._default_post_header = a;
            this._use_default_post_header = true
        } else if (typeof a == "boolean")
            this._use_default_post_header = a
    },
    setDefaultXhrHeader: function(a) {
        if (typeof a == "string")
            this._default_xhr_header = a;
        else
            this._use_default_xhr_header = a
    },
    setPollingInterval: function(a) {
        if (typeof a == "number" && isFinite(a))
            this._polling_interval = a
    },
    createXhrObject: function(g) {
        var d;
        var a;
        var b;
        try {
            a = new XMLHttpRequest;
            d = {
                conn: a,
                tId: g,
                xhr: true
            }
        } catch (c) {
            for (b = 0; b < this._msxml_progid.length; ++b)
                try {
                    a = new ActiveXObject(this._msxml_progid[b]);
                    d = {
                        conn: a,
                        tId: g,
                        xhr: true
                    };
                    break
                } catch (f) {}
        } finally {
            return d
        }
    },
    getConnectionObject: function(a) {
        var c;
        var d = this._transaction_id;
        try {
            if (!a)
                c = this.createXhrObject(d);
            else {
                c = {
                    tId: d
                };
                if (a === "xdr") {
                    c.conn = this._transport;
                    c.xdr = true
                } else if (a === "upload")
                    c.upload = true
            }
            if (c)
                this._transaction_id++
        } catch (b) {}
        return c
    },
    asyncRequest: function(h, d, g, a) {
        var b = g && g.argument ? g.argument : null;
        var e = this;
        var f;
        var c;
        if (this._isFileUpload)
            c = "upload";
        else if (g && g.xdr)
            c = "xdr";
        f = this.getConnectionObject(c);
        if (!f)
            return null;
        else {
            if (g && g.customevents)
                this.initCustomEvents(f, g);
            if (this._isFormSubmit) {
                if (this._isFileUpload) {
                    window.setTimeout(function() {
                        e.uploadFile(f, g, d, a)
                    }, 10);
                    return f
                }
                if (h.toUpperCase() == "GET") {
                    if (this._sFormData.length !== 0)
                        d += (d.indexOf("?") == -1 ? "?" : "\x26") + this._sFormData
                } else if (h.toUpperCase() == "POST")
                    a = a ? this._sFormData + "\x26" + a : this._sFormData
            }
            if (h.toUpperCase() == "GET" && (g && g.cache === false))
                d += (d.indexOf("?") == -1 ? "?" : "\x26") + "rnd\x3d" + (new Date).valueOf().toString();
            if (this._use_default_xhr_header)
                if (!this._default_headers["X-Requested-With"])
                    this.initHeader("X-Requested-With", this._default_xhr_header, true);
            if (h.toUpperCase() === "POST" && this._use_default_post_header && this._isFormSubmit === false)
                this.initHeader("Content-Type", this._default_post_header);
            if (f.xdr) {
                this.xdr(f, h, d, g, a);
                return f
            }
            f.conn.open(h, d, true);
            if (this._has_default_headers || this._has_http_headers)
                this.setHeader(f);
            this.handleReadyState(f, g);
            f.conn.send(a || "");
            if (this._isFormSubmit === true)
                this.resetFormState();
            this.startEvent.fire(f, b);
            if (f.startEvent)
                f.startEvent.fire(f, b);
            return f
        }
    },
    initCustomEvents: function(a, c) {
        for (var b in c.customevents)
            if (this._customEvents[b][0]) {
                a[this._customEvents[b][0]] = new YAHOO.util.CustomEvent(this._customEvents[b][1],c.scope ? c.scope : null);
                a[this._customEvents[b][0]].subscribe(c.customevents[b])
            }
    },
    handleReadyState: function(c, d) {
        var b = this;
        var a = d && d.argument ? d.argument : null;
        if (d && d.timeout)
            this._timeOut[c.tId] = window.setTimeout(function() {
                b.abort(c, d, true)
            }, d.timeout);
        this._poll[c.tId] = window.setInterval(function() {
            if (c.conn && c.conn.readyState === 4) {
                window.clearInterval(b._poll[c.tId]);
                delete b._poll[c.tId];
                if (d && d.timeout) {
                    window.clearTimeout(b._timeOut[c.tId]);
                    delete b._timeOut[c.tId]
                }
                b.completeEvent.fire(c, a);
                if (c.completeEvent)
                    c.completeEvent.fire(c, a);
                b.handleTransactionResponse(c, d)
            }
        }, this._polling_interval)
    },
    handleTransactionResponse: function(b, j, d) {
        var f;
        var a;
        var h = j && j.argument ? j.argument : null;
        var c = b.r && b.r.statusText === "xdr:success" ? true : false;
        var i = b.r && b.r.statusText === "xdr:failure" ? true : false;
        var k = d;
        try {
            if (b.conn.status !== undefined && b.conn.status !== 0 || c)
                f = b.conn.status;
            else if (i && !k)
                f = 0;
            else
                f = 13030
        } catch (g) {
            f = 13030
        }
        if (f >= 200 && f < 300 || f === 1223 || c) {
            a = b.xdr ? b.r : this.createResponseObject(b, h);
            if (j && j.success)
                if (!j.scope)
                    j.success(a);
                else
                    j.success.apply(j.scope, [a]);
            this.successEvent.fire(a);
            if (b.successEvent)
                b.successEvent.fire(a)
        } else {
            switch (f) {
            case 12002:
            case 12029:
            case 12030:
            case 12031:
            case 12152:
            case 13030:
                a = this.createExceptionObject(b.tId, h, d ? d : false);
                if (j && j.failure)
                    if (!j.scope)
                        j.failure(a);
                    else
                        j.failure.apply(j.scope, [a]);
                break;
            default:
                a = b.xdr ? b.response : this.createResponseObject(b, h);
                if (j && j.failure)
                    if (!j.scope)
                        j.failure(a);
                    else
                        j.failure.apply(j.scope, [a])
            }
            this.failureEvent.fire(a);
            if (b.failureEvent)
                b.failureEvent.fire(a)
        }
        this.releaseObject(b);
        a = null
    },
    createResponseObject: function(a, h) {
        var d = {};
        var k = {};
        var f;
        var c;
        var g;
        var b;
        try {
            c = a.conn.getAllResponseHeaders();
            g = c.split("\n");
            for (f = 0; f < g.length; f++) {
                b = g[f].indexOf(":");
                if (b != -1)
                    k[g[f].substring(0, b)] = YAHOO.lang.trim(g[f].substring(b + 2))
            }
        } catch (j) {}
        d.tId = a.tId;
        d.status = a.conn.status == 1223 ? 204 : a.conn.status;
        d.statusText = a.conn.status == 1223 ? "No Content" : a.conn.statusText;
        d.getResponseHeader = k;
        d.getAllResponseHeaders = c;
        d.responseText = a.conn.responseText;
        d.responseXML = a.conn.responseXML;
        if (h)
            d.argument = h;
        return d
    },
    createExceptionObject: function(h, d, a) {
        var f = 0;
        var g = "communication failure";
        var c = -1;
        var b = "transaction aborted";
        var e = {};
        e.tId = h;
        if (a) {
            e.status = c;
            e.statusText = b
        } else {
            e.status = f;
            e.statusText = g
        }
        if (d)
            e.argument = d;
        return e
    },
    initHeader: function(a, d, c) {
        var b = c ? this._default_headers : this._http_headers;
        b[a] = d;
        if (c)
            this._has_default_headers = true;
        else
            this._has_http_headers = true
    },
    setHeader: function(a) {
        var b;
        if (this._has_default_headers)
            for (b in this._default_headers)
                if (YAHOO.lang.hasOwnProperty(this._default_headers, b))
                    a.conn.setRequestHeader(b, this._default_headers[b]);
        if (this._has_http_headers) {
            for (b in this._http_headers)
                if (YAHOO.lang.hasOwnProperty(this._http_headers, b))
                    a.conn.setRequestHeader(b, this._http_headers[b]);
            this._http_headers = {};
            this._has_http_headers = false
        }
    },
    resetDefaultHeaders: function() {
        this._default_headers = {};
        this._has_default_headers = false
    },
    abort: function(e, g, a) {
        var d;
        var b = g && g.argument ? g.argument : null;
        e = e || {};
        if (e.conn)
            if (e.xhr) {
                if (this.isCallInProgress(e)) {
                    e.conn.abort();
                    window.clearInterval(this._poll[e.tId]);
                    delete this._poll[e.tId];
                    if (a) {
                        window.clearTimeout(this._timeOut[e.tId]);
                        delete this._timeOut[e.tId]
                    }
                    d = true
                }
            } else {
                if (e.xdr) {
                    e.conn.abort(e.tId);
                    d = true
                }
            }
        else if (e.upload) {
            var c = "yuiIO" + e.tId;
            var f = document.getElementById(c);
            if (f) {
                YAHOO.util.Event.removeListener(f, "load");
                document.body.removeChild(f);
                if (a) {
                    window.clearTimeout(this._timeOut[e.tId]);
                    delete this._timeOut[e.tId]
                }
                d = true
            }
        } else
            d = false;
        if (d === true) {
            this.abortEvent.fire(e, b);
            if (e.abortEvent)
                e.abortEvent.fire(e, b);
            this.handleTransactionResponse(e, g, true)
        }
        return d
    },
    isCallInProgress: function(a) {
        a = a || {};
        if (a.xhr && a.conn)
            return a.conn.readyState !== 4 && a.conn.readyState !== 0;
        else if (a.xdr && a.conn)
            return a.conn.isCallInProgress(a.tId);
        else if (a.upload === true)
            return document.getElementById("yuiIO" + a.tId) ? true : false;
        else
            return false
    },
    releaseObject: function(a) {
        if (a && a.conn) {
            a.conn = null;
            a = null
        }
    }
};
(function() {
    function d(i) {
        var j = '\x3cobject id\x3d"YUIConnectionSwf" type\x3d"application/x-shockwave-flash" data\x3d"' + i + '" width\x3d"0" height\x3d"0"\x3e' + '\x3cparam name\x3d"movie" value\x3d"' + i + '"\x3e' + '\x3cparam name\x3d"allowScriptAccess" value\x3d"always"\x3e' + "\x3c/object\x3e";
        var k = document.createElement("div");
        document.body.appendChild(k);
        k.innerHTML = j
    }
    function b(l, i, j, n, k) {
        h[parseInt(l.tId)] = {
            "o": l,
            "c": n
        };
        if (k) {
            n.method = i;
            n.data = k
        }
        l.conn.send(j, n, l.tId)
    }
    function e(i) {
        d(i);
        g._transport = document.getElementById("YUIConnectionSwf")
    }
    function c() {
        g.xdrReadyEvent.fire()
    }
    function a(j, i) {
        if (j) {
            g.startEvent.fire(j, i.argument);
            if (j.startEvent)
                j.startEvent.fire(j, i.argument)
        }
    }
    function f(j) {
        var k = h[j.tId].o;
        var i = h[j.tId].c;
        if (j.statusText === "xdr:start") {
            a(k, i);
            return
        }
        j.responseText = decodeURI(j.responseText);
        k.r = j;
        if (i.argument)
            k.r.argument = i.argument;
        this.handleTransactionResponse(k, i, j.statusText === "xdr:abort" ? true : false);
        delete h[j.tId]
    }
    var g = YAHOO.util.Connect;
    var h = {};
    g.xdr = b;
    g.swf = d;
    g.transport = e;
    g.xdrReadyEvent = new YAHOO.util.CustomEvent("xdrReady");
    g.xdrReady = c;
    g.handleXdrResponse = f
}
)();
(function() {
    function h(w, r, m) {
        var v;
        var l;
        var u;
        var s;
        var z;
        var t = false;
        var p = [];
        var y = 0;
        var o;
        var q;
        var n;
        var x;
        var k;
        this.resetFormState();
        if (typeof w == "string")
            v = document.getElementById(w) || document.forms[w];
        else if (typeof w == "object")
            v = w;
        else
            return;
        if (r) {
            this.createFrame(m ? m : null);
            this._isFormSubmit = true;
            this._isFileUpload = true;
            this._formNode = v;
            return
        }
        for (o = 0,
        q = v.elements.length; o < q; ++o) {
            l = v.elements[o];
            z = l.disabled;
            u = l.name;
            if (!z && u) {
                u = encodeURIComponent(u) + "\x3d";
                s = encodeURIComponent(l.value);
                switch (l.type) {
                case "select-one":
                    if (l.selectedIndex > -1) {
                        k = l.options[l.selectedIndex];
                        p[y++] = u + encodeURIComponent(k.attributes.value && k.attributes.value.specified ? k.value : k.text)
                    }
                    break;
                case "select-multiple":
                    if (l.selectedIndex > -1)
                        for (n = l.selectedIndex,
                        x = l.options.length; n < x; ++n) {
                            k = l.options[n];
                            if (k.selected)
                                p[y++] = u + encodeURIComponent(k.attributes.value && k.attributes.value.specified ? k.value : k.text)
                        }
                    break;
                case "radio":
                case "checkbox":
                    if (l.checked)
                        p[y++] = u + s;
                    break;
                case "file":
                case undefined:
                case "reset":
                case "button":
                    break;
                case "submit":
                    if (t === false) {
                        if (this._hasSubmitListener && this._submitElementValue)
                            p[y++] = this._submitElementValue;
                        t = true
                    }
                    break;
                default:
                    p[y++] = u + s
                }
            }
        }
        this._isFormSubmit = true;
        this._sFormData = p.join("\x26");
        this.initHeader("Content-Type", this._default_form_header);
        return this._sFormData
    }
    function d() {
        this._isFormSubmit = false;
        this._isFileUpload = false;
        this._formNode = null;
        this._sFormData = ""
    }
    function c(i) {
        var j = "yuiIO" + this._transaction_id;
        var l = a === 9 ? true : false;
        var k;
        if (YAHOO.env.ua.ie && !l) {
            k = document.createElement('\x3ciframe id\x3d"' + j + '" name\x3d"' + j + '" /\x3e');
            if (typeof i == "boolean")
                k.src = "javascript:false"
        } else {
            k = document.createElement("iframe");
            k.id = j;
            k.name = j
        }
        k.style.position = "absolute";
        k.style.top = "-1000px";
        k.style.left = "-1000px";
        document.body.appendChild(k)
    }
    function f(j) {
        var m = [];
        var k = j.split("\x26");
        var l;
        var n;
        for (l = 0; l < k.length; l++) {
            n = k[l].indexOf("\x3d");
            if (n != -1) {
                m[l] = document.createElement("input");
                m[l].type = "hidden";
                m[l].name = decodeURIComponent(k[l].substring(0, n));
                m[l].value = decodeURIComponent(k[l].substring(n + 1));
                this._formNode.appendChild(m[l])
            }
        }
        return m
    }
    function b(m, y, n, l) {
        var t = "yuiIO" + m.tId;
        var u = "multipart/form-data";
        var w = document.getElementById(t);
        var p = a >= 8 ? true : false;
        var z = this;
        var v = y && y.argument ? y.argument : null;
        var x;
        var s;
        var k;
        var r;
        var j;
        var q;
        j = {
            action: this._formNode.getAttribute("action"),
            method: this._formNode.getAttribute("method"),
            target: this._formNode.getAttribute("target")
        };
        this._formNode.setAttribute("action", n);
        this._formNode.setAttribute("method", "POST");
        this._formNode.setAttribute("target", t);
        if (YAHOO.env.ua.ie && !p)
            this._formNode.setAttribute("encoding", u);
        else
            this._formNode.setAttribute("enctype", u);
        if (l)
            x = this.appendPostData(l);
        this._formNode.submit();
        this.startEvent.fire(m, v);
        if (m.startEvent)
            m.startEvent.fire(m, v);
        if (y && y.timeout)
            this._timeOut[m.tId] = window.setTimeout(function() {
                z.abort(m, y, true)
            }, y.timeout);
        if (x && x.length > 0)
            for (s = 0; s < x.length; s++)
                this._formNode.removeChild(x[s]);
        for (k in j)
            if (YAHOO.lang.hasOwnProperty(j, k))
                if (j[k])
                    this._formNode.setAttribute(k, j[k]);
                else
                    this._formNode.removeAttribute(k);
        this.resetFormState();
        q = function() {
            var i;
            var A;
            var B;
            if (y && y.timeout) {
                window.clearTimeout(z._timeOut[m.tId]);
                delete z._timeOut[m.tId]
            }
            z.completeEvent.fire(m, v);
            if (m.completeEvent)
                m.completeEvent.fire(m, v);
            r = {
                tId: m.tId,
                argument: v
            };
            try {
                i = w.contentWindow.document.getElementsByTagName("body")[0];
                A = w.contentWindow.document.getElementsByTagName("pre")[0];
                if (i)
                    if (A)
                        B = A.textContent ? A.textContent : A.innerText;
                    else
                        B = i.textContent ? i.textContent : i.innerText;
                r.responseText = B;
                r.responseXML = w.contentWindow.document.XMLDocument ? w.contentWindow.document.XMLDocument : w.contentWindow.document
            } catch (o) {}
            if (y && y.upload)
                if (!y.scope)
                    y.upload(r);
                else
                    y.upload.apply(y.scope, [r]);
            z.uploadEvent.fire(r);
            if (m.uploadEvent)
                m.uploadEvent.fire(r);
            g.removeListener(w, "load", q);
            setTimeout(function() {
                document.body.removeChild(w);
                z.releaseObject(m)
            }, 100)
        }
        ;
        g.addListener(w, "load", q)
    }
    var e = YAHOO.util.Connect;
    var g = YAHOO.util.Event;
    var a = document.documentMode ? document.documentMode : false;
    e._isFileUpload = false;
    e._formNode = null;
    e._sFormData = null;
    e._submitElementValue = null;
    e.uploadEvent = new YAHOO.util.CustomEvent("upload");
    e._hasSubmitListener = function() {
        if (g) {
            g.addListener(document, "click", function(k) {
                var j = g.getTarget(k);
                var i = j.nodeName.toLowerCase();
                if ((i === "input" || i === "button") && (j.type && j.type.toLowerCase() == "submit"))
                    e._submitElementValue = encodeURIComponent(j.name) + "\x3d" + encodeURIComponent(j.value)
            });
            return true
        }
        return false
    }();
    e.setForm = h;
    e.resetFormState = d;
    e.createFrame = c;
    e.appendPostData = f;
    e.uploadFile = b
}
)();
YAHOO.register("connection", YAHOO.util.Connect, {
    version: "2.9.0",
    build: "2800"
});
(function(a$$2, b$$2) {
    function cy(a) {
        return f$$1.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cv(a) {
        if (!ck[a]) {
            var b = c$$2.body;
            var d = f$$1("\x3c" + a + "\x3e").appendTo(b);
            var e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c$$2.createElement("iframe"),
                cl.frameBorder = cl.width = cl.height = 0),
                b.appendChild(cl);
                if (!cm || !cl.createElement)
                    cm = (cl.contentWindow || cl.contentDocument).document,
                    cm.write((c$$2.compatMode === "CSS1Compat" ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"),
                    cm.close();
                d = cm.createElement(a),
                cm.body.appendChild(d),
                e = f$$1.css(d, "display"),
                b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }
    function cu(a, b) {
        var c = {};
        f$$1.each(cq.concat.apply([], cq.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }
    function ct() {
        cr = b$$2
    }
    function cs() {
        setTimeout(ct, 0);
        return cr = f$$1.now()
    }
    function cj() {
        try {
            return new a$$2.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function ci() {
        try {
            return new a$$2.XMLHttpRequest
        } catch (b) {}
    }
    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes;
        var e = {};
        var g;
        var h;
        var i = d.length;
        var j;
        var k = d[0];
        var l;
        var m;
        var n;
        var o;
        var p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters)
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = d[g];
            if (k === "*")
                k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = e[m] || e["* " + k];
                if (!n) {
                    p = b$$2;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f$$1.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function cb(a, c, d) {
        var e = a.contents;
        var f = a.dataTypes;
        var g = a.responseFields;
        var h;
        var i;
        var j;
        var k;
        for (i in g)
            i in d && (c[g[i]] = d[i]);
        for (; f[0] === "*"; )
            f.shift(),
            h === b$$2 && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0]in d)
            j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function ca(a, b$$0, c, d) {
        if (f$$1.isArray(b$$0))
            f$$1.each(b$$0, function(b, e) {
                c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f$$1.isArray(e) ? b : "") + "]", e, c, d)
            });
        else if (!c && b$$0 != null && typeof b$$0 == "object")
            for (var e$$0 in b$$0)
                ca(a + "[" + e$$0 + "]", b$$0[e$$0], c, d);
        else
            d(a, b$$0)
    }
    function b_(a, c) {
        var d;
        var e;
        var g = f$$1.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b$$2 && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f$$1.extend(!0, a, e)
    }
    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f];
        var i = 0;
        var j = h ? h.length : 0;
        var k = a === bT;
        for (var l; i < j && (k || !l); i++)
            l = h[i](c, d, e),
            typeof l == "string" && (!k || g[l] ? l = b$$2 : (c.dataTypes.unshift(l),
            l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }
    function bZ(a) {
        return function(b, c) {
            typeof b != "string" && (c = b,
            b = "*");
            if (f$$1.isFunction(c)) {
                var d = b.toLowerCase().split(bP);
                var e = 0;
                var g = d.length;
                var h;
                var i;
                for (var j; e < g; e++)
                    h = d[e],
                    j = /^\+/.test(h),
                    j && (h = h.substr(1) || "*"),
                    i = a[h] = a[h] || [],
                    i[j ? "unshift" : "push"](c)
            }
        }
    }
    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight;
        var e = b === "width" ? bx : by;
        var g = 0;
        var h = e.length;
        if (d > 0) {
            if (c !== "border")
                for (; g < h; g++)
                    c || (d -= parseFloat(f$$1.css(a, "padding" + e[g])) || 0),
                    c === "margin" ? d += parseFloat(f$$1.css(a, c + e[g])) || 0 : d -= parseFloat(f$$1.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null)
            d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; g < h; g++)
                d += parseFloat(f$$1.css(a, "padding" + e[g])) || 0,
                c !== "padding" && (d += parseFloat(f$$1.css(a, "border" + e[g] + "Width")) || 0),
                c === "margin" && (d += parseFloat(f$$1.css(a, c + e[g])) || 0);
        return d + "px"
    }
    function bp(a, b) {
        b.src ? f$$1.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f$$1.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function bo(a) {
        var b = c$$2.createElement("div");
        bh.appendChild(b),
        b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f$$1.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")
            a.defaultChecked = a.checked
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase();
            if (c === "object")
                b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio")
                if (c === "option")
                    b.selected = a.defaultSelected;
                else {
                    if (c === "input" || c === "textarea")
                        b.defaultValue = a.defaultValue
                }
            else
                a.checked && (b.defaultChecked = b.checked = a.checked),
                b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f$$1.expando)
        }
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f$$1.hasData(a)) {
            var c;
            var d;
            var e;
            var g = f$$1._data(a);
            var h = f$$1._data(b, g);
            var i = g.events;
            if (i) {
                delete h.handle,
                h.events = {};
                for (c in i)
                    for (d = 0,
                    e = i[c].length; d < e; d++)
                        f$$1.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f$$1.extend({}, h.data))
        }
    }
    function bi(a, b) {
        return f$$1.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|");
        var c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function T(a$$0, b, c) {
        b = b || 0;
        if (f$$1.isFunction(b))
            return f$$1.grep(a$$0, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return f$$1.grep(a$$0, function(a, d) {
                return a === b === c
            });
        if (typeof b == "string") {
            var d$$0 = f$$1.grep(a$$0, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b))
                return f$$1.filter(b, d$$0, !c);
            b = f$$1.filter(b, d$$0)
        }
        return f$$1.grep(a$$0, function(a, d) {
            return f$$1.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return !0
    }
    function J$$0() {
        return !1
    }
    function n$$1(a, b, c) {
        var d = b + "defer";
        var e = b + "queue";
        var g = b + "mark";
        var h = f$$1._data(a, d);
        h && (c === "queue" || !f$$1._data(a, e)) && (c === "mark" || !f$$1._data(a, g)) && setTimeout(function() {
            !f$$1._data(a, e) && !f$$1._data(a, g) && (f$$1.removeData(a, d, !0),
            h.fire())
        }, 0)
    }
    function m$$1(a) {
        for (var b in a) {
            if (b === "data" && f$$1.isEmptyObject(a[b]))
                continue;
            if (b !== "toJSON")
                return !1
        }
        return !0
    }
    function l$$1(a, c, d) {
        if (d === b$$2 && a.nodeType === 1) {
            var e = "data-" + c.replace(k$$1, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f$$1.isNumeric(d) ? parseFloat(d) : j$$1.test(d) ? f$$1.parseJSON(d) : d
                } catch (g) {}
                f$$1.data(a, c, d)
            } else
                d = b$$2
        }
        return d
    }
    function h$$1(a) {
        var b = g$$1[a] = {};
        var c;
        var d;
        a = a.split(/\s+/);
        for (c = 0,
        d = a.length; c < d; c++)
            b[a[c]] = !0;
        return b
    }
    var c$$2 = a$$2.document;
    var d$$2 = a$$2.navigator;
    var e$$2 = a$$2.location;
    var f$$1 = function() {
        function J() {
            if (!e$$0.isReady) {
                try {
                    c$$2.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e$$0.ready()
            }
        }
        var e$$0 = function(a, b) {
            return new e$$0.fn.init(a,b,h$$0)
        };
        var f$$0 = a$$2.jQuery;
        var g$$0 = a$$2.$;
        var h$$0;
        var i$$0 = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
        var j$$0 = /\S/;
        var k$$0 = /^\s+/;
        var l$$0 = /\s+$/;
        var m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
        var n = /^[\],:{}\s]*$/;
        var o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var q = /(?:^|:|,)(?:\s*\[)+/g;
        var r = /(webkit)[ \/]([\w.]+)/;
        var s = /(opera)(?:.*version)?[ \/]([\w.]+)/;
        var t = /(msie) ([\w.]+)/;
        var u = /(mozilla)(?:.*? rv:([\w.]+))?/;
        var v = /-([a-z]|[0-9])/ig;
        var w = /^-ms-/;
        var x = function(a, b) {
            return (b + "").toUpperCase()
        };
        var y = d$$2.userAgent;
        var z;
        var A;
        var B;
        var C = Object.prototype.toString;
        var D = Object.prototype.hasOwnProperty;
        var E = Array.prototype.push;
        var F = Array.prototype.slice;
        var G = String.prototype.trim;
        var H = Array.prototype.indexOf;
        var I = {};
        e$$0.fn = e$$0.prototype = {
            constructor: e$$0,
            init: function(a, d, f) {
                var g;
                var h;
                var j;
                var k;
                if (!a)
                    return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !d && c$$2.body) {
                    this.context = c$$2,
                    this[0] = c$$2.body,
                    this.selector = a,
                    this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "\x3c" || a.charAt(a.length - 1) !== "\x3e" || a.length < 3 ? g = i$$0.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e$$0 ? d[0] : d,
                            k = d ? d.ownerDocument || d : c$$2,
                            j = m.exec(a),
                            j ? e$$0.isPlainObject(d) ? (a = [c$$2.createElement(j[1])],
                            e$$0.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e$$0.buildFragment([g[1]], [k]),
                            a = (j.cacheable ? e$$0.clone(j.fragment) : j.fragment).childNodes);
                            return e$$0.merge(this, a)
                        }
                        h = c$$2.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2])
                                return f.find(a);
                            this.length = 1,
                            this[0] = h
                        }
                        this.context = c$$2,
                        this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e$$0.isFunction(a))
                    return f.ready(a);
                a.selector !== b$$2 && (this.selector = a.selector,
                this.context = a.context);
                return e$$0.makeArray(a, this)
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return F.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                e$$0.isArray(a) ? E.apply(d, a) : e$$0.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            },
            each: function(a, b) {
                return e$$0.each(this, a, b)
            },
            ready: function(a) {
                e$$0.bindReady(),
                A.add(a);
                return this
            },
            eq: function(a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(e$$0.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        },
        e$$0.fn.init.prototype = e$$0.fn,
        e$$0.extend = e$$0.fn.extend = function() {
            var a;
            var c;
            var d;
            var f;
            var g;
            var h;
            var i = arguments[0] || {};
            var j = 1;
            var k = arguments.length;
            var l = !1;
            for (typeof i == "boolean" && (l = i,
            i = arguments[1] || {},
            j = 2),
            typeof i != "object" && !e$$0.isFunction(i) && (i = {}),
            k === j && (i = this,
            --j); j < k; j++)
                if ((a = arguments[j]) != null)
                    for (c in a) {
                        d = i[c],
                        f = a[c];
                        if (i === f)
                            continue;
                        l && f && (e$$0.isPlainObject(f) || (g = e$$0.isArray(f))) ? (g ? (g = !1,
                        h = d && e$$0.isArray(d) ? d : []) : h = d && e$$0.isPlainObject(d) ? d : {},
                        i[c] = e$$0.extend(l, h, f)) : f !== b$$2 && (i[c] = f)
                    }
            return i
        }
        ,
        e$$0.extend({
            noConflict: function(b) {
                a$$2.$ === e$$0 && (a$$2.$ = g$$0),
                b && a$$2.jQuery === e$$0 && (a$$2.jQuery = f$$0);
                return e$$0
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? e$$0.readyWait++ : e$$0.ready(!0)
            },
            ready: function(a) {
                if (a === !0 && !--e$$0.readyWait || a !== !0 && !e$$0.isReady) {
                    if (!c$$2.body)
                        return setTimeout(e$$0.ready, 1);
                    e$$0.isReady = !0;
                    if (a !== !0 && --e$$0.readyWait > 0)
                        return;
                    A.fireWith(c$$2, [e$$0]),
                    e$$0.fn.trigger && e$$0(c$$2).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!A) {
                    A = e$$0.Callbacks("once memory");
                    if (c$$2.readyState === "complete")
                        return setTimeout(e$$0.ready, 1);
                    if (c$$2.addEventListener)
                        c$$2.addEventListener("DOMContentLoaded", B, !1),
                        a$$2.addEventListener("load", e$$0.ready, !1);
                    else if (c$$2.attachEvent) {
                        c$$2.attachEvent("onreadystatechange", B),
                        a$$2.attachEvent("onload", e$$0.ready);
                        var b = !1;
                        try {
                            b = a$$2.frameElement == null
                        } catch (d) {}
                        c$$2.documentElement.doScroll && b && J()
                    }
                }
            },
            isFunction: function(a) {
                return e$$0.type(a) === "function"
            },
            isArray: Array.isArray || function(a) {
                return e$$0.type(a) === "array"
            }
            ,
            isWindow: function(a) {
                return a && typeof a == "object" && "setInterval"in a
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || e$$0.type(a) !== "object" || a.nodeType || e$$0.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                for (var d in a)
                    ;
                return d === b$$2 || D.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a)
                    return !1;
                return !0
            },
            error: function(a) {
                throw new Error(a);
            },
            parseJSON: function(b) {
                if (typeof b != "string" || !b)
                    return null;
                b = e$$0.trim(b);
                if (a$$2.JSON && a$$2.JSON.parse)
                    return a$$2.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
                    return (new Function("return " + b))();
                e$$0.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                var d;
                var f;
                try {
                    a$$2.DOMParser ? (f = new DOMParser,
                    d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                    d.async = "false",
                    d.loadXML(c))
                } catch (g) {
                    d = b$$2
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e$$0.error("Invalid XML: " + c);
                return d
            },
            noop: function() {},
            globalEval: function(b$$0) {
                b$$0 && j$$0.test(b$$0) && (a$$2.execScript || function(b) {
                    a$$2.eval.call(a$$2, b)
                }
                )(b$$0)
            },
            camelCase: function(a) {
                return a.replace(w, "ms-").replace(v, x)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var f;
                var g = 0;
                var h = a.length;
                var i = h === b$$2 || e$$0.isFunction(a);
                if (d)
                    if (i)
                        for (f in a) {
                            if (c.apply(a[f], d) === !1)
                                break
                        }
                    else
                        for (; g < h; ) {
                            if (c.apply(a[g++], d) === !1)
                                break
                        }
                else if (i)
                    for (f in a) {
                        if (c.call(a[f], f, a[f]) === !1)
                            break
                    }
                else
                    for (; g < h; )
                        if (c.call(a[g], g, a[g++]) === !1)
                            break;
                return a
            },
            trim: G ? function(a) {
                return a == null ? "" : G.call(a)
            }
            : function(a) {
                return a == null ? "" : (a + "").replace(k$$0, "").replace(l$$0, "")
            }
            ,
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e$$0.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e$$0.isWindow(a) ? E.call(c, a) : e$$0.merge(c, a)
                }
                return c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (H)
                        return H.call(b, a, c);
                    for (d = b.length,
                    c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                        if (c in b && b[c] === a)
                            return c
                }
                return -1
            },
            merge: function(a, c) {
                var d = a.length;
                var e = 0;
                if (typeof c.length == "number")
                    for (var f = c.length; e < f; e++)
                        a[d++] = c[e];
                else
                    for (; c[e] !== b$$2; )
                        a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [];
                var e;
                c = !!c;
                var f = 0;
                for (var g = a.length; f < g; f++)
                    e = !!b(a[f], f),
                    c !== e && d.push(a[f]);
                return d
            },
            map: function(a, c, d) {
                var f;
                var g;
                var h = [];
                var i = 0;
                var j = a.length;
                var k = a instanceof e$$0 || j !== b$$2 && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e$$0.isArray(a));
                if (k)
                    for (; i < j; i++)
                        f = c(a[i], i, d),
                        f != null && (h[h.length] = f);
                else
                    for (g in a)
                        f = c(a[g], g, d),
                        f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            },
            guid: 1,
            proxy: function(a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!e$$0.isFunction(a))
                    return b$$2;
                var f = F.call(arguments, 2);
                var g = function() {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e$$0.guid++;
                return g
            },
            access: function(a, c, d, f, g, h) {
                var i = a.length;
                if (typeof c == "object") {
                    for (var j in c)
                        e$$0.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b$$2) {
                    f = !h && f && e$$0.isFunction(d);
                    for (var k = 0; k < i; k++)
                        g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b$$2
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b,c)
                }
                e$$0.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(d, f) {
                    f && f instanceof e$$0 && !(f instanceof a) && (f = a(f));
                    return e$$0.fn.init.call(this, d, f, b$$0)
                }
                ,
                a.fn.init.prototype = a.fn;
                var b$$0 = a(c$$2);
                return a
            },
            browser: {}
        }),
        e$$0.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }),
        z = e$$0.uaMatch(y),
        z.browser && (e$$0.browser[z.browser] = !0,
        e$$0.browser.version = z.version),
        e$$0.browser.webkit && (e$$0.browser.safari = !0),
        j$$0.test("\u00a0") && (k$$0 = /^[\s\xA0]+/,
        l$$0 = /[\s\xA0]+$/),
        h$$0 = e$$0(c$$2),
        c$$2.addEventListener ? B = function() {
            c$$2.removeEventListener("DOMContentLoaded", B, !1),
            e$$0.ready()
        }
        : c$$2.attachEvent && (B = function() {
            c$$2.readyState === "complete" && (c$$2.detachEvent("onreadystatechange", B),
            e$$0.ready())
        }
        );
        return e$$0
    }();
    var g$$1 = {};
    f$$1.Callbacks = function(a$$0) {
        a$$0 = a$$0 ? g$$1[a$$0] || h$$1(a$$0) : {};
        var c$$0 = [];
        var d$$0 = [];
        var e$$0;
        var i$$0;
        var j;
        var k;
        var l;
        var m = function(b) {
            var d;
            var e;
            var g;
            var h;
            var i;
            for (d = 0,
            e = b.length; d < e; d++)
                g = b[d],
                h = f$$1.type(g),
                h === "array" ? m(g) : h === "function" && (!a$$0.unique || !o.has(g)) && c$$0.push(g)
        };
        var n = function(b, f) {
            for (f = f || [],
            e$$0 = !a$$0.memory || [b, f],
            i$$0 = !0,
            l = j || 0,
            j = 0,
            k = c$$0.length; c$$0 && l < k; l++)
                if (c$$0[l].apply(b, f) === !1 && a$$0.stopOnFalse) {
                    e$$0 = !0;
                    break
                }
            i$$0 = !1,
            c$$0 && (a$$0.once ? e$$0 === !0 ? o.disable() : c$$0 = [] : d$$0 && d$$0.length && (e$$0 = d$$0.shift(),
            o.fireWith(e$$0[0], e$$0[1])))
        };
        var o = {
            add: function() {
                if (c$$0) {
                    var a = c$$0.length;
                    m(arguments),
                    i$$0 ? k = c$$0.length : e$$0 && e$$0 !== !0 && (j = a,
                    n(e$$0[0], e$$0[1]))
                }
                return this
            },
            remove: function() {
                if (c$$0) {
                    var b = arguments;
                    var d = 0;
                    for (var e = b.length; d < e; d++)
                        for (var f = 0; f < c$$0.length; f++)
                            if (b[d] === c$$0[f]) {
                                i$$0 && f <= k && (k--,
                                f <= l && l--),
                                c$$0.splice(f--, 1);
                                if (a$$0.unique)
                                    break
                            }
                }
                return this
            },
            has: function(a) {
                if (c$$0) {
                    var b = 0;
                    for (var d = c$$0.length; b < d; b++)
                        if (a === c$$0[b])
                            return !0
                }
                return !1
            },
            empty: function() {
                c$$0 = [];
                return this
            },
            disable: function() {
                c$$0 = d$$0 = e$$0 = b$$2;
                return this
            },
            disabled: function() {
                return !c$$0
            },
            lock: function() {
                d$$0 = b$$2,
                (!e$$0 || e$$0 === !0) && o.disable();
                return this
            },
            locked: function() {
                return !d$$0
            },
            fireWith: function(b, c) {
                d$$0 && (i$$0 ? a$$0.once || d$$0.push([b, c]) : (!a$$0.once || !e$$0) && n(b, c));
                return this
            },
            fire: function() {
                o.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!e$$0
            }
        };
        return o
    }
    ;
    var i$$1 = [].slice;
    f$$1.extend({
        Deferred: function(a$$1) {
            var b$$1 = f$$1.Callbacks("once memory");
            var c$$1 = f$$1.Callbacks("once memory");
            var d$$0 = f$$1.Callbacks("memory");
            var e$$0 = "pending";
            var g$$0 = {
                resolve: b$$1,
                reject: c$$1,
                notify: d$$0
            };
            var h = {
                done: b$$1.add,
                fail: c$$1.add,
                progress: d$$0.add,
                state: function() {
                    return e$$0
                },
                isResolved: b$$1.fired,
                isRejected: c$$1.fired,
                then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function() {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },
                pipe: function(a$$0, b$$0, c$$0) {
                    return f$$1.Deferred(function(d) {
                        f$$1.each({
                            done: [a$$0, "resolve"],
                            fail: [b$$0, "reject"],
                            progress: [c$$0, "notify"]
                        }, function(a, b) {
                            var c = b[0];
                            var e = b[1];
                            var g;
                            f$$1.isFunction(c) ? i[a](function() {
                                g = c.apply(this, arguments),
                                g && f$$1.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (a == null)
                        a = h;
                    else
                        for (var b in h)
                            a[b] = h[b];
                    return a
                }
            };
            var i = h.promise({});
            for (var j in g$$0)
                i[j] = g$$0[j].fire,
                i[j + "With"] = g$$0[j].fireWith;
            i.done(function() {
                e$$0 = "resolved"
            }, c$$1.disable, d$$0.lock).fail(function() {
                e$$0 = "rejected"
            }, b$$1.disable, d$$0.lock),
            a$$1 && a$$1.call(i, i);
            return i
        },
        when: function(a$$0) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i$$1.call(arguments, 0) : b,
                    j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function(c) {
                    b$$0[a] = arguments.length > 1 ? i$$1.call(arguments, 0) : c,
                    --g || j.resolveWith(j, b$$0)
                }
            }
            var b$$0 = i$$1.call(arguments, 0);
            var c$$0 = 0;
            var d = b$$0.length;
            var e = Array(d);
            var g = d;
            var h = d;
            var j = d <= 1 && a$$0 && f$$1.isFunction(a$$0.promise) ? a$$0 : f$$1.Deferred();
            var k = j.promise();
            if (d > 1) {
                for (; c$$0 < d; c$$0++)
                    b$$0[c$$0] && b$$0[c$$0].promise && f$$1.isFunction(b$$0[c$$0].promise) ? b$$0[c$$0].promise().then(l(c$$0), j.reject, m(c$$0)) : --g;
                g || j.resolveWith(j, b$$0)
            } else
                j !== a$$0 && j.resolveWith(j, d ? [a$$0] : []);
            return k
        }
    }),
    f$$1.support = function() {
        var b;
        var d$$0;
        var e$$0;
        var g$$0;
        var h$$0;
        var i$$0;
        var j$$0;
        var k$$0;
        var l;
        var m$$0;
        var n$$0;
        var o$$0;
        var p;
        var q = c$$2.createElement("div");
        var r$$0 = c$$2.documentElement;
        q.setAttribute("className", "t"),
        q.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e",
        d$$0 = q.getElementsByTagName("*"),
        e$$0 = q.getElementsByTagName("a")[0];
        if (!d$$0 || !d$$0.length || !e$$0)
            return {};
        g$$0 = c$$2.createElement("select"),
        h$$0 = g$$0.appendChild(c$$2.createElement("option")),
        i$$0 = q.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e$$0.getAttribute("style")),
            hrefNormalized: e$$0.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e$$0.style.opacity),
            cssFloat: !!e$$0.style.cssFloat,
            checkOn: i$$0.value === "on",
            optSelected: h$$0.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c$$2.createElement("form").enctype,
            html5Clone: c$$2.createElement("nav").cloneNode(!0).outerHTML !== "\x3c:nav\x3e\x3c/:nav\x3e",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        },
        i$$0.checked = !0,
        b.noCloneChecked = i$$0.cloneNode(!0).checked,
        g$$0.disabled = !0,
        b.optDisabled = !h$$0.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }
        !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }),
        q.cloneNode(!0).fireEvent("onclick")),
        i$$0 = c$$2.createElement("input"),
        i$$0.value = "t",
        i$$0.setAttribute("type", "radio"),
        b.radioValue = i$$0.value === "t",
        i$$0.setAttribute("checked", "checked"),
        q.appendChild(i$$0),
        k$$0 = c$$2.createDocumentFragment(),
        k$$0.appendChild(q.lastChild),
        b.checkClone = k$$0.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = i$$0.checked,
        k$$0.removeChild(i$$0),
        k$$0.appendChild(q),
        q.innerHTML = "",
        a$$2.getComputedStyle && (j$$0 = c$$2.createElement("div"),
        j$$0.style.width = "0",
        j$$0.style.marginRight = "0",
        q.style.width = "2px",
        q.appendChild(j$$0),
        b.reliableMarginRight = (parseInt((a$$2.getComputedStyle(j$$0, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (q.attachEvent)
            for (o$$0 in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                n$$0 = "on" + o$$0,
                p = n$$0 in q,
                p || (q.setAttribute(n$$0, "return;"),
                p = typeof q[n$$0] == "function"),
                b[o$$0 + "Bubbles"] = p;
        k$$0.removeChild(q),
        k$$0 = g$$0 = h$$0 = j$$0 = q = i$$0 = null,
        f$$1(function() {
            var a;
            var d;
            var e;
            var g;
            var h;
            var i;
            var j;
            var k;
            var m;
            var n;
            var o;
            var r = c$$2.getElementsByTagName("body")[0];
            !r || (j = 1,
            k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
            m = "visibility:hidden;border:0;",
            n = "style\x3d'" + k + "border:5px solid #000;padding:0;'",
            o = "\x3cdiv " + n + "\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e" + "\x3ctable " + n + " cellpadding\x3d'0' cellspacing\x3d'0'\x3e" + "\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
            a = c$$2.createElement("div"),
            a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px",
            r.insertBefore(a, r.firstChild),
            q = c$$2.createElement("div"),
            a.appendChild(q),
            q.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
            l = q.getElementsByTagName("td"),
            p = l[0].offsetHeight === 0,
            l[0].style.display = "",
            l[1].style.display = "none",
            b.reliableHiddenOffsets = p && l[0].offsetHeight === 0,
            q.innerHTML = "",
            q.style.width = q.style.paddingLeft = "1px",
            f$$1.boxModel = b.boxModel = q.offsetWidth === 2,
            typeof q.style.zoom != "undefined" && (q.style.display = "inline",
            q.style.zoom = 1,
            b.inlineBlockNeedsLayout = q.offsetWidth === 2,
            q.style.display = "",
            q.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e",
            b.shrinkWrapBlocks = q.offsetWidth !== 2),
            q.style.cssText = k + m,
            q.innerHTML = o,
            d = q.firstChild,
            e = d.firstChild,
            h = d.nextSibling.firstChild.firstChild,
            i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            },
            e.style.position = "fixed",
            e.style.top = "20px",
            i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15,
            e.style.position = e.style.top = "",
            d.style.overflow = "hidden",
            d.style.position = "relative",
            i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5,
            i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j,
            r.removeChild(a),
            q = a = null,
            f$$1.extend(b, i))
        });
        return b
    }();
    var j$$1 = /^(?:\{.*\}|\[.*\])$/;
    var k$$1 = /([A-Z])/g;
    f$$1.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f$$1.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f$$1.cache[a[f$$1.expando]] : a[f$$1.expando];
            return !!a && !m$$1(a)
        },
        data: function(a, c, d, e) {
            if (!!f$$1.acceptData(a)) {
                var g;
                var h;
                var i;
                var j = f$$1.expando;
                var k = typeof c == "string";
                var l = a.nodeType;
                var m = l ? f$$1.cache : a;
                var n = l ? a[j] : a[j] && j;
                var o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b$$2)
                    return;
                n || (l ? a[j] = n = ++f$$1.uuid : n = j),
                m[n] || (m[n] = {},
                l || (m[n].toJSON = f$$1.noop));
                if (typeof c == "object" || typeof c == "function")
                    e ? m[n] = f$$1.extend(m[n], c) : m[n].data = f$$1.extend(m[n].data, c);
                g = h = m[n],
                e || (h.data || (h.data = {}),
                h = h.data),
                d !== b$$2 && (h[f$$1.camelCase(c)] = d);
                if (o && !h[c])
                    return g.events;
                k ? (i = h[c],
                i == null && (i = h[f$$1.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f$$1.acceptData(a)) {
                var d;
                var e;
                var g;
                var h = f$$1.expando;
                var i = a.nodeType;
                var j = i ? f$$1.cache : a;
                var k = i ? a[h] : h;
                if (!j[k])
                    return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f$$1.isArray(b) || (b in d ? b = [b] : (b = f$$1.camelCase(b),
                        b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0,
                        g = b.length; e < g; e++)
                            delete d[b[e]];
                        if (!(c ? m$$1 : f$$1.isEmptyObject)(d))
                            return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m$$1(j[k]))
                        return
                }
                f$$1.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f$$1.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f$$1.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f$$1.noData[a.nodeName.toLowerCase()];
                if (b)
                    return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }),
    f$$1.fn.extend({
        data: function(a, c) {
            var d;
            var e$$0;
            var g;
            var h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f$$1.data(this[0]);
                    if (this[0].nodeType === 1 && !f$$1._data(this[0], "parsedAttrs")) {
                        e$$0 = this[0].attributes;
                        var i = 0;
                        for (var j = e$$0.length; i < j; i++)
                            g = e$$0[i].name,
                            g.indexOf("data-") === 0 && (g = f$$1.camelCase(g.substring(5)),
                            l$$1(this[0], g, h[g]));
                        f$$1._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object")
                return this.each(function() {
                    f$$1.data(this, a)
                });
            d = a.split("."),
            d[1] = d[1] ? "." + d[1] : "";
            if (c === b$$2) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]),
                h === b$$2 && this.length && (h = f$$1.data(this[0], a),
                h = l$$1(this[0], a, h));
                return h === b$$2 && d[1] ? this.data(d[0]) : h
            }
            return this.each(function() {
                var b = f$$1(this);
                var e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e),
                f$$1.data(this, a, c),
                b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                f$$1.removeData(this, a)
            })
        }
    }),
    f$$1.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark",
            f$$1._data(a, b, (f$$1._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b,
            b = a,
            a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark";
                var e = a ? 0 : (f$$1._data(b, d) || 1) - 1;
                e ? f$$1._data(b, d, e) : (f$$1.removeData(b, d, !0),
                n$$1(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue",
                d = f$$1._data(a, b),
                c && (!d || f$$1.isArray(c) ? d = f$$1._data(a, b, f$$1.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f$$1.queue(a, b);
            var d = c.shift();
            var e = {};
            d === "inprogress" && (d = c.shift()),
            d && (b === "fx" && c.unshift("inprogress"),
            f$$1._data(a, b + ".run", e),
            d.call(a, function() {
                f$$1.dequeue(a, b)
            }, e)),
            c.length || (f$$1.removeData(a, b + "queue " + b + ".run", !0),
            n$$1(a, b, "queue"))
        }
    }),
    f$$1.fn.extend({
        queue: function(a, c) {
            typeof a != "string" && (c = a,
            a = "fx");
            if (c === b$$2)
                return f$$1.queue(this[0], a);
            return this.each(function() {
                var b = f$$1.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f$$1.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f$$1.dequeue(this, a)
            })
        },
        delay: function(a, b$$0) {
            a = f$$1.fx ? f$$1.fx.speeds[a] || a : a,
            b$$0 = b$$0 || "fx";
            return this.queue(b$$0, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a,
            a = b$$2),
            a = a || "fx";
            var d = f$$1.Deferred();
            var e = this;
            var g = e.length;
            var h = 1;
            var i = a + "defer";
            var j = a + "queue";
            var k = a + "mark";
            for (var l; g--; )
                if (l = f$$1.data(e[g], i, b$$2, !0) || (f$$1.data(e[g], j, b$$2, !0) || f$$1.data(e[g], k, b$$2, !0)) && f$$1.data(e[g], i, f$$1.Callbacks("once memory"), !0))
                    h++,
                    l.add(m);
            m();
            return d.promise()
        }
    });
    var o$$1 = /[\n\t\r]/g;
    var p$$1 = /\s+/;
    var q$$1 = /\r/g;
    var r$$1 = /^(?:button|input)$/i;
    var s$$1 = /^(?:button|input|object|select|textarea)$/i;
    var t$$0 = /^a(?:rea)?$/i;
    var u$$1 = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    var v$$1 = f$$1.support.getSetAttribute;
    var w$$1;
    var x$$1;
    var y$$1;
    f$$1.fn.extend({
        attr: function(a, b) {
            return f$$1.access(this, a, b, !0, f$$1.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f$$1.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f$$1.access(this, a, b, !0, f$$1.prop)
        },
        removeProp: function(a) {
            a = f$$1.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b$$2,
                    delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b$$0;
            var c;
            var d;
            var e;
            var g;
            var h;
            var i;
            if (f$$1.isFunction(a))
                return this.each(function(b) {
                    f$$1(this).addClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string") {
                b$$0 = a.split(p$$1);
                for (c = 0,
                d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b$$0.length === 1)
                            e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0,
                            i = b$$0.length; h < i; h++)
                                ~g.indexOf(" " + b$$0[h] + " ") || (g += b$$0[h] + " ");
                            e.className = f$$1.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c;
            var d;
            var e;
            var g;
            var h;
            var i;
            var j;
            if (f$$1.isFunction(a))
                return this.each(function(b) {
                    f$$1(this).removeClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string" || a === b$$2) {
                c = (a || "").split(p$$1);
                for (d = 0,
                e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o$$1, " ");
                            for (i = 0,
                            j = c.length; i < j; i++)
                                h = h.replace(" " + c[i] + " ", " ");
                            g.className = f$$1.trim(h)
                        } else
                            g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c$$0 = typeof a;
            var d = typeof b == "boolean";
            if (f$$1.isFunction(a))
                return this.each(function(c) {
                    f$$1(this).toggleClass(a.call(this, c, this.className, b), b)
                });
            return this.each(function() {
                if (c$$0 === "string") {
                    var e;
                    var g = 0;
                    var h = f$$1(this);
                    var i = b;
                    for (var j = a.split(p$$1); e = j[g++]; )
                        i = d ? i : !h.hasClass(e),
                        h[i ? "addClass" : "removeClass"](e)
                } else if (c$$0 === "undefined" || c$$0 === "boolean")
                    this.className && f$$1._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : f$$1._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ";
            var c = 0;
            for (var d = this.length; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o$$1, " ").indexOf(b) > -1)
                    return !0;
            return !1
        },
        val: function(a$$0) {
            var c;
            var d$$0;
            var e;
            var g$$0 = this[0];
            if (!!arguments.length) {
                e = f$$1.isFunction(a$$0);
                return this.each(function(d) {
                    var g = f$$1(this);
                    var h;
                    if (this.nodeType === 1) {
                        e ? h = a$$0.call(this, d, g.val()) : h = a$$0,
                        h == null ? h = "" : typeof h == "number" ? h += "" : f$$1.isArray(h) && (h = f$$1.map(h, function(a) {
                            return a == null ? "" : a + ""
                        })),
                        c = f$$1.valHooks[this.nodeName.toLowerCase()] || f$$1.valHooks[this.type];
                        if (!c || !("set"in c) || c.set(this, h, "value") === b$$2)
                            this.value = h
                    }
                })
            }
            if (g$$0) {
                c = f$$1.valHooks[g$$0.nodeName.toLowerCase()] || f$$1.valHooks[g$$0.type];
                if (c && "get"in c && (d$$0 = c.get(g$$0, "value")) !== b$$2)
                    return d$$0;
                d$$0 = g$$0.value;
                return typeof d$$0 == "string" ? d$$0.replace(q$$1, "") : d$$0 == null ? "" : d$$0
            }
        }
    }),
    f$$1.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b;
                    var c;
                    var d;
                    var e;
                    var g = a.selectedIndex;
                    var h = [];
                    var i = a.options;
                    var j = a.type === "select-one";
                    if (g < 0)
                        return null;
                    for (c = j ? g : 0,
                    d = j ? g + 1 : i.length; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f$$1.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f$$1.nodeName(e.parentNode, "optgroup"))) {
                            b = f$$1(e).val();
                            if (j)
                                return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length)
                        return f$$1(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f$$1.makeArray(b);
                    f$$1(a).find("option").each(function() {
                        this.selected = f$$1.inArray(f$$1(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g;
            var h;
            var i;
            var j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f$$1.attrFn)
                    return f$$1(a)[c](d);
                if (typeof a.getAttribute == "undefined")
                    return f$$1.prop(a, c, d);
                i = j !== 1 || !f$$1.isXMLDoc(a),
                i && (c = c.toLowerCase(),
                h = f$$1.attrHooks[c] || (u$$1.test(c) ? x$$1 : w$$1));
                if (d !== b$$2) {
                    if (d === null) {
                        f$$1.removeAttr(a, c);
                        return
                    }
                    if (h && "set"in h && i && (g = h.set(a, d, c)) !== b$$2)
                        return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get"in h && i && (g = h.get(a, c)) !== null)
                    return g;
                g = a.getAttribute(c);
                return g === null ? b$$2 : g
            }
        },
        removeAttr: function(a, b) {
            var c;
            var d;
            var e;
            var g;
            var h = 0;
            if (b && a.nodeType === 1)
                for (d = b.toLowerCase().split(p$$1),
                g = d.length; h < g; h++)
                    e = d[h],
                    e && (c = f$$1.propFix[e] || e,
                    f$$1.attr(a, e, ""),
                    a.removeAttribute(v$$1 ? e : c),
                    u$$1.test(e) && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r$$1.test(a.nodeName) && a.parentNode)
                        f$$1.error("type property can't be changed");
                    else if (!f$$1.support.radioValue && b === "radio" && f$$1.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b),
                        c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w$$1 && f$$1.nodeName(a, "button"))
                        return w$$1.get(a, b);
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w$$1 && f$$1.nodeName(a, "button"))
                        return w$$1.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e;
            var g;
            var h;
            var i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f$$1.isXMLDoc(a),
                h && (c = f$$1.propFix[c] || c,
                g = f$$1.propHooks[c]);
                return d !== b$$2 ? g && "set"in g && (e = g.set(a, d, c)) !== b$$2 ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s$$1.test(a.nodeName) || t$$0.test(a.nodeName) && a.href ? 0 : b$$2
                }
            }
        }
    }),
    f$$1.attrHooks.tabindex = f$$1.propHooks.tabIndex,
    x$$1 = {
        get: function(a, c) {
            var d;
            var e = f$$1.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b$$2
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f$$1.removeAttr(a, c) : (d = f$$1.propFix[c] || c,
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase()));
            return c
        }
    },
    v$$1 || (y$$1 = {
        name: !0,
        id: !0
    },
    w$$1 = f$$1.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y$$1[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b$$2
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c$$2.createAttribute(d),
            a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    },
    f$$1.attrHooks.tabindex.set = w$$1.set,
    f$$1.each(["width", "height"], function(a$$0, b) {
        f$$1.attrHooks[b] = f$$1.extend(f$$1.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }),
    f$$1.attrHooks.contenteditable = {
        get: w$$1.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
            w$$1.set(a, b, c)
        }
    }),
    f$$1.support.hrefNormalized || f$$1.each(["href", "src", "width", "height"], function(a$$0, c) {
        f$$1.attrHooks[c] = f$$1.extend(f$$1.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b$$2 : d
            }
        })
    }),
    f$$1.support.style || (f$$1.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b$$2
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f$$1.support.optSelected || (f$$1.propHooks.selected = f$$1.extend(f$$1.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })),
    f$$1.support.enctype || (f$$1.propFix.enctype = "encoding"),
    f$$1.support.checkOn || f$$1.each(["radio", "checkbox"], function() {
        f$$1.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }),
    f$$1.each(["radio", "checkbox"], function() {
        f$$1.valHooks[this] = f$$1.extend(f$$1.valHooks[this], {
            set: function(a, b) {
                if (f$$1.isArray(b))
                    return a.checked = f$$1.inArray(f$$1(a).val(), b) >= 0
            }
        })
    });
    var z$$0 = /^(?:textarea|input|select)$/i;
    var A$$0 = /^([^\.]*)?(?:\.(.+))?$/;
    var B$$0 = /\bhover(\.\S+)?\b/;
    var C$$0 = /^key/;
    var D$$0 = /^(?:mouse|contextmenu)|click/;
    var E$$0 = /^(?:focusinfocus|focusoutblur)$/;
    var F$$0 = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/;
    var G$$0 = function(a) {
        var b = F$$0.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(),
        b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    };
    var H$$0 = function(a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    };
    var I$$0 = function(a) {
        return f$$1.event.special.hover ? a : a.replace(B$$0, "mouseenter$1 mouseleave$1")
    };
    f$$1.event = {
        add: function(a$$0, c, d, e, g) {
            var h;
            var i;
            var j;
            var k;
            var l;
            var m;
            var n;
            var o;
            var p;
            var q;
            var r;
            var s;
            if (!(a$$0.nodeType === 3 || a$$0.nodeType === 8 || !c || !d || !(h = f$$1._data(a$$0)))) {
                d.handler && (p = d,
                d = p.handler),
                d.guid || (d.guid = f$$1.guid++),
                j = h.events,
                j || (h.events = j = {}),
                i = h.handle,
                i || (h.handle = i = function(a) {
                    return typeof f$$1 != "undefined" && (!a || f$$1.event.triggered !== a.type) ? f$$1.event.dispatch.apply(i.elem, arguments) : b$$2
                }
                ,
                i.elem = a$$0),
                c = f$$1.trim(I$$0(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A$$0.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || "").split(".").sort(),
                    s = f$$1.event.special[m] || {},
                    m = (g ? s.delegateType : s.bindType) || m,
                    s = f$$1.event.special[m] || {},
                    o = f$$1.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: G$$0(g),
                        namespace: n.join(".")
                    }, p),
                    r = j[m];
                    if (!r) {
                        r = j[m] = [],
                        r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a$$0, e, n, i) === !1)
                            a$$0.addEventListener ? a$$0.addEventListener(m, i, !1) : a$$0.attachEvent && a$$0.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a$$0, o),
                    o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                    f$$1.event.global[m] = !0
                }
                a$$0 = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var g = f$$1.hasData(a) && f$$1._data(a);
            var h;
            var i;
            var j;
            var k;
            var l;
            var m;
            var n;
            var o;
            var p;
            var q;
            var r;
            var s;
            if (!!g && !!(o = g.events)) {
                b = f$$1.trim(I$$0(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A$$0.exec(b[h]) || [],
                    j = k = i[1],
                    l = i[2];
                    if (!j) {
                        for (j in o)
                            f$$1.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f$$1.event.special[j] || {},
                    j = (d ? p.delegateType : p.bindType) || j,
                    r = o[j] || [],
                    m = r.length,
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++)
                        s = r[n],
                        (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1),
                        s.selector && r.delegateCount--,
                        p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f$$1.removeEvent(a, j, g.handle),
                    delete o[j])
                }
                f$$1.isEmptyObject(o) && (q = g.handle,
                q && (q.elem = null),
                f$$1.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c;
                var i = [];
                var j;
                var k;
                var l;
                var m;
                var n;
                var o;
                var p;
                var q;
                var r;
                var s;
                if (E$$0.test(h + f$$1.event.triggered))
                    return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1),
                k = !0),
                h.indexOf(".") >= 0 && (i = h.split("."),
                h = i.shift(),
                i.sort());
                if ((!e || f$$1.event.customEvent[h]) && !f$$1.event.global[h])
                    return;
                c = typeof c == "object" ? c[f$$1.expando] ? c : new f$$1.Event(h,c) : new f$$1.Event(h),
                c.type = h,
                c.isTrigger = !0,
                c.exclusive = k,
                c.namespace = i.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f$$1.cache;
                    for (l in j)
                        j[l].events && j[l].events[h] && f$$1.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b$$2,
                c.target || (c.target = e),
                d = d != null ? f$$1.makeArray(d) : [],
                d.unshift(c),
                p = f$$1.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1)
                    return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f$$1.isWindow(e)) {
                    for (s = p.delegateType || h,
                    m = E$$0.test(s + h) ? e : e.parentNode,
                    n = null; m; m = m.parentNode)
                        r.push([m, s]),
                        n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a$$2, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                    m = r[l][0],
                    c.type = r[l][1],
                    q = (f$$1._data(m, "events") || {})[c.type] && f$$1._data(m, "handle"),
                    q && q.apply(m, d),
                    q = o && m[o],
                    q && f$$1.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h,
                !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f$$1.nodeName(e, "a")) && f$$1.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f$$1.isWindow(e) && (n = e[o],
                n && (e[o] = null),
                f$$1.event.triggered = h,
                e[h](),
                f$$1.event.triggered = b$$2,
                n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function(c) {
            c = f$$1.event.fix(c || a$$2.event);
            var d = (f$$1._data(this, "events") || {})[c.type] || [];
            var e = d.delegateCount;
            var g = [].slice.call(arguments, 0);
            var h = !c.exclusive && !c.namespace;
            var i = [];
            var j;
            var k;
            var l;
            var m;
            var n;
            var o;
            var p;
            var q;
            var r;
            var s;
            var t;
            g[0] = c,
            c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                m = f$$1(this),
                m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {},
                    q = [],
                    m[0] = l;
                    for (j = 0; j < e; j++)
                        r = d[j],
                        s = r.selector,
                        o[s] === b$$2 && (o[s] = r.quick ? H$$0(l, r.quick) : m.is(s)),
                        o[s] && q.push(r);
                    q.length && i.push({
                        elem: l,
                        matches: q
                    })
                }
            }
            d.length > e && i.push({
                elem: this,
                matches: d.slice(e)
            });
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j],
                c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace))
                        c.data = r.data,
                        c.handleObj = r,
                        n = ((f$$1.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g),
                        n !== b$$2 && (c.result = n,
                        n === !1 && (c.preventDefault(),
                        c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var e;
                var f;
                var g;
                var h = d.button;
                var i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c$$2,
                f = e.documentElement,
                g = e.body,
                a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                !a.which && h !== b$$2 && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[f$$1.expando])
                return a;
            var d;
            var e;
            var g = a;
            var h = f$$1.event.fixHooks[a.type] || {};
            var i = h.props ? this.props.concat(h.props) : this.props;
            a = f$$1.Event(g);
            for (d = i.length; d; )
                e = i[--d],
                a[e] = g[e];
            a.target || (a.target = g.srcElement || c$$2),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey === b$$2 && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f$$1.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    f$$1.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = f$$1.extend(new f$$1.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f$$1.event.trigger(e, null, b) : f$$1.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    f$$1.event.handle = f$$1.event.dispatch,
    f$$1.removeEvent = c$$2.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    f$$1.Event = function(a, b) {
        if (!(this instanceof f$$1.Event))
            return new f$$1.Event(a,b);
        a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J$$0) : this.type = a,
        b && f$$1.extend(this, b),
        this.timeStamp = a && a.timeStamp || f$$1.now(),
        this[f$$1.expando] = !0
    }
    ,
    f$$1.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K,
            this.stopPropagation()
        },
        isDefaultPrevented: J$$0,
        isPropagationStopped: J$$0,
        isImmediatePropagationStopped: J$$0
    },
    f$$1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a$$0, b) {
        f$$1.event.special[a$$0] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = this;
                var d = a.relatedTarget;
                var e = a.handleObj;
                var g = e.selector;
                var h;
                if (!d || d !== c && !f$$1.contains(c, d))
                    a.type = e.origType,
                    h = e.handler.apply(this, arguments),
                    a.type = b;
                return h
            }
        }
    }),
    f$$1.support.submitBubbles || (f$$1.event.special.submit = {
        setup: function() {
            if (f$$1.nodeName(this, "form"))
                return !1;
            f$$1.event.add(this, "click._submit keypress._submit", function(a$$0) {
                var c = a$$0.target;
                var d = f$$1.nodeName(c, "input") || f$$1.nodeName(c, "button") ? c.form : b$$2;
                d && !d._submit_attached && (f$$1.event.add(d, "submit._submit", function(a) {
                    this.parentNode && !a.isTrigger && f$$1.event.simulate("submit", this.parentNode, a, !0)
                }),
                d._submit_attached = !0)
            })
        },
        teardown: function() {
            if (f$$1.nodeName(this, "form"))
                return !1;
            f$$1.event.remove(this, "._submit")
        }
    }),
    f$$1.support.changeBubbles || (f$$1.event.special.change = {
        setup: function() {
            if (z$$0.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    f$$1.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                    f$$1.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1,
                        f$$1.event.simulate("change", this, a, !0))
                    });
                return !1
            }
            f$$1.event.add(this, "beforeactivate._change", function(a$$0) {
                var b = a$$0.target;
                z$$0.test(b.nodeName) && !b._change_attached && (f$$1.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f$$1.event.simulate("change", this.parentNode, a, !0)
                }),
                b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f$$1.event.remove(this, "._change");
            return z$$0.test(this.nodeName)
        }
    }),
    f$$1.support.focusinBubbles || f$$1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a$$0, b) {
        var d = 0;
        var e = function(a) {
            f$$1.event.simulate(b, a.target, f$$1.event.fix(a), !0)
        };
        f$$1.event.special[b] = {
            setup: function() {
                d++ === 0 && c$$2.addEventListener(a$$0, e, !0)
            },
            teardown: function() {
                --d === 0 && c$$2.removeEventListener(a$$0, e, !0)
            }
        }
    }),
    f$$1.fn.extend({
        on: function(a$$0, c, d, e, g) {
            var h;
            var i;
            if (typeof a$$0 == "object") {
                typeof c != "string" && (d = c,
                c = b$$2);
                for (i in a$$0)
                    this.on(i, c, d, a$$0[i], g);
                return this
            }
            d == null && e == null ? (e = c,
            d = c = b$$2) : e == null && (typeof c == "string" ? (e = d,
            d = b$$2) : (e = d,
            d = c,
            c = b$$2));
            if (e === !1)
                e = J$$0;
            else if (!e)
                return this;
            g === 1 && (h = e,
            e = function(a) {
                f$$1().off(a);
                return h.apply(this, arguments)
            }
            ,
            e.guid = h.guid || (h.guid = f$$1.guid++));
            return this.each(function() {
                f$$1.event.add(this, a$$0, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f$$1(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a)
                    this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function")
                d = c,
                c = b$$2;
            d === !1 && (d = J$$0);
            return this.each(function() {
                f$$1.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            f$$1(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            f$$1(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f$$1.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0])
                return f$$1.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments;
            var c$$0 = a.guid || f$$1.guid++;
            var d = 0;
            var e$$0 = function(c) {
                var e = (f$$1._data(this, "lastToggle" + a.guid) || 0) % d;
                f$$1._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            for (e$$0.guid = c$$0; d < b.length; )
                b[d++].guid = c$$0;
            return this.click(e$$0)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    f$$1.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a$$0, b) {
        f$$1.fn[b] = function(a, c) {
            c == null && (c = a,
            a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
        ,
        f$$1.attrFn && (f$$1.attrFn[b] = !0),
        C$$0.test(b) && (f$$1.event.fixHooks[b] = f$$1.event.keyHooks),
        D$$0.test(b) && (f$$1.event.fixHooks[b] = f$$1.event.mouseHooks)
    }),
    function() {
        function x$$0(a, b, c, e, f, g) {
            var h = 0;
            for (var i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    for (j = j[a]; j; ) {
                        if (j[d$$1] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d$$1] = c,
                            j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w$$0(a, b, c, e, f, g) {
            var h = 0;
            for (var i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    for (j = j[a]; j; ) {
                        if (j[d$$1] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d$$1] = c,
                        j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a$$1 = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
        var d$$1 = "sizcache" + (Math.random() + "").replace(".", "");
        var e$$1 = 0;
        var g$$0 = Object.prototype.toString;
        var h$$0 = !1;
        var i$$0 = !0;
        var j$$0 = /\\/g;
        var k$$0 = /\r\n/g;
        var l$$0 = /\W/;
        [0, 0].sort(function() {
            i$$0 = !1;
            return 0
        });
        var m = function(b, d, e, f) {
            e = e || [],
            d = d || c$$2;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)
                return [];
            if (!b || typeof b != "string")
                return e;
            var i;
            var j;
            var k;
            var l;
            var n;
            var q;
            var r;
            var t;
            var u = !0;
            var v = m.isXML(d);
            var w = [];
            var x = b;
            do {
                a$$1.exec(""),
                i = a$$1.exec(x);
                if (i) {
                    x = i[3],
                    w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);if (w.length > 1 && p$$0.exec(b))
                if (w.length === 2 && o.relative[w[0]])
                    j = y(w[0] + w[1], d, f);
                else
                    for (j = o.relative[w[0]] ? [d] : m(w.shift(), d); w.length; )
                        b = w.shift(),
                        o.relative[b] && (b += w.shift()),
                        j = y(b, j, f);
            else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v),
                d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d)
                    for (n = f ? {
                        expr: w.pop(),
                        set: s$$0(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v),
                    j = n.expr ? m.filter(n.expr, n.set) : n.set,
                    w.length > 0 ? k = s$$0(j) : u = !1; w.length; )
                        q = w.pop(),
                        r = q,
                        o.relative[q] ? r = w.pop() : q = "",
                        r == null && (r = d),
                        o.relative[q](k, r, v);
                else
                    k = w = []
            }
            k || (k = j),
            k || m.error(q || b);
            if (g$$0.call(k) === "[object Array]")
                if (!u)
                    e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                    for (t = 0; k[t] != null; t++)
                        k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                else
                    for (t = 0; k[t] != null; t++)
                        k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else
                s$$0(k, e);
            l && (m(l, h, e, f),
            m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u$$0) {
                h$$0 = i$$0,
                a.sort(u$$0);
                if (h$$0)
                    for (var b = 1; b < a.length; b++)
                        a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }
        ,
        m.matches = function(a, b) {
            return m(a, null, null, b)
        }
        ,
        m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        }
        ,
        m.find = function(a, b, c) {
            var d;
            var e;
            var f;
            var g;
            var h;
            var i;
            if (!a)
                return [];
            for (e = 0,
            f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1],
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j$$0, ""),
                        d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }
        ,
        m.filter = function(a, c, d, e) {
            var f;
            var g;
            var h;
            var i;
            var j;
            var k;
            var l;
            var n;
            var p;
            var q = a;
            var r = [];
            var s = c;
            for (var t = c && c[0] && m.isXML(c[0]); a && c.length; ) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h],
                        l = f[1],
                        g = !1,
                        f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\")
                            continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f)
                                g = i = !0;
                            else if (f === !0)
                                continue
                        }
                        if (f)
                            for (n = 0; (j = s[n]) != null; n++)
                                j && (i = k(j, f, n, s),
                                p = e ^ i,
                                d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j),
                                g = !0));
                        if (i !== b$$2) {
                            d || (s = r),
                            a = a.replace(o.match[h], "");
                            if (!g)
                                return [];
                            break
                        }
                    }
                if (a === q)
                    if (g == null)
                        m.error(a);
                    else
                        break;
                q = a
            }
            return s
        }
        ,
        m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }
        ;
        var n$$0 = m.getText = function(a) {
            var b;
            var c;
            var d = a.nodeType;
            var e = "";
            if (d)
                if (d === 1 || d === 9) {
                    if (typeof a.textContent == "string")
                        return a.textContent;
                    if (typeof a.innerText == "string")
                        return a.innerText.replace(k$$0, "");
                    for (a = a.firstChild; a; a = a.nextSibling)
                        e += n$$0(a)
                } else {
                    if (d === 3 || d === 4)
                        return a.nodeValue
                }
            else
                for (b = 0; c = a[b]; b++)
                    c.nodeType !== 8 && (e += n$$0(c));
            return e
        }
        ;
        var o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b == "string";
                    var d = c && !l$$0.test(b);
                    var e = c && !d;
                    d && (b = b.toLowerCase());
                    var f = 0;
                    var g = a.length;
                    for (var h; f < g; f++)
                        if (h = a[f]) {
                            for (; (h = h.previousSibling) && h.nodeType !== 1; )
                                ;
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                    e && m.filter(b, a, !0)
                },
                "\x3e": function(a, b) {
                    var c;
                    var d = typeof b == "string";
                    var e = 0;
                    var f = a.length;
                    if (d && !l$$0.test(b))
                        for (b = b.toLowerCase(); e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    else {
                        for (; e < f; e++)
                            c = a[e],
                            c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d;
                    var f = e$$1++;
                    var g = x$$0;
                    typeof b == "string" && !l$$0.test(b) && (b = b.toLowerCase(),
                    d = b,
                    g = w$$0),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d;
                    var f = e$$1++;
                    var g = x$$0;
                    typeof b == "string" && !l$$0.test(b) && (b = b.toLowerCase(),
                    d = b,
                    g = w$$0),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [];
                        var d = b.getElementsByName(a[1]);
                        var e = 0;
                        for (var f = d.length; e < f; e++)
                            d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName != "undefined")
                        return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j$$0, "") + " ";
                    if (f)
                        return a;
                    var g = 0;
                    for (var h; (h = b[g]) != null; g++)
                        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                },
                ID: function(a) {
                    return a[1].replace(j$$0, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(j$$0, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else
                        a[2] && m.error(a[0]);
                    a[0] = e$$1++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j$$0, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(j$$0, ""),
                    a[2] === "~\x3d" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not")
                        if ((a$$1.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                            b[3] = m(b[3], null, null, c);
                        else {
                            var g = m.filter(b[3], c, d, !0 ^ f);
                            d || e.push.apply(e, g);
                            return !1
                        }
                    else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                        return !0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !!a.firstChild
                },
                empty: function(a) {
                    return !a.firstChild
                },
                has: function(a, b, c) {
                    return !!m(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type");
                    var c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1];
                    var f = o.filters[e];
                    if (f)
                        return f(a, c, b, d);
                    if (e === "contains")
                        return (a.textContent || a.innerText || n$$0([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        var h = 0;
                        for (var i = g.length; h < i; h++)
                            if (g[h] === a)
                                return !1;
                        return !0
                    }
                    m.error(e)
                },
                CHILD: function(a, b) {
                    var c;
                    var e;
                    var f;
                    var g;
                    var h;
                    var i;
                    var j;
                    var k = b[1];
                    var l = a;
                    switch (k) {
                    case "only":
                    case "first":
                        for (; l = l.previousSibling; )
                            if (l.nodeType === 1)
                                return !1;
                        if (k === "first")
                            return !0;
                        l = a;
                    case "last":
                        for (; l = l.nextSibling; )
                            if (l.nodeType === 1)
                                return !1;
                        return !0;
                    case "nth":
                        c = b[2],
                        e = b[3];
                        if (c === 1 && e === 0)
                            return !0;
                        f = b[0],
                        g = a.parentNode;
                        if (g && (g[d$$1] !== f || !a.nodeIndex)) {
                            i = 0;
                            for (l = g.firstChild; l; l = l.nextSibling)
                                l.nodeType === 1 && (l.nodeIndex = ++i);
                            g[d$$1] = f
                        }
                        j = a.nodeIndex - e;
                        return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1];
                    var d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c);
                    var e = d + "";
                    var f = b[2];
                    var g = b[4];
                    return d == null ? f === "!\x3d" : !f && m.attr ? d != null : f === "\x3d" ? e === g : f === "*\x3d" ? e.indexOf(g) >= 0 : f === "~\x3d" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!\x3d" ? e !== g : f === "^\x3d" ? e.indexOf(g) === 0 : f === "$\x3d" ? e.substr(e.length - g.length) === g : f === "|\x3d" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2];
                    var f = o.setFilters[e];
                    if (f)
                        return f(a, c, b, d)
                }
            }
        };
        var p$$0 = o.match.POS;
        var q$$0 = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r$$0 in o.match)
            o.match[r$$0] = new RegExp(o.match[r$$0].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            o.leftMatch[r$$0] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r$$0].source.replace(/\\(\d+)/g, q$$0));
        var s$$0 = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c$$2.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s$$0 = function(a, b) {
                var c = 0;
                var d = b || [];
                if (g$$0.call(a) === "[object Array]")
                    Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number")
                    for (var e = a.length; c < e; c++)
                        d.push(a[c]);
                else
                    for (; a[c]; c++)
                        d.push(a[c]);
                return d
            }
        }
        var u$$0;
        var v$$0;
        c$$2.documentElement.compareDocumentPosition ? u$$0 = function(a, b) {
            if (a === b) {
                h$$0 = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        }
        : (u$$0 = function(a, b) {
            if (a === b) {
                h$$0 = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c;
            var d;
            var e = [];
            var f = [];
            var g = a.parentNode;
            var i = b.parentNode;
            var j = g;
            if (g === i)
                return v$$0(a, b);
            if (!g)
                return -1;
            if (!i)
                return 1;
            for (; j; )
                e.unshift(j),
                j = j.parentNode;
            for (j = i; j; )
                f.unshift(j),
                j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k])
                    return v$$0(e[k], f[k]);
            return k === c ? v$$0(a, f[k], -1) : v$$0(e[k], b, 1)
        }
        ,
        v$$0 = function(a, b, c) {
            if (a === b)
                return c;
            for (var d = a.nextSibling; d; ) {
                if (d === b)
                    return -1;
                d = d.nextSibling
            }
            return 1
        }
        ),
        function() {
            var a$$0 = c$$2.createElement("div");
            var d$$0 = "script" + (new Date).getTime();
            var e$$0 = c$$2.documentElement;
            a$$0.innerHTML = "\x3ca name\x3d'" + d$$0 + "'/\x3e",
            e$$0.insertBefore(a$$0, e$$0.firstChild),
            c$$2.getElementById(d$$0) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b$$2 : []
                }
            }
            ,
            o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }
            ),
            e$$0.removeChild(a$$0),
            e$$0 = a$$0 = null
        }(),
        function() {
            var a$$0 = c$$2.createElement("div");
            a$$0.appendChild(c$$2.createComment("")),
            a$$0.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)
                        c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }
            ),
            a$$0.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e",
            a$$0.firstChild && typeof a$$0.firstChild.getAttribute != "undefined" && a$$0.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }
            ),
            a$$0 = null
        }(),
        c$$2.querySelectorAll && function() {
            var a = m;
            var b$$0 = c$$2.createElement("div");
            var d = "__sizzle__";
            b$$0.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
            if (!b$$0.querySelectorAll || b$$0.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c$$2;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])
                                return s$$0(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)
                                return s$$0(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)
                                return s$$0([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)
                                    return s$$0([], f);
                                if (i.id === h[3])
                                    return s$$0([i], f)
                            }
                            try {
                                return s$$0(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e;
                            var l = e.getAttribute("id");
                            var n = l || d;
                            var p = e.parentNode;
                            var q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$\x26") : e.setAttribute("id", n),
                            q && p && (e = e.parentNode);
                            try {
                                if (!q || p)
                                    return s$$0(e.querySelectorAll("[id\x3d'" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                }
                ;
                for (var e$$0 in a)
                    m[e$$0] = a[e$$0];
                b$$0 = null
            }
        }(),
        function() {
            var a$$0 = c$$2.documentElement;
            var b = a$$0.matchesSelector || a$$0.mozMatchesSelector || a$$0.webkitMatchesSelector || a$$0.msMatchesSelector;
            if (b) {
                var d = !b.call(c$$2.createElement("div"), "div");
                var e = !1;
                try {
                    b.call(c$$2.documentElement, "[test!\x3d'']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                    if (!m.isXML(a))
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11)
                                    return f
                            }
                        } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function() {
            var a$$0 = c$$2.createElement("div");
            a$$0.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
            if (!!a$$0.getElementsByClassName && a$$0.getElementsByClassName("e").length !== 0) {
                a$$0.lastChild.className = "e";
                if (a$$0.getElementsByClassName("e").length === 1)
                    return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)
                        return b.getElementsByClassName(a[1])
                }
                ,
                a$$0 = null
            }
        }(),
        c$$2.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }
        : c$$2.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        }
        : m.contains = function() {
            return !1
        }
        ,
        m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }
        ;
        var y = function(a, b, c) {
            var d;
            var e = [];
            var f = "";
            for (var g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a); )
                f += d[0],
                a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            var h = 0;
            for (var i = g.length; h < i; h++)
                m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f$$1.attr,
        m.selectors.attrMap = {},
        f$$1.find = m,
        f$$1.expr = m.selectors,
        f$$1.expr[":"] = f$$1.expr.filters,
        f$$1.unique = m.uniqueSort,
        f$$1.text = m.getText,
        f$$1.isXMLDoc = m.isXML,
        f$$1.contains = m.contains
    }();
    var L = /Until$/;
    var M = /^(?:parents|prevUntil|prevAll)/;
    var N = /,/;
    var O = /^.[^:#\[\.,]*$/;
    var P = Array.prototype.slice;
    var Q = f$$1.expr.match.POS;
    var R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f$$1.fn.extend({
        find: function(a) {
            var b = this;
            var c;
            var d;
            if (typeof a != "string")
                return f$$1(a).filter(function() {
                    for (c = 0,
                    d = b.length; c < d; c++)
                        if (f$$1.contains(b[c], this))
                            return !0
                });
            var e = this.pushStack("", "find", a);
            var g;
            var h;
            var i;
            for (c = 0,
            d = this.length; c < d; c++) {
                g = e.length,
                f$$1.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function(a$$0) {
            var b = f$$1(a$$0);
            return this.filter(function() {
                var a = 0;
                for (var c = b.length; a < c; a++)
                    if (f$$1.contains(this, b[a]))
                        return !0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f$$1(a, this.context).index(this[0]) >= 0 : f$$1.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [];
            var d;
            var e;
            var g = this[0];
            if (f$$1.isArray(a)) {
                for (var h = 1; g && g.ownerDocument && g !== b; ) {
                    for (d = 0; d < a.length; d++)
                        f$$1(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        });
                    g = g.parentNode,
                    h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f$$1(a, b || this.context) : 0;
            for (d = 0,
            e = this.length; d < e; d++)
                for (g = this[d]; g; ) {
                    if (i ? i.index(g) > -1 : f$$1.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                        break
                }
            c = c.length > 1 ? f$$1.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a)
                return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string")
                return f$$1.inArray(this[0], f$$1(a));
            return f$$1.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f$$1(a, b) : f$$1.makeArray(a && a.nodeType ? [a] : a);
            var d = f$$1.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f$$1.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    f$$1.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f$$1.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f$$1.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f$$1.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f$$1.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f$$1.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f$$1.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f$$1.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f$$1.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f$$1.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return f$$1.sibling(a.firstChild)
        },
        contents: function(a) {
            return f$$1.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f$$1.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f$$1.fn[a] = function(c, d) {
            var e = f$$1.map(this, b, c);
            L.test(a) || (d = c),
            d && typeof d == "string" && (e = f$$1.filter(d, e)),
            e = this.length > 1 && !R[a] ? f$$1.unique(e) : e,
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }),
    f$$1.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f$$1.find.matchesSelector(b[0], a) ? [b[0]] : [] : f$$1.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [];
            for (var g = a[c]; g && g.nodeType !== 9 && (d === b$$2 || g.nodeType !== 1 || !f$$1(g).is(d)); )
                g.nodeType === 1 && e.push(g),
                g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            for (var e = 0; a; a = a[c])
                if (a.nodeType === 1 && ++e === b)
                    break;
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";
    var W = / jQuery\d+="(?:\d+|null)"/g;
    var X = /^\s+/;
    var Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;
    var Z = /<([\w:]+)/;
    var $ = /<tbody/i;
    var _ = /<|&#?\w+;/;
    var ba = /<(?:script|style)/i;
    var bb = /<(?:script|object|embed|option|style)/i;
    var bc = new RegExp("\x3c(?:" + V + ")","i");
    var bd = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var be = /\/(java|ecma)script/i;
    var bf = /^\s*<!(?:\[CDATA\[|\-\-)/;
    var bg = {
        option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
        legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
        thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
        tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
        td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
        col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
        area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
        _default: [0, "", ""]
    };
    var bh = U(c$$2);
    bg.optgroup = bg.option,
    bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
    bg.th = bg.td,
    f$$1.support.htmlSerialize || (bg._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]),
    f$$1.fn.extend({
        text: function(a) {
            if (f$$1.isFunction(a))
                return this.each(function(b) {
                    var c = f$$1(this);
                    c.text(a.call(this, b, c.text()))
                });
            if (typeof a != "object" && a !== b$$2)
                return this.empty().append((this[0] && this[0].ownerDocument || c$$2).createTextNode(a));
            return f$$1.text(this)
        },
        wrapAll: function(a$$0) {
            if (f$$1.isFunction(a$$0))
                return this.each(function(b) {
                    f$$1(this).wrapAll(a$$0.call(this, b))
                });
            if (this[0]) {
                var b$$0 = f$$1(a$$0, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b$$0.insertBefore(this[0]),
                b$$0.map(function() {
                    for (var a = this; a.firstChild && a.firstChild.nodeType === 1; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f$$1.isFunction(a))
                return this.each(function(b) {
                    f$$1(this).wrapInner(a.call(this, b))
                });
            return this.each(function() {
                var b = f$$1(this);
                var c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f$$1.isFunction(a);
            return this.each(function(c) {
                f$$1(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f$$1.nodeName(this, "body") || f$$1(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a$$0 = f$$1.clean(arguments);
                a$$0.push.apply(a$$0, this.toArray());
                return this.pushStack(a$$0, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
            if (arguments.length) {
                var a$$0 = this.pushStack(this, "after", arguments);
                a$$0.push.apply(a$$0, f$$1.clean(arguments));
                return a$$0
            }
        },
        remove: function(a, b) {
            var c = 0;
            for (var d; (d = this[c]) != null; c++)
                if (!a || f$$1.filter(a, [d]).length)
                    !b && d.nodeType === 1 && (f$$1.cleanData(d.getElementsByTagName("*")),
                    f$$1.cleanData([d])),
                    d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            var a = 0;
            for (var b; (b = this[a]) != null; a++)
                for (b.nodeType === 1 && f$$1.cleanData(b.getElementsByTagName("*")); b.firstChild; )
                    b.removeChild(b.firstChild);
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a,
            b = b == null ? a : b;
            return this.map(function() {
                return f$$1.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b$$2)
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f$$1.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "\x3c$1\x3e\x3c/$2\x3e");
                try {
                    var c$$0 = 0;
                    for (var d = this.length; c$$0 < d; c$$0++)
                        this[c$$0].nodeType === 1 && (f$$1.cleanData(this[c$$0].getElementsByTagName("*")),
                        this[c$$0].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else
                f$$1.isFunction(a) ? this.each(function(b) {
                    var c = f$$1(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f$$1.isFunction(a))
                    return this.each(function(b) {
                        var c = f$$1(this);
                        var d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    });
                typeof a != "string" && (a = f$$1(a).detach());
                return this.each(function() {
                    var b = this.nextSibling;
                    var c = this.parentNode;
                    f$$1(this).remove(),
                    b ? f$$1(b).before(a) : f$$1(c).append(a)
                })
            }
            return this.length ? this.pushStack(f$$1(f$$1.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e$$0;
            var g$$0;
            var h;
            var i;
            var j = a[0];
            var k = [];
            if (!f$$1.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
                return this.each(function() {
                    f$$1(this).domManip(a, c, d, !0)
                });
            if (f$$1.isFunction(j))
                return this.each(function(e) {
                    var g = f$$1(this);
                    a[0] = j.call(this, e, c ? g.html() : b$$2),
                    g.domManip(a, c, d)
                });
            if (this[0]) {
                i = j && j.parentNode,
                f$$1.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e$$0 = {
                    fragment: i
                } : e$$0 = f$$1.buildFragment(a, this, k),
                h = e$$0.fragment,
                h.childNodes.length === 1 ? g$$0 = h = h.firstChild : g$$0 = h.firstChild;
                if (g$$0) {
                    c = c && f$$1.nodeName(g$$0, "tr");
                    var l = 0;
                    var m = this.length;
                    for (var n = m - 1; l < m; l++)
                        d.call(c ? bi(this[l], g$$0) : this[l], e$$0.cacheable || m > 1 && l < n ? f$$1.clone(h, !0, !0) : h)
                }
                k.length && f$$1.each(k, bp)
            }
            return this
        }
    }),
    f$$1.buildFragment = function(a, b, d) {
        var e;
        var g;
        var h;
        var i;
        var j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c$$2),
        a.length === 1 && typeof j == "string" && j.length < 512 && i === c$$2 && j.charAt(0) === "\x3c" && !bb.test(j) && (f$$1.support.checkClone || !bd.test(j)) && (f$$1.support.html5Clone || !bc.test(j)) && (g = !0,
        h = f$$1.fragments[j],
        h && h !== 1 && (e = h)),
        e || (e = i.createDocumentFragment(),
        f$$1.clean(a, i, e, d)),
        g && (f$$1.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }
    ,
    f$$1.fragments = {},
    f$$1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f$$1.fn[a] = function(c) {
            var d = [];
            var e = f$$1(c);
            var g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            var h = 0;
            for (var i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f$$1(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f$$1.extend({
        clone: function(a, b, c) {
            var d;
            var e;
            var g;
            var h = f$$1.support.html5Clone || !bc.test("\x3c" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f$$1.support.noCloneEvent || !f$$1.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f$$1.isXMLDoc(a)) {
                bk(a, h),
                d = bl(a),
                e = bl(h);
                for (g = 0; d[g]; ++g)
                    e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g)
                        bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a$$0, b, d, e) {
            var g;
            b = b || c$$2,
            typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c$$2);
            var h = [];
            var i;
            var j = 0;
            for (var k; (k = a$$0[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k)
                    continue;
                if (typeof k == "string")
                    if (!_.test(k))
                        k = b.createTextNode(k);
                    else {
                        k = k.replace(Y, "\x3c$1\x3e\x3c/$2\x3e");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase();
                        var m = bg[l] || bg._default;
                        var n = m[0];
                        var o = b.createElement("div");
                        for (b === c$$2 ? bh.appendChild(o) : U(b).appendChild(o),
                        o.innerHTML = m[1] + k + m[2]; n--; )
                            o = o.lastChild;
                        if (!f$$1.support.tbody) {
                            var p = $.test(k);
                            var q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "\x3ctable\x3e" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i)
                                f$$1.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                        }
                        !f$$1.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                        k = o.childNodes
                    }
                var r;
                if (!f$$1.support.appendChecked)
                    if (k[0] && typeof (r = k.length) == "number")
                        for (i = 0; i < r; i++)
                            bn(k[i]);
                    else
                        bn(k);
                k.nodeType ? h.push(k) : h = f$$1.merge(h, k)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                }
                ;
                for (j = 0; h[j]; j++)
                    if (e && f$$1.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                    else {
                        if (h[j].nodeType === 1) {
                            var s = f$$1.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
            }
            return h
        },
        cleanData: function(a) {
            var b;
            var c;
            var d = f$$1.cache;
            var e = f$$1.event.special;
            var g = f$$1.support.deleteExpando;
            var h = 0;
            for (var i; (i = a[h]) != null; h++) {
                if (i.nodeName && f$$1.noData[i.nodeName.toLowerCase()])
                    continue;
                c = i[f$$1.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events)
                            e[j] ? f$$1.event.remove(i, j) : f$$1.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f$$1.expando] : i.removeAttribute && i.removeAttribute(f$$1.expando),
                    delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i;
    var br = /opacity=([^)]*)/;
    var bs = /([A-Z]|^ms)/g;
    var bt = /^-?\d+(?:px)?$/i;
    var bu = /^-?\d/;
    var bv = /^([\-+])=([\-+.\de]+)/;
    var bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };
    var bx = ["Left", "Right"];
    var by = ["Top", "Bottom"];
    var bz;
    var bA;
    var bB;
    f$$1.fn.css = function(a$$0, c$$0) {
        if (arguments.length === 2 && c$$0 === b$$2)
            return this;
        return f$$1.access(this, a$$0, c$$0, !0, function(a, c, d) {
            return d !== b$$2 ? f$$1.style(a, c, d) : f$$1.css(a, c)
        })
    }
    ,
    f$$1.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f$$1.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g;
                var h;
                var i = f$$1.camelCase(c);
                var j = a.style;
                var k = f$$1.cssHooks[i];
                c = f$$1.cssProps[i] || i;
                if (d === b$$2) {
                    if (k && "get"in k && (g = k.get(a, !1, e)) !== b$$2)
                        return g;
                    return j[c]
                }
                h = typeof d,
                h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f$$1.css(a, c)),
                h = "number");
                if (d == null || h === "number" && isNaN(d))
                    return;
                h === "number" && !f$$1.cssNumber[i] && (d += "px");
                if (!k || !("set"in k) || (d = k.set(a, d)) !== b$$2)
                    try {
                        j[c] = d
                    } catch (l) {}
            }
        },
        css: function(a, c, d) {
            var e;
            var g;
            c = f$$1.camelCase(c),
            g = f$$1.cssHooks[c],
            c = f$$1.cssProps[c] || c,
            c === "cssFloat" && (c = "float");
            if (g && "get"in g && (e = g.get(a, !0, d)) !== b$$2)
                return e;
            if (bz)
                return bz(a, c)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b)
                d[e] = a.style[e],
                a.style[e] = b[e];
            c.call(a);
            for (e in b)
                a.style[e] = d[e]
        }
    }),
    f$$1.curCSS = f$$1.css,
    f$$1.each(["height", "width"], function(a$$0, b$$0) {
        f$$1.cssHooks[b$$0] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0)
                        return bC(a, b$$0, d);
                    f$$1.swap(a, bw, function() {
                        e = bC(a, b$$0, d)
                    });
                    return e
                }
            },
            set: function(a, b) {
                if (!bt.test(b))
                    return b;
                b = parseFloat(b);
                if (b >= 0)
                    return b + "px"
            }
        }
    }),
    f$$1.support.opacity || (f$$1.cssHooks.opacity = {
        get: function(a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style;
            var d = a.currentStyle;
            var e = f$$1.isNumeric(b) ? "alpha(opacity\x3d" + b * 100 + ")" : "";
            var g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f$$1.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter)
                    return
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }),
    f$$1(function() {
        f$$1.support.reliableMarginRight || (f$$1.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                f$$1.swap(a, {
                    display: "inline-block"
                }, function() {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }),
    c$$2.defaultView && c$$2.defaultView.getComputedStyle && (bA = function(a, b) {
        var c;
        var d;
        var e;
        b = b.replace(bs, "-$1").toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b),
        c === "" && !f$$1.contains(a.ownerDocument.documentElement, a) && (c = f$$1.style(a, b)));
        return c
    }
    ),
    c$$2.documentElement.currentStyle && (bB = function(a, b) {
        var c;
        var d;
        var e;
        var f = a.currentStyle && a.currentStyle[b];
        var g = a.style;
        f === null && g && (e = g[b]) && (f = e),
        !bt.test(f) && bu.test(f) && (c = g.left,
        d = a.runtimeStyle && a.runtimeStyle.left,
        d && (a.runtimeStyle.left = a.currentStyle.left),
        g.left = b === "fontSize" ? "1em" : f || 0,
        f = g.pixelLeft + "px",
        g.left = c,
        d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }
    ),
    bz = bA || bB,
    f$$1.expr && f$$1.expr.filters && (f$$1.expr.filters.hidden = function(a) {
        var b = a.offsetWidth;
        var c = a.offsetHeight;
        return b === 0 && c === 0 || !f$$1.support.reliableHiddenOffsets && (a.style && a.style.display || f$$1.css(a, "display")) === "none"
    }
    ,
    f$$1.expr.filters.visible = function(a) {
        return !f$$1.expr.filters.hidden(a)
    }
    );
    var bD = /%20/g;
    var bE = /\[\]$/;
    var bF = /\r?\n/g;
    var bG = /#.*$/;
    var bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
    var bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
    var bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/;
    var bK = /^(?:GET|HEAD)$/;
    var bL = /^\/\//;
    var bM = /\?/;
    var bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    var bO = /^(?:select|textarea)/i;
    var bP = /\s+/;
    var bQ = /([?&])_=[^&]*/;
    var bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;
    var bS = f$$1.fn.load;
    var bT = {};
    var bU = {};
    var bV;
    var bW;
    var bX = ["*/"] + ["*"];
    try {
        bV = e$$2.href
    } catch (bY) {
        bV = c$$2.createElement("a"),
        bV.href = "",
        bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [],
    f$$1.fn.extend({
        load: function(a$$1, c$$0, d) {
            if (typeof a$$1 != "string" && bS)
                return bS.apply(this, arguments);
            if (!this.length)
                return this;
            var e = a$$1.indexOf(" ");
            if (e >= 0) {
                var g = a$$1.slice(e, a$$1.length);
                a$$1 = a$$1.slice(0, e)
            }
            var h = "GET";
            c$$0 && (f$$1.isFunction(c$$0) ? (d = c$$0,
            c$$0 = b$$2) : typeof c$$0 == "object" && (c$$0 = f$$1.param(c$$0, f$$1.ajaxSettings.traditional),
            h = "POST"));
            var i = this;
            f$$1.ajax({
                url: a$$1,
                type: h,
                dataType: "html",
                data: c$$0,
                complete: function(a$$0, b, c) {
                    c = a$$0.responseText,
                    a$$0.isResolved() && (a$$0.done(function(a) {
                        c = a
                    }),
                    i.html(g ? f$$1("\x3cdiv\x3e").append(c.replace(bN, "")).find(g) : c)),
                    d && i.each(d, [c, b, a$$0])
                }
            });
            return this
        },
        serialize: function() {
            return f$$1.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f$$1.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function(a$$0, b) {
                var c$$0 = f$$1(this).val();
                return c$$0 == null ? null : f$$1.isArray(c$$0) ? f$$1.map(c$$0, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c$$0.replace(bF, "\r\n")
                }
            }).get()
        }
    }),
    f$$1.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a$$0, b) {
        f$$1.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    f$$1.each(["get", "post"], function(a$$0, c) {
        f$$1[c] = function(a, d, e, g) {
            f$$1.isFunction(d) && (g = g || e,
            e = d,
            d = b$$2);
            return f$$1.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }),
    f$$1.extend({
        getScript: function(a, c) {
            return f$$1.get(a, b$$2, c, "script")
        },
        getJSON: function(a, b, c) {
            return f$$1.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b_(a, f$$1.ajaxSettings) : (b = a,
            a = f$$1.ajaxSettings),
            b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a$$2.String,
                "text html": !0,
                "text json": f$$1.parseJSON,
                "text xml": f$$1.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function(a$$0, c$$0) {
            function w$$0(a, c, l, m) {
                if (s !== 2) {
                    s = 2,
                    q && clearTimeout(q),
                    p = b$$2,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o;
                    var r;
                    var u;
                    var w = c;
                    var x = l ? cb(d, v, l) : b$$2;
                    var y;
                    var z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified"))
                                f$$1.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag"))
                                f$$1.etag[k] = z
                        }
                        if (a === 304)
                            w = "notmodified",
                            o = !0;
                        else
                            try {
                                r = cc(d, x),
                                w = "success",
                                o = !0
                            } catch (A) {
                                w = "parsererror",
                                u = A
                            }
                    } else {
                        u = w;
                        if (!w || a)
                            w = "error",
                            a < 0 && (a = 0)
                    }
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b$$2,
                    t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                    i.fireWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]),
                    --f$$1.active || f$$1.event.trigger("ajaxStop"))
                }
            }
            typeof a$$0 == "object" && (c$$0 = a$$0,
            a$$0 = b$$2),
            c$$0 = c$$0 || {};
            var d = f$$1.ajaxSetup({}, c$$0);
            var e = d.context || d;
            var g = e !== d && (e.nodeType || e instanceof f$$1) ? f$$1(e) : f$$1.event;
            var h = f$$1.Deferred();
            var i = f$$1.Callbacks("once memory");
            var j = d.statusCode || {};
            var k;
            var l$$0 = {};
            var m$$0 = {};
            var n;
            var o$$0;
            var p;
            var q;
            var r$$0;
            var s = 0;
            var t;
            var u$$0;
            var v = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m$$0[c] = m$$0[c] || a,
                        l$$0[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return s === 2 ? n : null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o$$0)
                            for (o$$0 = {}; c = bH.exec(n); )
                                o$$0[c[1].toLowerCase()] = c[2];
                        c = o$$0[a.toLowerCase()]
                    }
                    return c === b$$2 ? null : c
                },
                overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    p && p.abort(a),
                    w$$0(0, a);
                    return this
                }
            };
            h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.add,
            v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a)
                            j[b] = [j[b], a[b]];
                    else
                        b = a[v.status],
                        v.then(b, b)
                }
                return this
            }
            ,
            d.url = ((a$$0 || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"),
            d.dataTypes = f$$1.trim(d.dataType || "*").toLowerCase().split(bP),
            d.crossDomain == null && (r$$0 = bR.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r$$0 || r$$0[1] == bW[1] && r$$0[2] == bW[2] && (r$$0[3] || (r$$0[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))),
            d.data && d.processData && typeof d.data != "string" && (d.data = f$$1.param(d.data, d.traditional)),
            b$(bT, d, c$$0, v);
            if (s === 2)
                return !1;
            t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !bK.test(d.type),
            t && f$$1.active++ === 0 && f$$1.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "\x26" : "?") + d.data,
                delete d.data),
                k = d.url;
                if (d.cache === !1) {
                    var x$$0 = f$$1.now();
                    var y$$0 = d.url.replace(bQ, "$1_\x3d" + x$$0);
                    d.url = y$$0 + (y$$0 === d.url ? (bM.test(d.url) ? "\x26" : "?") + "_\x3d" + x$$0 : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c$$0.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url,
            f$$1.lastModified[k] && v.setRequestHeader("If-Modified-Since", f$$1.lastModified[k]),
            f$$1.etag[k] && v.setRequestHeader("If-None-Match", f$$1.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q\x3d0.01" : "") : d.accepts["*"]);
            for (u$$0 in d.headers)
                v.setRequestHeader(u$$0, d.headers[u$$0]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u$$0 in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[u$$0](d[u$$0]);
            p = b$(bU, d, c$$0, v);
            if (!p)
                w$$0(-1, "No Transport");
            else {
                v.readyState = 1,
                t && g.trigger("ajaxSend", [v, d]),
                d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1,
                    p.send(l$$0, w$$0)
                } catch (z) {
                    if (s < 2)
                        w$$0(-1, z);
                    else
                        throw z;
                }
            }
            return v
        },
        param: function(a$$0, c) {
            var d = [];
            var e = function(a, b) {
                b = f$$1.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
            };
            c === b$$2 && (c = f$$1.ajaxSettings.traditional);
            if (f$$1.isArray(a$$0) || a$$0.jquery && !f$$1.isPlainObject(a$$0))
                f$$1.each(a$$0, function() {
                    e(this.name, this.value)
                });
            else
                for (var g in a$$0)
                    ca(g, a$$0[g], c, e);
            return d.join("\x26").replace(bD, "+")
        }
    }),
    f$$1.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f$$1.now();
    var ce = /(\=)\?(&|$)|\?\?/i;
    f$$1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f$$1.expando + "_" + cd++
        }
    }),
    f$$1.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g;
            var h = b.jsonpCallback = f$$1.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
            var i = a$$2[h];
            var j = b.url;
            var k = b.data;
            var l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l),
            b.url === j && (e && (k = k.replace(ce, l)),
            b.data === k && (j += (/\?/.test(j) ? "\x26" : "?") + b.jsonp + "\x3d" + h))),
            b.url = j,
            b.data = k,
            a$$2[h] = function(a) {
                g = [a]
            }
            ,
            d.always(function() {
                a$$2[h] = i,
                g && f$$1.isFunction(i) && a$$2[h](g[0])
            }),
            b.converters["script json"] = function() {
                g || f$$1.error(h + " was not called");
                return g[0]
            }
            ,
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    f$$1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f$$1.globalEval(a);
                return a
            }
        }
    }),
    f$$1.ajaxPrefilter("script", function(a) {
        a.cache === b$$2 && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    f$$1.ajaxTransport("script", function(a$$0) {
        if (a$$0.crossDomain) {
            var d;
            var e = c$$2.head || c$$2.getElementsByTagName("head")[0] || c$$2.documentElement;
            return {
                send: function(f, g) {
                    d = c$$2.createElement("script"),
                    d.async = "async",
                    a$$0.scriptCharset && (d.charset = a$$0.scriptCharset),
                    d.src = a$$0.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                            d.onload = d.onreadystatechange = null,
                            e && d.parentNode && e.removeChild(d),
                            d = b$$2,
                            c || g(200, "success")
                    }
                    ,
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a$$2.ActiveXObject ? function() {
        for (var a in ch)
            ch[a](0, 1)
    }
    : !1;
    var cg = 0;
    var ch;
    f$$1.ajaxSettings.xhr = a$$2.ActiveXObject ? function() {
        return !this.isLocal && ci() || cj()
    }
    : ci,
    function(a) {
        f$$1.extend(f$$1.support, {
            ajax: !!a,
            cors: !!a && "withCredentials"in a
        })
    }(f$$1.ajaxSettings.xhr()),
    f$$1.support.ajax && f$$1.ajaxTransport(function(c) {
        if (!c.crossDomain || f$$1.support.cors) {
            var d;
            return {
                send: function(e$$0, g) {
                    var h = c.xhr();
                    var i;
                    var j$$0;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j$$0 in c.xhrFields)
                            h[j$$0] = c.xhrFields[j$$0];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e$$0["X-Requested-With"] && (e$$0["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j$$0 in e$$0)
                            h.setRequestHeader(j$$0, e$$0[j$$0])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var j;
                        var k;
                        var l;
                        var m;
                        var n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b$$2,
                                i && (h.onreadystatechange = f$$1.noop,
                                cf && delete ch[i]);
                                if (e)
                                    h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {},
                                    n = h.responseXML,
                                    n && n.documentElement && (m.xml = n),
                                    m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }
                    ,
                    !c.async || h.readyState === 4 ? d() : (i = ++cg,
                    cf && (ch || (ch = {},
                    f$$1(a$$2).unload(cf)),
                    ch[i] = d),
                    h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var ck = {};
    var cl;
    var cm;
    var cn = /^(?:toggle|show|hide)$/;
    var co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;
    var cp;
    var cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    var cr;
    f$$1.fn.extend({
        show: function(a, b, c) {
            var d;
            var e;
            if (a || a === 0)
                return this.animate(cu("show", 3), a, b, c);
            var g = 0;
            for (var h = this.length; g < h; g++)
                d = this[g],
                d.style && (e = d.style.display,
                !f$$1._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),
                e === "" && f$$1.css(d, "display") === "none" && f$$1._data(d, "olddisplay", cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")
                        d.style.display = f$$1._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0)
                return this.animate(cu("hide", 3), a, b, c);
            var d;
            var e;
            var g = 0;
            for (var h = this.length; g < h; g++)
                d = this[g],
                d.style && (e = f$$1.css(d, "display"),
                e !== "none" && !f$$1._data(d, "olddisplay") && f$$1._data(d, "olddisplay", e));
            for (g = 0; g < h; g++)
                this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f$$1.fn.toggle,
        toggle: function(a, b$$0, c) {
            var d = typeof a == "boolean";
            f$$1.isFunction(a) && f$$1.isFunction(b$$0) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f$$1(this).is(":hidden");
                f$$1(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b$$0, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b$$0, c$$0, d$$0) {
            function g$$0() {
                e.queue === !1 && f$$1._mark(this);
                var b = f$$1.extend({}, e);
                var c = this.nodeType === 1;
                var d = c && f$$1(this).is(":hidden");
                var g;
                var h;
                var i;
                var j;
                var k;
                var l;
                var m;
                var n;
                var o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f$$1.camelCase(i),
                    i !== g && (a[g] = a[i],
                    delete a[i]),
                    h = a[g],
                    f$$1.isArray(h) ? (b.animatedProperties[g] = h[1],
                    h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d)
                        return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    f$$1.css(this, "display") === "inline" && f$$1.css(this, "float") === "none" && (!f$$1.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)
                    j = new f$$1.fx(this,b,i),
                    h = a[i],
                    cn.test(h) ? (o = f$$1._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0),
                    o ? (f$$1._data(this, "toggle" + i, o === "show" ? "hide" : "show"),
                    j[o]()) : j[h]()) : (k = co.exec(h),
                    l = j.cur(),
                    k ? (m = parseFloat(k[2]),
                    n = k[3] || (f$$1.cssNumber[i] ? "" : "px"),
                    n !== "px" && (f$$1.style(this, i, (m || 1) + n),
                    l = (m || 1) / j.cur() * l,
                    f$$1.style(this, i, l + n)),
                    k[1] && (m = (k[1] === "-\x3d" ? -1 : 1) * m + l),
                    j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }
            var e = f$$1.speed(b$$0, c$$0, d$$0);
            if (f$$1.isEmptyObject(a))
                return this.each(e.complete, [!1]);
            a = f$$1.extend({}, a);
            return e.queue === !1 ? this.each(g$$0) : this.queue(e.queue, g$$0)
        },
        stop: function(a$$0, c$$1, d) {
            typeof a$$0 != "string" && (d = c$$1,
            c$$1 = a$$0,
            a$$0 = b$$2),
            c$$1 && a$$0 !== !1 && this.queue(a$$0 || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f$$1.removeData(a, c, !0),
                    e.stop(d)
                }
                var b$$0;
                var c$$0 = !1;
                var e$$0 = f$$1.timers;
                var g = f$$1._data(this);
                d || f$$1._unmark(!0, this);
                if (a$$0 == null)
                    for (b$$0 in g)
                        g[b$$0] && g[b$$0].stop && b$$0.indexOf(".run") === b$$0.length - 4 && h(this, g, b$$0);
                else
                    g[b$$0 = a$$0 + ".run"] && g[b$$0].stop && h(this, g, b$$0);
                for (b$$0 = e$$0.length; b$$0--; )
                    e$$0[b$$0].elem === this && (a$$0 == null || e$$0[b$$0].queue === a$$0) && (d ? e$$0[b$$0](!0) : e$$0[b$$0].saveState(),
                    c$$0 = !0,
                    e$$0.splice(b$$0, 1));
                (!d || !c$$0) && f$$1.dequeue(this, a$$0)
            })
        }
    }),
    f$$1.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a$$0, b) {
        f$$1.fn[a$$0] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f$$1.extend({
        speed: function(a$$0, b, c) {
            var d = a$$0 && typeof a$$0 == "object" ? f$$1.extend({}, a$$0) : {
                complete: c || !c && b || f$$1.isFunction(a$$0) && a$$0,
                duration: a$$0,
                easing: c && b || b && !f$$1.isFunction(b) && b
            };
            d.duration = f$$1.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f$$1.fx.speeds ? f$$1.fx.speeds[d.duration] : f$$1.fx.speeds._default;
            if (d.queue == null || d.queue === !0)
                d.queue = "fx";
            d.old = d.complete,
            d.complete = function(a) {
                f$$1.isFunction(d.old) && d.old.call(this),
                d.queue ? f$$1.dequeue(this, d.queue) : a !== !1 && f$$1._unmark(this)
            }
            ;
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f$$1.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f$$1.fx.step[this.prop] || f$$1.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var a;
            var b = f$$1.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a$$0, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this;
            var g = f$$1.fx;
            this.startTime = cr || cs(),
            this.end = c,
            this.now = this.start = a$$0,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (f$$1.cssNumber[this.prop] ? "" : "px"),
            h.queue = this.options.queue,
            h.elem = this.elem,
            h.saveState = function() {
                e.options.hide && f$$1._data(e.elem, "fxshow" + e.prop) === b$$2 && f$$1._data(e.elem, "fxshow" + e.prop, e.start)
            }
            ,
            h() && f$$1.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f$$1._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f$$1.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b$$2 ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            f$$1(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f$$1._data(this.elem, "fxshow" + this.prop) || f$$1.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a$$0) {
            var b$$0;
            var c;
            var d;
            var e = cr || cs();
            var g = !0;
            var h = this.elem;
            var i = this.options;
            if (a$$0 || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b$$0 in i.animatedProperties)
                    i.animatedProperties[b$$0] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f$$1.support.shrinkWrapBlocks && f$$1.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),
                    i.hide && f$$1(h).hide();
                    if (i.hide || i.show)
                        for (b$$0 in i.animatedProperties)
                            f$$1.style(h, b$$0, i.orig[b$$0]),
                            f$$1.removeData(h, "fxshow" + b$$0, !0),
                            f$$1.removeData(h, "toggle" + b$$0, !0);
                    d = i.complete,
                    d && (i.complete = !1,
                    d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime,
            this.state = c / i.duration,
            this.pos = f$$1.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update();
            return !0
        }
    },
    f$$1.extend(f$$1.fx, {
        tick: function() {
            var a;
            var b = f$$1.timers;
            for (var c = 0; c < b.length; c++)
                a = b[c],
                !a() && b[c] === a && b.splice(c--, 1);
            b.length || f$$1.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cp),
            cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f$$1.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }),
    f$$1.each(["width", "height"], function(a$$0, b) {
        f$$1.fx.step[b] = function(a) {
            f$$1.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }),
    f$$1.expr && f$$1.expr.filters && (f$$1.expr.filters.animated = function(a) {
        return f$$1.grep(f$$1.timers, function(b) {
            return a === b.elem
        }).length
    }
    );
    var cw = /^t(?:able|d|h)$/i;
    var cx = /^(?:body|html)$/i;
    "getBoundingClientRect"in c$$2.documentElement ? f$$1.fn.offset = function(a) {
        var b$$0 = this[0];
        var c;
        if (a)
            return this.each(function(b) {
                f$$1.offset.setOffset(this, a, b)
            });
        if (!b$$0 || !b$$0.ownerDocument)
            return null;
        if (b$$0 === b$$0.ownerDocument.body)
            return f$$1.offset.bodyOffset(b$$0);
        try {
            c = b$$0.getBoundingClientRect()
        } catch (d) {}
        var e = b$$0.ownerDocument;
        var g = e.documentElement;
        if (!c || !f$$1.contains(g, b$$0))
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            };
        var h = e.body;
        var i = cy(e);
        var j = g.clientTop || h.clientTop || 0;
        var k = g.clientLeft || h.clientLeft || 0;
        var l = i.pageYOffset || f$$1.support.boxModel && g.scrollTop || h.scrollTop;
        var m = i.pageXOffset || f$$1.support.boxModel && g.scrollLeft || h.scrollLeft;
        var n = c.top + l - j;
        var o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    }
    : f$$1.fn.offset = function(a) {
        var b$$0 = this[0];
        if (a)
            return this.each(function(b) {
                f$$1.offset.setOffset(this, a, b)
            });
        if (!b$$0 || !b$$0.ownerDocument)
            return null;
        if (b$$0 === b$$0.ownerDocument.body)
            return f$$1.offset.bodyOffset(b$$0);
        var c;
        var d = b$$0.offsetParent;
        var e = b$$0;
        var g = b$$0.ownerDocument;
        var h = g.documentElement;
        var i = g.body;
        var j = g.defaultView;
        var k = j ? j.getComputedStyle(b$$0, null) : b$$0.currentStyle;
        var l = b$$0.offsetTop;
        for (var m = b$$0.offsetLeft; (b$$0 = b$$0.parentNode) && b$$0 !== i && b$$0 !== h; ) {
            if (f$$1.support.fixedPosition && k.position === "fixed")
                break;
            c = j ? j.getComputedStyle(b$$0, null) : b$$0.currentStyle,
            l -= b$$0.scrollTop,
            m -= b$$0.scrollLeft,
            b$$0 === d && (l += b$$0.offsetTop,
            m += b$$0.offsetLeft,
            f$$1.support.doesNotAddBorder && (!f$$1.support.doesAddBorderForTableAndCells || !cw.test(b$$0.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0,
            m += parseFloat(c.borderLeftWidth) || 0),
            e = d,
            d = b$$0.offsetParent),
            f$$1.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0,
            m += parseFloat(c.borderLeftWidth) || 0),
            k = c
        }
        if (k.position === "relative" || k.position === "static")
            l += i.offsetTop,
            m += i.offsetLeft;
        f$$1.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop),
        m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }
    ,
    f$$1.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop;
            var c = a.offsetLeft;
            f$$1.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f$$1.css(a, "marginTop")) || 0,
            c += parseFloat(f$$1.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f$$1.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f$$1(a);
            var g = e.offset();
            var h = f$$1.css(a, "top");
            var i = f$$1.css(a, "left");
            var j = (d === "absolute" || d === "fixed") && f$$1.inArray("auto", [h, i]) > -1;
            var k = {};
            var l = {};
            var m;
            var n;
            j ? (l = e.position(),
            m = l.top,
            n = l.left) : (m = parseFloat(h) || 0,
            n = parseFloat(i) || 0),
            f$$1.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using"in b ? b.using.call(a, k) : e.css(k)
        }
    },
    f$$1.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var a = this[0];
            var b = this.offsetParent();
            var c = this.offset();
            var d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            c.top -= parseFloat(f$$1.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f$$1.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f$$1.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f$$1.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || c$$2.body; a && !cx.test(a.nodeName) && f$$1.css(a, "position") === "static"; )
                    a = a.offsetParent;
                return a
            })
        }
    }),
    f$$1.each(["Left", "Top"], function(a, c$$0) {
        var d = "scroll" + c$$0;
        f$$1.fn[d] = function(c) {
            var e;
            var g;
            if (c === b$$2) {
                e = this[0];
                if (!e)
                    return null;
                g = cy(e);
                return g ? "pageXOffset"in g ? g[a ? "pageYOffset" : "pageXOffset"] : f$$1.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function() {
                g = cy(this),
                g ? g.scrollTo(a ? f$$1(g).scrollLeft() : c, a ? c : f$$1(g).scrollTop()) : this[d] = c
            })
        }
    }),
    f$$1.each(["Height", "Width"], function(a$$0, c$$0) {
        var d = c$$0.toLowerCase();
        f$$1.fn["inner" + c$$0] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f$$1.css(a, d, "padding")) : this[d]() : null
        }
        ,
        f$$1.fn["outer" + c$$0] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f$$1.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }
        ,
        f$$1.fn[d] = function(a) {
            var e = this[0];
            if (!e)
                return a == null ? null : this;
            if (f$$1.isFunction(a))
                return this.each(function(b) {
                    var c = f$$1(this);
                    c[d](a.call(this, b, c[d]()))
                });
            if (f$$1.isWindow(e)) {
                var g = e.document.documentElement["client" + c$$0];
                var h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c$$0] || g
            }
            if (e.nodeType === 9)
                return Math.max(e.documentElement["client" + c$$0], e.body["scroll" + c$$0], e.documentElement["scroll" + c$$0], e.body["offset" + c$$0], e.documentElement["offset" + c$$0]);
            if (a === b$$2) {
                var i = f$$1.css(e, d);
                var j = parseFloat(i);
                return f$$1.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }),
    a$$2.jQuery = a$$2.$ = f$$1,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f$$1
    })
}
)(window);
(function($) {
    var dummyInputElement = document.createElement("input");
    $.fn.renderLiquid = function(templateName, hash) {
        return this.each(function() {
            Templ.renderElem(this, templateName, hash)
        })
    }
    ;
    $.fn.renderLiquidTableRow = function(templateName, hash) {
        return this.each(function() {
            Templ.renderTableRow(this, templateName, hash)
        })
    }
    ;
    $.fn.disable = function(disable) {
        if (disable === undefined || disable)
            this.attr("disabled", "disabled").closest("label").addClass("disabled");
        else
            this.removeAttr("disabled").closest("label").removeClass("disabled");
        return this
    }
    ;
    $.fn.slideToggleBool = function(show, duration, easing, callback) {
        if (this.is(":hidden") && !show)
            return this.hide();
        else
            return this[show ? "slideDown" : "slideUp"](duration, easing, callback)
    }
    ;
    $.fn.ancestorHasClass = function(className) {
        return this.hasClass(className) || this.closest("." + className).length > 0
    }
    ;
    $.fn.toggleParentClassOnClick = function(parentClass, selectedClass) {
        selectedClass = selectedClass || "selected";
        return this.on("mousedown touchdown", function() {
            function deselect() {
                $parent.removeClass(selectedClass);
                $this.off(".toggleParentClassOnClick");
                $(document).off(".toggleParentClassOnClick")
            }
            var $this = $(this);
            var $parent = parentClass ? $this.closest(parentClass) : $this.parent();
            if ($parent.hasClass(selectedClass))
                deselect();
            else {
                $parent.addClass(selectedClass);
                $this.on("mouseout.toggleParentClassOnClick mouseup.toggleParentClassOnClick touchup.toggleParentClassOnClick", function() {
                    $(this).off(".toggleParentClassOnClick");
                    setTimeout(function() {
                        $(document).on("click.toggleParentClassOnClick", function() {
                            deselect()
                        })
                    }, 0)
                })
            }
            return false
        })
    }
    ;
    $.fn.requiredAsterisk = function(required) {
        if (typeof required === "undefined")
            required = true;
        return this.each(function() {
            function update() {
                var show = required && $this.val() === "";
                $asterisk.fadeTo("fast", show ? 1 : 0)
            }
            var $this = $(this);
            var context = $this.closest(".jquery-placeholder-wrapper")[0] || $this;
            var $asterisk = $(context).siblings(".required-asterisk");
            if ($asterisk.length === 0)
                $asterisk = $('\x3cspan class\x3d"required-asterisk"\x3e*\x3c/span\x3e').insertBefore(context);
            update();
            $this.off(".requiredAsterisk").textInput(".requiredAsterisk", update)
        })
    }
    ;
    $.support.oninput = "oninput"in dummyInputElement && !(Browser.type === "ie" && Browser.version[0] <= 9);
    $.fn.simulateInputEvents = function(selector) {
        function triggerInput(event) {
            if (timeout)
                return;
            var element = this;
            timeout = setTimeout(function() {
                $(element).trigger("input");
                timeout = null
            }, 0)
        }
        if ($.support.oninput) {
            Log.warn("Ignoring $.fn.simulateInputEvents() because this browser supports the input event natively.");
            return
        }
        if (this.data("simulateInputEvents-attached")) {
            Log.warn("$.fn.simulateInputEvents() already attached to", this);
            return
        }
        this.data("simulateInputEvents-attached", true);
        var timeout = null;
        if (!selector)
            selector = "input[type\x3dtext],textarea";
        return this.on("keydown keypress keyup paste cut", selector, triggerInput)
    }
    ;
    $.fn.textInput = function(eventNamespace, handler) {
        function fireHandler(event) {
            if (timeout)
                return;
            var self = this;
            timeout = setTimeout(function() {
                handler.call(self, event);
                timeout = null
            }, 0)
        }
        if (typeof handler === "undefined") {
            handler = eventNamespace;
            eventNamespace = ""
        } else if (eventNamespace[0] !== ".")
            eventNamespace = "." + eventNamespace;
        var timeout = null;
        if ($.support.oninput)
            this.on("input" + eventNamespace, fireHandler);
        else {
            var events = ["keydown", "keypress", "keyup", "paste", "cut"];
            for (var i = 0; i < events.length; i++)
                this.on(events[i] + eventNamespace, fireHandler)
        }
        return this
    }
    ;
    $.support.placeholder = "placeholder"in dummyInputElement;
    var STYLES_TO_COPY = ["font-size", "font-family", "font-weight"];
    var SIDES = ["top", "left", "right"];
    $.fn.placeholder = function() {
        return this.each(function() {
            var $this = $(this);
            if ($.support.placeholder && !$this.hasClass("force-placeholder-wrapper") && !($this.is("textarea") && Browser.make === "safari" && Browser.version[0] < 6))
                return true;
            var $wrapper;
            if ($this.parent().hasClass("jquery-placeholder-wrapper")) {
                $wrapper = $this.parent();
                $wrapper.children(".jquery-placeholder-hint").remove()
            } else {
                $wrapper = $("\x3cdiv/\x3e").addClass("jquery-placeholder-wrapper").css({
                    display: $this.css("display") === "block" ? "block" : "inline-block",
                    position: "relative"
                });
                $this.wrap($wrapper)
            }
            var hintText = $this.attr("placeholder");
            if (typeof hintText === "undefined")
                hintText = $this.data("placeholder") || "";
            var $hint = $("\x3cspan/\x3e").addClass("jquery-placeholder-hint controlHint").text(hintText).css("position", "absolute").click(function() {
                $this.focus();
                return false
            }).toggle($this.val().length === 0).each(function() {
                Dom.setUnselectable(this)
            }).insertBefore($this);
            for (var i = 0; i < STYLES_TO_COPY.length; i++) {
                var style = STYLES_TO_COPY[i];
                $hint.css(style, $this.css(style))
            }
            var lineHeight = $this.css("line-height");
            if (lineHeight && lineHeight != 1)
                $hint.css("line-height", lineHeight);
            for (i = 0; i < SIDES.length; i++) {
                var side = SIDES[i];
                $hint.css(side, "0").css(side, "+\x3d" + $this.css("margin-" + side)).css(side, "+\x3d" + $this.css("padding-" + side)).css(side, "+\x3d" + $this.css("border-" + side + "-width"))
            }
            if (Browser.type === "webkit" && $this.is("input"))
                $hint.css("left", "+\x3d1px");
            else if (Browser.type === "gecko")
                $hint.css("left", "+\x3d1px");
            else if (Browser.type === "ie")
                ;$this.removeAttr("placeholder").data("placeholder", hintText).off(".placeholder").textInput(".placeholder", function() {
                $hint.toggle($this.val().length === 0)
            })
        })
    }
    ;
    $.fn.getPath = function() {
        if (this.length != 1)
            throw "jquery requires an element";
        var path;
        for (var node = this; node.length; ) {
            var realNode = node[0];
            var name = realNode.localName;
            if (!name)
                break;
            name = name.toLowerCase();
            if (realNode.id)
                return name + "#" + realNode.id + (path ? "\x3e" + path : "");
            var parent = node.parent();
            var siblings = parent.children(name);
            if (siblings.length > 1)
                name += ":eq(" + siblings.index(realNode) + ")";
            path = name + (path ? "\x3e" + path : "");
            node = parent
        }
        return path
    }
    ;
    $.showMask = function(options) {
        options = $.extend({
            z: 1,
            color: "white",
            duration: "fast",
            opacity: .5,
            then: $.noop
        }, options || {});
        return $("\x3cdiv\x3e").css({
            "z-index": options.z,
            "background-color": options.color,
            "opacity": 0,
            "width": "100%",
            "height": "100%",
            "position": "fixed"
        }).prependTo("body").fadeTo(options.speed, options.opacity, options.then)
    }
    ;
    $.cachedScript = function(url, options) {
        options = $.extend(options || {}, {
            url: url,
            dataType: "script",
            cache: true
        });
        return $.ajax(options)
    }
    ;
    $.fn.bc_tooltips = function(options) {
        function enter() {
            if (resetTimeout) {
                clearTimeout(resetTimeout);
                resetTimeout = null
            }
            var $tooltip = $(options.tooltipSelector, this);
            $(".lazy", $tooltip).trigger("appear");
            if (delaySatisfied)
                $tooltip.css("z-index", 2).show();
            else
                hoverTimeout = setTimeout(function() {
                    hoverTimeout = null;
                    delaySatisfied = true;
                    $tooltip.fadeIn(options.fadeIn)
                }, options.delay)
        }
        function leave() {
            $(options.tooltipSelector, this).css("z-index", "").fadeOut(options.fadeOut);
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null
            }
            resetTimeout = setTimeout(function() {
                resetTimeout = null;
                delaySatisfied = false
            }, options.reset)
        }
        options = $.extend({}, {
            itemSelector: ".item",
            tooltipSelector: ".tooltip",
            delay: 500,
            reset: 500,
            fadeIn: 100,
            fadeOut: 100
        }, options);
        if (options.itemSelector)
            $(options.itemSelector, this).hover(enter, leave);
        else
            $(this).hover(enter, leave);
        var delaySatisfied = false;
        var hoverTimeout = null;
        var resetTimeout = null
    }
    ;
    var strftime_pad = function(x, str, r) {
        for (x = x.toString(); parseInt(x, 10) < r && r > 1; r /= 10)
            x = str + x;
        return x
    };
    var strftime_tables = {
        a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        p: ["AM", "PM"],
        P: ["A", "P"]
    };
    var strftime_formats = {
        "a": function(d) {
            return strftime_tables.a[d.getUTCDay()]
        },
        "A": function(d) {
            return strftime_tables.A[d.getUTCDay()]
        },
        "b": function(d) {
            return strftime_tables.b[d.getUTCMonth()]
        },
        "B": function(d) {
            return strftime_tables.B[d.getUTCMonth()]
        },
        "d": function(d) {
            return strftime_pad(d.getUTCDate(), "0", 10)
        },
        "e": function(d) {
            return strftime_pad(d.getUTCDate(), " ", 10)
        },
        "H": function(d) {
            return strftime_pad(d.getUTCHours(), "0", 10)
        },
        "I": function(d) {
            var I = d.getUTCHours() % 12;
            return strftime_pad(I === 0 ? 12 : I, "0", 10)
        },
        "j": function(d) {
            var ms = d - new Date(d.getUTCFullYear() + "/1/1 GMT");
            var doy = parseInt(ms / 6E4 / 60 / 24, 10) + 1;
            return strftime_pad(doy, "0", 100)
        },
        "l": function(d) {
            var I = d.getUTCHours() % 12;
            return I === 0 ? 12 : I
        },
        "m": function(d) {
            return strftime_pad(d.getUTCMonth() + 1, "0", 10)
        },
        "M": function(d) {
            return strftime_pad(d.getUTCMinutes(), "0", 10)
        },
        "p": function(d) {
            return strftime_tables.p[d.getUTCHours() >= 12 ? 1 : 0]
        },
        "P": function(d) {
            return strftime_tables.P[d.getUTCHours() >= 12 ? 1 : 0]
        },
        "s": function(d) {
            return parseInt(d.getTime() / 1E3)
        },
        "S": function(d) {
            return strftime_pad(d.getUTCSeconds(), "0", 10)
        },
        "u": function(d) {
            var dow = d.getUTCDay();
            return dow === 0 ? 7 : dow
        },
        "U": function(d) {
            var doy = parseInt(strftime_formats.j(d), 10);
            var rdow = 6 - d.getUTCDay();
            var woy = parseInt((doy + rdow) / 7, 10);
            return strftime_pad(woy, "0", 10)
        },
        "w": function(d) {
            return d.getUTCDay().toString()
        },
        "W": function(d) {
            var doy = parseInt(strftime_formats.j(d), 10);
            var rdow = 7 - strftime_formats.u(d);
            var woy = parseInt((doy + rdow) / 7, 10);
            return strftime_pad(woy, "0", 10)
        },
        "y": function(d) {
            return strftime_pad(d.getUTCFullYear() % 100, "0", 10)
        },
        "Y": function(d) {
            return d.getUTCFullYear().toString()
        },
        "Z": function(d) {
            return "UTC"
        },
        "%": function(d) {
            return "%"
        }
    };
    var strftime_aggregates = {
        "c": "%a %b %e %X %Y",
        "x": "%m/%d/%y",
        "X": "%H:%M:%S"
    };
    $.strftime = function(date, fmt) {
        for (; fmt.match(/%[cxX]/); )
            fmt = fmt.replace(/%([cxX])/g, function(m0, m1) {
                return strftime_aggregates[m1]
            });
        return fmt.replace(/%([aAbBdeHIjlmMpPsSuUwWyYzZ%])/g, function(m0, m1) {
            return strftime_formats[m1](date)
        })
    }
}
)(jQuery);
var Y = null;
try {
    Y = YAHOO
} catch (e) {}
var U = {
    _jquery: null,
    jQuery: function() {
        if (U._jquery === null)
            try {
                U._jquery = jQuery
            } catch (err) {
                U._jquery = false
            }
        return U._jquery
    },
    trim: function(str) {
        if (U.jQuery())
            return jQuery.trim(str);
        else
            return Y.lang.trim(str)
    },
    isObject: function(o) {
        if (U.jQuery())
            return jQuery.isPlainObject(o);
        else
            return Y.lang.isObject(o)
    },
    augmentObject: function(r, s, args) {
        if (!args)
            for (var k in s)
                r[k] = s[k];
        else
            for (var i in args) {
                var key = args[i];
                r[key] = s[key]
            }
    },
    isString: function(o) {
        return typeof o === "string"
    },
    isNumber: function(o) {
        return typeof o === "number" && isFinite(o)
    },
    isArray: function(o) {
        if (U.jQuery())
            return jQuery.isArray(o);
        else
            return Y.lang.isArray(o)
    },
    elt: function(e) {
        if (U.jQuery())
            if (U.isString(e)) {
                e = e.replace(/\./g, "\\.");
                return $("#" + e.toString()).get(0)
            } else
                return $(e).get(0);
        else
            return Y.util.Dom.get(e)
    },
    merge: function(args) {
        var argarray = [{}];
        for (var i = 0; i < arguments.length; i++)
            argarray.push(arguments[i]);
        if (U.jQuery())
            return $.extend.apply($, argarray);
        else
            return Y.lang.merge.apply(Y.lang, argarray)
    },
    addClass: function(elem, classname) {
        if (U.jQuery())
            $(elem).addClass(classname);
        else
            Y.util.Dom.addClass(elem, classname)
    },
    removeClass: function(elem, classname) {
        if (U.jQuery())
            $(elem).removeClass(classname);
        else
            Y.util.Dom.removeClass(elem, classname)
    },
    stopEvent: function(e) {
        if (U.jQuery()) {
            var evt = $.Event(e);
            evt.stopPropagation();
            evt.preventDefault()
        } else
            Y.util.Event.stopEvent(e)
    }
};
function $assert(expr, msg) {
    if (!expr) {
        if (msg == null)
            msg = "";
        var skipDebug = confirm("Assertion failed. " + msg + "\n\nSelect Cancel to debug.");
        if (!skipDebug)
            eval("debugger")
    }
}
var LogAll = function(level, msg) {
    var d = new Date;
    for (var ms = d.getMilliseconds().toString(); ms.length < 3; )
        ms = "0" + ms;
    var timestamp = d.toTimeString().substring(0, 8) + "." + ms + ":";
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(timestamp);
    if (typeof LogView != "undefined")
        LogView.add(args.join(" "));
    if (Browser.platform == "iphone") {
        var str = "";
        var sep = "";
        for (var x in args) {
            str += sep + args[x];
            sep = " "
        }
        console.log(str);
        return
    }
    if (typeof console == "undefined")
        return;
    var logFn = console[level] || console.log;
    if (typeof logFn === "object")
        logFn(args.join(" "));
    else
        logFn.apply(console, args)
};
LogAll.proxy = function(level) {
    return function(msg) {
        try {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(level);
            LogAll.apply(Log, args)
        } catch (e) {}
    }
}
;
var Log = {
    debug: LogAll.proxy("log"),
    info: LogAll.proxy("info"),
    note: LogAll.proxy("info"),
    warn: LogAll.proxy("warn"),
    error: LogAll.proxy("error"),
    flash: function(msg) {
        Log.debug("Flash: " + unescape(msg))
    },
    server: function(msg, lvl, isException) {
        lvl = lvl || "info";
        Log.debug("about to send server log entry: " + lvl + ": " + msg);
        var bcn = document.createElement("img");
        bcn.style.display = "none";
        bcn.onload = function() {
            var e$$0;
            try {
                Log.debug("server log entry success: " + lvl + ": " + msg);
                bcn.onload = bcn.onerror = null;
                bcn = null
            } catch (e) {}
        }
        ;
        bcn.onerror = function() {
            var e$$0;
            try {
                Log.debug("server log entry error: " + lvl + ": " + msg);
                bcn.onload = bcn.onerror = null;
                bcn = null
            } catch (e) {}
        }
        ;
        bcn.src = "/client_log" + "?exc\x3d" + (isException ? "1" : "0") + "\x26msg\x3d" + encodeURIComponent(msg.substring(0, 1E3)) + "\x26lvl\x3d" + encodeURIComponent(lvl) + "\x26r\x3d" + Math.random().toString().substring(2);
        bcn = null
    }
};
var ErrorCollector;
ErrorCollector = function(exports) {
    function filter(msg, scriptURL, line) {
        if (!msg)
            return null;
        if (msg.toString() == "[object Event]") {
            msg = msg.message || msg.msg || msg.toString();
            scriptURL = scriptURL || msg.filename || msg.file || "";
            var normalize = function(val) {
                return val === 0 ? new Number(0) : val
            };
            line = normalize(line) || normalize(msg.lineno) || normalize(msg.line) || ""
        }
        if (scriptURL) {
            var scriptHost = Url.toHash(scriptURL).host;
            var pageHost = location.host;
            if (!scriptHost)
                return null;
            if (!/(^|\.)(bandcamp\.com|bcbits\.com)$/.test(scriptHost)) {
                var idx = pageHost.length - scriptHost.length;
                if (idx < 0 || pageHost.lastIndexOf(scriptHost) != idx)
                    return null
            }
        }
        if (Browser.type == "gecko" && line == 0 && (/Permission denied to access property 'toString'/.test(msg) || /Location\.toString/.test(msg)))
            return null;
        var pageURL = location.href;
        if (scriptURL == pageURL)
            pageURL = "---";
        var scripts = [];
        var jsb = window._jsb;
        if (jsb) {
            var len = Math.min(jsb.length, 20);
            for (var i = 0; i < len; i++)
                scripts.push(jsb[i].n + ":" + (jsb[i].c || 0));
            if (len < jsb.length)
                scripts.unshift("(omitted " + (jsb.length - len) + ")")
        }
        scripts = scripts.join(",");
        return [msg, scriptURL, line, pageURL, ++errorCount, domready, scripts]
    }
    function flush() {
        if (!timer) {
            var delay = Math.max(lastSave + exports.saveDelay - (new Date).getTime(), 250);
            timer = setTimeout(save, delay)
        }
    }
    function save() {
        clearTimeout(timer);
        timer = null;
        if (!isActive() || !errors.length)
            return;
        var out = [];
        var len = Math.min(errors.length, exports.maxBatchSize);
        for (var i = 0; i < len; i++)
            out.push(errors[i].join("\t"));
        Log.server(out.join("\n"), "debug", true);
        lastSave = (new Date).getTime();
        errors.length = 0;
        batchCount++
    }
    function isActive() {
        return exports.enabled && batchCount < exports.maxBatches
    }
    var defaults = {
        enabled: true,
        sampleRate: null,
        maxBatchSize: 3,
        maxBatches: 3,
        saveDelay: 5E3
    };
    var errors = [];
    var lastSave = 0;
    var batchCount = 0;
    var errorCount = 0;
    var timer = null;
    var domready = "";
    for (var prop in defaults)
        if (defaults.hasOwnProperty(prop) && !exports.hasOwnProperty(prop))
            exports[prop] = defaults[prop];
    if (exports.enabled && exports.sampleRate != null && Math.random() > exports.sampleRate) {
        Log.debug("ErrorCollector: disabled due to sample rate");
        exports.enabled = false
    } else
        Log.debug("ErrorCollector: " + (exports.enabled ? "enabled" : "disabled"));
    if (window.$) {
        domready = 0;
        $(document).ready(function() {
            domready = 1
        })
    }
    exports.add = function(msg, scriptURL, line) {
        if (window.isDebug || window.Identities && window.Identities.isAdmin())
            alert("JavaScript error: " + msg + ". Check the console.");
        if (isActive()) {
            var data = filter(msg, scriptURL, line);
            if (data) {
                errors.push(data);
                flush()
            } else
                Log.debug("ErrorCollector: skipping runtime error")
        }
    }
    ;
    if (exports.enabled)
        window.onerror = exports.add;
    return exports
}(ErrorCollector || {});
if (Y && Y.widget && Y.widget.Logger)
    Y.widget.Logger.newLogEvent.subscribe(function(type, args, obj) {
        var logMsg = args[0];
        if (logMsg.category == "error")
            Log.error("YUI " + logMsg.source + ": " + logMsg.msg)
    });
if (!Object.create)
    Object.create = function(o) {
        if (arguments.length > 1) {
            var msg = "Object.create polyfill only supports one parameter";
            Log.error(msg);
            throw new Error(msg);
        }
        var F = function() {};
        F.prototype = o;
        return new F
    }
    ;
var Iter = {
    each: function(a, f) {
        var i = 0;
        var v = null;
        for (i = 0; a && i < a.length; i++) {
            v = f(a[i]);
            if (v)
                return v
        }
    },
    eachWithIndex: function(a, f) {
        var i = 0;
        var v = null;
        for (i = 0; a && i < a.length; i++) {
            v = f(a[i], i);
            if (v)
                return v
        }
    },
    collect: function(arr, fn) {
        if (!fn)
            fn = function(item) {
                return item
            }
            ;
        var len = arr.length;
        var out = new Array(len);
        for (var i = 0; i < len; i++)
            out[i] = fn(arr[i]);
        return out
    },
    find: function(arr, fn) {
        var len = arr.length;
        for (var i = 0; i < len; i++)
            if (fn(arr[i]))
                return arr[i];
        return null
    },
    findAll: function(arr, fn) {
        var len = arr.length;
        var out = [];
        for (var i = 0; i < len; i++) {
            var entry = arr[i];
            if (fn(entry))
                out.push(entry)
        }
        return out
    },
    index: function(arr, item) {
        if (typeof arr.indexOf === "function")
            return arr.indexOf(item);
        var len = arr.length;
        for (var i = 0; i < len; i++)
            if (arr[i] == item)
                return i;
        return -1
    },
    reduce: function(arr, fn, initialValue) {
        if ("function" === typeof arr.reduce)
            if (arguments.length < 3)
                return arr.reduce(fn);
            else
                return arr.reduce(fn, initialValue);
        var prevValue = initialValue;
        var i = 0;
        var len = arr.length;
        if (arguments.length < 3) {
            for (; i < len && !(i in arr); )
                i++;
            if (i >= len)
                throw new TypeError("Reduce of empty array with no initial value");
            prevValue = arr[i++]
        }
        for (; i < len; i++)
            if (i in arr)
                prevValue = fn(prevValue, arr[i], i, arr);
        return prevValue
    }
};
var Text = {
    notEmpty: function(str) {
        return str != null && str.toString().length > 0
    },
    collate: function() {
        for (var i = 0; i < arguments.length; i++) {
            var str = arguments[i];
            if (Text.notEmpty(str))
                return str
        }
        return ""
    },
    escapeHtml: function(str) {
        str = str.toString();
        return str.replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#39;")
    },
    unescapeHtml: function(str) {
        var unescape_div = document.createElement("div");
        unescape_div.innerHTML = str;
        return unescape_div.firstChild.nodeValue
    },
    markupMatch: function(str, match, pre, post, caseSensitive) {
        var matchIndex = !caseSensitive ? str.toLowerCase().indexOf(match.toLowerCase()) : str.indexOf(match);
        if (matchIndex == -1)
            return str;
        return [str.substr(0, matchIndex), pre, str.substr(matchIndex, match.length), post, str.substr(matchIndex + match.length)].join("")
    },
    regexpEscape: function(str) {
        return str.replace(/([\\\^\$\*\+\?\.\,\:\!\|\(\)\[\]\{\}])/g, "\\$1")
    },
    truncate: function(str, len, ellipsis) {
        if (!str)
            return "";
        if (len == null)
            len = 50;
        if (ellipsis == null)
            ellipsis = "";
        if (str.length <= len)
            return str;
        if (ellipsis.length > len)
            return "";
        len = Math.max(0, len - ellipsis.length);
        return str.substr(0, len) + ellipsis
    }
};
var Url = {
    PATTERN_URL: /^(?:(https?\:)\/\/([^\:\/\?#]+)(?:\:(\d+))?)?(\/?[^\?#]*)?(?:\?|(\?[^#]*))?(?:#|(#.*))?$/,
    PATTERN_URL_NO_SPACE: /^(?:(https?\:)\/\/([^\:\/\?\s#]+)(?:\:(\d+))?)?(\/?[^\?\s#]*)?(?:\?|(\?[^#]*))?(?:#|(#.*))?$/,
    toHash: function(url, noSpace) {
        url = U.trim(url);
        var matches = Url.PATTERN_URL.exec(url) || [];
        if (noSpace)
            matches = Url.PATTERN_URL_NO_SPACE.exec(url) || [];
        return {
            href: matches[0] || "",
            protocol: matches[1] || "",
            host: (matches[2] || "") + (matches[3] ? ":" + matches[3] : ""),
            hostname: matches[2] || "",
            port: matches[3] || "",
            pathname: matches[4] || "/",
            search: matches[5] || "",
            hash: matches[6] || ""
        }
    },
    fromHash: function(urlHash) {
        $assert(U.isObject(urlHash));
        var out = [];
        if (urlHash.protocol)
            out.push(urlHash.protocol, "//");
        if (urlHash.hostname)
            out.push(urlHash.hostname);
        if (urlHash.port)
            out.push(":", urlHash.port);
        if (urlHash.pathname)
            out.push(urlHash.pathname);
        if (urlHash.search)
            out.push(urlHash.search);
        if (urlHash.hash)
            out.push(urlHash.hash);
        return out.join("")
    },
    isLocal: function(url) {
        var urlHash = Url._hashify(url);
        if (window.FacebookData) {
            if (urlHash.protocol == location.protocol && urlHash.host == location.host)
                return true;
            var re = new RegExp(location.host + "$");
            if (urlHash.host.match(re))
                return true;
            return false
        } else
            return urlHash.protocol == location.protocol && urlHash.host == location.host
    },
    isFullyQualified: function(url) {
        var urlHash = Url._hashify(url);
        return urlHash.protocol && urlHash.host
    },
    equals: function(urlA, urlB, skipHash) {
        var hashA = Url._hashify(urlA);
        var hashB = Url._hashify(urlB);
        return hashA.protocol == hashB.protocol && hashA.hostname == hashB.hostname && (hashA.port || 80) == (hashB.port || 80) && hashA.pathname == hashB.pathname && hashA.search == hashB.search && (skipHash || hashA.hash == hashB.hash)
    },
    fullyQualify: function(url, baseUrl) {
        var urlHash = Url._hashify(url);
        baseUrl = baseUrl || location;
        var baseUrlHash = Url._hashify(baseUrl);
        $assert(!urlHash.protocol && !urlHash.hostname && !urlHash.port, "expected a non-qualified URL");
        $assert(baseUrlHash.protocol && baseUrlHash.hostname, "expected a fully-qualified base URL");
        $(["protocol", "hostname", "port"]).each(function(i, prop) {
            urlHash[prop] = baseUrlHash[prop]
        });
        if (!urlHash.pathname)
            urlHash.pathname = "/";
        else if (urlHash.pathname.charAt(0) != "/") {
            var basePath = baseUrlHash.pathname || "/";
            $assert(basePath.charAt(0) == "/", "expected a fully-qualified base URL path");
            if (basePath.charAt(basePath.length - 1) == "/")
                urlHash.pathname = basePath + urlHash.pathname;
            else
                urlHash.pathname = basePath.replace(/[^\/]+$/, urlHash.pathname)
        }
        return Url.fromHash(urlHash)
    },
    parseQuery: function(query) {
        var out = {};
        $.each(Url.parseQueryArray(query), function() {
            out[this.name] = this.value
        });
        return out
    },
    joinQuery: function(queryHash) {
        var out = [];
        for (var key in queryHash)
            if (queryHash.hasOwnProperty(key))
                out.push({
                    name: key,
                    value: queryHash[key]
                });
        return Url.joinQueryArray(out)
    },
    parseQueryArray: function(query) {
        query = query.replace(/^[\?&\s]*(.*?)[&\s]*$/, "$1");
        var out = [];
        if (query) {
            var pairs = query.split(/&+/);
            $.each(pairs, function() {
                if (this && this != "\x3d") {
                    var pair = this.split("\x3d");
                    var paramName;
                    var paramValue;
                    try {
                        paramName = decodeURIComponent(pair[0]);
                        paramValue = pair[1] ? decodeURIComponent(pair[1]) : ""
                    } catch (e) {
                        Log.error("parseQueryArray: error when decoding URL parameter, skipping; ", e);
                        return true
                    }
                    out.push({
                        name: paramName,
                        value: paramValue
                    })
                }
            })
        }
        return out
    },
    joinQueryArray: function(arr) {
        arr = arr || [];
        var out = [];
        var param;
        for (var i = 0; i < arr.length; i++) {
            param = arr[i];
            if (param && (param.name != null && param.name != "")) {
                if (out.length)
                    out.push("\x26");
                out.push(encodeURIComponent(param.name));
                if (param.value != null && param.value != "")
                    out.push("\x3d", encodeURIComponent(param.value))
            }
        }
        return out.join("")
    },
    addQueryParams: function(url, hash) {
        if (!hash)
            return url;
        var queryIndex = url.indexOf("?") + 1;
        var query = queryIndex > 0 ? url.substr(queryIndex) : "";
        var queryHash = Url.parseQuery(query);
        for (var key in hash)
            queryHash[key] = hash[key];
        var prefix = queryIndex > 0 ? url.substring(0, queryIndex) : url + "?";
        return prefix + Url.joinQuery(queryHash)
    },
    removeQueryParams: function(url, arr) {
        if (!arr)
            return url;
        var queryIndex = url.indexOf("?") + 1;
        var query = queryIndex > 0 ? url.substr(queryIndex) : "";
        var queryHash = Url.parseQuery(query);
        var update = 0;
        for (var i in arr) {
            delete queryHash[arr[i]];
            update += 1
        }
        if (update === 0)
            return url;
        var prefix = queryIndex > 0 ? url.substring(0, queryIndex) : url + "?";
        return prefix + Url.joinQuery(queryHash)
    },
    getQueryParam: function(url, param) {
        var u = Url.toHash(url);
        return Url.parseQuery(u.search)[param]
    },
    _hashify: function(url) {
        return U.isString(url) ? Url.toHash(url) : url
    },
    isCustomDomain: function(hostnameMinusPort) {
        $assert(window.siteroot, "expected siteroot");
        var hostname = hostnameMinusPort || location.hostname;
        var baseDomainPattern = new RegExp("\\.?" + Url.toHash(siteroot).hostname.replace(/\./g, "\\.") + "$");
        return !baseDomainPattern.test(hostname)
    }
};
var DomBoot = {
    elt: U.elt,
    cloneEvent: function(event) {
        if (event && Browser.type == "ie")
            return Y.lang.merge(event);
        return event
    }
};
var elt = DomBoot.elt;
var LangUtils = {
    makeclass: function(classdef) {
        return LangUtils.makesubclass(null, classdef)
    },
    makesubclass: function(superclass, classdef) {
        var f = function() {};
        if (classdef.ctor) {
            f = classdef.ctor;
            classdef.ctor = null
        }
        if (superclass)
            YAHOO.lang.extend(f, superclass);
        for (var x in classdef.prototype)
            f.prototype[x] = classdef.prototype[x];
        for (x in classdef.statics)
            f[x] = classdef.statics[x];
        return f
    }
};
var EventSender = LangUtils.makeclass({
    ctor: function() {
        this._listeners = []
    },
    prototype: {
        get_adder: function() {
            var that = this;
            return function(callback, target) {
                that._listeners.push({
                    callback: callback,
                    target: target
                })
            }
        },
        get_remover: function() {
            var that = this;
            return function(callback, target) {
                for (var i = 0; i < that._listeners.length; )
                    if (that._listeners[i].callback == callback && that._listeners[i].target == target)
                        that._listeners.splice(i, 1);
                    else
                        i++
            }
        },
        fire: function() {
            for (var i = 0; i < this._listeners.length; i++) {
                var l = this._listeners[i];
                try {
                    l.callback.apply(l.target, arguments)
                } catch (e) {
                    Log.debug("exception caught in event handler: " + l.callback.toString())
                }
            }
        }
    },
    statics: {
        create: function(obj, eventname) {
            var sender = new EventSender;
            sender.serial = EventSender.serial++;
            obj["on" + eventname] = sender.get_adder();
            obj["remove_on" + eventname] = sender.get_remover();
            return function() {
                sender.fire.apply(sender, arguments)
            }
        },
        serial: 1
    }
});
var FormUtils = {
    showHideAlert: function(elem, text) {
        elem = elt(elem);
        if (!elem)
            return;
        if (typeof text != "boolean")
            elem.innerHTML = text || "";
        if (text)
            Y.util.Dom.addClass(elem, "alertActive");
        else {
            Y.util.Dom.removeClass(elem, "alertActive");
            if (window.Form && window.Form.validate)
                Form.validate.remove_onchange_listeners(elem)
        }
    }
};
var Form = {
    _classDefinition: 1,
    _allowSubmit: false,
    _submitTimer: null,
    delaySubmitUntilReady: function(e, submitter, change_ui, delay_interval) {
        if (!delay_interval)
            delay_interval = 100;
        var debugstring = "event: " + e.type + ", delay_interval: " + delay_interval + ", change_ui: " + typeof change_ui;
        Log.debug("delaySubmitUntilReady: " + debugstring);
        if (!Form._allowSubmit) {
            Y.util.Event.stopEvent(e);
            if (change_ui)
                change_ui();
            if (submitter) {
                fn = Form.makeSubmitClosure(delay_interval, submitter);
                Form._submitTimer = setTimeout(fn, delay_interval)
            } else
                alert("The page is still loading; please wait just a moment...")
        } else
            ;
    },
    makeSubmitClosure: function(delay, submitter) {
        return function() {
            Log.debug("anon fn: delay interval: " + delay);
            if (Form._submitTimer)
                clearTimeout(Form._submitTimer);
            if (!Form._allowSubmit) {
                Log.debug("delaying " + delay + " millis...");
                var nextTry = Form.makeSubmitClosure(delay, submitter);
                Form._submitTimer = setTimeout(nextTry, delay)
            } else {
                Log.debug("Allowing Submit");
                submitter(null, true)
            }
        }
    }
};
function TimeIt(fn) {
    var start = (new Date).getTime();
    fn();
    return (new Date).getTime() - start
}
var Capabilities = function() {
    function hasFeature(feature, version) {
        return document.implementation && document.implementation.hasFeature ? document.implementation.hasFeature(feature, version) : false
    }
    function cacheAnswer(name, testFn) {
        return function() {
            var result = cache[name];
            if (typeof result == "undefined")
                result = cache[name] = testFn();
            return result
        }
    }
    var tests = {
        hasSVG: {
            className: "svg",
            test: function() {
                return hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
            }
        },
        hasCSSOM: {
            className: "cssom",
            test: function() {
                return document.createRange && document.createRange().getClientRects
            }
        },
        hasHover: {
            className: "hover",
            test: function() {
                return !("ontouchstart"in window)
            }
        },
        hasTouch: {
            className: "touch",
            test: function() {
                return "ontouchstart"in window
            }
        },
        hasAnimation: {
            className: "anim",
            test: function() {
                var st = document.documentElement.style;
                return "animation"in st || "webkitAnimation"in st
            }
        },
        zzz: null
    };
    var out = {};
    var cache = {};
    $.each(tests, function(name, info) {
        if (!info || !info.test)
            return null;
        var testFn = out[name] = cacheAnswer(name, info.test);
        var fullClass;
        if (info.className) {
            var result = testFn();
            fullClass = (result ? "has-" : "no-") + info.className;
            $(document.documentElement).addClass(fullClass)
        }
        Log.debug("Capabilities: registered test " + name + (fullClass ? "; classname\x3d" + fullClass : ""))
    });
    out.cache = cache;
    return out
}();
var MediaView = {
    thresholds: null,
    defaultThresholds: {
        desktop_width: -1
    },
    mode: null,
    initType: null,
    initServer: function(mode) {
        this.initType = "server";
        this.mode = mode
    },
    xxx: false
};
var Control = {
    _controllers: [],
    _defaults: [],
    _eventsRegistered: false,
    _canInvokeActions: false,
    _queuedAction: null,
    registerEvents: function() {
        if (Control._eventsRegistered)
            return;
        var yEvent = Y.util.Event;
        yEvent.on(document, "click", Control._clickHandler);
        var formIndex = 0;
        var searchForAndRegisterForms = function() {
            if (formIndex == -1)
                return;
            var elems = document.getElementsByTagName("FORM");
            for (var submitHandler = Control._submitHandler; formIndex < elems.length; formIndex++) {
                var elem = elems[formIndex];
                if (elem.method.toLowerCase() == "get")
                    yEvent.on(elem, "submit", submitHandler)
            }
            setTimeout(searchForAndRegisterForms, 100)
        };
        searchForAndRegisterForms();
        Control.handleDomReady = function() {
            Log.debug("Control: got DOMReady");
            formIndex = -1;
            Control._canInvokeActions = true;
            if (Control._queuedAction) {
                Control._invokeActionArray(Control._queuedAction);
                Control._queuedAction = null
            }
        }
        ;
        Control._eventsRegistered = true
    },
    registerController: function(path, controller) {
        $assert(path);
        $assert(controller);
        if (path.charAt(0) != "/")
            path = "/" + path;
        Control._controllers.push([path, controller])
    },
    registerDefault: function(tagname, controller) {
        Control._defaults.push([tagname, controller])
    },
    invokeAction: function(url, event) {
        var actionArr = Control._findAction(url, event);
        if (actionArr) {
            Control._invokeActionArray(actionArr);
            return true
        }
        return false
    },
    _clickHandler: function(e) {
        if (e.button != 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
            return;
        var clickedEl = $(Y.util.Event.getTarget(e));
        if (clickedEl.length && clickedEl.attr("bc-cc-none") !== undefined)
            return;
        var targetEl = clickedEl.closest("a")[0];
        if (targetEl) {
            var url = targetEl.href;
            Control._invokeFromEvent(url, e)
        }
    },
    _submitHandler: function(e) {
        var formEl = this;
        var paramStr = Y.util.Connect.setForm(formEl);
        Y.util.Connect.resetFormState();
        var baseUrl = formEl.action;
        var url = baseUrl + (baseUrl.indexOf("?") != -1 ? "\x26" : "?") + paramStr;
        $assert(url.length < 2E3, "URL possibly too long: " + url);
        Control._invokeFromEvent(url, e)
    },
    _invokeFromEvent: function(url, event) {
        Control._queuedAction = null;
        var actionArr = Control._findAction(url, event);
        if (!actionArr)
            return Control._invokeDefault(event);
        Y.util.Event.stopEvent(event);
        if (Control._canInvokeActions) {
            Log.debug("Control: invoking action for: " + url);
            Control._invokeActionArray(actionArr)
        } else {
            Log.debug("Control: queuing action for: " + url);
            actionArr[4] = DomBoot.cloneEvent(event);
            Control._queuedAction = actionArr
        }
    },
    _invokeDefault: function(event) {
        var targetEl = Y.util.Event.getTarget(event);
        var def = Control._findDefault(targetEl.tagName);
        if (!def)
            return;
        Control._invokeActionArray([def, event])
    },
    _findDefault: function(tagName) {
        var arr$$0 = Iter.find(Control._defaults, function(arr) {
            return tagName.toLowerCase() == arr[0].toLowerCase()
        });
        if (arr$$0)
            return arr$$0[1];
        return null
    },
    _invokeActionArray: function(actionArr) {
        var actionFn = actionArr.shift();
        actionFn.apply(null, actionArr)
    },
    _findAction: function(url, event) {
        var urlHash = Url.toHash(url);
        if (!Url.isFullyQualified(urlHash))
            urlHash = Url.toHash(Url.fullyQualify(urlHash));
        else if (!Url.isLocal(urlHash))
            return null;
        if (Url.equals(urlHash, location, true))
            return null;
        var path = urlHash.pathname || "/";
        var arr$$0 = Iter.find(Control._controllers, function(arr) {
            return path.indexOf(arr[0]) == 0
        });
        if (arr$$0) {
            path = path.substr(arr$$0[0].length).replace(/^\/?(.*?)\/?$/, "$1");
            var pathParts = path.split("/");
            var methodName = pathParts.shift();
            if (!methodName)
                methodName = "index";
            var controller = arr$$0[1];
            var actionFn = controller[methodName];
            if (actionFn)
                return [actionFn, pathParts, Url.parseQuery(urlHash.search), url, event]
        }
        return null
    }
};
var Stats = function() {
    return {
        RECORD_URL: "/stat_record",
        record: function(args) {
            if (!args.band_id && window.BandData)
                args.band_id = BandData.id;
            try {
                CommUtils.beacon(siteroot_current + Stats.RECORD_URL, args)
            } catch (e) {}
        },
        _recorded_clicks: {},
        record_click_once: function(click) {
            if (!Stats._recorded_clicks[click]) {
                Stats._recorded_clicks[click] = true;
                Stats.record({
                    kind: "click",
                    click: click
                })
            }
        },
        share_menu_click: function(variant) {
            if (variant == "wordpress")
                variant = "wordpress.com";
            Stats.record({
                kind: "share menu",
                click: variant
            })
        }
    }
}();
Stats.PhasedStat = function() {
    function PhasedStat(params, phase) {
        this._params = params;
        this._params.phase = phase;
        this._params.reference_num = Math.round(Math.random() * 1E9);
        Stats.record(this._params)
    }
    PhasedStat.prototype = {
        change_phase: function(phase) {
            this._params.phase = phase;
            Stats.record(this._params)
        },
        done: function() {
            this.change_phase("complete")
        },
        error: function(info) {
            this._params.info = info;
            this.change_phase("error")
        },
        add_params: function(params) {
            this._params = this.merge(this._params, params)
        },
        merge: function(a, b) {
            var result = {};
            for (var i in a)
                result[i] = a[i];
            for (i in b)
                result[i] = b[i];
            return result
        }
    };
    return PhasedStat
}();
var TPController = {
    edit_design: function(paths, params, url, event) {
        Design.editDesign()
    },
    testme: function(paths, params, url, event) {
        var dlg = Dialog.openTemplate(null, "email_collection_rules", params, [Dialog.buttons.ok()])
    }
};
var Trackpipe = {
    TrackUploadStat: LangUtils.makesubclass(Stats.PhasedStat, {
        ctor: function() {
            this.startdate = new Date;
            params = {
                kind: "track upload"
            };
            this.constructor.superclass.constructor.call(this, params, "started")
        },
        prototype: {
            done: function(encodings_id) {
                this.add_params({
                    encodings_id: encodings_id,
                    elapsed_sec: (new Date - this.startdate) / 1E3
                });
                this.constructor.superclass.done.call(this)
            }
        }
    }),
    showXHRError: function(json) {
        if (json.error === true) {
            var ax = json.exception && json.exception.indexOf("ALERT: ");
            if (ax && ax >= 0) {
                json.alert_text = json.exception.slice(ax + 7);
                Dialog.openTemplate("Note", "xhr_error_dialog", json, Dialog.buttons.ok(), "35em")
            } else {
                json.browser = Browser;
                Dialog.openTemplate("Error", "xhr_error_dialog", json, Dialog.buttons.ok(), "35em")
            }
            return true
        }
        return false
    },
    maybeDoTralbumActions: function() {
        var action = HiddenParams["action"];
        switch (action) {
        case "share":
            Share.showFromEmbed();
            break;
        case "embed":
            EmbedDialog.open();
            break;
        case "download":
        case "buy":
        case "package":
        case "gift":
        case "buy_digital":
            TralbumDownload.handleActionParam();
            break;
        case "contact":
            if (BandData.fan_email)
                window.top.location.href = "mailto:" + Text.escapeHtml(BandData.fan_email);
            else
                Contact.show_form({
                    b: BandData.id,
                    n: BandData.name
                });
            break;
        case "design":
            Design.editDesign();
            break
        }
    }
};
var Tracks = {
    encoding_error: function(msg) {
        msg = "The uploaded track couldn\u2019t be processed because " + Text.escapeHtml(msg) + ". Please see \x3ca target\x3d'_blank' href\x3d'http://bandcamp.com/faq#aiffwavuploadrequirement'\x3ethe FAQ\x3c/a\x3e for more information.";
        Dialog.alert("Upload Error", msg)
    }
};
if (typeof deconcept == "undefined")
    var deconcept = new Object;
if (typeof deconcept.util == "undefined")
    deconcept.util = new Object;
if (typeof deconcept.SWFObjectUtil == "undefined")
    deconcept.SWFObjectUtil = new Object;
deconcept.SWFObject = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey) {
    if (!document.getElementById)
        return;
    this.DETECT_KEY = detectKey ? detectKey : "detectflash";
    this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
    this.params = new Object;
    this.variables = new Object;
    this.attributes = new Array;
    if (swf)
        this.setAttribute("swf", swf);
    if (id)
        this.setAttribute("id", id);
    if (w)
        this.setAttribute("width", w);
    if (h)
        this.setAttribute("height", h);
    if (ver)
        this.setAttribute("version", new deconcept.PlayerVersion(ver.toString().split(".")));
    this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
    if (!window.opera && document.all && this.installedVer.major > 7)
        deconcept.SWFObject.doPrepUnload = true;
    if (c)
        this.addParam("bgcolor", c);
    var q = quality ? quality : "high";
    this.addParam("quality", q);
    this.setAttribute("useExpressInstall", false);
    this.setAttribute("doExpressInstall", false);
    var xir = xiRedirectUrl ? xiRedirectUrl : window.location;
    this.setAttribute("xiRedirectUrl", xir);
    this.setAttribute("redirectUrl", "");
    if (redirectUrl)
        this.setAttribute("redirectUrl", redirectUrl)
}
;
deconcept.SWFObject.prototype = {
    useExpressInstall: function(path) {
        this.xiSWFPath = !path ? "expressinstall.swf" : path;
        this.setAttribute("useExpressInstall", true)
    },
    setAttribute: function(name, value) {
        this.attributes[name] = value
    },
    getAttribute: function(name) {
        return this.attributes[name]
    },
    addParam: function(name, value) {
        this.params[name] = value
    },
    getParams: function() {
        return this.params
    },
    addVariable: function(name, value) {
        this.variables[name] = value
    },
    getVariable: function(name) {
        return this.variables[name]
    },
    getVariables: function() {
        return this.variables
    },
    getVariablePairs: function() {
        var variablePairs = new Array;
        var key;
        var variables = this.getVariables();
        for (key in variables)
            variablePairs.push(key + "\x3d" + variables[key]);
        return variablePairs
    },
    getSWFHTML: function() {
        var swfNode = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "PlugIn");
                this.setAttribute("swf", this.xiSWFPath)
            }
            swfNode = '\x3cembed type\x3d"application/x-shockwave-flash" src\x3d"' + this.getAttribute("swf") + '" width\x3d"' + this.getAttribute("width") + '" height\x3d"' + this.getAttribute("height") + '"';
            swfNode += ' id\x3d"' + this.getAttribute("id") + '" name\x3d"' + this.getAttribute("id") + '" ';
            var params = this.getParams();
            for (var key in params)
                swfNode += [key] + '\x3d"' + params[key] + '" ';
            var pairs = this.getVariablePairs().join("\x26");
            if (pairs.length > 0)
                swfNode += 'flashvars\x3d"' + pairs + '"';
            swfNode += "/\x3e"
        } else {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "ActiveX");
                this.setAttribute("swf", this.xiSWFPath)
            }
            swfNode = '\x3cobject id\x3d"' + this.getAttribute("id") + '" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width\x3d"' + this.getAttribute("width") + '" height\x3d"' + this.getAttribute("height") + '"\x3e';
            swfNode += '\x3cparam name\x3d"movie" value\x3d"' + this.getAttribute("swf") + '" /\x3e';
            params = this.getParams();
            for (key in params)
                swfNode += '\x3cparam name\x3d"' + key + '" value\x3d"' + params[key] + '" /\x3e';
            pairs = this.getVariablePairs().join("\x26");
            if (pairs.length > 0)
                swfNode += '\x3cparam name\x3d"flashvars" value\x3d"' + pairs + '" /\x3e';
            swfNode += "\x3c/object\x3e"
        }
        return swfNode
    },
    write: function(elementId) {
        function hack_getSWFSrc(html) {
            var regex = / src=\"([^"]*)\"/i;
            var result = regex.exec(html);
            if (result)
                return result[1];
            return null
        }
        if (this.getAttribute("useExpressInstall")) {
            var expressInstallReqVer = new deconcept.PlayerVersion([6, 0, 65]);
            if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
                this.setAttribute("doExpressInstall", true);
                this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
                document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                this.addVariable("MMdoctitle", document.title)
            }
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
            var n = typeof elementId == "string" ? document.getElementById(elementId) : elementId;
            var html = this.getSWFHTML();
            var url = hack_getSWFSrc(html);
            n.innerHTML = html;
            if (url && url != hack_getSWFSrc(n.innerHTML)) {
                n.innerHTML = "";
                return false
            }
            return true
        } else if (this.getAttribute("redirectUrl") != "")
            document.location.replace(this.getAttribute("redirectUrl"));
        return false
    }
};
deconcept.SWFObjectUtil.getPlayerVersion = function() {
    var PlayerVersion = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var x = navigator.plugins["Shockwave Flash"];
        if (x && x.description)
            PlayerVersion = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
    } else {
        try {
            var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
        } catch (e$$0) {
            try {
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                PlayerVersion = new deconcept.PlayerVersion([6, 0, 21]);
                axo.AllowScriptAccess = "always"
            } catch (e) {
                if (PlayerVersion.major == 6)
                    return PlayerVersion
            }
            try {
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {}
        }
        if (axo != null)
            PlayerVersion = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","))
    }
    return PlayerVersion
}
;
deconcept.PlayerVersion = function(arrVersion) {
    this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
    this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
    this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0
}
;
deconcept.PlayerVersion.prototype.versionIsValid = function(fv) {
    if (this.major < fv.major)
        return false;
    if (this.major > fv.major)
        return true;
    if (this.minor < fv.minor)
        return false;
    if (this.minor > fv.minor)
        return true;
    if (this.rev < fv.rev)
        return false;
    return true
}
;
deconcept.util = {
    getRequestParameter: function(param) {
        var q = document.location.search || document.location.hash;
        if (q) {
            var pairs = q.substring(1).split("\x26");
            for (var i = 0; i < pairs.length; i++)
                if (pairs[i].substring(0, pairs[i].indexOf("\x3d")) == param)
                    return pairs[i].substring(pairs[i].indexOf("\x3d") + 1)
        }
        return ""
    }
};
deconcept.SWFObjectUtil.cleanupSWFs = function() {
    var objects = document.getElementsByTagName("OBJECT");
    for (var i = 0; i < objects.length; i++) {
        objects[i].style.display = "none";
        for (var x in objects[i])
            if (typeof objects[i][x] == "function")
                objects[i][x] = function() {}
    }
}
;
if (deconcept.SWFObject.doPrepUnload) {
    deconcept.SWFObjectUtil.prepUnload = function() {
        __flash_unloadHandler = function() {}
        ;
        __flash_savedUnloadHandler = function() {}
        ;
        window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
    }
    ;
    window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload)
}
if (Array.prototype.push == null)
    Array.prototype.push = function(item) {
        this[this.length] = item;
        return this.length
    }
    ;
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject;
var SWFObject = deconcept.SWFObject;
function FPDebug(str) {}
function FPTrace(str) {}
var FlashProxy = {
    register_proxy: function(swfurl, classnames) {
        for (var i = 0; i < classnames.length; i++)
            FlashProxy._class_urls[classnames[i]] = swfurl
    },
    whenclassready: function(classname, callback, errorcallback) {
        FPTrace("whenclassready(" + classname + ") called");
        if (FlashProxy.error) {
            if (errorcallback) {
                FPTrace("flash proxy error for class " + classname + "; calling error callback");
                errorcallback()
            }
            return
        }
        if (FlashProxy.find_by_classname(classname)) {
            FPDebug("whenclassready(" + classname + "): class is already ready");
            callback();
            return
        }
        if (!FlashProxy._proxywaiters[classname])
            FlashProxy._proxywaiters[classname] = [];
        var swfurl = FlashProxy._class_urls[classname];
        if (!swfurl)
            Log.error("No SWF URL found for class " + classname);
        FPTrace("loading swf " + swfurl);
        FlashProxy._proxywaiters[classname].push({
            success: callback,
            failure: errorcallback
        });
        if (swfurl)
            if (!FlashProxy._loadswf(swfurl))
                FlashProxy._onproxyerror(classname)
    },
    invalidate_class: function(classname) {
        var entry = FlashProxy._by_classname[classname];
        FlashProxy._invalidate_entry(entry)
    },
    invalidate_swf: function(url) {
        var entry = FlashProxy._by_swfurl[classname];
        FlashProxy._invalidate_entry(entry)
    },
    invalidate_proxyid: function(id) {
        var entry = FlashProxy._by_proxyid[id];
        FlashProxy._invalidate_entry(entry)
    },
    _invalidate_entry: function(entry) {
        if (!entry)
            return;
        for (var i = 0; i < entry.classes.length; i++) {
            FPDebug("invalidating class " + entry.classes[i]);
            FlashProxy._by_classname[entry.classes[i]] = null;
            FlashProxy[entry.classes[i]] = null
        }
        if (entry.proxyid) {
            FPDebug("invalidating proxy id " + entry.proxyid);
            FlashProxy._by_proxyid[entry.proxyid] = null
        }
        if (entry.swfurl) {
            FPDebug("invalidating proxy swfurl " + entry.swfurl);
            FlashProxy._by_swfurl[entry.swfurl] = null
        }
    },
    is_proxy_valid: function(proxyid) {
        return FlashProxy.find_by_proxyid(proxyid) != null
    },
    _is_entry_valid: function(entry) {
        if (entry) {
            var is_in_document = function(elem) {
                try {
                    for (var cur = elem; cur; ) {
                        cur = cur.parentNode;
                        if (cur == document)
                            return true
                    }
                } catch (e) {}
                FPDebug("entry is not valid because it is not a descendant of document!");
                return false
            };
            var swfExists = typeof entry.swfobject != "undefined" && entry.swfobject;
            if (entry.pending || swfExists && entry.swfobject.getproxynames && is_in_document(entry.swfobject))
                return true;
            FPDebug("entry is not valid: entry.swfobject\x3d" + entry.swfobject + ", entry.swfobjects.getproxynames\x3d" + (swfExists ? entry.swfobject.getproxynames : "[undef]"));
            FlashProxy._invalidate_entry(entry)
        }
        return false
    },
    find_by_classname: function(classname) {
        var entry = FlashProxy._by_classname[classname];
        if (FlashProxy._is_entry_valid(entry))
            return entry;
        return null
    },
    find_by_swfurl: function(url) {
        var entry = FlashProxy._by_swfurl[url];
        if (FlashProxy._is_entry_valid(entry))
            return entry;
        return null
    },
    find_by_proxyid: function(proxyid) {
        var entry = FlashProxy._by_proxyid[proxyid];
        FPDebug('found proxy entry by id "' + proxyid + '": ' + entry);
        if (FlashProxy._is_entry_valid(entry))
            return entry;
        FPDebug("proxy entry is not valid");
        return null
    },
    find_proxy: function(proxyid) {
        var entry = FlashProxy.find_by_proxyid(proxyid);
        return entry ? entry.swfobject : null
    },
    _loadswf: function(url) {
        var existing = FlashProxy.find_by_swfurl(url);
        if (existing)
            return existing;
        var create_confirm_button = false;
        var nuggetname = "nugget2.swf";
        if (url.substr(url.length - nuggetname.length, nuggetname.length) == nuggetname)
            create_confirm_button = true;
        var proxyid = FlashProxy._next_proxy_id++;
        var entry = {
            classes: [],
            swfurl: url,
            proxyid: proxyid,
            pending: true
        };
        if (FlashProxy._by_swfurl[url])
            FlashProxy._invalidate_entry(FlashProxy._by_swfurl[url]);
        FlashProxy._by_swfurl[url] = entry;
        FlashProxy._by_proxyid[proxyid] = entry;
        entry._container_id = "proxy_container_" + proxyid;
        entry._object_id = "proxy_swfobject_" + proxyid;
        var width = "0";
        var height = "0";
        var swfobject = new SWFObject(url,entry._object_id,width,height,"8","#F0F0F0");
        swfobject.addParam("allowscriptaccess", "always");
        swfobject.addVariable("proxyid", proxyid.toString());
        swfobject.addVariable("namespace", "FlashProxy");
        var elem = document.createElement("DIV");
        if (create_confirm_button) {
            elem.style.position = "absolute";
            elem.style.zIndex = "9999";
            swfobject.addParam("style", "z-index: 9999;");
            swfobject.addParam("width", width);
            swfobject.addParam("height", height)
        }
        elem.id = entry._container_id;
        document.body.appendChild(elem);
        if (!swfobject.write(entry._container_id)) {
            FlashProxy.flash_has_version = swfobject.installedVer.major + "." + swfobject.installedVer.minor;
            FlashProxy.error = true;
            return null
        }
        entry.swfobject = document.getElementById(entry._object_id);
        FPTrace("swfobject id is " + entry._object_id);
        entry.pending = false;
        return entry
    },
    _onproxyready: function(proxyid, classname) {
        try {
            var entry = FlashProxy.find_by_proxyid(proxyid);
            FPTrace("_onproxyready: existing entry: " + entry);
            if (!entry) {
                FPDebug("no object for proxid " + proxyid + ".  Checking for HTML element.");
                var elem = document.getElementById(proxyid);
                FPTrace("elem: " + elem);
                if (!elem || !elem.getproxy) {
                    FPTrace("Did not find HTML element for proxyid " + proxyid + " either.  Waiting a bit (elem \x3d " + elem + ").");
                    setTimeout(function() {
                        FlashProxy._onproxyready(proxyid, classname)
                    }, 0);
                    FPTrace("timeout set");
                    return
                }
                entry = {
                    swfobject: elem,
                    proxyid: proxyid,
                    classes: []
                };
                FlashProxy._by_proxyid[proxyid] = entry;
                FPDebug('set FlashProxy._by_proxyid["' + proxyid + '"] to entry containing swfobject\x3d' + entry.swfobject)
            }
            if (!entry.swfobject) {
                setTimeout(function() {
                    FlashProxy._onproxyready(proxyid, classname)
                }, 0);
                return
            }
            FPDebug("calling into swfobject: " + entry.swfobject);
            FPDebug("creating class FlashProxy." + classname);
            var jscode = "FlashProxy." + classname + " \x3d " + entry.swfobject.getproxy(classname) + ";";
            FPDebug("retrieved JS proxy code for " + classname);
            eval(jscode);
            FPDebug("FlashProxy." + classname + " created");
            entry.classes.push(classname);
            FlashProxy._by_classname[classname] = entry;
            var waiters = FlashProxy._proxywaiters[classname];
            if (waiters) {
                FPDebug("" + waiters.length + " waiters waiting for " + classname);
                for (var waiter; waiter = waiters.pop(); )
                    try {
                        FPTrace("calling waiter: " + waiter.toString());
                        waiter.success()
                    } catch (ex) {
                        FPDebug("flash proxy 'whenclassready' handler for " + classname + " failed")
                    }
            }
            FPTrace("onproxyready(" + proxyid + ", " + classname + ") exiting");
            return true
        } catch (exc) {
            FPDebug("_onproxyready caught: " + exc.message);
            setTimeout(function() {
                FlashProxy._onproxyready(proxyid, classname)
            }, 0)
        }
    },
    _onproxyerror: function(classname) {
        var waiters = FlashProxy._proxywaiters[classname];
        if (waiters) {
            FPDebug("" + waiters.length + " waiters waiting for " + classname);
            for (var waiter; waiter = waiters.pop(); )
                try {
                    if (waiter.failure)
                        waiter.failure()
                } catch (ex) {
                    FPDebug("flash proxy 'whenclassready' error handler for " + classname + " failed")
                }
        }
    },
    _next_proxy_id: 1,
    _by_swfurl: {},
    _by_classname: {},
    _by_proxyid: {},
    _class_urls: {},
    _proxywaiters: {},
    _fire_event: function(ref, eventname, arg) {
        function refire() {
            that._do_fire_event.call(that, ref, eventname, arg)
        }
        var that = this;
        setTimeout(refire, 1)
    },
    _do_fire_event: function(ref, eventname, arg) {
        var obj = FlashProxy._ref_to_obj[ref];
        var handlers = obj._events[eventname];
        for (var i = 0; handlers != null && i < handlers.length; i++)
            try {
                handlers[i](obj, arg)
            } catch (e) {
                var msg = 'caught exception in "' + eventname + '" handler: ';
                msg += e.message ? e.message : e;
                if (e.stack)
                    msg += "\n" + e.stack;
                FlashProxy.logerror(msg)
            }
    },
    _register_instance: function(ref, obj) {
        if (FlashProxy._ref_to_obj[ref]) {
            FlashProxy.logerror("flash proxy: trying to register an instance that already exists! (ref: " + ref + ")");
            return
        }
        FlashProxy._ref_to_obj[ref] = obj
    },
    logerror: function(str) {
        if (typeof Log != "undefined" && typeof Log.error != "undefined")
            Log.error("flash proxy error: " + str)
    },
    _confirmation_dialog: null,
    _confirmation_dialog_container: null,
    _confirm_restricted_api: function(proxyid, message, title, includeCancel) {
        var entry = FlashProxy.find_by_proxyid(proxyid);
        var swfobject = FlashProxy.find_proxy(proxyid);
        var container = elt(entry._container_id);
        title = title || "Flash confirmation";
        $assert(swfobject && container);
        if (includeCancel != true)
            includeCancel = false;
        FlashProxy._confirmation_dialog = Dialog.openTemplate(title, "flash_confirmation", {
            message: message,
            proxyid: proxyid,
            includeCancel: includeCancel
        }, []);
        FlashProxy._confirmation_dialog.cancelEvent.subscribe(function() {
            FlashProxy._confirmation_dialog = null;
            FlashProxy._dismiss_confirmation(proxyid)
        });
        FlashProxy._confirmation_dialog.dragEvent.subscribe(function() {
            swfobject.height = "1px";
            swfobject.width = "1px";
            container.style.top = "0px";
            container.style.left = "0px"
        });
        FlashProxy._confirmation_dialog.moveEvent.subscribe(function() {
            FlashProxy._position_confirmation_button(proxyid)
        })
    },
    _position_confirmation_button: function(proxyid) {
        var entry = FlashProxy.find_by_proxyid(proxyid);
        var swfobject = FlashProxy.find_proxy(proxyid);
        var container = elt(entry._container_id);
        var okimg = elt("flashconfirmok");
        $assert(swfobject && container && okimg);
        swfobject.height = "31";
        swfobject.width = "85";
        var setXYHack = function(elem, xy) {
            var desired = [].concat(xy);
            Y.util.Dom.setXY(elem, desired);
            var actual = Y.util.Dom.getXY(elem);
            desired[0] += desired[0] - Math.round(actual[0]);
            desired[1] += desired[1] - Math.round(actual[1]);
            Y.util.Dom.setXY(elem, desired)
        };
        container.style.zIndex = 9999;
        var pos = Y.util.Dom.getXY(okimg);
        pos[0] += 2;
        pos[1] += 2;
        setXYHack(container, pos)
    },
    _hide_confirmation_dialog: function(proxyid) {
        var entry = FlashProxy.find_by_proxyid(proxyid);
        var swfobject = FlashProxy.find_proxy(proxyid);
        var container = elt(entry._container_id);
        FlashProxy._confirmation_dialog_container = container;
        $assert(swfobject && container);
        swfobject.height = "1px";
        swfobject.width = "1px";
        container.style.zIndex = -1;
        if (FlashProxy._confirmation_dialog) {
            FlashProxy._confirmation_dialog.destroy();
            FlashProxy._confirmation_dialog = null
        }
    },
    _dismiss_confirmation: function(proxyid) {
        var entry = FlashProxy.find_by_proxyid(proxyid);
        var swfobject = FlashProxy.find_proxy(proxyid);
        var container = elt(entry._container_id);
        $assert(swfobject && container);
        FlashProxy._hide_confirmation_dialog(proxyid);
        swfobject.cancel_confirmation()
    },
    _ref_to_obj: {},
    noFlashError: function(sitch) {
        if (sitch == "upload" && Browser.platform == "iphone") {
            Dialog.alert("Upload", "To upload files, visit Bandcamp from a desktop computer.");
            return
        }
        var title = "Flash Required";
        var message = "In order to use this feature, you must have the Adobe Flash Player installed.";
        var situations = {
            "share": "In order to embed the music player on another site, you must have the Adobe Flash Player installed.",
            "player": "In order to use the music player, you must have the Adobe Flash Player installed.",
            "upload": "In order to upload files, you must have the Adobe Flash Player installed.",
            "download": "In order to download, you must have the Adobe Flash Player installed."
        };
        if (situations[sitch])
            message = situations[sitch];
        Dialog.openTemplate(title, "flash_required", {
            title: title,
            message: message
        }, Dialog.buttons.ok())
    },
    cleanUpHack: function() {
        if (FlashProxy._confirmation_dialog_container)
            Y.util.Dom.setXY(FlashProxy._confirmation_dialog_container, [0, 0])
    }
};
FlashProxy.register_proxy(siteroot_current + "/js/shared/nugget2.swf", ["Downloader", "Uploader", "SoundPlayer"]);
FlashProxy.log_enable = function(str) {
    for (var x in FlashProxy._by_proxyid)
        FlashProxy._by_proxyid[x].swfobject.log_enable(str)
}
;
FlashProxy.set_clipboard = function(str) {
    FlashProxy.whenclassready("Uploader", function() {
        FlashProxy._by_classname["Uploader"].swfobject.set_clipboard(str)
    })
}
;
HTML5Player = function() {
    function DebugLog(name, flushInterval) {
        this.buffer = [];
        this.flushInterval = flushInterval || 1E4;
        this.tag = Math.round(Math.random() * Math.pow(2, 32)).toString(16);
        this.name = name || "DebugLog";
        this.enable()
    }
    function HTML5Player() {
        var platform = Browser.platform;
        var browserMake = Browser.make;
        var browserType = Browser.type;
        var volumeCookie = Cookie.get("volume");
        if (volumeCookie)
            volumeCookie = parseFloat(volumeCookie, 10);
        this._id = nextId;
        nextId++;
        this._options = {
            debug: false,
            simulateEndedAndroid: browserMake == "chrome" && platform == "android",
            simulateEndedSafari: browserMake == "safari" && (platform == "iphone" || platform == "mac"),
            safeLoad: browserMake == "androidbrowser" && platform == "android",
            playKick: browserMake == "androidbrowser" && platform == "android" && Browser.version[0] < 4,
            loadStartKick: browserMake == "androidbrowser" && platform == "android" && Browser.version[0] >= 4,
            deferPlayEvents: (browserMake == "chrome" || browserMake == "androidbrowser") && platform == "android",
            retryErrors: true,
            volume: volumeCookie || .7,
            deferredSeeks: false,
            resetOnStall: false,
            reloadOnSeek: false
        };
        if (HTML5Player.logEnabled()) {
            this._debugLog = new DebugLog("HTML5Player");
            this._options.debug = true
        }
        if (window.Url) {
            var params = Url.parseQuery(location.search);
            for (var opt in this._options)
                if (params.hasOwnProperty(opt))
                    if (opt == "volume") {
                        var v = parseFloat(params[opt]);
                        if (v)
                            this._options[opt] = v
                    } else
                        this._options[opt] = !(params[opt] == "0" || params[opt] == "false")
        }
        this._handlers = {
            state: [],
            time: [],
            loaded: [],
            info: [],
            volume: []
        };
        this._listeners = [];
        this._volume = this._options.volume;
        this._recentpos = [];
        if (this._options.debug) {
            var msg = ["constructed; options: "];
            for (var k in this._options)
                msg.push(k, "\x3d", this._options[k], "; ");
            this._info(msg.join(""))
        }
        this._createmedia();
        this._changestate(IDLE);
        if (Browser.platform == "iphone") {
            var that = this;
            window.addEventListener("popstate", function() {
                var recent = that._recentpos;
                if (that._state == PLAYING && recent.length) {
                    that.pause();
                    if (recent.length > 1 && recent[recent.length - 1] === 0 && recent[recent.length - 2] > 0) {
                        var restorePos = recent[recent.length - 2];
                        that._warn("detected iOS page navigation bug; resetting playhead position to " + restorePos);
                        that._fire_event("time", {
                            position: restorePos
                        });
                        recent.pop()
                    }
                }
            })
        }
        if (this._options.safeLoad)
            this._nativeLoad = this._nativeLoadSafe
    }
    function _parseversion(str) {
        var vparts = str.split(".");
        for (var i = 0; i < vparts.length; i++)
            vparts[i] = Number(vparts[i]);
        return vparts
    }
    DebugLog.prototype.log = function(msg) {
        var d = new Date;
        for (var ms = d.getMilliseconds().toString(); ms.length < 3; )
            ms = "0" + ms;
        var timestamp = d.toTimeString().substring(0, 8) + "." + ms;
        this.buffer.push(timestamp + " : " + msg)
    }
    ;
    DebugLog.prototype.flush = function() {
        if (this.buffer.length > 0) {
            Log.debug("DebugLog flushing " + this.buffer.length + " messages to server");
            var messages = this.buffer;
            this.buffer = [];
            var data = {
                tag: this.tag,
                name: this.name,
                messages: messages
            };
            $.ajax({
                url: "/api/debug/1/clientlog",
                type: "post",
                data: JSON.stringify(data),
                dataType: "json",
                success: function(result) {
                    Log.debug("posted client log")
                },
                failure: function(err) {
                    Log.error("failed to post client log: " + err)
                }
            })
        }
    }
    ;
    DebugLog.prototype.disable = function() {
        if (this.interval) {
            window.clearInterval(this.interval);
            this.interval = null
        }
        this.flush()
    }
    ;
    DebugLog.prototype.enable = function() {
        if (!this.interval) {
            this.interval = window.setInterval(this.flush.bind(this), this.flushInterval);
            this.interval = null
        }
    }
    ;
    var nextId = 1;
    HTML5Player.prototype = {
        load: function(url) {
            this._debug("load()");
            this._stallcount = 0;
            this._errorRetryCount = 0;
            this._loadedurl = url;
            this._wantstoplay = false;
            this._recentpos.length = 0;
            if (!_useLocationHack) {
                this._nativePause();
                this._nativeLoad();
                this._changestate(BUFFERING);
                this._nativeSrc(url);
                this._nativeLoad();
                this._finishedloading = false;
                this._loadStartKicked = false;
                this._playingEventDeferred = false
            }
        },
        play: function() {
            this._debug("play()");
            if (_useLocationHack)
                window.location = this._loadedurl;
            else if (!this._wantstoplay) {
                this._wantstoplay = true;
                this._nativePlay()
            }
        },
        pause: function() {
            this._debug("pause()");
            this._cancelPlayKick();
            this._wantstoplay = false;
            this._nativePause()
        },
        playpause: function() {
            this._debug("playpause()");
            switch (this._state) {
            case PLAYING:
            case BUFFERING:
                this.pause();
                break;
            default:
                this.play()
            }
        },
        stop: function() {
            this._debug("stop()");
            this._cancelPlayKick();
            this._wantstoplay = false;
            this._nativePause()
        },
        seek: function(seconds) {
            this._debug("seek() to " + seconds);
            var performed_reload_seek = false;
            var that = this;
            if (this._options.reloadOnSeek && this._mediaElem.src.substring(this._mediaElem.src.length - 5) != "\x26nl\x3d1") {
                var already_buffered = false;
                for (var i = 0; i < this._mediaElem.buffered.length; i++)
                    if (this._mediaElem.buffered.start(i) <= seconds && seconds <= this._mediaElem.buffered.end(i)) {
                        already_buffered = true;
                        break
                    }
                if (!already_buffered) {
                    this._debug("refreshing with non-rate-limited URL");
                    this._nativePause();
                    this._nativeSrc(this._mediaElem.src + "\x26nl\x3d1");
                    var seek_on_metadata_load = function(e) {
                        this.removeEventListener("loadedmetadata", seek_on_metadata_load);
                        that._nativeSeek(seconds);
                        that._nativePlay()
                    };
                    this._mediaElem.addEventListener("loadedmetadata", seek_on_metadata_load, false);
                    this._nativeLoad();
                    performed_reload_seek = true
                }
            }
            if (!performed_reload_seek)
                if (this._options.deferredSeeks) {
                    this._wantstoplay = true;
                    switch (this._state) {
                    case PLAYING:
                    case BUFFERING:
                        this._debug("doing deferred seek during playback");
                        this._wantseek = true;
                        this._wantpos = seconds;
                        break;
                    default:
                        this._seek_inner(seconds)
                    }
                } else
                    this._seek_inner(seconds)
        },
        _seek_inner: function(seconds) {
            if (this.position() == seconds)
                this._debug("seek: new position (" + seconds + ") matches current, so taking no action");
            else
                try {
                    this._nativeSeek(seconds)
                } catch (e) {
                    this._warn("caught error seeking -- perhaps your downloader does not support byte ranges? " + e)
                }
            this.play()
        },
        position: function() {
            return this._mediaElem && this._mediaElem.currentTime
        },
        state: function() {
            return this._state
        },
        setrate: function(r) {
            this._mediaElem.playbackRate = r
        },
        vol_up: function() {
            this.setvol(this._volume + .05)
        },
        vol_down: function() {
            this.setvol(this._volume - .05)
        },
        setvol: function(vol) {
            if (vol > 1)
                vol = 1;
            else if (vol < 0)
                vol = 0;
            if (this._volume != vol) {
                this._volume = vol;
                this._debug("setting media element volume to " + this._volume);
                try {
                    this._mediaElem.volume = this._volume
                } catch (e) {
                    this._warn("caught exception setting volume: " + e)
                }
            }
            this._fire_event("volume", {
                volume: this._volume
            })
        },
        getvol: function() {
            return this._volume
        },
        onstate: function(handler) {
            this._add_event_handler("state", handler)
        },
        ontime: function(handler) {
            this._add_event_handler("time", handler)
        },
        onloaded: function(handler) {
            this._cancelReset();
            this._add_event_handler("loaded", handler)
        },
        oninfo: function(handler) {
            this._add_event_handler("info", handler)
        },
        onvolume: function(handler) {
            this._add_event_handler("volume", handler)
        },
        enableLog: function(doIt) {
            if (doIt) {
                this._options.debug = true;
                var DEBUG_LOG_TIMEOUT = 1E3 * 60 * 60 * 24 * 7;
                Cookie.set("PlayerDebugLog", (new Date).valueOf() + DEBUG_LOG_TIMEOUT);
                if (!this._debugLog)
                    this._debugLog = new DebugLog("HTML5Player")
            } else {
                Cookie.clear("PlayerDebugLog");
                if (this._debugLog) {
                    this._debugLog.disable();
                    this._debugLog = null
                }
            }
        },
        _createmedia: function() {
            this._mediaElem = document.createElement("audio");
            this._mediaElem.style.width = "0px";
            this._mediaElem.style.height = "0px";
            this._mediaElem.style.visibility = "hidden";
            this._mediaElem.controls = false;
            document.body.appendChild(this._mediaElem);
            if (this._options.debug)
                for (var i = 0; i < this._loggedEvents.length; i++)
                    this._logevt(this._loggedEvents[i]);
            this._mediaElem.volume = this._volume;
            this._addlistener("loadstart", this._handle_loadstart, this);
            this._addlistener("timeupdate", this._handle_timeupdate, this);
            this._addlistener("progress", this._handle_progress, this);
            this._addlistener("canplay", this._handle_canplay, this);
            this._addlistener("canplaythrough", this._handle_canplay, this);
            this._addlistener("durationchange", this._handle_durationchange, this);
            this._addlistener("playing", this._handle_playing, this);
            this._addlistener("pause", this._handle_pause, this);
            this._addlistener("ended", this._handle_ended, this);
            this._addlistener("stalled", this._handle_stalled, this);
            this._addlistener("waiting", this._handle_waiting, this);
            this._addlistener("error", this._handle_error, this)
        },
        _loggedEvents: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"],
        _logevt: function(name) {
            this._addlistener(name, this._loghandler(name), this)
        },
        _destroymedia: function() {
            this._removelisteners();
            if (this._mediaElem) {
                document.body.removeChild(this._mediaElem);
                this._nativePause();
                this._mediaElem = null
            }
        },
        _addlistener: function(name, fn, instance) {
            var handler = function() {
                fn.apply(instance, arguments)
            };
            this._listeners.push({
                name: name,
                handler: handler
            });
            this._mediaElem.addEventListener(name, handler, false)
        },
        _removelisteners: function() {
            if (!this._mediaElem)
                return;
            for (; this._listeners.length > 0; ) {
                var info = this._listeners.pop();
                this._mediaElem.removeEventListener(info.name, info.handler, false)
            }
        },
        _handle_loadstart: function(arg) {
            var media = this._mediaElem;
            if (this._options.loadStartKick && !this._loadStartKicked && media.duration == 1 && media.readyState == 4) {
                this._loadStartKicked = true;
                this._warn("loadstart: looks like Android Browser duration\x3d1 bug; kicking media.src...");
                this._nativeSrc(media.src)
            }
        },
        _handle_waiting: function(arg) {
            this._debug("waiting")
        },
        _handle_timeupdate: function(arg) {
            try {
                var media = this._mediaElem;
                if (this._options.deferredSeeks && this._wantseek) {
                    this._debug("applying deferred seek");
                    this._seek_inner(this._wantpos);
                    this._wantseek = false
                }
                this._cancelPlayKick();
                if (this._recentpos.length == 5)
                    this._recentpos.shift();
                this._recentpos.push(media.currentTime);
                if (this._playingEventDeferred && this._state == BUFFERING) {
                    this._warn("Play event was deferred; simulating it now...");
                    this._playingEventDeferred = false;
                    this._handle_playing_inner()
                }
                var evtparams = {
                    position: media.currentTime
                };
                if (isFinite(media.duration) && media.duration > 0)
                    evtparams.duration = media.duration;
                this._fire_event("time", evtparams);
                if (this._options.simulateEndedSafari && this._mediaElem.ended)
                    this._handle_ended_inner();
                if (!this._finishedloading) {
                    var amtLoaded = this._amountLoaded();
                    if (amtLoaded >= media.duration)
                        this._finishedloading = true;
                    if (amtLoaded != this._lastloaded) {
                        this._lastloaded = amtLoaded;
                        evtparams = {
                            loaded: amtLoaded
                        };
                        if (isFinite(media.duration))
                            evtparams.total = media.duration;
                        this._cancelReset();
                        this._fire_event("loaded", evtparams)
                    }
                }
            } catch (e) {
                this._warn("exception in _handle_timeupdate: " + e)
            }
        },
        _handle_progress: function() {
            var media = this._mediaElem;
            if (this._options.simulateEndedAndroid && this._state == PLAYING && !media.paused && !media.ended && !isNaN(media.duration)) {
                var rnd = function(val) {
                    return Math.round(val * 1E3)
                };
                var cur = rnd(media.currentTime);
                var dur = rnd(media.duration);
                var buf = rnd(this._amountLoaded());
                if (cur > 0 && cur === dur && cur === buf) {
                    this._warn("Did we just hit the Chrome/Android bug in which the 'ended' event isn't fired?");
                    this._warn("Compensating by simulating the event ourselves...");
                    this._handle_ended_inner()
                }
            }
        },
        _handle_ended: function() {
            this._debug("_handle_ended");
            if (!this._options.simulateEndedSafari)
                this._handle_ended_inner()
        },
        _handle_ended_inner: function() {
            this._debug("_handle_ended_inner");
            try {
                this._wantstoplay = false;
                this._changestate(COMPLETED)
            } catch (e) {
                this._warn("exception in _handle_ended: " + e)
            }
        },
        _scheduleReset: function(timeout) {
            if (!this._options.resetOnStall)
                return;
            this._cancelReset();
            var that = this;
            this._warn("scheduling media reset in " + timeout + "ms");
            this._resetTimer = setTimeout(function() {
                that._resetTimer = null;
                that._warn("Resetting media (amtloaded \x3d " + that._amountLoaded() + ")");
                that._nativeLoad()
            }, timeout)
        },
        _cancelReset: function() {
            if (!this._options.resetOnStall)
                return;
            if (this._resetTimer) {
                this._warn("canceling media reset due to load progress (amtloaded \x3d " + this._amountLoaded() + ")");
                clearTimeout(this._resetTimer);
                this._resetTimer = null
            }
        },
        _schedulePlayKick: function(timeout) {
            if (!this._options.playKick)
                return;
            this._cancelPlayKick();
            var that = this;
            this._warn("scheduling playkick in " + timeout + "ms");
            this._playKickTimer = setTimeout(function() {
                that._warn("kicking");
                that._playKickTimer = null;
                that._nativePause();
                that._nativePlay();
                that._warn("kicked")
            }, timeout)
        },
        _cancelPlayKick: function() {
            if (!this._options.playKick)
                return;
            if (this._playKickTimer) {
                this._warn("canceling playkick timer");
                clearTimeout(this._playKickTimer);
                this._playKickTimer = null
            }
        },
        _amountLoaded: function() {
            if (this._mediaElem.buffered.length > 0)
                return this._mediaElem.buffered.end(this._mediaElem.buffered.length - 1);
            return 0
        },
        _handle_stalled: function() {
            if (this._mediaElem.readyState == HAVE_ENOUGH_DATA)
                return;
            this._stallcount += 1;
            if (this._stallcount > MAX_STALLS) {
                this._error("Too many stalls.  Giving up on this track.");
                this._nativePause();
                this._changestate(COMPLETED)
            } else {
                this._debug("stalled, readyState\x3d" + this._mediaElem.readyState + ", amtloaded\x3d" + this._amountLoaded());
                this._scheduleReset(7500)
            }
        },
        _handle_playing: function() {
            if (!(this._options.deferPlayEvents && this._state == BUFFERING))
                this._handle_playing_inner();
            else {
                this._debug("deferring play event to the next timeupdate");
                this._playingEventDeferred = true
            }
        },
        _handle_playing_inner: function() {
            try {
                this._changestate(PLAYING)
            } catch (e) {
                this._warn("exception in _handle_playing_inner: " + e)
            }
        },
        _handle_pause: function() {
            if (this._state === COMPLETED && (this._options.simulateEndedSafari || this._options.simulateEndedAndroid)) {
                this._debug("ignoring 'pause' event because state is COMPLETED");
                return
            }
            if (this._mediaElem.paused)
                this._changestate(PAUSED)
        },
        _handle_canplaythrough: function() {
            this._handle_canplay()
        },
        _handle_canplay: function() {
            try {
                if (this._wantstoplay)
                    this._nativePlay()
            } catch (e) {
                this._warn("exception in _handle_canplay: " + e)
            }
        },
        _is_cloud_streaming_url: function() {
            var srcUrl = Url.toHash(this._mediaElem.src);
            var pathElems = srcUrl.pathname.split("/");
            if (pathElems.length == 5 && pathElems[0] == "" && pathElems[1] == "stream") {
                var trackId = parseInt(pathElems[4], 10);
                if (trackId != NaN)
                    return trackId;
                else
                    return null
            } else
                return null
        },
        _refresh_cloud_streaming_url: function() {
            var that = this;
            var oldUrl = this._mediaElem.src;
            $.ajax({
                url: "/api/stream/1/refresh",
                type: "get",
                data: {
                    url: oldUrl
                },
                dataType: "json",
                success: function(result) {
                    var currentTrackId = that._is_cloud_streaming_url();
                    if (currentTrackId == result.track_id) {
                        that._nativeSrc(result.url);
                        that._nativeLoad()
                    }
                }
            })
        },
        _handle_error: function(arg) {
            var errorCode = this._mediaElem.error && this._mediaElem.error.code;
            this._error("got native error event; error.code\x3d" + errorCode);
            if (this._options.retryErrors)
                if (errorCode == this._mediaElem.error.MEDIA_ERR_SRC_NOT_SUPPORTED)
                    if (this._errorRetryCount < 5) {
                        this._errorRetryCount += 1;
                        this._warn("assuming error is due to an expired stream URL and reloading; count\x3d" + this._errorRetryCount);
                        var trackId = this._is_cloud_streaming_url();
                        if (trackId != null)
                            this._refresh_cloud_streaming_url()
                    } else {
                        this._warn("exceeded maximum number of error retries; giving up on this track");
                        this._nativePause();
                        this._changestate(COMPLETED)
                    }
        },
        _handle_durationchange: function() {
            this._schedulePlayKick(500)
        },
        _loghandler: function(name) {
            var self = this;
            return function() {
                var media = self._mediaElem;
                var buffered = null;
                try {
                    buffered = media.buffered.end(media.buffered.length - 1)
                } catch (e) {}
                this._debug("[native] " + name + "; paused\x3d" + media.paused + "; ended\x3d" + media.ended + "; readyState\x3d" + media.readyState + "; duration\x3d" + media.duration + "; currentTime\x3d" + media.currentTime + "; buffered\x3d" + buffered)
            }
        },
        _isbuffering: function() {
            try {
                return this._mediaElem.readyState < HAVE_FUTURE_DATA
            } catch (e) {}
            return false
        },
        _changestate: function(newstate) {
            if (newstate == PLAYING && this._isbuffering())
                newstate = BUFFERING;
            if (newstate != this._state) {
                var oldstate = this._state;
                this._state = newstate;
                this._debug("state changed from " + oldstate + " to " + newstate);
                this._fire_event("state", {
                    newstate: this._state,
                    oldstate: oldstate
                })
            }
        },
        _fire_event: function(name, arg) {
            var handlers = this._handlers[name];
            if (handlers)
                for (var i = 0; i < handlers.length; i++)
                    try {
                        handlers[i](this, arg)
                    } catch (e) {
                        this._warn('caught exception in handler for event "' + name + '": ' + e)
                    }
        },
        _add_event_handler: function(eventname, handler) {
            this._handlers[eventname].push(handler)
        },
        _nativeSrc: function(url) {
            this._debug("[native] setting src to: " + url);
            this._mediaElem.src = url
        },
        _nativeLoad: function() {
            this._debug("[native] load()");
            this._mediaElem.load()
        },
        _nativeLoadSafe: function() {
            this._debug("[native] load() -- with exception handling");
            try {
                this._mediaElem.load()
            } catch (e) {
                this._warn("Got exception when calling native load() -- assuming this is okay and continuing: " + e)
            }
        },
        _nativePlay: function() {
            this._debug("[native] play()");
            this._mediaElem.play()
        },
        _nativePause: function() {
            this._debug("[native] pause()");
            this._mediaElem.pause()
        },
        _nativeSeek: function(position) {
            this._debug("[native] setting currentTime to: " + position + "; previous position: " + this._mediaElem.currentTime);
            this._mediaElem.currentTime = position
        },
        _debug: function(str) {
            if (this._options.debug)
                this._log("debug", str)
        },
        _info: function(str) {
            this._log("info", str)
        },
        _warn: function(str) {
            this._log("warn", str)
        },
        _error: function(str) {
            this._log("error", str)
        },
        _log: function(level, str) {
            if (this._debugLog)
                this._debugLog.log(level.toUpperCase() + " - " + str);
            if (typeof Log != "undefined")
                Log[level]("HTML5Player-" + this._id + ": " + str)
        }
    };
    var BUFFERING = "BUFFERING";
    var PLAYING = "PLAYING";
    var PAUSED = "PAUSED";
    var IDLE = "IDLE";
    var COMPLETED = "COMPLETED";
    var HAVE_FUTURE_DATA = 3;
    var HAVE_ENOUGH_DATA = 4;
    var MAX_STALLS = 20;
    var _useLocationHack = false;
    HTML5Player.supportedFormats = function() {
        function iphoneVersion(uastring) {
            var match = uastring.match(/Version\/([0-9\.]*)/);
            if (!match)
                return null;
            return _parseversion(match[1])
        }
        var formats = {};
        if (navigator.userAgent.indexOf("iPhone") != -1) {
            var iphoneVer = iphoneVersion(navigator.userAgent);
            if (iphoneVer && (iphoneVer[0] < 4 || iphoneVer[0] === 4 && iphoneVer[1] === 0 && (iphoneVer.length === 2 || iphoneVer[2] === 0)))
                return {}
        }
        try {
            var media = document.createElement("audio");
            var canplay = media.canPlayType("audio/mpeg");
            formats["mp3-128"] = canplay == "probably" || canplay == "maybe";
            formats["mp3-v0"] = canplay == "probably" || canplay == "maybe";
            canplay = media.canPlayType('audio/mpeg; codecs\x3d"mp4a.40.2"');
            formats["aac-lo"] = canplay == "probably" || canplay == "maybe";
            if (!formats["aac-lo"]) {
                canplay = media.canPlayType('audio/mp4; codecs\x3d"mp4a.40.2"');
                formats["aac-lo"] = canplay == "probably" || canplay == "maybe"
            }
            canplay = media.canPlayType('audio/ogg; codecs\x3d"vorbis"');
            formats["vorbis-lo"] = canplay == "probably" || canplay == "maybe";
            canplay = media.canPlayType('audio/ogg; codecs\x3d"opus"');
            formats["opus-lo"] = canplay == "probably" || canplay == "maybe";
            if (formats["opus-lo"] && navigator.userAgent.indexOf(" Chrome/") != -1)
                formats["opus-lo"] = false
        } catch (e) {}
        if (!formats) {
            var match$$0 = navigator.userAgent.toString().match(/Android ([0-9\.]*)/);
            if (match$$0) {
                var ver = _parseversion(match$$0[1]);
                if (ver[0] < 2 || ver[0] == 2 && ver[1] < 3) {
                    _useLocationHack = true;
                    Log.debug("using location \x3c\x3d stream workaround");
                    formats["mp3-128"] = true;
                    formats["aac-lo"] = true
                }
            }
        }
        return formats
    }
    ;
    HTML5Player.needLocationHack = function() {
        var match = navigator.userAgent.toString().match(/Android ([0-9\.]*)/);
        if (!match)
            return false;
        var v = _parseversion(match[1]);
        return v[0] < 3 || v[0] == 3 && v[1] < 3
    }
    ;
    HTML5Player.enableLog = function(doIt) {
        var DEBUG_LOG_TIMEOUT = 1E3 * 60 * 60 * 24 * 7;
        if (doIt)
            Cookie.set("PlayerDebugLog", (new Date).valueOf() + DEBUG_LOG_TIMEOUT);
        else
            Cookie.clear("PlayerDebugLog")
    }
    ;
    HTML5Player.logEnabled = function() {
        var cookie = Cookie.get("PlayerDebugLog");
        return cookie && parseInt(cookie) > (new Date).valueOf()
    }
    ;
    return HTML5Player
}();
var Sound = {
    _callbacks: [],
    _status: null,
    _loadstarted: false,
    whenloaded: function(callback) {
        Sound._showdebug("wl");
        if (!Sound._status) {
            Sound._showdebug("init");
            Sound._callbacks.push(callback);
            Sound._load_wrapper()
        } else
            try {
                callback(Sound._status)
            } catch (e) {}
    },
    _docallbacks: function() {
        for (; Sound._callbacks.length > 0; )
            Sound._docallback(Sound._callbacks.pop())
    },
    _docallback: function(cb) {
        try {
            cb(Sound._status)
        } catch (e) {
            Log.error("caught error in Sound.whenloaded callback: " + e)
        }
    },
    _showdebug: function(text) {
        var e = document.getElementById("sounddebug");
        if (e)
            e.innerText = text
    },
    _load_wrapper: function() {
        Sound._status = {
            success: true,
            subsystem: "wrapper",
            has_viz: "false"
        };
        Sound.SoundPlayer = WrapperSoundPlayer;
        Sound._docallbacks()
    }
};
var FlashSound = {
    _callbacks: [],
    _loadstarted: false,
    _status: null,
    whenloaded: function(callback) {
        FlashSound._showdebug("wl");
        if (!FlashSound._status) {
            FlashSound._showdebug("init");
            FlashSound._callbacks.push(callback);
            if (!FlashSound._loadstarted) {
                FlashSound._loadstarted = true;
                FlashProxy.whenclassready("SoundPlayer", FlashSound._flashready, FlashSound._flashfailed)
            }
        } else
            try {
                callback(FlashSound._status)
            } catch (e) {}
    },
    _docallbacks: function() {
        for (; FlashSound._callbacks.length > 0; )
            FlashSound._docallback(FlashSound._callbacks.shift())
    },
    _docallback: function(cb) {
        try {
            cb(FlashSound._status)
        } catch (e) {
            Log.error("caught error in FlashSound.whenloaded callback: " + e)
        }
    },
    _flashready: function() {
        Log.debug("flash is ready for sound!");
        FlashSound._status = {
            success: true,
            subsystem: "flash"
        };
        FlashSound._showdebug("flash");
        FlashSound._docallbacks()
    },
    _showdebug: function(text) {
        var e = document.getElementById("sounddebug");
        if (e)
            e.innerText = text
    },
    _flashfailed: function() {
        Log.debug("All sound subsystems failed to load.");
        FlashSound._status = {
            success: false,
            error: "noflash"
        };
        FlashSound._docallbacks();
        NuDialog.alert("Error", "Unable to play audio.  Your browser must support native playback of MP3 or you must have the Adobe Flash Player installed.")
    }
};
var WrapperSoundPlayer = function() {
    function WrapperSoundPlayer() {
        function make_lazy_stub(fname) {
            return function() {
                var args = arguments;
                if (self._currentplayer == "html5")
                    self._html5player[fname].apply(self._html5player, args);
                else {
                    Log.debug("flash1 proxy method " + fname);
                    FlashSound.whenloaded(function() {
                        self._flashplayer[fname].apply(self._flashplayer, args)
                    })
                }
            }
        }
        function make_simple_proxy(fname) {
            return function() {
                var args = arguments;
                if (self._currentplayer == "html5")
                    self._html5player[fname].apply(self._html5player, args);
                else if (self._flashplayer)
                    try {
                        self._flashplayer[fname].apply(self._flashplayer, args)
                    } catch (e) {
                        if (!self._loggedException) {
                            self._loggedException = true;
                            Log.error("WrapperSoundPlayer proxy for " + fname + "(): caught exception: " + e)
                        }
                    }
                else
                    Log.error("WrapperSoundPlayer proxy for " + fname + "(): no _soundplayer instance!")
            }
        }
        var self = this;
        self._html5player = null;
        self._flashplayer = null;
        self._html5formats = HTML5Player.supportedFormats();
        self._flashstate = null;
        self._currentplayer = null;
        self._handlers = {
            state: [],
            time: [],
            loaded: [],
            info: [],
            volume: []
        };
        var formatsSupported = [];
        for (var format in self._html5formats)
            if (self._html5formats.hasOwnProperty(format) && self._html5formats[format] == true)
                formatsSupported.push(format);
        if (formatsSupported.length > 0) {
            self._html5player = new HTML5Player;
            self._html5player.ontime(function(target, x) {
                self._fire_event("time", x)
            });
            self._html5player.onstate(function(target, x) {
                self._fire_event("state", x)
            });
            self._html5player.onloaded(function(target, x) {
                self._fire_event("loaded", x)
            });
            self._html5player.oninfo(function(target, x) {
                self._fire_event("info", x)
            });
            self._html5player.onvolume(function(target, x) {
                self._fire_event("volume", x)
            });
            self._currentplayer = "html5"
        }
        self._add_event_handler = function(eventname, handler) {
            self._handlers[eventname].push(handler)
        }
        ;
        self.onstate = function(handler) {
            self._add_event_handler("state", handler)
        }
        ;
        self.ontime = function(handler) {
            self._add_event_handler("time", handler)
        }
        ;
        self.onloaded = function(handler) {
            self._add_event_handler("loaded", handler)
        }
        ;
        self.oninfo = function(handler) {
            self._add_event_handler("info", handler)
        }
        ;
        self.onvolume = function(handler) {
            self._add_event_handler("volume", handler)
        }
        ;
        self._fire_event = function(name, arg) {
            handlers = self._handlers[name];
            if (handlers)
                for (var i = 0; i < handlers.length; i++)
                    try {
                        if (self._currentplayer == "html5")
                            handlers[i](self._html5player, arg);
                        else
                            handlers[i](self._flashplayer, arg)
                    } catch (e) {
                        Log.debug('caught exception in handler for event "' + name + '": ' + e)
                    }
        }
        ;
        self.createFlashPlayer = function() {
            self._flashstate = "loaded";
            self._flashplayer = new FlashProxy.SoundPlayer;
            self._flashplayer.ontime(function(target, x) {
                self._fire_event("time", x)
            });
            self._flashplayer.onstate(function(target, x) {
                self._fire_event("state", x)
            });
            self._flashplayer.onloaded(function(target, x) {
                self._fire_event("loaded", x)
            });
            self._flashplayer.oninfo(function(target, x) {
                self._fire_event("info", x)
            });
            self._flashplayer.onvolume(function(target, x) {
                self._fire_event("volume", x)
            })
        }
        ;
        self.load = function(url, hq) {
            var preferredformat = null;
            var preferredurl = null;
            if (typeof url === "string") {
                preferredurl = url;
                preferredformat = "mp3-128"
            } else {
                var formats = ["aac-lo", "mp3-128", "opus-lo", "vorbis-lo"];
                if (hq)
                    formats.unshift("mp3-v0");
                for (var i = 0; i < formats.length; i++)
                    if (self._html5formats[formats[i]] && url[formats[i]]) {
                        preferredformat = formats[i];
                        break
                    }
                if (!preferredformat) {
                    var flashformats = ["aac-lo", "mp3-128"];
                    if (hq)
                        flashformats.unshift("mp3-v0");
                    for (i = 0; i < flashformats.length; i++)
                        if (url[flashformats[i]]) {
                            preferredformat = flashformats[i];
                            break
                        }
                }
                preferredurl = url[preferredformat]
            }
            if (self._html5formats[preferredformat]) {
                self._currentplayer = "html5";
                self._html5player.load(preferredurl)
            } else {
                self._currentplayer = "flash";
                if (self._flashplayer)
                    self._flashplayer.load(preferredurl);
                else {
                    Log.debug("WrapperSoundPlayer: HTML5 playback doesn't support " + preferredformat + ", loading flash");
                    self._flashstate = "loading";
                    FlashSound.whenloaded(function() {
                        self.createFlashPlayer();
                        self._flashplayer.load(preferredurl)
                    })
                }
            }
        }
        ;
        var lazystubs = ["play", "pause", "stop", "seek"];
        var lazymap = {};
        for (var i$$0 = 0; i$$0 < lazystubs.length; i$$0++)
            lazymap[lazystubs[i$$0]] = true;
        for (var k in HTML5Player.prototype) {
            if (k == "load")
                continue;
            if (k == "ontime")
                continue;
            if (k == "onstate")
                continue;
            if (k == "onloaded")
                continue;
            if (k == "oninfo")
                continue;
            if (k == "onvolume")
                continue;
            if (typeof HTML5Player.prototype[k] == "function" && k.substr(0, 1) != "_")
                if (lazymap[k])
                    self[k] = make_lazy_stub(k);
                else
                    self[k] = make_simple_proxy(k)
        }
    }
    return WrapperSoundPlayer
}();
var LazySound = function() {
    function LazySound() {
        function make_lazy_stub(fname) {
            return function() {
                var args = arguments;
                self.whenInstanceReady(function(sp) {
                    sp[fname].apply(sp, args)
                })
            }
        }
        function make_simple_proxy(fname) {
            return function() {
                var args = arguments;
                if (self._soundplayer)
                    try {
                        self._soundplayer[fname].apply(self._soundplayer, args)
                    } catch (e) {
                        if (!self._loggedException) {
                            self._loggedException = true;
                            Log.error("LazySound proxy for " + fname + "(): caught exception: " + e)
                        }
                    }
                else
                    Log.error("LazySound proxy for " + fname + "(): no _soundplayer instance!")
            }
        }
        var self = this;
        self._soundplayer = null;
        self._loggedException = false;
        self.whenInstanceReady = function(callback) {
            Sound.whenloaded(function(status) {
                if (status.success) {
                    if (!self._soundplayer)
                        self._soundplayer = new Sound.SoundPlayer;
                    callback(self._soundplayer)
                } else
                    Log.error("LazySound: Sound.whenloaded failed: ", status)
            })
        }
        ;
        var lazystubs = ["play", "pause", "stop", "load", "onstate", "ontime", "onloaded", "oninfo", "onvolume", "seek"];
        var lazymap = {};
        for (var i = 0; i < lazystubs.length; i++)
            lazymap[lazystubs[i]] = true;
        for (var k in HTML5Player.prototype)
            if (typeof HTML5Player.prototype[k] == "function" && k.substr(0, 1) != "_")
                if (lazymap[k])
                    self[k] = make_lazy_stub(k);
                else
                    self[k] = make_simple_proxy(k)
    }
    return LazySound
}();
var CommUtils = {
    beacon: function(url, args) {
        return this._loadImage(url, args, true)
    },
    loadImage: function(url) {
        return this._loadImage(url)
    },
    _loadImage: function(url, args, randomize, on_finish) {
        var bcn = document.createElement("img");
        var save_my_bcn = bcn;
        bcn.style.display = "none";
        bcn.onload = bcn.onerror = function() {
            var e$$0;
            try {
                bcn = null;
                if (on_finish)
                    on_finish()
            } catch (e) {}
        }
        ;
        if (randomize && !args.rand)
            args.rand = Math.random().toString().substring(2);
        bcn.src = Url.addQueryParams(url, args);
        return save_my_bcn
    },
    zzz: null
};
var Cookie = {
    ALT_IDENTITY_PARAM: "BandcampIdentity",
    get: function(cookieName) {
        $assert(Text.notEmpty(cookieName));
        var cookie = Cookie.getAll()[cookieName];
        if (cookie == null)
            cookie = null;
        return cookie
    },
    getAll: function() {
        function push(name, val) {
            var existingVal = out[name];
            if (!existingVal)
                out[name] = val;
            else if (U.isArray(existingVal))
                existingVal.push(val);
            else
                out[name] = [existingVal, val]
        }
        var pairs = document.cookie.split(/;\s*/);
        var out = {};
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("\x3d");
            if (pair[1]) {
                var paramName;
                var paramValue;
                try {
                    paramName = decodeURIComponent(pair[0]);
                    paramValue = decodeURIComponent(pair[1])
                } catch (e) {
                    Log.error("Cookie.getAll: error when decoding URL parameter, skipping; ", e);
                    continue
                }
                push(paramName, paramValue)
            }
        }
        return out
    },
    set: function(cookieName, cookieValue, maxAge, path, domain, secure) {
        $assert(Text.notEmpty(cookieName));
        $assert(maxAge == null || U.isNumber(maxAge));
        if (cookieValue == null)
            cookieValue = "";
        if (!path)
            path = "/";
        if (!domain)
            domain = Cookie._secondLevelDomain();
        var expiresDate;
        if (maxAge != null)
            expiresDate = new Date((new Date).getTime() + maxAge * 1E3);
        var enc = encodeURIComponent;
        var cookie = enc(cookieName) + "\x3d" + enc(cookieValue) + ";path\x3d" + path + (domain != null ? ";domain\x3d" + domain : "") + (expiresDate ? ";expires\x3d" + expiresDate.toUTCString() : "") + (secure ? ";secure" : "");
        document.cookie = cookie;
        return cookie
    },
    clear: function(cookieName, path, domain, secure) {
        return Cookie.set(cookieName, "", -1, path, domain, secure)
    },
    _secondLevelDomain: function() {
        var parts = location.hostname.split(".");
        var len = parts.length;
        $assert(len >= 1);
        if (len == 1)
            return null;
        return "." + parts[len - 2] + "." + parts[len - 1]
    }
};
var HiddenParams = {};
(function() {
    var cookie = Cookie.get("hiddenParams");
    if (cookie) {
        Cookie.clear("hiddenParams");
        var query$$0 = Url.parseQuery(cookie);
        if (query$$0)
            HiddenParams = query$$0
    }
    if (HiddenParams.get || HiddenParams.hide)
        Log.warn("'get' is already in HiddenParams; not implementing v2 client-side hidden params");
    else {
        HiddenParams.hide = function(keys) {
            if (!Array.isArray(keys))
                keys = [keys];
            Log.debug("hiding params [" + keys.join(", ") + "] from url query");
            var keySet = {};
            keys.forEach(function(k) {
                keySet[k] = true
            });
            var query = Url.parseQueryArray(location.search);
            var remaining = [];
            for (var i = 0; i < query.length; i++)
                if (!keySet[query[i].name])
                    remaining.push(query[i]);
            var newUrl = location.pathname;
            if (remaining.length > 0)
                newUrl += "?" + Url.joinQueryArray(remaining);
            newUrl += location.hash;
            if (window.history && window.history.replaceState)
                history.replaceState(null, document.title, newUrl)
        }
        ;
        HiddenParams.get = function(key, hide) {
            if (!HiddenParams.hasOwnProperty(key)) {
                if (hide === undefined)
                    hide = true;
                var query = Url.parseQueryArray(location.search);
                var value;
                for (var i = 0; i < query.length; i++)
                    if (query[i].name === key) {
                        value = query[i].value;
                        break
                    }
                Log.debug("got param " + key + "\x3d" + value + " from url query");
                HiddenParams[key] = value;
                if (hide)
                    HiddenParams.hide(key)
            }
            return HiddenParams[key]
        }
    }
}
)();
