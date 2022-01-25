// ''''''''''''''''''''Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// '''''''''''''''''''''UI Constructor
function UI() {}

// Add book to List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  
  // Create tr
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {

  // Create div
  const div = document.createElement('div');

  // Add classes 
  div.className = `alert ${className}`;

  // Add text
  div.appendChild(document.createTextNode(message));

  // Get parent 
  const container = document.querySelector('.container');

  // Get form
  const form = document.querySelector('#book-form');

  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {

  const ui = new UI();

  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();

    // Delete book from LS
    Store.prototype.deleteBookFromLS(target.parentElement.previousElementSibling.textContent);

    // Show message
    ui.showAlert('Book Removed', 'success')
  }
}

// Clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// '''''''''''''''''Store Constructor
function Store() {}

// Get books from LS
Store.prototype.getBooks = function() {
  let books;
  if(localStorage.getItem('books') === null){
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

// Add books to LS
Store.prototype.addBook = function(book) {
  const books = Store.prototype.getBooks();

  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
}

// Display books
Store.prototype.displayBooks = function() {

  // Instantiate UI
  const ui = new UI();

  // Get all books
  let books = Store.prototype.getBooks();

  // Create row for each book in LS
  books.forEach(function(book) {
    ui.addBookToList(book);
  });
}

// Delete book from LS
Store.prototype.deleteBookFromLS = function(isbn) {
  let books = JSON.parse(localStorage.getItem('books'));
  
  books.forEach(function(book, index) {
    if(isbn === book.isbn) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
}

// Event Listeners'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// DOM Event
document.addEventListener('DOMContentLoaded', Store.prototype.displayBooks());

// Add book Event
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    
    //Error alert
    ui.showAlert('Please fill in all fields', 'error');

  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add book to LS
    Store.prototype.addBook(book);

    // Show success
    ui.showAlert('Book added', 'success');
  
    // Clear fields
    ui.clearFields();
  }


  e.preventDefault();
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

  console.log(e.target); 

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  e.preventDefault();
})