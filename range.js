module.exports = function (n, end) {
  var x = [];
  if (arguments.length === 1) {
    for (var i =0; i < n; i++) {
      x.push(i);
    }
    return x;
  } else if (arguments.length === 2) {
      for (var j = n; j < end; j++) {
        x.push(j);
      }
      return x;
  } else {
      return x;
  }
};
