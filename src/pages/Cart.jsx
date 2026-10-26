import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const deliveryCharge = cartTotal > 0 ? 0 : 0;
  const finalTotal = cartTotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <section className="cart-page empty-cart">
        <div className="empty-cart-box">
          <div className="empty-cart-icon">🛒</div>

          <h1>Your Cart is Empty</h1>

          <p>
            Looks like you haven't added any books to your cart yet.
          </p>

          <Link to="/books" className="continue-shopping-button">
            Browse Books
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-container">

        <div className="cart-main">
          <div className="cart-heading">
            <h1>Your Cart</h1>
            <p>
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}{" "}
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              ) === 1
                ? "book"
                : "books"}
            </p>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <h2>{item.title}</h2>

                  <p className="cart-item-author">
                    by {item.author}
                  </p>

                  <p className="cart-item-category">
                    {item.category}
                  </p>

                  <p className="cart-item-price">
                    ₹{item.price}
                  </p>

                  <div className="cart-item-actions">

                    <div className="quantity-control">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>
                </div>

                <div className="cart-item-total">
                  ₹{item.price * item.quantity}
                </div>

              </div>
            ))}
          </div>

          <Link to="/books" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>

        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-text">FREE</span>
          </div>

          <div className="coupon-section">
            <label>Have a coupon?</label>

            <div className="coupon-box">
              <input
                type="text"
                placeholder="Enter coupon code"
              />

              <button>Apply</button>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{finalTotal}</strong>
          </div>

          <button className="proceed-button">
            Proceed to Buy
          </button>

        </aside>

      </div>
    </section>
  );
}

export default Cart;