// 30. Mô phỏng trò chơi lô tô:
// • Tạo lớp LottoGame để mô phỏng trò chơi lô tô, bao gồm việc rút số ngẫu nhiên và kiểm tra kết quả.
class LottoGame {
    constructor(drawNumber) {
        this.numbers = []
        this.drawNumber = drawNumber
        
    }
    randomNumber1(){
        if (this.numbers.length < this.drawNumber) {
            const randomNum = (parseInt(Math.random(0,30) *100)) + 1
            this.numbers.push(randomNum)
            return randomNum;
        }
        
    }
    renderNumber(){
        return this.numbers.length > 0 ? this.numbers : "Chưa có số nào được rút"
    }
    check_user(userNumbers){
        const correctNumbers = userNumbers.filter((num) => this.numbers.includes(num))
        return `Bạn đoán đúng ${correctNumbers.length} số: ${correctNumbers.join(", ")}`;
    }
}
const lottoGame = new LottoGame(5);
lottoGame.randomNumber1(); 
lottoGame.randomNumber1();
lottoGame.randomNumber1();
lottoGame.randomNumber1();
lottoGame.randomNumber1();
console.log(lottoGame.renderNumber());
console.log(lottoGame.check_user([30, 40, 50 , 12, 4]));
//xong

