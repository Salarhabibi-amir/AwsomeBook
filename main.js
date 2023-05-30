

// object constructor
class Books {
  constructor () {
    this.bookList = [];
  }
  addBook ( title, author ) {
    this.bookList.push (
      {'title':title, 'author':author}
    )
  }
}

/*TEST WITH OBJECTS*/

const example = new Books;
console.log('booklist',example.bookList)
example.addBook('harri1', 'author 1');
example.addBook('harri2', 'author 2');
console.log(example.bookList)

/*TEST WITH OBJECTS*/
// all books will be saved into the next array;
console.log('Real Project now')

const booksCollection = new Books;


// displaying booksCollection
function display() {
  const tbody = document.querySelector('.booklist');
  tbody.innerHTML = '';
  let index = 0;
  booksCollection.forEach((element) => {
    const currentRow = document.createElement('tr');
    const currentTitle = element.title;
    const currentAuthor = element.author;
    currentRow.innerHTML = `${currentTitle}<br>${currentAuthor} <button class='removeButton' value="${index}">Remove</button> <hr>`;
    tbody.appendChild(currentRow);
    index += 1;
  });
}

/* -------- Start Local Storage ------------  */
/*
function getFromLocalStorage() {
  const currentData = localStorage.getItem('booksCollection');
  const getbooksCollectionData = JSON.parse(currentData);
  if (getbooksCollectionData) { booksCollection.push(...getbooksCollectionData); }
  display();
}

function saveInLocalStorage() {
  localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
}

function validateLocalStorage() {
  if (!localStorage.getItem('booksCollection')) {
    saveInLocalStorage();
  } else {
    getFromLocalStorage();
  }
}

validateLocalStorage();*/

/* --------Ends Local Storage------------  */

// remove book from the booksCollection
function removeBook(event) {
  const indexToRemove = event.target.value;
  booksCollection.splice(indexToRemove, 1);
  display();
  saveInLocalStorage();

  const removebtn = document.querySelectorAll('.removeButton');
  removebtn.forEach((element) => {
    element.addEventListener('click', removeBook);
  });
  // display after removeing book
}

const removebtn = document.querySelectorAll('.removeButton');
removebtn.forEach((element) => {
  element.addEventListener('click', removeBook);
});

// function to add booksCollection;
function addBooks() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  booksCollection.push(new BooksConstructor(title, author));
  display();
  saveInLocalStorage();
  const removebtn = document.querySelectorAll('.removeButton');
  removebtn.forEach((element) => {
    element.addEventListener('click', removeBook);
  });
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