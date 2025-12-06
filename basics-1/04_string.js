//memory -> stack and heap
// stack (Primitive) , heap(non-Primitive)

// primitive::
// Number
// String
// Boolean
// Null
// Undefined
// BigInt
// Symbol

// non-primitive::
// Object
// Array
// Function
// Date
// RegExp
// Map
// Set
// WeakMap
// WeakSet

/******************* Strings ********************/
const name = "Dipesh"
const surname = "Jain"
const count = 17
//instead of 
console.log(name + surname + " And count is "+ count )
//use
console.log(`Hello my name is ${name + surname} and my count is ${count} bye`)

const Str ="dipesh";

// .length -> 
Str.toUpperCase(); // all to uppercase
Str.charAt(5); // returns the char at index 5 
Str.indexOf('d') // returns the index of 'd'
const newstr = Str.substring(0,4) // value from 0 to 3 index goes
const newstr2 = Str.slice(-8,4) // can also give -ve values else same as substring 

Str.trim() // removes all the sapces in start and end in a string

const str = "  my name is Dipesh   "
// console.log(str)

str.replace('name', 'brand') //replace name with brand

str.includes("Dipesh") // boolean -> is str includes Dipesh or not