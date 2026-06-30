import "./About.css";
import logo from "../../assets/images/logo.png";
import aboutLine from "../../assets/images/about-line.svg";
import aboutImage from "../../assets/images/about-image.png";
import shapeTR from "../../assets/images/shape-tr.png";

const About = () => {
  return (
    <section className="about">

      {/* ── Decorative: top-right angled shape ── */}
      <img src={shapeTR} alt="" className="about-shape-bg" />

      {/* ── Decorative: bottom-right circle behind 28 ── */}
      <div className="about-blob-br"></div>

      <div className="about-inner">

        {/* ── ROW 1: logo + tag + arrows ── */}
        {/* ── ROW 1: logo + tag + arrows ── */}
<div className="about-row1">
  <img src={logo} alt="folio" className="about-logo" />

  <div className="about-tag-center">
    <span className="about-tag-number">01.</span>
    <span className="about-tag-label">Who We Are</span>
  </div>
  <img src={aboutLine} alt="" className="about-line" aria-hidden="true" />

  <div className="about-arrows">
    <button className="arrow-btn arrow-prev" aria-label="Previous">←</button>
    <button className="arrow-btn arrow-next" aria-label="Next">→</button>
    <span className="about-mobile-year">2020 <span style={{fontSize: '10px'}}>▾</span></span>
  </div>
</div>

{/* ── ROW 2: title ── */}
<div className="about-row2">
  <h2 className="about-title">
    We Make Designs that<br />
    Lead and Inpire.
  </h2>
</div>

        {/* ── ROW 3: timeline + image ── */}
        <div className="about-row3">

          {/* Vertical timeline */}
          <div className="about-timeline">
            <div className="tl-track">
              {["2017", "2018", "2019", "2020", "2021"].map((year) => (
                <div key={year} className={`tl-item ${year === "2020" ? "active" : ""}`}>
                  <span className="tl-year">{year}</span>
                  {year === "2020" && <span className="tl-dot"></span>}
                </div>
              ))}
            </div>
            {/* Horizontal line + dot from active year */}
            <div className="tl-h-line">
              <span className="tl-h-dot"></span>
            </div>
          </div>

          {/* Image card */}
          <div className="about-image-card">
            <img src={aboutImage} alt="Design illustration" />
          </div>

        </div>

        {/* ── ROW 4: desc + stat ── */}
        <div className="about-row4">
          <div className="about-desc">
            <div className="about-desc-accent"></div>
            <div className="about-desc-content">
              <p className="about-desc-title">
                A design team building a curated <br />
                marketplace for UI designers.
              </p>
              <p className="about-desc-text">
                4,404 curated design resources to energize your creative
                workflow. We're a growing family of 334,531 designers and
                makers from around the world.
              </p>
              <button className="about-btn">Contact Us</button>
            </div>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">28</span>
            <span className="about-stat-label">Biggest Branding</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;