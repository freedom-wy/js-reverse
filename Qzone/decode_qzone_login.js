//1、首先找到密码加密处return $.Encryption.getEncryption(password, salt, verifycode, undefined);
//2、找到$.Encryption.getEncryption加密方法
//3、自定义window变量对象,$变量对象,TEA变量对象,navigator变量对象
//4、在鬼鬼js调试器中加载并运行，缺少什么方法就找什么方法
var window = {};
$ = window.$ || {};
$pt = window.$pt || {};
//自定义TEA全局变量
var TEA = {};
//自定义navigator
var navigator = {};
!function(t) {
    function e() {
        return Math.round(4294967295 * Math.random())
    }
    function i(t, e, i) {
        (!i || i > 4) && (i = 4);
        for (var n = 0, o = e; o < e + i; o++)
            n <<= 8,
            n |= t[o];
        return (4294967295 & n) >>> 0
    }
    function n(t, e, i) {
        t[e + 3] = i >> 0 & 255,
        t[e + 2] = i >> 8 & 255,
        t[e + 1] = i >> 16 & 255,
        t[e + 0] = i >> 24 & 255
    }
    function o(t) {
        if (!t)
            return "";
        for (var e = "", i = 0; i < t.length; i++) {
            var n = Number(t[i]).toString(16);
            1 == n.length && (n = "0" + n),
            e += n
        }
        return e
    }
    function p(t) {
        for (var e = "", i = 0; i < t.length; i += 2)
            e += String.fromCharCode(parseInt(t.substr(i, 2), 16));
        return e
    }
    function r(t, e) {
        if (!t)
            return "";
        e && (t = s(t));
        for (var i = [], n = 0; n < t.length; n++)
            i[n] = t.charCodeAt(n);
        return o(i)
    }
    function s(t) {
        var e, i, n = [], o = t.length;
        for (e = 0; e < o; e++)
            i = t.charCodeAt(e),
            i > 0 && i <= 127 ? n.push(t.charAt(e)) : i >= 128 && i <= 2047 ? n.push(String.fromCharCode(192 | i >> 6 & 31), String.fromCharCode(128 | 63 & i)) : i >= 2048 && i <= 65535 && n.push(String.fromCharCode(224 | i >> 12 & 15), String.fromCharCode(128 | i >> 6 & 63), String.fromCharCode(128 | 63 & i));
        return n.join("")
    }
    function a(t) {
        m = new Array(8),
        $ = new Array(8),
        v = y = 0,
        b = !0,
        _ = 0;
        var i = t.length
          , n = 0;
        _ = (i + 10) % 8,
        0 != _ && (_ = 8 - _),
        w = new Array(i + _ + 10),
        m[0] = 255 & (248 & e() | _);
        for (var o = 1; o <= _; o++)
            m[o] = 255 & e();
        _++;
        for (var o = 0; o < 8; o++)
            $[o] = 0;
        for (n = 1; n <= 2; )
            _ < 8 && (m[_++] = 255 & e(),
            n++),
            8 == _ && c();
        for (var o = 0; i > 0; )
            _ < 8 && (m[_++] = t[o++],
            i--),
            8 == _ && c();
        for (n = 1; n <= 7; )
            _ < 8 && (m[_++] = 0,
            n++),
            8 == _ && c();
        return w
    }
    function l(t) {
        var e = 0
          , i = new Array(8)
          , n = t.length;
        if (k = t,
        n % 8 != 0 || n < 16)
            return null;
        if ($ = g(t),
        _ = 7 & $[0],
        (e = n - _ - 10) < 0)
            return null;
        for (var o = 0; o < i.length; o++)
            i[o] = 0;
        w = new Array(e),
        y = 0,
        v = 8,
        _++;
        for (var p = 1; p <= 2; )
            if (_ < 8 && (_++,
            p++),
            8 == _ && (i = t,
            !d()))
                return null;
        for (var o = 0; 0 != e; )
            if (_ < 8 && (w[o] = 255 & (i[y + _] ^ $[_]),
            o++,
            e--,
            _++),
            8 == _ && (i = t,
            y = v - 8,
            !d()))
                return null;
        for (p = 1; p < 8; p++) {
            if (_ < 8) {
                if (0 != (i[y + _] ^ $[_]))
                    return null;
                _++
            }
            if (8 == _ && (i = t,
            y = v,
            !d()))
                return null
        }
        return w
    }
    function c() {
        for (var t = 0; t < 8; t++)
            m[t] ^= b ? $[t] : w[y + t];
        for (var e = u(m), t = 0; t < 8; t++)
            w[v + t] = e[t] ^ $[t],
            $[t] = m[t];
        y = v,
        v += 8,
        _ = 0,
        b = !1
    }
    function u(t) {
        for (var e = 16, o = i(t, 0, 4), p = i(t, 4, 4), r = i(f, 0, 4), s = i(f, 4, 4), a = i(f, 8, 4), l = i(f, 12, 4), c = 0; e-- > 0; )
            c += 2654435769,
            c = (4294967295 & c) >>> 0,
            o += (p << 4) + r ^ p + c ^ (p >>> 5) + s,
            o = (4294967295 & o) >>> 0,
            p += (o << 4) + a ^ o + c ^ (o >>> 5) + l,
            p = (4294967295 & p) >>> 0;
        var u = new Array(8);
        return n(u, 0, o),
        n(u, 4, p),
        u
    }
    function g(t) {
        for (var e = 16, o = i(t, 0, 4), p = i(t, 4, 4), r = i(f, 0, 4), s = i(f, 4, 4), a = i(f, 8, 4), l = i(f, 12, 4), c = 3816266640; e-- > 0; )
            p -= (o << 4) + a ^ o + c ^ (o >>> 5) + l,
            p = (4294967295 & p) >>> 0,
            o -= (p << 4) + r ^ p + c ^ (p >>> 5) + s,
            o = (4294967295 & o) >>> 0,
            c -= 2654435769,
            c = (4294967295 & c) >>> 0;
        var u = new Array(8);
        return n(u, 0, o),
        n(u, 4, p),
        u
    }
    function d() {
        for (var t = (k.length,
        0); t < 8; t++)
            $[t] ^= k[v + t];
        return $ = g($),
        v += 8,
        _ = 0,
        !0
    }
    function h(t, e) {
        var i = [];
        if (e)
            for (var n = 0; n < t.length; n++)
                i[n] = 255 & t.charCodeAt(n);
        else
            for (var o = 0, n = 0; n < t.length; n += 2)
                i[o++] = parseInt(t.substr(n, 2), 16);
        return i
    }
    var f = ""
      , _ = 0
      , m = []
      , $ = []
      , v = 0
      , y = 0
      , w = []
      , k = []
      , b = !0;
    t.TEA = {
        encrypt: function(t, e) {
            return o(a(h(t, e)))
        },
        enAsBase64: function(t, e) {
            for (var i = h(t, e), n = a(i), o = "", p = 0; p < n.length; p++)
                o += String.fromCharCode(n[p]);
            return btoa(o)
        },
        decrypt: function(t) {
            return o(l(h(t, !1)))
        },
        initkey: function(t, e) {
            f = h(t, e)
        },
        bytesToStr: p,
        strToBytes: r,
        bytesInStr: o,
        dataFromStr: h
    };
    var q = {};
    q.PADCHAR = "=",
    q.ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    q.getbyte = function(t, e) {
        var i = t.charCodeAt(e);
        if (i > 255)
            throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return i
    }
    ,
    q.encode = function(t) {
        if (1 != arguments.length)
            throw "SyntaxError: Not enough arguments";
        var e, i, n = q.PADCHAR, o = q.ALPHA, p = q.getbyte, r = [];
        t = "" + t;
        var s = t.length - t.length % 3;
        if (0 == t.length)
            return t;
        for (e = 0; e < s; e += 3)
            i = p(t, e) << 16 | p(t, e + 1) << 8 | p(t, e + 2),
            r.push(o.charAt(i >> 18)),
            r.push(o.charAt(i >> 12 & 63)),
            r.push(o.charAt(i >> 6 & 63)),
            r.push(o.charAt(63 & i));
        switch (t.length - s) {
        case 1:
            i = p(t, e) << 16,
            r.push(o.charAt(i >> 18) + o.charAt(i >> 12 & 63) + n + n);
            break;
        case 2:
            i = p(t, e) << 16 | p(t, e + 1) << 8,
            r.push(o.charAt(i >> 18) + o.charAt(i >> 12 & 63) + o.charAt(i >> 6 & 63) + n)
        }
        return r.join("")
    }
    ,
    window.btoa || (window.btoa = q.encode)
}(window);
$.RSA = $pt.RSA = function() {
    function t(t, e) {
        return new r(t,e)
    }
    function e(t, e) {
        if (e < t.length + 11)
            return uv_alert("Message too long for RSA"),
            null;
        for (var i = new Array, n = t.length - 1; n >= 0 && e > 0; ) {
            var o = t.charCodeAt(n--);
            i[--e] = o
        }
        i[--e] = 0;
        for (var p = new Y, s = new Array; e > 2; ) {
            for (s[0] = 0; 0 == s[0]; )
                p.nextBytes(s);
            i[--e] = s[0]
        }
        return i[--e] = 2,
        i[--e] = 0,
        new r(i)
    }
    function i() {
        this.n = null,
        this.e = 0,
        this.d = null,
        this.p = null,
        this.q = null,
        this.dmp1 = null,
        this.dmq1 = null,
        this.coeff = null
    }
    function n(e, i) {
        null != e && null != i && e.length > 0 && i.length > 0 ? (this.n = t(e, 16),
        this.e = parseInt(i, 16)) : uv_alert("Invalid RSA public key")
    }
    function o(t) {
        return t.modPowInt(this.e, this.n)
    }
    function p(t) {
        var i = e(t, this.n.bitLength() + 7 >> 3);
        if (null == i)
            return null;
        var n = this.doPublic(i);
        if (null == n)
            return null;
        var o = n.toString(16);
        return 0 == (1 & o.length) ? o : "0" + o
    }
    function r(t, e, i) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }
    function s() {
        return new r(null)
    }
    function a(t, e, i, n, o, p) {
        for (; --p >= 0; ) {
            var r = e * this[t++] + i[n] + o;
            o = Math.floor(r / 67108864),
            i[n++] = 67108863 & r
        }
        return o
    }
    function l(t, e, i, n, o, p) {
        for (var r = 32767 & e, s = e >> 15; --p >= 0; ) {
            var a = 32767 & this[t]
              , l = this[t++] >> 15
              , c = s * a + l * r;
            a = r * a + ((32767 & c) << 15) + i[n] + (1073741823 & o),
            o = (a >>> 30) + (c >>> 15) + s * l + (o >>> 30),
            i[n++] = 1073741823 & a
        }
        return o
    }
    function c(t, e, i, n, o, p) {
        for (var r = 16383 & e, s = e >> 14; --p >= 0; ) {
            var a = 16383 & this[t]
              , l = this[t++] >> 14
              , c = s * a + l * r;
            a = r * a + ((16383 & c) << 14) + i[n] + o,
            o = (a >> 28) + (c >> 14) + s * l,
            i[n++] = 268435455 & a
        }
        return o
    }
    function u(t) {
        return at.charAt(t)
    }
    function g(t, e) {
        var i = lt[t.charCodeAt(e)];
        return null == i ? -1 : i
    }
    function d(t) {
        for (var e = this.t - 1; e >= 0; --e)
            t[e] = this[e];
        t.t = this.t,
        t.s = this.s
    }
    function h(t) {
        this.t = 1,
        this.s = t < 0 ? -1 : 0,
        t > 0 ? this[0] = t : t < -1 ? this[0] = t + DV : this.t = 0
    }
    function f(t) {
        var e = s();
        return e.fromInt(t),
        e
    }
    function _(t, e) {
        var i;
        if (16 == e)
            i = 4;
        else if (8 == e)
            i = 3;
        else if (256 == e)
            i = 8;
        else if (2 == e)
            i = 1;
        else if (32 == e)
            i = 5;
        else {
            if (4 != e)
                return void this.fromRadix(t, e);
            i = 2
        }
        this.t = 0,
        this.s = 0;
        for (var n = t.length, o = !1, p = 0; --n >= 0; ) {
            var s = 8 == i ? 255 & t[n] : g(t, n);
            s < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1,
            0 == p ? this[this.t++] = s : p + i > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - p) - 1) << p,
            this[this.t++] = s >> this.DB - p) : this[this.t - 1] |= s << p,
            (p += i) >= this.DB && (p -= this.DB))
        }
        8 == i && 0 != (128 & t[0]) && (this.s = -1,
        p > 0 && (this[this.t - 1] |= (1 << this.DB - p) - 1 << p)),
        this.clamp(),
        o && r.ZERO.subTo(this, this)
    }
    function m() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t
    }
    function $(t) {
        if (this.s < 0)
            return "-" + this.negate().toString(t);
        var e;
        if (16 == t)
            e = 4;
        else if (8 == t)
            e = 3;
        else if (2 == t)
            e = 1;
        else if (32 == t)
            e = 5;
        else {
            if (4 != t)
                return this.toRadix(t);
            e = 2
        }
        var i, n = (1 << e) - 1, o = !1, p = "", r = this.t, s = this.DB - r * this.DB % e;
        if (r-- > 0)
            for (s < this.DB && (i = this[r] >> s) > 0 && (o = !0,
            p = u(i)); r >= 0; )
                s < e ? (i = (this[r] & (1 << s) - 1) << e - s,
                i |= this[--r] >> (s += this.DB - e)) : (i = this[r] >> (s -= e) & n,
                s <= 0 && (s += this.DB,
                --r)),
                i > 0 && (o = !0),
                o && (p += u(i));
        return o ? p : "0"
    }
    function v() {
        var t = s();
        return r.ZERO.subTo(this, t),
        t
    }
    function y() {
        return this.s < 0 ? this.negate() : this
    }
    function w(t) {
        var e = this.s - t.s;
        if (0 != e)
            return e;
        var i = this.t;
        if (0 != (e = i - t.t))
            return e;
        for (; --i >= 0; )
            if (0 != (e = this[i] - t[i]))
                return e;
        return 0
    }
    function k(t) {
        var e, i = 1;
        return 0 != (e = t >>> 16) && (t = e,
        i += 16),
        0 != (e = t >> 8) && (t = e,
        i += 8),
        0 != (e = t >> 4) && (t = e,
        i += 4),
        0 != (e = t >> 2) && (t = e,
        i += 2),
        0 != (e = t >> 1) && (t = e,
        i += 1),
        i
    }
    function b() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + k(this[this.t - 1] ^ this.s & this.DM)
    }
    function q(t, e) {
        var i;
        for (i = this.t - 1; i >= 0; --i)
            e[i + t] = this[i];
        for (i = t - 1; i >= 0; --i)
            e[i] = 0;
        e.t = this.t + t,
        e.s = this.s
    }
    function S(t, e) {
        for (var i = t; i < this.t; ++i)
            e[i - t] = this[i];
        e.t = Math.max(this.t - t, 0),
        e.s = this.s
    }
    function C(t, e) {
        var i, n = t % this.DB, o = this.DB - n, p = (1 << o) - 1, r = Math.floor(t / this.DB), s = this.s << n & this.DM;
        for (i = this.t - 1; i >= 0; --i)
            e[i + r + 1] = this[i] >> o | s,
            s = (this[i] & p) << n;
        for (i = r - 1; i >= 0; --i)
            e[i] = 0;
        e[r] = s,
        e.t = this.t + r + 1,
        e.s = this.s,
        e.clamp()
    }
    function T(t, e) {
        e.s = this.s;
        var i = Math.floor(t / this.DB);
        if (i >= this.t)
            return void (e.t = 0);
        var n = t % this.DB
          , o = this.DB - n
          , p = (1 << n) - 1;
        e[0] = this[i] >> n;
        for (var r = i + 1; r < this.t; ++r)
            e[r - i - 1] |= (this[r] & p) << o,
            e[r - i] = this[r] >> n;
        n > 0 && (e[this.t - i - 1] |= (this.s & p) << o),
        e.t = this.t - i,
        e.clamp()
    }
    function x(t, e) {
        for (var i = 0, n = 0, o = Math.min(t.t, this.t); i < o; )
            n += this[i] - t[i],
            e[i++] = n & this.DM,
            n >>= this.DB;
        if (t.t < this.t) {
            for (n -= t.s; i < this.t; )
                n += this[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
            n += this.s
        } else {
            for (n += this.s; i < t.t; )
                n -= t[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
            n -= t.s
        }
        e.s = n < 0 ? -1 : 0,
        n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n),
        e.t = i,
        e.clamp()
    }
    function L(t, e) {
        var i = this.abs()
          , n = t.abs()
          , o = i.t;
        for (e.t = o + n.t; --o >= 0; )
            e[o] = 0;
        for (o = 0; o < n.t; ++o)
            e[o + i.t] = i.am(0, n[o], e, o, 0, i.t);
        e.s = 0,
        e.clamp(),
        this.s != t.s && r.ZERO.subTo(e, e)
    }
    function N(t) {
        for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; )
            t[i] = 0;
        for (i = 0; i < e.t - 1; ++i) {
            var n = e.am(i, e[i], t, 2 * i, 0, 1);
            (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV,
            t[i + e.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
        t.s = 0,
        t.clamp()
    }
    function E(t, e, i) {
        var n = t.abs();
        if (!(n.t <= 0)) {
            var o = this.abs();
            if (o.t < n.t)
                return null != e && e.fromInt(0),
                void (null != i && this.copyTo(i));
            null == i && (i = s());
            var p = s()
              , a = this.s
              , l = t.s
              , c = this.DB - k(n[n.t - 1]);
            c > 0 ? (n.lShiftTo(c, p),
            o.lShiftTo(c, i)) : (n.copyTo(p),
            o.copyTo(i));
            var u = p.t
              , g = p[u - 1];
            if (0 != g) {
                var d = g * (1 << this.F1) + (u > 1 ? p[u - 2] >> this.F2 : 0)
                  , h = this.FV / d
                  , f = (1 << this.F1) / d
                  , _ = 1 << this.F2
                  , m = i.t
                  , $ = m - u
                  , v = null == e ? s() : e;
                for (p.dlShiftTo($, v),
                i.compareTo(v) >= 0 && (i[i.t++] = 1,
                i.subTo(v, i)),
                r.ONE.dlShiftTo(u, v),
                v.subTo(p, p); p.t < u; )
                    p[p.t++] = 0;
                for (; --$ >= 0; ) {
                    var y = i[--m] == g ? this.DM : Math.floor(i[m] * h + (i[m - 1] + _) * f);
                    if ((i[m] += p.am(0, y, i, $, 0, u)) < y)
                        for (p.dlShiftTo($, v),
                        i.subTo(v, i); i[m] < --y; )
                            i.subTo(v, i)
                }
                null != e && (i.drShiftTo(u, e),
                a != l && r.ZERO.subTo(e, e)),
                i.t = u,
                i.clamp(),
                c > 0 && i.rShiftTo(c, i),
                a < 0 && r.ZERO.subTo(i, i)
            }
        }
    }
    function P(t) {
        var e = s();
        return this.abs().divRemTo(t, null, e),
        this.s < 0 && e.compareTo(r.ZERO) > 0 && t.subTo(e, e),
        e
    }
    function A(t) {
        this.m = t
    }
    function I(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }
    function Q(t) {
        return t
    }
    function M(t) {
        t.divRemTo(this.m, null, t)
    }
    function D(t, e, i) {
        t.multiplyTo(e, i),
        this.reduce(i)
    }
    function U(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function B() {
        if (this.t < 1)
            return 0;
        var t = this[0];
        if (0 == (1 & t))
            return 0;
        var e = 3 & t;
        return e = e * (2 - (15 & t) * e) & 15,
        e = e * (2 - (255 & t) * e) & 255,
        e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
        e = e * (2 - t * e % this.DV) % this.DV,
        e > 0 ? this.DV - e : -e
    }
    function H(t) {
        this.m = t,
        this.mp = t.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << t.DB - 15) - 1,
        this.mt2 = 2 * t.t
    }
    function O(t) {
        var e = s();
        return t.abs().dlShiftTo(this.m.t, e),
        e.divRemTo(this.m, null, e),
        t.s < 0 && e.compareTo(r.ZERO) > 0 && this.m.subTo(e, e),
        e
    }
    function V(t) {
        var e = s();
        return t.copyTo(e),
        this.reduce(e),
        e
    }
    function j(t) {
        for (; t.t <= this.mt2; )
            t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
            var i = 32767 & t[e]
              , n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (i = e + this.m.t,
            t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV; )
                t[i] -= t.DV,
                t[++i]++
        }
        t.clamp(),
        t.drShiftTo(this.m.t, t),
        t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }
    function R(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    function F(t, e, i) {
        t.multiplyTo(e, i),
        this.reduce(i)
    }
    function G() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }
    function z(t, e) {
        if (t > 4294967295 || t < 1)
            return r.ONE;
        var i = s()
          , n = s()
          , o = e.convert(this)
          , p = k(t) - 1;
        for (o.copyTo(i); --p >= 0; )
            if (e.sqrTo(i, n),
            (t & 1 << p) > 0)
                e.mulTo(n, o, i);
            else {
                var a = i;
                i = n,
                n = a
            }
        return e.revert(i)
    }
    function W(t, e) {
        var i;
        return i = t < 256 || e.isEven() ? new A(e) : new H(e),
        this.exp(t, i)
    }
    function X(t) {
        ut[gt++] ^= 255 & t,
        ut[gt++] ^= t >> 8 & 255,
        ut[gt++] ^= t >> 16 & 255,
        ut[gt++] ^= t >> 24 & 255,
        gt >= ft && (gt -= ft)
    }
    function Z() {
        X((new Date).getTime())
    }
    function K() {
        if (null == ct) {
            for (Z(),
            ct = nt(),
            ct.init(ut),
            gt = 0; gt < ut.length; ++gt)
                ut[gt] = 0;
            gt = 0
        }
        return ct.next()
    }
    function J(t) {
        var e;
        for (e = 0; e < t.length; ++e)
            t[e] = K()
    }
    function Y() {}
    function tt() {
        this.i = 0,
        this.j = 0,
        this.S = new Array
    }
    function et(t) {
        var e, i, n;
        for (e = 0; e < 256; ++e)
            this.S[e] = e;
        for (i = 0,
        e = 0; e < 256; ++e)
            i = i + this.S[e] + t[e % t.length] & 255,
            n = this.S[e],
            this.S[e] = this.S[i],
            this.S[i] = n;
        this.i = 0,
        this.j = 0
    }
    function it() {
        var t;
        return this.i = this.i + 1 & 255,
        this.j = this.j + this.S[this.i] & 255,
        t = this.S[this.i],
        this.S[this.i] = this.S[this.j],
        this.S[this.j] = t,
        this.S[t + this.S[this.i] & 255]
    }
    function nt() {
        return new tt
    }
    function ot(t, e, n) {
        e = "e9a815ab9d6e86abbf33a4ac64e9196d5be44a09bd0ed6ae052914e1a865ac8331fed863de8ea697e9a7f63329e5e23cda09c72570f46775b7e39ea9670086f847d3c9c51963b131409b1e04265d9747419c635404ca651bbcbc87f99b8008f7f5824653e3658be4ba73e4480156b390bb73bc1f8b33578e7a4e12440e9396f2552c1aff1c92e797ebacdc37c109ab7bce2367a19c56a033ee04534723cc2558cb27368f5b9d32c04d12dbd86bbd68b1d99b7c349a8453ea75d1b2e94491ab30acf6c46a36a75b721b312bedf4e7aad21e54e9bcbcf8144c79b6e3c05eb4a1547750d224c0085d80e6da3907c3d945051c13c7c1dcefd6520ee8379c4f5231ed",
        n = "10001";
        var o = new i;
        return o.setPublic(e, n),
        o.encrypt(t)
    }
    i.prototype.doPublic = o,
    i.prototype.setPublic = n,
    i.prototype.encrypt = p;
    var pt;
    "Microsoft Internet Explorer" == navigator.appName ? (r.prototype.am = l,
    pt = 30) : "Netscape" != navigator.appName ? (r.prototype.am = a,
    pt = 26) : (r.prototype.am = c,
    pt = 28),
    r.prototype.DB = pt,
    r.prototype.DM = (1 << pt) - 1,
    r.prototype.DV = 1 << pt;
    r.prototype.FV = Math.pow(2, 52),
    r.prototype.F1 = 52 - pt,
    r.prototype.F2 = 2 * pt - 52;
    var rt, st, at = "0123456789abcdefghijklmnopqrstuvwxyz", lt = new Array;
    for (rt = "0".charCodeAt(0),
    st = 0; st <= 9; ++st)
        lt[rt++] = st;
    for (rt = "a".charCodeAt(0),
    st = 10; st < 36; ++st)
        lt[rt++] = st;
    for (rt = "A".charCodeAt(0),
    st = 10; st < 36; ++st)
        lt[rt++] = st;
    A.prototype.convert = I,
    A.prototype.revert = Q,
    A.prototype.reduce = M,
    A.prototype.mulTo = D,
    A.prototype.sqrTo = U,
    H.prototype.convert = O,
    H.prototype.revert = V,
    H.prototype.reduce = j,
    H.prototype.mulTo = F,
    H.prototype.sqrTo = R,
    r.prototype.copyTo = d,
    r.prototype.fromInt = h,
    r.prototype.fromString = _,
    r.prototype.clamp = m,
    r.prototype.dlShiftTo = q,
    r.prototype.drShiftTo = S,
    r.prototype.lShiftTo = C,
    r.prototype.rShiftTo = T,
    r.prototype.subTo = x,
    r.prototype.multiplyTo = L,
    r.prototype.squareTo = N,
    r.prototype.divRemTo = E,
    r.prototype.invDigit = B,
    r.prototype.isEven = G,
    r.prototype.exp = z,
    r.prototype.toString = $,
    r.prototype.negate = v,
    r.prototype.abs = y,
    r.prototype.compareTo = w,
    r.prototype.bitLength = b,
    r.prototype.mod = P,
    r.prototype.modPowInt = W,
    r.ZERO = f(0),
    r.ONE = f(1);
    var ct, ut, gt;
    if (null == ut) {
        ut = new Array,
        gt = 0;
        var dt;
        if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random) {
            var ht = window.crypto.random(32);
            for (dt = 0; dt < ht.length; ++dt)
                ut[gt++] = 255 & ht.charCodeAt(dt)
        }
        for (; gt < ft; )
            dt = Math.floor(65536 * Math.random()),
            ut[gt++] = dt >>> 8,
            ut[gt++] = 255 & dt;
        gt = 0,
        Z()
    }
    Y.prototype.nextBytes = J,
    tt.prototype.init = et,
    tt.prototype.next = it;
    var ft = 256;
    return {
        rsa_encrypt: ot
    }
}();
!function(t) {
    function e() {
        return Math.round(4294967295 * Math.random())
    }
    function i(t, e, i) {
        (!i || i > 4) && (i = 4);
        for (var n = 0, o = e; o < e + i; o++)
            n <<= 8,
            n |= t[o];
        return (4294967295 & n) >>> 0
    }
    function n(t, e, i) {
        t[e + 3] = i >> 0 & 255,
        t[e + 2] = i >> 8 & 255,
        t[e + 1] = i >> 16 & 255,
        t[e + 0] = i >> 24 & 255
    }
    function o(t) {
        if (!t)
            return "";
        for (var e = "", i = 0; i < t.length; i++) {
            var n = Number(t[i]).toString(16);
            1 == n.length && (n = "0" + n),
            e += n
        }
        return e
    }
    function p(t) {
        for (var e = "", i = 0; i < t.length; i += 2)
            e += String.fromCharCode(parseInt(t.substr(i, 2), 16));
        return e
    }
    function r(t, e) {
        if (!t)
            return "";
        e && (t = s(t));
        for (var i = [], n = 0; n < t.length; n++)
            i[n] = t.charCodeAt(n);
        return o(i)
    }
    function s(t) {
        var e, i, n = [], o = t.length;
        for (e = 0; e < o; e++)
            i = t.charCodeAt(e),
            i > 0 && i <= 127 ? n.push(t.charAt(e)) : i >= 128 && i <= 2047 ? n.push(String.fromCharCode(192 | i >> 6 & 31), String.fromCharCode(128 | 63 & i)) : i >= 2048 && i <= 65535 && n.push(String.fromCharCode(224 | i >> 12 & 15), String.fromCharCode(128 | i >> 6 & 63), String.fromCharCode(128 | 63 & i));
        return n.join("")
    }
    function a(t) {
        m = new Array(8),
        $ = new Array(8),
        v = y = 0,
        b = !0,
        _ = 0;
        var i = t.length
          , n = 0;
        _ = (i + 10) % 8,
        0 != _ && (_ = 8 - _),
        w = new Array(i + _ + 10),
        m[0] = 255 & (248 & e() | _);
        for (var o = 1; o <= _; o++)
            m[o] = 255 & e();
        _++;
        for (var o = 0; o < 8; o++)
            $[o] = 0;
        for (n = 1; n <= 2; )
            _ < 8 && (m[_++] = 255 & e(),
            n++),
            8 == _ && c();
        for (var o = 0; i > 0; )
            _ < 8 && (m[_++] = t[o++],
            i--),
            8 == _ && c();
        for (n = 1; n <= 7; )
            _ < 8 && (m[_++] = 0,
            n++),
            8 == _ && c();
        return w
    }
    function l(t) {
        var e = 0
          , i = new Array(8)
          , n = t.length;
        if (k = t,
        n % 8 != 0 || n < 16)
            return null;
        if ($ = g(t),
        _ = 7 & $[0],
        (e = n - _ - 10) < 0)
            return null;
        for (var o = 0; o < i.length; o++)
            i[o] = 0;
        w = new Array(e),
        y = 0,
        v = 8,
        _++;
        for (var p = 1; p <= 2; )
            if (_ < 8 && (_++,
            p++),
            8 == _ && (i = t,
            !d()))
                return null;
        for (var o = 0; 0 != e; )
            if (_ < 8 && (w[o] = 255 & (i[y + _] ^ $[_]),
            o++,
            e--,
            _++),
            8 == _ && (i = t,
            y = v - 8,
            !d()))
                return null;
        for (p = 1; p < 8; p++) {
            if (_ < 8) {
                if (0 != (i[y + _] ^ $[_]))
                    return null;
                _++
            }
            if (8 == _ && (i = t,
            y = v,
            !d()))
                return null
        }
        return w
    }
    function c() {
        for (var t = 0; t < 8; t++)
            m[t] ^= b ? $[t] : w[y + t];
        for (var e = u(m), t = 0; t < 8; t++)
            w[v + t] = e[t] ^ $[t],
            $[t] = m[t];
        y = v,
        v += 8,
        _ = 0,
        b = !1
    }
    function u(t) {
        for (var e = 16, o = i(t, 0, 4), p = i(t, 4, 4), r = i(f, 0, 4), s = i(f, 4, 4), a = i(f, 8, 4), l = i(f, 12, 4), c = 0; e-- > 0; )
            c += 2654435769,
            c = (4294967295 & c) >>> 0,
            o += (p << 4) + r ^ p + c ^ (p >>> 5) + s,
            o = (4294967295 & o) >>> 0,
            p += (o << 4) + a ^ o + c ^ (o >>> 5) + l,
            p = (4294967295 & p) >>> 0;
        var u = new Array(8);
        return n(u, 0, o),
        n(u, 4, p),
        u
    }
    function g(t) {
        for (var e = 16, o = i(t, 0, 4), p = i(t, 4, 4), r = i(f, 0, 4), s = i(f, 4, 4), a = i(f, 8, 4), l = i(f, 12, 4), c = 3816266640; e-- > 0; )
            p -= (o << 4) + a ^ o + c ^ (o >>> 5) + l,
            p = (4294967295 & p) >>> 0,
            o -= (p << 4) + r ^ p + c ^ (p >>> 5) + s,
            o = (4294967295 & o) >>> 0,
            c -= 2654435769,
            c = (4294967295 & c) >>> 0;
        var u = new Array(8);
        return n(u, 0, o),
        n(u, 4, p),
        u
    }
    function d() {
        for (var t = (k.length,
        0); t < 8; t++)
            $[t] ^= k[v + t];
        return $ = g($),
        v += 8,
        _ = 0,
        !0
    }
    function h(t, e) {
        var i = [];
        if (e)
            for (var n = 0; n < t.length; n++)
                i[n] = 255 & t.charCodeAt(n);
        else
            for (var o = 0, n = 0; n < t.length; n += 2)
                i[o++] = parseInt(t.substr(n, 2), 16);
        return i
    }
    var f = ""
      , _ = 0
      , m = []
      , $ = []
      , v = 0
      , y = 0
      , w = []
      , k = []
      , b = !0;
     TEA = {
        encrypt: function(t, e) {
            return o(a(h(t, e)))
        },
        enAsBase64: function(t, e) {
            for (var i = h(t, e), n = a(i), o = "", p = 0; p < n.length; p++)
                o += String.fromCharCode(n[p]);
            return btoa(o)
        },
        decrypt: function(t) {
            return o(l(h(t, !1)))
        },
        initkey: function(t, e) {
            f = h(t, e)
        },
        bytesToStr: p,
        strToBytes: r,
        bytesInStr: o,
        dataFromStr: h
    };
    var q = {};
    q.PADCHAR = "=",
    q.ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    q.getbyte = function(t, e) {
        var i = t.charCodeAt(e);
        if (i > 255)
            throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return i
    }
    ,
    q.encode = function(t) {
        if (1 != arguments.length)
            throw "SyntaxError: Not enough arguments";
        var e, i, n = q.PADCHAR, o = q.ALPHA, p = q.getbyte, r = [];
        t = "" + t;
        var s = t.length - t.length % 3;
        if (0 == t.length)
            return t;
        for (e = 0; e < s; e += 3)
            i = p(t, e) << 16 | p(t, e + 1) << 8 | p(t, e + 2),
            r.push(o.charAt(i >> 18)),
            r.push(o.charAt(i >> 12 & 63)),
            r.push(o.charAt(i >> 6 & 63)),
            r.push(o.charAt(63 & i));
        switch (t.length - s) {
        case 1:
            i = p(t, e) << 16,
            r.push(o.charAt(i >> 18) + o.charAt(i >> 12 & 63) + n + n);
            break;
        case 2:
            i = p(t, e) << 16 | p(t, e + 1) << 8,
            r.push(o.charAt(i >> 18) + o.charAt(i >> 12 & 63) + o.charAt(i >> 6 & 63) + n)
        }
        return r.join("")
    }
    ,
    window.btoa || (window.btoa = q.encode)
}(window);
$.Encryption = $pt.Encryption = function() {
    function t(t) {
        return e(t)
    }
    function e(t) {
        return u(i(c(t), t.length * m))
    }
    function i(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var i = 1732584193, n = -271733879, l = -1732584194, c = 271733878, u = 0; u < t.length; u += 16) {
            var g = i
              , d = n
              , h = l
              , f = c;
            i = o(i, n, l, c, t[u + 0], 7, -680876936),
            c = o(c, i, n, l, t[u + 1], 12, -389564586),
            l = o(l, c, i, n, t[u + 2], 17, 606105819),
            n = o(n, l, c, i, t[u + 3], 22, -1044525330),
            i = o(i, n, l, c, t[u + 4], 7, -176418897),
            c = o(c, i, n, l, t[u + 5], 12, 1200080426),
            l = o(l, c, i, n, t[u + 6], 17, -1473231341),
            n = o(n, l, c, i, t[u + 7], 22, -45705983),
            i = o(i, n, l, c, t[u + 8], 7, 1770035416),
            c = o(c, i, n, l, t[u + 9], 12, -1958414417),
            l = o(l, c, i, n, t[u + 10], 17, -42063),
            n = o(n, l, c, i, t[u + 11], 22, -1990404162),
            i = o(i, n, l, c, t[u + 12], 7, 1804603682),
            c = o(c, i, n, l, t[u + 13], 12, -40341101),
            l = o(l, c, i, n, t[u + 14], 17, -1502002290),
            n = o(n, l, c, i, t[u + 15], 22, 1236535329),
            i = p(i, n, l, c, t[u + 1], 5, -165796510),
            c = p(c, i, n, l, t[u + 6], 9, -1069501632),
            l = p(l, c, i, n, t[u + 11], 14, 643717713),
            n = p(n, l, c, i, t[u + 0], 20, -373897302),
            i = p(i, n, l, c, t[u + 5], 5, -701558691),
            c = p(c, i, n, l, t[u + 10], 9, 38016083),
            l = p(l, c, i, n, t[u + 15], 14, -660478335),
            n = p(n, l, c, i, t[u + 4], 20, -405537848),
            i = p(i, n, l, c, t[u + 9], 5, 568446438),
            c = p(c, i, n, l, t[u + 14], 9, -1019803690),
            l = p(l, c, i, n, t[u + 3], 14, -187363961),
            n = p(n, l, c, i, t[u + 8], 20, 1163531501),
            i = p(i, n, l, c, t[u + 13], 5, -1444681467),
            c = p(c, i, n, l, t[u + 2], 9, -51403784),
            l = p(l, c, i, n, t[u + 7], 14, 1735328473),
            n = p(n, l, c, i, t[u + 12], 20, -1926607734),
            i = r(i, n, l, c, t[u + 5], 4, -378558),
            c = r(c, i, n, l, t[u + 8], 11, -2022574463),
            l = r(l, c, i, n, t[u + 11], 16, 1839030562),
            n = r(n, l, c, i, t[u + 14], 23, -35309556),
            i = r(i, n, l, c, t[u + 1], 4, -1530992060),
            c = r(c, i, n, l, t[u + 4], 11, 1272893353),
            l = r(l, c, i, n, t[u + 7], 16, -155497632),
            n = r(n, l, c, i, t[u + 10], 23, -1094730640),
            i = r(i, n, l, c, t[u + 13], 4, 681279174),
            c = r(c, i, n, l, t[u + 0], 11, -358537222),
            l = r(l, c, i, n, t[u + 3], 16, -722521979),
            n = r(n, l, c, i, t[u + 6], 23, 76029189),
            i = r(i, n, l, c, t[u + 9], 4, -640364487),
            c = r(c, i, n, l, t[u + 12], 11, -421815835),
            l = r(l, c, i, n, t[u + 15], 16, 530742520),
            n = r(n, l, c, i, t[u + 2], 23, -995338651),
            i = s(i, n, l, c, t[u + 0], 6, -198630844),
            c = s(c, i, n, l, t[u + 7], 10, 1126891415),
            l = s(l, c, i, n, t[u + 14], 15, -1416354905),
            n = s(n, l, c, i, t[u + 5], 21, -57434055),
            i = s(i, n, l, c, t[u + 12], 6, 1700485571),
            c = s(c, i, n, l, t[u + 3], 10, -1894986606),
            l = s(l, c, i, n, t[u + 10], 15, -1051523),
            n = s(n, l, c, i, t[u + 1], 21, -2054922799),
            i = s(i, n, l, c, t[u + 8], 6, 1873313359),
            c = s(c, i, n, l, t[u + 15], 10, -30611744),
            l = s(l, c, i, n, t[u + 6], 15, -1560198380),
            n = s(n, l, c, i, t[u + 13], 21, 1309151649),
            i = s(i, n, l, c, t[u + 4], 6, -145523070),
            c = s(c, i, n, l, t[u + 11], 10, -1120210379),
            l = s(l, c, i, n, t[u + 2], 15, 718787259),
            n = s(n, l, c, i, t[u + 9], 21, -343485551),
            i = a(i, g),
            n = a(n, d),
            l = a(l, h),
            c = a(c, f)
        }
        return 16 == v ? Array(n, l) : Array(i, n, l, c)
    }
    function n(t, e, i, n, o, p) {
        return a(l(a(a(e, t), a(n, p)), o), i)
    }
    function o(t, e, i, o, p, r, s) {
        return n(e & i | ~e & o, t, e, p, r, s)
    }
    function p(t, e, i, o, p, r, s) {
        return n(e & o | i & ~o, t, e, p, r, s)
    }
    function r(t, e, i, o, p, r, s) {
        return n(e ^ i ^ o, t, e, p, r, s)
    }
    function s(t, e, i, o, p, r, s) {
        return n(i ^ (e | ~o), t, e, p, r, s)
    }
    function a(t, e) {
        var i = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
    }
    function l(t, e) {
        return t << e | t >>> 32 - e
    }
    function c(t) {
        for (var e = Array(), i = (1 << m) - 1, n = 0; n < t.length * m; n += m)
            e[n >> 5] |= (t.charCodeAt(n / m) & i) << n % 32;
        return e
    }
    function u(t) {
        for (var e = _ ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * t.length; n++)
            i += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
        return i
    }
    function g(t) {
        for (var e = [], i = 0; i < t.length; i += 2)
            e.push(String.fromCharCode(parseInt(t.substr(i, 2), 16)));
        return e.join("")
    }
    function d(t, e) {
        if (!(Math.random() > (e || 1)))
            try {
                var i = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                document.createElement("img").src = i
            } catch (t) {}
    }
    function h(e, i, n, o) {
        n = n || "",
        e = e || "";
        for (var p = o ? e : t(e), r = g(p), s = t(r + i), a = TEA.strToBytes(n.toUpperCase(), !0), l = Number(a.length / 2).toString(16); l.length < 4; )
            l = "0" + l;
        TEA.initkey(s);
        var c = TEA.encrypt(p + TEA.strToBytes(i) + l + a);
        TEA.initkey("");
        for (var u = Number(c.length / 2).toString(16); u.length < 4; )
            u = "0" + u;
        var h = $pt.RSA.rsa_encrypt(g(u + c));
        return window.btoa(g(h)).replace(/[\/\+=]/g, function(t) {
            return {
                "/": "-",
                "+": "*",
                "=": "_"
            }[t]
        })
    }
    function f(e, i, n) {
        var o = n ? e : t(e)
          , p = o + i.toUpperCase();
        return $.RSA.rsa_encrypt(p)
    }
    var _ = 1
      , m = 8
      , v = 32;
    return {
        getEncryption: h,
        getRSAEncryption: f,
        md5: t
    }
}();

function test(password,salt,verifycode){
	return $.Encryption.getEncryption(password, salt, verifycode, undefined);
};