import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import { useCart } from "../context/CartContext";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  const { addToCart } = useCart();

  if (!book) {
    return (
      <section className="book-details">
        <h1>Book Not Found</h1>
        <p>The book you're looking for doesn't exist.</p>

        <Link to="/books">← Back to Books</Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart(book);
    alert(`${book.title} has been added to your cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${book.title}`);
  };

  return (
    <section className="book-details">
      <img
        src={book.image}
        alt={book.title}
        className="book-details-image"
      />

      <div className="book-details-content">
        <p className="book-category">{book.category}</p>

        <h1>{book.title}</h1>

        <p className="book-author">by {book.author}</p>

        <p className="book-description">{book.description}</p>

        <h2>₹{book.price}</h2>

        <div className="book-actions">
          <button
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>

          <button
            className="buy-button"
            onClick={handleBuyNow}
          >
            ⚡ Buy Now
          </button>
        </div>

        <br />

        <Link to="/books">← Back to Books</Link>
      </div>
    </section>
  );
}

export default BookDetails;