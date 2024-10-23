// 26. Thiết kế hệ thống ATM:
// • Tạo lớp ATM với các phương thức để kiểm tra số dư, rút tiền và nạp tiền vào tài khoản.
class ATM {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }
  check() {
    return `Số dư hiện tại của bạn là: ${this.balance}`;
  }
  deposit(depositMoney) {
    if (depositMoney > 0) {
      this.balance += depositMoney;
      return `Số tiền bạn nào vào tài khoản là: ${depositMoney}, số dư hiện tại của bạn trong thẻ là: ${this.balance}`;
    } else {
      return `Mời bạn nhập số tiền nạp lớn hơn 0`;
    }
  }
  withdraw(withdrawMoney) {
    if (withdrawMoney < this.balance) {
      this.balance -= withdrawMoney;
      return `Bạn rút số tiền là: ${withdrawMoney}, số dư hiện tại của bạn là: ${this.balance}`;
    } else if (withdrawMoney > this.balance) {
      return `Bạn rút số tiền là : ${withdrawMoney} lớn hớn số dư ở trong thẻ, số dư hiện tại của bạn là: ${this.balance}`;
    }
  }
}
const atm = new ATM();
console.log(atm.check());
console.log(atm.deposit(2000));
console.log(atm.withdraw(1000));
console.log(atm.check());
//xong