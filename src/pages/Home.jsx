import HeroSlider from "../components/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import BookGrid from "../components/BookGrid";

function Home() {
  return (
    <div className="home-page">
      <HeroSlider />

      <section className="featured-section-wrapper">
        <div className="featured-section">
          <SectionTitle
            title="Featured Books"
            subtitle="Explore some of our popular books."
          />

          <BookGrid />
        </div>
      </section>
    </div>
  );
}

export default Home;