/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var temp = '';
    for(j = s.length - 1; j>=0; j--) {
        temp += s[j];
    }
    return(temp);
};

/**
 * 内置方法反而更快
 * return s.split("").reverse().join("");
 */
