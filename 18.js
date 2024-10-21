// 18. Tạo danh sách người dùng và lọc theo tuổi:
//  • Tạo lớp User để quản lý danh sách người dùng, và thêm phương thức để lọc người dùng trên 18 tuổi.
class User {
  constructor(person) {
    this.person = person;
  }
  check_age() {
    return this.person.filter((person) => person.age > 18);
  }
}
const Users = [
  { name: "Longkute", age: 24 },
  { name: "Sang", age: 17 },
  { name: "Tâm", age: 19 },
  { name: "Thừa", age: 23 },
];
const user = new User(Users);
const check = user.check_age();
console.log(check);
//xong
