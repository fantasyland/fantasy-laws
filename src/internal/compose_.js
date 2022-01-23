'use strict';

//  compose :: (b -> c) -> (a -> b) -> a -> c
module.exports = f => g => x => f (g (x));
