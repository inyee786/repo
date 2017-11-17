function randomString(e, t) { for (var n = "", i = e; i > 0; --i) n += t[Math.floor(Math.random() * t.length)]; return n }

function genAccessKey() { return randomString(20, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ") }

function genSecretKey() { return randomString(40, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") }

function track(e, t) { var n = "/event/" + t.type + "/" + e;
    $.get(n) }

function hashToEvent(e) { return e.substr(1).replace(/-/g, ":") }

function pathToEvent(e) { var t = e.replace(/^\/+/g, ""); return (t = t.substring(0, t.lastIndexOf("."))) || "index" }

function getSessionId() { var e = sessionStorage.getItem("sessionId"); return e || (e = (new Date).getTime().toString(16), sessionStorage.setItem("sessionId", e)), e }
if (function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) { "use strict";

        function n(e, t) { var n = (t = t || te).createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n) }

        function i(e) { var t = !!e && "length" in e && e.length,
                n = pe.type(e); return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

        function r(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

        function o(e, t, n) { return pe.isFunction(t) ? pe.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? pe.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? pe.grep(e, function(e) { return ae.call(t, e) > -1 !== n }) : Ce.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) { return ae.call(t, e) > -1 !== n && 1 === e.nodeType })) }

        function a(e, t) { for (;
                (e = e[t]) && 1 !== e.nodeType;); return e }

        function s(e) { var t = {}; return pe.each(e.match(Ae) || [], function(e, n) { t[n] = !0 }), t }

        function c(e) { return e }

        function l(e) { throw e }

        function u(e, t, n, i) { var r; try { e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }

        function d() { te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), pe.ready() }

        function f() { this.expando = pe.expando + f.uid++ }

        function h(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e) }

        function p(e, t, n) { var i; if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(He, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) { try { n = h(n) } catch (e) {}
                    _e.set(e, t, n) } else n = void 0;
            return n }

        function m(e, t, n, i) { var r, o = 1,
                a = 20,
                s = i ? function() { return i.cur() } : function() { return pe.css(e, t, "") },
                c = s(),
                l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                u = (pe.cssNumber[t] || "px" !== l && +c) && Fe.exec(pe.css(e, t)); if (u && u[3] !== l) { l = l || u[3], n = n || [], u = +c || 1;
                do { o = o || ".5", u /= o, pe.style(e, t, u + l) } while (o !== (o = s() / c) && 1 !== o && --a) } return n && (u = +u || +c || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = r)), r }

        function g(e) { var t, n = e.ownerDocument,
                i = e.nodeName,
                r = ze[i]; return r || (t = n.body.appendChild(n.createElement(i)), r = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ze[i] = r, r) }

        function v(e, t) { for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Oe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Me(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", Oe.set(i, "display", n))); for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]); return e }

        function y(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? pe.merge([e], n) : n }

        function b(e, t) { for (var n = 0, i = e.length; n < i; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval")) }

        function k(e, t, n, i, r) { for (var o, a, s, c, l, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === pe.type(o)) pe.merge(f, o.nodeType ? [o] : o);
                    else if (Qe.test(o)) { for (a = a || d.appendChild(t.createElement("div")), s = (Ue.exec(o) || ["", ""])[1].toLowerCase(), c = Ke[s] || Ke._default, a.innerHTML = c[1] + pe.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
                pe.merge(f, a.childNodes), (a = d.firstChild).textContent = "" } else f.push(t.createTextNode(o)); for (d.textContent = "", h = 0; o = f[h++];)
                if (i && pe.inArray(o, i) > -1) r && r.push(o);
                else if (l = pe.contains(o.ownerDocument, o), a = y(d.appendChild(o), "script"), l && b(a), n)
                for (u = 0; o = a[u++];) Ve.test(o.type || "") && n.push(o); return d }

        function w() { return !0 }

        function x() { return !1 }

        function T() { try { return te.activeElement } catch (e) {} }

        function C(e, t, n, i, r, o) { var a, s; if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = void 0); for (s in t) C(e, s, n, i, t[s], o); return e } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = x;
            else if (!r) return e; return 1 === o && (a = r, r = function(e) { return pe().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function() { pe.event.add(this, t, r, i, n) }) }

        function E(e, t) { return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? pe(">tbody", e)[0] || e : e }

        function S(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

        function $(e) { var t = nt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function N(e, t) { var n, i, r, o, a, s, c, l; if (1 === t.nodeType) { if (Oe.hasData(e) && (o = Oe.access(e), a = Oe.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (r in l)
                        for (n = 0, i = l[r].length; n < i; n++) pe.event.add(t, r, l[r][n]) }
                _e.hasData(e) && (s = _e.access(e), c = pe.extend({}, s), _e.set(t, c)) } }

        function A(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

        function j(e, t, i, r) { t = re.apply([], t); var o, a, s, c, l, u, d = 0,
                f = e.length,
                h = f - 1,
                p = t[0],
                m = pe.isFunction(p); if (m || f > 1 && "string" == typeof p && !fe.checkClone && tt.test(p)) return e.each(function(n) { var o = e.eq(n);
                m && (t[0] = p.call(this, n, o.html())), j(o, t, i, r) }); if (f && (o = k(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) { for (c = (s = pe.map(y(o, "script"), S)).length; d < f; d++) l = o, d !== h && (l = pe.clone(l, !0, !0), c && pe.merge(s, y(l, "script"))), i.call(e[d], l, d); if (c)
                    for (u = s[s.length - 1].ownerDocument, pe.map(s, $), d = 0; d < c; d++) l = s[d], Ve.test(l.type || "") && !Oe.access(l, "globalEval") && pe.contains(u, l) && (l.src ? pe._evalUrl && pe._evalUrl(l.src) : n(l.textContent.replace(it, ""), u)) } return e }

        function q(e, t, n) { for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(y(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i)); return e }

        function D(e, t, n) { var i, r, o, a, s = e.style; return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !fe.pixelMarginRight() && ot.test(a) && rt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a }

        function L(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

        function O(e) { if (e in ft) return e; for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
                if ((e = dt[n] + t) in ft) return e }

        function _(e) { var t = pe.cssProps[e]; return t || (t = pe.cssProps[e] = O(e) || e), t }

        function P(e, t, n) { var i = Fe.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

        function H(e, t, n, i, r) { var o, a = 0; for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Ie[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Ie[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Ie[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Ie[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Ie[o] + "Width", !0, r))); return a }

        function R(e, t, n) { var i, r = at(e),
                o = D(e, t, r),
                a = "border-box" === pe.css(e, "boxSizing", !1, r); return ot.test(o) ? o : (i = a && (fe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + H(e, t, n || (a ? "border" : "content"), i, r) + "px") }

        function F(e, t, n, i, r) { return new F.prototype.init(e, t, n, i, r) }

        function I() { pt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(I) : e.setTimeout(I, pe.fx.interval), pe.fx.tick()) }

        function M() { return e.setTimeout(function() { ht = void 0 }), ht = pe.now() }

        function B(e, t) { var n, i = 0,
                r = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ie[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r }

        function z(e, t, n) { for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e)) return i }

        function W(e, t) { var n, i, r, o, a; for (n in e)
                if (i = pe.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = pe.cssHooks[i]) && "expand" in a) { o = a.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r }

        function U(e, t, n) { var i, r, o = 0,
                a = U.prefilters.length,
                s = pe.Deferred().always(function() { delete c.elem }),
                c = function() { if (r) return !1; for (var t = ht || M(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(i); return s.notifyWith(e, [l, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
                l = s.promise({ elem: e, props: pe.extend({}, t), opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ht || M(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(i), i }, stop: function(t) { var n = 0,
                            i = t ? l.tweens.length : 0; if (r) return this; for (r = !0; n < i; n++) l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }),
                u = l.props; for (W(u, l.opts.specialEasing); o < a; o++)
                if (i = U.prefilters[o].call(l, e, u, l.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(u, z, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), pe.fx.timer(pe.extend(c, { elem: e, anim: l, queue: l.opts.queue })), l }

        function V(e) { return (e.match(Ae) || []).join(" ") }

        function K(e) { return e.getAttribute && e.getAttribute("class") || "" }

        function Q(e, t, n, i) { var r; if (Array.isArray(t)) pe.each(t, function(t, r) { n || St.test(e) ? i(e, r) : Q(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (r in t) Q(e + "[" + r + "]", t[r], n, i) }

        function Y(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var i, r = 0,
                    o = t.toLowerCase().match(Ae) || []; if (pe.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

        function X(e, t, n, i) {
            function r(s) { var c; return o[s] = !0, pe.each(e[s] || [], function(e, s) { var l = s(t, n, i); return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1) }), c } var o = {},
                a = e === Rt; return r(t.dataTypes[0]) || !o["*"] && r("*") }

        function G(e, t) { var n, i, r = pe.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && pe.extend(!0, e, i), e }

        function J(e, t, n) { for (var i, r, o, a, s = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) { c.unshift(r); break }
            if (c[0] in n) o = c[0];
            else { for (r in n) { if (!c[0] || e.converters[r + " " + c[0]]) { o = r; break }
                    a || (a = r) }
                o = o || a } if (o) return o !== c[0] && c.unshift(o), n[o] }

        function Z(e, t, n, i) { var r, o, a, s, c, l = {},
                u = e.dataTypes.slice(); if (u[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                    if ("*" === o) o = c;
                    else if ("*" !== c && c !== o) { if (!(a = l[c + " " + o] || l["* " + o]))
                    for (r in l)
                        if ((s = r.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[r] : !0 !== l[r] && (o = s[0], u.unshift(s[1])); break }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o } } } return { state: "success", data: t } } var ee = [],
            te = e.document,
            ne = Object.getPrototypeOf,
            ie = ee.slice,
            re = ee.concat,
            oe = ee.push,
            ae = ee.indexOf,
            se = {},
            ce = se.toString,
            le = se.hasOwnProperty,
            ue = le.toString,
            de = ue.call(Object),
            fe = {},
            he = "3.2.1",
            pe = function(e, t) { return new pe.fn.init(e, t) },
            me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ge = /^-ms-/,
            ve = /-([a-z])/g,
            ye = function(e, t) { return t.toUpperCase() };
        pe.fn = pe.prototype = { jquery: he, constructor: pe, length: 0, toArray: function() { return ie.call(this) }, get: function(e) { return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = pe.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return pe.each(this, e) }, map: function(e) { return this.pushStack(pe.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(ie.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                    n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: oe, sort: ee.sort, splice: ee.splice }, pe.extend = pe.fn.extend = function() { var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (l && i && (pe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {}, a[t] = pe.extend(l, o, i)) : void 0 !== i && (a[t] = i));
            return a }, pe.extend({ expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isFunction: function(e) { return "function" === pe.type(e) }, isWindow: function(e) { return null != e && e === e.window }, isNumeric: function(e) { var t = pe.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== ce.call(e) || (t = ne(e)) && ("function" != typeof(n = le.call(t, "constructor") && t.constructor) || ue.call(n) !== de)) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ce.call(e)] || "object" : typeof e }, globalEval: function(e) { n(e) }, camelCase: function(e) { return e.replace(ge, "ms-").replace(ve, ye) }, each: function(e, t) { var n, r = 0; if (i(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(me, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : ae.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e }, grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]); return i }, map: function(e, t, n) { var r, o, a = 0,
                    s = []; if (i(e))
                    for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, n)) && s.push(o); return re.apply([], s) }, guid: 1, proxy: function(e, t) { var n, i, r; if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = ie.call(arguments, 2), r = function() { return e.apply(t || this, i.concat(ie.call(arguments))) }, r.guid = e.guid = e.guid || pe.guid++, r }, now: Date.now, support: fe }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { se["[object " + t + "]"] = t.toLowerCase() }); var be = function(e) {
            function t(e, t, n, i) { var r, o, a, s, c, u, f, h = t && t.ownerDocument,
                    p = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n; if (!i && ((t ? t.ownerDocument || t : F) !== q && j(t), t = t || q, L)) { if (11 !== p && (c = me.exec(e)))
                        if (r = c[1]) { if (9 === p) { if (!(a = t.getElementById(r))) return n; if (a.id === r) return n.push(a), n } else if (h && (a = h.getElementById(r)) && H(t, a) && a.id === r) return n.push(a), n } else { if (c[2]) return X.apply(n, t.getElementsByTagName(e)), n; if ((r = c[3]) && k.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(r)), n }
                    if (k.qsa && !W[e + " "] && (!O || !O.test(e))) { if (1 !== p) h = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) { for ((s = t.getAttribute("id")) ? s = s.replace(be, ke) : t.setAttribute("id", s = R), o = (u = C(e)).length; o--;) u[o] = "#" + s + " " + d(u[o]);
                            f = u.join(","), h = ge.test(e) && l(t.parentNode) || t } if (f) try { return X.apply(n, h.querySelectorAll(f)), n } catch (e) {} finally { s === R && t.removeAttribute("id") } } } return S(e.replace(oe, "$1"), t, n, i) }

            function n() {
                function e(n, i) { return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i } var t = []; return e }

            function i(e) { return e[R] = !0, e }

            function r(e) { var t = q.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t }

            function a(e, t) { var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i) return i; if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1 }

            function s(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && xe(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

            function c(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r])) }) }) }

            function l(e) { return e && void 0 !== e.getElementsByTagName && e }

            function u() {}

            function d(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

            function f(e, t, n) { var i = t.dir,
                    r = t.next,
                    o = r || i,
                    a = n && "parentNode" === o,
                    s = M++; return t.first ? function(t, n, r) { for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, r);
                    return !1 } : function(t, n, c) { var l, u, d, f = [I, s]; if (c) { for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, c)) return !0 } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a)
                                if (d = t[R] || (t[R] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else { if ((l = u[o]) && l[0] === I && l[1] === s) return f[2] = l[2]; if (u[o] = f, f[2] = e(t, n, c)) return !0 } return !1 } }

            function h(e) { return e.length > 1 ? function(t, n, i) { for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0 } : e[0] }

            function p(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

            function m(e, t, n, i, r) { for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s))); return a }

            function g(e, t, n, r, o, a) { return r && !r[R] && (r = g(r)), o && !o[R] && (o = g(o, a)), i(function(i, a, s, c) { var l, u, d, f = [],
                        h = [],
                        g = a.length,
                        v = i || p(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : m(v, f, e, s, c),
                        b = n ? o || (i ? e : g || r) ? [] : a : y; if (n && n(y, b, s, c), r)
                        for (l = m(b, h), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (b[h[u]] = !(y[h[u]] = d)); if (i) { if (o || e) { if (o) { for (l = [], u = b.length; u--;)(d = b[u]) && l.push(y[u] = d);
                                o(null, b = [], l, c) } for (u = b.length; u--;)(d = b[u]) && (l = o ? J(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d)) } } else b = m(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, c) : X.apply(a, b) }) }

            function v(e) { for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, c = f(function(e) { return e === t }, a, !0), l = f(function(e) { return J(t, e) > -1 }, a, !0), u = [function(e, n, i) { var r = !o && (i || n !== $) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i)); return t = null, r }]; s < r; s++)
                    if (n = w.relative[e[s].type]) u = [f(h(u), n)];
                    else { if ((n = w.filter[e[s].type].apply(null, e[s].matches))[R]) { for (i = ++s; i < r && !w.relative[e[i].type]; i++); return g(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && d(e)) }
                        u.push(n) }
                return h(u) }

            function y(e, n) { var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, c, l) { var u, d, f, h = 0,
                            p = "0",
                            g = i && [],
                            v = [],
                            y = $,
                            b = i || o && w.find.TAG("*", l),
                            k = I += null == y ? 1 : Math.random() || .1,
                            x = b.length; for (l && ($ = a === q || a || l); p !== x && null != (u = b[p]); p++) { if (o && u) { for (d = 0, a || u.ownerDocument === q || (j(u), s = !L); f = e[d++];)
                                    if (f(u, a || q, s)) { c.push(u); break }
                                l && (I = k) }
                            r && ((u = !f && u) && h--, i && g.push(u)) } if (h += p, r && p !== h) { for (d = 0; f = n[d++];) f(g, v, a, s); if (i) { if (h > 0)
                                    for (; p--;) g[p] || v[p] || (v[p] = Q.call(c));
                                v = m(v) }
                            X.apply(c, v), l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(c) } return l && (I = k, $ = y), g }; return r ? i(a) : a } var b, k, w, x, T, C, E, S, $, N, A, j, q, D, L, O, _, P, H, R = "sizzle" + 1 * new Date,
                F = e.document,
                I = 0,
                M = 0,
                B = n(),
                z = n(),
                W = n(),
                U = function(e, t) { return e === t && (A = !0), 0 },
                V = {}.hasOwnProperty,
                K = [],
                Q = K.pop,
                Y = K.push,
                X = K.push,
                G = K.slice,
                J = function(e, t) { for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1 },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                re = new RegExp(ee + "+", "g"),
                oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                ae = new RegExp("^" + ee + "*," + ee + "*"),
                se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                le = new RegExp(ie),
                ue = new RegExp("^" + te + "$"),
                de = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + Z + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
                fe = /^(?:input|select|textarea|button)$/i,
                he = /^h\d$/i,
                pe = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ge = /[+~]/,
                ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                ye = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ke = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                we = function() { j() },
                xe = f(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { X.apply(K = G.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType } catch (e) { X = { apply: K.length ? function(e, t) { Y.apply(e, G.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1 } } }
            k = t.support = {}, T = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, j = t.setDocument = function(e) { var t, n, i = e ? e.ownerDocument || e : F; return i !== q && 9 === i.nodeType && i.documentElement ? (q = i, D = q.documentElement, L = !T(q), F !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), k.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), k.getElementsByTagName = r(function(e) { return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length }), k.getElementsByClassName = pe.test(q.getElementsByClassName), k.getById = r(function(e) { return D.appendChild(e).id = R, !q.getElementsByName || !q.getElementsByName(R).length }), k.getById ? (w.filter.ID = function(e) { var t = e.replace(ve, ye); return function(e) { return e.getAttribute("id") === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && L) { var n = t.getElementById(e); return n ? [n] : [] } }) : (w.filter.ID = function(e) { var t = e.replace(ve, ye); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && L) { var n, i, r, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), w.find.TAG = k.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i } return o }, w.find.CLASS = k.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e) }, _ = [], O = [], (k.qsa = pe.test(q.querySelectorAll)) && (r(function(e) { D.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || O.push(".#.+[+~]") }), r(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = q.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:") })), (k.matchesSelector = pe.test(P = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) { k.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), _.push("!=", ie) }), O = O.length && new RegExp(O.join("|")), _ = _.length && new RegExp(_.join("|")), t = pe.test(D.compareDocumentPosition), H = t || pe.test(D.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1 }, U = t ? function(e, t) { if (e === t) return A = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === F && H(F, e) ? -1 : t === q || t.ownerDocument === F && H(F, t) ? 1 : N ? J(N, e) - J(N, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return A = !0, 0; var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        c = [t]; if (!r || !o) return e === q ? -1 : t === q ? 1 : r ? -1 : o ? 1 : N ? J(N, e) - J(N, t) : 0; if (r === o) return a(e, t); for (n = e; n = n.parentNode;) s.unshift(n); for (n = t; n = n.parentNode;) c.unshift(n); for (; s[i] === c[i];) i++; return i ? a(s[i], c[i]) : s[i] === F ? -1 : c[i] === F ? 1 : 0 }, q) : q }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) { if ((e.ownerDocument || e) !== q && j(e), n = n.replace(ce, "='$1']"), k.matchesSelector && L && !W[n + " "] && (!_ || !_.test(n)) && (!O || !O.test(n))) try { var i = P.call(e, n); if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) {}
                return t(n, q, null, [e]).length > 0 }, t.contains = function(e, t) { return (e.ownerDocument || e) !== q && j(e), H(e, t) }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== q && j(e); var n = w.attrHandle[t.toLowerCase()],
                    i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0; return void 0 !== i ? i : k.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.escape = function(e) { return (e + "").replace(be, ke) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) { var t, n = [],
                    i = 0,
                    r = 0; if (A = !k.detectDuplicates, N = !k.sortStable && e.slice(0), e.sort(U), A) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return N = null, e }, x = t.getText = function(e) { var t, n = "",
                    i = 0,
                    r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += x(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += x(t); return n }, (w = t.selectors = { cacheLength: 50, createPseudo: i, match: de, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(ve, ye).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = B[e + " "]; return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, r) { var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t; return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, c) { var l, u, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !c && !s,
                                b = !1; if (g) { if (o) { for (; m;) { for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling" } return !0 } if (p = [a ? g.firstChild : g.lastChild], a && y) { for (b = (h = (l = (u = (d = (f = g)[R] || (f[R] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === I && l[1]) && l[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === t) { u[e] = [I, h, b]; break } } else if (y && (f = t, d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], h = l[0] === I && l[1], b = h), !1 === b)
                                    for (;
                                        (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[R] || (f[R] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [I, b]), f !== t));); return (b -= r) === i || b % i == 0 && b / i >= 0 } } }, PSEUDO: function(e, n) { var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), a = r.length; a--;) i = J(e, r[a]), e[i] = !(t[i] = r[a]) }) : function(e) { return o(e, 0, r) }) : o } }, pseudos: { not: i(function(e) { var t = [],
                            n = [],
                            r = E(e.replace(oe, "$1")); return r[R] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: i(function(e) { return function(n) { return t(e, n).length > 0 } }), contains: i(function(e) { return e = e.replace(ve, ye),
                            function(t) { return (t.textContent || t.innerText || x(t)).indexOf(e) > -1 } }), lang: i(function(e) { return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                            function(t) { var n;
                                do { if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === D }, focus: function(e) { return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: s(!1), disabled: s(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !w.pseudos.empty(e) }, header: function(e) { return he.test(e.nodeName) }, input: function(e) { return fe.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() { return [0] }), last: c(function(e, t) { return [t - 1] }), eq: c(function(e, t, n) { return [n < 0 ? n + t : n] }), even: c(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: c(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }), gt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }).pseudos.nth = w.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[b] = function(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }(b); for (b in { submit: !0, reset: !0 }) w.pseudos[b] = function(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }(b); return u.prototype = w.filters = w.pseudos, w.setFilters = new u, C = t.tokenize = function(e, n) { var i, r, o, a, s, c, l, u = z[e + " "]; if (u) return n ? 0 : u.slice(0); for (s = e, c = [], l = w.preFilter; s;) { i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(oe, " ") }), s = s.slice(i.length)); for (a in w.filter) !(r = de[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length)); if (!i) break } return n ? s.length : s ? t.error(e) : z(e, c).slice(0) }, E = t.compile = function(e, t) { var n, i = [],
                    r = [],
                    o = W[e + " "]; if (!o) { for (t || (t = C(e)), n = t.length; n--;)(o = v(t[n]))[R] ? i.push(o) : r.push(o);
                    (o = W(e, y(r, i))).selector = e } return o }, S = t.select = function(e, t, n, i) { var r, o, a, s, c, u = "function" == typeof e && e,
                    f = !i && C(e = u.selector || e); if (n = n || [], 1 === f.length) { if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && w.relative[o[1].type]) { if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
                        if ((c = w.find[s]) && (i = c(a.matches[0].replace(ve, ye), ge.test(o[0].type) && l(t.parentNode) || t))) { if (o.splice(r, 1), !(e = i.length && d(o))) return X.apply(n, i), n; break } } return (u || E(e, f))(i, t, !L, n, !t || ge.test(e) && l(t.parentNode) || t), n }, k.sortStable = R.split("").sort(U).join("") === R, k.detectDuplicates = !!A, j(), k.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(q.createElement("fieldset")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), k.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(Z, function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(e);
        pe.find = be, pe.expr = be.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = be.uniqueSort, pe.text = be.getText, pe.isXMLDoc = be.isXML, pe.contains = be.contains, pe.escapeSelector = be.escape; var ke = function(e, t, n) { for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) { if (r && pe(e).is(n)) break;
                        i.push(e) }
                return i },
            we = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
            xe = pe.expr.match.needsContext,
            Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Ce = /^.[^:#\[\.,]*$/;
        pe.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) { return 1 === e.nodeType })) }, pe.fn.extend({ find: function(e) { var t, n, i = this.length,
                    r = this; if ("string" != typeof e) return this.pushStack(pe(e).filter(function() { for (t = 0; t < i; t++)
                        if (pe.contains(r[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, r[t], n); return i > 1 ? pe.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(o(this, e || [], !1)) }, not: function(e) { return this.pushStack(o(this, e || [], !0)) }, is: function(e) { return !!o(this, "string" == typeof e && xe.test(e) ? pe(e) : e || [], !1).length } }); var Ee, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (pe.fn.init = function(e, t, n) { var i, r; if (!e) return this; if (n = n || Ee, "string" == typeof e) { if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Te.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this) }).prototype = pe.fn, Ee = pe(te); var $e = /^(?:parents|prev(?:Until|All))/,
            Ne = { children: !0, contents: !0, next: !0, prev: !0 };
        pe.fn.extend({ has: function(e) { var t = pe(e, this),
                    n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                        if (pe.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, i = 0,
                    r = this.length,
                    o = [],
                    a = "string" != typeof e && pe(e); if (!xe.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) { o.push(n); break }
                return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? ae.call(pe(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), pe.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return ke(e, "parentNode") }, parentsUntil: function(e, t, n) { return ke(e, "parentNode", n) }, next: function(e) { return a(e, "nextSibling") }, prev: function(e) { return a(e, "previousSibling") }, nextAll: function(e) { return ke(e, "nextSibling") }, prevAll: function(e) { return ke(e, "previousSibling") }, nextUntil: function(e, t, n) { return ke(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return ke(e, "previousSibling", n) }, siblings: function(e) { return we((e.parentNode || {}).firstChild, e) }, children: function(e) { return we(e.firstChild) }, contents: function(e) { return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), pe.merge([], e.childNodes)) } }, function(e, t) { pe.fn[e] = function(n, i) { var r = pe.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Ne[e] || pe.uniqueSort(r), $e.test(e) && r.reverse()), this.pushStack(r) } }); var Ae = /[^\x20\t\r\n\f]+/g;
        pe.Callbacks = function(e) { e = "string" == typeof e ? s(e) : pe.extend({}, e); var t, n, i, r, o = [],
                a = [],
                c = -1,
                l = function() { for (r = r || e.once, i = t = !0; a.length; c = -1)
                        for (n = a.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && e.stopOnFalse && (c = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "") },
                u = { add: function() { return o && (n && !t && (c = o.length - 1, a.push(n)), function t(n) { pe.each(n, function(n, i) { pe.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== pe.type(i) && t(i) }) }(arguments), n && !t && l()), this }, remove: function() { return pe.each(arguments, function(e, t) { for (var n;
                                (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c-- }), this }, has: function(e) { return e ? pe.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return r = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return r = a = [], n || t || (o = n = ""), this }, locked: function() { return !!r }, fireWith: function(e, n) { return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this }, fire: function() { return u.fireWith(this, arguments), this }, fired: function() { return !!i } }; return u }, pe.extend({ Deferred: function(t) { var n = [
                        ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                        ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = { state: function() { return i }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(e) { return r.then(null, e) }, pipe: function() { var e = arguments; return pe.Deferred(function(t) { pe.each(n, function(n, i) { var r = pe.isFunction(e[i[4]]) && e[i[4]];
                                    o[i[1]](function() { var e = r && r.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments) }) }), e = null }).promise() }, then: function(t, i, r) {
                            function o(t, n, i, r) { return function() { var s = this,
                                        u = arguments,
                                        d = function() { var e, d; if (!(t < a)) { if ((e = i.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(d) ? r ? d.call(e, o(a, n, c, r), o(a, n, l, r)) : (a++, d.call(e, o(a, n, c, r), o(a, n, l, r), o(a, n, c, n.notifyWith))) : (i !== c && (s = void 0, u = [e]), (r || n.resolveWith)(s, u)) } },
                                        f = r ? d : function() { try { d() } catch (e) { pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (i !== l && (s = void 0, u = [e]), n.rejectWith(s, u)) } };
                                    t ? f() : (pe.Deferred.getStackHook && (f.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(f)) } } var a = 0; return pe.Deferred(function(e) { n[0][3].add(o(0, e, pe.isFunction(r) ? r : c, e.notifyWith)), n[1][3].add(o(0, e, pe.isFunction(t) ? t : c)), n[2][3].add(o(0, e, pe.isFunction(i) ? i : l)) }).promise() }, promise: function(e) { return null != e ? pe.extend(e, r) : r } },
                    o = {}; return pe.each(n, function(e, t) { var a = t[2],
                        s = t[5];
                    r[t[1]] = a.add, s && a.add(function() { i = s }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), r.promise(o), t && t.call(o, o), o }, when: function(e) { var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = ie.call(arguments),
                    o = pe.Deferred(),
                    a = function(e) { return function(n) { i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r) } }; if (t <= 1 && (u(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || pe.isFunction(r[n] && r[n].then))) return o.then(); for (; n--;) u(r[n], a(n), o.reject); return o.promise() } }); var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        pe.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, pe.readyException = function(t) { e.setTimeout(function() { throw t }) }; var qe = pe.Deferred();
        pe.fn.ready = function(e) { return qe.then(e).catch(function(e) { pe.readyException(e) }), this }, pe.extend({ isReady: !1, readyWait: 1, ready: function(e) {
                (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || qe.resolveWith(te, [pe])) } }), pe.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d)); var De = function(e, t, n, i, r, o, a) { var s = 0,
                    c = e.length,
                    l = null == n; if ("object" === pe.type(n)) { r = !0; for (s in n) De(e, t, s, n[s], !0, o, a) } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) { return l.call(pe(e), n) })), t))
                    for (; s < c; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n))); return r ? e : l ? t.call(e) : c ? t(e[0], n) : o },
            Le = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
        f.uid = 1, f.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var i, r = this.cache(e); if ("string" == typeof t) r[pe.camelCase(t)] = n;
                else
                    for (i in t) r[pe.camelCase(i)] = t[i]; return r }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length; for (; n--;) delete i[t[n]] }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !pe.isEmptyObject(t) } }; var Oe = new f,
            _e = new f,
            Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            He = /[A-Z]/g;
        pe.extend({ hasData: function(e) { return _e.hasData(e) || Oe.hasData(e) }, data: function(e, t, n) { return _e.access(e, t, n) }, removeData: function(e, t) { _e.remove(e, t) }, _data: function(e, t, n) { return Oe.access(e, t, n) }, _removeData: function(e, t) { Oe.remove(e, t) } }), pe.fn.extend({ data: function(e, t) { var n, i, r, o = this[0],
                    a = o && o.attributes; if (void 0 === e) { if (this.length && (r = _e.get(o), 1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))) { for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)), p(o, i, r[i]));
                        Oe.set(o, "hasDataAttrs", !0) } return r } return "object" == typeof e ? this.each(function() { _e.set(this, e) }) : De(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = _e.get(o, e))) return n; if (void 0 !== (n = p(o, e))) return n } else this.each(function() { _e.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { _e.remove(this, e) }) } }), pe.extend({ queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = Oe.get(e, t), n && (!i || Array.isArray(n) ? i = Oe.access(e, t, pe.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx"; var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = pe._queueHooks(e, t); "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() { pe.dequeue(e, t) }, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Oe.get(e, n) || Oe.access(e, n, { empty: pe.Callbacks("once memory").add(function() { Oe.remove(e, [t + "queue", n]) }) }) } }), pe.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { pe.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                    r = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {--i || r.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Oe.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s)); return s(), r.promise(t) } }); var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Fe = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
            Ie = ["Top", "Right", "Bottom", "Left"],
            Me = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display") },
            Be = function(e, t, n, i) { var r, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []); for (o in t) e.style[o] = a[o]; return r },
            ze = {};
        pe.fn.extend({ show: function() { return v(this, !0) }, hide: function() { return v(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Me(this) ? pe(this).show() : pe(this).hide() }) } }); var We = /^(?:checkbox|radio)$/i,
            Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ve = /^$|\/(?:java|ecma)script/i,
            Ke = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td; var Qe = /<|&#?\w+;/;! function() { var e = te.createDocumentFragment().appendChild(te.createElement("div")),
                t = te.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }(); var Ye = te.documentElement,
            Xe = /^key/,
            Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Je = /^([^.]*)(?:\.(.+)|)/;
        pe.event = { global: {}, add: function(e, t, n, i, r) { var o, a, s, c, l, u, d, f, h, p, m, g = Oe.get(e); if (g)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), r && pe.find.matchesSelector(Ye, r), n.guid || (n.guid = pe.guid++), (c = g.events) || (c = g.events = {}), (a = g.handle) || (a = g.handle = function(t) { return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(Ae) || [""]).length; l--;) s = Je.exec(t[l]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h && (d = pe.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = pe.event.special[h] || {}, u = pe.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && pe.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (f = c[h]) || (f = c[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), pe.event.global[h] = !0) }, remove: function(e, t, n, i, r) { var o, a, s, c, l, u, d, f, h, p, m, g = Oe.hasData(e) && Oe.get(e); if (g && (c = g.events)) { for (l = (t = (t || "").match(Ae) || [""]).length; l--;)
                        if (s = Je.exec(t[l]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) { for (d = pe.event.special[h] || {}, f = c[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || pe.removeEvent(e, h, g.handle), delete c[h]) } else
                            for (h in c) pe.event.remove(e, h + t[l], n, i, !0);
                    pe.isEmptyObject(c) && Oe.remove(e, "handle events") } }, dispatch: function(e) { var t, n, i, r, o, a, s = pe.event.fix(e),
                    c = new Array(arguments.length),
                    l = (Oe.get(this, "events") || {})[s.type] || [],
                    u = pe.event.special[s.type] || {}; for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t]; if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) { for (a = pe.event.handlers.call(this, s, l), t = 0;
                        (r = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation())); return u.postDispatch && u.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, i, r, o, a, s = [],
                    c = t.delegateCount,
                    l = e.target; if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < c; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), a[r] && o.push(i);
                            o.length && s.push({ elem: l, handlers: o }) }
                return l = this, c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s }, addProp: function(e, t) { Object.defineProperty(pe.Event.prototype, e, { enumerable: !0, configurable: !0, get: pe.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[pe.expando] ? e : new pe.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== T() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === T() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1 }, _default: function(e) { return r(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, pe.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, pe.Event = function(e, t) { return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t) }, pe.Event.prototype = { constructor: pe.Event, isDefaultPrevented: x, isPropagationStopped: x, isImmediatePropagationStopped: x, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
                this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
                this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
                this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, pe.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, pe.event.addProp), pe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { pe.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj; return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), pe.fn.extend({ on: function(e, t, n, i) { return C(this, e, t, n, i) }, one: function(e, t, n, i) { return C(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function() { pe.event.remove(this, e, n, t) }) } }); var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            et = /<script|<style|<link/i,
            tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            nt = /^true\/(.*)/,
            it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        pe.extend({ htmlPrefilter: function(e) { return e.replace(Ze, "<$1></$2>") }, clone: function(e, t, n) { var i, r, o, a, s = e.cloneNode(!0),
                    c = pe.contains(e.ownerDocument, e); if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (a = y(s), o = y(e), i = 0, r = o.length; i < r; i++) A(o[i], a[i]); if (t)
                    if (n)
                        for (o = o || y(e), a = a || y(s), i = 0, r = o.length; i < r; i++) N(o[i], a[i]);
                    else N(e, s);
                return (a = y(s, "script")).length > 0 && b(a, !c && y(e, "script")), s }, cleanData: function(e) { for (var t, n, i, r = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Le(n)) { if (t = n[Oe.expando]) { if (t.events)
                                for (i in t.events) r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                            n[Oe.expando] = void 0 }
                        n[_e.expando] && (n[_e.expando] = void 0) } } }), pe.fn.extend({ detach: function(e) { return q(this, e, !0) }, remove: function(e) { return q(this, e) }, text: function(e) { return De(this, function(e) { return void 0 === e ? pe.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return j(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e) }) }, prepend: function() { return j(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = E(this, e);
                        t.insertBefore(e, t.firstChild) } }) }, before: function() { return j(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return j(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(y(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return pe.clone(this, e, t) }) }, html: function(e) { return De(this, function(e) { var t = this[0] || {},
                        n = 0,
                        i = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !et.test(e) && !Ke[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) { e = pe.htmlPrefilter(e); try { for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(y(t, !1)), t.innerHTML = e);
                            t = 0 } catch (e) {} }
                    t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return j(this, arguments, function(t) { var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(y(this)), n && n.replaceChild(t, this)) }, e) } }), pe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { pe.fn[e] = function(e) { for (var n, i = [], r = pe(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), pe(r[a])[t](n), oe.apply(i, n.get()); return this.pushStack(i) } }); var rt = /^margin/,
            ot = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
            at = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };! function() {
            function t() { if (s) { s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a); var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ye.removeChild(a), s = null } } var n, i, r, o, a = te.createElement("div"),
                s = te.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), pe.extend(fe, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), i }, pixelMarginRight: function() { return t(), r }, reliableMarginLeft: function() { return t(), o } })) }(); var st = /^(none|table(?!-c[ea]).+)/,
            ct = /^--/,
            lt = { position: "absolute", visibility: "hidden", display: "block" },
            ut = { letterSpacing: "0", fontWeight: "400" },
            dt = ["Webkit", "Moz", "ms"],
            ft = te.createElement("div").style;
        pe.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = D(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var r, o, a, s = pe.camelCase(t),
                        c = ct.test(t),
                        l = e.style; return c || (t = _(s)), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = Fe.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c ? l.setProperty(t, n) : l[t] = n)))) } }, css: function(e, t, n, i) { var r, o, a, s = pe.camelCase(t); return ct.test(t) || (t = _(s)), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = D(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r } }), pe.each(["height", "width"], function(e, t) { pe.cssHooks[t] = { get: function(e, n, i) { if (n) return !st.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, i) : Be(e, lt, function() { return R(e, t, i) }) }, set: function(e, n, i) { var r, o = i && at(e),
                        a = i && H(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, o), o); return a && (r = Fe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), P(0, n, a) } } }), pe.cssHooks.marginLeft = L(fe.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), pe.each({ margin: "", padding: "", border: "Width" }, function(e, t) { pe.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ie[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, rt.test(e) || (pe.cssHooks[e + t].set = P) }), pe.fn.extend({ css: function(e, t) { return De(this, function(e, t, n) { var i, r, o = {},
                        a = 0; if (Array.isArray(t)) { for (i = at(e), r = t.length; a < r; a++) o[t[a]] = pe.css(e, t[a], !1, i); return o } return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t) }, e, t, arguments.length > 1) } }), pe.Tween = F, F.prototype = { constructor: F, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px") }, cur: function() { var e = F.propHooks[this.prop]; return e && e.get ? e.get(this) : F.propHooks._default.get(this) }, run: function(e) { var t, n = F.propHooks[this.prop]; return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this } }, F.prototype.init.prototype = F.prototype, F.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit) } } }, F.propHooks.scrollTop = F.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, pe.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, pe.fx = F.prototype.init, pe.fx.step = {}; var ht, pt, mt = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
        pe.Animation = pe.extend(U, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return m(n.elem, e, Fe.exec(t), n), n }] }, tweener: function(e, t) { pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var i, r, o, a, s, c, l, u, d = "width" in t || "height" in t,
                        f = this,
                        h = {},
                        p = e.style,
                        m = e.nodeType && Me(e),
                        g = Oe.get(e, "fxshow");
                    n.queue || (null == (a = pe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, f.always(function() { f.always(function() { a.unqueued--, pe.queue(e, "fx").length || a.empty.fire() }) })); for (i in t)
                        if (r = t[i], mt.test(r)) { if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) { if ("show" !== r || !g || void 0 === g[i]) continue;
                                m = !0 }
                            h[i] = g && g[i] || pe.style(e, i) }
                    if ((c = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h)) { d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = Oe.get(e, "display")), "none" === (u = pe.css(e, "display")) && (l ? u = l : (v([e], !0), l = e.style.display || l, u = pe.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === pe.css(e, "float") && (c || (f.done(function() { p.display = l }), null == l && (u = p.display, l = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })), c = !1; for (i in h) c || (g ? "hidden" in g && (m = g.hidden) : g = Oe.access(e, "fxshow", { display: l }), o && (g.hidden = !m), m && v([e], !0), f.done(function() { m || v([e]), Oe.remove(e, "fxshow"); for (i in h) pe.style(e, i, h[i]) })), c = z(m ? g[i] : 0, i, f), i in g || (g[i] = c.start, m && (c.end = c.start, c.start = 0)) } }], prefilter: function(e, t) { t ? U.prefilters.unshift(e) : U.prefilters.push(e) } }), pe.speed = function(e, t, n) { var i = e && "object" == typeof e ? pe.extend({}, e) : { complete: n || !n && t || pe.isFunction(e) && e, duration: e, easing: n && t || t && !pe.isFunction(t) && t }; return pe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue) }, i }, pe.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(Me).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) { var r = pe.isEmptyObject(e),
                        o = pe.speed(t, n, i),
                        a = function() { var t = U(this, pe.extend({}, e), o);
                            (r || Oe.get(this, "finish")) && t.stop(!0) }; return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) { var i = function(e) { var t = e.stop;
                        delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() { var t = !0,
                            r = null != e && e + "queueHooks",
                            o = pe.timers,
                            a = Oe.get(this); if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && gt.test(r) && i(a[r]); for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));!t && n || pe.dequeue(this, e) }) }, finish: function(e) { return !1 !== e && (e = e || "fx"), this.each(function() { var t, n = Oe.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = pe.timers,
                            a = i ? i.length : 0; for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish }) } }), pe.each(["toggle", "show", "hide"], function(e, t) { var n = pe.fn[t];
                pe.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, r) } }), pe.each({ slideDown: B("show"), slideUp: B("hide"), slideToggle: B("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { pe.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), pe.timers = [], pe.fx.tick = function() { var e, t = 0,
                    n = pe.timers; for (ht = pe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || pe.fx.stop(), ht = void 0 }, pe.fx.timer = function(e) { pe.timers.push(e), pe.fx.start() }, pe.fx.interval = 13, pe.fx.start = function() { pt || (pt = !0, I()) }, pe.fx.stop = function() { pt = null }, pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pe.fn.delay = function(t, n) { return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) { var r = e.setTimeout(n, t);
                    i.stop = function() { e.clearTimeout(r) } }) },
            function() { var e = te.createElement("input"),
                    t = te.createElement("select").appendChild(te.createElement("option"));
                e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", fe.radioValue = "t" === e.value }(); var vt, yt = pe.expr.attrHandle;
        pe.fn.extend({ attr: function(e, t) { return De(this, pe.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { pe.removeAttr(this, e) }) } }), pe.extend({ attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = pe.find.attr(e, t)) ? void 0 : i) }, attrHooks: { type: { set: function(e, t) { if (!fe.radioValue && "radio" === t && r(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                    r = t && t.match(Ae); if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n) } }), vt = { set: function(e, t, n) { return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n } }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = yt[t] || pe.find.attr;
            yt[t] = function(e, t, i) { var r, o, a = t.toLowerCase(); return i || (o = yt[a], yt[a] = r, r = null != n(e, t, i) ? a : null, yt[a] = o), r } }); var bt = /^(?:input|select|textarea|button)$/i,
            kt = /^(?:a|area)$/i;
        pe.fn.extend({ prop: function(e, t) { return De(this, pe.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[pe.propFix[e] || e] }) } }), pe.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = pe.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : bt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), fe.optSelected || (pe.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { pe.propFix[this.toLowerCase()] = this }), pe.fn.extend({ addClass: function(e) { var t, n, i, r, o, a, s, c = 0; if (pe.isFunction(e)) return this.each(function(t) { pe(this).addClass(e.call(this, t, K(this))) }); if ("string" == typeof e && e)
                    for (t = e.match(Ae) || []; n = this[c++];)
                        if (r = K(n), i = 1 === n.nodeType && " " + V(r) + " ") { for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = V(i)) && n.setAttribute("class", s) }
                return this }, removeClass: function(e) { var t, n, i, r, o, a, s, c = 0; if (pe.isFunction(e)) return this.each(function(t) { pe(this).removeClass(e.call(this, t, K(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof e && e)
                    for (t = e.match(Ae) || []; n = this[c++];)
                        if (r = K(n), i = 1 === n.nodeType && " " + V(r) + " ") { for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            r !== (s = V(i)) && n.setAttribute("class", s) }
                return this }, toggleClass: function(e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) { pe(this).toggleClass(e.call(this, n, K(this), t), t) }) : this.each(function() { var t, i, r, o; if ("string" === n)
                        for (i = 0, r = pe(this), o = e.match(Ae) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = K(this)) && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Oe.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + V(K(n)) + " ").indexOf(t) > -1) return !0;
                return !1 } }); var wt = /\r/g;
        pe.fn.extend({ val: function(e) { var t, n, i, r = this[0]; return arguments.length ? (i = pe.isFunction(e), this.each(function(n) { var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, pe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = pe.map(r, function(e) { return null == e ? "" : e + "" })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0 } }), pe.extend({ valHooks: { option: { get: function(e) { var t = pe.find.attr(e, "value"); return null != t ? t : V(pe.text(e)) } }, select: { get: function(e) { var t, n, i, o = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            c = s ? null : [],
                            l = s ? a + 1 : o.length; for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                            if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) { if (t = pe(n).val(), s) return t;
                                c.push(t) }
                        return c }, set: function(e, t) { for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = pe.inArray(pe.valHooks.option.get(i), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), pe.each(["radio", "checkbox"], function() { pe.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1 } }, fe.checkOn || (pe.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var xt = /^(?:focusinfocus|focusoutblur)$/;
        pe.extend(pe.event, { trigger: function(t, n, i, r) { var o, a, s, c, l, u, d, f = [i || te],
                    h = le.call(t, "type") ? t.type : t,
                    p = le.call(t, "namespace") ? t.namespace.split(".") : []; if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[pe.expando] ? t : new pe.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) { if (!r && !d.noBubble && !pe.isWindow(i)) { for (c = d.delegateType || h, xt.test(c + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e) } for (o = 0;
                        (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? c : d.bindType || h, (u = (Oe.get(a, "events") || {})[t.type] && Oe.get(a, "handle")) && u.apply(a, n), (u = l && a[l]) && u.apply && Le(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault()); return t.type = h, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Le(i) || l && pe.isFunction(i[h]) && !pe.isWindow(i) && ((s = i[l]) && (i[l] = null), pe.event.triggered = h, i[h](), pe.event.triggered = void 0, s && (i[l] = s)), t.result } }, simulate: function(e, t, n) { var i = pe.extend(new pe.Event, n, { type: e, isSimulated: !0 });
                pe.event.trigger(i, null, t) } }), pe.fn.extend({ trigger: function(e, t) { return this.each(function() { pe.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return pe.event.trigger(e, t, n, !0) } }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { pe.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), pe.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), fe.focusin = "onfocusin" in e, fe.focusin || pe.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { pe.event.simulate(t, e.target, pe.event.fix(e)) };
            pe.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                        r = Oe.access(i, t);
                    r || i.addEventListener(e, n, !0), Oe.access(i, t, (r || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                        r = Oe.access(i, t) - 1;
                    r ? Oe.access(i, t, r) : (i.removeEventListener(e, n, !0), Oe.remove(i, t)) } } }); var Tt = e.location,
            Ct = pe.now(),
            Et = /\?/;
        pe.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n }; var St = /\[\]$/,
            $t = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;
        pe.param = function(e, t) { var n, i = [],
                r = function(e, t) { var n = pe.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() { r(this.name, this.value) });
            else
                for (n in e) Q(n, e[n], t, r); return i.join("&") }, pe.fn.extend({ serialize: function() { return pe.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = pe.prop(this, "elements"); return e ? pe.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !pe(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !We.test(e)) }).map(function(e, t) { var n = pe(this).val(); return null == n ? null : Array.isArray(n) ? pe.map(n, function(e) { return { name: t.name, value: e.replace($t, "\r\n") } }) : { name: t.name, value: n.replace($t, "\r\n") } }).get() } }); var jt = /%20/g,
            qt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            _t = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            Ht = {},
            Rt = {},
            Ft = "*/".concat("*"),
            It = te.createElement("a");
        It.href = Tt.href, pe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: Ot.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ft, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": pe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? G(G(e, pe.ajaxSettings), t) : G(pe.ajaxSettings, e) }, ajaxPrefilter: Y(Ht), ajaxTransport: Y(Rt), ajax: function(t, n) {
                function i(t, n, i, s) { var l, f, h, k, w, x = n;
                    u || (u = !0, c && e.clearTimeout(c), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (k = J(p, T, i)), k = Z(p, k, T, l), l ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (pe.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (pe.etag[o] = w)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = k.state, f = k.data, h = k.error, l = !h)) : (h = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", l ? v.resolveWith(m, [f, x, T]) : v.rejectWith(m, [T, x, h]), T.statusCode(b), b = void 0, d && g.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : h]), y.fireWith(m, [T, x]), d && (g.trigger("ajaxComplete", [T, p]), --pe.active || pe.event.trigger("ajaxStop"))) } "object" == typeof t && (n = t, t = void 0), n = n || {}; var r, o, a, s, c, l, u, d, f, h, p = pe.ajaxSetup({}, n),
                    m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? pe(m) : pe.event,
                    v = pe.Deferred(),
                    y = pe.Callbacks("once memory"),
                    b = p.statusCode || {},
                    k = {},
                    w = {},
                    x = "canceled",
                    T = { readyState: 0, getResponseHeader: function(e) { var t; if (u) { if (!s)
                                    for (s = {}; t = Lt.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return u ? a : null }, setRequestHeader: function(e, t) { return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, k[e] = t), this }, overrideMimeType: function(e) { return null == u && (p.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                                if (u) T.always(e[T.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this }, abort: function(e) { var t = e || x; return r && r.abort(t), i(0, t), this } }; if (v.promise(T), p.url = ((t || p.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ae) || [""], null == p.crossDomain) { l = te.createElement("a"); try { l.href = p.url, l.href = l.href, p.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host } catch (e) { p.crossDomain = !0 } } if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), X(Ht, p, n, T), u) return T;
                (d = pe.event && p.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !_t.test(p.type), o = p.url.replace(qt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(jt, "+")) : (h = p.url.slice(o.length), p.data && (o += (Et.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Dt, "$1"), h = (Et.test(o) ? "&" : "?") + "_=" + Ct++ + h), p.url = o + h), p.ifModified && (pe.lastModified[o] && T.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && T.setRequestHeader("If-None-Match", pe.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : p.accepts["*"]); for (f in p.headers) T.setRequestHeader(f, p.headers[f]); if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || u)) return T.abort(); if (x = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = X(Rt, p, n, T)) { if (T.readyState = 1, d && g.trigger("ajaxSend", [T, p]), u) return T;
                    p.async && p.timeout > 0 && (c = e.setTimeout(function() { T.abort("timeout") }, p.timeout)); try { u = !1, r.send(k, i) } catch (e) { if (u) throw e;
                        i(-1, e) } } else i(-1, "No Transport"); return T }, getJSON: function(e, t, n) { return pe.get(e, t, n, "json") }, getScript: function(e, t) { return pe.get(e, void 0, t, "script") } }), pe.each(["get", "post"], function(e, t) { pe[t] = function(e, n, i, r) { return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({ url: e, type: t, dataType: r, data: n, success: i }, pe.isPlainObject(e) && e)) } }), pe._evalUrl = function(e) { return pe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, pe.fn.extend({ wrapAll: function(e) { var t; return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return pe.isFunction(e) ? this.each(function(t) { pe(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = pe.isFunction(e); return this.each(function(n) { pe(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { pe(this).replaceWith(this.childNodes) }), this } }), pe.expr.pseudos.hidden = function(e) { return !pe.expr.pseudos.visible(e) }, pe.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, pe.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} }; var Mt = { 0: 200, 1223: 204 },
            Bt = pe.ajaxSettings.xhr();
        fe.cors = !!Bt && "withCredentials" in Bt, fe.ajax = Bt = !!Bt, pe.ajaxTransport(function(t) { var n, i; if (fe.cors || Bt && !t.crossDomain) return { send: function(r, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"); for (a in r) s.setRequestHeader(a, r[a]);
                    n = function(e) { return function() { n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Mt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e } }, abort: function() { n && n() } } }), pe.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), pe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return pe.globalEval(e), e } } }), pe.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), pe.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, r) { t = pe("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), te.head.appendChild(t[0]) }, abort: function() { n && n() } } } }); var zt = [],
            Wt = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || pe.expando + "_" + Ct++; return this[e] = !0, e } }), pe.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, a, s = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Wt, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return a || pe.error(r + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { a = arguments }, i.always(function() { void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0 }), "script" }), fe.createHTMLDocument = function() { var e = te.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), pe.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, r, o; return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Te.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = k([e], t, o), o && o.length && pe(o).remove(), pe.merge([], r.childNodes)) }, pe.fn.load = function(e, t, n) { var i, r, o, a = this,
                s = e.indexOf(" "); return s > -1 && (i = V(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { pe.fn[t] = function(e) { return this.on(t, e) } }), pe.expr.pseudos.animated = function(e) { return pe.grep(pe.timers, function(t) { return e === t.elem }).length }, pe.offset = { setOffset: function(e, t, n) { var i, r, o, a, s, c, l = pe.css(e, "position"),
                    u = pe(e),
                    d = {}; "static" === l && (e.style.position = "relative"), s = u.offset(), o = pe.css(e, "top"), c = pe.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1 ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d) } }, pe.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { pe.offset.setOffset(this, e, t) }); var t, n, i, r, o = this[0]; return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n = this[0],
                        i = { top: 0, left: 0 }; return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + pe.css(e[0], "borderTopWidth", !0), left: i.left + pe.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - pe.css(n, "marginTop", !0), left: t.left - i.left - pe.css(n, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent; return e || Ye }) } }), pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
            pe.fn[e] = function(i) { return De(this, function(e, i, r) { var o; return pe.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r) }, e, i, arguments.length) } }), pe.each(["top", "left"], function(e, t) { pe.cssHooks[t] = L(fe.pixelPosition, function(e, n) { if (n) return n = D(e, t), ot.test(n) ? pe(e).position()[t] + "px" : n }) }), pe.each({ Height: "height", Width: "width" }, function(e, t) { pe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { pe.fn[i] = function(r, o) { var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border"); return De(this, function(t, n, r) { var o; return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? pe.css(t, n, s) : pe.style(t, n, r, s) }, t, a ? r : void 0, a) } }) }), pe.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), pe.holdReady = function(e) { e ? pe.readyWait++ : pe.ready(!0) }, pe.isArray = Array.isArray, pe.parseJSON = JSON.parse, pe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() { return pe }); var Ut = e.jQuery,
            Vt = e.$; return pe.noConflict = function(t) { return e.$ === pe && (e.$ = Vt), t && e.jQuery === pe && (e.jQuery = Ut), pe }, t || (e.jQuery = e.$ = pe), pe }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) { "use strict"; var t = jQuery.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(),
function(e) { "use strict";

    function t(t) { var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")); var i = n && e(n); return i && i.length ? i : t.parent() }

    function n(n) { n && 3 === n.which || (e(i).remove(), e(r).each(function() { var i = e(this),
                r = t(i),
                o = { relatedTarget: this };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o))))) })) } var i = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        o = function(t) { e(t).on("click.bs.dropdown", this.toggle) };
    o.VERSION = "3.3.7", o.prototype.toggle = function(i) { var r = e(this); if (!r.is(".disabled, :disabled")) { var o = t(r),
                a = o.hasClass("open"); if (n(), !a) { "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n); var s = { relatedTarget: this }; if (o.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s)) } return !1 } }, o.prototype.keydown = function(n) { if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) { var i = e(this); if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) { var o = t(i),
                    a = o.hasClass("open"); if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click"); var s = o.find(".dropdown-menu li:not(.disabled):visible a"); if (s.length) { var c = s.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < s.length - 1 && c++, ~c || (c = 0), s.eq(c).trigger("focus") } } } }; var a = e.fn.dropdown;
    e.fn.dropdown = function(t) { return this.each(function() { var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new o(this)), "string" == typeof t && i[t].call(n) }) }, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() { return e.fn.dropdown = a, this }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) { e.stopPropagation() }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown) }(jQuery),
