const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter( (num) => num>4)
// console.log(newnums)

const new2 = mynums.filter((num) => {
    return num > 6
}) 
// console.log(new2)

// to do this in foreach
const new3 = []

mynums.forEach( (num) => {
    if(num >5) new3.push(num)
})
// console.log(new3)




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks = books.filter( (bk) => bk.publish >= 2000)

//   console.log(userbooks)


/**************** map **************/
const mynumber = [1,2,3,4,5,6,7,8,9,10]

let newnumber = mynumber.map( (num) => num+10)
// console.log(newnumber)

newnumber = mynumber
                    .map( (num) => num*10)
                    .map( (num) => num+3)
                    .filter( (num) => num < 100)
// console.log(newnumber)




/******************** Reduce ********************/

const arr = [1,2,3]

let myarr = arr.reduce(function (acc, curval) {
    return acc + curval
},0)

myarr = arr.reduce( (acc,curval) => acc+curval ,12)

// console.log(myarr)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totpric = shoppingCart.reduce((totprice , item ) => totprice+ item.price ,0)

// console.log(totpric)