class Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}
class linkedList {
    constructor(head = null) {
        this.head = head

    }
    add(data) {
        const node = new Node(data)
    }
}


let list = new linkedList()