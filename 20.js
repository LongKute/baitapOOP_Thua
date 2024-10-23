// 20. Quản lý lớp học:
// • Tạo lớp Classroom để quản lý danh sách học sinh và giáo viên, thêm phương thức để tính số lượng học sinh trung bình.

class Classroom {
  constructor(name, teach, student) {
    this.name = name;
    this.teach = teach;
    this.student = student;
  }

  static average(classrooms) {
    const totalStudent = classrooms.reduce(
      (sum, classroom) => sum + classroom.student.length,
      0
    );
    return totalStudent / classrooms.length;
  }
}

const classrooms = [
  // new Classroom ('A11', "Tâm", ["Thừa", "Sang", "Longkute"]) ,
  new Classroom("A12", "Sang", ["Hiếu", "Minh", "Phương", "Tiến"]),
  // new Classroom ('A13', "Thừa", ["Hoàng", "Linh", "Hoa"]) ,
  // new Classroom ('A14', "Longkute", ["Siu", "Phước", "Thuận"])
];
const average = Classroom.average(classrooms);
console.log(`Tính trung bình ${average}`);
// xong
