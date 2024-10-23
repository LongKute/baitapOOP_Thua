// 11. Quản lý sách trong thư viện:
// • Tạo lớp Library với phương thức để thêm, tìm, và xoá sách khỏi danh sách.

const elements = {};
const elementIDs = [
  "bookId",
  "bookName",
  "addButton",
  "bookList",
  "findBookId",
  "findBook",
  "findBookList",
];

elementIDs.forEach(function (item) {
  const element = document.getElementById(item);
  elements[item] = element
});

console.log(elements);

class Library {
    constructor() {
        this.books =[]
    }
    addBook(){
    // tạo biến
    const bookId = elements.bookId.value
    const bookName = elements.bookName.value
    const bookList1 = elements.bookList
    if (bookId.trim() === "" || bookName.trim() === "") {
        alert("Không được để trống trong ô")
        return;
    }
    // khai bao đối tượng 1 cuốn sách
    const book = {
        id: bookId,
        name: bookName
    }
    // đẩy vảo trong mảng books
    this.books.push(book)
    // tạo danh sách
    const li = document.createElement("li")
    li.textContent = `Id: ${book.id}, Name book: ${book.name}`
    // xuất ra danh sách
    bookList1.appendChild(li)
    console.log(bookList1);
    // xóa sau khi bấm nhập
    elements.bookId.value = '';
    elements.bookName.value = '';

    // tạo nút xóa 
    const deleteButton = document.createElement("button")
    deleteButton.textContent ="Delete"
    deleteButton.onclick = () => {
      this.deleteBook(book.id, li)
    }
    li.appendChild(deleteButton)
    }
    deleteBook(bookId, li ){
      this.books = this.books.filter((book) => book.id !== bookId)
      li.remove()    
    }
    findBook(){
      const findBookId = elements.findBookId.value
      const findBookList = elements.findBookList
      findBookList.innerHTML = ""

      const book = this.books.find((book) => book.id === findBookId)
      if (book) {
        const li = document.createElement("li");
        li.textContent = `ID: ${book.id}, Tên sách: ${book.name}`
        findBookList.appendChild(li)
      }else {
        alert("Không tìm thấy ID sách bạn đưa ra")
      }
      findBookId.value = ""
    }
    
}
const library = new Library();
// const library = new Library()

// //chưa xong
