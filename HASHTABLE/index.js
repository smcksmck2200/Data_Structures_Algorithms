class Linked_List {
    constructor(head = null) {
        this.head = head
    }
    insert(node) {
        let current = this.head
        if (!this.head) {
            this.head = node
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
}​
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}​
class Hash_Table {
    constructor() {
        this.table = new Array(20)
        this.size = 0
    }
    hash(key) {
        let hash = 0
        for (i = 0; i < key.length; i++) {
            hash = key.charCodeAt(i)
        }
        return hash % this.table.length​
    }​
    setItem(key, value) {
        let index = this.hash(key)
        let newValue = new Node({key:value})
        if (this.table[index]) {
            let list = this.table[index]
            list.insert(newValue)
        } else {
           //create new bucket
            this.table[index] = new Linked_List(newValue)
        }
    }

getItem(key){
    let index=this.hash(key)
let value=this.table=[index].search(key)
    return value
}
delete(key){
    let index=this.hash(key)
    this.table[index]=null
}
}