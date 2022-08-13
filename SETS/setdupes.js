function containsDuplicate(nums) {
    //
    let mySet = new Set()
    for (let i = 0; i < nums.length; i++) {
        mySet.add(nums[i])
    }
    if (mySet.size === nums.length) {
        return true
    } else {
        return false
    }
    //if(mySet.has(nums[i])) return true
    //mySet.add(nums[i])
}
console.log(containsDuplicate([1, 2, 3, 2]))