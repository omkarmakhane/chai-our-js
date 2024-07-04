//Array parts 2

const marvel_heros =["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);     

// const All_new_heros =[...marvel_heros,...dc_heros]
// console.log(All_new_heros); 

const another_Array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_Array.flat(Infinity)

// console.log(real_another_Array);

// console.log(Array.isArray("omkar"));
// console.log(Array.from("omkar"));
// console.log(Array.from({name:"omkar"}));

let score1 =100
let score2 =200

console.log(Array.of(score1,score2));