// 24. Quản lý đơn hàng:
//  • Tạo lớp Order với các thuộc tính items và viết phương thức để tính tổng giá trị đơn hàng.
class Order {
  constructor(items) {
    this.items = items;
  }
  sum_bill() {
   
return this.items.reduce((total, item) => total + item.price, 0)
    
  }
  output_Bill(){
    console.log("Bill");
    this.items.forEach(item => {
    console.log(`${item.name}: ${item.price}`);
    })
    console.log(`Tổng đơn của bạn là: ${this.sum_bill()}`);
  }
}

const product = [
  { name:'jean', price: 20000 },
  { name:'fruit', price: 15000 },
  { name:'mask', price: 10000 },
  { name:'learning tools', price: 20000 },
  { name:'food', price: 20000 },
];
const order = new Order(product);
order.output_Bill();
