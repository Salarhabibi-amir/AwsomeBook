// object constructor
class Books {
    constructor() {
        this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
        const addBookButton = document.querySelector('#addBook');
        addBookButton.addEventListener('click', this.addBook.bind(this));
        if (this.bookList !== null) {
            this.display();
            this.addListeners();
        }
    }

    updateLocalStorage() {
        localStorage.setItem('bookList', JSON.stringify(this.bookList));
    }

    addListeners() {
        const removebtn = document.querySelectorAll('.removeButton');
        removebtn.forEach((element) => {
            element.addEventListener('click', this.removeBook.bind(this));
        });
    }

    removeBook(event) {
        const indexToRemove = event.target.value;
        this.bookList.splice(indexToRemove, 1);

        this.display();
        this.addListeners();
        this.updateLocalStorage();
    }

    addBook() {
        const addtitle = document.querySelector('#title').value;
        const addauthor = document.querySelector('#author').value;
        this.bookList.push({ title: addtitle, author: addauthor });
        this.display();
        this.addListeners();
        this.updateLocalStorage();
    }

    display() {
        const tbody = document.querySelector('.booklist');
        tbody.innerHTML = '';
        let index = 0;
        this.bookList.forEach((element) => {
            const currentRow = document.createElement('tr');
            const currentTitle = element.title;
            const currentAuthor = element.author;
            currentRow.innerHTML = `<div>"${currentTitle}"&nbsp;&nbsp<span>by</span>&nbsp;&nbsp ${currentAuthor}</div> <div><button class='removeButton' value="${index}">Remove</button></div> `;
            tbody.appendChild(currentRow);
            index += 1;
        });
    }
}
export default Books;