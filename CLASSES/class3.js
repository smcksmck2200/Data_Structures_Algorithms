class Cat {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log('meow')
    }
    beHappy() {
        console.log('purrrrr')
    }
}
class Person {
    constructor(name, cat) {
        this.name = name
        this.cat = cat

    }
}
let charlie = new Cat('Charlie', 'Cory', 9)
charlie.speak()
charlie.beHappy()

let cory = new Person('Cory', charlie)
cory.cat.speak()