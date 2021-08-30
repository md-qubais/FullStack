//callback vs promises
//while requesting any function we pass callback stating that whenever you have completed your work you
//call this cb function ,here the problem is we don't have control on calling callbacks , the third party may 
//or may not call the cb function or it may call it more than one time to resolve this they have introduced 
//promises, which resolve the issue of taking control over callback functions

//Promise
//--------
//promise is a token or identifier which represents the task that is going to complete in future
//If the task which is going to complete in future is successful then it will call resolve other wise reject
//Promise after resolving comes to the microtask queue and callbacks comes to the IO/Timer queue
//priority of microtask queue is higher than other queues due to which promises comes is faster than 
//callbacks
//promise resolve ya reject ek hi baar hota jiski wajah se agar third party ek se zyaad baar bhi call kri 
//to bhi wo ek hi baar .then() chalta

