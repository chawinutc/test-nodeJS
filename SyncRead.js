const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf-8');
try {
  console.log(data);
}catch (err) {
  console.error('เกิดข้อผิดพลาด:', err);
}
console.log('อ่านไฟล์เสร็จสิ้น');