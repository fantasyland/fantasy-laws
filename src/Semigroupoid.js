'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');
var compose = require('./internal/compose_');


module.exports = function(equals) {
  return {

    //  (x `compose` y) `compose` z = x `compose` (y `compose` z)
    associativity: assert.forall3(function(x, y, z) {
      return Z.Semigroupoid.test(x) &&
             Z.Semigroupoid.test(y) &&
             Z.Semigroupoid.test(z) &&
             equals(compose(compose(x)(y))(z),
                    compose(x)(compose(y)(z)));
    })

  };
};
