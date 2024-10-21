// 21. Tính toán đa hình:
//  • Tạo các lớp Shape, Circle, Square, và viết phương thức tính diện tích, sử dụng tính đa hình.

// Tính đa hình: kế thừa và ghi đè biến

class Shape {
  area() {
    throw new Error("Test");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius * this.radius * 3.14;
  }
}
class Square extends Shape {
  constructor(edge) {
    super();
    this.edge = edge;
  }
  area() {
    return (this.edge *= this.edge);
  }
}
const shapes = [new Circle(5), new Square(4)];
function calculate_Area(shapes) {
  shapes.forEach((shape) => {
    console.log(`Area: ${shape.area()}`);
  });
}

calculate_Area(shapes);
//xong