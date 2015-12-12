'use strict';

function resolve(object, path, separator) {
  path = path.split(separator || '.');
  var folders = path.slice(0, -1);
  var parent = object;
  folders.forEach(function (folder) {
    parent = parent[folder];
  });

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

exports = module.exports = getResolver;
exports.resolve = resolve;
