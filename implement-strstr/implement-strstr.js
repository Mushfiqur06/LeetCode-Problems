/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
     if(!needle.length) return 0;

    if(haystack.includes(needle)){
        return haystack.indexOf(needle)
    }else{
        return - 1
    }
};

console.log(strStr('hello', 'll'))