
import { useRef } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const authorTrackRef = useRef(null);

  const authors = [
    {
      name: "Paulo Coelho",
      book: "The Alchemist",
      image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
    },
    {
      name: "James Clear",
      book: "Atomic Habits",
      image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    },
    {
      name: "Morgan Housel",
      book: "The Psychology of Money",
      image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    },
    {
      name: "J.K. Rowling",
      book: "Harry Potter",
      image: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg",
    },
    {
      name: "Jane Austen",
      book: "Pride and Prejudice",
      image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    },
    {
      name: "J.R.R. Tolkien",
      book: "The Hobbit",
      image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
    },
  ];

  const scrollAuthors = (direction) => {
    if (!authorTrackRef.current) return;

    authorTrackRef.current.scrollBy({
      left: direction * authorTrackRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const footerGroups = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact Us"],
    },
    {
      title: "Policies",
      links: [
        "Privacy Policy",
        "Terms of Use",
        "Secure Shopping",
        "Copyright Policy",
      ],
    },
    {
      title: "Help",
      links: ["Payment", "Shipping", "Returns", "FAQ"],
    },
    {
      title: "Misc",
      links: ["Affiliate", "Sitemap"],
    },
  ];

  return (
    <footer className="spellbound-footer">
      {/* Featured Authors Slider */}
      <section className="authors-section">
        <div className="authors-heading-row">
          <div className="authors-heading">
            <span className="authors-eyebrow">MEET THE MINDS</span>
            <h2>Featured Authors</h2>
            <p>
              Discover the brilliant minds behind your favorite stories
              and ideas.
            </p>
          </div>

          <div className="authors-controls">
            <button
              type="button"
              className="author-arrow"
              onClick={() => scrollAuthors(-1)}
              aria-label="Previous authors"
            >
              &#8592;
            </button>
            <button
              type="button"
              className="author-arrow"
              onClick={() => scrollAuthors(1)}
              aria-label="Next authors"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="authors-slider" ref={authorTrackRef}>
          {authors.map((author) => (
            <article className="author-slide" key={author.name}>
              <div className="author-cover">
                <img
                  src={author.image}
                  alt={`${author.book} book cover`}
                  loading="lazy"
                />
              </div>
              <h3>{author.name}</h3>
              <p>{author.book}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">S</span>
            <span>SPELLBOUND</span>
          </Link>

          <p className="footer-brand-description">
            Find your next favorite story. Explore timeless classics,
            inspiring ideas, and new worlds — one book at a time.
          </p>

          <p className="footer-brand-note">
            A little world for every kind of reader.
          </p>
        </div>

        <div className="footer-link-groups">
          {footerGroups.map((group) => (
            <div className="footer-link-column" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((label) => (
                <a href="#" key={label}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-app-column">
          <h3>Download Our App</h3>
          <p>Take your reading list wherever you go.</p>

          <div className="footer-app-links">
            <a href="#" className="footer-app-button">
              <span className="app-button-icon">▶</span>
              <span>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>

            <a href="#" className="footer-app-button">
              <span className="app-button-icon">●</span>
              <span>
                <small>DOWNLOAD ON THE</small>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Social Links and Copyright */}
      <div className="footer-bottom">
        <div className="footer-social">
          <span>Follow us</span>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>

        <p className="footer-copyright">
          © 2026 SPELLBOUND. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
