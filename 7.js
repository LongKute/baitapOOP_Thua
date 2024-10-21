// 7. Tạo đối tượng từ một mảng:
// • Tạo lớp Team, khởi tạo một mảng các đối tượng Player với thông tin như tên và vị trí.

class Team {
  constructor(player) {
    this.player = player;
  }
  information() {
    return this.player.forEach(x => {
        console.log(`Name: ${x.name}, Position: ${x.position}`);
        
    });
  }
}

const players = [
  { name: "Longkute", position: "Hậu vệ" },
  { name: "Sang", position: "Hậu cần" },
  { name: "Tâm", position: "Tiền vệ" },
  { name: "Thừa", position: "Tiền đạo" },
];
const team = new Team(players);
team.information()
//xong
