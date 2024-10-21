// 2. Lớp kế thừa:
//  • Tạo lớp Student kế thừa từ lớp Person, thêm thuộc tính grade và phương thức study().
const Person = require("./1.js");

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age), (this.grade = grade);
  }

  study() {
    console.log(
      "Học sinh Tên:" +
        `${this.name}` +
        " " +
        "có số tuổi là:" +
        `${this.age}` +
        " " +
        "đạt hạng:" +
        " " +
        `${this.grade}`
    );
  }
}

const student = new Student("Longkute", 24, "Best");
student.study();
// xong