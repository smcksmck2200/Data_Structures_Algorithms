/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    {
        k = k % nums.length
        let start = nums.length - k
        let one = nums.slice(start)
        let two = nums.slice(0, start)
        nums.length = 0
        nums.push(...one, ...two)
        console.log(nums)
    };
    return rotate
};