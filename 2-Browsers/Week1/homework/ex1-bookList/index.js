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

const bookList = document.querySelector('#bookList');
const assets = [
  'assets/the_design_of_everyday_things.jpg',
  'assets/the_most_human_human.jpg',
  'assets/the_pragmatic_programmer.jpg',
];

function createBookList(books) {
  let assetsIndex = 0;
  const ul = document.createElement('ul');
  books.forEach((book) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    ul.appendChild(li);
    li.appendChild(p);
    p.appendChild(document.createTextNode(book.title + ' by ' + book.author));
    li.appendChild(img);
    img.setAttribute('src', book.cover || assets[assetsIndex]);
    img.setAttribute('alt', 'a book cover');
    assetsIndex++;
    if (book.alreadyRead === true) {
      p.style.color = 'green';
    } else {
      p.style.color = 'red';
    }
  });
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      cover: 'assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      cover: 'assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      cover: 'assets/the_pragmatic_programmer.jpg',
    },
  ];

  bookList.appendChild(createBookList(myBooks));
}

window.addEventListener('load', main);
