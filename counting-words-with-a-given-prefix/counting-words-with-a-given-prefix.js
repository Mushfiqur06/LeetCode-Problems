/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
    let count = 0;
    const prefLength = pref.length;
    words.forEach((word) => {
        const wordPref = word.substr(0, prefLength);
        if (wordPref === pref) {
            count++;
        }
    })
    return count
};