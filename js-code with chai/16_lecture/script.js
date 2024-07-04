
//object literal
// const mySym = Symbol("key1")

// const jsUser = {
//     name:"omkar",
//     "full name" : "omkar makhan",
//     age:18,
//     email:"omkarmakhane@gmail.com",
//     isLogggedIn:false,
//     lastLoggedinDays:["monnday","saturday"]
// }

// console.log(jsUser.email);//bad way to access
// console.log(jsUser["email"]); good way to access
// console.log(jsUser["full name"]);y

// jsUser.email = "omkar@google.com"
// // console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email ="omkar@michrosoft.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("hello js user");
// }

// jsUser.greetingTwo =function(){
//     console.log(`hello js user, ${namaste}`);
// }


                                                            // lecture 17


// Const tinderUser = new object()
const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.name ="omkar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const ragularUser = {
    email:"google.com",
    fullname:{
        userfullname:{
            firstname:"omkar",
            lastname:"makhane"
        }
    }
}


// console.log(ragularUser.fullname.userfullname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}


// const obj3 ={obj1,obj2}
// const obj3 = object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

User[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(object.values(tinderUser));
// console.log(object.entries(tinderUser));

// console.log(tinderUser.hasOwnproperty('isLoggedIn'));

                                                                // lecture 18


 const course = {
    coursename:"js in hindi",
    price:"8888",
    courseInstructor:"omkar"
 }

 const {courseInstructor} =course
//  console.log(courseInstructor);

 const {courseInstructor:Instructor}=course
//  console.log(Instructor);