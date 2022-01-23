'use strict';

const Z = require ('sanctuary-type-classes');

const curry2 = require ('./curry2');

//  chain :: Chain m => (a -> m b) -> m a -> m b
module.exports = curry2 (Z.chain);
