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



// functions with objectsss

//rest operator
function calculateCartPrice(val1, val2,...num1){
    return num1;
}

// console.log(val1);



console.log(calculateCartPrice(2000,1000,3000,2000));


const user = {
    username : "jaguar black eau di toilette",
    price : "2000"
}

function handleObject(anyObj){
    console.log(`user name is ${anyObj.username} and price is ${anyObj.price}`);
    
}

// handleObject(user)

handleObject({
    username:"saming",
    price: 499
})


const myArr = [200,400,600,1000];

function returnSecondVal(getArr){
    return getArr[0]
}

// console.log(returnSecondVal(myArr));


console.log(returnSecondVal([230,400,500]));

