// for of loops over here

const arr = [1,2,3,4,5];
for (const val of arr) {
    console.log(val);
}


const greeting  = "Hello World !"

for (const greet of greeting) {
    // console.log(greet);
    
}

//Maps

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States')
map.set('IN', 'India')
// console.log(map);


for (const [key, value] of map) {
    // console.log(key,' : -' , value);
    
}

const myObj = {
    'Game1' : 'NFS',
    'Game2' : 'POP'
}

// for (const [key,val] of myObj) {
//     console.log(key,val);
    
// }



