var reverse = function(x) {
    const result =  String(Math.abs(x)).split("").reverse().join("");
  return result > 0x7FFFFFFF ? 0 : x > 0 ? result : result * -1;
};

console.log(reverse(-123))