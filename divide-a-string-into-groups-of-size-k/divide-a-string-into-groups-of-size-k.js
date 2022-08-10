/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
    let result = [];
    for(let i = 0; i < s.length; i = i + k){
        let j = 0;
        let str = ''
        while(j < k){
            if(s[i + j] === undefined){
                str = str.concat(fill);
                j++
            }else{
                str = str.concat(s[i + j])
            j++
            }
            
        }
        result.push(str)
    }
    return result;
};