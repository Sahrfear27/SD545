// All these are falsy values
const conditions = false || null || 0 || 0.0 || "" || NaN;
if (conditions) {
    console.log("truthy");
} else {
    console.log("Falsy");
}


// Truthy values: Anything else including objects
const condition = [] as any;
condition ? console.log("Truthy") : console.log("Falsy");




const x = 5;
console.log(x);
console.log(!x); //false
console.log(!!x);//true


const y = -1;
console.log(y);
console.log(!y); //false
console.log(!!y); //true


/*
const demo = 5 < "7"    // return true  by javascript. JS is loosely type it will try to convert the number and do the comparism

const demo1 = "IE6" > 0 // return false. NAN compare with number will return false
console.log("5" == 5) // true. Equal in value
console.log("5" === 5) // Strit equality
*/
// console.log(4 === 4.0); // true. Strict equality
