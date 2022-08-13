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

    reverseIterative(node) {
        //create our pointers
        //why would geek for geeks not default to reversin from the head of our linked list?
        let current = node
        let prev = null
        let next = null
            //set up the loop to traverse the list 
        while (current != null) {
            //assign our pointers
            //assigns next so that we can make our new current the next node in the list. 
            next = current.next
                //flips the node
            current.next = prev
                //now the current node is the previous node for the next cycle which makes sense because we need to flip the list. 
            prev = current
                //jumps to the next node in the linked list so that we can continue the algorithm
            current = next

            console.log("current list", list)
        }

        // then after current is null we jump down here and return the prev which is the last node that we alterted in our while loop aka our new head.
        //we are returning it as the new node, why? 
        //returning prev will also give us access to the entire linked list because of the poitners in that node object. 
        node = prev
        return node
    }

    reverseRecursive(head) {
        if (head == null || head.next == null) {
            return head
        }

        let rest = this.reverseRecursive(head.next);
        head.next.next = head;
        console.log(head.next.next)

        /* tricky step -- see the diagram */
        head.next = null;

        /* fix the head pointer */
        return rest;
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// let list = new LinkedList()

// list.push(1)
// list.push(2)
// list.push(3)

// // list.reverseIterative(list.head) 
// list.reverseRecursive(list.head)


//Example of interative search of array. 
function iterateContains(array, value) {
    for (i = 0; i <= array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
}

//Example of recursive search of array. 
function recursiveContains(array, value, index) {
    let count = index;
    if (count <= array.length) {
        if (array[count] === value) {
            console.log(true)
            return true
        } else {
            count++
            recursiveContains(array, value, count)
        }
    } else {
        console.log("must pass in valid array index")
    }
}

recursiveContains([1, 2, 3, 4, 5, 6, 7], 5, 0)