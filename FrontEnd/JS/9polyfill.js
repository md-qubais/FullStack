// //polyfill refers to implementation of a feature
// //if it doesn't exist in client machine / software already

// Object.prototype.forEach=function(cb){
//     for(let key in this){
//         if(this.hasOwnProperty(key))//-> iterate over all enumerable properties of javascriopt object -> enumerable properties are those properties whose internal enumerable flag is set to true
//         {cb(this[key])}
//     }
// }
// let obj = {
//     firstnName:"Abdul",
//     lastName : "Hameed",
//     age:22
// }
// function cb(elem){
//     console.log(elem)
// }
// obj.forEach(cb)

//our own implementation of array.filter -> array.myFilter

Array.prototype.myFilter = function (cb) {
    let filteredArr = []
    this.forEach((item)=>{
        if(cb(item)){
            filteredArr.push(item)
        }
    })
    return filteredArr
}

let arr = [1,2,3,4,5,6]

let filteredarr = arr.myFilter((elem)=>{
    return elem%2 !== 0
});
console.log(filteredarr)













