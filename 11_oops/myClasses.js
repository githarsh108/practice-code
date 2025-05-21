// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return ` ${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("harsh", "harsh@h.com", 123)

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene
function User(username, password, email){
    this.username = username
    this.password = password
    this.email = email
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const tea = new User("chai", "chai.com", 123)
console.log(tea.encryptPassword());
