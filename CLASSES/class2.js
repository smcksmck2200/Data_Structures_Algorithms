class bankAccount {
    constructor(a, b) {
        this.accountHolder = a
        this.balance = b
    }

    deposit(amount) {
        // this.balance = this.balance + amount
        this.balance += amount
    }
    withdraw(amount) {
        //if the balance is below 0, charge me 5
        if (this.balance < 0) {
            this.balance -= 5
        }
        this.balance -= amount
    }
    displayTotal() {
        console.log(
            `This account belong to ${this.accountHolder} and contains ${this.balance}`
        )
    }
}

let myChecking = new bankAccount('Cory', 100)
myChecking.deposit(100)
myChecking.withdraw(11)
myChecking.displayTotal()