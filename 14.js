// 14. Tạo danh sách học sinh giỏi:
//  • Tạo lớp School với phương thức để lọc ra các học sinh có điểm trên 8.
class School {
    constructor(student) {
        this.student = student
       
    }
    
    check_point_8(){
        return this.student.filter((student) => student.point > 8)
    }
}
const students = [
    {name: 'Longkute', point: 10},
    {name: 'Tâm', point: 9},
    {name: 'Sang', point: 8},
    {name: 'thừa', point: 7}
]
const school = new School(students);
const check = school.check_point_8()
console.log(check);

//xong