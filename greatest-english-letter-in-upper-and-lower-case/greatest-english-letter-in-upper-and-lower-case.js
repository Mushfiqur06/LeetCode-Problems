/**
 * @param {string} s
 * @return {string}
 */
 var greatestLetter = function(s) {
    let sortedString = s.split('').sort((a, b) => a.localeCompare(b))
    console.log(sortedString)
    console.log(sortedString[0] === sortedString[1])
    let result = [];
    for(let i = 0; i < sortedString.length; i++){
        if(sortedString[i].toUpperCase() === sortedString[i]){
            let temp = sortedString[i].toLowerCase()
            if(sortedString.includes(temp)){
                result.push(sortedString[i])
            }
        }else{
            let temp = sortedString[i].toUpperCase()
            if(sortedString.includes(temp)){
                result.push(sortedString[i])
            }
        }
    }
    console.log(result)
    return result.length ? result[result.length - 1] : ""
};