'use strict';

const Z = require ('sanctuary-type-classes');

const curry2 = require ('./curry2');

//  filter :: Filterable f => (a -> Boolean) -> f a -> f a
module.exports = curry2 (Z.filter);
