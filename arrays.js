// -- Arrays --

let arr_1 = [1,2,3,4,5,6, 54, 75];
let arr_2 = ["Sadaan", "Harris", "Ahmed", "Samad"];

// console.log(arr_2);

// // -- Array Methods --

// // toString()

console.log(arr_2.toString());

// // join()

// console.log(arr_2.join(" ; ")); // ',' ki jagah ab space, semicolon, space use hoga.

// // pop

// let yo = arr_1.pop();
// console.log(arr_1);

// //push

// let yo_2 = arr_1.push(6, 87);
// console.log(arr_1);

// //shift

// let yo_1 = arr_1.shift();
// console.log(arr_1);

// //unshift

// let yo_3 = arr_1.unshift(12);
// console.log(arr_1);

// //delete

// let yo_4 = delete arr_1[5];
// console.log(arr_1);

// //concat

// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [7,8,9];

// let yo_5 = a1.concat(a2, a3);
// console.log(yo_5);

// //Do not change the existing arrays. a1, a2 and a3 will remain the same.

// // sort

// let a4 = [6, 7, 11,2,12,54,224];
// a4.sort();
// console.log(a4);

// //splice

// let arr = [12,21,34,54,34,656];
// //                       start  deleteCount  Value to add in that place
// let newArray = arr.splice( 0,         3,             122);
// console.log(arr);

// //slice

// let a6 = [111,222,333,444];
// console.log(a6.slice(0, 2)); // 0 se start karo aur 1 tak jao, Not including 1.

// //reverse

// let a7 = [9,8,7,6,5,4,3,2,1];
// console.log(a7.reverse());

// Array.from()

// let name = "Sadaan Khan";
// console.log(Array.from(name));

// ----------------------------------------

// -- Loops and Arrays --

// let array_ = [1,43,54,23,2,12];
// let i;

// for(i = 0; i < array_.length; i++){

//     console.log(array_[i]);

// }

// printing array using for of loop

// for(const value of array_){

//     console.log(value);

// }

// --------

// map()

// Note: Isski madad se hum maujooda array per aesa operations perform karasakhte hain jo uske har element per apply honge, Aur usse aik naye array mein save karlenge.

// let array__ = [1,3,5,7,9];
// let changed_array__ = array__.map((e) =>{

//     // 1. .map() array mein maujood har element ko aik aik karke process karta hain.
//     // 2. 'e' currently process hone waale element ko represent karta hain.
//     //3. Usske baad aik arrow function lagaya jaa raha hain.

//     return e**2;


// });

// console.log(changed_array__);

// ---------

// filter

let ar = [12,54,3,2,22,8,9];

const greterThanTen = (e) =>{

    if(e > 10){
    
        return true;

    }
    return false;

}

console.log(ar.filter(greterThanTen));

//or 

// const greterThanTen = ar.filter((e) =>{

//     if(e > 10){
    
//         return true;

//     }
//     return false;

// })

// console.log(greterThanTen);

// -------

// reduce

// let cr = [1,2,3,4,5,6];

// const multiplication = (a,b) =>{
    
//     return a*b;

// }

// Ye pehle do elements lega, Such as '1' aur '2', Aur phir inn dono ko multiply karega, Aur jo answer aayega usse '3' se multiply karega, Phir jo answer aayega usse '4' se multiply karega and so on...

// Note: Hum iss ke zarye aik operation ko array ke sab elements ke liye perform karwa ke, Aik collective answer nikaal sakhte hain.

// console.log(cr.reduce(multiplication));
