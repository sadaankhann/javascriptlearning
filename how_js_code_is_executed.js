// JavaScript program is executed in two ways:

/* 1. Scanning(Memory Allocation)
   2. Actual Execution
*/

// 1. Scanning(Memory Allocation)

/* Jab first time javascript code run hota hain tu woh koi execution perform nhi karta hain, Balke woh first time execution mein sirf let, const and var ko talaash karta hain */

// For example hamare pass ye code hain:


let firstName = "Sadaan";
let lastName = "Khan";
const birthYear = 2006;

// Humne jab first time program execution start ki tu isne let, const and var hoondna start kiya, Tu isse sabse pehle "let firstName" mila, Phir ye iss variable ko memory allocate hogi, Per iss variable ki value ki jagah isski actual value nhi aayegi, Balke 'undefined' aayega, Kuch iss tarha:

firstName = undefined;

// 2. Actual Execution

/* First time scanning hogi jismein let, const aur var variable ko memory allocate hogi aur unki value ki jagah undefined aajayega, Second time scanning, Yaani main execution ke time per iss defined ki jagah actual value place hogi. */

firstName = "Sadaan";

//  Valid and Un-Valid

//1. Valid

console.log(yoyo);

var yoyo = "Honey Singh";

//2. Unvalid

console.log(itsYourBoy);

let itsYourBoy = "Badshah";

/* let ke case mein agar hum 'console.log(itsYourBoy)' karenge tu hamay error milayga, Kyuke javascript mein ye changes laye gaye thi ke, Jis variable ki value undefined hain aap usse print nhi karwa sakhte hain. */


