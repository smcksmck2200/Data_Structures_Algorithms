/**
 * Definition for singly-linked list. */

 function ListNode (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var deleteDuplicates = function (head) {
    let current = head
  
    while (current !== null && current.next !== null) {
      // if my current node has the same value as the next node
      if (current.val === current.next.val) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
  
    return head
  }
  
  let head = new ListNode(1)
  let one = new ListNode(1)
  let two = new ListNode(1)
  let three = new ListNode(2)
  let four = new ListNode(2)
  head.next = one
  one.next = two
  two.next = three
  three.next = four
  // 1 - 1 - 2 - 2 - 2 - null => 1 - 2
  // 1 - null
  console.log(deleteDuplicates(head))
  // 1 -> 2
  // 1 -> 2 -> 2
 
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  var searchInsert = function (nums, target) {
    // O(n)
    // go through every item in the array
    for (let idx = 0; idx < nums.length; idx++) {
      // if the current number >= than the target - return the index
      if (nums[idx] >= target) {
        return idx
      }
    }
  
    // if we didn't find any numbers equal to or greater than, return the length
    return nums.length
  }
  
  console.log(searchInsert([1, 3, 5, 6], 5) === 2)
  console.log(searchInsert([1, 3, 5, 6], 2) === 1)
  console.log(searchInsert([1, 3, 5, 6], 7) === 4)