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
    console.log('running addBooks');
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    books.push(new BooksConstructor(title, author));
    displaybooks();
}
//displaying books
function displaybooks() {
    console.log("displaybooks running")
    console.log(books);
    const booklist = document.querySelector('.booklist');
    const row = document.createElement('tr');
    let index = 0;
    books.forEach(element => {
        const currentTitle = element.title;
        const currentAuthor = element.author;
        row.innerHTML = `${currentTitle}<br>${currentAuthor} <button class='removeButton' value="${index}">Remove</button> <hr>`;
        index++;
    });
    booklist.append(row);
    //Add event listener to remove button;
    const removebtn = document.querySelectorAll('.removeButton');
    console.log('this is remove button', removebtn);
    removebtn.forEach(element => {
        element.addEventListener('click', removeBook);
    });
}

//remove book from the books
function removeBook(event) {
    console.log('runing removeBook');
    const indexToRemove = event.target.value;
    books.splice(indexToRemove, 1);
    display()
}
// display after removeing book
function display() {
    const booklist = document.querySelector('.booklist');
    const row = document.createElement('tr');
    booklist.innerHTML = '';
    let index = 0;
    books.forEach(element => {
        const currentTitle = element.title;
        const currentAuthor = element.author;
        row.innerHTML = `${currentTitle}<br>${currentAuthor} <button class='removeButton' value="${index}">Remove</button> <hr>`;
        index++;
    });
    booklist.append(row);

}
const addBookButton = document.querySelector('#addBook');
addBookButton.addEventListener('click', addBooks);