import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "WELCOME TO BOOKNEST",
      title: "Discover Your Next Favorite Book",
      description:
        "Explore amazing stories, knowledge, ideas, and inspiration from our growing collection.",
      button: "Explore Books",
      link: "/books",
    },
    {
      subtitle: "SPECIAL OFFER",
      title: "Buy 2 Get 1 FREE",
      description:
        "Pick your favorite books and enjoy an exciting offer on your next order.",
      button: "View Offers",
      link: "/offers",
    },
    {
      subtitle: "NEW COLLECTION",
      title: "Fresh Stories Have Arrived",
      description:
        "Discover our newest collection of books and find something you'll love.",
      button: "Explore New Collection",
      link: "/books",
    },
  ];

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1
          ? 0
          : previousSlide + 1
      );
    }, 6000);

    return () => clearInterval(sliderTimer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="hero-slider">
      <div className="hero-slide">
        <div className="hero-slide-content">
          <p className="hero-subtitle">{slide.subtitle}</p>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <Link to={slide.link} className="hero-button">
            {slide.button}
          </Link>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;