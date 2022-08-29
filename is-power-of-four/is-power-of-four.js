/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 1) return true;
  if (n < 1) return false;
  let i = 1;
  while (i < n) {
    i = i * 4;
  }

  return i === n;
};
