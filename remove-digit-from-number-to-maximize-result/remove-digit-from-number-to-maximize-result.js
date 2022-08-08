/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigit = function(number, digit) {
    let result = []
    for(let i = 0; i < number.length; i++){

        if(number[i] === digit){
           result.push(number.slice(0, i) + number.slice(i + 1))
        }
    }
    
    return result.sort()[result.length - 1]
};