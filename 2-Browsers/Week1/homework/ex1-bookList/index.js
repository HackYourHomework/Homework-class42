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
  document.getElementById('bookList').appendChild(ul);
  for (let i = 0; i < books.length; i++) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    ul.appendChild(li);
    li.appendChild(p);
    p.textContent =
      'Book : ' + books[i].title + '||\n Author : ' + books[i].author;
    if (books[i].alreadyRead) {
      p.style.color = 'green';
    } else {
      p.style.color = 'red';
    }
  }
  const img1 = document.createElement('img');
  img1.src = './assets/the_design_of_everyday_things.jpg';
  img1.alt = 'Book Photo 1';
  ul.children[0].appendChild(img1);

  const img2 = document.createElement('img');
  img2.src = './assets/the_most_human_human.jpg';
  img2.alt = 'Book Photo 2';
  ul.children[1].appendChild(img2);

  const img3 = document.createElement('img');
  img3.src = './assets/the_pragmatic_programmer.jpg';
  img3.alt = 'Book Photo 3';
  console.log(document.getElementById('bookList'));
  ul.children[2].appendChild(img3);
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
