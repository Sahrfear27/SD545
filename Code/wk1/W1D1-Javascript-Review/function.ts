// 1: Function delcaration are hoisted. Means you can run add before the function declaration

function add(n1: number, n2: number) {
    return n1 + n2;
}
console.log(add(2, 3));


// 2: Function expression
const addTwo = function (num1: number, num2: number) {
    return num1 + num2;
};

console.log(addTwo(10, 15));


// 3: Arrow function
const addThree = (num1: number, num2: number, num3: number) => {
    return num1 + num2 + num3;
};
console.log(addThree);


// Anonymous functions: These function do not have names