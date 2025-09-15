// innerHTML

let s1 = document.querySelector(".container").innerHTML;
console.log(s1);

// innerHTML aik element ke andar maujood hone waali saari HTML ko return kardeta hain.

// Hum innerHTML ko use karke kisi element ki html text ko bhi change karsakhte hain.

// For example:

s1 = document.querySelector(".box").innerHTML = "Bhopinder Jogi";

/////////////////////

// outerHTML

let s2 = document.querySelector(".container").outerHTML;
console.log(s2);

// Agar mein kisi element per outerHTMl use karta ho, Tu woh khud apne HTML code bhi return karega aur saath hee apne andar use hone waala HTML code ko bhi.

// -----------------

// textContent

let s3 = document.querySelector(".container").textContent;
console.log(s3);

// gives all the text content used in that element.

// -----------------

// tagName

let s4 = document.querySelector(".container").tagName;
console.log(s4);

// returns the element type of an element node only.

// -----------------

// nodeName

let s5 = document.querySelector(".container").nodeName;
console.log(s5);

// returns the type of text and comment node also.

// -----------------

// hidden

// Use kara jaata hain to hide something

let s6 = document.querySelector(".table_").hidden = true;

// ----------------

// setAttribute(style,) and getAttribute() , Both Are Different From Each Other

let s7 = document.querySelector(".container").setAttribute("style","display: flex;");

console.log(document.querySelector(".container").getAttribute("style"));

// ----------------

// removeAttribute()

let s10 = document.querySelector(".container").removeAttribute("style");

// ----------------

// hasAttribute

let s8 = document.querySelector(".container").hasAttribute("style");
console.log(s8);

// ---------------

// designMode = "on"

// If you write document.designMode = "on", Then you are able to change anything on that webpage such as adding or removing the text.

let s9 = document.designMode = "on";

// ---------------------------

// Custom data attributes to store something inside it.

let s11 = document.querySelector(".box").setAttribute("data-programBy", "Sadaan Khan");
console.log(document.querySelector(".box").dataset);

// ---------------------------

// Insertion Using JavaScript

// Ye tab istemaal hoti hain, Jab hamare pass kahi se data aaraha ho, Aur hum page ko bina load karaye data ko update karna chahe.

// .append()

let div = document.createElement("div");
div.setAttribute("class","box6");
div.innerHTML ="Hello I am a Inserted Box through JavaScript!<b> At the end. </b>";
document.querySelector(".container").append(div);



// .append() hamesha last mein iss naye banaye gaye div ko add karega.

// --------------------------

let div_ = document.createElement("div");
div_.setAttribute("class","box6");
div_.innerHTML ="Hello I am a Inserted Box through JavaScript! <b>At the start.</b>";
document.querySelector(".container").prepend(div_);

// --------------------------

// before

let div_1 = document.createElement("div");
div_1.innerHTML = "This is before text!"
div_1.setAttribute("class","box7");
document.querySelector(".container").before(div_1);

// before se banaye gaye div mein hum text add nhi karsakhte hain. (Mere According)

// -------------------------

// To add a html, text or something

let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("afterend","Hello Jee <b>Kiya Haal Hain.</b>") //container ke baad
cont.insertAdjacentHTML("afterbegin","Hello Jee <b>Kiya Haal Hain.</b>") //container ke start hone ke baad

// -------------------------

// remove()

// let cons = document.querySelector(".container").remove();

// -------------------------

// classList

console.log(document.querySelector(".container").classList); //Ye class name aur unki CSS return karega
console.log(document.querySelector(".container").className); //Ye class name return karega
console.log(document.querySelector(".container").classList.add("blue")); //Ye class name return karega
console.log(document.querySelector(".container").classList.remove("red")); //Ye class name return karega
console.log(document.querySelector(".container").classList); //Ye class name aur unki CSS return karega

// classList.toggle("")

document.querySelector(".container").classList.toggle("red"); //toggle class remove hogaye
document.querySelector(".container").classList.toggle("red"); //toggle class laggaye
document.querySelector(".container").classList.toggle("red"); //toggle class remove hogaye 
document.querySelector(".container").classList.toggle("red"); //toggle class laggaye

// Ye animation dekhane ke liye use hota hain.
