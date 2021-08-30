//Temporal Dead Zone
//Block
//Variable shadowing
//Var / let / const

//Temporal Dead Zone is a safety measure to not let user access variable before declaration
//->area before declaration of a variable

// console.log(a);//->error can't use (a) before initialization(temporal dead zone)
// let a  = 10;

//var -> redeclare , reassign ,
//let -> reassign ,temporal dead zone
//const -> no changes ,temporal dead zone

// Block
//{whatever comes inside this}
//let and const are block scoped

let fruit = "apple"
console.log(fruit)
{
    //console.log(fruit)//error -> temporal dead zone (can't use variable before initialization)
    let fruit;
    console.log(fruit)//-> undefined
    fruit = "orange"
    {
        console.log(fruit)//->orange -> scope chaining
    }
    console.log(fruit)//->orange
}
console.log(fruit)//->apple

//Variable shadowing

//jab block ke andar ka variable declare karrai aur wo variable baahar bhi hai aur andar ka variable assign to andar ka variable shadow hora wo

//illegal shadowing
// baahar same variable name ko let aur andar var derai to illegal shadowing hai wo, error deta uney
// baahar var aur andar let diye to chaljaata

const arr = [1,2,3,4,5]
arr.push(6)//-> const diye phir bhi add karsakre array mein to question hai ki (Kya javascript mein arrays hote hai)
console.log(arr)