class linkedList {
    constructor(head = null) {
        this.head = head
    }

    push(data) {
        let node = new Node(data)
        let current
        if (this.head = null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            return
        }
    }




}