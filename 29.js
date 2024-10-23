// 29. Quản lý giỏ hàng với nhiều loại sản phẩm:
//  • Tạo lớp Cart, Product, và viết phương thức để quản lý giỏ hàng, bao gồm thêm sản phẩm, tính tổng tiền và áp dụng giảm giá.
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    const currentProduct = this.products.find((x) => x.name === product.name);
    if (currentProduct) {
      currentProduct.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
  }

  total() {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
  totalDiscout(discout) {
    const total = this.total();
    const discoutper = total * (discout / 100);
    return total - discoutper;
  }
  showCart() {
    return this.products.map((product) => {
      return `${product.name} - số lượng: ${product.quantity} - Giá sản phẩm: ${product.price}`;
    });
  }
}

const product1 = new Product("Quần", 20000, 2);
const product2 = new Product("Áo", 10000, 1);

const cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product2);
console.log(cart.showCart());
console.log(cart.total());
console.log(cart.totalDiscout(10));
//xong