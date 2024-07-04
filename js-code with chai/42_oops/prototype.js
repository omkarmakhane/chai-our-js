// let myName ="hitesh   "
// let mychallenge = "chai  "
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is preseent in all objects`);
}

Object.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}
//heroPower.hitesh() 
// myHeros.hitesh()
// myHeros.heyHitesh()

// inheritance

const user ={
    name: "chai",
    Email:"chai@gamil.com"
}

const teacher ={
    makeVideo: true
}

const teachingSupport ={
    isAvailable: true
}

const TASupport = {
    makeAssignments:'js assignments',
    fullTime: true,
    __proto__ :teachingSupport
}

teacher.__proto__ =user 

// modern syntax of writing inheritance

Object.setPrototypeOf(teachingSupport,teacher )

let anotherUsername = "chaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()