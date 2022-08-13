/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    num = 0
    for (i = 0; i < nums.length; i++) {
        num ^= nums[i]
    }
    return num
}

function getNumber(nums) {
    nums = nums.sort()
    if (nums % 2) {

    }
} 
