const user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York'
};
// console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, City: ${user.city}`);
const { name, age, email, city } = user;
console.log(`Name: ${name}, Age: ${age}, Email: ${email}, City: ${city}`);