//singleton or constructor decleration

// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Harish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "harsh",
            lastname : "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2 : "b"}
const obj2 = { 3: "a", 4 : "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign( {} ,obj1, obj2)
const objm = {...obj1, ...obj2}
console.log(obj3);
console.log(objm);

const users = [
    {
        id : 1,
        email : "h@mail",
    },
    {
        id : 2,
        email : "g@mail"
    }
]

users[1].email
console.log(tinderUser);


//converted output will be in arrays
console.log(Object.keys(tinderUser));

