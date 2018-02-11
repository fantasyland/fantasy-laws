'use strict';

var Z = require('sanctuary-type-classes');

var curry2 = require('./curry2');

//  contramap :: Contravariant f => (b -> a) -> f a -> f b
module.exports = curry2(Z.contramap);
