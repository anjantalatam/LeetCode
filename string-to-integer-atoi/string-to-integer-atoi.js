/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = ""
    for(let i=0;i < s.length; i++){
        if(parseInt(s[i]) || s[i]==="-"){
            str += s[i]
        }else if(s[i] !== " " && str.length === 0) {
            str = 0
            break;
        }
    }
    let output  = parseInt(s) || 0
    if(output > 2**31 - 1){
        return 2**31 - 1
    }else if ( output < -(2**31)){
        return -(2**31)
    }

    return  output
};