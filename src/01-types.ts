//! Will not work
// let x = 7
// x = seven

//Declare types w/out initialization
let address: string;
let phoneNumber: string;
let email: string;
let sS: number;
let isMarried: boolean;

// Declare types w intitalization

let username: string = "student";
let password: string = 'password';
let instructorId: number = 1;

let greeting = 'hello';


//Basic types
// Primitives

// Number

let age: number = 40;
let currentYear: number = 2022;
let balance: number = 1_000_000;

//String

let companyName: string;
companyName = 'EFA';

let appName: string;
appName = 'Twitter';

// Boolean
let isLoggedIn: boolean = true;
let isAdmin: boolean = true;


// Arrays
// Express in two ways

//1 

let studentList: string[] = ['Timmy, John, Will'];

//2 

let allScores: Array<number> = [1, 2, 4];

// Any 

let dataFromThirdParty: any = '12342423';

dataFromThirdParty = 2323;
typeof dataFromThirdParty;

// void 
// a Void type has no type at all.  This is not really seen in variables, but is more common to see in functions that return no value.

function sayHelloToAll(): void {
    console.log('Hello All');
}

//Null and undefined

let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

// Tuple
// Tuple type allow you to create an array with multiple different types.

let usernameAndId: [string, number];
usernameAndId = ['something', 12]

// Enum
// Enums allow us to give names to numeric values.

enum Color {
    'Red', //0
    'Blue', //1
    'Green',//2
}

let selected: string = Color[Color.Red];

enum CardType {
    Ace = 1,
    Two,
    Three,
    Four, 
}

let cardType: string = CardType[2];


// Union Types

let x: number | string | boolean
x = 23424;
x = 'ohff'
x = true;

