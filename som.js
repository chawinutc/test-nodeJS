//const userRoles = ['editor', 'moderator'];
const userRoles = [
  { id: 101, name: 'John', role: 'admin' },
  { id: 102, name: 'Jane', role: 'user' },
  { id: 103, name: 'Bob', role: 'user' }
];

// เช็คว่า User มีสิทธิ์เป็น 'admin' หรือไม่
const isAdmin = userRoles.some(user => user.role === 'admin');
console.log(isAdmin); // ผลลัพธ์: true

// เช็คว่า User มีสิทธิ์เป็น 'editor' หรือไม่
const isEditor = userRoles.some(user => user.role === 'editor');
console.log(isEditor); // ผลลัพธ์: false
