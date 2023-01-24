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
  const ul = document.createElement('ul');

  for (const book of books) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    li.appendChild(p);

    const img = document.createElement('img');
    img.src = `./assets/${book.title.toLowerCase().replace(/ /g, '_')}.jpg`;
    img.alt = `Cover of ${book.title} by ${book.author}`;
    li.appendChild(img);

    if (book.alreadyRead === true) {
      li.style.color = 'green';
    } else {
      li.style.color = 'red';
    }

    ul.appendChild(li);
  }

  document.getElementById('bookList').appendChild(ul);
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
