const user ={
    username:"omkar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user deateals from the database");
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails);
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLoggedIn

    return this
}

const userOne = User("hitesh",12, true)

console.log(userOne.constructor);
