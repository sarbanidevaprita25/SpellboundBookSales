import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("booknestUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [profileImage, setProfileImage] = useState(
    user?.profileImage || ""
  );

  /* =========================
     LOGIN PROTECTION
  ========================= */

  const isLoggedIn =
    localStorage.getItem("booknestLoggedIn") === "true";

  if (!isLoggedIn || !user) {
    navigate("/login");
    return null;
  }

  /* =========================
     PROFILE IMAGE
  ========================= */

  const handleProfileImage = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result;

      setProfileImage(image);

      const updatedUser = {
        ...user,
        profileImage: image,
      };

      setUser(updatedUser);

      localStorage.setItem(
        "booknestUser",
        JSON.stringify(updatedUser)
      );
    };

    reader.readAsDataURL(file);
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem("booknestLoggedIn");
    localStorage.removeItem("booknestRememberMe");

    // Tell Navbar that logout happened
    window.dispatchEvent(new Event("booknestAuthChange"));

    navigate("/");
  };

  return (
    <section className="profile-page">

      {/* =========================
          PROFILE HEADER
      ========================= */}

      <div className="profile-header">

        <div className="profile-picture-section">

          {profileImage ? (
            <img
              src={profileImage}
              alt={user.name}
              className="profile-picture"
            />
          ) : (
            <div className="profile-picture profile-placeholder">
              👤
            </div>
          )}

          <label
            htmlFor="profile-image"
            className="profile-photo-button"
          >
            📷 {profileImage ? "Change Photo" : "Add Photo"}
          </label>

          <input
            id="profile-image"
            type="file"
            accept="image/*"
            onChange={handleProfileImage}
            hidden
          />

        </div>

        <div className="profile-intro">

          <p className="profile-subtitle">
            SPELLBOUND ACCOUNT
          </p>

          <h1>Welcome, {user.name}</h1>

          <p>
            Manage your account, orders and preferences.
          </p>

        </div>

      </div>

      {/* =========================
          PERSONAL INFORMATION
      ========================= */}

      <div className="profile-section">

        <div className="profile-section-header">
          <h2>Personal Information</h2>
          <span>👤</span>
        </div>

        <div className="profile-info-grid">

          <div className="profile-info-item">
            <span>Name</span>
            <strong>{user.name}</strong>
          </div>

          <div className="profile-info-item">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="profile-info-item">
            <span>Phone</span>
            <strong>{user.phone}</strong>
          </div>

        </div>

      </div>

      {/* =========================
          ACCOUNT OPTIONS
      ========================= */}

      <div className="profile-options">

        <Link to="/orders" className="profile-option">
          <div className="profile-option-icon">
            📦
          </div>

          <div>
            <h3>My Orders</h3>
            <p>
              View your previous and current orders.
            </p>
          </div>

          <span className="profile-arrow">
            →
          </span>
        </Link>

        <Link
          to="/address"
          className="profile-option"
        >
          <div className="profile-option-icon">
            📍
          </div>

          <div>
            <h3>Saved Address</h3>
            <p>
              Manage your delivery addresses.
            </p>
          </div>

          <span className="profile-arrow">
            →
          </span>
        </Link>

        <Link
          to="/payment-methods"
          className="profile-option"
        >
          <div className="profile-option-icon">
            💳
          </div>

          <div>
            <h3>Payment Methods</h3>
            <p>
              Manage your preferred payment options.
            </p>
          </div>

          <span className="profile-arrow">
            →
          </span>
        </Link>

        <Link
          to="/coupons"
          className="profile-option"
        >
          <div className="profile-option-icon">
            🎟️
          </div>

          <div>
            <h3>Coupons & Offers</h3>
            <p>
              Check available discounts and offers.
            </p>
          </div>

          <span className="profile-arrow">
            →
          </span>
        </Link>

      </div>

      {/* =========================
          LOGOUT
      ========================= */}

      <div className="profile-logout-section">

        <button
          type="button"
          className="profile-logout-button"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </section>
  );
}

export default Profile;