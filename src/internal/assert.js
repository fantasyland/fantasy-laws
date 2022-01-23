'use strict';

const jsc = require ('jsverify');


exports.forall1 = property => A => () => (
  jsc.assert (
    jsc.forall (A, property)
  )
);

exports.forall2 = property => (A, B) => () => (
  jsc.assert (
    jsc.forall (A, B, (a, b) => property (a) (b))
  )
);

exports.forall3 = property => (A, B, C) => () => (
  jsc.assert (
    jsc.forall (A, B, C, (a, b, c) => property (a) (b) (c))
  )
);

exports.forall4 = property => (A, B, C, D) => () => (
  jsc.assert (
    jsc.forall (A, B, C, D, (a, b, c, d) => property (a) (b) (c) (d))
  )
);

exports.forall5 = property => (A, B, C, D, E) => () => (
  jsc.assert (
    jsc.forall (A, B, C, D, E, (a, b, c, d, e) => property (a) (b) (c) (d) (e))
  )
);
