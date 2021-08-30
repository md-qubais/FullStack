// Types of functions
// function statement
    //define

function fun(param){
    console.log("Hello",param)
}

//Functions in JS are first class citizen
    // functions are treated as a variable
    // we can assign function to a variable

let fnContainer = function(){
    console.log("I am function")
    console.log("I am also anonymous function because I do not have name myself")
}

// IIFE -> Immediately Invoked Function Expression

(function(){
    console.log("I will run on my own once")
})()


// Arrow function   ->  react ke liye , this ke liye bhi aasaani
const fn = num=> num * num

// first class citizen
// function are treated as a parameter
// 1. assignment -> fn expression
// 2. function can be passed as parameter
// 3. function can be returned from a function
