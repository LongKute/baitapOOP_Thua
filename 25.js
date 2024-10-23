// 25. Mô phỏng danh sách hàng đợi:
// • Tạo lớp Queue để mô phỏng một hàng đợi, bao gồm các phương thức thêm, xoá và kiểm tra độ dài của hàng đợi.
// có liên quan stack và stack and quere
//Quick and Dirty: Stack, Queue and Deque in JavaScript

class Queue {
  constructor() {
    this.commodity = [];
  }
  check_length() {
    return this.commodity.length;
  }
  addCommodity(product) {
    this.commodity.push(product);
  }
  deleteCommodity(product) {
    this.commodity = this.commodity.filter((item) => item !== product);
    return this.commodity;
  }
}

const quere = new Queue();
quere.addCommodity("Hàng cấm");
quere.addCommodity("Hàng Lậu");
console.log(quere.check_length());
console.log(quere.deleteCommodity("Hàng cấm"));
console.log(quere.check_length());
//xong