function(e) { "use strict"; var t = function(e, t) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t) };
    t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, t.prototype.init = function(t, n, i) { if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var r = this.options.trigger.split(" "), o = r.length; o--;) { var a = r[o]; if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) { var s = "hover" == a ? "mouseenter" : "focusin",
                    c = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(c + "." + this.type, this.options.selector, e.proxy(this.leave, this)) } }
        this.options.selector ? this._options = e.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, t.prototype.getDefaults = function() { return t.DEFAULTS }, t.prototype.getOptions = function(t) { return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t }, t.prototype.getDelegateOptions = function() { var t = {},
            n = this.getDefaults(); return this._options && e.each(this._options, function(e, i) { n[e] != i && (t[e] = i) }), t }, t.prototype.enter = function(t) { var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type); return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() { "in" == n.hoverState && n.show() }, n.options.delay.show)) : n.show()) }, t.prototype.isInStateTrue = function() { for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1 }, t.prototype.leave = function(t) { var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type); return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() { "out" == n.hoverState && n.hide() }, n.options.delay.hide)) : n.hide()) }, t.prototype.show = function() { var n = e.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(n); var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (n.isDefaultPrevented() || !i) return; var r = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade"); var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                c = /\s?auto?\s?/i,
                l = c.test(s);
            l && (s = s.replace(c, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var u = this.getPosition(),
                d = o[0].offsetWidth,
                f = o[0].offsetHeight; if (l) { var h = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + f > p.bottom ? "top" : "top" == s && u.top - f < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s, o.removeClass(h).addClass(s) } var m = this.getCalculatedOffset(s, u, d, f);
            this.applyPlacement(m, s); var g = function() { var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r) };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g() } }, t.prototype.applyPlacement = function(t, n) { var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({ using: function(e) { i.css({ top: Math.round(e.top), left: Math.round(e.left) }) } }, t), 0), i.addClass("in"); var c = i[0].offsetWidth,
            l = i[0].offsetHeight; "top" == n && l != o && (t.top = t.top + o - l); var u = this.getViewportAdjustedDelta(n, t, c, l);
        u.left ? t.left += u.left : t.top += u.top; var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - r + c : 2 * u.top - o + l,
            h = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(f, i[0][h], d) }, t.prototype.replaceArrow = function(e, t, n) { this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "") }, t.prototype.setContent = function() { var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right") }, t.prototype.hide = function(n) {
        function i() { "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), n && n() } var r = this,
            o = e(this.$tip),
            a = e.Event("hide.bs." + this.type); return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(t.TRANSITION_DURATION) : i(), this.hoverState = null, this) }, t.prototype.fixTitle = function() { var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "") }, t.prototype.hasContent = function() { return this.getTitle() }, t.prototype.getPosition = function(t) { var n = (t = t || this.$element)[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, { width: r.right - r.left, height: r.bottom - r.top })); var o = window.SVGElement && n instanceof window.SVGElement,
            a = i ? { top: 0, left: 0 } : o ? null : t.offset(),
            s = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
            c = i ? { width: e(window).width(), height: e(window).height() } : null; return e.extend({}, r, s, c, a) }, t.prototype.getCalculatedOffset = function(e, t, n, i) { return "bottom" == e ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 } : "top" == e ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 } : "left" == e ? { top: t.top + t.height / 2 - i / 2, left: t.left - n } : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width } }, t.prototype.getViewportAdjustedDelta = function(e, t, n, i) { var r = { top: 0, left: 0 }; if (!this.$viewport) return r; var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport); if (/right|left/.test(e)) { var s = t.top - o - a.scroll,
                c = t.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : c > a.top + a.height && (r.top = a.top + a.height - c) } else { var l = t.left - o,
                u = t.left + o + n;
            l < a.left ? r.left = a.left - l : u > a.right && (r.left = a.left + a.width - u) } return r }, t.prototype.getTitle = function() { var e = this.$element,
            t = this.options; return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title) }, t.prototype.getUID = function(e) { do { e += ~~(1e6 * Math.random()) } while (document.getElementById(e)); return e }, t.prototype.tip = function() { if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, t.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, t.prototype.enable = function() { this.enabled = !0 }, t.prototype.disable = function() { this.enabled = !1 }, t.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, t.prototype.toggle = function(t) { var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n) }, t.prototype.destroy = function() { var e = this;
        clearTimeout(this.timeout), this.hide(function() { e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null }) }; var n = e.fn.tooltip;
    e.fn.tooltip = function(n) { return this.each(function() { var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof n && n;!r && /destroy|hide/.test(n) || (r || i.data("bs.tooltip", r = new t(this, o)), "string" == typeof n && r[n]()) }) }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() { return e.fn.tooltip = n, this } }(jQuery),
