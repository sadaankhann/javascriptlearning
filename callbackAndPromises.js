/* Callback: Jab aik function ke andar aik aur function call horaha ho tu usse callback function bolenge. */

/* Promises: Introduction to callback is promises. */

// let randomNum = Math.floor(Math.random() * 10);

// let checking = new Promise((resolve, reject) =>{

//     if(randomNum > 5){
    
//         resolve("This is accepted");

//     }

//     else{
    
//         reject("Aese nhi chalega!");

//     }


// });

// checking.then((a) =>{

//     console.log(a);


// }).catch((err) =>{

//     console.log(err);


// })

// ---------------------------------------

/* Promise.all([promise1, promise2, .....]) : Jab iss array mein maujood saaray promises ressolve honge, Tu ye promise.all([]) chalega */

let check_1   = Math.floor(Math.random() * 11);

let promise_1 = new Promise((resolve, rejected) =>{

    if(check_1 > 5){
    
        resolve("Ye pass hogaya!");

    }
    else{
    
        rejected("Ye fail hogaya!");

    }

})





let check_2   = Math.floor(Math.random() * 11);

let promise_2 = new Promise((resolve, rejected) =>{

    if(check_1 > 5){
    
        resolve("Ye pass hogaya!");

    }
    else{
    
        rejected("Ye fail hogaya!");

    }

})





let check_3   = Math.floor(Math.random() * 11);

let promise_3 = new Promise((resolve, rejected) =>{

    if(check_1 > 5){
    
        resolve("Ye pass hogaya!");

    }
    else{
    
        rejected("Ye fail hogaya!");

    }

})


let promiseAll = Promise.all([promise_1, promise_2, promise_3]);

promiseAll.then((c) =>{

    console.log(c);

}).catch((d)=>{

    console.log(d);

})

// -----------------------------

/* Promise.all([]) sirf ressolve theek hone per chalta tha, Per ye chahe resolve ho ya reject, har baar chalega. */


//

// ---------------

/* Promise.race([promise_1, promise_2, ....]), Array mein maujood promise mein se jo sab se fastest hoga, Woh promise sab se pehle chalega. */