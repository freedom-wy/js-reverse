function hash(_0x2d2110) {
  var _0x2ec7bd = 8;
  var _0x5c938d = 0;

  function _0x598c37(_0x2a1e60, _0x3ca9e9) {
    var _0x49b932 = (_0x2a1e60 & 65535) + (_0x3ca9e9 & 65535);

    var _0x555a9d = (_0x2a1e60 >> 16) + (_0x3ca9e9 >> 16) + (_0x49b932 >> 16);

    return _0x555a9d << 16 | _0x49b932 & 65535;
  }

  function _0x5b3053(_0xa1a1f, _0x31bd51) {
    return _0xa1a1f >>> _0x31bd51 | _0xa1a1f << 32 - _0x31bd51;
  }

  function _0x45d7f8(_0x2b6a8c, _0x46c89b) {
    return _0x2b6a8c >>> _0x46c89b;
  }

  function _0x120a7e(_0x3ce1d8, _0x335a81, _0x9fc99f) {
    return _0x3ce1d8 & _0x335a81 ^ ~_0x3ce1d8 & _0x9fc99f;
  }

  function _0xe0523b(_0x1374b9, _0x9a92d2, _0x4ed035) {
    return _0x1374b9 & _0x9a92d2 ^ _0x1374b9 & _0x4ed035 ^ _0x9a92d2 & _0x4ed035;
  }

  function _0x495e31(_0x102159) {
    return _0x5b3053(_0x102159, 2) ^ _0x5b3053(_0x102159, 13) ^ _0x5b3053(_0x102159, 22);
  }

  function _0x1a88f9(_0x2c2406) {
    return _0x5b3053(_0x2c2406, 6) ^ _0x5b3053(_0x2c2406, 11) ^ _0x5b3053(_0x2c2406, 25);
  }

  function _0x160d7e(_0x2e2bf8) {
    return _0x5b3053(_0x2e2bf8, 7) ^ _0x5b3053(_0x2e2bf8, 18) ^ _0x45d7f8(_0x2e2bf8, 3);
  }

  function _0x5e3ba6(_0x13170c) {
    return _0x5b3053(_0x13170c, 17) ^ _0x5b3053(_0x13170c, 19) ^ _0x45d7f8(_0x13170c, 10);
  }

  function _0x29813b(_0x2ec52c, _0x17e7cb) {
    var _0x960ccd = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);

    var _0x9df09b = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);

    var _0xb3bfde = new Array(64);

    var _0x3b6059, _0x18ae0e, _0x5817f8, _0x5e21a0, _0x485d46, _0x1a1c4f, _0xc5e18c, _0x80f4d, _0x5dd8e1, _0x514628;

    var _0x5c155c, _0xfeb574;

    _0x2ec52c[_0x17e7cb >> 5] |= 128 << 24 - _0x17e7cb % 32;
    _0x2ec52c[(_0x17e7cb + 64 >> 9 << 4) + 15] = _0x17e7cb;

    for (var _0x5dd8e1 = 0; _0x5dd8e1 < _0x2ec52c["length"]; _0x5dd8e1 += 16) {
      _0x3b6059 = _0x9df09b[0];
      _0x18ae0e = _0x9df09b[1];
      _0x5817f8 = _0x9df09b[2];
      _0x5e21a0 = _0x9df09b[3];
      _0x485d46 = _0x9df09b[4];
      _0x1a1c4f = _0x9df09b[5];
      _0xc5e18c = _0x9df09b[6];
      _0x80f4d = _0x9df09b[7];

      for (var _0x514628 = 0; _0x514628 < 64; _0x514628++) {
        if (_0x514628 < 16) {
          _0xb3bfde[_0x514628] = _0x2ec52c[_0x514628 + _0x5dd8e1];
        } else {
          _0xb3bfde[_0x514628] = _0x598c37(_0x598c37(_0x598c37(_0x5e3ba6(_0xb3bfde[_0x514628 - 2]), _0xb3bfde[_0x514628 - 7]), _0x160d7e(_0xb3bfde[_0x514628 - 15])), _0xb3bfde[_0x514628 - 16]);
        }

        _0x5c155c = _0x598c37(_0x598c37(_0x598c37(_0x598c37(_0x80f4d, _0x1a88f9(_0x485d46)), _0x120a7e(_0x485d46, _0x1a1c4f, _0xc5e18c)), _0x960ccd[_0x514628]), _0xb3bfde[_0x514628]);
        _0xfeb574 = _0x598c37(_0x495e31(_0x3b6059), _0xe0523b(_0x3b6059, _0x18ae0e, _0x5817f8));
        _0x80f4d = _0xc5e18c;
        _0xc5e18c = _0x1a1c4f;
        _0x1a1c4f = _0x485d46;
        _0x485d46 = _0x598c37(_0x5e21a0, _0x5c155c);
        _0x5e21a0 = _0x5817f8;
        _0x5817f8 = _0x18ae0e;
        _0x18ae0e = _0x3b6059;
        _0x3b6059 = _0x598c37(_0x5c155c, _0xfeb574);
      }

      _0x9df09b[0] = _0x598c37(_0x3b6059, _0x9df09b[0]);
      _0x9df09b[1] = _0x598c37(_0x18ae0e, _0x9df09b[1]);
      _0x9df09b[2] = _0x598c37(_0x5817f8, _0x9df09b[2]);
      _0x9df09b[3] = _0x598c37(_0x5e21a0, _0x9df09b[3]);
      _0x9df09b[4] = _0x598c37(_0x485d46, _0x9df09b[4]);
      _0x9df09b[5] = _0x598c37(_0x1a1c4f, _0x9df09b[5]);
      _0x9df09b[6] = _0x598c37(_0xc5e18c, _0x9df09b[6]);
      _0x9df09b[7] = _0x598c37(_0x80f4d, _0x9df09b[7]);
    }

    return _0x9df09b;
  }

  function _0x5ba792(_0x43a789) {
    var _0x3b7b58 = Array();

    var _0x3cba2b = 255;

    for (var _0x1b124e = 0; _0x1b124e < _0x43a789["length"] * _0x2ec7bd; _0x1b124e += _0x2ec7bd) {
      _0x3b7b58[_0x1b124e >> 5] |= (_0x43a789["charCodeAt"](_0x1b124e / _0x2ec7bd) & _0x3cba2b) << 24 - _0x1b124e % 32;
    }

    return _0x3b7b58;
  }

  function _0x5f26fd(_0x4144cb) {
    var _0x1ae422 = new RegExp("\n", "g");

    _0x4144cb = _0x4144cb["replace"](_0x1ae422, "\n");
    var _0xbdbc42 = "";

    for (var _0x4761db = 0; _0x4761db < _0x4144cb["length"]; _0x4761db++) {
      var _0x5246a7 = _0x4144cb["charCodeAt"](_0x4761db);

      if (_0x5246a7 < 128) {
        _0xbdbc42 += String["fromCharCode"](_0x5246a7);
      } else {
        if (_0x5246a7 > 127 && _0x5246a7 < 2048) {
          _0xbdbc42 += String["fromCharCode"](_0x5246a7 >> 6 | 192);
          _0xbdbc42 += String["fromCharCode"](_0x5246a7 & 63 | 128);
        } else {
          _0xbdbc42 += String["fromCharCode"](_0x5246a7 >> 12 | 224);
          _0xbdbc42 += String["fromCharCode"](_0x5246a7 >> 6 & 63 | 128);
          _0xbdbc42 += String["fromCharCode"](_0x5246a7 & 63 | 128);
        }
      }
    }

    return _0xbdbc42;
  }

  function _0x572657(_0x278d0b) {
    var _0x1540ad = "0123456789abcdef";
    var _0x3e8bab = "";

    for (var _0x305be1 = 0; _0x305be1 < _0x278d0b["length"] * 4; _0x305be1++) {
      _0x3e8bab += _0x1540ad["charAt"](_0x278d0b[_0x305be1 >> 2] >> (3 - _0x305be1 % 4) * 8 + 4 & 15) + _0x1540ad["charAt"](_0x278d0b[_0x305be1 >> 2] >> (3 - _0x305be1 % 4) * 8 & 15);
    }

    return _0x3e8bab;
  }

  _0x2d2110 = _0x5f26fd(_0x2d2110);
  return _0x572657(_0x29813b(_0x5ba792(_0x2d2110), _0x2d2110["length"] * _0x2ec7bd));
}

