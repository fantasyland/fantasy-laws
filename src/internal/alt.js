'use strict';

const Z = require ('sanctuary-type-classes');

const curry2 = require ('./curry2');

//  alt :: Alt f => f a -> f a -> f a
module.exports = curry2 (Z.alt);
