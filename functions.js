// Simple Usage Of Function & Its Syntax

function table(number){

    let result;
    for(let i = 1; i <= 12; i++){

        result = number * i;
        console.log(number + " X " + i + " = " + result);

    }

}

table(7);


// ----------------------------


function sum(a, b, c = 1){

// Idhar mein agar function call karte time c ki value na do, Tu by default 'c=1' use hogi, Agar c ki bhi value deta ho tu, Jo value meine dee hogi woh use hogi, 'c=1' nhi, Woh alag baat hain ke mein bhi 'c=1' value dedo. 

    console.log(a + b + c);

}

sum(1,2,3);


// -----------------------------

// ---- Creating a function, Without using function builtin property(Arrow Function) ----

const subtraction = (a , b) =>{

    return a - b;

}

Subtraction = subtraction(10,5);
console.log(Subtraction);
