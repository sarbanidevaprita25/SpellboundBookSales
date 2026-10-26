import { useState } from "react";
import BookGrid from "../components/BookGrid";
import books from "../data/books";

function Books() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const search = searchTerm.toLowerCase();

    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.category.toLowerCase().includes(search)
    );
  });

  return (
    <section className="books-page">
      <div className="books-header">
        <h1>All Books</h1>

        <p>Explore our collection of books.</p>

        <input
          type="text"
          placeholder="Search books, authors, or categories..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="book-search"
        />
      </div>

      {filteredBooks.length > 0 ? (
        <BookGrid books={filteredBooks} />
      ) : (
        <div className="no-results">
          <h2>No books found</h2>
          <p>Try searching for another title, author, or category.</p>
        </div>
      )}
    </section>
  );
}

export default Books;