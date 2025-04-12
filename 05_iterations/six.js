const coding = ['js', 'rb', 'cpp'];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5];

let newNum = myNums.filter( (num) => num > 2 )

let newNum2 = myNums.filter( (num) => {
    num > 2;
})


let newNum3 = myNums.filter( (num) => {
    return num > 2;
})

console.log(newNum);


const newNums4 = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums4.push(num);
    }
})
console.log(newNums4);


