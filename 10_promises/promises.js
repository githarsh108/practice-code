//generally prommises are consumed rather than being used


//creation of a promise
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //database calls
    //cryptography tasks
    //network calls
    setTimeout(function(){
        console.log("async task completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed ")

})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 resolved or consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "chai", email:"chaicode.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : " harsh", email : "hello.com"})
        }
        else {
            reject('error  : something went wrong')
        }
    },1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
    
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
})
.finally(() => console.log("The promise is either resolved or rejected"))

// console.log(username);




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : " javascript", email : "hello.com"})
        }
        else {
            reject('error  : fetch js went wrong')
        }
    },1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
    
}
consumePromiseFive();


async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/githarsh108')
        console.log(response);
        
        const data = await response.json()
        console.log(data);
        
    }
    catch(err){
        console.log(err);
    }
    
}

// getAllUsers();
fetch('https://api.github.com/users/githarsh108')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err) => console.log(err))