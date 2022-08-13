
//go through every item in array

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++)
        // console.table({idx:i,currentNumber:nums[i],target:target})

        //if the current number equals the target - return the index

        if (nums[i] === target) {
            return i
        }
    //if the current number is greater than the target - return the index

    if (nums[i] > target) {
        return i
    }
}

return nums.length

console.log(searchInsert([1, 3, 5, 6], 5) === 2)







//pseudo code
//search array
//if value in array
//return index where value located
//else
//if value is not in array
//compare value to integer in index
//if index integer is less than value
//advance one index address, compare again
//if index integer is greater than value
//insert (push?) integer in location
//(array increases by one integer input)