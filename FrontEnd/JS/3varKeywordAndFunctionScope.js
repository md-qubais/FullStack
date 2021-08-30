//hoisting
console.log(varName)
var varName = 10;
console.log(varName)

var varName;//-> redeclare --> puraani value hi daaldeta isme

console.log(varName)

//var is function scope

function fun(){
    console.log(a);
    var a = 10;
    if(a == 10){
        var a;
        console.log(a)
    }
    console.log(a);
}
//console.log(a);//-> throws an error a is not defined
fun();

//Interview question

var a = 10;
console.log("line number 27",a)//->10
function fn(){
    console.log("line number 29",a)//->undefined
    var a = 30;
    a++;
    console.log("line number 32",a);//->31
    if(a){
        var a = 30;
        a++;
        console.log("line number 36",a)//-> 31
    }
    console.log("line number 38",a)//->31
}
fn();

//Interview question
//let is block scope

let letfruit = "orange"
var varfruit = "orange"
console.log(letfruit,varfruit)//->orange orange
{
    let letfruit = "apple"
    var varfruit = "apple"
    console.log(letfruit,varfruit)//->apple apple
}
console.log(letfruit,varfruit)//->orange apple