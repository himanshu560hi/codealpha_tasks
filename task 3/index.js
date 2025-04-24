let books = [];

document.getElementById('addBtn').addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const category = document.getElementById('category').value.trim();
  if (title && author && category) {
    books.push({ title, author, category, borrowed: false, history: [] });
    clearInputs();
    displayBooks();
  }
});

document.getElementById('search').addEventListener('input', displayBooks);

function clearInputs() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('category').value = '';
}

function displayBooks() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const bookContainer = document.getElementById('books');
  bookContainer.innerHTML = '';

  books
    .filter(book => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm))
    .forEach((book, index) => {
      const card = document.createElement('div');
      card.className = 'book-card';

      card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Category:</strong> ${book.category}</p>
        <p><strong>Status:</strong> ${book.borrowed ? 'Borrowed' : 'Available'}</p>
        <button class="borrow-btn" onclick="toggleBorrow(${index})">
          ${book.borrowed ? 'Return' : 'Borrow'}
        </button>
      `;
      bookContainer.appendChild(card);
    });
}

function toggleBorrow(index) {
  books[index].borrowed = !books[index].borrowed;
  books[index].history.push(books[index].borrowed ? 'Borrowed' : 'Returned');
  displayBooks();
}

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent =
    document.body.classList.contains('dark') ? '☀️' : '🌙';
});
