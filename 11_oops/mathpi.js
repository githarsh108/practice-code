const val = Object.getOwnPropertyDescriptor(Math, "PI");


console.log(val);
val.writable = true;
val.value = 4;
console.log(val);
console.log(Math.PI);



const newchai = {
    name : 'chaichai',
    price : 150,
    isAvailiable : true
}
console.log(newchai);
console.log(Object.getOwnPropertyDescriptor(newchai, "name"));

// Object.defineProperty(newchai, 'name', {
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(newchai, "name"));

for (let [key, value] of Object.entries(newchai)) {
    console.log(`${key} : ${value}`);
    
}