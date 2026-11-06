const fs = require('fs/promises');

async function readFileAsync() {
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('เกิดข้อผิดพลาด:', err);
  }
}

readFileAsync();