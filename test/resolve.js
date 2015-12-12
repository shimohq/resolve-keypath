'use strict';

var expect = require('chai').expect;
var resolve = require('..');
var getResolver = resolve.getResolver;

describe('resolve', function () {
  it('should return the correct value', function () {
    expect(resolve({ a: 1 }, 'a')).to.eql(1);

    expect(resolve({
      a: {
        b: 2
      }
    }, 'a.b')).to.eql(2);

    expect(resolve({
      a: {
        b: {
          c: 3,
          d: 4
        }
      }
    }, 'a.b.d')).to.eql(4);
  });

  it('should support custom separator', function () {
    expect(resolve({
      a: {
        b: {
          c: 3,
          d: 4
        }
      }
    }, 'a/b/d', '/')).to.eql(4);
  });
});

describe('resolver', function () {
  it('should cache the result', function () {
    expect(resolve({
      a: {
        b: {
          c: 3,
          d: 4
        }
      }
    }, 'a/b/d', '/')).to.eql(4);
    expect(resolve({
      a: {
        b: {
          c: 3,
          d: 4
        }
      }
    }, 'a/b/d', '/')).to.eql(4);
  });
});
