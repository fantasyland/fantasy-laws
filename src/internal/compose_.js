//  compose :: (b -> c) -> (a -> b) -> a -> c
export default f => g => x => f (g (x));
