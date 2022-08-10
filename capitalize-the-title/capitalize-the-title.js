/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    let titleArr = title.toLowerCase().split(" ")
    let result = []
    for(let i = 0; i < titleArr.length; i++){
        if(titleArr[i].length <= 2){
            result.push(titleArr[i])
        }else{
            result.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1))
        }
        
    }
    
    return result.join(" ")
};