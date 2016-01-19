module.exports = function (n) {
  var range = require('./range');
  console.log("range(n)", range(n));
  // return range(n);
  range(n).reduce(function (o, v, i) {
    o[v] = v;
    console.log("o", o);
    return o;
  });
};
