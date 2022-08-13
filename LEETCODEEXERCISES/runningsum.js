/**
 * @param {number[]} nums
 * @return {number[]}
 */


var runningSum = function (nums) {
    nums = [1, 2, 3, 4]
    newArray = []
    let sum = 0
    for (let i = 0; i < (nums.length); i++) {
        sum += nums[i]
        nums[i] = sum
        newArray.push(nums)
    }
    console.log(newArray[0])
};
runningSum()
//let i=1
//for(let i=1)
//nums[i]=nums[i]+nums[i-1]]
//return nums



//Output:[1,3,6,10]