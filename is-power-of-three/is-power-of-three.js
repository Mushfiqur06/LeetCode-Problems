/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n === 1) return true;
    if(n < 1) return false;
    let i = 1;
    while(i < n){
        i = i * 3;
    }
    
    return i === n;
};