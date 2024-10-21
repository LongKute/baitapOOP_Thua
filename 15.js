// 15. Tính toán tiền lương cho nhiều loại nhân viên:
// • Tạo lớp FullTimeEmployee, PartTimeEmployee kế thừa từ lớp Employee và viết phương thức để tính lương.
// dùng kế thừa từ bài 9
const Employee = require("./9");

class FullTimeEmployee extends Employee {
  constructor(salary, bonus) {
    super(salary);
    this.bonus = bonus;
  }
  salaryFullTime() {
    return this.salary * 12 + this.bonus + "$";
  }
}
class PartTimeEmployee extends Employee {
  constructor(hourRate, workHourMonth) {
    super(0);
    this.hourRate = hourRate;
    this.workHourMonth = workHourMonth;
  }
  salaryPartTime() {
    return this.hourRate * this.workHourMonth * 12 + "$";
  }
}

const fullTimeEmployee = new FullTimeEmployee(9000, 2000);
const partTimeEmployee = new PartTimeEmployee(15, 100);
console.log(fullTimeEmployee.salaryFullTime());
console.log(partTimeEmployee.salaryPartTime());

//xong
