/*
substring: extract characters from a string and return the result. It works on string
arr.substring(start, end)
if second parameter is not given, it print the remaining substring
*/
const person = "Connie Client";
const firstName = person.substring(0, person.indexOf(" "));
console.log(firstName);

const lastName = person.substring(person.indexOf(" ") + 1);
console.log(lastName);



const splitString = person.split(" ");
console.log(splitString);


// The backtick or template literal

function foo() {
    return "Hello";
}

const str = `${foo()} World`; // The backtick can take any expression including function call
console.log(str);