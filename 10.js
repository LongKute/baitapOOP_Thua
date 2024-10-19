// 10. Quản lý sinh viên:
// • Tạo lớp University để quản lý danh sách sinh viên, thêm phương thức để thêm, xoá và tìm sinh viên.

class University {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.student = []
  }
  addStudent(studentId, studentName) {
    if (studentId.trim() == "" || studentName == "") {
      alert("Không được để trống ký tự")
      return;
    }
    // tạo  object chứa id và name
    const student = {
      id: studentId,
      name: studentName
    };
    // 
    this.student.push(student);
    // tạo danh sách li
    const li = document.createElement("li");
    li.textContent = `ID: ${studentId}, Tên: ${studentName}`
    // Xuất ra danh sách
    const studentList = document.getElementById("studentList")
    studentList.appendChild(li);
    //sau khi nhập input id và name sẽ tự động xoá
    document.getElementById(studentId).value = "";
    document.getElementById(studentName).value = "";
  }
  deleteStudent() {
    
  }
  findStudent() {}
}

const university = new University()

document.getElementById("addStudent").addEventListener("click", function () {
  const studentId = document.getElementById("studentId").value;
  const studentName = document.getElementById("studentName").value;
  university.addStudent(studentId, studentName);
});
