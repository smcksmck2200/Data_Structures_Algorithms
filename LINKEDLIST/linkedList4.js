class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    push(data) {
        let node = new Node(data)
        let current

        if (this.head == null) {
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

    delete(data) {
        let current = this.head
        while (current != null) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next
                } else {
                    this.head = this.head.next
                    this.head.prev = null
                }
                return current.data
            }
            current = current.next
        }
        return "not found"
    }
}