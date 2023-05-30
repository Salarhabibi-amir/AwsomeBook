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

// function to add books;
function addBooks() {
  console.log('running addBooks');
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  books.push(new BooksConstructor(title, author));
  display();
}
// displaying books

function display() {
  console.log('runing display');
  const tbody = document.querySelector('.booklist');
  tbody.innerHTML = '';
  console.log(tbody);
  let index = 0;
  books.forEach((element) => {
    const currentRow = document.createElement('tr');
    const currentTitle = element.title;
    const currentAuthor = element.author;
    currentRow.innerHTML = `${currentTitle}<br>${currentAuthor} <button class='removeButton' value="${index}">Remove</button> <hr>`;
    tbody.appendChild(currentRow);
    index++;
  });

  // remove book from the books
  function removeBook(event) {
    console.log('runing removeBook');
    const indexToRemove = event.target.value;
    books.splice(indexToRemove, 1);
    display();
  }
  // display after removeing book

  const removebtn = document.querySelectorAll('.removeButton');
  console.log('this is remove button', removebtn);
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
console.log(browserTitle);

if (browserAuthor) {
  bookAuthor.value = browserAuthor;
}