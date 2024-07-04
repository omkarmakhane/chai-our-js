const user = {
    username:"omkar",
    price:999,

    welcomeMessage:function(){
        // console.log(`${this.username} ,welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

// const chai =function (){
//     let username = "omkar"
//     console.log(this.username);
// }

const chai = ()=>{
    let username = "omkar"
    // console.log(this);
}

// chai()

// const addtwo =(num1, num2) => {
//     return num1+num2
// }

// console.log(addtwo(55,88))

// const addtwo =(num1, num2) => (num1 + num2)


// console.log(addtwo(55,88))


//-------- IIFE --------

//imediately invoked function expressions (IIFE)

// //named IIFE
// (function chai(){
//     console.log(`DB conected`);
// })();

// //without name IIFE
// ((name)=>{
//     console.log(`without named DB conected ${name}`);
// })('hitesh')