function(e) { "use strict";

    function t(t) { return this.each(function() { var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]() }) } var n = function(t) { this.element = e(t) };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() { var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"); if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) { var r = n.find(".active:last a"),
                o = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
                a = e.Event("show.bs.tab", { relatedTarget: r[0] }); if (r.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) { var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() { r.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: r[0] }) }) } } }, n.prototype.activate = function(t, i, r) {
        function o() { a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r() } var a = i.find("> .active"),
            s = r && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in") }; var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() { return e.fn.tab = i, this }; var r = function(n) { n.preventDefault(), t.call(e(this), "show") };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r) }(jQuery),
function(e) { "use strict";

    function t(t) { var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return e(i) }

    function n(t) { return this.each(function() { var n = e(this),
                r = n.data("bs.collapse"),
                o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);!r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]() }) } var i = function(t, n) { this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() { return this.$element.hasClass("width") ? "width" : "height" }, i.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(r && r.length && (t = r.data("bs.collapse")) && t.transitioning)) { var o = e.Event("show.bs.collapse"); if (this.$element.trigger(o), !o.isDefaultPrevented()) { r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null)); var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var s = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!e.support.transition) return s.call(this); var c = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][c]) } } } }, i.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var t = e.Event("hide.bs.collapse"); if (this.$element.trigger(t), !t.isDefaultPrevented()) { var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var r = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this) } } }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function() { return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) { var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r) }, this)).end() }, i.prototype.addAriaAndCollapsedClass = function(e, t) { var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n) }; var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() { return e.fn.collapse = r, this }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) { var r = e(this);
        r.attr("data-target") || i.preventDefault(); var o = t(r),
            a = o.data("bs.collapse") ? "toggle" : r.data();
        n.call(o, a) }) }(jQuery),
