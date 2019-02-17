'use strict';

var jsc = require ('jsverify');


exports.forall1 = function(property) {
  return function(A) {
    return function() {
      return jsc.assert (jsc.forall (A, property));
    };
  };
};

exports.forall2 = function(property) {
  return function(A, B) {
    return function() {
      return jsc.assert (jsc.forall (A, B, property));
    };
  };
};

exports.forall3 = function(property) {
  return function(A, B, C) {
    return function() {
      return jsc.assert (jsc.forall (A, B, C, property));
    };
  };
};

exports.forall4 = function(property) {
  return function(A, B, C, D) {
    return function() {
      return jsc.assert (jsc.forall (A, B, C, D, property));
    };
  };
};

exports.forall5 = function(property) {
  return function(A, B, C, D, E) {
    return function() {
      return jsc.assert (jsc.forall (A, B, C, D, E, property));
    };
  };
};
