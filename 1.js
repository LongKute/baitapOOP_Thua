// 1. Tạo lớp Person:
//  • Tạo lớp Person với các thuộc tính name, age, và phương thức greet() để in ra “Hello, my name is…”.

 class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    greet(){
        console.log("Hello, my name is " + `${this.name}`);
        
    }
}
const person = new Person('Longkute', 24)
person.greet()

export default Person