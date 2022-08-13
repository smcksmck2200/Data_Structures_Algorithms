
//login page.js

let userId = null
let userPassword = null

userIsMember(userId, userPassword)

// verify membership
function userIsMember(userId, userPassword) {
    if (userId && userPassword) {
        //verify
        console.log("Verify is executed")

    } else {
        return false;
    }
}
function verify() {
    console.log("They're cool")
}