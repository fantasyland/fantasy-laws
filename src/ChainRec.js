'use strict';

var assert = require('./internal/assert');
var chain = require('./internal/chain');
var chainRec = require('./internal/chainRec');
var map = require('./internal/map');


module.exports = function(equals, CR) {
  return {

    equivalence: assert.forall4(function(p, n, d, i) {
      return equals(chainRec(CR)(function(next, done, v) { return p(v) ? map(done)(d(v)) : map(next)(n(v)); })(i),
                    (function step(v) { return p(v) ? d(v) : chain(step)(n(v)); }(i)));
    })

  };
};
