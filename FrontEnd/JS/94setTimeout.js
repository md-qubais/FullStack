//setTimeout(cb,milliseconds) setInterval(cb,milliseconds) clearTimeout(timerId) clearInterval(timerId)

//mySetInterval using setTimeout
function mySetInterval(fn,timeout){
    let timerId={
        shallIRun : true
    }
    function repeater(){
        if(timerId.shallIRun == false)return
        fn();
        setTimeout(repeater, timeout);
    }
    if(timerId.shallIRun)
    setTimeout(repeater, timeout);
    return timerId
}



let timerId = mySetInterval(()=>{
    console.log("Interval")
},1000)

function myclearInterval(timerId){
console.log("Cleared")
timerId.shallIRun=false
}

setTimeout(()=>myclearInterval(timerId),2011)