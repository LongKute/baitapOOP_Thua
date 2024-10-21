// 12. Lớp Product với chiết khấu:
// • Tạo lớp Product với phương thức getDiscountedPrice() tính giá sau khi áp dụng chiết  hấu.
const percent = 10;
class Product {
    constructor(name, price, discount) {
        this.name = name
        this.price = price
        this.discount = discount
    }
    get discountedPrice (){
        return this.price - (this.price * this.discount/ 100)
    }
}
const product = new Product('Longkute', 2000000, 20);
console.log(product.discountedPrice);
//xong