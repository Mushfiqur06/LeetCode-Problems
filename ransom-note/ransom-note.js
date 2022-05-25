/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let newArr = magazine.split('')
    for(let i = 0; i < ransomNote.length; i++){
        if(newArr.indexOf(ransomNote[i]) === -1){
            return false;
        }else{
            newArr.splice(newArr.indexOf(ransomNote[i]), 1)
        }
    }
    return true
};

console.log(canConstruct('aa', 'baa'))