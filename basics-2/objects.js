//objrct creation -> 1)literal 2) Constructor

//constructor is a singleton
/* object creation through */ 
// Object.create()

//creation by literal

const mykey1 = Symbol("key1")
const JsUser = {
    name: "Dipesh",
    "fullname" : "Dipesh Jain",
    age: 20,
    location: "Delhi",
    /* for symbol */
    [mykey1] : "this symbol"
}

console.log(JsUser.location)
console.log(JsUser["location"]) // mainly used for->
console.log(JsUser["fullname"]) // can only be accessed by this method

/* we can also lock an object to be changed in future */
// Object.freeze(JsUser)

//treat functions as variables

JsUser.tempfunc = function(){
    console.log("Hello Users")
}
 
console.log(JsUser.tempfunc())

/////////////////////////////////////////////////////////////////////////

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


const navbar = ({company}) => {
    
}


/* API */

// this is sample json file return by an api ->
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }     

[
    {},
    {},
    {}
]