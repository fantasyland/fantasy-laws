'use strict';

const Z = require ('sanctuary-type-classes');

const curry3 = require ('./curry3');

//  promap :: Profunctor p => (a -> b) -> (c -> d) -> p b c -> p a d
module.exports = curry3 (Z.promap);
