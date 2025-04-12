const myNums = [1,2,3,4,5,6,7,8];

const nums = myNums.map( (num) =>num + 10 )
console.log(nums);

//chaining

const newNums = myNums
                .map( (num) => num * 10 )  
                .map( (num) => num + 4)
                .filter( (nums) => nums >= 40)
console.log(newNums);


