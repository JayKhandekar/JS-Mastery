// Primitive

// 7 types : String, Number, Boolean, Null, Undefinied, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmai;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

//const bigNumber = 10983798571873987n


//Javascript is Dynamically-types language

//Regerence (Non primitive)

//Array , Objects, Functions



const heros = ["shaktiman", "naagraj", "doga"];// array

let myObj = {
    name : "jay",
    age : 20,

} // Object

const myFunction= function(){
    console.log("Hello world");
}// Function


// console.log(typeof bigNumber  );


//+++++++++++++Memory++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "JayKhandekar"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne