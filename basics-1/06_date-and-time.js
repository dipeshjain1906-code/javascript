let mydate = new Date() //current date
// console.log(mydate.toString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toTimeString())

let newdate = new Date(2023,0,23,5,3,13)
// console.log(newdate.toLocaleString())

let createddate = new Date("01-14-2023")
console.log()

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})