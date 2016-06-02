/**
 * @param {number} num
 * @return {number}
 */

var fun = function (n) {
    var result=0;
    while(n>0) {
        result+=n%10;
        n=parseInt(n/10);
    }
    return result;

};
var addDigits = function(num) {
    while (num>=10) {
        num = fun(num);
    }
    return num;
};


/**
 * 下面这个是递归方案
 */

var fun = function (n) {
    if(n<10) return n;
    return fun(parseInt(n/10)) + n%10;
};
var addDigits = function(num) {
    while (num>=10) {
        num = fun(num);
    }
    return num;
};
