// dates


let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23)
let my2CreatedDate = new Date(2023, 0, 23,5,4)
console.log(my2CreatedDate.toLocaleDateString());

console.log(myCreatedDate.toLocaleString());

//time stamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.);NN






