// 11. Quản lý sách trong thư viện:
// • Tạo lớp Library với phương thức để thêm, tìm, và xoá sách khỏi danh sách.

const elements = {};
const elementIDs = [
  "bookId",
  "bookName",
  "addButton",
  "booktList",
  "findBooktId",
  "findBook",
  "findBookList",
];

elementIDs.forEach(function (item) {
  elements[item] = item = document.getElementById(item);
  //  return elements
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
    const bookList = elements.bookList
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
    bookList.appendChild(li)
    elements.bookId.value = '';
    elements.bookName.value = '';
    }
    deleteBook(){

    }
    findBook(){

    }
    
}
const library = new Library();
// const library = new Library()

// //chưa xong
