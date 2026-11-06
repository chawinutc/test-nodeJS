const fs = require('fs');
 
// Synchronous: รอจนอ่านเสร็จ
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
console.log('อ่านไฟล์เสร็จแล้ว');