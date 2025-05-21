class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);

        
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`added new course by ${this.username}`);
        
    }
}

const chai = new Teacher("rohit", "rr@.com", "123")
chai.logMe();
chai.addCourse()
const masalaChai = new User('masalaChai');
masalaChai.logMe()