//primitive and non primitive - types of data

//primitve data types - these are call by value

// 7 types : string,number,boolean,null, undefined,symbol, Bigint

const score = 100;
const scoreValue = 0.3
const isloggedin = true
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);




//reference type or non primitive data types

// arrays, objects, functions

const heros = ['shaktiman', 'naagraj']

let myObj = {
    name:"harsh",
    age:18
}

const myFun = function(){
    console.log("hell o");
    
}

//memories

//two tpyes of memories  stack(primitive) and 
// heap(non primitive)


let myName = "harsh"

let anotherName = myName
anothername = "hello"