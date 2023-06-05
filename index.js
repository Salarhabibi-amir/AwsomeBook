/* --Navigation Bar--*/
import hideOrShow from './modules/navbar.js';
import Books from './modules/Books.js';
import { DateTime } from './modules/luxon.js';

/* --Navigation Bar--*/
const navAnchors = document.querySelectorAll('.nav-anchors');
navAnchors.forEach((element) => {
  element.addEventListener('click', hideOrShow);
});
/* --Navigation Bar--*/

// Date and time
const dateTime = document.querySelector('.date-time');
const dt = DateTime.now();
dateTime.innerHTML = `<span>Date: </span>${dt.year}\\ ${dt.month} \\ ${dt.day}&nbsp;&nbsp;&nbsp; <span>Time: </span> ${dt.hour}  :  ${dt.minute} : ${dt.second}`;
// dateTime.innerHTML = dt;
/* --Book Class--*/
const booksCollection = new Books();
booksCollection();