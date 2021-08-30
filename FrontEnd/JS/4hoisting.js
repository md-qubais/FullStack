// Interview question 
// function real(){
//     console.log("I am real,Always run me")
// }

// function real(){
//     console.log("No Iam the real one")
// }
// real();
// function real(){
//     console.log("You both are wasted")
// }

//Same interview question with a little bit change

// function real(){
//     console.log("I am real,Always run me")
// }

// function real(){
//     console.log("No Iam the real one")
// }

// function real(){
    //     console.log("You both are wasted")
    // }
// real();
    
//Interview Question

console.log(varName)//->undefined
var varName;
console.log(varName);//->undefined
varName = "captain America"
console.log(varName);//->captain america
fn()
function fn(){
    console.log("hello from fn")//->hello from fn
}
fn();
fnContainer();//->error --> fnContainer is not a function(because it is now undefined)
var fnContainer = function (){
    console.log("I am an expression")
}
fnContainer();//-> I am an expression
