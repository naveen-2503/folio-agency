import "./CaseStudyHero.css";
import caseStudyLine from "../../assets/images/casestudy-line.svg";
import caseStudyBgShape from "../../assets/images/casestudy-bg-shape.png";
import caseStudyBento from "../../assets/images/casestudy-bento.png";
import iconGlobal from "../../assets/images/icon-global.png";
import iconYears from "../../assets/images/icon-years.png";

const CaseStudyHero = () => {
  return (
    <section className="case-study">

      <div className="cs-inner">

        {/* ── Arrows ── */}
        <div className="cs-arrows">
          <button className="arrow-btn arrow-prev" aria-label="Previous">←</button>
          <button className="arrow-btn arrow-next" aria-label="Next">→</button>
        </div>

        <div className="cs-content-row">

          {/* ── Left: text content ── */}
          <div className="cs-left">
            <span className="cs-badge">Featured Product</span>

            <h1 className="cs-title">Bento.</h1>

            <p className="cs-tagline">
              Drag &amp; Drop 3D Visual<br />
              Design System.
            </p>

            <div className="cs-stats-row">
              <div className="cs-stat-item">
                <img src={iconGlobal} alt="" className="cs-stat-icon" />
                <span className="cs-stat-text">
                  Global Digital<br />Agency of Record
                </span>
              </div>

              <div className="cs-stat-item">
                <img src={iconYears} alt="" className="cs-stat-icon" />
                <span className="cs-stat-text">
                  5 Years of Digital<br />Marketing Excellence
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className="cs-right">
            <img src={caseStudyLine} alt="" className="cs-line" />
             <img src={caseStudyBgShape} alt="" className="cs-bg-shape" />
            <img src={caseStudyBento} alt="Bento case study illustration" className="cs-illustration" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudyHero