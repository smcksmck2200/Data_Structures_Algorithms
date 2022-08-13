
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]


let num = []
for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
            num.push(num1[i])
        }

    }
}


var intersect = function (nums1, nums2) {
    let intersection = []
    nums1.forEach((x, i) => {
        if (nums2.includes(x)) {
            nums2.splice(nums2.indexOf(x), 1)
            intersection.push(x)
        }
    })
    return intersection
};

console.log(num)