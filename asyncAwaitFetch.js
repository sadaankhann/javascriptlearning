// async function hamesha aik promise return karta hain, Aur agar kisi function per await laga hwa ho, Tu jab woh ressolve ye reject nhi hojaata, Compiler aage nhi badhega.Aur


// 1. Istemaal kiya jaata hain takay code clean lage than .then chaining
// 2. Error handing easy hojaati hain using try catch block.

async function getData(){

    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            resolve("Mil Gaya");
        }, 3000)

    })

}

async function processData(){

    console.log("Modules Processing!");

    console.log("API Work!");

    let data = await getData(); // Jab tak getData() poora nhi chal jaata, program aage nhi badhega.

    console.log(data);

    console.log("Kuch Bhi!");


}