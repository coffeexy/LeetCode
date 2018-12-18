/**
 * @param {string[]} words
 * @return {number}
 */

const map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var uniqueMorseRepresentations = function(words) {
    let len = words.length;
    let sum = len;
    
    if(len>1) {
        let set = new Set();
        words.map(item => {
            set.add(getMorse(item))
        });
        sum = set.size;
    }
                  
    function getMorse(word) {
        let lens = word.length;
        let morse = '';
        for(let i=0; i<lens; i++) {
            morse += map[word.charCodeAt(i)-97]
        }
        return morse;
    }
    
    return sum;
    
};