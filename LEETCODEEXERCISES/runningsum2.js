var runningSum = function (nums) {
    nums = [1, 2, 3, 4]


    for (let i = 1; i < nums.lenth; i++) {
        let newArray = []
        nums[i] = nums[i] + nums[i - 1]
        newArray.push(nums)
       
    }
    console.log(newArray[i])
};
runningSum()
