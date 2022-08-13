class Node {
    constructor(data) {
         this.data = data 
         this.next = null
    }
}
​
class Hash_Table {
    constructor() {
        this.table = new Array(20); 
        this.size = 0
    }
​
    hash(key) {
        let hash = 0 
        for(let i = 0; i < key.length; i++) {
            console.log(key[i])
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }
​
    setItem(key , value) {
        let animal = {}
        animal[key] = value
​
        let index = this.hash(key)
        let newValue = new Node(animal)
        if(this.table[index]){
           let list = this.table[index]
           list.insert(newValue)
        } else {
            //create new bucket
            this.table[index] = new Linked_List(newValue) 
        }
    }
​
    getItem(key) {
        let index = this.hash(key)
        let value = this.table[index].search(key)
        return value
    }
​
    deleteKey(key) {
        let index = this.hash(key)
        this.table[index] = null 
    }
}
​
let table = new Hash_Table
table.setItem("626", "German Sheppard")
table.setItem("657", "Poodle")
table.setItem("678", "Pitt bull")
table.setItem("789", "Labs")
table.setItem("687", "Huskey")
​
table.getItem("687")