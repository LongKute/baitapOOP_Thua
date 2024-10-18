// 10. Quản lý sinh viên:
// • Tạo lớp University để quản lý danh sách sinh viên, thêm phương thức để thêm, xoá và tìm sinh viên.

// class University {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.student = []
//   }
//   addStudent() {
    
//   }
//   deleteStudent() {
    
//   }
//   findStudent() {}
// }


class University {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.students = []; // Mảng chứa danh sách sinh viên
    }
  
    // Thêm sinh viên
    addStudent(studentId, studentName) {
      // Kiểm tra đầu vào
      if (studentId.trim() === "" || studentName.trim() === "") {
        alert("Không được để trống kí tự");
        return;
      }
  
      // Tạo đối tượng sinh viên
      const student = { id: studentId, name: studentName };
      this.students.push(student); // Thêm vào danh sách
  
      // Tạo phần tử danh sách hiển thị sinh viên
      const li = document.createElement("li");
      li.textContent = `ID: ${studentId}, Name: ${studentName}`;
  
      // Thêm nút xóa cho mỗi sinh viên
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => {
        this.deleteStudent(studentId, li); // Xóa sinh viên khi nhấn nút
      };
  
      // Hiện nút xóa trong li
      li.appendChild(deleteButton);
  
      // Xuất ra danh sách sinh viên
      const studentList = document.getElementById("studentList");
      studentList.appendChild(li);
  
      // Xóa giá trị sau khi thêm sinh viên
      document.getElementById("studentId").value = "";
      document.getElementById("studentName").value = "";
    }
  
    // Xóa sinh viên
    deleteStudent(studentId, listItem) {
      // Xóa khỏi DOM
      listItem.remove();
  
      // Xóa sinh viên khỏi mảng students
      this.students = this.students.filter(student => student.id !== studentId);
    }
  
    // Tìm sinh viên theo ID
    findStudent(studentId) {
      const student = this.students.find(student => student.id === studentId);
      if (student) {
        alert(`Found student: ${student.name} (ID: ${student.id})`);
      } else {
        alert(`Student with ID: ${studentId} not found`);
      }
    }
  }
  
  // Khởi tạo đối tượng University
  const myUniversity = new University(1, 'My University');
  
  // Xử lý khi nhấn nút Add Student
  document.getElementById("addStudentBtn").addEventListener("click", function() {
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    myUniversity.addStudent(studentId, studentName);
  });
  
  // Xử lý khi nhấn nút Find Student
  document.getElementById("findStudentBtn").addEventListener("click", function() {
    const studentId = document.getElementById("findStudentId").value;
    myUniversity.findStudent(studentId);
  });