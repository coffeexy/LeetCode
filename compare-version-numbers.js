/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    if (version1 === version2) return 0
    var len1 = version1.length
    var len2 = version2.length
    var a = 0
    var b = 0
    
    for (let i = 0, j = 0; i < len1 || j < len2;) {
        let s1, s2
        
        while (i < len1 && version1[i] !== '.') i++
        while (j < len2 && version2[j] !== '.') j++
        
        if (i < len1 || j < len2) {
            s1 = +version1.slice(a, i)
            s2 = +version2.slice(b, j)
            if (s1 > s2) return 1
            else if (s1 < s2) return -1
            
            a = ++i
            b = ++j
        }
        
    }
    // 最后一个版本号
    s1 = +version1.slice(a, len1)
    s2 = +version2.slice(b, len2)
    if (s1 > s2) return 1
    else if (s1 < s2) return -1
    return 0
    
};