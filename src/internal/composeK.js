import chain from './chain.js';

//  composeK :: Chain m => (b -> m c) -> (a -> m b) -> a -> m c
//
//  Right-to-left Kleisli composition. Equivalent to Haskell's (<=<) function.
export default f => g => x => chain (f) (g (x));
