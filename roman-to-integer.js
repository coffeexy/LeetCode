/**
 * @param {string} s
 * @return {number}
 */
var romanint = function(c) {
    switch(c) {  
        case 'I': return 1;  
        case 'V': return 5;  
        case 'X': return 10;  
        case 'L': return 50;  
        case 'C': return 100;  
        case 'D': return 500;  
        case 'M': return 1000;  
        default: return 0;  
    }
}
var romanToInt = function(s) {
    var len = s.length
    var result = 0
    for( let i = 0; i < len; i++) {
        result += romanint(s[i])
        if (i > 0 && romanint(s[i]) > romanint(s[i-1])) {
            result -= 2*romanint(s[i-1])
        }
    }
    return result
};