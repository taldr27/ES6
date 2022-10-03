import Books from './book_constructor.js';
import Interface from './interfaces.js';
import Store from './store_const.js';

let counter = 0;
const add = (e) => {
  counter += 1;
  e.preventDefault();
  const title = document.querySelector('#input_title').value;
  const author = document.querySelector('#input_author').value;
  const id = counter;

  if (title === '' || author === '') {
    const section = document.getElementById('form-section');
    const message = document.createElement('p');
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    // Instantiate
    const book = new Books(title, author, id);

    // Add to Interface
    Interface.addBookToList(book);

    Store.addBook(book);

    Interface.clearFields();
  }
};

export default add;