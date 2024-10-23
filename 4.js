// 4. Sử dụng getter và setter:
// • Tạo lớp Rectangle với các thuộc tính width và height, thêm getter và setter để tính diện tích.

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }
  // getter: dùng để truy cập giá trị của một thuộc tính
  get rectangular_Area() {
    return this.height * this.width;
  }
  
  set Area(area) {
    return this.height = area / this.width;
  }
}
const rectangle = new Rectangle(2, 4);
console.log(rectangle.rectangular_Area);
const area = rectangle.Area = 10
console.log(area)


//xong
