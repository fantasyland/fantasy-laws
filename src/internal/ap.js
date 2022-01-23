'use strict';

const Z = require ('sanctuary-type-classes');

const curry2 = require ('./curry2');

//  ap :: Apply f => f (a -> b) -> f a -> f b
module.exports = curry2 (Z.ap);
