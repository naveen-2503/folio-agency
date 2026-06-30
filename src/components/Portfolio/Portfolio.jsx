import "./Portfolio.css";
import logo from "../../assets/images/logo.png";
import portfolioLine1 from "../../assets/images/portfolio-line-1.svg";
import portfolioLine2 from "../../assets/images/portfolio-line-2.svg";
// // import portfolioLine from "../../assets/images/portfolio-line.svg";
// import personIllustration from "../../assets/images/person-illustration.png";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { portfolioItems } from "../../data/portfolioData";

const Portfolio = () => {
  const featured = portfolioItems.find((item) => item.variant === "featured");
  const bentoItems = portfolioItems.filter((item) => item.variant === "bento");

  return (
    <section className="portfolio">

      {/* ── Decorative elements ── */}
       <img src={portfolioLine1} alt="" className="portfolio-line-1" />

      <div className="portfolio-inner">

        {/* ── Header ── */}
        <div className="portfolio-header">
          <div className="portfolio-header-text">
            <div className="portfolio-tag-row">
              <img src={logo} alt="" className="portfolio-mini-logo" />
              <span className="portfolio-tag-number">04.</span>
              <span className="portfolio-tag-label">Famous Projects</span>
            </div>
            <h2 className="portfolio-title">Our Partnerships</h2>
            <p className="portfolio-desc">
              Agency is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>
          </div>
          <button className="portfolio-contact-btn">Contact Us</button>
        </div>

        {/* ── Featured card ── */}
        {featured && (
          <div className="portfolio-featured-wrap">
            <PortfolioCard item={featured} />
            <img src={portfolioLine2} alt="" className="portfolio-line-2" /> 
          </div>
          
        )}

        {/* ── Bento staggered grid ── */}
        <div className="portfolio-bento-grid">
          {bentoItems.map((item, index) => (
            <div className={`portfolio-bento-item bento-pos-${index + 1}`} key={item.id}>
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;