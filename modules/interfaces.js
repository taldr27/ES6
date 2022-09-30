import Store from "./store_const.js";

export default class Interface {
    static displayBooks() {
      const books = Store.getBooks();
      books.forEach((book) => Interface.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#books-cont');
      const row = document.createElement('li');

      row.innerHTML = `<span class="title">'${book.title}' by ${book.author}</span>
      <button class='list-btn'><a class="delete" id='${book.id}' href="#">Remove</a></button>`;
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static clearFields() {
      document.querySelector('#input_title').value = '';
      document.querySelector('#input_author').value = '';
    }
  }
