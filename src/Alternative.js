'use strict';

var Z = require ('sanctuary-type-classes');

var alt = require ('./internal/alt');
var ap = require ('./internal/ap');
var assert = require ('./internal/assert');


module.exports = function(equals, A) {
  var zero = Z.zero (A);
  return {

    //  (f <|> g) <*> x = (f <*> x) <|> (g <*> x)
    distributivity: assert.forall3 (function(x, f, g) {
      return Z.Alternative.test (x) &&
             Z.Alternative.test (f) &&
             Z.Alternative.test (g) &&
             equals (ap (alt (f) (g)) (x),
                     alt (ap (f) (x)) (ap (g) (x)));
    }),

    //  zero <*> x = zero
    annihilation: assert.forall1 (function(x) {
      return Z.Alternative.test (x) &&
             Z.Alternative.test (zero) &&
             equals (ap (zero) (x),
                     zero);
    })

  };
};
