// 16. Xử lý dữ liệu thời gian:
//  • Tạo lớp Clock để hiển thị giờ hiện tại và cập nhật theo thời gian thực.

class Clock {
    currentTime(){
     const current = new Date()
     const hours = String(current.getHours()).padStart(2, "0")
     const minutes = String(current.getMinutes()).padStart(2, "0")
     const seconds = String(current.getSeconds()).padStart(2, "0") 
     const time = `${hours} : ${minutes} : ${seconds}`
     document.getElementById("currentTime").innerHTML = time
    }
    updateClock(){
        setInterval(() => this.currentTime()
        , 1000);
    }
} 
const clock = new Clock();

clock.updateClock()
//xong