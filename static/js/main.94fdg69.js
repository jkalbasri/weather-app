!(function () {
  var e = {
      569: function (e, t, n) {
        e.exports = n(36);
      },
      381: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = n(297),
          i = n(301),
          o = n(774),
          l = n(804),
          s = n(145),
          u = n(411),
          c = n(789),
          d = n(531),
          f = n(795),
          p = n(261);
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var h,
              v = e.data,
              m = e.headers,
              g = e.responseType;
            function y() {
              e.cancelToken && e.cancelToken.unsubscribe(h),
                e.signal && e.signal.removeEventListener("abort", h);
            }
            r.isFormData(v) &&
              r.isStandardBrowserEnv() &&
              delete m["Content-Type"];
            var b = new XMLHttpRequest();
            if (e.auth) {
              var w = e.auth.username || "",
                S = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              m.Authorization = "Basic " + btoa(w + ":" + S);
            }
            var x = l(e.baseURL, e.url);
            function E() {
              if (b) {
                var r =
                    "getAllResponseHeaders" in b
                      ? s(b.getAllResponseHeaders())
                      : null,
                  i = {
                    data:
                      g && "text" !== g && "json" !== g
                        ? b.response
                        : b.responseText,
                    status: b.status,
                    statusText: b.statusText,
                    headers: r,
                    config: e,
                    request: b,
                  };
                a(
                  function (e) {
                    t(e), y();
                  },
                  function (e) {
                    n(e), y();
                  },
                  i
                ),
                  (b = null);
              }
            }
            if (
              (b.open(
                e.method.toUpperCase(),
                o(x, e.params, e.paramsSerializer),
                !0
              ),
              (b.timeout = e.timeout),
              "onloadend" in b
                ? (b.onloadend = E)
                : (b.onreadystatechange = function () {
                    b &&
                      4 === b.readyState &&
                      (0 !== b.status ||
                        (b.responseURL &&
                          0 === b.responseURL.indexOf("file:"))) &&
                      setTimeout(E);
                  }),
              (b.onabort = function () {
                b &&
                  (n(new d("Request aborted", d.ECONNABORTED, e, b)),
                  (b = null));
              }),
              (b.onerror = function () {
                n(new d("Network Error", d.ERR_NETWORK, e, b, b)), (b = null);
              }),
              (b.ontimeout = function () {
                var t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded",
                  r = e.transitional || c;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    new d(
                      t,
                      r.clarifyTimeoutError ? d.ETIMEDOUT : d.ECONNABORTED,
                      e,
                      b
                    )
                  ),
                  (b = null);
              }),
              r.isStandardBrowserEnv())
            ) {
              var k =
                (e.withCredentials || u(x)) && e.xsrfCookieName
                  ? i.read(e.xsrfCookieName)
                  : void 0;
              k && (m[e.xsrfHeaderName] = k);
            }
            "setRequestHeader" in b &&
              r.forEach(m, function (e, t) {
                "undefined" === typeof v && "content-type" === t.toLowerCase()
                  ? delete m[t]
                  : b.setRequestHeader(t, e);
              }),
              r.isUndefined(e.withCredentials) ||
                (b.withCredentials = !!e.withCredentials),
              g && "json" !== g && (b.responseType = e.responseType),
              "function" === typeof e.onDownloadProgress &&
                b.addEventListener("progress", e.onDownloadProgress),
              "function" === typeof e.onUploadProgress &&
                b.upload &&
                b.upload.addEventListener("progress", e.onUploadProgress),
              (e.cancelToken || e.signal) &&
                ((h = function (e) {
                  b &&
                    (n(!e || (e && e.type) ? new f() : e),
                    b.abort(),
                    (b = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(h),
                e.signal &&
                  (e.signal.aborted
                    ? h()
                    : e.signal.addEventListener("abort", h))),
              v || (v = null);
            var C = p(x);
            C && -1 === ["http", "https", "file"].indexOf(C)
              ? n(
                  new d("Unsupported protocol " + C + ":", d.ERR_BAD_REQUEST, e)
                )
              : b.send(v);
          });
        };
      },
      36: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = n(49),
          i = n(773),
          o = n(777);
        var l = (function e(t) {
          var n = new i(t),
            l = a(i.prototype.request, n);
          return (
            r.extend(l, i.prototype, n),
            r.extend(l, n),
            (l.create = function (n) {
              return e(o(t, n));
            }),
            l
          );
        })(n(709));
        (l.Axios = i),
          (l.CanceledError = n(795)),
          (l.CancelToken = n(857)),
          (l.isCancel = n(517)),
          (l.VERSION = n(600).version),
          (l.toFormData = n(397)),
          (l.AxiosError = n(531)),
          (l.Cancel = l.CanceledError),
          (l.all = function (e) {
            return Promise.all(e);
          }),
          (l.spread = n(89)),
          (l.isAxiosError = n(580)),
          (e.exports = l),
          (e.exports.default = l);
      },
      857: function (e, t, n) {
        "use strict";
        var r = n(795);
        function a(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          this.promise.then(function (e) {
            if (n._listeners) {
              var t,
                r = n._listeners.length;
              for (t = 0; t < r; t++) n._listeners[t](e);
              n._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                r = new Promise(function (e) {
                  n.subscribe(e), (t = e);
                }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e) {
              n.reason || ((n.reason = new r(e)), t(n.reason));
            });
        }
        (a.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (a.prototype.subscribe = function (e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }),
          (a.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (a.source = function () {
            var e;
            return {
              token: new a(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = a);
      },
      795: function (e, t, n) {
        "use strict";
        var r = n(531);
        function a(e) {
          r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED),
            (this.name = "CanceledError");
        }
        n(589).inherits(a, r, { __CANCEL__: !0 }), (e.exports = a);
      },
      517: function (e) {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      773: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = n(774),
          i = n(470),
          o = n(733),
          l = n(777),
          s = n(804),
          u = n(835),
          c = u.validators;
        function d(e) {
          (this.defaults = e),
            (this.interceptors = { request: new i(), response: new i() });
        }
        (d.prototype.request = function (e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = l(this.defaults, t)).method
              ? (t.method = t.method.toLowerCase())
              : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
          var n = t.transitional;
          void 0 !== n &&
            u.assertOptions(
              n,
              {
                silentJSONParsing: c.transitional(c.boolean),
                forcedJSONParsing: c.transitional(c.boolean),
                clarifyTimeoutError: c.transitional(c.boolean),
              },
              !1
            );
          var r = [],
            a = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((a = a && e.synchronous), r.unshift(e.fulfilled, e.rejected));
          });
          var i,
            s = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              s.push(e.fulfilled, e.rejected);
            }),
            !a)
          ) {
            var d = [o, void 0];
            for (
              Array.prototype.unshift.apply(d, r),
                d = d.concat(s),
                i = Promise.resolve(t);
              d.length;

            )
              i = i.then(d.shift(), d.shift());
            return i;
          }
          for (var f = t; r.length; ) {
            var p = r.shift(),
              h = r.shift();
            try {
              f = p(f);
            } catch (v) {
              h(v);
              break;
            }
          }
          try {
            i = o(f);
          } catch (v) {
            return Promise.reject(v);
          }
          for (; s.length; ) i = i.then(s.shift(), s.shift());
          return i;
        }),
          (d.prototype.getUri = function (e) {
            e = l(this.defaults, e);
            var t = s(e.baseURL, e.url);
            return a(t, e.params, e.paramsSerializer);
          }),
          r.forEach(["delete", "get", "head", "options"], function (e) {
            d.prototype[e] = function (t, n) {
              return this.request(
                l(n || {}, { method: e, url: t, data: (n || {}).data })
              );
            };
          }),
          r.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, a) {
                return this.request(
                  l(a || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (d.prototype[e] = t()), (d.prototype[e + "Form"] = t(!0));
          }),
          (e.exports = d);
      },
      531: function (e, t, n) {
        "use strict";
        var r = n(589);
        function a(e, t, n, r, a) {
          Error.call(this),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            a && (this.response = a);
        }
        r.inherits(a, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        var i = a.prototype,
          o = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
        ].forEach(function (e) {
          o[e] = { value: e };
        }),
          Object.defineProperties(a, o),
          Object.defineProperty(i, "isAxiosError", { value: !0 }),
          (a.from = function (e, t, n, o, l, s) {
            var u = Object.create(i);
            return (
              r.toFlatObject(e, u, function (e) {
                return e !== Error.prototype;
              }),
              a.call(u, e.message, t, n, o, l),
              (u.name = e.name),
              s && Object.assign(u, s),
              u
            );
          }),
          (e.exports = a);
      },
      470: function (e, t, n) {
        "use strict";
        var r = n(589);
        function a() {
          this.handlers = [];
        }
        (a.prototype.use = function (e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (a.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (a.prototype.forEach = function (e) {
            r.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = a);
      },
      804: function (e, t, n) {
        "use strict";
        var r = n(44),
          a = n(549);
        e.exports = function (e, t) {
          return e && !r(t) ? a(e, t) : t;
        };
      },
      733: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = n(693),
          i = n(517),
          o = n(709),
          l = n(795);
        function s(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new l();
        }
        e.exports = function (e) {
          return (
            s(e),
            (e.headers = e.headers || {}),
            (e.data = a.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = r.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            r.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || o.adapter)(e).then(
              function (t) {
                return (
                  s(e),
                  (t.data = a.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  i(t) ||
                    (s(e),
                    t &&
                      t.response &&
                      (t.response.data = a.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      777: function (e, t, n) {
        "use strict";
        var r = n(589);
        e.exports = function (e, t) {
          t = t || {};
          var n = {};
          function a(e, t) {
            return r.isPlainObject(e) && r.isPlainObject(t)
              ? r.merge(e, t)
              : r.isPlainObject(t)
              ? r.merge({}, t)
              : r.isArray(t)
              ? t.slice()
              : t;
          }
          function i(n) {
            return r.isUndefined(t[n])
              ? r.isUndefined(e[n])
                ? void 0
                : a(void 0, e[n])
              : a(e[n], t[n]);
          }
          function o(e) {
            if (!r.isUndefined(t[e])) return a(void 0, t[e]);
          }
          function l(n) {
            return r.isUndefined(t[n])
              ? r.isUndefined(e[n])
                ? void 0
                : a(void 0, e[n])
              : a(void 0, t[n]);
          }
          function s(n) {
            return n in t ? a(e[n], t[n]) : n in e ? a(void 0, e[n]) : void 0;
          }
          var u = {
            url: o,
            method: o,
            data: o,
            baseURL: l,
            transformRequest: l,
            transformResponse: l,
            paramsSerializer: l,
            timeout: l,
            timeoutMessage: l,
            withCredentials: l,
            adapter: l,
            responseType: l,
            xsrfCookieName: l,
            xsrfHeaderName: l,
            onUploadProgress: l,
            onDownloadProgress: l,
            decompress: l,
            maxContentLength: l,
            maxBodyLength: l,
            beforeRedirect: l,
            transport: l,
            httpAgent: l,
            httpsAgent: l,
            cancelToken: l,
            socketPath: l,
            responseEncoding: l,
            validateStatus: s,
          };
          return (
            r.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
              var t = u[e] || i,
                a = t(e);
              (r.isUndefined(a) && t !== s) || (n[e] = a);
            }),
            n
          );
        };
      },
      297: function (e, t, n) {
        "use strict";
        var r = n(531);
        e.exports = function (e, t, n) {
          var a = n.config.validateStatus;
          n.status && a && !a(n.status)
            ? t(
                new r(
                  "Request failed with status code " + n.status,
                  [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][
                    Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
                )
              )
            : e(n);
        };
      },
      693: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = n(709);
        e.exports = function (e, t, n) {
          var i = this || a;
          return (
            r.forEach(n, function (n) {
              e = n.call(i, e, t);
            }),
            e
          );
        };
      },
      709: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = n(341),
          i = n(531),
          o = n(789),
          l = n(397),
          s = { "Content-Type": "application/x-www-form-urlencoded" };
        function u(e, t) {
          !r.isUndefined(e) &&
            r.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var c = {
          transitional: o,
          adapter: (function () {
            var e;
            return (
              ("undefined" !== typeof XMLHttpRequest ||
                ("undefined" !== typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (e = n(381)),
              e
            );
          })(),
          transformRequest: [
            function (e, t) {
              if (
                (a(t, "Accept"),
                a(t, "Content-Type"),
                r.isFormData(e) ||
                  r.isArrayBuffer(e) ||
                  r.isBuffer(e) ||
                  r.isStream(e) ||
                  r.isFile(e) ||
                  r.isBlob(e))
              )
                return e;
              if (r.isArrayBufferView(e)) return e.buffer;
              if (r.isURLSearchParams(e))
                return (
                  u(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString()
                );
              var n,
                i = r.isObject(e),
                o = t && t["Content-Type"];
              if ((n = r.isFileList(e)) || (i && "multipart/form-data" === o)) {
                var s = this.env && this.env.FormData;
                return l(n ? { "files[]": e } : e, s && new s());
              }
              return i || "application/json" === o
                ? (u(t, "application/json"),
                  (function (e, t, n) {
                    if (r.isString(e))
                      try {
                        return (t || JSON.parse)(e), r.trim(e);
                      } catch (a) {
                        if ("SyntaxError" !== a.name) throw a;
                      }
                    return (n || JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || c.transitional,
                n = t && t.silentJSONParsing,
                a = t && t.forcedJSONParsing,
                o = !n && "json" === this.responseType;
              if (o || (a && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (l) {
                  if (o) {
                    if ("SyntaxError" === l.name)
                      throw i.from(
                        l,
                        i.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw l;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: n(35) },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        r.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
          r.forEach(["post", "put", "patch"], function (e) {
            c.headers[e] = r.merge(s);
          }),
          (e.exports = c);
      },
      789: function (e) {
        "use strict";
        e.exports = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
      },
      600: function (e) {
        e.exports = { version: "0.27.2" };
      },
      49: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            return e.apply(t, n);
          };
        };
      },
      774: function (e, t, n) {
        "use strict";
        var r = n(589);
        function a(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
          if (!t) return e;
          var i;
          if (n) i = n(t);
          else if (r.isURLSearchParams(t)) i = t.toString();
          else {
            var o = [];
            r.forEach(t, function (e, t) {
              null !== e &&
                "undefined" !== typeof e &&
                (r.isArray(e) ? (t += "[]") : (e = [e]),
                r.forEach(e, function (e) {
                  r.isDate(e)
                    ? (e = e.toISOString())
                    : r.isObject(e) && (e = JSON.stringify(e)),
                    o.push(a(t) + "=" + a(e));
                }));
            }),
              (i = o.join("&"));
          }
          if (i) {
            var l = e.indexOf("#");
            -1 !== l && (e = e.slice(0, l)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        };
      },
      549: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      301: function (e, t, n) {
        "use strict";
        var r = n(589);
        e.exports = r.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, a, i, o) {
                var l = [];
                l.push(e + "=" + encodeURIComponent(t)),
                  r.isNumber(n) &&
                    l.push("expires=" + new Date(n).toGMTString()),
                  r.isString(a) && l.push("path=" + a),
                  r.isString(i) && l.push("domain=" + i),
                  !0 === o && l.push("secure"),
                  (document.cookie = l.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      44: function (e) {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        };
      },
      580: function (e, t, n) {
        "use strict";
        var r = n(589);
        e.exports = function (e) {
          return r.isObject(e) && !0 === e.isAxiosError;
        };
      },
      411: function (e, t, n) {
        "use strict";
        var r = n(589);
        e.exports = r.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function a(e) {
                var r = e;
                return (
                  t && (n.setAttribute("href", r), (r = n.href)),
                  n.setAttribute("href", r),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = a(window.location.href)),
                function (t) {
                  var n = r.isString(t) ? a(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      341: function (e, t, n) {
        "use strict";
        var r = n(589);
        e.exports = function (e, t) {
          r.forEach(e, function (n, r) {
            r !== t &&
              r.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[r]);
          });
        };
      },
      35: function (e) {
        e.exports = null;
      },
      145: function (e, t, n) {
        "use strict";
        var r = n(589),
          a = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            n,
            i,
            o = {};
          return e
            ? (r.forEach(e.split("\n"), function (e) {
                if (
                  ((i = e.indexOf(":")),
                  (t = r.trim(e.substr(0, i)).toLowerCase()),
                  (n = r.trim(e.substr(i + 1))),
                  t)
                ) {
                  if (o[t] && a.indexOf(t) >= 0) return;
                  o[t] =
                    "set-cookie" === t
                      ? (o[t] ? o[t] : []).concat([n])
                      : o[t]
                      ? o[t] + ", " + n
                      : n;
                }
              }),
              o)
            : o;
        };
      },
      261: function (e) {
        "use strict";
        e.exports = function (e) {
          var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (t && t[1]) || "";
        };
      },
      89: function (e) {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      397: function (e, t, n) {
        "use strict";
        var r = n(589);
        e.exports = function (e, t) {
          t = t || new FormData();
          var n = [];
          function a(e) {
            return null === e
              ? ""
              : r.isDate(e)
              ? e.toISOString()
              : r.isArrayBuffer(e) || r.isTypedArray(e)
              ? "function" === typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          return (
            (function e(i, o) {
              if (r.isPlainObject(i) || r.isArray(i)) {
                if (-1 !== n.indexOf(i))
                  throw Error("Circular reference detected in " + o);
                n.push(i),
                  r.forEach(i, function (n, i) {
                    if (!r.isUndefined(n)) {
                      var l,
                        s = o ? o + "." + i : i;
                      if (n && !o && "object" === typeof n)
                        if (r.endsWith(i, "{}")) n = JSON.stringify(n);
                        else if (r.endsWith(i, "[]") && (l = r.toArray(n)))
                          return void l.forEach(function (e) {
                            !r.isUndefined(e) && t.append(s, a(e));
                          });
                      e(n, s);
                    }
                  }),
                  n.pop();
              } else t.append(o, a(i));
            })(e),
            t
          );
        };
      },
      835: function (e, t, n) {
        "use strict";
        var r = n(600).version,
          a = n(531),
          i = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            i[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var o = {};
        (i.transitional = function (e, t, n) {
          function i(e, t) {
            return (
              "[Axios v" +
              r +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return function (n, r, l) {
            if (!1 === e)
              throw new a(
                i(r, " has been removed" + (t ? " in " + t : "")),
                a.ERR_DEPRECATED
              );
            return (
              t &&
                !o[r] &&
                ((o[r] = !0),
                console.warn(
                  i(
                    r,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, r, l)
            );
          };
        }),
          (e.exports = {
            assertOptions: function (e, t, n) {
              if ("object" !== typeof e)
                throw new a(
                  "options must be an object",
                  a.ERR_BAD_OPTION_VALUE
                );
              for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
                var o = r[i],
                  l = t[o];
                if (l) {
                  var s = e[o],
                    u = void 0 === s || l(s, o, e);
                  if (!0 !== u)
                    throw new a(
                      "option " + o + " must be " + u,
                      a.ERR_BAD_OPTION_VALUE
                    );
                } else if (!0 !== n)
                  throw new a("Unknown option " + o, a.ERR_BAD_OPTION);
              }
            },
            validators: i,
          });
      },
      589: function (e, t, n) {
        "use strict";
        var r,
          a = n(49),
          i = Object.prototype.toString,
          o =
            ((r = Object.create(null)),
            function (e) {
              var t = i.call(e);
              return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
            });
        function l(e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return o(t) === e;
            }
          );
        }
        function s(e) {
          return Array.isArray(e);
        }
        function u(e) {
          return "undefined" === typeof e;
        }
        var c = l("ArrayBuffer");
        function d(e) {
          return null !== e && "object" === typeof e;
        }
        function f(e) {
          if ("object" !== o(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        var p = l("Date"),
          h = l("File"),
          v = l("Blob"),
          m = l("FileList");
        function g(e) {
          return "[object Function]" === i.call(e);
        }
        var y = l("URLSearchParams");
        function b(e, t) {
          if (null !== e && "undefined" !== typeof e)
            if (("object" !== typeof e && (e = [e]), s(e)))
              for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
            else
              for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) &&
                  t.call(null, e[a], a, e);
        }
        var w,
          S =
            ((w =
              "undefined" !== typeof Uint8Array &&
              Object.getPrototypeOf(Uint8Array)),
            function (e) {
              return w && e instanceof w;
            });
        e.exports = {
          isArray: s,
          isArrayBuffer: c,
          isBuffer: function (e) {
            return (
              null !== e &&
              !u(e) &&
              null !== e.constructor &&
              !u(e.constructor) &&
              "function" === typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = "[object FormData]";
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                i.call(e) === t ||
                (g(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && c(e.buffer);
          },
          isString: function (e) {
            return "string" === typeof e;
          },
          isNumber: function (e) {
            return "number" === typeof e;
          },
          isObject: d,
          isPlainObject: f,
          isUndefined: u,
          isDate: p,
          isFile: h,
          isBlob: v,
          isFunction: g,
          isStream: function (e) {
            return d(e) && g(e.pipe);
          },
          isURLSearchParams: y,
          isStandardBrowserEnv: function () {
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          },
          forEach: b,
          merge: function e() {
            var t = {};
            function n(n, r) {
              f(t[r]) && f(n)
                ? (t[r] = e(t[r], n))
                : f(n)
                ? (t[r] = e({}, n))
                : s(n)
                ? (t[r] = n.slice())
                : (t[r] = n);
            }
            for (var r = 0, a = arguments.length; r < a; r++)
              b(arguments[r], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              b(t, function (t, r) {
                e[r] = n && "function" === typeof t ? a(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n) {
            var r,
              a,
              i,
              o = {};
            t = t || {};
            do {
              for (a = (r = Object.getOwnPropertyNames(e)).length; a-- > 0; )
                o[(i = r[a])] || ((t[i] = e[i]), (o[i] = !0));
              e = Object.getPrototypeOf(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: o,
          kindOfTest: l,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            var t = e.length;
            if (u(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          isTypedArray: S,
          isFileList: m,
        };
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var o = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          j = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var R,
          A = Object.assign;
        function I(e) {
          if (void 0 === R)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              R = (t && t[1]) || "";
            }
          return "\n" + R + e;
        }
        var F = !1;
        function B(e, t) {
          if (!e || F) return "";
          F = !0;
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
                "object" === typeof Reflect && Reflect.construct)
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
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case k:
              return "StrictMode";
            case O:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case j:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
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
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
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
              return V(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          K(e, t);
          var n = $(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + $(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: $(n) };
        }
        function ie(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = A(
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
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Ee = null,
          ke = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Ee ? (ke ? ke.push(e) : (ke = [e])) : (Ee = e);
        }
        function _e() {
          if (Ee) {
            var e = Ee,
              t = ke;
            if (((ke = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var Ne = !1;
        function Le(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Ne = !1), (null !== Ee || null !== ke) && (Oe(), _e());
          }
        }
        function je(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            ze = !1;
          }
        function De(e, t, n, r, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Re = !1,
          Ae = null,
          Ie = !1,
          Fe = null,
          Be = {
            onError: function (e) {
              (Re = !0), (Ae = e);
            },
          };
        function Ue(e, t, n, r, a, i, o, l, s) {
          (Re = !1), (Ae = null), De.apply(Be, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (Ve(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return $e(a), e;
                    if (o === r) return $e(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          xt,
          Et,
          kt,
          Ct,
          Tt = !1,
          _t = [],
          Pt = null,
          Ot = null,
          Nt = null,
          Lt = new Map(),
          jt = new Map(),
          zt = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              jt.delete(t.pointerId);
          }
        }
        function Rt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function At(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          It(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== Pt && It(Pt) && (Pt = null),
            null !== Ot && It(Ot) && (Ot = null),
            null !== Nt && It(Nt) && (Nt = null),
            Lt.forEach(Ft),
            jt.forEach(Ft);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Vt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < _t.length) {
            Ut(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== Ot && Ut(Ot, e),
              null !== Nt && Ut(Nt, e),
              Lt.forEach(t),
              jt.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            At(n), null === n.blockedOn && zt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          $t = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = i);
          }
        }
        function Gt(e, t, n, r) {
          var a = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = i);
          }
        }
        function qt(e, t, n, r) {
          if ($t) {
            var a = Yt(e, t, n, r);
            if (null === a) $r(e, t, r, Qt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Rt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = Rt(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Nt = Rt(Nt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Lt.set(i, Rt(Lt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      jt.set(i, Rt(jt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && St(i),
                  null === (i = Yt(e, t, n, r)) && $r(e, t, r, Qt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = Se(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Xt(e) {
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
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = A({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = A({}, dn, {
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
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(A({}, pn, { dataTransfer: 0 })),
          mn = an(A({}, dn, { relatedTarget: 0 })),
          gn = an(
            A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = A({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(A({}, un, { data: 0 })),
          Sn = {
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
          xn = {
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
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return kn;
        }
        var Tn = A({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
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
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = an(Tn),
          Pn = an(
            A({}, pn, {
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
          On = an(
            A({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Nn = an(
            A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = A({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
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
          jn = an(Ln),
          zn = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var Rn = c && "TextEvent" in window && !Dn,
          An = c && (!Mn || (Dn && 8 < Dn && 11 >= Dn)),
          In = String.fromCharCode(32),
          Fn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Hn = {
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
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Te(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          qn = null;
        function Qn(e) {
          Ir(e, 0);
        }
        function Yn(e) {
          if (q(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Kn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (qn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Wn(t, qn, e, Se(e)), Le(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function ir(e, t) {
          if ("click" === e) return Yn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Er = {},
          kr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Tr = Cr("animationend"),
          _r = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Nr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function jr(e, t) {
          Nr.set(e, t), s(t, [e]);
        }
        for (var zr = 0; zr < Lr.length; zr++) {
          var Mr = Lr[zr];
          jr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        jr(Tr, "onAnimationEnd"),
          jr(_r, "onAnimationIteration"),
          jr(Pr, "onAnimationStart"),
          jr("dblclick", "onDoubleClick"),
          jr("focusin", "onFocus"),
          jr("focusout", "onBlur"),
          jr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr)
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, s, u) {
              if ((Ue.apply(this, arguments), Re)) {
                if (!Re) throw Error(i(198));
                var c = Ae;
                (Re = !1), (Ae = null), Ie || ((Ie = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  Ar(a, l, u), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Ar(a, l, u), (i = s);
                }
            }
          }
          if (Ie) throw ((e = Fe), (Ie = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Rr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Gt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function $r(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ya(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = i,
              a = Se(n),
              o = [];
            e: {
              var l = Nr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = _n;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = On;
                    break;
                  case Tr:
                  case _r:
                  case Pr:
                    s = gn;
                    break;
                  case Or:
                    s = Nn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== f &&
                        null != (v = je(h, f)) &&
                        c.push(Wr(h, v, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : wa(s)),
                  (p = null == u ? l : wa(u)),
                  ((l = new c(v, h + "leave", s, n, a)).target = d),
                  (l.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (v = c)),
                  (d = v),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, v = f; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(o, l, s, c, !1),
                  null !== u && null !== d && Qr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Xn;
              else if ($n(l))
                if (Kn) m = or;
                else {
                  m = ar;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? Wn(o, m, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var y;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = en())
                    : ((Jt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Vn = !0))),
                0 < (g = Gr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Rn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), In);
                        case "textInput":
                          return (e = t.data) === In && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Mn && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Kt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ir(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = je(e, n)) && r.unshift(Wr(e, i, a)),
              null != (i = je(e, t)) && r.push(Wr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = je(n, i)) && o.unshift(Wr(n, s, l))
                : a || (null != (s = je(n, i)) && o.push(Wr(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          va = "__reactEvents$" + da,
          ma = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var xa = [],
          Ea = -1;
        function ka(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Ea || ((e.current = xa[Ea]), (xa[Ea] = null), Ea--);
        }
        function Ta(e, t) {
          Ea++, (xa[Ea] = e.current), (e.current = t);
        }
        var _a = {},
          Pa = ka(_a),
          Oa = ka(!1),
          Na = _a;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function ja(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(Oa), Ca(Pa);
        }
        function Ma(e, t, n) {
          if (Pa.current !== _a) throw Error(i(168));
          Ta(Pa, t), Ta(Oa, n);
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, H(e) || "Unknown", a));
          return A({}, n, r);
        }
        function Ra(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (Na = Pa.current),
            Ta(Pa, e),
            Ta(Oa, Oa.current),
            !0
          );
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Da(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(Pa),
              Ta(Pa, e))
            : Ca(Oa),
            Ta(Oa, n);
        }
        var Ia = null,
          Fa = !1,
          Ba = !1;
        function Ua(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Va() {
          if (!Ba && null !== Ia) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (Fa = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), qe(Ze, Va), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Ha = [],
          $a = 0,
          Wa = null,
          Ga = 0,
          qa = [],
          Qa = 0,
          Ya = null,
          Xa = 1,
          Ka = "";
        function Ja(e, t) {
          (Ha[$a++] = Ga), (Ha[$a++] = Wa), (Wa = e), (Ga = t);
        }
        function Za(e, t, n) {
          (qa[Qa++] = Xa), (qa[Qa++] = Ka), (qa[Qa++] = Ya), (Ya = e);
          var r = Xa;
          e = Ka;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Xa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ka = i + e);
          } else (Xa = (1 << i) | (n << a) | r), (Ka = e);
        }
        function ei(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Wa; )
            (Wa = Ha[--$a]), (Ha[$a] = null), (Ga = Ha[--$a]), (Ha[$a] = null);
          for (; e === Ya; )
            (Ya = qa[--Qa]),
              (qa[Qa] = null),
              (Ka = qa[--Qa]),
              (qa[Qa] = null),
              (Xa = qa[--Qa]),
              (qa[Qa] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && li(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (fi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var vi = w.ReactCurrentBatchConfig;
        function mi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gi = ka(null),
          yi = null,
          bi = null,
          wi = null;
        function Si() {
          wi = bi = yi = null;
        }
        function xi(e) {
          var t = gi.current;
          Ca(gi), (e._currentValue = t);
        }
        function Ei(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ki(e, t) {
          (yi = e),
            (wi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Ci(e) {
          var t = e._currentValue;
          if (wi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === yi) throw Error(i(308));
              (bi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Ti = null;
        function _i(e) {
          null === Ti ? (Ti = [e]) : Ti.push(e);
        }
        function Pi(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), _i(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oi(e, r)
          );
        }
        function Oi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ni = !1;
        function Li(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ji(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oi(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), _i(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oi(e, n)
          );
        }
        function Di(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ri(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ai(e, t, n, r) {
          var a = e.updateQueue;
          Ni = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === o ? (i = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = s = null, l = i; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((f = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = A({}, d, f);
                      break e;
                    case 2:
                      Ni = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Rs |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Ii(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function Bi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ui = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = zi(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (nu(t, e, a, r), Di(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = zi(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (nu(t, e, a, r), Di(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = zi(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mi(e, a, r)) && (nu(t, e, r, n), Di(t, e, r));
          },
        };
        function Vi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, i);
        }
        function Hi(e, t, n) {
          var r = !1,
            a = _a,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ci(i))
              : ((a = ja(t) ? Na : Pa.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : _a)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ui),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function $i(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
        }
        function Wi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fi), Li(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ci(i))
            : ((i = ja(t) ? Na : Pa.current), (a.context = La(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Bi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ui.enqueueReplaceState(a, a.state, null),
              Ai(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Gi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fi && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Qi(e) {
          return (0, e._init)(e._payload);
        }
        function Yi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = zu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Au(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === E
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === j &&
                    Qi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Gi(e, t, n)), (r.return = e), r)
              : (((r = Mu(n.type, n.key, n.props, null, e.mode, r)).ref = Gi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Au("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Mu(t.type, t.key, t.props, null, e.mode, n)).ref = Gi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Iu(t, e.mode, n)).return = e), t;
                case j:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t;
              qi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? u(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case j:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== a ? null : d(e, t, n, r, null);
              qi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case j:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || D(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qi(t, r);
            }
            return null;
          }
          function v(a, i, l, s) {
            for (
              var u = null, c = null, d = i, v = (i = 0), m = null;
              null !== d && v < l.length;
              v++
            ) {
              d.index > v ? ((m = d), (d = null)) : (m = d.sibling);
              var g = p(a, d, l[v], s);
              if (null === g) {
                null === d && (d = m);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (i = o(g, i, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = m);
            }
            if (v === l.length) return n(a, d), ai && Ja(a, v), u;
            if (null === d) {
              for (; v < l.length; v++)
                null !== (d = f(a, l[v], s)) &&
                  ((i = o(d, i, v)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ai && Ja(a, v), u;
            }
            for (d = r(a, d); v < l.length; v++)
              null !== (m = h(d, a, v, l[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, v),
              u
            );
          }
          function m(a, l, s, u) {
            var c = D(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var d = (c = null), v = l, m = (l = 0), g = null, y = s.next();
              null !== v && !y.done;
              m++, y = s.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = o(b, l, m)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (v = g);
            }
            if (y.done) return n(a, v), ai && Ja(a, m), c;
            if (null === v) {
              for (; !y.done; m++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((l = o(y, l, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ai && Ja(a, m), c;
            }
            for (v = r(a, v); !y.done; m++, y = s.next())
              null !== (y = h(v, a, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (l = o(y, l, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, m),
              c
            );
          }
          return function e(r, i, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === E &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case S:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === E) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === j &&
                            Qi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = Gi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === E
                      ? (((i = Du(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = i))
                      : (((s = Mu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Gi(r, i, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case x:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Iu(o, r.mode, s)).return = r), (r = i);
                  }
                  return l(r);
                case j:
                  return e(r, i, (c = o._init)(o._payload), s);
              }
              if (te(o)) return v(r, i, o, s);
              if (D(o)) return m(r, i, o, s);
              qi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Au(o, r.mode, s)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var Xi = Yi(!0),
          Ki = Yi(!1),
          Ji = {},
          Zi = ka(Ji),
          eo = ka(Ji),
          to = ka(Ji);
        function no(e) {
          if (e === Ji) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ta(to, t), Ta(eo, e), Ta(Zi, Ji), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Zi), Ta(Zi, t);
        }
        function ao() {
          Ca(Zi), Ca(eo), Ca(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Zi.current),
            n = se(t, e.type);
          t !== n && (Ta(eo, e), Ta(Zi, n));
        }
        function oo(e) {
          eo.current === e && (Ca(Zi), Ca(eo));
        }
        var lo = ka(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = w.ReactCurrentDispatcher,
          po = w.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          go = null,
          yo = !1,
          bo = !1,
          wo = 0,
          So = 0;
        function xo() {
          throw Error(i(321));
        }
        function Eo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function ko(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (go = mo = null),
                (t.updateQueue = null),
                (fo.current = ul),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (go = mo = vo = null),
            (yo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Co() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function To() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (vo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function _o() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === go ? vo.memoizedState : go.next;
          if (null !== t) (go = t), (mo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === go ? (vo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function Po(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oo(e) {
          var t = _o(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = mo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((ho & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                  (vo.lanes |= d),
                  (Rs |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (Rs |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function No(e) {
          var t = _o(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            lr(o, t.memoizedState) || (wl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Lo() {}
        function jo(e, t) {
          var n = vo,
            r = _o(),
            a = t(),
            o = !lr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            $o(Do.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fo(9, Mo.bind(null, n, r, a, t), void 0, null),
              null === Os)
            )
              throw Error(i(349));
            0 !== (30 & ho) || zo(n, t, a);
          }
          return a;
        }
        function zo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Mo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ro(t) && Ao(e);
        }
        function Do(e, t, n) {
          return n(function () {
            Ro(t) && Ao(e);
          });
        }
        function Ro(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ao(e) {
          var t = Oi(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Io(e) {
          var t = To();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Fo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bo() {
          return _o().memoizedState;
        }
        function Uo(e, t, n, r) {
          var a = To();
          (vo.flags |= e),
            (a.memoizedState = Fo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vo(e, t, n, r) {
          var a = _o();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((i = o.destroy), null !== r && Eo(r, o.deps)))
              return void (a.memoizedState = Fo(t, n, i, r));
          }
          (vo.flags |= e), (a.memoizedState = Fo(1 | t, n, i, r));
        }
        function Ho(e, t) {
          return Uo(8390656, 8, e, t);
        }
        function $o(e, t) {
          return Vo(2048, 8, e, t);
        }
        function Wo(e, t) {
          return Vo(4, 2, e, t);
        }
        function Go(e, t) {
          return Vo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Yo() {}
        function Xo(e, t) {
          var n = _o();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Eo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ko(e, t) {
          var n = _o();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Eo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Rs |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function el() {
          return _o().memoizedState;
        }
        function tl(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Pi(e, t, n, r))) {
            nu(n, e, r, eu()), il(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), _i(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Pi(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), il(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function al(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function il(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ol = {
            readContext: Ci,
            useCallback: xo,
            useContext: xo,
            useEffect: xo,
            useImperativeHandle: xo,
            useInsertionEffect: xo,
            useLayoutEffect: xo,
            useMemo: xo,
            useReducer: xo,
            useRef: xo,
            useState: xo,
            useDebugValue: xo,
            useDeferredValue: xo,
            useTransition: xo,
            useMutableSource: xo,
            useSyncExternalStore: xo,
            useId: xo,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ci,
            useCallback: function (e, t) {
              return (To().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = To();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = To();
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = tl.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (To().memoizedState = e);
            },
            useState: Io,
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return (To().memoizedState = e);
            },
            useTransition: function () {
              var e = Io(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (To().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = To();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(i(349));
                0 !== (30 & ho) || zo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ho(Do.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Fo(9, Mo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = To(),
                t = Os.identifierPrefix;
              if (ai) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - ot(Xa) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = So++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ci,
            useCallback: Xo,
            useContext: Ci,
            useEffect: $o,
            useImperativeHandle: Qo,
            useInsertionEffect: Wo,
            useLayoutEffect: Go,
            useMemo: Ko,
            useReducer: Oo,
            useRef: Bo,
            useState: function () {
              return Oo(Po);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return Jo(_o(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [Oo(Po)[0], _o().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: jo,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ci,
            useCallback: Xo,
            useContext: Ci,
            useEffect: $o,
            useImperativeHandle: Qo,
            useInsertionEffect: Wo,
            useLayoutEffect: Go,
            useMemo: Ko,
            useReducer: No,
            useRef: Bo,
            useState: function () {
              return No(Po);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              var t = _o();
              return null === mo
                ? (t.memoizedState = e)
                : Jo(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [No(Po)[0], _o().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: jo,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = zi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Ws = r)), fl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = zi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zi(-1, 1)).tag = 2), Mi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? Ki(t, null, n, r) : Xi(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            ki(t, a),
            (r = ko(e, t, n, r, i, a)),
            (n = Co()),
            null === e || wl
              ? (ai && n && ei(t), (t.flags |= 1), Sl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function El(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              ju(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Mu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), kl(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = zu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kl(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return _l(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(zs, js),
                (js |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(zs, js),
                  (js |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ta(zs, js),
                (js |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(zs, js),
              (js |= r);
          return Sl(e, t, a, n), t.child;
        }
        function Tl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, a) {
          var i = ja(n) ? Na : Pa.current;
          return (
            (i = La(t, i)),
            ki(t, a),
            (n = ko(e, t, n, r, i, a)),
            (r = Co()),
            null === e || wl
              ? (ai && r && ei(t), (t.flags |= 1), Sl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Pl(e, t, n, r, a) {
          if (ja(n)) {
            var i = !0;
            Ra(t);
          } else i = !1;
          if ((ki(t, a), null === t.stateNode))
            Hl(e, t), Hi(t, n, r), Wi(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ci(u))
              : (u = La(t, (u = ja(n) ? Na : Pa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && $i(t, o, r, u)),
              (Ni = !1);
            var f = t.memoizedState;
            (o.state = f),
              Ai(t, r, o, a),
              (s = t.memoizedState),
              l !== r || f !== s || Oa.current || Ni
                ? ("function" === typeof c &&
                    (Bi(t, n, c, r), (s = t.memoizedState)),
                  (l = Ni || Vi(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              ji(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : mi(t.type, l)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ci(s))
                : (s = La(t, (s = ja(n) ? Na : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== d || f !== s) && $i(t, o, r, s)),
              (Ni = !1),
              (f = t.memoizedState),
              (o.state = f),
              Ai(t, r, o, a);
            var h = t.memoizedState;
            l !== d || f !== h || Oa.current || Ni
              ? ("function" === typeof p &&
                  (Bi(t, n, p, r), (h = t.memoizedState)),
                (u = Ni || Vi(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ol(e, t, n, r, i, a);
        }
        function Ol(e, t, n, r, a, i) {
          Tl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Aa(t, n, !1), $l(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xi(t, e.child, null, i)),
                (t.child = Xi(t, null, l, i)))
              : Sl(e, t, l, i),
            (t.memoizedState = r.state),
            a && Aa(t, n, !0),
            t.child
          );
        }
        function Nl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ll(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var jl,
          zl,
          Ml,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Rl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Al(e, t, n) {
          var r,
            a = t.pendingProps,
            o = lo.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ta(lo, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Ru(s, a, 0, null)),
                      (e = Du(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Rl(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Il(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = dl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Ru(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Du(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xi(t, e.child, null, l),
                    (t.child.memoizedState = Rl(l)),
                    (t.memoizedState = Dl),
                    o);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fl(e, t, l, (r = dl((o = Error(i(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Oi(e, a), nu(r, e, a, -1));
                }
                return vu(), Fl(e, t, l, (r = dl(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _u.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((qa[Qa++] = Xa),
                    (qa[Qa++] = Ka),
                    (qa[Qa++] = Ya),
                    (Xa = e.id),
                    (Ka = e.overflow),
                    (Ya = t)),
                  ((t = Il(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = zu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = zu(r, l))
                : ((l = Du(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Rl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = zu(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Il(e, t) {
          return (
            ((t = Ru(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && hi(r),
            Xi(t, e.child, null, n),
            ((e = Il(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ei(e.return, t, n);
        }
        function Ul(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Vl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ul(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ul(t, !0, n, null, i);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Rs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = zu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wl(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
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
              return Gl(t), null;
            case 1:
            case 17:
              return ja(t.type) && za(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ca(Oa),
                Ca(Pa),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (ou(ii), (ii = null)))),
                Gl(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                zl(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Gl(t), null;
                }
                if (((e = no(Zi.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Dr.length; a++) Fr(Dr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      X(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Fr("invalid", r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      G(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    jl(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Dr.length; a++) Fr(Dr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = A({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        G(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        G(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Ml(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Zi.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (Ca(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[fa] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gl(t), (o = !1);
                } else null !== ii && (ou(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === Ms && (Ms = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return (
                ao(), null === e && Vr(t.stateNode.containerInfo), Gl(t), null
              );
            case 10:
              return xi(t.type._context), Gl(t), null;
            case 19:
              if ((Ca(lo), null === (o = t.memoizedState))) return Gl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Wl(o, !1);
                else {
                  if (0 !== Ms || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Wl(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ke() > Vs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wl(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wl(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ai)
                    )
                      return Gl(t), null;
                  } else
                    2 * Ke() - o.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wl(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = lo.current),
                  Ta(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & js) &&
                    (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Ql(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                ja(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ca(Oa),
                Ca(Pa),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ca(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(lo), null;
            case 4:
              return ao(), null;
            case 10:
              return xi(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (jl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Zi.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (o = []);
                  break;
                case "select":
                  (a = A({}, a, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          s[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ml = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Xl = !1,
          Kl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ku(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ku(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && es(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
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
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: while (!0) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || Zl(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Vt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      es(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (Zl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  ku(n, t, l);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Xl = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kl()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(i(160));
                ps(o, l, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ku(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ms(t, e), (t = t.sibling);
        }
        function ms(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (m) {
                  ku(e, e.return, m);
                }
                try {
                  ns(5, e, e.return);
                } catch (m) {
                  ku(e, e.return, m);
                }
              }
              break;
            case 1:
              vs(t, e), gs(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if (
                (vs(t, e),
                gs(e),
                512 & r && null !== n && Zl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (m) {
                  ku(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      K(a, o),
                      be(s, l);
                    var c = be(s, o);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? me(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (m) {
                    ku(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vs(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (m) {
                  ku(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vs(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (m) {
                  ku(e, e.return, m);
                }
              break;
            case 4:
            default:
              vs(t, e), gs(e);
              break;
            case 13:
              vs(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Ke())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || d), vs(t, e), (Xl = c))
                  : vs(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jl = e, d = e.child; null !== d; ) {
                    for (f = Jl = d; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              ku(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : Ss(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ve("display", l)));
                      } catch (m) {
                        ku(e, e.return, m);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (m) {
                        ku(e, e.return, m);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              vs(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, ls(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              ku(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Yl;
              if (!o) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Yl;
                var u = Xl;
                if (((Yl = o), (Xl = s) && !u))
                  for (Jl = a; null !== Jl; )
                    (s = (o = Jl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? xs(a)
                        : null !== s
                        ? ((s.return = o), (Jl = s))
                        : xs(a);
                for (; null !== i; ) (Jl = i), bs(i, t, n), (i = i.sibling);
                (Jl = a), (Yl = l), (Xl = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Jl = i))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ii(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ii(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xl || (512 & t.flags && as(t));
              } catch (p) {
                ku(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ku(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ku(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, o, s);
                  }
              }
            } catch (s) {
              ku(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Es,
          ks = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          Ts = w.ReactCurrentOwner,
          _s = w.ReactCurrentBatchConfig,
          Ps = 0,
          Os = null,
          Ns = null,
          Ls = 0,
          js = 0,
          zs = ka(0),
          Ms = 0,
          Ds = null,
          Rs = 0,
          As = 0,
          Is = 0,
          Fs = null,
          Bs = null,
          Us = 0,
          Vs = 1 / 0,
          Hs = null,
          $s = !1,
          Ws = null,
          Gs = null,
          qs = !1,
          Qs = null,
          Ys = 0,
          Xs = 0,
          Ks = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & Ps) ? Ke() : -1 !== Js ? Js : (Js = Ke());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Ls
            ? Ls & -Ls
            : null !== vi.transition
            ? (0 === Zs && (Zs = vt()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Ks = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Ps) && e === Os) ||
              (e === Os && (0 === (2 & Ps) && (As |= n), 4 === Ms && lu(e, Ls)),
              ru(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                ((Vs = Ke() + 500), Fa && Va()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[o] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Os ? Ls : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ua(e);
                  })(su.bind(null, e))
                : Ua(su.bind(null, e)),
                oa(function () {
                  0 === (6 & Ps) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & Ps))) throw Error(i(327));
          var n = e.callbackNode;
          if (xu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? Ls : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var a = Ps;
            Ps |= 2;
            var o = hu();
            for (
              (Os === e && Ls === t) ||
              ((Hs = null), (Vs = Ke() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Si(),
              (Cs.current = o),
              (Ps = a),
              null !== Ns ? (t = 0) : ((Os = null), (Ls = 0), (t = Ms));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Ds), fu(e, 0), lu(e, r), ru(e, Ke()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = iu(e, o))),
                  1 === t))
              )
                throw ((n = Ds), fu(e, 0), lu(e, r), ru(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Su(e, Bs, Hs);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Ke()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Su.bind(null, e, Bs, Hs), t);
                    break;
                  }
                  Su(e, Bs, Hs);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
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
                          : 1960 * ks(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Su.bind(null, e, Bs, Hs), r);
                    break;
                  }
                  Su(e, Bs, Hs);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ru(e, Ke()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Bs), (Bs = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function lu(e, t) {
          for (
            t &= ~Is,
              t &= ~As,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ps)) throw Error(i(327));
          xu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Ke()), null;
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Ds), fu(e, 0), lu(e, t), ru(e, Ke()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Bs, Hs),
            ru(e, Ke()),
            null
          );
        }
        function uu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && ((Vs = Ke() + 500), Fa && Va());
          }
        }
        function cu(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & Ps) && xu();
          var t = Ps;
          Ps |= 1;
          var n = _s.transition,
            r = bt;
          try {
            if (((_s.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_s.transition = n), 0 === (6 & (Ps = t)) && Va();
          }
        }
        function du() {
          (js = zs.current), Ca(zs);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  ao(), Ca(Oa), Ca(Pa), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ca(lo);
                  break;
                case 10:
                  xi(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ns = e = zu(e.current, null)),
            (Ls = js = t),
            (Ms = 0),
            (Ds = null),
            (Is = As = Rs = 0),
            (Bs = Fs = null),
            null !== Ti)
          ) {
            for (t = 0; t < Ti.length; t++)
              if (null !== (r = (n = Ti[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ti = null;
          }
          return e;
        }
        function pu(e, t) {
          while (!0) {
            var n = Ns;
            try {
              if ((Si(), (fo.current = ol), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = mo = vo = null),
                (bo = !1),
                (wo = 0),
                (Ts.current = null),
                null === n || null === n.return)
              ) {
                (Ms = 1), (Ds = t), (Ns = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, s, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), vu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, s, 0, t),
                      hi(cl(u, s));
                    break e;
                  }
                }
                (o = u = cl(u, s)),
                  4 !== Ms && (Ms = 2),
                  null === Fs ? (Fs = [o]) : Fs.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ri(o, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ri(o, vl(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wu(n);
            } catch (w) {
              (t = w), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = ol), null === e ? ol : e;
        }
        function vu() {
          (0 !== Ms && 3 !== Ms && 2 !== Ms) || (Ms = 4),
            null === Os ||
              (0 === (268435455 & Rs) && 0 === (268435455 & As)) ||
              lu(Os, Ls);
        }
        function mu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = hu();
          for ((Os === e && Ls === t) || ((Hs = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Si(), (Ps = n), (Cs.current = r), null !== Ns))
            throw Error(i(261));
          return (Os = null), (Ls = 0), Ms;
        }
        function gu() {
          for (; null !== Ns; ) bu(Ns);
        }
        function yu() {
          for (; null !== Ns && !Ye(); ) bu(Ns);
        }
        function bu(e) {
          var t = Es(e.alternate, e, js);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ns = t),
            (Ts.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, js))) return void (Ns = n);
            } else {
              if (null !== (n = Ql(n, t)))
                return (n.flags &= 32767), void (Ns = n);
              if (null === e) return (Ms = 6), void (Ns = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === Ms && (Ms = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            a = _s.transition;
          try {
            (_s.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xu();
                } while (null !== Qs);
                if (0 !== (6 & Ps)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Os && ((Ns = Os = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Ou(tt, function () {
                      return xu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = _s.transition), (_s.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Ts.current = null),
                    (function (e, t) {
                      if (((ea = $t), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = l + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === o && ++d === r && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : mi(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (S) {
                              ku(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (v = ts), (ts = !1);
                    })(e, n),
                    ms(n, e),
                    hr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Xe(),
                    (Ps = s),
                    (bt = l),
                    (_s.transition = o);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Qs = e), (Ys = a)),
                  0 === (o = e.pendingLanes) && (Gs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if ($s) throw (($s = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && xu(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Ks
                      ? Xs++
                      : ((Xs = 0), (Ks = e))
                    : (Xs = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (_s.transition = a), (bt = r);
          }
          return null;
        }
        function xu() {
          if (null !== Qs) {
            var e = wt(Ys),
              t = _s.transition,
              n = bt;
            try {
              if (((_s.transition = null), (bt = 16 > e ? 16 : e), null === Qs))
                var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Ys = 0), 0 !== (6 & Ps)))
                  throw Error(i(331));
                var a = Ps;
                for (Ps |= 4, Jl = e.current; null !== Jl; ) {
                  var o = Jl,
                    l = o.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jl = c; null !== Jl; ) {
                          var d = Jl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jl = f);
                          else
                            for (; null !== Jl; ) {
                              var p = (d = Jl).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Jl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (o = Jl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Jl = y);
                        break e;
                      }
                      Jl = o.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (x) {
                          ku(s, s.return, x);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var S = s.sibling;
                      if (null !== S) {
                        (S.return = s.return), (Jl = S);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  Va(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_s.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Mi(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function ku(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Mi(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Ls & n) === n &&
              (4 === Ms ||
              (3 === Ms && (130023424 & Ls) === Ls && 500 > Ke() - Us)
                ? fu(e, 0)
                : (Is |= n)),
            ru(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Oi(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function _u(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Ou(e, t) {
          return qe(e, t);
        }
        function Nu(e, t, n, r) {
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
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function ju(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Mu(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) ju(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case E:
                return Du(n.children, a, o, t);
              case k:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Lu(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Lu(13, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Lu(19, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case z:
                return Ru(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case j:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Du(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Ru(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Au(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Iu(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, i, o, l, s) {
          return (
            (e = new Fu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Lu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Li(i),
            e
          );
        }
        function Uu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Vu(e) {
          if (!e) return _a;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (ja(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (ja(n)) return Da(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, i, o, l, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, i, 0, l, s)).context = Vu(null)),
            (n = e.current),
            ((i = zi((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mi(n, i, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function $u(e, t, n, r) {
          var a = t.current,
            i = eu(),
            o = tu(a);
          return (
            (n = Vu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zi(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mi(a, t, o)) && (nu(e, a, o, i), Di(e, a, o)),
            o
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Gu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Gu(e, t), (e = e.alternate) && Gu(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Nl(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        ja(t.type) && Ra(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(gi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Al(e, t, n)
                            : (Ta(lo, 1 & lo.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Ta(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ai && 0 !== (1048576 & t.flags) && Za(t, Ga, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = La(t, Pa.current);
              ki(t, n), (a = ko(null, t, r, e, a, n));
              var o = Co();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    ja(r) ? ((o = !0), Ra(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Li(t),
                    (a.updater = Ui),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wi(t, r, e, n),
                    (t = Ol(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    Sl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return ju(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mi(r, e)),
                  a)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = El(null, t, r, mi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _l(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 3:
              e: {
                if ((Nl(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  ji(e, t),
                  Ai(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ll(e, t, r, n, (a = cl(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ll(e, t, r, n, (a = cl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Ki(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Tl(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Al(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xi(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Ta(gi, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === a.children && !Oa.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = zi(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Ei(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ei(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                Sl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                ki(t, n),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mi((r = t.type), t.pendingProps)),
                El(e, t, r, (a = mi(r.type, a)), n)
              );
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mi(r, a)),
                Hl(e, t),
                (t.tag = 1),
                ja(r) ? ((e = !0), Ra(t)) : (e = !1),
                ki(t, n),
                Hi(t, r, a),
                Wi(t, r, a, n),
                Ol(null, t, r, !0, e, n)
              );
            case 19:
              return Vl(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Wu(o);
                l.call(e);
              };
            }
            $u(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Wu(o);
                    i.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Wu(s);
                  l.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  $u(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Wu(o);
        }
        (Xu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            $u(e, t, null, null);
          }),
          (Xu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  $u(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ke()),
                    0 === (6 & Ps) && ((Vs = Ke() + 500), Va()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Oi(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Oi(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Oi(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(i(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uu),
          (Oe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Te, _e, uu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(i(200));
            return Uu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              l = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: l.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), v(w, g.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              x.call(t, a) && !k.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: E.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + P(s, 0) : i),
              S(o)
                ? ((a = ""),
                  null != e && (a = e.replace(_, "$&/") + "/"),
                  O(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (T(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(_, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + P((l = e[u]), u);
              s += O(l, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += O((l = l.value), t, a, (c = i + P(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var j = { current: null },
          z = { transition: null },
          M = {
            ReactCurrentDispatcher: j,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
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
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = E.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !k.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return j.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return j.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return j.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return j.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return j.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return j.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return j.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return j.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return j.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return j.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return j.current.useRef(e);
          }),
          (t.useState = function (e) {
            return j.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return j.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return j.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > i(s, n))
                u < a && 0 > i(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(u)) (v = !0), z(x);
            else {
              var t = r(c);
              null !== t && M(S, t.startTime - e);
            }
        }
        function x(e, n) {
          (v = !1), m && ((m = !1), y(T), (T = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !O()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var l = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && M(S, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          k = !1,
          C = null,
          T = -1,
          _ = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < _);
        }
        function N() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((k = !1), (C = null));
            }
          } else k = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            j = L.port2;
          (L.port1.onmessage = N),
            (E = function () {
              j.postMessage(null);
            });
        } else
          E = function () {
            g(N, 0);
          };
        function z(e) {
          (C = e), k || ((k = !0), E());
        }
        function M(e, n) {
          T = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), z(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
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
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(T), (T = -1)) : (m = !0), M(S, i - o)))
                : ((e.sortIndex = l), n(u, e), v || h || ((v = !0), z(x))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".d9312eb8.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "weather-app:";
      n.l = function (r, a, i, o) {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + i),
            (l.src = r)),
            (e[r] = [a]);
          var f = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = i));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = o),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            i,
            o = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); u < o.length; u++)
            (i = o[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkweather_app = self.webpackChunkweather_app || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e = n(791),
        t = n(250);
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      function a() {
        a = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          l = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (P) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var a = t && t.prototype instanceof p ? t : p,
            i = Object.create(a.prototype),
            o = new C(r || []);
          return (
            (i._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (a, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw i;
                  return _();
                }
                for (n.method = a, n.arg = i; ; ) {
                  var o = n.delegate;
                  if (o) {
                    var l = x(o, n);
                    if (l) {
                      if (l === f) continue;
                      return l;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = d(e, t, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === f)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(e, n, o)),
            i
          );
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        e.wrap = c;
        var f = {};
        function p() {}
        function h() {}
        function v() {}
        var m = {};
        u(m, o, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          y = g && g(g(T([])));
        y && y !== t && n.call(y, o) && (m = y);
        var b = (v.prototype = p.prototype = Object.create(m));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function a(i, o, l, s) {
            var u = d(e[i], e, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == r(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, l, s);
                    },
                    function (e) {
                      a("throw", e, l, s);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), l(c);
                    },
                    function (e) {
                      return a("throw", e, l, s);
                    }
                  );
            }
            s(u.arg);
          }
          var i;
          this._invoke = function (e, n) {
            function r() {
              return new t(function (t, r) {
                a(e, n, t, r);
              });
            }
            return (i = i ? i.then(r, r) : r());
          };
        }
        function x(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return f;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var r = d(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), f
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function T(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          u(b, "constructor", v),
          u(v, "constructor", h),
          (h.displayName = u(v, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(S.prototype),
          u(S.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new S(c(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          w(b),
          u(b, s, "Generator"),
          u(b, o, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = T),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  o = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (l && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    k(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function i(e, t, n, r, a, i, o) {
        try {
          var l = e[i](o),
            s = l.value;
        } catch (u) {
          return void n(u);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function o(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              i(o, r, a, l, s, "next", e);
            }
            function s(e) {
              i(o, r, a, l, s, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function u(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (l = !0), (a = s);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          s(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = {
        weather: null,
        unit: "C",
        city: "Copenhagen",
        country: "DK",
        isDark: !1,
        geoCoords: { lon: 55.6833, lat: 12.5752 },
      };
      function h(e, t) {
        var n = t.type,
          r = t.payload;
        switch (n) {
          case "WEATHER":
            return f(f({}, e), {}, { weather: r });
          case "CITY":
            return f(f({}, e), {}, { city: r });
          case "COUNTRY":
            return f(f({}, e), {}, { country: r });
          case "UNIT":
            return f(f({}, e), {}, { unit: r });
          case "GEO_COORDS":
            return f(f({}, e), {}, { geoCoords: r });
          case "DARK":
            return f(f({}, e), {}, { isDark: r });
          default:
            return e;
        }
      }
      var v = (0, e.createContext)(),
        m = n(569),
        g = n.n(m),
        y = "a5bb4718b30b6f58f58697997567fffa",
        b = {
          WEATHER_API_ENDPOINT:
            "https://api.openweathermap.org/data/2.5/weather?appid=".concat(
              y,
              "&"
            ),
          WEATHER_DATA_ENDPOINT:
            "https://api.openweathermap.org/data/2.5/onecall?appid=".concat(
              y,
              "&exclude=minutely&units=metric&"
            ),
        };
      function w(e) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = o(
          a().mark(function e(t) {
            var n, r, i, o;
            return a().wrap(function (e) {
              while (!0)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      g().get("".concat(b.WEATHER_API_ENDPOINT, "q=").concat(t))
                    );
                  case 2:
                    return (
                      (n = e.sent),
                      (r = n.data),
                      (i = r.coord),
                      (o = r.sys.country),
                      e.abrupt("return", f(f({}, i), {}, { country: o }))
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x(e, t) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = o(
          a().mark(function e(t, n) {
            var r, i, o, l;
            return a().wrap(function (e) {
              while (!0)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      g().get(
                        ""
                          .concat(b.WEATHER_API_ENDPOINT, "lon=")
                          .concat(t, "&lat=")
                          .concat(n)
                      )
                    );
                  case 2:
                    return (
                      (r = e.sent),
                      (i = r.data),
                      (o = i.name),
                      (l = i.sys.country),
                      e.abrupt("return", { name: o, country: l })
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function k() {
        return (k = o(
          a().mark(function e(t, n) {
            var r;
            return a().wrap(function (e) {
              while (!0)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      g().get(
                        ""
                          .concat(b.WEATHER_DATA_ENDPOINT, "lon=")
                          .concat(t, "&lat=")
                          .concat(n)
                      )
                    );
                  case 2:
                    return (r = e.sent), e.abrupt("return", r.data);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var C = function (e, t) {
        return k.apply(this, arguments);
      };
      var T = function () {
          return new Promise(function (e, t) {
            window.navigator.geolocation
              ? window.navigator.geolocation.getCurrentPosition(
                  function (t) {
                    var n = t.coords;
                    e(n);
                  },
                  function (e) {
                    t(e);
                  }
                )
              : console.log("Geo Location not supported");
          });
        },
        _ = n(184);
      var P = function () {
        var t,
          n = (0, e.useRef)(),
          r = (0, e.useContext)(v),
          i = r.app.isDark,
          l = r.dispatchApp;
        return (0, _.jsxs)("div", {
          className: "input-group",
          children: [
            (0, _.jsx)("span", {
              onClick: o(
                a().mark(function e() {
                  var t, r, i, o;
                  return a().wrap(function (e) {
                    while (!0)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), T();
                        case 2:
                          return (
                            (t = e.sent),
                            l({
                              type: "GEO_COORDS",
                              payload: { lon: t.longitude, lat: t.latitude },
                            }),
                            (e.next = 6),
                            x(t.longitude, t.latitude)
                          );
                        case 6:
                          (r = e.sent),
                            (i = r.country),
                            (o = r.name),
                            l({ type: "COUNTRY", payload: i }),
                            l({ type: "CITY", payload: o }),
                            (n.current.value = "");
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              style: i ? { background: "#37435a" } : null,
              children: (0, _.jsx)("i", {
                className: "fa-solid fa-location-crosshairs location-icon",
                style: i ? { color: "#FFFFFF" } : null,
              }),
            }),
            (0, _.jsx)("i", {
              className: "fa-solid fa-magnifying-glass search-icon",
            }),
            (0, _.jsx)("input", {
              type: "text",
              ref: n,
              style: i ? { background: "#232b39", color: "#fff" } : null,
              placeholder: "Search for places ...",
              onInput: function (e) {
                var n = e.target.value;
                clearTimeout(t),
                  (t = setTimeout(function () {
                    l({ type: "CITY", payload: n });
                  }, 500));
              },
            }),
          ],
        });
      };
      var O = function (e) {
        var t = e.showText,
          n = void 0 !== t && t,
          r = e.height,
          a = e.width,
          i = e.style;
        return (0, _.jsxs)("div", {
          className: n ? "loader center" : "loader",
          style: f(f({}, i), {}, { height: r, width: a }),
          children: [
            (0, _.jsx)("div", { className: "spinner" }),
            n &&
              (0, _.jsx)("span", {
                className: "loader-text",
                children: "Loading...",
              }),
          ],
        });
      };
      var N = function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (0, e.useContext)(v),
          a = r.app.unit;
        return "f" === a.toLowerCase()
          ? ((9 * t) / 5 + 32).toFixed(n)
          : parseFloat(t).toFixed(n);
      };
      var L = function (e) {
        var t = e.temperature;
        return N(t);
      };
      var j = function () {
        var t = (0, e.useContext)(v),
          n = t.app,
          r = t.app,
          a = r.weather,
          i = r.unit;
        if (!a) return (0, _.jsx)(O, { showText: !0, height: "40vh" });
        var o = a.current,
          l = new Date(1e3 * o.dt),
          s = Intl.DateTimeFormat([], {
            hour12: !0,
            hour: "numeric",
            minute: "2-digit",
            timeZone: a.timezone,
          }),
          u = Intl.DateTimeFormat([], {
            weekday: "long",
            timeZone: a.timezone,
          });
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)("div", {
              className: "weather-icon",
              style: {
                background: "url(/weather_icons/".concat(
                  o.weather[0].icon,
                  ".png)"
                ),
              },
            }),
            (0, _.jsxs)("h2", {
              className: "temp",
              children: [
                (0, _.jsx)(L, { temperature: o.temp }),
                (0, _.jsxs)("span", { children: ["\xb0", i] }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: "feels-like",
              children: [
                "Feels like ",
                (0, _.jsx)(L, { temperature: o.feels_like }),
                " \xb0",
                i,
              ],
            }),
            (0, _.jsxs)("div", {
              className: "description",
              children: [
                (0, _.jsx)("i", { className: "fa-brands fa-cloudversify" }),
                "\xa0",
                o.weather[0].description,
              ],
            }),
            (0, _.jsx)("div", {
              className: "divider",
              style: n.isDark ? { background: "#3B435E" } : null,
            }),
            (0, _.jsxs)("div", {
              className: "day",
              children: [
                u.format(l),
                ", ",
                (0, _.jsx)("span", { children: s.format(l) }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: "city",
              children: [
                (0, _.jsx)("i", { className: "fa-solid fa-location-dot" }),
                " ",
                n.city,
                ", ",
                n.country,
              ],
            }),
          ],
        });
      };
      var z = function (t) {
        var n = t.children,
          r = t.className,
          a = (0, e.useContext)(v).app.isDark;
        return (0, _.jsx)("div", {
          className: r,
          style: a ? { background: "rgb(25 32 45)", color: "#fff" } : null,
          children: n,
        });
      };
      var M = function () {
        var t = (0, e.useContext)(v).app;
        if (!t.weather) return (0, _.jsx)(O, {});
        var n = t.weather.daily;
        return (0, _.jsx)("div", {
          className: "forecast-container",
          children: n.map(function (e, t) {
            var n = new Date(1e3 * e.dt),
              r = Intl.DateTimeFormat([], {
                weekday: "long",
                timeZone: e.timezone,
              });
            return (0,
            _.jsxs)(z, { className: "forecast-card", children: [(0, _.jsx)("div", { className: "forecast-day", children: r.format(n) }), (0, _.jsx)("img", { src: "/weather_icons/".concat(e.weather[0].icon, ".png"), alt: "icon", width: 100 }), (0, _.jsx)("div", { className: "forecast-description", children: e.weather[0].description }), (0, _.jsxs)("div", { className: "minmax-temp", children: [(0, _.jsx)(L, { temperature: e.temp.max }), "\xb0", (0, _.jsxs)("span", { children: [(0, _.jsx)(L, { temperature: e.temp.min }), "\xb0"] })] })] }, t);
          }),
        });
      };
      var D = function () {
        var t = (0, e.useContext)(v).app,
          n = t.weather,
          r = t.isDark;
        if (!n) return (0, _.jsx)(O, {});
        var a = n.current,
          i = Intl.DateTimeFormat([], {
            hour12: !0,
            hour: "numeric",
            minute: "2-digit",
            timeZone: n.timezone,
          });
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)("div", {
            className: "highlight-container",
            children: [
              (0, _.jsxs)(z, {
                className: "h-card",
                children: [
                  (0, _.jsx)("div", {
                    className: "h-title",
                    children: "Humidity",
                  }),
                  (0, _.jsx)("img", {
                    src: "/weather_icons/humidity.png",
                    width: 100,
                    alt: "",
                  }),
                  (0, _.jsxs)("div", {
                    className: "hl-value",
                    children: [
                      (0, _.jsx)("h1", { children: a.humidity }),
                      (0, _.jsx)("span", { children: "%" }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(z, {
                className: "h-card",
                children: [
                  (0, _.jsx)("div", {
                    className: "h-title",
                    children: "Wind Speed",
                  }),
                  (0, _.jsx)("img", {
                    src: "/weather_icons/wind-".concat(
                      r ? "night" : "day",
                      ".png"
                    ),
                    width: 100,
                    alt: "wind icon",
                  }),
                  (0, _.jsxs)("div", {
                    className: "hl-value",
                    children: [
                      (0, _.jsx)("h1", { children: a.wind_speed.toFixed(1) }),
                      (0, _.jsx)("span", { children: "m/s" }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(z, {
                className: "h-card sun",
                children: [
                  (0, _.jsxs)("div", {
                    className: "sun-info",
                    children: [
                      (0, _.jsx)("img", {
                        src: "/weather_icons/sunrise.png",
                        width: 50,
                        alt: "",
                      }),
                      (0, _.jsxs)("div", {
                        children: [
                          i.format(new Date(1e3 * a.sunrise)),
                          (0, _.jsx)("span", { children: "Sunrise" }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: "sun-info",
                    children: [
                      (0, _.jsx)("img", {
                        src: "/weather_icons/sunset.png",
                        width: 50,
                        alt: "",
                      }),
                      (0, _.jsxs)("div", {
                        children: [
                          i.format(new Date(1e3 * a.sunset)),
                          (0, _.jsx)("span", { children: "Sunset" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(z, {
                className: "h-card",
                children: [
                  (0, _.jsx)("div", {
                    className: "h-title",
                    children: "Clouds",
                  }),
                  (0, _.jsx)("img", {
                    src: "/weather_icons/clouds.png",
                    width: 100,
                    alt: "",
                  }),
                  (0, _.jsxs)("div", {
                    className: "hl-value",
                    children: [
                      (0, _.jsxs)("h1", { children: [" ", a.clouds] }),
                      (0, _.jsx)("span", { children: "%" }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(z, {
                className: "h-card",
                children: [
                  (0, _.jsx)("div", {
                    className: "h-title",
                    children: "UV Index",
                  }),
                  (0, _.jsx)("img", {
                    src: "/weather_icons/uv.png",
                    width: 100,
                    alt: "",
                  }),
                  (0, _.jsx)("h1", { children: a.uvi }),
                ],
              }),
              (0, _.jsxs)(z, {
                className: "h-card",
                children: [
                  (0, _.jsx)("div", {
                    className: "h-title",
                    children: "Pressure",
                  }),
                  (0, _.jsx)("img", {
                    src: "/weather_icons/pressure.png",
                    width: 100,
                    alt: "",
                  }),
                  (0, _.jsxs)("div", {
                    className: "hl-value",
                    children: [
                      (0, _.jsx)("h1", { children: a.pressure }),
                      (0, _.jsx)("span", { children: "hPa" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function R(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function A(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function I(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function F(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function B(e, t, n) {
        return (
          t && F(e.prototype, t),
          n && F(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function U(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function V() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : U(t[n]) &&
              U(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              V(e[n], t[n]);
        });
      }
      var H = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function $() {
        var e = "undefined" !== typeof document ? document : {};
        return V(e, H), e;
      }
      var W = {
        document: H,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function G() {
        var e = "undefined" !== typeof window ? window : {};
        return V(e, W), e;
      }
      function q(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Q(e, t) {
        if (t && ("object" === r(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return q(e);
      }
      function Y(e, t) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Y(e, t)
        );
      }
      function X(e) {
        return (
          (X = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          X(e)
        );
      }
      function K() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function J(e, t, n) {
        return (
          (J = K()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && Y(a, n.prototype), a;
              }),
          J.apply(null, arguments)
        );
      }
      function Z(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (Z = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return J(e, arguments, X(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Y(r, e)
            );
          }),
          Z(e)
        );
      }
      var ee = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Y(e, t);
        })(n, e);
        var t = (function (e) {
          var t = K();
          return function () {
            var n,
              r = X(e);
            if (t) {
              var a = X(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Q(this, n);
          };
        })(n);
        function n(e) {
          var r;
          return (
            I(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : (function (e) {
                  var t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: function () {
                      return t;
                    },
                    set: function (e) {
                      t.__proto__ = e;
                    },
                  });
                })(q((r = t.call.apply(t, [this].concat(A(e || [])))))),
            Q(r)
          );
        }
        return B(n);
      })(Z(Array));
      function te() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, A(te(e))) : t.push(e);
          }),
          t
        );
      }
      function ne(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function re(e, t) {
        var n = G(),
          r = $(),
          a = [];
        if (!t && e instanceof ee) return e;
        if (!e) return new ee(a);
        if ("string" === typeof e) {
          var i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            var o = "div";
            0 === i.indexOf("<li") && (o = "ul"),
              0 === i.indexOf("<tr") && (o = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (o = "tr"),
              0 === i.indexOf("<tbody") && (o = "table"),
              0 === i.indexOf("<option") && (o = "select");
            var l = r.createElement(o);
            l.innerHTML = i;
            for (var s = 0; s < l.childNodes.length; s += 1)
              a.push(l.childNodes[s]);
          } else
            a = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), a = 0;
                a < r.length;
                a += 1
              )
                n.push(r[a]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof ee) return e;
          a = e;
        }
        return new ee(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(a)
        );
      }
      re.fn = ee.prototype;
      var ae = "resize scroll".split(" ");
      function ie(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if ("undefined" === typeof n[0]) {
            for (var a = 0; a < this.length; a += 1)
              ae.indexOf(e) < 0 &&
                (e in this[a] ? this[a][e]() : re(this[a]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      ie("click"),
        ie("blur"),
        ie("focus"),
        ie("focusin"),
        ie("focusout"),
        ie("keyup"),
        ie("keydown"),
        ie("keypress"),
        ie("submit"),
        ie("change"),
        ie("mousedown"),
        ie("mousemove"),
        ie("mouseup"),
        ie("mouseenter"),
        ie("mouseleave"),
        ie("mouseout"),
        ie("mouseover"),
        ie("touchstart"),
        ie("touchend"),
        ie("touchmove"),
        ie("resize"),
        ie("scroll");
      var oe = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = te(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, A(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = te(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, A(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = te(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            ne(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = te(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            o = t[3];
          function l(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), re(t).is(a)))
                i.apply(t, n);
              else
                for (var r = re(t).parents(), o = 0; o < r.length; o += 1)
                  re(r[o]).is(a) && i.apply(r[o], n);
            }
          }
          function s(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (o = t[2]), (a = void 0)),
            o || (o = !1);
          for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (a)
              for (u = 0; u < c.length; u += 1) {
                var p = c[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                  f.dom7LiveListeners[p].push({
                    listener: i,
                    proxyListener: l,
                  }),
                  f.addEventListener(p, l, o);
              }
            else
              for (u = 0; u < c.length; u += 1) {
                var h = c[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[h] || (f.dom7Listeners[h] = []),
                  f.dom7Listeners[h].push({ listener: i, proxyListener: s }),
                  f.addEventListener(h, s, o);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            o = t[3];
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (o = t[2]), (a = void 0)),
            o || (o = !1);
          for (var l = r.split(" "), s = 0; s < l.length; s += 1)
            for (var u = l[s], c = 0; c < this.length; c += 1) {
              var d = this[c],
                f = void 0;
              if (
                (!a && d.dom7Listeners
                  ? (f = d.dom7Listeners[u])
                  : a && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                f && f.length)
              )
                for (var p = f.length - 1; p >= 0; p -= 1) {
                  var h = f[p];
                  (i && h.listener === i) ||
                  (i &&
                    h.listener &&
                    h.listener.dom7proxy &&
                    h.listener.dom7proxy === i)
                    ? (d.removeEventListener(u, h.proxyListener, o),
                      f.splice(p, 1))
                    : i ||
                      (d.removeEventListener(u, h.proxyListener, o),
                      f.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = G(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = n[0].split(" "), i = n[1], o = 0; o < a.length; o += 1)
            for (var l = a[o], s = 0; s < this.length; s += 1) {
              var u = this[s];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(l, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (u.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  u.dispatchEvent(c),
                  (u.dom7EventData = []),
                  delete u.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = G();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = G(),
              t = $(),
              n = this[0],
              r = n.getBoundingClientRect(),
              a = t.body,
              i = n.clientTop || a.clientTop || 0,
              o = n.clientLeft || a.clientLeft || 0,
              l = n === e ? e.scrollY : n.scrollTop,
              s = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + l - i, left: r.left + s - o };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = G();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var a in e) this[n].style[a] = e[a];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = G(),
            a = $(),
            i = this[0];
          if (!i || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (t = re(e), n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          if (e === a) return i === a;
          if (e === r) return i === r;
          if (e.nodeType || e instanceof ee) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return re([]);
          if (e < 0) {
            var n = t + e;
            return re(n < 0 ? [] : [this[n]]);
          }
          return re([this[e]]);
        },
        append: function () {
          for (var e, t = $(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" === typeof e) {
                var a = t.createElement("div");
                for (a.innerHTML = e; a.firstChild; )
                  this[r].appendChild(a.firstChild);
              } else if (e instanceof ee)
                for (var i = 0; i < e.length; i += 1) this[r].appendChild(e[i]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = $();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var a = r.createElement("div");
              for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof ee)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                re(this[0].nextElementSibling).is(e)
                ? re([this[0].nextElementSibling])
                : re([])
              : this[0].nextElementSibling
              ? re([this[0].nextElementSibling])
              : re([])
            : re([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return re([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            e ? re(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return re(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && re(t.previousElementSibling).is(e)
                ? re([t.previousElementSibling])
                : re([])
              : t.previousElementSibling
              ? re([t.previousElementSibling])
              : re([]);
          }
          return re([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return re([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            e ? re(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return re(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? re(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return re(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              e ? re(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return re(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? re([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), a = 0;
              a < r.length;
              a += 1
            )
              t.push(r[a]);
          return re(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, a = 0; a < r.length; a += 1)
              (e && !re(r[a]).is(e)) || t.push(r[a]);
          return re(t);
        },
        filter: function (e) {
          return re(ne(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(oe).forEach(function (e) {
        Object.defineProperty(re.fn, e, { value: oe[e], writable: !0 });
      });
      var le,
        se,
        ue,
        ce = re;
      function de(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function fe() {
        return Date.now();
      }
      function pe(e, t) {
        void 0 === t && (t = "x");
        var n,
          r,
          a,
          i = G(),
          o = (function (e) {
            var t,
              n = G();
            return (
              n.getComputedStyle && (t = n.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          i.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (a = new i.WebKitCSSMatrix("none" === r ? "" : r)))
            : (n = (a =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m41
              : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          r || 0
        );
      }
      function he(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function ve(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function me() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !ve(r))
            for (
              var a = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                i = 0,
                o = a.length;
              i < o;
              i += 1
            ) {
              var l = a[i],
                s = Object.getOwnPropertyDescriptor(r, l);
              void 0 !== s &&
                s.enumerable &&
                (he(e[l]) && he(r[l])
                  ? r[l].__swiper__
                    ? (e[l] = r[l])
                    : me(e[l], r[l])
                  : !he(e[l]) && he(r[l])
                  ? ((e[l] = {}),
                    r[l].__swiper__ ? (e[l] = r[l]) : me(e[l], r[l]))
                  : (e[l] = r[l]));
            }
        }
        return e;
      }
      function ge(e, t, n) {
        e.style.setProperty(t, n);
      }
      function ye(e) {
        var t,
          n = e.swiper,
          r = e.targetPosition,
          a = e.side,
          i = G(),
          o = -n.translate,
          l = null,
          s = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(n.cssModeFrameID);
        var u = r > o ? "next" : "prev",
          d = function (e, t) {
            return ("next" === u && e >= t) || ("prev" === u && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === l && (l = t);
          var u = Math.max(Math.min((t - l) / s, 1), 0),
            f = 0.5 - Math.cos(u * Math.PI) / 2,
            p = o + f * (r - o);
          if ((d(p, r) && (p = r), n.wrapperEl.scrollTo(c({}, a, p)), d(p, r)))
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo(c({}, a, p));
              }),
              void i.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = i.requestAnimationFrame(e);
        })();
      }
      function be() {
        return (
          le ||
            (le = (function () {
              var e = G(),
                t = $();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (r) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          le
        );
      }
      function we(e) {
        return (
          void 0 === e && (e = {}),
          se ||
            (se = (function (e) {
              var t = (void 0 === e ? {} : e).userAgent,
                n = be(),
                r = G(),
                a = r.navigator.platform,
                i = t || r.navigator.userAgent,
                o = { ios: !1, android: !1 },
                l = r.screen.width,
                s = r.screen.height,
                u = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = i.match(/(iPad).*OS\s([\d_]+)/),
                d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a,
                h = "MacIntel" === a;
              return (
                !c &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(l, "x").concat(s)) >= 0 &&
                  ((c = i.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                u && !p && ((o.os = "android"), (o.android = !0)),
                (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          se
        );
      }
      function Se() {
        return (
          ue ||
            (ue = (function () {
              var e = G();
              return {
                isSafari: (function () {
                  var t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          ue
        );
      }
      var xe = {
        on: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          var a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny: function (e, t) {
          var n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (r, a) {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if (!r.eventsListeners) return r;
          for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
            i[o] = arguments[o];
          "string" === typeof i[0] || Array.isArray(i[0])
            ? ((e = i[0]), (t = i.slice(1, i.length)), (n = r))
            : ((e = i[0].events), (t = i[0].data), (n = i[0].context || r)),
            t.unshift(n);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat(A(t)));
                }),
                r.eventsListeners &&
                  r.eventsListeners[e] &&
                  r.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            r
          );
        },
      };
      var Ee = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var r = e.params,
            a = e.$wrapperEl,
            i = e.size,
            o = e.rtlTranslate,
            l = e.wrongRTL,
            s = e.virtual && r.virtual.enabled,
            u = s ? e.virtual.slides.length : e.slides.length,
            d = a.children(".".concat(e.params.slideClass)),
            f = s ? e.virtual.slides.length : d.length,
            p = [],
            h = [],
            v = [],
            m = r.slidesOffsetBefore;
          "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
          var g = r.slidesOffsetAfter;
          "function" === typeof g && (g = r.slidesOffsetAfter.call(e));
          var y = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = r.spaceBetween,
            S = -m,
            x = 0,
            E = 0;
          if ("undefined" !== typeof i) {
            "string" === typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * i),
              (e.virtualSize = -w),
              o
                ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
                r.cssMode &&
                (ge(e.wrapperEl, "--swiper-centered-offset-before", ""),
                ge(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var k,
              C = r.grid && r.grid.rows > 1 && e.grid;
            C && e.grid.initSlides(f);
            for (
              var T =
                  "auto" === r.slidesPerView &&
                  r.breakpoints &&
                  Object.keys(r.breakpoints).filter(function (e) {
                    return (
                      "undefined" !== typeof r.breakpoints[e].slidesPerView
                    );
                  }).length > 0,
                _ = 0;
              _ < f;
              _ += 1
            ) {
              k = 0;
              var P = d.eq(_);
              if (
                (C && e.grid.updateSlide(_, P, f, t),
                "none" !== P.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  T && (d[_].style[t("width")] = "");
                  var O = getComputedStyle(P[0]),
                    N = P[0].style.transform,
                    L = P[0].style.webkitTransform;
                  if (
                    (N && (P[0].style.transform = "none"),
                    L && (P[0].style.webkitTransform = "none"),
                    r.roundLengths)
                  )
                    k = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                  else {
                    var j = n(O, "width"),
                      z = n(O, "padding-left"),
                      M = n(O, "padding-right"),
                      D = n(O, "margin-left"),
                      R = n(O, "margin-right"),
                      A = O.getPropertyValue("box-sizing");
                    if (A && "border-box" === A) k = j + D + R;
                    else {
                      var I = P[0],
                        F = I.clientWidth;
                      k = j + z + M + D + R + (I.offsetWidth - F);
                    }
                  }
                  N && (P[0].style.transform = N),
                    L && (P[0].style.webkitTransform = L),
                    r.roundLengths && (k = Math.floor(k));
                } else
                  (k = (i - (r.slidesPerView - 1) * w) / r.slidesPerView),
                    r.roundLengths && (k = Math.floor(k)),
                    d[_] && (d[_].style[t("width")] = "".concat(k, "px"));
                d[_] && (d[_].swiperSlideSize = k),
                  v.push(k),
                  r.centeredSlides
                    ? ((S = S + k / 2 + x / 2 + w),
                      0 === x && 0 !== _ && (S = S - i / 2 - w),
                      0 === _ && (S = S - i / 2 - w),
                      Math.abs(S) < 0.001 && (S = 0),
                      r.roundLengths && (S = Math.floor(S)),
                      E % r.slidesPerGroup === 0 && p.push(S),
                      h.push(S))
                    : (r.roundLengths && (S = Math.floor(S)),
                      (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                        e.params.slidesPerGroup ===
                        0 && p.push(S),
                      h.push(S),
                      (S = S + k + w)),
                  (e.virtualSize += k + w),
                  (x = k),
                  (E += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + g),
              o &&
                l &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                a.css({
                  width: "".concat(e.virtualSize + r.spaceBetween, "px"),
                }),
              r.setWrapperSize &&
                a.css(
                  c(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + r.spaceBetween, "px")
                  )
                ),
              C && e.grid.updateWrapperSize(k, p, t),
              !r.centeredSlides)
            ) {
              for (var B = [], U = 0; U < p.length; U += 1) {
                var V = p[U];
                r.roundLengths && (V = Math.floor(V)),
                  p[U] <= e.virtualSize - i && B.push(V);
              }
              (p = B),
                Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - i);
            }
            if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
              var H = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              d.filter(function (e, t) {
                return !r.cssMode || t !== d.length - 1;
              }).css(c({}, H, "".concat(w, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var $ = 0;
              v.forEach(function (e) {
                $ += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var W = ($ -= r.spaceBetween) - i;
              p = p.map(function (e) {
                return e < 0 ? -m : e > W ? W + g : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var G = 0;
              if (
                (v.forEach(function (e) {
                  G += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (G -= r.spaceBetween) < i)
              ) {
                var q = (i - G) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - q;
                }),
                  h.forEach(function (e, t) {
                    h[t] = e + q;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: v,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              ge(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-p[0], "px")
              ),
                ge(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - v[v.length - 1] / 2, "px")
                );
              var Q = -e.snapGrid[0],
                Y = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + Q;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + Y;
                }));
            }
            if (
              (f !== u && e.emit("slidesLengthChange"),
              p.length !== y &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && e.updateSlidesOffset(),
              !s && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
            ) {
              var X = "".concat(r.containerModifierClass, "backface-hidden"),
                K = e.$el.hasClass(X);
              f <= r.maxBackfaceHiddenSlides
                ? K || e.$el.addClass(X)
                : K && e.$el.removeClass(X);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            a = n.virtual && n.params.virtual.enabled,
            i = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var o = function (e) {
            return a
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              (n.visibleSlides || ce([])).each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var l = n.activeIndex + t;
                if (l > n.slides.length && !a) break;
                r.push(o(l));
              }
          else r.push(o(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if ("undefined" !== typeof r[t]) {
              var s = r[t].offsetHeight;
              i = s > i ? s : i;
            }
          (i || 0 === i) && n.$wrapperEl.css("height", "".concat(i, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            r = t.slides,
            a = t.rtlTranslate,
            i = t.snapGrid;
          if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var o = -e;
            a && (o = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var l = 0; l < r.length; l += 1) {
              var s = r[l],
                u = s.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
              var c =
                  (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                d =
                  (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                f = -(o - u),
                p = f + t.slidesSizesGrid[l];
              ((f >= 0 && f < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (f <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(s),
                t.visibleSlidesIndexes.push(l),
                r.eq(l).addClass(n.slideVisibleClass)),
                (s.progress = a ? -c : c),
                (s.originalProgress = a ? -d : d);
            }
            t.visibleSlides = ce(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            a = t.maxTranslate() - t.minTranslate(),
            i = t.progress,
            o = t.isBeginning,
            l = t.isEnd,
            s = o,
            u = l;
          0 === a
            ? ((i = 0), (o = !0), (l = !0))
            : ((o = (i = (e - t.minTranslate()) / a) <= 0), (l = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: o, isEnd: l }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            o && !s && t.emit("reachBeginning toEdge"),
            l && !u && t.emit("reachEnd toEdge"),
            ((s && !o) || (u && !l)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            a = t.$wrapperEl,
            i = t.activeIndex,
            o = t.realIndex,
            l = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = l
              ? t.$wrapperEl.find(
                  "."
                    .concat(r.slideClass, '[data-swiper-slide-index="')
                    .concat(i, '"]')
                )
              : n.eq(i)).addClass(r.slideActiveClass),
            r.loop &&
              (e.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(o, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(o, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass));
          var s = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === s.length && (s = n.eq(0)).addClass(r.slideNextClass);
          var u = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === u.length && (u = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
              (s.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            a = n.slidesGrid,
            i = n.snapGrid,
            o = n.params,
            l = n.activeIndex,
            s = n.realIndex,
            u = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var d = 0; d < a.length; d += 1)
              "undefined" !== typeof a[d + 1]
                ? r >= a[d] && r < a[d + 1] - (a[d + 1] - a[d]) / 2
                  ? (c = d)
                  : r >= a[d] && r < a[d + 1] && (c = d + 1)
                : r >= a[d] && (c = d);
            o.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (i.indexOf(r) >= 0) t = i.indexOf(r);
          else {
            var f = Math.min(o.slidesPerGroupSkip, c);
            t = f + Math.floor((c - f) / o.slidesPerGroup);
          }
          if ((t >= i.length && (t = i.length - 1), c !== l)) {
            var p = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: p,
              previousIndex: l,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              s !== p && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            a = ce(e).closest(".".concat(r.slideClass))[0],
            i = !1;
          if (a)
            for (var o = 0; o < n.slides.length; o += 1)
              if (n.slides[o] === a) {
                (i = !0), (t = o);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  ce(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var ke = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            n = t.params,
            r = t.rtlTranslate,
            a = t.translate,
            i = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -a : a;
          if (n.cssMode) return a;
          var o = pe(i[0], e);
          return r && (o = -o), o || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            a = n.params,
            i = n.$wrapperEl,
            o = n.wrapperEl,
            l = n.progress,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            a.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            a.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -s : -u)
              : a.virtualTranslate ||
                i.transform(
                  "translate3d("
                    .concat(s, "px, ")
                    .concat(u, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== l &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          var i = this,
            o = i.params,
            l = i.wrapperEl;
          if (i.animating && o.preventInteractionOnTransition) return !1;
          var s,
            u = i.minTranslate(),
            d = i.maxTranslate();
          if (
            ((s = r && e > u ? u : r && e < d ? d : e),
            i.updateProgress(s),
            o.cssMode)
          ) {
            var f = i.isHorizontal();
            if (0 === t) l[f ? "scrollLeft" : "scrollTop"] = -s;
            else {
              var p;
              if (!i.support.smoothScroll)
                return (
                  ye({
                    swiper: i,
                    targetPosition: -s,
                    side: f ? "left" : "top",
                  }),
                  !0
                );
              l.scrollTo(
                (c((p = {}), f ? "left" : "top", -s),
                c(p, "behavior", "smooth"),
                p)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(s),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionEnd")))
              : (i.setTransition(t),
                i.setTranslate(s),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionStart")),
                i.animating ||
                  ((i.animating = !0),
                  i.onTranslateToWrapperTransitionEnd ||
                    (i.onTranslateToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        i.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        (i.onTranslateToWrapperTransitionEnd = null),
                        delete i.onTranslateToWrapperTransitionEnd,
                        n && i.emit("transitionEnd"));
                    }),
                  i.$wrapperEl[0].addEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    i.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Ce(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          a = e.step,
          i = t.activeIndex,
          o = t.previousIndex,
          l = r;
        if (
          (l || (l = i > o ? "next" : i < o ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && i !== o)
        ) {
          if ("reset" === l)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === l
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var Te = {
        slideTo: function (e, t, n, r, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = i;
          }
          var o = this,
            l = e;
          l < 0 && (l = 0);
          var s = o.params,
            u = o.snapGrid,
            d = o.slidesGrid,
            f = o.previousIndex,
            p = o.activeIndex,
            h = o.rtlTranslate,
            v = o.wrapperEl,
            m = o.enabled;
          if (
            (o.animating && s.preventInteractionOnTransition) ||
            (!m && !r && !a)
          )
            return !1;
          var g = Math.min(o.params.slidesPerGroupSkip, l),
            y = g + Math.floor((l - g) / o.params.slidesPerGroup);
          y >= u.length && (y = u.length - 1),
            (p || s.initialSlide || 0) === (f || 0) &&
              n &&
              o.emit("beforeSlideChangeStart");
          var b,
            w = -u[y];
          if ((o.updateProgress(w), s.normalizeSlideIndex))
            for (var S = 0; S < d.length; S += 1) {
              var x = -Math.floor(100 * w),
                E = Math.floor(100 * d[S]),
                k = Math.floor(100 * d[S + 1]);
              "undefined" !== typeof d[S + 1]
                ? x >= E && x < k - (k - E) / 2
                  ? (l = S)
                  : x >= E && x < k && (l = S + 1)
                : x >= E && (l = S);
            }
          if (o.initialized && l !== p) {
            if (!o.allowSlideNext && w < o.translate && w < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              w > o.translate &&
              w > o.maxTranslate() &&
              (p || 0) !== l
            )
              return !1;
          }
          if (
            ((b = l > p ? "next" : l < p ? "prev" : "reset"),
            (h && -w === o.translate) || (!h && w === o.translate))
          )
            return (
              o.updateActiveIndex(l),
              s.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== s.effect && o.setTranslate(w),
              "reset" !== b && (o.transitionStart(n, b), o.transitionEnd(n, b)),
              !1
            );
          if (s.cssMode) {
            var C = o.isHorizontal(),
              T = h ? w : -w;
            if (0 === t) {
              var _ = o.virtual && o.params.virtual.enabled;
              _ &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                (o._immediateVirtual = !0)),
                (v[C ? "scrollLeft" : "scrollTop"] = T),
                _ &&
                  requestAnimationFrame(function () {
                    (o.wrapperEl.style.scrollSnapType = ""),
                      (o._swiperImmediateVirtual = !1);
                  });
            } else {
              var P;
              if (!o.support.smoothScroll)
                return (
                  ye({
                    swiper: o,
                    targetPosition: T,
                    side: C ? "left" : "top",
                  }),
                  !0
                );
              v.scrollTo(
                (c((P = {}), C ? "left" : "top", T),
                c(P, "behavior", "smooth"),
                P)
              );
            }
            return !0;
          }
          return (
            o.setTransition(t),
            o.setTranslate(w),
            o.updateActiveIndex(l),
            o.updateSlidesClasses(),
            o.emit("beforeTransitionStart", t, r),
            o.transitionStart(n, b),
            0 === t
              ? o.transitionEnd(n, b)
              : o.animating ||
                ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(n, b));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            var a = parseInt(e, 10);
            if (!isFinite(a))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = a;
          }
          var i = this,
            o = e;
          return i.params.loop && (o += i.loopedSlides), i.slideTo(o, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.animating,
            i = r.enabled,
            o = r.params;
          if (!i) return r;
          var l = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var s = r.activeIndex < o.slidesPerGroupSkip ? 1 : l;
          if (o.loop) {
            if (a && o.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return o.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.params,
            i = r.animating,
            o = r.snapGrid,
            l = r.slidesGrid,
            s = r.rtlTranslate;
          if (!r.enabled) return r;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            d = u(s ? r.translate : -r.translate),
            f = o.map(function (e) {
              return u(e);
            }),
            p = o[f.indexOf(d) - 1];
          "undefined" === typeof p &&
            a.cssMode &&
            (o.forEach(function (e, t) {
              d >= e && (c = t);
            }),
            "undefined" !== typeof c && (p = o[c > 0 ? c - 1 : c]));
          var h = 0;
          if (
            ("undefined" !== typeof p &&
              ((h = l.indexOf(p)) < 0 && (h = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            a.rewind && r.isBeginning)
          ) {
            var v =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(v, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          var a = this,
            i = a.activeIndex,
            o = Math.min(a.params.slidesPerGroupSkip, i),
            l = o + Math.floor((i - o) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[l]) {
            var u = a.snapGrid[l];
            s - u > (a.snapGrid[l + 1] - u) * r &&
              (i += a.params.slidesPerGroup);
          } else {
            var c = a.snapGrid[l - 1];
            s - c <= (a.snapGrid[l] - c) * r && (i -= a.params.slidesPerGroup);
          }
          return (
            (i = Math.max(i, 0)),
            (i = Math.min(i, a.slidesGrid.length - 1)),
            a.slideTo(i, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            a =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            i = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              ce(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? i < t.loopedSlides - a / 2 ||
                  i > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    de(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i)
                : i > t.slides.length - a
                ? (t.loopFix(),
                  (i = r
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  de(function () {
                    t.slideTo(i);
                  }))
                : t.slideTo(i);
          } else t.slideTo(i);
        },
      };
      var _e = {
        loopCreate: function () {
          var e = this,
            t = $(),
            n = e.params,
            r = e.$wrapperEl,
            a = r.children().length > 0 ? ce(r.children()[0].parentNode) : r;
          a.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var i = a.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var o = n.slidesPerGroup - (i.length % n.slidesPerGroup);
            if (o !== n.slidesPerGroup) {
              for (var l = 0; l < o; l += 1) {
                var s = ce(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                a.append(s);
              }
              i = a.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = i.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > i.length && (e.loopedSlides = i.length);
          var u = [],
            c = [];
          i.each(function (t, n) {
            var r = ce(t);
            n < e.loopedSlides && c.push(t),
              n < i.length && n >= i.length - e.loopedSlides && u.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (var d = 0; d < c.length; d += 1)
            a.append(ce(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var f = u.length - 1; f >= 0; f -= 1)
            a.prepend(ce(u[f].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            o = e.allowSlideNext,
            l = e.snapGrid,
            s = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var u = -l[n] - e.getTranslate();
          if (n < a)
            (t = r.length - 3 * a + n),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          else if (n >= r.length - a) {
            (t = -r.length + n + a),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = o), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function Pe(e) {
        var t = this,
          n = $(),
          r = G(),
          a = t.touchEventsData,
          i = t.params,
          o = t.touches;
        if (t.enabled && (!t.animating || !i.preventInteractionOnTransition)) {
          !t.animating && i.cssMode && i.loop && t.loopFix();
          var l = e;
          l.originalEvent && (l = l.originalEvent);
          var s = ce(l.target);
          if (
            ("wrapper" !== i.touchEventsTarget ||
              s.closest(t.wrapperEl).length) &&
            ((a.isTouchEvent = "touchstart" === l.type),
            (a.isTouchEvent || !("which" in l) || 3 !== l.which) &&
              !(!a.isTouchEvent && "button" in l && l.button > 0) &&
              (!a.isTouched || !a.isMoved))
          ) {
            !!i.noSwipingClass &&
              "" !== i.noSwipingClass &&
              l.target &&
              l.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (s = ce(e.path[0]));
            var u = i.noSwipingSelector
                ? i.noSwipingSelector
                : ".".concat(i.noSwipingClass),
              c = !(!l.target || !l.target.shadowRoot);
            if (
              i.noSwiping &&
              (c
                ? (function (e, t) {
                    return (
                      void 0 === t && (t = this),
                      (function t(n) {
                        if (!n || n === $() || n === G()) return null;
                        n.assignedSlot && (n = n.assignedSlot);
                        var r = n.closest(e);
                        return r || n.getRootNode
                          ? r || t(n.getRootNode().host)
                          : null;
                      })(t)
                    );
                  })(u, s[0])
                : s.closest(u)[0])
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || s.closest(i.swipeHandler)[0]) {
              (o.currentX =
                "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
                (o.currentY =
                  "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
              var d = o.currentX,
                f = o.currentY,
                p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (p && (d <= h || d >= r.innerWidth - h)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (Object.assign(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (o.startX = d),
                (o.startY = f),
                (a.touchStartTime = fe()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                i.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== l.type)
              ) {
                var v = !0;
                s.is(a.focusableElements) &&
                  ((v = !1), "SELECT" === s[0].nodeName && (a.isTouched = !1)),
                  n.activeElement &&
                    ce(n.activeElement).is(a.focusableElements) &&
                    n.activeElement !== s[0] &&
                    n.activeElement.blur();
                var m = v && t.allowTouchMove && i.touchStartPreventDefault;
                (!i.touchStartForcePreventDefault && !m) ||
                  s[0].isContentEditable ||
                  l.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !i.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", l);
            }
          }
        }
      }
      function Oe(e) {
        var t = $(),
          n = this,
          r = n.touchEventsData,
          a = n.params,
          i = n.touches,
          o = n.rtlTranslate;
        if (n.enabled) {
          var l = e;
          if ((l.originalEvent && (l = l.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === l.type) {
              var s =
                  "touchmove" === l.type &&
                  l.targetTouches &&
                  (l.targetTouches[0] || l.changedTouches[0]),
                u = "touchmove" === l.type ? s.pageX : l.pageX,
                c = "touchmove" === l.type ? s.pageY : l.pageY;
              if (l.preventedByNestedSwiper)
                return (i.startX = u), void (i.startY = c);
              if (!n.allowTouchMove)
                return (
                  ce(l.target).is(r.focusableElements) || (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(i, {
                      startX: u,
                      startY: c,
                      currentX: u,
                      currentY: c,
                    }),
                    (r.touchStartTime = fe()))
                  )
                );
              if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (n.isVertical()) {
                  if (
                    (c < i.startY && n.translate <= n.maxTranslate()) ||
                    (c > i.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (u < i.startX && n.translate <= n.maxTranslate()) ||
                  (u > i.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                l.target === t.activeElement &&
                ce(l.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", l),
                !(l.targetTouches && l.targetTouches.length > 1))
              ) {
                (i.currentX = u), (i.currentY = c);
                var d = i.currentX - i.startX,
                  f = i.currentY - i.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                      n.params.threshold
                  )
                ) {
                  var p;
                  if ("undefined" === typeof r.isScrolling)
                    (n.isHorizontal() && i.currentY === i.startY) ||
                    (n.isVertical() && i.currentX === i.startX)
                      ? (r.isScrolling = !1)
                      : d * d + f * f >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                          Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? p > a.touchAngle
                          : 90 - p > a.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", l),
                    "undefined" === typeof r.startMoving &&
                      ((i.currentX === i.startX && i.currentY === i.startY) ||
                        (r.startMoving = !0)),
                    r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !a.cssMode && l.cancelable && l.preventDefault(),
                      a.touchMoveStopPropagation &&
                        !a.nested &&
                        l.stopPropagation(),
                      r.isMoved ||
                        (a.loop && !a.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (r.allowMomentumBounce = !1),
                        !a.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", l)),
                      n.emit("sliderMove", l),
                      (r.isMoved = !0);
                    var h = n.isHorizontal() ? d : f;
                    (i.diff = h),
                      (h *= a.touchRatio),
                      o && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (r.currentTranslate = h + r.startTranslate);
                    var v = !0,
                      m = a.resistanceRatio;
                    if (
                      (a.touchReleaseOnEdges && (m = 0),
                      h > 0 && r.currentTranslate > n.minTranslate()
                        ? ((v = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + h,
                                m
                              )))
                        : h < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((v = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - h,
                                m
                              ))),
                      v && (l.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                      a.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (i.startX = i.currentX),
                          (i.startY = i.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (i.diff = n.isHorizontal()
                            ? i.currentX - i.startX
                            : i.currentY - i.startY)
                        );
                    }
                    a.followFinger &&
                      !a.cssMode &&
                      (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
                        a.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        a.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(r.currentTranslate),
                      n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
        }
      }
      function Ne(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          a = t.touches,
          i = t.rtlTranslate,
          o = t.slidesGrid;
        if (t.enabled) {
          var l = e;
          if (
            (l.originalEvent && (l = l.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", l),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var s,
            u = fe(),
            c = u - n.touchStartTime;
          if (t.allowClick) {
            var d = l.path || (l.composedPath && l.composedPath());
            t.updateClickedSlide((d && d[0]) || l.target),
              t.emit("tap click", l),
              c < 300 &&
                u - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", l);
          }
          if (
            ((n.lastClickTime = fe()),
            de(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (s = r.followFinger
              ? i
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: s });
            else {
              for (
                var f = 0, p = t.slidesSizesGrid[0], h = 0;
                h < o.length;
                h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var v = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                "undefined" !== typeof o[h + v]
                  ? s >= o[h] &&
                    s < o[h + v] &&
                    ((f = h), (p = o[h + v] - o[h]))
                  : s >= o[h] &&
                    ((f = h), (p = o[o.length - 1] - o[o.length - 2]));
              }
              var m = null,
                g = null;
              r.rewind &&
                (t.isBeginning
                  ? (g =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                  : t.isEnd && (m = 0));
              var y = (s - o[f]) / p,
                b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (y >= r.longSwipesRatio
                    ? t.slideTo(r.rewind && t.isEnd ? m : f + b)
                    : t.slideTo(f)),
                  "prev" === t.swipeDirection &&
                    (y > 1 - r.longSwipesRatio
                      ? t.slideTo(f + b)
                      : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(f));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (l.target === t.navigation.nextEl ||
                  l.target === t.navigation.prevEl)
                  ? l.target === t.navigation.nextEl
                    ? t.slideTo(f + b)
                    : t.slideTo(f)
                  : ("next" === t.swipeDirection &&
                      t.slideTo(null !== m ? m : f + b),
                    "prev" === t.swipeDirection &&
                      t.slideTo(null !== g ? g : f));
              }
            }
        }
      }
      function Le() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            a = e.allowSlidePrev,
            i = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = r),
            e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
        }
      }
      function je(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function ze() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var Me = !1;
      function De() {}
      var Re = function (e, t) {
        var n = $(),
          r = e.params,
          a = e.touchEvents,
          i = e.el,
          o = e.wrapperEl,
          l = e.device,
          s = e.support,
          u = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (s.touch) {
          var f = !(
            "touchstart" !== a.start ||
            !s.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          i[c](a.start, e.onTouchStart, f),
            i[c](
              a.move,
              e.onTouchMove,
              s.passiveListener ? { passive: !1, capture: u } : u
            ),
            i[c](a.end, e.onTouchEnd, f),
            a.cancel && i[c](a.cancel, e.onTouchEnd, f);
        } else
          i[c](a.start, e.onTouchStart, !1),
            n[c](a.move, e.onTouchMove, u),
            n[c](a.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          i[c]("click", e.onClick, !0),
          r.cssMode && o[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Le,
                !0
              )
            : e[d]("observerUpdate", Le, !0);
      };
      var Ae = {
          attachEvents: function () {
            var e = this,
              t = $(),
              n = e.params,
              r = e.support;
            (e.onTouchStart = Pe.bind(e)),
              (e.onTouchMove = Oe.bind(e)),
              (e.onTouchEnd = Ne.bind(e)),
              n.cssMode && (e.onScroll = ze.bind(e)),
              (e.onClick = je.bind(e)),
              r.touch &&
                !Me &&
                (t.addEventListener("touchstart", De), (Me = !0)),
              Re(e, "on");
          },
          detachEvents: function () {
            Re(this, "off");
          },
        },
        Ie = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var Fe = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            a = void 0 === r ? 0 : r,
            i = e.params,
            o = e.$el,
            l = i.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (s && e.currentBreakpoint !== s) {
              var u = (s in l ? l[s] : void 0) || e.originalParams,
                c = Ie(e, i),
                d = Ie(e, u),
                f = i.enabled;
              c && !d
                ? (o.removeClass(
                    ""
                      .concat(i.containerModifierClass, "grid ")
                      .concat(i.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  d &&
                  (o.addClass("".concat(i.containerModifierClass, "grid")),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === i.grid.fill)) &&
                    o.addClass(
                      "".concat(i.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach(function (t) {
                  var n = i[t] && i[t].enabled,
                    r = u[t] && u[t].enabled;
                  n && !r && e[t].disable(), !n && r && e[t].enable();
                });
              var p = u.direction && u.direction !== i.direction,
                h = i.loop && (u.slidesPerView !== i.slidesPerView || p);
              p && n && e.changeDirection(), me(e.params, u);
              var v = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !v ? e.disable() : !f && v && e.enable(),
                (e.currentBreakpoint = s),
                e.emit("_beforeBreakpoint", u),
                h &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
            var r = !1,
              a = G(),
              i = "window" === t ? a.innerHeight : n.clientHeight,
              o = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: i * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var l = 0; l < o.length; l += 1) {
              var s = o[l],
                u = s.point,
                c = s.value;
              "window" === t
                ? a.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (r = u)
                : c <= n.clientWidth && (r = u);
            }
            return r || "max";
          }
        },
      };
      var Be = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            r = e.rtl,
            a = e.$el,
            i = e.device,
            o = e.support,
            l = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (r) {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, A(l)),
            a.addClass(A(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var Ue = {
        loadImage: function (e, t, n, r, a, i) {
          var o,
            l = G();
          function s() {
            i && i();
          }
          ce(e).parent("picture")[0] || (e.complete && a)
            ? s()
            : t
            ? (((o = new l.Image()).onload = s),
              (o.onerror = s),
              r && (o.sizes = r),
              n && (o.srcset = n),
              t && (o.src = t))
            : s();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            "undefined" !== typeof e &&
              null !== e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var r = e.imagesToLoad[n];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute("src"),
              r.srcset || r.getAttribute("srcset"),
              r.sizes || r.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      };
      var Ve = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function He(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          var r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in a
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  me(t, n))
                : me(t, n))
            : me(t, n);
        };
      }
      var $e = {
          eventsEmitter: xe,
          update: Ee,
          translate: ke,
          transition: {
            setTransition: function (e, t) {
              var n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                Ce({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  Ce({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Te,
          loop: _e,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Ae,
          breakpoints: Fe,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                r = n.slidesOffsetBefore;
              if (r) {
                var a = e.slides.length - 1,
                  i = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: Be,
          images: Ue,
        },
        We = {},
        Ge = (function () {
          function e() {
            var t, n;
            I(this, e);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            if (
              (1 === a.length &&
              a[0].constructor &&
              "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
                ? (n = a[0])
                : ((t = a[0]), (n = a[1])),
              n || (n = {}),
              (n = me({}, n)),
              t && !n.el && (n.el = t),
              n.el && ce(n.el).length > 1)
            ) {
              var o = [];
              return (
                ce(n.el).each(function (t) {
                  var r = me({}, n, { el: t });
                  o.push(new e(r));
                }),
                o
              );
            }
            var l,
              s = this;
            ((s.__swiper__ = !0),
            (s.support = be()),
            (s.device = we({ userAgent: n.userAgent })),
            (s.browser = Se()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = A(s.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (l = s.modules).push.apply(l, A(n.modules));
            var u = {};
            s.modules.forEach(function (e) {
              e({
                swiper: s,
                extendParams: He(n, u),
                on: s.on.bind(s),
                once: s.once.bind(s),
                off: s.off.bind(s),
                emit: s.emit.bind(s),
              });
            });
            var c = me({}, Ve, u);
            return (
              (s.params = me({}, c, We, n)),
              (s.originalParams = me({}, s.params)),
              (s.passedParams = me({}, n)),
              s.params &&
                s.params.on &&
                Object.keys(s.params.on).forEach(function (e) {
                  s.on(e, s.params.on[e]);
                }),
              s.params && s.params.onAny && s.onAny(s.params.onAny),
              (s.$ = ce),
              Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: ce(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === s.params.direction;
                },
                isVertical: function () {
                  return "vertical" === s.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (s.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (s.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    s.support.touch || !s.params.simulateTouch
                      ? s.touchEventsTouch
                      : s.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: s.params.focusableElements,
                  lastClickTime: fe(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.emit("_swiper"),
              s.params.init && s.init(),
              s
            );
          }
          return (
            B(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      a = (n.maxTranslate() - r) * e + r;
                    n.translateTo(a, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return t.destroyed
                      ? ""
                      : e.className
                          .split(" ")
                          .filter(function (e) {
                            return (
                              0 === e.indexOf("swiper-slide") ||
                              0 === e.indexOf(t.params.slideClass)
                            );
                          })
                          .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function (e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var n = this,
                      r = n.params,
                      a = n.slides,
                      i = n.slidesGrid,
                      o = n.slidesSizesGrid,
                      l = n.size,
                      s = n.activeIndex,
                      u = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, d = a[s].swiperSlideSize, f = s + 1;
                        f < a.length;
                        f += 1
                      )
                        a[f] &&
                          !c &&
                          ((u += 1),
                          (d += a[f].swiperSlideSize) > l && (c = !0));
                      for (var p = s - 1; p >= 0; p -= 1)
                        a[p] &&
                          !c &&
                          ((u += 1),
                          (d += a[p].swiperSlideSize) > l && (c = !0));
                    } else if ("current" === e)
                      for (var h = s + 1; h < a.length; h += 1) {
                        (t ? i[h] + o[h] - i[s] < l : i[h] - i[s] < l) &&
                          (u += 1);
                      }
                    else
                      for (var v = s - 1; v >= 0; v -= 1) {
                        i[s] - i[v] < l && (u += 1);
                      }
                    return u;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(r)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "changeLanguageDirection",
                  value: function (e) {
                    var t = this;
                    (t.rtl && "rtl" === e) ||
                      (!t.rtl && "ltr" === e) ||
                      ((t.rtl = "rtl" === e),
                      (t.rtlTranslate =
                        "horizontal" === t.params.direction && t.rtl),
                      t.rtl
                        ? (t.$el.addClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "rtl"))
                        : (t.$el.removeClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "ltr")),
                      t.update());
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = ce(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      a = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = ce(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children
                          ? n.children(r())
                          : ce(n).children(r());
                      })();
                    if (0 === a.length && t.params.createElements) {
                      var i = $().createElement("div");
                      (a = ce(i)),
                        (i.className = t.params.wrapperClass),
                        n.append(i),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            a.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: a,
                        wrapperEl: a[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === a.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                      r = n.params,
                      a = n.$el,
                      i = n.$wrapperEl,
                      o = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          a.removeAttr("style"),
                          i.removeAttr("style"),
                          o &&
                            o.length &&
                            o
                              .removeClass(
                                [
                                  r.slideVisibleClass,
                                  r.slideActiveClass,
                                  r.slideNextClass,
                                  r.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e &&
                          ((n.$el[0].swiper = null),
                          (function (e) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              try {
                                t[e] = null;
                              } catch (n) {}
                              try {
                                delete t[e];
                              } catch (n) {}
                            });
                          })(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    me(We, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return We;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return Ve;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys($e).forEach(function (e) {
        Object.keys($e[e]).forEach(function (t) {
          Ge.prototype[t] = $e[e][t];
        });
      }),
        Ge.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              a = G(),
              i = null,
              o = null,
              l = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              s = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((i = new ResizeObserver(function (e) {
                    o = a.requestAnimationFrame(function () {
                      var n = t.width,
                        r = t.height,
                        a = n,
                        i = r;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          r = e.contentRect,
                          o = e.target;
                        (o && o !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (i = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && i === r) || l();
                    });
                  })),
                  i.observe(t.el))
                : (a.addEventListener("resize", l),
                  a.addEventListener("orientationchange", s));
            }),
              n("destroy", function () {
                o && a.cancelAnimationFrame(o),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener("resize", l),
                  a.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              a = e.emit,
              i = [],
              o = G(),
              l = function (e, t) {
                void 0 === t && (t = {});
                var n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        a("observerUpdate", e[0]);
                      };
                      o.requestAnimationFrame
                        ? o.requestAnimationFrame(t)
                        : o.setTimeout(t, 0);
                    } else a("observerUpdate", e[0]);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  i.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      l(e[n]);
                  l(t.$el[0], { childList: t.params.observeSlideChildren }),
                    l(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                i.forEach(function (e) {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      var qe = Ge;
      function Qe(e) {
        var t = e.swiper,
          n = e.extendParams,
          r = e.on,
          a = e.emit;
        function i(e) {
          var n;
          return (
            e &&
              ((n = ce(e)),
              t.params.uniqueNavElements &&
                "string" === typeof e &&
                n.length > 1 &&
                1 === t.$el.find(e).length &&
                (n = t.$el.find(e))),
            n
          );
        }
        function o(e, n) {
          var r = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](r.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](r.lockClass));
        }
        function l() {
          if (!t.params.loop) {
            var e = t.navigation,
              n = e.$nextEl;
            o(e.$prevEl, t.isBeginning && !t.params.rewind),
              o(n, t.isEnd && !t.params.rewind);
          }
        }
        function s(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a("navigationPrev"));
        }
        function u(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a("navigationNext"));
        }
        function c() {
          var e = t.params.navigation;
          if (
            ((t.params.navigation = (function (e, t, n, r) {
              var a = $();
              return (
                e.params.createElements &&
                  Object.keys(r).forEach(function (i) {
                    if (!n[i] && !0 === n.auto) {
                      var o = e.$el.children(".".concat(r[i]))[0];
                      o ||
                        (((o = a.createElement("div")).className = r[i]),
                        e.$el.append(o)),
                        (n[i] = o),
                        (t[i] = o);
                    }
                  }),
                n
              );
            })(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev",
            })),
            e.nextEl || e.prevEl)
          ) {
            var n = i(e.nextEl),
              r = i(e.prevEl);
            n && n.length > 0 && n.on("click", u),
              r && r.length > 0 && r.on("click", s),
              Object.assign(t.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: r,
                prevEl: r && r[0],
              }),
              t.enabled ||
                (n && n.addClass(e.lockClass), r && r.addClass(e.lockClass));
          }
        }
        function d() {
          var e = t.navigation,
            n = e.$nextEl,
            r = e.$prevEl;
          n &&
            n.length &&
            (n.off("click", u),
            n.removeClass(t.params.navigation.disabledClass)),
            r &&
              r.length &&
              (r.off("click", s),
              r.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          r("init", function () {
            !1 === t.params.navigation.enabled ? f() : (c(), l());
          }),
          r("toEdge fromEdge lock unlock", function () {
            l();
          }),
          r("destroy", function () {
            d();
          }),
          r("enable disable", function () {
            var e = t.navigation,
              n = e.$nextEl,
              r = e.$prevEl;
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              r &&
                r[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          r("click", function (e, n) {
            var r = t.navigation,
              i = r.$nextEl,
              o = r.$prevEl,
              l = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !ce(l).is(o) &&
              !ce(l).is(i)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === l || t.pagination.el.contains(l))
              )
                return;
              var s;
              i
                ? (s = i.hasClass(t.params.navigation.hiddenClass))
                : o && (s = o.hasClass(t.params.navigation.hiddenClass)),
                a(!0 === s ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                o && o.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        var f = function () {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), d();
        };
        Object.assign(t.navigation, {
          enable: function () {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              c(),
              l();
          },
          disable: f,
          update: l,
          init: c,
          destroy: d,
        });
      }
      function Ye(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Xe(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : Ye(t[n]) && Ye(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : Xe(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function Ke(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function Je(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function Ze(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function et(e) {
        void 0 === e && (e = "");
        var t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var tt = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function nt(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = qe.prototype.getBreakpoint(t.breakpoints),
            a = r in t.breakpoints ? t.breakpoints[r] : void 0;
          a && a.slidesPerView && (n = a.slidesPerView);
        }
        var i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (i += t.loopAdditionalSlides) > e.length && (i = e.length), i;
      }
      function rt(t) {
        var n = [];
        return (
          e.Children.toArray(t).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? n.push(e)
              : e.props &&
                e.props.children &&
                rt(e.props.children).forEach(function (e) {
                  return n.push(e);
                });
          }),
          n
        );
      }
      function at(t) {
        var n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          e.Children.toArray(t).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var t = rt(e.props.children);
              t.length > 0
                ? t.forEach(function (e) {
                    return n.push(e);
                  })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function it(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.swiper,
          l = e.slides,
          s = e.passedParams,
          u = e.changedParams,
          c = e.nextEl,
          d = e.prevEl,
          f = e.scrollbarEl,
          p = e.paginationEl,
          h = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          v = o.params,
          m = o.pagination,
          g = o.navigation,
          y = o.scrollbar,
          b = o.virtual,
          w = o.thumbs;
        u.includes("thumbs") &&
          s.thumbs &&
          s.thumbs.swiper &&
          v.thumbs &&
          !v.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            s.controller &&
            s.controller.control &&
            v.controller &&
            !v.controller.control &&
            (n = !0),
          u.includes("pagination") &&
            s.pagination &&
            (s.pagination.el || p) &&
            (v.pagination || !1 === v.pagination) &&
            m &&
            !m.el &&
            (r = !0),
          u.includes("scrollbar") &&
            s.scrollbar &&
            (s.scrollbar.el || f) &&
            (v.scrollbar || !1 === v.scrollbar) &&
            y &&
            !y.el &&
            (a = !0),
          u.includes("navigation") &&
            s.navigation &&
            (s.navigation.prevEl || d) &&
            (s.navigation.nextEl || c) &&
            (v.navigation || !1 === v.navigation) &&
            g &&
            !g.prevEl &&
            !g.nextEl &&
            (i = !0);
        (h.forEach(function (e) {
          if (Ye(v[e]) && Ye(s[e])) Xe(v[e], s[e]);
          else {
            var t = s[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (v[e] = s[e])
              : !1 === t &&
                o[(n = e)] &&
                (o[n].destroy(),
                "navigation" === n
                  ? ((v[n].prevEl = void 0),
                    (v[n].nextEl = void 0),
                    (o[n].prevEl = void 0),
                    (o[n].nextEl = void 0))
                  : ((v[n].el = void 0), (o[n].el = void 0)));
          }
          var n;
        }),
        h.includes("controller") &&
          !n &&
          o.controller &&
          o.controller.control &&
          v.controller &&
          v.controller.control &&
          (o.controller.control = v.controller.control),
        u.includes("children") && b && v.virtual.enabled
          ? ((b.slides = l), b.update(!0))
          : u.includes("children") &&
            o.lazy &&
            o.params.lazy.enabled &&
            o.lazy.load(),
        t) &&
          w.init() &&
          w.update(!0);
        n && (o.controller.control = v.controller.control),
          r && (p && (v.pagination.el = p), m.init(), m.render(), m.update()),
          a &&
            (f && (v.scrollbar.el = f),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          i &&
            (c && (v.navigation.nextEl = c),
            d && (v.navigation.prevEl = d),
            g.init(),
            g.update()),
          u.includes("allowSlideNext") && (o.allowSlideNext = s.allowSlideNext),
          u.includes("allowSlidePrev") && (o.allowSlidePrev = s.allowSlidePrev),
          u.includes("direction") && o.changeDirection(s.direction, !1),
          o.update();
      }
      function ot(t, n) {
        return "undefined" === typeof window
          ? (0, e.useEffect)(t, n)
          : (0, e.useLayoutEffect)(t, n);
      }
      var lt = (0, e.createContext)(null),
        st = (0, e.createContext)(null),
        ut = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function ct() {
        return (
          (ct = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ct.apply(this, arguments)
        );
      }
      var dt = (0, e.forwardRef)(function (t, n) {
        var r = void 0 === t ? {} : t,
          a = r.className,
          i = r.tag,
          o = void 0 === i ? "div" : i,
          l = r.wrapperTag,
          s = void 0 === l ? "div" : l,
          d = r.children,
          f = r.onSwiper,
          p = R(r, ut),
          h = !1,
          v = u((0, e.useState)("swiper"), 2),
          m = v[0],
          g = v[1],
          y = u((0, e.useState)(null), 2),
          b = y[0],
          w = y[1],
          S = u((0, e.useState)(!1), 2),
          x = S[0],
          E = S[1],
          k = (0, e.useRef)(!1),
          C = (0, e.useRef)(null),
          T = (0, e.useRef)(null),
          _ = (0, e.useRef)(null),
          P = (0, e.useRef)(null),
          O = (0, e.useRef)(null),
          N = (0, e.useRef)(null),
          L = (0, e.useRef)(null),
          j = (0, e.useRef)(null),
          z = (function (e) {
            void 0 === e && (e = {});
            var t = { on: {} },
              n = {},
              r = {};
            Xe(t, qe.defaults),
              Xe(t, qe.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            var a = {},
              i = tt.map(function (e) {
                return e.replace(/_/, "");
              });
            return (
              Object.keys(e).forEach(function (o) {
                i.indexOf(o) >= 0
                  ? Ye(e[o])
                    ? ((t[o] = {}), (r[o] = {}), Xe(t[o], e[o]), Xe(r[o], e[o]))
                    : ((t[o] = e[o]), (r[o] = e[o]))
                  : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o]
                  ? (n["".concat(o[2].toLowerCase()).concat(o.substr(3))] =
                      e[o])
                  : (a[o] = e[o]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: r, rest: a, events: n }
            );
          })(p),
          M = z.params,
          D = z.passedParams,
          I = z.rest,
          F = z.events,
          B = at(d),
          U = B.slides,
          V = B.slots,
          H = function () {
            E(!x);
          };
        Object.assign(M.on, {
          _containerClasses: function (e, t) {
            g(t);
          },
        });
        var $ = function () {
          if (
            (Object.assign(M.on, F),
            (h = !0),
            (T.current = new qe(M)),
            (T.current.loopCreate = function () {}),
            (T.current.loopDestroy = function () {}),
            M.loop && (T.current.loopedSlides = nt(U, M)),
            T.current.virtual && T.current.params.virtual.enabled)
          ) {
            T.current.virtual.slides = U;
            var e = {
              cache: !1,
              slides: U,
              renderExternal: w,
              renderExternalUpdate: !1,
            };
            Xe(T.current.params.virtual, e),
              Xe(T.current.originalParams.virtual, e);
          }
        };
        C.current || $(), T.current && T.current.on("_beforeBreakpoint", H);
        return (
          (0, e.useEffect)(function () {
            return function () {
              T.current && T.current.off("_beforeBreakpoint", H);
            };
          }),
          (0, e.useEffect)(function () {
            !k.current &&
              T.current &&
              (T.current.emitSlidesClasses(), (k.current = !0));
          }),
          ot(function () {
            if ((n && (n.current = C.current), C.current))
              return (
                T.current.destroyed && $(),
                (function (e, t) {
                  var n = e.el,
                    r = e.nextEl,
                    a = e.prevEl,
                    i = e.paginationEl,
                    o = e.scrollbarEl,
                    l = e.swiper;
                  Ke(t) &&
                    r &&
                    a &&
                    ((l.params.navigation.nextEl = r),
                    (l.originalParams.navigation.nextEl = r),
                    (l.params.navigation.prevEl = a),
                    (l.originalParams.navigation.prevEl = a)),
                    Je(t) &&
                      i &&
                      ((l.params.pagination.el = i),
                      (l.originalParams.pagination.el = i)),
                    Ze(t) &&
                      o &&
                      ((l.params.scrollbar.el = o),
                      (l.originalParams.scrollbar.el = o)),
                    l.init(n);
                })(
                  {
                    el: C.current,
                    nextEl: O.current,
                    prevEl: N.current,
                    paginationEl: L.current,
                    scrollbarEl: j.current,
                    swiper: T.current,
                  },
                  M
                ),
                f && f(T.current),
                function () {
                  T.current &&
                    !T.current.destroyed &&
                    T.current.destroy(!0, !1);
                }
              );
          }, []),
          ot(function () {
            !h &&
              F &&
              T.current &&
              Object.keys(F).forEach(function (e) {
                T.current.on(e, F[e]);
              });
            var e = (function (e, t, n, r) {
              var a = [];
              if (!t) return a;
              var i = function (e) {
                  a.indexOf(e) < 0 && a.push(e);
                },
                o = r.map(function (e) {
                  return e.key;
                }),
                l = n.map(function (e) {
                  return e.key;
                });
              return (
                o.join("") !== l.join("") && i("children"),
                r.length !== n.length && i("children"),
                tt
                  .filter(function (e) {
                    return "_" === e[0];
                  })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (Ye(e[n]) && Ye(t[n])) {
                        var r = Object.keys(e[n]),
                          a = Object.keys(t[n]);
                        r.length !== a.length
                          ? i(n)
                          : (r.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }),
                            a.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }));
                      } else e[n] !== t[n] && i(n);
                  }),
                a
              );
            })(D, _.current, U, P.current);
            return (
              (_.current = D),
              (P.current = U),
              e.length &&
                T.current &&
                !T.current.destroyed &&
                it({
                  swiper: T.current,
                  slides: U,
                  passedParams: D,
                  changedParams: e,
                  nextEl: O.current,
                  prevEl: N.current,
                  scrollbarEl: j.current,
                  paginationEl: L.current,
                }),
              function () {
                F &&
                  T.current &&
                  Object.keys(F).forEach(function (e) {
                    T.current.off(e, F[e]);
                  });
              }
            );
          }),
          ot(
            function () {
              var e;
              !(e = T.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [b]
          ),
          e.createElement(
            o,
            ct(
              {
                ref: C,
                className: et("".concat(m).concat(a ? " ".concat(a) : "")),
              },
              I
            ),
            e.createElement(
              st.Provider,
              { value: T.current },
              V["container-start"],
              e.createElement(
                s,
                { className: "swiper-wrapper" },
                V["wrapper-start"],
                M.virtual
                  ? (function (t, n, r) {
                      if (!r) return null;
                      var a = t.isHorizontal()
                        ? c(
                            {},
                            t.rtlTranslate ? "right" : "left",
                            "".concat(r.offset, "px")
                          )
                        : { top: "".concat(r.offset, "px") };
                      return n
                        .filter(function (e, t) {
                          return t >= r.from && t <= r.to;
                        })
                        .map(function (n) {
                          return e.cloneElement(n, { swiper: t, style: a });
                        });
                    })(T.current, U, b)
                  : !M.loop || (T.current && T.current.destroyed)
                  ? U.map(function (t) {
                      return e.cloneElement(t, { swiper: T.current });
                    })
                  : (function (t, n, r) {
                      var a = n.map(function (n, r) {
                        return e.cloneElement(n, {
                          swiper: t,
                          "data-swiper-slide-index": r,
                        });
                      });
                      function i(t, n, a) {
                        return e.cloneElement(t, {
                          key: ""
                            .concat(t.key, "-duplicate-")
                            .concat(n, "-")
                            .concat(a),
                          className: ""
                            .concat(t.props.className || "", " ")
                            .concat(r.slideDuplicateClass),
                        });
                      }
                      if (r.loopFillGroupWithBlank) {
                        var o =
                          r.slidesPerGroup - (a.length % r.slidesPerGroup);
                        if (o !== r.slidesPerGroup)
                          for (var l = 0; l < o; l += 1) {
                            var s = e.createElement("div", {
                              className: ""
                                .concat(r.slideClass, " ")
                                .concat(r.slideBlankClass),
                            });
                            a.push(s);
                          }
                      }
                      "auto" !== r.slidesPerView ||
                        r.loopedSlides ||
                        (r.loopedSlides = a.length);
                      var u = nt(a, r),
                        c = [],
                        d = [];
                      return (
                        a.forEach(function (e, t) {
                          t < u && d.push(i(e, t, "prepend")),
                            t < a.length &&
                              t >= a.length - u &&
                              c.push(i(e, t, "append"));
                        }),
                        t && (t.loopedSlides = u),
                        [].concat(c, A(a), d)
                      );
                    })(T.current, U, M),
                V["wrapper-end"]
              ),
              Ke(M) &&
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement("div", {
                    ref: N,
                    className: "swiper-button-prev",
                  }),
                  e.createElement("div", {
                    ref: O,
                    className: "swiper-button-next",
                  })
                ),
              Ze(M) &&
                e.createElement("div", {
                  ref: j,
                  className: "swiper-scrollbar",
                }),
              Je(M) &&
                e.createElement("div", {
                  ref: L,
                  className: "swiper-pagination",
                }),
              V["container-end"]
            )
          )
        );
      });
      dt.displayName = "Swiper";
      var ft = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function pt() {
        return (
          (pt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          pt.apply(this, arguments)
        );
      }
      var ht = (0, e.forwardRef)(function (t, n) {
        var r = void 0 === t ? {} : t,
          a = r.tag,
          i = void 0 === a ? "div" : a,
          o = r.children,
          l = r.className,
          s = void 0 === l ? "" : l,
          c = r.swiper,
          d = r.zoom,
          f = r.virtualIndex,
          p = R(r, ft),
          h = (0, e.useRef)(null),
          v = u((0, e.useState)("swiper-slide"), 2),
          m = v[0],
          g = v[1];
        function y(e, t, n) {
          t === h.current && g(n);
        }
        ot(function () {
          if ((n && (n.current = h.current), h.current && c)) {
            if (!c.destroyed)
              return (
                c.on("_slideClass", y),
                function () {
                  c && c.off("_slideClass", y);
                }
              );
            "swiper-slide" !== m && g("swiper-slide");
          }
        }),
          ot(
            function () {
              c && h.current && !c.destroyed && g(c.getSlideClasses(h.current));
            },
            [c]
          );
        var b = {
            isActive:
              m.indexOf("swiper-slide-active") >= 0 ||
              m.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              m.indexOf("swiper-slide-prev") >= 0 ||
              m.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              m.indexOf("swiper-slide-next") >= 0 ||
              m.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          w = function () {
            return "function" === typeof o ? o(b) : o;
          };
        return e.createElement(
          i,
          pt(
            {
              ref: h,
              className: et("".concat(m).concat(s ? " ".concat(s) : "")),
              "data-swiper-slide-index": f,
            },
            p
          ),
          e.createElement(
            lt.Provider,
            { value: b },
            d
              ? e.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof d ? d : void 0,
                  },
                  w()
                )
              : w()
          )
        );
      });
      ht.displayName = "SwiperSlide";
      var vt = function () {
        var t = (0, e.useContext)(v).app.weather;
        if (!t) return (0, _.jsx)(O, {});
        var n = t.hourly;
        return (0, _.jsx)("div", {
          children: (0, _.jsx)(dt, {
            spaceBetween: 20,
            navigation: !0,
            modules: [Qe],
            breakpoints: {
              0: { slidesPerView: 2 },
              700: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            },
            children: n.map(function (e, n) {
              var r = new Date(1e3 * e.dt),
                a = Intl.DateTimeFormat([], {
                  hour12: !0,
                  hour: "numeric",
                  minute: "2-digit",
                  timeZone: t.timezone,
                }),
                i = Intl.DateTimeFormat([], {
                  weekday: "long",
                  timeZone: t.timezone,
                });
              return (0,
              _.jsx)(ht, { children: (0, _.jsxs)(z, { className: "forecast-card", children: [(0, _.jsxs)("div", { className: "forecast-day", children: [i.format(r), ",", " ", (0, _.jsx)("span", { children: a.format(r) })] }), (0, _.jsx)("img", { src: "/weather_icons/".concat(e.weather[0].icon, ".png"), alt: "", width: 100 }), (0, _.jsx)("div", { className: "forecast-description", children: e.weather[0].description }), (0, _.jsxs)("div", { className: "minmax-temp", children: [(0, _.jsx)(L, { temperature: e.temp }), "\xb0"] })] }, n) }, n + Math.random().toString());
            }),
          }),
        });
      };
      var mt = function () {
        var t = (0, e.useContext)(v).app.isDark,
          n = { color: "#C6C6C6" };
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)("footer", {
            className: "footer",
            children: [
              (0, _.jsxs)("a", {
                href: "https://github.com/jkalbasri/backend--weather-app",
                target: "_blank",
                rel: "noreferrer",
                style: t ? n : null,
                children: [
                  (0, _.jsx)("i", { class: "fa-brands fa-github" }),
                  " ",
                  (0, _.jsx)("span", { children: "GitHub" }),
                ],
              }),
              (0, _.jsxs)("a", {
                href: "https://github.com/jkalbasri/backend--weather-app",
                target: "_blank",
                rel: "noreferrer",
                style: t ? n : null,
                children: [
                  (0, _.jsx)("i", { class: "fa-solid fa-code-fork" }),
                  " ",
                  (0, _.jsx)("span", { children: "Fork" }),
                ],
              }),
              (0, _.jsxs)("a", {
                href: "https://github.com/jkalbasri/backend--weather-app",
                target: "_blank",
                rel: "noreferrer",
                style: t ? n : null,
                children: [
                  (0, _.jsx)("i", { class: "fa-solid fa-star" }),
                  " ",
                  (0, _.jsx)("span", { children: "Star" }),
                ],
              }),
              (0, _.jsxs)("a", {
                href: "http://www.albasri.dk",
                target: "_blank",
                rel: "noreferrer",
                style: t ? n : null,
                children: [
                  (0, _.jsx)("i", { class: "fa-solid fa-globe" }),
                  " ",
                  (0, _.jsx)("span", { children: "AA" }),
                ],
              }),
            ],
          }),
        });
      };
      var gt = function () {
          var t = u((0, e.useReducer)(h, p), 2),
            n = t[0],
            r = t[1];
          (0, e.useEffect)(function () {
            var e = new Date().getHours();
            (e > 18 || e < 7) && r({ type: "DARK", payload: !0 });
          }, []),
            (0, e.useEffect)(function () {
              o(
                a().mark(function e() {
                  var t, n, i, o, l, s;
                  return a().wrap(function (e) {
                    while (!0)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), T();
                        case 2:
                          if (
                            ((t = e.sent),
                            (n = t.longitude),
                            (i = t.latitude),
                            !n || !i)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return (e.next = 8), x(n, i);
                        case 8:
                          (o = e.sent),
                            (l = o.name),
                            (s = o.country),
                            r({
                              type: "GEO_COORDS",
                              payload: { lon: n, lat: i },
                            }),
                            r({ type: "CITY", payload: l }),
                            r({ type: "COUNTRY", payload: s });
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            }, []),
            (0, e.useEffect)(
              function () {
                o(
                  a().mark(function e() {
                    var t, i, o, l;
                    return a().wrap(function (e) {
                      while (!0)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), w(n.city);
                          case 2:
                            (t = e.sent),
                              (i = t.lon),
                              (o = t.lat),
                              (l = t.country),
                              r({
                                type: "GEO_COORDS",
                                payload: { lon: i, lat: o },
                              }),
                              r({ type: "COUNTRY", payload: l });
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n.city]
            ),
            (0, e.useEffect)(
              function () {
                o(
                  a().mark(function e() {
                    var t, i, o, l, s;
                    return a().wrap(function (e) {
                      while (!0)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), C(n.geoCoords.lon, n.geoCoords.lat)
                            );
                          case 2:
                            (t = e.sent),
                              r({ type: "WEATHER", payload: t }),
                              (i = Intl.DateTimeFormat([], {
                                hour12: !1,
                                hour: "numeric",
                                timeZone: t.timezone,
                              })),
                              (o = parseInt(
                                i
                                  .format(new Date(1e3 * t.current.dt))
                                  .replace(/[A-Za-z]/gi, "")
                              )),
                              (l = parseInt(
                                i
                                  .format(new Date(1e3 * t.current.sunset))
                                  .replace(/[A-Za-z]/gi, "")
                              )),
                              (s = parseInt(
                                i
                                  .format(new Date(1e3 * t.current.sunrise))
                                  .replace(/[A-Za-z]/gi, "")
                              )),
                              r(
                                o > l || o < s
                                  ? { type: "DARK", payload: !0 }
                                  : { type: "DARK", payload: !1 }
                              );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [n.geoCoords.lat, n.geoCoords.lon]
            ),
            (0, e.useEffect)(
              function () {
                n.isDark
                  ? document
                      .querySelector(":root")
                      .style.setProperty("--placeholder-color", "#8f94af")
                  : document
                      .querySelector(":root")
                      .style.setProperty("--placeholder-color", "#323232");
              },
              [n.isDark]
            );
          var i = { background: "#1a1a1a", color: "#fff" };
          return (0, _.jsx)(v.Provider, {
            value: { app: n, dispatchApp: r },
            children: (0, _.jsxs)("section", {
              className: "container",
              children: [
                (0, _.jsxs)("div", {
                  className: "col-left",
                  style: n.isDark
                    ? { background: "#19202d", color: "#fff" }
                    : null,
                  children: [(0, _.jsx)(P, {}), (0, _.jsx)(j, {})],
                }),
                (0, _.jsxs)("div", {
                  className: "col-right",
                  style: n.isDark
                    ? { background: "#232b39", color: "#fff" }
                    : null,
                  children: [
                    (0, _.jsxs)("div", {
                      className: "top-header",
                      children: [
                        (0, _.jsx)("h2", {
                          className: "heading",
                          children: "Today",
                        }),
                        (0, _.jsxs)("div", {
                          className: "units",
                          children: [
                            (0, _.jsx)("span", {
                              style:
                                "C" === n.unit
                                  ? i
                                  : n.isDark
                                  ? { color: "#000" }
                                  : null,
                              onClick: function () {
                                r({ type: "UNIT", payload: "C" });
                              },
                              children: "\xb0C",
                            }),
                            (0, _.jsx)("span", {
                              onClick: function () {
                                r({ type: "UNIT", payload: "F" });
                              },
                              style:
                                "F" === n.unit
                                  ? i
                                  : n.isDark
                                  ? { color: "#000" }
                                  : null,
                              children: "\xb0F",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(vt, {}),
                    (0, _.jsx)("h2", {
                      className: "heading",
                      children: "Today's Highlights",
                    }),
                    (0, _.jsx)(D, {}),
                    (0, _.jsx)("h2", {
                      className: "heading",
                      children: "This Week",
                    }),
                    (0, _.jsx)(M, {}),
                    (0, _.jsx)(mt, {}),
                  ],
                }),
              ],
            }),
          });
        },
        yt = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), a(e), i(e), o(e);
              });
        };
      t
        .createRoot(document.getElementById("root"))
        .render((0, _.jsx)(e.StrictMode, { children: (0, _.jsx)(gt, {}) })),
        yt();
    })();
})();
