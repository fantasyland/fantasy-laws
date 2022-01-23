import jsc from 'jsverify';


const forall1 = property => A => () => (
  jsc.assert (
    jsc.forall (A, property)
  )
);

const forall2 = property => (A, B) => () => (
  jsc.assert (
    jsc.forall (A, B, (a, b) => property (a) (b))
  )
);

const forall3 = property => (A, B, C) => () => (
  jsc.assert (
    jsc.forall (A, B, C, (a, b, c) => property (a) (b) (c))
  )
);

const forall4 = property => (A, B, C, D) => () => (
  jsc.assert (
    jsc.forall (A, B, C, D, (a, b, c, d) => property (a) (b) (c) (d))
  )
);

const forall5 = property => (A, B, C, D, E) => () => (
  jsc.assert (
    jsc.forall (A, B, C, D, E, (a, b, c, d, e) => property (a) (b) (c) (d) (e))
  )
);

export default {forall1, forall2, forall3, forall4, forall5};
