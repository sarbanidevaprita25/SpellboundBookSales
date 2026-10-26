import { Link } from "react-router-dom";

function Offers() {
  return (
    <section className="offers-page">
      <div className="offers-header">
        <p className="offers-subtitle">BOOKNEST SPECIALS</p>

        <h1>Offers & Deals</h1>

        <p>
          Discover exciting offers and save more on your favorite books.
        </p>
      </div>

      <div className="offers-grid">
        <div className="offer-card">
          <div className="offer-icon">🎁</div>

          <p className="offer-label">LIMITED TIME OFFER</p>

          <h2>Buy 2 Get 1 FREE</h2>

          <p>
            Choose any 3 eligible books and get the lowest-priced book
            absolutely free.
          </p>

          <Link to="/books" className="offer-button">
            Shop Books
          </Link>
        </div>

        <div className="offer-card">
          <div className="offer-icon">✨</div>

          <p className="offer-label">NEW COLLECTION</p>

          <h2>Fresh Arrivals</h2>

          <p>
            Explore our latest collection of books and discover your next
            favorite read.
          </p>

          <Link to="/books" className="offer-button">
            Explore Collection
          </Link>
        </div>

        <div className="offer-card">
          <div className="offer-icon">📚</div>

          <p className="offer-label">BOOKNEST PICK</p>

          <h2>Most Recommended</h2>

          <p>
            Check out books loved by readers across fiction, self-help,
            technology, finance, and more.
          </p>

          <Link to="/books" className="offer-button">
            View Recommendations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Offers;