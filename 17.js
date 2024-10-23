// 17. Quản lý danh sách công việc:
// • Tạo lớp Task để quản lý một danh sách công việc, bao gồm các thuộc tính description, status, và phương thức để đánh dấu công việc đã hoàn thành.
class Task {
    constructor() {
        this.tasks = []
                  
    }

    addTask(description){
        const task = {
            description: description,
            status: "Chưa hoàn thành"
        }
        this.tasks.push(task)
    }
    check_work() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task.description}, trạng thái: ${task.status}`);
            
        });
    }
    complete(index) {
     if (this.tasks[index]) {
        this.tasks[index].status = "Hoàn thành"
     }
    }
}
const task = new Task();
task.addTask('Dọn dẹp nhà cửa')
task.addTask('Chơi Valorant')
task.addTask('Ngủ')
task.addTask('Cứu thế giới ')
task.check_work()
console.log("----------------------------------");

task.complete(0)
task.complete(2)
task.check_work()

//xong