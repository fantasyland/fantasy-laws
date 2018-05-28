'use strict';

var Z = require ('sanctuary-type-classes');

var curry2 = require ('./curry2');

//  compose :: Semigroupoid c => c j k -> c i j -> c i k
module.exports = curry2 (Z.compose);
