// HACK: Copied from Readlang minified source to get accurate word count

/* eslint-disable */

var XRegExp
if (
  ((XRegExp =
    XRegExp ||
    (function(e) {
      function t(e, t, n) {
        var i
        for (i in u.prototype)
          u.prototype.hasOwnProperty(i) && (e[i] = u.prototype[i])
        return (
          (e.xregexp = {
            captureNames: t,
            isNative: !!n,
          }),
          e
        )
      }
      function n(e) {
        return (
          (e.global ? 'g' : '') +
          (e.ignoreCase ? 'i' : '') +
          (e.multiline ? 'm' : '') +
          (e.extended ? 'x' : '') +
          (e.sticky ? 'y' : '')
        )
      }
      function i(e, i, o) {
        if (!u.isRegExp(e)) throw new TypeError('type RegExp expected')
        var r = f.replace.call(n(e) + (i || ''), C, '')
        return (
          o && (r = f.replace.call(r, new RegExp('[' + o + ']+', 'g'), '')),
          (e =
            e.xregexp && !e.xregexp.isNative
              ? t(
                  u(e.source, r),
                  e.xregexp.captureNames
                    ? e.xregexp.captureNames.slice(0)
                    : null
                )
              : t(new RegExp(e.source, r), null, !0))
        )
      }
      function o(e, t) {
        var n = e.length
        if (Array.prototype.lastIndexOf) return e.lastIndexOf(t)
        for (; n--; ) if (e[n] === t) return n
        return -1
      }
      function r(e, t) {
        return (
          Object.prototype.toString.call(e).toLowerCase() ===
          '[object ' + t + ']'
        )
      }
      function a(e) {
        return (
          (e = e || {}),
          'all' === e || e.all
            ? (e = {
                natives: !0,
                extensibility: !0,
              })
            : r(e, 'string') &&
              (e = u.forEach(
                e,
                /[^\s,]+/,
                function(e) {
                  this[e] = !0
                },
                {}
              )),
          e
        )
      }
      function s(e, t, n, i) {
        var o,
          r,
          a = v.length,
          s = null
        E = !0
        try {
          for (; a--; )
            if (
              ((r = v[a]),
              ('all' === r.scope || r.scope === n) &&
                (!r.trigger || r.trigger.call(i)) &&
                ((r.pattern.lastIndex = t),
                (o = p.exec.call(r.pattern, e)),
                o && o.index === t))
            ) {
              s = {
                output: r.handler.call(i, o, n),
                match: o,
              }
              break
            }
        } catch (l) {
          throw l
        } finally {
          E = !1
        }
        return s
      }
      function l(e) {
        ;(u.addToken = d[e ? 'on' : 'off']), (g.extensibility = e)
      }
      function c(e) {
        ;(RegExp.prototype.exec = (e ? p : f).exec),
          (RegExp.prototype.test = (e ? p : f).test),
          (String.prototype.match = (e ? p : f).match),
          (String.prototype.replace = (e ? p : f).replace),
          (String.prototype.split = (e ? p : f).split),
          (g.natives = e)
      }
      var u,
        d,
        h,
        g = {
          natives: !1,
          extensibility: !1,
        },
        f = {
          exec: RegExp.prototype.exec,
          test: RegExp.prototype.test,
          match: String.prototype.match,
          replace: String.prototype.replace,
          split: String.prototype.split,
        },
        p = {},
        m = {},
        v = [],
        w = 'default',
        b = 'class',
        y = {
          default: /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,
          class: /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/,
        },
        A = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,
        C = /([\s\S])(?=[\s\S]*\1)/g,
        F = /^(?:[?*+]|{\d+(?:,\d*)?})\??/,
        k = f.exec.call(/()??/, '')[1] === e,
        D = RegExp.prototype.sticky !== e,
        E = !1,
        B = 'gim' + (D ? 'y' : '')
      return (
        (u = function(n, o) {
          if (u.isRegExp(n)) {
            if (o !== e)
              throw new TypeError(
                "can't supply flags when constructing one RegExp from another"
              )
            return i(n)
          }
          if (E)
            throw new Error(
              "can't call the XRegExp constructor within token definition functions"
            )
          var r,
            a,
            l,
            c = [],
            d = w,
            h = {
              hasNamedCapture: !1,
              captureNames: [],
              hasFlag: function(e) {
                return o.indexOf(e) > -1
              },
            },
            g = 0
          if (
            ((n = n === e ? '' : String(n)),
            (o = o === e ? '' : String(o)),
            f.match.call(o, C))
          )
            throw new SyntaxError('invalid duplicate regular expression flag')
          for (
            n = f.replace.call(n, /^\(\?([\w$]+)\)/, function(e, t) {
              if (f.test.call(/[gy]/, t))
                throw new SyntaxError("can't use flag g or y in mode modifier")
              return (o = f.replace.call(o + t, C, '')), ''
            }),
              u.forEach(o, /[\s\S]/, function(e) {
                if (B.indexOf(e[0]) < 0)
                  throw new SyntaxError(
                    'invalid regular expression flag ' + e[0]
                  )
              });
            g < n.length;

          )
            (r = s(n, g, d, h)),
              r
                ? (c.push(r.output), (g += r.match[0].length || 1))
                : ((a = f.exec.call(y[d], n.slice(g))),
                  a
                    ? (c.push(a[0]), (g += a[0].length))
                    : ((l = n.charAt(g)),
                      '[' === l ? (d = b) : ']' === l && (d = w),
                      c.push(l),
                      ++g))
          return t(
            new RegExp(c.join(''), f.replace.call(o, /[^gimy]+/g, '')),
            h.hasNamedCapture ? h.captureNames : null
          )
        }),
        (d = {
          on: function(e, t, n) {
            ;(n = n || {}),
              e &&
                v.push({
                  pattern: i(e, 'g' + (D ? 'y' : '')),
                  handler: t,
                  scope: n.scope || w,
                  trigger: n.trigger || null,
                }),
              n.customFlags && (B = f.replace.call(B + n.customFlags, C, ''))
          },
          off: function() {
            throw new Error(
              'extensibility must be installed before using addToken'
            )
          },
        }),
        (u.addToken = d.off),
        (u.cache = function(e, t) {
          var n = e + '/' + (t || '')
          return m[n] || (m[n] = u(e, t))
        }),
        (u.escape = function(e) {
          return f.replace.call(e, /[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
        }),
        (u.exec = function(e, t, n, o) {
          var r,
            a = i(t, 'g' + (o && D ? 'y' : ''), o === !1 ? 'y' : '')
          return (
            (a.lastIndex = n = n || 0),
            (r = p.exec.call(a, e)),
            o && r && r.index !== n && (r = null),
            t.global && (t.lastIndex = r ? a.lastIndex : 0),
            r
          )
        }),
        (u.forEach = function(e, t, n, i) {
          for (var o, r = 0, a = -1; (o = u.exec(e, t, r)); )
            n.call(i, o, ++a, e, t), (r = o.index + (o[0].length || 1))
          return i
        }),
        (u.globalize = function(e) {
          return i(e, 'g')
        }),
        (u.install = function(e) {
          ;(e = a(e)),
            !g.natives && e.natives && c(!0),
            !g.extensibility && e.extensibility && l(!0)
        }),
        (u.isInstalled = function(e) {
          return !!g[e]
        }),
        (u.isRegExp = function(e) {
          return r(e, 'regexp')
        }),
        (u.matchChain = function(e, t) {
          return (function n(e, i) {
            for (
              var o = t[i].regex
                  ? t[i]
                  : {
                      regex: t[i],
                    },
                r = [],
                a = function(e) {
                  r.push(o.backref ? e[o.backref] || '' : e[0])
                },
                s = 0;
              s < e.length;
              ++s
            )
              u.forEach(e[s], o.regex, a)
            return i !== t.length - 1 && r.length ? n(r, i + 1) : r
          })([e], 0)
        }),
        (u.replace = function(t, n, o, r) {
          var a,
            s = u.isRegExp(n),
            l = n
          return (
            s
              ? (r === e && n.global && (r = 'all'),
                (l = i(n, 'all' === r ? 'g' : '', 'all' === r ? '' : 'g')))
              : 'all' === r && (l = new RegExp(u.escape(String(n)), 'g')),
            (a = p.replace.call(String(t), l, o)),
            s && n.global && (n.lastIndex = 0),
            a
          )
        }),
        (u.split = function(e, t, n) {
          return p.split.call(e, t, n)
        }),
        (u.test = function(e, t, n, i) {
          return !!u.exec(e, t, n, i)
        }),
        (u.uninstall = function(e) {
          ;(e = a(e)),
            g.natives && e.natives && c(!1),
            g.extensibility && e.extensibility && l(!1)
        }),
        (u.union = function(e, t) {
          var n,
            i,
            o,
            a,
            s = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
            l = 0,
            c = function(e, t, o) {
              var r = i[l - n]
              if (t) {
                if ((++l, r)) return '(?<' + r + '>'
              } else if (o) return '\\' + (+o + n)
              return e
            },
            d = []
          if (!r(e, 'array') || !e.length)
            throw new TypeError('patterns must be a nonempty array')
          for (a = 0; a < e.length; ++a)
            (o = e[a]),
              u.isRegExp(o)
                ? ((n = l),
                  (i = (o.xregexp && o.xregexp.captureNames) || []),
                  d.push(u(o.source).source.replace(s, c)))
                : d.push(u.escape(o))
          return u(d.join('|'), t)
        }),
        (u.version = '2.0.0'),
        (p.exec = function(t) {
          var i, r, a, s, l
          if (
            (this.global || (s = this.lastIndex),
            (i = f.exec.apply(this, arguments)))
          ) {
            if (
              (!k &&
                i.length > 1 &&
                o(i, '') > -1 &&
                ((a = new RegExp(
                  this.source,
                  f.replace.call(n(this), 'g', '')
                )),
                f.replace.call(String(t).slice(i.index), a, function() {
                  for (var t = 1; t < arguments.length - 2; ++t)
                    arguments[t] === e && (i[t] = e)
                })),
              this.xregexp && this.xregexp.captureNames)
            )
              for (l = 1; l < i.length; ++l)
                (r = this.xregexp.captureNames[l - 1]), r && (i[r] = i[l])
            this.global &&
              !i[0].length &&
              this.lastIndex > i.index &&
              (this.lastIndex = i.index)
          }
          return this.global || (this.lastIndex = s), i
        }),
        (p.test = function(e) {
          return !!p.exec.call(this, e)
        }),
        (p.match = function(e) {
          if (u.isRegExp(e)) {
            if (e.global) {
              var t = f.match.apply(this, arguments)
              return (e.lastIndex = 0), t
            }
          } else e = new RegExp(e)
          return p.exec.call(e, this)
        }),
        (p.replace = function(e, t) {
          var n,
            i,
            a,
            s,
            l = u.isRegExp(e)
          return (
            l
              ? (e.xregexp && (n = e.xregexp.captureNames),
                e.global || (s = e.lastIndex))
              : (e += ''),
            r(t, 'function')
              ? (i = f.replace.call(String(this), e, function() {
                  var i,
                    o = arguments
                  if (n)
                    for (o[0] = new String(o[0]), i = 0; i < n.length; ++i)
                      n[i] && (o[0][n[i]] = o[i + 1])
                  return (
                    l &&
                      e.global &&
                      (e.lastIndex = o[o.length - 2] + o[0].length),
                    t.apply(null, o)
                  )
                }))
              : ((a = String(this)),
                (i = f.replace.call(a, e, function() {
                  var e = arguments
                  return f.replace.call(String(t), A, function(t, i, r) {
                    var a
                    if (i) {
                      if (((a = +i), a <= e.length - 3)) return e[a] || ''
                      if (((a = n ? o(n, i) : -1), 0 > a))
                        throw new SyntaxError(
                          'backreference to undefined group ' + t
                        )
                      return e[a + 1] || ''
                    }
                    if ('$' === r) return '$'
                    if ('&' === r || 0 == +r) return e[0]
                    if ('`' === r)
                      return e[e.length - 1].slice(0, e[e.length - 2])
                    if ("'" === r)
                      return e[e.length - 1].slice(
                        e[e.length - 2] + e[0].length
                      )
                    if (((r = +r), !isNaN(r))) {
                      if (r > e.length - 3)
                        throw new SyntaxError(
                          'backreference to undefined group ' + t
                        )
                      return e[r] || ''
                    }
                    throw new SyntaxError('invalid token ' + t)
                  })
                }))),
            l && (e.lastIndex = e.global ? 0 : s),
            i
          )
        }),
        (p.split = function(t, n) {
          if (!u.isRegExp(t)) return f.split.apply(this, arguments)
          var i,
            o = String(this),
            r = t.lastIndex,
            a = [],
            s = 0
          return (
            (n = (n === e ? -1 : n) >>> 0),
            u.forEach(o, t, function(e) {
              e.index + e[0].length > s &&
                (a.push(o.slice(s, e.index)),
                e.length > 1 &&
                  e.index < o.length &&
                  Array.prototype.push.apply(a, e.slice(1)),
                (i = e[0].length),
                (s = e.index + i))
            }),
            s === o.length
              ? (!f.test.call(t, '') || i) && a.push('')
              : a.push(o.slice(s)),
            (t.lastIndex = r),
            a.length > n ? a.slice(0, n) : a
          )
        }),
        (h = d.on),
        h(
          /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/,
          function(e, t) {
            if ('B' === e[1] && t === w) return e[0]
            throw new SyntaxError('invalid escape ' + e[0])
          },
          {
            scope: 'all',
          }
        ),
        h(/\[(\^?)]/, function(e) {
          return e[1] ? '[\\s\\S]' : '\\b\\B'
        }),
        h(/(?:\(\?#[^)]*\))+/, function(e) {
          return f.test.call(F, e.input.slice(e.index + e[0].length))
            ? ''
            : '(?:)'
        }),
        h(/\\k<([\w$]+)>/, function(e) {
          var t = isNaN(e[1]) ? o(this.captureNames, e[1]) + 1 : +e[1],
            n = e.index + e[0].length
          if (!t || t > this.captureNames.length)
            throw new SyntaxError('backreference to undefined group ' + e[0])
          return (
            '\\' +
            t +
            (n === e.input.length || isNaN(e.input.charAt(n)) ? '' : '(?:)')
          )
        }),
        h(
          /(?:\s+|#.*)+/,
          function(e) {
            return f.test.call(F, e.input.slice(e.index + e[0].length))
              ? ''
              : '(?:)'
          },
          {
            trigger: function() {
              return this.hasFlag('x')
            },
            customFlags: 'x',
          }
        ),
        h(
          /\./,
          function() {
            return '[\\s\\S]'
          },
          {
            trigger: function() {
              return this.hasFlag('s')
            },
            customFlags: 's',
          }
        ),
        h(/\(\?P?<([\w$]+)>/, function(e) {
          if (!isNaN(e[1]))
            throw new SyntaxError("can't use integer as capture name " + e[0])
          return this.captureNames.push(e[1]), (this.hasNamedCapture = !0), '('
        }),
        h(
          /\\(\d+)/,
          function(e, t) {
            if (
              !(
                t === w &&
                /^[1-9]/.test(e[1]) &&
                +e[1] <= this.captureNames.length
              ) &&
              '0' !== e[1]
            )
              throw new SyntaxError(
                "can't use octal escape or backreference to undefined group " +
                  e[0]
              )
            return e[0]
          },
          {
            scope: 'all',
          }
        ),
        h(
          /\((?!\?)/,
          function() {
            return this.hasFlag('n')
              ? '(?:'
              : (this.captureNames.push(null), '(')
          },
          {
            customFlags: 'n',
          }
        ),
        'undefined' != typeof exports && (exports.XRegExp = u),
        u
      )
    })()),
  (function(e) {
    function t(e) {
      return e.replace(/[- _]+/g, '').toLowerCase()
    }
    function n(e) {
      return e.replace(/\w{4}/g, '\\u$&')
    }
    function i(e) {
      for (; e.length < 4; ) e = '0' + e
      return e
    }
    function o(e) {
      return parseInt(e, 16)
    }
    function r(e) {
      return parseInt(e, 10).toString(16)
    }
    function a(t) {
      var n,
        a = [],
        s = -1
      return (
        e.forEach(t, /\\u(\w{4})(?:-\\u(\w{4}))?/, function(e) {
          ;(n = o(e[1])),
            n > s + 1 &&
              (a.push('\\u' + i(r(s + 1))),
              n > s + 2 && a.push('-\\u' + i(r(n - 1)))),
            (s = o(e[2] || e[1]))
        }),
        65535 > s &&
          (a.push('\\u' + i(r(s + 1))), 65534 > s && a.push('-\\uFFFF')),
        a.join('')
      )
    }
    function s(e) {
      return l['^' + e] || (l['^' + e] = a(l[e]))
    }
    var l = {}
    e.install('extensibility'),
      (e.addUnicodePackage = function(i, o) {
        var r
        if (!e.isInstalled('extensibility'))
          throw new Error(
            'extensibility must be installed before adding Unicode packages'
          )
        if (i) for (r in i) i.hasOwnProperty(r) && (l[t(r)] = n(i[r]))
        if (o) for (r in o) o.hasOwnProperty(r) && (l[t(o[r])] = l[t(r)])
      }),
      e.addUnicodePackage(
        {
          L:
            '0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05270531-055605590561-058705D0-05EA05F0-05F20620-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280840-085808A008A2-08AC0904-0939093D09500958-09610971-09770979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10CF10CF20D05-0D0C0D0E-0D100D12-0D3A0D3D0D4E0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC-0EDF0F000F40-0F470F49-0F6C0F88-0F8C1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510C710CD10D0-10FA10FC-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1BBA-1BE51C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11CF51CF61D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209C21022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2CF22CF32D00-2D252D272D2D2D30-2D672D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31BA31F0-31FF3400-4DB54E00-9FCCA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78B-A78EA790-A793A7A0-A7AAA7F8-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDAAE0-AAEAAAF2-AAF4AB01-AB06AB09-AB0EAB11-AB16AB20-AB26AB28-AB2EABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC',
        },
        {
          L: 'Letter',
        }
      ),
      e.addToken(
        /\\([pP]){(\^?)([^}]*)}/,
        function(e, n) {
          var i = 'P' === e[1] || e[2] ? '^' : '',
            o = t(e[3])
          if ('P' === e[1] && e[2])
            throw new SyntaxError('invalid double negation \\P{^')
          if (!l.hasOwnProperty(o))
            throw new SyntaxError('invalid or unknown Unicode property ' + e[0])
          return 'class' === n ? (i ? s(o) : l[o]) : '[' + i + l[o] + ']'
        },
        {
          scope: 'all',
        }
      )
  })(XRegExp),
  (function(e) {
    if (!e.addUnicodePackage)
      throw new ReferenceError(
        'Unicode Base must be loaded before Unicode Categories'
      )
    e.install('extensibility'),
      e.addUnicodePackage(
        {
          Ll:
            '0061-007A00B500DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F05210523052505270561-05871D00-1D2B1D6B-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7B2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2CF32D00-2D252D272D2DA641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA661A663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CA78EA791A793A7A1A7A3A7A5A7A7A7A9A7FAFB00-FB06FB13-FB17FF41-FF5A',
          Lu:
            '0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E05200522052405260531-055610A0-10C510C710CD1E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CED2CF2A640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA660A662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BA78DA790A792A7A0A7A2A7A4A7A6A7A8A7AAFF21-FF3A',
          Lt: '01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC',
          Lm:
            '02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D6A1D781D9B-1DBF2071207F2090-209C2C7C2C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A7F8A7F9A9CFAA70AADDAAF3AAF4FF70FF9EFF9F',
          Lo:
            '00AA00BA01BB01C0-01C3029405D0-05EA05F0-05F20620-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150840-085808A008A2-08AC0904-0939093D09500958-09610972-09770979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10CF10CF20D05-0D0C0D0E-0D100D12-0D3A0D3D0D4E0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC-0EDF0F000F40-0F470F49-0F6C0F88-0F8C1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA10FD-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1BBA-1BE51C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF11CF51CF62135-21382D30-2D672D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31BA31F0-31FF3400-4DB54E00-9FCCA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCAAE0-AAEAAAF2AB01-AB06AB09-AB0EAB11-AB16AB20-AB26AB28-AB2EABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC',
          M:
            '0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065F067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0859-085B08E4-08FE0900-0903093A-093C093E-094F0951-0957096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F8D-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135D-135F1712-17141732-1734175217531772177317B4-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAD1BE6-1BF31C24-1C371CD0-1CD21CD4-1CE81CED1CF2-1CF41DC0-1DE61DFC-1DFF20D0-20F02CEF-2CF12D7F2DE0-2DFF302A-302F3099309AA66F-A672A674-A67DA69FA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1AAEB-AAEFAAF5AAF6ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26',
          Mn:
            '0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065F067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0859-085B08E4-08FE0900-0902093A093C0941-0948094D0951-095709620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F8D-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135D-135F1712-17141732-1734175217531772177317B417B517B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91BAB1BE61BE81BE91BED1BEF-1BF11C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1CF41DC0-1DE61DFC-1DFF20D0-20DC20E120E5-20F02CEF-2CF12D7F2DE0-2DFF302A-302D3099309AA66FA674-A67DA69FA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1AAECAAEDAAF6ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26',
          Mc:
            '0903093B093E-09400949-094C094E094F0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1BAC1BAD1BE71BEA-1BEC1BEE1BF21BF31C24-1C2B1C341C351CE11CF21CF3302E302FA823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BAAEBAAEEAAEFAAF5ABE3ABE4ABE6ABE7ABE9ABEAABEC',
          Me: '0488048920DD-20E020E2-20E4A670-A672',
          N:
            '0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0B72-0B770BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293248-324F3251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19',
          Nd:
            '0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19D91A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19',
          Nl: '16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF',
          No:
            '00B200B300B900BC-00BE09F4-09F90B72-0B770BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F919DA20702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293248-324F3251-325F3280-328932B1-32BFA830-A835',
          P:
            '0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100A700AB00B600B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E085E0964096509700AF00DF40E4F0E5A0E5B0F04-0F120F140F3A-0F3D0F850FD0-0FD40FD90FDA104A-104F10FB1360-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A194419451A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601BFC-1BFF1C3B-1C3F1C7E1C7F1CC0-1CC71CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2D702E00-2E2E2E30-2E3B3001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFAAF0AAF1ABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65',
          Pd:
            '002D058A05BE140018062010-20152E172E1A2E3A2E3B301C303030A0FE31FE32FE58FE63FF0D',
          Ps:
            '0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62',
          Pe:
            '0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63',
          Pi: '00AB2018201B201C201F20392E022E042E092E0C2E1C2E20',
          Pf: '00BB2019201D203A2E032E052E0A2E0D2E1D2E21',
          Pc: '005F203F20402054FE33FE34FE4D-FE4FFF3F',
          Po:
            '0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100A700B600B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E085E0964096509700AF00DF40E4F0E5A0E5B0F04-0F120F140F850FD0-0FD40FD90FDA104A-104F10FB1360-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A194419451A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601BFC-1BFF1C3B-1C3F1C7E1C7F1CC0-1CC71CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2D702E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E30-2E393001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFAAF0AAF1ABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65',
          S:
            '0024002B003C-003E005E0060007C007E00A2-00A600A800A900AC00AE-00B100B400B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F60482058F0606-0608060B060E060F06DE06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0D790E3F0F01-0F030F130F15-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F1390-139917DB194019DE-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B9210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23F32400-24262440-244A249C-24E92500-26FF2701-27672794-27C427C7-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-324732503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FBB2-FBC1FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD',
          Sm:
            '002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C21182140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC',
          Sc:
            '002400A2-00A5058F060B09F209F309FB0AF10BF90E3F17DB20A0-20B9A838FDFCFE69FF04FFE0FFE1FFE5FFE6',
          Sk:
            '005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFBB2-FBC1FF3EFF40FFE3',
          So:
            '00A600A900AE00B00482060E060F06DE06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0D790F01-0F030F130F15-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F1390-1399194019DE-19FF1B61-1B6A1B74-1B7C210021012103-210621082109211421162117211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23F32400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26FF2701-27672794-27BF2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-324732503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD',
          Z: '002000A01680180E2000-200A20282029202F205F3000',
          Zs: '002000A01680180E2000-200A202F205F3000',
          Zl: '2028',
          Zp: '2029',
          C:
            '0000-001F007F-009F00AD03780379037F-0383038B038D03A20528-05300557055805600588058B-058E059005C8-05CF05EB-05EF05F5-0605061C061D06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F085C085D085F-089F08A108AD-08E308FF097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B78-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D3B0D3C0D450D490D4F-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EE0-0EFF0F480F6D-0F700F980FBD0FCD0FDB-0FFF10C610C8-10CC10CE10CF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B135C137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BF4-1BFB1C38-1C3A1C4A-1C4C1C80-1CBF1CC8-1CCF1CF7-1CFF1DE7-1DFB1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F209D-209F20BA-20CF20F1-20FF218A-218F23F4-23FF2427-243F244B-245F27002B4D-2B4F2B5A-2BFF2C2F2C5F2CF4-2CF82D262D28-2D2C2D2E2D2F2D68-2D6E2D71-2D7E2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E3C-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31BB-31BF31E4-31EF321F32FF4DB6-4DBF9FCD-9FFFA48D-A48FA4C7-A4CFA62C-A63FA698-A69EA6F8-A6FFA78FA794-A79FA7AB-A7F7A82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAF7-AB00AB07AB08AB0FAB10AB17-AB1FAB27AB2F-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBC2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF',
          Cc: '0000-001F007F-009F',
          Cf:
            '00AD0600-060406DD070F200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB',
          Co: 'E000-F8FF',
          Cs: 'D800-DFFF',
          Cn:
            '03780379037F-0383038B038D03A20528-05300557055805600588058B-058E059005C8-05CF05EB-05EF05F5-05FF0605061C061D070E074B074C07B2-07BF07FB-07FF082E082F083F085C085D085F-089F08A108AD-08E308FF097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B78-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D3B0D3C0D450D490D4F-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EE0-0EFF0F480F6D-0F700F980FBD0FCD0FDB-0FFF10C610C8-10CC10CE10CF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B135C137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BF4-1BFB1C38-1C3A1C4A-1C4C1C80-1CBF1CC8-1CCF1CF7-1CFF1DE7-1DFB1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F209D-209F20BA-20CF20F1-20FF218A-218F23F4-23FF2427-243F244B-245F27002B4D-2B4F2B5A-2BFF2C2F2C5F2CF4-2CF82D262D28-2D2C2D2E2D2F2D68-2D6E2D71-2D7E2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E3C-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31BB-31BF31E4-31EF321F32FF4DB6-4DBF9FCD-9FFFA48D-A48FA4C7-A4CFA62C-A63FA698-A69EA6F8-A6FFA78FA794-A79FA7AB-A7F7A82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAF7-AB00AB07AB08AB0FAB10AB17-AB1FAB27AB2F-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBC2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF',
        },
        {
          Ll: 'Lowercase_Letter',
          Lu: 'Uppercase_Letter',
          Lt: 'Titlecase_Letter',
          Lm: 'Modifier_Letter',
          Lo: 'Other_Letter',
          M: 'Mark',
          Mn: 'Nonspacing_Mark',
          Mc: 'Spacing_Mark',
          Me: 'Enclosing_Mark',
          N: 'Number',
          Nd: 'Decimal_Number',
          Nl: 'Letter_Number',
          No: 'Other_Number',
          P: 'Punctuation',
          Pd: 'Dash_Punctuation',
          Ps: 'Open_Punctuation',
          Pe: 'Close_Punctuation',
          Pi: 'Initial_Punctuation',
          Pf: 'Final_Punctuation',
          Pc: 'Connector_Punctuation',
          Po: 'Other_Punctuation',
          S: 'Symbol',
          Sm: 'Math_Symbol',
          Sc: 'Currency_Symbol',
          Sk: 'Modifier_Symbol',
          So: 'Other_Symbol',
          Z: 'Separator',
          Zs: 'Space_Separator',
          Zl: 'Line_Separator',
          Zp: 'Paragraph_Separator',
          C: 'Other',
          Cc: 'Control',
          Cf: 'Format',
          Co: 'Private_Use',
          Cs: 'Surrogate',
          Cn: 'Unassigned',
        }
      )
  })(XRegExp))
);

function spannify(text, options) {
  var n = n || XRegExp,
    i = n("([’'\\p{L}\\p{M}]+)", 'g'),
    o = 0,
    r = options.startPosition || 0
  n.addUnicodePackage({
    Han:
      '2E80-2E992E9B-2EF32F00-2FD5300530073021-30293038-303B3400-4DB54E00-9FCCF900-FA6DFA70-FAD9',
    Hiragana: '3041-3096309D-309F',
    Katakana: '30A1-30FA30FD-30FF31F0-31FF32D0-32FE3300-3357FF66-FF6FFF71-FF9D',
    Thai: '0E00-0E7F',
    M:
      '0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065F067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0859-085B08E4-08FE0900-0903093A-093C093E-094F0951-0957096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F8D-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135D-135F1712-17141732-1734175217531772177317B4-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAD1BE6-1BF31C24-1C371CD0-1CD21CD4-1CE81CED1CF2-1CF41DC0-1DE61DFC-1DFF20D0-20F02CEF-2CF12D7F2DE0-2DFF302A-302F3099309AA66F-A672A674-A67DA69FA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1AAEB-AAEFAAF5AAF6ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26',
  })
  var a = new n('[\\p{Han}\\p{Hiragana}\\p{Katakana}\\p{Thai}]'),
    s = new n('\\p{M}'),
    l = !1,
    c = text.replace(i, function(e, n, i, c) {
      if ('<' === c[i - 1]) return 'strong' === n && (l = !0), n
      if ('<' === c[i - 2] && '/' === c[i - 1])
        return 'strong' === n && (l = !1), n
      if ('&' === c[i - 1]) return n
      if (options.ignoreStrong && l) return n
      options.onEachSpan && options.onEachSpan(r, i, o)
      var u, d
      if (a.test(n)) {
        for (var h = '', g = 0; g < n.length; g++) {
          for (
            u = '<span data-p=' + r++ + '>', d = '</span>', h += u + n[g];
            g < n.length - 1 && s.test(n[g + 1]);

          )
            g++, (h += n[g])
          ;(h += d), (o += u.length + d.length)
        }
        return h
      }
      if (
        ((u = '<span data-p=' + r++ + '>'),
        (d = '</span>'),
        'ca' === options.language)
      ) {
        var f = /['`’]/.exec(n)
        if (f && f.length > 0) {
          var p = f[0],
            m = n.split(p)
          m[0].length <= m[1].length ? (m[0] += p) : (m[1] = p + m[1]),
            (u = '<span data-p=' + r++ + '>'),
            (n = m[0] + d + u + m[1]),
            (o += u.length + d.length),
            (u = '<span data-p=' + (r - 2) + '>')
        }
      }
      return (o += u.length + d.length), u + n + d
    })
  return {
    html: c,
    totalSpans: r,
  }
}

export function countWords(text) {
  return spannify(text, {}).totalSpans // TODO: options
}
