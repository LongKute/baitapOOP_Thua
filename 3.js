// 3. Lớp Car:
//  • Tạo lớp Car với các thuộc tính make(Thương hiệu), model(Loại xe), và phương thức drive(), sau đó tạo các đối tượng từ lớp này.

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  driver() {
    console.log(
      "tôi lái xe thương hiệu: " +
        `${this.make}` +
        " " +
        "loại: " +
        " " +
        `${this.model}`
    );
  }
}

const car1 = new Car("Vinfast", "VF 8");
const car2 = new Car("Mercedes", "C300");
const car3 = new Car("Chevrolet", "Trailblazer");
car1.driver();
car2.driver();
car3.driver();
