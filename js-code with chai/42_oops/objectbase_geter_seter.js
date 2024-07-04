const User = {
    _email: 'o@gmail.com',
    _password: "ans",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const om = Object.create(User) 
console.log(om.email);