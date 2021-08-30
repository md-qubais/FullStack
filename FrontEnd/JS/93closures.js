// function outer() {
//   let a = 10;
//   console.log("In outer");
//   return function (b) {
//     console.log(a * b);
//   };
// }

// let innerRef = outer();
// console.log("between");
// innerRef(20);

// function fn(){
//     let nArr = [];
//     for(var i = 0;  < 3; ii++){//var ka output 3 3 3 hai/let ka output 0 1 2 hai
//         nArr.push(function(){
//             console.log(i)
//         })
//     }
//     return nArr
// }

// let nArr = fn()
// nArr[0]()
// nArr[1]()
// nArr[2]()

// to let function prints 0 1 2 we have two methods 1using bind and 2using let and another method is to call it there itself using IIFE

// 1 using bind
// function fn(){
//     let nArr = [];
//     for(var i = 0; i < 3; i++){
//         nArr.push(function(){
//             console.log(this)
//         }.bind(i))//it wraps primitive to object
//     }
//     return nArr
// }

// let nArr = fn()
// nArr[0]()
// nArr[1]()
// nArr[2]()

// 2 Using let 

// function fn(){
//     let nArr = [];
//     for(let i = 0; i < 3; i++){//var ka output 3 3 3 hai/let ka output 0 1 2 hai
//         nArr.push(function(){
//             console.log(i)
//         })
//     }
//     return nArr
// }

// let nArr = fn()
// nArr[0]()
// nArr[1]()
// nArr[2]()

//Interview Question

// for(var i = 0; i < 3; i++){//var -> 3 3 3 and let -> 0 1 2 (scoping ki wajah se ) let har baar declare hora var har baar override karra value ku
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

//printing 0 1 2 using bind which takes first parameter for this and second parameter as argument to pass to the function
// for(var i = 0; i < 3; i++){//var -> 3 3 3 and let -> 0 1 2 (scoping ki wajah se ) let har baar declare hora var har baar override karra value ku
//     setTimeout(function(i) {
//         console.log(i)
//     }.bind(null,i), 1000);
// }
