

// object constructor
class Books {
  constructor () {
    this.bookList = [];

    const addBookButton = document.querySelector('#addBook');
    addBookButton.addEventListener('click', this.addBook.bind(this));
  }

  addListeners () {
    console.log('adding event listeners')
    
    const removebtn = document.querySelectorAll('.removeButton');
    removebtn.forEach((element) => {
      element.addEventListener('click', this.removeBook.bind(this));
    });
  }

  removeBook (event) {
    console.log('runing this.removeBook')
    const indexToRemove = event.target.value;
    this.bookList.splice(indexToRemove, 1);

    this.display();
    this.addListeners();
  }

  addBook ( ) {
    console.log('runing .addBook');
    const addtitle = document.querySelector('#title').value;
    const addauthor = document.querySelector('#author').value;
     this.bookList.push ( {'title':addtitle, 'author':addauthor} );
     this.display();
     this.addListeners();
  }

  display() {
    console.log('runing this.display()');
    const tbody = document.querySelector('.booklist');
    tbody.innerHTML = '';
    let index = 0;
    // console.log('bookList from this.dislplay=',this.bookList);
    this.bookList.forEach((element) => {
      const currentRow = document.createElement('tr');
      const currentTitle = element.title;
      const currentAuthor = element.author;
      currentRow.innerHTML = `${currentTitle}<br>${currentAuthor} <button class='removeButton' value="${index}">Remove</button> <hr>`;
      tbody.appendChild(currentRow);
      index += 1;
    });
  }
}

/*TEST WITH OBJECTS*/
/*TEST WITH OBJECTS*/
// all books will be saved into the next array;
console.log('Real Project now')

const booksCollection = new Books;


// displaying booksCollection


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

