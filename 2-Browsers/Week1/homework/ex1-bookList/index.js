
const bookList = document.querySelector('#bookList');
const assets = ['assets/the_design_of_everyday_things.jpg',
'assets/the_most_human_human.jpg',
'assets/the_pragmatic_programmer.jpg'];




function createBookList(books) {
  let i = 0;
  books.forEach(book => {
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const img = document.createElement('img');
    bookList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(p);
    p.appendChild(document.createTextNode(book.title + ' by ' + book.author));
    li.appendChild(img);
    img.setAttribute('src',assets[i]);
    img.setAttribute('alt','a book cover');
    i++;
    if(book.alreadyRead === true){
      p.style.color = "green"
    } else {
      p.style.color = "red"
    }
    
})
  
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
