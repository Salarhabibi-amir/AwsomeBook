/* --Navigation Bar--*/
import hideOrShow from './modules/navbar.js';
import Books from './modules/Books.js';
import DateTime from './modules/luxon.js';

/* --Navigation Bar--*/
const navAnchors = document.querySelectorAll('.nav-anchors');
navAnchors.forEach((element) => {
    element.addEventListener('click', hideOrShow);
});
/* --Navigation Bar--*/

/* --Book Class--*/
const booksCollection = new Books();
booksCollection();