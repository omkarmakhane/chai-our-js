//---- high coder Array loop---

// for of loop
const greeting ="hello world"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// map

const map = new Map()
map.set('IN', "india")
map.set('USA',"united state of america")
map.set('Fr', "france")

console.log(map);

for (const[key, value] of map) {
    // console.log(key,':-',value);
}

// const myObject ={
//     'game1' : 'nfs',
//     'game2' : 'spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);
// }

const myObject  ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swipt'
}

for (const key in myObject) {
           // console.log(key);
    }

    for (const key in myObject) {
        //console.log(`${key} shortcut is for ${myObject[key]}`);
    }

    const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    //console.log(programming[key]);    
}