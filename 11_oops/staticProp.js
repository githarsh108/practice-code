class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is  ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const harsh = new User("harsh");
// console.log(harsh.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("useriphone", "i@phone.com")
console.log(iphone.logMe());
