/* async function always returns a promise, To use await() functionality we have to labelled it's function as async function.*/

/*If await keyword is placed before a function, The program will not run further until that await function ressolves or rejects(These are the name of the parameters of the promise object).*/


// 1. Used so that the code will look clean and professional.
// 2. Error handling becomes easy using try catch block.

let listOfUsers = ["Sadaan Khan", "Waqar Khan", "Saqib Khan"];
        let askUser = "sadaan           khAn";

        let officialList = listOfUsers.toString().toLowerCase().replace(/\s+/g, "")
        let officialUser = askUser.toLowerCase().replace(/\s+/g, "");

        function getUserData() {

            return new Promise((ressolve, reject) => {
                setTimeout(() => {

                    if (officialList.includes(officialUser)) {
                        ressolve("Yes, A user exist by this name!");
                    }
                    else {
                        reject("No, the user is not found!");
                    }

                }, 3000);

            })

        }

        async function performingCalculationOnUser() {

            try {
                let userData = await getUserData();
                console.log(userData);
            } catch (error) {

                console.log(error);

            }



        }

        performingCalculationOnUser();