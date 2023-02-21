/*let userName = "Badmus";
let hasLoggedIn = true;

hasLoggedIn += " Adewumi";

console.log(hasLoggedIn)*/

// specifying types

let userName: string = "Badmus"; 
let hasLoggedIn: boolean = true;

userName += " Adewumi";

console.log(hasLoggedIn)

let myNumber: number = 12;
let myRegex: RegExp = /foo/

// Arrays

const names:string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4]

// Object

const myPerson: {
    first: string;
    last: string;
} = {
    first: "Badmus",
    last: "Adewumi"
}

// refractoring above code
interface Person {
    first: string,
    last: string
}

const person: Person = {
    first: "badmus",
    last: "wumi"
}

const ids: Record<number, string> = {
    12: 'a',
    14: 'b',
}
ids[20] = 'c'

if (ids[20] === "d") {
    console.log(true)
}

for (let i = 0; i < 12; i++) {
    console.log(i)
}

[1, 2, 3].forEach(v => console.log(v));
const output: number[] = [4,5,6].map(v => v * 10)