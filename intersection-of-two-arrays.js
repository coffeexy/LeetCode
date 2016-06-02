/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var map = function(num) {
    var hashmap = {};
    for(var i=num.length-1; i>=0; i-- ) {
        hashmap[num[i]]=1;
    }
    return hashmap;
};
var intersection = function(nums1, nums2) {
    var large = nums1;
    var small = nums2;
    var result = [];
    if (nums1.length < nums2.length) {
        large = nums2;
        small = nums1;
    }
    var maphash = map(small);
    for(var i=large.length-1; i>=0; i-- ) {
        if (maphash[large[i]]) {
            result.push(large[i]);
            maphash[large[i]] = 0;
        }
    }
    return result;
};
