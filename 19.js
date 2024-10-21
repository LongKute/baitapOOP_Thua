// 19. Phương thức tính thuế VAT:
// • Tạo lớp Invoice để tính tổng hoá đơn và thêm thuế VAT vào tổng giá trị.

class Invoice {
  constructor(items, VAT_bill) {
    this.items = items;
    this.VAT_bill = VAT_bill;
  }
  sum() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  VAT() {
    return this.sum() * (this.VAT_bill / 100);
  }
  sum_VAT_Bill() {
    return this.sum() + this.VAT();
  }
  output_Bill() {
    console.log("Bill");
    this.items.forEach((item) => {
      console.log(`${item.name}: ${item.price}`);
    });
    console.log(`Tổng bill chưa tính thuế: ${this.sum()}`);
    console.log(`Thuế VAT ${this.VAT_bill} %: ${this.VAT()}`);
    console.log(`Sau khi tính thuế: ${this.sum_VAT_Bill()}`);
  }
}
const items = [
  { name: "Socola", price: 20000 },
  { name: "Avocado", price: 25000 },
  { name: "Vanila", price: 30000 },
];
const invoice = new Invoice(items, 10);
invoice.output_Bill();
