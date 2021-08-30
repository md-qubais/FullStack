console.log(varName) //-> undefined
var varName = 10;
console.log(varName)//-> 10

function c(){
    console.log(varName) // -> 10 lexical scope function definition ke baahar ka variable ku refer karta agara variable current global execution mein nahi hai to 
}

function fn(){
    console.log(varName)//->undefined kyunki iska khud ka variable varName hai isliye closure se nahi uthaara uney
    var varName = 20;
    console.log(varName)//->20
    function b(){
        console.log(varName)//->20 (scope chaining) -> iska khud ka variable nahi varName to closure se uthaara
    }b()
    c()
}

fn();

//scope -> area where fn or variable can be found/accessed

// ->scope chaining boleto -> agar variable function ke andar nahi mila to uske baahar waala execution context mein dekhta uney agar waha bhi nahi mila to aur uppar aisich global execution context tak
//lexical scope matlab uney function definition ke baahar check karta function call ke baahar nahi