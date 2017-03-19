'use strict';

var Z = require('sanctuary-type-classes');

var alt = require('./internal/alt');
var assert = require('./internal/assert');
var map = require('./internal/map');


module.exports = function(equals, P) {
  var zero = Z.zero(P);
  return {

    //  zero <|> x = x
    leftIdentity: assert.forall1(function(x) {
      return Z.Plus.test(x) &&
             equals(alt(zero)(x),
                    x);
    }),

    //  x <|> zero = x
    rightIdentity: assert.forall1(function(x) {
      return Z.Plus.test(x) &&
             equals(alt(x)(zero),
                    x);
    }),

    //  f <$> zero = zero
    annihilation: assert.forall1(function(f) {
      return equals(map(f)(zero),
                    zero);
    })

  };
};
