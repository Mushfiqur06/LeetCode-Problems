/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    let result = [];
    let tempArr = s.split("")
    for(let i = 0; i < tempArr.length; i++){
        if(!result.includes(tempArr[i])){
            result.push(tempArr[i])
        }
    }

    console.log(result.join(''))
};

console.log(removeDuplicateLetters("cbacdcbc"))