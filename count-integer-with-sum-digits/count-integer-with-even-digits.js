var countEven = function(num) {
    const getDigitSum = (num) => {
        const str = num.toString();
        let sum = 0;
        
        for (const char of str) {
            sum += +char;
        }
        return sum;
    }
    
    let count = 0;
    
    for (let i = 1; i <= num; i++) {
        if (getDigitSum(i) % 2 === 0) count++;
    }
    
    return count;
};