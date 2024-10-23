// 22. Quản lý cây gia phả:
//  • Tạo lớp Person và các thuộc tính cho cây gia phả (cha mẹ, con cái), xây dựng phương thức để hiển thị mối quan hệ.
// html
class Person {
  constructor(name, role, father, mother) {
    (this.name = name),
      (this.role = role),
      (this.father = father),
      (this.mother = mother),
      (this.children = []);
  }
  addChild(child) {
    this.children.push(child);
  }
  output_family() {
    console.log(`${this.role}: ${this.name}`);
    if (this.father) {
      console.log(`  Cha: ${this.father.name}`);
    }
    if (this.mother) {
      console.log(`  Mẹ: ${this.mother.name}`);
    }
    if (this.children.length > 0) {
      console.log(`  Con cái:`);
      for (let child of this.children) // for.. of: dùng để duyệt qua từng phần tử của this.childen
        console.log(`  - ${child.role}: ${child.name}`);
      }
    }
  }

const grandpa = new Person("Nguyễn Văn A", "Ông");
const grandma = new Person("Nguyễn Thị B", "Bà");

const father = new Person("Nguyễn Văn C", "Cha", grandpa, grandma);
const mother = new Person("Trần Thị D", "Mẹ");

const child1 = new Person("Nguyễn Văn E", "Con", father, mother);
const child2 = new Person("Nguyễn Văn F", "Con", father, mother);
father.addChild(child1);
father.addChild(child2);
console.log("Cây gia phả:");
grandpa.output_family();
grandma.output_family();
father.output_family();
mother.output_family();
child1.output_family();
child2.output_family();
//xong
