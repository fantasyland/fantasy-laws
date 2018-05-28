'use strict';

var Z = require ('sanctuary-type-classes');

var curry2 = require ('./curry2');

//  filter :: Filterable f => (a -> Boolean) -> f a -> f a
module.exports = curry2 (Z.filter);
