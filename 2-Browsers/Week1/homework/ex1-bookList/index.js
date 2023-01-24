//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

const { doc } = require('prettier');

function createBookList(books) {
  const title = document.createElement('p');
  const img = document.createElement('img');
  const bookList = document.createElement('ul');
  for (const book of books) {
    const bookElement = document.createElement('li');
    bookElement.classLi = book.alreadyRead ? 'green' : 'red';
    title.textContent = `${book.title} - ${book.author};`;
    img.src = `./asserts/${book.title.split(' ').join('_')}.jpg`;
    img.alt = book.title;
    bookElement.appendChild(title);
    bookElement.appendChild(img);
    bookList.appendChild(bookElement);
  }
  return bookList;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
