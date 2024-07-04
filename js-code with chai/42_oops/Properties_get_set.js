// function base geter and seter syntax 

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email = email
        },

        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password = password
        },

        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@email.com", "chai")
console.log(chai.email);