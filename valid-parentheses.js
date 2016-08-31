/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var len = s.length
    if (len%2) return false
    
    var stack = []
    for (let i = 0; i < len; i++) {
        switch (s[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(s[i])
                break;
            case ')':
            case '}':
            case ']':
                temp = stack.pop()
                if ((s[i] === ')' && temp !== '(') || (s[i] === '}' && temp !== '{') || (s[i] === ']' && temp !== '['))
                    return false
            
        }
    }
    if (stack.length !== 0) return false
    return true
};