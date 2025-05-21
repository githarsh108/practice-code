function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email', {
        get : function(){
            this._email=email
        },
        set : function(value){
            this.email = value
        }
    })
}