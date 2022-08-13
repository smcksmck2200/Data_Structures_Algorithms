class Cat {
    constructor(name, owner, age = 0) {
        this.name = name
        this.owner = owner
        this.age = age
    }
    speak() {
        console.log('Meow meow')
    }
}
let charlie = new Cat('Charlie', 'Cory', 9)
let cosmo = new Cat('Cosmo', 'Kaia', 1)
let tommy = new Cat('Tommy', 'Devan', 4)
let barnabus = new Cat('Barnabus,', 'Cory')

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    getArea() {
        return this.height * this.width
    }
}
let myRect = new Rectangle(10, 5)
console.log(myRect.getArea())

//sayMyName(name) {
//console.log(name)
//}

console.log(charlie)
console.log(charlie.owner)
console.log(charlie.age) // 9
console.log(barnabus.age) // 0
tommy.speak()
cosmo.speak()
barnabus.speak()

//let charlie = {
// name: "Charlie",
// owner: "Cory",
// age: 9,
// color: "black and white"
//}
l //let cosmo = {
//name: "Cosmo",
//owner: "Kaia",
//age: 1,
//meow: `${this.name} is black and white`
//}
//let tommy = {
// name: "Tommy",
//owner: "Devan",
//age: 4,
// fightingStyle: "street"
//