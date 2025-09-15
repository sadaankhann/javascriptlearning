let num = [12,44,23,2,1,4,40];

let num_ = [1,2,3,4,5];










// **************       filter()   ********************
 
let greater_than_5 = num.filter(num => num > 5);
// console.log(greater_than_5);














// **************        map()        ******************

let addOneNumber = num_.map(num_ => num_ + 1);
// console.log(addOneNumber);

















// *************        reduce()     ******************

let addAllElements = num.reduce((acc, currentVal) =>{

    return acc + currentVal;

}, 0);

// console.log(addAllElements);

let multiplyAllElements = num.reduce((a, c) =>{

    return a * c;

}, 1);

// console.log(multiplyAllElements);











// ***       To create array from a string (Array.from)     ***

let name_ = "Sadaan Khan";

let arrayFromString = Array.from(name_);

// console.log(arrayFromString);












// *** Printing an array using forof loop ***


let numbers = [1,2,3,4,5,6];
let num1;

for(num1 of numbers){

    console.log(num1);

}





