/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s === t) return true
    
    var len = s.length
    if (len !== t.length) return false
    
    var smap = new Map()
    var tmap = new Map()
    for (let i = 0; i < len; i++) {
        let skey = s[i]
        let tkey = t[i]
        smap.set(skey, smap.has(skey) ? smap.get(skey) + 1 : 1)
        tmap.set(tkey, tmap.has(tkey) ? tmap.get(tkey) + 1 : 1)
    }
    for (let [key, value] of smap) {
        if (value !== tmap.get(key)) return false
    }
    return true
};