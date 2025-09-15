// getElementsByClassName()

let changeColor = document.getElementsByClassName("box");

changeColor[4].style.backgroundColor = "red";

// Yaha per box class 5 div's per apply horahi hain, Tu hamay index dekar batana padhega ke hum kon se waale div ke liye class="box" ko apply karna chahte hain.

// ----------

// getElementById()

let changeColorById = document.getElementById("bx2").style.backgroundColor = "blue";

// ----------

// querySelector()

let queryS = document.querySelector(".box").style.backgroundColor = "yellow";

// Jis div ne class="box" ko sab se pehle use kiya hoga, Ye sirf uss per apply hoga, box class ko use karne waale har div per nahi.

// ----------

// querySelectorAll()

let querySFA = document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "red";
});

// Returns a node list, That why are able to perform array functions.

// ----------

// getElementsByTagName()

let ee1 = document.getElementsByTagName("div");
for(let i = 0; i < ee1.length; i++){

    ee1[i].style.backgroundColor = "lightblue";

}


// getElementsByTagName() returns a HTML Collection, Woh array nhi hoti jiski wajah se hum iss mein .foreach use nhi karsakhte hain, Ha per simple for loop istemaal karsakhte hain.

// ----------

// .matches()

// Ye use hota hain to check ke kiya koi element kisi falah css selector ko use karta hain ke nhi.

// Note: Agar id hain tu '#' aur class hain tu '.' aayega id ya class ka name likhne se pehle:

changeColor[4].matches(".box");

// -----------------------

changeColor[0].closest(".container");

// Ye pehle iss element mein dekhega ke ".container" naami CSS selector iss mein use hwa hain ke nhi, Phir apne parent mein dekhega, Agar waha nhi mila tu usske parent mein dekhega, Aur kahi nhi milega tu 'null' return kardega, Agar mil gaya tha woh poora element jo hum dhoond rahe hain woh.

// ----------------

// .contains()

// Hum bss yaha per ye dekh rahe hain ke "Kiya ye cheez isse contain karti hain ke nhi, Agar karti hwi tu 'true', Nhi tu 'false'."

document.body.querySelector(".container").contains(document.querySelector(".box"));

