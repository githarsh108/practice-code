// let a = 20;
// const b = 19;
// var c = 10;
// var c = 400;
let a = 3400;
if(true){
    let a = 20;
    const b = 19;
    // var c = 10;
    console.log(a);
    
}






// console.log(a);
// console.log(b);
console.log(a);


function one(){
    const username = "harsh"

    function two(){
        const website = "www.youtube.com"
        console.log(username);
    }
    // console.log(website);
    // two();
}
one();

if(true){
    const username = "harsh"

    if(username === "harsh"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username)

// ======================interesting==============

console.log(addOne(5));


function addOne(value){
    return value + 1;
}

// addOne(5);

const addTwo = function(value){
    return value+2;
}

//you can access addOne before declaring it
//but you can't access addTwo as it is declared in a constant value


console.log(addTwo(5));