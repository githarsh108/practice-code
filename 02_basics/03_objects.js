// singleton  

// object literals - object ko declare krne ka tarika

// Object.create()

const mySym = Symbol("key1");


const JsUser = {
    name : "Harsh",
    age : 22,
    [mySym]:"Hello Symbol",
    location : "Ranchi",
    gmail : "harsh@gmail.com",
    isLoggedIn : false,
} 
//ways of accessing objects
console.log(JsUser.gmail) 
console.log(JsUser["gmail"]);

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

