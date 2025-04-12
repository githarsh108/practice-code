const myNums = [1,2,3];

const myTotal = myNums.reduce( (acc,curr) =>{
    console.log(acc, curr);
    
    return acc + curr;
}, 3 )
console.log(myTotal);


const shoppingCart = [
    {
        item : 'js',
        price: 3333
    }, 
    {
        item : 'mob',
        price: 399
    },
    {
        item : 'ds',
        price: 2299
    },
]

const sum = shoppingCart.reduce( (acc,item) =>acc + item.price,0 )
console.log(sum);
