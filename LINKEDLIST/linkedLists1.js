class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.previous = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new Node("forrest hills")
let node2 = new Node("green street")
let node3 = new Node('stoney brook')

let list = new LinkedList(node1)
node1.next = node2
node2.previous = node1
node2.next = node3
node3.next = list.head

console.log(list)