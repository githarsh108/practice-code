class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

}

const harsh = new User("Harsh@h", "abc");
console.log(harsh.password);
console.log(harsh.email);
