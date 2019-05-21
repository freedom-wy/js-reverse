'use strict';
/** @type {!Array} */
var _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
(function(metaWindow) {
  metaWindow[_0xb483[0]] = _0xb483[1];
})(window);
/** @type {!Array} */
var __Ox2133f = ["use strict", "$", "SparkMD5", "charCodeAt", "length", "substring", "match", "subarray", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "", "join", "reset", "hello", "5d41402abc4b2a76b9719d911017c592", "append", "prototype", "test", "appendBinary", "_buff", "_length", "substr", "end", "_state", "_finish", "destroy", "hash", "hashBinary", "ArrayBuffer", "byteLength", "_concatArrayBuffer", "set", "c9d6618dbc657b41a66eb0af952906f1", "name", "slice",
"call", "toString", "Object", "value", "Array", "Null", "Undefined", "map", "push", "sort", "forEach", "stringify", "data", "extend", "_sn", "_ts", "getTime", "&_ts=", "&_sn=", "_ts=", "ajaxPrefilter"];
(function() {
  /**
   * @param {!Object} index
   * @return {?}
   */
  function view(index) {
    /**
     * @param {!Object} it
     * @return {?}
     */
    function render(it) {
      /** @type {!Array} */
      var command_codes = [];
      var out = {};
      var j;
      for (j in it) {
        var data = {};
        /** @type {string} */
        data["name"] = j;
        var _0xe7fex3c = Object["prototype"]["toString"]["call"](it[j])["slice"](8, -1);
        if (_0xe7fex3c === "Object") {
          data["value"] = render(it[j]);
        } else {
          if (_0xe7fex3c === "Array") {
            data["value"]] = it[j]["map"](function(slackName) {
              var _0xe7fex3e = Object["prototype"]["toString"]["call"](it[j])["slice"](8, -1);
              if (_0xe7fex3e === "Null" || _0xe7fex3e === "Undefined") {
                return "";
              }
              return String(slackName);
            });
          } else {
            if (_0xe7fex3c === "Null" || _0xe7fex3c === "Undefined") {
              data["value"] = "";
            } else {
              /** @type {string} */
              data["value"] = String(it[j]);
            }
          }
        }
        command_codes["push"](data);
      }
      command_codes["sort"](function(boxA, boxB) {
        return boxA["name"] > boxB["name"] ? 1 : boxA["name"] < boxB["name"] ? -1 : 0;
      });
      command_codes["forEach"](function(line) {
        out[line["name"] = line["value"];
      });
      return out;
    }
//    函数调用
    var input = render(index);
//    return taiji[__Ox2133f[40]](JSON[__Ox2133f[60]](input) + code)[__Ox2133f[48]](2, 12);
    return window['SparkMD5']["hash"](JSON["stringify"](input) + "c9d6618dbc657b41a66eb0af952906f1")["slice"](2, 12);
  }
  __Ox2133f[0];
  var obj = window[__Ox2133f[1]];
  var taiji = window['SparkMD5'] = function() {
    __Ox2133f[0];
    /**
     * @param {number} name
     * @param {number} _
     * @return {?}
     */
    var $ = function(name, _) {
      return name + _ & 4294967295;
    };
    /**
     * @param {number} next
     * @param {number} a
     * @param {number} s
     * @param {number} v
     * @param {number} b
     * @param {number} target
     * @return {?}
     */
    var log = function(next, a, s, v, b, target) {
      a = $($(a, next), $(v, target));
      return $(a << b | a >>> 32 - b, s);
    };
    /**
     * @param {undefined} o
     * @param {number} n
     * @param {number} t
     * @param {number} a
     * @param {undefined} user
     * @param {number} token
     * @param {number} data
     * @return {?}
     */
    var callback = function(o, n, t, a, user, token, data) {
      return log(n & t | ~n & a, o, n, user, token, data);
    };
    /**
     * @param {undefined} s
     * @param {number} n
     * @param {number} t
     * @param {number} a
     * @param {undefined} user
     * @param {number} url
     * @param {number} data
     * @return {?}
     */
    var load = function(s, n, t, a, user, url, data) {
      return log(n & a | t & ~a, s, n, user, url, data);
    };
    /**
     * @param {undefined} params
     * @param {number} type
     * @param {number} index
     * @param {number} prop
     * @param {undefined} msg
     * @param {number} url
     * @param {number} data
     * @return {?}
     */
    var fn = function(params, type, index, prop, msg, url, data) {
      return log(type ^ index ^ prop, params, type, msg, url, data);
    };
    /**
     * @param {undefined} o
     * @param {number} n
     * @param {?} t
     * @param {?} a
     * @param {undefined} c
     * @param {number} data
     * @param {number} value
     * @return {?}
     */
    var print = function(o, n, t, a, c, data, value) {
      return log(t ^ (n | ~a), o, n, c, data, value);
    };
    /**
     * @param {!Array} args
     * @param {!Array} obj
     * @return {undefined}
     */
    var test = function(args, obj) {
      var name = args[0];
      var value = args[1];
      var options = args[2];
      var key = args[3];
      name = callback(name, value, options, key, obj[0], 7, -680876936);
      key = callback(key, name, value, options, obj[1], 12, -389564586);
      options = callback(options, key, name, value, obj[2], 17, 606105819);
      value = callback(value, options, key, name, obj[3], 22, -1044525330);
      name = callback(name, value, options, key, obj[4], 7, -176418897);
      key = callback(key, name, value, options, obj[5], 12, 1200080426);
      options = callback(options, key, name, value, obj[6], 17, -1473231341);
      value = callback(value, options, key, name, obj[7], 22, -45705983);
      name = callback(name, value, options, key, obj[8], 7, 1770035416);
      key = callback(key, name, value, options, obj[9], 12, -1958414417);
      options = callback(options, key, name, value, obj[10], 17, -42063);
      value = callback(value, options, key, name, obj[11], 22, -1990404162);
      name = callback(name, value, options, key, obj[12], 7, 1804603682);
      key = callback(key, name, value, options, obj[13], 12, -40341101);
      options = callback(options, key, name, value, obj[14], 17, -1502002290);
      value = callback(value, options, key, name, obj[15], 22, 1236535329);
      name = load(name, value, options, key, obj[1], 5, -165796510);
      key = load(key, name, value, options, obj[6], 9, -1069501632);
      options = load(options, key, name, value, obj[11], 14, 643717713);
      value = load(value, options, key, name, obj[0], 20, -373897302);
      name = load(name, value, options, key, obj[5], 5, -701558691);
      key = load(key, name, value, options, obj[10], 9, 38016083);
      options = load(options, key, name, value, obj[15], 14, -660478335);
      value = load(value, options, key, name, obj[4], 20, -405537848);
      name = load(name, value, options, key, obj[9], 5, 568446438);
      key = load(key, name, value, options, obj[14], 9, -1019803690);
      options = load(options, key, name, value, obj[3], 14, -187363961);
      value = load(value, options, key, name, obj[8], 20, 1163531501);
      name = load(name, value, options, key, obj[13], 5, -1444681467);
      key = load(key, name, value, options, obj[2], 9, -51403784);
      options = load(options, key, name, value, obj[7], 14, 1735328473);
      value = load(value, options, key, name, obj[12], 20, -1926607734);
      name = fn(name, value, options, key, obj[5], 4, -378558);
      key = fn(key, name, value, options, obj[8], 11, -2022574463);
      options = fn(options, key, name, value, obj[11], 16, 1839030562);
      value = fn(value, options, key, name, obj[14], 23, -35309556);
      name = fn(name, value, options, key, obj[1], 4, -1530992060);
      key = fn(key, name, value, options, obj[4], 11, 1272893353);
      options = fn(options, key, name, value, obj[7], 16, -155497632);
      value = fn(value, options, key, name, obj[10], 23, -1094730640);
      name = fn(name, value, options, key, obj[13], 4, 681279174);
      key = fn(key, name, value, options, obj[0], 11, -358537222);
      options = fn(options, key, name, value, obj[3], 16, -722521979);
      value = fn(value, options, key, name, obj[6], 23, 76029189);
      name = fn(name, value, options, key, obj[9], 4, -640364487);
      key = fn(key, name, value, options, obj[12], 11, -421815835);
      options = fn(options, key, name, value, obj[15], 16, 530742520);
      value = fn(value, options, key, name, obj[2], 23, -995338651);
      name = print(name, value, options, key, obj[0], 6, -198630844);
      key = print(key, name, value, options, obj[7], 10, 1126891415);
      options = print(options, key, name, value, obj[14], 15, -1416354905);
      value = print(value, options, key, name, obj[5], 21, -57434055);
      name = print(name, value, options, key, obj[12], 6, 1700485571);
      key = print(key, name, value, options, obj[3], 10, -1894986606);
      options = print(options, key, name, value, obj[10], 15, -1051523);
      value = print(value, options, key, name, obj[1], 21, -2054922799);
      name = print(name, value, options, key, obj[8], 6, 1873313359);
      key = print(key, name, value, options, obj[15], 10, -30611744);
      options = print(options, key, name, value, obj[6], 15, -1560198380);
      value = print(value, options, key, name, obj[13], 21, 1309151649);
      name = print(name, value, options, key, obj[4], 6, -145523070);
      key = print(key, name, value, options, obj[11], 10, -1120210379);
      options = print(options, key, name, value, obj[2], 15, 718787259);
      value = print(value, options, key, name, obj[9], 21, -343485551);
      args[0] = $(name, args[0]);
      args[1] = $(value, args[1]);
      args[2] = $(options, args[2]);
      args[3] = $(key, args[3]);
    };
    /**
     * @param {?} validator
     * @return {?}
     */
    var extend = function(validator) {
      /** @type {!Array} */
      var wavetones = [];
      var value;
      /** @type {number} */
      value = 0;
      for (; value < 64; value = value + 4) {
        wavetones[value >> 2] = validator[__Ox2133f[3]](value) + (validator[__Ox2133f[3]](value + 1) << 8) + (validator[__Ox2133f[3]](value + 2) << 16) + (validator[__Ox2133f[3]](value + 3) << 24);
      }
      return wavetones;
    };
    /**
     * @param {!Object} n
     * @return {?}
     */
    var parse = function(n) {
      /** @type {!Array} */
      var input = [];
      var i;
      /** @type {number} */
      i = 0;
      for (; i < 64; i = i + 4) {
        input[i >> 2] = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + (n[i + 3] << 24);
      }
      return input;
    };
    /**
     * @param {string} args
     * @return {?}
     */
    var get = function(args) {
      var val = args[__Ox2133f[4]];
      /** @type {!Array} */
      var item = [1732584193, -271733879, -1732584194, 271733878];
      var data;
      var condition;
      var p;
      var duration;
      var minWidth;
      var myPundit;
      /** @type {number} */
      data = 64;
      for (; data <= val; data = data + 64) {
        test(item, extend(args[__Ox2133f[5]](data - 64, data)));
      }
      args = args[__Ox2133f[5]](data - 64);
      condition = args[__Ox2133f[4]];
      /** @type {!Array} */
      p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      /** @type {number} */
      data = 0;
      for (; data < condition; data = data + 1) {
        p[data >> 2] |= args[__Ox2133f[3]](data) << (data % 4 << 3);
      }
      p[data >> 2] |= 128 << (data % 4 << 3);
      if (data > 55) {
        test(item, p);
        /** @type {number} */
        data = 0;
        for (; data < 16; data = data + 1) {
          /** @type {number} */
          p[data] = 0;
        }
      }
      /** @type {number} */
      duration = val * 8;
      duration = duration.toString(16)[__Ox2133f[6]](/(.*?)(.{0,8})$/);
      /** @type {number} */
      minWidth = parseInt(duration[2], 16);
      /** @type {number} */
      myPundit = parseInt(duration[1], 16) || 0;
      /** @type {number} */
      p[14] = minWidth;
      /** @type {number} */
      p[15] = myPundit;
      test(item, p);
      return item;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    var cb = function(data) {
      var p = data[__Ox2133f[4]];
      /** @type {!Array} */
      var cb = [1732584193, -271733879, -1732584194, 271733878];
      var pos;
      var last;
      var ret;
      var t;
      var energy;
      var document;
      /** @type {number} */
      pos = 64;
      for (; pos <= p; pos = pos + 64) {
        test(cb, parse(data[__Ox2133f[7]](pos - 64, pos)));
      }
      data = pos - 64 < p ? data[__Ox2133f[7]](pos - 64) : new Uint8Array(0);
      last = data[__Ox2133f[4]];
      /** @type {!Array} */
      ret = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      /** @type {number} */
      pos = 0;
      for (; pos < last; pos = pos + 1) {
        ret[pos >> 2] |= data[pos] << (pos % 4 << 3);
      }
      ret[pos >> 2] |= 128 << (pos % 4 << 3);
      if (pos > 55) {
        test(cb, ret);
        /** @type {number} */
        pos = 0;
        for (; pos < 16; pos = pos + 1) {
          /** @type {number} */
          ret[pos] = 0;
        }
      }
      /** @type {number} */
      t = p * 8;
      t = t.toString(16)[__Ox2133f[6]](/(.*?)(.{0,8})$/);
      /** @type {number} */
      energy = parseInt(t[2], 16);
      /** @type {number} */
      document = parseInt(t[1], 16) || 0;
      /** @type {number} */
      ret[14] = energy;
      /** @type {number} */
      ret[15] = document;
      test(cb, ret);
      return cb;
    };
    /** @type {!Array} */
    var _0xe7fexe = [__Ox2133f[8], __Ox2133f[9], __Ox2133f[10], __Ox2133f[11], __Ox2133f[12], __Ox2133f[13], __Ox2133f[14], __Ox2133f[15], __Ox2133f[16], __Ox2133f[17], __Ox2133f[18], __Ox2133f[19], __Ox2133f[20], __Ox2133f[21], __Ox2133f[22], __Ox2133f[23]];
    /**
     * @param {number} value
     * @return {?}
     */
    var expect = function(value) {
      var chain = __Ox2133f[24];
      var i;
      /** @type {number} */
      i = 0;
      for (; i < 4; i = i + 1) {
        chain = chain + (_0xe7fexe[value >> i * 8 + 4 & 15] + _0xe7fexe[value >> i * 8 & 15]);
      }
      return chain;
    };
    /**
     * @param {!Array} state
     * @return {?}
     */
    var resolve = function(state) {
      var reducerKey;
      /** @type {number} */
      reducerKey = 0;
      for (; reducerKey < state[__Ox2133f[4]]; reducerKey = reducerKey + 1) {
        state[reducerKey] = expect(state[reducerKey]);
      }
      return state[__Ox2133f[25]](__Ox2133f[24]);
    };
    /**
     * @param {string} config
     * @return {?}
     */
    var gettingStartedGateCheck = function(config) {
      return resolve(get(config));
    };
    /**
     * @return {undefined}
     */
    var _0xe7fex2 = function() {
      this[__Ox2133f[26]]();
    };
    if (gettingStartedGateCheck(__Ox2133f[27]) !== __Ox2133f[28]) {
      /**
       * @param {number} a
       * @param {number} b
       * @return {?}
       */
      $ = function(a, b) {
        /** @type {number} */
        var uch = (a & 65535) + (b & 65535);
        /** @type {number} */
        var dwch = (a >> 16) + (b >> 16) + (uch >> 16);
        return dwch << 16 | uch & 65535;
      };
    }
    /**
     * @param {string} value
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[30]][__Ox2133f[29]] = function(value) {
      if (/[\u0080-\uFFFF]/[__Ox2133f[31]](value)) {
        /** @type {string} */
        value = unescape(encodeURIComponent(value));
      }
      this[__Ox2133f[32]](value);
      return this;
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[30]][__Ox2133f[32]] = function(canCreateDiscussions) {
      this[__Ox2133f[33]] += canCreateDiscussions;
      this[__Ox2133f[34]] += canCreateDiscussions[__Ox2133f[4]];
      var _zAdjPortWidth = this[__Ox2133f[33]][__Ox2133f[4]];
      var _xpos;
      /** @type {number} */
      _xpos = 64;
      for (; _xpos <= _zAdjPortWidth; _xpos = _xpos + 64) {
        test(this._state, extend(this[__Ox2133f[33]][__Ox2133f[5]](_xpos - 64, _xpos)));
      }
      this[__Ox2133f[33]] = this[__Ox2133f[33]][__Ox2133f[35]](_xpos - 64);
      return this;
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[30]][__Ox2133f[36]] = function(canCreateDiscussions) {
      var ref = this[__Ox2133f[33]];
      var length = ref[__Ox2133f[4]];
      var value;
      /** @type {!Array} */
      var hexDigits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var _0xe7fex2c;
      /** @type {number} */
      value = 0;
      for (; value < length; value = value + 1) {
        hexDigits[value >> 2] |= ref[__Ox2133f[3]](value) << (value % 4 << 3);
      }
      this._finish(hexDigits, length);
      _0xe7fex2c = !!canCreateDiscussions ? this[__Ox2133f[37]] : resolve(this._state);
      this[__Ox2133f[26]]();
      return _0xe7fex2c;
    };
    /**
     * @param {!Array} proto
     * @param {number} s
     * @return {undefined}
     */
    _0xe7fex2[__Ox2133f[30]][__Ox2133f[38]] = function(proto, s) {
      /** @type {number} */
      var style = s;
      var expectedZIndices;
      var f;
      var val;
      proto[style >> 2] |= 128 << (style % 4 << 3);
      if (style > 55) {
        test(this._state, proto);
        /** @type {number} */
        style = 0;
        for (; style < 16; style = style + 1) {
          /** @type {number} */
          proto[style] = 0;
        }
      }
      /** @type {number} */
      expectedZIndices = this[__Ox2133f[34]] * 8;
      expectedZIndices = expectedZIndices.toString(16)[__Ox2133f[6]](/(.*?)(.{0,8})$/);
      /** @type {number} */
      f = parseInt(expectedZIndices[2], 16);
      /** @type {number} */
      val = parseInt(expectedZIndices[1], 16) || 0;
      /** @type {number} */
      proto[14] = f;
      /** @type {number} */
      proto[15] = val;
      test(this._state, proto);
    };
    /**
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[30]][__Ox2133f[26]] = function() {
      this[__Ox2133f[33]] = __Ox2133f[24];
      /** @type {number} */
      this[__Ox2133f[34]] = 0;
      /** @type {!Array} */
      this[__Ox2133f[37]] = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    /**
     * @return {undefined}
     */
    _0xe7fex2[__Ox2133f[30]][__Ox2133f[39]] = function() {
      delete this[__Ox2133f[37]];
      delete this[__Ox2133f[33]];
      delete this[__Ox2133f[34]];
    };
    /**
     * @param {string} message
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[40]] = function(message, canCreateDiscussions) {
      if (/[\u0080-\uFFFF]/[__Ox2133f[31]](message)) {
        /** @type {string} */
        message = unescape(encodeURIComponent(message));
      }
      var ret = get(message);
      return !!canCreateDiscussions ? ret : resolve(ret);
    };
    /**
     * @param {string} title
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[41]] = function(title, canCreateDiscussions) {
      var ret = get(title);
      return !!canCreateDiscussions ? ret : resolve(ret);
    };
    /**
     * @return {undefined}
     */
    _0xe7fex2[__Ox2133f[42]] = function() {
      this[__Ox2133f[26]]();
    };
    /**
     * @param {?} arr
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[30]][__Ox2133f[29]] = function(arr) {
      var buff = this._concatArrayBuffer(this._buff, arr);
      var length = buff[__Ox2133f[4]];
      var i;
      this[__Ox2133f[34]] += arr[__Ox2133f[43]];
      /** @type {number} */
      i = 64;
      for (; i <= length; i = i + 64) {
        test(this._state, parse(buff[__Ox2133f[7]](i - 64, i)));
      }
      this[__Ox2133f[33]] = i - 64 < length ? buff[__Ox2133f[7]](i - 64) : new Uint8Array(0);
      return this;
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[30]][__Ox2133f[36]] = function(canCreateDiscussions) {
      var array = this[__Ox2133f[33]];
      var length = array[__Ox2133f[4]];
      /** @type {!Array} */
      var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var i;
      var _0xe7fex2c;
      /** @type {number} */
      i = 0;
      for (; i < length; i = i + 1) {
        tail[i >> 2] |= array[i] << (i % 4 << 3);
      }
      this._finish(tail, length);
      _0xe7fex2c = !!canCreateDiscussions ? this[__Ox2133f[37]] : resolve(this._state);
      this[__Ox2133f[26]]();
      return _0xe7fex2c;
    };
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[30]][__Ox2133f[38]] = _0xe7fex2[__Ox2133f[30]][__Ox2133f[38]];
    /**
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[30]][__Ox2133f[26]] = function() {
      /** @type {!Uint8Array} */
      this[__Ox2133f[33]] = new Uint8Array(0);
      /** @type {number} */
      this[__Ox2133f[34]] = 0;
      /** @type {!Array} */
      this[__Ox2133f[37]] = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[30]][__Ox2133f[39]] = _0xe7fex2[__Ox2133f[30]][__Ox2133f[39]];
    /**
     * @param {?} row
     * @param {?} b
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[30]][__Ox2133f[44]] = function(row, b) {
      var val = row[__Ox2133f[4]];
      /** @type {!Uint8Array} */
      var c = new Uint8Array(val + b[__Ox2133f[43]]);
      c[__Ox2133f[45]](row);
      c[__Ox2133f[45]](new Uint8Array(b), val);
      return c;
    };
    /**
     * @param {?} output
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    _0xe7fex2[__Ox2133f[42]][__Ox2133f[40]] = function(output, canCreateDiscussions) {
      var ret = cb(new Uint8Array(output));
      return !!canCreateDiscussions ? ret : resolve(ret);
    };
    return _0xe7fex2;
  }();
//  var code = __Ox2133f[46];
  var code = 'c9d6618dbc657b41a66eb0af952906f1'
  obj['ajaxPrefilter'](function(boardManager, isSlidingUp) {
//boardManager是一个对象，包含data
//  obj[__Ox2133f[69]](function(boardManager, isSlidingUp) {
//    var p3 = obj[__Ox2133f[62]](true, {}, isSlidingUp[__Ox2133f[61]] || {});
//    extend方法扩展对象属性
    var p3 = obj['extend'](true, {}, isSlidingUp['data'] || {});
    //sn
//    如果存在sn,则先删除
    if (p3["_sn"]) {
      delete p3["_sn"];
    }
//    获取时间戳
    p3["_ts"] = (new Date)[__Ox2133f[65]]();
//    调用view函数,计算出vroot也就是sn值
//    var vroot = view(obj[__Ox2133f[62]](true, {}, p3));
    var vroot = view(obj["extend"](true, {}, p3));
    if ("data" in boardManager) {
//      boardManager[__Ox2133f[61]] += __Ox2133f[66] + p3[__Ox2133f[64]] + __Ox2133f[67] + vroot;
      boardManager["data"] += "&_ts=" + p3["_ts"] + "&_sn=" + vroot;
    } else {
//      boardManager[__Ox2133f[61]] = __Ox2133f[68] + p3[__Ox2133f[64]] + __Ox2133f[67] + vroot;
      boardManager["data"] = "_ts=" + p3["_ts"] + "&_sn" + vroot;
    }
  });
})();