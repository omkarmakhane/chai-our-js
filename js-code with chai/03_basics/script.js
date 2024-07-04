function saymyname(){
    console.log("hello");
    console.log("o");
    console.log("m");
    console.log("k");
    console.log("a");
    console.log("r");
}

// saymyname()

function addTwoNumbers(number1, number2){
    // console.log(number1+number2);
    // let result = number1+number2
    // return result
    return number1+number2
}

// addTwoNumbers(55, 99)

const result = addTwoNumbers(3,8)
// console.log("result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `$}{username}just logged in`
}

// console.log(loginUserMessage("omkar"));
// console.log(loginUserMessage));

//------------------------------------------------------------------

function calculatecarprice( val1,val2, ...num1){
    return num1
}

// console.log(calculatecarprice(200,400,500,200000));

const user ={
    username:"omkar",
    price:199
}

function handelobjeect(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

// handelobjeect(user)

// handelobjeect({
//     username:"omkar",
//     price:199
// })

const mynewarray =[200, 400, 100, 600]

function returnsevondvalue(getArray){
    return getArray[1]
}

// console.log(returnsevondvalue(mynewarray));
// console.log(returnsevondvalue([200,400,5000]));

//--------------------------------------------

// var c =300

let a =300
if(true) {
    let a=10
    const b=20
    // var c=30
}

// console.log(a);

//----------------------------------------

function one(){
    const username ="omkar"

    function two(){
        const website ="youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username ="makhane"

    if (username ==="makhane") {
        const website =" youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++ hosting topic +++++//

//this is working becouse there is no variable declaration
// console.log(addone(6))
function addone(num) {
    return num+1
}

//this is not working befor function becose of variable declaration
const addtwo =function(num){
    return num + 7
}
// console.log(addtwo(5))



