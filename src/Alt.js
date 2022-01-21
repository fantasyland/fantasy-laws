'use strict';

const Z = require ('sanctuary-type-classes');

const alt = require ('./internal/alt');
const assert = require ('./internal/assert');
const map = require ('./internal/map');


module.exports = equals => ({

  //  (a <|> b) <|> c = a <|> (b <|> c)
  associativity: assert.forall3 (a => b => c =>
    Z.Alt.test (a) &&
    Z.Alt.test (b) &&
    Z.Alt.test (c) &&
    equals (alt (alt (a) (b)) (c),
            alt (a) (alt (b) (c)))
  ),

  //  f <$> (a <|> b) = (f <$> a) <|> (f <$> b)
  distributivity: assert.forall3 (a => b => f =>
    Z.Alt.test (a) &&
    Z.Alt.test (b) &&
    equals (map (f) (alt (a) (b)),
            alt (map (f) (a)) (map (f) (b)))
  ),

});
