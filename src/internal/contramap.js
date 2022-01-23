'use strict';

const Z = require ('sanctuary-type-classes');

const curry2 = require ('./curry2');

//  contramap :: Contravariant f => (b -> a) -> f a -> f b
module.exports = curry2 (Z.contramap);
