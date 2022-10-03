// Interact with styles
const divList = document.getElementById('div-container');
const formSection = document.getElementById('form-section');
const contact = document.getElementById('contact');

const addB = () => {
  divList.style.display = 'none';
  formSection.style.display = 'block';
  contact.style.display = 'none';
};

const showB = () => {
  divList.style.display = 'flex';
  formSection.style.display = 'none';
  contact.style.display = 'none';
};

const contactB = () => {
  divList.style.display = 'none';
  formSection.style.display = 'none';
  contact.style.display = 'block';
};

export { addB, showB, contactB };