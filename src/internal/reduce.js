import Z from 'sanctuary-type-classes';

import curry3 from './curry3.js';

//  reduce :: Foldable f => ((b, a) -> b) -> b -> f a -> b
export default curry3 (Z.reduce);
