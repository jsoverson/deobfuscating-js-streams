var a = [
  "\x69\x6e\x70\x75\x74",
  "\x74\x61\x72\x67\x65\x74",
  "\x67\x72\x65\x65\x74",
  "\x6c\x6f\x67",
  "\x48\x65\x6c\x6c\x6f\x20",
  "\x73\x65\x74\x54\x61\x72\x67\x65\x74",
  "\x77\x6f\x72\x6c\x64",
  "\x72\x65\x61\x64\x65\x72",
  "\x73\x74\x72\x69\x6e\x67",
  "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72",
  "\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d",
  "\x63\x6f\x75\x6e\x74\x65\x72",
  "\x6c\x65\x6e\x67\x74\x68",
  "\x64\x65\x62\x75",
  "\x67\x67\x65\x72",
  "\x63\x61\x6c\x6c",
  "\x61\x63\x74\x69\x6f\x6e",
  "\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74",
  "\x61\x70\x70\x6c\x79",
  "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29",
  "\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5f\x30\x78\x28\x3f\x3a\x5b\x61\x2d\x66\x30\x2d\x39\x5d\x29\x7b\x34\x2c\x36\x7d\x7c\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x5b\x61\x2d\x7a\x30\x2d\x39\x5d\x7b\x31\x2c\x34\x7d\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x29",
  "\x69\x6e\x69\x74",
  "\x74\x65\x73\x74",
  "\x63\x68\x61\x69\x6e"
];
(function(c, d) {
  var e = function(f) {
    while (--f) {
      c["push"](c["shift"]());
    }
  };
  var g = function() {
    var h = {
      data: { key: "cookie", value: "timeout" },
      setCookie: function(i, j, k, l) {
        l = l || {};
        var m = j + "=" + k;
        var n = 0x0;
        for (var n = 0x0, p = i["length"]; n < p; n++) {
          var q = i[n];
          m += ";\x20" + q;
          var r = i[q];
          i["push"](r);
          p = i["length"];
          if (r !== !![]) {
            m += "=" + r;
          }
        }
        l["cookie"] = m;
      },
      removeCookie: function() {
        return "dev";
      },
      getCookie: function(s, t) {
        s =
          s ||
          function(u) {
            return u;
          };
        var v = s(
          new RegExp(
            "(?:^|;\x20)" +
              t["replace"](/([.$?*|{}()[]\/+^])/g, "$1") +
              "=([^;]*)"
          )
        );
        var w = function(x, y) {
          x(++y);
        };
        w(e, d);
        return v ? decodeURIComponent(v[0x1]) : undefined;
      }
    };
    var z = function() {
      var A = new RegExp(
        "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}"
      );
      return A["test"](h["removeCookie"]["toString"]());
    };
    h["updateCookie"] = z;
    var B = "";
    var C = h["updateCookie"]();
    if (!C) {
      h["setCookie"](["*"], "counter", 0x1);
    } else if (C) {
      B = h["getCookie"](null, "counter");
    } else {
      h["removeCookie"]();
    }
  };
  g();
})(a, 0x1aa);
var b = function(c, d) {
  c = c - 0x0;
  var e = a[c];
  return e;
};
(function() {
  var e = (function() {
    var c = !![];
    return function(d, e) {
      var f = c
        ? function() {
            if (e) {
              var g = e["apply"](d, arguments);
              e = null;
              return g;
            }
          }
        : function() {};
      c = ![];
      return f;
    };
  })();
  var x = e(this, function() {
    var c = function() {
        return "\x64\x65\x76";
      },
      d = function() {
        return "\x77\x69\x6e\x64\x6f\x77";
      };
    var e = function() {
      var f = new RegExp(
        "\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d"
      );
      return !f["\x74\x65\x73\x74"](c["\x74\x6f\x53\x74\x72\x69\x6e\x67"]());
    };
    var g = function() {
      var h = new RegExp(
        "\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b"
      );
      return h["\x74\x65\x73\x74"](d["\x74\x6f\x53\x74\x72\x69\x6e\x67"]());
    };
    var i = function(j) {
      var k = ~-0x1 >> (0x1 + (0xff % 0x0));
      if (j["\x69\x6e\x64\x65\x78\x4f\x66"]("\x69" === k)) {
        l(j);
      }
    };
    var l = function(m) {
      var n = ~-0x4 >> (0x1 + (0xff % 0x0));
      if (m["\x69\x6e\x64\x65\x78\x4f\x66"]((!![] + "")[0x3]) !== n) {
        i(m);
      }
    };
    if (!e()) {
      if (!g()) {
        i("\x69\x6e\x64\u0435\x78\x4f\x66");
      } else {
        i("\x69\x6e\x64\x65\x78\x4f\x66");
      }
    } else {
      i("\x69\x6e\x64\u0435\x78\x4f\x66");
    }
  });
  x();
  var f = (function() {
    var g = !![];
    return function(h, i) {
      var j = g
        ? function() {
            if (i) {
              var k = i[b("0x0")](h, arguments);
              i = null;
              return k;
            }
          }
        : function() {};
      g = ![];
      return j;
    };
  })();
  (function() {
    f(this, function() {
      var l = new RegExp(b("0x1"));
      var m = new RegExp(b("0x2"), "\x69");
      var n = c(b("0x3"));
      if (!l[b("0x4")](n + b("0x5")) || !m[b("0x4")](n + b("0x6"))) {
        n("\x30");
      } else {
        c();
      }
    })();
  })();
  class o {
    constructor(p) {
      this[b("0x7")] = p;
    }
    [b("0x8")]() {
      console[b("0x9")](b("0xa") + this[b("0x7")]);
    }
    [b("0xb")](q) {
      this[b("0x7")] = q;
    }
  }
  const r = new o(b("0xc"));
  r[b("0x8")]();
  r[b("0xb")](b("0xd"));
  r[b("0x8")]();
})();
function c(s) {
  function t(u) {
    if (typeof u === b("0xe")) {
      return function(v) {}[b("0xf")](b("0x10"))[b("0x0")](b("0x11"));
    } else {
      if (("" + u / u)[b("0x12")] !== 0x1 || u % 0x14 === 0x0) {
        (function() {
          return !![];
        }
          [b("0xf")](b("0x13") + b("0x14"))
          [b("0x15")](b("0x16")));
      } else {
        (function() {
          return ![];
        }
          [b("0xf")](b("0x13") + b("0x14"))
          [b("0x0")](b("0x17")));
      }
    }
    t(++u);
  }
  try {
    if (s) {
      return t;
    } else {
      t(0x0);
    }
  } catch (w) {}
}
