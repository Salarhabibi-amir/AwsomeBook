// object constructor
function BooksConstructor(
  title,
  author,
) {
  this.title = title;
  this.author = author;
}
// all books will be saved into the next array;
const books = [

];

// displaying books

function display() {
  const tbody = document.querySelector('.booklist');
  tbody.innerHTML = '';
  let index = 0;
  books.forEach((element) => {
    const currentRow = document.createElement('tr');
    const currentTitle = element.title;
    const currentAuthor = element.author;
    currentRow.innerHTML = `${currentTitle}<br>${currentAuthor} <button class='removeButton' value="${index}">Remove</button> <hr>`;
    tbody.appendChild(currentRow);
    index += 1;
  });

  // remove book from the books
  function removeBook(event) {
    const indexToRemove = event.target.value;
    books.splice(indexToRemove, 1);
    display();
    saveInLocalStorage()
  }
  // display after removeing book

  const removebtn = document.querySelectorAll('.removeButton');
  removebtn.forEach((element) => {
    element.addEventListener('click', removeBook);
  });
}

// function to add books;
function addBooks() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  books.push(new BooksConstructor(title, author));
  display();
  saveInLocalStorage()
}

const addBookButton = document.querySelector('#addBook');
addBookButton.addEventListener('click', addBooks);

// presarving data to the local storage
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
bookTitle.addEventListener('keydown', () => {
  localStorage.setItem('title', bookTitle.value);
});
bookAuthor.addEventListener('keydown', () => {
  localStorage.setItem('Author', bookAuthor.value);
});
const browserTitle = localStorage.getItem('title');
const browserAuthor = localStorage.getItem('Author');
if (browserTitle) {
  bookTitle.value = browserTitle;
}

if (browserAuthor) {
  bookAuthor.value = browserAuthor;
}

/* --------Start Local Storage------------  */

function getFromLocalStorage() {
  const currentData = localStorage.getItem('books');
  const getBooksData = JSON.parse(currentData);
  console.log('getbooksDAta =', getBooksData);
  if (getBooksData) { books.push(...getBooksData); }
  console.log('books original array= ', books);
  display();
}

function saveInLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function validateLocalStorage() {
  if (!localStorage.getItem('books')) {
    saveInLocalStorage();
  } else {
    getFromLocalStorage();
  }
}

validateLocalStorage();

/* --------Ends Local Storage------------  */