// First way

const coding = ["ruby","python","java","cpp","js"]

const values = coding.forEach((item)=> {
    // console.log(item);
    //return item
})
//console.log(values);

// Second way

const myNums =[1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num) => {
  //  return num > 4
//})

// console.log(newNums);

// third way

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        //newNums.push(num)
    }
})
// console.log(newNums);

const books =[
    {title: 'Book one', genre: 'fiction', publish: 1981,
        edition: 2004,
    },
    {title: 'Book two', genre: 'non-fiction', publish: 1992,
        edition: 2004,
    },
    {title: 'Book three', genre: 'history', publish: 1989,
        edition: 2004,
    },
    {title: 'Book four', genre: 'non-fiction', publish: 2009,
        edition: 2004,
    },
    {title: 'Book five', genre: 'science', publish: 1987,
        edition: 2004,
    },
    {title: 'Book six', genre: 'fiction', publish: 1986,
        edition: 2004,
    },
    {title: 'Book seven', genre: 'history', publish: 2011,
        edition: 2004,
    },
    {title: 'Book eaght', genre: 'science', publish: 1981,
        edition: 2004,
    },
    
];

// const userBooks = books.filter((bk) => bk.genre === 'history')
// console.log(userBooks);

let userBooks = books.filter((bk) => bk.genre === 'history')
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'history'
})
console.log(userBooks);