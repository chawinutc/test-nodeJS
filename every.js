const cartItems = [
  { name: 'Shoes', stock: 5 },
  { name: 'Shirt', stock: 2 },
  { name: 'Hat', stock: 10 }
];

// เช็คว่าสินค้าทุกตัวในตะกร้ามี stock มากกว่า 0
const allInStock = cartItems.every(item => item.stock > 0);

console.log(allInStock); // ผลลัพธ์: true (พร้อมส่งทุกชิ้น)