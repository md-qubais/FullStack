//falsy values
//Boolean('')
//Boolean(0)
//Boolean(-0)
//Boolean(Nan)
//Boolean(null)
//Boolean(undefined)
//Boolean(false)
//Everything other than falsy values return true
//Any value that is not in the list is converted to true,includeing object ,function, Array, Date,
//user-defined types and so on. Symbols are truthy values. Empty object and arrays are truthy values as well.

//comparision conversion
// types                win
//number vs string -> number
//number vs boolean -> number 
//number vs anything -> number
//string vs boolean -> boolean
//string + number -> string(only in +)
//primitive vs nonprimitive -> primitive

//The strict equality comparision algorithm

// The comparison x === y, where x and y are values, produces true or false.
// Such a comparison is performed as follows:

// If Type(x) is different from Type(y), return false.
// If Type(x) is Undefined, return true.
// If Type(x) is Null, return true.
// If Type(x) is Number, then
// If x is NaN, return false.
// If y is NaN, return false.
// If x is the same Number value as y, return true.
// If x is +0 and y is −0, return true.
// If x is −0 and y is +0, return true.
// Return false.
// If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions); otherwise, return false.
// If Type(x) is Boolean, return true if x and y are both true or both false; otherwise, return false.
// Return true if x and y refer to the same object. Otherwise, return false.

//the above is for only strict comparision refer es6 typecoercion notes for lose comparision and more

// freecodecamp ki article list functional programming