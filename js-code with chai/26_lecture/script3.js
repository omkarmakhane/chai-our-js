const useremail =[]
if (useremail) {
   console.log("Got user Email");
}else{
   console.log("don't have user Email");
}

//false values :- false, 0, -0, Bigint 0n, "", null, undefined, NaN

//true values :- "0", 'false', " ", [], {},function(){}

// if (useremail.length===0) {
//     console.log("array is empty");
// }

// const emptyObj ={}
// if (Object.key(emptyObj).length===0) {
//     console.log("Object is empty");
// }

//nullish  Coalescing Operator (??):null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);

//  Terniary operator

// condition ? true : false

// const iceTeaprice =100
// iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");
