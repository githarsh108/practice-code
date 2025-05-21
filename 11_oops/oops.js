const user = {
    //object
    username: "harsh",
    logginCount : 9,
    isSignedIn : true,

    getUserDetails : function(){
        console.log("recived details from prompt");
        console.log(`username ${this.username}`);
        console.log(this);
        
    }
}
console.log(user);

console.log(user.username);
user.getUserDetails()
console.log(this);



//constructor function
const promiseOne = new Promise(function(resolve, reject){
    console.log("promise made");
    
})

const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this

}

const userOne = User("harsh",12,true);
console.log(userOne);