function(e) { "use strict";

    function t() { var e = document.createElement("bootstrap"),
            t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var n in t)
            if (void 0 !== e.style[n]) return { end: t[n] };
        return !1 }
    e.fn.emulateTransitionEnd = function(t) { var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() { n = !0 }); return setTimeout(function() { n || e(i).trigger(e.support.transition.end) }, t), this }, e(function() { e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = { bindType: e.support.transition.end, delegateType: e.support.transition.end, handle: function(t) { return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery),
function(e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e() } }(function() { return function e(t, n, i) {
        function r(a, s) { if (!n[a]) { if (!t[a]) { var c = "function" == typeof require && require; if (!s && c) return c(a, !0); if (o) return o(a, !0); var l = new Error("Cannot find module '" + a + "'"); throw l.code = "MODULE_NOT_FOUND", l } var u = n[a] = { exports: {} };
                t[a][0].call(u.exports, function(e) { var n = t[a][1][e]; return r(n || e) }, u, u.exports, e, t, n, i) } return n[a].exports } for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]); return r }({ 1: [function(e, t, n) { var i = 9; if ("undefined" != typeof Element && !Element.prototype.matches) { var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector }
            t.exports = function(e, t) { for (; e && e.nodeType !== i;) { if (e.matches(t)) return e;
                    e = e.parentNode } } }, {}], 2: [function(e, t, n) {
            function i(e, t, n, i) { return function(n) { n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n) } } var r = e("./closest");
            t.exports = function(e, t, n, r, o) { var a = i.apply(this, arguments); return e.addEventListener(n, a, o), { destroy: function() { e.removeEventListener(n, a, o) } } } }, { "./closest": 1 }], 3: [function(e, t, n) { n.node = function(e) { return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType }, n.nodeList = function(e) { var t = Object.prototype.toString.call(e); return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0])) }, n.string = function(e) { return "string" == typeof e || e instanceof String }, n.fn = function(e) { return "[object Function]" === Object.prototype.toString.call(e) } }, {}], 4: [function(e, t, n) {
            function i(e, t, n) { return e.addEventListener(t, n), { destroy: function() { e.removeEventListener(t, n) } } }

            function r(e, t, n) { return Array.prototype.forEach.call(e, function(e) { e.addEventListener(t, n) }), { destroy: function() { Array.prototype.forEach.call(e, function(e) { e.removeEventListener(t, n) }) } } }

            function o(e, t, n) { return s(document.body, e, t, n) } var a = e("./is"),
                s = e("delegate");
            t.exports = function(e, t, n) { if (!e && !t && !n) throw new Error("Missing required arguments"); if (!a.string(t)) throw new TypeError("Second argument must be a String"); if (!a.fn(n)) throw new TypeError("Third argument must be a Function"); if (a.node(e)) return i(e, t, n); if (a.nodeList(e)) return r(e, t, n); if (a.string(e)) return o(e, t, n); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList") } }, { "./is": 3, delegate: 2 }], 5: [function(e, t, n) { t.exports = function(e) { var t; if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) { var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value } else { e.hasAttribute("contenteditable") && e.focus(); var i = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(e), i.removeAllRanges(), i.addRange(r), t = i.toString() } return t } }, {}], 6: [function(e, t, n) {
            function i() {}
            i.prototype = { on: function(e, t, n) { var i = this.e || (this.e = {}); return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this }, once: function(e, t, n) {
                    function i() { r.off(e, i), t.apply(n, arguments) } var r = this; return i._ = t, this.on(e, i, n) }, emit: function(e) { var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        i = 0,
                        r = n.length; for (i; i < r; i++) n[i].fn.apply(n[i].ctx, t); return this }, off: function(e, t) { var n = this.e || (this.e = {}),
                        i = n[e],
                        r = []; if (i && t)
                        for (var o = 0, a = i.length; o < a; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]); return r.length ? n[e] = r : delete n[e], this } }, t.exports = i }, {}], 7: [function(e, t, n) {! function(i, r) { if (void 0 !== n) r(t, e("select"));
                else { var o = { exports: {} };
                    r(o, i.select), i.clipboardAction = o.exports } }(this, function(e, t) { "use strict";

                function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var i = function(e) { return e && e.__esModule ? e : { default: e } }(t),
                    r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                    o = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
                    a = function() {
                        function e(t) { n(this, e), this.resolveOptions(t), this.initSelection() } return o(e, [{ key: "resolveOptions", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "" } }, { key: "initSelection", value: function() { this.text ? this.selectFake() : this.target && this.selectTarget() } }, { key: "selectFake", value: function() { var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() { return e.removeFake() }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px"; var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText() } }, { key: "removeFake", value: function() { this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null) } }, { key: "selectTarget", value: function() { this.selectedText = (0, i.default)(this.target), this.copyText() } }, { key: "copyText", value: function() { var e = void 0; try { e = document.execCommand(this.action) } catch (t) { e = !1 }
                                this.handleResult(e) } }, { key: "handleResult", value: function(e) { this.emitter.emit(e ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }) } }, { key: "clearSelection", value: function() { this.target && this.target.blur(), window.getSelection().removeAllRanges() } }, { key: "destroy", value: function() { this.removeFake() } }, { key: "action", set: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy"; if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"') }, get: function() { return this._action } }, { key: "target", set: function(e) { if (void 0 !== e) { if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element'); if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'); if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e } }, get: function() { return this._target } }]), e }();
                e.exports = a }) }, { select: 5 }], 8: [function(e, t, n) {! function(i, r) { if (void 0 !== n) r(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                else { var o = { exports: {} };
                    r(o, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = o.exports } }(this, function(e, t, n, i) { "use strict";

                function r(e) { return e && e.__esModule ? e : { default: e } }

                function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

                function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

                function c(e, t) { var n = "data-clipboard-" + e; if (t.hasAttribute(n)) return t.getAttribute(n) } var l = r(t),
                    u = r(n),
                    d = r(i),
                    f = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
                    h = function(e) {
                        function t(e, n) { o(this, t); var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return i.resolveOptions(n), i.listenClick(e), i } return s(t, u.default), f(t, [{ key: "resolveOptions", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText } }, { key: "listenClick", value: function(e) { var t = this;
                                this.listener = (0, d.default)(e, "click", function(e) { return t.onClick(e) }) } }, { key: "onClick", value: function(e) { var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({ action: this.action(t), target: this.target(t), text: this.text(t), trigger: t, emitter: this }) } }, { key: "defaultAction", value: function(e) { return c("action", e) } }, { key: "defaultTarget", value: function(e) { var t = c("target", e); if (t) return document.querySelector(t) } }, { key: "defaultText", value: function(e) { return c("text", e) } }, { key: "destroy", value: function() { this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null) } }], [{ key: "isSupported", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e,
                                    n = !!document.queryCommandSupported; return t.forEach(function(e) { n = n && !!document.queryCommandSupported(e) }), n } }]), t }();
                e.exports = h }) }, { "./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6 }] }, {}, [8])(8) }),
function(e, t) { "use strict"; "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Headroom = t() }(this, function() { "use strict";

    function e(e) { this.callback = e, this.ticking = !1 }

    function t(e) { return e && "undefined" != typeof window && (e === window || e.nodeType) }

    function n(e) { if (arguments.length <= 0) throw new Error("Missing arguments in extend function"); var i, r, o = e || {}; for (r = 1; r < arguments.length; r++) { var a = arguments[r] || {}; for (i in a) "object" != typeof o[i] || t(o[i]) ? o[i] = o[i] || a[i] : o[i] = n(o[i], a[i]) } return o }

    function i(e) { return e === Object(e) ? e : { down: e, up: e } }

    function r(e, t) { t = n(t, r.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = i(t.tolerance), this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom } var o = { bind: !! function() {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) }; return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, e.prototype = { constructor: e, update: function() { this.callback && this.callback(), this.ticking = !1 }, requestTick: function() { this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0) }, handleEvent: function() { this.requestTick() } }, r.prototype = { constructor: r, init: function() { if (r.cutsTheMustard) return this.debouncer = new e(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this }, destroy: function() { var e = this.classes;
            this.initialised = !1; for (var t in e) e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
            this.scroller.removeEventListener("scroll", this.debouncer, !1) }, attachEvent: function() { this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent()) }, unpin: function() { var e = this.elem.classList,
                t = this.classes;!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this)) }, pin: function() { var e = this.elem.classList,
                t = this.classes;
            e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this)) }, top: function() { var e = this.elem.classList,
                t = this.classes;
            e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this)) }, notTop: function() { var e = this.elem.classList,
                t = this.classes;
            e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this)) }, bottom: function() { var e = this.elem.classList,
                t = this.classes;
            e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this)) }, notBottom: function() { var e = this.elem.classList,
                t = this.classes;
            e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this)) }, getScrollY: function() { return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop }, getViewportHeight: function() { return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight }, getElementPhysicalHeight: function(e) { return Math.max(e.offsetHeight, e.clientHeight) }, getScrollerPhysicalHeight: function() { return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller) }, getDocumentHeight: function() { var e = document.body,
                t = document.documentElement; return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight) }, getElementHeight: function(e) { return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight) }, getScrollerHeight: function() { return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller) }, isOutOfBounds: function(e) { var t = e < 0,
                n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight(); return t || n }, toleranceExceeded: function(e, t) { return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t] }, shouldUnpin: function(e, t) { var n = e > this.lastKnownScrollY,
                i = e >= this.offset; return n && i && t }, shouldPin: function(e, t) { var n = e < this.lastKnownScrollY,
                i = e <= this.offset; return n && t || i }, update: function() { var e = this.getScrollY(),
                t = e > this.lastKnownScrollY ? "down" : "up",
                n = this.toleranceExceeded(e, t);
            this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e) } }, r.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, r.cutsTheMustard = void 0 !== o && o.rAF && o.bind && o.classList, r }),
