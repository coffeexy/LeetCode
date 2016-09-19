/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    function me(start, end) {
        if (start === end) return start
        var mid = ~~((start + end)/2)
        
        if (isBadVersion(mid) && !isBadVersion(mid-1)) return mid
        else if (isBadVersion(mid) && isBadVersion(mid-1)) return me(start, mid)
        else return me(mid+1, end)
    }
    return function(n) {
        return me(0, n)
    };
};