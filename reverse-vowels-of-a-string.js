/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('')
    var vowels = 'aeiou'
    for (let i = 0, j = s.length - 1; i < j;) {
        
        while (i < j && vowels.indexOf(s[i].toLowerCase()) === -1) i++
        
        while (i < j && vowels.indexOf(s[j].toLowerCase()) === -1) j--
        
        if (i < j) {
            [s[i], s[j]] = [s[j], s[i]]
            i++
            j--
        }
        
    }
    return s.join('')
};