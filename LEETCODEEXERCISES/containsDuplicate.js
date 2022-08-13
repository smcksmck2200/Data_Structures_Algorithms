// Brute Force solution

function containsDuplicate(nums) {
    for (let j = 0; j < nums.length; j++) {
        nums[0]
        for (let i = j + 1; i < nums.length; i++) {
            console.table({ j, i })
            if (nums[j] === nums[i]) return true
        }
    }

    return false
}
console.log(containsDuplicate([1, 2, 3, 2]))
console.log(containsDuplicate[1, 2, 3, 4])