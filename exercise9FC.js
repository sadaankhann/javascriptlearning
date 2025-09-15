let condition = true;
let vari;
let ask;


while (condition == true) {

    let firstNumber = parseInt(prompt("Enter First Number: "));
    let operator_ = prompt("Enter the operator(+, *, - , /): ");
    let secondNumber = parseInt(prompt("Enter Second Number: "));

    let number = Math.floor(Math.random() * 10) + 1;

    if (number > 5) {

        calculatorRight();
        condition = recall();

    }

    else{
        
        calculatorWrong();
        condition = recall();

    }

    // ---------

    function calculatorRight() {

        if (operator_ == "+") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber + secondNumber);

        }

        else if (operator_ == "-") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber - secondNumber);

        }

        else if (operator_ == "*") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber * secondNumber);

        }

        else if (operator_ == "/") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber / secondNumber);

        }

        else {

            console.log("You have entered something invalid...Try Again!");

        }

    }

    function calculatorWrong() {

        if (operator_ == "+") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber - secondNumber);

        }

        else if (operator_ == "*") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber + secondNumber);

        }

        else if (operator_ == "-") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber / secondNumber);

        }

        else if (operator_ == "/") {

            console.log("The answer of " + firstNumber + " " + operator_ + " " + secondNumber + " is: ", firstNumber ** secondNumber);

        }

        else {

            console.log("You have entered something invalid...Try Again!");

        }

    }

    function recall(){
    
        let ask = prompt('Do You Still Wanna Calculate Something?: (Type "yes" or "no"');
    
        let vari = ask.toLowerCase();
    
        if(vari == "yes"){
        
            return true;
    
        }
        else{
        
            return false;
    
        }
    
    }

}