let a = 19;

{
    let a = 99;


    // Kisi bhi block ke andar, Chahe woh iss type ka normal block ho, if - else block ho, for loop, while loop block ho (etc), Uss block ke andar mein 'let' ke andar koi bhi changes karo, Woh change uss block ke andar hee rahega.

    // Jaisa ke meine yaha per let a ki value '19' se '99' kardi, Aur usse block mein bhi print karwaaya aur block ke bahar bhi, Tu jo value meine let variable ko block ke andar re-assign kari thi, Block ke andar woh print hwi, Aur outside of the block jab log ko print karwaaya tu globally declared let a ki value print hwi.

    // Isska matlab ye hain ke jo bhi value 'let' ko kisi block ke andar assign ki jaati hain, woh locally scoped hoti hain.

    // console.log(a);
}

console.log(a);

// ---------------------------------------

// Primitive DataTypes of JavaScript

let a1 = "Sadaan Khan";
let a2 = 129;
let a3 = 13.5;
let a4 = null;

// Datatype of null is object, JavaScript mein null ka istemaal kaafi pehle se kara jaa raha hain, Aur specification karte waqt null ka typeof object kardiya gaya tha. Iss ko kaafi saare JavaScript experts ghalti bhi maante hain, Per kyuke ye specification kaafi pehle ki gaye thi, Aur iss specification per bhaut saara poorana code rely karta hain tu isske typeof ko change nhi kiya gaya.

let a5 = undefined;
let a6 = 929393939393993;
let a7 = true;

console.log(typeof a1, typeof a2, typeof a3, typeof a4, typeof a5, typeof a6, typeof a7);

// ------------- Object -------------------------

const abc  = {

    //Note: Agar key variable aik word ka hain tu hum usse quotations ke baghair bhi likh sakhte hain, Per agar woh aik se zyaada word ka hain, Yaani variable name mein space use horahi hain, Tu hamay usse quotations ke andar hee rakhna padhega, Ye mandatory hain.

    //   Key       Value


    "Name" : "Sadaan Khan",
    "University" : "Sir Syed University of Engineering & Technology",
    "Father's Name" : "Zarrar Khan"

}

console.log(abc);

// --------- Adding a key value pair seperately ----------

abc.Contact_No = 3293949944;

// abc.Contact_No = 03293949944;  (Leading zero not possible of a variable value of any datatype)

// abc."Contact No" = 3293949944; (Not Possible)

// ------------------------

let obj = {

    a : 1,
    b : 2,
    c : 3

}

for(const keyss_ in obj){

    if(Object.hasOwnProperty.call(obj, keyss_)){
    
        const element_ = obj[keyss_];
        console.log(keyss_,element_);

    }

}

