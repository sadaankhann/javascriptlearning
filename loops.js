// Simple for loop

let numberInput = 5
let numberCount = 12;
let result;

for(let i = 1; i <=  numberCount; i++)
{
    result = numberInput * i;
    console.log(numberInput, " X ", i, " = ", result);
}

// ----------------------------------

// for in loop(Use for object)


const bioData = {

    name : "Sadaan Khan",
    semester : 3,
    rollNo : 95,
    program : "BSCS In Computer Science"

}

for(const keyss in bioData){

    // for(const xyz in object_name): Iss 'xyz' mein hamesha diyegaye object_name waale object ki keys hee store hongi, Yaani iss case mein name, semester, rollNo, program.

    const yeah = bioData[keyss];

// 1st iteration: bioData[name]
// 2nd iteration: bioData[semester]
// 3rd iteration: bioData[rollNo]
// 4th iteration: bioData[program]

    console.log(yeah);

}

// ---------------------------

// for of(Use for string and array)

let abc = "Sadaan khan";

for (const naam of abc) {
    console.log(naam);
}