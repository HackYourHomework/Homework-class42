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

function createBookList(books) {

  const mainDiv = document.getElementById('bookList');
  const myUl = document.createElement('ul');
  mainDiv.appendChild(myUl);
  books.forEach((book) => {
    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    const myLi = document.createElement('li');
    myUl.appendChild(myLi);
    myLi.appendChild(p);

    const imageTitles = book.title.toLowerCase().split(' ').join('_');
    const img = document.createElement('img');
    img.src = `assets/${imageTitles}.jpg`;
    myLi.appendChild(img);

    book.alreadyRead === true ? myLi.style.backgroundColor = 'green' : myLi.style.backgroundColor = 'red'
  });
//

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
