'use strict';

const Z = require ('sanctuary-type-classes');

const curry3 = require ('./curry3');

//  traverse :: (Applicative f, Traversable t) => TypeRep f -> (a -> f b) -> t a -> f (t b)
module.exports = curry3 (Z.traverse);
