const user = {
    username  :" harsh",
    price:999,
    welcomeMessage  :function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage();



console.log(this);

// function chai(){
//     let username ="harsh"
//     console.log(this);
    
// }
// chai();


const chai = () => {
    let username ="harsh"
    console.log(this.username);
}
// chai();


const add3 = (num1, num2) => {
    return num1 + num2;
}


const add4 = (num1, num2) => (num1 + num2);

const returnObj = (num1,num2) => ({username:"gaurav"})

console.log(returnObj());


console.log(add4(8,9));
