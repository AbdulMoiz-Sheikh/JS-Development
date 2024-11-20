// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.22;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('001')
const anotherId = Symbol ("BSE")

console.log(id === anotherId);

const bigNumber = 23456787887443n



// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["Salman Khan", "Sharukh khan", "Abdul Moiz"];
let myObj = {
    name: "Sheikh",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}