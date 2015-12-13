# resolve-keypath

[![Build Status](https://travis-ci.org/shimohq/resolve-keypath.svg?branch=master)](https://travis-ci.org/shimohq/resolve-keypath)

## Install

```
npm install resolve-keypath
```

## Usage

```javascript
var resolve = require('resolve-keypath');

resolve({ a: { b: 1 } }, 'a.b') // 1
resolve({ a: { b: 1 } }, 'a/b', '/') // 1
resolve(null, 'a') // null

// Use `getResolver` if you want to cache the result per object:
var getResolver = resolve.getResolver;

var myResolver = getResolver({ a: { b: 1 }}, '/');
myResolver('a/b') // 1
```

# License

MIT
