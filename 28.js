// 28. Tạo lớp Tournament và xử lý kết quả:
//  • Xây dựng lớp để quản lý kết quả của các đội bóng trong một giải đấu, thêm phương thức để tính điểm và xếp hạng đội.

class Team {
  constructor(name) {
    this.name = name;
    this.win = 0;
    this.draw = 0;
    this.loss = 0;
    this.point = 0;
  }
  score() {
    this.point = this.win * 3 + this.draw * 1;
  }
}

class Tournament {
  constructor() {
    this.teams = [];
  }
  // có thể lấy class để sử dụng 1 class khác
  addTeam(name) {
    let team = new Team(name);
    this.teams.push(team);
  }
  updatePoint(team1Name, team2Name, result) {
    const team1 = this.teams.find((team) => team.name === team1Name);
    const team2 = this.teams.find((team) => team.name === team2Name);
    if (result === "win") {
      team1.win++;
      team2.loss++;
    } else if (result === "loss") {
      team1.loss++;
      team2.win++;
    } else if (result === "draw") {
      team1.draw++;
      team2.draw++;
    }
    team1.score();
    team2.score();
  }
  ratings() {
    return this.teams
      .sort((a, b) => a.point - b.point)
      .map(
        (team, index) =>
          `${index + 1}. ${team.name}: ${team.point} point (Win: ${
            team.win
          }, loss: ${team.loss}, draw: ${team.draw})`
      );
  }
}

let tournament = new Tournament();

tournament.addTeam("Team Saigon");
tournament.addTeam("Team Valorant");
tournament.addTeam("Team Steam");

tournament.updatePoint("Team Saigon", "Team Valorant", "win");
tournament.updatePoint("Team Valorant", "Team Steam", "loss");
tournament.updatePoint("Team Steam", "Team Valorant", "draw");

console.log(tournament.ratings());
//xong