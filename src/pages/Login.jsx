import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Please enter your email.";
    }

    if (!password) {
      newErrors.password = "Please enter your password.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const savedUserData = localStorage.getItem("booknestUser");

    if (!savedUserData) {
      setErrors({
        general:
          "No account found. Please create an account first.",
      });
      return;
    }

    const savedUser = JSON.parse(savedUserData);

    if (
      email.trim().toLowerCase() !==
        savedUser.email.toLowerCase() ||
      password !== savedUser.password
    ) {
      setErrors({
        general:
          "Incorrect email or password. Please try again.",
      });
      return;
    }

    /* =========================
       LOGIN SUCCESS
    ========================= */

    localStorage.setItem(
      "booknestLoggedIn",
      "true"
    );

    /* =========================
       REMEMBER ME
    ========================= */

    if (rememberMe) {
      localStorage.setItem(
        "booknestRememberMe",
        "true"
      );
    } else {
      localStorage.removeItem(
        "booknestRememberMe"
      );
    }

    /* =========================
       TELL NAVBAR LOGIN HAPPENED
    ========================= */

    window.dispatchEvent(
      new Event("booknestAuthChange")
    );

    /* =========================
       GO TO PROFILE
    ========================= */

    navigate("/profile");
  };

  return (
    <section className="login-page">
      <div className="login-card">

        {/* =========================
            HEADER
        ========================= */}

        <div className="auth-header">

          <span className="auth-icon">
            📚
          </span>

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to your SPELLBOUND account.
          </p>

        </div>

        {/* =========================
            GENERAL ERROR
        ========================= */}

        {errors.general && (
          <div className="form-error general-error">
            {errors.general}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
        >

          {/* =========================
              EMAIL
          ========================= */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);

                setErrors((previous) => ({
                  ...previous,
                  email: "",
                  general: "",
                }));
              }}
              className={
                errors.email
                  ? "input-error"
                  : ""
              }
              autoComplete="email"
            />

            {errors.email && (
              <span className="field-error">
                {errors.email}
              </span>
            )}

          </div>

          {/* =========================
              PASSWORD
          ========================= */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  setErrors((previous) => ({
                    ...previous,
                    password: "",
                    general: "",
                  }));
                }}
                className={
                  errors.password
                    ? "input-error"
                    : ""
                }
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (previous) => !previous
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword
                  ? "🙈"
                  : "👁️"}
              </button>

            </div>

            {errors.password && (
              <span className="field-error">
                {errors.password}
              </span>
            )}

          </div>

          {/* =========================
              REMEMBER + FORGOT
          ========================= */}

          <div className="login-options">

            <label className="remember-me">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(
                    event.target.checked
                  )
                }
              />

              <span>
                Remember me
              </span>

            </label>

            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot password?
            </Link>

          </div>

          {/* =========================
              LOGIN BUTTON
          ========================= */}

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        {/* =========================
            REGISTER
        ========================= */}

        <div className="login-register">

          <p>
            Don't have an account?
          </p>

          <Link to="/register">
            Create an Account
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Login;
