import { Link } from "react-router-dom";

function BookCard({ book }) {
  const fullStars = Math.floor(book.rating);
  const emptyStars = 5 - fullStars;

  return (
    <Link to={`/books/${book.id}`} className="book-card-link">
      <div className="book-card">
        <div className="book-image-wrapper">
          <img
            src={book.image}
            alt={book.title}
            className="book-card-image"
          />
        </div>

        <div className="book-card-content">
          <h3>{book.title}</h3>

          <p className="book-author">by {book.author}</p>

          <p className="book-category">{book.category}</p>

          <div className="book-rating">
            <span className="stars">
              {"★".repeat(fullStars)}
              {"☆".repeat(emptyStars)}
            </span>
            <span className="rating-number">{book.rating}</span>
          </div>

          <div className="book-stats">
            <span>{book.reviews} reviews</span>
            <span>👁 {book.views.toLocaleString()}</span>
          </div>

          <p className="book-price">₹{book.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
