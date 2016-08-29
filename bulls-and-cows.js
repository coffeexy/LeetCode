/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var a = 0
    var b = 0
    var mapa = new Map()
    var mapb = new Map()
    
    for (let i = guess.length - 1; i >= 0; i--) {
        if(secret[i] === guess[i]) a += 1
        mapa.set(secret[i], mapa.has(secret[i]) ? mapa.get(secret[i]) + 1 : 1)
        mapb.set(guess[i], mapb.has(guess[i]) ? mapb.get(guess[i]) + 1 : 1)
    }
    for (let [key, value] of mapb) {
        if (mapa.has(key)) b += Math.min(value, mapa.get(key))
    }
    return a + 'A' + (b - a) + 'B'
};