function(e) { e && (e.fn.headroom = function(t) { return this.each(function() { var n = e(this),
                i = n.data("headroom"),
                r = "object" == typeof t && t;
            r = e.extend(!0, {}, Headroom.options, r), i || ((i = new Headroom(this, r)).init(), n.data("headroom", i)), "string" == typeof t && (i[t](), "destroy" === t && n.removeData("headroom")) }) }, e("[data-headroom]").each(function() { var t = e(this);
        t.headroom(t.data()) })) }(window.Zepto || window.jQuery),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) { e.extend(e.fn, { validate: function(t) { if (this.length) { var n = e.data(this[0], "validator"); return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) { n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0) }), this.on("submit.validate", function(t) {
                    function i() { var i, r; return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (r = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== r && r) } return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1) })), n) }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.") }, valid: function() { var t, n, i; return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function() {
                (t = n.element(this) && t) || (i = i.concat(n.errorList)) }), n.errorList = i), t }, rules: function(t, n) { var i, r, o, a, s, c, l = this[0]; if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) { if (t) switch (i = e.data(l.form, "validator").settings, r = i.rules, o = e.validator.staticRules(l), t) {
                    case "add":
                        e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[l.name] = o, n.messages && (i.messages[l.name] = e.extend(i.messages[l.name], n.messages)); break;
                    case "remove":
                        return n ? (c = {}, e.each(n.split(/\s/), function(e, t) { c[t] = o[t], delete o[t] }), c) : (delete r[l.name], o) }
                return (a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l)).required && (s = a.required, delete a.required, a = e.extend({ required: s }, a)), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, { remote: s })), a } } }), e.extend(e.expr.pseudos || e.expr[":"], { blank: function(t) { return !e.trim("" + e(t).val()) }, filled: function(t) { var n = e(t).val(); return null !== n && !!e.trim("" + n) }, unchecked: function(t) { return !e(t).prop("checked") } }), e.validator = function(t, n) { this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init() }, e.validator.format = function(t, n) { return 1 === arguments.length ? function() { var n = e.makeArray(arguments); return n.unshift(t), e.validator.format.apply(this, n) } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) { t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() { return n }) }), t) }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(e) { this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e))) }, onfocusout: function(e) { this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e) }, onkeyup: function(t, n) { var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t) }, onclick: function(e) { e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode) }, highlight: function(t, n, i) { "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i) }, unhighlight: function(t, n, i) { "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i) } }, setDefaults: function(t) { e.extend(e.validator.defaults, t) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), step: e.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function() {
                function t(t) {!this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")); var n = e.data(this.form, "validator"),
                        i = "on" + t.type.replace(/^validate/, ""),
                        r = n.settings;
                    r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t) }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var n, i = this.groups = {};
                e.each(this.settings.groups, function(t, n) { "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) { i[n] = t }) }), n = this.settings.rules, e.each(n, function(t, i) { n[t] = e.validator.normalizeRule(i) }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler) }, form: function() { return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function() { this.prepareForm(); for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]); return this.valid() }, element: function(t) { var n, i, r = this.clean(t),
                    o = this.validationTargetFor(r),
                    a = this,
                    s = !0; return void 0 === o ? delete this.invalid[r.name] : (this.prepareElement(o), this.currentElements = e(o), (i = this.groups[o.name]) && e.each(this.groups, function(e, t) { t === i && e !== o.name && (r = a.validationTargetFor(a.clean(a.findByName(e)))) && r.name in a.invalid && (a.currentElements.push(r), s = a.check(r) && s) }), n = !1 !== this.check(o), s = s && n, this.invalid[o.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), s }, showErrors: function(t) { if (t) { var n = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) { return { message: e, element: n.findByName(t)[0] } }), this.successList = e.grep(this.successList, function(e) { return !(e.name in t) }) }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function() { e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors(); var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t) }, resetElements: function(e) { var t; if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass) }, numberOfInvalids: function() { return this.objectLength(this.invalid) }, objectLength: function(e) { var t, n = 0; for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++; return n }, hideErrors: function() { this.hideThese(this.toHide) }, hideThese: function(e) { e.not(this.containers).text(""), this.addWrapper(e).hide() }, valid: function() { return 0 === this.size() }, size: function() { return this.errorList.length }, focusInvalid: function() { if (this.settings.focusInvalid) try { e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (e) {} }, findLastActive: function() { var t = this.lastActive; return t && 1 === e.grep(this.errorList, function(e) { return e.element.name === t.name }).length && t }, elements: function() { var t = this,
                    n = {}; return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { var i = this.name || e(this).attr("name"); return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = i), !(i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0)) }) }, clean: function(t) { return e(t)[0] }, errors: function() { var t = this.settings.errorClass.split(" ").join("."); return e(this.settings.errorElement + "." + t, this.errorContext) }, resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]) }, reset: function() { this.resetInternals(), this.currentElements = e([]) }, prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function(e) { this.reset(), this.toHide = this.errorsFor(e) }, elementValue: function(t) { var n, i, r = e(t),
                    o = t.type; return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n) }, check: function(t) { t = this.validationTargetFor(this.clean(t)); var n, i, r, o, a = e(t).rules(),
                    s = e.map(a, function(e, t) { return t }).length,
                    c = !1,
                    l = this.elementValue(t); if ("function" == typeof a.normalizer ? o = a.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o) { if ("string" != typeof(l = o.call(t, l))) throw new TypeError("The normalizer should return a string value.");
                    delete a.normalizer } for (i in a) { r = { method: i, parameters: a[i] }; try { if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, r.parameters)) && 1 === s) { c = !0; continue } if (c = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t))); if (!n) return this.formatAndAdd(t, r), !1 } catch (e) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e } } if (!c) return this.objectLength(a) && this.successList.push(t), !0 }, customDataMessage: function(t, n) { return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg") }, customMessage: function(e, t) { var n = this.settings.messages[e]; return n && (n.constructor === String ? n : n[t]) }, findDefined: function() { for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e] }, defaultMessage: function(t, n) { "string" == typeof n && (n = { method: n }); var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g; return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i }, formatAndAdd: function(e, t) { var n = this.defaultMessage(e, t);
                this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n }, addWrapper: function(e) { return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e }, defaultShowErrors: function() { var e, t, n; for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message); if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]); if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function() { return this.currentElements.not(this.invalidElements()) }, invalidElements: function() { return e(this.errorList).map(function() { return this.element }) }, showLabel: function(t, n) { var i, r, o, a, s = this.errorsFor(t),
                    c = this.idOrName(t),
                    l = e(t).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(n)) : (s = e("<" + this.settings.errorElement + ">").attr("id", c + "-error").addClass(this.settings.errorClass).html(n || ""), i = s, this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), s.is("label") ? s.attr("for", c) : 0 === s.parents("label[for='" + this.escapeCssMeta(c) + "']").length && (o = s.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (l += " " + o) : l = o, e(t).attr("aria-describedby", l), (r = this.groups[t.name]) && (a = this, e.each(a.groups, function(t, n) { n === r && e("[name='" + a.escapeCssMeta(t) + "']", a.currentForm).attr("aria-describedby", s.attr("id")) })))), !n && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s) }, errorsFor: function(t) { var n = this.escapeCssMeta(this.idOrName(t)),
                    i = e(t).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *"; return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r) }, escapeCssMeta: function(e) { return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1") }, idOrName: function(e) { return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name) }, validationTargetFor: function(t) { return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0] }, checkable: function(e) { return /radio|checkbox/i.test(e.type) }, findByName: function(t) { return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']") }, getLength: function(t, n) { switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length } return t.length }, depend: function(e, t) { return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t) }, dependTypes: { boolean: function(e) { return e }, string: function(t, n) { return !!e(t, n.form).length }, function: function(e, t) { return e(t) } }, optional: function(t) { var n = this.elementValue(t); return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch" }, startRequest: function(t) { this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0) }, stopRequest: function(t, n) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function(t, n) { return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) }) }, destroy: function() { this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur") } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function(t, n) { t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t) }, classRules: function(t) { var n = {},
                i = e(t).attr("class"); return i && e.each(i.split(" "), function() { this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]) }), n }, normalizeAttributeRule: function(e, t, n, i) { /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0) }, attributeRules: function(t) { var n, i, r = {},
                o = e(t),
                a = t.getAttribute("type"); for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, a, n, i); return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r }, dataRules: function(t) { var n, i, r = {},
                o = e(t),
                a = t.getAttribute("type"); for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, n, i); return r }, staticRules: function(t) { var n = {},
                i = e.data(t.form, "validator"); return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n }, normalizeRules: function(t, n) { return e.each(t, function(i, r) { if (!1 !== r) { if (r.param || r.depends) { var o = !0; switch (typeof r.depends) {
                            case "string":
                                o = !!e(r.depends, n.form).length; break;
                            case "function":
                                o = r.depends.call(n, n) }
                        o ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]) } } else delete t[i] }), e.each(t, function(i, r) { t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r }), e.each(["minlength", "maxlength"], function() { t[this] && (t[this] = Number(t[this])) }), e.each(["rangelength", "range"], function() { var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])])) }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t }, normalizeRule: function(t) { if ("string" == typeof t) { var n = {};
                e.each(t.split(/\s/), function() { n[this] = !0 }), t = n } return t }, addMethod: function(t, n, i) { e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t)) }, methods: { required: function(t, n, i) { if (!this.depend(i, n)) return "dependency-mismatch"; if ("select" === n.nodeName.toLowerCase()) { var r = e(n).val(); return r && r.length > 0 } return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0 }, email: function(e, t) { return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) }, url: function(e, t) { return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e) }, date: function(e, t) { return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString()) }, dateISO: function(e, t) { return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e) }, number: function(e, t) { return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e) }, digits: function(e, t) { return this.optional(t) || /^\d+$/.test(e) }, minlength: function(t, n, i) { var r = e.isArray(t) ? t.length : this.getLength(t, n); return this.optional(n) || r >= i }, maxlength: function(t, n, i) { var r = e.isArray(t) ? t.length : this.getLength(t, n); return this.optional(n) || r <= i }, rangelength: function(t, n, i) { var r = e.isArray(t) ? t.length : this.getLength(t, n); return this.optional(n) || r >= i[0] && r <= i[1] }, min: function(e, t, n) { return this.optional(t) || e >= n }, max: function(e, t, n) { return this.optional(t) || e <= n }, range: function(e, t, n) { return this.optional(t) || e >= n[0] && e <= n[1] }, step: function(t, n, i) { var r, o = e(n).attr("type"),
                    a = "Step attribute on input type " + o + " is not supported.",
                    s = ["text", "number", "range"],
                    c = new RegExp("\\b" + o + "\\b"),
                    l = function(e) { var t = ("" + e).match(/(?:\.(\d+))?$/); return t && t[1] ? t[1].length : 0 },
                    u = function(e) { return Math.round(e * Math.pow(10, r)) },
                    d = !0; if (o && !c.test(s.join())) throw new Error(a); return r = l(i), (l(t) > r || u(t) % u(i) != 0) && (d = !1), this.optional(n) || d }, equalTo: function(t, n, i) { var r = e(i); return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { e(n).valid() }), t === r.val() }, remote: function(t, n, i, r) { if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote"; var o, a, s, c = this.previousValue(n, r); return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), c.originalMessage = c.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = c.message, i = "string" == typeof i && { url: i } || i, s = e.param(e.extend({ data: t }, i.data)), c.old === s ? c.valid : (c.old = s, o = this, this.startRequest(n), a = {}, a[n.name] = t, e.ajax(e.extend(!0, { mode: "abort", port: "validate" + n.name, dataType: "json", data: a, context: o.currentForm, success: function(e) { var i, a, s, l = !0 === e || "true" === e;
                        o.settings.messages[n.name][r] = c.originalMessage, l ? (s = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(n), o.formSubmitted = s, o.successList.push(n), o.invalid[n.name] = !1, o.showErrors()) : (i = {}, a = e || o.defaultMessage(n, { method: r, parameters: t }), i[n.name] = c.message = a, o.invalid[n.name] = !0, o.showErrors(i)), c.valid = l, o.stopRequest(n, l) } }, i)), "pending") } } }); var t, n = {}; return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) { var r = e.port; "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i) }) : (t = e.ajax, e.ajax = function(i) { var r = ("mode" in i ? i : e.ajaxSettings).mode,
            o = ("port" in i ? i : e.ajaxSettings).port; return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments) }), e });
