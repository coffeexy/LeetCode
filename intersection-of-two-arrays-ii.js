/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var len = nums2.length
    if (len > nums1.length) {
        [nums1, nums2] = [nums2, nums1]
        len = nums1.length
        console.log('no log')
    }
    if (len < 1) return []
 
    for (let i = 0; i < len;) {
        let index = nums1.indexOf(nums2[i])
        if (index >= 0) {
            nums1[index] = null
            i++
        } else {
            nums2.splice(i, 1)
            len--
        }
    }
    return nums2
    
};