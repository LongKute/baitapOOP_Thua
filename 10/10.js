// 10. Quản lý sinh viên:
// • Tạo lớp University để quản lý danh sách sinh viên, thêm phương thức để thêm, xoá và tìm sinh viên.

class University {
  constructor() {
    this.students = [];
  }
  addStudent() {
    // tạo biến và lấy id bên html qua cho js
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const studentList = document.getElementById("studentList");
    // Kiểm tra input đầu vào không trống
    if (studentId.trim() === "" || studentName.trim() === "") {
      alert("Vui lòng không để trống");
      return;
    }
    // tạo đối tượng chỉ 1 sinh viên
    const student = {
      id: studentId,
      name: studentName,
    };
    // đẩy từ 1 sinh viên vào nhiều sinh viên dùng push
    this.students.push(student);
    // tạo danh sách bằng createElement
    const li = document.createElement("li");
    li.textContent = `Id: ${student.id}, name: ${student.name}`;

    // thêm li vào danh sách
    studentList.appendChild(li);

    // tạo nút delete
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      this.deleteStudent(student.id, li);
    };
    li.appendChild(deleteButton);
  }
  deleteStudent(studentId, li) {
    // lọc sinh viên ra khaoỉ mảng
    this.students = this.students.filter((student) => student.id !== studentId);
    // xoá ra khỏi danh sách
    li.remove();
  }

  findStudent() {
    // khai báo id của find
    const findId = document.getElementById("findStudentId").value;
    const findStudentList = document.getElementById("findStudentList");
    findStudentList.innerHTML = "";

    const student = this.students.find((student) => student.id === findId);
    if (student) {
      const li = document.createElement("li");
      li.textContent = `ID: ${student.id}, name: ${student.name}`;
      findStudentList.appendChild(li);
    } else {
      alert("Không tìm thấy ID bạn đưa ra");
    }
    // findId.value = "";
    document.getElementById("findStudentId").value = "";
  }
}
// khai báo lớp University
const university = new University();
