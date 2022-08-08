/**
 * @param {string} num
 * @return {string}
 */
 var largestGoodInteger = function(num) {
    if(!num.length || num.length < 2) return "";
    
    let sortedNum = num.split('');
    let result = []
    
    for(let i = 0; i < sortedNum.length - 2; i++){
        let check = sortedNum[i] === sortedNum[i + 1]
        if(check && sortedNum[i] === sortedNum[i + 2]){
            result.push(sortedNum[i])
            result.push(sortedNum[i + 1])
            result.push(sortedNum[i + 2])
        }
    }
    
    return result.length ? result.sort().slice(-3).join("") : "";
};