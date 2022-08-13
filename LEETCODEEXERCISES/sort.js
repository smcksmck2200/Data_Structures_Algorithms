// given an array of duplicates find the number that doesn't have a pair

function getNumber(nums) {
    nums = nums.sort()
    for (let i = 0; i < nums.length(); i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
}
getNumber([1, 2, 1, 2, 3])