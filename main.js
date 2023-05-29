//object constructor
function BooksConstructor(
    title,
    author
) {
    this.title = title;
    this.author = author;
}
//all books will be saved into the next array; 
const books = [

]

//function to add books;
function addBooks() {
    // console.log('running addBooks');
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    books.push(new BooksConstructor(title, author));
    displaybooks();
}
//displaying books
function displaybooks() {
    const booklist = document.querySelector('.booklist');
    const row = document.createElement('tr');
    books.forEach(element => {
        row.innerHTML = ;
    });

    booklist.append(row);

}

const addBookButton = document.querySelector('#addBook');
addBookButton.addEventListener('click', addBooks);