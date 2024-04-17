// splice: arr.splice(start, deleteCount, elem1, .....elemN): Return the array of remove items
const arr = ["I", "Study", "Javascript"];
arr.splice(1, 1); //at index 1, remove 1
// console.log(arr);

const arr2 = ["I", "Study", "Javascript"];
arr2.splice(2, 1, "React");
// console.log(arr2);


// Slice: arr.slice(start, end): Return a new array
const arr3 = ["t", "e", "s", "t"];
// console.log(arr3.slice(1, 3));

// Find: find: Look for a single element that makes the function true
let users = [
    { id: 1, name: "Sahr" },
    { id: 2, name: "Alves" },
    { id: 3, name: "John" },
    { id: 4, name: "Abu" },
];
const user = users.find((items) => (items.id == 1));
// console.log(user?.name);

// Filters: return an array of all the elements that sstisfy the condition
const user1 = users.filter((items) => (items.id > 2));
// console.log(user1);



// Map: Call the method for each elements and return the array of result

const demo = ["Bilbo", "Mango", "Pea", "Apple"];
const result = demo.map((items) => (items.length));
// console.log(result);


//sort: They sort in place.By default items are sorted as string
const nums = [1, 2, 15];
nums.sort(); //1,15,2
// console.log(nums);


function compare(a: any, b: any) {
    if (a > b) {
        return 1;
    }
    else if (a === b) {
        return 0;
    } else {
        return -1;
    }
}

nums.sort(compare);
// console.log(nums);


//Reduce: call method for each element and return a single output
//arr.reduce(accumulator,items,index, arr)

function calc(multipler: number, base: number, ...numbers: number[]) {
    const temp = numbers.reduce((accum, num) => accum + num, base);
    return multipler * temp;
}
const total = calc(2, 6, 10, 9, 8);
// console.log(total);



// Spread Operators: allows to spread an iterable
const numbers = [1, 2, 3];
const newNumber = [...numbers, 4, 5];
// console.log(numbers);
// console.log(newNumber);

const person = { name: "John", age: 30 };
const addInfo = { city: "LA", job: "Engineer" };
const mergePerson = { ...person, ...addInfo };
// console.log(mergePerson);




// Destructuring: Use to unpack values from array or objects into variables
const number2 = [10, 20];
const [a, b] = number2;
// console.log(a);
// console.log(b);

// can also throw unwanted items
const [first, , third] = ["foo", "bar", "baz"];
// console.log(first);
// console.log(third);

// Can use any assignable at the left side
let user2 = {} as { name: string, surname: string; };
[user2.name, user2.surname] = "Sahrfear Macarthy".split(" ");
// console.log(user2);

// Destructure Objects. Use the cruly braces
const options = {
    title: "Menu",
    width: 200,
    height: 400
};
const { title, width, height } = options;
// console.log(title);
// console.log(width);
// console.log(height);

// To assign a property with another name, set using colon
const { title: T, width: W, height: H } = options;
console.log(T);
console.log(W);
console.log(H);

