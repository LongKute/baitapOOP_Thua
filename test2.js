class Person {
    constructor(name, role, father = null, mother = null) {
        this.name = name;           // Tên người
        this.role = role;           // Vai trò (Ông, Bà, Cha, Mẹ, Con)
        this.father = father;       // Người cha
        this.mother = mother;       // Người mẹ
        this.children = [];         // Danh sách con cái
    }

    // Phương thức để thêm con cái
    addChild(child) {
        this.children.push(child); // Thêm con vào danh sách
    }

    // Phương thức để hiển thị mối quan hệ
    display(indent = '') {
        console.log(`${indent}${this.role}: ${this.name}`);
        if (this.father) {
            console.log(`${indent}  Cha: ${this.father.name}`);
        }
        if (this.mother) {
            console.log(`${indent}  Mẹ: ${this.mother.name}`);
        }
        if (this.children.length > 0) {
            console.log(`${indent}  Con cái:`);
            this.children.forEach(child => child.display(indent + '    ')); // Gọi đệ quy để hiển thị con cái
        }
    }
}

// Ví dụ sử dụng
const grandpa = new Person('Nguyễn Văn A', 'Ông'); // Ông nội
const grandma = new Person('Nguyễn Thị B', 'Bà'); // Bà ngoại

const father = new Person('Nguyễn Văn C', 'Cha', grandpa, grandma); // Cha
const mother = new Person('Trần Thị D', 'Mẹ'); // Mẹ

const child1 = new Person('Nguyễn Văn E', 'Con', father, mother); // Con 1
const child2 = new Person('Nguyễn Văn F', 'Con', father, mother); // Con 2

// Thiết lập mối quan hệ con cái
father.addChild(child1);
father.addChild(child2);

// Hiển thị cây gia phả
console.log("Cây gia phả:");
grandpa.display();
grandma.display();
father.display();
mother.display();
child1.display();
child2.display();
