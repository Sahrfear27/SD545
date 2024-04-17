const person = {
    firstName: "Theo",
    lastName: "Leo",
    age: 15,
    "my gender": "F",
    "0": "Hi"
};
console.log(person);
console.log(person[0]);
console.log(person["my gender"]);

const courseName = "SD555";
person[courseName] = 90;
console.log(person);