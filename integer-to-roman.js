/**
 * @param {number} num
 * @return {string}
 */
var romanint = function(n) {
    switch(n) {  
        case 1: return 'I';  
        case 5: return 'V';  
        case 10: return 'X';  
        case 50: return 'L';  
        case 100: return 'C';  
        case 500: return 'D';  
        case 1000: return 'M';  
        default: return '';  
    }
}
var intToRoman = function(num) {
    var scale = [1000, 500, 100, 50, 10, 5, 1]
    var result = []
    let i = 0
    
    while (num && i <= 6) {
        var x = ~~(num/scale[i])
        
        if (x === 4) result += romanint(scale[i]) + romanint(scale[i-1])
        while (x>0 && x<4) {
            result += romanint(scale[i])
            x--
        }
        
        num = num%scale[i]
        i++
        
    }
    return result.replace(/VIV/, 'IX').replace(/DCD/, 'CM').replace(/LXL/, 'XC')
};