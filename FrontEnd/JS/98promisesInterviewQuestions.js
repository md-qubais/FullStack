// `````````````````````````````````````````````````````````````````````````````````````````````````
//1.Question
// let p = new Promise((resolve, reject) => {
//     reject(new Error("some error"))
//     setTimeout(() => {
//         reject(new Error("some error"))
//     }, 1000);
//     reject(new Error("some error"))
// });

// p.then(null, function (err) { //-> then take two paramters first scb(succes call back) second fcb(failure call back) we can directly write catch waala kaam in then by using this
//   console.log(1);
//   console.log(err);
// }).catch(function (err) {
//     console.log(2)
//     console.log(err)
// });

// p.then(null,fcb) //-> it is equal to p.catch()

//````````````````````````````````````````````````````````````````````````````````````````````````
//2. Question
// console.log(1)
// setTimeout(() => {
//  console.log(3)   
// });
// console.log(4)
// setTimeout(() => {
//  console.log(2)   
// });

// Promise.resolve().then(()=>{
//     console.log(5)
// })
// console.log(6)
//```````````````````````````````````````````````````````````````````````````````````````````````````
//3.Question
function resolveAfterNSeconds(n,x){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(x)
        }, n);
    })
}

(function(){
    let a = resolveAfterNSeconds(1000,1)
    let currentDate = new Date()
    console.log(a,currentDate.getSeconds())//on which second a will be printed /-> 0th second
    a.then(async function(x){
        currentDate = new Date()
        console.log(x,currentDate.getSeconds())//on which second x will be printed /->1st second
        let y = await resolveAfterNSeconds(2000,2)
        currentDate = new Date()
        console.log(y,currentDate.getSeconds())//on which second y will be printed /->3rd second
        let z = await resolveAfterNSeconds(1000,3)
        currentDate = new Date()
        console.log(z,currentDate.getSeconds())//on which second z will be printed /->4th second
        let p =  resolveAfterNSeconds(2000,4)
        currentDate = new Date()
        console.log(p,currentDate.getSeconds())//on which second p will be printed /->4th second
        let q =  resolveAfterNSeconds(1000,5)
        currentDate = new Date()
        console.log(q,currentDate.getSeconds())//on which second q will be printed /->4th second
        
        console.log(x + y + z + await p + await q)//output on which second ->6th second
        currentDate= new Date()
        console.log("on which second this line will run",currentDate.getSeconds())//output on which second ->6th second
        //the above line will be executed at 6th second because p and q promises are running parallel
    })
})()