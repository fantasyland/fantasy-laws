'use strict';

var Z = require('sanctuary-type-classes');

var curry2 = require('./curry2');

//  chainRec :: ChainRec m => TypeRep m -> ((a -> c, b -> c, a) -> m c) -> a -> m b
module.exports = curry2(Z.chainRec);
