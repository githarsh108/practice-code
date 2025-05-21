function mulByFive(num){
    return num*5;
}

mulByFive(7).power = 2
console.log(mulByFive(7));
console.log(mulByFive.power);
console.log(mulByFive.prototype);



function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("harsh ki chai",20)
const tea = new createUser("tea", 200);

chai.printMe();