function sum(arr: number[]) {
    const result = arr.filter((element) => element > 20)
        .reduce((accum, curr) => (accum + curr), 0);
    return result;
}
const num = [10, 11, 25, 18, 30, 40, 21];
console.log(sum(num));

function sum2(arr: number[]) {
  return arr.filter((element) => element > 20)
        .reduce((accum, curr) => (accum + curr), 0);
  
}
const num2 = [10, 11, 25, 18, 30, 40, 21];
console.log(sum(num));
console.log(sum2(num2));




const getNewArray = function (stringArray: string[]) {
    return stringArray.filter((element) => (element.length >= 5 && element.includes("a")));
    // return result;

};
const words = ["Bilbo", "Gandalf", "Nazgul", "boy", "Mango"];
console.log(getNewArray(words));




const firstGreeting = 'hi';
const numbs = [1, 2, 3];
const secondGreeting = ['Hello', 'world'];
const newWord = [...firstGreeting, ...numbs, ...secondGreeting];
console.log(newWord);