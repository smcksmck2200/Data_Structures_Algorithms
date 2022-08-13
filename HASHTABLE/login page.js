//login page.js
​
let userId = "Hammy"
let userPassword = null
​
userIsMember(userId, userPassword)
​
​
//verify membership
​
function userIsMember(id, password) {
    if(userId && userPassword) {
        console.log("Verify is executed")
        return verify(true)
    } else {
        return verify(false)
    }
}
​
function verify(isMember) {
    //Challenge: try to do this with a switch statement
   return isMember? 'they are a member' : 'they are not, outta here';
}
​