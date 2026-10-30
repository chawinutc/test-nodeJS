// var name;
// name = "John";
// var age = 30;
// var isStudent = false;
//  console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

 const student = {
    name: "Alice",
    age: 22,
 }
    student.name = "Bob"; // Update the name property
    student.age = 10; // Update the age property
    
// console.log(`Student Name: ${student.name}, Age: ${student.age}`);
// if (student.age > 18) {
//     console.log("You are an adult.");
// }else {
//     console.log("You are a minor.");
// }
// console.log(`${student.age > 18 ? "You are an adult." : "You are a minor."}`);

// function HelloWorld() {
//     console.log("Hello, World!");
// }

// HelloWorld();

// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));
const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));


function introduce(name, age) {
   return `My name is ${name} and I am ${age} years old.`;
//    console.log(`My name is ${name} and I am ${age} years old.`);
}
console.log(introduce("Alice", 22));

function circumference(radius) {
    return 2 * Math.PI * radius;
}
console.log(`Circumference = ${circumference(5)}`);

