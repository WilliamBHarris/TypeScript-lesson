//! 2.05 Annotations
//!JS Basics Review
//Remember that in plain Javascript there is a lot of flexibility in function argument. Consider the following plain Javascript code:
function demoFunction(someNum){
    return someNum;
}

demoFunction(1); //1
demoFunction("stuff"); //"stuff"
demoFunction(true); //true
demoFunction(undefined); //undefined
demoFunction(null); //null
demoFunction([]); //[]
demoFunction({}); //{}
//demoFunction(1, "Stuff"); //this will throw an error since it's trying to do two arguments
//* Analysis
//* Remember in the JavaScription function that the following things are true:
// 1. The function can take any number of arguments
// 2. The function can return any type of value
// 3. The function can return undefined
// 4. The function can return null
// 5. The function can return an array
// 6. The function can return an object
// 7. The function can return a string
// 8. The function can return a number
// 9. The function can return a boolean
// 10. The function can return a tuple
// 11. The function can return an enum
// 12. The function can return a void
// 13. The function can return an any
// 14. The function can take any type of argument
//* The freedom is enjoyed by some and despised by others. TypeScript helps us solve this issue by providing some possibilities for constraints.

//! Type Safety in Arguments
//* TypeScript is a strongly typed language. This means that the types of the arguments passed to the function must match the types of the parameters in the function definition.
//* TypeScript allows us to bring types to our parameters and limits to the number of arguments we pass in. Let's add some functions now:

function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//1 - Works
addNumbers(1, 2);

//2 - Errors
// addNumbers(1,2,3);
// addNumbers(1,2,3,"Foo"); 


//! Practice: Add another TypeScript function that concatenates two strings (firstName and lastName) and returns the fullName.
function concatName(firstName: string, lastName: string){
    return firstName + " " + lastName;
}
concatName("John", "Doe"); //"John Doe"
console.log(concatName("John", "Doe")); //John Doe

//! 2.06  - Return Types
//* Consider, again, the plain Javascript function:
function hello(grettingString){
    return grettingString;
}
// foo(1); //foo is not defined

//* Return Types
                        //1     //2
function sayHello(name: string): string{
    return name;
}
//1 we create a type for our parameter, a string. //2 we use the colon followed by a type to deonate a return type.
sayHello("Kenn"); //"Kenn" // We call the function and pass in a string argument. The argument satisfies the return type. So this function works. 
//TODO sayHello(1); //"1" 
    //We call the function and pass in the wrong return type. The argument does not satisfy the return type, and so this would break.

//! Practice Function
//* 1) Create a function with a return type of boolean.
//* 2) The function takes in a string username and string password for its password.
//* 3) Inside the function have a conditional that checks if the username is set to "elevenfiftyuser" and the password is "Letmein1234!"
//* 4) If both conditions are true, the function should return true.
//* 5) If one or both conditions are false the function should return false.
//* 6) Call the function and pass in the correct arguments.
//* 7) Call the function and pass in the incorrect arguments.
//* 8) Call the function and pass in the correct arguments but with the wrong return type.

function login(username: string, password: string): boolean{
    if(username === "elevenfiftyuser" && password === "Letmein1234!"){
        return true;
    }
    return false;
}

login("elevenfiftyuser", "Letmein1234!"); //true