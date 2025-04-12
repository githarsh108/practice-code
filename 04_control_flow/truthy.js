const email = []
if (email) {
    console.log(`user email recived`);
    
}
else{
    console.log(`not recieved`);
}



//falsy value

// false, 0, -0, BigInt, 0n,"",null, undefined,NaN

//truthy values

//"0", "false", " ", [], {}, function(){} , 


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
    
}

// Nullish Coalescing Operator

val1 = null ?? 5 ?? 10
console.log(val1);


//terinary operator

// condition ? true : false;

const price = 100;
price > 100 ? console.log(`ok`) : console.log(`becho`);

