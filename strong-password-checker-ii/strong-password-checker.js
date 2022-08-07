/**
 * @param {string} password
 * @return {boolean}
 */
 var strongPasswordCheckerII = function(password) {
    if(password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
        return false;
    }
    
    let isStrongPass = false;
    
    for(let i = 0; i < password.length; i++){
        if('!@#$%^&*()-+'.includes(password[i])){
            isStrongPass = true;
        }
        if(password[i] === password[i + 1]){
            return false;
        }
    }
    
    return isStrongPass
};