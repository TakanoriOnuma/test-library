var path = require('path');
var test_join = function( a , b ){
  return path.join(a, b);
};
module.exports = {
  test_join:test_join
};
