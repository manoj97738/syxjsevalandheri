const add = function (x, y) {
  return (+x) + (+y)
};
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
// const divide = (x, y) => (+x) / (+y);
const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
}

module.exports = { add, subtract, multiply, validateNumbers } //dont forget to add divide

module.exports = {
  add: function (x, y) {
    return (+x) + (+y)
  },
}