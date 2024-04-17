import { it } from "node:test";

//splice: It modify and return a new array. arr.splice(start, deleteCount, elem): It change the original array
let a = ["Stef", "Jason", "Sahr"];
a.splice(1, 2);
// console.log(a);

a.splice(0, 0, "Mac");
// console.log(a);


// Slice:arr.slice(start, end) extract from start but not including end. It do not change the original array. Use on both array and string
const b = [1, 2, 4, 5, 5, 6];
const newArray = b.slice(1, 5);
// console.log(newArray);



//Find: Return the first element that matches the condition
const element2 = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Nitrogen"].find((element) => element.length < 7);
// console.log(element2);


/*
Filter: Return an array of all matching elements
arr.filter(item, index, arr)
*/
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alves" },
    { id: 3, name: "Mary" },
];

const result = users.filter((items) => (items.id < 3));
// console.log(result);

const element1 = ["Hydrogen", "Helium", "Lithium", "Beryllium"].filter((items) => items.length > 7);
// console.log(element1);





/*
map: call function for each elements and return an array of result
arr.map(item, index, arr)
*/
let lengths = ["Bilbo", "Gandalf", "Nazgul", "Programming"].map((items) => (items.length));
console.log(lengths);





/*
reduce: Call a function for all elements and return a single output
arr.reduce(acc, current, index, arr)
*/
let arr = [1, 2, 3, 4, 5];
const results = arr.reduce((sum, current) => sum + current, 0);
console.log(results);

const grades = [88, 98, 100, 90];
const newGrades = grades.filter((elem) => elem > 90)
    .reduce((sum, curr) => sum + curr, 0);
console.log(newGrades);



/*
get average
1,2,3
(1+2+3)/3,

1/3 + 2/3 + 3/3

*/
const score = [88, 98, 100, 90, 91, 89, 70, 85];
const average = score.filter((elements) => elements > 85)
    .reduce((sum, current, index, arr) => {
        return sum + current / arr.length;
    }, 0);
console.log(average);



let countries = ['US', 'Canada', 'China', 'Mexico'].filter((items) => (items.length > 5))
    .map((country, index) => ({ countryId: index, name: country }));
console.log(countries);




function sum(arr: number[]) {
    const result = arr.filter((items) => items > 20)
        .reduce((accum, num) => accum + num, 0);
    return result;
}

const arrs = [10, 15, 25, 30, 40, 5, 11];
console.log(sum(arrs));

