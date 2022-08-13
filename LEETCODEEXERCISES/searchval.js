class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
    search(val) {
        let node = this
        while (node.val != val) {
            node = node.next
        }
        return node
    }
    insert(val) {
        let newNode = new Node(val, this.next)
        this.next = newNode
    }
}