/**
 * @param {number[]} nums
 * @return {number[]}
 */
var single = function(nums) {
    var result = nums[0];
    for(let i = nums.length-1; i > 0; i--) {
        result = result^nums[i];
    }
    return result;
};

var findK = function(num) {
    for(let i = 0; num; i++) {
        if(num%2) return i;
        num = ~~(num/2);
    }
    return num;
}

var singleNumber = function(nums) {
    var k = findK(single(nums));
    var x = [];
    var y = [];
    for(let i = nums.length-1; i >= 0; i--) {
        if((nums[i]>>k)&1) {
            x.push(nums[i]);
        } else {
            y.push(nums[i]);
        }
    }
    return [single(x), single(y)];
};