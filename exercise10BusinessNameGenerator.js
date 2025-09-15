function adjectives(){

    let adj_1 = "Crazy";
    let adj_2 = "Amazing";
    let adj_3 = "Fire";

    let random_1 = Math.floor(Math.random() * 10) + 1;

    if(random_1 >= 1 && random_1 <= 3){
    
        return adj_1;

    }

    else if(random_1 > 3 && random_1 <= 6){
    
        return adj_2;

    }

    else{
    
        return adj_3;

    }

}


function shopName(){

    let shp_1 = "Engine";
    let shp_2 = "Foods";
    let shp_3 = "Garments";

    let random_2 = Math.floor(Math.random() * 10) + 1;

    if(random_2 > 1 && random_2 <= 3){
    
        return shp_1;

    }

    else if(random_2 > 3 && random_2 <= 6){
    
        return shp_2;

    }

    else{
    
        return shp_3;

    }

}

function extraWord(){

    let word_1 = "Limited";
    let word_2 = "Hub";
    let word_3 = "Bros";

    let random_3 = Math.floor(Math.random() * 10) + 1;

    if(random_3 > 1 && random_3 <= 3){
    
        return word_1;

    }

    else if(random_3 > 3 && random_3 <= 6){
    
        return word_2;

    }

    else{
    
        return word_3;

    }

}

let business_name_1 = adjectives();
let business_name_2 = shopName();
let business_name_3 = extraWord();

let finalName = business_name_1 + " " + business_name_2 + " " +  business_name_3;

console.log("Business Name: ", finalName);