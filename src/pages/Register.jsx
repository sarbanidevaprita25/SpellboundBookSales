import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [errors, setErrors] = useState({});

  /* =========================
     PASSWORD STRENGTH
  ========================= */

  const getPasswordStrength = () => {
    if (!password) return "";

    if (password.length < 6) {
      return "Weak";
    }

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    ) {
      return "Strong";
    }

    return "Medium";
  };

  const passwordStrength = getPasswordStrength();

  /* =========================
     FORM SUBMIT
  ========================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (phone.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email.";
    }

    if (password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!agreeTerms) {
      newErrors.terms =
        "Please accept the Terms & Conditions.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const existingUser = localStorage.getItem("booknestUser");

    if (existingUser) {
      alert(
        "An account already exists. Please login instead."
      );

      navigate("/login");
      return;
    }

    const user = {
      name: name.trim(),
      phone,
      email: email.trim().toLowerCase(),
      password,
      address: "",
      profileImage: "",
    };

    localStorage.setItem(
      "booknestUser",
      JSON.stringify(user)
    );

    /*
      IMPORTANT:
      Do NOT log the user in here.

      Registration → Login → Profile
    */

    localStorage.removeItem("booknestLoggedIn");

    alert(
      "Account created successfully! Please login to continue."
    );

    navigate("/login");
  };

  return (
    <section className="login-page">
      <div className="login-card register-card">

        {/* =========================
            HEADER
        ========================= */}

        <div className="auth-header">
          <span className="auth-icon">📚</span>

          <h1>Create Account</h1>

          <p>
            Join SELLBOUND and start your reading journey.
          </p>
        </div>

        {/* =========================
            FORM
        ========================= */}

        <form onSubmit={handleSubmit} noValidate>

          {/* FULL NAME */}

          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);

                setErrors((previous) => ({
                  ...previous,
                  name: "",
                }));
              }}
              className={errors.name ? "input-error" : ""}
              autoComplete="name"
            />

            {errors.name && (
              <span className="field-error">
                {errors.name}
              </span>
            )}
          </div>

          {/* PHONE */}

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Enter 10-digit phone number"
              value={phone}
              maxLength="10"
              onChange={(event) => {
                setPhone(
                  event.target.value.replace(/\D/g, "")
                );

                setErrors((previous) => ({
                  ...previous,
                  phone: "",
                }));
              }}
              className={errors.phone ? "input-error" : ""}
              autoComplete="tel"
            />

            {errors.phone && (
              <span className="field-error">
                {errors.phone}
              </span>
            )}
          </div>

          {/* EMAIL */}

          <div className="form-group">
            <label htmlFor="register-email">
              Email Address
            </label>

            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);

                setErrors((previous) => ({
                  ...previous,
                  email: "",
                }));
              }}
              className={errors.email ? "input-error" : ""}
              autoComplete="email"
            />

            {errors.email && (
              <span className="field-error">
                {errors.email}
              </span>
            )}
          </div>

          {/* PASSWORD */}

          <div className="form-group">
            <label htmlFor="register-password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  setErrors((previous) => ({
                    ...previous,
                    password: "",
                  }));
                }}
                className={
                  errors.password ? "input-error" : ""
                }
                autoComplete="new-password"
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
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

            {password && (
              <div
                className={`password-strength ${passwordStrength.toLowerCase()}`}
              >
                Password strength:{" "}
                <strong>{passwordStrength}</strong>
              </div>
            )}

            {errors.password && (
              <span className="field-error">
                {errors.password}
              </span>
            )}
          </div>

          {/* CONFIRM PASSWORD */}

          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <div className="password-wrapper">

              <input
                id="confirm-password"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(
                    event.target.value
                  );

                  setErrors((previous) => ({
                    ...previous,
                    confirmPassword: "",
                  }));
                }}
                className={
                  errors.confirmPassword
                    ? "input-error"
                    : ""
                }
                autoComplete="new-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    (previous) => !previous
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showConfirmPassword
                  ? "🙈"
                  : "👁️"}
              </button>

            </div>

            {errors.confirmPassword && (
              <span className="field-error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* TERMS */}

          <div className="terms-group">

            <label className="terms-label">

              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(event) => {
                  setAgreeTerms(
                    event.target.checked
                  );

                  setErrors((previous) => ({
                    ...previous,
                    terms: "",
                  }));
                }}
              />

              <span>
                I agree to the{" "}
                <Link to="/terms">
                  Terms & Conditions
                </Link>{" "}
                and Privacy Policy.
              </span>

            </label>

            {errors.terms && (
              <span className="field-error">
                {errors.terms}
              </span>
            )}

          </div>

          {/* CREATE ACCOUNT */}

          <button
            type="submit"
            className="login-button"
          >
            Create Account
          </button>

        </form>

        {/* =========================
            LOGIN LINK
        ========================= */}

        <div className="login-register">

          <p>
            Already have an account?
          </p>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Register;