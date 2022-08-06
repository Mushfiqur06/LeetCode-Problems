/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let newAccounts = [];
    for(let i = 0; i < accounts.length; i++){
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++){
            
            sum += accounts[i][j]
            
        }
        newAccounts.push(sum)
        
    }
    let sortedAccounts = newAccounts.sort((a, b) => b - a)
    
    return sortedAccounts[0]
};