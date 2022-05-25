/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    return s.trim().split(" ").slice(-1).join("").length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))