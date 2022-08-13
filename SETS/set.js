let mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(1)
mySet.add('String')
mySet.add('String')
mySet.add([1, 2, 3])
mySet.add([1, 2, 3])
console.log(mySet.has(1))//true
console.log(mySet.has(3))//false

console.log(mySet.size)
console.log(mySet)