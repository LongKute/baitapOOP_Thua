// 9. Lớp Employee và tính lương:
// • Tạo lớp Employee với thuộc tính salary, thêm phương thức calculateAnnualSalary().

class Employee {
  constructor(salary) {
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return this.salary * 12 + "$";
  }
}

// const employee1 = new Employee(5000);
// const employee2 = new Employee(7000);
// const employee3 = new Employee(9000);
// console.log(employee1.calculateAnnualSalary());
// console.log(employee2.calculateAnnualSalary());
// console.log(employee3.calculateAnnualSalary());
module.exports = Employee;
//xong
