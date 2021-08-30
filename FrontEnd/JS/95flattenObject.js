//Flatten Object
let obj = {
  name: {
    firstName: "Abdul",
    lastName: "Hameed",
  },
  age: 22,
  friends: [
    { name1: { firstName: "Mohammed", lastName: "Qubais" } },
    { name2: { firstName: "Abdul", lastName: "Imad" } },
  ],
  a :[1,2,3]
};

function flatten(obj){
    let result = {};
    for(let i in obj){
        if(typeof obj[i] == "object"){
            let smallObj = flatten(obj[i]);
            for(let j in smallObj){
                result[i+"."+j] = smallObj[j]
            }
            
        }else{
            result[i] = obj[i]
        }
    }
    return result
}
let ans = flatten(obj)
// console.log(ans)
console.log(obj)


// function flattenObject(obj){
//     for(let i in obj){
//         // console.log(obj[i])
//         if(typeof obj[i] == "object"){
//             // console.log("object",obj[i])
//             let smallObj = flattenObject(obj[i]);
//             for(let j in smallObj){
//                 obj[i+"."+j] = smallObj[j]
//             }
//             delete obj[i]
//         }
//     }
//     return obj
// }
// flattenObject(obj)
// console.log(obj)

//Deep copy karo