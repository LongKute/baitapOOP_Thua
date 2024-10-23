// class Person {
//     constructor(name) {
//         this.name = name;         // Tên người
//         this.children = [];       // Danh sách con cái
//     }

//     // Thêm con cái vào danh sách
//     addChild(child) {
//         this.children.push(child);
//     }

//     // Hiển thị mối quan hệ
//     display(indent = '') {
//         console.log(indent + this.name); // In tên người
//         this.children.forEach(child => child.display(indent + '  ')); // Đệ quy để in con cái
//     }
// }

// // Ví dụ sử dụng
// const grandpa = new Person('Ông nội');
// const father = new Person('Cha');
// const mother = new Person('Mẹ');
// const child1 = new Person('Con 1');
// const child2 = new Person('Con 2');

// // Thiết lập mối quan hệ
// grandpa.addChild(father);
// father.addChild(child1);
// father.addChild(child2);
// grandpa.addChild(mother); // Giả sử mẹ không có con

// // Hiển thị cây gia phả
// grandpa.display();


class Person {
    constructor(name, father = null, mother = null) {
        this.name = name;        // Tên người
        this.father = father;    // Người cha
        this.mother = mother;    // Người mẹ
    }

    // Thêm con cái
    addChildren(...children) {
        this.children = children; // Lưu danh sách con cái
    }

    // Hiển thị mối quan hệ
    display() {
        console.log(`Tên: ${this.name}`);
        if (this.father) {
            console.log(`  Cha: ${this.father.name}`);
        }
        if (this.mother) {
            console.log(`  Mẹ: ${this.mother.name}`);
        }
        if (this.children) {
            console.log(`  Con cái: ${this.children.map(child => child.name).join(", ")}`);
        }
        console.log('-------------------------');
    }
}

// Ví dụ sử dụng
const grandpa = new Person('Ông nội');
const grandma = new Person('Bà ngoại');

const father = new Person('Cha', grandpa, grandma);
const mother = new Person('Mẹ');

const child1 = new Person('Con 1', father, mother);
const child2 = new Person('Con 2', father, mother);

// Thiết lập mối quan hệ con cái
father.addChildren(child1, child2);

// Hiển thị cây gia phả
grandpa.display();
grandma.display();
father.display();
mother.display();
child1.display();
child2.display();