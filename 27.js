// 27. Xây dựng hệ thống khách sạn:
// • Tạo lớp Hotel và quản lý danh sách phòng, viết các phương thức để kiểm tra phòng trống và đặt phòng.
class Room {
    constructor(number, status = true){
        this.number = number
        this.status = status
    }
}

const rooms = [
     new Room(200),
     new Room(201),
     new Room(202,false),
     new Room(203),
     new Room(204)
]
class Hotel{
    constructor(rooms){
        this.rooms = rooms
    }
    checkRooms(){
       return this.rooms.filter((room) => room.status)
    }
    bookRoom(roomNumber){
       let room = this.rooms.find(room => room.number === roomNumber) 
       if (room && room.status) {
            room.status = false;
            return `Phòng số: ${roomNumber} đặt thành công`
       }else if(!room){
            return `Phòng số: ${roomNumber} không hề tồn tại mời bạn kiểm tra lại`
       }else{
            return `Phòng số: ${roomNumber} đã có khách đặt, mời bạn chọn phòng khác`
       }
    }
}


const hotel = new Hotel(rooms);
console.log(hotel.checkRooms());
console.log(hotel.bookRoom(200));
console.log(hotel.checkRooms());
//xong

