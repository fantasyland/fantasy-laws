'use strict';

const Z = require ('sanctuary-type-classes');

const curry2 = require ('./curry2');

//  concat :: Semigroup a => a -> a -> a
module.exports = curry2 (Z.concat);
