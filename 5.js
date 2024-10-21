// 5. Phương thức tĩnh (Static method):
// • Tạo lớp MathUtils với các phương thức tĩnh như sum(), subtract(), multiply(), divide().

class MathUtils {
  static sum(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    return a / b;
  }
}

// Gọi static method trực tiếp từ class
console.log(MathUtils.sum(2, 4));
console.log(MathUtils.subtract(4, 2));
console.log(MathUtils.multiply(2, 4));
console.log(MathUtils.divide(4, 2));
// xong
