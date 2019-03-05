/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0
    let y = 0
    let len = moves.length

    // if 长度为奇数 then false
    if(len%2===1) return false
    for(let i=0; i<len; i++) {
        switch(moves[i]) {
            case 'R':
                x-=1
                break
            case 'L':
                x+=1
                break
            case 'U':
                y+=1
                break
            case 'D':
                y-=1
                break
        }
    }
    if(x===0 && y===0) return true
    return false
};