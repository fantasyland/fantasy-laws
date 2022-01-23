import Z from 'sanctuary-type-classes';

import curry3 from './curry3.js';

//  traverse :: (Applicative f, Traversable t) => TypeRep f -> (a -> f b) -> t a -> f (t b)
export default curry3 (Z.traverse);
