module.exports = function (n) {
  var range = require('./range');
  if (!n) {
    return {};
  }
 var obj = range(n).reduce(function (o, n) {
    o[n] = n;
    return o;
  }, {});
  return obj;
};
