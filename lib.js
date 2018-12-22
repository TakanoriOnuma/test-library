const path = require('path');
const { times, fill } = require('lodash');

const testJoin = (a, b) => {
  return path.join(a, b);
};

const fillArray = (arrayNum, value) => {
  return times(arrayNum).fill(value);
};

module.exports = {
  testJoin,
  fillArray
};
