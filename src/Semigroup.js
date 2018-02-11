'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');
var concat = require('./internal/concat');


module.exports = function(equals) {
  return {

    //  (x <> y) <> z = x <> (y <> z)
    associativity: assert.forall3(function(x, y, z) {
      return Z.Semigroup.test(x) &&
             Z.Semigroup.test(y) &&
             Z.Semigroup.test(z) &&
             equals(concat(concat(x)(y))(z),
                    concat(x)(concat(y)(z)));
    })

  };
};
