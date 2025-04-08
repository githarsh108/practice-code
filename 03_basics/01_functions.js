function sayMyName(){
    console.log("harsh");
    
}

sayMyName();


function addNumbers(num1, num2){
    let res = num1 + num2;
    return res;
}

const res = addNumbers(10,20)
console.log("result : ", res);


function loginUserMessage(username){
    if(!username){
        console.log("enter a username");
        return ;
        
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("harsh"))