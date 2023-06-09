/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let output  = parseInt(s) || 0
    if (output > 2**31 - 1){
        return 2**31 - 1
    } else if (output < -(2**31)){
        return -(2**31)
    }

    return  output
};