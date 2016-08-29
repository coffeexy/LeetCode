/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */


var findTheDifference = function(s, t) {
    var len = s.length
    if (!len) return t
    
    var maps = new Map()
    var mapt = new Map()
    
    for (i = 0; i < len; i++) {
        maps.set(s[i], maps.has(s[i]) ? maps.get(s[i]) + 1 : 1)
        mapt.set(t[i], mapt.has(t[i]) ? mapt.get(t[i]) + 1 : 1)
    }
    mapt.set(t[i], mapt.has(t[i]) ? mapt.get(t[i]) + 1 : 1)
    
    for (let [key, value] of mapt) {
       if(value !== maps.get(key)) return key
    }
};