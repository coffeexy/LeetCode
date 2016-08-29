/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    if (s === t) return true
    
    var mapa = new Map()
    var mapb = new Map()
    for (let i = s.length - 1; i >= 0; i--) {
        let a = s.substr(i, 1)
        let b = t.substr(i, 1)
        if (mapa.has(a) && mapa.get(a) !== b) return false
        if (mapb.has(b) && mapb.get(b) !== a) return false
        mapa.set(a, b)
        mapb.set(b, a)
    }
    return true
};