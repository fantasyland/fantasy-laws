import Z from 'sanctuary-type-classes';

import curry3 from './curry3.js';

//  bimap :: Bifunctor f => (a -> b) -> (c -> d) -> f a c -> f b d
export default curry3 (Z.bimap);
