class TaskManager {
    constructor() {
        this.tasks = []; // Mảng để lưu trữ danh sách công việc
    }

    // Thêm công việc mới vào danh sách
    addTask(description) {
        if (description.trim() !== "") {
            this.tasks.push({ description, completed: false });
            this.renderTaskList(); // Cập nhật danh sách khi thêm công việc
        } else {
            alert("Task description cannot be empty.");
        }
    }

    // Hiển thị danh sách công việc
    renderTaskList() {
        const taskListDiv = document.getElementById('taskList');
        taskListDiv.innerHTML = ""; // Xóa nội dung cũ

        this.tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            if (task.completed) {
                taskDiv.classList.add('completed');
            }

            const taskDescription = document.createElement('span');
            taskDescription.textContent = task.description;

            // Tạo checkbox để đánh dấu hoàn thành
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed; // Đánh dấu nếu task đã hoàn thành
            checkbox.onchange = () => {
                task.completed = checkbox.checked; // Cập nhật trạng thái hoàn thành
                this.renderTaskList(); // Cập nhật lại danh sách
            };

            // Tạo nút "Edit"
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-button';
            editButton.onclick = () => {
                const newDescription = prompt("Edit task description:", task.description);
                if (newDescription !== null && newDescription.trim() !== "") {
                    task.description = newDescription; // Cập nhật mô tả công việc
                    this.renderTaskList(); // Cập nhật lại danh sách
                }
            };

            // Tạo nút "Delete"
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = () => {
                this.deleteTask(index); // Xóa công việc khi nhấn nút
            };

            taskDiv.appendChild(taskDescription);
            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(editButton);
            taskDiv.appendChild(deleteButton);
            taskListDiv.appendChild(taskDiv);
        });
    }

    // Hàm xóa công việc
    deleteTask(index) {
        this.tasks.splice(index, 1); // Xóa công việc tại chỉ số index
        this.renderTaskList(); // Cập nhật lại danh sách sau khi xóa
    }
}

// Khởi tạo ứng dụng
const taskManager = new TaskManager();

// Thêm sự kiện cho nút "Add Task"
document.getElementById('addTaskButton').onclick = function() {
    const taskDescriptionInput = document.getElementById('taskDescription');
    taskManager.addTask(taskDescriptionInput.value);
    taskDescriptionInput.value = ""; // Xóa nội dung ô nhập sau khi thêm
};