'use strict';

var curry2 = require('./curry2');

//  K :: a -> b -> a
module.exports = curry2(function(x, y) { return x; });
