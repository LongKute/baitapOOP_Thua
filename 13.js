// 13. Lớp Vehicle và kế thừa:
//  • Tạo lớp Vehicle với các thuộc tínhtype, speed,  tạo các lớp con như Car, Bike, thêm các phương thức đặc biệt cho từng loại.
// kế thừa bài 3
// const Car = require("./3");

class Vehicle  {
  constructor(speed, type) {
    this.speed = speed
    this.type = type
  }
}
  class Car extends Vehicle {
  constructor(make, type, speed, model) {
    super(speed, type)
    this.make = make
    this.model = model
  }
  driver(){
    console.log(`Tôi lái xe thương hiệu: ${this.make}, mẫu: ${this.model}, loại: ${this.type}, tốc độ: ${this.speed}`);
  }
}
class Bike extends Vehicle {
  constructor(make, type, speed  ) {
    super(speed, type)
    this.make = make
  }
  special(){
    console.log(`xe đạp thương hiệu: ${this.make}, loại: ${this.type}, chạy được vận tốc: ${this.speed}, tiếng còi ting ting`);
    
  }
}

const car = new Car("Vinfast", "SUV", 200, "VF8" )
const bike = new Bike("Trek", "Road Bike", 50)
car.driver()
bike.special()
// chưa xong
