'use strict';

var Z = require ('sanctuary-type-classes');

var curry3 = require ('./curry3');

//  chainRec :: ChainRec m => TypeRep m -> ((a -> c, b -> c, a) -> m c) -> a -> m b
module.exports = curry3 (Z.chainRec);
