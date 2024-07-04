// class base syntax

class user{
    constructor(email, password){
        this.email = email;
        this.password = this.password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}omkar`
    }

    set password(value){
        this._password = value
    }
}

const omkar = new user("o@google.com","488")
console.log(omkar.password);