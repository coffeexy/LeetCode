/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let output = strs[0] || '';
    for(let i=1; i<len && output !== ''; i++) {
        output = common2Prefix(output, strs[i])
    }
    return output;
    
    
    function common2Prefix(a, b) {
        let _output = '';
        a = a.split('');
        b = b.split('');
        let lena = a.length;
        let lenb = b.length;
        for(let i=0; i<lena && i<lenb && a[i]===b[i];i++) {
            _output+=a[i];
        }
        return _output;
    }
};