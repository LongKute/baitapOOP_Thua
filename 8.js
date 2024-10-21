// 8. Phương thức tính toán:
// • Tạo lớp Circle với bán kính, và phương thức getArea() để tính diện tích của hình tròn.
const Pi = 3.14;
class Circle {
  constructor(radius, circle_Area) {
    this.radius = radius;
    this.circle_Area = circle_Area;
  }
  getArea() {
    return (this.circle_Area = (this.radius * this.radius) / Pi);
  }
}
const circle = new Circle(4);
console.log(circle.getArea());
// xong