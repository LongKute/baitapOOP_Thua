// 6. Xử lý ngoại lệ:
// • Thêm phương thức kiểm tra ngoại lệ vào lớp BankAccount, ném ngoại lệ khi số tiền rút lớn hơn số dư.
const moneys = 90000;
const withdraws = 220000;

class BankAccount {
  constructor(money, withdraw, balance) {
    this.money = money;
    this.withdraw = withdraw;
    this.balance = money;
  }
  check() {
    try {
      if (this.withdraw > this.money) {
        throw new Error("Số tiền rút lớn hơn số tiền trong tài khoản!");
      }
      this.balance -= this.withdraw;
      console.log("Số tiền bạn rút là: " + `${this.withdraw}` + " " + "hợp lệ");
      console.log("Số dư hiện tại của bạn" + " " + `${this.balance}`);
    } catch (error) {
      console.log(error.message);
    }
  }
}

const bankAccount = new BankAccount(moneys, withdraws);

bankAccount.check();
// xong
