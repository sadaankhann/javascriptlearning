// -- Using For Loop --


let sum1 = 1;

function factorial(n) {

    for(let i = n; i >= 1; i--) {

            sum1 *= i;

        }

        console.log(sum1);

    }

factorial(5);

////////////////////////////////////

// -- Using Reduce Function --

let sum = 1;

let ar = 6;

let newAr = [];
let newAr_;
let k = 0;

for(let i = ar; i >= 1; i--){

    newAr[k] = i;
    k++;

}

// for(let o = 0; o < newAr.length; o++){
    
//     console.log(newAr[o]);

// }

const factorial = newAr.reduce((a,b) =>{

    sum = a*b;
    return sum;

});

console.log(factorial);