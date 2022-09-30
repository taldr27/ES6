import { addB, showB, contactB } from './modules/refresh_page.js';

const divList = document.getElementById('addNav');
const formSection = document.getElementById('listNav');
const contact = document.getElementById('contactNav');


divList.addEventListener('click', addB);
formSection.addEventListener('click', showB);
contact.addEventListener('click', contactB);


import interfaces from './modules/interfaces.js';
import add from './modules/addBook.js';
import remove from './modules/removeBook.js'

document.querySelector('#book-form').addEventListener('submit', add);
document.querySelector('#books-cont').addEventListener('click', remove);

document.addEventListener('DOMContentLoaded', interfaces.displayBooks);
