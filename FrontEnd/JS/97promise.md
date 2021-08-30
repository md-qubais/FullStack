# Promise
* Promise => assurance of a work that could be completed in future
* future value inside that promise is determined by the function that returns the promise
* it has two properties => state, value
* initially => state = pending, value = undefined
* finally => state = resolved / rejected
            value = value passed while calling the resolve funtion / error
* to consume a promise we have two **synchronous function** then and catch.They are used to register cb function on that promise.
* cb functions passed inside then and catch are async.
* promise can only be rejected or resolved once in a lifetime.
* every then and catch also returns a promise\
* the promise returned from that then depends upon the cb function inside that then
* final state of promise returned from then/catch depends upon value returned from their cb=>
        val => val
        nothing => undefined
        promise => promise
        reject => error(catch chalta direct uske baad koi then nahi chalta)