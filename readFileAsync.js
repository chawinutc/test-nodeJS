const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, text) => {
  console.log(text);            // แสดงทีหลัง
});
console.log('อ่านไฟล์เสร็จแล้ว');  // แสดงก่อน