const PromiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("promise consumed");
})
