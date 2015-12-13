'use strict';

var undef = void 0;

function resolve(object, path, separator) {
  path = path.split(separator || '.');
  var folders = path.slice(0, -1);
  var parent = object;

  for (var i = 0; i < folders.length; i++) {
    var folder = folders[i];
    if (parent == null) {
      return undef;
    }
    parent = parent[folder];
  }

  if (parent == null) {
    return;
  }
  return parent[path[path.length - 1]];
}

function getResolver(object, separator) {
  var cache = {};

  return function (path) {
    if (!cache[path]) {
      cache[path] = resolve(object, path, separator);
    }
    return cache[path];
  };
}

exports = module.exports = resolve;
exports.resolver = getResolver;
