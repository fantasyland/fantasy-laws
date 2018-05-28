'use strict';

var Z = require ('sanctuary-type-classes');

var alt = require ('./internal/alt');
var assert = require ('./internal/assert');
var map = require ('./internal/map');


module.exports = function(equals) {
  return {

    //  (a <|> b) <|> c = a <|> (b <|> c)
    associativity: assert.forall3 (function(a, b, c) {
      return Z.Alt.test (a) &&
             Z.Alt.test (b) &&
             Z.Alt.test (c) &&
             equals (alt (alt (a) (b)) (c),
                     alt (a) (alt (b) (c)));
    }),

    //  f <$> (a <|> b) = (f <$> a) <|> (f <$> b)
    distributivity: assert.forall3 (function(a, b, f) {
      return Z.Alt.test (a) &&
             Z.Alt.test (b) &&
             equals (map (f) (alt (a) (b)),
                     alt (map (f) (a)) (map (f) (b)));
    })

  };
};