function go(_0x3f18bd) {
  var _0x305909 = new Date();

  function _0x827b22(_0x1e3ccf, _0x2f24f4) {
    var _0x438ba9 = _0x3f18bd["chars"]["length"];

    for (var _0x578790 = 0; _0x578790 < _0x438ba9; _0x578790++) {
      for (var _0x290f3c = 0; _0x290f3c < _0x438ba9; _0x290f3c++) {
        var _0x40b20b = _0x2f24f4[0] + _0x3f18bd["chars"]["substr"](_0x578790, 1) + _0x3f18bd["chars"]["substr"](_0x290f3c, 1) + _0x2f24f4[1];

        if (hash(_0x40b20b) == _0x1e3ccf) {
          return [_0x40b20b, new Date() - _0x305909];
        }
      }
    }
  }

  var _0x4e6d7c = _0x827b22(_0x3f18bd["ct"], _0x3f18bd["bts"]);

  if (_0x4e6d7c) {
    var _0x26f531;

    if (_0x3f18bd["wt"]) {
      _0x26f531 = parseInt(_0x3f18bd["wt"]) > _0x4e6d7c[1] ? parseInt(_0x3f18bd["wt"]) - _0x4e6d7c[1] : 500;
    } else {
      _0x26f531 = 1500;
    }

  return _0x3f18bd["tn"] + "=" + _0x4e6d7c[0] + ";Max-age=" + _0x3f18bd["vt"] + "; path = /";
  }
}
