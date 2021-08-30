//JS does not support function overloading

function fakeFn(temp){
    console.log(temp)
    console.log(arguments)//->gives whatever is passed in arguments as parameters
}

fakeFn(1,2,3);
fakeFn("Hameed")

// array methods -> we don't have arrays in javascript
// arr.push -> adds items to the end
// arr.pop -> extracts an item from the end
// arr.shift -> extracts an item from the beginning
// arr.unshift(...items) -> adds items to the beginning
// arr.splice(idx,digitCount)->deletes from idx till digitcount
// arr.slice(startIdx,endIdx)->returns a new array in which si to ei(ei is exclusive) elements are missing ,it is an immutable function(functinal programming)

