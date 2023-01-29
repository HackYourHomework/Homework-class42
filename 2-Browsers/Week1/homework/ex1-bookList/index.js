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
  books.forEach((book) => {
    const li = document.createElement('li');
    li.style.marginTop = '2rem';
    ul.appendChild(li);

    const titleAndAuthor = document.createElement('p');
    book.alreadyRead
      ? (titleAndAuthor.style.color = 'green')
      : (titleAndAuthor.style.color = 'red');
    titleAndAuthor.textContent = book.title + ', ' + book.author;
    li.appendChild(titleAndAuthor);

    const imageOfBook = document.createElement('img');
    imageOfBook.src = book.cover;
    imageOfBook.alt = 'book-cover';
    li.appendChild(imageOfBook);
  });
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      cover: './assets/the_design_of_everyday_things.jpg',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      cover: './assets/the_most_human_human.jpg',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      cover: './assets/the_pragmatic_programmer.jpg',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
