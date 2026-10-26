import BookCard from "./BookCard";
import books from "../data/books";

function BookGrid({ books: booksToShow = books }) {
  return (
    <div className="book-grid">
      {booksToShow.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;