var dockerComposeEvents = function() { $(".docker-compose").validate({ errorClass: "form-error", errorElement: "span", rules: { "docker-compose-accesskey": { required: !1, minlength: 5 }, "docker-compose-secretkey": { required: !1, minlength: 8 }, "docker-compose-volumename": { required: !1, minlength: 2 }, "docker-compose-nodes": { required: !0, number: !0, min: 4, max: 16, step: 2 } }, messages: { "docker-compose-accesskey": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "docker-compose-secretkey": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "docker-compose-volumename": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "docker-compose-nodes": { min: jQuery.validator.format("Please enter a number greater than or equal to {0}"), max: jQuery.validator.format("Please enter a number less than or equal to {0}"), step: jQuery.validator.format("Please enter an even number") } }, submitHandler: function() { for (var e = { accessKey: $('[name="docker-compose-accesskey"]').val() || genAccessKey(), secretKey: $('[name="docker-compose-secretkey"]').val() || genSecretKey(), volumeName: $('[name="docker-compose-volumename"]').val() || "minio-data", noOfNodes: +$('[name="docker-compose-nodes"]').val(), nodes: "", volumes: "", commands: [], yaml: "" }, t = 1; t < e.noOfNodes + 1; t++) e.commands.push("http://minio" + [t] + "/export "); for (n = 1; n < e.noOfNodes + 1; n++) port = 9e3 + n, e.nodes += " minio" + [n] + ":\n  image: minio/minio\n  volumes:\n   - " + e.volumeName + [n] + ':/export\n  ports:\n   - "' + [port] + ':9000"\n  environment:\n   MINIO_ACCESS_KEY: ' + e.accessKey + "\n   MINIO_SECRET_KEY: " + e.secretKey + "\n  command: server " + e.commands.join("") + "\n"; for (var n = 1; n < e.noOfNodes + 1; n++) e.volumes += "  " + e.volumeName + [n] + ":\n";
                e.yaml = "version: '2'\n\nservices:\n" + e.nodes + "\n\n## By default this config uses default local driver,\n## For custom volumes replace with volume driver configuration.\nvolumes:\n" + e.volumes, $(".docker-compose__pre").text(e.yaml), $(".docker-compose__pre").closest(".code-block").fadeIn(500).addClass("toggled"), setTimeout(function() { $(".docker-compose__pre").closest(".code-block").removeClass("toggled") }, 500) } }) },
    dockerSwarmEvents = function() { $(".docker-swarm").validate({ errorClass: "form-error", errorElement: "span", rules: { "docker-swarm-accesskey": { required: !1, minlength: 5 }, "docker-swarm-secretkey": { required: !1, minlength: 8 }, "docker-swarm-volumename": { required: !1, minlength: 2 }, "docker-swarm-nodes": { required: !0, number: !0, min: 4, max: 16, step: 2 } }, messages: { "docker-swarm-accesskey": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "docker-swarm-secretkey": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "docker-swarm-volumename": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "docker-swarm-nodes": { min: jQuery.validator.format("Please enter a number greater than or equal to {0}"), max: jQuery.validator.format("Please enter a number less than or equal to {0}"), step: jQuery.validator.format("Please enter an even number") } }, submitHandler: function() { for (var e = { accessKey: $('[name="docker-swarm-accesskey"]').val() || genAccessKey(), secretKey: $('[name="docker-swarm-secretkey"]').val() || genSecretKey(), volumeName: $('[name="docker-swarm-volumename"]').val() || "minio-data", noOfNodes: +$('[name="docker-swarm-nodes"]').val(), nodes: "", volumes: "", commands: [], yaml: "" }, t = 1; t < e.noOfNodes + 1; t++) e.commands.push("http://minio" + [t] + "/export "); for (n = 1; n < e.noOfNodes + 1; n++) port = 9e3 + n, e.nodes += " minio" + [n] + ":\n  image: minio/minio\n  volumes:\n   - " + e.volumeName + [n] + ':/export\n  ports:\n   - "' + [port] + ':9000"\n  networks:\n   - minio_distributed\n  environment:\n   MINIO_ACCESS_KEY: ' + e.accessKey + "\n   MINIO_SECRET_KEY: " + e.secretKey + "\n  deploy:\n   restart_policy:\n    delay: 10s\n    max_attempts: 10\n    window: 60s\n  command: server " + e.commands.join("") + "\n\n"; for (var n = 1; n < e.noOfNodes + 1; n++) e.volumes += "  " + e.volumeName + [n] + ":\n";
                e.yaml = "version: '3'\n\nservices:\n" + e.nodes + "volumes:\n" + e.volumes + "\nnetworks:\n minio_distributed:\n  driver: overlay", $(".docker-swarm__pre").text(e.yaml), $(".docker-swarm__pre").closest(".code-block").fadeIn(500).addClass("toggled"), setTimeout(function() { $(".docker-swarm__pre").closest(".code-block").removeClass("toggled") }, 500) } }) },
    kubernetesEvents = function() { $(".kubernetes").validate({ errorClass: "form-error", errorElement: "span", rules: { "kubernetes-accesskey": { required: !1, minlength: 5, normalizer: function(e) { return $.trim(e) } }, "kubernetes-secretkey": { required: !1, minlength: 8, normalizer: function(e) { return $.trim(e) } }, "kubernetes-nodes": { required: !0, number: !0, min: 4, max: 16, step: 2 }, "kubernetes-size": { required: !0, number: !0, min: 2 }, "kubernetes-mode": { required: !0 } }, messages: { "kubernetes-accesskey": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "kubernetes-secretkey": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "kubernetes-volumename": { minlength: jQuery.validator.format("Please enter atleast {0} characters") }, "kubernetes-nodes": { min: jQuery.validator.format("Please enter a number greater than or equal to {0}"), max: jQuery.validator.format("Please enter a number less than or equal to {0}"), step: jQuery.validator.format("Please enter an even number") }, "kubernetes-size": { min: jQuery.validator.format("Please enter a value greater than or equal to {0}") } }, submitHandler: function(e) { var t = { accessKey: $('[name="kubernetes-accesskey"]').val() || genAccessKey(), secretKey: $('[name="kubernetes-secretkey"]').val() || genSecretKey(), mode: $('[name="kubernetes-mode"]').text(), noOfNodes: $('[name="kubernetes-nodes"]').val(), size: $('[name="kubernetes-size"]').val(), sizeTypeVal: $('[name="kubernetes-size-type"]').val() || "GB", sizeType: "", nodes: "", distributed: "", standalone: "", yaml: "" }; "GB" == t.sizeTypeVal && (t.sizeType = "Gi"), "TB" == t.sizeTypeVal && (t.sizeType = "Ti"); for (var n = 0; n < t.noOfNodes; n++) t.nodes += "        - http://minio-" + [n] + ".minio.default.svc.cluster.local/data\n";
                t.distributed = "apiVersion: v1\nkind: Service\nmetadata:\n  name: minio\n  labels:\n    app: minio\nspec:\n  clusterIP: None\n  ports:\n    - port: 9000\n      name: minio\n  selector:\n    app: minio\n---\napiVersion: apps/v1beta1\nkind: StatefulSet\nmetadata:\n  name: minio\nspec:\n  serviceName: minio\n  replicas: " + t.noOfNodes + '\n  template:\n    metadata:\n      labels:\n        app: minio\n    spec:\n      containers:\n      - name: minio\n        env:\n        - name: MINIO_ACCESS_KEY\n          value: "' + t.accessKey + '"\n        - name: MINIO_SECRET_KEY\n          value: "' + t.secretKey + '"\n        image: minio/minio\n        args:\n        - server\n' + t.nodes + "        ports:\n        - containerPort: 9000\n          # This ensures containers are allocated on separate hosts. Remove hostPort to allow multiple Minio containers on one host\n          hostPort: 9000\n        # These volume mounts are persistent. Each pod in the PetSet\n        # gets a volume mounted based on this field.\n        volumeMounts:\n        - name: data\n          mountPath: /data\n  # These are converted to volume claims by the controller\n  # and mounted at the paths mentioned above.\n  volumeClaimTemplates:\n  - metadata:\n      name: data\n    spec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: " + t.size + t.sizeType + "\n      # Uncomment and add storageClass specific to your requirements below. Read more https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class-1\n      #storageClassName:\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: minio-service\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 9000\n      targetPort: 9000\n      protocol: TCP\n  selector:\n    app: minio", t.standalone = "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  # This name uniquely identifies the PVC. Will be used in deployment below.\n  name: minio-pv-claim\n  labels:\n    app: minio-storage-claim\nspec:\n  # Read more about access modes here: http://kubernetes.io/docs/user-guide/persistent-volumes/#access-modes\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    # This is the request for storage. Should be available in the cluster.\n    requests:\n      storage: " + t.size + t.sizeType + '\n  # Uncomment and add storageClass specific to your requirements below. Read more https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class-1\n  #storageClassName:\n---\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  # This name uniquely identifies the Deployment\n  name: minio-deployment\nspec:\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        # Label is used as selector in the service.\n        app: minio\n    spec:\n      # Refer to the PVC created earlier\n      volumes:\n      - name: storage\n        persistentVolumeClaim:\n          # Name of the PVC created earlier\n          claimName: minio-pv-claim\n      containers:\n      - name: minio\n        # Pulls the default Minio image from Docker Hub\n        image: minio/minio\n        args:\n        - server\n        - /storage\n        env:\n        # Minio access key and secret key\n        - name: MINIO_ACCESS_KEY\n          value: "' + t.accessKey + '"\n        - name: MINIO_SECRET_KEY\n          value: "' + t.secretKey + '"\n        ports:\n        - containerPort: 9000\n          # This ensures containers are allocated on separate hosts. Remove hostPort to allow multiple Minio containers on one host\n          hostPort: 9000\n        # Mount the volume into the pod\n        volumeMounts:\n        - name: storage # must match the volume name, above\n          mountPath: "/storage"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: minio-service\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 9000\n      targetPort: 9000\n      protocol: TCP\n  selector:\n    app: minio', t.mode = $('[name="kubernetes-mode"]').val(), "Distributed" == t.mode ? t.yaml = t.distributed : t.yaml = t.standalone, $(".kubernetes__pre").text(t.yaml), $(".kubernetes__pre").closest(".code-block").fadeIn(500).addClass("toggled"), setTimeout(function() { $(".kubernetes__pre").closest(".code-block").removeClass("toggled") }, 500) } }) },
    bindAnalyticsEvents = function() { $("#home-page").click(function() { track("home", { type: "click" }) }), $("#minio-quickstart-guide").click(function() { track("docs:minio:quickstart-guide", { type: "click" }) }), $("#docs_link").on("click", function() { track("docs", { type: "click" }) }), $("#blog_link").on("click", function() { track("blog", { type: "click" }) }), $("#github_link").on("click", function() { track("github", { type: "click" }) }), $("#join_github").on("click", function() { track("github", { type: "click" }) }), $("#join_slack").on("click", function() { track("slack", { type: "click" }) }), $("#join_slack_1").on("click", function() { track("slack", { type: "click" }) }), $("#join_slack_mobile").on("click", function() { track("slack:mobile", { type: "click" }) }), $("#join_twitter").on("click", function() { track("twitter", { type: "click" }) }), $("#docs_github_link").on("click", function() { track("docs:github:contributor", { type: "click" }) }), $("#server-tab").click(function() { track("download:minio:server", { type: "click" }) }), $("#client-tab").click(function() { track("download:minio:client", { type: "click" }) }), $("#sdk-tab").click(function() { track("download:sdk", { type: "click" }) }), $("#linux-docker-github").click(function() { track("download:minio:server:linux:docker:github", { type: "click" }) }), $("#macos-github").click(function() { track("download:minio:server:macos:github", { type: "click" }) }), $("#source-github").click(function() { track("download:minio:server:source:github", { type: "click" }) }), $("#windows-x64-github").click(function() { track("download:minio:server:windows:x64:github", { type: "click" }) }), $("#linux-x64-github").click(function() { track("download:minio:server:linux:x64:github", { type: "click" }) }), $("#server-linux").click(function() { track("download:minio:server:linux", { type: "click" }) }), $("#server-windows").click(function() { track("download:minio:server:windows", { type: "click" }) }), $("#server-macos").click(function() { track("download:minio:server:macos", { type: "click" }) }), $("#server-source").click(function() { track("download:minio:server:source", { type: "click" }) }), $("#client-linux").click(function() { track("download:minio:client:linux", { type: "click" }) }), $("#client-windows").click(function() { track("download:minio:client:windows", { type: "click" }) }), $("#client-macos").click(function() { track("download:minio:client:macos", { type: "click" }) }), $("#client-source").click(function() { track("download:minio:client:source", { type: "click" }) }), $("#sdk-go").click(function() { track("download:sdk:go", { type: "click" }) }), $("#sdk-nodejs").click(function() { track("download:sdk:nodejs", { type: "click" }) }), $("#sdk-java").click(function() { track("download:sdk:java", { type: "click" }) }), $("#sdk-python").click(function() { track("download:sdk:python", { type: "click" }) }), $("#sdk-dotnet").click(function() { track("download:sdk:dotnet", { type: "click" }) }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#download-server-linux-docker":
                    track("download:minio:server:linux:docker", { type: "click" }); break;
                case "#download-server-linux-x64":
                    track("download:minio:server:linux:x64", { type: "click" }); break;
                case "#download-server-windows-x64":
                    track("download:minio:server:windows:x64", { type: "click" }); break;
                case "#download-server-macos-x64":
                    track("download:minio:server:macos:x64", { type: "click" }); break;
                case "#download-client-linux-x64":
                    track("download:minio:client:linux:x64", { type: "click" }); break;
                case "#download-client-windows-x64":
                    track("download:minio:client:windows:x64", { type: "click" }); break;
                case "#download-client-macos-x64":
                    track("download:minio:client:macos:x64", { type: "click" }); break;
                case "#download-sdk-java-maven":
                    track("download:sdk:java:maven", { type: "click" }); break;
                case "#download-sdk-java-gradle":
                    track("download:sdk:java:gradle", { type: "click" }); break;
                case "#download-sdk-dotnet-framework":
                    track("download:sdk:dotnet:framework", { type: "click" }); break;
                case "#download-sdk-dotnet-core":
                    track("download:sdk:dotnet:core", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#generate-docker":
                    track("docker:cli", { type: "click" }); break;
                case "#generate-docker-compose":
                    track("docker:compose", { type: "click" }); break;
                case "#generate-docker-swarm":
                    track("docker:swarm", { type: "click" }); break;
                case "#docker-features":
                    track("docker:features", { type: "click" }); break;
                case "#docker-orchestration":
                    track("docker:orchestration", { type: "click" }); break;
                case "#docker-tools":
                    track("docker:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#generate-kubectl":
                    track("kubernetes:cli", { type: "click" }); break;
                case "#generate-helm-package":
                    track("kubernetes:helm", { type: "click" }); break;
                case "#kubernetes-features":
                    track("kubernetes:features", { type: "click" }); break;
                case "#kubernetes-architecture":
                    track("kubernetes:architecture", { type: "click" }); break;
                case "#kubernetes-tools":
                    track("kubernetes:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#drive-single":
                    track("drive:binary:single", { type: "click" }); break;
                case "#drive-multiple":
                    track("drive:binary:multiple", { type: "click" }); break;
                case "#drive-distributed":
                    track("drive:binary:distributed", { type: "click" }); break;
                case "#drive-features":
                    track("drive:features", { type: "click" }); break;
                case "#drive-architecture":
                    track("drive:architecture", { type: "click" }); break;
                case "#drive-tools":
                    track("drive:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#nas-binary":
                    track("nas:binary", { type: "click" }); break;
                case "#nas-features":
                    track("nas:features", { type: "click" }); break;
                case "#nas-architecture":
                    track("nas:architecture", { type: "click" }); break;
                case "#nas-tools":
                    track("nas:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#azure-gateway-docker":
                    track("azure:gateway:docker", { type: "click" }); break;
                case "#azure-gateway-binary":
                    track("azure:gateway:binary", { type: "click" }); break;
                case "#azure-features":
                    track("azure:features", { type: "click" }); break;
                case "#azure-architecture":
                    track("azure:architecture", { type: "click" }); break;
                case "#azure-tools":
                    track("azure:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#gcp-generate-gateway-mode":
                    track("gcp:gateway", { type: "click" }); break;
                case "#gcp-generate-server-mode":
                    track("gcp:server", { type: "click" }); break;
                case "#gcp-features":
                    track("gcp:features", { type: "click" }); break;
                case "#gcp-architecture":
                    track("gcp:architecture", { type: "click" }); break;
                case "#gcp-tools":
                    track("gcp:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#cf-generate-pivotal":
                    track("cf:pivotal", { type: "click" }); break;
                case "#cf-generate-bosh":
                    track("cf:bosh", { type: "click" }); break;
                case "#cf-features":
                    track("cf:features", { type: "click" }); break;
                case "#cf-architecture":
                    track("cf:architecture", { type: "click" }); break;
                case "#cf-tools":
                    track("cf:tools", { type: "click" }) } }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { switch ($(e.target).attr("href")) {
                case "#dcos-features":
                    track("dcos:features", { type: "click" }); break;
                case "#dcos-architecture":
                    track("dcos:architecture", { type: "click" }); break;
                case "#dcos-tools":
                    track("dcos:tools", { type: "click" }) } }), $("#sdk-java-quickstart-guide").click(function() { track("docs:sdk:java-quickstart-guide", { type: "click" }) }), $("#sdk-go-quickstart-guide").click(function() { track("docs:sdk:go-quickstart-guide", { type: "click" }) }), $("#sdk-nodejs-quickstart-guide").click(function() { track("docs:sdk:nodejs-quickstart-guide", { type: "click" }) }), $("#sdk-python-quickstart-guide").click(function() { track("docs:sdk:python-quickstart-guide", { type: "click" }) }), $("#sdk-dotnet-quickstart-guide").click(function() { track("docs:sdk:dotnet-quickstart-guide", { type: "click" }) }), $("#sdk-java-api-reference").click(function() { track("docs:sdk:java-api-reference", { type: "click" }) }), $("#sdk-go-api-reference").click(function() { track("docs:sdk:go-api-reference", { type: "click" }) }), $("#sdk-nodejs-api-reference").click(function() { track("docs:sdk:nodejs-api-reference", { type: "click" }) }), $("#sdk-python-api-reference").click(function() { track("docs:sdk:python-api-reference", { type: "click" }) }), $("#sdk-dotnet-api-reference").click(function() { track("docs:sdk:dotnet-api-reference", { type: "click" }) }), $("#minio-client-quickstart-guide").click(function() { track("docs:client:quickstart-guide", { type: "click" }) }), $("#minio-docker-quickstart-guide").click(function() { track("docs:server:docker:quickstart-guide", { type: "click" }) }), $("#office-map").click(function() { track("map", { type: "click" }) }), $("#github").click(function() { track("github", { type: "click" }) }), $("#twitter").click(function() { track("twitter", { type: "click" }) }), $("#facebook").click(function() { track("facebook", { type: "click" }) }), $("#blog").click(function() { track("blog", { type: "click" }) }), $("#linkedin").click(function() { track("linkedin", { type: "click" }) }), $(".generate__btn--kubernetes").click(function() { track("generate:kubernetes", { type: "click" }) }), $(".generate__btn--docker-compose").click(function() { track("generate:compose", { type: "click" }) }), $(".generate__btn--docker-swarm").click(function() { track("generate:swarm", { type: "click" }) }), $(document).on("click", ".clipboard__btn", function() { track(hashToEvent("#" + $(this).attr("id")), { type: "click" }) }), $(document).on("click", ".download__clipboard", function() { track(hashToEvent("#" + $(this).attr("id")), { type: "click" }) }) };
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("html").addClass("ismobile");
var bindCommonEvents = function() {
        function e(e) { switch (e) {
                case "gcp-generate-gateway-mode-docker":
                    track("gcp:gateway:docker", { type: "click" }); break;
                case "gcp-generate-gateway-mode-binary":
                    track("gcp:gateway:binary", { type: "click" }); break;
                case "gcp-generate-gateway-mode-kubernetes":
                    track("gcp:gateway:kubernetes", { type: "click" }); break;
                case "cf-generate-server-mode-docker":
                    track("cf:bosh:standalone", { type: "click" }); break;
                case "cf-generate-server-mode-binary":
                    track("cf:bosh:distributed", { type: "click" }); break;
                case "kubernetes-generate-gateway-mode-docker":
                case "kubernetes-generate-gateway-mode-binary":
                    track("kubernetes:cli:distributed", { type: "click" }); break;
                case "kubernetes-generate-server-mode-docker":
                    track("kubernetes:helm:standalone", { type: "click" }); break;
                case "kubernetes-generate-server-mode-binary":
                    track("kubernetes:helm:distributed", { type: "click" }) } }

        function t(e, n, i) { return void 0 === i || 0 == +i ? Math[e](n) : (n = +n, i = +i, isNaN(n) || "number" != typeof i || i % 1 != 0 ? NaN : n < 0 ? -t(e, -n, i) : (n = n.toString().split("e"), n = Math[e](+(n[0] + "e" + (n[1] ? +n[1] - i : -i))), +((n = n.toString().split("e"))[0] + "e" + (n[1] ? +n[1] + i : i)))) }

        function n(e) { return humanizeData = Math.floor10(e / 1e3, -1), humanizeData >= 1e3 ? (humanizeData = Math.floor10(humanizeData / 1e3, -1), humanizeData + "M+") : humanizeData + "K+" }
        $body = $("body"), $('[data-toggle="tooltip"]')[0] && $('[data-toggle="tooltip"]').tooltip(), $(".header").headroom({ offset: 85, tolerance: 5 }), $(".select")[0] && $body.on("click", ".select__options > li > a", function(e) { e.preventDefault(); var t = $(this).closest(".select"),
                n = $(this).text();
            t.find(".form-group").addClass("form-group--active"), t.find(".select__text").val(n) }), $(".generate__mode")[0] && $body.on("click", ".generate__mode .select__options > li > a", function() { "Distributed" == $(this).text() ? $(".generate__mode__nodes").show() : $(".generate__mode__nodes").hide() }), $(".clipboard")[0] && new Clipboard(".clipboard__btn", { text: function(e) { return e.nextElementSibling.innerText } }).on("success", function(e) { e.clearSelection(), e.trigger.textContent = "Copied to clipboard", setTimeout(function() { e.trigger.textContent = "Copy" }, 2e3) }), $(".form-group")[0] && $body.on("input", ".form-control", function() { var e = $(this).val();
            $(this).parent()[e.length > 0 ? "addClass" : "removeClass"]("form-group--active") }), $(".collapse")[0] && ($(".collapse").on("show.bs.collapse", function(t) { e(t.target.id), $(this).closest(".panel").find(".panel-heading").addClass("active") }), $(".collapse").on("hide.bs.collapse", function(e) { $(this).closest(".panel").find(".panel-heading").removeClass("active") }), $(".collapse.in").each(function() { $(this).closest(".panel").find(".panel-heading").addClass("active") })), Math.floor10 || (Math.floor10 = function(e, n) { return t("floor", e, n) }), $(".cs-slack-members")[0] && $.getJSON("assets/total_slack_members.json").done(function(e) { $(".cs-slack-members").text(e) }), $(".cs-github-stars")[0] && $.getJSON("assets/total_stars.json").done(function(e) { $(".cs-github-stars").text(n(e)) }), $(".cs-docker-pulls")[0] && $.getJSON("assets/total_docker_pulls.json").done(function(e) { $(".cs-docker-pulls").text(n(e)) }), $(".community__members")[0] && $.getJSON("assets/top_contribs.json", function(e) { $.each(e, function(e, t) { var n = '<a href="' + t[1].url + '"><img src="github/' + t[1].avatar + '" alt="' + t[1].commits + '"><div class="community__members__name"><span>' + t[0] + "</span></div></a>";
                $(".community__members").append(n) }) }), $(".dropdown-menu-selection li a").unbind().click(function(e) { $(".dropdown-selection:first-child").html($(this).text() + '<span class="caret"></span>') }), $(".dropdown-menu-selection-binary li a").unbind().click(function(e) { $(".dropdown-selection-binary:first-child").html($(this).text() + '<span class="caret"></span>') }), $(".dropdown-menu-selection-docker li a").unbind().click(function(e) { $(".dropdown-selection-docker:first-child").html($(this).text() + '<span class="caret"></span>') }), $(".code-block__multiple")[0] && $(".code-block__multiple").each(function(e, t) { var n = $(this).data("code-type"),
                i = $(this).text().split("\n");
            t.innerHTML = "", $.each(i, function(e, i) { 0 !== i.length && (t.innerHTML = t.innerHTML + '<span class="pre-helper pre-helper--' + n + '" />' + i + "\n") }) }) },
    ajaxCallBack = function() { dockerComposeEvents(), dockerSwarmEvents(), kubernetesEvents(), bindCommonEvents(), bindAnalyticsEvents() };
$(document).ready(function() { document.cookie = "repost=" + getSessionId() + "; path=/", track(pathToEvent($(this).attr("location").pathname), { type: "click" }), $("body").on("click", ".header__nav__toggle", function() { $(".header__nav").toggleClass("header__nav--active"), track("header:nav", { type: "click" }) }), ajaxCallBack(), $(".platforms__nav > a").click(function(e) { e.preventDefault(); var t = $(this),
            n = t.attr("href"),
            i = t.attr("alt");
        track(pathToEvent(n), { type: "click" }), t.hasClass("active") || t.addClass("active platforms__loading"), $("#content_holder").load(n + " #content_holder", function(e) { setTimeout(function() { t.removeClass("platforms__loading") }), $(".platforms__nav > a").removeClass("active"), t.addClass("active"), window.history.pushState(i, i, n), document.title = i, ajaxCallBack() }) }), $(".download")[0] && (setTimeout(function() { $(".download").addClass("download--active") }, 200), "" !== location.hash && (1 == location.hash.indexOf("download-client-") && $('a[href="#download-client"]').tab("show"), 1 == location.hash.indexOf("download-sdk-") && $('a[href="#download-sdk"]').tab("show"), $('a[href="' + location.hash + '"]').tab("show")), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) { history.pushState ? history.pushState(null, null, "#" + $(e.target).attr("href").substr(1)) : location.hash = "#" + $(e.target).attr("href").substr(1) })) });