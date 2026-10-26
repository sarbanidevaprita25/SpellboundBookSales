import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("booknestLoggedIn") === "true"
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(
        localStorage.getItem("booknestLoggedIn") === "true"
      );
    };

    // Login/logout in the same tab
    window.addEventListener("booknestAuthChange", checkLogin);

    // Login/logout from another tab
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener(
        "booknestAuthChange",
        checkLogin
      );

      window.removeEventListener(
        "storage",
        checkLogin
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("booknestLoggedIn");
    localStorage.removeItem("booknestRememberMe");

    setIsLoggedIn(false);

    window.dispatchEvent(
      new Event("booknestAuthChange")
    );

    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}

        <Link to="/" className="navbar-logo">
          SPELLBOUND
        </Link>

        {/* NAVIGATION */}

        <div className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/books">
            Books
          </Link>

          <Link
            to="/cart"
            className="cart-link"
          >
            🛒 Cart
          </Link>

          {!isLoggedIn ? (

            /* =========================
               LOGGED OUT
            ========================= */

            <Link
              to="/login"
              className="navbar-login"
            >
              Login
            </Link>

          ) : (

            /* =========================
               LOGGED IN
            ========================= */

            <div className="profile-menu">

              <button
                type="button"
                className="profile-icon-button"
                onClick={handleProfileClick}
                aria-label="Open profile"
              >
                👤
              </button>

              {/* HOVER DROPDOWN */}

              <div className="profile-dropdown">

                <Link to="/profile">
                  👤 Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                >
                  🚪 Logout
                </button>

              </div>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;