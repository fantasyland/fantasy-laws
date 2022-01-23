'use strict';

const Z = require ('sanctuary-type-classes');

const curry3 = require ('./curry3');

//  reduce :: Foldable f => ((b, a) -> b) -> b -> f a -> b
module.exports = curry3 (Z.reduce);
